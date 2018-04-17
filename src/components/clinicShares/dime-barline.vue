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
    clear: both;
    margin: 0 5px 6px 0;
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
    padding-left: 5px;
    font-size: 14px;
}
</style>
<template>
<div class="dime-kline">
  <div v-for="(inFace,index) of indexFace" v-if="index===2">
    <div class="kline-title">
      {{inFace.title}}<span class="assess1" :class="checkStatus(inFace.status)">{{inFace.tag==null?'--':inFace.tag}}</span>
    </div>
    <div class="kline-title2">{{inFace.describe}}</div>

  </div>

  <div class="kline-charts" ref="barChart">

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
  props: ['innerCode'],
  data() {
    return {
      showX: true
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
          day: [],
          days5: [],
          vols: []
        }
        // console.log(state.clinicShares.indexFace[0].tag)
        var fundFace = state.clinicShares.indexFace;
        // console.log(fundFace)
        // console.log(this.formatDate)
        // var oldOption = this.$refs.barChart.getOption();
        // var data = oldOption.series[0].data;
        // var dataTime = oldOption.xAxis[0].data;
        fundFace.forEach((alls, index) => {
          if (index === 2) {
            // console.log(item.datas.data[0].prevClosePx)
            const klineData = [].concat(alls.datas.data).reverse()

            klineData.forEach((item) => {
              let time = ''
              const day = Number(item.today / 100000000).toFixed(2)
              const days5 = Number(item.fiveDay / 100000000).toFixed(2)

              time = (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length)
              data.times.push(time)
              data.tradeTimeArr.push(time)
              data.day.push(day)
              data.days5.push(days5)

            })

          }
        })

        return data

      }

    })
  },
  methods: {
    initKline() {
      this.chart = echarts.getInstanceByDom(this.$refs.barChart) || echarts.init(this.$refs.barChart)
      // console.log(document.getElementsByClassName('kline-charts'))
      // this.chart = echarts.init(document.getElementsByClassName('kline-charts')[0])              
      this.$store.dispatch('clinicShares/queryIndexFace', {
        innerCode: this.innerCode
      }).then(() => {
        this.drawCharts()
      })

    },
    drawCharts() {
      const lineData = this.lineData
      const opt = {

        legend: {
          left: 3,
          top: 0,
          itemWidth: 20,
          itemHeight: 10,
          textStyle: {
            color: '#c9d0d7'
          },
          data: [{
              name: '当日主力净流入',
              icon: 'rect'
            },
            {
              name: '近5日主力净流入',
              icon: 'line',
              backgroundColor: '#1984ea'
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
              if (i === 0) {
                s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value
              }
              if (i === 1) {
                s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' +
                  params[i].seriesName + ' : ' + params[i].value
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

          data: lineData.times
        },
        yAxis: {
          type: 'value',
          name: '单位：亿',
          nameTextStyle: {
            color: '#c9d0d7',
            padding: [0, 0, -10, 60]
          },
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
        /* xAxis: [{
                 type: 'category',
                 boundaryGap: false,
                 data: lineData.times,
                 axisLine: {
                   onZero: false,
                   lineStyle: {
                     color: '#23272c'
                   }
                 },
                 axisLabel: {
                   align: 'left',
                   textStyle: {
                     color: '#c9d0d7'
                   }
                 }
             }],
         
         yAxis: 
             [{
                 type: 'value',
                 scale: true,
                 name: '价格',
                  max: 20,
                 min: 0,
                 boundaryGap: [0.2, 0.2] 
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
                 axisLabel: {
                   formatter: '{value}',
                   textStyle: {
                     color: '#c9d0d7'
                   }
                 }
             }], */

        /* series: [
             {
                 name:'柱子',
                 type:'bar',
                 xAxisIndex: 1,
                 yAxisIndex: 1,
                 data:lineData.day
             },
             {
                 name:'折线',
                 type:'line',
                 data:lineData.days5
             }
         ] */
        series: [{
            data: lineData.day,
            name: '当日主力净流入',
            type: 'bar',
            barWidth: 28,
            stack: '当日主力净流入'
          },
          {
            data: lineData.days5,
            name: '近5日主力净流入',
            type: 'line',
            symbol: 'none',
            stack: '近5日主力净流入'
          }
        ],
        color: ['#ca4941', '#1984ea'],
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
          right: 10,
          top: '19%',
          height: '70%',
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
    innerCode: function() {
      this.initKline()
    }
  },

  mounted() {
    console.log(this.indexFace.title)
    this.initKline()

  }

})
</script>
