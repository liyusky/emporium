import axios from 'axios'
export default class Http {
  callback = null
  static request (url, callback) {
    this.callback = callback
    let _self = this
    axios.get(url)
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
