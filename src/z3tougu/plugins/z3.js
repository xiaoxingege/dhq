export default{
  install(Vue, options) {
    // 1. 添加全局方法或属性
    // Vue.myGlobalMethod = function () {
    //   // 逻辑...
    // }
    // 2. 添加全局资源
    Vue.directive('stock-popup', {
      bind (el, binding, vnode, oldVnode) {
        let code = binding.value.code
        let name = binding.value.name
        let price = binding.value.price===null?'--':binding.value.price
        let chg = binding.value.chg===null?'--':binding.value.chg//成份股涨跌
        let curChngPct = binding.value.curChngPct===null?'--':binding.value.curChngPct//成份股涨跌幅
        //vnode.context.text.stock-popup.name=binding.oldVnode
        el.addEventListener('mouseover',(event)=>{
          /*this.hoverChartShow = true*/

          console.log(el.getAttribute("value"))
          console.log(document.getElementsByClassName('tooltip-box'))
        })
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