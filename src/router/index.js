import Vue from 'vue'
import VueRouter from 'vue-router'
import longin from '@/views/login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: longin
  }
]

const router = new VueRouter({
  routes
})

export default router
