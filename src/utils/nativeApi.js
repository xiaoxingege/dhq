const enable = true // !!(windows && windows.z3 && windows.z3.jsCallNative);
export default {
  opendStock(params) {
    // enable && windows.z3.jsCallNative(100, JSON.stringify(params));
    enable && window.open('/stock/' + params.stockCode)
  }
}