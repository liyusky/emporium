<template>
  <!-- s 授权 -->
  <section class="empower">
    <!-- s header -->
    <header class="empower-header">
      <div class="header-left" v-show="state.show.theme" @click="toggleState('login-by-password')">
        <i class="iconfont icon-arrow-left"></i>
      </div>
      <p class="header-item" v-show="!state.show.theme" @click="toggleState(null)">{{state.text.title}}</p>
      <p class="header-title" v-show="state.show.theme">{{state.text.title}}</p>
      <div class="header-right" id="back-btn" @click="goback">
        <i class="iconfont icon-close"></i>
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
        <input type="text" placeholder="请输入手机号" maxlength="11" v-model="phone" @change="checkInput('phone')">
      </li>
      <li class="list-item" v-show="state.show.code">
        <input class="item-input" type="number" placeholder="请输入短信验证码" maxlength="6" v-model="code" @change="checkInput('code')">
        <div class="item-code-gain">
          <button class="gain-btn" :disabled="codeDisabled" :class="{'code-active':codeDisabled}" @click="getCode">{{state.text.code}}</button>
          <!-- <button class="gain-countdown">60秒</button> -->
        </div>
      </li>
      <li class="list-item" v-show="state.show.password">
        <input class="item-input" :type="secrecy ? 'password' : 'text'" :placeholder="state.text.placeholder" maxlength="16" v-model="password" @change="checkInput('password')">
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
      <!-- <p class="operation-item" v-show="state.tip.login" @click="toggleState('login-by-code')">验证码登录</p> -->
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
      id: null,
      origin: null,
      phone: null,
      code: null,
      password: null,
      codeDisabled: false,
      submitDisabled: false,
      dialogShow: false,
      type: 'login-by-password',
      SMSType: null,
      previous: null,
      secrecy: true,
      status: new Map([
        ['login-by-password', {
          type: 'login-by-password',
          tip: {
            exist: true,
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
            password: true
          },
          SMSType: null,
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
            btn: '确认',
            code: '获取验证码'
          },
          show: {
            code: true,
            logo: true,
            login: true
          },
          operation: 'loginByCode'
        }],
        ['register', {
          type: 'register',
          tip: {},
          text: {
            title: '已有账号登录',
            placeholder: '请输入密码',
            advertisement: '注册闲趣优品',
            btn: '确认',
            code: '获取验证码'
          },
          show: {
            code: true,
            logo: true,
            login: true,
            password: true,
            register: true
          },
          class: true,
          SMSType: 1,
          operation: 'register'
        }],
        ['forget-password', {
          type: 'forget-password',
          tip: {},
          text: {
            title: '修改登录密码',
            placeholder: '设置6-18位新密码',
            btn: '重设密码',
            code: '获取验证码'
          },
          show: {
            code: true,
            login: true,
            theme: true,
            forget: true,
            password: true
          },
          SMSType: 2,
          operation: 'forgetPassword'
        }]
      ]),
      aaaaa: 0,
      state: null,
      passwordType: 'password'
    }
  },
  components: {
    ModalDialog
  },
  created () {
    this.origin = this.$store.state.origin4
    this.id = this.$store.state.productId
    this.state = this.status.get(this.type)
    this.submit = this.loginByPwd
  },
  methods: {
    getCode () {
      if (!this.checkPhone()) return
      this.codeDisabled = true
      this.state.text.code = '剩余60秒'
      this.waitOneMinute()
      Http.send({
        url: 'SendSMS',
        data: {
          phone: this.phone,
          type: this.SMSType
        }
      }).success(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    waitOneMinute () {
      let time = 60
      let animation = setInterval(() => {
        time--
        if (time > 0) {
          this.state.text.code = `剩余${time}秒`
        } else {
          this.state.text.code = `获取验证码`
          clearInterval(animation)
          this.codeDisabled = false
        }
      }, 1000)
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
      console.log(this.type)
      this.state = this.status.get(this.type)
      this.SMSType = this.state.SMSType
      this.submit = this[this.state.operation]
    },
    submit () {},
    loginByPwd () {
      if (!this.checkPhone() || !this.checkPassword()) return
      this.submitDisabled = true
      Http.send({
        url: 'LoginCustomer',
        data: {
          phoneNo: this.phone,
          loginPwd: this.password
        }
      }).success(data => {
        window.token = data.access_token
        window.id = data.customerId
        window.phone = this.phone
        if (window.localStorage) {
          localStorage.setItem('token', data.access_token)
          localStorage.setItem('id', data.customerId)
        }
        this.goback()
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
    },
    loginByCode () {},
    register () {
      if (!this.checkPhone() || !this.checkCode() || !this.checkPassword()) return
      this.submitDisabled = true
      Http.send({
        url: 'RegistCustomer',
        data: {
          trueName: '',
          PhoneNo: this.phone,
          loginPwd: this.password,
          ConfirmPwd: this.password,
          validateCode: this.code
        }
      }).success(data => {
        this.Title.text = '注册成功'
        this.dialogShow = true
        this.toggleState('login-by-password')
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      }).default(() => {
        this.submitDisabled = false
      })
    },
    forgetPassword () {
      if (!this.checkPhone() || !this.checkCode() || !this.checkPassword()) return
      this.submitDisabled = true
      Http.send({
        url: 'ModifyCustomerPwd',
        data: {
          'phoneNo': this.phone,
          'newPwd': this.password,
          'validateCode': this.code
        }
      }).success(data => {
        this.Title.text = '修改成功'
        this.dialogShow = true
        this.toggleState('login-by-password')
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
    checkInput (type) {
      let numberPat = new RegExp(/^[0-9]$/)
      let passwordPat = new RegExp(/^[a-zA-Z0-9]$/)
      switch (type) {
        case 'phone':
          if (!numberPat.test(this.phone)) {
            this.phone.substr(0, this.phone.length - 1)
          }
          break
        case 'code':
          if (!numberPat.test(this.code)) {
            this.code.substr(0, this.code.length - 1)
          }
          break
        case 'password':
          if (!passwordPat.test(this.password)) {
            this.password.substr(0, this.password.length - 1)
          }
          break
      }
    },
    toggleSecrecy () {
      this.secrecy = !this.secrecy
    },
    closeModal () {
      this.dialogShow = false
    },
    goback () {
      console.log(this.origin)
      if (this.origin === 'product') {
        this.$router.push({
          name: 'product',
          params: {
            id: this.id
          }
        })
      } else if (window.token) {
        this.$router.push({
          name: this.origin
        })
      } else {
        this.$router.push({
          name: 'mine'
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./empower.scss";
</style>
