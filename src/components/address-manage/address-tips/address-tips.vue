<template>
  <!-- s 地址标签 -->
  <ul class="address-tips">
    <li class="tip" v-for="(item, index) in addressList" :key="index" @click="gotoPage(item)">
      <div class="tip-detail">
        <p class="detail-user">
          <span>{{item.ReseverName}}</span>
          <span>{{item.PhoneNo}}</span>
        </p>
        <div class="detail-address">{{item.Address}}</div>
      </div>
      <div class="tip-operation">
        <p class="operation-set-default">
          <i class="iconfont" :class="{'icon-dacong': item.IsDefault}"></i>
          <span>设为默认地址</span>
        </p>
        <div class="operation-modify">
          <p>
            <i class="iconfont icon-dacong"></i>
            <span>删除</span>
          </p>
          <p>
            <i class="iconfont icon-dacong"></i>
            <span>编辑</span>
          </p>
        </div>
      </div>
    </li>
  </ul>
  <!-- e 地址标签 -->
</template>

<script>
import Http from '../../../class/http.class.js'
import { mapMutations } from 'vuex'
export default {
  name: 'AddressTips',
  props: ['origin'],
  data () {
    return {
      addressList: [],
      orderNum: null
    }
  },
  created () {
    Http.send({
      url: 'GetPostAddress',
      params: {
        customerId: 10000
      }
    }).success((data) => {
      this.addressList = data
    })
    this.orderNum = this.$store.state.orderNum
  },
  methods: {
    gotoPage (item) {
      console.log(item)
      switch (this.origin) {
        case 'mine':
          this.$router.push({
            name: 'add-address',
            params: {
              title: '修改收货地址',
              id: 0
            }
          })
          break
        case 'order-confrim':
          Http.send({
            url: 'ModifyResiver',
            params: {
              Orderno: this.orderNum,
              Name: item.ReseverName,
              Phone: item.PhoneNo,
              Address: item.Address
            }
          }).success((data) => {
            this.saveSelectedAddress(item)
            this.$router.push({name: 'order-confirm'})
          })
          break
      }
    },
    ...mapMutations(['saveSelectedAddress'])
  }
}
</script>

<style lang="sass" scoped>
@import "./address-tips.scss";
</style>
