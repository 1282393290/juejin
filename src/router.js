import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './views/Index/index.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import(/* webpackChunkName: "books" */ './views/Books/index.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import(/* webpackChunkName: "" */ './views/Events/index.vue')
    }
  ]
})
