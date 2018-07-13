<template>
  <section class="order-detail">
    <Theme :theme="theme"></Theme>
    <section class="order-detail-content">
      <div class="content-order-information">
        <div class="information-person">
          <div class="person-number-status">
            <p class="person-number">{{orderDetail.OrderNo}}</p>
            <p class="person-status">{{statusName}}</p>
          </div>
          <div class="person-detail">
            <i class="iconfont icon-suan"></i>
            <div class="detail-name-address">
              <h3 class="detail-name">{{orderDetail.ReciverName}} {{orderDetail.ReciverPhone}}</h3>
              <p class="detail-address">{{orderDetail.ReciverAddress}}</p>
            </div>
          </div>
        </div>
        <div class="information-phone">
          <div class="phone-detail">
            <div class="detail-img">
              <img :src="orderDetail.Icon">
            </div>
            <div class="detail-content">
              <h3 class="content-title">{{orderDetail.Title}}</h3>
              <div class="content-price-number">
                <p class="content-price">￥{{orderDetail.CommodityPrice}}</p>
                <p class="content-number">x{{orderDetail.rownum}}</p>
              </div>
            </div>
          </div>
          <ul class="phone-list">
            <li class="list-item">
              <p class="item-title">商品总价</p>
              <p class="item-value">￥{{orderDetail.CommodityPrice * orderDetail.rownum}}</p>
            </li>
            <li class="list-item">
              <p class="item-title">运费</p>
              <p class="item-value">￥{{orderDetail.DeliverPrice}}</p>
            </li>
            <li class="list-item">
              <p class="item-title">支付方式</p>
              <p class="item-value">{{orderDetail.PayType}}</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <footer class="detail-button">
      <div class="button-item">
        <button class="item-right" @click="LeftButtonClick" v-if="statusLeftBtnName">{{statusLeftBtnName}}</button>
        <button class="item-left" v-if="statusRightBtnName">{{statusRightBtnName}}</button>
      </div>
      <!-- <div class="button-item" v-if="orderDetail.Status == 1">
        <button class="item-right" @click="LeftButtonClick">{{statusLeftBtnName}}</button>
        <button class="item-left">{{statusRightBtnName}}</button>
      </div>
      <div class="button-item" v-else-if="orderDetail.Status != 1">
        <button class="item-right">{{statusLeftBtnName}}</button>
        <button class="item-left">{{statusRightBtnName}}</button>
      </div> -->
    </footer>
    <Modal v-show="modalShow"></Modal>
    <DeleteOrder v-show="modalShow" @CLOSE_MODAL_EVENT = "closeModal"></DeleteOrder>
  </section>
</template>
<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import DeleteOrder from './delete-order/delete-order.vue'
export default {
  // 订单参数
  props: ['orderNum'],
  data () {
    return {
      theme: {
        title: '订单详情',
        themeRight: false
      },
      orderDetail: {},
      status: [
        {
          statusTitle: '待付款',
          buttonLeftName: '取消订单',
          buttonRightName: '去支付'
        },
        {
          statusTitle: '等待发货',
          buttonLeftName: '取消订单',
          buttonRightName: ''
        },
        {
          statusTitle: '已发货',
          buttonLeftName: '',
          buttonRightName: '确认收货'
        }
        // {
        //   statusTitle: '交易成功',
        //   buttonLeftName: '删除订单',
        //   buttonRightName: '评价晒单'
        // }
      ],
      statusName: '',
      statusLeftBtnName: '',
      statusRightBtnName: '',
      modalShow: false
    }
  },
  mounted () {
    Http.send({
      url: 'orderDetail',
      params: {
        Orderno: this.orderNum
      }
    }).success((data) => {
      this.orderDetail = data
      this.statusName = this.status[data.Status - 1].statusTitle
      this.statusLeftBtnName = this.status[data.Status - 1].buttonLeftName
      this.statusRightBtnName = this.status[data.Status - 1].buttonRightName
    })
  },
  methods: {
    LeftButtonClick () {
      if (this.statusLeftBtnName === '取消订单') this.modalShow = true
    },
    closeModal () {
      this.modalShow = false
    }
  },
  components: {
    Theme,
    DeleteOrder,
    Modal
  }
}
</script>

<style scoped lang="scss">
@import './order-detail.scss';
</style>
