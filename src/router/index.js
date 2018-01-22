import Vue from 'vue'
import Router from 'vue-router'
import seach from 'seach/index'
import PwdLogin from 'pages/login/pwdlogin'
import PhoneLogin from 'pages/login/phonelogin'
import Forget from 'pages/login/forget'
import Register from 'pages/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('pages/home')
    },
    {
      path: '/login',
      name: 'login',
      redirect: '/login/pwd',
      component: () => import('pages/login'),
      children: [{
        path: 'pwd',
        name: 'pwdLogin',
        component: PwdLogin
      }, {
        path: 'phone',
        name: 'phoneLogin',
        component: PhoneLogin
      }, {
        path: 'forget',
        name: 'forget',
        component: Forget
      }]
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: () => import('homepage/index')
    },
    {
      path: '/seach',
      name: 'seach',
      component: seach
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: () => import('inquire/index')
    },
    {
      path: '/explain/:sightId',
      name: 'explain',
      component: () => import('explain/index')
    }
  ]
})
