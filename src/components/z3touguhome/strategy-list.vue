<style lang="scss">
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.app {
    height: 100%;
}

* {
    box-sizing: border-box;
    font-family: 'Microsoft YaHei';
    font-size: $fontSizeBase;
}

body {
    background-color: #ebecee;
}

p {
    margin: 0;
}

body,
html {
    height: 100%;
}

.strategy-wrap1 {
    height: 100%;
    min-width: 1217px;
    background-color: $bgDeepColor;
    color: $wordsColorBase;
}

.strategy-wrap1 > ul {
    height: 100%;
    padding: 3px 1px;
}

.strategy-wrap1 > ul > li {
    background-color: $bgDeepColor;
    padding: 0 1px 3px;
    width: 25%;
    float: left;
    display: inline-block;
    height: 33.33%;
}

.strategy-wrap1 .page {
    background-color: transparent !important;
}

.page-wrap {
    background-color: $bgDeepColor;
}

.page-wrap > div {
    text-align: center;
}
</style>
<template>
<div class="strategy-wrap1">
  <ul class="clearfix">
    <StrategyListHome :benchmarkObj="benchmarkObj" v-for="item of strategyList" :key="item" :strategyData="item"></StrategyListHome>
    <!--<StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[0]:null" v-if="strategyList.length>0"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[1]:null" v-if="strategyList.length>1"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[2]:null" v-if="strategyList.length>2"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[3]:null" v-if="strategyList.length>3"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[4]:null" v-if="strategyList.length>4"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[5]:null" v-if="strategyList.length>5"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[6]:null" v-if="strategyList.length>6"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[7]:null" v-if="strategyList.length>7"></StrategyListHome>
            <StrategyListHome :benchmarkObj="benchmarkObj" :strategyData="strategyList.length>0?strategyList[8]:null" v-if="strategyList.length>8"></StrategyListHome>-->
  </ul>
  <div class="page-wrap">
    <Pagination :totalPage="totalPage" v-on:getPageFromChild="goToPage" v-if="totalPage !== 0" />
  </div>
</div>
</template>
<script type="text/javascript">
import StrategyListHome from 'components/z3touguhome/strategy-box'
import Pagination from 'components/pagination.vue'
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
      sort: 'createDate',
      direction: 'desc',
      strategyList: [],
      totalPage: 0,
      pageSize: 12,
      query: '',
      testQuery: ''
    }
  },
  components: {
    StrategyListHome,
    Pagination
  },
  computed: {
    strategyDetail: function() {
      const strategyDetail = this.$store.state.z3touguIndex.strategyBlock
      return strategyDetail
    }
  },
  methods: {
    initStrategy: function(pageNo) {
      const query = this.$route.query
      if (query && query.query) {
        this.query = query.query
      } else {
        console.log(query.query)
        // return
        this.query = 'winRatio_gte_0.55;sharpe_gte_1.5;annualReturn_gte_0.05;maxDrawdown_ite_0.06;&followFlag=0&userId=58c0ef34-4741-413a-832a-295b016ad3dd&sort=createDate&direction=asc&'
      }
      this.$store.dispatch('z3touguIndex/getStrategyBlock', {
          query: this.query,
          size: this.pageSize,
          page: pageNo
        })
        .then(() => {
          this.strategyList = this.strategyDetail.content
          this.totalPage = this.strategyDetail.totalPages
        })
    },
    goToPage(data) {
      this.strategyList = []
      this.initStrategy(data - 1)
    }
  },
  mounted() {
    this.initStrategy(0)
  }
}
</script>
