/*
 * 前端页面入口文件
 */
const $ = require('jquery')

window.jrjs = {
  checkLogin(callback) {
    if (callback) {
      $.ajax({
        url: 'http://itougu.jrj.com.cn/act/checkLogin'
      }).then(data => {
        alert(data.passportId)
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
