<template>
  <!-- s  -->
  <section class="beauty-shop">
    <div class="shop-bg">
      <img src="">
    </div>
    <ul class="shop-coupon">
      <li class="coupon-item">
        <div class="item-message">
          <p>
            <span>¥</span>
            <span>40</span>
          </p>
          <p>优惠券</p>
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
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./beauty-shop.scss";
</style>
