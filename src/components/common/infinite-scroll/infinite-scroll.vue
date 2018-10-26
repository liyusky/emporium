<template>
  <!-- s  -->
  <section class="scroll" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="100">
    <div class="loading">
      <div class="loading-img" v-if="loadImgShow">
        <img src="../../../assets/images/refresh.gif">
      </div>
      <p class="loading-tip">{{loadTip}}</p>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'InfiniteScroll',
  props: ['busy', 'loadImgShow', 'loadTip'],
  data () {
    return {}
  },
  methods: {
    loadMore () {
      this.$emit('LOADMORE_EVENT')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./infinite-scroll.scss";
</style>
