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
      }
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
