<template>
  <section class="evaluate-order">
    <Headbar HeadbarName="评价晒单"></Headbar>
    <section class="order-content">
      <div class="content-info">
        <div class="info-picture">
          <img src="../../../../assets/images/shop-picture.png">
        </div>
        <div class="info-detail">
          <p class="detail-price">￥590</p>
          <p class="detail-title">99新iPhone SE32G玫瑰金 国行移动4G，联通4G，电信4G</p>
        </div>
      </div>
      <div class="content-evaluate">
        <textarea class="evaluate" id="evaluate" v-model="textareaNum" name="evaluate" maxlength="500" placeholder="宝贝满足你的期待吗？说说它的优点和美中不足的地方吧~"></textarea>
        <div class="evaluate-number">{{textareaNum.length}}/500</div>
      </div>
      <div class="content-picture">
        <div class="picture-default">
          <i></i>
          <p class="default-title">图片/视频</p>
        </div>
        <div class="picture-item">
        </div>
      </div>
      <div class="content-anonymity">
        <i></i>
        <span>匿名</span>
      </div>
      <div class="content-button">
        <button class="button-publish">发表评价</button>
      </div>
    </section>
  </section>
</template>
<script>
  import Headbar from "@/components/common/headbar/headbar.vue";
  export default {
    data(){
      return{
        textareaNum:''

      }
    },
    methods: {
    },
    components: {
      Headbar
    }
  };

</script>
<style scoped lang="scss">
  @import "./evaluate-order.scss";

</style>
