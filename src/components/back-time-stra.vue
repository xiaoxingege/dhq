<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}
body {
    font-size: 12px;
    background: #141518;
}
h3 {
    font-weight: 400;
}
em,
i {
    font-style: normal;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
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
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.box-flex-4 {
    -webkit-box-flex: 4;
    -moz-box-flex: 4;
    -ms-flex: 4;
    -o-box-flex: 4;
    box-flex: 4;
}
.describe-box {
    background: #141518;

}
.describe-wrap {
    width: 100%;
    font-size: 12px;
    color: #c9d0d7;
    border-bottom: 1px solid #0d0e0f;
}

.bfilter-header {
    /* padding: 11px 0 9px 6px; */
    padding: 20px 0 20px 20px;
    color: #c9d0d7;
}
.header-title {
    font-size: 16px;
}
.header-title span {
    font-size: 16px;
}

.describe-left {
    width: 55%;
    /* padding: 14px 10px 0; */
    /* padding: 14px 46px 0 20px; */
    padding: 14px 10% 0 20px;
}
.desc-title {
    padding-bottom: 11px;
    font-size: 14px;
    font-weight: 900;
}
.desc-con {
    line-height: 20px;
    /* margin-top: 12px; */
    padding-bottom: 22px;
}
/* .desc-ul{
        padding: 0 0 26px 0;
    } */
.desc-txt {
    position: relative;
    width: 16%;
    color: #a5a5a5;
    text-align: center;
}
.desc-num {
    /*  position: absolute;
      top: 20px;
      left: 0; */
    color: #696969;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 60px;
    text-align: center;
    width: 100%;
}
.describe-right {
    /* margin-left: 8px; */
    width: 48%;
    /* padding: 14px 10px 0 11px; */
    /* padding: 14px 20px 0 43px; */
    padding: 14px 40px 0 0;
}

/* .describe-right {
    width: 42%;
    padding: 14px 10px 0;
    padding: 14px 20px 0 43px;
    border-left: 1px solid #0d0e0f;
} */
/* .evaluat-box{ */
/* padding-top: 5px; */
/* padding-top: 12px;
    } */
.income_list span {
    display: inline-block;
    width: 16%;
}
.li_two {
    margin-top: 100px;
}
.desc-txt2 {
    width: 14%;
    /* padding-bottom: 48px; */
    height: 53px;
}
.desc-txt3 {
    width: 28%;
}
.desc-txt4 {
    width: 12%;
}
.time-bottom {

    /* padding: 14px 10px 0 11px; */
    /*  padding: 25px 20px 0 0; */
    /* padding-top: 25px;
      padding-right: 20px;
      padding-left: 20px;
      padding-right: 40px; */
    padding: 25px 40px 0 20px;
    border-bottom: 1px solid #0d0e0f;

}
.express-buy {
    padding-bottom: 24px;
}
.evaluat-box {
    /*  padding-top: 5px; */
    padding-top: 18px;
    border-collapse: collapse;
    width: 100%;
    color: #c9d0d7;
}
.eval-tr1 {}
.eval-tr2 {}
.evaluat-box tr:nth-child(1) td {
    padding-bottom: 13px;
    /* border-bottom: 1px solid #23272c; */
}
.evaluat-box tr:nth-child(2) td {
    padding-top: 14px;
}
.desc-num1 {
    line-height: 24px;
    font-size: 14px;
}
.exp-buy-table {
    border-collapse: collapse;
    width: 100%;
    color: #c9d0d7;

}
.exp-buy-table tr td {
    text-align: center;
}
.exp-buy-table tr:nth-child(1) td {
    background: #23272c;
    /* padding:10px 0 9px 0; */
    /* padding-top: 10px;
       padding-bottom: 9px; */
    height: 30px;
    line-height: 30px;
}
.exp-buy-table tr td {
    border-bottom: 1px solid #23272c;
    height: 30px;
    line-height: 30px;
}
.express-buy-box {
    /* width: 50%;
        padding-right: 77px; */
    width: 55%;
    padding-right: 10%;
    /*  min-height: 211px; */
}
.express-sell-box {
    /* width: 50%;
        padding-right: 0; */
    /*  width: 41%; */
    width: 47%;
    padding-right: 0;
}
.exp-buy {
    background: #ca4941;
    width: 85px;
    height: 25px;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    margin-bottom: 6px;
}
.express1 {
    padding: 15px 0 25px;
}
.express1 span {
    font-size: 12px;
}
.exp-sell {
    background: #56a870;
}
</style>
<template>
<div class="describe-box">
  <div class="bfilter-header clearfix">
    <div class="header-title fl"><span>{{timeStrategy.strategyName}}</span><i></i></div>
  </div>
  <div class="describe-wrap clearfix display-box">
    <div class="describe-left box-flex-2">
      <div class="desc-title">策略描述</div>
      <div class="desc-con">
        {{timeStrategy.strategyDesc}}
      </div>
    </div>
    <div class="describe-right box-flex-2">
      <div class="desc-title">策略表现</div>
      <table class="evaluat-box">
        <tr class="eval-tr1 clearfix">
          <td>
            <span class="gray">胜率
                         </span></br><span class="desc-num1" v-z3-updowncolor="timeEval.winRatio">{{timeEval.winRatio==null?'--':changePer(timeEval.winRatio)}}</span>
          </td>
          <td>
            <span class="gray">最大盈利
                         </span></br><span class="desc-num1" v-z3-updowncolor="timeEval.maxWin">{{timeEval.maxWin==null?'--':changePer(timeEval.maxWin)}}</span>
          </td>
          <td>
            <span class="gray">最大亏损
                         </span></br><span class="desc-num1" v-z3-updowncolor="timeEval.maxLoss">{{timeEval.maxLoss==null?'--':changePer(timeEval.maxLoss)}}</span></td>
          <td>
            <span class="gray">盈亏比
                         </span></br><span class="desc-num1">{{timeEval.winLossRatio==null?'--':Number(timeEval.winLossRatio).toFixed(2)}}</span></td>
          <td>
            <span class="gray">回测区间
                         </span></br><span class="desc-num1">{{timeStrategy.backtestStartDate==null?'--':changeDate(timeStrategy.backtestStartDate)}}～{{timeStrategy.backtestEndDate==null?'--':changeDate(timeStrategy.backtestEndDate)}}</span>
          </td>
          <td>
            <span class="gray">股票范围
                         </span></br><span class="desc-num1">{{timeStrategy.stockScope}}</span>
          </td>
        </tr>

      </table>

    </div>
  </div>
  <div class="time-bottom clearfix display-box">
    <div class="express-buy-box box-flex-1">
      <div class="exp-buy lightcolor">买入条件</div>
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
    <div class="express-buy-box box-flex-1 express-sell-box">
      <div class="exp-buy lightcolor exp-sell">卖出条件</div>
      <table cellspacing="0" cellpadding="0" class="exp-buy-table lightcolor">
        <tr v-for="trItem in this.timeStrategy2.sellData">
          <td v-for="tdItem in trItem">{{tdItem}}</td>
        </tr>
      </table>
      <div class="express1 lightcolor">
        <span>条件表达式：
                    </span><span>{{timeStrategy.sellConExp}}
                    </span>
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
  computed: mapState({
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

          buyData.push([buyStrategy[i].pageOrder, buyStrategy[i].indexName, '(' + parmsPeriod.join('，') + ')', buyStrategy[i].operator, buyStrategy[i].comparisonValue])
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
          sellData.push([sellStrategy[j].pageOrder, sellStrategy[j].indexName, '(' + parmsPeriod.join('，') + ')', sellStrategy[j].operator, sellStrategy[j].comparisonValue])
        }
      }
      return {
        buyData: buyData,
        sellData: sellData
      }
    },
    timeEval: state => state.backtestDetail.timeStrategy.evaluationIndexs
  }),
  components: {},
  methods: {
    changePer (num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeDate (time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }

  },
  mounted () {
    this.$store.dispatch('backtestDetail/queryTimeStrategy', {
      strategyId: this.strategyId
    })
  }

}
</script>
