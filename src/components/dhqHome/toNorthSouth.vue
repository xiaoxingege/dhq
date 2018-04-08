<template>
<div class="margin-balance">
  <div class="margin-balance-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
  </div>
  <div class="margin-balance-chart" ref="chart"></div>
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
        ['北向资金走势', 'toNorth'],
        ['南向资金走势', 'toSouth']
      ],
      type: 'toNorth',
      updateDataPid: null,
      intervalTime: 60 * 5
    }
  },
  watch: {
    isResizeBottomChart() {
      this.chart.resize({
        height: (window.innerHeight * 0.285) * 0.85 < 710 * 0.285 * 0.85 ? 710 * 0.285 * 0.85 : (window.innerHeight * 0.285) * 0.85
      })
    },
    type() {
      this.init()
    }
  },
  components: {
    NavBar
  },
  computed: {
    chartDateData: function() {
      const toNorthData = this.$store.state.dhqIndex.toNorthData
      const dateArr = []
      toNorthData.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    /*  北向资金走势 */
    toNorthData: function() {
      const toNorthData = this.$store.state.dhqIndex.toNorthData
      const dataArr = []
      toNorthData.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    },
    /* 南向资金走势 */
    toSouthData: function() {
      const toSouthData = this.$store.state.dhqIndex.toSouthData
      const dataArr = []
      toSouthData.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    }
  },
  methods: {
    init: function() {
      if (this.type === 'toNorth') {
        this.$store.dispatch('dhqIndex/getToNorthData').then(() => {
          this.chart.setOption({
            title: {
              text: '单位：亿',
              textStyle: {
                color: '#707b8f',
                fontSize: 12,
                fontFamily: 'Microsoft YaHei',
                fontWeight: 400
              },
              left: 50,
              top: 10
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: 10,
              top: 20,
              width: '92%',
              height: '80%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
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
            }],
            yAxis: [{
              type: 'value',
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
              }
            }],
            color: ['#1984ea'],
            animation: false,
            series: [{
              name: '沪股通流入',
              type: 'line',
              showSymbol: false,
              data: this.toNorthData
            }]
          })
        })
      } else if (this.type === 'toSouth') {
        this.$store.dispatch('dhqIndex/getToSouthData').then(() => {
          this.chart.setOption({
            title: {
              text: '单位：亿',
              textStyle: {
                color: '#707b8f',
                fontSize: 12,
                fontFamily: 'Microsoft YaHei',
                fontWeight: 400
              },
              left: 50,
              top: 10
            },
            tooltip: {
              trigger: 'axis'
            },
            grid: {
              left: 10,
              top: 20,
              width: '92%',
              height: '80%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              boundaryGap: false,
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
            }],
            yAxis: [{
              type: 'value',
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
              }
            }],
            color: ['#1984ea'],
            animation: false,
            series: [{
              name: '沪股通流入',
              type: 'line',
              showSymbol: false,
              data: this.toSouthData
            }]
          })
        })
      }
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
    changeNavType(data) {
      this.type = data
    },
    dateFormatUtil: function(date) {
      const y = date.substring(0, 4)
      const m = date.substring(4, 6)
      const d = date.substring(6)
      return y + '/' + m + '/' + d
    }
  },
  mounted() {
    this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
    this.init()
    //  this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.margin-balance {
    width: 100%;
}
.margin-balance-top {
    height: 15%;
    position: relative;
}
.margin-balance-chart {
    width: 100%;
    height: 85%;
}
</style>