<template>
  <section class="feedback">
    <Theme :theme="theme"></Theme>
    <div class="feedback-content">
      <section class="content-form">
        <div class="form-opinion">
          <textarea class="opinion-input" id="opinion-input" v-model="textareaNum" name="opinion-input" maxlength="200" placeholder="欢迎您给我们提供宝贵的意见或建议"></textarea>
          <div class="input-number">{{textareaNum.length}}/200</div>
        </div>
        <div class="form-contact-way">
          <input class="way-input" type="text" placeholder="手机号/邮箱（选填，方便我们联系您）">
        </div>
      </section>
      <button class="content-save-button">保存</button>
    </div>
  </section>
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'Feedback',
  data () {
    return {
      theme: {
        title: '用户反馈'
      },
      textareaNum: ''
    }
  },
  components: {
    Theme
  }
}
</script>

<style scoped lang="sass">
@import './feedback.scss';
</style>
