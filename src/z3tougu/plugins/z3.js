import config from '../config'
export default{
  install(Vue, options) {
    // 1. 添加全局方法或属性
    // Vue.myGlobalMethod = function () {
    //   // 逻辑...
    // }
    // 2. 添加全局资源
    Vue.directive('z3-stock',{
      bind (el, binding, vnode, oldVnode) {
        let popup = binding.value.ref;
        let code = binding.value.code;
        let vm = vnode.context;
        let popupVm = vm.$refs[popup];

        el.addEventListener('mouseover' ,(event)=>{
          popupVm.$props.left = event.x + 40;
          popupVm.$props.top = event.y - 20;
          popupVm.isShow = true;
          popupVm.$props.stockCode = code;
        });
        el.addEventListener('mouseout',(event)=>{
          popupVm.isShow = false;
          console.info('mouseout');
        })
      }
    });
    Vue.directive('z3-updowncolor',(el, binding, vnode, oldVnode)=>{
        var flag = binding.value;
        if(flag>0){
          el.style.color = config.upColor
        }else if(flag === 0){
          el.style.color = config.flatColor
        }else{
          el.style.color = config.downColor
        }
    })
    // 3. 注入组件
    // Vue.mixin({
    //   created: function () {
    //     // 逻辑...
    //   }
    //   ...
    // })
    // // 4. 添加实例方法
    // Vue.prototype.$myMethod = function (methodOptions) {
    //   // 逻辑...
    // }
  }
}