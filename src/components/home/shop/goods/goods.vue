<template>
  <!-- s  -->
  <ul class="goods">
    <div class="swiper-container" :class="container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in goods" :key="index">
          <li class="goods-item" @click="gotoPage(item.Id, item.ProductName)">
            <img class="item-image" :src="item.Icon">
            <p class="item-title">{{item.Title}}</p>
            <p class="item-prise">¥{{item.nowPrice}}</p>
            <p class="item-staging">
              <span>¥{{item.InstallmentAmount}}</span>
              <span>x{{item.InstallmentNum}}期</span>
            </p>
          </li>
        </div>
      </div>
    </div>
  </ul>
  <!-- e  -->
</template>

<script>
import { mapMutations } from 'vuex'
import Swiper from 'swiper'
export default {
  name: 'Goods',
  props: ['goods', 'container'],
  data () {
    return {
      goodsSwiper: null
    }
  },
  created () {
    this.$nextTick(() => {
      this.initGoodsSwiper()
    })
  },
  methods: {
    initGoodsSwiper () {
      if (this.goodsSwiper !== null) return
      /* eslint-disable */
      this.goodsSwiper = new Swiper(`.${this.container}`, {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 10,
        freeMode: true,
        observer: true,
        observeParents: true
      })
    },
    gotoPage (id, title) {
      this.saveProductId(id)
      this.saveOrigin7('shop')
      this.$router.push({
        name: 'product',
        params: {
          id: id
        }
      })
    },
    ...mapMutations(['saveProductId', 'saveOrigin7'])
  }
}
</script>

<style lang="sass" scoped>
@import "./goods.scss";
</style>
