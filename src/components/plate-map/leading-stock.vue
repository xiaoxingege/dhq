<template>
<div class="lead-stock-box" :style="{maxHeight:boxHeight+'px'}">
  <h3 class="lead-stock-title">{{title}}
    <!--  <span class="close">×</span> -->
  </h3>
  <table class="lead-stock-table" v-if="kLineType === 'stock'">
    <tr style="color:#666;">
      <td>股票代码</td>
      <td>股票简称</td>
      <td>最新价</td>
      <td>涨跌幅</td>
      <td v-if="condition!='mkt_idx.cur_chng_pct'">{{conditionList[condition]}}</td>
    </tr>
    <tr v-for="item of leadStockList">
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol.split('.')[0]}}</td>
      <td style="color:#666;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">
        {{formatData(item.chg)?'--':item.chg>0?'+'+parseFloat(item.chg).toFixed(2)+'%':parseFloat(item.chg).toFixed(2)+'%'}}
      </td>
      <td v-if="condition!='mkt_idx.cur_chng_pct' && condition.indexOf('chng_pct')!=-1" v-z3-updowncolor="item.condition">{{formatData(item.condition)?'--':formatConditionStock(item.condition)}}</td>
      <td v-else-if="condition!='mkt_idx.cur_chng_pct'" style="color:#666;">{{formatData(item.condition)?'--':formatConditionStock(item.condition)}}</td>
    </tr>
  </table>
  <table class="lead-stock-table" v-if="kLineType === 'topic'">
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
      <td v-if="condition!='chg_pct' && condition.indexOf('chg_pct')!=-1" v-z3-updowncolor="item.condition">{{formatData(item.condition)?'--':formatConditionPlate(item.condition)}}</td>
      <td v-else-if="condition!='chg_pct'" style="color:#666;">{{formatData(item.condition)?'--':formatConditionPlate(item.condition)}}</td>
      <td v-z3-updowncolor="item.necessary">{{formatData(item.necessary)?'--':item.necessary>0?'+'+parseFloat(item.necessary).toFixed(2)+'%':parseFloat(item.necessary).toFixed(2)+'%'}}</td>
      <td style="color:#666;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.chg)?'--':item.chg>0?'+'+parseFloat(item.chg).toFixed(2)+'%':parseFloat(item.chg).toFixed(2)+'%'}}</td>
    </tr>
  </table>
  <table class="lead-stock-table" v-if="kLineType === 'industry'">
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
      <td v-if="condition!='chg_pct' && condition.indexOf('chg_pct')!=-1" v-z3-updowncolor="item.condition">{{formatData(item.condition)?'--':formatConditionPlate(item.condition)}}</td>
      <td v-else-if="condition!='chg_pct'" style="color:#666;">{{formatData(item.condition)?'--':formatConditionPlate(item.condition)}}</td>
      <td v-z3-updowncolor="item.necessary">{{formatData(item.necessary)?'--':item.necessary>0?'+'+parseFloat(item.necessary).toFixed(2)+'%':parseFloat(item.necessary).toFixed(2)+'%'}}</td>
      <td style="color:#666;">{{formatData(item.stockName)?'--':item.stockName}}</td>
      <td style="color:#666;">{{formatData(item.symbol)?'--':item.symbol}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.price)?'--':parseFloat(item.price).toFixed(2)}}</td>
      <td v-z3-updowncolor="item.chg">{{formatData(item.chg)?'--':item.chg>0?'+'+parseFloat(item.chg).toFixed(2)+'%':parseFloat(item.chg).toFixed(2)+'%'}}</td>
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
      sort: this.condition.indexOf('peg') !== -1 || (this.condition.indexOf('ps') !== -1 && this.condition.indexOf('eps_5year') === -1) || this.condition.indexOf('pb') !== -1 || this.condition.indexOf('pe_ttm') !== -1 || this.condition.indexOf('fir_fcst_pe') !== -1 || this.condition.indexOf('act_date') !== -1 ? 1 : -1,
      condition: this.condition,
      rangeCode: this.rangeCode || '',
      kLineType: this.kLineType || '',
      isContinue: 1,
      title: this.kLineType === 'stock' ? '领先个股' : this.kLineType === 'topic' ? '领先题材' : '领先行业'
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
    },
    rangeCode() {
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
      if (this.condition === 'act_date') { // 业绩公布日
        const pbDate = new Date(value)
        value = this.dateFormatUtil(pbDate)
      } else if (this.condition === 'mkt_idx.keep_days_today') { // 连续涨跌天数
        value = value + '天';
      } else if (this.condition === 'margin_buy_value') { // 融资融券买入额
        value = this.formatMarginValue(value)
      } else if (this.condition === 'margin_buy_net_value') { // 融资融券净买入额
        value = this.formatMarginValue(value)
      } else if (this.isUnit[this.condition] === '%') { // 涨跌幅和股息率
        if (this.condition !== 'mkt_idx.div_rate') { // 涨跌幅
          if (value >= 0) {
            value = '+' + parseFloat(value).toFixed(2) + '%'
          } else {
            value = parseFloat(value).toFixed(2) + '%'
          }
        } else {
          value = parseFloat(value).toFixed(2) + '%' // 股息率
        }
      } else {
        value = parseFloat(value).toFixed(2);
      }
      return value
    },
    formatConditionPlate(value) {
      if (this.condition.indexOf('tech_index') !== -1) {
        value = Math.ceil(value)
      } else if (this.condition === 'keep_days') {
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
    },
    formatMarginValue(value) {
      if (Math.abs(parseFloat(value)) >= 100000000) {
        value = (parseFloat(value) / 100000000).toFixed(2) + '亿'
      } else if (Math.abs(parseFloat(value)) >= 10000000 && Math.abs(parseFloat(value)) < 100000000) {
        value = (parseFloat(value) / 10000000).toFixed(2) + '千万'
      } else {
        value = (parseFloat(value) / 10000).toFixed(2) + '万'
      }
      return value
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
    position: fixed;
    background: #fff;
    z-index: 999;
    right: 100px;
    top: 35px;
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
.lead-stock-table td {
    width: 70px;
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
