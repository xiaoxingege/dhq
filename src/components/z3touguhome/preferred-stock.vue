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
    text-align: right;
    padding-right: 20px;
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
    padding-left: 48px;
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
    <table class="preferred-stock-table">
      <tr v-for="item of stockList">
        <td><span @click="linkStock(item.innerCode)" v-z3-stock="{ref:'stockbox',code:item.innerCode}" :value="item.innerCode">{{formatData(item.name)?'--':item.name}}</span></td>
        <td v-z3-updowncolor="item.curChngPct">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
        <td v-z3-updowncolor="item.curChngPct">{{formatData(item.curChngPct)?'--':parseFloat(item.curChngPct).toFixed(2)+'%'}}</td>
        <td style="color:#c9d0d7">{{formatData(item.volume)?'--':(parseFloat(item.volume).toFixed(2)>=0?parseFloat(item.volume).toFixed(2):'-'+parseFloat(item.volume).toFixed(2))}}</td>
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
      preferredId: 'gold',
      limit: 10
    }
  },
  watch: {
    type() {
      this.initPreferredStock() // 点击板块标签初始化表格数据
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
      if (value) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    this.initPreferredStock()
    // this.autoUpdate()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
