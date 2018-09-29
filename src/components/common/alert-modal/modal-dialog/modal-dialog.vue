<template>
  <section class="dialog" @touchmove="stopScroll($event)">
    <div class="dialog-content">
      <div class="content-title">
        <p class="title-text">{{Title.text}}</p>
      </div>
      <button class="content-button" @click="close">
        <div>确认</div>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title'],
  methods: {
    stopScroll (e) {
      e.preventDefault()
    },
    close () {
      this.$emit('CLOSE_DIALOG_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './modal-dialog.scss';
</style>
