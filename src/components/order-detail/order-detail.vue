<template>
  <section class="order-detail">
    <Theme :theme="theme"></Theme>
    <section class="order-detail-content">
      <div class="content-order-information">
        <div class="information-person">
          <div class="person-number-status">
            <p class="person-number">{{orderDetail.orderNumber}}</p>
            <p class="person-status">{{orderDetail.StatusTitle}}</p>
          </div>
          <div class="person-detail">
            <i class="iconfont icon-suan"></i>
            <div class="detail-name-address">
              <h3 class="detail-name">{{orderDetail.orderName}} {{orderDetail.telphone}}</h3>
              <p class="detail-address">{{orderDetail.orderAddress}}</p>
            </div>
          </div>
        </div>
        <div class="information-phone">
          <div class="phone-detail">
            <div class="detail-img">
              <img :src="orderDetail.Icon">
            </div>
            <div class="detail-content">
              <h3 class="content-title">{{orderDetail.Title}}</h3>
              <div class="content-price-number">
                <p class="content-price">￥{{orderDetail.nowPrice}}</p>
                <p class="content-number">x{{orderDetail.BuyNum}}</p>
              </div>
            </div>
          </div>
          <ul class="phone-list">
            <li class="list-item">
              <p class="item-title">商品总价</p>
              <p class="item-value">￥{{orderDetail.BuyNum * orderDetail.nowPrice}}</p>
            </li>
            <li class="list-item">
              <p class="item-title">运费</p>
              <p class="item-value">￥{{orderDetail.freight}}</p>
            </li>
            <li class="list-item">
              <p class="item-title">支付方式</p>
              <p class="item-value">{{orderDetail.PaymentMethod}}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="detail-button">
      <div class="button-item" v-if="orderDetail.StatusName == 'orderPay'">
        <button class="item-right">{{orderDetail.buttonDeleteName}}</button>
        <button class="item-left">{{orderDetail.buttonPayName}}</button>
      </div>
      <div class="button-item" v-else-if="orderDetail.StatusName != 'orderPay'">
        <button class="item-right">{{orderDetail.buttonLeftName}}</button>
        <button class="item-left">{{orderDetail.buttonRightName}}</button>
      </div>
    </footer>
  </section>
</template>
<script>
import Theme from '../common/theme/theme.vue'
export default {
  data () {
    return {
      theme: {
        title: '订单详情'
      },
      id: 0,
      orderDetail: null
    }
  },
  props: ['orderNum'],
  components: {
    Theme
  }
}
</script>

<style scoped lang="scss">
@import './order-detail.scss';
</style>
