<template>
  <!-- s 购买 -->
  <section class="rightbuy">
    <div class="rightbuy-commodity">
      <div class="commodity-img">
        <img :src="buy.Icon">
      </div>
      <div class="commodity-detail">
        <p class="detail-name">{{buy.Title}}</p>
        <p class="detail-price">{{buy.nowPrice}}</p>
        <p class="detail-advantage">{{buy.PaymentType}}</p>
      </div>
      <i class="iconfont icon-dacong" @click="closeModal"></i>
    </div>
    <div class="rightbuy-property">
      <div class="property-item">
        <p class="item-title">网络</p>
        <div class="item-attribute">
          <div class="attribute-value active" :class="{active:true}">网络:{{buy.NetType}}</div>
        </div>
      </div>
     <!-- <div class="property-item">
        <p class="item-title">版本</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">版本:其他版本</div>
        </div>
      </div> -->
      <!-- <div class="property-item">
        <p class="item-title">服务</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">整机清洗:<span>￥0.00</span></div>
          <div class="attribute-value">贴膜服务:<span>￥9.90</span></div>
          <div class="attribute-value">运费险:<span>￥9.90</span></div>
        </div>
      </div> -->
    </div>
    <button class="rightbuy-button" @click="gotoPage('order-comfirm')">立即购买</button>
  </section>
  <!-- e 购买 -->
</template>
<script>
export default {
  name: 'Buy',
  props: ['buy'],
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    },
    gotoPage (page) {
      this.$router.push({
        name: page,
        params: {
          phone: this.buy
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import './buy.scss';
</style>
