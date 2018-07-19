<template>
  <!-- s 授权 -->
  <section class="default-login">
    <header class="login-header">
      <p class="header-item">注册</p>
      <p class="header-item">
        <i></i>
      </p>
    </header>
    <div class="login-logo">
      <div class="logo-flag">
        <img src="">
      </div>
      <p class="logo-title"></p>
    </div>
    <ul class="login-input-list">
      <li class="list-item">
        <input type="text">
      </li>
      <li class="list-item">
        <input type="text">
      </li>
    </ul>
    <div class="login-btn">
      <button>登陆</button>
    </div>
    <div class="login-operation">
      <p class="operation-item">验证码登录</p>
      <p class="operation-item">忘记密码</p>
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
@import "./empower.scss";
</style>
