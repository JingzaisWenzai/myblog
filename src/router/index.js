import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/pages/index'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})

export default router
