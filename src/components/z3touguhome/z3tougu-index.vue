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
}

.wrap {
  padding: 3px 1px;
  min-width: 1217px;
  min-height: 710px;
  height: 100%;
  background-color: #0d0e0f;
}

body {
  background-color: #0d0e0f;
}

.news-wrap {
  height: 37%;
  padding-top: 10px;
}

.news-left {
  height: 100%;
  width: 64.9%;
  display: inline-block;
  float: left;
  padding: 10px;
  background: #fff;
}

.news-left>div {
  width: 47%;
  height: 100%;
  display: inline-block;
  float: left;
}

.news-left>div:nth-child(1) {
  margin-right: 6%;
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
  background-color: #141518;
}

.con-bottom-left>div {
  width: 50%;
  height: 100%;
  float: left;
}

.con-bottom-right {
  padding-left: 1px;
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

.strategy-wrap {
  padding-top: 5px;
  height: 34.5%;
}

a {
  color: #2388da;
}
</style>
<template>
<div class="wrap">
  <div class="news-wrap clearfix">
    <!--<div class="clearfix news-left">
                <NewsListHome :newsList="financeNewsList" :newsName="newsName1" :newsType="ywType"></NewsListHome>
                <NewsListHome :newsList="listedCompanyNewsList" :newsName="newsName2" :newsType="companyType"></NewsListHome>
            </div>
            <ThemeHome :themeWidth="themeWidth" :themeHeight="themeHeight"></ThemeHome>-->
  </div>
  <div class="strategy-wrap">
    <!--<ul class="clearfix">
                &lt;!&ndash;<StrategyListHome :benchmarkObj="benchmarkObj" v-for="item of strategyList" :key="item" :strategyData="item"></StrategyListHome>&ndash;&gt;
                <StrategyListHome :benchmarkObj="benchmarkObj"  :strategyData="strategyList.length>0?strategyList[0]:null"></StrategyListHome>
                <StrategyListHome :benchmarkObj="benchmarkObj"  :strategyData="strategyList.length>0?strategyList[1]:null"></StrategyListHome>
                <StrategyListHome :benchmarkObj="benchmarkObj"  :strategyData="strategyList.length>0?strategyList[2]:null"></StrategyListHome>
                <StrategyListHome :benchmarkObj="benchmarkObj"  :strategyData="strategyList.length>0?strategyList[3]:null"></StrategyListHome>
            </ul>-->
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
      strategyId: ''
    }
  },
  props: [''],
  components: {
    StrategyBox,
    NewsListHome,
    tradeSignals
  },
  computed: {

  },
  methods: {
    passStrategyId: function (msg) {
      this.strategyId = msg
    }
  },
  mounted () {

  }
}
</script>
