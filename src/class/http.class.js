import axios from 'axios'
import Url from './url.class.js'
export default class Http {
  successCallback = null
  failCallback = null
  defaultCallback = null
  static send (args) {
    let instance = new Http()
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    args.data = args.data ? args.data : {}
    let needTokenArr = ['SendSMS', 'RegistCustomer', 'LoginCustomer', 'mall', 'product', 'ModifyCustomerPwd']
    if (!needTokenArr.includes(args.url)) {
      args.data.access_token = window.token
    }
    axios({
      url: Url[args.url],
      method: 'post',
      // baseURL: 'http://api2.jietiaodashi.com',
      baseURL: 'http://xqapi.jietiaodashi.com',
      // baseURL: 'http://192.168.0.101:8082',
      headers: headers,
      params: args.data
    }).then(response => {
      console.log(args.url)
      console.log(response)
      instance.dispense(response.data)
      if (instance.defaultCallback) instance.defaultCallback()
    }).catch(() => {
      if (instance.defaultCallback) instance.defaultCallback()
    })
    return instance
  }
  dispense (response) {
    switch (response.code) {
      case 200:
        if (this.successCallback) this.successCallback(response.data)
        break
      case 401:
        window.vueModule.$router.push({ name: 'empower' })
        break
      default:
        if (this.failCallback) this.failCallback(response)
    }
  }
  success (callback) {
    this.successCallback = callback
    return this
  }
  fail (callback) {
    this.failCallback = callback
    return this
  }
  default (callback) {
    this.defaultCallback = callback
    return this
  }
}
