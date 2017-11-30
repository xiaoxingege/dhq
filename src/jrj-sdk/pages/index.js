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
      var xhr = new XMLHttpRequest();
      xhr.timeout = 3000;
      xhr.responseType = 'text';
      xhr.open('GET', `http://itougu.jrj.com.cn/act/getClientInfo`, true);
      xhr.onload = function(e) {
        if (this.status === 200) {
          let result = JSON.parse(this.responseText);
          callback(result)
        }
      };
      xhr.ontimeout = function(e) {
        callback({})
      };
      xhr.onerror = function(e) {
        callback({})
      };
      xhr.send(null);
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
