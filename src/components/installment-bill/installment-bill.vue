<template>
  <section class="installment-bill">
    <Headbar HeadbarName="分期账单"></Headbar>
    <section class="bill-content">
      <div class="content-info">
        <div class="info-img">
          <img src="../../../static/images/shop-picture.png">
        </div>
        <div class="info-detail">
          <p class="detail-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</p>
          <div class="detail-price-number">
            <p class="detail-price">￥580.00</p>
            <p class="detail-number">x1</p>
          </div>
        </div>
      </div>
      <div class="content-total">
        <p class="total-title">商品总价</p>
        <p class="total-price">￥580.00</p>
      </div>
      <div class="content-select">
        <div class="select-title">
          <p>期数选择</p>
        </div>
        <div class="select-periods">
          <div class="periods-item" :class="{active:true}">
            <p class="item-number">1期</p>
            <p class="item-price">月供￥580.00元</p>
          </div>
          <div class="periods-item">
            <p class="item-number">2期</p>
            <p class="item-price">月供￥5800.00元</p>
          </div>
          <div class="periods-item">
            <p class="item-number">3期</p>
            <p class="item-price">月供￥580.00元</p>
          </div>
          <div class="periods-item">
            <p class="item-number">4期</p>
            <p class="item-price">月供￥580.00元</p>
          </div>
          <div class="periods-item">
            <p class="item-number">5期</p>
            <p class="item-price">月供￥580.00元</p>
          </div>
          <div class="periods-item">
            <p class="item-number">6期</p>
            <p class="item-price">月供￥580.00元</p>
          </div>
        </div>
        <div class="select-monthpay">
          <p class="monthpay-title">每月需还</p>
          <p class="monthpay-price"><span>￥580.00</span><i></i></p>
        </div>
      </div>
    </section>
    <footer class="bill-foot">
      <button class="foot-rightbut">立即付款</button>
    </footer>
    <RightPay></RightPay>
  </section>
</template>
<script>
  import Headbar from '@/components/common/headbar/headbar.vue'
  import RightPay from '@/components/mask/mask-rightpay/mask-rightpay.vue'
  export default {
    data() {
      return {

      }
    },
    components: {
      Headbar,
      RightPay
    }
  }

</script>
<style scoped lang="scss">
  @import './installment-bill.scss';

</style>
