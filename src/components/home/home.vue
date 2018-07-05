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
<<<<<<< HEAD
  mounted: {},
=======
>>>>>>> 8b14ae497142e0c133291a648e9adee0397b5e81
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
