<template>
  <!-- s 地址管理 -->
  <section class="address-manage">
    <Theme :theme="theme"></Theme>
    <AddressTips :origin="origin"></AddressTips>
    <button class="manage-btn" @click="gotoPage('add-address')">新增收货地址</button>
  </section>
  <!-- e 地址管理 -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
import AddressTips from './address-tips/address-tips.vue'
export default {
  name: 'AddressManage',
  props: ['origin'],
  components: {
    Theme,
    AddressTips
  },
  data () {
    return {
      theme: {
        title: '地址管理'
      }
    }
  },
  methods: {
    gotoPage (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./address-manage.scss";
</style>
