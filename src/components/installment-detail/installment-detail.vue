<template>
  <section class="installment">
    <Theme :theme="theme"></Theme>
    <div class="installment-info">
      <div class="info-phone">
        <div class="phone-img">
          <img :src="orderDetail.Icon">
        </div>
        <div class="phone-detail">
          <h3 class="detail-title">{{orderDetail.Title}}</h3>
          <div class="detail-price-number">
            <p>￥{{orderDetail.CommodityPrice}}</p>
            <p>x{{orderDetail.rownum}}</p>
          </div>
        </div>
      </div>
      <div class="info-total-price">
        <p>商品总价</p>
        <p>￥{{parseFloat(orderDetail.CommodityPrice * orderDetail.rownum).toFixed(2)}}</p>
      </div>
    </div>
    <div class="installment-stage">
      <div class="stage-title">
        <p>期数选择</p>
      </div>
      <ul class="stage-list">
        <li class="list-item" v-for="(item, index) in bill" :key="index" @click="selectInstallment(item, index)">
          <div class="item-bill" :class="{'bill-active': isIndex == index}">
            <p>{{item.InstallmentSN}}期</p>
            <p>月供￥{{item.InstallmentAmount}}元</p>
          </div>
        </li>
      </ul>
      <div class="stage-due">
        <p>每月需还</p>
        <p class="due-price" @click="openModal">
          <span>￥{{installmentAmount}}</span>
          <i class="iconfont icon-08tishi"></i>
        </p>
      </div>
    </div>
    <footer class="installment-button">
      <button @click="immediatelyPay">立即付款</button>
    </footer>
    <Modal v-show="RepaymentDetailShow">
      <RepaymentDetail v-show="RepaymentDetailShow" :installmentBill="installmentBill" @CLOSE_MODAL_EVENT="closeModal"></RepaymentDetail>
    </Modal>
    <ModalReminder v-show="reminderShow" @CLOSE_MODAL_EVENT = "closeModal" @SENF_REQUEST_EVENT="sendRequest" :Title="Title"></ModalReminder>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>
<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import ModalReminder from '@/components/common/alert-modal/modal-reminder/modal-reminder.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import RepaymentDetail from './repayment-detail/repayment-detail.vue'
import Modal from '../common/modal/modal.vue'
export default {
  name: 'InstallmentDetail',
  data () {
    return {
      theme: {
        title: '分期账单',
        goal: null
      },
      Title: {
        text: ''
      },
      bill: [],
      installmentBill: null,
      orderDetail: null,
      installmentAmount: '0.00',
      isIndex: null,
      RepaymentDetailShow: false,
      dialogShow: false,
      reminderShow: false
    }
  },
  components: {
    Theme,
    ModalReminder,
    Modal,
    ModalDialog,
    RepaymentDetail
  },
  created () {
    this.OrderNo = this.$store.state.OrderNo
    this.theme.goal = this.$store.state.origin6
    Http.send({
      url: 'orderDetail',
      data: {
        Orderno: this.OrderNo
      }
    }).success(data => {
      this.bill = data.bill
      this.orderDetail = data.order
    }).fail(data => {
      this.Title.text = data.message
      this.dialogShow = true
    })
  },
  methods: {
    selectInstallment (item, index) {
      this.installmentBill = item
      this.installmentAmount = item.InstallmentAmount
      this.isIndex = index
    },
    immediatelyPay () {
      if (typeof this.isIndex !== 'number') {
        this.Title.text = '请选择分期'
        this.dialogShow = true
      }
    },
    openModal () {
      if (typeof this.isIndex !== 'number') {
        this.Title.text = '请选择分期'
        this.dialogShow = true
      }
      this.RepaymentDetailShow = true
    },
    closeModal () {
      this.RepaymentDetailShow = false
      this.dialogShow = false
    },
    sendRequest () {}
  }
}
</script>

<style lang="sass" scoped>
@import "./installment-detail.scss";
</style>
