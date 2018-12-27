import Vue from 'vue'
import Router from 'vue-router'
import RouterGuard from './authGuard'
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
      component: AdList,
      beforeEnter: RouterGuard
    },
    {
      path: '/new',
      name: 'newAd',
      component: NewAd,
      beforeEnter: RouterGuard
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
      component: Orders,
      beforeEnter: RouterGuard
    }
  ],
  mode: 'history'
})
