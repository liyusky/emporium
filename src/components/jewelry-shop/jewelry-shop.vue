<template>
  <!-- s  -->
  <section class="jewelry">
    <Theme :theme="theme"></Theme>
    <div class="jewelry-header">
      <img src="../../assets/images/jewelry-banner.png">
    </div>
    <div class="jewelry-push">
      <img src="../../assets/images/jewelry-push.png">
    </div>
    <div class="jewelry-banner">
      <img src="../../assets/images/jewelry-title.png">
    </div>
    <div class="jewelry-title">
      <span>爆款推荐</span>
    </div>
    <ul class="jewelry-list">
      <li class="list-item" v-for="(item, index) in jewelryList" :key="index" @click="gotoPage(item.Id, item.ProductName)">
        <div class="item-picture">
          <img :src="item.Icon">
        </div>
        <p class="item-title">{{item.Title}}</p>
        <div class="item-price">
          <span>¥{{item.nowPrice}}</span>
        </div>
        <div class="item-economize">
          <p>￥{{item.InstallmentAmount}}</p>
          <p>{{item.InstallmentNum}}期</p>
        </div>
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
  name: 'JewelryShop',
  data () {
    return {
      theme: {
        title: '珠宝首饰',
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
      jewelryList: []
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
          productId: '1000031',
          pageIndex: this.page
        }
      }).success(data => {
        console.log(data)
        this.jewelryList = data[0].PhoneList
      }).fail(data => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    loadMore () {
      Http.send({
        url: 'mall',
        data: {
          productId: '1000031',
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
        this.jewelryList = this.jewelryList.concat(data[0].PhoneList)
      }).fail(data => {
        this.loadTip = '加载失败'
        this.Title.text = data.message
        this.dialogShow = true
      })
    },
    gotoPage (id, title) {
      this.saveProductId(id)
      this.saveOrigin7('jewelry-shop')
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
@import "./jewelry-shop.scss";
</style>
