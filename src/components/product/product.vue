<template>
  <!-- s 产品详情 -->
  <section class="product">
    <Theme :theme="theme"></Theme>
    <nav class="product-nav">
      <div class="nav-item" :class="{active: rollSite == 'summary'}" @click="gotoRollSite('summary')">
        <a href="#summary">商品</a>
      </div>
      <div class="nav-item" :class="{active: rollSite == 'quality'}" @click="gotoRollSite('quality')">
        <a href="#quality">质检</a>
      </div>
      <div class="nav-item" :class="{active: rollSite == 'sample'}" @click="gotoRollSite('sample')">
        <a href="#sample">实拍</a>
      </div>
    </nav>
    <Summary id="summary" :summary="summary" :banner="banner" @OPEN_MODAL_EVENT="openModal"></Summary>
    <Quality id="quality" :quality="quality"></Quality>
    <Sample id="sample" :sample="sample" @OPEN_MODAL_EVENT="openModal"></Sample>
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
      <component v-show="modal" :is="component" :parameter="parameter" :paymentMethod="paymentMethod" :buy="buy" @CLOSE_MODAL_EVENT="closeModal"></component>
    </Modal>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
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
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
export default {
  name: 'Product',
  props: ['id'],
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
    Buy,
    ModalDialog
  },
  data () {
    return {
      theme: {
        title: null,
        goal: 'mall'
      },
      Title: {
        text: ''
      },
      animationShow: false,
      component: null,
      modal: false,
      summary: {},
      banner: [],
      sample: [],
      quality: {},
      parameter: [],
      paymentMethod: {},
      buy: {},
      rollSite: 'summary',
      params: {},
      dialogShow: false
    }
  },
  created () {
    Http.send({
      url: 'product',
      params: {
        id: this.id
      }
    }).success((data) => {
      setPaymentTypeArr()
      setPaymentTypePartArr()
      this.summary = data.Phone
      this.theme.title = data.Phone.Title
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
      function setPaymentTypeArr () {
        let type = [
          {
            icon: '#icon-zhifubao',
            name: '支付宝',
            pay: 2
          },
          {
            icon: '#icon-weixin',
            name: '微信',
            pay: 1
          },
          {
            icon: '',
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
            icon: '#icon-zhifubao',
            name: '支付宝',
            pay: 2
          },
          {
            icon: '#icon-weixin',
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
    }).fail(data => {
      this.Title.text = data.message
      this.dialogShow = true
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
      this.dialogShow = false
    },
    gotoRollSite (site) {
      this.rollSite = site
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./product.scss";
</style>
