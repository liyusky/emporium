<template>
  <!-- s 产品详情 -->
  <section class="product" id="product">
    <Theme :theme="theme"></Theme>
    <nav class="product-nav">
      <div class="nav-content">
        <div class="nav-item" id="summary-btn" @click="scroll('summary', 0)">
          <span>商品</span>
        </div>
        <div class="nav-item" id="quality-btn" @click="scroll('quality', 1)">
          <span>质检</span>
        </div>
        <div class="nav-item" id="sample-btn" @click="scroll('sample', 2)">
          <span>实拍</span>
        </div>
      </div>
      <div class="nav-scroll">
        <div class="scroll" id="scroll"></div>
      </div>
    </nav>
    <Summary id="summary" ref="summary" :summary="summary" :banner="banner" @OPEN_MODAL_EVENT="openModal"></Summary>
    <Quality id="quality" ref="quality" :quality="quality"></Quality>
    <Sample id="sample" ref="sample" :sample="sample" :link="shareLink" @OPEN_MODAL_EVENT="openModal"></Sample>
    <Guidance></Guidance>
    <footer class="product-order">
      <div class="order-content">
        <div class="content-sign" @click="chatQQ">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qqkefu"></use>
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
        title: null
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
      shareLink: null,
      dialogShow: false,
      currentTop: 0
    }
  },
  created () {
    this.shareLink = window.location.href
    Http.send({
      url: 'product',
      data: {
        id: this.id
      }
    }).success(data => {
      setPaymentTypeArr()
      setPaymentTypePartArr()
      setGuaranteeArr()
      this.summary = data.Phone
      this.theme.title = data.Phone.Title
      this.sample = data.AttachmentList.filter(item => {
        if (item.ArchiveType === '2') return item
      })
      this.banner = data.AttachmentList.filter(item => {
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
      function setGuaranteeArr () {
        let type = ['原装正品', '一年保修', '七天包退', '官方自营']
        let allowArr = data.Phone.Guarantee.toString(2).split('')
        let content = []
        allowArr.forEach((item, index) => {
          if (item * 1) content.push(type[index])
        })
        data.Phone.Guarantee = content.join('/')
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
    scroll (site, index) {
      if (this.currentTop === (document.documentElement.scrollTop || document.body.scrollTop) && this.rollSite === site) return
      let offset = document.getElementsByClassName('nav-item')[index].offsetLeft
      document.getElementById('scroll').style.left = offset + 'px'
      this.rollSite = site
      let goalTop = document.getElementById(site).offsetTop - document.getElementById('summary').offsetTop
      this.currentTop = document.documentElement.scrollTop || document.body.scrollTop
      let direction = 1
      let speed = 10
      let animation = setInterval(() => {
        if (Math.abs(this.currentTop - goalTop) <= 5) {
          clearInterval(animation)
          this.currentTop = goalTop
        } else {
          if (goalTop < this.currentTop) {
            direction = -1
          } else if (goalTop > this.currentTop) {
            direction = 1
          }
          this.currentTop += direction * speed
        }
        document.body.scrollTop = this.currentTop
        document.documentElement.scrollTop = this.currentTop
      }, 3)
    },
    chatQQ () {
      try {
        window.webkit.messageHandlers.popQQ.postMessage(JSON.stringify('727011147'))
      } catch (error) {
        window.location.href = 'mqqwpa://im/chat?chat_type=wpa&uin=727011147&version=3&src_type=web&web_src=oicqzone.com'
      }
    }
  }
}

</script>

<style lang="sass" scoped>
@import "./product.scss";
</style>
