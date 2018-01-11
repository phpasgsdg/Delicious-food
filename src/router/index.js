import Vue from 'vue'
import Router from 'vue-router'
import Index from 'home/index'
import homepage from 'homepage/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    }
  ]
})
