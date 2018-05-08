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

.c_txt {
    color: $wordsColorBase;
}
.lightcolor {
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

.dime-kline {
    padding: 10px;
    /*float: left;*/
    margin: 0 5px 6px 0;
    /*width: 49%;*/
}
.kline-title {
    line-height: 41px;
    border-bottom: 1px solid $lineAndTitleColor;
    font-size: 14px;
}
.kline-title2 {
    padding: 10px 7px;
    font-size: 14px;
}
.kline {
    height: 264px;
}
.kline-charts {

    height: 264px;
    width: 100%;
}
.assess1 {
    padding-left: 9px;
    font-size: 14px;
}
.dime-tech {
    padding: 10px;
    margin: 0 5px 6px 0;
}
.techline-title2 {
    font-size: 14px;
    height: 22px;
    padding: 10px 5px;
}
.techline-title {
    line-height: 41px;
    border-bottom: 1px solid $lineAndTitleColor;
    font-size: 14px;
    font-weight: 900;
}
</style>
<template>
<div class="dime-tech">
  <div>
    <div class="techline-title">
      {{industryFace.title}}<span class="assess1" :class="checkStatus(industryFace.status)">{{industryFace.tag==null?'':industryFace.tag}}</span>
    </div>
    <div class="techline-title2">{{industryFace.describe==null?'':industryFace.describe}}</div>

  </div>

  <div class="kline-charts" ref="lineCharts">

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
  props: ['industryFace', 'dataIndex', 'legendName1', 'legendName2', 'legendShow', 'innerCode'],
  data() {
    return {
      showX: true,
      legendNames: {},
      legendName1: {
        name1: '营业收入增长率',
        name2: '预测营业收入增长率'
      },

      legendName2: {
        name1: '净利润增长率',
        name2: '预测净利润增长率'
      },
      legendName3: {
        name1: '未来3日上涨概率',
        name2: '未来20日上涨概率'
      },
      // themeColor:'transparent',
      borderType: 'dashed',
      borderWidth: 3,
      borderColor: '',
      lineType: 'solid',
      data: {
        times: [],
        tradeTimeArr: [],
        ydata: [],
        winRate3: [],
        winRate20: [],
        day: [],
        days5: [],
        vols: [],
        range: [],
        rangeYdata: [],
        infoIndex: [],
        induIndex: [],
        induName: ''
      }
    }
  },
  computed: {
    ...mapState({
      lineData: state => {
        var data = {
          times: [],
          tradeTimeArr: [],
          ydata: [],
          growthR: [],
          growthRate: [],
          growthRateLast: [],
          day: [],
          days5: [],
          vols: [],
          rangeYdata: []
        }
        return data

      }

    })
  },
  methods: {
    init() {
      const klineData = [].concat(this.industryFace.datas.datas)
      if (this.dataIndex === 0) {
        this.legendNames = this.legendName1
      } else if (this.dataIndex === 1) {
        this.legendNames = this.legendName2
      } else {
        this.legendNames = this.legendName3
      }
      this.data.induName = this.industryFace.datas.induName
      if (klineData.length <= 60) {
        klineData.forEach((item, index) => {
          /* if (index === 0) {
            induIndex.push(0)
            hs300ChngPct.push(0)
          } else {
            var indexs = getIndex(item.tradeMin)
            induIndex[indexs] = Number(item.induIndex).toFixed(2)
            hs300ChngPct[indexs] = Number(item.hs300ChngPct).toFixed(2)
            // induIndex.push(Number(item.induIndex).toFixed(2))
            // hs300ChngPct.push(Number(item.hs300ChngPct).toFixed(2))
          } */

          const infoIndex = Number(item.infoIndex).toFixed(2) // 舆情指数
          const induIndex = Number(item.induIndex).toFixed(2) // 行业指数
          let time = ''
          time = (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length)
          this.data.times.push(time)
          this.data.tradeTimeArr.push(time)
          if (index === 0) {
            this.data.infoIndex.push('0')
            this.data.induIndex.push('0')
          } else {
            this.data.infoIndex.push(infoIndex)
            this.data.induIndex.push(induIndex)

          }
          console.log(this.data.infoIndex)
          console.log(this.data.induIndex)

        })
      }

      this.initLine()
    },
    initLine() {
      this.chart = echarts.getInstanceByDom(this.$refs.lineCharts) || echarts.init(this.$refs.lineCharts)

      if (this.industryFace) {
        this.drawCharts()

      }

    },
    drawCharts() {
      const lineData = this.data
      //  const legendNames = this.legendNames
      const opt = {

        legend: {
          show: this.legendShow,
          left: 3,
          top: -6,
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            color: '#c9d0d7',
            fontSize: 12
          },
          data: [{
              name: this.legendName1,
              icon: 'line'
            },
            {
              name: this.legendName2,
              icon: 'line'

            }
          ]
        },
        tooltip: {
          trigger: 'axis',
          padding: [10, 55, 10, 20],
          textStyle: {
            align: 'left'
          },
          showContent: true,
          axisPointer: {
            type: 'cross',
            label: {
              show: true,
              formatter: function(params) {
                let yLabelData = ''
                if (params.seriesData.length > 0) {
                  yLabelData = params.seriesData[0].data === 0 ? params.seriesData[1].data : params.seriesData[0].data
                  return params.seriesData[0].name
                } else {
                  if (typeof yLabelData !== 'undefined') {
                    return yLabelData
                  } else {
                    return ''
                  }
                }
              },
              // backgroundColor: '#777',
              // padding:[20,0,10,10],
              textStyle: {
                /* color:'#000',
                 fontWeight:'bold'*/
              }
            },
            crossStyle: {
              color: '#666'
            }
          },
          formatter: function(params) {
            if (params.length) {
              if (params[0].value !== '') {
                var boxHtml = '<div style="color:#c9d0d7;">' + params[0].name + '<br/>'
              }
              for (var i = 0; i < params.length; i++) {
                var param = params[i]
                if (param.value !== '') {
                  if (i === 0) {
                    boxHtml += '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + param.color + '\'></span><span style="color:#c9d0d7;">' + ' ' + param.seriesName + ': ' + param.value + '%<br/></span></div>'
                  }
                  if (i === 1) {
                    boxHtml += '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + param.color + '\'></span><span style="color:#c9d0d7;">' + ' ' + param.seriesName + ': ' + param.value + '<br/></span></div>'
                  }

                }
              }
              return boxHtml
            }
          }
        },
        xAxis: {
          // interval:0,
          type: 'category',
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: '#23272c'
            }
          },
          axisLine: {
            onZero: true,
            symbol: ['none', 'arrow'],
            lineStyle: {
              color: '#23272c',
              type: 'solid'
            }
          },
          axisLabel: {
            // show:false
            color: '#c9d0d7'
          },
          axisTick: {
            show: false,
            inside: true,
            alignWithLabel: false
          },
          data: lineData.times
        },
        yAxis: [{
          show: true,
          // type: 'category', 
          type: 'value',
          // name: this.floatYname,
          position: 'left',
          nameTextStyle: {
            color: '#c9d0d7',
            padding: [0, 0, 0, 110]
          },

          nameGap: 6,
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: '#23272c'
            }
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
              color: '#23272c'
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: false
          },
          axisLabel: {
            formatter: function(val) {
              return val + '%'
            },
            color: '#c9d0d7'
          }
          /* ,
                     min: 'dataMin',
                     max: 'dataMax' */
        }, {
          show: true,
          // type: 'category', 
          type: 'value',
          // name: this.floatYname,
          position: 'right',
          nameTextStyle: {
            color: '#c9d0d7',
            padding: [0, 0, 0, 110]
          },

          nameGap: 6,
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: '#23272c'
            }
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            lineStyle: {
              color: '#23272c'
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: false
          },
          axisLabel: {
            formatter: function(val) {
              return val
            },
            color: '#c9d0d7'
          }
          /* ,
                     min: 'dataMin',
                     max: 'dataMax' */
        }],

        series: [{
            yAxisIndex: 0,
            data: lineData.induIndex,
            name: this.legendName1,
            type: 'line',
            barWidth: 35,
            symbol: 'none',
            stack: this.legendName1,

            itemStyle: {
              normal: {
                color: config.upColor

              }
            }

          },
          {
            yAxisIndex: 1,
            data: lineData.infoIndex,
            name: this.legendName2,
            type: 'line',
            barWidth: 35,
            symbol: 'none',
            stack: this.legendName2,
            /* label: {
              normal: {
                show: true,
                position: 'top',
                color: '#c9d0d7',
                formatter: function(params) {
                  return params.value + '%'
                }
              }
            },
*/
            itemStyle: {
              normal: {
                color: '#1984ea'

              }
            }

          }

        ],
        // color: ['#ca4941', '#1984ea'],
        grid: [{
          // width: '97%',
          /* width: '100%',
          height: '80%',
          left: 0,
          top: '10%',
          show: true,
          borderColor: '#2A2E36',
          containLabel: true */

          /* left: 45,
           right: 10,
           top: '10%',
           height: '81%',
           show: false */
          // bottom: '16%',
          left: 45,
          right: 22,
          height: '70%',
          show: false
        }]
      };
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
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
