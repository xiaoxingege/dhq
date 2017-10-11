<style scoped>
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


/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/

::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #eee;
  border-radius: 10px;
}


/*定义滚动条轨道 内阴影+圆角*/

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #515A65;
}


/*定义滑块 内阴影+圆角*/

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  background-color: #808ba1;
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
  /* padding: 20px 20px 15px 20px; */
  padding: 20px 20px 3px 20px;
  background: #141518;
  /* margin-bottom: 3px; */
  border-bottom: 3px solid #0d0e0f;
  position: relative;
  color: #c9d0d7;
}

.table-box {
  border-collapse: collapse;
  width: 100%;
  font-size: 12px;
}

.table-box .td-body {
  /* height: 100px; */
  overflow: auto;
  display: block;
}

.table-box tr th {
  width: 1%;
}

.table-box tr:nth-child(1) {
  /* background: #f2f2f2;
      color: #666; */
  font-size: 12px;
  display: block;
}

.table-box tr td {
  width: 1%;
  /* padding-left: 8px; */
}

.table-box tr:nth-child(1) td {
  height: 30px;
  /* padding-left: 0; */
}

.td-body tr:nth-child(1) td {
  padding-left: 5px;
}

.td {
  border-bottom: 1px solid #23272c;
  text-align: center;
  padding-left: 8px;
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
  /* padding: 5px; */
  padding: 5px 0;
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
  /* margin-left: 8px; */
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

.backtestInfoList {
  /*  min-height: 500px; */
  /* margin-bottom: 10px; */
}

.td-txt {
  position: relative;
}

.td-txt i {
  width: 11px;
  height: 6px;
  display: inline-block;
  position: absolute;
  top: 12px;
  /* right: 15%; */
  padding-left: 4px;
}

.td-txt.active {}

.td-txt.active .sort-down {
  width: 11px;
  height: 6px;
  display: inline-block;
  background: url("../assets/images/z3img/topic-sort-down.png") no-repeat;
}

.td-txt.active .sort-up {
  width: 11px;
  height: 6px;
  display: inline-block;
  background: url("../assets/images/z3img/topic-sort-up.png") no-repeat;
}

.foot-tishi {
  font-size: 12px;
  /* position: absolute;
  bottom: 15px; */
  color: #808ba1;
  background: #141518;
  color: #808ba1;
  line-height: 24px;
  margin-top: 10px;
}


/* .desc-ul tr td{
      border-bottom: none;
    }
    .backtest-filter{
      color:#696969!important;
      :style="{  minHeight: fullHeight + 'px' }"
    } */
</style>
<template>
<div class="backt-buysell-wrap">
  <div class="head" style="padding-bottom: 20px;font-size: 16px;"><i class="back" @click="routerBack"></i><span class="ba-name">{{basicName}}</span><i class="shu"></i><span class="date-in">股票列表<em class="date">{{changeDate(backtestDate)}}</em></span></div>
  <div class="backtestInfoList">
    <div class="tit" v-if="tabledata.td.length==0">
      暂无列表
    </div>
    <table class="table-box" cellpadding="0" cellspacing="0" v-else>
      <tr>
        <td class="t-head">序号</td>
        <td class="t-head">
          <div>股票代码</div>
        </td>
        <td class="t-head">股票简称</td>
        <td class="t-head td-txt" :class="this.stockSort==='sell'?'active':''" @click="isDirebuyType===true?sortStock($event,'desc','sell'):sortStock($event,'asc','sell')">买卖方向<i :class="isDirebuyType===true?'sort-up':'sort-down'"></i></td>
        <td class="t-head">买入日期</td>
        <td class="t-head">卖出日期</td>
        <td class="t-head">买入价格(前复权)</td>
        <td class="t-head">卖出价格</td>
        <td class="t-head">盈亏</td>
        <td class="t-head">收益率</td>
      </tr>
      <tbody>
        <div class="td-body" :style="{  height: fullHeight + 'px' }">
          <tr v-for="(stock,index) of buysell">
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
              <div>{{stock.buySellType}}</div>
            </td>
            <td class="td">
              <div>{{stock.buyDate===null?'--':changeDate(stock.buyDate)}}</div>
            </td>
            <td class="td">
              <div>{{stock.sellDate===null?'--':changeDate(stock.sellDate)}}</div>
            </td>
            <td class="td">
              <div>{{checkNull(stock.buyPrice)}}</div>
            </td>
            <td class="td">
              <div v-z3-updowncolor="stock.winLoss">{{checkNull(stock.sellPrice)}}</div>
            </td>
            <td class="td">
              <div v-z3-updowncolor="stock.winLoss">{{stock.winLoss==null?'--':changePlus(stock.winLoss)}}</div>
            </td>
            <td class="td">
              <div v-z3-updowncolor="stock.returnRatio">{{stock.returnRatio==null?'--':changeAdd(stock.returnRatio)}}</div>
            </td>

          </tr>

        </div>
      </tbody>
    </table>

  </div>
  <p class="foot-tishi">风险提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。</p>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      tabledata: {
        th: ['序号', '股票代码', '股票简称', '买卖方向', '买入日期', '卖出日期', '买入价格(前复权)', '卖出价格', '盈亏', '收益率'],
        td: {}
      },
      strategyId: this.$route.query.strategyId,
      backtestDate: this.$route.query.backtestDate,
      basicName: this.$route.query.basicName,
      direction: '', // desc  卖出   //asc 买入
      isDirebuyType: true,
      stockSort: '',
      fullHeight: document.documentElement.clientHeight - 131
    }
  },
  components: {},
  computed: mapState({
    buysell: state => state.backtestDetail.buysell
  }),

  methods: {
    init (buyPage) {
      this.$store.dispatch('backtestDetail/queryBuysellStocks', {
        strategyId: this.strategyId,
        backtestDate: this.backtestDate,
        sort: this.direction
      })
    },
    routerBack () {
      this.$router.go(-1)
    },
    sortStock (e, dire, str) {
      e.preventDefault()
      this.stockSort = str
      console.log(str)
      this.direction = dire
      // if (type === 'symbol') {
      this.isDirebuyType = !this.isDirebuyType
      // }
      console.log(dire)

      this.init()
      /* this.$store.dispatch('topic/queryStockList', {
         topicCode: this.topicCode,
         sortField: this.stockSort,
         direction: dire,
         stockPage: this.stockPage,
         stockPageSize: this.fullHeight2
       }).then(() => {
         this.stockList = this.stockData
       })*/
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
    changePlus (num) {
      if (num > 0) {
        return '+' + num
      } else if (num <= 0) {
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
    /* var preScrollTop = 0  // 滚动条事件之前文档滚动高度
    var objTopic
    window.onload = function () {
      preScrollTop = (document.documentElement.scrollTop || document.body.scrollTop)
      objTopic = document.getElementById('topic')
    }
    window.onscroll = function () {
      if (preScrollTop !== (document.documentElement.scrollTop || document.body.scrollTop)) {
        preScrollTop = (document.documentElement.scrollTop || document.body.scrollTop)
        objTopic.style.top = preScrollTop + 'px'
      }
    }*/
  }
}
</script>
