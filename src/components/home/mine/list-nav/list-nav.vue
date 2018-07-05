<template>
  <!-- s 我的-列表导航 -->
  <nav class="mine-list-nav">
    <!-- <div class="nav-item">
      <p class="item-title">手机回收</p>
      <div>
        <span class="item-tip">好坏都要</span>
        <i class="iconfont icon-dacong"></i>
      </div>
    </div>
    <div class="nav-item">
      <p class="item-title">回收订单</p>
      <i class="iconfont icon-dacong"></i>
    </div> -->
    <div class="nav-item" @click="gotoPage('address-manage')">
      <p class="item-title">地址管理</p>
      <i class="iconfont icon-dacong"></i>
    </div>
    <div class="nav-item" @click="gotoPage('feedback')">
      <p class="item-title">用户反馈</p>
      <i class="iconfont icon-dacong"></i>
    </div>
    <!-- <div class="nav-item">
      <p class="item-title">客服电话</p>
      <i class="iconfont icon-dacong"></i>
    </div> -->
  </nav>
  <!-- e 我的-列表导航 -->
</template>

<script>
export default {
  name: 'ListNav',
  data () {
    return {}
  },
  methods: {
    gotoPage (page) {
      this.$router.push({name: page})
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./list-nav.scss";
</style>
