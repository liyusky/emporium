import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Mine from '../components/home/mine/mine.vue'
import Mall from '../components/home/mall/mall.vue'
import Product from '../components/product/product.vue'
import Feedback from '../components/feedback/feedback.vue'
import AddressManage from '../components/address-manage/address-manage.vue'
import AddAddress from '../components/add-address/add-address.vue'
import Order from '../components/order/order.vue'
import OrderComfirm from '../components/order-comfirm/order-comfirm.vue'
// import FmiliarQuestion from '../components/familiar-question/familiar-question.vue'
// import OrderDetail from '../components/order-detail/order-detail.vue'

export default new Router({
  routes: [
    {
      path: '/',
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
      ]
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/address-manage',
      name: 'address-manage',
      component: AddressManage
    },
    {
      path: '/add-address',
      name: 'add-address',
      component: AddAddress
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/order-comfirm',
      name: 'order-comfirm',
      component: OrderComfirm,
      props: true
    }
    // {
    //   path: '/orderdetail/:id',
    //   name: 'orderdetail',
    //   component: OrderDetail
    // }
  ]
})
