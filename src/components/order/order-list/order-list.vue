<template>
  <section class="order-list">
    <div class="list-item" v-for="(item, number) in tips" :key="number">
      <div class="item-title">
        <p class="title-time"></p>
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
          <span class="summary-price">{{item.rownum * item.CommodityPrice}}</span>
          <span class="summary-fare"> (含运费￥{{item.DeliverPrice}})</span>
        </p>
      </div>
      <div class="item-button">
        <button v-for="(buttonItem, index) in statusList[item.Status].buttonType" :key="index" v-if="buttonItem.buttonName" :class="buttonItem.buttonClass" @click="cancel(buttonItem.buttonName, number)">{{buttonItem.buttonName}}</button>
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
      orderIndex: null
    }
  },
  components: {
    ModalDialog,
    ModalReminder
  },
  props: ['tips', 'index', 'statusList'],
  mounted () {
    // 订单日期
    // this.titleTime = Time.change(Number(this.item.CreateTime.substring(6, 19)))
  },
  methods: {
    gotoPage (item) {
      if (item.Status > 0) {
        this.saveOrigin2('order')
        this.$router.push({
          name: 'order-detail',
          params: {
            OrderNo: item.OrderNo
          }
        })
      } else {
        this.saveOrigin('order')
        this.$router.push({
          name: 'order-confirm',
          params: {
            id: item.CommodityId,
            OrderNo: item.OrderNo
          }
        })
      }
    },
    cancel (buttonName, number) {
      console.log(number)
      this.orderIndex = number
      if (buttonName === '取消订单' || buttonName === '删除订单') {
        this.Title.text = '您确认要删除订单'
        this.reminderShow = true
      }
      if (buttonName === '提交订单') {
        return false
      }
    },
    sendRequest () {
      Http.send({
        url: 'Cancel',
        params: {
          orderno: this.tips[this.orderIndex].OrderNo
        }
      }).success(data => {
        this.tips.splice(this.orderIndex, 1)
        this.reminderShow = false
      })
    },
    closeModal () {
      this.dialogShow = false
      this.reminderShow = false
    },
    ...mapMutations(['saveOrigin', 'saveOrigin2'])
  }
}
</script>

<style scoped lang="scss">
@import './order-list.scss'
</style>
