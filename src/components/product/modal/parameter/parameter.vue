<template>
  <!-- s 参数 -->
  <section class="parameter">
    <div class="parameter-title">
      <h4>详细参数</h4>
      <i class="iconfont icon-close" @click="closeModal"></i>
    </div>
    <ul class="parameter-share-detail" >
      <li class="detail-item" v-for="(item, index) in parameter" :key="index">
        <p class="item-key">{{item.Title}}</p>
        <p class="item-value">{{item.Value}}</p>
      </li>
    </ul>
  </section>
  <!-- e 参数 -->
</template>
<script>
export default {
  name: 'Parameter',
  props: ['parameter'],
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    }
  }
}
</script>
<style scoped lang="scss">
@import './parameter.scss';
</style>
