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
        console.info('bind');
        let popup = binding.value.ref;
        // let code = binding.value.code;
        let vm = vnode.context;
        let popupVm = vm.$refs[popup];
        el.addEventListener('mouseover', (event) => {
          const str = event.currentTarget.outerHTML
          const parser = new DOMParser();
          const doc = parser.parseFromString(str, "text/xml");
          let code
          if (doc.getElementsByTagName('td').length > 0) {
            code = doc.getElementsByTagName('td')[0].getAttribute('value')
          } else if (doc.getElementsByTagName('span').length > 0) {
            code = doc.getElementsByTagName('span')[0].getAttribute('value')
          }
          let scrollTop = window.pageYOffset || window.scrollY;
          let scrollleft = window.pageXOffset || window.scrollX;
          const winH = window.document.body.scrollHeight;
          const winW = window.document.body.scrollWidth;
          let left = event.x + parseInt(scrollleft) + 50;
          let top = event.y + parseInt(scrollTop) - 20;
          if (winH - top < 300) {
            top = winH - 300;
          }
          if (winW - left < 400) {
            left = event.x + parseInt(scrollleft) - 430;
          }
          popupVm.$props.left = left
          popupVm.$props.top = top
          popupVm.isShow = true;
          popupVm.$props.stockCode = code;
          console.info(code);
        });
        el.addEventListener('mouseout', (event) => {
          popupVm.isShow = false;
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
    Vue.directive('z3-updowncolor-bg', (el, binding, vnode, oldVnode) => {
      var flag = binding.value;
      if (flag > 0) {
        el.style.backgroundColor = config.upColor
      } else if (flag < 0) {
        el.style.backgroundColor = config.downColor
      } else {
        el.style.backgroundColor = config.flatColor

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
    Vue.directive('drag', {
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
    }); // 自定义指令JS
    Vue.directive('select', {
      inserted: function(el, binding, vnode, oldVnode) {
        let uls = ''
        const selectObj = binding.value.data // 获取select需要显示的下拉框值s
        for (const item in selectObj) {
          uls += '<li value="' + item + '">' + selectObj[item] + '</li>'
        }
        el.innerHTML = '<div class="vSelect"><input class="vInput" type="text" name="' + binding.value.default+'"  value="' + binding.value.data[binding.value.default] + '" readonly/><ul class="vUl" style="display: none;">' + uls + '</ul></div>'

        const ul = el.getElementsByClassName('vUl')[0]
        const lis = ul.getElementsByTagName('li')
        const vInput = el.getElementsByClassName('vInput')[0]
        document.getElementsByTagName('body')[0].addEventListener('click', (event) => {
          ul.style.display = 'none'
        })
        el.addEventListener('click', (event) => {
          event.stopPropagation()
          // el.getElementsByClassName('vUl')[0].style.display = 'none'

          const uls = document.getElementsByClassName('vUl')
          for (const item of uls) {
            if (item !== ul) {
              item.style.display = 'none'
            }
          }
          ul.style.display = ul.style.display === 'block' ? 'none' : 'block'
        })
        for (const item of lis) {
          item.addEventListener('click', (event) => {
            vInput.value = event.target.innerHTML
            vInput.name = event.target.getAttribute('value')
          })
        }
      }

    })
    Vue.filter('money', function(value) {
      let val = Number(value);
      if (isNaN(val)) {
        return config.emptyValue
      } else {
        return val.toFixed(2);
      }
    });
    Vue.filter('price', function(value) {
      let val = Number(value);
      if (isNaN(val)) {
        return config.emptyValue
      } else {
        return val.toFixed(2);
      }
    })
    Vue.filter('decimal', function(value, num) {
      let val = Number(value);
      if (isNaN(val)) {
        return config.emptyValue
      } else {
        return (Math.round(value * Math.pow(10, num)) / Math.pow(10, num)).toFixed(num)
      }
    })
    Vue.filter('isNull', function(value) {
      if (value === null || value === '') {
        return config.emptyValue
      } else {
        return value
      }
    })
    Vue.directive('z3-help', {
      bind(el, binding, vnode, oldVnode) {
        el.addEventListener('mouseover', (event) => {
          event.currentTarget.parentNode.insertAdjacentHTML("beforeBegin", "<div id=\"icon-help\" style=\"position: absolute;top: 32px;width: 300px;display: block;padding: 15px;color: #666666;background: #cccfd9;border-radius: 10px;z-index: 999;line-height: 18px;font-size: 12px;\">123");
          event.currentTarget.parentNode.insertAdjacentHTML("afterend", "</div>");
          var hDiv = document.getElementById('icon-help')
          hDiv.innerHTML = binding.value
          let scrollTop = window.pageYOffset || window.scrollY;
          let scrollleft = window.pageXOffset || window.scrollX;
          const winH = window.document.body.scrollHeight;
          const winW = window.document.body.scrollWidth;
          let left = event.x + parseInt(scrollleft) + 50;
          let top = event.y + parseInt(scrollTop) - 20;
          if (winH - top < 300) {
            top = winH - 300;
          }
          if (winW - left < 400) {
            left = event.x + parseInt(scrollleft) - 320;
          }
          hDiv.style.left = left + 'px'
          hDiv.style.top = top + 20 + 'px'

        });
        el.addEventListener('mouseout', (event) => {
          var hDiv = document.getElementById('icon-help')
          hDiv.parentNode.removeChild(hDiv);
        })
      }

    })

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