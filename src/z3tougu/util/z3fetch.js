import 'whatwg-fetch'
import store from '../store'
import {
  env
} from '../config'
const originFetch = fetch
export default function(url, options) {
  const authInfo = store.state.auth
  if (!authInfo.authorization) {
    return originFetch(url, options)
  }
  const expires = authInfo.expires
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
  if (url.indexOf('z3quant.com/openapi') === -1) {
    return;
  }
  let headers = {}
  const authHeader = store.getters.authHeader

  if (!options) {
    options = {
      headers: {}
    }
  }
  if (options && options.headers) {
    headers = { ...options.headers
    }
  }
  headers = { ...headers,
    ...authHeader
  }
  // 如果是dev环境
  if (env === 'dev') {
    headers.env = env;
  }
  options.headers = headers
  return options
}