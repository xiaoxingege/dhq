/*
 * 前端页面入口文件
 */

window.jrjs = {
  checkLogin(callback) {
    if (callback) {
      let iframe = document.createElement('iframe')
      iframe.src = 'http://itougu.jrj.com.cn/actm/checkLogin'
      iframe.frameBorder = 0
      iframe.width = 0
      iframe.height = 0
      document.body.appendChild(iframe)
      iframe.onload = function(){
        iframe.contentWindow.postMessage('getPassportId', '*')
      }
      if (!window.__onmessage) {
        window.addEventListener('message', function(ev) {
          if(ev.source !== iframe.contentWindow) return
          let passportId = ev.data
          callback({ passportId })
        })
        window.__onmessage = true
      }
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
