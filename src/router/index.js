import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Components/Home'
import Ad from '@/Components/Ads/Ad'
import AdList from '@/Components/Ads/AdList'
import NewAd from '@/Components/Ads/NewAd'
import Login from '@/Components/Auth/Login'
import Registration from '@/Components/Auth/Registration'
import Orders from '@/Components/User/Orders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/ad/:id',
      props: true,
      name: 'ad',
      component: Ad
    },
    {
      path: '/list',
      name: 'list',
      component: AdList
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/orders',
      name: 'orders',
      component: Orders
    }
  ],
  mode: 'history'
})
