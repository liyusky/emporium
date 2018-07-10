<template>
  <!-- s  -->
  <section class="home">
    <router-view></router-view>
    <Tab :path="$route.path"></Tab>
  </section>
  <!-- e  -->
</template>

<script>
import Tab from '../common/tab/tab.vue'
export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    Tab
  }
}
</script>

<style lang="sass" scoped>
@import "./home.scss";
</style>
