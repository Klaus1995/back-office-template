import Vue from 'vue'
import Router from 'vue-router'

import appRouter from './appRouter'

Vue.use(Router)

export default new Router({
  routes: [...appRouter, {
    path: '/*',
    redirect: '/index/home'
  }]
})
