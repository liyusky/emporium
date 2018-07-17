<template>
  <section class="reminder">
    <div class="reminder-content">
      <p class="content-tip">提示</p>
      <p class="content-title">{{Title.text}}</p>
      <div class="content-button">
        <button class="button-cancel" @click="closeModal">取消</button>
        <button class="button-sure" @click="sendRequest">确认</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title'],
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    },
    sendRequest () {
      this.$emit('SENF_REQUEST_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './modal-reminder.scss';
</style>
