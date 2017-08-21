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
    /*.hover-wrapper table .hovered td{
        padding-top: 14px;
        line-height: 18px;
    }*/
    .hover-wrapper table tr{
        border-bottom: 2px solid #e3e4e9;
        height: 30px;
        color:#000
    }
    .tiker{
        padding-left: 10px;
        width: 94px;
    }
    .change{width: 84px;}
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
        height:30px;
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
    .stocklist-chart{width: 100%;height:100%}
</style>
<template>
    <div class="hover-wrapper" :style="position">
        <h3>{{titleName}}--{{titleNameLel2}}</h3>
        <table>
            <tbody>
            <tr class="hovered" :style="{background:bgColor}">
                <td class="tiker">{{titleStockName}}</td>
                <!--<td><div class="stocklist-chart" v-stockline="{lineData:titleChartData,color:'#fff'}"></div></td>-->
                <td><div class="stocklist-chart" ref="chartTitle"></div></td>
                <td class="price">{{titlePrice}}</td>
                <td class="change">{{titleStockCondtion}}</td>
            </tr>
            <tr class="hovered is-description" :style="{background:bgColor}"><td colspan="4" class="description"></td></tr>
            <tr v-for="stock of stockList">
                <td class="tiker">{{stock.name}}</td>
                <!--<td><div class="stocklist-chart"  v-stockline="{lineData:stockChartData,stockName:stock.name}"></div></td>-->
                <td><div class="stocklist-chart" ref="chart"></div></td>
                <td class="price">{{stock.price}}</td>
                <td class="change" :style="{color:stock.itemStyle.normal.color}">{{stock.perfText}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
<script type="text/javascript">
     import echarts from 'echarts'
export default{
       props: ['node', 'parent', 'offsetX', 'offsetY', 'condition', 'indexCode'],
       data () {
         return {
           stockList: [],
           stockListLeft: 0,
           stockListTop: 0,
           titlePrice: 0
         }
       },
       watch: {
         stockId () {
           this.updateChart()
         },
         nodeId () {
           this.updateHoverTitle()
         }
       },
       computed: {
         position () { return 'left:' + this.offsetX + 'px;top:' + this.offsetY + 'px' },
         stockId () { return this.parent.id },
         bgColor () { return this.node.itemStyle.normal.color },
         nodeId () { return this.node.id },
         titleStockName () { return this.node.name },
         titleStockCondtion () { return this.node.perfText },
         titleName () { return this.node.titleName },
         titleNameLel2 () { return this.parent.name },
         titleChartData () { return this.node.chartData },
         stockChartData: function () {
           const stockChartData = this.$store.state.stockMap.stockChartData
           return stockChartData
         }
       },
        /* directives: {
         stockline: {
         componentUpdated: (el, bind) => {
         if (bind.value.lineData) {
         const lineData = bind.value.lineData[bind.value.stockName]
         let chart = echarts.getInstanceByDom(el)
         if (chart) {
         chart.dispose()
         }
         chart = echarts.init(el)
         chart.setOption({
         grid: {
         show: false,
         left: 5,
         top: 5,
         bottom: 5,
         right: 5
         },
         xAxis: [{
         axisLine: false,
         splitLine: {
         show: false
         },
         type: 'category',
         data: new Array(17)
         }],
         yAxis: [{
         type: 'value',
         axisLine: false,
         splitLine: {
         show: false
         },
         min: 'dataMin',
         max: 'dataMax'
         }],
         series: [{
             type: 'line',
             smooth: true,
             showSymbol: false,
             lineStyle: {
                 normal: {
                 color: '#666'
                 }
             },
             data: lineData
         }]
         })
         }
         /!* if (bind.value.color) {
         chart.setOption({
         color: bind.value.color
         })
         }*!/
         }
         }
         },*/
       methods: {
         updateChart: function () {
           this.$store.dispatch('stockMap/stockChartData', { stockId: this.stockId, code: this.indexCode })
                    .then(() => {
                      const _this = this
                        // 悬浮框的表头
                      this.node.chartData = this.stockChartData[this.node.name]
                      if (this.node.chartData) {
                        const nodeLength = this.node.chartData.length
                        if (this.node.chartData[nodeLength - 1]) {
                          this.titlePrice = this.node.chartData[nodeLength - 1].toFixed(2)
                        } else {
                          this.titlePrice = '--'
                        }
                      }
                        // 悬浮框股票列表
                      this.parent.children.forEach(function (stock) {
                        stock.chartData = _this.stockChartData[stock.name]
                        if (stock.chartData) {
                          const stockDetailLength = stock.chartData.length
                          if (stock.chartData[stockDetailLength - 1]) {
                            stock.price = stock.chartData[stockDetailLength - 1].toFixed(2)
                          } else {
                            stock.price = '--'
                          }
                        }
                      })
                      this.stockList = this.parent.children
                      this.$nextTick(() => {
                        for (const i in this.stockList) {
                          if (this.$refs.chart && this.$refs.chart.length > 0) {
                            this.stockList[i].chart = echarts.getInstanceByDom(this.$refs.chart[i]) || echarts.init(this.$refs.chart[i])
                            this.stockList[i].chart.setOption({
                              grid: {
                                show: false,
                                left: 5,
                                top: 5,
                                bottom: 5,
                                right: 5
                              },
                              xAxis: [{
                                axisLine: false,
                                splitLine: {
                                  show: false
                                },
                                type: 'category',
                                data: new Array(17)
                              }],
                              yAxis: [{
                                type: 'value',
                                axisLine: false,
                                splitLine: {
                                  show: false
                                },
                                min: 'dataMin',
                                max: 'dataMax'
                              }],
                              series: [{
                                type: 'line',
                                smooth: true,
                                showSymbol: false,
                                lineStyle: {
                                  normal: {
                                    color: '#666'
                                  }
                                },
                                data: this.stockList[i].chartData
                              }]
                            })
                          } else {
                            // debugger
                          }
                        }
                      })
                      this.chart.setOption({
                        grid: {
                          show: false,
                          left: 5,
                          top: 5,
                          bottom: 5,
                          right: 5
                        },
                        xAxis: [{
                          axisLine: false,
                          splitLine: {
                            show: false
                          },
                          type: 'category',
                          data: new Array(17)
                        }],
                        yAxis: [{
                          type: 'value',
                          axisLine: false,
                          splitLine: {
                            show: false
                          },
                          min: 'dataMin',
                          max: 'dataMax'
                        }],
                        series: [{
                          type: 'line',
                          smooth: true,
                          showSymbol: false,
                          lineStyle: {
                            normal: {
                              color: '#fff'
                            }
                          },
                          data: this.node.chartData
                        }]
                      })
                    })
         },
         updateHoverTitle: function () {
                       // 悬浮框的表头
           this.node.chartData = this.stockChartData[this.node.name]
           if (this.node.chartData) {
             const nodeLength = this.node.chartData.length
             if (this.node.chartData[nodeLength - 1]) {
               this.titlePrice = this.node.chartData[nodeLength - 1].toFixed(2)
             } else {
               this.titlePrice = '--'
             }
           }
           this.chart.setOption({
             grid: {
               show: false,
               left: 5,
               top: 5,
               bottom: 5,
               right: 5
             },
             xAxis: [{
               axisLine: false,
               splitLine: {
                 show: false
               },
               type: 'category',
               data: new Array(17)
             }],
             yAxis: [{
               type: 'value',
               axisLine: false,
               splitLine: {
                 show: false
               },
               min: 'dataMin',
               max: 'dataMax'
             }],
             series: [{
               type: 'line',
               smooth: true,
               showSymbol: false,
               lineStyle: {
                 normal: {
                   color: '#fff'
                 }
               },
               data: this.node.chartData
             }]
           })
         }
       },
       mounted () {
         this.updateChart()
         this.chart = echarts.init(this.$refs.chartTitle)
       }
}
</script>
