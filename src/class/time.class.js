export default class Time {
  static change (time) {
    var date = new Date(time)
    var Y = date.getFullYear() + '-'
    var M = Time.fillZero(date.getMonth() + 1) + '-'
    var D = Time.fillZero(date.getDate()) + ' '
    var h = Time.fillZero(date.getHours()) + ':'
    var m = Time.fillZero(date.getMinutes()) + ':'
    var s = Time.fillZero(date.getSeconds())
    var stringTime = Y + M + D + h + m + s
    return stringTime
  }
  static fillZero (timeNum) {
    return timeNum < 10 ? '0' + timeNum : timeNum + ''
  }
}
