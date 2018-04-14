<style lang="scss" scoped="">
@import "../assets/scss/style";
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
    color: $downColor;
    margin-left: 10px;
}
.stock-up {
    color: $upColor;
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
  <h3 class="clearfix" v-if="titleName">{{titleName}}--{{titleNameLel2}}
    <span v-z3-updowncolor="industryAvg" v-if="condition.indexOf('chng_pct')!==-1 && industryAvg!==null">{{industryAvg}}%</span>
    <!-- 涨跌幅 -->
    <span v-z3-updowncolor="industryAvg" v-else-if="condition === 'mkt_idx.keep_days_today'">{{industryAvg === ''?'--':industryAvg}}天</span>
    <!-- 连续涨跌天数 -->
    <span v-z3-updowncolor="industryAvg" v-else-if="condition ==='mkt_idx.div_rate'||condition ==='fin_idx.eps_5year'">{{industryAvg}}%</span>
    <!-- 股息率和EPS增长率 -->
    <span v-else>{{industryAvg}}</span>
    <span class="stock-down fr" v-if="condition.indexOf('chng_pct')!==-1">{{stockDownNoGG}}<img src="../assets/images/i_jiantou_down.png"/></span>
    <span class="stock-up fr" v-if="condition.indexOf('chng_pct')!==-1">{{stockUpNoGG}}<img src="../assets/images/i_jiantou_up.png"/></span>
  </h3>
  <h3 class="clearfix" v-if="!titleName && kLineType === 'topic'">{{titleNameLel2}}
    <span v-z3-updowncolor="parentValue" v-if="topicIndexs.indexOf(condition)>=1 && topicIndexs.indexOf(condition)<=7">{{parentValue}}%</span>
    <!-- 涨跌幅 -->
    <span v-z3-updowncolor="parentValue" v-else-if="condition === 'keep_days'">{{parentValue === ''?'--':parentValue}}天</span>
    <!-- 连续涨跌天数 -->
    <span v-z3-updowncolor="parentValue" v-else-if="condition ==='div_rate'||condition ==='eps_5year'">{{parentValue}}%</span>
    <!-- 股息率和EPS增长率 -->
    <span v-else>{{parentValue}}</span>
    <span class="stock-down fr" v-if="topicIndexs.indexOf(condition)>=1 && topicIndexs.indexOf(condition)<=7">{{stockDownNo}}<img src="../assets/images/i_jiantou_down.png"/></span>
    <span class="stock-up fr" v-if="topicIndexs.indexOf(condition)>=1 && topicIndexs.indexOf(condition)<=7">{{stockUpNo}}<img src="../assets/images/i_jiantou_up.png"/></span>
  </h3>
  <h3 class="clearfix" v-if="!titleName && kLineType === 'industry'">{{titleNameLel2}}
    <span v-z3-updowncolor="parentValue" v-if="industryIndexs.indexOf(condition)>=1 && industryIndexs.indexOf(condition)<=7">{{parentValue}}%</span>
    <!-- 涨跌幅 -->
    <span v-z3-updowncolor="parentValue" v-else-if="condition === 'keep_days'">{{parentValue === ''?'--':parentValue}}天</span>
    <!-- 连续涨跌天数 -->
    <span v-z3-updowncolor="parentValue" v-else-if="condition ==='div_rate'||condition ==='eps_5year'">{{parentValue}}%</span>
    <!-- 股息率和EPS增长率 -->
    <span v-else>{{parentValue}}</span>
    <span class="stock-down fr" v-if="industryIndexs.indexOf(condition)>=1 && industryIndexs.indexOf(condition)<=7">{{stockDownNo}}<img src="../assets/images/i_jiantou_down.png"/></span>
    <span class="stock-up fr" v-if="industryIndexs.indexOf(condition)>=1 && industryIndexs.indexOf(condition)<=7">{{stockUpNo}}<img src="../assets/images/i_jiantou_up.png"/></span>
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
          <div class="stocklist-chart" v-trend-line="{'name':stock.name,'catId':stockId}"></div>
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
  props: ['node', 'parent', 'offsetX', 'offsetY', 'condition', 'indexCode', 'kLineType', 'topicIndexs', 'industryIndexs', 'stockUpNo', 'stockDownNo'],
  data() {
    return {
      stockList: [],
      stockListLeft: 0,
      stockListTop: 0,
      titlePrice: '',
      titleChngPct: '',
      stockUpNoGG: '',
      stockDownNoGG: ''
    }
  },
  directives: {
    'trend-line': {
      update(el, binding, vnode) {
        const stockName = binding.value.name;
        const catId = binding.value.catId;
        const vm = vnode.context;
        // 加入到异步执行栈，让JS主执行现成完成，使mouseover,mouseout事件流畅
        setTimeout(() => {
          vm.drawStockLine(el, stockName, catId)
        }, 0);
      }
    }
  },
  watch: {
    stockId() {
      console.info('stockId changed!');
      this.updateChart()
    },
    nodeId() {
      this.updateHoverTitle()
    }
  },
  computed: {
    stockId() {
      if (this.parent && this.parent.id) {
        console.info('stockId:' + this.parent.id);
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
    parentValue() {
      if (this.parent && this.parent.name) {
        let avg
        if (this.parent.perf === undefined || this.parent.perf === null) {
          avg = '--';
        } else {
          avg = parseFloat(this.parent.perf).toFixed(2)
        }
        return avg
      }
    },
    titleChartData() {
      return this.node.chartData
    },
    stockChartData: function() {
      let stockChartData
      if (this.kLineType && this.kLineType === 'topic') {
        stockChartData = this.$store.state.plateMap.topicStockLine
      } else if (this.kLineType && this.kLineType === 'industry') {
        stockChartData = this.$store.state.plateMap.industryStockLine
      } else {
        stockChartData = this.$store.state.stockMap.stockChartData
      }
      return stockChartData
    },
    industryChngPct: function() {
      const industryChngPct = this.$store.state.stockMap.industryChngPct
      return industryChngPct
    },
    industryAvg: function() {
      let avg = this.$store.state.stockMap.industryAvg;
      if (this.condition === 'mkt_idx.keep_days_today' || this.condition === 'margin_buy_value' || this.condition === 'margin_buy_net_value') {
        if (avg === 'NaN') {
          avg = '';
        } else {
          avg = parseInt(avg);
        }
      } else if (this.condition === 'act_date') {
        avg = '';
      }
      return avg === 'NaN' ? '--' : avg;
    }
  },
  methods: {
    updateChart: function() {
      if (!this.parent) {
        return
      }
      if (this.parent.children) {
        this.stockList = this.parent.children
      }
      let kLineInterface;
      if (this.kLineType && this.kLineType === 'topic') {
        kLineInterface = 'plateMap/queryTopicStockLine'
      } else if (this.kLineType && this.kLineType === 'industry') {
        kLineInterface = 'plateMap/queryIndustryStockLine'
      } else {
        kLineInterface = 'stockMap/stockChartData'
      }
      this.$store.dispatch(kLineInterface, {
          stockId: this.stockId,
          code: this.indexCode,
          condition: this.condition
        })
        .then(({
          result,
          catId
        }) => {
          if (catId !== this.stockId) {
            return;
          }
          const _this = this
          // 悬浮框的表头
          if (!this.stockChartData || !this.stockChartData[this.node.name]) {
            return
          }
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
          _this.stockUpNoGG = 0;
          _this.stockDownNoGG = 0;
          this.stockList.forEach(function(stock) {
            if (!_this.kLineType) {
              if (stock.perf && stock.perf >= 0) {
                _this.stockUpNoGG++
              } else if (stock.perf && stock.perf < 0) {
                _this.stockDownNoGG++
              }
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
          })
        })
    },
    updateHoverTitle: function() {
      // 悬浮框的表头
      if (!this.stockChartData || !this.stockChartData[this.node.name]) {
        return
      }
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
    drawStockLine: function(el, stockName, catId) {
      if (catId !== this.stockId || el.clientHeight === 0) {
        return;
      }
      if (!this.stockChartData || !this.stockChartData[stockName]) {
        return
      }
      const lineData = this.stockChartData[stockName];
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
    this.chart = echarts.init(this.$refs.chartTitle);
    this.updateChart()
  }
}
</script>
