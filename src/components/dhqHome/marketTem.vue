<template>
<div class="market-tem">
  <div class="market-tem-top">
    <NavBar :data="navText" :type="type"></NavBar>
  </div>
  <div class="market-tem-chart" ref="chart"></div>
  <div class="suggestion">解读：{{suggestion}}</div>
</div>
</template>
<script>
import NavBar from 'components/dhqHome/nav-bar'
import echarts from 'echarts'
export default {
  props: ['isResizeBottomChart'],
  data() {
    return {
      navText: [
        ['大盘温度计', 'marketTem']
      ],
      type: 'marketTem',
      suggestion: '',
      updateDataPid: null,
      intervalTime: 60 * 5
    }
  },
  watch: {
    isResizeBottomChart() {
      this.chart.resize({
        height: (window.innerHeight * 0.285) * 0.85 < 710 * 0.285 * 0.85 ? 710 * 0.285 * 0.85 : (window.innerHeight * 0.285) * 0.85
      })
    }
  },
  components: {
    NavBar
  },
  computed: {
    chartDateData: function() {
      const suggestPosition = this.$store.state.dhqIndex.marketTemData.barData
      const dateArr = []
      suggestPosition.dataList.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    chartBarData: function() {
      const suggestPosition = this.$store.state.dhqIndex.marketTemData.barData
      const dataArr = []
      suggestPosition.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    },
    chartLineData: function() {
      const reference = this.$store.state.dhqIndex.marketTemData.lineData
      const dataArr = []
      reference.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    }
  },
  methods: {
    init: function() {
      this.$store.dispatch('dhqIndex/getMarketTemData').then(() => {
        this.suggestion = this.$store.state.dhqIndex.marketTemData.barData.suggestion
        this.chart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: 0,
            top: 20,
            width: '100%',
            height: '80%',
            containLabel: true
          },
          xAxis: [{
              type: 'category',
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: function(params) {
                    return '#707b8f'
                  }
                }
              },
              data: this.chartDateData
            },
            {
              show: false,
              type: 'category',
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: function(params) {
                    return '#707b8f'
                  }
                }
              },
              data: this.chartDateData
            }
          ],
          yAxis: [{
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              min: 0,
              max: 1
            },
            {
              show: false,
              type: 'value',
              boundaryGap: [0, '100%'],
              splitLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              axisLabel: {
                show: false
              },
              position: 'right',
              min: 'dataMin',
              max: 'dataMax'
            }
          ],
          color: ['#525a65', '#1984ea'],
          animation: false,
          series: [{
              name: '仓位',
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'top'
                },
                formatter: function(params) {
                  debugger
                }
              },
              showSymbol: false,
              data: this.chartBarData
            },
            {
              name: '指数',
              type: 'line',
              showSymbol: false,
              yAxisIndex: 1,
              label: {
                normal: {
                  show: true,
                  position: 'top'
                },
                formatter: function(params) {
                  debugger
                }
              },
              data: this.chartLineData
            }
          ]
        })
      })
    },
    autoUpdate: function() {
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(() => {
          this.init()
        }, 1000 * this.intervalTime)
      }
    },
    dateFormatUtil: function(date) {
      let m;
      let d;
      if (date.substring(4, 5) === 0) {
        m = date.substring(5, 6)
      } else {
        m = date.substring(4, 6)
      }
      if (date.substring(6, 7) === 0) {
        d = date.substring(7)
      } else {
        d = date.substring(6)
      }
      return m + '/' + d
    }
  },
  mounted() {
    this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
    this.init()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.market-tem {
    width: 100%;
}
.market-tem-top {
    height: 15%;
    position: relative;
}
.market-tem-chart {
    width: 100%;
    height: 75%;
}
.suggestion {
    height: 10%;
    color: #707b8f;
    padding-left: 25px;
}
</style>