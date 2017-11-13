<style>
@import '../../assets/css/base.css';
* {
  box-sizing: border-box;
  font-family: '微软雅黑';
  font-size: 12px;
}

p {
  margin: 0px;
}

html,
body,
.app {
  height: 100%;
  background-color: #141518;
}

.wrap {
  padding: 3px 1px;
  min-width: 1217px;
  height: 100%;
  background-color: #0d0e0f;
  min-height: 100%;
}

.index-wrap {
  min-height: 710px;
}

body {
  background-color: #0d0e0f;
}

.news-wrap {
  height: 37%;
}

.con-bottom {
  height: 28.5%;
  padding-top: 3px;
}

.con-bottom>div {
  width: 50%;
  height: 100%;
  float: left;
}

.con-bottom-left {
  padding-right: 1px;
}

.con-bottom-left>div {
  width: 50%;
  height: 100%;
  float: left;
  background-color: #141518;
}

.c_up {
  color: #ca4941;
}

.c_down {
  color: #56a870;
}

.c_txt {
  color: #c9d0d7;
}

.sector-wrap {
  padding-top: 3px;
  height: 34.5%;
}

.sector-wrap>div {
  width: 50%;
  display: inline-block;
  float: left;
  height: 100%;
}

.sectors {
  padding-right: 1px;
}

.sectors>div,
.top-industry>div {
  background-color: #141518;
  height: 100%;
}

.news-wrap>div {
  height: 100%;
}
</style>
<template>
<div class="wrap index-wrap">
  <div class="news-wrap clearfix">
    <IndexChart></IndexChart>
  </div>
  <div class="sector-wrap clearfix">
    <div class="sectors">
      <Sectors></Sectors>
    </div>
    <div class="top-industry">
      <TopIndustry></TopIndustry>
    </div>
  </div>
  <div class="con-bottom clearfix">
    <div class="con-bottom-left clearfix">
      <StrategyBox :benchmarkObj="benchmarkObj" @getStrategyId="passStrategyId"></StrategyBox>
      <tradeSignals :strategyId="strategyId"></tradeSignals>
    </div>
    <div class="con-bottom-right">
      <NewsListHome></NewsListHome>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import StrategyBox from 'components/z3touguhome/strategy-box2'
import NewsListHome from 'components/z3touguhome/hotnews-home'
import tradeSignals from 'components/z3touguhome/trade-signals'
import Sectors from 'components/z3touguhome/sectors'
import TopIndustry from 'components/z3touguhome/top-industry'
import IndexChart from 'components/indexChart'
export default {
  data() {
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
      strategyId: ''
    }
  },
  props: [''],
  components: {
    StrategyBox,
    NewsListHome,
    tradeSignals,
    Sectors,
    TopIndustry,
    IndexChart
  },
  computed: {

  },
  methods: {
    passStrategyId: function(msg) {
      this.strategyId = msg
    }
  },
  mounted() {

  }
}
</script>
