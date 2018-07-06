<template>
<div class="record-wrap">
  <div class="date-select clearfix">
    <CalendarJzxg @dateChange="chooseStartDate" class="fl"></CalendarJzxg>
    <span class="fl" style="display: inline-block;width:92px;margin:0 5px;"><span style="color:#000;">{{formatData(dateFrom)?dateFrom:'--'}}</span>至</span>
    <CalendarJzxg @dateChange="chooseEndDate" class="fl" style=""></CalendarJzxg>
    <span class="fl">
            <span style="display: inline-block;width:78px;color:#000;margin:0 5px 0 5px;">{{formatData(dateTo)?dateTo:'--'}}</span> 共
    <span style="display: inline-block;width:16px;color:#000;margin:0 3px;">{{formatData(tradeDays)?tradeDays:'--'}}</span>个交易日
    </span>
  </div>
  <div class="num-sum">
    <span>产生建议调入信号<span style="color:#000;margin-left: 10px;">{{formatData(buySignalNums)?buySignalNums:'--'}}个</span></span>
    <span style="margin-left: 30px;">股票盈利<span style="color:#000;margin-left: 10px;">{{formatData(profitNums)?profitNums:'--'}}只</span></span>
  </div>
  <div class="perform-wrap">
    <StockTable :dataList="performStockList" :strategyId="strategyId" :dateFrom="dateFrom" :dateTo="dateTo" :totalCount="totalCount"></StockTable>
  </div>
</div>
</template>
<script>
import CalendarJzxg from 'components/jzxg/calendar-jzxg'
import StockTable from 'components/jzxg/stock-table'
import {
  mapState
} from 'vuex'
export default {
  props: ['dateFrom', 'dateTo', 'buySignalNums', 'profitNums', 'strategyId', 'tradeDays', 'performStockList', 'totalCount'],
  data() {
    return {

    }
  },
  watch: {
    dateFrom() {
      this.initPerformStatistic()
    },
    dateTo() {
      this.initPerformStatistic()
    }
  },
  components: {
    CalendarJzxg,
    StockTable
  },
  computed: mapState({
    performStatisticData: state => state.jzxg.performStatistic
  }),
  methods: {
    initPerformStatistic: function() {
      this.$store.dispatch('jzxg/queryPerformStatistic', {
        dateFrom: this.dateFrom,
        dateTo: this.dateTo,
        strategyId: this.strategyId
      }).then(() => {
        if (this.performStatisticData) {
          this.buySignalNums = this.performStatisticData.buySignalNums
          this.profitNums = this.performStatisticData.profitNums
        }
      })
    },
    formatData: function(value) {
      if (value || value === 0) {
        return true
      } else {
        return false
      }
    },
    chooseStartDate(date) {
      this.dateFrom = date
    },
    chooseEndDate(date) {
      this.dateTo = date
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/base.css";
@import "../../assets/scss/style";
.record-wrap {
    width: 100%;
    height: 100%;
    padding: 24px 20px 20px;
    color: #bbb;
}
.date-select {
    width: 360px;
    margin: 0 auto;
    color: #999;
}
.date-select span {
    font-size: 14px;
}
.num-sum {
    width: 275px;
    margin: 10px auto;
}
.perform-wrap {
    width: 100%;
    height: 410px;
}
</style>