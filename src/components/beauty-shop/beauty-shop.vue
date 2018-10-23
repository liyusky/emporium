<template>
  <!-- s  -->
  <section class="beauty-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-banner">
      <div class="banner-bg">
        <img src="../../assets/images/beauty-shop.png">
      </div>
      <ul class="banner-coupon">
        <li class="coupon-item">
          <div class="item-content">
            <div class="content-message">
              <p class="message-money">
                <span>¥</span>
                <span class="money-num">40</span>
              </p>
              <p class="message-type">优惠券</p>
            </div>
            <p class="content-proviso">
              <span>全场满400元使用</span>
              <span>立即领取></span>
            </p>
          </div>
        </li>
        <li class="coupon-item">
          <div class="item-content">
            <div class="content-message">
              <p class="message-money">
                <span>¥</span>
                <span class="money-num">80</span>
              </p>
              <p class="message-type">优惠券</p>
            </div>
            <p class="content-proviso">
              <span>全场满400元使用</span>
              <span>立即领取></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="shop-title">
      <p class="title-top">秒杀专区 低至9元9</p>
      <div class="title-division">
        <div class="division-line"></div>
        <div class="division-chunk"></div>
      </div>
      <p class="title-bottom">众多好物，PICK你的心头好</p>
    </div>
    <ul class="shop-list">
      <li class="list-item">
        <div class="item-exhibit">
          <img src="../../assets/images/computer-shop-sample.png">
        </div>
        <p class="item-title">华为 HUAWEI no...</p>
        <p class="item-count">￥858</p>
        <p class="item-money">
          <span>¥897</span>
          <span>×3期</span>
        </p>
      </li>
    </ul>
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
