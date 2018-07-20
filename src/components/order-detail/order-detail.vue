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
            <i class="iconfont icon-suan"></i>
            <div class="detail-name-address" v-if="!orderDetail.ReciverAddress">
              <h3 class="detail-name">未填写地址</h3>
            </div>
            <div class="detail-name-address" v-if="orderDetail.ReciverAddress">
              <h3 class="detail-name">{{orderDetail.ReciverName}} {{orderDetail.ReciverPhone}}</h3>
              <p class="detail-address">{{orderDetail.ReciverAddress}}</p>
            </div>
          </div>
        </div>
        <div class="information-phone">
          <div class="phone-detail">
            <div class="detail-img">
              <img :src="orderDetail.Icon">
            </div>
            <div class="detail-content">
              <h3 class="content-title">{{orderDetail.Title}}</h3>
              <div class="content-price-number">
                <p class="content-price">￥{{orderDetail.CommodityPrice}}</p>
                <p class="content-number">x{{orderDetail.rownum}}</p>
              </div>
            </div>
          </div>
          <ul class="phone-list">
            <li class="list-item">
              <p class="item-title">商品总价</p>
              <p class="item-value">￥{{orderDetail.CommodityPrice * orderDetail.rownum}}</p>
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
        <button class="" v-if="judgeCancel()" @click="cancel">取消订单</button>
        <button class="" v-if="judgePay()" @click="pay">去支付</button>
        <button class="" v-if="judgeConfrim()" @click="confrim">确认收货</button>
        <button class="item-right" @click="LeftButtonClick()" v-if="statusLeftBtnName">{{statusLeftBtnName}}</button>
        <button class="item-left" v-if="statusRightBtnName">{{statusRightBtnName}}</button>
      </div>
      <!-- <div class="button-item" v-if="orderDetail.Status == 1">
        <button class="item-right" @click="LeftButtonClick">{{statusLeftBtnName}}</button>
        <button class="item-left">{{statusRightBtnName}}</button>
      </div>
      <div class="button-item" v-else-if="orderDetail.Status != 1">
        <button class="item-right">{{statusLeftBtnName}}</button>
        <button class="item-left">{{statusRightBtnName}}</button>
      </div> -->
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
import { mapState } from 'vuex'
export default {
  // 订单参数
  data () {
    return {
      theme: {
        title: '订单详情',
        goal: null,
        params: {}
      },
      Title: {
        text: ''
      },
      orderDetail: {},
      status: new Map([
        [0, {
          statusTitle: '待提交',
          buttonLeftName: '取消订单',
          buttonRightName: '提交订单'
        }],
        [1, {
          statusTitle: '待付款',
          buttonLeftName: '取消订单',
          buttonRightName: '去支付'
        }],
        [2, {
          statusTitle: '等待发货',
          buttonLeftName: '取消订单',
          buttonRightName: ''
        }],
        [3, {
          statusTitle: '已发货',
          buttonLeftName: '',
          buttonRightName: '确认收货'
        }],
        [9, {
          statusTitle: '已取消订单',
          buttonLeftName: '',
          buttonRightName: ''
        }]
      ]),
      state: null,
      OrderNo: null,
      payId: null,
      statusName: '',
      statusLeftBtnName: '',
      statusRightBtnName: '',
      reminderShow: false,
      dialogShow: false
    }
  },
  created () {
    this.OrderNo = this.$store.state.OrderNo
    Http.send({
      url: 'orderDetail',
      params: {
        Orderno: this.OrderNo
      }
    }).success(data => {
      this.state = data.Status
      this.payId = data.PayId
      let status = this.status.get(data.Status)
      this.orderDetail = data
      this.statusName = status.statusTitle
      this.statusLeftBtnName = status.buttonLeftName
      this.statusRightBtnName = status.buttonRightName
    }).fail(fail => {
      console.log(fail)
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
    }
    if (this.$store.state.productId) this.theme.params.id = this.$store.state.productId
  },
  methods: {
    closeModal () {
      this.reminderShow = false
      this.dialogShow = false
    },
    judgeCancel () {
      let result = true
      if (this.state === 3 || this.state === 9) result = false
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
      Http.send({
        url: 'Cancel',
        params: {
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
    },
    pay () {
      try {
        if (typeof (appJsInterface) !== 'undefined') {
          appJsInterface.payWeChat(JSON.stringify({
            prepayId: this.payId
          }))
        }
      } catch (error) {
        this.Title.text = '支付失败'
        this.reminderShow = true
        console.log(error)
      }
    },
    confrim () {
      Http.send({
        url: 'Receipt',
        params: {
          Orderno: this.OrderNo
        }
      }).success(data => {
        this.state = 4
      }).fail(fail => {
        this.Title.text = fail.message
        this.dialogShow = true
      })
      this.OrderNo
    }
  },
  components: {
    Theme,
    ModalReminder,
    ModalDialog
  },
  computed: {
    ...mapState(['productId'])
  }
}
</script>

<style scoped lang="scss">
@import './order-detail.scss';
</style>
