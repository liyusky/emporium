<template>
  <!-- s 模态框 -->
  <section class="modal">
    <div class="modal-bg"></div>
    <div class="modal-content">
      <slot></slot>
    </div>
  </section>
  <!-- e 模态框 -->
</template>

<script>
export default {
  name: 'Modal',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./modal.scss";
</style>
