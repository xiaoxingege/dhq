<style >
    @import '../../assets/css/base.css';
    .app{height: 100%;}
    *{box-sizing: border-box;font-family: '微软雅黑';font-size:12px;}
    body{background-color: #ebecee}
    p{margin: 0px;}
    html,body{height:100%;}
    .strategy-wrap{padding: 10px 8px 10px 8px;min-width: 1217px;min-height: 704px;height: 100%;}
    .strategy-wrap>ul{height:100%;}
    .strategy-wrap>ul>li{background-color: #fff;margin-right:0.5%;padding: 10px 10px 0px 10px;width: 33%;float: left;display: inline-block;height:33%;margin-bottom: 0.5%;}
    .strategy-wrap li:nth-child(3),.strategy-wrap li:nth-child(6),.strategy-wrap li:nth-child(9){margin-right: 0px;}
    .strategy-wrap li:nth-child(7),.strategy-wrap li:nth-child(8),.strategy-wrap li:nth-child(9){margin-bottom: 0px;}
</style>
<template>
    <div class="strategy-wrap">
        <ul class="clearfix">
            <StrategyListHome :benchmarkObj="benchmarkObj" v-for="item of strategyList" :strategyData="item"></StrategyListHome>
        </ul>
    </div>
</template>
<script type="text/javascript">
    import StrategyListHome from 'components/z3touguhome/strategy-list-home'
    export default {
      data () {
        return {
          benchmarkObj: {
            '000300': '沪深300',
            '000001': '上证指数',
            '399001': '深圳成指',
            '399006': '创业板指',
            '399005': '中小板指',
            '000016': '上证50',
            '399905': '中证500',
            '399906': '中证800',
            '000852': '中证1000'
          },
          sort: 'createDate',
          direction: 'desc',
          size: 4,
          strategyList: []
        }
      },
      components: {
        StrategyListHome
      },
      computed: {
        strategyDetail: function () {
          const strategyList = [].concat(this.$store.state.z3touguIndex.strategyList)
          return strategyList
        }
      },
      methods: {
        initStrategy: function () {
          this.$store.dispatch('z3touguIndex/getStrategyList', { sort: this.sort, direction: this.direction, size: this.size })
                    .then(() => {
                      this.strategyList = this.strategyDetail
                    })
        }
      },
      mounted () {
        this.initStrategy()
      }
    }
</script>
