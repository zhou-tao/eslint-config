import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { setupRouterGuard } from './guard'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

setupRouterGuard(router)

export default router
