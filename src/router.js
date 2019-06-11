import Vue from 'vue'
import Router from 'vue-router'

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
      component: () => import('./views/Books/index.vue'),
      children:[
        {
          path: '',
          name: 'book',
          component: () => import('./views/Books/book.vue')
        },
        {
          path: 'me',
          name: 'me',
          component: () => import('./views/Books/me.vue')
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('./views/Books/pay.vue')
        },
        {
          path: '*',
          redirect: '/books'
        }
      ]
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events/index.vue')
    }
  ]
})
