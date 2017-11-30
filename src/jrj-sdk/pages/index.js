/*
 * 前端页面入口文件
 */

window.jrjs = {
  isInJRJApp() {
    return !!window.jrj
  },
  openUrlInJRJApp(url) {
    window.location.href = "jrjnews://tougu?t=web&url=" + url;
    setTimeout(function() {
      if (!document.webkitHidden) {
        window.location.href = 'http://appcms.jrj.com.cn/download.jspa?channel=transfer1&tgqdcode=transfer'
      }
    }, 1500);
  },
  checkLogin(callback) {
    if (callback) {
      let fnName = 'cb' + Date.now()
      window[fnName] = function(data) {
        delete window[fnName]
        if(typeof data === 'string') {
          data = JSON.parse(data)
        }
        callback(data)
      }
      window.jrj.jsCallNative('130', JSON.stringify({
        method: 'get',
        url: 'http://itougu.jrj.com.cn/act/getClientInfo',
        callback: fnName
      }))
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
