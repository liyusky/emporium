<template>
  <!-- s  -->
  <section class="computer-shop">
    <Theme :theme="theme"></Theme>
    <div class="shop-bg">
      <img src="../../assets/images/computer-shop-bg.png">
    </div>
    <ul class="shop-coupons">
      <li class="coupons-item">
        <div class="item-badge">
          <img src="../../assets/images/computer-shop-badge.png">
        </div>
        <div class="item-content">
          <div class="content-money">
            <span>￥</span>
            <span>199</span>
          </div>
          <div class="content-message">
            <p>电脑会场</p>
            <p>满3999元</p>
          </div>
        </div>
        <button class="item-accept">
          <img class="accept-content" src="../../assets/images/computer-shop-button.png">
        </button>
      </li>
      <li class="coupons-item">
        <div class="item-badge">
          <img src="../../assets/images/computer-shop-badge.png">
        </div>
        <div class="item-content">
          <div class="content-money">
            <span>￥</span>
            <span>299</span>
          </div>
          <div class="content-message">
            <p>电脑会场</p>
            <p>满4999元</p>
          </div>
        </div>
        <button class="item-accept">
          <img class="accept-content" src="../../assets/images/computer-shop-button.png">
        </button>
      </li>
    </ul>
    <div class="shop-banner">
      <img class="banner-image" src="../../assets/images/computer-shop-banner.png">
    </div>
    <ul class="shop-list">
      <li class="list-item" v-for="(item, index) in bannerComputerList" :key="index" @click="gotoPage(item.Id, item.ProductName)">
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
      <li class="list-item" v-for="(item, index) in computerList" :key="index" @click="gotoPage(item.Id, item.ProductName)">
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
  name: 'ComputerShop',
  data () {
    return {
      theme: {
        title: '电脑城',
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
      computerList: [],
      bannerComputerList: []
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
          productId: '1000028',
          pageIndex: this.page
        }
      }).success(data => {
        console.log(data)
        this.bannerComputerList = data[0].PhoneList.slice(0, 3)
        this.computerList = data[0].PhoneList.slice(3)
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      Http.send({
        url: 'mall',
        data: {
          productId: '1000028',
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
        this.computerList = this.computerList.concat(data[0].PhoneList)
      }).fail(data => {
        this.loadTip = '加载失败'
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    gotoPage (id, title) {
      this.saveProductId(id)
      this.saveOrigin7('computer-shop')
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
@import "./computer-shop.scss";
</style>
