<template>
  <!-- s 授权 -->
  <section class="empower">
    <!-- s header -->
    <header class="empower-header">
      <!-- s 登录界面 -->
      <p class="header-item" v-if="loginShow" @click="gotoRegister(1)">去注册</p>
      <!-- e 登录界面 -->
      <!-- s 注册界面 -->
      <p class="header-item" v-if="registerShow" @click="gotoLogin(0)">已有账号去登录</p>
      <!-- e 注册界面 -->
      <!-- s 忘记密码 -->
      <p class="header-item" v-if="forgetPasswordShow" @click="gotoBack(0)">返回</p>
      <!-- s 忘记密码 -->
      <!-- s 验证码 -->
      <p class="header-item" v-if="codeShow" @click="gotoRegister(1)">去注册</p>
      <!-- s 验证码 -->
      <p class="header-item" v-show="!loginShow" @click="gotoLogin(0)">
        <i class="iconfont icon-close"></i>
      </p>
    </header>
    <!-- s logo -->
    <div class="empower-logo" v-show="!forgetPasswordShow">
      <div class="logo-flag">
        <img src="../../assets/images/logo.png">
      </div>
      <p class="logo-title">{{empowerTitle}}</p>
    </div>
    <!-- e logo -->
    <div class="empower-tip-title" v-show="forgetPasswordShow">
      <p>请输入要修改密码的账号</p>
    </div>
    <!-- s 登录 -->
    <ul class="empower-input-list" :class="{active: forgetPasswordShow}">
      <li class="list-item">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </li>
      <li class="list-item" v-if="codeShow || forgetPasswordShow || registerShow">
        <input class="item-input" type="text" placeholder="验证码" v-model="code">
        <div class="item-code-gain">
          <button class="gain-btn" :disabled="codeDisabled" @click="getCode">获取验证码</button>
          <!-- <button class="gain-countdown">60秒</button> -->
        </div>
      </li>
      <li class="list-item" v-if="forgetPasswordShow || loginShow || registerShow">
        <input class="item-input" :type="passwordType" :placeholder="placeholderName" v-model="password">
        <div class="item-password-switch" @click="switchPasswordType">
          <i class="iconfont icon-shezhi" v-if="!passworShow"></i>
          <i class="iconfont icon-xiaoxi" v-if="passworShow"></i>
        </div>
      </li>
    </ul>
    <!-- e 登录 -->
    <!-- s 协议 -->
    <div class="empower-protocol" v-show="registerShow">
      <span>注册即代表您同意先驱优品的</span>
      <span>注册条款</span>
    </div>
    <!-- e 协议 -->
    <!-- s 按钮 -->
    <div class="empower-btn" :class="{btnActive:registerShow}">
      <button :disabled="submitDisabled" @click="submit">{{btnName}}</button>
    </div>
    <!-- e 按钮 -->
    <div class="empower-operation" v-show="loginShow || codeShow">
      <p class="operation-item" @click="gotoCode(2)" v-show="loginShow">验证码登录</p>
      <p class="operation-item" @click="gotoLogin(0)" v-show="codeShow">密码登录</p>
      <p class="operation-item" @click="gotoForgetPassword(3)" v-show="loginShow">忘记密码</p>
    </div>
    <ModalDialog :Title="Title" v-show="dialogShow" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>

  <!-- e 授权 -->
</template>

<script>
import Http from '../../class/http.class.js'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
export default {
  name: 'Empower',
  data () {
    return {
      Title: {
        text: ''
      },
      phone: null,
      code: null,
      password: null,
      dialogShow: false,
      codeDisabled: false,
      submitDisabled: false,
      registerShow: false,
      loginShow: false,
      forgetPasswordShow: false,
      codeShow: false,
      passworShow: false,
      passwordType: 'password',
      empowerTitle: '',
      btnName: '',
      placeholderName: '请输入密码',
      empowerType: 0
    }
  },
  components: {
    ModalDialog
  },
  mounted () {
    this.loginShow = true
    this.empowerTitle = '欢迎来到闲趣优品'
    this.btnName = '登录'
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
      switch (this.empowerType) {
        // 登录 0
        case 0:
          if (!this.checkPassword()) return
          this.submitDisabled = true
          break
        // 注册 1
        case 1:
          if (!this.checkCode()) return
          if (!this.checkPassword()) return
          this.submitDisabled = true
          break
        // 验证码登录 2
        case 2:
          if (!this.checkCode()) return
          this.submitDisabled = true
          break
        // 忘记密码 3
        case 3:
          if (!this.checkCode()) return
          if (!this.checkPassword()) return
          this.submitDisabled = true
          break
      }
    },
    sendRequest (url, params) {
      Http.send({
        url: url,
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
        this.Title.text = '请输入手机号'
        this.dialogShow = true
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
        this.Title.text = '请输入验证码'
        this.dialogShow = true
        return false
      } else {
        let pat = new RegExp('^[0-9]{6}$', 'i')
        if (!pat.test(this.code)) {
          this.Title.text = '验证码格式错误'
          this.dialogShow = true
          return false
        }
      }
      return true
    },
    checkPassword () {
      this.password = this.password ? this.password.replace(/\s+/g, '') : this.password
      if (!this.password) {
        this.Title.text = '密码不能为空'
        this.dialogShow = true
        return false
      } else {
        let pat = new RegExp(/^[a-zA-Z0-9]{6,16}$/)
        if (!pat.test(this.password)) {
          this.Title.text = '密码格式错误'
          this.dialogShow = true
          return false
        }
      }
      return true
    },
    gotoRegister (type) {
      this.empowerType = type
      this.placeholderName = '请输入密码'
      this.empowerTitle = '注册闲趣优品'
      this.btnName = '确认'
      this.loginShow = false
      this.codeShow = false
      this.registerShow = true
      this.phone = null
      this.code = null
      this.password = null
    },
    gotoLogin (type) {
      this.empowerType = type
      this.placeholderName = '请输入密码'
      this.empowerTitle = '欢迎来到闲趣优品'
      this.btnName = '登录'
      this.registerShow = false
      this.codeShow = false
      this.forgetPasswordShow = false
      this.loginShow = true
      this.phone = null
      this.code = null
      this.password = null
    },
    gotoBack (type) {
      this.empowerType = type
      this.placeholderName = '请输入密码'
      this.empowerTitle = '欢迎来到闲趣优品'
      this.btnName = '登录'
      this.forgetPasswordShow = false
      this.loginShow = true
      this.phone = null
      this.code = null
      this.password = null
    },
    gotoCode (type) {
      this.empowerType = type
      this.empowerTitle = '欢迎来到闲趣优品'
      this.btnName = '登录'
      this.loginShow = false
      this.codeShow = true
      this.phone = null
      this.code = null
      this.password = null
    },
    gotoForgetPassword (type) {
      this.empowerType = type
      this.btnName = '重设密码'
      this.placeholderName = '设置6-18位新密码'
      this.loginShow = false
      this.forgetPasswordShow = true
      this.phone = null
      this.code = null
      this.password = null
    },
    switchPasswordType () {
      this.passworShow = !this.passworShow
      this.passwordType = this.passworShow ? 'text' : 'password'
    },
    closeModal () {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./empower.scss";
</style>
