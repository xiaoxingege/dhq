<template>
<div class="lead-stock-box" :style="{maxHeight:boxHeight+'px'}">
  <h3 class="lead-stock-title">领先个股
    <span class="close">×</span>
  </h3>
  <table class="lead-stock-table">
    <tr style="color:#666;">
      <td>股票代码</td>
      <td>股票简称</td>
      <td>最新价</td>
      <td>涨跌幅</td>
      <td>近一周涨跌幅</td>
    </tr>
    <tr v-for="item of positionList">
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol}}</td>
      <td style="color:#1984ea;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td v-z3-updowncolor="item.price">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">
        {{formatData(item.chg)?'--':parseFloat(item.chg).toFixed(2)+'%'}}
      </td>
      <td>{{formatData(item.condition)?'--':item.condition}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  props: ['rangeCode', 'condition', 'isShow', 'boxHeight'],
  data() {
    return {
      isShow: false,
      positionList: [],
      updateDataPid: null,
      intervalTime: 6,
      pageSize: -1
    }
  },
  components: {},
  watch: {
    strategyId() {
      if (!this.strategyId) {
        return
      }
      this.init()
    },
    isShow() {
      console.info(this.isShow);
    },
    positionList() {

    }
  },
  computed: {

  },
  methods: {
    init: function() {
      this.$store.dispatch('stockMap/getLeadStock', {

        })
        .then(() => {
          this.positionList = this.$store.state.stockMap.leadStockData
        })
    },
    autoUpdate: function() {

    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    if (!this.condition) {
      return
    }
    this.init()
    // this.autoUpdate()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.lead-stock-box {
    position: absolute;
    background: #fff;
    z-index: 999;
    width: 350px;
    right: 100px;
    top: 0;
    overflow: hidden;
}

.lead-stock-table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}

.lead-stock-table tr {
    border-bottom: 1px solid #dedede;
    height: 30px;
    text-align: center;
}
.lead-stock-table tr td:first-child {
    padding-left: 10px;
    text-align: left;
}
.lead-stock-table tr td:last-child {
    padding-right: 10px;
    text-align: right;
}
.lead-stock-box h3 {
    font-size: 13.5px;
    font-weight: 700;
    color: #fff;
    margin: 0;
    line-height: 30px;
    padding: 0 10px;
    text-transform: uppercase;
    white-space: nowrap;
    text-align: left;
    background-color: #404852;
    position: relative;
}
.lead-stock-box h3 span {
    position: absolute;
    right: 0;
    top: -1px;
    font-size: 25px;
    width: 30px;
    text-align: center;
    cursor: pointer;
}
</style>
