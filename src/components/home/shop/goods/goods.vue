<template>
  <!-- s  -->
  <ul class="goods">
    <div class="swiper-container goods-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in goods" :key="index">
          <li class="goods-item" @click="gotoPage(phone.Id, phone.ProductName)">
            <img class="item-image" :src="item.Icon">
            <p class="item-title">{{item.Title}}</p>
            <p class="item-prise">¥{{item.nowPrice}}</p>
            <p class="item-staging">
              <span>¥{{item.money}}</span>
              <span>x{{item.time}}期</span>
            </p>
          </li>
        </div>
      </div>
    </div>
  </ul>
  <!-- e  -->
</template>

<script>
import Swiper from 'Swiper'
import { mapMutations } from 'vuex'
export default {
  name: 'Goods',
  props: ['goods'],
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
      this.goodsSwiper = new Swiper('.goods-swiper', {
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
