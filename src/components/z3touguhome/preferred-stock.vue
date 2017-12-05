<style lang="scss" scoped="">
.preferred-stock-con {
    width: 100%;
}

.preferred-stock-top {
    height: 11.5%;
    position: relative;
}

.preferred-stock-table-wrap {
    height: 88.5%;
}

.preferred-stock-table {
    float: left;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.preferred-stock-table tr:hover {
    background-color: #2e4465;
}

.preferred-stock-table td span {
    cursor: pointer;
}

.preferred-stock-table td {
    border: 1px solid #23272c;
    text-align: center;
    height: 10%;
}
.preferred-stock-table tr:nth-child(1) td {
    border-top-width: 0;
}
.preferred-stock-table tr:last-child td {
    border-bottom-width: 0;
}
.preferred-stock-table tr td:last-child {
    border-right-width: 0;
}
.preferred-stock-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    color: #c9d0d7;
    padding-right: 0;
    border-left-width: 0;
}

.more-preferred-stock {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
    height: 100%;
}

.more-preferred-stock a {
    color: #808ba1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
.no-data-stock {
    width: 100%;
    height: 100%;
    position: relative;
}
.no-data-stock span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #808ba1;
}
</style>
<template>
<div class="preferred-stock-con">
  <div class="preferred-stock-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <p class="more-preferred-stock" @click="toGoldStockPool">
      <a>更多></a>
    </p>
  </div>
  <div class="preferred-stock-table-wrap clearfix">
    <div v-if="isNoData" class="no-data-stock">
      <span>暂无数据</span>
    </div>
    <table class="preferred-stock-table" v-if="!isNoData">
      <tr v-for="item of stockList">
        <td><span @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formatData(item.name)?'--':item.name}}</span></td>
        <td v-z3-updowncolor="item.curChngPct">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.curChngPct">{{formatData(item.curChngPct)?'--':parseFloat(item.curChngPct).toFixed(2)+'%'}}</td>
        <td style="color:#c9d0d7;text-align: right;padding-right: 20px;">{{formatData(item.tvolLot)?'--':formatDataRound(item.tvolLot)}}</td>
      </tr>
      <tr v-for="item of noDataList">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.curChngPct}}</td>
        <td>{{item.totlNum}}</td>
      </tr>
    </table>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
import StockBox from 'components/stock-box'
export default {
  data() {
    return {
      navText: [
        ['策略优选', 'strategyTop'],
        ['信号优选', 'signalTop'],
        ['题材优选', 'topicTop'],
        ['行业优选', 'industryTop']
      ],
      type: 'strategyTop',
      stockList: [],
      updateDataPid: null,
      intervalTime: 6,
      preferredType: 'strategy',
      preferredId: 'nearWeekReturn',
      limit: 10,
      noDataList: []
    }
  },
  watch: {
    type() {
      this.initPreferredStock()
    },
    stockList() {
      this.noDataList = []
      if (this.stockList.length > 0) {
        if (this.stockList.length < 10) {
          const noDataListLength = 10 - this.stockList.length
          for (let i = 0; i < noDataListLength; i++) {
            this.noDataList.push({
              name: '',
              price: '',
              curChngPct: '',
              totlNum: ''
            })
          }
        }
        this.isNoData = false
      } else {
        this.isNoData = true
      }
    }
  },
  components: {
    NavBar,
    DataTable,
    StockBox
  },
  computed: {
    preferredIndustryData: function() {
      const preferredIndustryData = this.$store.state.z3touguIndex.preferredIndustryData
      return preferredIndustryData
    },
    preferredTopicData: function() {
      const preferredTopicData = this.$store.state.z3touguIndex.preferredTopicData
      return preferredTopicData
    },
    preferredStrategyData: function() {
      const preferredStrategyData = this.$store.state.z3touguIndex.preferredStrategyData
      return preferredStrategyData
    },
    preferredSignalData: function() {
      const preferredSignalData = this.$store.state.z3touguIndex.preferredSignalData
      return preferredSignalData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initPreferredStock() {
      if (this.type === 'strategyTop') {
        this.$store.dispatch('z3touguIndex/getPreferredStrategyData', {
            type: this.preferredType,
            id: this.preferredId,
            limit: this.limit
          })
          .then(() => {
            this.stockList = this.preferredStrategyData.slice(0, 11)
          })
      } else if (this.type === 'signalTop') {
        this.$store.dispatch('z3touguIndex/getPreferredSignalData')
          .then(() => {
            this.stockList = this.preferredSignalData
          })
      } else if (this.type === 'topicTop') {
        this.$store.dispatch('z3touguIndex/getPreferredTopicData')
          .then(() => {
            this.stockList = this.preferredTopicData
          })
      } else if (this.type === 'industryTop') {
        this.$store.dispatch('z3touguIndex/getPreferredIndustryData')
          .then(() => {
            this.stockList = this.preferredIndustryData
          })
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initPreferredStock()
        }, 1000 * _this.intervalTime)
      }
    },
    linkStock: function(innerCode) {
      if (innerCode) {
        window.open('/stock/' + innerCode)
      }
    },
    toGoldStockPool: function() {
      window.open('goldStockPool')
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    formatDataRound: function(value) {
      if (value > 10000) {
        value = Math.round(value / 10000) + '万手'
      } else {
        value = Math.round(value) + '手'
      }
      return value
    }
  },
  mounted() {
    this.initPreferredStock()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
