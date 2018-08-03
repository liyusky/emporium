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
          <img src="../../../../assets/images/master.png" v-if="phone">
          <img src="../../../../assets/images/logout.png" v-if="!phone">
        </div>
        <div class="tip-user" @click="gotoPage('empower')">
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
import { mapMutations } from 'vuex'
export default {
  name: 'Info',
  data () {
    return {
      phone: window.phone
    }
  },
  methods: {
    gotoPage (page) {
      if (window.id) return
      this.saveOrigin4('mine')
      this.$router.push({name: page})
    },
    ...mapMutations(['saveOrigin4'])
  }
}
</script>

<style lang="sass" scoped>
@import './info.scss';
</style>
