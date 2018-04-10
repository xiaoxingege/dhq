<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: '微软雅黑';
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}
/*$bgDeepColor:#0d0e0f;/* 最深背景 */
/*$bgConColor:#141518;/* 内容背景 */
/*$lineAndTitleColor:#23272c;/* 线条颜色和内容标题背景 */
/*$bgNavColor:#404852;/* 导航外框背景 */
/*$wordsColorBase:#c9d0d7;/* 最亮文字颜色 */
/*$grayWordsColor:#808ba1;/* 灰色文字颜色 所有图标颜色 */
/*$menuSelColor:#525a65;/* 二级菜单选中颜色 */
/*$blueWordsColor:#1984ea;/* 蓝色文字色 */
/*$hoverBgColor:#2e4465;/* 鼠标滑过列表背景色 */
/*$upColor:#ca4941;/* 所有红色 上涨 */
/*$downColor:#56a870;/* 所有绿色 上涨 */
/*$backupYellow:#f0b540;/* 备用黄色 */
/*$fontSizeBase:12px; /* 基本字体 */
.topic-detail {
    width: 100%;
    background: #141518;
    font-size: 12px;
    color: #c9d0d7;
    /* height: 100%; */
    border-left: 1px solid #0d0e0f;
    border-bottom: 3px solid #0d0e0f;
}
.app,
body,
html {
    height: 100%;
    /*background-color: $bgDeepColor;*/
}

body {
    background-color: $bgDeepColor;
}
.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.clinic-top-left {

    border-right: 1px solid $lineAndTitleColor;
}
.red {
    color: $upColor;
}

.green {
    color: $downColor;
}
.lightcolor {
    color: $wordsColorBase;
}
.c_txt {
    color: $wordsColorBase;
}

.radar-box {
    height: 180px;
    position: relative;
    left: 15%;
}
.radarChart {
    height: 100%;
    width: 100%;

}

.desc-red {
    border: 1px solid $upColor;

}
.desc-green {
    border: 1px solid $downColor;

}

.pl-5 {
    padding-left: 5px;
}

.clinic-dime-wrap {
    background-color: $bgConColor;
}
.tab-ul {
    width: 100%;
    background: $bgNavColor;
}
.tab-ul li {
    width: 70px;
    height: 30px;
    line-height: 30px;
    background: $bgNavColor;
    text-align: center;
    border-right: 1px solid $bgDeepColor;
    cursor: pointer;
}
.tab-ul li.active {
    background: $menuSelColor;
}
.dime-kline {
    padding: 10px;
    clear: both;

}
.kline-title {

    line-height: 41px;
    border-bottom: 1px solid $lineAndTitleColor;
}
.kline-title2 {
    padding: 10px 0;
}
.kline {
    height: 264px;
}
.kline-charts {

    height: 264px;
    width: 100%;
}
.assess1 {
    padding-left: 5px;
}
</style>
<template>
<div class="dime-kline">
  <div v-for="(inFace,index) of indexFace" v-if="index===0">
    <div class="kline-title">
      {{inFace.title}}<span class="assess1" :class="checkStatus(inFace.status)">{{inFace.tag==null?'--':inFace.tag}}</span>
    </div>
    <div class="kline-title2">{{inFace.describe}}</div>

  </div>

  <div class="kline-charts" ref="klineChart">

  </div>

</div>
</template>
<script type="text/javascript">
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
/* import {
  formatDateStr
} from 'utils/date' */
import config from '../../z3tougu/config'
export default ({
  data() {
    return {
      showX: true
    }
  },
  computed: {
    ...mapState({
      indexFace: state => state.clinicShares.indexFace,
      lastKData: state => {
        // const record = state.clinicShares.indexFace[0]
        /* if (record) {
          return {
            ma20: record.ma20 === null ? config.emptyValue : record.ma20,
            ma60: record.ma60 === null ? config.emptyValue : record.ma60,
            ma120: record.ma120 === null ? config.emptyValue : record.ma120
          }
        } else {
          return {
            ma20: config.emptyValue,
            ma60: config.emptyValue,
            ma120: config.emptyValue
          }
        } */
      },
      lineData: state => {
        var data = {
          times: [],
          tradeTimeArr: [],
          kdata: [],
          markLineData: [],
          markPointData: [],
          // ma20: [],
          // ma60: [],
          // ma120: [],
          vols: []
        }
        // let ma20Error = 0
        // let ma60Error = 0
        // let ma120Error = 0
        // console.log(state.clinicShares.indexFace[0].tag)
        var fundFace = state.clinicShares.indexFace;
        // console.log(fundFace)
        // console.log(this.formatDate)
        // var oldOption = this.$refs.klineChart.getOption();
        // var data = oldOption.series[0].data;
        // var dataTime = oldOption.xAxis[0].data;
        fundFace.forEach((alls, index) => {
          if (index === 0) {
            // console.log(item.datas.data[0].prevClosePx)
            const klineData = [].concat(alls.datas.data).reverse()

            klineData.forEach((item) => {

              let time = ''
              time = (item.endDate + '').substring(0, 4) + '-' + (item.endDate + '').substring(4, 6) + '-' + (item.endDate + '').substring(6, (item.endDate + '').length)
              data.times.push(time)
              data.tradeTimeArr.push(time)
              /* if (this.klineType === 'day') { // 日
                data.times.push(this.formatDate(item.endDate + ''))
                data.tradeTimeArr.push(this.formatDate(item.endDate + ''))
              } else if (this.klineType === 'week' || this.klineType === 'month') { // 周月
                data.times.push(this.formatDate(item.lastTradeDate + ''))
                data.tradeTimeArr.push(this.formatDate(item.lastTradeDate + ''))
              } else { // 5，15，30，60分钟
                data.times.push(item.tradeTime.substring(5, 10))
                data.tradeTimeArr.push(item.tradeTime)
              } */
              let openPx = item.openPx
              let closePx = item.closePx
              const highPx = item.highPx
              const lowPx = item.lowPx
              const volume = item.volume
              const prevClosePx = item.prevClosePx

              data.kdata.push([openPx, closePx, highPx, lowPx])
              var zhichiPX = '10.88'
              var dangqianPX = '12'
              var zhichengPx = '11'
              data.markLineData.push([{
                  coord: [data.times[0], zhichiPX]
                },
                {
                  coord: [data.times[data.times.length - 1], zhichiPX]
                }
              ], [{
                  coord: [data.times[0], dangqianPX]
                },
                {
                  coord: [data.times[data.times.length - 1], dangqianPX]
                }
              ], [{
                  coord: [data.times[0], zhichengPx]
                },
                {
                  coord: [data.times[data.times.length - 1], zhichengPx]
                }
              ])
              data.markPointData.push({
                name: '压力线',
                coord: [data.times[0], zhichiPX],
                symbol: 'rect',
                symbolSize: [86, 22],
                itemStyle: {
                  normal: {
                    // color: 各异，
                    // borderColor: 各异,     // 标注边线颜色，优先于color 
                    // borderWidth: 2,            // 标注边线线宽，单位px，默认为1
                    // label: {
                    // show: true,
                    // position: 'inside' // 可选为'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    // }
                  }
                }

              }, {
                name: '当前价',
                coord: [data.times[0], dangqianPX],
                symbol: 'rect',
                symbolSize: [86, 22],
                itemStyle: {
                  normal: {
                    color: '#c9d0d7'
                    // borderColor: 各异,     // 标注边线颜色，优先于color 
                    // borderWidth: 2,            // 标注边线线宽，单位px，默认为1
                    // label: {
                    // show: true,
                    // position: 'inside' // 可选为'left'|'right'|'top'|'bottom'
                    // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                    // }
                  }
                }

              }, {
                name: '支撑位',
                coord: [data.times[0], zhichengPx],
                symbol: 'rect',
                symbolSize: [86, 22],
                itemStyle: {
                  normal: {
                    color: '#1984ea',
                    // borderColor: 各异,     // 标注边线颜色，优先于color 
                    // borderWidth: 2,            // 标注边线线宽，单位px，默认为1
                    label: {
                      show: true
                      // position: 'inside' // 可选为'left'|'right'|'top'|'bottom'
                      // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                      // color: '#1984ea'
                    }
                  }
                }
              })
              // console.log(data.markLineData)
              /* if (item.ma20 !== 0) {
            ma20Error = item.ma20
          }
          if (item.ma60 !== 0) {
            ma60Error = item.ma60
          }
          if (item.ma120 !== 0) {
            ma120Error = item.ma120
          }
*/
              // 页面异常数据处理，会导致测试同事不能及时发现问题
              /* data.ma20.push(item.ma20 === 0 ? ma20Error : item.ma20)
              data.ma60.push(item.ma60 === 0 ? ma60Error : item.ma60)
              data.ma120.push(item.ma120 === 0 ? ma120Error : item.ma120) */

              var newVols = {
                value: volume, // 万手
                itemStyle: {
                  normal: {
                    color: closePx < prevClosePx ? config.downColor : config.upColor,
                    borderColor: closePx < prevClosePx ? config.downColor : config.upColor
                  }
                }
              }
              data.vols.push(newVols)
            })
            if (klineData.length < 60) {
              for (var i = 0; i < 60 - klineData.length; i++) {
                data.times.push('')
                data.tradeTimeArr.push('')
                const dt = []
                data.kdata.push(dt)
                /* data.ma20.push('')
                data.ma60.push('')
                data.ma120.push('') */
                data.vols.push('')
              }
            }
            // return data
          }
        })

        return data

      },
      xLabelInterval() {
        let interval = 17
        /* if (this.klineType === 'min5') {
          interval = 48
        } else if (this.klineType === 'min15') {
          interval = 15
        } else if (this.klineType === 'min30') {
          interval = 8
        } else if (this.klineType === 'min60') {
          interval = 4
        } else {
          interval = 17
        } */
        return interval
      }
    })
  },
  methods: {
    initKline() {
      this.chart = echarts.getInstanceByDom(this.$refs.klineChart) || echarts.init(this.$refs.klineChart)
      // console.log(document.getElementsByClassName('kline-charts'))
      // this.chart = echarts.init(document.getElementsByClassName('kline-charts')[0])              
      this.$store.dispatch('clinicShares/queryIndexFace').then(() => {

        this.drawCharts()

      })

    },
    drawCharts() {
      const lineData = this.lineData
      const opt = {
        toolbox: {
          show: false
        },
        animation: false,
        axisPointer: {
          link: {
            xAxisIndex: 'all'
          },
          label: {
            backgroundColor: '#777'
          }
        },
        /* left: 20,
        right: 20,
        top: 110,
        height: 120
    }, {
        left: 20,
        right: 20,
        height: 40,
        top: 260 */
        grid: [{
            left: 35,
            right: 10,
            top: 10,
            height: '60%',
            show: false
          },
          {
            left: 35,
            right: 10,
            bottom: 25,
            height: '27%',
            show: false
          }
        ],
        xAxis: [{
            show: this.showX,
            type: 'category',
            data: lineData.times,
            scale: true,
            axisTick: {
              show: false
            },
            boundaryGap: true, // 不从零刻度开始，不然会挤在y轴上
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            /* min: 'dataMin',
            max: 'dataMax', */
            axisLabel: {
              show: false,
              interval: this.xLabelInterval,
              showMinLabel: true,
              color: '#c9d0d7'
            }
          },
          {
            /*  
        boundaryGap : false,
        axisPointer: {
            type: 'shadow',
            label: {show: false},
            triggerTooltip: true,
            handle: {
                show: true,
                margin: 30,
                color: '#B80C00'
            }
        }*/
            type: 'category',
            gridIndex: 1,
            data: lineData.times,
            splitNumber: 20,
            scale: true,
            boundaryGap: true, // 不从零刻度开始，不然会挤在y轴上
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            axisLabel: {
              show: true,
              color: '#c9d0d7'
              // interval: this.xLabelInterval,
              // showMinLabel: true
            },
            /* min: 'dataMin',
            max: 'dataMax', */
            axisPointer: {
              /* label: {
                formatter: function(params) {
                  var seriesValue = (params.seriesData[0] || {}).value
                  return (seriesValue != null ? echarts.format.addCommas(seriesValue) : '')
                }
              } */
              /* type: 'shadow',
               label: {show: false},
               triggerTooltip: true,
               handle: {
                   show: true,
                   margin: 30,
                   color: '#B80C00'
               } */
            }
          }
        ],
        yAxis: [{
            scale: true,
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23272c'
              }
            }
          },
          {
            scale: true,
            gridIndex: 1,
            splitNumber: 2,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        brush: {
          xAxisIndex: 'all',
          brushLink: 'all',
          outOfBrush: {
            colorAlpha: 0.1
          }
        },
        series: [{
            name: 'K线',
            type: 'candlestick',
            data: lineData.kdata,
            stack: 'K线',
            // barCategoryGap: '3',
            // barWidth : data.length<30?8:3.5,//柱图宽度
            itemStyle: {
              normal: {
                color: config.upColor,
                color0: config.downColor,
                borderColor: config.upColor,
                borderColor0: config.downColor
              }
            },
            markPoint: {
              data: lineData.markPointData,
              label: {
                // color:'green',
                normal: {
                  formatter: function(t) {
                    //  console.log(t)
                    var name = t.name
                    var yaliPx = t.data.coord[1]
                    return '' + name + '：' + (yaliPx || '--')
                  }
                }
              },
              /* itemStyle:{
                color:'#ff0',
                borderColor:'green'

              }, */
              tooltip: {
                formatter: function(param) {
                  return param.name + '<br>' + (param.data.coord || '');
                }
              }
            },
            markLine: {
              name: '压力位',
              symbol: ['none', 'none'],
              data: lineData.markLineData,
              lineStyle: {
                normal: {
                  color: '#ca4941',
                  type: 'solid'
                }
              }
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: lineData.ma20,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#e75443',
                opacity: 0.5
              }
            }
          },
          {
            name: 'MA60',
            type: 'line',
            data: lineData.ma60,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#6999d1',
                opacity: 0.5
              }
            }
          },
          {
            name: 'MA120',
            type: 'line',
            data: lineData.ma120,
            showSymbol: false,
            lineStyle: {
              normal: {
                color: '#f6bc4d',
                opacity: 0.5
              }
            }
          },
          /* name: 'Volume',
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#7fbe9e'
            },
            emphasis: {
                color: '#140'
            }
        },
        data: volumes */
          {
            name: '成交量',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: lineData.vols,
            barCategoryGap: '3', // 需要根据宽度定
            itemStyle: {
              normal: {
                color: '#7fbe9e'
              },
              emphasis: {
                color: '#140'
              }
              /* normal: {
                color: function(params) {
                  return lineData.kdata[params.dataIndex][1] > lineData.kdata[params.dataIndex][0] ? config.upColor : config.downColor
                }
              } */
            }
          }

        ]
      }
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
      //          })
    },
    checkStatus(status) {
      if (status === 1) {
        return 'red'
      } else if (status === -1) {
        return 'green'
      } else {
        return 'lightcolor'
      }
    }
    /* ,
    formatDate(datestr) {
      return formatDateStr(datestr, 'yyyyMMdd', 'yyyy-MM-dd')
    } */
  },
  watch: {
    /* stockCode() {
       if (!this.stockCode) {
         console.info('[component:stock-kline]:stockCode is necessary!')
         return
       }
       this.$store.dispatch('clinicShares/queryIndexFace')
     },*/
    /* lineData() {
      this.initKline()
    } */
  },

  mounted() {
    /* if (!this.stockCode) {
       return
     } */
    /* this.$store.dispatch('stock/queryKline', {
      stockCode: this.stockCode
    })
    this.$store.dispatch('stock/queryMkt', {
      stockCode: this.stockCode
    }) */

    this.initKline()

  }

})
</script>
