<template>
<div class='market'>
  <div class="market_con">
    <div class='left'>
      <div class='top'>
        <div></div>
        <div class='chart' ref='chart'></div>
        <span class="desc">气泡大小：涨速&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;气泡颜色：涨跌幅</span>
        <span v-z3-updowncolor=1 class='zt'>涨停{{zt}}家 ST{{stzt}}家</span>
        <span v-z3-updowncolor=-1 class='dt'>跌停{{dt}}家 ST{{stdt}}家</span>
      </div>
      <div class='bottom'>
        <abnormalPlatesChart></abnormalPlatesChart>
      </div>
    </div>
    <div class='right'>
      <div class='stocks'>
        <div class='tit'>异动个股</div>
        <div class="list" ref="stocks_list">
          <div class='block' v-for='stock in stockList'>
            <div class='time'>{{stock.dateTime | hhmmss}}</div>
            <div class='item'>
              <span class=''>{{stock.stockName}}</span>
              <span class=''>{{stock.symbol}}</span>
              <span v-z3-updowncolor="stock.chg">{{stock.chg | chngPct}}</span>
              <span class='type'>{{stock.status}}</span>
            </div>
            <div class="news">
              <span :class="stock.msgType > 0?'mark good':(stock.msgType < 0?'mark bad':'mark normal')">{{stock.msgType > 0?'利好':(stock.msgType < 0?'利空':'中性')}}</span><span class="news">{{stock.msg}}</span>
            </div>
            <ul class='topics'>
              <li class="topic" v-for="topic in stock.topics" v-if="stock.topics && stock.topics.length > 0">
                <div>{{topic.topicName}}</div>
                <div v-z3-updowncolor="topic.topicChngPct">{{topic.topicChngPct | chngPct}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blocks">
        <div class="tit">异动板块</div>
        <div class="list">
          <div class="block" v-for="plate of plateList">
            <div class="time plate_top">
              <span>{{plate.dateTime | hhmm}}</span>
              <span class="name">{{plate.industryName}}</span>
              <span v-z3-updowncolor="plate.chg" class="chg">{{plate.chg | chngPct}}</span>
            </div>
            <div class="news"><span :class="plate.msgType > 0?'mark good':(plate.msgType < 0?'mark bad':'mark normal')">{{plate.msgType > 0?'利好':(plate.msgType < 0?'利空':'中性')}}</span><span class="news">{{plate.msg}}</span></div>
            <table class="stockList">
              <tr v-for="stock of plate.baseDetailList">
                <td class="name">{{stock.stockName}}</td>
                <td class="code">{{stock.symbol}}</td>
                <td v-z3-updowncolor="stock.chg" class="price">{{stock.price}}</td>
                <td v-z3-updowncolor="stock.chg" class="chg">{{stock.chg | chngPct}}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="legend">
    <chartLegend :legendData="legendData"></chartLegend>
  </div>
</div>
</template>

<script>
import echarts from 'echarts'
import config from '../../z3tougu/config'
import {
  mapState
} from 'vuex'
import abnormalPlatesChart from 'components/siwei/abnormal-plates-chart'
import chartLegend from 'components/siwei/legend'

let pcid1 = '';
let pcid2 = '';
export default {
  data() {
    return {
      stockLastTime: '',
      plateLastTime: '',
      stockList: [],
      plateList: [],
      legendData: [{
          value: '-4%',
          color: '#00d641'
        },
        {
          value: '-3%',
          color: '#1aa448'
        },
        {
          value: '-2%',
          color: '#0e6f2f'
        },
        {
          value: '-1%',
          color: '#085421'
        },
        {
          value: '0%',
          color: '#424453'
        },
        {
          value: '1%',
          color: '#6d1414'
        },
        {
          value: '2%',
          color: '#961010'
        },
        {
          value: '3%',
          color: '#be0808'
        },
        {
          value: '4%',
          color: '#e41414'
        }
      ]
    }
  },
  components: {
    abnormalPlatesChart,
    chartLegend
  },
  computed: {
    bubbles: function() {
      let data = this.$store.state.marketBubble.bubbleData;
      let bubbles = [];
      let minSize = 10;
      let maxSize = 100;
      let lbl = {};
      data.forEach((stock, index) => {
        // 涨速超过5% 则气泡一样大
        const symbolSize = Math.max(Math.min(Math.abs(stock.bubbleSize) * 20, maxSize), minSize);
        if (symbolSize < 30) {
          lbl = {
            position: 'bottom',
            distance: 4
          }
        } else if (symbolSize >= 60) {
          lbl = {
            position: 'inside'
          }
        } else {
          lbl = {
            position: 'inside',
            formatter: stock.name.substring(0, 2) + '\n' + stock.name.substring(2)
          }
        }
        let item = {
          name: stock.name,
          value: [Number(stock.xData), Number(stock.yData)],
          symbolSize: symbolSize,
          itemStyle: {
            normal: {
              color: this.matchColor(stock.bubbleColor)
            }
          },
          label: {
            normal: {
              show: true,
              color: '#fff',
              formatter: stock.name,
              ...lbl
            }
          }
        };
        bubbles.push(item);
      });
      return bubbles;
    },
    ...mapState({
      deltaStockList: state => state.marketBubble.abnormalStockList,
      deltaPlateList: state => state.marketBubble.abnormalPlateList,
      marketCount: state => {
        const data = state.marketBubble.marketCount;
        return data.slice(2, data.length - 2);
      },
      stzt: state => state.marketBubble.marketCount[0],
      zt: state => state.marketBubble.marketCount[1],
      stdt: state => state.marketBubble.marketCount[state.marketBubble.marketCount.length - 1],
      dt: state => state.marketBubble.marketCount[state.marketBubble.marketCount.length - 2],
      countMax: state => Math.max(...state.marketBubble.marketCount, 0) * 1.3
    })
  },
  filters: {
    hhmmss(value) {
      value += "";
      if (value.length === 5) {
        value = "0" + value;
      }
      return value.substring(0, 2) + ":" + value.substring(2, 4) + ":" + value.substring(4);
    },
    hhmm(value) {
      value += "";
      if (value.length === 5) {
        value = "0" + value;
      }
      return value.substring(0, 2) + ":" + value.substring(2, 4)
    }
  },
  methods: {
    initStocks() {
      this.chart.setOption({
        grid: [{
            width: 'auto',
            containLabel: false,
            left: 60,
            right: '75%',
            top: 48,
            bottom: 40,
            borderColor: '#32343E'
          },
          {
            // width: '75%',
            width: 'auto',
            left: '25%',
            top: 48,
            bottom: 40,
            right: 10,
            containLabel: false,
            borderColor: '#32343E'
          }
        ],
        xAxis: [{
          show: true,
          position: 'top',
          gridIndex: 0,
          axisLine: {
            show: false
          },
          max: this.countMax,
          splitLine: {
            show: false
          },
          axisTick: {
            length: 0
          },
          axisLabel: {
            show: false,
            color: '#ccc'
          }
        }, {
          gridIndex: 1,
          position: 'top',
          type: 'value',
          nameTextStyle: {
            color: '#ccc'
          },
          axisLine: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          },
          axisTick: {
            length: 0
          },
          axisLabel: {
            color: '#ccc',
            formatter: (value, index) => {
              return value.toFixed(2);
            }
          }
        }],
        yAxis: [{
            type: 'category',
            gridIndex: 0,
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#32343E', '#32343E', '#32343E', '#32343E', '#32343E', '#505A66']
                // color:'#32343E'
              }
            },
            axisTick: {
              interval: 1,
              length: 0
            },
            axisLabel: {
              formatter: (value) => {
                if (value === '10') {
                  return '涨跌幅';
                } else {
                  return Number(value).toFixed(2) + '%'
                }
              },
              color: (value) => {
                if (value === '10') {
                  return '#ccc'
                }
                return value > 0 ? config.upColor : (value < 0 ? config.downColor : config.flatColor)
              },
              margin: 4,
              padding: [0, 0, 0, 4],
              interval: 1
            },
            data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9, -10].reverse()
          },
          {
            gridIndex: 1,
            position: 'right',
            min: -10,
            max: 10,
            interval: 2,
            splitLine: {
              show: true,
              interval: 2,
              lineStyle: {
                color: ['#32343E', '#32343E', '#32343E', '#32343E', '#32343E', '#505A66']
                // color:'#32343E'
              }
            },
            axisLine: {
              show: true
            },
            axisTick: {
              length: 0
            },
            axisLabel: {
              show: false
            }
          }
        ],
        series: [{
          type: 'bar',
          barWidth: '60%',
          xAxisIndex: 0,
          yAxisIndex: 0,
          label: {
            normal: {
              show: true,
              position: 'right',
              distance: 5,
              formatter: (params) => params.data + '家'
            }
          },
          itemStyle: {
            normal: {
              color: (params) => Number(params.name) >= 0 ? config.upColor : config.downColor
            }
          },
          data: this.marketCount
        }, {
          type: 'scatter',
          xAxisIndex: 1,
          yAxisIndex: 1,
          markLine: {
            silent: true,
            animation: false,
            lineStyle: {
              normal: {
                color: '#505A66',
                type: 'solid'
              }
            },
            label: {
              normal: {
                show: false
              }
            },
            symbolSize: (val) => {

            }
          },
          data: this.bubbles
        }]
      });
    },
    initBubbleChart() {

    },
    // 更新异动个股
    updateStocks() {

    },
    // 更新异动板块
    updatePlates() {

    },
    matchColor(chg) {
      return '#666';
    },
    updateMarketCount() {
      setTimeout(() => {
        this.chart.setOption({
          xAxis: [{
            max: this.countMax
          }],
          series: [{
            data: this.marketCount
          }]
        });
      }, 0)
    },
    updateAbnormalStocks() {
      this.$store.dispatch('marketBubble/updateAbnormalStocks', {
        type: 0,
        startTime: this.stockLastTime
      });
    }
  },
  watch: {
    marketCount: function() {
      this.updateMarketCount();
    },
    deltaStockList: function() {
      if (this.deltaStockList.length === 0) {
        return
      }
      const delta = [].concat(this.deltaStockList).reverse();
      this.stockLastTime = delta[0].dateTime;
      this.stockList.unshift(...delta);
      this.$refs['stocks_list'].scrollTop = 0;
    },
    deltaPlateList: function() {
      if (this.deltaPlateList.length === 0) {
        return
      }
      const delta = [].concat(this.deltaPlateList).reverse();
      this.plateList.unshift(...delta);
    }
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chart);
    this.initStocks();
    this.$store.dispatch('marketBubble/updateBubble', {
      x: 'mkt_idx.volume_ratio', // 量比
      y: 'mkt_idx.cur_chng_pct', // 涨跌幅
      size: 'mkt_idx.rising_rate', // 涨速
      color: 'mkt_idx.cur_chng_pct', // 涨跌幅
      type: 0
    }).then(() => {
      this.initStocks();
    });
    this.updateAbnormalStocks();
    pcid1 = setInterval(() => {
      this.updateAbnormalStocks()
    }, 3 * 1000);
  },
  destroyed() {
    if (pcid1) {
      clearInterval(pcid1);
    }
    if (pcid2) {
      clearInterval(pcid2);
    }
  }
}
</script>

<style lang='scss' scoped>
.market {
    height: 100%;
    font-size: 12px;
    color: #ccc;
    .legend {
        height: 36px;
        line-height: 36px;
    }
}
.market_con {
    height: calc(100% - 36px);
}
.market .zt {
    position: absolute;
    left: 55px;
    top: 20px;
}
.market .dt {
    position: absolute;
    left: 55px;
    bottom: 10px;
}
.market .left {
    height: 100%;
    background: #23252E;
    float: left;
    width: calc(75% - 6px);
}
.market .top {
    position: relative;
    height: 60%;
    .desc {
        position: absolute;
        right: 10px;
        top: 4px;
        text-align: right;
    }
}
.market .chart {
    height: 100%;
}
.market .bottom {
    height: 40%;
}
.market .right {
    width: 25%;
    float: right;
    background: #23252E;
    height: 100%;
    box-sizing: border-box;
}
.market .stocks {
    height: 55%;
    border-bottom: 1px solid #32343E;
    .list {
        height: calc(100% - 25px);
        overflow: auto;
    }
}
.market .news .mark {
    padding: 2px;
    color: #fff;
}
.market .news .good {
    background: #DB3C39;
}
.market .news .bad {
    background: #BAC3CB;
}
.market .news .normal {
    background: #505A66;
}
.market .blocks {
    height: 45%;
    .list {
        height: calc(100% - 25px);
        overflow: auto;
    }

}
.market .right .tit {
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border-bottom: 1px solid #32343E;
}

.market .block {
    padding: 2px 8px;
    overflow: hidden;
    margin: 0 0 4px;
}
.market .block:hover {
    background: #32343E;
}

.market .time {
    padding: 1px 2px;
}

.market .plate_top {
    height: 24px;
    line-height: 24px;
    .name {
        border: 1px solid #32343E;
        background: #23252E;
        text-align: center;
        min-width: 60px;
        padding: 0 4px;
        display: inline-block;
        margin-left: 10px;
    }

    .chg {
        float: right;
        height: 24px;
        line-height: 24px;
    }

}
.market .block .item {
    padding: 2px;
    span {
        margin-right: 4px;
    }
}

.market .block .item .type {
    float: right;
}

.market .news {
    padding: 2px;
}

.market .block .topics {
    padding: 0;
    margin: 2px 0;
    overflow: hidden;
}

.market .block .topic {
    list-style: none;
    float: left;
    width: calc(25% - 4px);
    margin: 0 1px;
    background: #23252E;
    border: 1px solid #32343E;
    height: 40px;
    line-height: 20px;
    text-align: center;
}

.market .block table {
    width: 100%;

    td {
        width: 25%;
        height: 18px;
    }

    .name {
        text-align: left;
    }

    .code {
        text-align: center;
    }

    .price {
        text-align: right;
    }

    .chg {
        text-align: right;
    }

}
</style>