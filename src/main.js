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
window.vueModule = new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})
