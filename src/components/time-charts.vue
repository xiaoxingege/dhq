<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}
body {
    font-size: 12px;
    background: #141518;
}
h3 {
    font-weight: 400;
}
em,
i {
    font-style: normal;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}
.time-kline-wrap {
    color: #c9d0d7;
    width: 100%;
    font-size: 12px;
}

.k-line-box {
    /* padding: 11px 7px 20px 6px; */
    /* padding-bottom: 20px; */
    position: relative;
    display: inline-block;
    height: 100%;
    width: 100%;
}
.kcharts {
    /* height: 360px; */
    /* height: 398px; */
    height: 100%;
    outline: none;
}
.ma-box {
    position: absolute;
    top: 10%;
    left: 3%;
    width: 50%;
}
.ma5 {
    color: #e75443;
}
.ma10 {
    color: #942a52;
}
.ma20 {
    color: #f6bc4d;
}
.ma30 {
    color: #2388da;
}
.mawidth {
    width: 6%;
    display: inline-block;
}
</style>
<template>
<div class="time-kline-wrap" :style="{width:chartWidth, height:chartHeight}">
  <a class="k-line-box" @dblclick='linkDetail(strategyId)'>
    <div class="kcharts" ref="kcharts" @keydown.prevent="zoomData($event)" @mouseover="zoomOver($event)" @mouseout="zoomOut($event)" tabindex="0" onfocus='console.log("得到焦点!");'></div>
  </a>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import {
  ctx
} from '../z3tougu/config'
import echarts from 'echarts'
export default {
  data() {
    return {
      ma5: '--',
      ma10: '--',
      ma20: '--',
      ma30: '--',
      zoomStart: 0,
      zoomEnd: 0,
      zoomRange: 0,
      dataSize: 0
    }
  },
  props: {
    strategyId: {
      type: String
    },
    innerCode: {
      type: String
    },
    chartWidth: {
      type: Number,
      default: 300
    },
    chartHeight: {
      type: Number,
      default: 200
    },
    showDataZoom: {
      type: Boolean,
      default: false
    },
    minRange: {
      type: Number,
      default: 120
    },
    day: {
      type: Number,
      default: 250
    },
    gridBottom: {
      type: Number,
      default: 60
    }
  },
  watch: {
    strategyId() {
      if (!this.strategyId) {
        console.info('[component:stock-kline]:stockCode is necessary!')
        return
      }
      this.init()
    },
    innerCode() {
      if (!this.innerCode) {
        console.info('[component:stock-kline]:stockCode is necessary!')
        return
      }
      this.init()
    }
    /* strategyId() {
      this.init()
    } */
  },
  computed: mapState({
    kLineDataAll: state => {
      const dataAll = state.backtestDetail.kLineData
      const kLine = dataAll.kLine
      const sellData = dataAll.sellDay
      const buyData = dataAll.buyDay
      const kLineXdata = []
      const kLineYdata = []
      const ma5 = []
      const ma10 = []
      const ma20 = []
      const ma30 = []
      let name = ''
      let code = ''
      let pointData = []
      let seriesData = []
      kLine && kLine.forEach(item => {
        const openPx = item.openPx // 开盘价
        const closePx = item.closePx // 收盘价
        const highPx = item.highPx // 最高价
        const lowPx = item.lowPx // 最低价
        const endDate = (item.endDate + '').substring(0, 4) + '-' + (item.endDate + '').substring(4, 6) + '-' + (item.endDate + '').substring(6, (item.endDate + '').length)
        kLineXdata.push(endDate)
        kLineYdata.push([openPx, closePx, highPx, lowPx])
        ma5.push(item.ma5)
        ma10.push(item.ma10)
        ma20.push(item.ma20)
        ma30.push(item.ma30)
        name = item.name
        code = item.innerCode
        // console.log(sellData[0] === item.endDate)
        for (let i = 0; i < sellData.length; i++) {
          // console.log(sellData[i] === item.endDate)
          if (sellData[i] === item.endDate) {
            seriesData.push([endDate, closePx])
            const point = {
              name: 'XX标点',
              coord: [endDate, closePx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-green4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '-75%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }

            }
            pointData.push({
              name: 'XX标点',
              coord: [endDate + '', closePx],
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#000',
                  borderColor: '#fff',
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            })
            pointData.push(point)
          }
        }
        for (let i = 0; i < buyData.length; i++) {
          if (buyData[i] === item.endDate) {
            seriesData.push([endDate + '', closePx])
            const point = {
              name: 'XX标点',
              coord: [endDate, closePx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-red4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '75%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            }
            pointData.push({
              name: 'XX标点',
              coord: [endDate + '', closePx],
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#000',
                  borderColor: '#fff',
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            })
            pointData.push(point)
          }
        }
      })
      return {
        kLineXdata: kLineXdata,
        kLineYdata: kLineYdata,
        ma5: ma5,
        ma10: ma10,
        ma20: ma20,
        ma30: ma30,
        name: name,
        code: code,
        pointData: pointData,
        seriesData: seriesData
      }
    },
    xLabelInterval() {
      let interval = 'auto'
      if (this.day === 250) {

        interval = 40
      } else {
        interval = 'auto'
      }
      return interval
    }
  }),
  components: {

  },
  methods: {
    init() {
      this.chart = echarts.getInstanceByDom(this.$refs.kcharts)
      if (this.chart) {
        this.chart.clear();
        this.chart.dispose();
      }
      this.chart = echarts.init(this.$refs.kcharts);
      this.chart.on('datazoom', (params) => {
        const dataZoom = this.chart.getOption().dataZoom[0];
        const startValue = params.startValue || dataZoom.startValue;
        const endValue = params.endValue || dataZoom.endValue;
        this.zoomStart = startValue;
        this.zoomEnd = endValue;
        this.zoomRange = endValue - startValue;
        console.info('start:' + startValue + ', end:' + endValue + ', range:' + this.zoomRange);
      })
      const _this = this
      window.onresize = function() {
        const timestampResize = new Date().getTime()
        _this.$emit('isResize', timestampResize)
        _this.chart.resize({
          width: (window.innerWidth - 1) * 0.3334,
          height: (window.innerHeight - 5) * 0.83
        })
      }
      this.$store.dispatch('backtestDetail/queryKline', {
          innerCode: this.innerCode,
          strategyId: this.strategyId,
          day: this.day
        })
        .then(() => {
          this.dataSize = this.kLineDataAll.kLineXdata.length;
          this.zoomEnd = this.dataSize
          this.zoomStart = this.dataSize - this.zoomRange
          this.drawCharts(this.kLineDataAll.name, this.kLineDataAll.kLineXdata, this.kLineDataAll.kLineYdata, this.kLineDataAll.ma5, this.kLineDataAll.ma10, this.kLineDataAll.ma20, this.kLineDataAll.ma30, this.kLineDataAll.pointData, this.kLineDataAll.seriesData)

        })
    },
    drawCharts(name, kLineXdata, kLineYdata, ma5, ma10, ma20, ma30, pointData, seriesData) {
      const self = this
      self.chart.setOption({
        grid: {
          containLabel: true,
          left: 10,
          top: 10,
          right: 10,
          bottom: this.gridBottom
        },
        xAxis: {
          type: 'category',
          data: kLineXdata,
          scale: true,
          boundaryGap: false,
          /* axisLine: {  },*/
          axisLine: {
            lineStyle: {
              color: '#23272c',
              width: 1
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          min: 'dataMin',
          max: 'dataMax',
          axisLabel: {
            align: 'left',
            interval: this.xLabelInterval,
            textStyle: {
              color: '#c9d0d7'
            }
          }
        },

        yAxis: {
          scale: true,
          splitArea: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false,
            lineStyle: {
              // 使用深浅的间隔色
              color: '#23272c'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#23272c',
              width: 1
            }
          },
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#c9d0d7'
            }
          }
        },
        tooltip: {
          trigger: 'axis',
          confine: true,
          axisPointer: {
            type: 'cross'
          },
          textStyle: {
            align: 'left',
            fontFamily: '微软雅黑',
            fontSize: 12
          },
          formatter: function(t) {
            var time = t[0].name
            var openPx = t[0].value[1]
            var closePx = t[0].value[2]
            var highPx = t[0].value[3]
            var lowPx = t[0].value[4]
            return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
              '<br/>最低价：' + (lowPx || '--') + '<br/>'
          }
        },
        series: [{
            name: '日K',
            type: 'candlestick',
            data: kLineYdata,
            barWidth: '3',
            itemStyle: {
              normal: {
                color: '#e6363a',
                color0: '#48a854',
                borderColor: '#ff4040',
                borderColor0: '#2dc678'
              }
            },
            hoverAnimation: false,
            markPoint: { /* image://src/assets/images/z3img/kline-red.png*/
              // symbol: 'image://https://ws1.sinaimg.cn/large/006cGJIjly1fiza2t2r6qj30go09ejt8.jpg',
              label: {
                normal: {
                  formatter: function(param) {
                    return param != null ? Math.round(param.value) : ''
                  }
                }
              },
              data: pointData,
              tooltip: {
                formatter: function(param) {
                  return param.name + '<br>' + (param.data.coord || '')
                }
              }
            }
            /*,
                         markLine: {

                           data: [[{
                             coord: [0, 3],
                             symbol: 'none'
                           }, {
                             coord: [10, 13],
                             symbol: 'none'
                           }]]

                         }*/
          },
          /* {
            name: 'MA5',
            type: 'line',
            data: ma5,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#e75443'
              }
            }
          },
          {
            name: 'MA10',
            type: 'line',
            data: ma10,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#942a52'
              }
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: ma20,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#f6bc4d'
              }
            }
          },
          {
            name: 'MA30',
            type: 'line',
            data: ma30,
            smooth: true,
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#2388da'
              }
            }
          },*/
          {
            type: 'line',
            data: seriesData,
            hoverAnimation: false,
            lineStyle: {
              normal: {
                width: 3,
                color: '#fff'
              }
            }
          }

        ],
        dataZoom: [{
          type: 'slider',
          show: this.showDataZoom,
          backgroundColor: '#32383E',
          xAxisIndex: [0],
          handleSize: 20, // 滑动条的 左右2个滑动条的大小
          height: 30, // 组件高度
          left: 30, // 左边的距离
          right: 0, // 右边的距离
          bottom: 10,
          startValue: this.zoomStart,
          endValue: this.zoomEnd,
          showDataShadow: false, // 是否显示数据阴影 默认auto
          showDetail: false, // 即拖拽时候是否显示详细数值信息 默认true       
          filterMode: 'filter'
        }]
      })
    },
    zoomData(e) {
      var key = e.keyCode
      if (key === 38) {
        if (this.zoomRange <= this.minRange) {
          return;
        }
        this.zoomStart += 10
        this.zoomRange -= 10

      } else if (key === 40) {
        if (this.zoomRange >= this.dataSize) {
          this.zoomStart = 0;
          this.zoomRange = this.dataSize;
          return;
        } else {
          this.zoomStart < 0 ? 'return false' : this.zoomStart -= 10
          this.zoomRange += 10

        }

      } else if (key === 37) {
        if (this.zoomStart === 0 || this.zoomEnd === this.zoomRange) {
          /* this.zoomStart = 0;
           this.zoomRange = this.dataSize; */
          return;
        } else {
          this.zoomStart -= 1
          // this.zoomRange += 1
          this.zoomEnd -= 1
        }
      } else if (key === 39) {
        if (this.zoomStart === 0 || this.zoomEnd >= this.dataSize) {
          return;
        } else {
          this.zoomStart += 1
          this.zoomEnd += 1
        }
      }
      this.chart.dispatchAction({
        type: 'dataZoom',
        startValue: this.zoomStart,
        endValue: this.zoomEnd
      })

    },
    zoomOver(e) {
      this.$refs.kcharts.focus()
    },
    zoomOut(e) {
      this.$refs.kcharts.blur();
    },
    linkDetail: function(id) {
      window.open(ctx + '/backtesttime/' + id)
    }
  },
  mounted() {
    this.zoomRange = this.minRange;
    this.init();
    this.$refs.kcharts.focus()
  }
}
</script>
