<template>
  <section class="hint">
    <div class="hint-content">
      <i class="iconfont icon-jinggao"></i>
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
