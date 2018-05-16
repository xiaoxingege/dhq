<style lang="scss">
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    box-sizing: border-box;
    font-family: '微软雅黑';
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

.top-wrap {
    height: 34%;
}

.con-bottom {
    height: 33%;
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
.con-bottom-left > div,
.con-bottom-right > div {
    width: 100%;
    height: 100%;
    background-color: $bgConColor;
}

.sector-wrap {
    padding-top: 3px;
    height: 33%;
}

.sector-wrap > div {
    width: 33.33%;
    display: inline-block;
    float: left;
    height: 100%;
}
.preferred-stock,
.top-industry {
    padding-right: 1px;
    width: 33.33%;
}
.sectors {
    width: 33.33%;
}
.marketIndex {
    padding-right: 1px;
    width: 66.66%;
}
.marketIndex > div,
.preferred-stock > div,
.sectors > div,
.top-industry > div {
    background-color: $bgConColor;
    height: 100%;
}

.top-wrap > div {
    height: 100%;
    display: inline-block;
    float: left;
}
</style>
<template>
<div class="wrap index-wrap">
  <div class="top-wrap clearfix">
    <div class="marketIndex">
      <dpIndex :isResizeBottomChart="isResizeBottomChart"></dpIndex>
    </div>
    <div class="sectors">
      <Sectors></Sectors>
    </div>
  </div>
  <div class="sector-wrap clearfix">
    <div class="top-industry">
      <TopIndustry></TopIndustry>
    </div>
    <div class="preferred-stock">
      <TopPreferredStock></TopPreferredStock>
    </div>
    <div class="news">
      <NewsListHome></NewsListHome>
    </div>
  </div>
  <div class="con-bottom clearfix">
    <div class="con-bottom-left">
      <marketTem :isResizeBottomChart="isResizeBottomChart" @isResize='isResizeChart'></marketTem>
    </div>
    <div class="con-bottom-center">
      <marginBalance :isResizeBottomChart="isResizeBottomChart"></marginBalance>
    </div>
    <div class="con-bottom-right">
      <toNorthSouth :isResizeBottomChart="isResizeBottomChart"></toNorthSouth>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import NewsListHome from 'components/dhqHome/hotnews-home'
import Sectors from 'components/dhqHome/sectors'
import TopIndustry from 'components/dhqHome/top-industry'
import TopPreferredStock from 'components/dhqHome/preferred-stock'
import marketTem from 'components/dhqHome/marketTem'
import marginBalance from 'components/dhqHome/marginBalance'
import toNorthSouth from 'components/dhqHome/toNorthSouth'
import dpIndex from 'components/dhqHome/dpIndex'
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
      isResizeBottomChart: ''
    }
  },
  props: [''],
  components: {
    NewsListHome,
    Sectors,
    TopIndustry,
    TopPreferredStock,
    marketTem,
    marginBalance,
    toNorthSouth,
    dpIndex
  },
  computed: {

  },
  methods: {
    passStrategyId: function(msg) {
      this.strategyId = msg
    },
    isResizeChart: function(msg) {
      this.isResizeBottomChart = msg
    }
  },
  mounted() {

  }
}
</script>
