<template>
  <!-- s  -->
  <section class="installment-stage">
    <div class="stage-title">
      <p>期数选择</p>
    </div>
    <ul class="stage-list">
      <li class="list-item" v-for="(item, index) in bill" :key="index">
        <div class="item-bill" :class="{'bill-active': currentIndex == index}">
          <p>{{item.InstallmentSN}}期</p>
          <p>月供￥{{item.InstallmentAmount}}元</p>
        </div>
      </li>
    </ul>
    <div class="stage-due">
      <p>本月需还</p>
      <p class="due-price" @click="openModal">
        <span>￥{{bill && bill.length > 0 ? bill[currentIndex].InstallmentAmount : 0}}</span>
        <i class="iconfont icon-08tishi"></i>
      </p>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'Stage',
  props: ['bill'],
  data () {
    return {
      currentIndex: 0 // 第几期
    }
  },
  methods: {
    openModal () {
      this.$emit('OPEN_MODAL_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./stage.scss";
</style>
