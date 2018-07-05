<template>
  <section class="mask-rightpay">
    <div class="rightpay-title">
      <p class="title-text">还款详情</p>
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="rightpay-total">
      <p class="total-title">合计需还</p>
      <p class="total-price">￥5000</p>
    </div>
    <div class="rightpay-thead">
      <p class="thead-periods">期数</p>
      <p class="thead-pay">应还</p>
      <p class="thead-status">状态</p>
    </div>
    <div class="rightpay-installment">
      <div class="installment-item" v-for="index in 6" :key="index">
        <p class="item-periods">第一期</p>
        <p class="item-pay">98.25</p>
        <div class="item-status">
          <p class="status-already" v-if="status.type == 'already'">已还款</p>
          <button class="status-right" v-else-if="status.type == 'right'">立刻还款</button>
          <p class="status-await" v-else-if="status.type == 'await'">等待还款</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
      return{
        status: {
          type: 'await'
        }
      }
    }
  }

</script>
<style scoped lang="scss">
  @import './mask-rightpay.scss';

</style>
