<template>
  <!-- s  -->
  <section class="pay-password">
    <div class="password-title">
      <p>输入交易支付密码</p>
      <i class="iconfont icon-close" @click="closeModal"></i>
    </div>
    <div class="password-input">
      <ul class="input-list">
        <li class="list-item" v-for="index in 6" :key="index">{{isNaN(password[index - 1]) ? '' : '•'}}</li>
      </ul>
    </div>
    <ul class="password-keyboard">
      <li class="keyboard-item" v-for="(number, index) in keyboard" :key="index" @click="press(number)">{{number}}</li>
      <li class="keyboard-item"></li>
      <li class="keyboard-item" @click="press(0)">0</li>
      <li class="keyboard-item" @click="remove">
        <i class="iconfont icon-huitui"></i>
      </li>
    </ul>
  </section>
  <!-- e  -->
</template>

<script>
import Http from '../../../class/http.class.js'
export default {
  name: 'PayPassword',
  props: ['OrderNo', 'BillId'],
  data () {
    return {
      keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      password: [],
      size: 0
    }
  },
  created () {
    this.OrderNo = this.$store.state.OrderNo
  },
  methods: {
    press (number) {
      if (this.password.length > 5) return
      this.password.push(number)
    },
    remove () {
      if (this.password.length < 1) return
      this.password.pop()
    },
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    },
    payPart () {
      Http.send({
        url: 'PayOrderBill',
        data: {
          access_token: window.token,
          BillId: this.BillId,
          orderNo: this.OrderNo,
          phoneno: window.phone,
          pwd: this.password.join('')
        }
      }).success(data => {
        this.$emit('PAY_SUCCESS_EVENT')
      }).fail(data => {
        this.$emit('PAY_FAIL_EVENT')
      }).default(() => {
        this.password = []
      })
    }
  },
  watch: {
    password: function (current) {
      if (current.length === 6) this.payPart()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./pay-password.scss";
</style>
