<style lang="scss" scoped>
@import "../../assets/scss/style";
@import '../../assets/css/base.css';
* {
    text-align: justify;
    font-size: $fontSizeBase;
    color: $wordsColorBase;
    font-family: "Microsoft YaHei";
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

.gauge-wrap {}
.repay-time {
    text-align: center;
    padding-bottom: 8px;
    font-size: 16px;
}
.main {
    background: $bgConColor;
    padding: 13px 23px 0 4px;

}
.sud-title {
    font-size: 14px;
}
.sud-title2 {
    padding-bottom: 17px;
}
.charts-box {
    /* width: 50%; */
    width: 26%;
}
.txt-box {
    width: 50%;
    line-height: 24px;
}
.gauge-charts {
    height: 155px;
    width: 278px;
    margin: 0 auto;
    /*  position:relative;
   top: -21px; */
}
.week {
    font-size: 16px;
    padding-left: 10px;
}
</style>
<template>
<div class="gauge-wrap">
  <div class="repay-time">{{checkDate(summary.date) ||'--'}}<span class="week">{{checkDay(summary.date)||'--'}}</span></div>
  <div class="main display-box">
    <div class="box-flex-1 charts-box">
      <div class="sud-title fl">市场温度</div>
      <div class="gauge-charts" ref='gaugechart'></div>
    </div>
    <div class="box-flex-1 txt-box">
      <div class="sud-title sud-title2">复盘点评</div>
      <div class="comment" v-html="checkBr(summary.comment)"></div>
    </div>
  </div>
</div>
</template>
<script>
import config from '../../dhq/config'
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
export default {
  props: ['summary'],
  data() {
    return {

    }
  },
  watch: {
    summary() {
      this.initChart()
    }
  },
  components: {

  },
  computed: mapState({

  }),
  methods: {
    initChart() {
      this.chart = echarts.getInstanceByDom(this.$refs.gaugechart) || echarts.init(this.$refs.gaugechart)
      if (this.summary) {
        this.drawCharts(this.summary.heat)
      }
    },
    checkDate(time) {
      return (time + '').substring(4, 6) + '月' + (time + '').substring(6, (time + '').length) + '日'
    },
    checkFormatDay(time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    },
    checkBr(val) {
      if (val === null || val === undefined) {
        return
      }
      const content = val.split('\n')
      let con = ''
      content.forEach((p) => {
        con += '<p>' + p + '</p>'
      })
      return con

    },
    checkDay(time) {
      var date = new Date(this.checkFormatDay(time))
      var week;
      if (date.getDay() === 0) week = '星期日'
      if (date.getDay() === 1) week = '星期一'
      if (date.getDay() === 2) week = '星期二'
      if (date.getDay() === 3) week = '星期三'
      if (date.getDay() === 4) week = '星期四'
      if (date.getDay() === 5) week = '星期五'
      if (date.getDay() === 6) week = '星期六'
      return week;

    },
    colorList(value) {
      if (value <= 0.2) {
        return config.downColor
      } else if (value > 0.2 && value <= 0.4) {
        return '#95E367'
      } else if (value > 0.4 && value <= 0.6) {
        return '#FFD419'
      } else if (value > 0.6 && value <= 0.8) {
        return '#EA8F2B'
      } else if (value > 0.8 && value <= 1) {
        return config.upColor
      }
    },
    drawCharts(gaugeValue) {
      // var gaugeValue=15
      const opt = {
        tooltip: {
          show: true,
          backgroundColor: '#F7F9FB',
          borderColor: '#92DAFF',
          borderWidth: '1px',
          textStyle: {
            color: 'black'
          },
          formatter: function(param) {
            return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
          }

        },
        series: [{
          startAngle: 180,
          endAngle: 0,
          name: '外圈',
          type: 'gauge',
          center: ['50%', '85%'], // 默认全局居中  
          // radius: 173,
          radius: '170%',
          min: 0,
          max: 100,
          splitNumber: 0,
          axisLine: { // 坐标轴线  
            lineStyle: {
              // color: [
              //   [gaugeValue, config.downColor],
              //   [1, '#d7d6d6']
              // ], // 属性lineStyle控制线条样式  
              color: [
                [1, '#d7d6d6']
              ],
              width: 4
            }
          },

          axisTick: {
            show: false
          },
          axisLabel: { // 坐标轴小标记  
            textStyle: { // 属性lineStyle控制线条样式  
              fontWeight: 'bolder',
              fontSize: 16,
              color: 'rgba(30,144,255,0)'
            }
          },
          splitLine: { // 分隔线  
            length: 10, // 属性length控制线长  
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
              width: 0,
              color: '#444'
            }
          },
          pointer: { // 分隔线 指针  
            color: '#666666',
            width: 0,
            length: 230
          },
          detail: {
            show: false
          }

        }, {
          startAngle: 180,
          endAngle: 0,
          name: '显示外圈',
          type: 'gauge',
          center: ['50%', '85%'], // 默认全局居中  
          // radius: 173,
          radius: '170%',
          min: 0,
          max: 100,
          splitNumber: 0,
          axisLine: { // 坐标轴线  
            lineStyle: {
              // color: [
              //   [gaugeValue, config.downColor],
              //   [1, '#d7d6d6']
              // ], // 属性lineStyle控制线条样式  
              color: [
                [gaugeValue, this.colorList(gaugeValue)]

              ],
              width: 4
            }
          },

          axisTick: {
            show: false
          },
          axisLabel: { // 坐标轴小标记  
            textStyle: { // 属性lineStyle控制线条样式  
              fontWeight: 'bolder',
              fontSize: 16,
              color: 'rgba(30,144,255,0)'
            }
          },
          splitLine: { // 分隔线  
            length: 10, // 属性length控制线长  
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式  
              width: 0,
              color: '#444'
            }
          },
          pointer: { // 分隔线 指针  
            color: '#666666',
            width: 0,
            length: 230
          },
          detail: {
            show: false
          }

        }, {
          name: '表盘',
          type: 'gauge',
          startAngle: 180,
          // radius: 160,
          radius: '155%',
          center: ['50%', '85%'], // 默认全局居中  
          endAngle: 0,
          min: 0,
          max: 100,

          axisLine: {
            show: true,
            lineStyle: {
              width: 20,
              shadowBlur: 0,
              color: [
                [0.2, config.downColor],
                [0.4, '#95E367'],
                [0.6, '#FFD419'],
                [0.8, '#EA8F2B'],
                [1, config.upColor]
              ]
            }
          },
          axisTick: {
            show: true,
            splitNumber: 1
          },
          splitLine: {
            show: true,
            length: 20

          },

          axisLabel: {
            formatter: function(e) {
              switch (e + '') {
                case '10':
                  return '弱';
                case '30':
                  return '较弱';
                case '50':
                  return '中等';
                case '70':
                  return '较强';
                case '90':
                  return '强';
                default:
                  return e;
              }
            },
            textStyle: {
              fontSize: 12,
              fontWeight: ''
            }
          },
          pointer: {
            show: false
          },
          detail: {
            offsetCenter: [0, -10],
            textStyle: {
              fontSize: 40
            },
            formatter: '{value}°C'
          },
          data: [{
            name: '',
            value: Math.floor(gaugeValue * 100)
          }]
        }]
      };
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
    }

  },
  mounted() {
    this.initChart()

  },
  destroyed() {

  }
}
</script>
