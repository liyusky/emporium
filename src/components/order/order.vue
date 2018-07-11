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
      <OrderList v-for="(item, index) in orderList" :key="index" :item = item @click="gotoPage(index)"></OrderList>
    </section>
  </section>
</template>

<script>
import Http from '../../class/http.class.js'
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
    Http.send({
      url: 'orderList',
      params: {
        custermerId: '10000',
        status: '-1'
      }
    }).success((data) => {
      this.orderList = data
      console.log(this.orderList)
    })
  },
  methods: {
    gotoPage (id) {
      this.$router.push({
        name: 'orderdetail',
        params: {
          id: id
        }
      })
    },
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
  components: {
    Theme,
    OrderList
  }
}
</script>

<style scoped lang="scss">
@import './order.scss';
</style>
