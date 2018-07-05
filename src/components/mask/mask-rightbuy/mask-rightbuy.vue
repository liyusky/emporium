<template>
  <section class="mask-rightbuy">
    <div class="rightbuy-commodity">
      <div class="commodity-img">
        <img src="../../../../static/images/shop-picture.png">
      </div>
      <div class="commodity-detail">
        <p class="detail-name">95新 iPhone 6S 128G黑</p>
        <p class="detail-price">￥3580</p>
        <p class="detail-advantage">顺丰包邮/原装正品/七天包退/一年保修</p>
      </div>
      <i class="commodity-close"></i>
    </div>
    <div class="rightbuy-property">
      <div class="property-item">
        <p class="item-title">网络</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">网络:移动4G，联通4G，电信4G</div>
        </div>
      </div>
     <div class="property-item">
        <p class="item-title">版本</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">版本:其他版本</div>
        </div>
      </div>
      <div class="property-item">
        <p class="item-title">服务</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">整机清洗:<span>￥0.00</span></div>
          <div class="attribute-value">贴膜服务:<span>￥9.90</span></div>
          <div class="attribute-value">运费险:<span>￥9.90</span></div>
        </div>
      </div>
    </div>
    <button class="rightbuy-button">立即购买</button>
  </section>
</template>
<script>
  export default {

  }

</script>
<style scoped lang="scss">
  @import './mask-rightbuy.scss';

</style>
