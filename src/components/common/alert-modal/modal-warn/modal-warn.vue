<template>
  <section class="warn">
    <div class="warn-content">
      <p class="warn-title">{{Title.text}}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ['Title']
}
</script>
<style scoped lang="scss">
@import './modal-warn.scss';
</style>
