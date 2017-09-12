<style lang="scss" scoped="">
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
    <li class="li-con">
        <div class="strategy-title clearfix">
            <p class="strategy-name"><router-link :to="{name:'goldStrategy',params:{strategyId:strategy.strategyId}}">{{strategy.strategyName}}</router-link></p>
            <p class="strategy-create-time">关注{{strategy.followCnt}}</p>
        </div>
        <div class="strategy-chart" ref="chartList"></div>
        <ul class="rate-labels clearfix">
            <li>
                <span>年化收益率</span>
                <span>{{strategy.annualReturn}}</span>
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
    </li>
</template>
<script type="text/javascript">
    import echarts from 'echarts'

export default {
      props: ['strategyData', 'benchmarkObj'],
      data () {
        return {
          strategy: {
            strategyName: '',
            followCnt: 0,
            annualReturn: '',
            sharpe: '',
            winRatio: '',
            maxDrawdown: '',
            strategyId: ''
          }
        }
      },
      watch: {

      },
      computed: {
        strategyDetail: function () {
          this.strategyData.backtestDate = []
          this.strategyData.totalReturn = []
          this.strategyData.benchmarkPeriodReturn = []
          this.strategyData.strategyName = this.strategyData.strategy.strategyName
          this.strategyData.strategyId = this.strategyData.strategy.strategyId
          this.strategyData.winRatio = this.formatData(this.strategyData.strategy.evaluationIndexs.winRatio)// 胜率
          this.strategyData.maxDrawdown = this.formatData(this.strategyData.strategy.evaluationIndexs.maxDrawdown)// 最大回撤
          this.strategyData.annualReturn = this.formatData(this.strategyData.strategy.evaluationIndexs.annualReturn)// 年化收益率
          this.strategyData.sharpe = this.formatData(this.strategyData.strategy.evaluationIndexs.sharpe)// 夏普比率
          for (let i = 0; i < this.strategyData.strategy.returns.length; i++) {
            this.strategyData.backtestDate.push(this.strategyData.strategy.returns[i].backtestDate)// 时间
            this.strategyData.totalReturn.push(this.strategyData.strategy.returns[i].totalReturn)// 总收益率
            this.strategyData.benchmarkPeriodReturn.push(this.strategyData.strategy.returns[i].benchmarkPeriodReturn)// 基准收益率
          }
          return this.strategyData
        }
      },
      methods: {
        initStrategy: function () {
          this.strategy = this.strategyDetail
          this.chart = echarts.getInstanceByDom(this.$refs.chartList) || echarts.init(this.$refs.chartList)
          this.chart.setOption({
            legend: {
              left: 0,
              top: 10,
              itemWidth: 8,
              orient: 'vertical',
              data: [
                {
                  name: this.benchmarkObj[this.strategy.strategy.benchmark],
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
              data: this.strategy.backtestDate
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
                name: this.benchmarkObj[this.strategy.strategy.benchmark],
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: this.strategy.benchmarkPeriodReturn
              },
              {
                name: '策略累计收益率',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: this.strategy.totalReturn
              }
            ]
          })
        },
        formatData: function (val) {
          let getVal
          if (val) {
            getVal = (100 * val).toFixed(2) + '%'
          } else {
            getVal = '--'
          }
          return getVal
        }
      },
      mounted () {
        this.initStrategy()
      }
    }
</script>
