<template>
  <section class="order-all">
    <div class="all-content">
      <!-- 待付款 -->
      <section class="order-pay">
        <div class="pay-title">
          <p class="title-time">2018-12-19 12:29:11</p>
          <p class="title-sign">待付款</p>
        </div>
        <div class="pay-detail">
          <div class="detail-img">
            <img src="../../../../assets/images/shop-picture.png">
          </div>
          <div class="detail-content">
            <p class="content-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</p>
            <div class="content-price-number">
              <p class="content-price">￥580.00</p>
              <p class="content-number">x1</p>
            </div>
          </div>
        </div>
        <div class="pay-summary">
          <p>共1件商品 合计:
            <span class="summary-price">￥580</span>
            <span class="summary-fare"> (含运费￥0.00)</span>
          </p>
        </div>
        <div class="pay-topay">
          <button>去支付</button>
        </div>
      </section>
      <!-- 交易成功 -->
      <section class="order-item" v-for="index in 3" :key="index">
        <div class="item-title">
          <p class="title-time">2018-12-19 12:29:11</p>
          <p class="title-sign">交易成功</p>
        </div>
        <div class="item-detail">
          <div class="detail-img">
            <img src="../../../../assets/images/shop-picture.png">
          </div>
          <div class="detail-content">
            <p class="content-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</p>
            <div class="content-price-number">
              <p class="content-price">￥580.00</p>
              <p class="content-number">x1</p>
            </div>
          </div>
        </div>
        <div class="item-summary">
          <p>共1件商品 合计:
            <span class="summary-price">￥580</span>
            <span class="summary-fare"> (含运费￥0.00)</span>
          </p>
        </div>
        <div class="item-button">
          <button>删除订单</button>
          <button>评价订单</button>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
  export default {
  }

</script>
<style scoped lang="scss">
  @import './order-all.scss'

</style>
