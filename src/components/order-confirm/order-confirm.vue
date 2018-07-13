<template>
  <section class="order-comfirm">
    <Theme :theme="theme"></Theme>
    <div class="confirm-content">
      <div class="content-address" @click="gotoPage('address-manage')">
        <div class="address-process">
          <img src="../../assets/images/process-bar.png">
        </div>
        <!-- 有地址 -->
        <div class="address-exist" v-if="address">
          <div class="exist-person-info">
            <p class="info-name-telphone">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-didian"></use>
              </svg>
              <span>{{address.ReseverName}} {{address.PhoneNo}}</span>
            </p>
            <p class="info-receipt-place">{{address.Address}}</p>
          </div>
          <i class="iconfont icon-08tishi"></i>
        </div>
        <!-- 无地址 -->
        <div class="address-without" v-if="!address">
            <p class="without-title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-didian"></use>
              </svg>
              <span>添加收货地址</span>
            </p>
          <i class="iconfont icon-08tishi"></i>
        </div>
      </div>
      <div class="content-order-number">
        <p class="title-time">{{phone.OrderNo}}</p>
      </div>
      <div class="content-detail">
        <div class="detail-img">
          <img :src="phone.Icon">
        </div>
        <div class="detail-content">
          <p class="content-title">{{phone.Title}}</p>
          <div class="content-price-number">
            <p class="content-price">￥{{phone.nowPrice}}</p>
            <p class="content-number">x1</p>
          </div>
        </div>
      </div>
      <!-- <div class="content-service">
        <div class="service-item">
          <p class="item-title">[服务]整机清洁</p>
          <p class="item-price">￥0.00</p>
        </div>
        <div class="service-item">
          <p class="pasting-item">[服务]贴膜服务</p>
          <p class="item-price">￥9.99</p>
        </div>
      </div> -->
      <div class="content-distribution">
        <p class="distribution-title">配送方式</p>
        <p class="distribution-express">顺风快递</p>
      </div>
      <div class="content-leave-message">
        <textarea class="leave-message" id="leave-message" name="leave-message" maxlength="50" rows="1" placeholder="给商家留言 (最多50字)"></textarea>
      </div>
      <div class="content-summary">
        <p>
          <span>共1件商品 合计</span>
          <span class="summary-price">￥{{phone.nowPrice}}</span>
        </p>
      </div>
      <div class="content-way">
        <div class="way-title">
          <span>支付方式</span>
        </div>
        <div class="way-item" v-for="(item, index) in phone.PaymentTypeArr" :key="index" @click="select(item.pay)">
          <div class="item-detail">
            <div class="detail-name">
              <svg class="icon" aria-hidden="true">
                <use :xlink:href = item.icon></use>
              </svg>
              <!-- <i class="iconfont" :class="'icon-' + item.icon"></i> -->
              <span>{{item.name}}</span>
            </div>
          </div>
          <i class="iconfont icon-dadaobiaozhun" :class="{'iconactive': selected == item.pay, 'iconactivefalse': selected != item.pay}"></i>
        </div>
      </div>
    </div>
    <div class="comfirm-submit">
      <p class="submit-total">
        <span>合计：</span>
        <span>￥{{phone.nowPrice}}</span>
      </p>
      <button class="submit-button" @click="confrim">提交订单</button>
    </div>
    <Modal v-show="modal">
      <Instalments :instalments="installments" @SELECT_INSTALMENT_EVENT="record" @CLOSE_MODAL_EVENT="closeModal"></Instalments>
    </Modal>
  </section>
</template>
<script>
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import Instalments from './modal/instalments/instalments.vue'
import Http from '../../class/http.class.js'
import { mapState } from 'vuex'
export default {
  name: 'OrderConfirm',
  components: {
    Theme,
    Modal,
    Instalments
  },
  data () {
    return {
      theme: {
        title: '订单信息确认',
        themeRight: false
      },
      selected: null,
      modal: false,
      installmentNum: 0,
      hasAddressDefault: true,
      icons: '#icon-dadaobiaozhun'
    }
  },
  methods: {
    select (pay) {
      if (pay === this.selected) {
        this.selected = null
        this.installmentNum = 0
        return
      }
      if (pay === 3) {
        this.modal = true
      } else {
        this.selected = pay
        this.installmentNum = 0
      }
    },
    closeModal () {
      this.modal = false
    },
    record (installmentNum) {
      this.selected = 3
      this.installmentNum = installmentNum
      this.modal = false
    },
    gotoPage (page) {
      this.$router.push({
        name: page,
        params: {
          origin: 'order-confrim',
          orderNum: this.phone.OrderNo
        }
      })
    },
    confrim () {
      if (this.selected && this.address) return
      console.log(this.phone.OrderNo)
      console.log(this.selected)
      console.log(this.installmentNum)
      Http.send({
        url: 'orderSubmit',
        params: {
          Orderno: this.phone.OrderNo,
          payType: this.selected,
          num: this.installmentNum
        }
      }).success((data) => {
        console.log(data)
        this.gotoPage('order-detail')
      })
    }
  },
  mounted () {
    console.log(this.phone)
  },
  computed: {
    ...mapState(['phone', 'address', 'installments'])
  }
}
</script>
<style scoped lang="scss">
@import './order-confirm.scss';
</style>
