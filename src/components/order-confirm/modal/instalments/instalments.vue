<template>
  <!-- s 支付 -->
  <section class="payment">
    <div class="payment-title">
      <p>大师分期</p>
    </div>
    <div class="payment-way">
      <div class="way-jietiao">
        <ul class="jietiao-installment">
          <li class="installment-item" :class="{active: sign == index}" v-for="(item, index) in instalments" :key="index" @click="select(item.InstallmentNum, index)">
            <p class="item-title">￥{{item.InstallmentAmount}}x{{item.InstallmentNum}}期</p>
            <p class="item-tip">手续费: ￥{{item.InstallmentCost}}</p>
          </li>
        </ul>
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
      sign: null,
      selected: null
    }
  },
  mounted () {
    console.log(this.instalments)
  },
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    },
    select (installmentNum, index) {
      this.sign = index
      this.selected = installmentNum
    },
    confrim () {
      this.$emit('SELECT_INSTALMENT_EVENT', this.selected)
      this.sign = null
      this.selected = null
    }
  }
}
</script>
<style scoped lang="scss">
@import './instalments.scss';
</style>
