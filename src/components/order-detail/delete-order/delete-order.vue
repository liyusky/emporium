<template>
  <section class="delete-order">
    <p class="order-tip">提示</p>
    <p class="order-title">取消后，机器可能会被人抢走哦~</p>
    <div class="order-button">
      <button class="button-cancel" @click="closeModal">取消</button>
      <button class="button-sure">确认</button>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped lang="scss">
@import './delete-order.scss';
</style>
