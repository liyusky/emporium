<template>
  <section class="order">
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <button class="tabbar-item" :class="{active:status == -1}" @click="switchTips(-1)">全部</button>
      <button class="tabbar-item" :class="{active:status == 1}" @click="switchTips(1)">待付款</button>
      <button class="tabbar-item" :class="{active:status == 2}" @click="switchTips(2)">待发货</button>
      <button class="tabbar-item" :class="{active:status == 3}" @click="switchTips(3)">待收货</button>
      <!-- <button class="tabbar-item" :class="{active:checkPageNum == 4}" type="button" :disabled = "disabledNum == 4" @click="checkPage(4)">待评价</button> -->
    </section>
    <section class="order-classify" ref="orders">
      
    </section>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import Http from '../../class/http.class.js'
import Time from '../../class/time.class.js'
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
      tips: [],
      page: 1,
      dialogShow: false,
      timeArr: [],
      statusList: {
        '0': {
          statusTitle: '待提交'
        },
        '1': {
          statusTitle: '待付款'
        },
        '2': {
          statusTitle: '等待发货'
        },
        '3': {
          statusTitle: '已发货'
        },
        '9': {
          statusTitle: '已取消订单'
        }
      }
    }
  },
  created () {
    let defaultStatus = this.$store.state.statusNum
    if (typeof defaultStatus === 'number') this.status = defaultStatus
    this.getData(this.status)
    this.saveOrigin4('order')
  },
  methods: {
    switchTips (status) {
      this.changeStatusNum(status)
      if (this.status !== status) {
        this.status = status
        this.getData(this.status)
      }
    },
    getData (status) {
      Http.send({
        url: 'orderList',
        data: {
          custermerId: window.id,
          status: status
        }
      }).success(data => {
        if (status === this.status) this.tips = data
        this.tips.forEach(ele => {
          this.timeArr.push(Time.change(Number(ele.CreateTime.substring(6, 19))))
        })
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      Http.send({
        url: 'orderList',
        data: {
          custermerId: window.id,
          status: this.status,
          pageCurrent: ++this.page
        }
      }).success(data => {
        this.tips = this.tips.concat(data)
      })
    },
    closeModal () {
      this.dialogShow = false
    },
    ...mapMutations(['changeStatusNum', 'saveOrigin4'])
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
