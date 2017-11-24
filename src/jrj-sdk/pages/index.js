/*
 * 前端页面入口文件
 */
const $ = require('jquery')

window.jrjs = {
  checkLogin(callback) {
    if (callback) {
      $.ajax('http://itougu.jrj.com.cn/actm/checkLogin').then(data => {
        callback(data)
      })
    }
  },
  login(redirectUrl) {
    if (window.jrj) {
      window.jrj.jsCallNative('108', JSON.stringify({
        returnUrl: encodeURI(redirectUrl)
      }))
    }
  }
}
