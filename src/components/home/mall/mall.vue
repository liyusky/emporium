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
              <use xlink:href="#icon-kuaisushoukuan"></use>
            </svg>
            <p class="title-text">{{group.Key}}</p>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kuaisushoukuan"></use>
            </svg>
          </div>
          <ul class="classify-shop-list">
            <li class="list-item" v-for="(phone, index) in group.PhoneList" :key="index" @click="gotoPage(phone.Id)">
              <div class="item-shop-picture">
                <img :src="phone.Icon">
              </div>
              <p class="item-title">{{phone.Title}}</p>
              <div class="item-parameter">
                <div class="parameter-item">{{phone.Memory}}</div>
                <div class="parameter-item">{{phone.Degree == '100' ? '全' : phone.Degree + '成'}}新</div>
              </div>
              <div class="item-price">
                <span class="price-now">￥{{phone.InstallmentNum}}</span>
                <span class="price-installment">x{{phone.InstallmentAmount}}期</span>
                <span class="price-old">市场价{{phone.Degree}}</span>
              </div>
              <div class="item-economize">
                <span class="economize-notice">省</span>
                <span class="economize-price">￥{{phone.originalPrice - phone.nowPrice}}</span>
              </div>
              <div class="item-badge" v-if="phone.IsTested">
                <span>已检测</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </PullRefresh>
    <ModalHint v-show="HintShow" :Title="Title"></ModalHint>
  </section>
</template>

<script>
import PullRefresh from '../../common/pull-refresh/pull-refresh.vue'
import ModalHint from '../../common/alert-modal/modal-hint/modal-hint.vue'
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
      HintShow: false
    }
  },
  components: {
    PullRefresh,
    ModalHint
  },
  created () {
    Http.send({
      url: 'mall',
      params: {
        Pageindex: this.page
      }
    }).success((data) => {
      this.groups = data
    })
  },
  methods: {
    gotoPage (id, title) {
      console.log(id)
      this.$router.push({
        name: 'product',
        params: {
          id: id
        }
      })
    },
    loadMore () {
      Http.send({
        url: 'mall',
        params: {
          Pageindex: ++this.page
        }
      }).success(data => {
        if (!data.length) {
          this.Title.text = '没有更多数据了'
          this.HintShow = true
          setTimeout(() => {
            this.HintShow = false
          }, 500)
          return false
        }
        this.groups = this.groups.concat(data)
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import './mall.scss';
</style>
