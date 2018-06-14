// const enable = !!(window && window.Z3 && window.Z3.jsCallNative);
const enable = true; // window && window.Z3;
export default {
  /*
   * 跳转个股详情页
   * */
  openStock(params) {
    // if(enable){
    //   window.Z3.funId = "100";
    //   window.Z3.param = JSON.stringify(params);
    //   alert("funId="+window.Z3.funId+"   param="+window.Z3.param);
    //   window.Z3.jsCallNative();
    // }
    enable && window.open('/stock/' + params.stockCode)
  },
  /*
   * 跳转个股K线
   * */
  openStockKline(params) {
    // enable && window.Z3.jsCallNative(200, JSON.stringify(params));
    enable && window.open('/Kstock/' + params.stockCode)
  }

}