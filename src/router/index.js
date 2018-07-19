import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Mine from '../components/home/mine/mine.vue'
import Mall from '../components/home/mall/mall.vue'
import Product from '../components/product/product.vue'
// import Feedback from '../components/feedback/feedback.vue'
import AddressManage from '../components/address-manage/address-manage.vue'
import AddAddress from '../components/add-address/add-address.vue'
import Order from '../components/order/order.vue'
import OrderConfirm from '../components/order-confirm/order-confirm.vue'
import OrderDetail from '../components/order-detail/order-detail.vue'
import FamiliarQuestion from '../components/familiar-question/familiar-question.vue'
import Empower from '../components/empower/empower.vue'
import ForgetPassword from '../components/forget-password/forget-password.vue'
import Register from '../components/register/register.vue'

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Home,
      children: [
        {
          path: '/mall',
          name: 'mall',
          component: Mall
        },
        {
          path: '/mine',
          name: 'mine',
          component: Mine
        }
      ],
      redirect: '/mall'
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/address-manage',
      name: 'address-manage',
      component: AddressManage,
      props: true
    },
    {
      path: '/add-address',
      name: 'add-address',
      component: AddAddress,
      props: true
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      props: true
    },
    {
      path: '/order-confirm',
      name: 'order-confirm',
      component: OrderConfirm,
      props: true
    },
    {
      path: '/order-detail',
      name: 'order-detail',
      component: OrderDetail
    },
    {
      path: '/familiar-question',
      name: 'familiar-question',
      component: FamiliarQuestion
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: ForgetPassword
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/',
      name: 'empower',
      component: Empower
    }
  ]
})
