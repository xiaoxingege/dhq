<template>
<div class="preferred-stock-con">
  <div class="preferred-stock-table-wrap clearfix">
    <!-- <div v-show="isNoData" class="no-data-stock">
      <span>暂无数据</span>
    </div>-->
    <table class="preferred-stock-table">
      <tr>
        <td>代码</td>
        <td>名称</td>
        <td @click="sortBuyTime" style="cursor: pointer">调入日期
          <span class="arrow-top-blue" v-if="buyTimeSortOrder === 'asc'"></span><span class="arrow-bottom-gray" v-if="buyTimeSortOrder === 'asc'"></span>
          <span class="arrow-top-gray" v-if="buyTimeSortOrder === 'desc'"></span><span class="arrow-bottom-blue" v-if="buyTimeSortOrder === 'desc'"></span>
          <span class="arrow-top-gray" v-if="buyTimeSortOrder === 'nosort'"></span><span class="arrow-bottom-gray" v-if="buyTimeSortOrder === 'nosort'"></span>
        </td>
        <td @click="sortSellTime" style="cursor: pointer">调出日期
          <span class="arrow-top-blue" v-if="sellTimeSortOrder === 'asc'"></span><span class="arrow-bottom-gray" v-if="sellTimeSortOrder === 'asc'"></span>
          <span class="arrow-top-gray" v-if="sellTimeSortOrder === 'desc'"></span><span class="arrow-bottom-blue" v-if="sellTimeSortOrder === 'desc'"></span>
          <span class="arrow-top-gray" v-if="sellTimeSortOrder === 'nosort'"></span><span class="arrow-bottom-gray" v-if="sellTimeSortOrder === 'nosort'"></span>
        </td>
        <td>调入价格</td>
        <td>调出价格</td>
        <td @click="sortProfitRatio" style="cursor: pointer">累计收益
          <span class="arrow-top-blue" v-if="profitSortOrder === 'asc'"></span><span class="arrow-bottom-gray" v-if="profitSortOrder === 'asc'"></span>
          <span class="arrow-top-gray" v-if="profitSortOrder === 'desc'"></span><span class="arrow-bottom-blue" v-if="profitSortOrder === 'desc'"></span>
          <span class="arrow-top-gray" v-if="profitSortOrder === 'nosort'"></span><span class="arrow-bottom-gray" v-if="profitSortOrder === 'nosort'"></span>
        </td>
        <td @click="sortHoldingDays" style="cursor: pointer">持仓天数
          <span class="arrow-top-blue" v-if="holdDaysSortOrder === 'asc'"></span><span class="arrow-bottom-gray" v-if="holdDaysSortOrder === 'asc'"></span>
          <span class="arrow-top-gray" v-if="holdDaysSortOrder === 'desc'"></span><span class="arrow-bottom-blue" v-if="holdDaysSortOrder === 'desc'"></span>
          <span class="arrow-top-gray" v-if="holdDaysSortOrder === 'nosort'"></span><span class="arrow-bottom-gray" v-if="holdDaysSortOrder === 'nosort'"></span>
        </td>
      </tr>
      <tr v-for="item of stockList">
        <td>{{formatData(item.stkcode)?'--':item.stkcode}}</td>
        <td>{{formatData(item.stkname)?'--':item.stkname}}</td>
        <td>{{formatData(item.buyTime)?'--':item.buyTime}}</td>
        <td>{{formatData(item.sellTime)?'--':item.sellTime}}</td>
        <td>{{formatData(item.buyPrice)?'--':item.buyPrice}}</td>
        <td>{{formatData(item.sellPrice)?'--':item.sellPrice}}</td>
        <td v-z3-updowncolor="item.profitRatio">{{formatData(item.profitRatio)?'--':(item.profitRatio>0?'+'+(100*item.profitRatio).toFixed(2)+'%':(100*item.profitRatio).toFixed(2)+'%')}}</td>
        <td>{{formatData(item.holdingDays)?'--':item.holdingDays}}</td>
      </tr>
    </table>
  </div>
  <div class="page-wrap">
    <Pagination :options="options" :totalPage="totalPage" v-on:getPageFromChild="goToPage" v-if="totalPage !== 0" />
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Pagination from 'components/pagination.vue'
export default {
  props: ['dataList', 'strategyId', 'dateFrom', 'dateTo', 'totalCount'],
  data() {
    return {
      totalPage: Math.ceil(this.totalCount / 10),
      totalCountCurrent: this.totalCount,
      stockList: this.dataList,
      dateFrom: '',
      dateTo: '',
      pageSize: 10,
      pageStart: 0,
      nextStart: 0,
      sortField: 'buyTime', // 排序字段
      sortOrder: 'desc', // 排序顺序
      buyTimeSortOrder: 'desc', // 调入时间排序方式
      sellTimeSortOrder: 'nosort', // 调出时间排序方式
      profitSortOrder: 'nosort', // 累计收益排序方式
      holdDaysSortOrder: 'nosort', // 持有天数排序方式
      options: {
        backgroundColor: '#f0f0f0',
        color: '#999'
      }
    }
  },
  watch: {
    dataList() {
      this.stockList = this.dataList
    },
    dateFrom() {
      this.stockList = []
      this.pageStart = 0
      this.updateTableData()
    },
    dateTo() {
      this.stockList = []
      this.pageStart = 0
      this.updateTableData()
    },
    totalCount() {
      this.totalCountCurrent = this.totalCount
    },
    totalCountCurrent() {
      this.totalPage = Math.ceil(this.totalCountCurrent / 10)
    }
  },
  components: {
    Pagination
  },
  computed: mapState({
    performStockListData: state => state.jzxg.performStockList
  }),
  methods: {
    updateTableData: function() {
      this.$store.dispatch('jzxg/queryPerformStockList', {
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        pageSize: this.pageSize,
        pageStart: this.pageStart,
        sort: this.sortField + '|' + this.sortOrder,
        strategyId: this.strategyId
      }).then(() => {
        if (this.performStockListData) {
          this.stockList = this.performStockListData.list
          this.nextStart = this.performStockListData.nextStart
          this.totalCountCurrent = this.performStockListData.totalCount
        }
      })
    },
    sortBuyTime: function() {
      this.sellTimeSortOrder = 'nosort'
      this.profitSortOrder = 'nosort'
      this.holdDaysSortOrder = 'nosort'
      if (this.buyTimeSortOrder === 'nosort' || this.buyTimeSortOrder === 'asc') {
        this.buyTimeSortOrder = 'desc'
        this.sortOrder = 'desc'
      } else {
        this.buyTimeSortOrder = 'asc'
        this.sortOrder = 'asc'
      }
      this.sortField = 'buyTime'
      this.updateTableData()
    },
    sortSellTime: function() {
      this.buyTimeSortOrder = 'nosort'
      this.profitSortOrder = 'nosort'
      this.holdDaysSortOrder = 'nosort'
      if (this.sellTimeSortOrder === 'nosort' || this.sellTimeSortOrder === 'asc') {
        this.sellTimeSortOrder = 'desc'
        this.sortOrder = 'desc'
      } else {
        this.sellTimeSortOrder = 'asc'
        this.sortOrder = 'asc'
      }
      this.sortField = 'sellTime'
      this.updateTableData()
    },
    sortProfitRatio: function() {
      this.sellTimeSortOrder = 'nosort'
      this.buyTimeSortOrder = 'nosort'
      this.holdDaysSortOrder = 'nosort'
      if (this.profitSortOrder === 'nosort' || this.profitSortOrder === 'asc') {
        this.sortOrder = 'desc'
        this.profitSortOrder = 'desc'
      } else {
        this.profitSortOrder = 'asc'
        this.sortOrder = 'asc'
      }
      this.sortField = 'profitRatio'
      this.updateTableData()
    },
    sortHoldingDays: function() {
      this.sellTimeSortOrder = 'nosort'
      this.buyTimeSortOrder = 'nosort'
      this.profitSortOrder = 'nosort'
      if (this.holdDaysSortOrder === 'nosort' || this.holdDaysSortOrder === 'asc') {
        this.sortOrder = 'desc'
        this.holdDaysSortOrder = 'desc'
      } else {
        this.holdDaysSortOrder = 'asc'
        this.sortOrder = 'asc'
      }
      this.sortField = 'holdingDays'
      this.updateTableData()
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    goToPage(pageNo) {
      if (10 * pageNo - this.totalCountCurrent >= 10) {
        return
      }
      this.stockList = []
      this.pageStart = 10 * (pageNo - 1)
      this.updateTableData()
    }
  },
  mounted() {

  },
  destroyed() {

  }
}
</script>
<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.preferred-stock-con {
    width: 100%;
    height: 100%;
}
.preferred-stock-table-wrap {
    height: 363px;
}
.preferred-stock-table {
    width: 100%;
    max-height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.preferred-stock-table td {
    border: 1px solid #ddd;
    text-align: center;
    height: 32px;
    color: #000;
}
.preferred-stock-table tr:nth-child(1) td {
    color: #999;
}
.preferred-stock-table tr td:last-child {
    border-right-width: 0;
}
.preferred-stock-table tr td:first-child {
    border-left-width: 0;
}
.arrow-top-blue {
    border-color: transparent transparent #1984ea transparent;
    top: -5px;
    left: 3px;
}
.arrow-top-gray {
    border-color: transparent transparent #bfbfbf transparent;
    top: -5px;
    left: 3px;
}
.arrow-bottom-gray {
    border-color: #bfbfbf transparent transparent transparent;
    top: 5px;
    left: -5px;
}
.arrow-bottom-blue {
    border-color: #1984ea transparent transparent transparent;
    top: 5px;
    left: -5px;
}
.arrow-bottom-blue,
.arrow-bottom-gray,
.arrow-top-blue,
.arrow-top-gray {
    display: inline-block;
    width: 0;
    height: 0;
    border-width: 4px;
    border-style: solid;
    align-self: center;
    position: relative;
}
.page-wrap {
    background-color: #fff;
}
.page-wrap > div {
    text-align: center;
    padding: 20px 0;
}
.page-wrap > div > span {
    background-color: #f0f0f0;
}
</style>
