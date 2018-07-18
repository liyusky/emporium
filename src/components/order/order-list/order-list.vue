<template>
  <section class="order-item">
    <div class="item-title">
      <p class="title-time">{{titleTime}}</p>
      <p class="title-sign">{{statusTitle}}</p>
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
      <button v-for="(buttonItem, index) in buttonType" :key="index" v-if="buttonItem.buttonName" :class="buttonItem.buttonClass" @click="cancel(item)">{{buttonItem.buttonName}}</button>
    </div>
    <ModalReminder :Title="Title" v-show="reminderShow" @CLOSE_MODAL_EVENT="closeModal" @SENF_REQUEST_EVENT="sendRequest"></ModalReminder>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
import Time from '../../../class/time.class.js'
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
      statusTitle: '',
      buttonType: []
    }
  },
  components: {
    ModalDialog,
    ModalReminder
  },
  props: ['item', 'index'],
  mounted () {
    // 订单日期
    this.titleTime = Time.change(Number(this.item.CreateTime.substring(6, 19)))
    this.statusType()
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
    statusType () {
      if (this.item.Status === 0) {
        this.statusTitle = '待提交'
        this.buttonType = [
          {
            buttonClass: 'left-button',
            buttonName: '取消订单'
          },
          {
            buttonClass: 'right-button',
            buttonName: '提交订单'
          },
          {
            buttonName: ''
          }
        ]
      }
      if (this.item.Status === 1) {
        this.statusTitle = '待付款'
        this.buttonType = [
          {
            buttonClass: 'left-button',
            buttonName: '取消订单'
          },
          {
            buttonClass: 'button-topay',
            buttonName: '去支付'
          },
          {
            buttonName: ''
          }
        ]
      }
      if (this.item.Status === 2) {
        this.statusTitle = '等待发货'
        this.buttonType = [
          {
            buttonClass: 'left-button',
            buttonName: '取消订单'
          },
          {
            buttonName: ''
          },
          {
            buttonName: ''
          }
        ]
      }
      if (this.item.Status === 3) {
        this.statusTitle = '已发货'
        this.buttonType = [
          {
            buttonClass: 'left-button',
            buttonName: '确认收货'
          },
          {
            buttonName: ''
          },
          {
            buttonName: ''
          }
        ]
      }
      if (this.item.Status === 3) {
        this.statusTitle = '已发货'
        this.buttonType = [
          {
            buttonClass: 'left-button',
            buttonName: '确认收货'
          },
          {
            buttonName: ''
          },
          {
            buttonName: ''
          }
        ]
      }
      if (this.item.Status === 9) {
        this.statusTitle = '已取消订单'
        this.buttonType = [
          {
            buttonClass: 'left-button',
            buttonName: '查看订单'
          },
          {
            buttonName: ''
          },
          {
            buttonName: ''
          }
        ]
      }
    },
    cancel (item) {
      this.Title.text = '您确认要删除订单'
      this.reminderShow = true
    },
    sendRequest () {
      Http.send({
        url: 'Cancel',
        params: {
          orderno: this.item.OrderNo
        }
      }).success(data => {
        console.log(data)
        this.$emit('REMOVE_TIPS_EVENT', this.index)
      }).fail((data) => {
        this.Title.text = data.message
        this.dialogShow = true
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
