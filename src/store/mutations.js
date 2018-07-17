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
  // 保存product路由参数
  saveParams (state, params) {
    state.params = params
  }
}
export default mutations
