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
export default {
  // 订单参数
  props: ['OrderNo'],
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
        }]
      ]),
      statusName: '',
      statusLeftBtnName: '',
      statusRightBtnName: '',
      reminderShow: false,
      dialogShow: false
    }
  },
  created () {
    Http.send({
      url: 'orderDetail',
      params: {
        Orderno: this.OrderNo
      }
    }).success(data => {
      let status = this.status.get(data.Status)
      this.orderDetail = data
      this.statusName = status.statusTitle
      this.statusLeftBtnName = status.buttonLeftName
      this.statusRightBtnName = status.buttonRightName
    }).fail(data => {
      this.Title.text = data.message
      this.dialogShow = true
    })
    this.theme.goal = this.$store.state.origin2
    alert(this.theme.goal)
    if (this.$store.state.productId) this.theme.params.id = this.$store.state.productId
  },
  methods: {
    LeftButtonClick (orderDetail) {
      if (this.statusLeftBtnName === '取消订单') {
        this.reminderShow = true
        this.Title.text = '取消后，机器可能会被人抢走哦~'
      }
    },
    sendRequest () {
      this.reminderShow = false
      Http.send({
        url: 'Cancel',
        params: {
          orderno: this.orderDetail.OrderNo
        }
      }).success(data => {
        this.$router.push({ name: 'order' })
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    closeModal () {
      this.reminderShow = false
      this.dialogShow = false
    }
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
