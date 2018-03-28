<template>
<div class='market'>
  <div class='left'>
    <div class='top'>
      <div></div>
      <div class='chart' ref='chart1'></div>
      <span v-z3-updowncolor=1 class='zt'>涨停{{zt}}家 ST{{stzt}}家</span>
      <span v-z3-updowncolor=-1 class='dt'>跌停{{dt}}家 ST{{stdt}}家</span>
    </div>
    <div class='bottom'>
      <div class='chart' ref='chart2'></div>
    </div>
  </div>
  <div class='right'>
    <div class='stocks'>
      <div class='tit'>异动个股</div>
      <div class='stock' v-for='stock of abnormalStockList'>
        <div class='time'>{{stock.time}}</div>
        <div class='item'>
          <span class=''>{{stock.stockName}}</span>
          <span class=''>{{stock.code}}</span>
          <span class=''>{{stock.chg}}</span>
          <span class='type'>{{stock.type}}</span>
        </div>
        <div class="news">
          <span class="mark">{{}}</span><span>{{stock.news}}</span>
        </div>
        <ul class='topics'>
          <li class="topic" v-for="topic of stock.topics.slice(0,4)">
            <div>{{topic.topicName}}</div>
            <div>{{topic.chg}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="blocks">
      <div class="tit">异动板块</div>
      <div class="block" v-for="block of blocks">
        <div>
          <span class="time">{{block.time}}</span>
          <span class="name">{{block.name}}</span>
          <span class="chg">{{block.chgper}}</span>
        </div>
        <div><span class="mark">{{mark}}</span><span class="news"></span></div>
        <ul class="stockList">
          <li v-for="stock of stockList">
            <span>{{stock.name}}</span>
            <span>{{stock.code}}</span>
            <span>{{stock.chg}}</span>
            <span>{{stock.chgper}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import echarts from 'echarts'
import config from '../../z3tougu/config'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      stockCount: [2, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 2],
      zt: 2,
      dt: 2,
      stzt: 1,
      stdt: 1,
      openIndex: 3000.00,
      stocks: [{
          time: '10:10:10',
          stockName: '宝钢股份',
          code: '600019',
          chg: '9.88%',
          type: '打开涨停板',
          mark: 1,
          news: 'xxxxxxxxxxxxxxxxxxxx',
          topics: [{
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            }
          ]
        }, {
          time: '10:10:10',
          stockName: '宝钢股份',
          code: '600019',
          chg: '9.88%',
          type: '打开涨停板',
          mark: 1,
          news: 'xxxxxxxxxxxxxxxxxxxx',
          topics: [{
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            }
          ]
        },
        {
          time: '10:10:10',
          stockName: '宝钢股份',
          code: '600019',
          chg: '9.88%',
          type: '打开涨停板',
          mark: 1,
          news: 'xxxxxxxxxxxxxxxxxxxx',
          topics: [{
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            },
            {
              topicName: '钢铁',
              chg: '4.55%'
            }
          ]
        }
      ],
      blocks: []
    }
  },
  computed: mapState({
    bubbles: state => {
      debugger;
      const data = state.marketBubble.bubbleData;
      let bubbles = [];
      data.forEach((stock, index) => {
        let item = {
          name: stock.name,
          value: [stock.xData, stock.yData],
          symbolSize: stock.bubbleSize,
          itemStyle: {
            normal: {
              color: this.matchColor(stock.bubbleColor)
            }
          }
        };
        bubbles.push(item);
      });
      return bubbles;
    },
    stockList: state => state.marketBubble.abnormalStockList,
    plateList: state => state.marketBubble.abnormalPlateList
  }),
  methods: {
    initStocks() {
      this.chart1 = echarts.init(this.$refs.chart1);
      this.chart1.setOption({
        grid: [{
            width: '25%',
            containLabel: true,
            left: 0,
            top: 20,
            bottom: 40,
            borderColor: '#32343E'
          },
          {
            width: '75%',
            left: '25%',
            top: 20,
            bottom: 40,
            containLabel: true,
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
          max: 10,
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
          data: this.stockCount

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
            symbol: null,
            symbolSize: 0,
            data: [{
              xAxis: 0
            }]
          },
          data: this.bubbles
        }]
      });
    },
    initPlates() {
      this.chart2 = echarts.init(this.$refs.chart2);
      this.chart2.setOption({
        xAxis: {
          type: 'category',
          axisTick: {
            length: 0
          },
          axisLabel: {
            interval: 0
          },
          boundaryGap: false,
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          },
          data: [
            '9:30', '10:00', '10:30', '11:00', '11:30/13:00', '13:30', '14:00', '14:30', '15:00'
          ]
        },
        yAxis: {
          type: 'value',
          min: 2900,
          max: 3100,
          axisLine: {
            onZero: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          }
        },
        series: [{
          type: 'line',
          lineStyle: {
            normal: {
              color: '#BAC3CB',
              width: 1
            }
          },
          data: [3010.50, 3030.00, 3000, 2990, 3005, 2998, 3010, 2980, 3020],
          markLine: {
            silent: true,
            data: [
              [{
                  coord: ['10:00', 3030],
                  symbol: 'circle',
                  symbolSize: 6,
                  lineStyle: {
                    normal: {
                      width: 2,
                      type: 'solid',
                      color: config.downColor
                    }
                  }
                },
                {
                  coord: ['10:00', 2980],
                  symbol: 'circle',
                  symbolSize: 0.1
                }
              ],
              [{
                  coord: ['10:30', 3000],
                  symbol: 'circle',
                  symbolSize: 6,
                  lineStyle: {
                    normal: {
                      width: 2,
                      type: 'solid',
                      color: config.upColor
                    }
                  }
                },
                {
                  coord: ['10:30', 3050],
                  symbol: 'circle',
                  symbolSize: 0.1
                }
              ]
            ]
          },
          markPoint: {
            silent: true,
            symbol: 'roundRect',
            symbolSize: [60, 30],
            data: [{
                name: '金融',
                coord: ['10:00', 2980],
                value: '金融',
                itemStyle: {
                  normal: {
                    color: '#fff',
                    borderWidth: 1,
                    borderColor: config.downColor
                  }
                },
                label: {
                  normal: {
                    position: 'inside',
                    color: config.downColor,
                    formatter: () => '金融'
                  }
                }
              },
              {
                name: '地产',
                value: '地产',
                coord: ['10:30', 3050],
                itemStyle: {
                  normal: {
                    color: '#fff',
                    borderWidth: 1,
                    borderColor: config.upColor
                  }
                },
                label: {
                  normal: {
                    position: 'inside',
                    color: config.upColor,
                    formatter: () => '地产'
                  }
                }
              }
            ]
          },
          smooth: true
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
      return "#666";
    }
  },
  mounted() {
    this.$store.dispatch('marketBubble/updateBubble', {
      x: 'mkt_index.volumn_ratio', // 量比
      y: 'mkt_idx.cur_chng_pct', // 涨跌幅
      size: 'mkt_idx.rising_rate', // 涨速
      color: 'mkt_idx.cur_chng_pct' // 涨跌幅
    }).then(() => {
      this.initStocks();
    });
    // this.$store.dispatch('marketBubble/')
    this.initPlates();
  }
}
</script>

<style lang='scss' scoped>
.market {
    height: 100%;

    font-size: 12px;
    color: #ccc;
}
.market .zt {
    position: absolute;
    left: 55px;
    top: 10px;
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
}
.market .stocks {
    height: 55%;
    border-bottom: 1px solid #32343E;
}
.market .blocks {
    height: 45%;
}
.market .right .tit {
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border-bottom: 1px solid #32343E;
}
.market .stock {
    padding: 2px 8px;
    overflow: hidden;
    margin: 0 0 4px;
}
.market .stock:hover {
    background: #32343E;
}
.market .stock .time {
    padding: 1px 2px;
}
.market .stock .item {
    padding: 1px 2px;
}
.market .stock .item .type {
    float: right;
}
.market .stock .news {
    padding: 1px 2px;
}
.market .stock .topics {
    padding: 0;
    margin: 2px 0;
    overflow: hidden;
}
.market .stock .topic {
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
</style>