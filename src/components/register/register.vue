<template>
  <!-- s 授权 -->
  <section class="register">
    <header class="register-header">
      <p class="header-item">已有账号登录</p>
      <p class="header-item">
        <i class="iconfont icon-close"></i>
      </p>
    </header>
    <div class="register-logo">
      <div class="logo-flag">
        <img src="">
      </div>
      <p class="logo-title">注册闲趣优品</p>
    </div>
    <ul class="register-input-list">
      <li class="list-item">
        <input type="text" placeholder="请输入手机号">
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="验证码">
        <div class="code-gain">
          <button class="gain-btn">获取验证码</button>
          <!-- <button class="gain-countdown">60秒</button> -->
        </div>
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="请输入密码">
        <div class="item-password-switch">
          <i class="iconfont icon-shezhi" v-if="true"></i>
          <i class="iconfont icon-xiaoxi" v-if="false"></i>
        </div>
      </li>
    </ul>
    <div class="register-protocol">
      <span>注册即代表您同意先驱优品的</span>
      <span>注册条款</span>
    </div>
    <div class="register-btn">
      <button>确认</button>
    </div>
  </section>
  <!-- e 授权 -->
</template>

<script>
export default {
  name: 'Empower',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./register.scss";
</style>
