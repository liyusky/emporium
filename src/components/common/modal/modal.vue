<template>
  <!-- s 模态框 -->
  <section class="modal" id="modal" @touchmove="stopScroll($event)">
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
  },
  methods: {
    stopScroll (e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./modal.scss";
</style>
