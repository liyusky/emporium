import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import './main.scss'
import store from './store/index'
import './css/swiper-4.3.3.min.css'
// import './assets/iconfont/iconfont.js'
import '../static/iconfont/iconfont.css'
Vue.config.productionTip = false
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})

window.goback = () => {
  try {
    document.getElementById('back-btn').click()
  } catch (error) {
    console.log('该页面没有标题栏或者返回按钮没有获取到！')
  }
}
