<template>
  <!-- s 地址标签 -->
  <section class="address-list">
    <ul class="list-tips">
      <li class="tip" v-for="(item, index) in addressList" :key="index" @click="selectAddress(item)">
        <div class="tip-detail">
          <p class="detail-user">
            <span>{{item.ReseverName}}</span>
            <span>{{item.PhoneNo}}</span>
          </p>
          <div class="detail-address">{{item.Address}}</div>
        </div>
        <div class="tip-operation">
          <p class="operation-set-default" @click="setDefault(item.Id)">
            <i class="iconfont icon-dadaobiaozhun" :class="{'icon-dacong': item.Id == defaultId}"></i>
            <span>设为默认地址</span>
          </p>
          <div class="operation-modify">
            <p @click.stop="remove(item.Id, index)">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-lajixiang"></use>
              </svg>
              <span>删除</span>
            </p>
            <p @click.stop="modify(item)">
              <i class="iconfont icon-bianji"></i>
              <span>编辑</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <ModalReminder :Title="Title" v-show="reminderShow" @CLOSE_MODAL_EVENT="closeModalReminder" @SENF_REQUEST_EVENT="sendRequest"></ModalReminder>
  </section>
  <!-- e 地址标签 -->
</template>

<script>
import Http from '../../../class/http.class.js'
import ModalReminder from '../../common/alert-modal/modal-reminder/modal-reminder.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'AddressTips',
  props: ['origin'],
  data () {
    return {
      addressList: [],
      orderNum: null,
      defaultId: null,
      Title: {
        text: ''
      },
      reminderShow: false,
      deleteParams: {}
    }
  },
  components: {
    ModalReminder
  },
  created () {
    Http.send({
      url: 'GetPostAddress',
      params: {
        customerId: 10000
      }
    }).success((data) => {
      this.addressList = data
      data.forEach(item => {
        if (item.IsDefault) {
          this.defaultId = item.Id
        }
      })
    })
    this.orderNum = this.$store.state.orderNum
  },
  methods: {
    selectAddress (item) {
      if (this.origin === 'order-confrim') {
        Http.send({
          url: 'ModifyResiver',
          params: {
            Orderno: this.orderNum,
            Name: item.ReseverName,
            Phone: item.PhoneNo,
            Address: item.Address
          }
        }).success((data) => {
          this.saveSelectedAddress(item)
          this.$router.push({name: 'order-confirm'})
        })
      }
    },
    setDefault (postId) {
      Http.send({
        url: 'SetDefaultAddress',
        params: {
          customerId: 10000,
          postId: postId
        }
      }).success((data) => {
        this.defaultId = postId
      })
    },
    modify (item) {
      this.$router.push({
        name: 'add-address',
        params: {
          title: '修改收货地址',
          tip: JSON.stringify(item)
        }
      })
    },
    remove (id, index) {
      this.Title.text = '您确定要删除地址'
      this.reminderShow = true
      this.deleteParams.id = id
      this.deleteParams.index = index
    },
    sendRequest () {
      this.reminderShow = false
      Http.send({
        url: 'DeletePostAddress',
        params: {
          id: this.deleteParams.id
        }
      }).success((data) => {
        this.addressList.splice(this.deleteParams.index, 1)
      })
    },
    closeModalReminder () {
      this.reminderShow = false
    },
    ...mapMutations(['saveSelectedAddress'])
  }
}
</script>

<style lang="sass" scoped>
@import "./address-tips.scss";
</style>
