<style lang="scss">
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.wrap,
.wrap * {
    box-sizing: border-box;
    font-family: 'Microsoft Yahei';
    font-size: $fontSizeBase;
}

p {
    margin: 0;
}

.app,
body,
html {
    height: 100%;
    background-color: $bgConColor;
}

.wrap {
    padding: 3px 1px;
    min-width: 1217px;
    height: 100%;
    background-color: $bgDeepColor;
    min-height: 100%;
}

.index-wrap {
    min-height: 710px;
}

body {
    background-color: $bgDeepColor;
}

.news-wrap {
    height: 37%;
}

.con-bottom {
    height: 28.5%;
    padding-top: 3px;
}

.con-bottom > div {
    width: 33.33%;
    height: 100%;
    float: left;
}

.con-bottom-center,
.con-bottom-left {
    padding-right: 1px;
}

.con-bottom-center > div,
.con-bottom-left > div {
    width: 100%;
    height: 100%;
    background-color: $bgConColor;
}

.c_up {
    color: $upColor;
}

.c_down {
    color: $downColor;
}

.c_txt {
    color: $wordsColorBase;
}

.sector-wrap {
    padding-top: 3px;
    height: 34.5%;
}

.sector-wrap > div {
    width: 33.33%;
    display: inline-block;
    float: left;
    height: 100%;
}

.preferred-stock,
.sectors {
    padding-right: 1px;
}

.preferred-stock > div,
.sectors > div,
.top-industry > div {
    background-color: $bgConColor;
    height: 100%;
}

.news-wrap > div {
    height: 100%;
}
</style>
<template>
<div class="wrap index-wrap">
  <div class="news-wrap clearfix">
    <IndexChart @isResize='isResizeStrategy'></IndexChart>
  </div>
  <div class="sector-wrap clearfix">
    <div class="preferred-stock">
      <TopPreferredStock></TopPreferredStock>
    </div>
    <div class="sectors">
      <Sectors></Sectors>
    </div>
    <div class="top-industry">
      <TopIndustry></TopIndustry>
    </div>
  </div>
  <div class="con-bottom clearfix">
    <div class="con-bottom-left">
      <!--<StrategyBox :benchmarkObj="benchmarkObj" @getStrategyId="passStrategyId" :isResizeStrategyChart='isResizeStrategyChart'></StrategyBox>
          <tradeSignals :strategyId="strategyId"></tradeSignals>-->
      <BullStock></BullStock>
    </div>
    <div class="con-bottom-center">
      <TopPreferredStrategy></TopPreferredStrategy>
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
import TopPreferredStock from 'components/z3touguhome/preferred-stock'
import TopPreferredStrategy from 'components/z3touguhome/preferred-strategy'
import BullStock from 'components/z3touguhome/bull-stock'
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
      strategyId: '',
      isResizeStrategyChart: ''
    }
  },
  props: [''],
  components: {
    StrategyBox,
    NewsListHome,
    tradeSignals,
    Sectors,
    TopIndustry,
    TopPreferredStock,
    TopPreferredStrategy,
    BullStock,
    IndexChart
  },
  computed: {

  },
  methods: {
    passStrategyId: function(msg) {
      this.strategyId = msg
    },
    isResizeStrategy: function(msg) {
      this.isResizeStrategyChart = msg
    }
  },
  mounted() {

  }
}
</script>
