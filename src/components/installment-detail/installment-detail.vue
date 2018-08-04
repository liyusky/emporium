<template>
  <section class="installment">
    <Theme :theme="theme"></Theme>
    <Info :order="order"></Info>
    <Stage :bill="bill" @OPEN_MODAL_EVENT="openModal('stage')"></Stage>
    <footer class="installment-button">
      <button @click="openModal('installment-detail')">立即付款</button>
    </footer>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
    <Modal v-show="modal">
      <RepaymentDetail @CLOSE_MODAL_EVENT="closeModal" :bill="bill" :order="order" v-show="repaymentDetailShow" @OPEN_MODAL_EVENT="openModal('repayment-detail')"></RepaymentDetail>
      <PayPassword :orderNo="orderNo" :billId="billId" v-show="payPasswordShow"></PayPassword>
    </Modal>
  </section>
</template>
<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import ModalReminder from '@/components/common/alert-modal/modal-reminder/modal-reminder.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import RepaymentDetail from './repayment-detail/repayment-detail.vue'
import Info from './info/info.vue'
import Stage from './stage/stage.vue'
import PayPassword from './pay-password/pay-password.vue'
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
      order: {},
      currentIndex: 0,
      modal: false,
      dialogShow: false,
      reminderShow: false,
      repaymentDetailShow: false,
      payPasswordShow: false,
      orderNo: null,
      billId: 0
    }
  },
  components: {
    Theme,
    Info,
    Stage,
    ModalReminder,
    Modal,
    ModalDialog,
    RepaymentDetail,
    PayPassword
  },
  created () {
    this.orderNo = this.$store.state.OrderNo
    this.theme.goal = this.$store.state.origin6
    Http.send({
      url: 'orderDetail',
      data: {
        Orderno: this.OrderNo
      }
    }).success(data => {
      this.bill = data.bill
      this.order = data.order
      this.BillId = this.bill[this.currentIndex].Id
    }).fail(data => {
      this.Title.text = data.message
      this.dialogShow = true
    })
  },
  methods: {
    openModal (origin) {
      switch (origin) {
        case 'stage':
          this.modal = true
          this.repaymentDetailShow = true
          this.payPasswordShow = false
          break
        case 'repayment-detail':
          this.modal = true
          this.payPasswordShow = true
          break
        case 'installment-detail':
          this.modal = true
          this.repaymentDetailShow = false
          this.payPasswordShow = true
          break
      }
    },
    closeModal () {
      this.RepaymentDetailShow = false
      this.dialogShow = false
      this.modal = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./installment-detail.scss";
</style>
