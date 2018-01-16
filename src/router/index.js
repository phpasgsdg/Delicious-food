import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/home'
import Login from 'pages/login'
import PwdLogin from 'pages/login/pwdlogin'
import PhoneLogin from 'pages/login/phonelogin'
import Forget from 'pages/login/forget'
import Register from 'pages/register'
import homepage from 'homepage/index'
import seach from 'seach/index'
import inquire from 'inquire/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      redirect: '/login/pwd',
      component: Login,
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
      component: homepage
    },
    {
      path: '/seach',
      name: 'seach',
      component: seach
    },
    {
      path: '/inquire',
      name: 'inquire',
      component: inquire
    }
  ]
})
