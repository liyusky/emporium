<template>
  <!-- s 地址标签 -->
  <ul class="address-tips">
    <li class="tip" v-for="(item, index) in addressList" :key="index" @click="gotoPage(index)">
      <div class="tip-detail">
        <p class="detail-user">
          <span>{{item.name}}</span>
          <span>{{item.telphone}}</span>
        </p>
        <div class="detail-address">{{item.address}}</div>
      </div>
      <div class="tip-operation">
        <p class="operation-set-default">
          <i class="iconfont icon-dacong"></i>
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
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'AddressTips',
  props: ['origin'],
  data () {
    return {}
  },
  methods: {
    gotoPage (index) {
      console.log(this.origin)
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
          this.$router.push({name: 'order-confirm'})
          this.selectAddress(index)
          break
      }
    },
    ...mapMutations(['selectAddress'])
  },
  computed: {
    ...mapState(['addressList'])
  }
}
</script>

<style lang="sass" scoped>
@import "./address-tips.scss";
</style>
