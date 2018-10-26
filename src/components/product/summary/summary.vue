<template>
  <!-- s 产品简介 -->
  <section class="product-summary">
    <!-- <div class="summary-slide">
      <img src="https://api.vtrois.com/image/750x480/bbbfc0">
    </div> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.ArchiveUri">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="summary-content">
      <div class="content-bill">
        <div class="bill-amount">
          <p class="amount-current">
            <span>￥</span>
            <span>{{summary.nowPrice}}</span>
          </p>
          <p class="amount-original">
            <span>￥</span>
            <span>{{summary.originalPrice}}</span>
          </p>
        </div>
        <div class="bill-installments">
          <span>￥{{summary.InstallmentAmount}}</span>
          <span> ×{{summary.InstallmentNum}}期</span>
          <i class="iconfont icon-arrow-right"></i>
        </div>
      </div>
      <div class="content-guarantee">
        <div class="guarantee-item">
          <i class="iconfont icon-weixuanze"></i>
          <p class="item-text">正品保证</p>
        </div>
        <div class="guarantee-item">
          <i class="iconfont icon-weixuanze"></i>
          <p class="item-text">全场包邮</p>
        </div>
        <div class="guarantee-item">
          <i class="iconfont icon-weixuanze"></i>
          <p class="item-text">闪电发货</p>
        </div>
        <div class="guarantee-item">
          <i class="iconfont icon-weixuanze"></i>
          <p class="item-text">7天退换</p>
        </div>
      </div>
      <div class="content-detail">
        <div class="detail-badge">
          <div class="badge-left"><span>正品</span></div>
          <div class="badge-right"><span>自营</span></div>
        </div>
        <p class="detail-name">{{summary.Title}}</p>
        <p class="detail-sign">{{summary.ProductName}}</p>
      </div>
      <div class="content-parameter">
        <div class="parameter-item">
          <div class="item-title">已选</div>
          <div class="item-value">
            <p class="value-text">4GB + 64GB，金色</p>
          </div>
          <div class="item-more">
            <i class="iconfont icon-shenglvehao"></i>
          </div>
        </div>
        <div class="parameter-item">
          <div class="item-title">促销</div>
          <div class="item-value">
            <p class="value-text">[包税]商品售价已包含税费，无需另付税费</p>
          </div>
          <div class="item-more">
            <i class="iconfont icon-shenglvehao"></i>
          </div>
        </div>
        <div class="parameter-item">
          <div class="item-title">配送</div>
          <div class="item-value">
            <p class="value-text">至 安庆安庆市开发区</p>
            <p class="value-text">24:00前完成支付，预计8月28日送达</p>
          </div>
        </div>
        <div class="parameter-item">
          <div class="item-title">说明</div>
          <div class="item-value">
             <p class="value-text">包税丨假一赔十丨7无忧退货 丨自营保税仓发货</p>
          </div>
          <div class="item-more">
            <i class="iconfont icon-shenglvehao"></i>
          </div>
        </div>
      </div>
      <!-- <div class="content-characteristic" @click="openModal('Parameter')">
        <span>产品参数</span>
        <i class="iconfont icon-shenglvehao"></i>
      </div> -->
    </div>
  </section>
  <!-- e 产品简介 -->
</template>

<script>
export default {
  name: 'Summary',
  props: ['summary', 'banner'],
  data () {
    return {
      summarySwiper: null
    }
  },
  created () {
    this.$nextTick(function () {
      this.initSummarySwiper()
    })
  },
  methods: {
    openModal (modal) {
      this.$emit('OPEN_MODAL_EVENT', modal)
    },
    initSummarySwiper () {
      if (this.summarySwiper !== null) return
      this.summarySwipernew = new Swiper('.swiper-container', {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        freeMode: false,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          longSwipesRatio: 0.3,
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./summary.scss";
</style>
