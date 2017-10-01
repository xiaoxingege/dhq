<style lang="scss">
@import '../assets/css/base.css';

* {
    text-align: justify;
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
}

body {
    font-size: 12px;
    background: #f2f2f2;
}

.blue {
    color: #2388da;
    font-size: 12px;
}

.red {
    color: #e6363a;
}

.green {
    color: #48a854;
}

.fr {
    float: right;
}

.fl {
    float: left;
}

/*  */
.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}

.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}

.backtest-filter {
    background: #f2f2f2;
    color: #696969;
    width: 100%;
}

/*  .bfilter-main{
           padding: 0 10px 0;
        } */
.backtest-filter.backtest-filter2 .describe-box {
    background: #fff;
    color: #808ba1;
}

.backtest-filter2 .describe-box .bfilter-header {
    color: #808ba1;
}

.backtest-filter2 .describe-wrap.display-box {
    display: initial;
}

.backtest-filter2 .describe-wrap .describe-left {
    /* width: 100%; */
    width: 100%;
    box-sizing: border-box;
    /*  padding: 14px 0px 0 10px; */
}

.backtest-filter2 .describe-wrap .describe-right {
    width: 100%;
    margin-top: 10px;
    margin-left: 0;
    padding: 14px 0 0 10px;
}

.backtest-filter2 .describe-wrap .box-flex-2 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}

.backtest-filter2 .describe-wrap .desc-txt {
    text-align: left;
    color: #a5a5a5;
}

.describe-wrap .desc-txt .desc-num {
    position: absolute;
    top: 20px;
    left: 0;
    color: #696969;
    line-height: 15px;
    text-align: left;
    width: 100%;
}

.backtest-filter2 .describe-wrap .desc-ul td {
    text-align: left;
}

.backtest-filter2 .describe-wrap .desc-txt2 {
    width: 20%;
    height: 4rem;
    padding-bottom: 0;
}

.backtest-filter2 .describe-wrap .desc-txt3 {
    /* width: 34%; */
    width: 42%;
}

.backtest-filter2 .describe-wrap .desc-txt4 {
    /* width: 18%; */
    width: 16%;
}

.backtest-filter2 .describe-wrap .desc-txt5 {
    /*  width: 22%; */
    width: 26%;
}

.backtest-filter2 .describe-wrap .desc-txt6 {
    width: 16%;
}

/* .bfilter-main .describe-box{
          width: 97.5%;
        } */
.filter-top {
    background: url("../assets/images/z3img/backh5-top.png") no-repeat;
    width: 100%;
    height: 3.6rem;
    background-size: 100% 100%;
    text-align: center;
}

.filter-top span {
    color: #fff;
    text-align: center;
    font-size: 12px;
    padding-top: 18px;
    display: inline-block;
}

.bfilter-content {

    background-size: #fff;
}

.bfilter-cont-1 {
    background: #fff;
    padding-top: 23px;
}

.desc-title {
    color: #333333;
    font-size: 30px;
}

.desc-title em {
    width: 6px;
    height: 32px;
    background: #fc4040;
    display: inline-block;
    margin-right: 24px;
}

.desc-con {
    line-height: 20px;
    padding: 20px;
}

.desc-ul {
    padding: 0 0 26px 20px;
    width: 100%;

}
.desc-ul tr:nth-child(1) td {
    font-size: 12px;
    color: #888888;
}
.desc-ul tr:nth-child(2) td {
    /* padding-top: 12px; */
    /* color: #c9d0d7; */
    font-size: 14px;
    color: #333333;
}

.desc-ul td {
    /* width: 20%; */
    color: #888888;
    text-align: left;
    line-height: 20px;
}

.bfilter-cont-3 {
    margin-top: 20px;
}

.eval-tr1 {}

.eval-tr2 {}

.evaluat-box {
    padding: 20px;
}
.evaluat-box tr:nth-child(1) td {}
.evaluat-box tr:nth-child(2) td {
    padding-top: 14px;
}

.desc-date {
    font-size: 12px;
    color: #c3c3c3;
}

.desc-txt1 {
    padding-bottom: 13px;
}

.bfilter-cont-4 {
    margin-top: 20px;
}

.right-table {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
}
.right-table tr:nth-child(1) {
    background: #f5f5f5;
    height: 2rem;
    border-top: 1px solid #e6e6e6;
}
.right-table tr:nth-child(1) td {
    color: #888888;
    line-height: 2rem;
}
.right-table tr td:nth-child(1) {
    padding-left: 20px;
}

.right-table tr td {
    border-bottom: 1px solid #e6e6e6;
    height: 3rem;
}
</style>
<template>
<div class="backtest-filter backtest-filter2">
  <div class="bfilter-main">
    <div class="filter-top"><span>{{basicFilter.strategyName}}</span></div>
    <div class="bfilter-content">
      <div class="bfilter-cont-1">
        <div class="desc-title"><em></em>策略描述</div>
        <div class="desc-con">
          {{ basicFilter.strategyDesc}}
        </div>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-2">
        <div class="desc-title"><em></em>选股条件</div>
        <table class="desc-ul">
          <tr v-for="trItem in filterSummary" class="trtxt">
            <td v-for="tdItem in trItem" class="tdtxt">{{tdItem}}</td>
          </tr>
        </table>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-3">
        <div class="desc-title"><em></em>策略表现
          <div class="desc-date fr">
            <span>回测区间
                           </span><span class="desc-num1">{{basicFilter.backtestStartDate==null?'--':changeDate(basicFilter.backtestStartDate)}}～{{basicFilter.backtestEndDate==null?'--':changeDate(basicFilter.backtestEndDate)}}</span>
          </div>
        </div>
        <div class="evaluat-box display-box">
          <div class="eval-tr1 clearfix box-flex-1">
            <div class="desc-txt1">
              <span>胜率
                            </span><span class="desc-num1" v-z3-updowncolor="eval.winRatio">{{eval.winRatio==null?'--':changePer(eval.winRatio)}}</span>
            </div>
            <div class="desc-txt1">
              <span>平均收益
                            </span><span class="desc-num1" v-z3-updowncolor="eval.avgReturn">{{eval.avgReturn==null?'--':changePer(eval.avgReturn)}}</span>
            </div>
            <div class="desc-txt1">
              <span>持有天数
                            </span><span class="desc-num1">{{basicFilter.holdDay==null?'--':basicFilter.holdDay}}</span>
            </div>
            <div class="desc-txt1">
              <span>最大亏损
                            </span><span class="desc-num1" v-z3-updowncolor="eval.maxLoss">{{eval.maxLoss==null?'--':changePer(eval.maxLoss)}}</span>
            </div>


          </div>
          <div class="eval-tr2 clearfix box-flex-1">
            <div class="desc-txt1">
              <span>平均超额收益
                            </span><span class="desc-num1" v-z3-updowncolor="eval.avgReturnExcess">{{eval.avgReturnExcess==null?'--':changePer(eval.avgReturnExcess)}}</span>
            </div>
            <div class="desc-txt1">
              <span>盈亏比
                            </span><span class="desc-num1">{{eval.winLossRatio==null?'--':Number(eval.winLossRatio).toFixed(2)}}</span>
            </div>
            <div class="desc-txt1">
              <span>最大盈利
                            </span><span class="desc-num1" v-z3-updowncolor="eval.maxWin">{{eval.maxWin==null?'--':changePer(eval.maxWin)}}</span>
            </div>


          </div>
        </div>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-4">
        <div class="desc-title"><em></em>当前选股</div>
        <table class="right-table clearfix" :style="{  height: fullHeight3 + 'px' }">
          <tr>
            <td>股票名称</td>
            <td class="td-txt">最新价</td>
            <td class="td-txt">涨跌</td>
            <td class="td-txt">涨跌幅</td>
          </tr>
          <tr v-for="(stock,index) of nowChooseStock">
            <td><span class="blue">{{stock.name}}</span></br>
              <small class="num-td">{{stock.innerCode}}</small>
            </td>
            <td v-z3-updowncolor="stock.curChngPct">{{stock.price==null?'--':stock.price}}</td>
            <td v-z3-updowncolor="stock.curChngPct">
              {{stock.chg>=0?stock.chg===0?stock.chg:'+'+checkNull(stock.chg):checkNull(stock.chg)}}
            </td>
            <td class="gray" v-z3-updowncolor="stock.curChngPct">
              {{stock.curChngPct==null?'--':changeTofixed(stock.curChngPct)}}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>


</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
      strategyId: this.$route.params.strategyId
    }
  },

  computed: {
    ...mapState({
      basicFilter: state => state.backtestDetail.basicFilter,
      eval: state => state.backtestDetail.basicFilter.evaluationIndexs,
      nowChooseStock: state => state.backtestDetail.nowStock,
      filterSummary: state => {
        const choseStockTable = state.backtestDetail.basicFilter.filterSummary
        const arr1 = []
        const arr2 = []
        if (choseStockTable.jszbList != null || choseStockTable.gkzbList != null || choseStockTable.jbmzbList != null || choseStockTable.xgfwList != null) {
          if (choseStockTable.jszbList.length > 0) {
            for (let i = 0; i < choseStockTable.jszbList.length; i++) {
              arr1.push(choseStockTable.jszbList[i].indexName)
              arr2.push(choseStockTable.jszbList[i].indexValue)
            }
          }
          if (choseStockTable.gkzbList.length > 0) {
            for (let i = 0; i < choseStockTable.gkzbList.length; i++) {
              arr1.push(choseStockTable.gkzbList[i].indexName)
              arr2.push(choseStockTable.gkzbList[i].indexValue)
            }
          }
          if (choseStockTable.jbmzbList.length > 0) {
            for (let i = 0; i < choseStockTable.jbmzbList.length; i++) {
              arr1.push(choseStockTable.jbmzbList[i].indexName)
              arr2.push(choseStockTable.jbmzbList[i].indexValue)
            }
          }
          if (choseStockTable.xgfwList.length > 0) {
            for (let i = 0; i < choseStockTable.xgfwList.length; i++) {
              arr1.push(choseStockTable.xgfwList[i].indexName)
              arr2.push(choseStockTable.xgfwList[i].indexValue)
            }
          }
        }
        return [arr1, arr2]
      }
    })
  },
  components: {},
  methods: {
    checkNull (str) {
      if (str === null) {
        return '--'
      } else {
        return str
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
  mounted () {
    this.$store.dispatch('backtestDetail/queryBasicFilter', {
      strategyId: this.strategyId
    })
    this.$store.dispatch('backtestDetail/queryNowStock', {
      strategyId: this.strategyId,
      stockPage: this.stockPage,
      stockPagesize: this.stockPagesize
    })
    // console.log(state.backtestDetail.basicFilter.filterSummary)
    this.$watch('basicFilter', function (basicFilter) {
      if (basicFilter) {
        console.log(this.$emit('basicFilterName', basicFilter.strategyName))
        this.$emit('basicFilterName', basicFilter.strategyName)
      }
    })
  }

}
</script>
