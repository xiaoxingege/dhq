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
  height: 100%;
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
  border: 1px solid #23272c;
  padding: 4px 10px;
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
  padding-left: 1px;
}

.filter-stock-table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  background: #23272c;
}

.filter-stock-table th {
  background-color: #23272c;
  color: #c9d0d7;
  padding: 4px 10px;
  text-align: left;
}

.filter-stock-table td {
  box-sizing: border-box;
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

.li-focus {
  background-color: #2e4465
}
</style>
<template>
<div style="height:100%;">
  <div class="portrait-filer-title">
    <span class="portrait-filter-lable">筛股策略</span>
    <!--p class="portrait-fiter-more" @click="toStrategyList">
      <a>更多>></a>
    </p-->
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
          <tr v-for="(item,index) of filterStrategyList" @click='changeStrategy(item.strategyId,index)' class="filter-li" :class="{'li-focus':index === liIndex}">
            <td>{{item.strategyName === null?'--':item.strategyName}}</td>
            <td>{{item.winRatio === null?'--':(item.winRatio*100).toFixed(2)+'%'}}</td>
            <td>{{item.winLossRatio === null?'--':item.winLossRatio.toFixed(2)}}</td>
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
          <thead>
            <tr>
              <th>当前选股</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of currentStockSelectionList">
              <td>{{item.name === null?'--':item.name}}</td>
              <td v-z3-updowncolor="item.chg">{{item.price === null?'--':item.price.toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chg">{{item.chg === null?'--':item.chg.toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chg">{{formatData(item.curChngPct)}}</td>
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
      clientPassport: this.$route.params.clientPassport || 3454565,
      pageNum: 0,
      pageSize: 4,
      liIndex: 0
    }
  },
  watch: {
    strategyId() {
      this.initDayStockSelection()
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
          this.initDayStockSelection()
        }
      })
    },
    initDayStockSelection: function() {
      this.$store.dispatch('portraitDetail/getDayStockSelection', {
        strategyId: this.strategyId,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(() => {
        if (this.dayStockSelection.length > 0) {
          this.currentStockSelectionList = this.dayStockSelection
        }
      })
    },
    changeStrategy: function(id, index) {
      this.strategyId = id
      this.liIndex = index
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initDayStockSelection()
        }, 1000 * _this.intervalTime)
      }
    },
    toStrategyList: function() {
      window.open('filterTop')
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
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>