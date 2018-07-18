<template>
  <section class="dialog">
    <div class="dialog-content">
      <div class="content-title">
        <p class="title-text">{{Title.text}}</p>
      </div>
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
