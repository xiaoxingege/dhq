<style lang="scss" scoped="">
.portrait-trade-signal {
    width: 40%;
}
.portrait-trade-signal-top {
    height: 16.5%;
    position: relative;
}
.portrait-signal-table {
    height: 83.5%;
}
.portrait-signal-title {
    width: 100%;
    height: 15%;
    position: relative;
}
.portrait-signal-more {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
}
.portrait-signal-more a {
    color: #1984ea;
}
.portrait-trade-signal-top > div {
    background-color: #141518;
    padding-left: 10px;
}
.portrait-trade-signal-top li {
    width: 65px;
}
.portrait-trade-signal-top li span {
    width: 65px;
}
.portrait-table-wrap {
    width: 100%;
    height: 100%;
}
.portrait-data-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.portrait-data-table td {
    text-align: left;
    box-sizing: border-box;
    height: 16.66%;
}
.portrait-data-table tr td:first-child {
    text-align: left;
    color: #c9d0d7;
    padding-right: 0;
    padding-left: 10px;
}
.portrait-no-data {
    width: 100%;
    height: 100%;
    position: relative;
}
.portrait-no-data span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #808ba1;
}
.portrait-signal-con {
    height: 85%;
    border: 1px solid #23272c;
    border-left: 0 solid #23272c;
}
</style>
<template>
<div class="portrait-trade-signal">
  <div class="portrait-signal-title">
    <!-- p class="portrait-signal-more" @click="toStrategyList"-->
    <p class="portrait-signal-more">
      <a>更多>></a>
    </p>
  </div>
  <div class="portrait-signal-con">
    <div class="portrait-trade-signal-top">
      <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    </div>
    <div class="portrait-signal-table">
      <div class="portrait-table-wrap">
        <div v-if="isNoData" class="portrait-no-data">
          <span>暂无信号</span>
        </div>
        <table v-if="!isNoData" class="portrait-data-table" :style='{height:dataList.length/6+"px"}'>
          <tbody>
            <tr v-for="item of dataList">
              <td :value="item.innerCode" class="stock-hover">{{item.name === null?'--':item.name}}</td>
              <td v-z3-updowncolor="item.chgPct">{{item.px === null?'--':item.px.toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chg">{{item.chg === null?'--':item.chg.toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chgPct">{{formatData(item.chgPct)}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
export default {
  props: ['strategyId'],
  data() {
    return {
      navText: [
        ['调入信号', 'buy'],
        ['调出信号', 'sell']
      ],
      // type: this.showType === undefined ? 'syqxt' : this.showType
      type: 'buy',
      page: 0,
      size: 6,
      dataList: [],
      updateDataPid: null,
      intervalTime: 6,
      isNoData: false
    }
  },
  watch: {
    strategyId() {
      this.type = 'buy' // 选择不同策略换成默认买入信号
      this.initTradeSignal()
    },
    type() {
      this.initTradeSignal() // 点击买入/卖出信号初始化表格信号数据
    },
    dataList() {
      if (this.dataList.length > 0) {
        this.isNoData = false
      } else {
        this.isNoData = true
      }
    }
  },
  components: {
    NavBar,
    DataTable
  },
  computed: {
    tradeSignalData: function() {
      const tradeSignalData = this.$store.state.z3touguIndex.tradeSignal
      return tradeSignalData
    }
  },
  methods: {
    changeNavType(data) {
      this.type = data
    },
    initTradeSignal(date) {
      this.$store.dispatch('z3touguIndex/getTradeSignal', {
          strategyId: this.strategyId,
          buySellType: this.type,
          page: this.page,
          size: this.size
        })
        .then(() => {
          this.dataList = this.tradeSignalData
        })
    },
    showWindow: function() {
      this.isShowWindow = true
    },
    hideWindow: function() {
      this.isShowWindow = false
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initTradeSignal()
        }, 1000 * _this.intervalTime)
      }
    },
    toStrategyList: function() {
      window.open('goldTop')
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
    this.initTradeSignal()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
