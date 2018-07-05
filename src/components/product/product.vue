<template>
  <!-- s 产品详情 -->
  <section class="product">
    <Theme :theme="theme"></Theme>
    <nav class="product-nav">
      <div class="nav-item">
        <a href="">商品</a>
      </div>
      <div class="nav-item">
        <a href="">质检</a>
      </div>
      <div class="nav-item">
        <a href="">实拍</a>
      </div>
    </nav>
    <Summary></Summary>
    <Quality></Quality>
    <Sample></Sample>
    <Guidance></Guidance>
    <footer class="product-order">
      <div class="order-content">
        <div class="content-sign">
          <i class="iconfont icon-dacong"></i>
          <p>客服</p>
        </div>
        <div class="content-price">
          <p>￥</p>
          <p>3580</p>
        </div>
      </div>
      <button class="order-btn">立即购买</button>
    </footer>
  </section>
  <!-- e 产品详情 -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
import Summary from './summary/summary.vue'
import Quality from './quality/quality.vue'
import Sample from './sample/sample.vue'
import Guidance from './guidance/guidance.vue'
export default {
  name: 'Product',
  components: {
    Theme,
    Summary,
    Quality,
    Sample,
    Guidance
  },
  data () {
    return {
      theme: {
        title: 'iPhone 6S'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./product.scss";
</style>
