<template>
  <section class="order-detail">
    <Headbar HeadbarName="订单信息确认"></Headbar>
    <section class="order-detail-content">
      <div class="content-order-information">
        <div class="information-person">
          <div class="person-number-status">
            <p class="person-number">540356123454</p>
            <p class="person-status">待付款</p>
          </div>
          <div class="person-name-address">
            <p class="person-name">
              <i class="name-icon"></i>
              <span>李虎 1555753525</span>
            </p>
            <p class="address-receipt">安徽省 合肥市 高新区 创新产业园2期 创新产业园2期 创新产业园2期</p>
          </div>
        </div>
        <div class="information-phone">
          <div class="phone-detail">
            <div class="detail-img">
              <img src="../../../static/images/shop-picture.png">
            </div>
            <div class="detail-content">
              <p class="content-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</p>
              <div class="content-price-number">
                <p class="content-price">￥580.00</p>
                <p class="content-number">x1</p>
              </div>
            </div>
          </div>
          <ul class="phone-list">
            <li class="list-item">
              <p class="item-title">商品总价</p>
              <p class="item-value">￥5800</p>
            </li>
            <li class="list-item">
              <p class="item-title">运费</p>
              <p class="item-value">￥0</p>
            </li>
            <li class="list-item">
              <p class="item-title">支付方式</p>
              <p class="item-value">支付宝</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="detail-button">
      <button class="button-delete">删除订单</button>
      <button class="button-pay">去支付</button>
    </footer>
  </section>
</template>
<script>
  import Headbar from '@/components/common/headbar/headbar.vue'

  export default {
    components: {
      Headbar
    }
  }

</script>
<style scoped lang="scss">
  @import './order-detail.scss';

</style>
