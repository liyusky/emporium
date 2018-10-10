<template>
  <section class="reminder" @touchmove="stopScroll($event)">
    <div class="reminder-content">
      <p class="content-tip">提示</p>
      <p class="content-title">{{Title.text}}</p>
      <div class="content-button">
        <button class="button-cancel" @click="closeModal">
          <div>取消</div>
        </button>
        <button class="button-sure" @click="sendRequest">
          <div>确认</div>
        </button>
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
    },
    stopScroll (e) {
      e.preventDefault()
    }
  }
}
</script>
<style scoped lang="scss">
@import './modal-reminder.scss';
</style>
