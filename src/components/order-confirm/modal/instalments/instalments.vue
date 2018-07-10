<template>
  <!-- s 支付 -->
  <section class="payment">
    <div class="payment-title">
      <p>大师分期</p>
    </div>
    <div class="payment-way">
      <div class="way-jietiao">
        <div class="jietiao-installment">
          <div class="installment-item" :class="{active: index == item.index}" @click="select">
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
    </div>
    <div class="payment-button">
      <button class="button-sure" @click="confrim">确定</button>
    </div>
  </section>
  <!-- e 支付 -->
</template>
<script>
export default {
  name: 'Instalments',
  props: ['instalments'],
  data () {
    return {
      index: null,
      selected: null
    }
  },
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    },
    select (index, item) {
      this.index = index
      this.selected = item
    },
    confrim () {
      this.$emit('SELECT_INSTALMENT_EVENT', this.selected)
      this.index = null
      this.selected = null
    }
  }
}
</script>
<style scoped lang="scss">
@import './instalments.scss';
</style>
