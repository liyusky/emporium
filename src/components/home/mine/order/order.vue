<template>
  <!-- s 我的订单 -->
  <section class="order">
    <div class="order-title" @click="gotoPage('order')">
      <h3>我的订单</h3>
      <p>
        <span>全部订单</span>
        <i class="iconfont icon-dacong"></i>
      </p>
    </div>
    <nav class="order-menu">
      <div class="menu-item" @click="gotoPage('orderPay')">
        <i class="iconfont icon-dacong"></i>
        <p>待付款</p>
      </div>
      <div class="menu-item" @click="gotoPage('orderSend')">
        <i class="iconfont icon-dacong"></i>
        <p>待发货</p>
      </div>
      <div class="menu-item" @click="gotoPage('orderReceipt')">
        <i class="iconfont icon-dacong"></i>
        <p>待收货</p>
      </div>
      <div class="menu-item" @click="gotoPage('order')">
        <i class="iconfont icon-dacong"></i>
        <p>全部订单</p>
      </div>
    </nav>
  </section>
  <!-- e 我的订单 -->
</template>

<script>
// import Bus from '@/common/com/com.vue'
export default {
  name: 'Order',
  data () {
    return {}
  },
  methods: {
    gotoPage (page) {
      this.$router.push({name: 'order'})
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./order.scss";
</style>
