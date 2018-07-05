<template>
  <section class="order-comfirm">
    <Headbar HeadbarName="订单信息确认"></Headbar>
    <transition name="fade">
      <div class="confirm-content" v-show="animationShow">
        <div class="content-address">
          <div class="address-process">
            <img src="../../../static/images/process-bar.png">
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
          <p class="title-time">523154621543</p>
        </div>
        <div class="content-detail">
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
        <div class="content-service">
          <div class="service-item">
            <p class="item-title">[服务]整机清洁</p>
            <p class="item-price">￥0.00</p>
          </div>
          <div class="service-item">
            <p class="pasting-item">[服务]贴膜服务</p>
            <p class="item-price">￥9.99</p>
          </div>
        </div>
        <div class="content-distribution">
          <p class="distribution-title">配送方式</p>
          <p class="distribution-express">(顺风快递)</p>
        </div>
        <div class="content-leave-message">
          <textarea class="leave-message" id="leave-message" name="leave-message" maxlength="50" rows="1" placeholder="给商家留言 (最多50字)"></textarea>
        </div>
        <div class="content-summary">
          <p>共1件商品 合计
            <span class="summary-price">￥580</span>
          </p>
        </div>
        <div class="content-way">
          <div class="way-title">
            <span>支付方式</span>
          </div>
          <div class="way-item">
            <div class="item-detail">
              <div class="detail-name">
                <i></i>
                <span>借条大师支付</span>
              </div>
              <p class="itme-introduce">支持分期付款</p>
            </div>
            <i></i>
          </div>
          <div class="way-item">
            <div class="item-detail">
              <div class="detail-name">
                <i></i>
                <span>微信支付</span>
              </div>
              <p class="itme-introduce">微信支付</p>
            </div>
            <i></i>
          </div>
          <div class="way-item">
            <div class="item-detail">
              <div class="detail-name">
                <i></i>
                <span>支付宝支付</span>
              </div>
              <p class="itme-introduce">支付宝支付</p>
            </div>
            <i></i>
          </div>
        </div>
      </div>
    </transition>
    <div class="comfirm-submit">
      <p class="submit-total">合计：
        <span>￥5949</span>
      </p>
      <button class="submit-button">提交订单</button>
    </div>
  </section>
</template>
<script>
  import Headbar from '@/components/common/headbar/headbar.vue'

  export default {
    data() {
      return {
        animationShow: false
      }
    },
    mounted() {
      this.animationShow = true
    },
    components: {
      Headbar
    }
  }

</script>
<style scoped lang="scss">
  @import './order-confirm.scss';

</style>
