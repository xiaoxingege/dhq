<style scoped="">
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

.portrait-gold-strategy .follow-no {
  display: none;
}
</style>
<template>
<div class="con-right">
  <div class="portrait-filter-strategy">

  </div>
  <div class="portrait-timing-strategy">

  </div>
  <div class="portrait-gold-strategy clearfix">
    <PortraitStrategyBox :benchmarkObj="benchmarkObj" @getStrategyId="passStrategyId"></PortraitStrategyBox>
    <tradeSignals :strategyId="strategyId"></tradeSignals>
  </div>

</div>
</template>
<script type="text/javascript">
import PortraitStrategyBox from 'components/customerPortrait/portrait-strategy-box'
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
    PortraitStrategyBox,
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
