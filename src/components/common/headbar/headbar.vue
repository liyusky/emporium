<template>
  <section class="headbar">
    <div class="headbar-content">
      <i></i>
      <span>{{HeadbarName}}</span>
      <!-- <div class="content-icon">
        <i></i>
        <p>评价</p>
      </div> -->
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  props:['HeadbarName']
}
</script>
<style scoped lang="scss">
@import './headbar.scss';
</style>
