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
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="验证码" v-model="code">
        <div class="item-code-gain">
          <button class="gain-btn" :disabled="codeDisabled" @click="getCode">获取验证码</button>
          <!-- <button class="gain-countdown">60秒</button> -->
        </div>
      </li>
      <li class="list-item">
        <input class="item-input" type="text" placeholder="请输入密码/设置6-18位新密码" v-model="password">
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
      <button :disabled="submitDisabled" @click="submit">登录</button>
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
import Http from '../../class/http.class.js'
export default {
  name: 'Empower',
  data () {
    return {
      phone: null,
      code: null,
      password: null,
      codeDisabled: false,
      submitDisabled: false
    }
  },
  methods: {
    getCode () {
      this.codeDisabled = true
      if (!this.checkPhone()) return
      Http.send({
        url: '',
        params: {}
      }).success(data => {
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.codeDisabled = false
      })
    },
    submit () {
      if (!this.checkPhone()) return
      if (!this.checkCode()) return
      if (!this.checkPassword()) return
      this.submitDisabled = true
      Http.send({
        url: '',
        params: {}
      }).success(data => {
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
    },
    checkPhone () {
      this.phone = this.phone ? this.phone.replace(/\s+/g, '') : this.phone
      if (!this.phone) {
        alert('请输入手机号')
        return false
      }
      if (this.phone.length < 11) {
        this.Title.text = '手机号长度不足11位'
        this.dialogShow = true
        return false
      } else {
        let pat = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i')
        if (!pat.test(this.phone)) {
          this.Title.text = '手机号格式错误'
          this.dialogShow = true
          return false
        }
        return true
      }
    },
    checkCode () {
      this.code = this.code ? this.code.replace(/\s+/g, '') : this.code
      if (!this.code) {
        alert('请输入验证码');
        return false
      } else {
        let pat = new RegExp('^[0-9]{6}$', 'i')
        if (!pat.test(this.code)) {
          alert('验证码格式错误')
          return false
        }
      }
      return true
    },
    checkPassword () {
      this.password = this.password ? this.password.replace(/\s+/g, '') : this.password
      if (!this.password) {
        alert('密码不能为空')
        return false
      } else {
        let pat = new RegExp(/^[a-zA-Z0-9]{6,16}$/);
        if (!pat.test(this.password)) {
          alert('密码格式错误')
          return false
        }
      }
      return true;
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./empower.scss";
</style>
