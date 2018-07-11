<template>
  <!-- s 我的订单 -->
  <section class="order">
    <div class="order-title" @click="gotoPage(0)">
      <h3>我的订单</h3>
      <p>
        <span>全部订单</span>
        <i class="iconfont icon-dacong"></i>
      </p>
    </div>
    <nav class="order-menu">
      <div class="menu-item" @click="gotoPage(1)">
        <i class="iconfont icon-dacong"></i>
        <p>待付款</p>
      </div>
      <div class="menu-item" @click="gotoPage(2)">
        <i class="iconfont icon-dacong"></i>
        <p>待发货</p>
      </div>
      <div class="menu-item" @click="gotoPage(3)">
        <i class="iconfont icon-dacong"></i>
        <p>待收货</p>
      </div>
      <div class="menu-item" @click="gotoPage(0)">
        <i class="iconfont icon-dacong"></i>
        <p>全部订单</p>
      </div>
    </nav>
  </section>
  <!-- e 我的订单 -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Order',
  data () {
    return {}
  },
  methods: {
    gotoPage (number) {
      this.$router.push({
        name: 'order'
      })
      this.changeStatusNum(number)
    },
    ...mapMutations(['changeStatusNum'])
  }
}
</script>

<style lang="sass" scoped>
  @import "./order.scss";
</style>
