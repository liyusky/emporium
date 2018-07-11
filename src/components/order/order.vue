<template>
  <section class="order">
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <div class="tabbar-item" :class="{active:checkPageNum == 0}" @click="checkPage(0)">全部</div>
      <div class="tabbar-item" :class="{active:checkPageNum == 1}" @click="checkPage(1)">代付款</div>
      <div class="tabbar-item" :class="{active:checkPageNum == 2}" @click="checkPage(2)">代发货</div>
      <div class="tabbar-item" :class="{active:checkPageNum == 3}" @click="checkPage(3)">代收货</div>
      <div class="tabbar-item" :class="{active:checkPageNum == 4}" @click="checkPage(4)">待评价</div>
    </section>
    <section class="order-classify">
      <OrderList v-for="(item, index) in orderList" :key="index" :item = item></OrderList>
      <OrderWithout v-show="!this.orderList.length"></OrderWithout>
    </section>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import OrderList from './order-list/order-list.vue'
import OrderWithout from './order-without/order-without'
export default {
  name: 'Order',
  data () {
    return {
      theme: {
        title: '我的订单'
      },
      checkPageNum: 0,
      orderList: []
    }
  },
  created () {
    Http.send({
      url: 'orderList',
      params: {
        custermerId: '10000',
        status: '-1'
      }
    }).success((data) => {
      this.checkPageNum = this.statusNum
      if (this.statusNum === 0) {
        data.forEach(element => {
          if (element.Status !== 0) {
            this.orderList.push(element)
          }
        })
      }
      if (this.statusNum !== 0) {
        data.forEach(element => {
          if (element.Status === this.statusNum) {
            this.orderList.push(element)
          }
        })
      }
    })
  },
  methods: {
    checkPage (statusNum) {
      this.checkPageNum = statusNum
      this.changeStatusNum(statusNum)
      Http.send({
        url: 'orderList',
        params: {
          custermerId: '10000',
          status: '-1'
        }
      }).success((data) => {
        this.orderList = []
        if (this.statusNum === 0) {
          data.forEach(element => {
            if (element.Status !== 0) {
              this.orderList.push(element)
            }
          })
        }
        if (this.statusNum !== 0) {
          data.forEach(element => {
            if (element.Status === this.statusNum) {
              this.orderList.push(element)
            }
          })
        }
      })
    },
    ...mapMutations(['changeStatusNum'])
  },
  computed: {
    ...mapState(['statusNum'])
  },
  components: {
    Theme,
    OrderList,
    OrderWithout
  }
}
</script>

<style scoped lang="scss">
@import './order.scss';
</style>
