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
    font-weight: 900;
}
.kline-title2 {
    padding: 10px 5px;
    height: 62px;
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
        day: [],
        days5: [],
        vols: []
      }
    }
  },
  computed: {
    ...mapState({


    })
  },
  methods: {
    init() {

      var data = this.data
      const klineData = [].concat(this.indexFace.datas.data).reverse()

      klineData.forEach((item) => {
        let time = ''
        const day = Number(item.today / 10000).toFixed(2)
        const days5 = Number(item.fiveDay / 10000).toFixed(2)

        time = (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length)
        data.times.push(time)
        data.tradeTimeArr.push(time)
        // data.day.push(day)
        data.days5.push(days5)
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
        console.log(day)
        var newDay = {
          value: day,
          itemStyle: {
            normal: {
              color: day <= 0 ? config.downColor : config.upColor
            }
          }
        }
        data.day.push(newDay)
      })

      this.initKline()
    },
    initKline() {
      this.chart = echarts.getInstanceByDom(this.$refs.barChart) || echarts.init(this.$refs.barChart)

      if (this.indexFace) {
        this.drawCharts()

      }
    },
    drawCharts() {
      const lineData = this.data
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
          name: '单位：万',
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
            stack: '近5日主力净流入',
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
          // containLabel: true */
          /* left: 55,*/
          left: 75,
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
