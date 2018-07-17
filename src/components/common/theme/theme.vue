<template>
  <!-- s 公共头部  -->
  <header class="theme">
    <p class="theme-title">{{theme.title}}</p>
    <div class="theme-left" @click="goback">
      <i class="iconfont icon-arrow-left"></i>
    </div>
    <!-- <div class="theme-right" v-show="theme.themeRight">
      <i class="iconfont icon-fenxiang"></i>
    </div> -->
  </header>
  <!-- e 公共头部 -->
</template>

<script>
export default {
  name: 'Theme',
  props: ['theme', 'current', 'previous', 'goal'],
  methods: {
    goback () {
      if (this.current === 'order-detail' && this.previous === 'order-confirm') {
        this.$router.push({name: 'index'})
      } else if (this.goal === 'order-confirm') {
        this.$router.push({
          name: 'product',
          params: {
            id: this.$store.state.params.id,
            title: this.$store.state.params.title
          }
        })
      } else if (this.goal === 'product') {
        this.$router.push({name: 'index'})
      } else {
        this.$router.back(-1)
        // window.history.go(-1)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./theme.scss";
</style>
