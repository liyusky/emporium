<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: (to, from) => {
      console.log(to)
      console.log(from)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
