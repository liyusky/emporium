<template>
  <!-- s  -->
  <section class="mine-info">
    <div class="info-header">
      <!-- <p>
        <i class="iconfont icon-xiaoxi"></i>
        <span>消息</span>
      </p>
      <p>
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
      </p> -->
    </div>
    <div class="info-detail">
      <div class="detail-portrait">
        <img src="../../../../assets/images/master.png">
      </div>
      <div class="detail-user">
        <!-- <p class="user-name">清风使者</p> -->
        <p class="user-account">{{phone ? phone : '未登录'}}</p>
      </div>
    </div>
    <div class="info-bg">
      <img src="../../../../assets/images/mine.png">
    </div>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: '',
  data () {
    return {
      phone: window.id
    }
  }
}
</script>

<style lang="sass" scoped>
  @import "./info.scss";
</style>
