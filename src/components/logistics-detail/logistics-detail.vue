<template>
  <!-- s  物流详情-->
  <section class="logistics">
    <Theme :theme="theme"></Theme>
    <div class="logistics-detail">
      <!-- <div class="detial-orderno"><span>{{orderDetail.OrderNo}}</span></div> -->
      <!-- <div class="detail-info">
        <div class="info-phone">
          <div class="phone-img">
            <img :src="orderDetail.Icon">
          </div>
          <div class="phone-detail">
            <h3 class="detail-title">{{orderDetail.Title}}</h3>
            <div class="detail-price-number">
              <p>￥{{orderDetail.CommodityPrice}}</p>
              <p>x1</p>
            </div>
          </div>
        </div>
      </div> -->
      <ul class="detail-message">
        <li class="message-item">
          <span>物流进度:</span>
          <span :class="{issign: logisticsDetail.Success}">{{logisticsDetail.Success ? '已签收' : '未签收'}}</span>
        </li>
        <li class="message-item">
          <span>物流公司:</span>
          <span>顺风快递</span>
        </li>
        <li class="message-item">
          <span>运单编号:</span>
          <span>33946584365641</span>
        </li>
      </ul>
      <div class="detail-trace">
        <div class="trace-title">
          <p>物流跟踪</p>
        </div>
        <ul class="trace-list" v-if="true">
          <li class="list-item" v-for="(item, index) in logisticsDetail.Traces" :key="index">
            <p class="item-address">{{item.AcceptStation}}</p>
            <p class="itme-time">{{item.AcceptTime}}</p>
            <div class="item-badge">
              <div class="badge-top">
                <span class="top-radius"></span>
              </div>
              <div class="badge-bottom"></div>
            </div>
          </li>
        </ul>
        <div class="trace-no" v-if="false">
          <p>卖家还未发货</p>
          <div class="item-badge"></div>
        </div>
      </div>
    </div>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
  <!-- e  物流详情-->
</template>

<script>
// import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
export default {
  name: 'LogisticsDetail',
  data () {
    return {
      theme: {
        title: '物流详情',
        goal: null
      },
      Title: {
        text: ''
      },
      reminderShow: false,
      dialogShow: false,
      orderDetail: null,
      logisticsDetail: {
        'EBusinessID': '1109259',
        'OrderCode': '',
        'ShipperCode': 'SF',
        'LogisticCode': '118461988807',
        'Success': true,
        'State': 3,
        'Reason': null,
        'Traces': [
          {
            'AcceptTime': '2014/06/25 08:05:37',
            'AcceptStation': '正在派件..(派件人:邓裕富,电话:18718866310)【深圳 市】',
            'Remark': null
          },
          {
            'AcceptTime': '2014/06/25 04:01:28',
            'AcceptStation': '快件在 深圳集散中心 , 准备送往下一站 深圳 【深圳市】',
            'Remark': null
          },
          {
            'AcceptTime': '2014/06/25 01:41:06',
            'AcceptStation': '快件在 深圳集散中心 【深圳市】',
            'Remark': null
          },
          {
            'AcceptTime': '2014/06/24 20:18:58',
            'AcceptStation': '已收件【深圳市】',
            'Remark': null
          },
          {
            'AcceptTime': '2014/06/24 20:55:28',
            'AcceptStation': '快件在 深圳 ,准备送往下一站 深圳集散中心 【深圳市】',
            'Remark': null
          },
          {
            'AcceptTime': '2014/06/25 10:23:03',
            'AcceptStation': '派件已签收【深圳市】',
            'Remark': null
          },
          {
            'AcceptTime': '2014/06/25 10:23:03',
            'AcceptStation': '签收人是：已签收【深圳市】',
            'Remark': null
          }
        ]
      }
    }
  },
  created () {
    this.orderDetail = this.$store.state.OrderDetail
    // Http.send({
    //   url: 'LogisticsDetail',
    //   data: {
    //     logistisCode: data.order.logistisCode
    //   }
    // }).success(data => {
    //   this.logisticsDetail = data
    // })
  },
  methods: {
    closeModal () {
      this.dialogShow = false
    }
  },
  components: {
    Theme,
    ModalDialog
  }
}
</script>

<style lang="sass" scoped>
@import "./logistics-detail.scss";
</style>
