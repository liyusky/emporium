<template>
  <!-- s  -->
  <section class="phone-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-bg">
      <img src="../../assets/images/phone-shop-bg.png">
    </div>
    <div class="shop-banner">
      <img src="../../assets/images/phone-shop-banner.png">
    </div>
    <ul class="shop-list">
      <li class="list-item" v-for="(item, index) in bannerShopList" :key="index" @click="gotoPage(item.Id, item.ProductName)">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img :src="item.Icon">
        </div>
        <p class="item-title">{{item.Title}}</p>
        <p class="item-count">￥{{item.nowPrice}}</p>
        <p class="item-money">月供:￥{{item.InstallmentAmount}}起</p>
      </li>
    </ul>
    <div class="shop-recommend">
      <img src="../../assets/images/computer-shop-recommend.png">
    </div>
    <ul class="shop-list">
      <li class="list-item" v-for="(item, index) in shopList" :key="index" @click="gotoPage(item.Id, item.ProductName)">
        <div class="item-privilege">5期免息</div>
        <div class="item-exhibit">
          <img :src="item.Icon">
        </div>
        <p class="item-title">{{item.Title}}</p>
        <p class="item-count">￥{{item.nowPrice}}</p>
        <p class="item-money">月供:￥{{item.InstallmentAmount}}起</p>
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
  name: 'PhoneShop',
  data () {
    return {
      theme: {
        title: '手机商城',
        goal: 'shop'
      },
      page: 1,
      busy: false,
      loadTip: '加载中...',
      loadImgShow: true,
      dialogShow: false,
      Title: {
        text: ''
      },
      shopList: [],
      bannerShopList: []
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
          productId: '1000027',
          pageIndex: this.page
        }
      }).success(data => {
        console.log(data)
        this.bannerShopList = data[0].PhoneList.slice(0, 3)
        this.shopList = data[0].PhoneList.slice(3)
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      Http.send({
        url: 'mall',
        data: {
          productId: '1000027',
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
        this.shopList = this.shopList.concat(data[0].PhoneList)
      }).fail(data => {
        this.loadTip = '加载失败'
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    gotoPage (id, title) {
      this.saveProductId(id)
      this.saveOrigin7('phone-shop')
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
@import "./phone-shop.scss";
</style>
