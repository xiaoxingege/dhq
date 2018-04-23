export default {
  upColor: '#fc2721',
  downColor: '#0bc846',
  flatColor: '#c9d0d7',
  ma20Color: '#e75443',
  ma60Color: '#6999d1',
  ma120Color: '',
  emptyValue: '--',
  loadingConfig: {
    text: '数据加载中',
    textColor: '#c9d0d7',
    maskColor: 'rgba(20,21,24,0.8)'
  }
}
const domain = '//test.z3quant.com' // openapi
const websocketDomain = '//test.z3quant.com' // websocket
// const domain = '//www.z3quant.com' // openapi
// const websocketDomain = '//www.z3quant.com' // websocket
const ctx = '/dhqweb'
const protocol = 'https'
// const ctx = '';
export {
  domain,
  websocketDomain,
  ctx,
  protocol
}