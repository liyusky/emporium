<template>
  <!-- s 添加收货地址 -->
  <section class="add-address">
    <Theme :theme="theme"></Theme>
    <!-- s 地址输入列表 -->
    <ul class="input-list">
      <li class="list-item">
        <b>收货人</b>
        <div class="item-input">
          <input type="text" placeholder="请输入收件人">
        </div>
      </li>
      <li class="list-item">
        <b>手机号</b>
        <div class="item-input">
          <input type="text" placeholder="请输入手机号">
        </div>
      </li>
      <li class="list-item">
        <b>所在地区</b>
        <div class="item-input">
          <input type="text" placeholder="请选择">
        </div>
      </li>
      <li class="list-item">
        <p>
          <b>详细地址</b>
        </p>
        <div class="item-input">
          <input type="text" placeholder="请填写详细收货地址">
        </div>
      </li>
    </ul>
    <!-- e 地址输入列表 -->
    <!-- s  -->
    <section class="button-default">
      <button disabled="disabled">保存</button>
    </section>
    <!-- e  -->
  </section>
  <!-- e 添加收货地址 -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
export default {
  name: 'AddAddress',
  props: ['title'],
  components: {
    Theme
  },
  data() {
    return {
      theme: {
        title: this.title ? this.title : '新增收货地址'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./add-address.scss";
</style>
