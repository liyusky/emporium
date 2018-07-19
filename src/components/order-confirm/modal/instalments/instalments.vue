<template>
  <!-- s 支付 -->
  <section class="payment">
    <div class="payment-title">
      <p>大师分期</p>
    </div>
    <div class="payment-way">
      <div class="way-jietiao">
        <ul class="jietiao-installment">
          <li class="installment-item" v-for="(item, index) in instalments" :key="index" @click="select(item.InstallmentNum, index)">
            <div class="item-content" :class="{active: sign == index}">
              <p class="content-title">￥{{item.InstallmentAmount}}x{{item.InstallmentNum}}期</p>
              <p class="content-tip">手续费: ￥{{item.InstallmentCost}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="payment-button">
      <button class="button-sure" @click="confrim">确定</button>
    </div>
    <ModalDialog v-show="dialogShow" :Title="Title" @CLOSE_DIALOG_EVENT="closeModal"></ModalDialog>
  </section>
  <!-- e 支付 -->
</template>
<script>
import ModalDialog from '../../../common/alert-modal/modal-dialog/modal-dialog.vue'
export default {
  name: 'Instalments',
  props: ['instalments'],
  data () {
    return {
      sign: null,
      selected: null,
      dialogShow: false,
      Title: {
        text: ''
      }
    }
  },
  components: {
    ModalDialog
  },
  mounted () {
    console.log(this.instalments)
  },
  methods: {
    closeModal () {
      this.dialogShow = false
      this.$emit('CLOSE_INSTALMENT_EVENT')
    },
    select (installmentNum, index) {
      this.sign = index
      this.selected = installmentNum
    },
    confrim () {
      if (this.selected === null) {
        this.Title.text = '请选择支付方式'
        this.dialogShow = true
        return
      }
      this.$emit('SELECT_INSTALMENT_EVENT', this.selected)
      this.sign = null
      this.selected = null
    }
  }
}
</script>
<style scoped lang="scss">
@import './instalments.scss';
</style>
