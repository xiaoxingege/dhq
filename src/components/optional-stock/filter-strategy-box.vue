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
  <router-link :to="{name:'backtestfilter',params:{strategyId:strategyId}}" class="gold-strategy-chart-link" target="_blank">
    <div class="gold-strategy-chart" ref="chart"></div>
  </router-link>
</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
export default {
  props: ['benchmarkObj', 'isResizeStrategyChart', 'strategyId', 'boxHeight'],
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
        height: (window.innerHeight - 5) * 0.83
      })
    }
  },
  computed: {
    filterIncomeData: function() {
      if (this.$store.state.optionalStock.filerIncome && this.$store.state.optionalStock.filerIncome.length > 0) {
        const incomeListData = this.$store.state.optionalStock.filerIncome
        incomeListData.backtestDate = []
        incomeListData.totalReturn = []
        incomeListData.benchmarkPeriodReturn = []
        for (let i = 0; i < incomeListData.length; i++) {
          incomeListData.backtestDate.push(this.dateFormatUtil(incomeListData[i].backtestDate)) // 时间
          incomeListData.totalReturn.push(incomeListData[i].totalReturn) // 总收益率
          incomeListData.benchmarkPeriodReturn.push(incomeListData[i].benchmarkPeriodReturn) // 基准收益率
        }
        return incomeListData
      }
    },
    strategyIndexsData: function() {
      const strategyIndexs = this.$store.state.z3touguIndex.strategyIndexs
      return strategyIndexs
    }
  },
  methods: {
    drawChart: function() {
      const _this = this
      const day = new Date();
      day.setTime(day.getTime() - 24 * 60 * 60 * 1000);
      const y = day.getFullYear()
      const d = day.getDate() < 10 ? '0' + day.getDate() : day.getDate()
      const endDate = y + '' + (day.getMonth() + 1) + '' + d;
      const startDate = y - 1 + '' + (day.getMonth() + 1) + '' + d;
      this.$store.dispatch('optionalStock/getFilterIncome', {
          strategyId: this.strategyId,
          startDate: startDate,
          endDate: endDate
        })
        .then(() => {
          if (this.filterIncomeData && this.filterIncomeData.length > 0) {
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
                data: this.filterIncomeData.backtestDate
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
                    s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:4px;width:7px;height:7px;background-color:' + params[i].color + '"></span>' + params[i].seriesName + ': ' + _this.formatData(params[i].value);
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
                  data: this.filterIncomeData.totalReturn,
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
                  data: this.filterIncomeData.benchmarkPeriodReturn,
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
    dateFormatUtil: function(date) {
      date = date.toString()
      let dateTypeDate = ''
      dateTypeDate += date.substring(0, 4) // 年
      dateTypeDate += '-' + date.substring(4, 6) // 月
      dateTypeDate += '-' + date.substring(6, 8) // 日
      return dateTypeDate
    }
  },
  mounted() {
    this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
    this.drawChart()
  }
}
</script>
