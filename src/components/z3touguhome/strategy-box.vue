<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.li-con > div {
    width: 100%;
    height: 100%;
    background-color: #141518;
}
.strategy-title {
    height: 15%;
    background-color: #23272c;
    position: relative;
}
.strategy-name {
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
}
.strategy-name a {
    color: #c9d0d7;
}
.strategy-create-time {
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
    height: 18%;
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
<li class="li-con">
  <div>
    <div class="strategy-title clearfix">
      <p class="strategy-name">
        <router-link :to="{name:'goldStrategy',params:{strategyId:strategy.strategyId}}" target="_blank">{{strategy.strategyName}}</router-link>
      </p>
      <p class="strategy-create-time">关注{{strategy.followCnt === null?0:strategy.followCnt}}</p>
    </div>
    <router-link :to="{name:'goldStrategy',params:{strategyId:strategy.strategyId}}" class="strategy-chart-link" target="_blank">
      <div class="strategy-chart" ref="chartList"></div>
    </router-link>
    <ul class="rate-labels clearfix">
      <li>
        <span>年化收益率</span>
        <span v-z3-updowncolor="strategy.annualReturn">{{formatData(strategy.annualReturn)}}</span>
      </li>
      <li>
        <span>夏普比率</span>
        <span>{{strategy.sharpe}}</span>
      </li>
      <li>
        <span>胜率</span>
        <span>{{strategy.winRatio}}</span>
      </li>
      <li>
        <span>最大回撤</span>
        <span>{{strategy.maxDrawdown}}</span>
      </li>
    </ul>
  </div>
</li>
</template>
<script type="text/javascript">
import echarts from 'echarts'

export default {
  props: ['strategyData', 'benchmarkObj'],
  data() {
    return {
      strategy: {
        strategyName: '',
        followCnt: '',
        annualReturn: '',
        sharpe: '',
        winRatio: '',
        maxDrawdown: '',
        strategyId: ''
      },
      startDate: '',
      endDate: ''
    }
  },
  watch: {
    strategyData() {
      this.initStrategy()
    }
  },
  computed: {
    strategyDetail: function() {
      if (this.strategyData) {
        this.strategyData.winRatio = this.formatData(this.strategyData.strategy.evaluationIndexs.winRatio) // 胜率
        this.strategyData.maxDrawdown = this.formatData(this.strategyData.strategy.evaluationIndexs.maxDrawdown) // 最大回撤
        this.strategyData.annualReturn = this.strategyData.strategy.evaluationIndexs.annualReturn // 年化收益率
        this.strategyData.sharpe = (this.strategyData.strategy.evaluationIndexs.sharpe).toFixed(2) // 夏普比率
        this.strategyData.strategyName = this.strategyData.strategy.strategyName
        this.strategyData.strategyId = this.strategyData.strategy.strategyId
        this.strategyData.benchmark = this.strategyData.strategy.benchmark
      } else {
        /* this.strategyData = {}
        this.strategyData.winRatio = '--'// 胜率
        this.strategyData.maxDrawdown = '--'// 最大回撤
        this.strategyData.annualReturn = '--'// 年化收益率
        this.strategyData.sharpe = '--'// 夏普比率
        this.strategyData.benchmark = ''
        this.strategyData.backtestDate = []
        this.strategyData.totalReturn = []
        this.strategyData.benchmarkPeriodReturn = []*/
      }
      return this.strategyData
    },
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
    }
  },
  methods: {
    initStrategy: function() {
      this.chart = echarts.getInstanceByDom(this.$refs.chartList) || echarts.init(this.$refs.chartList)
      if (this.strategyDetail) {
        this.strategy = this.strategyDetail
        this.$store.dispatch('z3touguIndex/getIncomeList', {
            strategyId: this.strategy.strategyId,
            startDate: this.startDate,
            endDate: this.endDate
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
                      name: this.benchmarkObj[this.strategy.benchmark],
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
                  width: '96%',
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
                    name: this.benchmarkObj[this.strategy.benchmark],
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
