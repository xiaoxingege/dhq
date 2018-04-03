<template>
<div class="margin-balance">
  <div class="margin-balance-top">
    <NavBar :data="navText" :type="type"></NavBar>
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
        ['两融余额', 'marginBalance']
      ],
      type: 'marginBalance',
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
      const suggestPosition = this.$store.state.dhqIndex.marginBalanceData.marginBalance
      const dateArr = []
      suggestPosition.dataList.forEach((position) => {
        dateArr.push(this.dateFormatUtil(position.date))
      })
      return dateArr
    },
    /*  上证指数 */
    referenceData: function() {
      const referenceData = this.$store.state.dhqIndex.marginBalanceData.reference
      const dataArr = []
      referenceData.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    },
    /* 两融余额 */
    balanceData: function() {
      const marginBalance = this.$store.state.dhqIndex.marginBalanceData.marginBalance
      const dataArr = []
      marginBalance.dataList.forEach((position) => {
        dataArr.push(position.value)
      })
      return dataArr
    }
  },
  methods: {
    init: function() {
      this.$store.dispatch('dhqIndex/getMarginBalance').then(() => {
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
            left: 0,
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
          color: ['#fc2721', '#1984ea'],
          animation: false,
          series: [{
              name: '上证指数',
              type: 'line',
              showSymbol: false,
              data: this.referenceData
            },
            {
              name: '两融余额',
              type: 'line',
              showSymbol: false,
              data: this.balanceData
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