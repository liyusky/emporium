<template>
  <section class="feedback">
<<<<<<< HEAD
    <Theme :theme="theme"></Theme>
    <div class="feedback-content">
      <section class="content-form">
        <div class="form-opinion">
          <textarea class="opinion-input" id="opinion-input" name="opinion-input"  v-model="textareaNum" maxlength="200" placeholder="欢迎您给我们提供宝贵的意见或建议"></textarea>
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
      textareaNum: '',
      theme: {
        title: '用户反馈'
      }
    }
  },
  components: {
    Theme
  }
}
</script>

<style scoped lang="sass">
@import './feedback.scss';
=======
    <Headbar HeadbarName="新增收货地址"></Headbar>
    <transition name="fade">
      <div class="feedback-content"  v-show="animationShow">
        <section class="content-form">
          <div class="form-opinion">
            <textarea class="opinion-input" id="opinion-input" name="opinion-input" placeholder="欢迎您给我们提供宝贵的意见或建议"></textarea>
          </div>
          <div class="form-contact-way">
            <input class="way-input" type="text" placeholder="手机号/邮箱（选填，方便我们联系您）">
          </div>
        </section>
        <button class="content-save-button">保存</button>
      </div>
    </transition>
  </section>

</template>

<script>
  import Headbar from '@/components/common/headbar/headbar.vue'
  export default {
    name: 'index',
    data() {
      return {
        animationShow: false
      }
    },
    mounted() {
      this.animationShow = true;
    },
    components: {
      Headbar
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import './feedback.scss';

>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
</style>
