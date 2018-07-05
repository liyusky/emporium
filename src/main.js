import Vue from 'vue'
<<<<<<< HEAD
import Router from 'vue-router'
import App from './App.vue'
import router from './router'
import './main.scss'

Vue.config.productionTip = false
Vue.use(Router)
=======
import App from './App.vue'
import router from './router'
import './main.scss'
import '../static/icon/iconfont.css'
//引入数据交互axios 
import axios from 'axios'
//挂载在Vue原型上
Vue.prototype.http=axios;
Vue.config.productionTip = false
>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: f => f(App)
})
