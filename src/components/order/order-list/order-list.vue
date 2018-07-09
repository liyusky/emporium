<template>
  <section class="order-content">
    <div class="content-item"  v-for="(item, index) in orderList" :key="index">
      <div class="item-title">
        <p class="title-time">{{item.CreateTime}}</p>
        <p class="title-sign">{{item.StatusTitle}}</p>
      </div>
      <div class="item-detail" @click="gotoPage(index)">
        <div class="detail-img">
          <img :src="item.Icon">
        </div>
        <div class="detail-content">
          <p class="content-title">{{item.Title}}</p>
          <div class="content-price-number">
            <p class="content-price">{{item.CommodityPrice}}</p>
            <p class="content-number">x{{item.BuyNum}}</p>
          </div>
        </div>
      </div>
      <div class="item-summary">
        <p>共1件商品 合计:
          <span class="summary-price">{{item.BuyNum * item.nowPrice}}</span>
          <span class="summary-fare"> (含运费￥0.00)</span>
        </p>
      </div>
      <div class="item-button">
        <div class="button-topay" v-if="item.StatusName == 'orderPay'">
          <button>{{item.buttonPayName}}</button>
        </div>
        <div class="button-order" v-else-if="item.StatusName != 'orderPay'">
          <button>{{item.buttonLeftName}}</button>
          <button>{{item.buttonRightName}}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      button: {
        type: 'topay'
      }
    }
  },
  props: ['orderList'],
  methods: {
    gotoPage (id) {
      this.$router.push({
        name: 'orderdetail',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  @import './order-list.scss'

</style>
