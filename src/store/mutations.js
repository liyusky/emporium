const mutations = {
  // 选择地址
  selectAddress (state, index) {
    state.selectAddress = state.addressList[index]
  },
  // 确认订单phone值
  SaveConfirmPhone (state, phone) {
    state.confirmPhone = phone
  }
}
export default mutations
