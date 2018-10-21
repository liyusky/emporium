<template>
  <!-- s 拉动刷新 -->
  <section class="pull-refresh" >
    <div class="refresh-tip tip-top" :style="{height: `${tipHeight}px`}" v-if="direction == 'top'">
      <div class="tip-img" v-if="loadImgShow">
        <img src="../../../assets/images/refresh.gif">
      </div>
      <p>{{tip}}</p>
    </div>
    <div class="refresh-content" id="refresh">
      <div class="content-list" id="child" :style="{top: direction == 'top' ? `${tipHeight}px` : `${-tipHeight}px`}" @touchstart="handleTouchStart($event)" @touchmove="handleTouchMove($event)" @touchend="handleTouchEnd($event)">
        <slot></slot>
      </div>
    </div>
    <div class="refresh-tip tip-bottom" :style="{height: `${tipHeight}px`}" v-if="direction == 'bottom'">
      <div class="tip-img" v-if="loadImgShow">
        <img src="../../../assets/images/refresh.gif">
      </div>
      <p>{{tip}}</p>
    </div>
  </section>
  <!-- e 拉动刷新 -->
</template>

<script>
export default {
  name: 'PullRefreshComponent',
  props: ['direction'],
  data () {
    return {
      loadImgShow: false,
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
      console.log(parentDom.scrollHeight)
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
        this.tip = this.direction === 'top' ? '松开刷新' : '松开获取数据'
      }
      if (this.tipHeight > 70) {
        this.tipHeight = 70
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
      if (this.tipHeight > 45) {
        this.tipHeight = 45
        this.tip = this.direction === 'top' ? '正在刷新' : '正在获取数据'
        this.loadImgShow = true
        this.$emit('LOAD_MORE_EVENT')
      } else {
        this.loadImgShow = false
        this.tip = null
        this.tipHeight = 0
        this.scrollPosition = this.maxScrollTop
      }
    },
    backScroll () {
      setTimeout(() => {
        this.loadImgShow = false
        this.tip = null
        this.tipHeight = 0
        this.scrollPosition = this.maxScrollTop
      }, 1000)
    },
    noneData () {
      this.loadImgShow = false
      this.tip = '暂无更多数据'
      setTimeout(() => {
        this.tip = null
        this.tipHeight = 0
        this.scrollPosition = this.maxScrollTop
      }, 1000)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./pull-refresh-plus.scss";
</style>
