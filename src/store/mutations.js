const mutations = {
  // 确认订单phone值
  savePhone (state, phone) {
    state.phone = phone
  },
  // 保存选中的地址
  saveSelectedAddress (state, address) {
    state.address = address
  },
  saveInstallments (state, installments) {
    state.installments = installments
  },
  saveOrderNo (state, orderNum) {
    state.orderNum = orderNum
  },
  changeStatusNum (state, number) {
    state.statusNum = number
  },
  saveOrigin (state, origin) {
    state.origin = origin
  },
  saveOrigin2 (state, origin2) {
    state.origin2 = origin2
  }
}
export default mutations
