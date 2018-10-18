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
    <ul class="jewelry-brand">
      <li class="brand-classify" v-for="(group, index) in groups" :key="index">
        <div class="classify-title">
          <span>{{group.Key}}</span>
        </div>
        <ul class="classify-list">
          <li class="list-item" v-for="(phone, index) in group.PhoneList" :key="index">
            <div class="item-picture">
              <img :src="phone.Icon">
            </div>
            <p class="item-title">{{phone.Title}}</p>
            <div class="item-price">
              <span>¥{{phone.nowPrice}}</span>
            </div>
            <div class="item-economize">
              <p>￥{{phone.originalPrice}}</p>
              <p>10期</p>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </section>
  <!-- e  -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'JewelryShop',
  data () {
    return {
      theme: {
        title: '珠宝首饰',
        goal: 'shop'
      },
      groups: [
        {
          Key: '美妆/个护清洁',
          PhoneList: [
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            },
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾芯肌护肤品女补水保湿玻尿酸化妆品套装 倍润型',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            },
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾芯肌护肤品女补水保湿玻尿酸化妆品套装 倍润型',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            },
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾芯肌护肤品女补水保湿玻尿酸化妆品套装 倍润型',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            }
          ]
        },
        {
          Key: '美妆/个护清洁',
          PhoneList: [
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            },
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾芯肌护肤品女补水保湿玻尿酸化妆品套装 倍润型',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            },
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾芯肌护肤品女补水保湿玻尿酸化妆品套装 倍润型',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            },
            {
              Guarantee: 1,
              Icon: 'http://hhdsadmin.jietiaodashi.com/File/images/CommodityPhoneIcon/201810/20181016114001729.jpg',
              InstallmentAmount: 0,
              InstallmentNum: 0,
              IsTested: true,
              ProductName: '美妆/个护清洁',
              RepertoryNum: 1,
              SoldNum: 0,
              Status: 1,
              Title: '珀莱雅水漾芯肌护肤品女补水保湿玻尿酸化妆品套装 倍润型',
              nowPrice: 318,
              originalPrice: 0,
              rownum: 1
            }
          ]
        }
      ]
    }
  },
  components: {
    Theme
  }
}
</script>

<style lang="sass" scoped>
@import "./jewelry-shop.scss";
</style>
