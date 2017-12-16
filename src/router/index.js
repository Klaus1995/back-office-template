import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index.vue'
import { appRouter } from './../components/index/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    component: Index,
    redirect: '/index/home',
    children: appRouter
  }, {
    path: '/',
    redirect: '/index/home'
  }]
})
