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
    margin: 0 5px 6px 0;
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
.pie-charts {
    height: 264px;
    width: 100%;
}
.assess1 {
    padding-left: 5px;
    font-size: 14px;
}
.in-content-no {
    text-align: center;
    height: 323px;
    position: relative;
}
.no-data {
    width: 115px;
    height: 81px;
    display: inline-block;
    margin-top: 70px;
    background: url("../../assets/images/z3img/no-data2.png") no-repeat;
}
.no-data-txt {
    text-align: center;
    color: #808ba1;
    font-size: 18px;
    padding-top: 12px;
}
</style>
<template>
<div class="dime-kline">
  <div v-for="(inFace,index) of indexFace" v-if="index===3">
    <div class="kline-title" v-if='statusType==11 || statusType==12 || statusType==13 || statusType==20'>主力资金控盘度</div>
    <div class="kline-title" v-else>
      {{inFace.title}}<span class="assess1" :class="checkStatus(inFace.status)">{{inFace.tag===null?'':inFace.tag}}</span>
    </div>
    <div class="kline-title2" v-if='statusType == 10'>{{inFace.describe==null?'':inFace.describe}}</div>

  </div>
  <div>
    <div class="in-content-no" v-if='statusType==11 || statusType==12 || statusType==13 || statusType==20'>
      <div class="no-data"></div>
      <div class="no-data-txt">{{status[statusType]}}</div>
    </div>
    <div class="charts-box display-box" v-else>
      <div class="kline-charts box-flex-1" ref="lineChart">

      </div>
      <div class="pie-charts box-flex-1" ref="pieChart">

      </div>
    </div>
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
  props: ['innerCode', 'statusType'],
  data() {
    return {
      showX: true,
      status: {
        10: '正常上市',
        11: '股票停牌暂不评价',
        12: '退市调整期不予评价',
        13: '新股上市暂不评价',
        20: '退市调整期不予评价'
      }
    }
  },
  computed: {
    ...mapState({
      indexFace: state => state.clinicShares.indexFace,
      lineData: state => {
        var data = {
          times: [],
          tradeTimeArr: [],
          kdata: [],
          yData: [],
          xData: ['近3日', '近5日', '近10日'],
          mainValue: [],
          otherValue: [],
          yDataGreen: [],
          yDataRed: []
        }

        var fundFace = state.clinicShares.indexFace;
        fundFace.forEach((alls, index) => {
          if (index === 3) {
            const klineData = [].concat(alls.datas.data).reverse()
            klineData.forEach((item) => {
              /* let today = Number(item.day1 / 100000000).toFixed(2)
              let threeday = Number(item.day3 / 100000000).toFixed(2)
              const fiveday = Number(item.day5 / 100000000).toFixed(2)
              const tenday = Number(item.day10 / 100000000).toFixed(2) */
              //  let today = Number(item.day1 / 10000).toFixed(2)
              let threeday = Number(item.day3 / 10000).toFixed(2)
              const fiveday = Number(item.day5 / 10000).toFixed(2)
              const tenday = Number(item.day10 / 10000).toFixed(2)

              if (threeday <= 0) {
                data.yDataRed.push('-')
                data.yDataGreen.push(threeday)
              } else {
                data.yDataRed.push(threeday)
                data.yDataGreen.push('-')
              }
              if (fiveday <= 0) {
                data.yDataRed.push('-')
                data.yDataGreen.push(fiveday)
              } else {
                data.yDataRed.push(fiveday)
                data.yDataGreen.push('-')
              }
              if (tenday <= 0) {
                data.yDataRed.push('-')
                data.yDataGreen.push(tenday)
              } else {
                data.yDataRed.push(tenday)
                data.yDataGreen.push('-')
              }

              const mainValue = Number(alls.datas.mainChng)
              const otherValue = Number(100 - mainValue)
              data.mainValue.push({
                  value: mainValue,
                  name: '当前主力资金影响力',
                  itemStyle: {
                    normal: {
                      color: '#ca4941'
                    }
                  },
                  textStyle: {
                    color: '#c9d0d7'
                  }
                }, {
                  value: otherValue,
                  name: '其他资金',
                  itemStyle: {
                    normal: {
                      color: '#56a870'
                    }
                  },
                  textStyle: {
                    color: '#c9d0d7'
                  }
                }

              )

            })

          }
        })
        return data

      }

    })
  },
  methods: {
    initKline() {
      if (this.statusType === 10) {
        this.chart = echarts.getInstanceByDom(this.$refs.lineChart) || echarts.init(this.$refs.lineChart)
        this.chartPie = echarts.getInstanceByDom(this.$refs.pieChart) || echarts.init(this.$refs.pieChart)
      }
      this.$store.dispatch('clinicShares/queryIndexFace', {
        innerCode: this.innerCode
      }).then(() => {
        if (this.statusType === 10) {
          this.drawCharts()
          this.drawChartsPie()
        }
      })

    },
    drawCharts() {
      const lineData = this.lineData
      const opt = {
        title: {
          left: 1,
          top: -5,
          text: '近3、5、10日累计净流入',
          textStyle: {
            color: '#c9d0d7',
            align: 'left',
            fontWeight: 'normal',
            fontSize: 12
          }
        },
        legend: {
          left: 2,
          top: 20,
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            color: '#c9d0d7'
          },
          data: [{
              name: '净流入',
              icon: 'rect'
            },
            {
              name: '净流出',
              icon: 'rect'
            }

          ]
        },
        tooltip: {
          trigger: 'axis',
          padding: [10, 55, 10, 20],
          textStyle: {
            align: 'left',
            color: '#c9d0d7'
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
              backgroundColor: '#777',
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
              // console.log(params[i].value)
              if (params[i].value !== '-') {
                s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value + '万'
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
          axisLabel: {
            // show:false
            color: '#c9d0d7'
          },
          axisTick: {
            show: false,
            inside: true,
            alignWithLabel: false
          },

          data: lineData.xData
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false,
            lineStyle: {
              type: 'solid',
              color: '#23272c'
            }
          },
          axisTick: {
            show: false,
            alignWithLabel: false
          },
          axisLabel: {
            formatter: function(val) {
              return val
            },
            color: '#c9d0d7'
          }
        },
        series: [

          {
            name: '净流入',
            type: 'bar',
            stack: 'sum',
            barWidth: 28,
            itemStyle: {
              normal: {
                color: config.upColor
              }
            },
            data: lineData.yDataRed
          },
          {
            name: '净流出',
            type: 'bar',
            stack: 'sum',
            barWidth: 28,
            itemStyle: {
              normal: {
                color: config.downColor
              }
            },
            data: lineData.yDataGreen
          }
        ],
        // series: [{
        //   data: lineData.yData,
        //   name: '净流入',
        //   type: 'bar',
        //   barWidth: 28,
        //   stack: '净流入',
        //   itemStyle: {
        //       normal: {
        //         color: config.upColor
        //       }
        //   }
        // },
        // {
        //   data: lineData.yDataGreen,
        //   name: '净流出',
        //   type: 'bar',
        //   barWidth: 28,
        //   stack: '净流出',
        //   itemStyle: {
        //       normal: {
        //         color: config.downColor
        //       }
        //   }
        // }],
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
          left: 55,
          right: 0,
          top: '19%',
          height: '70%',
          // width: '95%',
          show: false
        }
      };
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
    },
    drawChartsPie() {
      const lineData = this.lineData
      const option = {
        title: {
          text: '当前主力资金影响力',
          x: 'center',
          /* left: -5,
          top: -2, */
          left: '37%',
          top: -5,
          textStyle: {
            color: '#c9d0d7',
            fontWeight: 'normal',
            fontSize: 12
          }
        },
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: '#c9d0d7'
          },
          formatter: '{b}: {d}%'
        },
        legend: {
          orient: 'vertical',
          x: 'center',
          left: '37%',
          itemWidth: 20,
          itemHeight: 10,
          top: 18,
          data: ['当前主力资金影响力', '其他资金'],
          textStyle: {
            color: '#c9d0d7',
            borderRadius: 0
          }
        },

        series: [{

          type: 'pie',
          radius: ['30%', '60%'],
          center: ['53%', '63%'],
          data: lineData.mainValue,
          startAngle: 280,

          itemStyle: {
            normal: {
              labelLine: {
                show: true,
                length: 0.1,
                lineStyle: {
                  type: 'solid',
                  color: '#c9d0d7'
                }

              },

              label: {
                color: '#c9d0d7',
                formatter: '{c}%'
                /* position:'center' */
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }

        }]

      };
      this.chartPie.setOption(option)
      window.addEventListener('resize', () => this.chartPie.resize(), false)
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
      this.initKline()
    },
    statusType: function() {
      this.initKline()
    }
  },

  mounted() {
    this.initKline()

  }

})
</script>
