// import { createPermissionGuard } from './permission'
import NProgress from 'nprogress'
import store from '@/store'
import { AxiosCanceler } from '@/utils/http/axiosCancel'

/**
 * @description 设置路由守卫
 * @param router
 */
export function setupRouterGuard(router) {
  // createPermissionGuard(router)
  createTitleGuard(router)
  createHttpGuard(router)
  createNProgressGuard(router)
}

/**
 * @description 动态标题守卫
 * @param router
 */
const createTitleGuard = (router) => {
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title || store.getters.appTitle
    next()
  })
}

/**
 * @description 取消上一个页面未完成请求
 * @param router
 */
const createHttpGuard = (router) => {
  router.beforeEach((to, from, next) => {
    new AxiosCanceler().removeAllPending()
    next()
  })
}

/**
 * @description 进度条守卫
 * @param router
 */
const createNProgressGuard = (router) => {
  router.beforeEach((to, from, next) => {
    store.getters.showProgress && NProgress.start()
    next()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
