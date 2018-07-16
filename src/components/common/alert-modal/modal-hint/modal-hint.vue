<template>
  <section class="hint">
    <div class="hint-content">
      <p class="content-title">{{Title.text}}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title']
}
</script>
<style scoped lang="scss">
@import './modal-hint.scss';
</style>
