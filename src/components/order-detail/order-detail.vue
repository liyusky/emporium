<template>
  <section class="order-detail">
    <Theme :theme="theme"></Theme>
    <section class="order-detail-content">
      <div class="content-order-information">
        <div class="information-person">
          <div class="person-number-status">
            <p class="person-number">{{orderDetail.OrderNo}}</p>
            <p class="person-status">{{statusName}}</p>
          </div>
          <div class="person-detail">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-didian"></use>
            </svg>
            <div class="detail-name-address" v-if="!orderDetail.ReciverAddress">
              <h3 class="detail-name">未填写地址</h3>
            </div>
            <div class="detail-name-address" v-if="orderDetail.ReciverAddress">
              <h3 class="detail-name">{{orderDetail.ReciverName}} {{orderDetail.ReciverPhone}}</h3>
              <p class="detail-address">{{orderDetail.ReciverAddress}}</p>
            </div>
          </div>
        </div>
        <div class="information-phone" @click="showProduct">
          <div class="phone-detail">
            <div class="detail-img">
              <img :src="orderDetail.Icon">
            </div>
            <div class="detail-content">
              <h3 class="content-title">{{orderDetail.Title}}</h3>
              <div class="content-price-number">
                <p class="content-price">￥{{orderDetail.CommodityPrice}}</p>
                <p class="content-number">x1</p>
              </div>
            </div>
          </div>
          <ul class="phone-list">
            <li class="list-item">
              <p class="item-title">商品总价</p>
              <p class="item-value">￥{{parseFloat(orderDetail.CommodityPrice * orderDetail.rownum).toFixed(2)}}</p>
            </li>
            <li class="list-item">
              <p class="item-title">运费</p>
              <p class="item-value">￥{{orderDetail.DeliverPrice}}</p>
            </li>
            <li class="list-item">
              <p class="item-title">支付方式</p>
              <p class="item-value">{{orderDetail.PayType ? orderDetail.PayType : '未选择'}}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="detail-button">
      <div class="button-item">
        <button class="item-cancel" v-if="judgeCancel()" @click="cancel">
          <div>取消订单</div>
        </button>
        <button class="item-pay" v-if="judgePay()" @click="pay">
          <div>去支付</div>
        </button>
        <button class="item-confrim" v-if="judgeConfrim()" @click="confrim">
          <div>确认收货</div>
        </button>
      </div>
    </footer>
    <ModalReminder v-show="reminderShow" @CLOSE_MODAL_EVENT = "closeModal" @SENF_REQUEST_EVENT="sendRequest" :Title="Title"></ModalReminder>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>

  </section>
</template>
<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import ModalReminder from '@/components/common/alert-modal/modal-reminder/modal-reminder.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import { mapMutations } from 'vuex'
export default {
  // 订单参数
  data () {
    return {
      theme: {
        title: '订单详情',
        goal: null,
        params: {}
      },
      modal: true,
      Title: {
        text: ''
      },
      orderDetail: {},
      status: new Map([
        [0, {
          statusTitle: '待提交'
        }],
        [1, {
          statusTitle: '待付款'
        }],
        [2, {
          statusTitle: '等待发货'
        }],
        [3, {
          statusTitle: '已发货'
        }],
        [4, {
          statusTitle: '已收货'
        }],
        [8, {
          statusTitle: '已取消'
        }],
        [9, {
          statusTitle: '已取消订单'
        }]
      ]),
      state: null,
      OrderNo: null,
      payId: null,
      noncestr: null,
      statusName: '',
      reminderShow: false,
      dialogShow: false
    }
  },
  created () {
    this.OrderNo = this.$store.state.OrderNo
    Http.send({
      url: 'orderDetail',
      data: {
        Orderno: this.OrderNo
      }
    }).success(data => {
      console.log(data)
      data = data.order
      this.state = data.Status
      this.payId = data.PayId
      this.noncestr = data.noncestr
      let status = this.status.get(data.Status)
      this.orderDetail = data
      this.statusName = status.statusTitle
    }).fail(fail => {
      this.Title.text = fail.message
      this.dialogShow = true
    })
    switch (this.$store.state.origin3) {
      case 'order-confirm':
        this.theme.goal = 'mall'
        break
      case 'order':
        this.theme.goal = 'order'
        break
      case 'installment-detail':
        this.theme.goal = 'order'
    }
    if (this.$store.state.productId) this.theme.params.id = this.$store.state.productId
  },
  methods: {
    closeModal () {
      this.reminderShow = false
      this.dialogShow = false
      this.modal = false
    },
    showProduct () {
      this.saveOrigin7('order-detail')
      this.$router.push({
        name: 'product',
        params: {
          id: this.orderDetail.order.CommodityId
        }
      })
    },
    judgeCancel () {
      let result = true
      if (this.state > 1) result = false
      return result
    },
    judgePay () {
      let result = false
      if (this.state === 1) result = true
      return result
    },
    judgeConfrim () {
      let result = false
      if (this.state === 3) result = true
      return result
    },
    cancel (index) {
      this.Title.text = '取消后，机器可能会被人抢走哦~'
      this.reminderShow = true
    },
    sendRequest () {
      this.reminderShow = false
      if (this.Title.text === '您确认收货') {
        Http.send({
          url: 'Receipt',
          data: {
            Orderno: this.OrderNo
          }
        }).success(data => {
          this.changeStatusNum(3)
          this.$router.push({
            name: 'order'
          })
        }).fail(fail => {
          this.Title.text = fail.message
          this.dialogShow = true
        })
      } else {
        Http.send({
          url: 'Cancel',
          data: {
            orderno: this.orderDetail.OrderNo
          }
        }).success(data => {
          let page = this.theme.goal
          if (page === 'mall') {
            page = 'product'
            this.$router.push({
              name: page,
              params: {
                id: this.productId
              }
            })
          } else {
            this.$router.push({ name: page })
          }
        }).fail(data => {
          this.Title.text = data.message
          this.dialogShow = true
        })
      }
    },
    pay () {
      try {
        if (typeof (appJsInterface) !== 'undefined') {
          appJsInterface.payWeChat(JSON.stringify({
            prepayId: this.payId,
            noncestr: this.noncestr
          }))
        } else {
          webkit.messageHandlers.popWeichatPay.postMessage(JSON.stringify(this.payId))
        }
        let payListener = setInterval(() => {
          if (window.payFinish === 'success') {
            this.state = 2
            clearInterval(payListener)
          } else if (window.payFinish === 'success') {
            clearInterval(payListener)
          }
        }, 1000)
      } catch (error) {
        this.Title.text = '支付失败'
        this.reminderShow = true
      }
    },
    confrim () {
      this.Title.text = '您确认收货'
      this.reminderShow = true
    },
    ...mapMutations(['changeStatusNum'])
  },
  components: {
    Theme,
    ModalReminder,
    ModalDialog
  }
}
</script>

<style scoped lang="scss">
@import './order-detail.scss';
</style>
