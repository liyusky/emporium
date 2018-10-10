<template>
  <!-- s  -->
  <section class="shop">
    <div class="shop-bg">
      <img src="" alt="">
    </div>
    <div class="shop-search">
      <i class="iconfont icon-xiaoxi"></i>
      <div class="search-input">
        <i class="iconfont icon-xiaoxi"></i>
        <input type="text" placeholder="请输入查询条件">
      </div>
      <i class="iconfont icon-xiaoxi"></i>
    </div>
    <div class="shop-banner">
      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in 4" :key="index">
            <img src="../../../assets/images/header.png">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <ul class="shop-category">
      <li class="category-item">
        <img class="item-icon" src="">
        <p class="item-title">手机通讯</p>
      </li>
    </ul>
    <div class="shop-recommend">
      <img src="">
    </div>
    <div class="shop-look-at-look">
      <div class="look-saccade">
        <p>
          <i class=""></i>
          <span>逛一逛</span>
        </p>
      </div>
      <ul class="look-guide">
        <li class="look-tip">
          <div class="tip-messgae">
            <p class="messgae-title"></p>
            <p class="messgae-introduce"></p>
          </div>
          <img class="tip-image" src="">
        </li>
      </ul>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import Swiper from 'Swiper'
export default {
  name: 'Shop',
  data () {
    return {
      bannerSwiper: null
    }
  },
  created () {
    this.$nextTick(() => {
      this.initBannerSwiper()
    })
  },
  methods: {
    // banner轮播图
    initBannerSwiper () {
      if (this.bannerSwiper !== null) return
      this.bannerSwiper = new Swiper('.banner', {
        effect: 'coverflow',
        loop: true,
        speed: 900,
        onlyExternal: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: -15,
          stretch: -75,
          depth: 1000,
          modifier: 1,
          slideShadows: true
        },
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        observer: true,
        observeParents: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
      // this.bannerSwiper.detachEvents()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./shop.scss";
</style>
