<style lang="scss">
@import '../assets/css/base.css';
.app {
  height: 100%;
}

* {
  box-sizing: border-box;
  font-family: "Microsoft YaHei";
  font-size: 12px;
}

body {
  background-color: #ebecee;
}

p {
  margin: 0px;
}

html,
body {
  height: 100%;
}

.strategy-wrap1 {
  height: 100%;
  min-width: 1217px;
  background-color: #0d0e0f;
  color: #c9d0d7;
}

.strategy-wrap1>ul {
  height: 100%;
  padding: 3px 1px;
}

.strategy-wrap1>ul>li {
  background-color: #0d0e0f;
  padding: 0px 1px 3px 1px;
  width: 25%;
  float: left;
  display: inline-block;
  height: 33.33%;
}

.strategy-wrap1 .page {
  background-color: transparent !important;
}

.page-wrap {
  background-color: #0d0e0f;
}

.page-wrap>div {
  text-align: center;
}
</style>
<template>
<div class="strategy-wrap1">
  <ul class="clearfix">
    <z3FilterStrategyBox :benchmarkObj="benchmarkObj" v-for="item of strategyList" :key="item" :strategyData="item"></z3FilterStrategyBox>
  </ul>
  <div class="page-wrap">
    <Pagination :totalPage="totalPage" v-on:getPageFromChild="goToPage" v-if="totalPage !== 0" />
  </div>
</div>
</template>
<script type="text/javascript">
import z3FilterStrategyBox from 'components/z3-filter-strategy-box'
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
    z3FilterStrategyBox,
    Pagination
  },
  computed: {
    strategyDetail: function() {
      return this.$store.state.backtestDetail.filterBlockData
    }
  },
  methods: {
    initStrategy: function(pageNo) {
      const queryV = this.$route.query
      this.query = queryV.query + '&followFlag=' + queryV.followFlag + '&userId=' + queryV.userId + '&sort=' + queryV.sort + '&direction=' + queryV.direction
      // this.query = '&followFlag=0&userId=d1381deb-0789-465a-bc54-d574638e9a07&sort=avgReturn&direction=desc&size=12&page=0'
      this.$store.dispatch('backtestDetail/getFilterStrategyList', {
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
