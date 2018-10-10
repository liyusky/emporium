<template>
  <section class="mine">
    <Foot :urlRouter="$route.path"></Foot>
  </section>
</template>
<script>
import Foot from '@/components/common/footer/footer.vue'
  export default {
    data(){
      return{}
    },
    methods:{
      
    },
    components: {
      Foot
    }
  }
</script>
<style scoped lang="scss">
@import './mine.scss';
</style>
