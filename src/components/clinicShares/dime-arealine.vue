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
  <div v-for="(inFace,index) of indexFace" v-if="index===1">
    <div class="kline-title">
      {{inFace.title}}<span class="assess1" :class="checkStatus(inFace.status)">{{inFace.tag==null?'--':inFace.tag}}</span>
    </div>
    <div class="kline-title2">{{inFace.describe}}</div>

  </div>

  <div class="kline-charts" ref="arealineChart">

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
          price: [],
          proportion: [],
          proportionLast: [],
          vols: [],
          currPirce: []
        }
        // console.log(state.clinicShares.indexFace[0].tag)
        var fundFace = state.clinicShares.indexFace;
        // console.log(fundFace)
        // console.log(this.formatDate)
        // var oldOption = this.$refs.arealineChart.getOption();
        // var data = oldOption.series[0].data;
        // var dataTime = oldOption.xAxis[0].data;
        fundFace.forEach((alls, index) => {
          if (index === 1) {
            // console.log(item.datas.data[0].prevClosePx)
            const klineData = [].concat(alls.datas.data)
            const currPirce = alls.datas.currPirce
            data.currPirce.push(currPirce)
            klineData.forEach((item) => {
              // let time = ''
              const price = Number(item.price)
              const proportion = Number(item.proportion * 100).toFixed(2)

              /* time = (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length) */
              //  data.times.push(time)
              // data.tradeTimeArr.push(time)
              data.price.push(price)
              //  data.proportion.push(proportion)
              if (price >= currPirce) {
                // data.proportionLast.push(null)
                // data.proportion.push(proportion)
                data.proportion.push(proportion)
                data.proportionLast.push(null)

              } else {
                // data.proportionLast.push(proportion)
                // data.proportion.push(null)
                data.proportion.push(null)
                data.proportionLast.push(proportion)
              }
              console.log(data.proportion)
              console.log(data.proportionLast)
              //  console.log(data.price)


            })

          }
        })

        return data

      }

    })
  },
  methods: {
    initKline() {
      this.chart = echarts.getInstanceByDom(this.$refs.arealineChart) || echarts.init(this.$refs.arealineChart)
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

        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          },
          formatter: function(params) {
            var s = ''
            for (var i = 0; i < params.length; i++) {
              if (i === 0) {
                s = s + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ' : ' + params[i].value
              }

            }
            return s
          }
        },

        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          scale: true,
          splitLine: {
            show: false,
            lineStyle: {
              color: '#c9d0d7'
            }
          }
        }],
        yAxis: [

          {
            type: 'category',
            show: false,
            boundaryGap: false,
            data: lineData.price,
            scale: true,
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              show: true
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#c9d0d7'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: '#c9d0d7'
              }
            }
          }
        ],
        series: [{
            name: '筹码分布',
            type: 'line',
            stack: '筹码分布',
            symbol: 'none',
            smooth: true,
            areaStyle: {
              normal: {
                color: config.upColor
              }

            },
            lineStyle: {
              normal: {
                color: '#fff',
                opacity: 0
              }
            },
            data: lineData.proportion,
            markLine: {
              name: '当前价',
              symbol: ['none', 'none'],
              data: [{
                yAxis: lineData.currPirce
              }],
              lineStyle: {
                normal: {
                  color: '#c9d0d7',
                  type: 'solid'
                }
              }
            }
          },
          {
            name: '筹码分布',
            type: 'line',
            stack: '筹码分布',
            symbol: 'none',
            areaStyle: {
              normal: {
                color: config.downColor
              }
            },
            data: lineData.proportionLast
          }
        ]
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

  },

  mounted() {
    this.initKline()

  }

})
</script>
