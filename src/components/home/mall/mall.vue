<template>
  <section class="index">
    <div class="index-content">
      <header class="content-header">
        <img src="https://api.vtrois.com/image/750x360/e0e1e3">
      </header>
      <section class="content-advertising">
        <img src="https://api.vtrois.com/image/699x123/e0e1e3">
      </section>
      <ul class="content-brand">
        <li class="brand-classify" v-for="(group, index) in groups" :key="index">
          <div class="classify-title">
            <i class="iconfont icon-dacong"></i>
            <p class="title-text">{{group.Key}}</p>
            <i class="iconfont icon-dacong"></i>
          </div>
          <ul class="classify-shop-list">
            <li class="list-item" v-for="(phone, index) in group.PhoneList" :key="index" @click="gotoPage(phone.Id, phone.ProductName)">
              <div class="item-shop-picture">
                <img :src="phone.Icon">
              </div>
              <p class="item-title">{{phone.Title}} {{phone.ModelNo}}</p>
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
    </div>
    <!-- <transition name=fade>
    </transition> -->
  </section>
</template>

<script>
import Http from '../../../class/http.class.js'
export default {
  name: 'Home',
  data () {
    return {
      groups: null
    }
  },
  created () {
    Http.send({
      url: 'mall',
      params: {
        Pageindex: 2
      }
    }).success((data) => {
      console.log(data)
      this.groups = data
    })
  },
  methods: {
    gotoPage (id, title) {
      console.log(id)
      this.$router.push({
        name: 'product',
        params: {
          id: id,
          title: title
        }
      })
    }
  }
}
</script>

<style scoped lang="sass">
@import './mall.scss';
</style>
