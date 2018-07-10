<template>
  <!-- s 添加收货地址 -->
  <section class="add-address">
    <Theme :theme="theme"></Theme>
    <InputList></InputList>
    <Btn></Btn>
  </section>
  <!-- e 添加收货地址 -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
import InputList from './input-list/input-list.vue'
import Btn from '../common/button/button.vue'
export default {
  name: 'AddAddress',
  props: ['title'],
  components: {
    Theme,
    InputList,
    Btn
  },
  data () {
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
