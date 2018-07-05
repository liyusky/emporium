<template>
  <!-- s 底部导航 -->
  <nav class="tab">
    <div class="tab-item" :class="{active: active}" @click="gotoPage('mall')">
      <i class="iconfont icon-dacong"></i>
      <p class="item-name" v-show="!active">我的订单</p>
    </div>
    <div class="tab-item" :class="{active:!active}" @click="gotoPage('mine')">
      <i class="iconfont icon-dacong"></i>
      <p class="item-name" v-show="active">联系客服</p>
    </div>
  </nav>
  <!-- e 底部导航 -->
</template>

<script>
export default {
  name: 'Tab',
  props: ['path'],
  computed: {
    active () {
      return this.path === '/' || this.path === '/mall'
    }
  },
  methods: {
    gotoPage (page) {
      this.$router.push({name: page})
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./tab.scss";
</style>
