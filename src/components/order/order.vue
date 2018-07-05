<template>
  <section class="order">
<<<<<<< HEAD
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <div class="tabbar-item">全部</div>
      <div class="tabbar-item">代付款</div>
      <div class="tabbar-item">代发货</div>
      <div class="tabbar-item">代收货</div>
      <div class="tabbar-item">待评价</div>
    </section>
    <section class="order-classify">
      <router-view></router-view>
=======
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
>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
    </section>
  </section>
</template>

<script>
<<<<<<< HEAD
import Theme from '../common/theme/theme.vue'
export default {
  name: 'Order',
  data () {
    return {
      theme: {
        title: 'iPhone 6S'
      }
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Theme
  }
}
</script>
<style scoped lang="scss">
@import './order.scss';
=======
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

>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
</style>
