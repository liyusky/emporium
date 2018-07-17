<template>
  <!-- s 添加收货地址 -->
  <section class="add-address">
    <Theme :theme="theme"></Theme>
    <!-- s 地址输入列表 -->
    <ul class="input-list">
      <li class="list-item">
        <b>收货人</b>
        <div class="item-input">
          <input type="text" v-model="name" placeholder="请输入收件人">
        </div>
      </li>
      <li class="list-item">
        <b>手机号</b>
        <div class="item-input">
          <input type="number" maxlength="11" v-model="phone" placeholder="请输入手机号">
        </div>
      </li>
      <li class="list-item" @click="selectArea">
        <b>所在地区</b>
        <div class="item-input">{{area}}</div>
      </li>
      <li class="list-item">
        <p>
          <b>详细地址</b>
        </p>
        <div class="item-input">
          <input type="text" maxlength="100" v-model="county" placeholder="请填写详细收货地址">
        </div>
      </li>
    </ul>
    <!-- e 地址输入列表 -->
    <!-- s 按钮 -->
    <section class="button-default">
      <button @click="submit">{{btn}}</button>
    </section>
    <!-- e 按钮 -->
    <Modal v-show="modal">
      <CitySelect :provinceList="provinceList" :cities="cities" @SELECT_AREA_EVENT="getArea"></CitySelect>
    </Modal>
  </section>
  <!-- e 添加收货地址 -->
</template>

<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import CitySelect from './city-select/city-select.vue'
import { provinces as provinceList, cities } from '../../data/cities.js'
export default {
  name: 'AddAddress',
  props: ['title', 'tip'],
  components: {
    Theme,
    Modal,
    CitySelect
  },
  created () {
    if (this.tip) {
      this.tip = JSON.parse(this.tip)
      this.id = this.tip.Id
      this.name = this.tip.ReseverName
      this.phone = this.tip.PhoneNo
      this.isDefault = this.tip.IsDefault
      this.name = this.tip.ReseverName
      let addressArr = this.tip.Address.split(' ')
      this.county = addressArr.pop()
      this.area = addressArr.join(' ')
    }
  },
  data () {
    return {
      theme: {
        title: this.title ? this.title : '新增收货地址'
      },
      btn: this.title ? '修改' : '保存',
      id: null,
      name: null,
      phone: null,
      area: '请选择',
      county: null,
      isDefault: false,
      modal: false,
      provinceList: provinceList,
      cities: cities
    }
  },
  methods: {
    submit () {
      if (!this.hasEmpty()) return
      if (!this.checkPhone()) return
      if (this.title) {
        Http.send({
          url: 'ModifyPostAddress',
          params: {
            Id: this.id,
            name: this.name,
            phone: this.phone,
            address: [this.area, this.county].join(' '),
            isDefault: this.isDefault
          }
        }).success((data) => {
          this.$router.go(-1)
        })
      } else {
        Http.send({
          url: 'AddPostAddress',
          params: {
            customerId: 10000,
            name: this.name,
            phone: this.phone,
            address: [this.area, this.county].join(' '),
            isDefault: false
          }
        }).success((data) => {
          this.$router.go(-1)
        })
      }
    },
    selectArea () {
      this.modal = true
    },
    getArea (area) {
      this.area = area
      this.modal = false
    },
    hasEmpty () {
      this.name = this.name.replace(/\s+/g, '')
      this.phone = this.phone.replace(/\s+/g, '')
      this.county = this.county.replace(/\s+/g, '')
      if (!this.name) {
        alert('请输入姓名')
        return false
      }

      if (!this.phone) {
        alert('请输入手机号')
        return false
      }

      if (!this.area) {
        alert('请选择地区')
        return false
      }
      if (!this.county) {
        alert('请填写详细地址')
        return false
      }
      return true
    },
    checkPhone () {
      if (this.phone.length < 11) {
        console.log('手机号长度不足11位')
        alert('手机号长度不足11位')
        return false
      } else {
        var pat = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i')
        if (!pat.test(this.phone)) {
          console.log('手机号格式错误')
          alert('手机号格式错误')
          return false
        }
        return true
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./add-address.scss";
</style>
