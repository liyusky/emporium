<template>
  <section class="order-detail">
    <Theme :theme="theme"></Theme>
    <section class="order-detail-content">
      <div class="content-order-information">
        <div class="information-person">
          <div class="person-number-status">
            <p class="person-number">{{orderDetail.OrderNo}}</p>
            <p class="person-status">{{statusName[orderDetail.Status-1].statusTitle}}</p>
          </div>
          <div class="person-detail">
            <i class="iconfont icon-suan"></i>
            <div class="detail-name-address">
              <h3 class="detail-name">{{orderDetail.orderName}} {{orderDetail.telphone}}</h3>
              <p class="detail-address">{{orderDetail.orderAddress}}</p>
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
      <div class="button-item" v-if="orderDetail.Status == 1">
        <button class="item-right">{{statusName[orderDetail.Status-1].buttonLeftName}}</button>
        <button class="item-left">{{statusName[orderDetail.Status-1].buttonRightName}}</button>
      </div>
      <div class="button-item" v-else-if="orderDetail.Status != 1">
        <button class="item-right">{{statusName[orderDetail.Status-1].buttonLeftName}}</button>
        <button class="item-left">{{statusName[orderDetail.Status-1].buttonRightName}}</button>
      </div>
    </footer>
    <Modal></Modal>
    <DeleteOrder></DeleteOrder>
  </section>
</template>
<script>
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import DeleteOrder from './delete-order/delete-order'
export default {
  data () {
    return {
      theme: {
        title: '订单详情'
      },
      orderDetail: null,
      statusName: [
        {
          statusTitle: '待付款',
          buttonLeftName: '取消订单',
          buttonRightName: '去支付'
        },
        {
          statusTitle: '等待发货',
          buttonLeftName: '取消订单',
          buttonRightName: '催促发货'
        },
        {
          statusTitle: '已发货',
          buttonLeftName: '查看物流',
          buttonRightName: '确认收货'
        },
        {
          statusTitle: '交易成功',
          buttonLeftName: '删除订单',
          buttonRightName: '评价晒单'
        }
      ]
    }
  },
  // 订单参数
  props: ['orderNum'],
  created () {
    Http.send({
      url: 'orderdetail',
      params: {
        Orderno: this.orderNum
      }
    }).success((data) => {
      this.orderDetail = data
      console.log(this.orderDetail)
    })
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
