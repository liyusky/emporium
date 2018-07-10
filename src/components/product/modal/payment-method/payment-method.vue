<template>
  <!-- s 支付 -->
  <section class="payment">
    <div class="payment-title">
      <p>支付方式</p>
    </div>
    <div class="payment-way">
      <div class="way-jietiao">
        <div class="jietiao-title">
          <i class="iconfont icon-dacong"></i>
          <p class="title-payname">大师分期</p>
        </div>
        <div class="jietiao-installment">
          <div class="installment-item">
            <p class="item-title">￥578x1期</p>
            <p class="item-tip">【含手续费】</p>
          </div>
          <div class="installment-item">
            <p class="item-title">￥578x2期</p>
            <p class="item-tip">【含手续费】</p>
          </div>
          <div class="installment-item">
            <p class="item-title">￥578x3期</p>
            <p class="item-tip">【含手续费】</p>
          </div>
          <div class="installment-item">
            <p class="item-title">￥578x4期</p>
            <p class="item-tip">【含手续费】</p>
          </div>
          <div class="installment-item">
            <p class="item-title">￥578x5期</p>
            <p class="item-tip">【含手续费】</p>
          </div>
          <div class="installment-item">
            <p class="item-title">￥578x6期</p>
            <p class="item-tip">【含手续费】</p>
          </div>
        </div>
      </div>
      <div class="way-alipay" v-for="(item, index) in paymentMethod.methods" :key="index">
        <i class="iconfont" :class="'icon-' + item.icon"></i>
        <p class="alipay-title">{{item.name}}</p>
      </div>
    </div>
    <div class="payment-button">
      <button class="button-sure">确定</button>
    </div>
  </section>
  <!-- e 支付 -->
</template>
<script>
export default {
  name: 'PaymentMethod',
  props: ['paymentMethod'],
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './payment-method.scss';
</style>
