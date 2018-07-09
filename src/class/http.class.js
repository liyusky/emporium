import axios from 'axios'
export default class Http {
  callback = null
  static request (param, callback) {
    this.callback = callback
    let _self = this
    axios.post(param.url, param.params)
      .then((response) => {
        _self.dispense(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  static dispense (response) {
    if (response.code === 200) {
      this.success(response.data)
    }
  }
  static success (data) {
    if (this.callback) this.callback(data)
  }
}
