<template>
  <!-- s 我的 -->
  <section class="mine">
    <Info></Info>
    <Order></Order>
    <ListNav></ListNav>
  </section>
  <!-- e 我的 -->
</template>

<script>
import Info from './info/info.vue'
import Order from './order/order.vue'
import ListNav from './list-nav/list-nav.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'Mine',
  components: {
    Info,
    Order,
    ListNav
  },
  mounted () {
    this.saveOrigin('mine')
  },
  methods: {
    ...mapMutations(['saveOrigin'])
  }
}
</script>

<style lang="sass" scoped>
@import "./mine.scss";
</style>
