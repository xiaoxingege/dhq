import 'whatwg-fetch'
import store from '../store'
const originFetch = fetch
export default function(url, options) {
  const authInfo = store.state.auth
  /*  if (!authInfo.authorization) {
      return originFetch(url, options)
    } */
  const expires = parseInt(authInfo.expires)
  const updateTime = authInfo.updateTime
  const now = new Date().getTime()
  if (expires !== -1 && now - updateTime < expires * 1000) {
    options = insertAuthHeader(url, options)
    return originFetch(url, options)
  }
  return store.dispatch('authSetting').then(() => {
    options = insertAuthHeader(url, options)
    return originFetch(url, options)
  })
}

function insertAuthHeader(url, options) {
  if (url.indexOf('z3quant.com/openapi') === -1 && url.indexOf('mapi.itougu.jrj.com.cn') === -1 && url.indexOf('sslapi')) {
    return options;
  }
  const authHeader = store.getters.authHeader // authHeader是fetch传过来的header
  let headers = {}
  if (!options) {
    options = {
      headers: {}
    }
  }
  if (options && options.headers) { // options是调接口时传的header
    headers = { ...options.headers
    }
  }
  headers = { ...headers,
    ...authHeader
  }
  options.headers = headers
  return options
}