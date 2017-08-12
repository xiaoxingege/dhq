<style lang="scss" scoped="">
    .hover-wrapper{
        border: 4px solid #25262b;
        background: #fff;
        position: fixed;
        min-width: 300px;
        overflow: hidden;
        z-index: 10000;
    }
    .hover-wrapper h3{
        font-size: 13.5px;
        font-weight: 700;
        color: #25262b;
        margin: 0;
        line-height: 30px;
        padding: 0 10px;
        text-transform: uppercase;
        white-space: nowrap;
        text-align: left;
    }
    .hover-wrapper table{
        border-collapse: collapse;
        border-spacing: 0;
    }
    .hover-wrapper table.is-small tr{height: 23px;}
    .hover-wrapper table .hovered{
        color: #fff;
        font-size: 21px;
        font-weight: 700;
        border-bottom: none;
        height: 21px;
    }
    .hover-wrapper table .hovered td{
        padding-top: 14px;
        line-height: 18px;
    }
    .hover-wrapper table tr{
        border-bottom: 2px solid #e3e4e9;
        height: 30px;
        color:#000
    }
    .tiker{
        padding-left: 10px;
        width: 94px;
    }
    td{padding:0}
    .hover-wrapper table .price{
        text-align: right;
        padding-left: 4px;
        padding-right: 4px;
    }
    .hover-wrapper table .change{
        text-align: right;
        padding-right: 10px;
    }
    .hover-wrapper table tr td:nth-child(2){
        width: 104px;
    }
    .hover-wrapper table tr td:nth-child(3){
        width: 70px;
    }
    .is-description{height:16px;}
    .description{
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-top: 6px;
    }
</style>
<template>
    <div style="color:green;">
        <div class="hover-wrapper" :style="listPosition">
            <h3>{{titleName}}--{{titleNameLel2}}</h3>
            <table>
                <tbody>
                <tr class="hovered" :style="{background:bgColor}">
                    <td class="tiker">{{titleStockName}}</td>
                    <td><div class="stocklist-chart" ref="chart"></div></td>
                    <td class="price"></td>
                    <td class="change">{{titleStockCondtion}}</td>
                </tr>
                <tr class="hovered is-description" :style="{background:bgColor}"><td colspan="4" class="description"></td></tr>
                <tr v-for="stock of stockList">
                    <td class="tiker">{{stock.name}}</td>
                    <td><div class="stocklist-chart" ref="chart"></div></td>
                    <td class="price"></td>
                    <td class="change" :style="{color:stock.itemStyle.normal.color}">{{formatterPerf(stock.perf)}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script type="text/javascript">
    import echarts from 'echarts'
    export default{
      props: ['stockList', 'bgColor', 'stockId', 'titleStockName', 'titleStockCondtion', 'titleName', 'titleNameLel2', 'stockListLeft', 'stockListTop', 'isUnit', 'condition', 'indexCode'],
      data () {
        return {
          listPosition: {
            left: this.stockListLeft,
            top: this.stockListTop
          }
        }
      },
      watch: {
            /* stcokId () {
             this.getStockChartData()
             }*/
      },
      computed: {
        stockChartData: function () {
          const stockChartData = this.$store.state.stockMap.stockChartData
          return stockChartData
        }
      },
      methods: {
        stockChartData: function () {
          const stockChartData = this.$store.state.stockMap.stockChartData
          return stockChartData
        },
        formatterPerf: function (perf) {
          if (perf) {
            return this.isUnit[this.condition] === '%' && perf >= 0 ? '+' + perf : perf
          } else {
            return '--'
          }
        },
        initChart: function () {
                // this.chart = echarts.init(this.$refs.chart)
                // console.log(this.$refs.chart.length)
          for (const i in this.$refs.chart) {
            this.chart = echarts.init(this.$refs.chart[i])
            this.$store.dispatch('stockMap/stockChartData', { stockId: this.stockId, indexCode: this.indexCode })
                  .then(() => {
                    this.chart.setOption({
                      grid: {
                        show: false,
                        left: 35,
                        top: 10,
                        bottom: 5,
                        right: 35
                      },
                      xAxis: [{
                        axisLine: false,
                        splitLine: {
                          show: false
                        },
                        type: 'category',
                        data: ['2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017', '2017']
                      }],
                      yAxis: [{
                        type: 'value',
                        axisLine: false,
                        splitLine: {
                          show: false
                        }
                      }],
                      series: [{
                        type: 'line',
                        symbol: 'rect',
                        showAllSymbol: 'true',
                        symbolSize: 3,
                        itemStyle: {
                          normal: {
                            color: function (params) {

                            }
                          }
                        },
                        lineStyle: {
                          normal: {
                            color: '#DEDEDE'
                          }
                        },
                        data: this.stockChartData[i]
                      }]
                    })
                  })
          }
        }
      },
      mounted () {
        // this.initChart()
      }
    }
</script>