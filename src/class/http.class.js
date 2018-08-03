import axios from 'axios'
import Url from './url.class.js'
export default class Http {
  static send (args) {
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
      console.log(response)
      // console.log(JSON.stringify(response))
      // console.log(JSON.stringify(response.data))
      Http.dispense(response.data)
      if (this.defaultCallback) this.defaultCallback()
    }).catch(error => {
      console.log(error.response)
      if (this.defaultCallback) this.defaultCallback()
    })
    return this
  }
  static dispense (response) {
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

  static success (callback) {
    this.successCallback = callback
    return this
  }

  static fail (callback) {
    this.failCallback = callback
    return this
  }

  static default (callback) {
    this.defaultCallback = callback
    return this
  }
}
