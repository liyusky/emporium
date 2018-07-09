<template>
  <!-- s 分享 -->
  <section class="share">
    <div class="share-title">
      <h3>分享给好友，嘚瑟一下~</h3>
    </div>
    <div class="share-approach">
      <div class="approach-item">
        <i class="iconfont icon-dacong"></i>
        <p class="item-name">微信好友</p>
      </div>
      <div class="approach-item">
        <i class="iconfont icon-dacong"></i>
        <p class="item-name">朋友圈</p>
      </div>
      <div class="approach-item">
        <i class="iconfont icon-dacong"></i>
        <p class="item-name">复制链接</p>
      </div>
    </div>
    <button class="cancel" @click="closeModal">取消</button>
  </section>
  <!-- e 分享 -->
</template>
<script>
export default {
  name: 'Share',
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './share.scss';
</style>
