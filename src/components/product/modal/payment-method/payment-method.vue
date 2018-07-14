<template>
  <!-- s 支付 -->
  <section class="payment">
    <div class="payment-title">
      <p>支付方式</p>
    </div>
    <div class="payment-way">
      <div class="way-master">
        <div class="master-title">
          <div class="title-img">
            <img src="../../../../assets/images/master.png">
          </div>
          <p class="title-payname">大师分期</p>
        </div>
        <ul class="master-installment">
          <li class="installment-item" v-for="(item, index) in paymentMethod.list" :key="index">
            <p class="item-title">￥{{item.InstallmentAmount}}x{{item.InstallmentNum}}期</p>
            <p class="item-tip">手续费: ￥{{item.InstallmentCost}}</p>
          </li>
        </ul>
      </div>
      <div class="way-alipay" v-for="(item, index) in paymentMethod.methods" :key="index">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href = item.icon></use>
        </svg>
        <p class="alipay-title">{{item.name}}</p>
      </div>
    </div>
    <div class="payment-button">
      <button class="button-sure" @click="closeModal">确定</button>
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
