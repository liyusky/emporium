<template>
  <!-- s 我的-列表导航 -->
  <nav class="mine-list-nav">
    <div class="nav-item" @click="gotoPage()">
      <p class="item-title">
        <i class="iconfont icon-shoujihuishou"></i>
        <span>手机回收</span>
      </p>
      <div>
        <div class="item-tip">好坏都要</div>
        <i class="iconfont icon-arrow-right"></i>
      </div>
    </div>
    <div class="nav-item" @click="gotoPage()">
      <p class="item-title">
        <i class="iconfont icon-huishoudingdan"></i>
        <span>回收订单</span>
      </p>
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="nav-item" @click="gotoPage('address-manage')">
      <p class="item-title">
        <i class="iconfont icon-dizhiguanli"></i>
        <span>地址管理</span>
      </p>
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="nav-item" @click="gotoPage()">
      <p class="item-title">
        <i class="iconfont icon-yonghufankui"></i>
        <span>用户反馈</span>
      </p>
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="nav-item" @click="gotoPage()">
      <p class="item-title">
        <i class="iconfont icon-kefudianhua"></i>
        <span>客服电话</span>
      </p>
      <i class="iconfont icon-arrow-right"></i>
    </div>
  </nav>
  <!-- e 我的-列表导航 -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'ListNav',
  data () {
    return {}
  },
  methods: {
    gotoPage (page) {
      if (!page) {
        this.$emit('SHOW_MODAL_EVENT')
        return
      }
      this.saveOrigin2('mine')
      this.$router.push({
        name: page
      })
    },
    ...mapMutations(['saveOrigin2'])
  }
}
</script>

<style lang="sass" scoped>
@import "./list-nav.scss";
</style>
