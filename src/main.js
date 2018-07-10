import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import './main.scss'
Vue.config.productionTip = false
Vue.use(Router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: f => f(App)
})
