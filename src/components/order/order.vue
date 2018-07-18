<template>
  <section class="order">
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <button class="tabbar-item" :class="{active:status == -1}" @click="switchTips(-1)">全部</button>
      <button class="tabbar-item" :class="{active:status == 1}" @click="switchTips(1)">代付款</button>
      <button class="tabbar-item" :class="{active:status == 2}" @click="switchTips(2)">代发货</button>
      <button class="tabbar-item" :class="{active:status == 3}" @click="switchTips(3)">代收货</button>
      <!-- <button class="tabbar-item" :class="{active:checkPageNum == 4}" type="button" :disabled = "disabledNum == 4" @click="checkPage(4)">待评价</button> -->
    </section>
    <section class="order-classify" ref="orders">
      <PullRefresh @LOAD_MORE_EVENT="loadMore" :parent="'orders'">
        <OrderList v-show="tips" v-for="(item, index) in tips" :key="index" :item="item"></OrderList>
        <OrderWithout v-show="!tips"></OrderWithout>
      </PullRefresh>
    </section>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import OrderList from './order-list/order-list.vue'
import OrderWithout from './order-without/order-without.vue'
import PullRefresh from '../common/pull-refresh/pull-refresh.vue'
export default {
  name: 'Order',
  data () {
    return {
      theme: {
        title: '我的订单'
      },
      status: -1,
      tips: null,
      page: 1
    }
  },
  created () {
    let defaultStatus = this.$store.state.statusNum
    if (typeof defaultStatus === 'number') this.status = defaultStatus
    this.getData(defaultStatus)
  },
  methods: {
    switchTips (status) {
      this.changeStatusNum(status)
      if (this.status !== status) {
        this.status = status
        this.getData(status)
      }
    },
    getData (status) {
      Http.send({
        url: 'orderList',
        params: {
          custermerId: 10000,
          status: status
          // pageCurrent: this.page
        }
      }).success((data) => {
        if (status === this.status) this.tips = data
      })
    },
    loadMore () {
      Http.send({
        url: 'orderList',
        params: {
          custermerId: 10000,
          status: this.status,
          pageCurrent: ++this.page
        }
      }).success((data) => {
        this.tips = this.tips.concat(data)
      })
    },
    ...mapMutations(['changeStatusNum'])
  },
  components: {
    Theme,
    OrderList,
    PullRefresh,
    OrderWithout
  }
}
</script>

<style scoped lang="scss">
@import './order.scss';
</style>
