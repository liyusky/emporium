<template>
  <!-- s  -->
  <section class="shop">
    <div class=""></div>
    <div class="shop-banner">
    </div>
    <ul class="shop-category">
      <li class="category-item" v-for="(item, index) in category1" :key="index">
        <img class="item-icon" :src="item.icon">
        <p class="item-title">{{item.title}}</p>
      </li>
    </ul>
    <ul class="shop-category">
      <li class="category-item" v-for="(item, index) in category2" :key="index">
        <img class="item-icon" :src="item.icon">
        <p class="item-title">{{item.title}}</p>
      </li>
    </ul>
    <div class="shop-recommend">
      <img src="">
    </div>
    <div class="shop-look-at-look">
      <div class="look-saccade">
        <p>
          <i class=""></i>
          <span>逛一逛</span>
        </p>
      </div>
      <ul class="look-guide">
        <li class="look-tip" v-for="(item, index) in guide" :key="index">
          <div class="tip-messgae">
            <p class="messgae-title">{{item.title}}</p>
            <p class="messgae-introduce">{{item.introduce}}</p>
          </div>
          <img class="tip-image" :src="item.image">
        </li>
      </ul>
    </div>
    <div class="shop-rush-purchase">
      <div class="purchase-title">
        <div class="title-message">
          <span>限时抢购</span>
          <span>|</span>
          <span>距结束</span>
          <div class="message-hour">00</div>
          <span>:</span>
          <div class="message-minute">21</div>
          <span>:</span>
          <div class="message-seconds">05</div>
        </div>
        <div class="title-more">
          <span>更多</span>
          <i class=""></i>
        </div>
      </div>
      <div class="purchase-goods">
        <Product :product="product" v-for="(item, index) in purchase" :key="index"></Product>
      </div>
    </div>
  </section>
  <!-- e  -->
</template>

<script>
import Product from './product/product.vue'
// import Http from '../../../class/http.class.js'
export default {
  name: 'Shop',
  components: {
    Product
  },
  data () {
    return {
      page: 1,
      category1: [
        {
          icon: '',
          title: '手机通讯'
        },
        {
          icon: '',
          title: '电脑城'
        },
        {
          icon: '',
          title: '美妆个护'
        },
        {
          icon: '',
          title: '珠宝首饰'
        }
      ],
      category2: [
        {
          icon: '',
          title: '优惠券'
        },
        {
          icon: '',
          title: '限时抢购'
        },
        {
          icon: '',
          title: '邀请有礼'
        },
        {
          icon: '',
          title: '分类'
        }
      ],
      guide: [
        {
          title: '3C数码',
          introduce: '年轻人潮玩社区',
          image: ''
        },
        {
          title: '美妆护肤',
          introduce: '美妆尖货低至5折',
          image: ''
        },
        {
          title: '珠宝首饰',
          introduce: '奢华配饰低至5折',
          image: ''
        },
        {
          title: '户外运动',
          introduce: '全场正品保障',
          image: ''
        }
      ],
      purchase: []
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./shop.scss";
</style>
