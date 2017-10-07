<style lang="scss" scoped="">
.trade-signal {
    width: 50%;
}
.trade-signal-top {
    height: 15%;
    position: relative;
}
.signal-table {
    height: 85%;
}
.signal-tip-img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    cursor: pointer;
}
.signal-window {
    position: absolute;
    background-color: #cccfd9;
    color: #666;
    width: 328px;
    padding: 10px;
    border-radius: 3px;
    line-height: 18px;
    top: 28px;
    right: 10px;
}
</style>
<template>
<div class="trade-signal">
  <div class="trade-signal-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <img src="../../assets/images/signal-tip.png" alt="" class="signal-tip-img" @mouseover="showWindow" @mouseout="hideWindow" />
    <div class="signal-window" v-if="isShowWindow">策略提示的调入、调出信号仅供参考，不作为买卖建议，风险自担！</div>
  </div>
  <div class="signal-table">
    <DataTable :dataList="dataList"></DataTable>
  </div>
</div>
</template>
<script>
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
export default {
  props: ['strategyId'],
  data () {
    return {
      navText: [
        ['调入信号', 'buy'],
        ['调出信号', 'sell']
      ],
      // type: this.showType === undefined ? 'syqxt' : this.showType
      type: 'buy',
      page: 0,
      size: 8,
      dataList: [],
      isShowWindow: false,
      updateDataPid: null,
      intervalTime: 6
    }
  },
  watch: {
    strategyId () {
      this.type = 'buy' // 选择不同策略换成默认买入信号
      this.initTradeSignal()
    },
    type () {
      this.initTradeSignal() // 点击买入/卖出信号初始化表格信号数据
    }
  },
  components: {
    NavBar,
    DataTable
  },
  computed: {
    tradeSignalData: function () {
      const tradeSignalData = this.$store.state.z3touguIndex.tradeSignal
      return tradeSignalData
    }
  },
  methods: {
    changeNavType (data) {
      this.type = data
    },
    initTradeSignal (date) {
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
    showWindow: function () {
      this.isShowWindow = true
    },
    hideWindow: function () {
      this.isShowWindow = false
    },
    autoUpdate: function () {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function () {
          _this.initTradeSignal()
        }, 1000 * _this.intervalTime)
      }
    }
  },
  mounted () {
    this.initTradeSignal()
    this.autoUpdate()
  }
}
</script>
