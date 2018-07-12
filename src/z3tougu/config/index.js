export default {
  upColor: '#ca4941',
  downColor: '#56a870',
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

// 开发环境
// const domain = '//test.z3quant.com' // openapi
// const websocketDomain = '//test.z3quant.com' // websocket
// const env = 'dev';

// 测试环境
 const domain = '//test.z3quant.com' // openapi
 const websocketDomain = '//test.z3quant.com' // websocket
 const env = 'test';

// 生产环境
// const domain = '//www.z3quant.com' // openapi
// const websocketDomain = '//www.z3quant.com' // websocket
// const env='production';

const ctx = '/zstgweb'
// const ctx = '';
export {
  domain,
  websocketDomain,
  ctx,
  env
}