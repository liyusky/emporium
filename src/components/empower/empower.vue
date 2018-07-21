<template>
  <!-- s 授权 -->
  <section class="empower">
    <!-- s header -->
    <header class="empower-header">
      <p class="header-item" v-show="!state.show.theme" @click="toggleState(null)">{{state.text.title}}</p>
      <i class="iconfont icon-close" v-show="!state.show.theme"></i>
      <p class="header-title" v-show="state.show.theme">{{state.text.title}}</p>
      <div id="back-btn" class="header-left" v-show="state.show.theme" @click="toggleState('login-by-password')">
        <i class="iconfont icon-arrow-left"></i>
      </div>
    </header>
    <!-- s logo -->
    <div class="empower-logo" v-show="state.show.logo">
      <div class="logo-flag">
        <img src="../../assets/images/logo.png">
      </div>
      <p class="logo-title">{{state.text.advertisement}}</p>
    </div>
    <!-- e logo -->
    <div class="empower-tip-title" v-show="state.show.forget">
      <p>请输入要修改密码的账号</p>
    </div>
    <!-- s 登录 -->
    <ul class="empower-input-list" :class="{active: state.show.forget}">
      <li class="list-item">
        <input type="text" placeholder="请输入手机号" v-model="phone">
      </li>
      <li class="list-item" v-show="state.show.code">
        <input class="item-input" type="text" placeholder="请输入短信验证码" v-model="code">
        <div class="item-code-gain">
          <button class="gain-btn" :disabled="codeDisabled" @click="getCode">获取验证码</button>
          <!-- <button class="gain-countdown">60秒</button> -->
        </div>
      </li>
      <li class="list-item" v-show="state.show.password">
        <input class="item-input" :type="secrecy ? 'password' : 'text'" :placeholder="state.text.placeholder" v-model="password">
        <div class="item-password-switch" @click="toggleSecrecy">
          <i class="iconfont" :class="{'icon-close-eye': secrecy, 'icon-zhengyan': !secrecy}"></i>
        </div>
      </li>
    </ul>
    <!-- e 登录 -->
    <!-- s 协议 -->
    <div class="empower-protocol" v-show="state.show.register">
      <span>注册即代表您同意先驱优品的</span>
      <span>注册条款</span>
    </div>
    <!-- e 协议 -->
    <!-- s 按钮 -->
    <div class="empower-btn" :class="{'far-away': state.class}">
      <button :disabled="submitDisabled" @click="submit">{{state.text.btn}}</button>
    </div>
    <!-- e 按钮 -->
    <div class="empower-operation" v-show="state.tip.exist">
      <p class="operation-item" v-show="state.tip.login" @click="toggleState('login-by-code')">验证码登录</p>
      <p class="operation-item" v-show="state.tip.code" @click="toggleState('login-by-password')">密码登录</p>
      <p class="operation-item" v-show="state.tip.login" @click="toggleState('forget-password')">忘记密码</p>
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
      codeDisabled: false,
      submitDisabled: false,
      dialogShow: false,
      type: 'login-by-password',
      previous: null,
      secrecy: true,
      status: new Map([
        ['login-by-password', {
          type: 'login-by-password',
          tip: {
            exist: true,
            code: false,
            login: true
          },
          text: {
            title: '注册',
            placeholder: '请输入密码',
            advertisement: '欢迎来到闲趣优品',
            btn: '登录'
          },
          show: {
            logo: true,
            login: true,
            theme: false,
            forget: false,
            password: true,
            register: false
          },
          operation: 'loginByPwd'
        }],
        ['login-by-code', {
          type: 'login-by-code',
          tip: {
            exist: true,
            code: true
          },
          text: {
            title: '注册',
            placeholder: '请输入密码',
            advertisement: '欢迎来到闲趣优品',
            btn: '确认'
          },
          show: {
            code: true,
            logo: true,
            login: true,
            password: true
          },
          class: true,
          operation: 'loginByCode'
        }],
        ['register', {
          type: 'register',
          tip: {
            exist: false,
            code: false,
            login: false
          },
          text: {
            title: '已有账号登录',
            placeholder: '请输入密码',
            advertisement: '注册闲趣优品',
            btn: '确认'
          },
          show: {
            code: true,
            logo: true,
            login: true,
            theme: false,
            forget: false,
            password: true,
            register: true
          },
          operation: 'register'
        }],
        ['forget-password', {
          type: 'forget-password',
          tip: {
            exist: false,
            code: false,
            login: false
          },
          text: {
            title: '修改登录密码',
            placeholder: '设置6-18位新密码',
            btn: '重设密码'
          },
          show: {
            code: true,
            logo: false,
            login: true,
            theme: true,
            forget: true,
            password: true,
            register: false
          },
          operation: 'forgetPassword'
        }]
      ]),
      state: null,
      passwordType: 'password'
    }
  },
  components: {
    ModalDialog
  },
  created () {
    this.state = this.status.get(this.type)
    this.submit = this.loginByPwd
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
    toggleState (type) {
      if (type) {
        this.type = type
      } else if (this.state.type !== 'register') {
        this.previous = this.type
        this.type = 'register'
      } else {
        this.type = this.previous
      }
      this.state = this.status.get(this.type)
      this.submit = this[this.state.operation]
      // switch (type) {
      //   case 'login-by-password':
      //     break
      //   case 1:
      //     if (!this.checkCode()) return
      //     if (!this.checkPassword()) return
      //     this.submitDisabled = true
      //     break
      //   // 验证码登录 2
      //   case 2:
      //     if (!this.checkCode()) return
      //     this.submitDisabled = true
      //     break
      //   // 忘记密码 3
      //   case 3:
      //     if (!this.checkCode()) return
      //     if (!this.checkPassword()) return
      //     this.submitDisabled = true
      //     break
      // }
    },
    submit () {
      if (!this.checkPhone()) return
      if (!this.checkPassword()) return
      this.submitDisabled = true
      switch (this.empowerType) {
        // 登录 0
        case 0:
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
    loginByPwd () {
      if (!this.checkPhone() || !this.checkPassword()) return
      this.submitDisabled = true
      Http.send({
        url: 'LoginCustomer',
        params: {
          phoneNo: this.phone,
          loginPwd: this.password
        }
      }).success(data => {
        console.log(data)
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
    },
    loginByCode () {
      if (!this.checkPhone() || !this.checkCode()) return
      this.submitDisabled = true
      Http.send({
        url: 'LoginCustomer',
        params: {}
      }).success(data => {
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
    },
    register () {
      Http.send({
        url: 'RegistCustomer',
        params: {}
      }).success(data => {
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
    },
    forgetPassword () {
      Http.send({
        url: 'RegistCustomer',
        params: {
        }
      }).success(data => {
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
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
    toggleSecrecy () {
      this.secrecy = !this.secrecy
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
