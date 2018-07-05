<template>
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
  <!-- e  -->
</template>

<script>
export default {
  name: 'InputList',
  data () {
    return {}
  }
}
</script>

<style lang="sass" scoped>
@import "./input-list.scss";
</style>
