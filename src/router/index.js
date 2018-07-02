import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index.vue'
import Mine from '@/components/mine/mine.vue'
import Order from '@/components/order/order.vue'
import RecycleIndex from '@/components/recycle-index/recycle-index.vue'
import AddressManage from '@/components/address-manage/address-manage.vue'
import AppendAddress from '@/components/append-address/append-address.vue'
import Faq from '@/components/faq/faq.vue'
import EvaluateOrder from '@/components/evaluate-order/evaluate-order.vue'
import OrderComfirm from '@/components/order-comfirm/order-comfirm.vue'
import OrderDetail from '@/components/order-detail/order-detail.vue'
import OrderAll from '@/components/common/order-classify/order-all/order-all.vue'
import OrderPay from '@/components/common/order-classify/order-pay/order-pay.vue'
import OrderSend from '@/components/common/order-classify/order-send/order-send.vue'
import OrderReceive from '@/components/common/order-classify/order-receive/order-receive.vue'
import OrderEvaluate from '@/components/common/order-classify/order-evaluate/order-evaluate.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
  ]
})
