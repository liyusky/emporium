<template>
  <!-- s 底部导航 -->
  <nav class="tab">
    <div class="tab-item" :class="{active: active}" @click="gotoPage('mall')">
      <svg class="icon" id="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>
      <p class="item-name" v-show="!active">首页</p>
    </div>
    <div class="tab-item" :class="{active:!active}" @click="gotoPage('mine')">
      <svg class="icon" id="icon" aria-hidden="true">
        <use xlink:href="#icon-wode"></use>
      </svg>
      <p class="item-name" v-show="active">我的</p>
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
