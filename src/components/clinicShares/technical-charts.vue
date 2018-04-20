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
    height: 62px;
    padding: 10px 5px;
}
.techline-title {
    line-height: 41px;
    border-bottom: 1px solid $lineAndTitleColor;
    font-size: 14px;
}
</style>
<template>
<div class="dime-tech">
  <div>
    <div class="techline-title">
      {{techFace.title}}<span class="assess1" :class="checkStatus(techFace.status)">{{techFace.tag==null?'--':techFace.tag}}</span>
    </div>
    <div class="techline-title2">{{techFace.describe==null?'':techFace.describe}}</div>

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
  props: ['techFace', 'dataIndex', 'legendName1', 'legendName2', 'legendShow', 'innerCode'],
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
        growthR: [],
        growthRate: [],
        growthRateLast: [],
        day: [],
        days5: [],
        vols: [],
        range: [],
        rangeYdata: []
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
      const klineData = [].concat(this.techFace.datas.data.idxData)
      // console.log(this.dataIndex)
      if (this.dataIndex === 0) {
        this.legendNames = this.legendName1
        // console.log(this.legendNames)
      } else if (this.dataIndex === 1) {
        this.legendNames = this.legendName2
      } else {
        this.legendNames = this.legendName3
      }
      klineData.forEach((item, index) => {
        const winRate3day = item.winRate3day
        const winRate20day = item.winRate20day
        // const growthRate = item.growthRate
        const range = item.range
        /* time = (item.tradeDate + '').substring(0, 4) + '-' + (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length) */
        this.data.range.push(range)

        // this.data.ydata.push(winRate20day)

        if (this.techFace.range === range) {
          var newValue3 = {}
          var newValue20 = {}
          // this.data.rangeYdata.push(range)
          newValue3 = {
            value: winRate3day,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  color: config.upColor,
                  fontSize: 12,
                  fontWeight: 'bold',
                  formatter: function(p) {
                    return p.value === 0 ? '' : (p.value + '%');
                  }
                }
              }
            }
          }
          newValue20 = {
            value: winRate20day,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: 'top',
                  color: config.upColor,
                  fontSize: 12,
                  fontWeight: 'bold',
                  formatter: function(p) {
                    return p.value === 0 ? '' : (p.value + '%');
                  }
                }
              }
            }
          }
          this.data.winRate3.push(newValue3)
          this.data.winRate20.push(newValue20)
        } else {

          this.data.winRate3.push(winRate3day)
          this.data.winRate20.push(winRate20day)
        }
        // console.log(this.data.ydata)
      })
      /* var newVols = {
           value: volume, // 万手
           itemStyle: {
             normal: {
               color: closePx < prevClosePx ? config.downColor : config.upColor,
               borderColor: closePx < prevClosePx ? config.downColor : config.upColor
             }
           }
         }
         data.vols.push(newVols) */
      this.initLine()
    },
    initLine() {
      this.chart = echarts.getInstanceByDom(this.$refs.lineCharts) || echarts.init(this.$refs.lineCharts)
      // console.log(document.getElementsByClassName('kline-charts'))
      // this.chart = echarts.init(document.getElementsByClassName('kline-charts')[0])  

      if (this.techFace) {
        this.drawCharts()

      }

    },
    drawCharts() {
      const lineData = this.data
      const legendNames = this.legendNames
      console.log(legendNames.name1)
      const opt = {

        legend: {
          show: this.legendShow,
          left: 3,
          top: -5,
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            color: '#c9d0d7',
            fontSize: 12
          },
          data: [{
              name: legendNames.name1,
              icon: 'rect'
            },
            {
              name: legendNames.name2,
              icon: 'rect'

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
            var s = ''
            for (var i = 0; i < params.length; i++) {
              if (i === 0) {
                s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value + '%' + '</br>'
              }
              if (i === 1) {
                s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value + '%'
              }

            }
            return s
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
          data: lineData.range
        },
        yAxis: {

          // type: 'category', 
          type: 'value',
          // name: this.floatYname,
          // data: ['0', '50%', '100%'],
          splitNumber: 2,
          min: 0,
          max: 100,
          /* min:0,
          max:100,
          axisLabel: {
              formatter: '{value} %'
          }, */
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
        },

        series: [{
            data: lineData.winRate3,
            name: legendNames.name1,
            type: 'bar',
            barWidth: 35,
            stack: legendNames.name1,
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#c9d0d7',
                formatter: function(params) {
                  return params.value + '%'
                }
              }
            },

            itemStyle: {
              normal: {
                color: '#525a65'

              }
            },
            markLine: {
              silent: true,
              symbol: ['none', 'none'],
              data: [{
                yAxis: 50
              }],
              label: {
                normal: {
                  show: false
                }
              }

            }

          },
          {
            data: lineData.winRate20,
            name: legendNames.name2,
            type: 'bar',
            barWidth: 35,
            stack: legendNames.name2,
            label: {
              normal: {
                show: true,
                position: 'top',
                color: '#c9d0d7',
                formatter: function(params) {
                  return params.value + '%'
                }
              }
            },

            itemStyle: {
              normal: {
                color: '#1984ea'

              }
            }

          }

        ],
        // color: ['#ca4941', '#1984ea'],
        grid: {
          // width: '97%',
          /* width: '100%',
          height: '80%',
          left: 0,
          top: '10%',
          show: true,
          borderColor: '#2A2E36',
          containLabel: true */
          left: 45,
          right: 10,
          top: '10%',
          height: '81%',
          show: false
        }
      };
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
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

  },
  watch: {
    /* techFace() {
        this.initLine()
      } */
    innerCode: function() {
      this.init()
    }
  },

  mounted() {
    this.init()
    // console.log(this.techFace)
    // this.initLine()


  }

})
</script>
