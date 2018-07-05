<template>
  <!-- s 产品简介 -->
  <section class="product-summary">
    <div class="summary-slide">
      <img src="https://api.vtrois.com/image/750x480/bbbfc0">
    </div>
    <div class="summary-content">
      <div class="content-phone">
        <h3 class="phone-name">95新 iPhone 6S 128G黑</h3>
        <div class="phone-version">
          <p>
            <span>网络:</span>
            <span>移动4G/联通4G/电信4G</span>
          </p>
          <p>
            <span>版本:</span>
            <span>其他版本</span>
          </p>
        </div>
        <div class="phone-bill">
          <div class="bill-amount">
            <p class="amount-current">
              <span>￥</span>
              <span>3580</span>
            </p>
            <p class="amount-original">
              <span>新机</span>
              <span>￥4080</span>
            </p>
          </div>
          <div class="bill-reduce">
            <div>省</div>
            <div>￥500</div>
          </div>
        </div>
        <div class="phone-installments">
          <span>￥716</span>
          <span> ×5期</span>
        </div>
      </div>
      <div class="content-gift">
        <div>赠品</div>
        <p>国产苹果充电套装（充电头+数据线）</p>
      </div>
      <div class="content-tip">
        <i class="iconfont icon-dacong"></i>
        <span>官当自营/原装正品/七天包退/一年保修</span>
      </div>
      <div class="content-pay-method">
        <div class="method-selected">
          <div class="selected-tip">
            <b>支付方式</b>
            <p class="tip-sign">
              <i class="iconfont icon-dacong"></i>
              <span>大师分期</span>
            </p>
          </div>
          <i class="iconfont icon-dacong"></i>
        </div>
        <ul class="method-selectable">
          <li class="selectable-item">
            <i class="iconfont icon-dacong"></i>
            <span>支付宝支付</span>
          </li>
          <li class="selectable-item">
            <i class="iconfont icon-dacong"></i>
            <span>支付宝支付</span>
          </li>
        </ul>
      </div>
      <div class="content-characteristic">
        <span>产品参数</span>
        <i class="iconfont icon-dacong"></i>
      </div>
    </div>
  </section>
  <!-- e 产品简介 -->
</template>

<script>
export default {
  name: 'Summary',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
  @import "./summary.scss";
</style>
