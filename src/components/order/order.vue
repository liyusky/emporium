<template>
  <section class="order">
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <div class="tabbar-item">全部</div>
      <div class="tabbar-item">代付款</div>
      <div class="tabbar-item">代发货</div>
      <div class="tabbar-item">代收货</div>
      <div class="tabbar-item">待评价</div>
    </section>
    <section class="order-classify">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'Order',
  data () {
    return {
      theme: {
        title: 'iPhone 6S'
      }
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Theme
  }
}
</script>
<style scoped lang="scss">
@import './order.scss';
</style>
