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
        <OrderList v-show="tips" v-for="(item, index) in tips" :key="index" :item="item" :index="index" @REMOVE_TIPS_EVENT="cancel"></OrderList>
        <OrderWithout v-show="!tips"></OrderWithout>
      </PullRefresh>
    </section>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import OrderList from './order-list/order-list.vue'
import OrderWithout from './order-without/order-without.vue'
import PullRefresh from '../common/pull-refresh/pull-refresh.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
export default {
  name: 'Order',
  data () {
    return {
      theme: {
        title: '我的订单',
        goal: 'mine'
      },
      Title: {
        text: ''
      },
      status: -1,
      tips: null,
      page: 1,
      dialogShow: false
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
          status: status,
          pageCurrent: this.page
        }
      }).success(data => {
        if (status === this.status) this.tips = data
        console.log(data)
      }).fail((data) => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      Http.send({
        url: 'orderListx',
        params: {
          custermerId: 10000,
          status: this.status,
          pageCurrent: ++this.page
        }
      }).success((data) => {
        this.tips = this.tips.concat(data)
      }).fail((data) => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    cancel (index) {
      this.tips.splice(index, 1)
    },
    closeModal () {
      this.dialogShow = false
    },
    ...mapMutations(['changeStatusNum'])
  },
  components: {
    Theme,
    OrderList,
    PullRefresh,
    OrderWithout,
    ModalDialog
  }
}
</script>

<style scoped lang="scss">
@import './order.scss';
</style>
