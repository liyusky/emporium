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
      <li class="category-item" @click="gotoPage('phone-shop')">
        <img class="item-icon" src="../../../assets/images/shop/shoji.png">
        <p class="item-title">手机通讯</p>
      </li>
      <li class="category-item" @click="gotoPage('computer-shop')">
        <img class="item-icon" src="../../../assets/images/shop/diannao.png">
        <p class="item-title">电脑城</p>
      </li>
      <li class="category-item" @click="gotoPage('beauty-shop')">
        <img class="item-icon" src="../../../assets/images/shop/meizhuang.png">
        <p class="item-title">美妆个护</p>
      </li>
      <li class="category-item" @click="gotoPage('jewelry-shop')">
        <img class="item-icon" src="../../../assets/images/shop/zhubao.png">
        <p class="item-title">珠宝首饰</p>
      </li>
    </ul>
    <ul class="shop-category">
      <li class="category-item">
        <img class="item-icon" src="../../../assets/images/shop/youhuiquan.png">
        <p class="item-title">优惠券</p>
      </li>
      <li class="category-item">
        <img class="item-icon" src="../../../assets/images/shop/qianggou.png">
        <p class="item-title">限时抢购</p>
      </li>
      <li class="category-item">
        <img class="item-icon" src="../../../assets/images/shop/yaoqing.png">
        <p class="item-title">邀请有礼</p>
      </li>
      <li class="category-item">
        <img class="item-icon" src="../../../assets/images/shop/fenlei.png">
        <p class="item-title">分类</p>
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
        <li class="look-tip">
          <div class="tip-messgae">
            <p class="messgae-title">3C数码</p>
            <p class="messgae-introduce">年轻人潮玩社区</p>
          </div>
          <img class="tip-image" src="../../../assets/images/shop/erji.png">
        </li>
        <li class="look-tip">
          <div class="tip-messgae">
            <p class="messgae-title">美妆护肤</p>
            <p class="messgae-introduce">美妆尖货低至5折</p>
          </div>
          <img class="tip-image" src="../../../assets/images/shop/huazhuangpin.png">
        </li>
        <li class="look-tip">
          <div class="tip-messgae">
            <p class="messgae-title">珠宝首饰</p>
            <p class="messgae-introduce">奢华配饰低至5折</p>
          </div>
          <img class="tip-image" src="../../../assets/images/shop/zhuanshi.png">
        </li>
        <li class="look-tip">
          <div class="tip-messgae">
            <p class="messgae-title">户外运动</p>
            <p class="messgae-introduce">全场正品保障</p>
          </div>
          <img class="tip-image" src="../../../assets/images/shop/xiezi.png">
        </li>
      </ul>
    </div>
    <div class="shop-rush-purchase">
      <div class="purchase-title">
        <div class="title-message">
          <span>限时抢购</span>
          <span>|</span>
          <span>距结束</span>
          <div class="message-hour">{{countDownHour}}</div>
          <span>:</span>
          <div class="message-minute">{{countMinute}}</div>
          <span>:</span>
          <div class="message-seconds">{{countDownSecound}}</div>
        </div>
        <div class="title-more">
          <span>更多</span>
          <i class="iconfont icon-jiantou1"></i>
        </div>
      </div>
      <Goods :goods="purchase" :container="'goods-purchase'"></Goods>
    </div>
    <Exhibition v-if="exhibition.length" :exhibition="item" :index="index" v-for="(item, index) in exhibition" :key="index"></Exhibition>
    <InfiniteScroll @LOADMORE_EVENT="loadMore" :loadImgShow="loadImgShow" :loadTip="loadTip" :busy="busy"></InfiniteScroll>
    <ModalDialog v-show = "dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT = "closeModal"></ModalDialog>
  </section>
  <!-- e  -->
</template>

<script>
import ModalDialog from '../../common/alert-modal/modal-dialog/modal-dialog.vue'
import InfiniteScroll from '../../common/infinite-scroll/infinite-scroll.vue'
import Goods from './goods/goods.vue'
import Exhibition from './exhibition/exhibition.vue'
import Http from '../../../class/http.class.js'
import Swiper from 'swiper'
export default {
  name: 'Shop',
  components: {
    Goods,
    Exhibition,
    ModalDialog,
    InfiniteScroll
  },
  data () {
    return {
      page: 1,
      categroyNo: 27,
      busy: false,
      loadTip: '加载中...',
      loadImgShow: true,
      dialogShow: false,
      Title: {
        text: ''
      },
      bottom: {
        pullText: '上拉加载',
        triggerText: '释放更新',
        loadingText: '加载中...',
        doneText: '加载完成',
        failText: '加载失败',
        loadedStayTime: 400,
        stayDistance: 50,
        triggerDistance: 70
      },
      refreshSuccess: false,
      exhibition: [],
      purchase: [],
      bannerSwiper: null,
      countDownHour: null,
      countMinute: null,
      countDownSecound: null,
      lastData: []
    }
  },
  created () {
    this.timeCycle()
    this.init()
  },
  mounted () {
    this.$nextTick(() => {
      this.initBannerSwiper()
    })
  },
  methods: {
    // banner轮播图
    initBannerSwiper () {
      if (this.bannerSwiper !== null) return
      /* eslint-disable */
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
          type: 'fraction'
        }
      })
      // this.bannerSwiper.detachEvents()
    },
    init () {
      Http.send({
        url: 'mall',
        data: {
          productId: '1000027',
          pageIndex: this.page
        }
      }).success(data => {
        this.exhibition = data
        this.purchase = data[0].PhoneList
        this.categroyNo++
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      this.busy = true
      Http.send({
        url: 'mall',
        data: {
          productId: '10000' + this.categroyNo,
          pageIndex: this.page
        }
      }).success(data => {
        if (data.length === 0) {
          this.loadImgShow = false
          this.loadTip = '没有更多数据了'
          this.busy = true
          return
        }
        this.exhibition = this.exhibition.concat(data)
        this.categroyNo++
        if (this.categroyNo === 30) this.categroyNo = 31
        this.busy = false
      }).fail(data => {
        this.loadTip = '加载失败'
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    },
    timeCycle () {
      setInterval(this.countDown, 1000)
    },
    countDown () {
      let endTime = new Date(2018, 10, 5)
      let nowTime = new Date()
      let diffTime = endTime.getTime() - nowTime.getTime()
      this.countDownHour = this.fillZero(parseInt(diffTime / 1000 / 60 / 60))
      this.countMinute = this.fillZero(parseInt(diffTime / 1000 / 60 % 60))
      this.countDownSecound = this.fillZero(parseInt(diffTime / 1000 % 60))
    },
    fillZero (time) {
      return time < 10 ? '0' + time : '' + time
    },
    closeModal () {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./shop.scss";
</style>
