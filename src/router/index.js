import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import LoginIn from '../views/LoginIn.vue'
import ShopCart from '../views/ShopCart.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'LoginIn',
    component:LoginIn
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/LoginIn.vue')
  },
  {
    path:'/shopcart',
    name:'ShopCart',
    component:ShopCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
