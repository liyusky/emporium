<template>
  <!-- s 拉动刷新 -->
  <section class="pull-refresh" >
    <div class="refresh-tip tip-top" :style="{height: `${tipHeight}px`}" v-if="direction == 'top'">{{tip}}</div>
    <div class="refresh-content" id="refresh">
      <div class="content-list" id="child" :style="{top: direction == 'top' ? `${tipHeight}px` : `${-tipHeight}px`}" @touchstart="handleTouchStart($event)" @touchmove="handleTouchMove($event)" @touchend="handleTouchEnd($event)">
        <slot></slot>
      </div>
    </div>
    <div class="refresh-tip tip-bottom" :style="{height: `${tipHeight}px`}" v-if="direction == 'bottom'">{{tip}}</div>
  </section>
  <!-- e 拉动刷新 -->
</template>

<script>
export default {
  name: 'PullRefreshComponent',
  props: ['direction'],
  data () {
    return {
      isLoad: false,
      pageY: 0,
      pageX: 0,
      tipHeight: 0,
      scrollPosition: 0,
      tip: null,
      maxScrollTop: 0,
      scrollHeight: 0
    }
  },
  methods: {
    handleTouchStart (event) {
      this.pageY = event.targetTouches[0].pageY
      this.pageX = event.targetTouches[0].pageX
      var parentDom = document.getElementById('refresh')
      this.scrollPosition = parentDom.scrollTop
      this.scrollHeight = parentDom.scrollHeight
      this.maxScrollTop = parentDom.scrollHeight - parentDom.clientHeight
    },
    handleTouchMove (event) {
      var parentDom = document.getElementById('refresh')
      var touchPageXMounts = event.targetTouches[0].pageX - this.pageX
      var touchPageYMounts = event.targetTouches[0].pageY - this.pageY
      if (Math.abs(touchPageYMounts) < Math.abs(touchPageXMounts)) return
      if (this.direction === 'top') {
        if (touchPageYMounts < 0) return
        if (parentDom.scrollTop > 0) return
        this.tip = '下拉刷新'
        this.tipHeight = touchPageYMounts
      }
      if (this.direction === 'bottom') {
        if (touchPageYMounts > 0) return
        if (parentDom.scrollTop + parentDom.clientHeight < this.scrollHeight - 1) return
        this.tip = '上拉加载'
        this.tipHeight = this.pageY - event.targetTouches[0].pageY - this.maxScrollTop + this.scrollPosition
      }
      if (this.tipHeight > 45) {
        this.tip = this.direction === 'top' ? '正在刷新' : '正在获取数据'
        this.isLoad = true
      }
      if (this.tipHeight > 50) {
        this.tipHeight = 50
      }
      // event.preventDefault()
    },
    handleTouchEnd () {
      var parentDom = document.getElementById('refresh')
      if (this.direction === 'top') {
        if (parentDom.scrollTop > 0) return
      }
      if (this.direction === 'bottom') {
        if (parentDom.scrollTop + parentDom.clientHeight < this.scrollHeight - 1) return
      }
      if (this.isLoad) {
        this.$emit('LOAD_MORE_EVENT')
      }
      let animation = setInterval(() => {
        if (this.tipHeight > 0) {
          this.tipHeight--
          if (this.tipHeight < 10) this.tip = null
        } else {
          this.scrollPosition = this.maxScrollTop
          clearInterval(animation)
        }
      }, 8)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./pull-refresh.scss";
</style>
