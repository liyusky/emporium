<template>
  <!-- s 地址标签 -->
  <ul class="address-tips">
    <li class="tip" @click="gotoPage">
      <div class="tip-detail">
        <p class="detail-user">
          <span>李虎</span>
          <span>15581572466</span>
        </p>
        <div class="detail-address">浙江省 杭州市 西湖区太湖新村 7单元2幢205</div>
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
export default {
  name: 'AddressTips',
  props: ['origin'],
  data () {
    return {}
  },
  methods: {
    gotoPage () {
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
          this.$router.go(-1)
          break
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./address-tips.scss";
</style>
