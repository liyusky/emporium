import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store/index'
import fastclick from 'fastclick'
import vueiInfinite from 'vue-infinite-scroll'
import './main.scss'
import './css/swiper-4.3.3.min.css'
import '../static/iconfont/iconfont.css'

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(vueiInfinite)
Vue.use(Router)
/* eslint-disable no-new */
window.vueModule = new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})

console.log(window.vueModule)
