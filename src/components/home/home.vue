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
  mounted: {},
  data () {
    return {}
  },
  components: {
    Tab
  },
  methods: {
    gotoPage (page) {
      this.$router.push({name: page})
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./home.scss";
</style>
