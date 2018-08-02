<template>
  <!-- s 分期详情 -->
  <section class="repayment-detail">
    <div class="detail-title">
      <p>还款详情</p>
      <i class="iconfont icon-close"  @click="closeModal"></i>
    </div>
    <div class="detail-intruction">
      <p>合计需还</p>
      <p>¥{{money}}</p>
    </div>
    <ul class="detail-list">
      <li class="list-item">
        <div class="item-number">期数</div>
        <div class="item-money">应还</div>
        <div class="item-status">状态</div>
      </li>
      <li class="list-item" v-for="(item, index) in arr" :key="index">
        <div class="item-number">第{{index}}期</div>
        <div class="item-money">¥{{item.money}}</div>
        <div class="item-status">
          <p class="status-tip" v-if="false">已还款</p>
          <button class="status-btn" v-if="true">立刻还款</button>
          <p class="status-tip" v-if="false">等待还款</p>
        </div>
      </li>
    </ul>
  </section>
  <!-- e 分期详情 -->
</template>

<script>
export default {
  name: 'RepaymentDetail',
  data () {
    return {
      arr: [],
      money: 5000
    }
  },
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./repayment-detail.scss";
</style>
