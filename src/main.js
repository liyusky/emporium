import 'babel-polyfill'
import Vue from 'vue'
import Router from 'vue-router'
import Swiper from 'Swiper'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './main.scss'
import './css/swiper-4.3.3.min.css'
import '../static/iconfont/iconfont.css'
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
// import './assets/iconfont/iconfont.js'
Vue.config.productionTip = false
Vue.use(Router)
/* eslint-disable no-new */
window.vueModule = new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})
window.vueModule.Swiper = Swiper

console.log(window.vueModule)
