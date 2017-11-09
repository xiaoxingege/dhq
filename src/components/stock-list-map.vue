<style lang="scss" scoped="">
.hover-wrapper {
    border: 4px solid #25262b;
    background: #fff;
    position: fixed;
    min-width: 300px;
    overflow: hidden;
    z-index: 10000;
}
.hover-wrapper h3 {
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
.hover-wrapper table {
    border-collapse: collapse;
    border-spacing: 0;
}
.hover-wrapper table .hovered {
    color: #fff;
    font-size: 21px;
    font-weight: 700;
    border-bottom: none;
    height: 52px;
}
.hover-wrapper table tr {
    border-bottom: 2px solid #e3e4e9;
    height: 30px;
    color: #000;
}
.tiker {
    padding-left: 10px;
    width: 85px;
    text-align: left;
}
/* .change{width: 84px;}*/
td {
    padding: 0;
}
.hover-wrapper table .price {
    text-align: right;
    padding-left: 4px;
    padding-right: 4px;
}
.hover-wrapper table .change {
    text-align: right;
    padding-right: 10px;
}
.hover-wrapper table tr td:nth-child(2) {
    width: 110px;
    height: 30px;
}
.hover-wrapper table tr td:nth-child(3) {
    width: 60px;
}
.stocklist-chart {
    width: 100%;
    height: 100%;
}
.change {
    min-width: 46px;
}
.stock-down {
    color: #56a870;
    margin-left: 10px;
}
.stock-up {
    color: #ca4941;
}
.hover-wrapper h3 img {
    margin-left: 5px;
}
.stock-down img {
    padding-top: 11px;
}
.stock-up img {
    padding-top: 10px;
}
</style>
<template>
<div class="hover-wrapper" :style="{left:offsetX+'px',top:offsetY+'px'}">
  <h3 class="clearfix">{{titleName}}--{{titleNameLel2}}
    <span v-z3-updowncolor="titleChngPct" v-if="condition === 'mkt_idx.cur_chng_pct'">{{titleChngPct}}%</span>
    <span class="stock-down fr" v-if="condition === 'mkt_idx.cur_chng_pct'">{{stockDownNo}}<img src="../assets/images/i_jiantou_down.png"/></span>
    <span class="stock-up fr" v-if="condition === 'mkt_idx.cur_chng_pct'">{{stockUpNo}}<img src="../assets/images/i_jiantou_up.png"/></span>
  </h3>
  <table>
    <tbody>
      <tr class="hovered" :style="{background:bgColor}">
        <td class="tiker">{{titleStockName}}</td>
        <td>
          <div class="stocklist-chart" ref="chartTitle" style="height:40px"></div>
        </td>
        <td class="price">{{titlePrice}}</td>
        <td class="change">{{titleStockCondtion}}</td>
      </tr>
      <tr v-for="stock of stockList">
        <td class="tiker">{{stock.name}}</td>
        <td>
          <div class="stocklist-chart" v-trend-line="{'lineData':stock.chartData,'catId':stockId}"></div>
        </td>
        <td class="price">{{stock.price}}</td>
        <td class="change" :style="{color:typeof(stock.itemStyle)=== 'undefined'?'#2f323d':stock.itemStyle.normal.color}">{{stock.perfText}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
export default {
  props: ['node', 'parent', 'offsetX', 'offsetY', 'condition', 'indexCode'],
  data() {
    return {
      stockList: [],
      stockListLeft: 0,
      stockListTop: 0,
      titlePrice: 0,
      titleChngPct: '',
      stockUpNo: 0,
      stockDownNo: 0
    }
  },
  directives: {
    'trend-line': {
      update(el, binding, vnode) {
        const lineData = binding.value.lineData;
        const catId = binding.value.catId;
        const vm = vnode.context;
        //加入到异步执行栈，让JS主执行现成完成，使mouseover,mouseout事件流畅
        setTimeout(() => {
          vm.drawStockLine(el, lineData, catId)
        }, 0);
      }
    }
  },
  watch: {
    stockId() {
      this.updateChart()
    },
    nodeId() {
      this.updateHoverTitle()
    }
  },
  computed: {
    stockId() {
      if (this.parent && this.parent.id) {
        return this.parent.id
      }
    },
    bgColor() {
      if (this.node && this.node.itemStyle) {
        return this.node.itemStyle.normal.color
      }
    },
    nodeId() {
      if (this.node && this.node.id) {
        return this.node.id
      }
    },
    titleStockName() {
      if (this.node && this.node.name) {
        return this.node.name
      }
    },
    titleStockCondtion() {
      if (this.node && this.node.perfText) {
        return this.node.perfText
      }
    },
    titleName() {
      if (this.node && this.node.titleName) {
        return this.node.titleName
      }
    },
    titleNameLel2() {
      if (this.parent && this.parent.name) {
        return this.parent.name
      }
    },
    titleChartData() {
      return this.node.chartData
    },
    stockChartData: function() {
      const stockChartData = this.$store.state.stockMap.stockChartData
      return stockChartData
    },
    industryChngPct: function() {
      const industryChngPct = this.$store.state.stockMap.industryChngPct
      return industryChngPct
    }
  },
  methods: {
    updateChart: function() {
      if (this.parent.children) {
        this.stockList = this.parent.children
      }
      this.$store.dispatch('stockMap/stockChartData', {
          stockId: this.stockId,
          code: this.indexCode
        })
        .then(() => {
          const _this = this
          // 悬浮框的表头
          this.titleChngPct = this.industryChngPct
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
              right: 0
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
            animation: false,
            series: [{
              type: 'line',
              smooth: true,
              showSymbol: false,
              lineStyle: {
                normal: {
                  color: '#fff',
                  width: 1.5
                }
              },
              data: this.node.chartData
            }]
          })
          // 计算每只股票的最新价 上涨股票数和下跌股票数
          this.stockUpNo = 0
          this.stockDownNo = 0
          this.stockList.forEach(function(stock) {
            if (stock.perf && stock.perf >= 0) {
              _this.stockUpNo++
            } else if (stock.perf && stock.perf < 0) {
              _this.stockDownNo++
            }
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
          this.$nextTick(() => {
            let wrapHeight
            if (document.getElementsByClassName('hover-wrapper').length > 0) {
              wrapHeight = document.getElementsByClassName('hover-wrapper')[0].offsetHeight
              this.$emit('updateWrapHeight', wrapHeight)
            }
            // 悬浮框股票列表
            // for (const i in this.stockList) {
            //   if (this.$refs.chart && this.$refs.chart.length > 0) {
            //     this.stockList[i].chart = echarts.getInstanceByDom(this.$refs.chart[i]) || echarts.init(this.$refs.chart[i])
            //     this.stockList[i].chart.setOption({
            //       grid: {
            //         show: false,
            //         left: 5,
            //         top: 5,
            //         bottom: 5,
            //         right: 0
            //       },
            //       xAxis: [{
            //         axisLine: false,
            //         splitLine: {
            //           show: false
            //         },
            //         type: 'category',
            //         data: new Array(17)
            //       }],
            //       yAxis: [{
            //         type: 'value',
            //         axisLine: false,
            //         splitLine: {
            //           show: false
            //         },
            //         min: 'dataMin',
            //         max: 'dataMax'
            //       }],
            //       animation: false,
            //       series: [{
            //         type: 'line',
            //         smooth: true,
            //         showSymbol: false,
            //         lineStyle: {
            //           normal: {
            //             color: '#666',
            //             width: 1
            //           }
            //         },
            //         data: this.stockList[i].chartData
            //       }]
            //     })
            //   } else {
            //     // debugger
            //   }
            // }
          })
        })
    },
    updateHoverTitle: function() {
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
          right: 0
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
              color: '#fff',
              width: 1.5
            }
          },
          data: this.node.chartData
        }]
      })
    },
    drawStockLine: function(el, lineData, catId) {
      if (catId !== this.stockId || el.clientHeight === 0) {
        return;
      }
      let chart = echarts.getInstanceByDom(el) || echarts.init(el);
      // chart.clear();
      chart.setOption({
        grid: {
          show: false,
          left: 5,
          top: 5,
          bottom: 5,
          right: 0
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
        animation: false,
        series: [{
          type: 'line',
          smooth: true,
          showSymbol: false,
          lineStyle: {
            normal: {
              color: '#666',
              width: 1
            }
          },
          data: lineData
        }]
      })
    }
  },
  mounted() {
    this.updateChart()
    this.chart = echarts.init(this.$refs.chartTitle);
  }
}
</script>
