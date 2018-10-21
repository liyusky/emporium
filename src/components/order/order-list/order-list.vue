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
            <p class="content-price">￥{{item.CommodityPrice}}</p>
            <p class="content-number">x1</p>
          </div>
        </div>
      </div>
      <div class="item-summary">
        <p>
          <span>共1件商品 合计:</span>
          <span class="summary-price">{{item.CommodityPrice}}</span>
          <span class="summary-fare"> (含运费￥{{item.DeliverPrice}})</span>
        </p>
      </div>
      <div class="item-button">
        <button class="button button-cancel" v-if="judgeCancel(item.Status)" @click="cancel(index)">
          <div>取消订单</div>
        </button>
        <button class="button button-pay" v-if="judgePay(item.Status)" @click="pay(item, index)">
          <div>去支付</div>
        </button>
        <button class="button button-submit" v-if="judgeSubmit(item.Status)" @click="gotoPage(item)">
          <div>提交订单</div>
        </button>
        <button class="button button-logistics" v-if="judgeLogistics(item.Status)" @click="logistics(item)">
          <div>查看物流</div>
        </button>
        <button class="button button-confrim" v-if="judgeConfrim(item.Status)" @click="confrim(item, index)">
          <div>确认收货</div>
        </button>
      </div>
    </div>
    <ModalReminder :Title="Title" v-show="reminderShow" @CLOSE_MODAL_EVENT="closeModal" @SENF_REQUEST_EVENT="sendRequest"></ModalReminder>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
import Http from '../../../class/http.class.js'
import ModalDialog from '../../common/alert-modal/modal-dialog/modal-dialog.vue'
import ModalReminder from '../../common/alert-modal/modal-reminder/modal-reminder.vue'
import { mapMutations } from 'vuex'
export default {
  props: ['tips', 'timeArr', 'statusList'],
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
  components: {
    ModalDialog,
    ModalReminder
  },
  methods: {
    gotoPage (item) {
      this.saveOrderNo(item.OrderNo)
      if (item.Status > 0) {
        if (item.PayType === 3 && item.BillStatus < 99) {
          this.saveOrigin6('order')
          this.$router.push({ name: 'installment-detail' })
        } else {
          this.saveOrigin3('order')
          this.$router.push({ name: 'order-detail' })
        }
      } else {
        this.saveOrigin('order')
        this.saveProductId(item.CommodityId)
        this.$router.push({ name: 'order-confirm' })
      }
    },
    judgeCancel (status) {
      let result = true
      if (status > 1) result = false
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
    judgeLogistics (status) {
      let result = false
      if (status === 3) result = true
      return result
    },
    cancel (index) {
      this.index = index
      this.Title.text = '您确认要删除订单'
      this.reminderShow = true
    },
    pay (item, index) {
      if (window.localStorage) {
        localStorage.setItem('OrderNo', item.Orderno)
        localStorage.setItem('Origin5', 'order')
      }
      switch (item.PayType) {
        case 1:
          try {
            if (typeof (appJsInterface) !== 'undefined') {
              appJsInterface.payWeChat(JSON.stringify({
                prepayId: item.payId,
                noncestr: item.noncestr
              }))
            } else {
              webkit.messageHandlers.popWeichatPay.postMessage(JSON.stringify(item.payId))
            }
            let payListener = setInterval(() => {
              if (window.payFinish === 'success') {
                this.tips[index].Status = 2
                clearInterval(payListener)
              } else if (window.payFinish === 'success') {
                clearInterval(payListener)
              }
            }, 1000)
          } catch (error) {
            this.Title.text = '支付失败'
            this.reminderShow = true
          }
          break
        case 2:
          document.getElementById('alipay').innerHTML = item.OrderStr + '<img src="./static/img/site.png" onload="submitALiPay()">'
          break
        case 3:
          this.gotoPage(item)
          break
      }
    },
    confrim (item, index) {
      this.index = index
      this.Title.text = '您确认收货'
      this.reminderShow = true
    },
    logistics (item) {
      this.saveOrigin8('order')
      this.saveOrderNo(item.OrderNo)
      this.$router.push({
        name: 'logistics-detail'
      })
    },
    sendRequest () {
      this.reminderShow = false
      if (this.Title.text === '您确认收货') {
        Http.send({
          url: 'Receipt',
          data: {
            Orderno: this.tips[this.index].OrderNo
          }
        }).success(data => {
          this.tips.splice(this.index, 1)
        }).fail(fail => {
          this.Title.text = fail.message
          this.dialogShow = true
        })
      }
      if (this.Title.text === '您确认要删除订单') {
        Http.send({
          url: 'Cancel',
          data: {
            orderno: this.tips[this.index].OrderNo
          }
        }).success(data => {
          this.tips.splice(this.index, 1)
        }).fail(data => {
          this.Title.text = data.message
          this.dialogShow = true
        })
      }
    },
    closeModal () {
      this.dialogShow = false
      this.reminderShow = false
    },
    ...mapMutations(['saveOrigin', 'saveOrigin3', 'saveOrigin6', 'saveOrigin8', 'saveOrderNo', 'saveProductId', 'changeStatusNum'])
  }
}
</script>

<style scoped lang="scss">
  @import './order-list.scss';
</style>
