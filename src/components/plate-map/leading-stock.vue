<template>
<div class="lead-stock-box" :style="{maxHeight:boxHeight+'px'}">
  <h3 class="lead-stock-title">领先个股
    <!--  <span class="close">×</span> -->
  </h3>
  <table class="lead-stock-table" v-if="kLineType === 'stock'" style="width: 350px;">
    <tr style="color:#666;">
      <td>股票代码</td>
      <td>股票简称</td>
      <td>最新价</td>
      <td>涨跌幅</td>
      <td v-if="condition!='mkt_idx.cur_chng_pct'">{{conditionList[condition]}}</td>
    </tr>
    <tr v-for="item of leadStockList">
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol}}</td>
      <td style="color:#1984ea;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">
        {{formatData(item.chg)?'--':parseFloat(item.chg).toFixed(2)+'%'}}
      </td>
      <td v-if="condition!='mkt_idx.cur_chng_pct' && condition.indexOf('chng_pct')!=-1" v-z3-updowncolor="item.condition">{{formatData(item.condition)?'--':formatConditionStock(item.condition)}}</td>
      <td v-else-if="condition!='mkt_idx.cur_chng_pct'" style="color:#666;">{{formatData(item.condition)?'--':formatConditionStock(item.condition)}}</td>
    </tr>
  </table>
  <table class="lead-stock-table" v-if="kLineType === 'topic'" style="width: 500px;">
    <tr style="color:#666;">
      <td>板块名称</td>
      <td v-if="condition!='chg_pct'">{{conditionList[condition]}}</td>
      <td>板块涨跌幅</td>
      <td>龙头股</td>
      <td>股票代码</td>
      <td>最新价</td>
      <td>涨跌幅</td>
    </tr>
    <tr v-for="item of topicLeadStockList">
      <td style="color:#666;">{{formatData(item.dataCode)?'--':item.dataCode}}</td>
      <td v-if="condition!='chg_pct' && condition.indexOf('chg_pct')!=-1" v-z3-updowncolor="item.conditionValue">{{formatData(item.conditionValue)?'--':formatConditionPlate(item.conditionValue)}}</td>
      <td v-else-if="condition!='chg_pct'" style="color:#666;">{{formatData(item.conditionValue)?'--':formatConditionPlate(item.conditionValue)}}</td>
      <td v-z3-updowncolor="item.condition">{{formatData(item.condition)?'--':parseFloat(item.condition).toFixed(2)}}%</td>
      <td style="color:#666;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.chg)?'--':parseFloat(item.chg).toFixed(2)+'%'}}</td>
    </tr>
  </table>
  <table class="lead-stock-table" v-if="kLineType === 'industry'" style="width: 500px;">
    <tr style="color:#666;">
      <td>板块名称</td>
      <td v-if="condition!='chg_pct'">{{conditionList[condition]}}</td>
      <td>板块涨跌幅</td>
      <td>龙头股</td>
      <td>股票代码</td>
      <td>最新价</td>
      <td>涨跌幅</td>
    </tr>
    <tr v-for="item of industryLeadStockList">
      <td style="color:#666;">{{formatData(item.dataCode)?'--':item.dataCode}}</td>
      <td v-if="condition!='chg_pct' && condition.indexOf('chg_pct')!=-1" v-z3-updowncolor="item.conditionValue">{{formatData(item.conditionValue)?'--':formatConditionPlate(item.conditionValue)}}</td>
      <td v-else-if="condition!='chg_pct'" style="color:#666;">{{formatData(item.conditionValue)?'--':formatConditionPlate(item.conditionValue)}}</td>
      <td v-z3-updowncolor="item.condition">{{formatData(item.condition)?'--':parseFloat(item.condition).toFixed(2)}}%</td>
      <td style="color:#666;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.chg)?'--':parseFloat(item.chg).toFixed(2)+'%'}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  props: ['rangeCode', 'condition', 'isShow', 'boxHeight', 'conditionList', 'kLineType', 'isUnit'],
  data() {
    return {
      isShow: false,
      leadStockList: [],
      topicLeadStockList: [],
      industryLeadStockList: [],
      updateDataPid: null,
      intervalTime: 6,
      pageSize: 50,
      sort: 1,
      condition: this.condition,
      rangeCode: this.rangeCode,
      kLineType: this.kLineType || '',
      isContinue: 1
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
    condition() {
      this.init()
    }
  },
  computed: {

  },
  methods: {
    init: function() {
      if (this.kLineType === 'stock') {
        this.$store.dispatch('stockMap/getLeadStock', {
            size: this.pageSize,
            sort: this.sort,
            condition: this.condition,
            industryCode: this.rangeCode,
            isContinue: 1
          })
          .then(() => {
            this.leadStockList = this.$store.state.stockMap.leadStockData
          })
      } else if (this.kLineType === 'topic') {
        this.$store.dispatch('plateMap/getTopicLeadStock', {
            size: this.pageSize,
            sort: this.sort,
            condition: this.condition,
            isContinue: 1
          })
          .then(() => {
            this.topicLeadStockList = this.$store.state.plateMap.topicLeadStock
            const topicValue = this.$store.state.plateMap.topicValue
            this.topicLeadStockList.forEach(function(stock) {
              stock.conditionValue = topicValue[stock.dataCode] // 浏览指标值
            })
          })
      } else if (this.kLineType === 'industry') {
        this.$store.dispatch('plateMap/getIndustryLeadStock', {
            size: this.pageSize,
            sort: this.sort,
            condition: this.condition,
            isContinue: 1
          })
          .then(() => {
            this.industryLeadStockList = this.$store.state.plateMap.industryLeadStock
            const industryValue = this.$store.state.plateMap.industryValue
            this.industryLeadStockList.forEach(function(stock) {
              stock.conditionValue = industryValue[stock.dataCode] // 浏览指标值
            })
          })
      }
    },
    autoUpdate: function() {

    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    formatConditionStock(value) {
      if (value === 'act_date') {
        const pbDate = new Date(value)
        value = this.dateFormatUtil(pbDate)
      } else if (this.condition === 'mkt_idx.keep_days_today') {
        value = value + '天';
      } else if (this.condition === 'margin_buy_value') {
        value = value >= 10 ? (value / 10).toFixed(2) + '亿' : (value > 1 && value < 10 ? value.toFixed(2) + '千万' : (1000 * value).toFixed(2) + '万')
      } else if (this.condition === 'margin_buy_net_value') {
        value = Math.abs(value) >= 10000 ? (value / 10000).toFixed(2) + '亿' : (Math.abs(value) > 1000 && Math.abs(value) < 10000 ? (value / 1000).toFixed(2) + '千万' : value.toFixed(2) + '万')
      } else if (this.isUnit[this.condition] === '%') {
        if (this.condition !== 'mkt_idx.div_rate') {
          if (value >= 0) {
            value = '+' + parseFloat(value).toFixed(2) + '%'
          } else {
            value = parseFloat(value).toFixed(2) + '%'
          }
        } else {
          value = parseFloat(value).toFixed(2) + '%'
        }
      } else {
        value = parseFloat(value).toFixed(2);
      }
      return value
    },
    formatConditionPlate(value) {
      if (this.condition === 'keep_days') {
        value = value + '天';
      } else if (this.isUnit[this.condition] === '%') {
        if (this.conditionStock !== 'mkt_idx.div_rate') {
          if (value >= 0) {
            value = '+' + parseFloat(value).toFixed(2) + '%'
          } else {
            value = parseFloat(value).toFixed(2) + '%'
          }
        } else {
          value = parseFloat(value).toFixed(2) + '%'
        }
      } else {
        value = parseFloat(value).toFixed(2);
      }
      return value
    },
    dateFormatUtil: function(date) {
      var dateTypeDate = ''
      dateTypeDate += date.getFullYear() // 年
      dateTypeDate += '-' + this.getMonth(date) // 月
      dateTypeDate += '-' + this.getDay(date) // 日
      return dateTypeDate
    },
    getMonth: function(date) {
      let month = ''
      month = date.getMonth() + 1 // getMonth()得到的月份是0-11
      if (month < 10) {
        month = '0' + month
      }
      return month
    },
    getDay: function(date) {
      let day = ''
      day = date.getDate()
      if (day < 10) {
        day = '0' + day
      }
      return day
    }
  },
  mounted() {
    if (!this.condition) {
      return
    }
    this.init()
  },
  destroyed() {

  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/style.scss";
.lead-stock-box {
    position: absolute;
    background: #fff;
    z-index: 999;
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
