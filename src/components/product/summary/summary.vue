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
      <div class="content-phone">
        <h3 class="phone-name">{{summary.Title}}</h3>
        <div class="phone-version">
          <p>
            <span>网络:</span>
            <span>{{summary.NetType}}</span>
          </p>
          <!-- <p>
            <span>版本:</span>
            <span>其他版本</span>
          </p> -->
        </div>
        <div class="phone-bill">
          <div class="bill-amount">
            <p class="amount-current">
              <span>￥</span>
              <span>{{summary.nowPrice}}</span>
            </p>
            <p class="amount-original">
              <span>{{summary.Degree == '100' ? '全' : summary.Degree + '成'}}新</span>
              <span>￥{{summary.originalPrice}}</span>
            </p>
          </div>
          <div class="bill-reduce">
            <p>省</p>
            <p>￥{{parseFloat(summary.originalPrice - summary.nowPrice).toFixed(2)}}</p>
          </div>
        </div>
        <div class="phone-installments">
          <span>￥{{summary.InstallmentAmount}}</span>
          <span> ×{{summary.InstallmentNum}}期</span>
        </div>
      </div>
      <!-- <div class="content-gift">
        <div>赠品</div>
        <p>国产苹果充电套装（充电头+数据线）</p>
      </div> -->
      <div class="content-tip">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-baozhang1"></use>
        </svg>
        <span>{{summary.Guarantee}}</span>
      </div>
      <div class="content-pay-method">
        <div class="method-selected" @click="openModal('PaymentMethod')">
          <div class="selected-tip">
            <b>支付方式</b>
          </div>
          <i class="iconfont icon-shenglvehao"></i>
        </div>
        <ul class="method-selectable">
          <li class="selectable-item" v-for="(item, index) in summary.PaymentTypeArr" :key="index">
            <svg class="icon" aria-hidden="true" v-if="item.icon">
              <use :xlink:href="item.icon"></use>
            </svg>
            <img v-else-if="!item.icon" src="../../../assets/images/receipt-master.png">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="content-characteristic" @click="openModal('Parameter')">
        <span>产品参数</span>
        <i class="iconfont icon-shenglvehao"></i>
      </div>
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
      this.summarySwipernew = new window.vueModule.Swiper('.swiper-container', {
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
