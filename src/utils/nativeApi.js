// const enable = !!(window && window.Z3 && window.Z3.jsCallNative);
const enable = true; // window && window.Z3;
export default {
    /*
     * 跳转个股详情页
     * */
    openStock(params) {
        // if(enable){
        //   window.Z3.funId = "100";
        // window.Z3.param = JSON.stringify(params);
        //   alert("funId="+window.Z3.funId+"   param="+window.Z3.param);
        //   window.Z3.jsCallNative();
        // }
        window.Z3.jsCallNative(100, JSON.stringify(params));
        // enable && window.open('/stock/' + params.stockCode)
    },
    /*
     * 跳转个股K线
     * */
    openStockKline(params) {
        // enable && window.Z3.jsCallNative(200, JSON.stringify(params));
        enable && window.open('/Kstock/' + params.stockCode)
    },
    // 同步authInfo
    syncAuthInfo() {
        enable && window.Z3.jsCallNative(10, '');
    },
    gotoTouguWorkspace(params) {
        window.Z3.jsCallNative(207, JSON.stringify(params));
    }


}

// 客户端贯通H5,根据具体场景由模块开发者自行增加逻辑。
// window.nativeCallJs = function(funId){

// };
// let nativeCallJs = {};
// const generateUUID = function(){
//   return '';
// }
// 此处提供统一入口
// s

let nativeCalls = {
    // 模块中注册方法给native调用。
    '_regist': function(funId, fn) {
        // if(nativeCalls[funId]){
        //   console.error('duplicate funId for native calls:' + funId);
        //   return;
        // }
        nativeCalls[funId] = fn;
    }
}

export {
    nativeCalls
};