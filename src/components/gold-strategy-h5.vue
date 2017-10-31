<style lang="scss" scoped>
@import '../assets/css/base.css';
.app {
    min-width: 100%;
}
.goldRecommend {
    font-size: 0.12rem;
    background: #F6F6F6;
}
.strategyHeader {
    height: 0.32rem;
    text-align: left;
}
.strategyDesc {
    text-align: left;
    background: #fff;
    margin-bottom: 0.05rem;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .app {
        min-width: 100%;
    }

    .strategyHeader {
        height: 1.2rem !important;
        line-height: 1.2rem !important;
        text-align: center;
        background: url("../assets/images/z3img/backh5-top.png") no-repeat;
        background-size: 100% 100%;
    }

    .strategyHeader span {
        color: #fff !important;
        line-height: 1.2rem !important;
        font-size: 0.32rem !important;
    }

    .strategyDesc {
        padding: 0;
    }
    .choseStock {
        background: #fff;
    }
    .sellCondition {
        background: #fff;
        text-align: left;
        font-size: 0.18rem;
    }

    .syqxt {
        min-height: 4.2rem;
        width: 100%;
    }
    .mcxh,
    .mrxh {
        background: #fff;
        width: 100%;
        margin-bottom: 0.2rem;
    }
    .mcxh table,
    .mrxh table {
        width: 100%;
        font-size: 0.16rem;
    }
    .mcxh table thead tr th,
    .mrxh table thead tr th {
        height: 0.4rem;
        line-height: 0.4rem;
        background: #F5F5F5;
        color: #888;
        font-weight: normal;
    }
    .mcxh table tr td,
    .mrxh table tr td {
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
        width: 25%;
        font-size: 0.3rem;
        border-bottom: 0.01rem solid #EDEDED;
    }

    .header-title {
        height: 0.32rem;
        line-height: 0.32rem;
        border-left: 0.06rem solid #FC4343;
        padding-left: 0.25rem;
        color: #333;
        font-size: 0.28rem;
        font-weight: bold;
        margin-bottom: 0.35rem;
    }

    .strategyForm ul {
        width: 50%;
        float: left;
    }

    .strategyForm ul li {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0.6rem;
    }

    .strategyForm ul li span {
        display: inline-block;
        width: 50%;
        float: left;
        height: 0.55rem;
        line-height: 0.55rem;
        text-align: left;
        color: #888888;
        font-size: 0.24rem;
    }
    .strategyForm ul li span:last-child {
        text-align: right;
        color: #333;
        font-weight: bold;
    }

    .mrmcSignal-header {
        height: 0.8rem;
        line-height: 0.8rem;
        background: #fff;
        border-bottom: 0.01rem solid #E6E6E6;
        padding: 0 0.3rem;
    }
    .mrmcSignal-header div:first-child span {
        display: inline-block;
        height: 0.8rem;
        font-size: 0.28rem;
        color: #333;
    }
    .mrmcSignal-header div:first-child .active {
        color: #ff4040;
        border-bottom: 0.04rem solid #ff4040;
    }
    .choseStock table tr:last-child {
        font-size: 0.24rem;
    }

    .wxts {
        font-size: 0.22rem;
        color: #888;
        padding: 0.4rem 0.3rem;
        text-align: justify;
    }
}
</style>
<template>
<div class="goldRecommend" v-title data-title="策略推荐">
  <!--策略头部 start-->
  <div class="strategyHeader">
    <span>{{goldResult === null ? '' :goldResult.strategyName}}</span>
  </div>
  <!--策略头部 end-->

  <!--策略描述 start-->
  <div class="strategyDesc strategyDesc-h5">
    <Titlecontent :data="articleData"></Titlecontent>
  </div>
  <!--策略描述 end-->

  <!--策略表现 start-->
  <div style="background:#fff; padding-top: 0.35rem; padding-bottom: 0.4rem;">
    <div class="header-title clearfix">策略表现<span class="fr" style="color:#c3c3c3; font-size:0.12rem; margin-right: 0.2rem;" v-if="this.goldResult">回测区间：{{String(this.goldResult.backtestStartDate).substring(0,4)+'.'+String(this.goldResult.backtestStartDate).substring(4,6)+'.'+String(this.goldResult.backtestStartDate).substring(6)}}~{{String(this.goldResult.backtestEndDate).substring(0,4)+'.'+String(this.goldResult.backtestEndDate).substring(4,6)+'.'+String(this.goldResult.backtestEndDate).substring(6)}}</span>
    </div>
    <div class="strategyForm clearfix">
      <ul>
        <li>
          <span>年化收益</span>
          <span v-if="this.goldResult" v-z3-updowncolor="this.goldResult.evaluationIndexs === null?'':this.goldResult.evaluationIndexs.annualReturn">{{this.goldResult.evaluationIndexs === null?'':(Number(this.goldResult.evaluationIndexs.annualReturn) * 100).toFixed(2) + '%'}}</span>
        </li>
        <li>
          <span>波动率</span>
          <span v-if="this.goldResult">{{this.goldResult.evaluationIndexs === null?'':(Number(this.goldResult.evaluationIndexs.algoVolatility) * 100).toFixed(2) + '%'}}</span>
        </li>
        <li>
          <span>最大回撤</span>
          <span v-if="this.goldResult">{{this.goldResult.evaluationIndexs === null?'':(Number(this.goldResult.evaluationIndexs.maxDrawdown) * 100).toFixed(2) + '%'}}</span>
        </li>
        <li>
          <span>Beta</span>
          <span v-if="this.goldResult">{{this.goldResult.evaluationIndexs === null?'':Number(this.goldResult.evaluationIndexs.beta).toFixed(2)}}</span>
        </li>
        <li>
          <span>换手率</span>
          <span v-if="this.goldResult">{{this.goldResult === null?'':(Number(this.goldResult.evaluationIndexs.turnover) * 100).toFixed(2) + '%'}}</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>超额收益</span>
          <span v-if="this.goldResult" v-z3-updowncolor="this.goldResult.evaluationIndexs === null?'':this.goldResult.evaluationIndexs.excessReturn">{{this.goldResult.evaluationIndexs === null?'':(Number(this.goldResult.evaluationIndexs.excessReturn) * 100).toFixed(2) + '%'}}</span>
        </li>
        <li>
          <span>夏普比率</span>
          <span v-if="this.goldResult">{{this.goldResult.evaluationIndexs === null?'':Number(this.goldResult.evaluationIndexs.sharpe).toFixed(2)}}</span>
        </li>
        <li>
          <span>Alpha</span>
          <span v-if="this.goldResult">{{this.goldResult.evaluationIndexs === null?'':Number(this.goldResult.evaluationIndexs.alpha).toFixed(2)}}</span>
        </li>
        <li>
          <span>胜率</span>
          <span v-if="this.goldResult">{{this.goldResult === null?'':(Number(this.goldResult.evaluationIndexs.winRatio) * 100).toFixed(2) + '%'}}</span>
        </li>
      </ul>
    </div>
  </div>
  <!--策略表现 end-->

  <!--收益曲线图 start-->
  <div style="width:100%; margin-top:0.1rem; background: #fff; padding-top: 0.35rem;">
    <div style="width:100% " class="goldH5">
      <div class="header-title">收益曲线图</div>
      <div style="margin-bottom: 0.05rem;">
        <div class="syqxt">
          <Linecharth5 :strategyId="this.$route.params.strategyId"></Linecharth5>
        </div>
      </div>
    </div>
    <!--<Goldchart :strategyId="strategyId"></Goldchart>-->
  </div>
  <!--收益曲线图 end-->

  <!--买入、卖出信号 start-->
  <div style="width:100%; margin-top:0.2rem; background: #fff;">
    <div style="width:100% " class="goldH5">
      <div class="mrmcSignal-header clearfix">
        <div class="fl">
          <span ref="mrxh" class="active" @click="changeMrxhType($event)" style="margin-right: 0.5rem;">今日调入信号</span>
          <span ref="mcxh" @click="changeMcxhType($event)">今日调出信号</span>
        </div>
        <div class="fr" style="color:#888;" v-if="mrxhData !== null && mrxhData.content !== null && mrxhData.content.length !== 0 && type==='mrxh'">
          信号日期：<span>{{mrxhData.content[0].tradeDate}}</span></div>
        <div class="fr" style="color:#888;" v-if="mcxhData !== null && mcxhData.content !== null && mcxhData.content.length !== 0 && type==='mcxh'">
          信号日期：<span>{{String(mcxhData.content[0].tradeDate).substring(0,4)+'.'+String(mcxhData.content[0].tradeDate).substring(4,6)+'.'+String(mcxhData.content[0].tradeDate).substring(6)}}</span>
        </div>
      </div>
      <div v-if="type === 'mrxh'" class="mrxh">
        <span v-if="mrxhData === null || mrxhData === '' || mrxhData.content.length === 0" style="width: 100%; text-align:center; display: inline-block; line-height: 50px; font-size:0.16rem;">今日无交易信号</span>
        <table v-if="mrxhData !== null && mrxhData !== '' && mrxhData.content.length !== 0" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th>股票代码</th>
              <th>最新价</th>
              <th>涨跌</th>
              <th>涨跌幅</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="mrxhData.content !== null" v-for=" (item, index) in mrxhData.content">
              <td>
                <p style="text-align: left; height:0.5rem; line-height: 0.35rem; padding-top: 0.1rem; padding-left: 0.4rem;">
                  {{item.name}}</p>
                <p style="font-size:0.24rem; color:#888; text-align: left; height:0.35rem; line-height: 0.35rem; padding-bottom: 0.1rem; padding-left: 0.4rem;">
                  {{item.innerCode}}</p>
              </td>
              <td v-z3-updowncolor="item.px">{{item.px === null ? '--':Number(item.px).toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chg">{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chgPct">{{item.chgPct === null ? '--':Number(item.chgPct).toFixed(2)+'%'}}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Pagination v-if="mrxhData !== null && mrxhData !== '' && mrxhData.totalPages > 1" :totalPage="mrxhData.totalPages" v-on:getPageFromChild="goMrxhPage"></Pagination>
        </div>
      </div>
      <div v-if="type === 'mcxh'" class="mcxh">
        <span v-if="mcxhData === null || mcxhData === '' || mcxhData.content.length === 0" style="width: 100%; text-align:center; display: inline-block; line-height: 50px; font-size:0.16rem;">今日无交易信号</span>
        <table v-if="mcxhData !== null && mcxhData !== '' && mcxhData.content.length !== 0" cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <th>股票代码</th>
              <th>最新价</th>
              <th>涨跌</th>
              <th>涨跌幅</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="mcxhData.content !== null" v-for=" (item,index) in mcxhData.content">
              <td>
                <p style="text-align: left; height:0.5rem; line-height: 0.35rem; padding-top: 0.1rem; padding-left: 0.4rem; box-sizing: border-box">
                  {{item.name}}</p>
                <p style="font-size:0.24rem; color:#888; text-align: left; height:0.35rem; line-height: 0.35rem; padding-bottom: 0.1rem; padding-left: 0.4rem;" box-sizing: border-box>{{item.innerCode}}</p>
              </td>
              <td v-z3-updowncolor="item.px">{{item.px === null ? '--':Number(item.px).toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chg">{{item.chg === null ? '--':Number(item.chg).toFixed(2)}}</td>
              <td v-z3-updowncolor="item.chgPct">{{item.chgPct === null ? '--':Number(item.chgPct).toFixed(2)+'%'}}
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <Pagination v-if="mcxhData !== null && mcxhData !== '' && mcxhData.totalPages > 1" :totalPage="mcxhData.totalPages" v-on:getPageFromChild="goMcxhPage"></Pagination>
        </div>
      </div>

    </div>
    <!--<Goldchart :strategyId="strategyId"></Goldchart>-->
  </div>
  <!--买入、卖出信号 end-->

  <!--选股、买入、卖出条件 start-->
  <!--<div>
    <div class="choseStock" style="padding-top: 0.35rem;">
      <div class="header-title">选股条件</div>
      <Tablelist :data="choseStockData"></Tablelist>
    </div>
    <div class="sellCondition" style="padding-top: 0.35rem;">
      <div>
        <div class="header-title">买入条件</div>
        <Tablelist :data="sellConditionData.buyData"></Tablelist>
        <div style="padding: 0.1rem 0.2rem; color:#888;">买入表达式：{{recommendData.sellConditiondata === null ?'':recommendData.sellConditiondata.buy.buyConExp}}
        </div>
      </div>
      <div style="padding-top: 0.35rem;">
        <div class="header-title">卖出条件</div>
        <Tablelist :data="sellConditionData.sellData"></Tablelist>
        <div style="padding: 0.1rem 0.2rem; color:#888;">卖出表达式：{{recommendData.sellConditiondata === null ?'':recommendData.sellConditiondata.sell.sellConExp}}
        </div>
      </div>
    </div>
  </div>-->
  <!--选股、买入、卖出条件 end-->

  <div class="wxts">风险提示：本策略过往业绩并不预示未来表现，也不构成本策略的业绩保证。策略提示的买入时机、买入信号或者卖出时机、风险预警信号，买卖区间等仅供投资者决策之参考，不作为买卖建议，风险自控。</div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Titlecontent from 'components/title-content'
import Tablelist from 'components/table-list'
import Goldrecommends from 'components/gold-recommends'
import Navbar from 'components/nav-bar'
import Goldchart from 'components/gold-chart'
import Radarchart from 'components/radar-chart'
import Linecharth5 from 'components/line-chart-h5'
import Barupdown from 'components/bar-up-down'
import Onelinechart from 'components/one-line-chart'
import Onebarchart from 'components/one-bar-chart'
import Twobarchart from 'components/two-bar-chart'
import Pagination from 'components/pagination'

export default {
  data() {
    return {
      navText: [
        ['选股条件', 'choseStock'],
        ['买卖条件', 'sellCondition'],
        ['仓控策略', 'controlStrategy'],
        ['交易参数', 'tradeParams']
      ],
      type: 'mrxh'
    }
  },
  components: {
    Titlecontent,
    Tablelist,
    Goldrecommends,
    Navbar,
    Goldchart,
    Radarchart,
    Linecharth5,
    Barupdown,
    Onelinechart,
    Onebarchart,
    Twobarchart,
    Pagination
  },
  computed: mapState({
    goldResult: state => state.goldStrategy.goldResult,
    articleData: function() {
      return {
        title: '策略描述:',
        content: this.goldResult === null ? '' : this.goldResult.strategyDesc
      }
    },
    recommendData: function() {
      if (this.goldResult === null) {
        return {
          choseStockData: null,
          sellConditiondata: null,
          positionModel: null,
          tradeParamsData: null
        }
      } else {
        const startDate = String(this.goldResult.backtestStartDate)
        const endDate = String(this.goldResult.backtestEndDate)
        const buyPriceType = this.goldResult.buyPriceType
        const tradeCycleType = this.goldResult.tradeCycleType
        const tradeCycleValue = this.goldResult.tradeCycleValue
        const slippage = this.goldResult.slippage
        const benchmark = this.goldResult.benchmark
        let buyType = ''
        let tradeCycle = ''
        let slipData = ''
        let markData = ''
        if (buyPriceType === 'open') {
          buyType = '开盘价'
        } else if (buyPriceType === 'close') {
          buyType = '收盘价'
        } else if (buyPriceType === 'high') {
          buyType = '最高价'
        } else if (buyPriceType === 'low') {
          buyType = '最低价'
        } else if (buyPriceType === 'avg') {
          buyType = '平均价'
        }
        if (tradeCycleType === 'day') {
          if (tradeCycleValue === '1') {
            tradeCycle = '每个交易日'
          } else if (tradeCycleValue === '2') {
            tradeCycle = '每2个交易日'
          } else if (tradeCycleValue === '3') {
            tradeCycle = '每3个交易日'
          } else if (tradeCycleValue === '4') {
            tradeCycle = '每4个交易日'
          } else if (tradeCycleValue === '5') {
            tradeCycle = '每5个交易日'
          } else if (tradeCycleValue === '10') {
            tradeCycle = '每10个交易日'
          } else if (tradeCycleValue === '15') {
            tradeCycle = '每15个交易日'
          } else if (tradeCycleValue === 'N') {
            tradeCycle = '每N个交易日'
          }
        } else if (tradeCycleType === 'week') {
          if (tradeCycleValue === '1') {
            tradeCycle = '每周一'
          } else if (tradeCycleValue === '2') {
            tradeCycle = '每周二'
          } else if (tradeCycleValue === '3') {
            tradeCycle = '每周三'
          } else if (tradeCycleValue === '4') {
            tradeCycle = '每周四'
          } else if (tradeCycleValue === '5') {
            tradeCycle = '每周五'
          }
        } else if (tradeCycleType === 'month') {
          if (tradeCycleValue === '1') {
            tradeCycle = '每月初'
          } else if (tradeCycleValue === '-1') {
            tradeCycle = '每月底'
          }
        }
        if (slippage === 0.001) {
          slipData = '千分之一'
        } else if (slippage === 0.002) {
          slipData = '千分之二'
        } else if (slippage === 0.003) {
          slipData = '千分之三'
        } else if (slippage === 0.004) {
          slipData = '千分之四'
        } else if (slippage === 0.005) {
          slipData = '千分之五'
        }
        if (benchmark === '000300') {
          markData = '沪深300'
        } else if (benchmark === '000001') {
          markData = '上证指数'
        } else if (benchmark === '399001') {
          markData = '深证成指'
        } else if (benchmark === '399006') {
          markData = '创业板指'
        } else if (benchmark === '399005') {
          markData = '中小板指'
        } else if (benchmark === '000016') {
          markData = '上证50'
        } else if (benchmark === '399905') {
          markData = '中证500'
        } else if (benchmark === '399906') {
          markData = '中证800'
        } else if (benchmark === '000852') {
          markData = '中证1000'
        }

        const modelId = this.goldResult.positionModelId
        let mName = ''
        let MValue = ''
        if (modelId === '1001') {
          mName = '不控制'
          MValue = '量化策略不叠加仓位控制模型，每次调仓时可以将全部资金用于购买发出买入信号的股票。'
        } else if (modelId === '1005') {
          mName = '均线模型'
          MValue = '应用5日、10日、20日、60日、120日均线做大盘（上证指数）趋势判断，兼顾短中长期大盘走势，进行6档仓位控制。若5根均线均在指数上方，则空仓；4根在上方，20%仓；3根在上方，40%仓；2根在上方，60%仓；1根在上方，80%仓；均在指数下方，满仓。其优点在于：一是风险可控，二是不会错过牛市；其缺点为：一是不能吃到全波段牛市行情，二是对横盘震荡阶段不太适用。'
        } else if (modelId === '1003') {
          mName = '宏观指标模型'
          MValue = '本模型选取T-1期（周）外汇储备、美元汇率、MSCI新兴市场指数、COMEX金价等数据作为回归因子，T期大盘表现（沪深300指数）作为因变量进行线性回归，进而利用T期因子数据预测T+1期大盘走势，采用3档仓位控制。若T+1期预期大盘上涨，满仓；预期中性，50%仓；预期下跌，空仓。'
        } else if (modelId === '1004') {
          mName = '高低价模型'
          MValue = '依据江恩理论第九条，即：“当市价开创新高，表示市势向上，可以追市买入；当市价下破新底，表示市势向下，可以追沽”，进行2档仓位控制。T日大盘（上证指数）创近20日新高时，满仓；T日大盘创近10日新低时，空仓。'
        }
        const commission = this.goldResult.commission
        let commisVal = ''
        if (commission === 0.0002) {
          commisVal = '万二'
        } else if (commission === 0.00025) {
          commisVal = '万二点五'
        } else if (commission === 0.0003) {
          commisVal = '万三'
        } else if (commission === 0.0004) {
          commisVal = '万四'
        } else if (commission === 0.0005) {
          commisVal = '万五'
        } else if (commission === 0.0006) {
          commisVal = '万六 '
        } else if (commission === 0.0007) {
          commisVal = '万七'
        } else if (commission === 0.0008) {
          commisVal = '万八'
        } else if (commission === 0.001) {
          commisVal = '千一'
        } else if (commission === 0.002) {
          commisVal = '千二'
        } else if (commission === 0.003) {
          commisVal = '千三'
        } else if (commission === 0.004) {
          commisVal = '千四'
        } else if (commission === 0.005) {
          commisVal = '千五'
        }
        return {
          choseStockData: {
            filterSummary: JSON.parse(this.goldResult.filterSummary)
          },
          sellConditiondata: {
            buy: {
              buyStrategyIndexList: this.goldResult.buyStrategyIndexList,
              buyConExp: this.goldResult.buyConExp
            },
            sell: {
              sellStrategyIndexList: this.goldResult.sellStrategyIndexList,
              sellConExp: this.goldResult.sellConExp
            }
          },
          positionModel: {
            modelName: mName,
            modelValue: MValue
          },
          tradeParamsData: {
            initFund: this.goldResult.initFund / 10000 + '万',
            fundAllocate: this.goldResult.fundAllocate === 'fund_value' ? '资金等权' : '市值等权',
            buyPriceType: buyType,
            sellPriceType: this.goldResult.sellPriceType === 'open' ? '开盘价' : '收盘价',
            backtestDate: startDate.substring(0, 4) + '.' + startDate.substring(4, 6) + '.' + startDate.substring(6) + '-' + endDate.substring(0, 4) + '.' + endDate.substring(4, 6) + '.' + endDate.substring(6),
            maxHolding: this.goldResult.maxHolding,
            stockMaxHolding: this.goldResult.stockMaxHolding + '%',
            conPriority: this.goldResult.conPriority === 'time_first' ? '择时条件优先' : '仓位条件优先',
            commission: commisVal,
            tradeCycle: tradeCycle,
            slippage: slipData,
            benchmark: markData,
            riskFreeRatio: Number(this.goldResult.riskFreeRatio * 100).toFixed(2) + '%'
          }
        }
      }
    },
    choseStockData: function() {
      if (this.recommendData.choseStockData === null) {
        return []
      } else {
        const choseStockTable = this.recommendData.choseStockData.filterSummary
        const arr1 = []
        const arr2 = []
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
        if (choseStockTable.jszbList.length > 0) {
          for (let i = 0; i < choseStockTable.jszbList.length; i++) {
            arr1.push(choseStockTable.jszbList[i].indexName)
            arr2.push(choseStockTable.jszbList[i].indexValue)
          }
        }
        if (choseStockTable.xgfwList.length > 0) {
          for (let i = 0; i < choseStockTable.xgfwList.length; i++) {
            arr1.push(choseStockTable.xgfwList[i].indexName)
            arr2.push(choseStockTable.xgfwList[i].indexValue)
          }
        }

        return [arr1, arr2]
      }
    },
    sellConditionData: function() {
      const buyData = [
        ['序号', '指标', '参数', '运算符', '数值']
      ]
      const sellData = [
        ['序号', '指标', '参数', '运算符', '数值']
      ]
      const buyConditionTable = this.recommendData.sellConditiondata === null ? '' : this.recommendData.sellConditiondata.buy.buyStrategyIndexList
      const sellConditionTable = this.recommendData.sellConditiondata === null ? '' : this.recommendData.sellConditiondata.sell.sellStrategyIndexList

      if (buyConditionTable.length > 0) {
        for (var i = 0; i < buyConditionTable.length; i++) {
          const parms = JSON.parse(buyConditionTable[i].indexParams.replace(/'/g, '"'))
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

          buyData.push([buyConditionTable[i].pageOrder, buyConditionTable[i].indexName, '(' + parmsPeriod.join('，') + ')', buyConditionTable[i].operator, buyConditionTable[i].operator === null ? buyConditionTable[i].operator : buyConditionTable[i].comparisonValue])
        }
      }
      if (sellConditionTable.length > 0) {
        for (var j = 0; j < sellConditionTable.length; j++) {
          const parms = JSON.parse(sellConditionTable[j].indexParams.replace(/'/g, '"'))
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
          sellData.push([sellConditionTable[j].pageOrder, sellConditionTable[j].indexName, '(' + parmsPeriod.join('，') + ')', sellConditionTable[j].operator, sellConditionTable[j].operator === null ? sellConditionTable[j].operator : sellConditionTable[j].comparisonValue])
        }
      }
      return {
        buyData: buyData,
        sellData: sellData
      }
    },
    tableData: function() {
      return this.recommendData.tradeParamsData
    },
    mrxhData: function() {
      return this.$store.state.goldStrategy.mrxhData
    },
    mcxhData: function() {
      return this.$store.state.goldStrategy.mcxhData
    }
  }),
  methods: {
    changeNavType(data) {
      this.type = data
    },
    goMrjyPage(data) {
      this.$store.dispatch('goldStrategy/getMrjyData', {
        strategyId: this.strategyId,
        page: data - 1
      }).then(() => {})
    },
    goDqxgPage(data) {
      this.$store.dispatch('goldStrategy/getDqxgData', {
        strategyId: this.strategyId,
        pageNum: data - 1
      }).then(() => {})
    },
    changeMrxhType(e) {
      e.target.setAttribute('class', 'active')
      this.$refs.mcxh.removeAttribute('class', 'active')
      this.type = 'mrxh'
    },
    changeMcxhType(e) {
      e.target.setAttribute('class', 'active')
      this.$refs.mrxh.removeAttribute('class', 'active')
      this.type = 'mcxh'
    }
  },
  mounted() {
    document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625 + '%'

    this.strategyId = this.$route.params.strategyId
    this.$store.dispatch('goldStrategy/getGoldStrategyData', {
      strategyId: this.strategyId
    }).then(() => {})
    this.$store.dispatch('goldStrategy/getMrxhData', {
      strategyId: this.strategyId,
      type: 'buy'
    })
    this.$store.dispatch('goldStrategy/getMrxhData', {
      strategyId: this.strategyId,
      type: 'sell'
    })
  }
}
</script>
