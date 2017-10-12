import config from '../config'
export default {
  install(Vue, options) {
    // 1. 添加全局方法或属性
    // Vue.myGlobalMethod = function () {
    //   // 逻辑...
    // }
    // 2. 添加全局资源
    Vue.directive('z3-stock', {
      bind(el, binding, vnode, oldVnode) {
        let popup = binding.value.ref;
        //let code = binding.value.code;
        let vm = vnode.context;
        let popupVm = vm.$refs[popup];
        console.log(vnode)
        console.log(vnode.context)
        console.log(vnode.data.attrs.value)
        console.log(vnode.context.$refs[popup])
        el.addEventListener('mouseover', (event) => {
          console.log(event.currentTarget.outerHTML)
          const str = event.currentTarget.outerHTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(str, "text/xml");
          let code;
          code = vnode.data.attrs.value
          /*if(doc.getElementsByTagName('td').length>0){
            code = doc.getElementsByTagName('td')[0].getAttribute('value')

          }else{
            code = doc.getElementsByTagName('span')[0].getAttribute('value')
          }*/

          let scrollTop = window.pageYOffset || window.scrollY;
          let scrollleft = window.pageXOffset || window.scrollX;
          const winH = window.document.body.scrollHeight;
          const winW = window.document.body.scrollWidth;
          let left = event.x + parseInt(scrollleft) + 40;
          let top = event.y + parseInt(scrollTop) - 20;
          if (winH - top < 300) {
            top = winH - 300;
          }
          if (winW - left < 400) {
            left = event.x + parseInt(scrollleft) - 400;
          }
          popupVm.$props.left = left
          popupVm.$props.top = top
          popupVm.isShow = true;
          popupVm.$props.stockCode = code;
        });
        el.addEventListener('mouseout', (event) => {
          popupVm.isShow = false;
          console.info('mouseout');
        })
      }
    });
    Vue.directive('z3-updowncolor', (el, binding, vnode, oldVnode) => {
      var flag = binding.value;
      if (flag > 0) {
        el.style.color = config.upColor
      } else if (flag < 0) {
        el.style.color = config.downColor
      } else {
        el.style.color = config.flatColor

      }
    })
    Vue.directive('title', {
      inserted: function(el, binding) {
        document.title = el.dataset.title
      }
    })
    Vue.directive('z3-drag', {
      inserted: (el, binding, vnode, oldVnode) => {
        let oDiv = el; //当前元素
        var containmentRef = binding.value.containment;
        var vm = vnode.context;
        var l;
        var t;
        oDiv.onmousedown = function(e) {
          var containment = vm.$refs[containmentRef];
          var containmentH = containment.offsetHeight;
          var containmentW = containment.offsetWidth;
          var elH = el.scrollHeight;
          var elW = el.scrollWidth;
          var minLeft = 0;
          var maxLeft = 0;
          var minTop = 0;
          var maxTop = 0;
          if (containmentH < elH) {
            minTop = containmentH - elH;
            maxTop = 0;
          } else {
            minTop = 0;
            maxTop = containmentH - elH;
          }
          if (containmentW < elW) {
            minLeft = containmentW - elW;
            maxLeft = 0;
          } else {
            minLeft = 0;
            maxLeft = containmentW - elW;
          }
          //鼠标按下，计算当前元素距离可视区的距离
          let disX = e.clientX - oDiv.offsetLeft;
          let disY = e.clientY - oDiv.offsetTop;
          e.preventDefault()
          console.info('minLeft=' + minLeft);
          console.info('maxLeft=' + maxLeft);
          console.info('minTop=' + minTop);
          console.info('maxTop=' + maxTop);
          document.onmousemove = function(e) {
            //通过事件委托，计算移动的距离
            l = e.clientX - disX;
            t = e.clientY - disY;
            //移动当前元素
            if (l <= minLeft) {
              l = minLeft
            }
            if (l >= maxLeft) {
              l = maxLeft
            }
            if (t <= minTop) {
              t = minTop
            }
            if (t >= maxTop) {
              t = maxTop
            }
            oDiv.style.left = l + 'px';
            oDiv.style.top = t + 'px';
          };
          document.onmouseup = function(e) {
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    })
    Vue.directive('drag', //自定义指令                                      JS
      {
        bind: function(el, binding) {
          let oDiv = el; //当前元素
          let self = this; //上下文
          var l;
          var num;
          oDiv.onmousedown = function(e) {
            //鼠标按下，计算当前元素距离可视区的距离
            let disX = e.clientX - oDiv.offsetLeft;
            //let disY = e.clientY - oDiv.offsetTop;
            e.preventDefault()
            document.onmousemove = function(e) {
              //通过事件委托，计算移动的距离
              l = e.clientX - disX;
              //let t = e.clientY - disY;
              //移动当前元素
              if (l < 16) {
                l = 16
              }
              if (l > 274) {
                l = 274
              }
              oDiv.style.left = l + 'px';
              //oDiv.style.top = t + 'px';
              //将此时的位置传出去
              num = Math.round(((l - 16) / 28.66))
              binding.value({
                x: e.pageX,
                num: num
              })
            };
            document.onmouseup = function(e) {

              l = num * 28.66 + 16
              oDiv.style.left = l + 'px';
              binding.value({
                x: e.pageX,
                num: num
              })
              document.onmousemove = null;
              document.onmouseup = null;
            };
          };
        }
      }
    );
    // Vue.directive('z3-qrcode',(el, binding, vnode, oldVnode) => {
    //   let openQrcode = function(e){
    //     let div = "<div><canvas></canvas></div>"
    //   }
    //   el.addEventListener('click',(event) => {

    //   })
    // })
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