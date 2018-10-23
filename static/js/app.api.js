window.token = null
window.id = null
window.phone = null
window.api = 'http://hhdsapi.jietiaodashi.com'
window.md5key = ''
window.kill = function () {
  try {
    document.getElementById('back-btn').click()
  } catch (error) {
  }
}
window.paySuccess = function (finish) {
  if (finish) {
    window.payFinish = 'success'
  } else {
    window.payFinish = 'fail'
  }
}

window.returnPayResult = function (finish) {
  if (finish) {
    window.payFinish = 'success'
  } else {
    window.payFinish = 'fail'
  }
}

window.submitALiPay = function () {
  document.forms['alipaysubmit'].submit()
  document.getElementById('alipay').innerHTML = ''
}

window.onload = function () {
  window.init()
  window.bindScroll()
}

window.bindScroll = function () {
  var scrollDom, summaryDom, sampleDom, guidanceDom, currentTop, summaryLimit, sampleLimit, summaryBtnDom, sampleBtnDom, guidanceBtnDom
  document.body.onscroll = function (event) {
    event = event || window.event
    summaryDom = document.getElementById('summary')
    sampleDom = document.getElementById('sample')
    guidanceDom = document.getElementById('guidance')
    summaryBtnDom = document.getElementById('summary-btn')
    sampleBtnDom = document.getElementById('sample-btn')
    guidanceBtnDom = document.getElementById('guidance-btn')
    scrollDom = document.getElementById('scroll')
    if (!scrollDom || !summaryDom || !sampleDom || !guidanceDom || !summaryBtnDom || !sampleBtnDom || !guidanceBtnDom) return
    currentTop = document.body.scrollTop || document.documentElement.scrollTop
    summaryLimit = sampleDom.offsetTop - summaryDom.offsetTop
    sampleLimit = guidanceDom.offsetTop - summaryDom.offsetTop - guidanceDom.offsetHeight
    if (currentTop < summaryLimit) {
      scrollDom.style.left = summaryBtnDom.offsetLeft + 'px'
    } else if (currentTop < sampleLimit) {
      scrollDom.style.left = sampleBtnDom.offsetLeft + 'px'
    } else {
      scrollDom.style.left = guidanceBtnDom.offsetLeft + 'px'
    }
  }
}

window.init = function (callback) {
  try {
    var basicData = appJsInterface.sendTokenToHtml().split('-')
    window.id = basicData[0]
    window.token = basicData[1]
    window.phone = basicData[2]
    if (window.localStorage) {
      window.localStorage.setItem('id', window.id)
      window.localStorage.setItem('token', window.token)
      window.localStorage.setItem('phone', window.phone)
    }
    if (document.cookie) {
      var cookies = {
        id: window.id,
        token: window.token,
        phone: window.phone
      }
      document.cookie = JSON.stringify(cookies)
    }
    if (callback) callback()
  } catch (error) {
  }
}

// ios
window.returnLoginData = function (data) {
  data = data.split('-')
  window.id = data[0]
  window.token = data[1]
  window.phone = data[2]
}
