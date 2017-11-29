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

.strategy-box-wrap {
  width: 100%;
  height: 234px;
  padding: 5px 0px 0px 5px;
  background: #141518;
}

.strategy-box-wrap>div {
  height: 100%;
  width: 33.33%;
  float: left;
  padding-right: 5px;
}

.strategy-box-wrap>div:last-child {
  padding-right: 0px;
}

.strategy-box-wrap>div>div {
  background-color: #181b1f;
}
</style>
<template>
<div style="height:234px;background: #fff;">
  <div class="strategy-box-wrap clearfix">
    <div class="">
      <SelectNavBar @strategyId='passGoldStrategyId' :dataList='goldStrategyList' :strategyLabel='goldLabel'></SelectNavBar>
      <GoldStrategyBox :strategyId='goldStrategyId' :boxHeight='boxHeight' :isResizeStrategyChart='isResizeStrategyChart'></GoldStrategyBox>
    </div>
    <div class="">
      <SelectNavBar @strategyId='passFilterStrategyId' :dataList='filterStrategyList' :strategyLabel='filterLabel'></SelectNavBar>
      <FilterStrategyBox :strategyId='filterStrategyId' :boxHeight='boxHeight' :isResizeStrategyChart='isResizeStrategyChart'></FilterStrategyBox>
    </div>
    <div class="">
      <SelectNavBar @strategyId='passTimeStrategyId' :dataList='timeStrategyList' :strategyLabel='timeLabel'></SelectNavBar>
      <TimeCharts :chartWidth="boxWidth" :chartHeight="boxHeight" :strategyId="timeStrategyId" :innerCode="innerCode" @isResize='isResizeStrategy'></TimeCharts>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import GoldStrategyBox from 'components/optional-stock/gold-strategy-box'
import FilterStrategyBox from 'components/optional-stock/filter-strategy-box'
import TimeCharts from 'components/time-charts'
import SelectNavBar from 'components/optional-stock/select-nav'
export default {
  data() {
    return {
      goldStrategyList: [],
      filterStrategyList: [],
      timeStrategyList: [],
      goldStrategyId: '',
      filterStrategyId: '',
      timeStrategyId: '',
      innerCode: '',
      limit: 5,
      boxHeight: '83%',
      boxWidth: '100%',
      goldLabel: '金牌策略',
      filterLabel: '筛股策略',
      timeLabel: '择时策略',
      isResizeStrategyChart: ''
    }
  },
  components: {
    GoldStrategyBox,
    FilterStrategyBox,
    TimeCharts,
    SelectNavBar
  },
  watch: {

  },
  computed: {
    filterStrategyData: function() {
      const filterStrategyList = this.$store.state.optionalStock.filterStrategyList
      return filterStrategyList
    },
    goldStrategyData: function() {
      const goldStrategyList = this.$store.state.optionalStock.goldStrategyList
      return goldStrategyList
    },
    timeStrategyData: function() {
      const timeStrategyList = this.$store.state.optionalStock.timeStrategyList
      return timeStrategyList
    }
  },
  methods: {
    initStrategyList: function() {
      const query = this.$route.query
      if (query && query.innerCode) {
        this.innerCode = query.innerCode
      } else {
        console.log(query.innerCode)
        // return
        this.innerCode = '000001.SZ'
      }
      this.$store.dispatch('optionalStock/getGoldStrategyList', {
          innerCode: this.innerCode,
          limit: this.limit
        })
        .then(() => {
          this.goldStrategyList = this.goldStrategyData
        })
      this.$store.dispatch('optionalStock/getFilterStrategyList', {
          innerCode: this.innerCode,
          limit: this.limit
        })
        .then(() => {
          this.filterStrategyList = this.filterStrategyData
        })
      this.$store.dispatch('optionalStock/getTimeStrategyList', {
          innerCode: this.innerCode,
          limit: this.limit
        })
        .then(() => {
          this.timeStrategyList = this.timeStrategyData
        })
    },
    passGoldStrategyId: function(id) {
      this.goldStrategyId = id
    },
    passFilterStrategyId: function(id) {
      this.filterStrategyId = id
    },
    passTimeStrategyId: function(id) {
      this.timeStrategyId = id
    },
    isResizeStrategy: function(msg) {
      this.isResizeStrategyChart = msg
    }
  },
  mounted() {
    this.initStrategyList()
  }
}
</script>