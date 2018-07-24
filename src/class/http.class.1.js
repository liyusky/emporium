import ajax from 'ajax'
import Url from './url.class.js'
export default class Http {
  static send (args) {
    let headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'access_token': window.token
    }
    let needTokenArr = ['SendSMS', 'RegistCustomer', 'LoginCustomer', 'mall', 'product']
    if (needTokenArr.includes(args.url)) {
      delete headers.access_token
    }
    let data = ''
    for (let key in args.data) {
      if (args.data[key]) {
        data += `${key}=${args.data[key]}&`
      }
    }
    data.substr(-1 * data.length + 1)
    console.log(data)
    ajax({
      url: Url[args.url],
      method: 'post',
      baseURL: 'http://api2.jietiaodashi.com',
      // baseURL: 'http://192.168.0.101:8082',
      headers: headers,
      // data: args.data ? JSON.stringify(args.data) : {}
      data: data
    }).then(response => {
      console.log(args.url)
      console.log(response)
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
