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
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.backtest-filter {
    background: #f2f2f2;
    color: #696969;
    width: 100%;
}
.backtest-filter2 {
    background: #f2f2f2;
    color: #696969;
    line-height: 15px;
    text-align: left;
    width: 100%;
}

.filter-top {
    background: url("../assets/images/z3img/backh5-top.png") no-repeat;
    width: 100%;
    height: 1.2rem;
    background-size: 100% 100%;
    text-align: center;
}
.filter-top span {
    color: #fff;
    text-align: center;
    font-size: 0.48rem;
    line-height: 1.2rem;
    display: inline-block;
}
.bfilter-content {}
.bfilter-cont-1 {
    background: #fff;
    padding-top: 0.4rem;
}
.desc-title {
    position: relative;
}
.tit1 {
    color: #333333;
    font-size: 0.3rem;
    margin-left: 0.24rem;
}
.desc-title em {
    width: 0.06rem;
    height: 0.32rem;
    background: #fc4040;
    display: inline-block;
    position: absolute;
    left: 0;
    top: 2px;
}
.desc-con {
    line-height: 0.4rem;
    padding: 0.2rem 0.6rem 0 0.58rem;
    font-size: 0.28rem;
}
.alla {
    width: 1.42rem;
    height: 0.36rem;
    background: #fc4040;
    color: #fff;
    font-size: 0.24rem;
    text-align: center;
    display: inline-block;
    border-radius: 0.15rem 0 0 0.15rem;
}
.bfilter-cont-2 {
    padding-bottom: 0.24rem;
}
.desc-ul {
    /* padding: 0 0 26px 20px; */
    padding: 0.29rem 0.4rem 0 0.58rem;
    line-height: 0.4rem;
    width: 100%;

}
.desc-ul2 {
    /* padding: 0 0 26px 20px; */
    padding-top: 0;

}
.desc-ul tr:nth-child(1) td {
    font-size: 0.24rem;
    color: #888888;
}
.desc-ul tr:nth-child(2) td {
    /* padding-top: 12px; */
    /* color: #c9d0d7; */
    font-size: 0.28rem;
    color: #333333;
    padding-bottom: 0.2rem;
}
.desc-ul td {
    /* width: 20%; */
    color: #888888;
    text-align: left;
    line-height: 0.4rem;
}
.desc-ul2 tr:nth-child(1) td {
    font-size: 0.24rem;
    color: #888888;
}
.desc-ul2 tr:nth-child(2) td {
    /* padding-top: 12px; */
    /* color: #c9d0d7; */
    font-size: 0.28rem;
    color: #333333;
    padding-bottom: 0.2rem;
}
.desc-ul2 td {
    /* width: 20%; */
    color: #888888;
    text-align: left;
    line-height: 0.4rem;
}
.bfilter-cont-3 {
    margin-top: 0.2rem;
}
.desc-num2 {
    font-size: 0.24rem;
}
.eval-tr1 {}
.eval-tr2 {
    margin-left: 0.5rem;
}
.evaluat-box {
    /* padding: 20px; */
    padding: 0.4rem 0.6rem 0 0.58rem;
}
.evaluat-box tr:nth-child(1) td {}
.evaluat-box tr:nth-child(2) td {
    padding-top: 14px;
}
.desc-date {
    font-size: 0.24rem;
    color: #c3c3c3;
    padding-right: 0.6rem;
}
.desc-txt1 {
    padding-bottom: 13px;
    font-size: 0.28rem;
}

.desc-num1 {
    width: 1.35rem;
    display: inline-block;
    text-align: right;
    font-size: 0.28rem;
}
.desc-num3 {
    width: 1.5rem;
}

.desc-t1 {
    width: 1.18rem;
    display: inline-block;
    text-align: left;
}
.desc-t2 {
    width: 1.7rem;
    display: inline-block;
    text-align: left;
}
.bfilter-cont-4 {
    margin-top: 0.2rem;
}
.right-table {
    border-collapse: collapse;
    width: 100%;
    /* font-size: 12px; */
    margin-top: 0.25rem;
    position: relative;
}
.right-table tr td {
    border-bottom: 1px solid #e6e6e6;
    height: 1rem;
    text-align: center;
}
.right-table tr:nth-child(1) {
    background: #f5f5f5;
    height: 0.42rem;
    border-top: 1px solid #e6e6e6;
}
.right-table .tr1 td {
    color: #888888;
    font-size: 0.24rem;
    height: 0.42rem;
    line-height: 0.42rem;
    border-bottom: none;
}
.right-table tr td:nth-child(1) {
    padding-left: 0.3rem;
    text-align: left;
}

.td-name {
    color: #333333;
    font-size: 0.28rem;
}
.num-td {
    color: #888888;
    font-size: 0.24rem;
}
.bfilter-cont-5 {

    padding: 0.4rem 0.4rem 1rem 0.3rem;
    font-size: 0.22rem;
    color: #888888;
    line-height: 0.32rem;
}
.tr-no2 {
    /* position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    text-align: center;
    background: #fff; */
}
.td-no2 {
    text-align: center;
    font-size: 0.24rem;
}
.no-data {
    width: 1.76rem;
    height: 1.68rem;
    display: inline-block;
    background: url("../assets/images/z3img/no-data.png") no-repeat;
    background-size: 100% 100%;
}
</style>
<template>
<div class="backtest-filter backtest-filter2" v-title data-title="策略推荐">
  <!--  <div v-title>标题内容</div> -->
  <div class="bfilter-main">
    <div class="filter-top"><span>{{basicFilter.strategyName}}</span></div>
    <div class="bfilter-content">
      <div class="bfilter-cont-1">
        <div class="desc-title"><em></em><span class="tit1">策略描述</span></div>
        <div class="desc-con">
          {{ basicFilter.strategyDesc}}
        </div>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-2">
        <div class="desc-title"><em></em><span class="tit1">选股条件</span>
          <!-- <span class="alla fr">全部A股</span> --></div>
        <table class="desc-ul">
          <tr v-for="trItem in filterSummary" class="trtxt">
            <td v-if="index<=4" v-for="(tdItem,index) in trItem" class="tdtxt">{{tdItem}}</td>
          </tr>
        </table>
        <table class="desc-ul desc-ul2">
          <tr v-for="trItem in filterSummary" class="trtxt">
            <td v-if="index>4" v-for="(tdItem,index) in trItem" class="tdtxt">{{tdItem}}</td>
          </tr>
        </table>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-3">
        <div class="desc-title"><em></em><span class="tit1">策略表现</span>
          <div class="desc-date fr">
            <span>回测区间
            </span><span class="desc-num2">{{basicFilter.backtestStartDate==null?'--':changeDate(basicFilter.backtestStartDate)}}～{{basicFilter.backtestEndDate==null?'--':changeDate(basicFilter.backtestEndDate)}}</span>
          </div>
        </div>
        <div class="evaluat-box display-box">
          <div class="eval-tr1 clearfix box-flex-1">
            <div class="desc-txt1">
              <span class="desc-t1">胜率
                            </span><span class="desc-num1" v-z3-updowncolor="eval.winRatio">{{eval.winRatio==null?'--':changePer(eval.winRatio)}}</span>
            </div>
            <div class="desc-txt1">
              <span class="desc-t1">平均收益
                            </span><span class="desc-num1" v-z3-updowncolor="eval.avgReturn">{{eval.avgReturn==null?'--':changePer(eval.avgReturn)}}</span>
            </div>
            <div class="desc-txt1">
              <span class="desc-t1">持有天数
                            </span><span class="desc-num1">{{basicFilter.holdDay==null?'--':basicFilter.holdDay}}</span>
            </div>
            <div class="desc-txt1">
              <span class="desc-t1">最大亏损
                            </span><span class="desc-num1" v-z3-updowncolor="eval.maxLoss">{{eval.maxLoss==null?'--':changePer(eval.maxLoss)}}</span>
            </div>



          </div>
          <div class="eval-tr2 clearfix box-flex-1">
            <div class="desc-txt1">
              <span class="desc-t2">平均超额收益
                            </span><span class="desc-num1 desc-num3" v-z3-updowncolor="eval.avgReturnExcess">{{eval.avgReturnExcess==null?'--':changePer(eval.avgReturnExcess)}}</span>
            </div>
            <div class="desc-txt1">
              <span class="desc-t2">盈亏比
                            </span><span class="desc-num1 desc-num3">{{eval.winLossRatio==null?'--':Number(eval.winLossRatio).toFixed(2)}}</span>
            </div>
            <div class="desc-txt1">
              <span class="desc-t2">最大盈利
                            </span><span class="desc-num1 desc-num3" v-z3-updowncolor="eval.maxWin">{{eval.maxWin==null?'--':changePer(eval.maxWin)}}</span>
            </div>


          </div>
        </div>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-4">
        <div class="desc-title"><em></em><span class="tit1">当前选股</span></div>
        <table class="right-table clearfix" :style="{  height: fullHeight3 + 'px' }">
          <tr class="tr1">
            <td>股票名称</td>
            <td class="td-txt">最新价</td>
            <td class="td-txt">涨跌</td>
            <td class="td-txt">涨跌幅</td>
          </tr>
          <tr v-for="(stock,index) of nowChooseStock" v-if="nowChooseStock.length>0">
            <td><span class="td-name">{{stock.name}}</span></br><small class="num-td">{{stock.innerCode}}</small></td>
            <td v-z3-updowncolor="stock.curChngPct">{{stock.price==null?'--':stock.price}}</td>
            <td v-z3-updowncolor="stock.curChngPct">{{stock.chg>=0?stock.chg===0?stock.chg:'+'+checkNull(stock.chg):checkNull(stock.chg)}}</td>
            <td class="gray" v-z3-updowncolor="stock.curChngPct">{{stock.curChngPct==null?'--':changeTofixed(stock.curChngPct)}}</td>
          </tr>
          <tr v-if="nowChooseStock.length<=0" class="tr-no2">
            <td></td>
            <td>
              <div class="td-no2">暂无数据</div>
            </td>
            <td></td>
            <td></td>

          </tr>
        </table>
      </div>
      <div class="bfilter-cont-5">
        风险提示：本策略过往业绩并不预示未来表现，也不构成业绩保证；策略提示的当前选股仅供投资参考，不作为买卖建议，风险自担！
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
  data() {
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
      },
      error: state => state.error
    })
  },
  watch: {
    error() {
      if (this.error) {
        this.$router.replace({
          name: 'error'
        });
      }
    }
  },
  components: {},
  methods: {
    checkNull(str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    changePer(num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    changeDate(time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }

  },
  mounted() {
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
    this.$store.dispatch('backtestDetail/queryBasicFilter', {
      strategyId: this.strategyId
    })
    this.$store.dispatch('backtestDetail/queryNowStock', {
      strategyId: this.strategyId,
      stockPage: this.stockPage,
      stockPagesize: this.stockPagesize
    })
    // console.log(state.backtestDetail.basicFilter.filterSummary)
    this.$watch('basicFilter', function(basicFilter) {
      if (basicFilter) {
        console.log(this.$emit('basicFilterName', basicFilter.strategyName))
        this.$emit('basicFilterName', basicFilter.strategyName)
      }
    })
    /* document.title = '来爱投顾实盘争霸赛 享百万奖金赢千万实盘'*/
  }

}
</script>
