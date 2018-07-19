<template>
  <!-- s forget-password -->
  <section class="forget-password">
    <Theme :theme="theme"></Theme>
    <div class="password-tip-title">
      <p>请输入要修改密码的账号</p>
    </div>
    <ul class="password-form-list">
      <li class="list-item">
        <p class="item-account">18013451687</p>
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="请输入短信验证码">
        <div class="code-gain">
          <button class="gain-btn">获取验证码</button>
          <!-- <button class="gain-countdown">60秒</button> -->
        </div>
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="设置6-18位新密码">
        <div class="item-password-switch">
          <i class="iconfont icon-shezhi" v-if="true"></i>
          <i class="iconfont icon-xiaoxi" v-if="false"></i>
        </div>
      </li>
    </ul>
    <div class="password-btn">
      <button>重设密码</button>
    </div>
  </section>
  <!-- e forget-password -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'Empower',
  data () {
    return {
      theme: {
        title: '修改登录秘密'
      }
    }
  },
  components: {
    Theme
  }
}
</script>

<style lang="sass" scoped>
@import "./forget-password.scss";
</style>
