<template>
  <section class="order-list">
    <div class="list-item" v-for="(item, index) in tips" :key="index">
      <div class="item-title">
        <p class="title-time">{{timeArr[index]}}</p>
        <p class="title-sign">{{statusList[item.Status].statusTitle}}</p>
      </div>
      <div class="item-detail" @click="gotoPage(item)">
        <div class="detail-img">
          <img :src="item.Icon">
        </div>
        <div class="detail-content">
          <p class="content-title">{{item.Title}}</p>
          <div class="content-price-number">
            <p class="content-price">{{item.CommodityPrice}}</p>
            <p class="content-number">x{{item.rownum}}</p>
          </div>
        </div>
      </div>
      <div class="item-summary">
        <p>
          <span>共1件商品 合计:</span>
          <span class="summary-price">{{parseFloat(item.rownum * item.CommodityPrice).toFixed(2)}}</span>
          <span class="summary-fare"> (含运费￥{{item.DeliverPrice}})</span>
        </p>
      </div>
      <div class="item-button">
        <button class="button button-cancel" v-if="judgeCancel(item.Status)" @click="cancel(index)">取消订单</button>
        <button class="button button-pay" v-if="judgePay(item.Status)" @click="pay(item.PayId, item.noncestr, item.OrderNo, index)">去支付</button>
        <button class="button button-submit" v-if="judgeSubmit(item.Status)" @click="gotoPage(item)">提交订单</button>
        <button class="button button-confrim" v-if="judgeConfrim(item.Status)" @click="confrim(item)">确认收货</button>
      </div>
    </div>
    <ModalReminder :Title="Title" v-show="reminderShow" @CLOSE_MODAL_EVENT="closeModal" @SENF_REQUEST_EVENT="sendRequest"></ModalReminder>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
// import Time from '../../../class/time.class.js'
import Http from '../../../class/http.class.js'
import ModalDialog from '../../common/alert-modal/modal-dialog/modal-dialog.vue'
import ModalReminder from '../../common/alert-modal/modal-reminder/modal-reminder.vue'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      titleTime: null,
      Title: {
        text: ''
      },
      dialogShow: false,
      reminderShow: false,
      index: null
    }
  },
  props: ['tips', 'statusList', 'timeArr'],
  components: {
    ModalDialog,
    ModalReminder
  },
  mounted () {
    // 订单日期
    // this.titleTime = Time.change(Number(this.item.CreateTime.substring(6, 19)))
  },
  methods: {
    gotoPage (item) {
      if (item.Status > 0) {
        this.saveOrigin3('order')
        this.saveOrderNo(item.OrderNo)
        this.$router.push({ name: 'order-detail' })
      } else {
        this.saveOrigin('order')
        this.saveProductId(item.CommodityId)
        this.saveOrderNo(item.OrderNo)
        this.$router.push({ name: 'order-confirm' })
      }
    },
    judgeCancel (status) {
      let result = true
      if (status === 3 || status === 9) result = false
      return result
    },
    judgePay (status) {
      let result = false
      if (status === 1) result = true
      return result
    },
    judgeSubmit (status) {
      let result = false
      if (status === 0) result = true
      return result
    },
    judgeConfrim (status) {
      let result = false
      if (status === 3) result = true
      return result
    },
    cancel (index) {
      this.index = index
      this.Title.text = '您确认要删除订单'
      this.reminderShow = true
    },
    pay (payId, noncestr, Orderno, index) {
      if (window.localStorage) {
        localStorage.setItem('OrderNo', Orderno)
        localStorage.setItem('Origin5', 'order')
      }
      try {
        appJsInterface.payWeChat(JSON.stringify({
          prepayId: payId,
          noncestr: noncestr
        }))
        let payListener = setInterval(() => {
          if (window.payFinish) {
            this.tips[index].Status = 2
            clearInterval(payListener)
          }
        }, 1000)
      } catch (error) {
        this.Title.text = '支付失败'
        this.reminderShow = true
        console.log(error)
      }
    },
    confrim (item) {
      Http.send({
        url: 'Receipt',
        data: {
          Orderno: this.OrderNo
        }
      }).success(data => {
        item.Status = 4
      }).fail(fail => {
        this.Title.text = fail.message
        this.dialogShow = true
      })
    },
    sendRequest () {
      Http.send({
        url: 'Cancel',
        data: {
          orderno: this.tips[this.index].OrderNo
        }
      }).success(data => {
        this.tips.splice(this.index, 1)
        this.reminderShow = false
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    closeModal () {
      this.dialogShow = false
      this.reminderShow = false
    },
    ...mapMutations(['saveOrigin', 'saveOrigin3', 'saveOrderNo', 'saveProductId'])
  }
}
</script>

<style scoped lang="scss">
  @import './order-list.scss';
</style>
