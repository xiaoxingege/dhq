<style scoped="">
.gold-strategy-chart-link {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.gold-strategy-chart {
  height: 100%;
  cursor: pointer;
}
</style>
<template>
<div :style={height:boxHeight}>
  <router-link :to="{name:'goldStrategy',params:{strategyId:strategyId}}" class="gold-strategy-chart-link" target="_blank">
    <div class="gold-strategy-chart" ref="chart"></div>
  </router-link>
</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
export default {
  props: ['strategyId', 'boxHeight', 'isResizeStrategyChart'],
  data() {
    return {
      sort: 'sharpe',
      direction: 'desc',
      size: 4
    }
  },
  watch: {
    strategyId() {
      this.drawChart()
    },
    isResizeStrategyChart() {
      this.chart.resize({
        width: (window.innerWidth - 5) * 0.3333,
        height: 229 * 0.83
      })
    }
  },
  computed: {
    incomeListData: function() {
      if (this.$store.state.z3touguIndex.incomeListData && this.$store.state.z3touguIndex.incomeListData.length > 0) {
        const incomeListData = this.$store.state.z3touguIndex.incomeListData
        incomeListData.backtestDate = []
        incomeListData.totalReturn = []
        incomeListData.benchmarkPeriodReturn = []
        for (let i = 0; i < incomeListData.length; i++) {
          incomeListData.backtestDate.push(this.getTime(incomeListData[i].backtestDate)) // 时间
          incomeListData.totalReturn.push(incomeListData[i].totalReturn) // 总收益率
          incomeListData.benchmarkPeriodReturn.push(incomeListData[i].benchmarkPeriodReturn) // 基准收益率
        }
        return incomeListData
      }
    }
  },
  methods: {
    drawChart: function() {
      const _this = this
      this.$store.dispatch('z3touguIndex/getIncomeList', {
          strategyId: this.strategyId
        })
        .then(() => {
          if (this.incomeListData && this.incomeListData.length > 0) {
            this.chart.setOption({
              legend: {
                left: 50,
                top: 0,
                itemWidth: 7,
                orient: 'vertical',
                textStyle: {
                  color: '#c9d0d7'
                },
                data: [{
                    name: '策略累计收益率',
                    icon: 'circle'
                  },
                  {
                    name: '沪深300',
                    icon: 'circle'
                  }
                ]
              },
              grid: {
                containLabel: true,
                left: 10,
                top: 10,
                bottom: 10,
                right: 10
              },
              xAxis: {
                type: 'category',
                axisLabel: {
                  align: 'left',
                  color: '#c9d0d7'
                },
                axisLine: {
                  lineStyle: {
                    color: '#23272c',
                    width: 1
                  }
                },
                axisTick: {
                  show: false
                },
                data: this.incomeListData.backtestDate
              },
              yAxis: {
                type: 'value',
                axisLabel: {
                  formatter: function(val) {
                    return 100 * val + '%'
                  },
                  color: '#c9d0d7'
                },
                axisLine: {
                  lineStyle: {
                    color: '#23272c',
                    width: 1
                  }
                },
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                }
              },
              tooltip: {
                trigger: 'axis',
                textStyle: {
                  align: 'left',
                  fontFamily: '微软雅黑',
                  fontSize: 12
                },
                formatter: function(params) {
                  var s = params[0].name;
                  for (var i = 0; i < params.length; i++) {
                    s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:4px;width:7px;height:7px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ': ' + _this.formatData(params[i].value) + '%';
                  }
                  return s;
                }
              },
              color: ['#1984ea', '#ca4941'],
              animation: false,
              series: [{
                  name: '策略累计收益率',
                  type: 'line',
                  showSymbol: false,
                  hoverAnimation: false,
                  data: this.incomeListData.totalReturn,
                  lineStyle: {
                    normal: {
                      width: 1
                    }
                  }
                },
                {
                  name: '沪深300',
                  type: 'line',
                  showSymbol: false,
                  hoverAnimation: false,
                  data: this.incomeListData.benchmarkPeriodReturn,
                  lineStyle: {
                    normal: {
                      width: 1
                    }
                  }
                }
              ]
            })
          }
        })
    },
    formatData: function(val) {
      let getVal
      if (val) {
        getVal = (100 * val).toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    },
    getTime: function() {
      const date = new Date()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      const currentDate = date.getFullYear() + '-' + month + '-' + strDate
      return currentDate
    }
  },
  mounted() {
    this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
    this.drawChart()
  }
}
</script>
