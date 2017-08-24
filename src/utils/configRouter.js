/*
 * 初始化路由配置
 */

import VueRouter from 'vue-router'

export function configRouter ({ routes, historyMode, beforeEach }) {
  const promise = new Promise(function (resolve) {
    const router = new VueRouter({
      routes,
      mode: historyMode || 'hash'
    })
    if (beforeEach) {
      router.beforeEach(beforeEach)
    }
    resolve(router)
  })
  return promise
}
