<template>
  <!-- s 授权 -->
  <section class="empower">
    <!-- s header -->
    <header class="empower-header">
      <p class="header-item">注册</p>
      <p class="header-item">
        <i class="iconfont icon-close"></i>
      </p>
    </header>
    <!-- s logo -->
    <div class="empower-logo">
      <div class="logo-flag">
        <img src="">
      </div>
      <p class="logo-title">欢迎来到闲趣优品</p>
    </div>
    <!-- e logo -->
    <div class="empower-tip-title">
      <p>请输入要修改密码的账号</p>
    </div>
    <!-- s 登录 -->
    <ul class="empower-input-list">
      <li class="list-item">
        <input type="text" placeholder="请输入手机号">
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="验证码">
        <div class="item-code-gain">
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
      <li class="list-item">
        <input class="item-input" type="text" placeholder="设置6-18位新密码">
        <div class="item-password-switch">
          <i class="iconfont icon-shezhi" v-if="true"></i>
          <i class="iconfont icon-xiaoxi" v-if="false"></i>
        </div>
      </li>
    </ul>
    <!-- s 协议 -->
    <div class="empower-protocol">
      <span>注册即代表您同意先驱优品的</span>
      <span>注册条款</span>
    </div>
    <!-- e 协议 -->
    <!-- s 按钮 -->
    <div class="empower-btn">
      <button>登录</button>
    </div>
    <!-- e 按钮 -->
    <div class="empower-operation">
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
