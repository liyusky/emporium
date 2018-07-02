<template>
  <section class="address-manage">
    <Headbar HeadbarName="地址管理"></Headbar>
    <section class="manage-list">
      <div class="list-item" v-for="index in 7" :key="index">
        <div class="item-detaili">
          <div class="detail-info">
            <p class="info-name">李虎</p>
            <p class="info-telphone">13214562458</p>
          </div>
          <p class="detaili-address">安徽省 合肥市 高新区 创新产业园2期 创新产业园2期 创新产业园2期</p>
        </div>
        <div class="item-status">
          <p class="status-default"><i></i><span>设位默认地址</span></p>
          <div class="status-mark">
            <p class="mark-delete"><i></i><span>删除</span></p>
            <p class="mark-edit"><i></i><span>编辑</span></p>
          </div>
        </div>
      </div>
    </section>
    <footer class="manage-add">
      <span>新增收货地址</span>
    </footer>
  </section>
</template>

<script>
  import Headbar from '@/components/common/headbar/headbar.vue'
  export default {
    name: 'index',
    data() {
      return {
      }
    },
    components: {
      Headbar
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import './address-manage.scss';

</style>
