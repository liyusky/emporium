<template>
  <!-- s 我的订单 -->
  <section class="order">
    <div class="order-title" @click="gotoPage(-1)">
      <div class="title-content">
        <h3>我的订单</h3>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <nav class="order-menu">
      <div class="menu-item" @click="gotoPage(1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daifukuan"></use>
        </svg>
        <p>待付款</p>
      </div>
      <div class="menu-item" @click="gotoPage(2)">
       <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daifahuo"></use>
        </svg>
        <p>待发货</p>
      </div>
      <div class="menu-item" @click="gotoPage(3)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-daishouhuo"></use>
        </svg>
        <p>待收货</p>
      </div>
      <div class="menu-item" @click="gotoPage(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-quanbudingdan"></use>
        </svg>
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
    gotoPage (status) {
      this.$router.push({
        name: 'order'
      })
      this.changeStatusNum(status)
    },
    ...mapMutations(['changeStatusNum'])
  }
}
</script>

<style lang="sass" scoped>
  @import "./order.scss";
</style>
