<template>
  <section class="order-comfirm">
    <Theme :theme="theme" :goal="'order-confirm'"></Theme>
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
          <i class="iconfont icon-arrow-right"></i>
        </div>
        <!-- 无地址 -->
        <div class="address-without" v-if="!address">
            <p class="without-title">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-didian"></use>
              </svg>
              <span>添加收货地址</span>
            </p>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="content-order-number">
        <p class="title-time">{{OrderNo}}</p>
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
        <input class="leave-message" id="leave-message" name="leave-message" maxlength="50" rows="1" placeholder="给商家留言 (最多50字)">
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
          <i class="iconfont icon-dadaobiaozhun" v-if="selected == item.pay"></i>
          <i class="iconfont icon-weixuanze" v-else-if="selected != item.pay"></i>
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
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>
<script>
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import Instalments from './modal/instalments/instalments.vue'
import Http from '../../class/http.class.js'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'OrderConfirm',
  props: ['id', 'OrderNo'],
  components: {
    Theme,
    Modal,
    Instalments,
    ModalDialog
  },
  data () {
    return {
      theme: {
        title: '订单信息确认',
        goal: null,
        params: {
          id: this.id
        }
      },
      Title: {
        text: ''
      },
      phone: {},
      installments: [],
      selected: null,
      modal: false,
      installmentNum: 0,
      hasAddressDefault: true,
      icons: '#icon-dadaobiaozhun',
      dialogShow: false
    }
  },
  created () {
    this.theme.goal = this.$store.state.origin
    alert(this.theme.goal)
    Http.send({
      url: 'product',
      params: {
        id: this.id
      }
    }).success(data => {
      this.phone = data.Phone
      this.installments = data.CommodityInstallmentList
    }).fail((data) => {
      this.Title.text = data.message
      this.dialogShow = true
    })
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
      this.dialogShow = false
    },
    record (installmentNum) {
      this.selected = 3
      this.installmentNum = installmentNum
      this.modal = false
    },
    gotoPage (page) {
      this.saveOrigin2('order-confrim')
      this.$router.push({
        name: page,
        params: {
          OrderNo: this.phone.OrderNo
        }
      })
    },
    confrim () {
      if (!this.address) {
        this.Title.text = '请选择地址'
        this.dialogShow = true
        return
      }
      if (!this.selected) {
        this.Title.text = '请选择支付方式'
        this.dialogShow = true
        return
      }
      // alert(this.address)
      // alert(this.selected)
      // alert(this.installmentNum)
      Http.send({
        url: 'orderSubmit',
        params: {
          Orderno: this.phone.OrderNo,
          payType: this.selected,
          num: this.installmentNum
        }
      }).success((data) => {
        this.gotoPage('order-detail')
      }).fail((data) => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    ...mapMutations(['saveOrigin2'])
  },
  computed: {
    ...mapState(['address'])
  }
}
</script>
<style scoped lang="scss">
@import './order-confirm.scss';
</style>
