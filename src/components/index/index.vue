<template>
  <section class="index">
    <header class="index-header">
      <img src="../../../static/images/header.png" >
    </header>
    <section class="index-advertising">
      <img src="../../../static/images/advertising.png">
    </section>
    <ul class="index-brand">
      <li class="brand-classify" v-for="(brandItem, index) in brandCount" :key="index">
        <div class="classify-title">
          <div class="title-icon-left">
            <img src="../../../static/images/title-icon.png">
          </div>
          <p class="title-text">iphone5/5s</p>
          <div class="title-icon-right">
            <img src="../../../static/images/title-icon02.png">
          </div>
        </div>
        <ul class="classify-shop-list">
          <li class="list-item" v-for="(listItem, index) in listCount" :key="index">
            <div class="item-shop-picture">
              <img src="../../../static/images/shop-picture.png">
            </div>
            <h3 class="item-title">全新国行  iPhone5</h3>
            <div class="item-parameter">
              <div class="parameter-item">16GB</div>
              <div class="parameter-item">9成新</div>
            </div>
            <div class="item-price">
              <span class="price-now">￥580.14</span>
              <span class="price-installment">x3期</span>
              <span class="price-old">市场价2338</span>
            </div>
            <div class="item-economize">
              <span class="economize-notice">省</span>
              <span class="economize-price">￥751</span>
            </div>
            <div class="item-badge"><span>已检测</span></div>
          </li>
        </ul>
      </li>
    </ul>
    <Foot :urlRouter="$route.path"></Foot>
  </section>
</template>

<script>
import Foot from '@/components/common/footer/footer.vue'
export default {
  name: 'index',
  data () {
    return {
      brandCount: 3,
      listCount: 4
    }
  },
  components: {
    Foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import './index.scss';
</style>
