import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/changesubscription/:id',
    name: 'ChangeSubscription',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ChangeSubscription.vue')
  },
  {
    path: '/activate/:id',
    name: 'Activate',
    component: () => import('../views/Activate.vue')
  },
  {
    path: '/deactivate/:id',
    name: 'Deactivate',
    component: () => import('../views/Deactivate.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
