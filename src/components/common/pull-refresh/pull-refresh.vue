<template>
  <!-- s 拉动刷新 -->
  <section class="pull-refresh" @touchstart="handleTouchStart($event)" @touchmove="handleTouchMove($event)" @touchend="handleTouchEnd($event)">
    <!-- <div class="refresh-tip tip-top" :style="{height: `${tipHeight}px`, top: `-${tipHeight}px`}" v-if="direction == 'top'">{{tip}}</div> -->
    <div class="refresh-list" :style="{top: `-${tipHeight}px`}">
      <slot></slot>
    </div>
    <div class="refresh-tip tip-bottom" :style="{height: `${tipHeight}px`}" v-if="direction == 'bottom'">{{tip}}</div>
  </section>
  <!-- e 拉动刷新 -->
</template>

<script>
export default {
  name: 'PullRefresh',
  props: ['parent'],
  data () {
    return {
      pageY: 0,
      tipHeight: 0,
      direction: null,
      parentDom: null,
      scrollPosition: 0,
      tip: null,
      maxScrollTop: 0,
      scrollHeight: 0
    }
  },
  methods: {
    handleTouchStart (event) {
      this.pageY = event.targetTouches[0].pageY
      this.scrollPosition = this.parentDom.scrollTop
      this.scrollHeight = this.parentDom.scrollHeight
      this.maxScrollTop = this.parentDom.scrollHeight - this.parentDom.clientHeight
    },
    handleTouchMove (event) {
      if (event.targetTouches[0].pageY > this.pageY) {
      } else if (event.targetTouches[0].pageY < this.pageY) {
        if (this.parentDom.scrollTop + this.parentDom.clientHeight < this.scrollHeight) return
        this.tip = '上拉加载'
        this.direction = 'bottom'
        this.tipHeight = this.pageY - event.targetTouches[0].pageY - this.maxScrollTop + this.scrollPosition
        if (this.tipHeight > 30) {
          this.tip = '正在获取数据'
        }
        if (this.tipHeight > 45) {
          this.tipHeight = 45
        }
      }
      // event.preventDefault()
    },
    handleTouchEnd () {
      this.$emit('LOAD_MORE_EVENT')
      let animation = setInterval(() => {
        if (this.tipHeight > 0) {
          this.tipHeight--
        } else {
          this.direction = null
          this.tip = null
          this.scrollPosition = this.maxScrollTop
          clearInterval(animation)
        }
      }, 8)
    }
  },
  mounted () {
    this.parentDom = this.$parent.$refs[this.parent]
  }
}
</script>

<style lang="sass" scoped>
@import "./pull-refresh.scss";
</style>
