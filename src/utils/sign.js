import md5 from 'js-md5'

const privateKey = 'hello2018';

module.exports = function(params, t) {
  let keys = Object.keys(params)
  keys = keys.filter((key) => params[key] !== undefined)
  keys.sort()
  let str = keys.map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
  str += t + privateKey
  return md5(str)
};