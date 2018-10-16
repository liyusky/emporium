<template>
  <!-- s  -->
  <section class="computer-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-bg">
      <img src="../../assets/images/computer-shop-bg.png">
    </div>
    <ul class="shop-coupons">
      <li class="coupons-item">
        <div class="item-content">
          <div class="content-money"></div>
          <div class="content-message">
            <p></p>
            <p></p>
          </div>
        </div>
        <button class="item-accept">
          <div class="accept-content"></div>
        </button>
      </li>
      <li class="coupons-item">
        <div class="item-content">
          <div class="content-money">
            <span>￥</span>
            <span>199</span>
          </div>
          <div class="content-message">
            <p>电脑会场</p>
            <p>满3999元</p>
          </div>
        </div>
        <button class="item-accept">
          <img class="accept-content" src="">
        </button>
      </li>
    </ul>
    <div class="shop-banner">
      <img class="banner-image" src="../../assets/images/computer-shop-banner.png">
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
  name: 'ComputerShop',
  data () {
    return {
      theme: {
        title: '电脑城',
        goal: 'mine'
      }
    }
  },
  components: {
    Theme
  }
}
</script>

<style lang="sass" scoped>
@import "./computer-shop.scss";
</style>
