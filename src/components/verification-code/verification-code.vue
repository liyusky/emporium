<template>
  <!-- s 授权 -->
  <section class="default-login">
    <header class="login-header">
      <p class="header-item">注册</p>
      <p class="header-item">
        <i class="iconfont icon-close"></i>
      </p>
    </header>
    <div class="login-logo">
      <div class="logo-flag">
        <img src="">
      </div>
      <p class="logo-title">欢迎来到闲趣优品</p>
    </div>
    <ul class="login-input-list">
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
    </ul>
    <div class="login-btn">
      <button>登录</button>
    </div>
    <div class="login-operation">
      <p class="operation-item">验证码登录</p>
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
@import "./verification-code.scss";
</style>
