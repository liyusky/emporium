<template>
  <!-- s 公共头部  -->
  <header class="theme">
    <p class="theme-title">{{theme.title}}</p>
    <div class="theme-left" @click="goback">
      <i class="iconfont icon-dingdan"></i>
    </div>
    <div class="theme-right" v-show="theme.themeRight">
      <i class="iconfont icon-dingdan"></i>
    </div>
  </header>
  <!-- e 公共头部 -->
</template>

<script>
export default {
  name: 'Theme',
  props: ['theme'],
  mounted () {
    console.log(this.theme.title)
  },
  methods: {
    goback () {
      this.$router.back(-1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./theme.scss";
</style>
