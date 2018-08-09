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
  saveOrderNo (state, OrderNo) {
    state.OrderNo = OrderNo
  },
  changeStatusNum (state, number) {
    state.statusNum = number
  },
  addStatusArrIndex (state, index) {
    state.statusArrIndex = index
  },
  saveOrigin (state, origin) {
    state.origin = origin
  },
  saveOrigin2 (state, origin2) {
    state.origin2 = origin2
  },
  saveOrigin3 (state, origin3) {
    state.origin3 = origin3
  },
  saveOrigin4 (state, origin4) {
    state.origin4 = origin4
  },
  saveOrigin5 (state, origin5) {
    state.origin5 = origin5
  },
  saveOrigin6 (state, origin6) {
    state.origin6 = origin6
  },
  saveOrigin7 (state, origin7) {
    state.origin7 = origin7
  },
  saveProductId (state, id) {
    state.productId = id
  }
}
export default mutations
