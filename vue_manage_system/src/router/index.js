import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/emp',
    name: 'emp',
    component: () => import('../views/stock/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    component: () => import('../views/stock/DeptView.vue')
  },
  {
    path: '/',
    redirect: '/emp'
  }
]

const router = new VueRouter({
  routes
})

export default router
