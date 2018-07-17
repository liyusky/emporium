<template>
  <section class="order-item">
    <div class="item-title">
      <p class="title-time">{{titleTime}}</p>
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
      <div class="button-topay" v-if="item.Status == 1">
        <button>{{statusList[item.Status].buttonName}}</button>
      </div>
      <div class="button-order" v-else-if="item.Status != 1">
        <button v-if="statusList[item.Status].buttonLeftName" @click="cancel(item)">{{statusList[item.Status].buttonLeftName}}</button>
        <button v-if="statusList[item.Status].buttonRightName">{{statusList[item.Status].buttonRightName}}</button>
      </div>
    </div>
  </section>
</template>

<script>
import Time from '../../../class/time.class.js'
import Http from '../../../class/http.class.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      statusList: {
        '0': {
          statusTitle: '待提交',
          buttonLeftName: '取消订单',
          buttonRightName: '提交订单'
        },
        '1': {
          statusTitle: '待付款',
          buttonLeftName: '取消订单',
          buttonName: '去支付'
        },
        '2': {
          statusTitle: '等待发货',
          buttonLeftName: '取消订单',
          buttonRightName: ''
        },
        '3': {
          statusTitle: '已发货',
          buttonRightName: '确认收货'
        }
      },
      titleTime: null,
      statusName: '',
      statusButtonName: '',
      statusButtonLeftName: '',
      statusButtonRightName: ''
    }
  },
  props: ['item', 'index'],
  mounted () {
    // 订单日期
    this.titleTime = Time.change(Number(this.item.CreateTime.substring(6, 19)))
  },
  methods: {
    gotoPage (item) {
      if (item.Status > 0) {
        this.$router.push({
          name: 'order-detail',
          params: {
            orderNum: item.OrderNo
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
    cancel (item) {
      Http.send({
        url: 'Cancel',
        params: {
          orderno: item.OrderNo
        }
      }).success(data => {
        this.$emit('REMOVE_TIPS_EVENT', this.index)
      })
    },
    ...mapMutations(['saveOrigin'])
  }
}
</script>

<style scoped lang="scss">
@import './order-list.scss'
</style>
