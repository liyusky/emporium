<template>
  <section class="order">
    <Headbar HeadbarName="我的订单"></Headbar>
    <section class="order-tabbar">
      <div class="tabbar-item" :class="{activeShow:urlRouter == 'orderall'}" @click="toOrderAll">全部</div>
      <div class="tabbar-item" :class="{activeShow:urlRouter == 'orderpay'}" @click="toOrderPay">代付款</div>
      <div class="tabbar-item" :class="{activeShow:urlRouter == 'ordersend'}" @click="toOrderSend">代发货</div>
      <div class="tabbar-item" :class="{activeShow:urlRouter == 'orderreceive'}" @click="toOrderReceive">代收货</div>
      <div class="tabbar-item" :class="{activeShow:urlRouter == 'orderevaluate'}" @click="toOrderEvaluate">待评价</div>
    </section>
    <section class="order-classify">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
  import Headbar from '@/components/common/headbar/headbar.vue'
  export default {
    data() {
      return {
        urlRouter: 'orderall'
      }
    },
    mounted() {
      this.$router.push({
        name: "orderall"
      })
    },
    methods: {
      toOrderAll() {
        this.$router.push({
          name: 'orderall'
        })
        this.urlRouter = 'orderall'
      },
      toOrderPay() {
        this.$router.push({
          name: 'orderpay'
        })
        this.urlRouter = 'orderpay'
      },
      toOrderSend() {
        this.$router.push({
          name: 'ordersend'
        })
        this.urlRouter = 'ordersend'
      },
      toOrderReceive() {
        this.$router.push({
          name: 'orderreceive'
        })
        this.urlRouter = 'orderreceive'
      },
      toOrderEvaluate() {
        this.$router.push({
          name: 'orderevaluate'
        })
        this.urlRouter = 'orderevaluate'
      }
    },
    components: {
      Headbar
    }
  }

</script>
<style scoped lang="scss">
  @import './order.scss';

</style>
