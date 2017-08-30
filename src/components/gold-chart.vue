<style lang="scss" scoped>
    .mrjy{  padding:10px;  background: #fff;  }
    .mrjy table{ width:100%;}
    .mrjy table thead{ background:#F2F2F2;}
    .mrjy table thead tr th{ height:25px; line-height: 25px}
    .mrjy table  tr td{ text-align: center; height:35px; line-height: 35px;}
    .red{
        color:#d7453e;
    }
    .green{
        color:#61a65b;
    }
    .syqxt,.dryk,.mrcc,.syytj,.sylfb,.mrjy,.dqxg{
        min-height:420px;
        width:100%;
    }
</style>
<template>
    <div>
        <Navbar :data="navText" :type="type" v-on:changeType="changeNavType"></Navbar>
        <div>
            <div v-if="type === 'syqxt'" class="syqxt">
                <Linechart :strategyId="strategyId"></Linechart>
            </div>
            <div v-if="type === 'dryk'" class="dryk">
                <Barupdown :strategyId="strategyId"></Barupdown>
            </div>
            <div v-if="type === 'mrcc'" class="mrcc">
                <Onelinechart :strategyId="strategyId"></Onelinechart>
            </div>
            <div v-if="type === 'syytj'" class="syytj">
                <Twobarchart :strategyId="strategyId"></Twobarchart>
            </div>
            <div v-if="type === 'sylfb'" class="sylfb">
                <Onebarchart :strategyId="strategyId"></Onebarchart>
            </div>
            <div v-if="type === 'mrjy'" class="mrjy">
                <table cellpadding="0" cellspacing="0">
                    <thead>
                    <tr>
                        <th>日期</th>
                        <th>股票代码</th>
                        <th>股票简称</th>
                        <th>买/卖</th>
                        <th>成交价格（元）</th>
                        <th>成交股数</th>
                        <th>成交额（万元）</th>
                        <th>佣金（元）</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="item of mrjyData.content">
                        <td>{{String(item.backtestDate).substring(0, 4) + '-' + String(item.backtestDate).substring(4, 6) + '-' + String(item.backtestDate).substring(6)}}</td>
                        <td>{{item.innerCode}}</td>
                        <td><a :href="'/stock/'+ item.name" target="_blank">{{item.name}}</a></td>
                        <td :class="item.buySellType === '买入'? 'red' : 'green'">{{item.buySellType}}</td>
                        <td>{{Number(item.price).toFixed(2)}}</td>
                        <td>{{item.quantity}}</td>
                        <td>{{Number(item.amount).toFixed(2)}}</td>
                        <td>{{Number(item.commission).toFixed(2)}}</td>
                    </tr>
                    </tbody>

                </table>
                <Pagination :totalPage="mrjyData.totalPages"></Pagination>
            </div>
            <div v-if="type === 'dqxg'" class="dqxg">

            </div>
        </div>
    </div>

</template>
<script>
    import Navbar from 'components/nav-bar'
    import Tablelist from 'components/table-list'
    import Linechart from 'components/line-chart'
    import Barupdown from 'components/bar-up-down'
    import Onelinechart from 'components/one-line-chart'
    import Onebarchart from 'components/one-bar-chart'
    import Twobarchart from 'components/two-bar-chart'
    import Pagination from 'components/pagination'

    export default{
      props: ['data', 'strategyId'],
      data () {
        return {
          navText: [['收益曲线图', 'syqxt'], ['当日盈亏', 'dryk'], ['每日持仓', 'mrcc'], ['收益月统计', 'syytj'], ['收益率分布', 'sylfb'], ['每日交易', 'mrjy'], ['当前选股', 'dqxg']],
          type: 'syqxt'
        }
      },
      components: {
        Navbar,
        Tablelist,
        Linechart,
        Barupdown,
        Onelinechart,
        Onebarchart,
        Twobarchart,
        Pagination
      },
      computed: {
        choseStockData: function () {
          const choseStockTable = this.data.choseStockData.filterSummary
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
        },
        sellConditionData: function () {
          const buyData = [
                    ['序号', '指标', '参数', '运算符', '数值']
          ]
          const sellData = [
                    ['序号', '指标', '参数', '运算符', '数值']
          ]
          const buyConditionTable = this.data.sellConditiondata.buy.buyStrategyIndexList
          const sellConditionTable = this.data.sellConditiondata.sell.sellStrategyIndexList

          if (buyConditionTable.length > 0) {
            for (var i = 0; i < buyConditionTable.length; i++) {
              const parms = buyConditionTable[i].indexParams.period
              const parmsPeriod = []
              if (parms === 'day') {
                parmsPeriod.push('日线')
              } else if (parms === 'week') {
                parmsPeriod.push('周线')
              } else if (parms === 'month') {
                parmsPeriod.push('月线')
              }
              if (parms.T) {
                parmsPeriod.push(parms.T)
              }
              if (parms.M) {
                parmsPeriod.push(parms.M)
              }
              buyData.push([buyConditionTable[i].pageOrder, buyConditionTable[i].indexName, '(' + parmsPeriod.join('，') + ')', buyConditionTable[i].operator, buyConditionTable[i].comparisonValue])
            }
          }
          if (sellConditionTable.length > 0) {
            for (var j = 0; j < sellConditionTable.length; j++) {
              const parms = JSON.parse(sellConditionTable[j].indexParams)
              const parmsPeriod = []
              if (parms.period === 'day') {
                parmsPeriod.push('日线')
              } else if (parms.period === 'week') {
                parmsPeriod.push('周线')
              } else if (parms.period === 'month') {
                parmsPeriod.push('月线')
              }
              if (parms.T) {
                parmsPeriod.push(parms.T)
              }
              if (parms.M) {
                parmsPeriod.push(parms.M)
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
          const tableData = this.data.tradeParamsData
          return [
                    ['初始金额', '资金分配', '买入价格', '卖出价格', '回测时间'],
                    [tableData.initFund, tableData.fundAllocate, tableData.buyPriceType, tableData.sellPriceType, tableData.backtestDate],
                    ['最大持仓', '个股最大仓位', '条件优先序', '交易费用', '调仓周期'],
                    [tableData.maxHolding, tableData.stockMaxHolding, tableData.conPriority, tableData.commission, tableData.tradeCycle],
                    ['买卖滑点', '收益基准', '无风险利率'],
                    [tableData.slippage, tableData.benchmark, tableData.riskFreeRatio]
          ]
        },
        mrjyData: function () {
          return this.$store.state.goldStrategy.mrjyData
        }
      },
      methods: {
        changeNavType (data) {
          this.type = data
        }
      },
      mounted () {

      }
    }
</script>
