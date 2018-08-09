<template>
  <section class="order">
    <Theme :theme="theme"></Theme>
    <section class="order-tabbar">
      <button class="tabbar-item" :class="{active:status == 1}" @click="switchTips(1, 0)">待付款</button>
      <button class="tabbar-item" :class="{active:status == 2}" @click="switchTips(2, 1)">待发货</button>
      <button class="tabbar-item" :class="{active:status == 3}" @click="switchTips(3, 2)">待收货</button>
      <button class="tabbar-item" :class="{active:status == -1}" @click="switchTips(-1, 3)">全部</button>
      <!-- <button class="tabbar-item" :class="{active:checkPageNum == 4}" type="button" :disabled = "disabledNum == 4" @click="checkPage(4)">待评价</button> -->
    </section>
    <section class="order-classify" @touchstart="handleTouchStart($event)" @touchmove="handleTouchMove($event)" @touchend="handleTouchEnd($event)">
      <transition :name="fadeNewName">
        <div class="classify-item" v-if="isShow" id="orders" >
          <OrderWithout v-show="!tips.length"></OrderWithout>
          <PullRefresh v-show="tips.length" @LOAD_MORE_EVENT="loadMore" :parent="'orders'">
            <OrderList :tips="tips" :timeArr="timeArr" :statusList="statusNameList"></OrderList>
          </PullRefresh>
        </div>
      </transition>
      <transition :name="fadeOldName">
        <div class="classify-item" v-if="!isShow" id="orders">
          <OrderWithout v-show="!tips.length"></OrderWithout>
          <OrderList v-show="tips.length" :tips="tips" :timeArr="timeArr" :statusList="statusNameList"></OrderList>
        </div>
      </transition>
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
      animationShow: false,
      timeArr: [],
      statusNameList: {
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
        '4': {
          statusTitle: '已收获'
        },
        '8': {
          statusTitle: '已取消订单'
        },
        '9': {
          statusTitle: '已取消订单'
        }
      },
      isShow: true,
      fadeNewName: 'fade',
      fadeOldName: 'fade2',
      statusArr: [1, 2, 3, -1],
      statusArrIndex: 0,
      touchPageX: 0,
      touchPageY: 0,
      touchScale: 0,
      touchPageXMounts: 0,
      touchPageYMounts: 0
    }
  },
  created () {
    let defaultStatus = this.$store.state.statusNum
    let defaultStatusArrIndex = this.$store.state.statusArrIndex
    if (typeof defaultStatus === 'number') this.status = defaultStatus
    this.statusArrIndex = defaultStatusArrIndex
    this.getData(this.status)
    this.saveOrigin4('order')
  },
  methods: {
    switchTips (status, statusKey) {
      if (this.status !== status) {
        this.changeStatusNum(status)
        this.addStatusArrIndex(statusKey)
        this.statusArrIndex = statusKey
        this.status = status
        this.getData(this.status)
        this.isShow = false
        setTimeout(() => {
          this.isShow = true
        }, 10)
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
        console.log(data)
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
    handleTouchStart (event) {
      this.touchPageX = event.targetTouches[0].pageX
      this.touchPageY = event.targetTouches[0].pageY
    },
    handleTouchMove () {
      this.touchPageXMounts = this.touchPageX - event.targetTouches[0].pageX
      this.touchPageYMounts = this.touchPageY - event.targetTouches[0].pageY
    },
    handleTouchEnd (event) {
      if (Math.abs(this.touchPageYMounts) > Math.abs(this.touchPageXMounts)) return
      var screenWidth = screen.width
      this.touchScale = parseFloat(this.touchPageXMounts / screenWidth).toFixed(2)
      if (Math.abs(this.touchScale) < 0.20) return
      if (this.touchScale > 0.20) {
        this.statusArrIndex++
        if (this.statusArrIndex > 3) this.statusArrIndex = 0
        if (this.status !== this.statusArr[this.statusArrIndex]) {
          this.status = this.statusArr[this.statusArrIndex]
          this.getData(this.status)
          this.isShow = false
          setTimeout(() => {
            this.isShow = true
          }, 10)
        }
      }
      if (this.touchScale < -0.20) {
        this.statusArrIndex--
        if (this.statusArrIndex < 0) this.statusArrIndex = 3
        if (this.status !== this.statusArr[this.statusArrIndex]) {
          this.status = this.statusArr[this.statusArrIndex]
          this.getData(this.status)
          this.isShow = false
          setTimeout(() => {
            this.isShow = true
          }, 10)
        }
      }
      console.log(this.statusArrIndex)
      console.log(this.touchScale)
    },
    ...mapMutations(['changeStatusNum', 'addStatusArrIndex', 'saveOrigin4'])
  },
  watch: {
    // 监听左右滚动
    statusArrIndex (newNum, oldNum) {
      if (newNum === 3 && oldNum === 0) {
        this.fadeNewName = 'fade3'
        this.fadeOldName = 'fade4'
        return
      }
      if (newNum === 0 && oldNum === 3) {
        this.fadeNewName = 'fade'
        this.fadeOldName = 'fade2'
        return
      }
      this.fadeNewName = newNum > oldNum ? 'fade' : 'fade3'
      this.fadeOldName = newNum > oldNum ? 'fade2' : 'fade4'
    }
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
