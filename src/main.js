import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './main.scss'
Vue.use(Router)
Vue.prototype.http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: f => f(App)
})
