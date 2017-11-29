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
    background: #141518;
    color: #c9d0d7;
    width: 100%;
    font-size: 12px;
}

.k-line-box {
    /* padding: 11px 7px 20px 6px; */
    /* padding-bottom: 20px; */
    position: relative;

}
.kcharts {
    /* height: 360px; */
    /* height: 398px; */
    height: 417px;
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
<div class="time-kline-wrap">
  <div class="k-line-box">
    <div class="kcharts" ref="kcharts" :style="{width:chartWidth+'px', height:chartHeight+'px'}"></div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
export default {
  data() {
    return {
      ma5: '--',
      ma10: '--',
      ma20: '--',
      ma30: '--'
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
    }
  },
  watch: {
    strategyId() {
      if (!this.strategyId) {
        console.info('[component:stock-kline]:stockCode is necessary!')
        return
      }
      this.init()
    }
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
      const pointData = []
      const seriesData = []
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
    }
  }),
  components: {

  },
  methods: {
    init() {
      this.chart = echarts.init(this.$refs.kcharts) || echarts.getInstanceByDom(this.$refs.kcharts)
      this.$store.dispatch('backtestDetail/queryKline', {
          innerCode: this.innerCode,
          strategyId: this.strategyId
        })
        .then(() => {
          this.drawCharts(this.kLineDataAll.name, this.kLineDataAll.kLineXdata, this.kLineDataAll.kLineYdata, this.kLineDataAll.ma5, this.kLineDataAll.ma10, this.kLineDataAll.ma20, this.kLineDataAll.ma30, this.kLineDataAll.pointData, this.kLineDataAll.seriesData)
        })
    },
    drawCharts(name, kLineXdata, kLineYdata, ma5, ma10, ma20, ma30, pointData, seriesData) {
      console.log(seriesData)
      const self = this
      self.chart.setOption({
        /* title: {
          text: name + '买卖点分析',
          left: '2.2%',
          textStyle: {
            color: '#696969',
            fontFamily: '宋体',
            fontSize: 12,
            fontStyle: 'normal',
            fontWeight: 'normal'
          }
        },*/
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          formatter: function(t) {
            // console.log(t)
            var time = t[0].name
            var openPx = t[0].value[1]
            var closePx = t[0].value[2]
            var highPx = t[0].value[3]
            var lowPx = t[0].value[4]
            /* if (t[1].value === null) {
              self.ma5 = '--'
            } else {
              self.ma5 = t[1].value
            }
            self.ma10 = t[2].value
            self.ma20 = t[3].value
            self.ma30 = t[4].value*/
            // console.log(self.ma5)
            /* for (var i = 0; i < t.length; i++) {
              if (t[i].seriesName === 'MA5') {
                var ma5 = t[i].value*/

            // this.ma5 = t[1].value

            // 更新ma20
            // $('#kma20').html(ma20)
            /* } else if (t[i].seriesName === 'MA10') {
              var ma10 = t[i].value*/
            // this.ma10 = t[2].value

            // 更新ma60
            // $('#kma60').html(ma60)
            /* } else if (t[i].seriesName === 'MA20') {
              var ma20 = t[i].value*/
            // this.ma20 = t[3].value

            // 更新ma120
            // $('#kma120').html(ma120)
            /* } else if (t[i].seriesName === 'MA30') {
              var ma30 = t[i].value*/
            // this.ma30 = t[4].value

            // 更新ma120
            // $('#kma120').html(ma120)
            /*  }
            }*/
            // return 123
            return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
              '<br/>最低价：' + (lowPx || '--') + '<br/>'
          }
        },
        /* legend: {
          data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30', 'pointLine']
        },*/
        grid: {
          /* left: '2.5%',*/
          /* left: '2.5%',*/
          /* right: '2%',*/
          left: '24px',
          right: '36px',
          top: '30px',
          bottom: '20px',
          /* bottom: '10%',*/
          /*, */
          containLabel: true
        },

        xAxis: {
          type: 'category',
          data: kLineXdata,
          scale: true,
          boundaryGap: false,
          /* axisLine: {  },*/
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#23272c'
            }
          },
          splitLine: {
            show: false
          },
          splitNumber: 5,
          min: 'dataMin',
          max: 'dataMax',
          axisLabel: {
            align: 'left',
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
            show: true,
            lineStyle: {
              // 使用深浅的间隔色
              color: '#23272c'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#23272c'
            }
          },
          position: 'right',
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#c9d0d7'
            }
          }

          /* axisLabel: {
            formatter: function (val) {
              return val
            }
          }*/
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
            lineStyle: {
              normal: {
                width: 3,
                color: '#fff'
              }
            }
          }

        ]
      })
      window.onresize = this.chart.resize
    }
  },
  mounted() {
    this.init()
  }

}
</script>
