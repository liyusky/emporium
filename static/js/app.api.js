window.token = 'e3116e607a3051738b036315fe5ce1ec'
window.id = '10002'
window.kill = function () {
  var btnDom = document.getElementById('back-btn')
  if (btnDom) {
    btnDom.click()
  } else {
    console.log('该页面没有标题栏或者返回按钮没有获取到！')
  }
}
window.paySuccess = function (finish) {
  if (window.localStorage) {
    var id = localStorage.getItem('id')
    var token = localStorage.getItem('token')
    window.id = id
    window.token = token
    if (finish) {
      window.payFinish = 'success'
    } else {
      window.payFinish = 'fail'
    }
  }
}
window.onload = function () {
  window.init()
  window.bindScroll()
}
window.bindScroll = function () {
  var scrollDom, summaryDom, qualityDom, sampleDom, currentTop, summaryLimit, qualityLimit, summaryBtnDom, qualityBtnDom, sampleBtnDom
  document.body.onscroll = function (event) {
    event = event || window.event
    summaryDom = document.getElementById('summary')
    qualityDom = document.getElementById('quality')
    sampleDom = document.getElementById('sample')
    summaryBtnDom = document.getElementById('summary-btn')
    qualityBtnDom = document.getElementById('quality-btn')
    sampleBtnDom = document.getElementById('sample-btn')
    scrollDom = document.getElementById('scroll')
    if (!scrollDom || !summaryDom || !qualityDom || !sampleDom || !summaryBtnDom || !qualityBtnDom || !sampleBtnDom) return
    summaryLimit = qualityDom.offsetTop - summaryDom.offsetTop
    qualityLimit = sampleDom.offsetTop - summaryDom.offsetTop
    currentTop = document.documentElement.scrollTop
    if (currentTop < summaryLimit) {
      scrollDom.style.left = summaryBtnDom.offsetLeft + 'px'
    } else if (currentTop < qualityLimit) {
      scrollDom.style.left = qualityBtnDom.offsetLeft + 'px'
    } else {
      scrollDom.style.left = sampleBtnDom.offsetLeft + 'px'
    }
  }
}
window.init = function () {
  try {
    var basicData = appJsInterface.sendTokenToHtml().split('-')
    window.id = basicData[0]
    window.token = basicData[1]
  } catch (error) {
    console.log(error)
  }
}
