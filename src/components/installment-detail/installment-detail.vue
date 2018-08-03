<template>
  <section class="installment">
    <Theme :theme="theme"></Theme>
    <div class="installment-info">
      <div class="info-phone">
        <div class="phone-img">
          <img src="../../assets/images/logout.png">
        </div>
        <div class="phone-detail">
          <h3 class="detail-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</h3>
          <div class="detail-price-number">
            <p>￥5800</p>
            <p>x1</p>
          </div>
        </div>
      </div>
      <div class="info-total-price">
        <p>商品总价</p>
        <p>￥5800</p>
      </div>
    </div>
    <div class="installment-stage">
      <div class="stage-title">
        <p>期数选择</p>
      </div>
      <ul class="stage-list">
        <li class="list-item">
          <div class="item-bill" :class="{'bill-active':true}">
            <p>1期</p>
            <p>月供￥918.56元</p>
          </div>
        </li>
      </ul>
      <div class="stage-due">
        <p>每月需还</p>
        <p class="due-price">
          <span>￥98.56</span>
          <i class="iconfont icon-08tishi"></i>
        </p>
      </div>
    </div>
    <footer class="installment-button">
      <button>立即付款</button>
    </footer>
    <ModalReminder v-show="reminderShow" @CLOSE_MODAL_EVENT = "closeModal" @SENF_REQUEST_EVENT="sendRequest" :Title="Title"></ModalReminder>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
    <Modal v-show="modal">
      <RepaymentDetail @CLOSE_MODAL_EVENT="closeModal"></RepaymentDetail>
    </Modal>
  </section>
</template>
<script>
// import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import ModalReminder from '@/components/common/alert-modal/modal-reminder/modal-reminder.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import Modal from '../common/modal/modal.vue'
import RepaymentDetail from './repayment-detail/repayment-detail.vue'
export default {
  name: 'InstallmentDetail',
  data () {
    return {
      theme: {
        title: '分期账单',
        goal: null,
      },
      Title: {
        text: ''
      }
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
  }
}
</script>

<style lang="sass" scoped>
@import "./installment-detail.scss";
</style>
