// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './main.scss'
import '../static/icon/iconfont.css'
//引入数据交互axios 
import axios from 'axios'
//挂载在Vue原型上
Vue.prototype.http=axios;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
