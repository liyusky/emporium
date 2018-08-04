<template>
  <section class="installment">
    <Theme :theme="theme"></Theme>
    <Info :order="order"></Info>
    <Stage :bill="bill" @OPEN_MODAL_EVENT="openModal('stage')"></Stage>
    <footer class="installment-button">
      <button @click="openModal('installment-detail')">立即付款</button>
    </footer>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeToast"></ModalDialog>
    <Modal v-show="modal">
      <RepaymentDetail :currentIndex="currentIndex" :bill="bill" :order="order" v-show="repaymentDetailShow" @OPEN_MODAL_EVENT="openModal('repayment-detail')" @CLOSE_MODAL_EVENT="closeModal"></RepaymentDetail>
      <PayPassword :OrderNo="OrderNo" :BillId="BillId" v-show="payPasswordShow" @PAY_SUCCESS_EVENT="paySuccess" @PAY_FAIL_EVENT="payFail" @CLOSE_MODAL_EVENT="closePayPassword"></PayPassword>
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
import { mapMutations } from 'vuex'
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
      OrderNo: null,
      BillId: null
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
    this.OrderNo = this.$store.state.OrderNo
    this.theme.goal = this.$store.state.origin6
    this.getData()
  },
  methods: {
    getData () {
      Http.send({
        url: 'orderDetail',
        data: {
          Orderno: this.OrderNo
        }
      }).success(data => {
        this.bill = data.bill
        this.order = data.order
        let len = this.bill.length
        for (let i = 0; i < len; i++) {
          if (!this.bill[i].IsPayed) {
            this.currentIndex = i
            this.BillId = this.bill[i].Id
            break
          }
        }
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
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
      this.modal = false
    },
    closeToast () {
      this.dialogShow = false
    },
    closePayPassword () {
      if (!this.repaymentDetailShow) this.modal = false
      this.payPasswordShow = false
    },
    paySuccess () {
      this.currentIndex++
      if (this.currentIndex === this.bill.length) {
        this.saveOrigin3('installment-detail')
        this.$router.push({ name: 'order-detail' })
      }
      this.payPasswordShow = false
      this.RepaymentDetailShow = false
      this.modal = false
    },
    payFail () {
      this.Title.text = '支付失败'
      this.dialogShow = true
      this.payPasswordShow = false
      this.RepaymentDetailShow = false
      this.modal = false
    },
    ...mapMutations(['saveOrigin3'])
  }
}
</script>

<style lang="sass" scoped>
@import "./installment-detail.scss";
</style>
