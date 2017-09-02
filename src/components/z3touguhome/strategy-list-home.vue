<style lang="scss" scoped="">
    .strategy-wrap{padding-top: 10px;}
    .strategy-wrap>ul{height:100%;}
    .strategy-wrap>ul>li{background-color: #fff;margin-right:0.3%;padding: 10px 10px 0px 10px;width: 24.7%;float: left;display: inline-block;height:100%;}
    .strategy-wrap li:nth-child(4){margin-right: 0px;}
    .strategy-title{height:12%;border-bottom: 1px solid #ddd;}
    .strategy-title p{display: inline-block;width: 50%;height: 100%;vertical-align: middle;}
    .strategy-name{color:#4c8cca;float: left;text-align: left;font-weight:bold;}
    .strategy-create-time{color:#666;float: right;text-align: right;}
    .strategy-chart{height:65%;}
    .rate-labels{padding-top: 5px;height:23%;}
    .rate-labels li{display: inline-block;float: left;height:100%;}
    .rate-labels li:nth-child(1){width: 30%}
    .rate-labels li:nth-child(2){width: 25%}
    .rate-labels li:nth-child(3){width: 23%}
    .rate-labels li:nth-child(4){width: 22%}
    .rate-labels li span{display: inline-block;width: 100%;text-align: left;}
</style>
<template>
    <div class="strategy-wrap" :style="{height:strategyListHeight}">
        <ul class="clearfix">
            <li v-for="item of strategyList">
                <div class="strategy-title clearfix">
                    <p class="strategy-name">{{item.strategyName}}</p>
                    <p class="strategy-create-time">关注{{}}</p>
                </div>
                <div class="strategy-chart" ref="chartList"></div>
                <ul class="rate-labels clearfix">
                    <li>
                        <span>年化收益率</span>
                        <span>{{item.annualReturn}}</span>
                    </li>
                    <li>
                        <span>夏普比率</span>
                        <span>{{item.sharpe}}</span>
                    </li>
                    <li>
                        <span>胜率</span>
                        <span>{{item.winRatio}}</span>
                    </li>
                    <li>
                        <span>最大回撤</span>
                        <span>{{item.maxDrawdown}}</span>
                    </li>
                </ul>
            </li>
            <li v-for="item of strategyList">
                <div class="strategy-title clearfix">
                    <p class="strategy-name">{{item.strategyName}}</p>
                    <p class="strategy-create-time">关注{{}}</p>
                </div>
                <div class="strategy-chart" ref="chartList"></div>
                <ul class="rate-labels clearfix">
                    <li>
                        <span>年化收益率</span>
                        <span>{{item.annualReturn}}</span>
                    </li>
                    <li>
                        <span>夏普比率</span>
                        <span>{{item.sharpe}}</span>
                    </li>
                    <li>
                        <span>胜率</span>
                        <span>{{item.winRatio}}</span>
                    </li>
                    <li>
                        <span>最大回撤</span>
                        <span>{{item.maxDrawdown}}</span>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import echarts from 'echarts'

export default {
      props: ['strategyListHeight'],
      data () {
        return {
          sort: 'createDate',
          direction: 'desc',
          size: 4,
          strategyList: []
        }
      },
      watch: {

      },
      computed: {
        strategyDetail: function () {
          const strategyList = [].concat(this.$store.state.z3touguIndex.strategyList)
          strategyList.forEach(strategy => {
            strategy.backtestDate = []
            strategy.totalReturn = []
            strategy.benchmarkPeriodReturn = []
            strategy.winRatio = strategy.evaluationIndexs.winRatio.toFixed(2) + '%'// 胜率
            strategy.maxDrawdown = strategy.evaluationIndexs.maxDrawdown.toFixed(2) + '%'// 最大回撤
            strategy.annualReturn = strategy.evaluationIndexs.annualReturn.toFixed(2) + '%'// 年化收益率
            strategy.sharpe = strategy.evaluationIndexs.sharpe.toFixed(2) + '%'// 夏普比率
            for (let i = 0; i < strategy.returns.length; i++) {
              strategy.backtestDate.push(strategy.returns[i].backtestDate)// 时间
              strategy.totalReturn.push(strategy.returns[i].totalReturn)// 总收益率
              strategy.benchmarkPeriodReturn.push(strategy.returns[i].benchmarkPeriodReturn)// 基准收益率
            }
          })
          return strategyList
        }
      },
      methods: {
        initStrategy: function () {
          this.$store.dispatch('z3touguIndex/getStrategyList', { sort: this.sort, direction: this.direction, size: this.size })
              .then(() => {
                this.strategyList = this.strategyDetail
                this.$nextTick(() => {
                  for (const i in this.strategyList) {
                    if (this.$refs.chartList && this.$refs.chartList.length > 0) {
                      this.strategyList[i].chart = echarts.getInstanceByDom(this.$refs.chartList[i]) || echarts.init(this.$refs.chartList[i])
                      this.strategyList[i].chart.setOption({
                        legend: {
                          left: 0,
                          top: 10,
                          itemWidth: 8,
                          orient: 'vertical',
                          data: [
                            {
                              name: this.strategyList[i].benchmark,
                              icon: 'circle'
                            },
                            {
                              name: '策略累计收益率',
                              icon: 'circle'
                            }
                          ]
                        },
                        grid: {
                          show: false,
                          left: 0,
                          top: 45,
                          bottom: 20,
                          right: 5,
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
                          data: this.strategyList[i].backtestDate
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
                        color: ['#e8311f', '#4076b4'],
                        series: [
                          {
                            name: this.strategyList[i].benchmark,
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: this.strategyList[i].benchmarkPeriodReturn
                          },
                          {
                            name: '策略累计收益率',
                            type: 'line',
                            showSymbol: false,
                            hoverAnimation: false,
                            data: this.strategyList[i].totalReturn
                          }
                        ]
                      })
                    }
                  }
                })
              })
        }
      },
      mounted () {
        this.initStrategy()
      }
    }
</script>
