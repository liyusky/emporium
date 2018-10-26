<template>
  <!-- s  -->
  <section class="exhibition">
    <div class="exhibition-title">
      <h3 class="title-name">{{exhibition.Key}}</h3>
      <p class="title-more" @click="gotoPage(exhibition.PhoneList[0].CatetoryNo)">
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
  },
  methods: {
    gotoPage (catetoryNo) {
      if (catetoryNo === 1000) {
        this.$router.push({
          name: 'phone-shop'
        })
      }
      if (catetoryNo === 1004) {
        this.$router.push({
          name: 'jewelry-shop'
        })
      }
      if (catetoryNo === 1005) {
        this.$router.push({
          name: 'computer-shop'
        })
      }
      if (catetoryNo === 1006) {
        this.$router.push({
          name: 'beauty-shop'
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./exhibition.scss";
</style>
