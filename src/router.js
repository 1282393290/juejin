import Vue from 'vue'
import Router from 'vue-router'
// import Index from './views/Index/index.vue'
// import Books from './views/Books/index.vue'
// import Events from './views/Events/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/Index/index.vue')
    },
    {
      path: '/books',
      name: 'books',
      component: () => import('./views/Books/index.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events/index.vue')
    }
  ]
})
