<template>
  <!-- s  -->
  <section class="beauty-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-bg">
      <img src="">
    </div>
    <ul class="shop-coupon">
      <li class="coupon-item">
        <div>
          <p>
            <span>￥40</span>
            <span>优惠券</span>
          </p>
        </div>
        <p>
          <span>全场满400元使用</span>
          <span>立即领取></span>
        </p>
      </li>
    </ul>
    <ul class="shop-list"></ul>
  </section>
  <!-- e  -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'BeautyShop',
  data () {
    return {
      theme: {
        title: '美妆个护',
        goal: 'shop'
      }
    }
  },
  components: {
    Theme
  }
}
</script>

<style lang="sass" scoped>
@import "./beauty-shop.scss";
</style>
