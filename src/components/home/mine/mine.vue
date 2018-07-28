<template>
  <!-- s 我的 -->
  <section class="mine">
    <Info></Info>
    <Order></Order>
    <ListNav  @SHOW_MODAL_EVENT="showMOdal"></ListNav>
    <WarnModal v-show="modalShow" :Title="Title"></WarnModal>
  </section>
  <!-- e 我的 -->
</template>

<script>
import Info from './info/info.vue'
import Order from './order/order.vue'
import ListNav from './list-nav/list-nav.vue'
import WarnModal from '../../common/alert-modal/modal-warn/modal-warn.vue'
export default {
  name: 'Mine',
  components: {
    Info,
    Order,
    ListNav,
    WarnModal
  },
  data () {
    return {
      modalShow: false,
      Title: {
        text: ''
      }
    }
  },
  methods: {
    showMOdal () {
      this.Title.text = '敬请期待'
      this.modalShow = true
      setTimeout(() => {
        this.modalShow = false
      }, 1500)
    }
  }
}
</script>

<style lang="sass" scoped>
@import './mine.scss';
</style>
