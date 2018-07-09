import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './main.scss'
import axios from 'axios'
Vue.prototype.http = axios
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  direction: 'horizontal',
  threshold: 200
}
var bus = new Vue()
Vue.use(bus)
Vue.config.productionTip = false
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: f => f(App)
})
