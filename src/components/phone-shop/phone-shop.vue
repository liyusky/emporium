<template>
  <!-- s  -->
  <section class="phone-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-bg">
      <img src="../../assets/images/phone-shop-bg.png">
    </div>
    <div class="shop-banner">
      <img src="../../assets/images/computer-shop-banner.png">
    </div>
    <ul class="shop-list">
      <li class="list-item">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img src="../../assets/images/computer-shop-sample.png">
        </div>
        <p class="item-title">【国行正品】直降 360 苹果6S正品</p>
        <p class="item-count">￥858</p>
        <p class="item-money">月供:￥35.85起</p>
      </li>
      <li class="list-item">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img src="../../assets/images/computer-shop-sample.png">
        </div>
        <p class="item-title">【国行正品】直降 360 苹果6S正品</p>
        <p class="item-count">￥858</p>
        <p class="item-money">月供:￥35.85起</p>
      </li>
      <li class="list-item">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img src="../../assets/images/computer-shop-sample.png">
        </div>
        <p class="item-title">【国行正品】直降 360 苹果6S正品</p>
        <p class="item-count">￥858</p>
        <p class="item-money">月供:￥35.85起</p>
      </li>
      <li class="list-item">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img src="../../assets/images/computer-shop-sample.png">
        </div>
        <p class="item-title">【国行正品】直降 360 苹果6S正品</p>
        <p class="item-count">￥858</p>
        <p class="item-money">月供:￥35.85起</p>
      </li>
      <li class="list-item">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img src="../../assets/images/computer-shop-sample.png">
        </div>
        <p class="item-title">【国行正品】直降 360 苹果6S正品</p>
        <p class="item-count">￥858</p>
        <p class="item-money">月供:￥35.85起</p>
      </li>
    </ul>
    <div class="shop-recommend">
      <img src="../../assets/images/computer-shop-recommend.png">
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'PhoneShop',
  data () {
    return {
      theme: {
        title: '手机商城',
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
@import "./phone-shop.scss";
</style>
