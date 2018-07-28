import Router from 'vue-router'
// import Home from '../components/home/home.vue'
// import Mine from '../components/home/mine/mine.vue'
// import Mall from '../components/home/mall/mall.vue'
// import Product from '../components/product/product.vue'
// import AddressManage from '../components/address-manage/address-manage.vue'
// import AddAddress from '../components/add-address/add-address.vue'
// import Order from '../components/order/order.vue'
// import OrderConfirm from '../components/order-confirm/order-confirm.vue'
// import OrderDetail from '../components/order-detail/order-detail.vue'
// import FamiliarQuestion from '../components/familiar-question/familiar-question.vue'
// import Empower from '../components/empower/empower.vue'
const Home = r => require.ensure([], () => r(require('../components/home/home.vue')), 'chunkHome')
const Mine = r => require.ensure([], () => r(require('../components/home/mine/mine.vue')), 'chunkMine')
const Mall = r => require.ensure([], () => r(require('../components/home/mall/mall.vue')), 'chunkMall')
const Product = r => require.ensure([], () => r(require('../components/product/product.vue')), 'chunkProduct')
const AddressManage = r => require.ensure([], () => r(require('../components/address-manage/address-manage.vue')), 'chunkAddressManage')
const AddAddress = r => require.ensure([], () => r(require('../components/add-address/add-address.vue')), 'chunkAddAddress')
const Order = r => require.ensure([], () => r(require('../components/order/order.vue')), 'chunkOrder')
const OrderConfirm = r => require.ensure([], () => r(require('../components/order-confirm/order-confirm.vue')), 'chunkOrderConfirm')
const OrderDetail = r => require.ensure([], () => r(require('../components/order-detail/order-detail.vue')), 'chunkOrderDetail')
const FamiliarQuestion = r => require.ensure([], () => r(require('../components/familiar-question/familiar-question.vue')), 'chunkFamiliarQuestion')
const Empower = r => require.ensure([], () => r(require('../components/empower/empower.vue')), 'chunkEmpower')

// const Home = () => import('../components/home/home.vue')
// const Mine = () => import('../components/home/mine/mine.vue')
// const Mall = () => import('../components/home/mall/mall.vue')
// const Product = () => import('../components/product/product.vue')
// const AddressManage = () => import('../components/address-manage/address-manage.vue')
// const AddAddress = () => import('../components/add-address/add-address.vue')
// const Order = () => import('../components/order/order.vue')
// const OrderConfirm = () => import('../components/order-confirm/order-confirm.vue')
// const OrderDetail = () => import('../components/order-detail/order-detail.vue')
// const FamiliarQuestion = () => import('../components/familiar-question/familiar-question.vue')
// const Empower = () => import('../components/empower/empower.vue')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
      path: '/empower',
      name: 'empower',
      component: Empower
    }
  ]
})
