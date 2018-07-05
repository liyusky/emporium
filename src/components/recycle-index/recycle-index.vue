<template>
  <section class="recycle">
    <Headbar HeadbarName="手机回收"></Headbar>
    <section class="recycle-search">
      <div class="search-content">
        <div class="content-address">
          <i></i>
          <span>安庆</span>
        </div>
        <div class="content-search-area">
          <i></i>
          <input class="area-input" type="text" placeholder="搜索您要买的品牌、机器型号">
        </div>
      </div>
    </section>
    <section class="recycle-banner">
      <img src="../../../static/images/recycle-banner.png" alt="">
    </section>
    <section class="recycle-appraisal">
      <div class="appraisal-content-up">
        <div class="up-process">
          <div class="process-item">
            <i></i>
            
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Headbar from '@/components/common/headbar/headbar.vue'
export default {
  name: 'index',
  data () {
    return {
      brandCount: 3,
      listCount: 4
    }
  },
  components: {
    Headbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import './recycle-index.scss';
</style>
