<style lang="scss" scoped>
    @import '../assets/css/base.css';

</style>
<template>
    <div class="goldRecommend">
        <Tablelist :data="tableData"></Tablelist>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    import Tablelist from 'components/table-list'

    export default{
      data () {
        return {
          navText: [['选股条件', 'choseStock'], ['买卖条件', 'sellCondition'], ['仓控策略', 'controlStrategy'], ['交易参数', 'tradeParams']],
          navText1: [['收益曲线图', 'syqxt'], ['当日盈亏', 'dryk'], ['每日持仓', 'mrcc'], ['收益月统计', 'syytj'], ['收益率分布', 'sylfb']],
          type: 'syqxt'
        }
      },
      components: {
        Tablelist
      },
      computed: mapState({

        backtestResult: state => state.backtestDetailH5.backtestResult,
        strategyResult: state => state.backtestDetailH5.strategyResult,
        tableData: function () {
          return [
                  ['年化收益', '超额收益', '波动率', '夏普比率', '最大回撤', 'Alpha', 'Beta', '胜率', '换手率'],
            [
              Number(this.backtestResult.backtestEvaluationIndexVo.annualReturn).toFixed(2) + '%',
              Number(this.backtestResult.backtestEvaluationIndexVo.excessReturn).toFixed(2) + '%',
              Number(this.backtestResult.backtestEvaluationIndexVo.algoVolatility).toFixed(2) + '%',
              Number(this.backtestResult.backtestEvaluationIndexVo.sharpe).toFixed(2),
              Number(this.backtestResult.backtestEvaluationIndexVo.maxDrawdown).toFixed(2) + '%',
              Number(this.backtestResult.backtestEvaluationIndexVo.alpha).toFixed(2),
              Number(this.backtestResult.backtestEvaluationIndexVo.beta).toFixed(2),
              Number(this.backtestResult.backtestEvaluationIndexVo.winRatio).toFixed(2) + '%',
              Number(this.backtestResult.backtestEvaluationIndexVo.turnover).toFixed(2) + '%'
            ]
          ]
        }

      }),
      methods: {

      },
      mounted () {
        document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
        this.strategyId = this.$route.params.strategyId
        this.$store.dispatch('backtestDetailH5/getBacktestInfo', { strategyId: this.strategyId }).then(() => {
          const backtestId = this.$store.state.backtestDetailH5.backtestId
          alert(backtestId)
          const startDate = this.$store.state.backtestDetailH5.backtestStartDate
          const endDate = this.$store.state.backtestDetailH5.backtestEndDate

          this.$store.dispatch('backtestDetailH5/getBacktestData', { backtestId: backtestId }).then(() => {

          })

          this.$store.dispatch('backtestDetailH5/getSyqxtData', { backtestId: backtestId, startDate: startDate, endDate: endDate }).then(() => {

          })
        })
        this.$store.dispatch('backtestDetailH5/getStrategyData', { strategyId: this.strategyId }).then(() => {})
        console.log(this.backtestResult)
        console.log(this.strategyResult)
  }
    }
</script>
