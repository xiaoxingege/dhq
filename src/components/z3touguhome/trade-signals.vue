<style lang="scss" scoped="">
.trade-signal {
    width: 50%;
}
.trade-signal-top {
    height: 15%;
}
.signal-table {
    height: 85%;
}
</style>
<template>
<div class="trade-signal">
  <div class="trade-signal-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
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
  data() {
    return {
      navText: [
        ['调入信号', 'buy'],
        ['调出信号', 'sell']
      ],
      // type: this.showType === undefined ? 'syqxt' : this.showType
      type: 'buy',
      page: 0,
      size: 8,
      dataList: []
    }
  },
  watch: {
    strategyId() {
      this.type = 'buy' // 选择不同策略换成默认买入信号
      this.initTradeSignal()
    },
    type() {
      this.initTradeSignal() // 点击买入/卖出信号初始化表格信号数据
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
    }
  },
  mounted() {
    this.initTradeSignal()
  }
}
</script>
