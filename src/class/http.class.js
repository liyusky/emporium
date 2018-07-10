import axios from 'axios'
import Url from './url.class.js'
export default class Http {
  static send (args) {
    axios({
      url: Url[args.url],
      method: 'post',
      baseURL: 'http://192.168.0.101:8082',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      params: args.params ? args.params : {},
      data: args.data ? args.data : {}
    }).then((response) => {
      console.log(response)
      Http.dispense(response.data)
    }).catch((error) => {
      console.log(error)
    })
    return this
  }
  static dispense (response) {
    if (response.code === 200) {
      if (this.successCallback) this.successCallback(response.data)
    } else {
      switch (response.code) {
        case 401:
          break
      }
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
}
