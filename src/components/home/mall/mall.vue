<template>
  <section class="index">
    <div class="index-content">
      <header class="content-header">
        <img src="">
      </header>
      <section class="content-advertising">
        <img src="">
      </section>
      <ul class="content-brand">
        <li class="brand-classify" v-for="(brandItem, index) in brandCount" :key="index" @click="gotoPage(brandItem)">
          <div class="classify-title">
            <div class="title-icon-left">
              <img src="">
            </div>
            <p class="title-text">iphone5/5s</p>
            <div class="title-icon-right">
              <img src="">
            </div>
          </div>
          <ul class="classify-shop-list">
            <li class="list-item" v-for="(listItem, index) in listCount" :key="index">
              <div class="item-shop-picture">
                <img src="">
              </div>
              <p class="item-title">全新国行 iPhone5</p>
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
              <div class="item-badge">
                <span>已检测</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- <transition name=fade>
    </transition> -->
  </section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      brandCount: 3,
      listCount: 4
    }
  },
  methods: {
    gotoPage (id) {
      this.$router.push({
        name: 'product',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import './mall.scss';
</style>
