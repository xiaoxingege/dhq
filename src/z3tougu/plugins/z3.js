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
        el.stockCode = binding.value.code;
        let vm = vnode.context;
        let popupVm = vm.$refs[popup];
        el._popupStock = function(event) {
          let scrollTop = window.pageYOffset || window.scrollY;
          let scrollleft = window.pageXOffset || window.scrollX;
          const winH = window.document.body.scrollHeight || window.innerHeight;
          const winW = window.document.body.scrollWidth || window.innerWidth;
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
          popupVm.$props.stockCode = el.stockCode;
          popupVm.curStockCode = el.stockCode;
        };
        el.addEventListener('mouseenter', el._popupStock);
        el.addEventListener('mouseleave', (event) => {
          popupVm.isShow = false;
        })
      },
      update(el, binding, vnode, oldVnode) {
        el.stockCode = binding.value.code;
      }
    });
    Vue.directive('z3-updowncolor', (el, binding, vnode, oldVnode) => {
      var flag = binding.value;
      if (flag > 0) {
        el.style.color = config.upColor
        // el.style.borderColor = config.upColor
      } else if (flag < 0) {
        el.style.color = config.downColor
        // el.style.borderColor = config.downColor
      } else {
        el.style.color = config.flatColor
        // el.style.borderColor = config.flatColor
      }
    })

    /**
    * 使用方式:1、时间戳毫秒级 <div  v-z3-time="{ time: '1521279696000', type: '1' }"></div>
              2、日期格式<div  v-z3-time="{ time: '2018-03-22 10:21:12', type: '2' }"></div>
              3、type=1 & type=2
                     （1）新闻的资讯按照时间1小时以内的是“多少分钟前”，1分钟内的资讯显示“刚刚”表示
                     （2）当天内显示“小时:分钟”， 如“1:00”
    */
    Vue.directive('z3-time', (el, binding, vnode, oldVnode) => {
      var dateTimeStamp = binding.value.time // 传入时间戳
      var dateType = parseInt(binding.value.type)
      if (dateTimeStamp.indexOf('-') == -1) {
        dateTimeStamp = parseInt(binding.value.time)
      }

      if (dateTimeStamp != undefined && dateTimeStamp != null && dateTimeStamp != '') {
        if (dateTimeStamp.length == 13) {
          dateTimeStamp = parseInt(binding.value)
        } else {
          var timestamp = Date.parse(new Date(dateTimeStamp))
          dateTimeStamp = timestamp
        }
        var now = new Date().getTime()
        var day_conver = 1000 * 60 * 60 * 24
        var hour_conver = 1000 * 60 * 60
        var min_conver = 1000 * 60
        var time_conver = now - dateTimeStamp
        var temp_conver
        var date = new Date(dateTimeStamp)
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' '
        var h = (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours()) + ':'
        var m = (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes())
        if ((time_conver / day_conver) < 1) {
          if (dateType === 1) {
            temp_conver = (time_conver / hour_conver)
            if (temp_conver >= 1) {
              el.innerHTML = parseInt(temp_conver) + "小时前"
            } else {
              temp_conver = (time_conver / min_conver)
              if (temp_conver >= 1) {
                el.innerHTML = parseInt(temp_conver) + "分钟前"
              } else {
                el.innerHTML = "刚刚"
              }
            }
          } else {
            el.innerHTML = h + m
          }
        } else {
          var curTimeMillis = new Date().getTime() // 系统当前时间戳
          var curDate = new Date(curTimeMillis)
          var todayHoursSeconds = curDate.getHours() * 60 * 60
          var todayMinutesSeconds = curDate.getMinutes() * 60
          var todaySeconds = curDate.getSeconds()
          var todayMillis = (todayHoursSeconds + todayMinutesSeconds + todaySeconds) * 1000
          var todayStartMillis = curTimeMillis - todayMillis
          var oneDayMillis = 24 * 60 * 60 * 1000
          var yesterdayStartMilis = todayStartMillis - oneDayMillis
          if (dateTimeStamp >= yesterdayStartMilis) {
            el.innerHTML = "昨天 " + h + m
          } else {
            el.innerHTML = M + D + h + m
          }
        }
      } else {
        el.innerHTML = "--"
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
    Vue.filter('chngPct', function(value) {
      if (value === null || value === '') {
        return '--';
      } else {
        if (value > 0) {
          return '+' + value.toFixed(2) + '%';
        } else {
          return value.toFixed(2) + '%';
        }
      }
    });
    Vue.filter('chng', function(value) {
      if (value === null || value === '') {
        return '--';
      } else {
        if (value > 0) {
          return '+' + value;
        } else {
          return value;
        }
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
    Vue.directive('z3-nav', (el, binding, vnode, oldVnode) => {
      // el.childNodes[0].className = binding.expression
      el.childNodes.forEach((item) => {
        item.addEventListener('click', (event) => {
          el.childNodes.forEach((v) => {
            v.className = ''
          })
          item.className = binding.expression
        })
      })

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