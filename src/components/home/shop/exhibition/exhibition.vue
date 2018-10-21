<template>
  <!-- s  -->
  <section class="exhibition">
    <div class="exhibition-title">
      <h3 class="title-name">{{exhibition.Key}}</h3>
      <p class="title-more">
        <span>更多</span>
        <i class="iconfont icon-jiantou1"></i>
      </p>
    </div>
    <div class="exhibition-banner">
      <img src="../../../../assets/images/shoji-banner.png">
    </div>
    <Goods :goods="exhibition.PhoneList" :container="'goods-exhibition-' + index"></Goods>
  </section>
  <!-- e  -->
</template>

<script>
import Goods from '../goods/goods.vue'
export default {
  name: 'Exhibition',
  props: ['exhibition', 'index'],
  components: {
    Goods
  }
}
</script>

<style lang="sass" scoped>
@import "./exhibition.scss";
</style>
