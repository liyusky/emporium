<template>
  <section class="reminder">
    <p class="reminder-tip">提示</p>
    <p class="reminder-title">{{Title.text}}</p>
    <div class="reminder-button">
      <button class="button-cancel" @click="closeModal">取消</button>
      <button class="button-sure">确认</button>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title'],
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './modal-reminder.scss';
</style>
