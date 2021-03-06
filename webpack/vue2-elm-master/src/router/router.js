import App from '../App';
import {createRouter, createWebHistory} from 'vue-router'

const home = () => import(/* webpackChunkName: 'home' */'../page/home/home')
const city = () => import(/* webpackChunkName: 'city' */'../page/city/city')
const msite = () => import(/* webpackChunkName: 'msite' */'../page/msite/msite')
const search = () => import(/* webpackChunkName: 'search' */'../page/search/search')
const shop = () => import(/* webpackChunkName: 'shop' */'../page/shop/shop')
const login = () => import(/* webpackChunkName: 'login' */'../page/login/login')
const profile = () => import(/* webpackChunkName: 'profile' */'../page/profile/profile')
const forget = () => import(/* webpackChunkName: 'forget' */'../page/forget/forget')
const order = () => import(/* webpackChunkName: 'order' */'../page/order/order')
const orderDetail = () => import(/* webpackChunkName: 'orderDetail' */'../page/order/children/orderDetail')
const vipcard = () => import(/* webpackChunkName: 'vipcard' */'../page/vipcard/vipcard')
const invoiceRecord = () => import(/* webpackChunkName: 'invoiceRecord' */'../page/vipcard/children/invoiceRecord')
const useCart = () => import(/* webpackChunkName: 'useCart' */'../page/vipcard/children/useCart')
const vipDescription = () => import(/* webpackChunkName: 'vipDescription' */'../page/vipcard/children/vipDescription')
const food = () => import(/* webpackChunkName: 'food' */'../page/food/food')
const confirmOrder = () => import(/* webpackChunkName: 'confirmOrder' */'../page/confirmOrder/confirmOrder')
const remark = () => import(/* webpackChunkName: 'remark' */'../page/confirmOrder/children/remark')
const payment = () => import(/* webpackChunkName: 'payment' */'../page/confirmOrder/children/payment')
const userValidation = () => import(/* webpackChunkName: 'userValidation' */'../page/confirmOrder/children/userValidation')
const invoice = () => import(/* webpackChunkName: 'invoice' */'../page/confirmOrder/children/invoice')
const chooseAddress = () => import(/* webpackChunkName: 'chooseAddress' */'../page/confirmOrder/children/chooseAddress')
const addAddress = () => import(/* webpackChunkName: 'addAddress' */'../page/confirmOrder/children/children/addAddress')
const searchAddress = () => import(/* webpackChunkName: 'searchAddress' */'../page/confirmOrder/children/children/children/searchAddress')
const foodDetail = () => import(/* webpackChunkName: 'foodDetail' */'../page/shop/children/foodDetail')
const shopDetail = () => import(/* webpackChunkName: 'shopDetail' */'../page/shop/children/shopDetail')
const shopSafe = () => import(/* webpackChunkName: 'shopSafe' */'../page/shop/children/children/shopSafe')
const info = () => import(/* webpackChunkName: 'info' */'../page/profile/children/info')
const setusername = () => import(/* webpackChunkName: 'setusername' */'../page/profile/children/children/setusername')
const address = () => import(/* webpackChunkName: 'address' */'../page/profile/children/children/address')
const add = () => import(/* webpackChunkName: 'add' */'../page/profile/children/children/children/add')
const addDetail = () => import(/* webpackChunkName: 'addDetail' */'../page/profile/children/children/children/children/addDetail')
const balance = () => import(/* webpackChunkName: 'balance' */'../page/balance/balance')
const balanceDetail = () => import(/* webpackChunkName: 'balanceDetail' */'../page/balance/children/detail')
const benefit = () => import(/* webpackChunkName: 'benefit' */'../page/benefit/benefit')
const coupon = () => import(/* webpackChunkName: 'coupon' */'../page/benefit/children/coupon')
const hbDescription = () => import(/* webpackChunkName: 'hbDescription' */'../page/benefit/children/hbDescription')
const hbHistory = () => import(/* webpackChunkName: 'hbHistory' */'../page/benefit/children/hbHistory')
const exchange = () => import(/* webpackChunkName: 'exchange' */'../page/benefit/children/exchange')
const commend = () => import(/* webpackChunkName: 'commend' */'../page/benefit/children/commend')
const points = () => import(/* webpackChunkName: 'points' */'../page/points/points')
const pointsDetail = () => import(/* webpackChunkName: 'pointsDetail' */'../page/points/children/detail')
const service = () => import(/* webpackChunkName: 'service' */'../page/service/service')
const questionDetail = () => import(/* webpackChunkName: 'questionDetail' */'../page/service/children/questionDetail')
const find = () => import(/* webpackChunkName: 'find' */'../page/find/find')
const download = () => import(/* webpackChunkName: 'download' */'../page/download/download')

const routes = [{
  path: '/',
  component: App, //?????????????????????index.html
  children: [ //?????????????????????App.vue
    //?????????????????????home??????
    {
      path: '',
      redirect: '/home'
    },
    //?????????????????????
    {
      path: '/home',
      component: home
    },
    //?????????????????????
    {
      path: '/city/:cityid',
      component: city
    },
    //?????????????????????
    {
      path: '/msite',
      component: msite,
      meta: { keepAlive: true },
    },
    //?????????????????????
    {
      path: '/food',
      component: food
    },
    //?????????
    {
      path: '/search/:geohash',
      component: search
    },
    //???????????????
    {
      path: '/shop',
      component: shop,
      children: [{
        path: 'foodDetail', //???????????????
        component: foodDetail,
      }, {
        path: 'shopDetail', //???????????????
        component: shopDetail,
        children: [{
          path: 'shopSafe', //?????????????????????
          component: shopSafe,
        }, ]
      }]
    },
    //???????????????
    {
      path: '/confirmOrder',
      component: confirmOrder,
      children: [{
        path: 'remark', //????????????
        component: remark,
      }, {
        path: 'invoice', //????????????
        component: invoice,
      }, {
        path: 'payment', //????????????
        component: payment,
      }, {
        path: 'userValidation', //????????????
        component: userValidation,
      }, {
        path: 'chooseAddress', //????????????
        component: chooseAddress,
        children: [{
          path: 'addAddress', //????????????
          component: addAddress,
          children: [{
            path: 'searchAddress', //????????????
            component: searchAddress,
          }]
        }, ]
      }, ]
    },
    //???????????????
    {
      path: '/login',
      component: login
    },
    //???????????????
    {
      path: '/profile',
      component: profile,
      children: [{
        path: 'info', //?????????????????????
        component: info,
        children: [{
          path: 'setusername',
          component: setusername,
        },{
          path: 'address',
          component: address, //????????????
          children:[{
            path:'add',
            component:add,
            children:[{
              path:'addDetail',
              component:addDetail
            }]
          }]
        }]
      },
        {
          path: 'service', //????????????
          component: service,
        },]
    },
    //???????????????
    {
      path: '/forget',
      component: forget
    },
    //???????????????
    {
      path: '/order',
      component: order,
      children: [{
        path: 'orderDetail', //???????????????
        component: orderDetail,
      }, ]
    },
    //vip??????
    {
      path: '/vipcard',
      component: vipcard,
      children: [{
        path: 'invoiceRecord', //?????????
        component: invoiceRecord,
      }, {
        path: 'useCart', //???????????????
        component: useCart,
      }, {
        path: 'vipDescription', //????????????
        component: vipDescription,
      },]
    },
    //?????????
    {
      path: '/find',
      component: find
    },
    //?????????
    {
      path: '/download',
      component: download
    },
    //????????????
    {
      path: '/service',
      component: service,
      children: [{
        path: 'questionDetail', //???????????????
        component: questionDetail,
      }, ]
    },
    //??????
    {
      path: 'balance',
      component: balance,
      children: [{
        path: 'detail', //????????????
        component: balanceDetail,
      }, ]
    },
    //???????????????
    {
      path: 'benefit',
      component: benefit,
      children: [{
        path: 'coupon', //???????????????
        component: coupon,
      }, {
        path: 'hbDescription', //????????????
        component: hbDescription,
      }, {
        path: 'hbHistory', //????????????
        component: hbHistory,
      }, {
        path: 'exchange', //????????????
        component: exchange,
      }, {
        path: 'commend', //????????????
        component: commend,
      },]
    },
    //???????????????
    {
      path: 'points',
      component: points,
      children: [{
        path: 'detail', //????????????
        component: pointsDetail,
      }, ]
    },
  ]
}];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
  strict: process.env.NODE_ENV !== 'production',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop;
      }
      return { x: 0, y: to.meta.savedPosition || 0 };
    }
  }
});
export default router
