<template>
  <section class="append-address">
    <Headbar HeadbarName="新增收货地址"></Headbar>
    <transition name="fade">
      <div class="address-content"  v-show="animationShow">
        <section class="content-form">
          <ul class="form-list">
            <li class="list-item">
              <span class="item-title">收货人</span>
              <input class="item-input" type="text" placeholder="请输入收件人">
            </li>
            <li class="list-item">
              <span class="item-title">手机号</span>
              <input class="item-input" type="text" placeholder="请输入手机号">
            </li>
            <li class="list-item">
              <span class="item-title">所在地区</span>
              <input class="item-input" type="text" placeholder="请选择">
            </li>
            <li class="list-detail">
              <p class="detail-title">详细地址</p>
              <input class="detail-input" type="text" placeholder="请填写详细收货地址">
              <!-- <textarea class="detail-input" type="text" placeholder="请填写详细收货地址"></textarea> -->
              <!-- <div class="detail-input" contenteditable="true"></div> -->
            </li>
          </ul>
        </section>
        <button class="content-save-button">保存</button>
      </div>
    </transition>
  </section>
</template>

<script>
  import Headbar from '@/components/common/headbar/headbar.vue'
  export default {
    name: 'index',
    data() {
      return {
        animationShow: false
      }
    },
    mounted() {
      this.animationShow = true
    },
    components: {
      Headbar
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import './append-address.scss';

</style>
