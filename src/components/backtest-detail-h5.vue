<style>
    @import '../assets/css/base.css';
    .app{
        width:100%;
    }
    .goldRecommend{
        font-size: 0.12rem;
        background:#F2F2F2;
    }
    .strategyHeader{
        height:0.32rem;
        text-align: left;
    }
    .strategyDesc{
        text-align: left;
        padding: 0.15rem 0.05rem;
        background: #fff;
        margin-bottom: 0.05rem;
    }
    .strategyHeader span{
        display: inline-block;
        height:0.32rem;
        line-height: 0.32rem;
        color:#2388da;
    }
    .radarChart{
        width:100%;
        height:5rem;
        margin-bottom: 0.05rem;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
        .choseStock{
            background:#fff;
        }
        .sellCondition{
            background:#fff;
            text-align: left;
            font-size:0.18rem;
        }
        .tableList{
            padding-top:0.2rem;
            padding-bottom:0.2rem;
        }
        .controlStrategy{
            background:#fff;
            font-size:0.18rem;
            text-align: left;
        }
        .recommendTitle{
            text-align: left;
            font-size:0.2rem;
            background:#fff;
            line-height: 0.4rem;
            padding-left:0.2rem;
            background:#F2F2F2;
        }
        .syqxt,.dryk,.mrcc,.syytj,.sylfb{
            min-height:4.2rem;
            width:100%;
        }
        .mrjy,.dqxg{  padding:0.1rem 0;  background: #fff; width:100%;}
        .mrjy table,.dqxg table{ width:100%; font-size:0.16rem; margin-top: 0.2rem;}
        .mrjy table thead tr th,.dqxg table thead tr th{ height:0.25rem; line-height: 0.25rem}
        .mrjy table  tr td,.dqxg table  tr td{ text-align: center; height:0.35rem; line-height:0.35rem;}
        .red{
            color:#d7453e;
        }
        .green{
            color:#61a65b;
        }
    }
</style>
<template>
    <div class="goldRecommend">
        <div>
            <!--<div class="choseStock">
                <div class="recommendTitle">选股条件</div>
                <Tablelist :data="choseStockData"></Tablelist>
            </div>-->
            <div class="sellCondition">
                <div>
                    <div class="recommendTitle">买入条件</div>
                    <Tablelist :data="sellConditionData.buyData"></Tablelist>
                    <div style="padding: 0.1rem 0.2rem;">买入表达式：{{recommendData.sellConditiondata.buy.buyConExp}}</div>
                </div>
                <div>
                    <div class="recommendTitle">卖出条件</div>
                    <Tablelist :data="sellConditionData.sellData"></Tablelist>
                    <div style="padding: 0.1rem 0.2rem;">卖出表达式：{{recommendData.sellConditiondata.sell.sellConExp}}</div>
                </div>
            </div>
            <div class="controlStrategy">
                <div class="recommendTitle" >仓控策略</div>
                <div style="padding: 0.3rem 0.2rem;">{{recommendData.positionModel.modelName}}：<span style="color:#666;">{{recommendData.positionModel.modelValue}}</span></div>
            </div>
            <div class="tradeParams">
                <div class="recommendTitle">交易参数</div>
                <Tablelist :data="tradeParamData"></Tablelist>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState } from 'vuex'

    export default{
      data () {
        return {

        }
      },
      computed: mapState({
        goldResult: state => state.backtestDetailH5.strategyResult,
        recommendData: function () {
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

          return {
            choseStockData: {
              // filterSummary: JSON.parse(this.goldResult.filterSummary)
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
              stockMaxHolding: this.goldResult.stockMaxHolding,
              conPriority: this.goldResult.conPriority === 'time_first' ? '择时条件优先' : '仓位条件优先',
              commission: this.goldResult.commission * 100 + '%',
              tradeCycle: tradeCycle,
              slippage: slipData,
              benchmark: markData,
              riskFreeRatio: Number(this.goldResult.riskFreeRatio * 100).toFixed(2) + '%'
            }
          }
        },
        /* choseStockData: function () {
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
        },*/
        sellConditionData: function () {
          const buyData = [
                    ['序号', '指标', '参数', '运算符', '数值']
          ]
          const sellData = [
                    ['序号', '指标', '参数', '运算符', '数值']
          ]
          const buyConditionTable = this.recommendData.sellConditiondata.buy.buyStrategyIndexList
          const sellConditionTable = this.recommendData.sellConditiondata.sell.sellStrategyIndexList

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

              buyData.push([buyConditionTable[i].pageOrder, buyConditionTable[i].indexName, '(' + parmsPeriod.join('，') + ')', buyConditionTable[i].operator, buyConditionTable[i].comparisonValue])
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
              sellData.push([sellConditionTable[j].pageOrder, sellConditionTable[j].indexName, '(' + parmsPeriod.join('，') + ')', sellConditionTable[j].operator, sellConditionTable[j].comparisonValue])
            }
          }
          return {
            buyData: buyData,
            sellData: sellData
          }
        },
        tradeParamData: function () {
          const tableData = this.recommendData.tradeParamsData
          return [
                    ['初始金额', '资金分配', '买入价格', '卖出价格', '回测时间'],
                    [tableData.initFund, tableData.fundAllocate, tableData.buyPriceType, tableData.sellPriceType, tableData.backtestDate],
                    ['最大持仓', '个股最大仓位', '条件优先序', '交易费用', '调仓周期'],
                    [tableData.maxHolding, tableData.stockMaxHolding, tableData.conPriority, tableData.commission, tableData.tradeCycle],
                    ['买卖滑点', '收益基准', '无风险利率'],
                    [tableData.slippage, tableData.benchmark, tableData.riskFreeRatio]
          ]
        }
      }),
      mounted () {
        this.strategyId = this.$route.params.strategyId
        345
        this.$store.dispatch('backtestDetailH5/getStrategyData', { strategyId: this.strategyId }).then(() => {
          console.log(this.goldResult)
        })
      }
    }

</script>
