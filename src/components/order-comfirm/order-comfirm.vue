<template>
  <section class="order-comfirm">
    <Theme :theme="theme"></Theme>
    <div class="confirm-content">
      <div class="content-address">
        <div class="address-process">
          <img src="">
        </div>
        <div class="address-detail">
          <div class="detail-person-info">
            <p class="info-name-telphone">
              <i class="info-icon"></i>
              <span>李虎 1555753525</span>
            </p>
            <p class="info-receipt-place">安徽省 合肥市 高新区 创新产业园2期</p>
          </div>
          <i class="detail-arrow"></i>
        </div>
      </div>
      <div class="content-order-number">
        <p class="title-time">产品详情</p>
      </div>
      <div class="content-detail">
        <div class="detail-img">
          <img src="">
        </div>
        <div class="detail-content">
          <p class="content-title">{{phone.Title}}</p>
          <div class="content-price-number">
            <p class="content-price">￥{{phone.nowPrice}}</p>
            <p class="content-number">x1</p>
          </div>
        </div>
      </div>
      <!-- <div class="content-service">
        <div class="service-item">
          <p class="item-title">[服务]整机清洁</p>
          <p class="item-price">￥0.00</p>
        </div>
        <div class="service-item">
          <p class="pasting-item">[服务]贴膜服务</p>
          <p class="item-price">￥9.99</p>
        </div>
      </div> -->
      <div class="content-distribution">
        <p class="distribution-title">配送方式</p>
        <p class="distribution-express">顺风快递</p>
      </div>
      <div class="content-leave-message">
        <textarea class="leave-message" id="leave-message" name="leave-message" maxlength="50" rows="1" placeholder="给商家留言 (最多50字)"></textarea>
      </div>
      <div class="content-summary">
        <p>
          <span>共1件商品 合计</span>
          <span class="summary-price">￥{{phone.nowPrice}}</span>
        </p>
      </div>
      <div class="content-way">
        <div class="way-title">
          <span>支付方式</span>
        </div>
        <div class="way-item">
          <div class="item-detail">
            <div class="detail-name">
              <i class="iconfont icon-dacong"></i>
              <span>借条大师支付</span>
            </div>
          </div>
          <i class="iconfont icon-dacong"></i>
        </div>
        <div class="way-item">
          <div class="item-detail">
            <div class="detail-name">
              <i class="iconfont icon-dacong"></i>
              <span>微信支付</span>
            </div>
          </div>
          <i class="iconfont icon-dacong"></i>
        </div>
        <div class="way-item">
          <div class="item-detail">
            <div class="detail-name">
              <i class="iconfont icon-dacong"></i>
              <span>支付宝支付</span>
            </div>
          </div>
          <i class="iconfont icon-dacong"></i>
        </div>
      </div>
    </div>
    <div class="comfirm-submit">
      <p class="submit-total">
        <span>合计：</span>
        <span>￥5949</span>
      </p>
      <button class="submit-button">提交订单</button>
    </div>
  </section>
</template>
<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'OrderComfirm',
  props: ['phone'],
  data () {
    return {
      theme: {
        title: '订单信息确认'
      }
    }
  },
  components: {
    Theme
  }
}
</script>
<style scoped lang="scss">
@import './order-confirm.scss';
</style>
