<template>
  <!-- s  -->
  <section class="installment-info">
    <div class="info-phone" @click="showProduct">
      <div class="phone-img">
        <img :src="order.Icon">
      </div>
      <div class="phone-detail">
        <h3 class="detail-title">{{order.Title}}</h3>
        <div class="detail-price-number">
          <p>￥{{order.CommodityPrice}}</p>
          <p>x{{order.rownum}}</p>
        </div>
      </div>
    </div>
    <div class="info-total-price">
      <p>商品总价</p>
      <p>￥{{order.CommodityPrice}}</p>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Info',
  props: ['order'],
  data () {
    return {
      detail: {}
    }
  },
  watch: {
    order: (current, previous) => {
      if (current) this.detail = current
    }
  },
  methods: {
    showProduct () {
      this.saveOrigin7('installment-detail')
      this.$router.push({
        name: 'product',
        params: {
          id: this.order.CommodityId
        }
      })
    },
    ...mapMutations(['saveOrigin7'])
  }
}
</script>

<style lang="sass" scoped>
@import "./info.scss";
</style>
