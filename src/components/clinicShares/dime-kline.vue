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
    font-family: "Microsoft YaHei";
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
    font-size: 14px;
    font-weight: 900;
}
.kline-title2 {
    height: 62px;
    padding: 10px 5px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
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
    font-size: 14px;
}
</style>
<template>
<div class="dime-kline">
  <div>
    <div class="kline-title">
      {{indexFace.title}}<span class="assess1" :class="checkStatus(indexFace.status)">{{indexFace.tag==null?'':indexFace.tag}}</span>
    </div>
    <div class="kline-title2">{{indexFace.describe==null?'':indexFace.describe}}</div>

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
  props: ['innerCode', 'indexFace'],
  data() {
    return {
      showX: true,
      data: {
        times: [],
        tradeTimeArr: [],
        kdata: [],
        markLineData: [],
        markPointData: [],
        vols: []
      }

    }
  },
  computed: {
    ...mapState({

      lineData: state => {
        var data = {
          times: [],
          tradeTimeArr: [],
          kdata: [],
          markLineData: [],
          markPointData: [],
          vols: []
        }
        return data

      },
      xLabelInterval() {
        let interval = 17
        return interval
      }
    })
  },
  methods: {
    init() {

      const klineData = [].concat(this.indexFace.datas.data).reverse()
      const stressPrice = Number(this.indexFace.datas.stressPrice).toFixed(2)
      //     const stressPrice = '0'
      const currPirce = Number(this.indexFace.datas.currPirce).toFixed(2)
      //  const currPirce = '0'
      const supportPrice = Number(this.indexFace.datas.supportPrice).toFixed(2)
      var data = this.data
      //   const supportPrice = '0'
      klineData.forEach((item) => {
        let time = ''
        time = (item.endDate + '').substring(0, 4) + '-' + (item.endDate + '').substring(4, 6) + '-' + (item.endDate + '').substring(6, (item.endDate + '').length)
        data.times.push(time)
        data.tradeTimeArr.push(time)

        let openPx = item.openPx.toFixed(2)
        let closePx = item.closePx.toFixed(2)
        const highPx = item.highPx.toFixed(2)
        const lowPx = item.lowPx.toFixed(2)
        const volume = item.volume.toFixed(2)
        const prevClosePx = item.prevClosePx.toFixed(2)
        data.kdata.push([openPx, closePx, highPx, lowPx])
        data.markLineData.push([{
            coord: [data.times[0], stressPrice],
            lineStyle: {
              normal: {
                color: config.upColor,
                type: 'solid'
              }
            }
          },
          {
            coord: [data.times[data.times.length - 1], stressPrice],
            lineStyle: {
              normal: {
                color: config.upColor,
                type: 'solid'
              }
            }
          }
        ], [{
            coord: [data.times[0], currPirce],
            lineStyle: {
              normal: {
                color: '#c9d0d7',
                type: 'solid'
              }
            }
          },
          {
            coord: [data.times[data.times.length - 1], currPirce],
            lineStyle: {
              normal: {
                color: '#c9d0d7',
                type: 'solid'
              }
            }
          }
        ], [{
            coord: [data.times[0], supportPrice],
            lineStyle: {
              normal: {
                color: '#1984ea',
                type: 'solid'
              }
            }
          },
          {
            coord: [data.times[data.times.length - 1], supportPrice],
            lineStyle: {
              normal: {
                color: '#1984ea',
                type: 'solid'
              }
            }
          }
        ])
        data.markPointData.push({
          name: '压力位',
          coord: [data.times[0], stressPrice],
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

              color: '#141518',
              borderColor: config.upColor,
              borderWidth: 1,
              opacity: 0.5,
              lineStyle: {
                color: config.upColor,
                type: 'solid',
                width: 1
              },
              label: {
                show: true,
                // fontWeight:'bold',
                color: config.upColor,
                fontSize: 12

              }
            }
          }

        }, {
          name: '当前价',
          coord: [data.times[0], currPirce],
          symbol: 'rect',
          symbolSize: [88, 22],
          itemStyle: {
            normal: {
              color: '#141518',
              borderColor: '#c9d0d7',
              borderWidth: 1,
              opacity: 0.5,
              lineStyle: {
                color: '#c9d0d7',
                type: 'solid',
                width: 1
              },
              label: {
                show: true,
                // fontWeight:'bold',
                color: '#c9d0d7',
                fontSize: 12

              }
            }
          }

        }, {
          name: '支撑位',
          coord: [data.times[0], supportPrice],
          symbol: 'rect',
          symbolSize: [88, 22],
          itemStyle: {
            normal: {
              color: '#141518',
              borderColor: '#1984ea',
              borderWidth: 1,
              opacity: 0.5,
              lineStyle: {
                color: '#1984ea',
                type: 'solid',
                width: 1
              },
              label: {
                show: true,
                // fontWeight:'bold',
                color: '#1984ea',
                fontSize: 12

              }
            }
          }
        })

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
          data.vols.push('')
        }
      }
      // return data

      this.initKline()
    },
    initKline() {
      this.chart = echarts.getInstanceByDom(this.$refs.klineChart) || echarts.init(this.$refs.klineChart)

      if (this.indexFace) {
        this.drawCharts()

      }
    },
    drawCharts() {
      const lineData = this.data
      const opt = {
        toolbox: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          formatter: function(t) {
            var obj = t[0];
            var time = obj.name; // 时间
            var axisid = obj.axisIndex
            var objarr;
            var openPx;
            var closePx;
            var highPx;
            var lowPx;
            var volume;
            if (axisid === 1) {
              //  console.log(t[1])
              objarr = t[1].value; // 开盘 收盘  最高 最低  成交量
              if (objarr[0] >= 0) {
                openPx = objarr[1];
                closePx = objarr[2];
                highPx = objarr[3];
                lowPx = objarr[4];
                volume = t[0].value;

              }
            } else if (axisid === 0) {
              objarr = obj.value; // 开盘 收盘  最高 最低  成交量
              if (objarr[0] >= 0) {
                openPx = objarr[1];
                closePx = objarr[2];
                highPx = objarr[3];
                lowPx = objarr[4];
                volume = t[1].value;

                /*  return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
                    '<br/>最低价：' + (lowPx || '--') + '<br/>成交量：' + (volume || '--'); */
              }
            }

            if (volume > 10000000000) {
              volume = (volume / 10000000000).toFixed(2) + '亿手'
            } else if (volume > 1000000) {
              volume = (volume / 1000000).toFixed(2) + '万手'
            } else {
              volume = (volume / 100).toFixed(2) + '手'
            }
            return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
              '<br/>最低价：' + (lowPx || '--') + '<br/>成交量：' + (volume || '--');
          }
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

        grid: [{
            left: 45,
            right: 15,
            top: 10,
            height: '60%',
            show: false
          },
          {
            left: 45,
            right: 15,
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
              data: lineData.markLineData
              /* lineStyle: {
                normal: {
                  color: '#ca4941',
                  type: 'solid'
                }
              } */
            }
          },

          {
            name: '成交量',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: lineData.vols,
            // barCategoryGap: '3', // 需要根据宽度定
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
      if (status === 2) {
        return 'red'
      } else if (status === 1) {
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
    innerCode: function() {
      this.init()
    }
  },
  mounted() {

    this.init()

  }

})
</script>
