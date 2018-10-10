<template>
  <!-- s  -->
  <section class="exhibition">
    <div class="exhibition-title">
      <h3 class="title-name">{{exhibition.Key}}</h3>
      <p class="title-more">
        <span>更多</span>
        <i></i>
      </p>
    </div>
    <div class="exhibition-banner">
      <img src="../../../../assets/images/shoji-banner.png">
    </div>
    <ul class="exhibition-goods">
      <Product :product="item" v-for="(item, index) in exhibition.PhoneList" :key="index"></Product>
    </ul>
  </section>
  <!-- e  -->
</template>

<script>
import Product from '../product/product.vue'
export default {
  name: 'Exhibition',
  props: ['exhibition'],
  components: {
    Product
  },
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./exhibition.scss";
</style>
