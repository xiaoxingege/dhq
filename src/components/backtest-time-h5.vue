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
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 90%;
}
.bfilter-content {}
.bfilter-cont-1 {
    background: #fff;
    padding-top: 0.4rem;
    padding-bottom: 0.24rem;
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
    font-size: 12px;
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
    font-size: 12px;
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
    /*  */
    width: 100%;
    padding: 0.37rem 0.6rem 0;
    /* border-collapse: collapse;
 */
}
.evaluat-box tr:nth-child(1) td {
    font-size: 0.24rem;
}
.evaluat-box tr:nth-child(2) td {
    padding-top: 0.17rem;
    padding-bottom: 0.44rem;
}
.date-box {
    padding: 0 0.6rem 0 0.62rem;

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
    /* width: 1.35rem; */
    display: inline-block;
    text-align: right;
    /* font-size: 0.28rem; */
    font-size: 0.32rem;
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
    padding-bottom: 0;
}
.right-table {
    border-collapse: collapse;
    width: 100%;
    /* font-size: 12px; */
    margin-top: 0.25rem;
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

    padding: 0.4rem 0.4rem 0.56rem 0.3rem;
    font-size: 0.22rem;
    color: #888888;
    line-height: 0.32rem;
}
.exp-buy-box {
    padding: 0.3rem;

}
.exp-buy-table {
    border-collapse: collapse;
    width: 100%;
}
.exp-buy-table tr td {
    text-align: center;
    line-height: 0.45rem;
    height: 0.45rem;
    color: #333333;
}
.exp-buy-table tr:nth-child(1) td {
    /* padding:10px 0 9px 0; */
    /* padding-top: 10px;
       padding-bottom: 9px; */
    height: 0.46rem;
    line-height: 0.46rem;
    text-align: center;
    background: #fff6f5;
    color: #ff4c4c;
}
.exp-buy-table tr:nth-child(2) td {
    padding-top: 0.14rem;
}
.express1 {
    /* padding:15px 0 25px 0; */
    padding: 0.19rem 0 0.2rem 0.18rem;
}
.express2 {
    padding-bottom: 0;
}
.exp-sell-table tr:nth-child(1) td {
    /* padding:10px 0 9px 0; */
    /* padding-top: 10px;
       padding-bottom: 9px; */
    height: 0.46rem;
    line-height: 0.46rem;
    text-align: center;
    background: #f5faff;
    color: #3996f2;
}
.bfilter-cont-6 {
    margin-top: 0.2rem;
}
</style>
<template>
<div class="backtest-filter backtest-filter2" v-title data-title="策略推荐">
  <div class="bfilter-main">
    <div class="filter-top"><span>{{timeStrategy.strategyName}}</span></div>
    <div class="bfilter-content">
      <div class="bfilter-cont-1">
        <div class="desc-title"><em></em><span class="tit1">策略描述</span></div>
        <div class="desc-con">
          {{timeStrategy.strategyDesc}}
        </div>
      </div>

      <div class="bfilter-cont-1 bfilter-cont-3">
        <div class="desc-title"><em></em><span class="tit1">策略表现</span><span class="alla fr">{{timeStrategy.stockScope}}</span>
        </div>
        <table class="evaluat-box">
          <tr>
            <td><span>胜率</span></td>
            <td><span>最大盈利</span></td>
            <td><span>最大亏损</span></td>
            <td><span>盈亏比</span></td>
          </tr>
          <tr class="eval-tr1 clearfix">
            <td>
              <span class="desc-num1" v-z3-updowncolor="timeEval.winRatio">{{timeEval.winRatio==null?'--':changePer(timeEval.winRatio)}}</span>
            </td>
            <td>
              <span class="desc-num1" v-z3-updowncolor="timeEval.maxWin">{{timeEval.maxWin==null?'--':changePer(timeEval.maxWin)}}</span>
            </td>
            <td>
              <span class="desc-num1" v-z3-updowncolor="timeEval.maxLoss">{{timeEval.maxLoss==null?'--':changePer(timeEval.maxLoss)}}</span></td>
            <td>
              <span class="desc-num1">{{timeEval.winLossRatio==null?'--':Number(timeEval.winLossRatio).toFixed(2)}}</span></td>
            <!-- <td>
               
            </td>  
            <td>
               <span>股票范围
               </span></br><span class="desc-num1">{{timeStrategy.stockScope}}</span>
            </td> -->
          </tr>

        </table>
        <div class="date-box">
          <span class="desc-num2">回测区间
               </span><span class="desc-num2">{{timeStrategy.backtestStartDate==null?'--':changeDate(timeStrategy.backtestStartDate)}}～{{timeStrategy.backtestEndDate==null?'--':changeDate(timeStrategy.backtestEndDate)}}</span>
        </div>

      </div>
      <div class="bfilter-cont-1 bfilter-cont-4">
        <div class="desc-title"><em></em><span class="tit1">买入条件</span></div>
        <div class="exp-buy-box">
          <!-- <table class="exp-buy-table lightcolor">
                         <tr>
                            <td>序号</td>
                            <td>指标</td>
                            <td>参数</td>
                            <td>运算符</td>
                            <td>数值</td>
                         </tr>
                         <tr v-for="(buyList,index) of timeStrategy.buyStrategyIndexList">
                            <td>{{buyList.pageOrder}}</td>
                            <td>{{buyList.indexName}}</td>
                            <td>（日线,10,20,30）</td>
                            <td>{{buyList.operator}}</td>
                            <td>{{buyList.comparisonValue}}</td>
                         </tr>
              </table> -->
          <table cellspacing="0" cellpadding="0" class="exp-buy-table lightcolor">
            <tr v-for="trItem in this.timeStrategy2.buyData">
              <td v-for="tdItem in trItem">{{tdItem}}</td>
            </tr>
          </table>
          <div class="express1 lightcolor">
            <span>条件表达式：
                  </span><span>{{timeStrategy.buyConExp}}
                  </span>
          </div>
        </div>
        <div class="desc-title"><em></em><span class="tit1">卖出条件</span></div>
        <div class="exp-buy-box">
          <table cellspacing="0" cellpadding="0" class="exp-buy-table lightcolor exp-sell-table">
            <tr v-for="trItem in this.timeStrategy2.sellData">
              <td v-for="tdItem in trItem">{{tdItem}}</td>
            </tr>
          </table>
          <div class="express1 lightcolor express2">
            <span>条件表达式：
                  </span><span>{{timeStrategy.sellConExp}}
                  </span>
          </div>
        </div>
      </div>
      <div class="bfilter-cont-1 bfilter-cont-6">
        <div class="desc-title"><em></em><span class="tit1">机会分析</span></div>
        <BackTimeH5Kline/>
      </div>
      <div class="bfilter-cont-5">
        风险提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import BackTimeH5Kline from './back-timeh5-kline'

export default {
  data () {
    return {
      strategyId: this.$route.params.strategyId
    }
  },
  computed: {
    ...mapState({
      timeStrategy: state => state.backtestDetail.timeStrategy,
      timeStrategy2: state => {
        const buyData = [
          ['序号', '指标', '参数', '运算符', '数值']
        ]
        const sellData = [
          ['序号', '指标', '参数', '运算符', '数值']
        ]
        const buyStrategy = state.backtestDetail.timeStrategy.buyStrategyIndexList
        const sellStrategy = state.backtestDetail.timeStrategy.sellStrategyIndexList
        if (buyStrategy !== null && buyStrategy.length > 0) {
          for (var i = 0; i < buyStrategy.length; i++) {
            const parms = JSON.parse(buyStrategy[i].indexParams.replace(/'/g, '"'))
            const parmsPeriod = []
            for (var key in parms) {
              if (parms[key] === 'day') {
                parmsPeriod.push('日线')
              } else if (parms[key] === 'week') {
                parmsPeriod.push('周线')
              } else if (parms[key] === 'month') {
                parmsPeriod.push('月线')
              } else {
                parmsPeriod.push(parms[key])
              }
            }

            buyData.push([buyStrategy[i].pageOrder, buyStrategy[i].indexName, '(' + parmsPeriod.join(',') + ')', buyStrategy[i].operator, buyStrategy[i].comparisonValue])
          }
        }
        if (sellStrategy !== null && sellStrategy.length > 0) {
          for (var j = 0; j < sellStrategy.length; j++) {
            const parms = JSON.parse(sellStrategy[j].indexParams.replace(/'/g, '"'))
            const parmsPeriod = []
            for (var item in parms) {
              if (parms[item] === 'day') {
                parmsPeriod.push('日线')
              } else if (parms[item] === 'week') {
                parmsPeriod.push('周线')
              } else if (parms[item] === 'month') {
                parmsPeriod.push('月线')
              } else {
                parmsPeriod.push(parms[item])
              }
            }
            sellData.push([sellStrategy[j].pageOrder, sellStrategy[j].indexName, '(' + parmsPeriod.join(',') + ')', sellStrategy[j].operator, sellStrategy[j].comparisonValue])
          }
        }
        return {
          buyData: buyData,
          sellData: sellData
        }
      },
      timeEval: state => state.backtestDetail.timeStrategy.evaluationIndexs

    })
  },
  components: {
    BackTimeH5Kline
  },
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
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'
    this.$store.dispatch('backtestDetail/queryTimeStrategy', {
      strategyId: this.strategyId
    })
  }

}
</script>
