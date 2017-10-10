<style>
@import '../assets/css/base.css';
input {
  outline: none;
}

* {
  /* font-size: 12px; */
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
}

body {
  background: #141518;
}

.clearfix:after {
  display: block;
  content: '';
  clear: both;
}

a,
.blue {
  color: #1984ea;
}

.blue {
  color: #1984ea;
  font-size: 12px;
}

.backt-buysell-wrap {
  /* padding: 11px 3px 8px 8px; */
  padding: 20px 20px 15px 20px;
  background: #141518;
  margin-bottom: 3px;
  position: relative;
  color: #c9d0d7;
}

.table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

.table-box tr:nth-child(1) {
  /* background: #f2f2f2;
      color: #666; */
  font-size: 12px;
}

.table-box tr:nth-child(1) td {
  height: 30px;
}

.td {
  border-bottom: 1px solid #23272c;
  text-align: center;
}

.t-head {
  border-bottom: none;
  background: #23272c;
  color: #c9d0d7;
  text-align: center;
}

td,
th {
  word-break: break-all;
  height: 30px;
}

.td div {
  padding: 5px;
}

.head {
  /*  margin-top: 20px; */
  /* padding:0 0 14px 3px; */
  /* padding-bottom: 20px; */
  font-size: 16px;
  font-weight: normal;
  position: relative;
  color: #c9d0d7;
}

.head .back {
  width: 16px;
  height: 12px;
  display: inline-block;
  background: url("../assets/images/z3img/buysell-back.png") no-repeat;
  /* margin-right: 8px; */
  margin-left: 6px;
  cursor: pointer;
  position: absolute;
  top: 5px;
}

.ba-name {
  padding-left: 22px;
  font-size: 16px;
}

.shu {
  margin: 0 24px;
  display: inline-block;
  width: 1px;
  height: 12px;
  background: #808ba1;
}

.date-in {
  margin-left: 8px;
  font-size: 16px;
}

.date {
  margin-left: 11px;
  font-size: 16px;
}

.sell {
  width: 44px;
  display: inline-block;
  border: 1px solid #56a870;
  color: #56a870;
  text-align: center;
  /*  padding: 4px 0 5px 0; */
  padding: 0px 0 2px 0;
  border-radius: 2px;
  font-size: 14px;
}

.buy {
  border: 1px solid #ca4941;
  color: #ca4941;
}

.tit {
  text-align: center;
  line-height: 50px;
  font-size: 12px;
}

.one-td {
  /* width: 18%; */
}

.backt-buysell-wrap .page {
  background: #141518;
  text-align: center;
}

.backt-buysell-wrap .page ul li {
  background: #23272c;
  color: #c9d0d7
}

.backt-buysell-wrap .page ul li.active {
  background: #1984ea;
}

.backt-buysell-wrap .page select {
  background: #23272c;
  color: #c9d0d7
}

.backtestInfoList {
  /*  min-height: 500px; */
}

.foot-tishi {
  font-size: 12px;
  position: absolute;
  bottom: 15px;
  color: #808ba1;
}


/* .desc-ul tr td{
      border-bottom: none;
    }
    .backtest-filter{
      color:#696969!important;
    } */
</style>
<template>
<div class="backt-buysell-wrap">
  <div class="head" style="padding-bottom: 20px;font-size: 16px;"><i class="back" @click="routerBack"></i><span class="ba-name">{{basicName}}</span><i class="shu"></i><em class="sell" :class="stockType==='buyStocks'?'buy':''">{{stockType==='buyStocks'?'买入':'卖出'}}</em><span class="date-in">股票列表<em class="date">{{changeDate(backtestDate)}}</em></span></div>
  <div class="backtestInfoList" :style="{  minHeight: fullHeight + 'px' }">
    <div class="tit" v-if="tabledata.td.length==0">
      暂无列表
    </div>
    <table class="table-box" v-else>
      <tr>
        <td v-for="(item,index) in tabledata.th" class="t-head">
          {{item}}
        </td>
      </tr>
      <tr v-for="(stock,index) of buyStocks">
        <td class="one-td td">
          <div>{{index+1}}</div>
        </td>
        <td class="td">
          <div>{{stock.innerCode}}</div>
        </td>
        <td class="td">
          <div class="blue"><a :href="'/stock/'+ stock.innerCode" target="_blank">{{stock.name}}</a></div>
        </td>
        <td class="td">
          <div>{{checkNull(stock.buyPrice)}}</div>
        </td>
        <td class="td">
          <div v-z3-updowncolor="stock.winLoss">{{checkNull(stock.sellPrice)}}</div>
        </td>
        <td class="td">
          <div v-z3-updowncolor="stock.winLoss">{{stock.winLoss>=0?stock.winLoss===0?stock.winLoss:'+'+checkNull(stock.winLoss):checkNull(stock.winLoss)}}</div>
        </td>
        <td class="td">
          <div v-z3-updowncolor="stock.returnRatio">{{stock.returnRatio==null?'--':changeAdd(stock.returnRatio)}}</div>
        </td>

      </tr>
    </table>

  </div>
  <Pagination @getPageFromChild="goToPage" :totalPage="totalPage" style="background: #141518" />
  <p class="foot-tishi">温馨提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。</p>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Pagination from './pagination'
export default {
  data () {
    return {
      tabledata: {
        th: ['序号', '股票代码', '股票简称', '买入价格', '卖出价格', '盈亏', '收益率'],
        td: {}
      },
      strategyId: this.$route.query.strategyId,
      backtestDate: this.$route.query.backtestDate,
      stockType: this.$route.query.stockType,
      basicName: this.$route.query.basicName,
      buyPage: 0,
      buyPagesize: '',
      fullHeight: document.documentElement.clientHeight - 210
    }
  },
  components: {
    Pagination
  },
  computed: mapState({
    buyStocks: state => state.backtestDetail.buyStocks,
    totalPage: state => state.backtestDetail.buyTotalPage
  }),

  methods: {
    init (buyPage) {
      console.log(this.buyPage)
      this.$store.dispatch('backtestDetail/queryBuyStocks', {
        stockType: this.stockType,
        strategyId: this.strategyId,
        backtestDate: this.backtestDate,
        buyPage: this.buyPage,
        buyPageSize: this.buyPagesize
      })
    },
    goToPage (page) {
      this.buyPage = Number(page) - 1
    },
    routerBack () {
      this.$router.go(-1)
    },
    checkNull (str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    changeAdd (num) {
      if (num > 0) {
        return '+' + (Number(num) * 100).toFixed(2) + '%'
      } else if (num < 0) {
        return (Number(num) * 100).toFixed(2) + '%'
      } else if (num === 0) {
        return num
      }
    },
    changePer (num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeTofixed (num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    changeDate (time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }
  },
  watch: {
    buyPage () {
      this.init(this.buyPage)
    }

  },
  mounted () {
    this.init()
    console.log(this.$route.query.strategyId)
  }
}
</script>
