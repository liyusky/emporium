<template>
  <section class="index" ref="index">
    <PullRefresh @LOAD_MORE_EVENT="loadMore" :parent="'index'">
      <header class="index-header">
        <img src="../../../assets/images/header.png">
      </header>
      <section class="index-advertising">
        <img src="../../../assets/images/advertising.png">
      </section>
      <ul class="index-brand">
        <li class="brand-classify" v-for="(group, index) in groups" :key="index">
          <div class="classify-title">
            <svg class="icon" id="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzhuixiaotu"></use>
            </svg>
            <p class="title-text">{{group.Key}}</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzhuixiaotu"></use>
            </svg>
          </div>
          <ul class="classify-shop-list">
            <li class="list-item" v-for="(phone, index) in group.PhoneList" :key="index" @click="gotoPage(phone.Id, phone.ProductName)">
              <div class="item-content">
                <div class="content-shop-picture">
                  <img :src="phone.Icon">
                </div>
                <p class="content-title">{{phone.Title}} {{phone.ModelNo}}</p>
                <div class="content-parameter">
                  <div class="parameter-item">{{phone.Memory}}</div>
                  <div class="parameter-item">{{phone.Degree == '100' ? '全' : phone.Degree + '成'}}新</div>
                </div>
                <div class="content-price">
                  <span class="price-now">￥{{phone.InstallmentNum}}</span>
                  <span class="price-installment">x{{phone.InstallmentAmount}}期</span>
                  <span class="price-old">市场价{{phone.originalPrice}}</span>
                </div>
                <div class="content-economize">
                  <div>省</div>
                  <div>￥{{phone.originalPrice - phone.nowPrice}}</div>
                </div>
                <div class="content-badge" v-if="phone.IsTested">
                  <span>已检测</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </PullRefresh>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
</template>

<script>
import PullRefresh from '../../common/pull-refresh/pull-refresh.vue'
// import ModalHint from '../../common/alert-modal/modal-hint/modal-hint.vue'
import ModalDialog from '../../common/alert-modal/modal-dialog/modal-dialog.vue'
import Http from '../../../class/http.class.js'
export default {
  name: 'Home',
  data () {
    return {
      page: 1,
      groups: null,
      Title: {
        text: ''
      },
      dialogShow: false
    }
  },
  components: {
    PullRefresh,
    // ModalHint,
    ModalDialog
  },
  created () {
    Http.send({
      url: 'mall',
      params: {
        Pageindex: this.page
      }
    }).success(data => {
      console.log(data)
      this.groups = data
    }).fail((data) => {
      this.Title.text = data.message
      this.dialogShow = true
    })
  },
  methods: {
    gotoPage (id, title) {
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
    loadMore () {
      Http.send({
        url: 'mall',
        params: {
          Pageindex: ++this.page
        }
      }).success(data => {
        if (!data.length) {
          // this.Title.text = '没有更多数据了'
          // this.HintShow = true
          // setTimeout(() => {
          //   this.HintShow = false
          // }, 500)
          return false
        }
        this.groups = this.groups.concat(data)
      }).fail((data) => {
        this.Title.text = data.message
        this.dialogShow = true
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import './mall.scss';
</style>
