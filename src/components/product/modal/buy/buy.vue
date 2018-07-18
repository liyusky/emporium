<template>
  <!-- s 购买 -->
  <section class="rightbuy">
    <div class="rightbuy-commodity">
      <div class="commodity-img">
        <img :src="buy.Icon">
      </div>
      <div class="commodity-detail">
        <p class="detail-name">{{buy.Title}}</p>
        <p class="detail-price">{{buy.nowPrice}}</p>
        <p class="detail-advantage">{{buy.PaymentType}}</p>
      </div>
      <i class="iconfont icon-close" @click="closeModal"></i>
    </div>
    <div class="rightbuy-property">
      <div class="property-item">
        <p class="item-title">网络</p>
        <div class="item-attribute">
          <div class="attribute-value active" :class="{active:true}">网络:{{buy.NetType}}</div>
        </div>
      </div>
     <!-- <div class="property-item">
        <p class="item-title">版本</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">版本:其他版本</div>
        </div>
      </div> -->
      <!-- <div class="property-item">
        <p class="item-title">服务</p>
        <div class="item-attribute">
          <div class="attribute-value" :class="{activeShow:true}">整机清洗:<span>￥0.00</span></div>
          <div class="attribute-value">贴膜服务:<span>￥9.90</span></div>
          <div class="attribute-value">运费险:<span>￥9.90</span></div>
        </div>
      </div> -->
    </div>
    <button class="rightbuy-button" @click="order">立即购买</button>
    <ModalReminder v-show="DialogShow" :Title="Title" @CLOSE_DIALOG_EVENT = "close"></ModalReminder>
  </section>
  <!-- e 购买 -->
</template>
<script>
import Http from '../../../../class/http.class.js'
import ModalReminder from '../../../common/alert-modal/modal-dialog/modal-dialog.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'Buy',
  props: ['buy'],
  data () {
    return {
      Title: {
        text: ''
      },
      DialogShow: false
    }
  },
  components: {
    ModalReminder
  },
  methods: {
    closeModal () {
      this.$emit('CLOSE_MODAL_EVENT')
    },
    order () {
      Http.send({
        url: 'buy',
        params: {
          CustermerId: 10000,
          commodityId: this.buy.Id,
          PayType: 0,
          DeliverType: 0,
          DeliverPrice: 0,
          OtherCost: 0,
          CommodityPrice: this.buy.nowPrice
        }
      }).success(data => {
        this.saveOrigin('product')
        this.saveOrigin3('product')
        this.saveOrderNo(data.OrderNo)
        this.saveProductId(this.buy.Id)
        this.$router.push({
          name: 'order-confirm'
        })
      }).fail((data) => {
        this.Title.text = data.message + ' 请返回'
        this.DialogShow = true
      })
    },
    close () {
      this.DialogShow = false
      this.closeModal()
    },
    ...mapMutations(['saveOrigin', 'saveOrigin3', 'saveProductId', 'saveOrderNo'])
  }
}
</script>
<style scoped lang="scss">
@import './buy.scss';
</style>
