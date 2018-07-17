<template>
  <section class="dialog">
    <div class="dialog-content">
      <p class="content-title">{{Title.text}}</p>
      <button class="content-button" @click="close">确认</button>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title'],
  methods: {
    close () {
      this.$emit('CLOSE_DIALOG_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './modal-dialog.scss';
</style>
