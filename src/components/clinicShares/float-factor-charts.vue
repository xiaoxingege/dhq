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
    /*float: left;*/
    margin: 0 5px 6px 0;
    /*width: 49%;*/
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
      {{baseFace.title}}<span class="assess1" :class="checkStatus(baseFace.status)">{{baseFace.tag==null?'':baseFace.tag}}</span>
    </div>
    <div class="kline-title2">{{baseFace.describe==null?'':baseFace.describe}}</div>

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
// import config from '../../z3tougu/config'
export default ({
  props: ['baseFace', 'dataIndex', 'floatYname', 'legendName1', 'legendName2', 'legendShow', 'innerCode'],
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
        name1: '未来20日上涨概率'
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
      const klineData = [].concat(this.baseFace.datas.data)
      // console.log(this.dataIndex)
      if (this.dataIndex === 0) {
        this.legendNames = this.legendName1
      } else if (this.dataIndex === 1) {
        this.legendNames = this.legendName2
      } else {
        this.legendNames = this.legendName3
      }
      klineData.forEach((item, index) => {
        const winRate20day = Number(item.winRate20day * 100).toFixed(2)
        const range = item.range
        this.data.range.push(range)
        //  console.log(this.baseFace.range)
        if (this.baseFace.range === range) {
          var newValue = {}
          // this.data.rangeYdata.push(range)
          newValue = {
            value: winRate20day,
            itemStyle: {
              normal: {
                color: '#1984ea'
              }
            }
          }
          this.data.ydata.push(newValue)
        } else {
          this.data.ydata.push(winRate20day)
        }
        // console.log(this.data.ydata)
      })

      this.initLine()
    },
    initLine() {
      this.chart = echarts.getInstanceByDom(this.$refs.lineCharts) || echarts.init(this.$refs.lineCharts)

      if (this.baseFace) {
        this.drawCharts()

      }

    },
    drawCharts() {
      const lineData = this.data
      const legendNames = this.legendNames
      // console.log(lineData.rangeYdata)
      const opt = {

        legend: {
          show: this.legendShow,
          left: 5,
          top: 0,
          itemHeight: 2,
          itemWidth: 20,
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
              icon: 'image://../src/assets/images/z3img/icon-line1.png'

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
          name: this.floatYname,
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
            data: lineData.ydata,
            name: legendNames.name1,
            type: 'bar',
            barWidth: 50,
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

          }

        ],
        // color: ['#ca4941', '#1984ea'],
        grid: {
          // width: '97%',
          /* width: '100%',
          height: '80%',
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
