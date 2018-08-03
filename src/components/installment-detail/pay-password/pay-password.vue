<template>
  <!-- s  -->
  <section class="pay-password">
    <div class="password-title">
      <p>输入交易支付密码</p>
      <i class="iconfont icon-close" @click="closeModal"></i>
    </div>
    <div class="password-input">
      <ul class="input-list">
        <li class="list-item">{{first}}</li>
        <li class="list-item">{{password[1]}}</li>
        <li class="list-item">{{password[2]}}</li>
        <li class="list-item">{{password[3]}}</li>
        <li class="list-item">{{password[4]}}</li>
        <li class="list-item">{{password[5]}}</li>
      </ul>
    </div>
    <ul class="password-keyboard">
      <li class="keyboard-item" v-for="(number, index) in keyboard" :key="index" @click="press(number)">{{number}}</li>
      <li class="keyboard-item"></li>
      <li class="keyboard-item" @click="press(0)">0</li>
      <li class="keyboard-item" @click="remove"></li>
    </ul>
  </section>
  <!-- e  -->
</template>

<script>
export default {
  name: 'PayPassword',
  data () {
    return {
      keyboard: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      password: [],
      size: 0,
      first: 0
    }
  },
  methods: {
    press (number) {
      if (this.password.length > 5) return
      console.log(this.first)
      this.first = number
      this.password.push(number)
    },
    remove () {
      if (this.password.length < 1) return
      this.password.pop()
    },
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    }
  }
  // watch: {
  //   password: (current, previous) => {
  //     if (current.length === 6) {
  //     }
  //   }
  // }
}
</script>

<style lang="sass" scoped>
@import "./pay-password.scss";
</style>
