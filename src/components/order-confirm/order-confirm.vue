<template>
  <section class="order-comfirm">
    <Theme :theme="theme"></Theme>
    <div class="confirm-content">
      <div class="content-address" @click="gotoPage('address-manage')">
        <div class="address-process">
          <img src="https://api.vtrois.com/image/750x7/e0e1e3">
        </div>
        <!-- 有地址 -->
        <div class="address-exist" v-show="hasAddressDefault">
          <div class="exist-person-info">
            <p class="info-name-telphone">
              <i class="iconfont icon-suan"></i>
              <span>李虎 1555753525</span>
            </p>
            <p class="info-receipt-place">安徽省 合肥市 高新区 创新产业园2期</p>
          </div>
          <i class="iconfont icon-dacong"></i>
        </div>
        <!-- 无地址 -->
        <div class="address-without" v-show="!hasAddressDefault">
            <p class="without-title">
              <i class="iconfont icon-suan"></i>
              <span>添加收货地址</span>
            </p>
          <i class="iconfont icon-dacong"></i>
        </div>
      </div>
      <div class="content-order-number">
        <p class="title-time">产品详情</p>
      </div>
      <div class="content-detail">
        <div class="detail-img">
          <img src="">
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
        <div class="way-item" v-for="(item, index) in phone.PaymentTypeArr" :key="index" @click="select(item.name)">
          <div class="item-detail">
            <div class="detail-name">
              <i class="iconfont" :class="'icon-' + item.icon"></i>
              <span>{{item.name}}</span>
            </div>
          </div>
          <i class="iconfont" :class="{'icon-dacong': selected == item.name, 'icon-dacong': selected != item.name}"></i>
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
      <Instalments :instalments="phone" @SELECT_INSTALMENT_EVENT="record" @CLOSE_MODAL_EVENT="closeModal"></Instalments>
    </Modal>
  </section>
</template>
<script>
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import Instalments from './modal/instalments/instalments.vue'
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
        title: '订单信息确认'
      },
      selected: null,
      modal: false,
      instalment: null,
      hasAddressDefault: true,
      phone: {}
    }
  },
  mounted () {
    this.phone = JSON.parse(this.$route.params.phone)
  },
  methods: {
    select (name) {
      if (name === this.selected) {
        this.selected = null
        return
      }
      if (name === '大师分期') {
        this.modal = true
      } else {
        this.selected = name
      }
    },
    closeModal () {
      this.modal = false
    },
    record (instalment) {
      this.selected = '大师分期'
      this.instalment = instalment
      this.modal = false
    },
    confrim () {},
    gotoPage (page) {
      this.$router.push({
        name: page,
        params: {
          origin: 'order-confrim'
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import './order-confirm.scss';
</style>
