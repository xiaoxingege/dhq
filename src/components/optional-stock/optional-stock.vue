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
  height: 99%;
  padding: 0px 0px 0px 1px;
  background: #0d0e0f;
}

.strategy-box-wrap>div {
  height: 100%;
  width: 33.33%;
  float: left;
  padding-right: 1px;
}

.strategy-box-wrap>div:last-child {
  padding-right: 0px;
  width: 33.34%;
}

.strategy-box-wrap>div>div {
  background-color: #141518;
}

.no-data {
  width: 100%;
  height: 100%;
  position: relative;
}

.no-data span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #808ba1;
}
</style>
<template>
<div style="height:100%;">
  <div class="strategy-box-wrap clearfix">
    <div class="">
      <div v-if="isNoDataStrategy" class="no-data">
        <span>暂无匹配金牌策略</span>
      </div>
      <SelectNavBar @strategyId='passGoldStrategyId' :dataList='goldStrategyList' :strategyLabel='goldLabel' v-if="!isNoDataStrategy"></SelectNavBar>
      <GoldStrategyBox :strategyId='goldStrategyId' :boxHeight='boxHeight' :isResizeStrategyChart='isResizeStrategyChart' v-if="!isNoDataStrategy"></GoldStrategyBox>
    </div>
    <div class="">
      <div v-if="isNoDataFilter" class="no-data">
        <span>暂无匹配筛股策略</span>
      </div>
      <SelectNavBar @strategyId='passFilterStrategyId' :dataList='filterStrategyList' :strategyLabel='filterLabel' v-if="!isNoDataFilter"></SelectNavBar>
      <FilterStrategyBox :strategyId='filterStrategyId' :boxHeight='boxHeight' :isResizeStrategyChart='isResizeStrategyChart' v-if="!isNoDataFilter"></FilterStrategyBox>
    </div>
    <div class="">
      <div v-if="isNoDataTime" class="no-data">
        <span>暂无匹配择时策略</span>
      </div>
      <SelectNavBar @strategyId='passTimeStrategyId' :dataList='timeStrategyList' :strategyLabel='timeLabel' v-if="!isNoDataTime"></SelectNavBar>
      <TimeCharts :chartWidth="boxWidth" :chartHeight="boxHeight" :strategyId="timeStrategyId" :innerCode="innerCode" @isResize='isResizeStrategy' v-if="!isNoDataTime" :gridBottom=10></TimeCharts>
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
      isResizeStrategyChart: '',
      isNoDataStrategy: false,
      isNoDataFilter: false,
      isNoDataTime: false
    }
  },
  components: {
    GoldStrategyBox,
    FilterStrategyBox,
    TimeCharts,
    SelectNavBar
  },
  watch: {
    goldStrategyList() {
      if (this.goldStrategyList.length > 0) {
        this.isNoDataStrategy = false
      } else {
        this.isNoDataStrategy = true
      }
    },
    filterStrategyList() {
      if (this.filterStrategyList.length > 0) {
        this.isNoDataFilter = false
      } else {
        this.isNoDataFilter = true
      }
    },
    timeStrategyList() {
      if (this.timeStrategyList.length > 0) {
        this.isNoDataTime = false
      } else {
        this.isNoDataTime = true
      }
    }
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
        // return
        // this.innerCode = '000007.SZ'
        this.innerCode = '600030.SH'
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