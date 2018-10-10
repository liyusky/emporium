<template>
  <!-- s  -->
  <section class="shop">
    <div class="shop-header">
      <div class="header-bg">
        <img src="../../../assets/images/shop/head-bg.png">
      </div>
      <div class="header-search">
        <i class="iconfont icon-fenlei1"></i>
        <div class="search-input">
          <i class="iconfont icon-sousuo"></i>
          <input type="text" placeholder="请输入查询条件">
        </div>
        <i class="iconfont icon-gouwuche"></i>
      </div>
      <div class="header-banner">
        <div class="swiper-container banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../../../assets/images/shop/head-banner.png">
            </div>
            <div class="swiper-slide">
              <img src="../../../assets/images/header.png">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
    </div>
    <ul class="shop-category">
      <li class="category-item" v-for="(item, index) in category1" :key="index">
        <img class="item-icon" :src="item.icon">
        <p class="item-title">{{item.title}}</p>
      </li>
    </ul>
    <ul class="shop-category">
      <li class="category-item" v-for="(item, index) in category2" :key="index">
        <img class="item-icon" :src="item.icon">
        <p class="item-title">{{item.title}}</p>
      </li>
    </ul>
    <div class="shop-recommend">
      <img src="../../../assets/images/shop/guanggao.png">
    </div>
    <div class="shop-look-at-look">
      <div class="look-saccade">
        <p>
          <i class="iconfont icon-fenlei"></i>
          <span>逛一逛</span>
        </p>
      </div>
      <ul class="look-guide">
        <li class="look-tip" v-for="(item, index) in guide" :key="index">
          <div class="tip-messgae">
            <p class="messgae-title">{{item.title}}</p>
            <p class="messgae-introduce">{{item.introduce}}</p>
          </div>
          <img class="tip-image" :src="item.image">
        </li>
      </ul>
    </div>
    <div class="shop-rush-purchase">
      <div class="purchase-title">
        <div class="title-message">
          <span>限时抢购</span>
          <span>|</span>
          <span>距结束</span>
          <div class="message-hour">00</div>
          <span>:</span>
          <div class="message-minute">21</div>
          <span>:</span>
          <div class="message-seconds">05</div>
        </div>
        <div class="title-more">
          <span>更多</span>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </div>
      <div class="purchase-goods">
        <Product :product="product" v-for="(item, index) in purchase" :key="index"></Product>
      </div>
      <Exhibition :exhibition="item" v-for="(item, index) in exhibition" :key="index"></Exhibition>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import Swiper from 'Swiper'
import Product from './product/product.vue'
import Exhibition from './exhibition/exhibition.vue'
import Http from '../../../class/http.class.js'
export default {
  name: 'Shop',
  components: {
    Product,
    Exhibition
  },
  data () {
    return {
      page: 1,
      exhibition: null,
      category1: [
        {
          icon: '../../../../static/images/shoji.png',
          title: '手机通讯'
        },
        {
          icon: '../../../../static/images/diannao.png',
          title: '电脑城'
        },
        {
          icon: '../../../../static/images/meizhuang.png',
          title: '美妆个护'
        },
        {
          icon: '../../../../static/images/zhubao.png',
          title: '珠宝首饰'
        }
      ],
      category2: [
        {
          icon: '../../../../static/images/youhuiquan.png',
          title: '优惠券'
        },
        {
          icon: '../../../../static/images/qianggou.png',
          title: '限时抢购'
        },
        {
          icon: '../../../../static/images/yaoqing.png',
          title: '邀请有礼'
        },
        {
          icon: '../../../../static/images/fenlei.png',
          title: '分类'
        }
      ],
      guide: [
        {
          title: '3C数码',
          introduce: '年轻人潮玩社区',
          image: '../../../../static/images/erji.png'
        },
        {
          title: '美妆护肤',
          introduce: '美妆尖货低至5折',
          image: '../../../../static/images/huazhuangpin.png'
        },
        {
          title: '珠宝首饰',
          introduce: '奢华配饰低至5折',
          image: '../../../../static/images/zhuanshi.png'
        },
        {
          title: '户外运动',
          introduce: '全场正品保障',
          image: '../../../../static/images/xiezi.png'
        }
      ],
      purchase: [],
      bannerSwiper: null
    }
  },
  created () {
    this.init()
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
          el: '.swiper-pagination',
          type: 'bullets'
        }
      })
      // this.bannerSwiper.detachEvents()
    },
    init () {
      Http.send({
        url: 'mall',
        data: {
          Pageindex: this.page
        }
      }).success(data => {
        this.exhibition = data
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./shop.scss";
</style>
