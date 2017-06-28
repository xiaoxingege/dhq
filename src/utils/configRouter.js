/*
 * 初始化路由配置
 */

import VueRouter from 'vue-router'

export function configRouter (routes) {
  const promise = new Promise(function (resolve) {
    const router = new VueRouter({
      routes
    })
    router.beforeEach((to, from, next) => {
      next()
    })
    resolve(router)
  })
  return promise
}
