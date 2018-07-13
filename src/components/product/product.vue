<template>
  <!-- s 产品详情 -->
  <section class="product">
    <Theme :theme="theme"></Theme>
    <nav class="product-nav">
      <div class="nav-item">
        <a href="">商品</a>
      </div>
      <div class="nav-item">
        <a href="">质检</a>
      </div>
      <div class="nav-item">
        <a href="">实拍</a>
      </div>
    </nav>
    <Summary :summary="summary" :banner="banner" @OPEN_MODAL_EVENT="openModal"></Summary>
    <Quality :quality="quality"></Quality>
    <Sample :sample="sample" @OPEN_MODAL_EVENT="openModal"></Sample>
    <Guidance></Guidance>
    <footer class="product-order">
      <div class="order-content">
        <div class="content-sign">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-kefu"></use>
          </svg>
          <p>客服</p>
        </div>
        <div class="content-price">
          <p>￥</p>
          <p>{{summary.nowPrice}}</p>
        </div>
      </div>
      <button class="order-btn" @click="openModal('Buy')">立即购买</button>
    </footer>
    <Modal v-show="modal">
      <component :is="component" :parameter="parameter" :paymentMethod="paymentMethod" :buy="buy" @CLOSE_MODAL_EVENT="closeModal"></component>
    </Modal>
  </section>
  <!-- e 产品详情 -->
</template>

<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import Summary from './summary/summary.vue'
import Quality from './quality/quality.vue'
import Sample from './sample/sample.vue'
import Guidance from './guidance/guidance.vue'
import Modal from '../common/modal/modal.vue'
import Parameter from './modal/parameter/parameter.vue'
import Share from './modal/share/share.vue'
import PaymentMethod from './modal/payment-method/payment-method.vue'
import Buy from './modal/buy/buy.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'Product',
  props: ['id', 'title'],
  components: {
    Theme,
    Summary,
    Quality,
    Sample,
    Guidance,
    Modal,
    Parameter,
    Share,
    PaymentMethod,
    Buy
  },
  data () {
    return {
      theme: {
        title: this.title,
        themeRight: true
      },
      component: null,
      modal: false,
      summary: {},
      banner: [],
      sample: [],
      quality: {},
      parameter: [],
      paymentMethod: {},
      buy: {}
    }
  },
  created () {
    Http.send({
      url: 'product',
      params: {
        id: this.id
      }
    }).success((data) => {
      console.log(data)
      setPaymentTypeArr()
      setPaymentTypePartArr()
      this.summary = data.Phone
      this.sample = data.AttachmentList.filter((item) => {
        if (item.ArchiveType === '2') return item
      })
      this.banner = data.AttachmentList.filter((item) => {
        if (item.ArchiveType === '1') return item
      })
      this.quality = data.PhoneTestInfo
      this.parameter = data.Phone.ParamList
      this.paymentMethod = {
        list: data.CommodityInstallmentList,
        methods: data.Phone.PaymentTypePartArr
      }
      this.buy = data.Phone
      this.saveInstallments(data.CommodityInstallmentList)
      function setPaymentTypeArr () {
        let type = [
          {
            icon: 'dacong',
            name: '支付宝',
            pay: 2
          },
          {
            icon: 'dacong',
            name: '微信',
            pay: 1
          },
          {
            icon: 'dacong',
            name: '大师分期',
            pay: 3
          }
        ]
        let allowArr = data.Phone.PaymentType.toString(2).split('').reverse()
        let content = []
        allowArr.forEach((item, index) => {
          if (item * 1) content.push(type[index])
        })
        data.Phone.PaymentTypeArr = content
      }
      function setPaymentTypePartArr () {
        let type = [
          {
            icon: 'dacong',
            name: '支付宝',
            pay: 2
          },
          {
            icon: 'dacong',
            name: '微信',
            pay: 1
          }
        ]
        let allowArr = data.Phone.PaymentType.toString(2).split('').reverse()
        let content = []
        allowArr.forEach((item, index) => {
          if (item * 1 && type[index]) content.push(type[index])
        })
        data.Phone.PaymentTypePartArr = content
      }
    })
  },
  methods: {
    openModal (component) {
      let content = {
        Parameter,
        Share,
        PaymentMethod,
        Buy
      }
      this.modal = true
      this.component = content[component]
    },
    closeModal () {
      this.modal = false
    },
    ...mapMutations(['saveInstallments'])
  }
}
</script>

<style lang="sass" scoped>
@import "./product.scss";
</style>
