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

body {
  background-color: #0d0e0f;
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

.portrait-wrap {
  min-height: 710px;
  padding: 3px 1px;
  min-width: 1217px;
  height: 100%;
  background-color: #0d0e0f;
}

.portrait-wrap>div {
  width: 50%;
  height: 100%;
  display: inline-block;
}

.con-left {
  float: left;
}

.con-right {
  float: right;
  background-color: #141518;
}

.portrait-filter-strategy {
  height: 24%;
}

.portrait-timing-strategy {
  height: 39%;
}

.portrait-gold-strategy {
  height: 37%;
}

.portrait-gold-strategy>div {
  width: 50%;
  height: 100%;
  float: left;
}
</style>
<template>
<div class="portrait-wrap clearfix">
  <div class="con-left">

  </div>
  <div class="con-right">
    <div class="portrait-filter-strategy">

    </div>
    <div class="portrait-timing-strategy">

    </div>
    <div class="portrait-gold-strategy clearfix">
      <StrategyBox :benchmarkObj="benchmarkObj" @getStrategyId="passStrategyId"></StrategyBox>
      <tradeSignals :strategyId="strategyId"></tradeSignals>
    </div>

  </div>
</div>
</template>
<script type="text/javascript">
import StrategyBox from 'components/z3touguhome/strategy-box2'
import tradeSignals from 'components/z3touguhome/trade-signals'
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
    tradeSignals
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
