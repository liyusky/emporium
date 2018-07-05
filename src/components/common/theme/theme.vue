<template>
  <!-- s 公共头部  -->
  <header class="theme">
    <p class="theme-title">{{theme.title}}</p>
    <div class="theme-left">
      <i class="iconfont icon-dacong"></i>
    </div>
    <div class="theme-right">
      <i class="iconfont icon-dacong"></i>
    </div>
  </header>
  <!-- e 公共头部 -->
</template>

<script>
export default {
  name: 'Theme',
  props: ['theme']
}
</script>

<style lang="sass" scoped>
@import "./theme.scss";
</style>
