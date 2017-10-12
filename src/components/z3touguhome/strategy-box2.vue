<style lang="scss" scoped="">
.strategy-title {
    height: 15%;
    background-color: #23272c;
    position: relative;
}
.strategy-title select {
    color: #1984ea;
    background-color: #141518;
    border-radius: 3px;
    border: 1px solid #141518;
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
}
.strategy-title select option {
    color: #666;
    background-color: #d6d6d6;
}
.strategy-title select:focus {
    outline: none;
}
.follow-no {
    color: #808ba1;
    display: inline-block;
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
}
.strategy-chart-link {
    display: inline-block;
    width: 100%;
    height: 67%;
}
.strategy-chart {
    height: 100%;
    cursor: pointer;
}
.rate-labels {
    padding-top: 5px;
    height: 18%;
    color: #c9d0d7;
}
.rate-labels li {
    display: inline-block;
    float: left;
    height: 100%;
}
.rate-labels li:nth-child(1) {
    width: 30%;
}
.rate-labels li:nth-child(2) {
    width: 25%;
}
.rate-labels li:nth-child(3) {
    width: 23%;
}
.rate-labels li:nth-child(4) {
    width: 22%;
}
.rate-labels li span {
    display: inline-block;
    width: 100%;
    text-align: center;
}
</style>
<template>
<div>
  <div class="strategy-title">
    <select v-model="strategyId">
                <option v-for="item of strategyNames" :value='item.id'>{{item.name}}</option>
            </select>
    <p class="follow-no">关注{{followCnt === null?0:followCnt}}</p>
  </div>
  <router-link :to="{name:'goldStrategy',params:{strategyId:strategyId}}" class="strategy-chart-link" target="_blank">
    <div class="strategy-chart" ref="chart"></div>
  </router-link>
  <ul class="rate-labels clearfix">
    <li>
      <span>年化收益率</span>
      <span :class="parseFloat(annualReturn)>0 ? 'c_up':'c_down'">{{annualReturn}}</span>
    </li>
    <li>
      <span>夏普比率</span>
      <span>{{sharpe}}</span>
    </li>
    <li>
      <span>胜率</span>
      <span>{{winRatio}}</span>
    </li>
    <li>
      <span>最大回撤</span>
      <span>{{maxDrawdown}}</span>
    </li>
  </ul>
</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
export default {
  props: ['benchmarkObj'],
  data() {
    return {
      sort: 'sharpe',
      direction: 'desc',
      size: 4,
      strategyId: '',
      strategyNames: [],
      strategyName: '',
      followCnt: '',
      annualReturn: '',
      sharpe: '',
      winRatio: '',
      maxDrawdown: ''
    }
  },
  watch: {
    strategyId() {
      this.getStrategyIndexs()
      this.drawChart()
      this.$emit('getStrategyId', this.strategyId)
    }
  },
  computed: {
    incomeListData: function() {
      if (this.$store.state.z3touguIndex.incomeListData.length > 0) {
        const incomeListData = this.$store.state.z3touguIndex.incomeListData
        incomeListData.backtestDate = []
        incomeListData.totalReturn = []
        incomeListData.benchmarkPeriodReturn = []
        for (let i = 0; i < incomeListData.length; i++) {
          incomeListData.backtestDate.push(incomeListData[i].backtestDate) // 时间
          incomeListData.totalReturn.push(incomeListData[i].totalReturn) // 总收益率
          incomeListData.benchmarkPeriodReturn.push(incomeListData[i].benchmarkPeriodReturn) // 基准收益率
        }
        return incomeListData
      }
    },
    strategyNameData: function() {
      const strategyNames = this.$store.state.z3touguIndex.strategyNames
      return strategyNames
    },
    strategyIndexsData: function() {
      const strategyIndexs = this.$store.state.z3touguIndex.strategyIndexs
      return strategyIndexs
    }
  },
  methods: {
    initStrategy: function() {
      this.chart = echarts.getInstanceByDom(this.$refs.chart) || echarts.init(this.$refs.chart)
      this.$store.dispatch('z3touguIndex/getStrategyName', {
          sort: this.sort,
          direction: this.direction,
          size: this.size
        })
        .then(() => {
          if (this.strategyNameData.length > 0) {
            this.strategyNames = this.strategyNameData
            this.strategyId = this.strategyNames[0].id
            this.$store.dispatch('z3touguIndex/getStrategyIndexs', {
                strategyId: this.strategyId
              })
              .then(() => {
                if (this.strategyIndexsData) {
                  this.followCnt = this.strategyIndexsData.followCnt
                  this.annualReturn = this.formatData(this.strategyIndexsData.strategy.evaluationIndexs.annualReturn)
                  this.sharpe = this.strategyIndexsData.strategy.evaluationIndexs.sharpe.toFixed(2)
                  this.winRatio = this.formatData(this.strategyIndexsData.strategy.evaluationIndexs.winRatio)
                  this.maxDrawdown = this.formatData(this.strategyIndexsData.strategy.evaluationIndexs.maxDrawdown)
                }
              })
            this.$store.dispatch('z3touguIndex/getIncomeList', {
                strategyId: this.strategyId
              })
              .then(() => {
                if (this.incomeListData.length > 0) {
                  this.chart.setOption({
                    legend: {
                      left: 0,
                      top: 10,
                      itemWidth: 8,
                      orient: 'vertical',
                      textStyle: {
                        color: '#808ba1'
                      },
                      data: [{
                          name: '策略累计收益率',
                          icon: 'circle'
                        },
                        {
                          name: this.benchmarkObj[this.strategyIndexsData.strategy.benchmark],
                          icon: 'circle'
                        }
                      ]
                    },
                    grid: {
                      show: false,
                      left: 10,
                      top: 45,
                      bottom: 0,
                      right: 10,
                      width: '100%',
                      height: '61%'
                    },
                    xAxis: {
                      type: 'category',
                      splitLine: {
                        show: false
                      },
                      axisTick: {
                        show: false
                      },
                      axisLine: false,
                      data: this.incomeListData.backtestDate
                    },
                    yAxis: {
                      type: 'value',
                      boundaryGap: [0, '100%'],
                      splitLine: {
                        show: false
                      },
                      axisLine: false,
                      min: 'dataMin',
                      max: 'dataMax'
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
                        name: this.benchmarkObj[this.strategyIndexsData.strategy.benchmark],
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
          }
        })
    },
    getStrategyIndexs: function() {
      this.$store.dispatch('z3touguIndex/getStrategyIndexs', {
          strategyId: this.strategyId
        })
        .then(() => {
          if (this.strategyIndexsData) {
            this.followCnt = this.strategyIndexsData.followCnt
            this.annualReturn = this.formatData(this.strategyIndexsData.strategy.evaluationIndexs.annualReturn)
            this.sharpe = this.strategyIndexsData.strategy.evaluationIndexs.sharpe.toFixed(2)
            this.winRatio = this.formatData(this.strategyIndexsData.strategy.evaluationIndexs.winRatio)
            this.maxDrawdown = this.formatData(this.strategyIndexsData.strategy.evaluationIndexs.maxDrawdown)
          }
        })
    },
    drawChart: function() {
      this.$store.dispatch('z3touguIndex/getIncomeList', {
          strategyId: this.strategyId
        })
        .then(() => {
          this.chart.showLoading()
          if (this.incomeListData.length > 0) {
            this.chart.setOption({
              legend: {
                left: 0,
                top: 10,
                itemWidth: 8,
                orient: 'vertical',
                data: [{
                    name: '策略累计收益率',
                    icon: 'circle'
                  },
                  {
                    name: this.benchmarkObj[this.strategyIndexsData.strategy.benchmark],
                    icon: 'circle'
                  }
                ]
              },
              grid: {
                show: false,
                left: 10,
                top: 45,
                bottom: 0,
                right: 10,
                width: '100%',
                height: '61%'
              },
              xAxis: {
                type: 'category',
                splitLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                axisLine: false,
                data: this.incomeListData.backtestDate
              },
              yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                  show: false
                },
                axisLine: false,
                min: 'dataMin',
                max: 'dataMax'
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
                  name: this.benchmarkObj[this.strategyIndexsData.strategy.benchmark],
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
            this.chart.hideLoading()
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
    }
  },
  mounted() {
    this.initStrategy()
  }
}
</script>
