<template>
  <section class="order">
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <div class="tabbar-item" :class="{active:checkPageName == 'orderAll'}" @click="checkPage('orderAll')">全部</div>
      <div class="tabbar-item" :class="{active:checkPageName == 'orderPay'}" @click="checkPage('orderPay')">代付款</div>
      <div class="tabbar-item" :class="{active:checkPageName == 'orderSend'}" @click="checkPage('orderSend')">代发货</div>
      <div class="tabbar-item" :class="{active:checkPageName == 'orderReceipt'}" @click="checkPage('orderReceipt')">代收货</div>
      <div class="tabbar-item" :class="{active:checkPageName == 'orderEvaluate'}" @click="checkPage('orderEvaluate')">待评价</div>
    </section>
    <section class="order-classify">
      <v-touch @swipeleft="onSwipeLeft()" @swiperight="onSwipeRight()">
        <OrderList :orderList = orderList></OrderList>
      </v-touch>
    </section>
  </section>
</template>

<script>
// import Bus from '@/common/com/com.vue'
import axios from 'axios'
import { mapState } from 'vuex'
// import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import OrderList from './order-list/order-list.vue'
export default {
  name: 'Order',
  data () {
    return {
      theme: {
        title: '我的订单'
      },
      checkPageName: 'orderAll',
      orderList: []
    }
  },
  mounted () {
    axios({
      url: 'http://192.168.0.101:8082/order/OrderList',
      method: 'post',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      params: {
        custermerId: '10000',
        status: '-1'
      }
    }).then(function (response) {
      // this.orderList = response.data.data
      console.log(response.data.data)
    })
  },
  methods: {
    checkPage (orderListName) {
      this.checkPageName = orderListName
    },
    onSwipeLeft () {
      console.log(1)
    },
    onSwipeRight () {
      console.log(2)
    }
  },
  computed: {
    ...mapState(['orderName'])
  },
  components: {
    Theme,
    OrderList
  }
}
</script>

<style scoped lang="scss">
@import './order.scss';
</style>
