<template>
  <!-- s  -->
  <section class="beauty-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-banner">
      <div class="banner-bg">
        <img src="../../assets/images/beauty-shop.png">
      </div>
      <ul class="banner-coupon">
        <li class="coupon-item">
          <div class="item-content">
            <div class="content-message">
              <p class="message-money">
                <span>¥</span>
                <span class="money-num">40</span>
              </p>
              <p class="message-type">优惠券</p>
            </div>
            <p class="content-proviso">
              <span>全场满400元使用</span>
              <span>立即领取></span>
            </p>
          </div>
        </li>
        <li class="coupon-item">
          <div class="item-content">
            <div class="content-message">
              <p class="message-money">
                <span>¥</span>
                <span class="money-num">80</span>
              </p>
              <p class="message-type">优惠券</p>
            </div>
            <p class="content-proviso">
              <span>全场满400元使用</span>
              <span>立即领取></span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="shop-title">
      <p class="title-top">秒杀专区 低至9元9</p>
      <div class="title-division">
        <div class="division-line"></div>
        <div class="division-chunk"></div>
      </div>
      <p class="title-bottom">众多好物，PICK你的心头好</p>
    </div>
    <ul class="shop-list">
      <li class="list-item" v-for="(item, index) in beautyList" :key="index" @click="gotoPage(item.Id, item.ProductName)">
        <div class="item-exhibit">
          <img :src="item.Icon">
        </div>
        <p class="item-title">{{item.Title}}</p>
        <p class="item-count">￥{{item.nowPrice}}</p>
        <p class="item-money">
          <span>¥{{item.InstallmentAmount}}</span>
          <span>×{{item.InstallmentNum}}期</span>
        </p>
      </li>
    </ul>
    <InfiniteScroll @LOADMORE_EVENT="loadMore" :loadImgShow="loadImgShow" :loadTip="loadTip" :busy="busy"></InfiniteScroll>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT = "closeModal"></ModalDialog>
  </section>
  <!-- e  -->
</template>

<script>
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import InfiniteScroll from '../common/infinite-scroll/infinite-scroll.vue'
import Theme from '../common/theme/theme.vue'
import Http from '../../class/http.class.js'
import { mapMutations } from 'vuex'
export default {
  name: 'BeautyShop',
  data () {
    return {
      theme: {
        title: '美妆个护',
        goal: 'shop'
      },
      beautyList: [],
      page: 1,
      busy: false,
      loadTip: '加载中...',
      loadImgShow: true,
      dialogShow: false,
      Title: {
        text: ''
      }
    }
  },
  components: {
    Theme,
    ModalDialog,
    InfiniteScroll
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      Http.send({
        url: 'mall',
        data: {
          categroyNo: '1006',
          pageIndex: this.page
        }
      }).success(data => {
        console.log(data)
        this.beautyList = data[0].PhoneList
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      Http.send({
        url: 'mall',
        data: {
          categroyNo: '1004',
          pageIndex: ++this.page
        }
      }).success(data => {
        console.log(data)
        if (data.length === 0) {
          this.loadImgShow = false
          this.loadTip = '没有更多数据了'
          this.busy = true
          return
        }
        this.beautyList = this.beautyList.concat(data[0].PhoneList)
      }).fail(data => {
        this.loadTip = '加载失败'
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    gotoPage (id, title) {
      this.saveProductId(id)
      this.saveOrigin7('beauty-shop')
      this.$router.push({
        name: 'product',
        params: {
          id: id
        }
      })
    },
    closeModal () {
      this.dialogShow = false
    },
    ...mapMutations(['saveProductId', 'saveOrigin7'])
  }
}
</script>

<style lang="sass" scoped>
@import "./beauty-shop.scss";
</style>
