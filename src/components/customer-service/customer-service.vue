<template>
  <section class="customer-service">
    <Headbar HeadbarName="卖家客服"></Headbar>
    <section class="service-content">
      <div class="content-pull">
        <div class="pull-info">
          <div class="info-picture">
            <img src="../../../static/images/shop-picture.png">
          </div>
          <div class="info-detail">
            <p class="detail-price">￥590</p>
            <p class="detail-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</p>
          </div>
          <button class="info-rightbuy">立即购买</button>
        </div>
        <div class="pull-notice">
          <i class="notice-icon"></i>
          <p class="notice-title">工作人员不会向您索取账户密码，验证码等信息，也请您妥善保管不要外泄，保护自身的合法权益，拒绝盲从，理性消费。</p>
          <i class="notice-button"></i>
        </div>
      </div>
      <div class="content-session">
        <div class="session-text-message">
          <div class="message-waiter">
            <div class="waiter-portrait">
              <img src="../../../static/images/portrait-serviec.png">
            </div>
            <p class="waiter-say">亲爱哒，小的在此恭候您多时，请问有什么能为您效劳？</p>
          </div>
          <div class="message-customer">
            <p class="customer-say">你好</p>
            <div class="customer-portrait">
              <img src="../../../static/images/portrait-custom.png">
            </div>
          </div>
        </div>
        <div class="session-time">
          <p class="time-number">15:31:04</p>
        </div>
      </div>
      <div class="content-input-area">
        <input class="area-edit" type="text" placeholder="请输入用户信息...">
        <i class="area-facebread"></i>
        <i class="area-more"></i>
      </div>
    </section>
  </section>
</template>
<script>
  import Headbar from '@/components/common/headbar/headbar.vue'
  export default {
    components: {
      Headbar,
    }
  }

</script>
<style scoped lang="scss">
  @import './customer-service.scss';

</style>
