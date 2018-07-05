<template>
<<<<<<< HEAD
  <!-- s 地址管理 -->
  <section class="address-manage">
    <Theme :theme="theme"></Theme>
    <AddressTips></AddressTips>
    <button class="manage-btn" @click="gotoPage('add-address')">新增收货地址</button>
  </section>
  <!-- e 地址管理 -->
</template>

<script>
import Theme from '../common/theme/theme.vue'
import AddressTips from './address-tips/address-tips.vue'
export default {
  name: 'AddressManage',
  components: {
    Theme,
    AddressTips
  },
  data () {
    return {
      theme: {
        title: '地址管理'
      }
    }
  },
  methods: {
    gotoPage (page) {
      this.$router.push({name: page})
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./address-manage.scss";
=======
  <section class="address-manage">
    <Headbar HeadbarName="地址管理"></Headbar>
    <transition name="fade">
      <section class="manage-list" v-show="animationShow">
        <div class="list-item" v-for="index in 7" :key="index">
          <div class="item-detaili">
            <div class="detail-info">
              <p class="info-name">李虎</p>
              <p class="info-telphone">13214562458</p>
            </div>
            <p class="detaili-address">安徽省 合肥市 高新区 创新产业园2期 创新产业园2期 创新产业园2期</p>
          </div>
          <div class="item-status">
            <p class="status-default">
              <i></i>
              <span>设位默认地址</span>
            </p>
            <div class="status-mark">
              <p class="mark-delete">
                <i></i>
                <span>删除</span>
              </p>
              <p class="mark-edit">
                <i></i>
                <span>编辑</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </transition>
    <footer class="manage-add" @click="toAppendAddress">
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
        animationShow: false
      }
    },
    mounted() {
      this.animationShow = true
    },
    methods:{
      toAppendAddress(){
        this.$router.push({name:'appendaddress'})
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

>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
</style>
