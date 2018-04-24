<style lang="scss">
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.index-top {
    background: $bgDeepColor;
}

.index-chart {
    width: 100%;
    height: 100%;
    background: $bgDeepColor;
    padding-right: 1px;
}

.line-chart {
    background: $bgConColor;
    width: 100%;
    height: 100%;
    float: left;
    position: relative;
}
.line-chart img {
    margin-top: 5px;
}
.indexChart {
    width: 100%;
    height: 100%;
}

.indexNum {
    position: absolute;
    top: 5px;
    right: 20px;
}
</style>
<template>
<div class="index-top">
  <div class="index-chart clearfix">
    <a class="line-chart">
      <div v-if="lsChartData.priceArr.length>0" class="indexNum">
        <span v-z3-updowncolor="upDown" class="mr-5">{{stockVal === null ? '--':stockVal === undefined?'--':parseFloat(stockVal).toFixed(2)}}</span>
        <img v-if="upDownExtent && upDownExtent>0" src="../../assets/images/i_jiantou_up.png" />
        <img v-if="upDownExtent && upDownExtent<0" src="../../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="upDown" class="mr-5">{{upDown === null ? '--':upDown === undefined?'--':parseFloat(upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="upDown">{{upDownExtent === null ? '(--)':upDownExtent === undefined?'(--)':'('+(upDownExtent>0?'+':'')+parseFloat(upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </a>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: ['isResizeBottomChart', 'stockCode', 'stockName', 'timestamp'],
  data() {
    return {

    }
  },
  components: {},
  computed: {
    lsChartData: function() {
      const chartData = this.$store.state.dhqIndex.chartData[this.stockCode]
      return chartData
    },
    stockVal: function() {
      const chartData = this.$store.state.dhqIndex.chartData[this.stockCode]
      return chartData.stockVal
    },
    upDown: function() {
      const chartData = this.$store.state.dhqIndex.chartData[this.stockCode]
      return chartData.upDown
    },
    upDownExtent: function() {
      const chartData = this.$store.state.dhqIndex.chartData[this.stockCode]
      return chartData.upDownExtent
    }
  },
  methods: {
    dealData(zeroArr) {
      var r = []
      if (typeof zeroArr === 'undefined') {
        return r
      }
      for (var i = 0; i < zeroArr.length; i++) {
        if (zeroArr[i]) {
          r.push(zeroArr[i])
        }
      }
      return r
    },
    removeZero(zeroArr) {
      if (zeroArr == null) {
        return ''
      }
      var r = []
      if (typeof zeroArr === 'undefined') {
        return r
      }
      for (var i = 0; i < zeroArr.length; i++) {
        if (zeroArr[i]) {
          r.push([i, zeroArr[i]])
        }
      }
      return r
    },
    autoTimeline(starts, ends) {
      var timeline = []
      var startHour = starts.split(':')[0] * 1
      var startMin = starts.split(':')[1] * 1
      var endHour = ends.split(':')[0] * 1
      var endMin = ends.split(':')[1] * 1
      for (var i = startHour; i <= endHour; i++) {
        var start = (i === startHour) ? startMin : '0'
        var end = (i === endHour) ? endMin : '59'
        for (var j = start; j <= end; j++) {
          j = (j < 10) ? '0' + j : j
          timeline.push(i + ':' + j)
        }
      }
      return timeline
    },
    refreshEcharts(datas, chartName) {
      if (datas !== null && datas.priceArr !== null) {
        var tmpMax = Math.max.apply(Math, this.dealData(datas.priceArr))
        var tmpMin = Math.min.apply(Math, this.dealData(datas.priceArr))
      }
      if (datas !== null && datas.avgArr !== null) {
        var avgMax = Math.max.apply(Math, this.dealData(datas.avgArr))
        var avgMin = Math.min.apply(Math, this.dealData(datas.avgArr))
      }
      tmpMax = tmpMax > avgMax ? tmpMax : avgMax
      tmpMin = tmpMin < avgMin ? tmpMin : avgMin

      if (datas !== null) {
        var Dvalue = Math.abs(tmpMax - datas.line) > Math.abs(tmpMin - datas.line) ? Math.abs(tmpMax - datas.line) : Math.abs(tmpMin - datas.line)
      }
      this.chart = echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[0]) || echarts.init(document.getElementsByClassName('indexChart')[0])
      // 生成横坐标时间轴
      var beforenoon = this.autoTimeline('9:30', '11:30')
      var afternoon = this.autoTimeline('13:00', '15:00')
      beforenoon.splice(beforenoon.length - 1, 1)
      afternoon[0] = '11:30/13:00'
      var timeline = beforenoon.concat(afternoon)
      // 图表初始化
      this.chart.setOption({
        title: {
          text: chartName,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#c9d0d7',
            fontFamily: 'Microsoft YaHei'
          },
          left: 2,
          top: 5
        },
        grid: {
          left: 65,
          top: 40,
          bottom: 30,
          right: 15
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          axisLine: {
            lineStyle: {
              color: '#535a64',
              type: 'solid'
            }
          },
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 59,
            textStyle: {
              color: function(params) {
                return '#707b8f'
              }
            }
          },
          data: timeline
        }],
        yAxis: [{
          type: 'value',
          min: datas === null ? '' : Number(datas.line) - Dvalue,
          max: datas === null ? '' : Number(datas.line) + Dvalue,
          axisLabel: {
            formatter: function(val) {
              return val.toFixed(2)
            },
            textStyle: {
              color: function(params) {
                var cc = (Number(params.split(',').join('')).toFixed(2) - Number(datas.line).toFixed(2)).toFixed(2)
                if (cc > 0) {
                  return '#ca4947'
                } else if (cc < 0) {
                  return '#56a870'
                }
                return '#fff'
              }
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#30343b'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#535a64',
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          splitNumber: 4,
          interval: 2 * Dvalue / 4
        }],
        series: [{
          name: '当前价',
          showSymbol: false,
          itemStyle: {
            normal: {
              color: '#fff'
            }
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          animation: false,
          smooth: true,
          type: 'line',
          data: JSON.parse(JSON.stringify(this.removeZero(datas === null ? '' : datas.priceArr))),
          markLine: {
            silent: true,
            symbol: false,
            animation: false,
            label: {
              normal: {
                show: false
              }
            },
            data: [{
              yAxis: datas === null ? '' : Number(datas.line).toFixed(2)
            }],
            lineStyle: {
              normal: {
                type: 'solid',
                color: '#fff',
                width: 0.3,
                opacity: 1
              }
            }
          }
        }, {
          name: '均值',
          itemStyle: {
            normal: {
              color: '#f4b53c '
            }
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          animation: false,
          smooth: true,
          type: 'line',
          showSymbol: false,
          data: JSON.parse(JSON.stringify(this.removeZero(datas === null ? '' : datas.avgArr)))

        }]
      })
    }
  },
  watch: {
    timestamp() {
      this.stockVal = this.lsChartData.stockVal
      this.upDown = this.lsChartData.upDown
      this.upDownExtent = this.lsChartData.upDownExtent
      this.refreshEcharts(this.lsChartData, this.stockName)
    },
    isResizeBottomChart() {
      echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[0]).resize({
        height: window.innerHeight * 0.34 < 710 * 0.34 ? 710 * 0.34 : window.innerHeight * 0.34
      })
    },
    stockCode() {
      this.$store.dispatch('dhqIndex/getIndexChartData', {
        stockCode: this.stockCode
      }).then(() => {
        this.stockVal = this.lsChartData.stockVal
        this.upDown = this.lsChartData.upDown
        this.upDownExtent = this.lsChartData.upDownExtent
        this.refreshEcharts(this.lsChartData, this.stockName)
      })
    }
  },
  mounted() {
    this.$store.dispatch('dhqIndex/getIndexChartData', {
      stockCode: this.stockCode
    }).then(() => {
      this.refreshEcharts(this.lsChartData, this.stockName)
    })
  }
}
</script>
