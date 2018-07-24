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
      <CitySelect :provinceList = "provinceList" :cities="cities" @SELECT_AREA_EVENT = "getArea"></CitySelect>
    </Modal>
    <!-- s 弹出框 -->
    <ModalDialog v-show = "dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT = "closeModal"></ModalDialog>
    <ModalHint v-show = "HintShow" :Title="Title"></ModalHint>
    <!-- e 弹出框 -->
  </section>
  <!-- e 添加收货地址 -->
</template>

<script>
import Http from '../../class/http.class.js'
import Theme from '../common/theme/theme.vue'
import Modal from '../common/modal/modal.vue'
import CitySelect from './city-select/city-select.vue'
import ModalDialog from '../common/alert-modal/modal-dialog/modal-dialog.vue'
import ModalHint from '../common/alert-modal/modal-hint/modal-hint.vue'
import { provinces as provinceList, cities } from '../../data/cities.js'
export default {
  name: 'AddAddress',
  props: ['title', 'tip'],
  components: {
    Theme,
    Modal,
    CitySelect,
    ModalDialog,
    ModalHint
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
      Title: {
        text: ''
      },
      dialogShow: false,
      HintShow: false,
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
          data: {
            Id: this.id,
            name: this.name,
            phone: this.phone,
            address: [this.area, this.county].join(' '),
            isDefault: this.isDefault
          }
        }).success((data) => {
          this.Title.text = '修改成功'
          this.HintShow = true
          setTimeout(() => {
            this.HintShow = false
            this.$router.go(-1)
          }, 500)
        }).fail((data) => {
          this.Title.text = data.message
          this.dialogShow = true
        })
      } else {
        Http.send({
          url: 'AddPostAddress',
          data: {
            customerId: window.id,
            name: this.name,
            phone: this.phone,
            address: [this.area, this.county].join(' '),
            isDefault: false
          }
        }).success((data) => {
          this.Title.text = '添加成功'
          this.HintShow = true
          setTimeout(() => {
            this.HintShow = false
            this.$router.go(-1)
          }, 500)
        }).fail((data) => {
          this.Title.text = data.message
          this.dialogShow = true
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
      this.name = this.name ? this.name.replace(/\s+/g, '') : this.name
      this.phone = this.phone ? this.phone.replace(/\s+/g, '') : this.phone
      this.county = this.county ? this.county.replace(/\s+/g, '') : this.county
      if (!this.name) {
        this.Title.text = '请输入姓名'
        this.dialogShow = true
        return false
      }

      if (!this.phone) {
        this.Title.text = '请输入手机号'
        this.dialogShow = true
        return false
      }
      if (!this.checkPhone()) {
        return false
      }
      if (this.area === '请选择' || this.area === '') {
        this.Title.text = '请选择地区'
        this.dialogShow = true
        return false
      }
      if (!this.county) {
        this.Title.text = '请填写详细地址'
        this.dialogShow = true
        return false
      }
      return true
    },
    checkPhone () {
      if (this.phone.length < 11) {
        this.Title.text = '手机号长度不足11位'
        this.dialogShow = true
        return false
      } else {
        var pat = new RegExp('^(?:13|14|15|17|18)[0-9]{9}$', 'i')
        if (!pat.test(this.phone)) {
          this.Title.text = '手机号格式错误'
          this.dialogShow = true
          return false
        }
        return true
      }
    },
    closeModal () {
      this.dialogShow = false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "./add-address.scss";
</style>
