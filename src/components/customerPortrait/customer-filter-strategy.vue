<style scoped>
.portrait-filer-title {
  height: 15%;
  position: relative;
}

.timing-table-wrap {
  width: 100%;
  height: 100%;
}

.timing-no-data {
  width: 100%;
  height: 100%;
  position: relative;
}

.timing-no-data span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #808ba1;
}

.portrait-filter-con {
  height: 85%;
}

.portrait-fiter-more {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

.portrait-fiter-more a {
  color: #1984ea;
}

.filter-strategy-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.filter-strategy-table tbody tr {
  cursor: pointer;
}

.filter-strategy-table tbody tr:hover {
  background-color: #2e4465;
}

.filter-strategy-table thead {
  background-color: #23272c;
}

.filter-strategy-table th {
  color: #c9d0d7;
  font-weight: normal;
}

.filter-strategy-table td {
  box-sizing: border-box;
  border: 1px solid #23272c;
  text-align: center;
  width: 20%;
  color: #c9d0d7;
}

.filter-strategy-table tr td:first-child {
  text-align: left;
  color: #1984ea;
  padding-left: 10px;
  width: 40%;
}

.filter-strategy-wrap {
  width: 60%;
  height: 100%;
  float: left;
}

.portrait-filter-lable {
  color: #c9d0d7;
}

.filter-stock-wrap {
  width: 40%;
  height: 100%;
  float: right;
}

.filter-stock-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

.filter-stock-table td {
  box-sizing: border-box;
  border: 1px solid #23272c;
  text-align: center;
  width: 20%;
  color: #c9d0d7;
}

.filter-stock-table tr td:first-child {
  text-align: left;
  color: #1984ea;
  padding-left: 10px;
  width: 40%;
}
</style>
<template>
<div style="height:100%;">
  <div class="portrait-filer-title">
    <span class="portrait-filter-lable">筛股策略</span>
    <p class="portrait-fiter-more" @click="">
      <a>更多>></a>
    </p>
  </div>
  <div class="portrait-filter-con clearfix">
    <div class="filter-strategy-wrap">
      <table class="filter-strategy-table">
        <thead>
          <tr>
            <th>筛股策略名称</th>
            <th>胜率</th>
            <th>盈亏比</th>
            <th>持有天数</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item of filterStrategyList" @click='changeStrategy(item.name,item.innerCode,index)' class="filter-li">
            <td>{{item.strategyName === null?'--':item.strategyName}}</td>
            <td>{{item.evaluationIndexs.winRatio === null?'--':item.evaluationIndexs.winRatio.toFixed(2)}}</td>
            <td>{{item.evaluationIndexs.winLossRatio === null?'--':item.evaluationIndexs.winLossRatio.toFixed(2)}}</td>
            <td>{{item.holdDay === null?'--':item.holdDay}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="filter-stock-wrap">
      <div style="height:100%;">
        <div v-if="isNoData" class="timing-no-data">
          <span>暂无信号</span>
        </div>
        <table class="filter-stock-table">
          <tbody>
            <tr>
              <td>当前选股</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr v-for="item of currentStockSelectionList">
              <td>{{item.name === null?'--':item.name}}</td>
              <td v-z3-updowncolor="item.chgPct">{{item.price === null?'--':item.price.toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chg">{{item.chg === null?'--':item.chg.toFixed(2)}}</td>
              <td v-z3-updowncolor="item.curChngPct">{{formatData(item.curChngPct)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      updateDataPid: null,
      intervalTime: 6,
      isNoData: false,
      strategyId: '',
      filterStrategyList: [],
      currentStockSelectionList: [],
      clientPassport: 3454565,
      pageNum: 0,
      pageSize: 4
    }
  },
  watch: {
    strategyId() {

    }
  },
  computed: {
    customerFilterStrategy: function() {
      const customerFilterStrategy = this.$store.state.portraitDetail.customerFilterStrategy
      return customerFilterStrategy
    },
    dayStockSelection: function() {
      const dayStockSelectionList = this.$store.state.portraitDetail.dayStockSelection
      return dayStockSelectionList
    }
  },
  methods: {
    initFilterStrategy() {
      this.$store.dispatch('portraitDetail/getCustomerFilterStrategy', {
        clientPassport: this.clientPassport
      }).then(() => {
        if (this.customerFilterStrategy.length > 0) {
          this.filterStrategyList = this.customerFilterStrategy
          this.strategyId = this.filterStrategyList[0].strategyId
          this.$store.dispatch('portraitDetail/getDayStockSelection', {
            strategyId: this.strategyId,
            pageNum: this.pageNum,
            pageSize: this.pageSize
          }).then(() => {
            if (this.dayStockSelection.length > 0) {
              this.currentStockSelectionList = this.dayStockSelection
            }
          })
        }
      })
    },
    changeStrategy: function(name, code, index) {
      this.stockName = name
      this.innerCode = code
      for (let i = 0; i < document.getElementsByClassName('filter-li').length; i++) {
        document.getElementsByClassName('filter-li')[i].style.backgroundColor = '#141518'
      }
      document.getElementsByClassName('filter-li')[index].style.backgroundColor = '#2e4465'
    },
    formatData: function(val) {
      let getVal
      if (val !== null) {
        getVal = val.toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    }
  },
  mounted() {
    this.initFilterStrategy()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>