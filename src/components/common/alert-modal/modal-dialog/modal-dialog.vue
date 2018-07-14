<template>
  <section class="dialog">
    <p class="dialog-title">{{Title.text}}</p>
    <button class="dialog-button">确认</button>
  </section>
</template>
<script>
export default {
  props: ['Title']
}
</script>
<style scoped lang="scss">
@import './modal-dialog.scss';
</style>
