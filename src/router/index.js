import Router from 'vue-router'
<<<<<<< HEAD
import Home from '../components/home/home.vue'
import Mine from '../components/home/mine/mine.vue'
import Mall from '../components/home/mall/mall.vue'
import Product from '../components/product/product.vue'
import Feedback from '../components/feedback/feedback.vue'
import AddressManage from '../components/address-manage/address-manage.vue'
import AddAddress from '../components/add-address/add-address.vue'
import Order from '../components/order/order.vue'
=======
import Index from '@/components/index/index.vue'
import Mine from '@/components/mine/mine.vue'
import Order from '@/components/order/order.vue'
import RecycleIndex from '@/components/recycle-index/recycle-index.vue'
import AddressManage from '@/components/address-manage/address-manage.vue'
import AppendAddress from '@/components/append-address/append-address.vue'
import Faq from '@/components/faq/faq.vue'
import EvaluateOrder from '@/components/evaluate-order/evaluate-order.vue'
import Feedback from '@/components/feedback/feedback.vue'
import CustomerService from '@/components/customer-service/customer-service.vue'
import Bill from '@/components/installment-bill/installment-bill.vue'
import OrderComfirm from '@/components/order-comfirm/order-comfirm.vue'
import OrderDetail from '@/components/order-detail/order-detail.vue'
import OrderAll from '@/components/common/order-classify/order-all/order-all.vue'
import OrderPay from '@/components/common/order-classify/order-pay/order-pay.vue'
import OrderSend from '@/components/common/order-classify/order-send/order-send.vue'
import OrderReceive from '@/components/common/order-classify/order-receive/order-receive.vue'
import OrderEvaluate from '@/components/common/order-classify/order-evaluate/order-evaluate.vue'

import OrderList from '@/components/order/order-list/order-list.vue'

Vue.use(Router)
>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
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
      component: Product
    },
    {
      path: '/address-manage',
      name: 'address-manage',
      component: AddressManage,
      props: {
        origin: false
      }
    },
    {
      path: '/add-address',
      name: 'add-address',
      component: AddAddress
=======
      name: 'orderlist',
      component: OrderList
    },
    {
      path: '/bill',
      name: 'bill',
      component: Bill
    },
    {
      path: '/ordercomfirm',
      name: 'ordercomfirm',
      component: OrderComfirm
    },
    {
      path: '/customerservice',
      name: 'customerservice',
      component: CustomerService
>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
<<<<<<< HEAD
      path: '/order',
      name: 'order',
      component: Order
    }
=======
      path: '/evaluateorder',
      name: 'evaluateorder',
      component: EvaluateOrder
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/appendaddress',
      name: 'appendaddress',
      component: AppendAddress
    },
    {
      path: '/addressmanage',
      name: 'addressmanage',
      component: AddressManage
    },
    {
      path: '/orderdetail',
      name: 'orderdetail',
      component: OrderDetail
    },
    {
      path: '/ordercomfirm',
      name: 'ordercomfirm',
      component: OrderComfirm
    },
    {
      path: '/recycleindex',
      name: 'recycleindex',
      component: RecycleIndex
    },
    {
      path: '/home',
      name: 'home',
      component: Index
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children:[
        {
          path: '/orderall',
          name: 'orderall',
          component: OrderAll
        },
        {
          path: '/orderpay',
          name: 'orderpay',
          component: OrderPay
        },
        {
          path: '/ordersend',
          name: 'ordersend',
          component: OrderSend
        },
        {
          path: '/orderreceive',
          name: 'orderreceive',
          component: OrderReceive
        },
        {
          path: '/orderevaluate',
          name: 'orderevaluate',
          component: OrderEvaluate
        }
      ]
    },
>>>>>>> 3738b51f08ec515a9257ec8458578598b3a2ad28
  ]
})
