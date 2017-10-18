<style lang="scss" scoped>
@import '../assets/css/base.css';

html {
    height: 100%;
}
.goldRecommend {
    min-height: 100%;
    font-size: 12px;
    background: #0d0e0f;
    padding: 0 1px;
    box-sizing: border-box;
}
.strategyHeader {
    height: 32px;
    text-align: left;
    background: #141518;
    padding-left: 10px;
}
.strategyHeader span {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    color: #c9d0d7;
    font-size: 16px;
}
.strategyTop {
    /*height:375px;*/
    margin-bottom: 3px;
    position: relative;
}
.strategyDesc {
    margin-right: 3px;
    /*height:345px;*/
    text-align: left;
    background: #0d0e0f;
}
.strategyDescTop {
    /*height:214px;*/
    background: #141518;
    padding: 15px 10px;
}
.strategyDescBottom {
    min-height: 190px;
    background: #141518;
}
.radarChart {
    width: 456px;
    height: 336px;

}
.attention {
    margin-left: 20px;
    margin-right: 80px;
    position: relative;
    top: 2px;
}
a {
    cursor: pointer;
}
.topNav ul li > span {
    width: 75px;
}

.recommend span {
    position: relative;
    top: 7px;
    height: 20px;
    cursor: pointer;
}

.recommend .weixin {
    width: 19px;
    height: 16px;
    display: inline-block;
    background: url("../assets/images/z3img/back-icons.png") no-repeat;
    cursor: pointer;
    background-position: 0 -16px;
    margin-right: 12px;
}
.recommend .weixin:hover {
    background-position: 0 0;
    margin-right: 12px;
}

.recommend .copy {
    width: 19px;
    height: 16px;
    display: inline-block;
    background: url("../assets/images/z3img/back-icons.png") no-repeat;
    cursor: pointer;
    background-position: 0 -52px;
    margin-right: 22px;
}
.recommend .copy:hover {
    background-position: 0 -34px;
}

.qrcode {
    position: absolute;
    top: 51px;
    right: 41px;
    /* top: 40px;
  right: 10px; */
    /* box-shadow: 4px 4px 4px 2px #eee;
  border: 1px solid #eee; */
}

.angle {
    width: 0;
    height: 0;
    border: 15px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    top: -26px;
    right: 32px;

}

.code-box {
    width: 200px;
    height: 214px;
    background: #fff;
    border-radius: 10px;
    font-size: 12px;
    color: #666666;
    padding: 10px;
}

.code-txt {
    text-align: center;
    /* line-height: 13px; */
    margin-top: -5px;
}
.strategyDescTable {
    width: 100%;
}
.strategyDescTable tr:first-child td {
    color: #afb6bd;
}
.strategyDescTable tr:last-child td {
    color: #d3d9dd;
}
.strategyDescTable td {
    color: #191919;
    text-align: center;
    height: 28px;
    line-height: 28px;
}

.radarImg {
    position: absolute;
    right: 100px;
    top: 312px;
    cursor: pointer;
}

.radarNotice {
    position: absolute;
    color: #666;
    width: 250px;
    right: 100px;
    top: 347px;
    background: #cccfd9;
    border-radius: 5px;
    padding: 10px 15px;
    line-height: 18px;
    z-index: 9999;
}
</style>
<template>
<div class="goldRecommend">

  <div class="strategyHeader clear">
    <div class="fl">
      <span>{{goldResult===null?'':goldResult.strategyName}}</span>
    </div>
    <div class="fr recommend">
      <span class="mr-10 weixin" @click="showQrcode"></span>
      <span class="copy mr-20 copy"></span>
    </div>
  </div>
  <div class="strategyTop display-box">
    <div class="strategyDesc box-flex-1">
      <div class="strategyDescTop">
        <Titlecontent :data="articleData"></Titlecontent>
        <!--<Tablelist :data="tableData"></Tablelist>-->
        <table class="strategyDescTable">
          <tr>
            <td v-for="item in trData">{{item}}</td>
          </tr>
          <tr>
            <td v-z3-updowncolor="this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':this.goldResult.evaluationIndexs.annualReturn">{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null?'':(Number(this.goldResult.evaluationIndexs.annualReturn) * 100).toFixed(2) + '%'}}</td>
            <td v-z3-updowncolor="this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':this.goldResult.evaluationIndexs.excessReturn">{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null?'':(Number(this.goldResult.evaluationIndexs.excessReturn) * 100).toFixed(2) + '%'}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':(Number(this.goldResult.evaluationIndexs.algoVolatility) * 100).toFixed(2) + '%'}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':Number(this.goldResult.evaluationIndexs.sharpe).toFixed(2)}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':(Number(this.goldResult.evaluationIndexs.maxDrawdown) * 100).toFixed(2) + '%'}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':Number(this.goldResult.evaluationIndexs.alpha).toFixed(2)}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':Number(this.goldResult.evaluationIndexs.beta).toFixed(2)}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':(Number(this.goldResult.evaluationIndexs.winRatio) * 100).toFixed(2) + '%'}}</td>
            <td>{{this.goldResult === null?'':this.goldResult.evaluationIndexs === null ? '':(Number(this.goldResult.evaluationIndexs.turnover) * 100).toFixed(2) + '%'}}</td>
          </tr>
        </table>
      </div>
      <div class="strategyDescBottom">
        <Goldrecommends :data="recommendData"></Goldrecommends>
      </div>
    </div>
    <div style="width: 456px;height: auto;background:#141518;">
      <div class="radarChart">
        <Radarchart :strategyId="strategyId"></Radarchart>
      </div>
    </div>
    <img class="radarImg" @mouseover="showRadar" @mouseout="hideRadar" src="../assets/images/help.png" />
    <div class="radarNotice" v-if="radarShow">
      基于Barra的结构化多因子风险模型，对策略从质量、波动、估值、规模、动量、成长性、股东持股、分析师预期等十个维度进行评价。数值越靠近雷达图外围，则该风格得分越高，中间代表中性，越靠近内部则表示越低。例如：成长性数值越大，则该策略越偏向成长组合，越小越没有成长性；同理，规模数值越大，则该策略越偏向大盘组合，越小则越偏小市值组合。另外，通过风格指标的纵向对比，可以评估策略风格的稳定性，曲线越聚集，则策略风格越稳定；越分散，则风格越跳跃。
    </div>
  </div>
  <div>
    <Goldchart :strategyId="strategyId" :type="type"></Goldchart>
  </div>
  <div style="color:#999;line-height: 50px; background: #141518;">
    风险提示：本策略过往业绩并不预示未来表现，也不构成业绩保证。策略提示的调入信号、调出信号、Barra风格值等仅供投资者投资参考，不作为买卖建议，风险自担！
  </div>
  <div v-show="showQrcodeBox" class="qrcode">
    <div class="angle" @click="showCode"></div>
    <div class="code-box">
      <canvas ref="qrcode"></canvas>
      <div class="code-txt">微信扫码转发</div>
    </div>
  </div>
  <toast :msg="toastmsg" v-if="showToast"></toast>
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
import qrcode from 'qrcode'
import Clipboard from 'clipboard'
import toast from 'components/toast'
import {
  ctx
} from '../z3tougu/config'
import * as Data from '../z3tougu/constant/siwei.js'

export default {
  data() {
    return {
      strategyId: this.$route.params.strategyId,
      type: '',
      showQrcodeBox: false,
      toastmsg: '',
      showToast: false,
      trData: ['年化收益', '超额收益', '波动率', '夏普比率', '最大回撤', 'Alpha', 'Beta', '胜率', '换手率'],
      radarShow: false,
      stockSort: Data.stockSort
    }
  },
  components: {
    Titlecontent,
    Tablelist,
    Goldrecommends,
    Navbar,
    Goldchart,
    Radarchart,
    toast
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
        var stockSortData = ''
        if (this.goldResult.stockSort) {
          const v = this.goldResult.stockSort.split(',')[0]
          const s = this.goldResult.stockSort.split(',')[1] === 'asc' ? '升' : '降'
          stockSortData = this.stockSort[v] + '(' + s + ')'
        }

        let fundAllocateData = ''
        if (this.goldResult.fundAllocate === 'fund_value') {
          fundAllocateData = '资金等权'
        } else if (this.goldResult.fundAllocate === 'market_value') {
          fundAllocateData = '市值等权'
        } else if (this.goldResult.fundAllocate === 'fix_value') {
          fundAllocateData = '最大持仓数等分'
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
            fundAllocate: fundAllocateData,
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
            riskFreeRatio: Number(this.goldResult.riskFreeRatio * 100).toFixed(2) + '%',
            stockSort: stockSortData
          }
        }
      }
    }
  }),
  methods: {
    showQrcode() {
      this.showQrcodeBox = !this.showQrcodeBox
    },
    showRadar() {
      this.radarShow = true
    },
    hideRadar() {
      this.radarShow = false
    }
  },
  mounted() {
    this.type = this.$route.params.showType

    this.$store.dispatch('goldStrategy/getGoldStrategyData', {
      strategyId: this.strategyId
    })
    this.$store.dispatch('goldStrategy/getMrjyData', {
      strategyId: this.strategyId
    })
    this.$store.dispatch('goldStrategy/getMrxhData', {
      strategyId: this.strategyId,
      type: 'buy'
    })
    this.$store.dispatch('goldStrategy/getMrxhData', {
      strategyId: this.strategyId,
      type: 'sell'
    })

    const url = window.location.protocol + '//' + window.location.host + ctx + '/gold-strategy-h5/' + this.strategyId
    qrcode.toDataURL(this.$refs.qrcode, url, function() {})
    const clipboard = new Clipboard('.copy', {
      text: function() {
        return url
      }
    })
    clipboard.on('success', (e) => {
      this.toastmsg = '分享地址已拷贝!'
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500)
    })
    clipboard.on('error', (e) => {
      this.toastmsg = '分享地址拷贝失败!'
      this.showToast = true
      setTimeout(() => {
        this.showToast = false
      }, 2500)
    })
  }
}
</script>
