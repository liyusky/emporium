<template>
  <!-- s  -->
  <li class="product-item">
    <img class="item-image" :src="product.image">
    <p class="item-title">{{product.title}}</p>
    <p class="item-prise">¥{{product.moneyAmount}}</p>
    <p class="item-staging">
      <span>¥{{product.money}}</span>
      <span>x{{product.time}}期</span>
    </p>
  </li>
  <!-- e  -->
</template>

<script>
export default {
  name: 'Product',
  props: ['product'],
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./product.scss";
</style>
