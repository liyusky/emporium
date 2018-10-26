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
      <li class="category-item" v-for="(item, index) in category1" :key="index" @click="gotoPage(item.url)">
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
    <!-- <div class="shop-scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
      <div class="loading">
        <div class="loading-img" v-if="loadImgShow">
          <img src="../../../assets/images/refresh.gif">
        </div>
        <p class="loading-tip">{{loadTip}}</p>
      </div>
    </div> -->
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
      category1: [
        {
          icon: '../../../../static/images/shoji.png',
          title: '手机通讯',
          url: 'phone-shop'
        },
        {
          icon: '../../../../static/images/diannao.png',
          title: '电脑城',
          url: 'computer-shop'
        },
        {
          icon: '../../../../static/images/meizhuang.png',
          title: '美妆个护',
          url: 'beauty-shop'
        },
        {
          icon: '../../../../static/images/zhubao.png',
          title: '珠宝首饰',
          url: 'jewelry-shop'
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
      Http.send({
        url: 'mall',
        data: {
          productId: '10000' + this.categroyNo,
          pageIndex: this.page
        }
      }).success(data => {
        console.log(data)
        if (data.length === 0) {
          this.loadImgShow = false
          this.loadTip = '没有更多数据了'
          this.busy = true
          return
        }
        this.exhibition = this.exhibition.concat(data)
        this.categroyNo++
        if (this.categroyNo === 30) this.categroyNo = 31
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
      let endTime = new Date(2018, 9, 30)
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
