<template>
  <section class="warn" @touchmove="stopScroll($event)">
    <div class="warn-content">
      <p class="content-title">{{Title.text}}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title'],
  methods: {
    stopScroll (e) {
      e.preventDefault()
    }
  }
}
</script>
<style scoped lang="scss">
@import './modal-warn.scss';
</style>
