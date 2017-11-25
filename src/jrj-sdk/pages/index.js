/*
 * 前端页面入口文件
 */

window.jrjs = {
  checkLogin(callback) {
    let user = {}
    if (callback) {
      let cookies = document.cookie.split(';')
      let passportId = cookies.filter((item) => {
        return item.trim().match(/^passportId=.*/)
      })
      if (passportId.length === 0) {
        return callback(user)
      }
      passportId = passportId[0].trim().replace(/^passportId=/, '')
      let accessToken = cookies.filter((item) => {
        return item.trim().match(/^accessToken=.*/)
      })
      if (accessToken.length === 0) {
        return callback(user)
      }
      accessToken = accessToken[0].trim().replace(/^accessToken=/, '')

      var xhr = new XMLHttpRequest();
      xhr.timeout = 3000;
      xhr.responseType = 'text';
      xhr.open('GET', `http://sso.jrj.com.cn/sso/passport/checkAccessToken.jsp?passportId=${passportId}&accessToken=${accessToken}`, true);
      xhr.onload = function(e) {
        if (this.status === 200) {
          let result = JSON.parse(this.responseText);
          if (result.resultCode === '0') {
            user.passportId = passportId
            user.accessToken = accessToken
          }
          callback(user)
        }
      };
      xhr.ontimeout = function(e) {
        callback(user)
      };
      xhr.onerror = function(e) {
        callback(user)
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
