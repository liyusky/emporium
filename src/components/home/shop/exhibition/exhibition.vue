<template>
  <!-- s  -->
  <section class="exhibition">
    <div class="exhibition-title">
      <h3 class="title-name">{{exhibition.Key}}</h3>
      <p class="title-more">
        <span>更多</span>
        <i class="iconfont icon-jiantou1"></i>
      </p>
    </div>
    <div class="exhibition-banner">
      <img src="../../../../assets/images/shoji-banner.png">
    </div>
    <ul class="exhibition-goods">
      <div class="swiper-container goods">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in exhibition.PhoneList" :key="index">
            <Product :product="item" ></Product>
          </div>
        </div>
      </div>
    </ul>
  </section>
  <!-- e  -->
</template>

<script>
import Swiper from 'Swiper'
import Product from '../product/product.vue'
export default {
  name: 'Exhibition',
  props: ['exhibition'],
  components: {
    Product
  },
  data () {
    return {
      goodsSwiper: null
    }
  },
  created () {
    this.$nextTick(() => {
      this.initGoodsSwiper()
    })
  },
  methods: {
    initGoodsSwiper () {
      if (this.goodsSwiper !== null) return
      this.goodsSwiper = new Swiper('.goods', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
        freeMode: true,
        observer: true,
        observeParents: true
      })
      // this.bannerSwiper.detachEvents()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./exhibition.scss";
</style>
