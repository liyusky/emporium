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
    <div class="info-login">
      <div class="login-tip">
        <div class="tip-portrait">
          <img src="../../../../assets/images/master.png">
        </div>
        <div class="tip-user"  @click="gotoPage('empower')">
          <p class="user-account">{{phone ? phone : '登录'}}</p>
        </div>
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
  name: 'Info',
  data () {
    return {
      phone: window.id
    }
  },
  methods: {
    gotoPage (page) {
      if (this.phone) return
      this.$router.push({name: page})
    }
  }
}
</script>

<style lang="sass" scoped>
@import './info.scss';
</style>
