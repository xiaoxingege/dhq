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
<div style="height:100%;background: #fff;">
  <div class="strategy-box-wrap clearfix">
    <div class="">
      <SelectNavBar @strategyId='passGoldStrategyId' :dataList='goldStrategyList' :strategyLabel='goldLabel'></SelectNavBar>
      <GoldStrategyBox :benchmarkObj='benchmarkObj' :strategyId='goldStrategyId' :boxHeight='boxHeight'></GoldStrategyBox>
    </div>
    <div class="">
      <SelectNavBar @strategyId='passFilterStrategyId' :dataList='filterStrategyList' :strategyLabel='filterLabel'></SelectNavBar>
      <FilterStrategyBox :benchmarkObj='benchmarkObj' :strategyId='filterStrategyId' :boxHeight='boxHeight'></FilterStrategyBox>
    </div>
    <!--<div class="">
               <GoldStrategyBox :benchmarkObj='benchmarkObj' :goldStrategyList='goldStrategyList'></GoldStrategyBox>
           </div>-->
  </div>
</div>
</template>
<script type="text/javascript">
import GoldStrategyBox from 'components/optional-stock/gold-strategy-box'
import FilterStrategyBox from 'components/optional-stock/filter-strategy-box'
import SelectNavBar from 'components/optional-stock/select-nav'
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
      goldStrategyList: [],
      filterStrategyList: [],
      goldStrategyId: '',
      filterStrategyId: '',
      innerCode: '000001.SZ',
      limit: 5,
      boxHeight: '83%',
      goldLabel: '金牌策略',
      filterLabel: '筛股策略'
    }
  },
  components: {
    GoldStrategyBox,
    FilterStrategyBox,
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
    }
  },
  methods: {
    initGoldStrategyList: function() {
      const query = this.$route.query
      if (query && query.query) {
        this.query = query.query
      } else {
        console.log(query.query)
        // return
        this.query = 'innerCode=0'
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
    },
    passGoldStrategyId: function(id) {
      this.goldStrategyId = id
    },
    passFilterStrategyId: function(id) {
      this.filterStrategyId = id
    }
  },
  mounted() {
    this.initGoldStrategyList()
  }
}
</script>