import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Mine from '../components/home/mine/mine.vue'
import Mall from '../components/home/mall/mall.vue'
import Product from '../components/product/product.vue'
import Feedback from '../components/feedback/feedback.vue'
import AddressManage from '../components/address-manage/address-manage.vue'
import AddAddress from '../components/add-address/add-address.vue'
import Order from '../components/order/order.vue'
import OrderConfirm from '../components/order-confirm/order-confirm.vue'
import OrderDetail from '../components/order-detail/order-detail.vue'

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
      ],
      redirect: '/mall'
    },
    {
      path: '/product/:id/:title',
      name: 'product',
      component: Product,
      props: true
    },
    {
      path: '/address-manage/:origin',
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
      path: '/feedback',
      name: 'feedback',
      component: Feedback
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
      component: OrderConfirm
    },
    {
      path: '/order-detail/:orderNum',
      name: 'order-detail',
      component: OrderDetail,
      props: true
    }
  ]
})
