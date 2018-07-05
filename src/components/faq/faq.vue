<template>
  <section class="faq">
    <Headbar HeadbarName="常见问题"></Headbar>
    <transition name="fade">
      <section class="faq-content" v-show="animationShow">
        <div class="content-title">
          <i></i>
          <p>常见问题</p>
        </div>
        <div class="content-item">
          <i></i>
          <div class="item-text">
            <p class="text-title">什么是二手手机</p>
            <p class="text-item">二手手机分为两种:</p>
            <p class="text-item">1.个人用户需要更新换代时闲置下来的手机。</p>
            <p class="text-item">2.在厂家保修政策内返厂处理后的手机，也叫“官翻机”。</p>
          </div>
        </div>
        <div class="content-item">
          <i></i>
          <div class="item-text">
            <p class="text-title">收到的机器是否有ID或者会有数据残留？</p>
            <p class="text-item">机器在回收时经过严格质检，原手机里的注册信息及私人数据都会清空并还原到出厂设置，可以绑定任意ID账号及导入个人数据。</p>
          </div>
        </div>
        <div class="content-item">
          <i></i>
          <div class="item-text">
            <p class="text-title">其他版本是什么版本的？和国行，港版之间有什么区别？</p>
            <p class="text-item">目前除国行外，统一叫做其他版本的哈，其他版本的只是销售地区不一样，功能和质量上都是一样的，在国内可正常使用，同时我们找靓机均提供7天无理由退换货，1年质保的服务，您可以放心购买。</p>
          </div>
        </div>
        <div class="content-item">
          <i></i>
          <div class="item-text">
            <p class="text-title">收到的机器是否有ID或者会有数据残留？</p>
            <p class="text-item">机器在回收时经过严格质检，原手机里的注册信息及私人数据都会清空并还原到出厂设置，可以绑定任意ID账号及导入个人数据。</p>
          </div>
        </div>
        <div class="content-item">
          <i></i>
          <div class="item-text">
            <p class="text-title">收到的机器是否有ID或者会有数据残留？</p>
            <p class="text-item">机器在回收时经过严格质检，原手机里的注册信息及私人数据都会清空并还原到出厂设置，可以绑定任意ID账号及导入个人数据。</p>
          </div>
        </div>
      </section>
    </transition>
  </section>
</template>
<script>
  import Headbar from "@/components/common/headbar/headbar.vue";
  export default {
    data() {
      return {
        animationShow: false
      }
    },
    mounted() {
      this.animationShow = true;
    },
    components: {
      Headbar
    }
  };

</script>
<style scoped lang="scss">
  @import "./faq.scss";

</style>
