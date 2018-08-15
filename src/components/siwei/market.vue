<template>
<div class='market'>
  <stockBox :options="stockBoxOptions" :isShow="showStockBox"></stockBox>
  <div class="market_con">
    <div class='left'>
      <div class='top'>
        <div></div>
        <div class='chart' ref='chart'></div>
        <span class="desc">气泡大小：绝对涨速&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;气泡颜色：涨速</span>
        <span v-z3-updowncolor=1 class='zt'>涨停{{zt | isNull}}家 ST{{stzt | isNull}}家</span>
        <span v-z3-updowncolor=-1 class='dt'>跌停{{dt | isNull}}家 ST{{stdt | isNull}}家</span>
      </div>
      <div class='bottom'>
        <abnormalPlatesChart></abnormalPlatesChart>
      </div>
    </div>
    <div class='right'>
      <div :class="{stocks:true, expend:!hideStock && hidePlate, 'hide-box':hideStock}">
        <div class='tit' @click="toggle('stock')">异动个股<span :class="{'arrow_up':hideStock,'arrow_down':!hideStock}" :title="hideStock?'显示':'隐藏'"></span></div>
        <div class="no-data" v-if="isShow">
          <StockInit startTime='9:00' endTime='9:30' @propShow='getShow'>
            <img src="../../assets/images/icons/wait-cup.png" alt="">
          </StockInit>
        </div>
        <div class="list" ref="stocks_list" v-else>
          <div class='block' v-for='stock in stockList' @dblclick="openStock(stock.innerCode)">
            <div class='time'>{{stock.tradeTime | hhmmss}}</div>
            <div class='item'>
              <span class=''>{{stock.name}}[{{stock.symbol | simpleCode}}]</span>
              <span v-z3-updowncolor="stock.chng">{{stock.price | price}}</span>
              <span v-z3-updowncolor="stock.chngPct">{{stock.chngPct | chngPct}}</span>
              <span v-z3-updowncolor="stock.moveSignalId -1.5" class='type'>{{stock.reasonShortLine}}</span>
            </div>
            <div class="news" v-if="stock.moveRelaNewsId">
              <span :class="stock.newsPostiveIndex > 1?'mark good':'mark bad'">{{stock.newsPostiveIndex > 1?'利好':'利空'}}</span>
              <router-link :to="{name:'detailPages', params:{detailType:'news', id:stock.moveRelaNewsId}}" target="_blank" class="news_tit">{{stock.title}}</router-link>
            </div>
            <ul class='topics' v-if="stock.topicDataList && stock.topicDataList.length > 0">
              <li class="topic" v-for="topic in stock.topicDataList">
                <div class="name" @dblclick.stop="openPlate(topic.topicCode)">{{topic.topicName}}</div>
                <div v-z3-updowncolor="topic.topicChngPct">{{topic.topicChngPct | chngPct}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div :class="{blocks:true, expend:!hidePlate && hideStock, 'hide-box':hidePlate}">
        <div class="tit" @click="toggle('plate')">异动板块<span :class="{mode:true,active:!textMode}" @click.stop="textMode = false">列表</span><span class="separator">|</span><span :class="{active:textMode}" @click.stop="textMode = true">文本</span><span :class="{'arrow_up':hidePlate,'arrow_down':!hidePlate}"
            :title="hidePlate?'显示':'隐藏'"></span>
          <span class="copy" ref="plate_copy" v-show="textMode" @click.stop="" title="复制"></span>
        </div>
        <div class="no-data" v-if="isShow">
          <StockInit startTime='9:00' endTime='9:30' @propShow='getShow'>
            <img src="../../assets/images/icons/wait-cup.png" alt="">
          </StockInit>
        </div>
        <div class="list" v-else>
          <div v-if="!textMode">
            <div class="block" v-for="plate of plateList" @dblclick="openPlate(plate.sectionCode)">
              <div class="time plate_top">
                <span>{{plate.tradeTime | hhmm}}</span>
                <span class="name">{{plate.sectionName}}</span>
                <span v-z3-updowncolor="plate.chngPct" class="chg">{{plate.chngPct | chngPct}}</span>
                <span v-z3-updowncolor="plate.riseSpeed" class="chgmark">{{plate.riseSpeed>0?'板块拉升':'板块打压'}}</span>
              </div>
              <div class="news" v-if="plate.moveRelaNewsId"><span :class="plate.newsPostiveIndex > 1?'mark good':'mark bad'">{{plate.newsPostiveIndex > 1?'利好':'利空'}}</span>
                <router-link :to="{name:'detailPages', params:{detailType:'news', id:plate.moveRelaNewsId}}" target="_blank" class="news_tit">{{plate.title}}</router-link>
              </div>
              <table class="stockList">
                <tr v-for="stock of plate.stockDataList" @dblclick.stop="openStock(stock.innerCode)">
                  <td class="name">{{stock.stockName}}</td>
                  <td class="code">{{stock.stockCode}}</td>
                  <td v-z3-updowncolor="stock.stockChng" class="price">{{stock.stockPrice | price}}</td>
                  <td v-z3-updowncolor="stock.stockChng" class="chg">{{stock.stockChngPct | chngPct}}</td>
                </tr>
              </table>
            </div>
          </div>
          <div ref="plate-text" v-else>
            <toast :msg="toastmsg" v-if="showToast"></toast>
            <div class="text-block" v-for="plate of plateList">
              <abnormalText :model="plate"></abnormalText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="legend">
    <chartLegend :legendData="legendData"></chartLegend>
  </div>
</div>
</div>
</template>

<script>
import echarts from 'echarts'
import config, {
  ctx
} from '../../z3tougu/config'
import {
  mapState
} from 'vuex'
import abnormalPlatesChart from 'components/siwei/abnormal-plates-chart'
import chartLegend from 'components/siwei/legend'
import stockBox from 'components/siwei/stock-box'
import StockInit from './stock-init'
import abnormalText from './abnormal-text'
import Clipboard from 'clipboard'
import toast from 'components/toast'

let pcid1 = '';
let pcid2 = '';
let pcid3 = '';
let pcid4 = '';
const minSize = 10;
const maxSize = 100;
export default {
  data() {
    return {
      stockLastTime: '',
      plateLastTime: '',
      stockTradeDate: '',
      plateTradeDate: '',
      stockList: [],
      plateList: [],
      xData: [],
      legendData: [{
          value: '-0.5',
          color: '#00d641'
        },
        {
          value: '-0.375',
          color: '#1aa448'
        },
        {
          value: '-0.25',
          color: '#0e6f2f'
        },
        {
          value: '-0.125',
          color: '#085421'
        },
        {
          value: '0',
          color: '#424453'
        },
        {
          value: '0.125',
          color: '#6d1414'
        },
        {
          value: '0.25',
          color: '#961010'
        },
        {
          value: '0.375',
          color: '#be0808'
        },
        {
          value: '0.5',
          color: '#e41414'
        }
      ],
      stockBoxOptions: {
        position: {
          left: 0,
          top: 0
        }
      },
      showStockBox: false,
      scrollHeight: '',
      bottomTime: 0,
      hideStock: false,
      hidePlate: false,
      textMode: false,
      beginTimes: null,
      isShow: true,
      showToast: false
    }
  },
  components: {
    abnormalPlatesChart,
    chartLegend,
    stockBox,
    StockInit,
    abnormalText,
    toast
  },
  computed: {
    bubbles: function() {
      let data = this.$store.state.marketBubble.bubbleData;
      let bubbles = [];
      let lbl = {};
      this.xData = [];
      data.forEach((stock, index) => {
        const symbolSize = this.matchSize(Math.abs(stock.bubbleSize));
        // 如果量比为0，则转为1.新股没有量比数据
        if (Number(stock.xData) === 0) {
          stock.xData = 1;
        } else {
          stock.xData = Number(stock.xData);
        }
        this.xData.push(Math.log(stock.xData));
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
        const color = this.matchColor(stock.bubbleSize);
        let item = {
          name: stock.name,
          value: [Math.log(Number(stock.xData)), Number(stock.yData)],
          symbolSize: symbolSize,
          itemStyle: {
            normal: {
              color: color,
              opacity: 0.7
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
      bubbleData: state => state.marketBubble.bubbleData,
      deltaStockList: state => state.marketBubble.abnormalStockList,
      updateStockList: state => state.marketBubble.updateAbnormalStockList,
      deltaPlateList: state => state.marketBubble.abnormalPlateList,
      marketCount: state => {
        const data = state.marketBubble.marketCount;
        return data.slice(2, data.length - 2).reverse();
      },
      stzt: state => state.marketBubble.marketCount.length ? state.marketBubble.marketCount[0] : null,
      zt: state => state.marketBubble.marketCount.length ? state.marketBubble.marketCount[1] : null,
      stdt: state => state.marketBubble.marketCount.length ? state.marketBubble.marketCount[state.marketBubble.marketCount.length - 1] : null,
      dt: state => state.marketBubble.marketCount.length ? state.marketBubble.marketCount[state.marketBubble.marketCount.length - 2] : null,
      countMax: state => Math.max(...state.marketBubble.marketCount, 0) * 1.4
    })
  },
  filters: {
    hhmmss(value) {
      value += '';
      if (value.length === 5) {
        value = '0' + value;
      }
      return value.substring(0, 2) + ':' + value.substring(2, 4) + ':' + value.substring(4);
    },
    hhmm(value) {
      value += '';
      if (value.length === 5) {
        value = '0' + value;
      }
      return value.substring(0, 2) + ':' + value.substring(2, 4)
    },
    simpleCode(code) {
      return code.substring(0, 6);
    }
  },
  methods: {
    initStocks() {
      this.chart = echarts.init(this.$refs.chart);
      // const bubbles = this.bubbles;
      // let maxX = Math.max(...this.xData);
      // let minX = Math.min(...this.xData);
      // if (maxX > 0) {
      //   maxX = maxX * 1.1
      // } else {
      //   maxX = maxX * 0.9
      // }
      // const intervalX = (maxX - minX) / 5;
      this.chart.setOption({
        grid: [{
            width: 'auto',
            containLabel: false,
            left: 60,
            right: '80%',
            top: 50,
            bottom: 50,
            borderColor: '#32343E'
          },
          {
            // width: '75%',
            width: 'auto',
            left: '20%',
            top: 50,
            bottom: 50,
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
            show: false,
            onZero: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#32343E'
            }
          },
          axisTick: {
            length: 0
          }
          // min: minX,
          // max: maxX,
          // interval: intervalX,
          // axisLabel: {
          //   color: '#ccc',
          //   interval: intervalX,
          //   formatter: (value, index) => {
          //     if (value === maxX) {
          //       return "ln(量比)           ";
          //     }
          //     return value.toFixed(2);
          //   }
          // }
        }],
        yAxis: [{
            type: 'category',
            gridIndex: 0,
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                color: ['#32343E', '#32343E', '#32343E', '#32343E', '#32343E', '#505A66']
              }
            },
            splitNumber: 4,
            axisTick: {
              interval: 1,
              length: 0
            },
            axisLabel: {
              formatter: (value) => {
                if (value === '10') {
                  return '涨跌幅';
                } else {
                  return Number(value) + '%'
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
              color: (params) => Number(params.name) > 0 ? config.upColor : (Number(params.name) < 0 ? config.downColor : config.flatColor)
            }
          },
          data: this.marketCount
        }, {
          type: 'scatter',
          xAxisIndex: 1,
          yAxisIndex: 1,
          hoverAnimation: false,
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
            }
          }
        }]
      });
      this.chart.on('mouseover', (params) => {
        if (params.seriesIndex === 0) return
        const position = {};
        const x = params.event.offsetX;
        const y = params.event.offsetY;
        if (x >= this.$refs.chart.clientWidth / 2) {
          position.left = Math.max(x - 490, 0)
        } else {
          position.left = x + 20
        }
        if (y >= this.$refs.chart.clientHeight / 2) {
          position.top = Math.max(y - 247, 0);
        } else {
          position.top = y
        }
        const stock = this.bubbleData[params.dataIndex];
        this.stockBoxOptions = {
          stockCode: stock.innerCode,
          position: position,
          valueList: [{
              text: '量比',
              value: stock.xData !== null ? stock.xData.toFixed(2) : '--'
            },
            {
              text: '涨跌幅',
              value: stock.yData !== null ? Number(stock.yData).toFixed(2) + '%' : '--'
            },
            {
              text: '绝对涨速',
              value: Math.abs(Number(stock.bubbleSize)).toFixed(2)
            },
            {
              text: '涨速',
              value: Number(stock.bubbleSize).toFixed(2)
            }
          ]
        }
        this.showStockBox = true;
      });
      this.chart.on('mouseout', (params) => {
        this.showStockBox = false;
      });
      this.chart.on('dblclick', (params) => {
        if (params.seriesIndex === 1) {
          const innerCode = this.bubbleData[params.dataIndex].innerCode;
          this.openStock(innerCode);
        }
      })
    },
    openStock(code) {
      window.open(`stock/${code}`);
    },
    openPlate(code) {
      const path = code.length === 6 ? `${ctx}/industry/${code}` : `${ctx}/topic/${code}`;
      window.open(path);
    },
    matchColor(value) {
      let range = this.legendData;
      let color = '';
      value = Number(value);
      if (value > 0) {
        if (value >= parseFloat(range[8].value)) {
          return range[8].color
        }
        range = range.slice(4, 9);
      } else {
        if (value <= parseFloat(range[0].value)) {
          return range[0].color
        }
        range = range.slice(1, 5);
      }
      range.some((item, index) => {
        if (parseFloat(item.value) - 0.0625 <= value && parseFloat(item.value) + 0.0625 > value) {
          color = item.color
          return true
        }
        return false;
      })
      return color;
    },
    matchSize(value) {
      if (value === 0) {
        return minSize
      } else if (value <= 0.5) {
        return 10 * Math.log(1 + 10 * value) + 11;
      } else if (value <= 2) {
        return 72 * Math.log(1 + value)
      } else {
        return maxSize;
      }
    },
    newsObj(str) {
      if (!str) {
        return {
          newsId: null,
          title: null
        };
      }
      const index = str.indexOf(',');
      const newsId = str.substring(0, index);
      if (index === -1 || newsId === 'null') {
        return {
          newsId: null,
          title: null
        };
      }
      return {
        newsId: str.substring(0, index),
        title: str.substring(index + 1)
      }
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
    updateBubble() {
      this.$store.dispatch('marketBubble/updateBubble', {
        x: 'mkt_idx.volume_ratio', // 量比
        y: 'mkt_idx.cur_chng_pct', // 涨跌幅
        size: 'mkt_idx.rising_rate', // 涨速
        color: 'mkt_idx.cur_chng_pct', // 涨跌幅
        type: 0
      }).then(() => {
        const bubbles = this.bubbles;
        let maxX = Math.max(...this.xData);
        let minX = Math.min(...this.xData);
        if (maxX > 0) {
          maxX = maxX * 1.1
        } else {
          maxX = maxX * 0.9
        }
        const intervalX = (maxX - minX) / 5;
        this.chart.setOption({
          xAxis: [{}, {
            min: minX,
            max: maxX,
            interval: intervalX,
            axisLabel: {
              color: '#ccc',
              interval: intervalX,
              formatter: (value, index) => {
                if (index === 5) {
                  return 'ln(量比)           ';
                }
                return value.toFixed(2);
              }
            }
          }],
          series: [{}, {
            data: bubbles
          }]
        });
      });
    },
    updateAbnormalStocks() {
      this.$store.dispatch('marketBubble/updateAbnormalStocks', {
        type: 0,
        startTime: this.stockLastTime
      });
    },
    getAllAbnormalStocks() {
      this.$store.dispatch('marketBubble/updateAbnormalStocks', {
        type: 0,
        startTime: ''
      });
    },
    updateAbnormalPlates() {
      this.$store.dispatch('marketBubble/updateAbnormalPlates', {
        startTime: this.plateLastTime
      })
    },
    handleScroll() {
      this.scrollHeight = this.$refs.stocks_list.scrollTop
    },
    toggle: function(type) {
      if (type === 'stock') {
        this.hideStock = !this.hideStock;
        if (this.hideStock) {
          this.hidePlate = false;
        }
      } else {
        this.hidePlate = !this.hidePlate;
        if (this.hidePlate) {
          this.hideStock = false;
        }
      }
    },
    getShow(msg) {
      this.isShow = msg
    },
    initCopyFn() {
      new Clipboard(this.$refs['plate_copy'], {
        text: () => {
          const copyData = this.$refs['plate-text'].innerText;
          return copyData;
        }
      })
      // 产品让去掉复制提示
      // clipboard.on('success', (e) => {
      //   this.toastmsg = '已复制板块异动播报!'
      //   this.showToast = true
      //   setTimeout(() => {
      //     this.showToast = false
      //   }, 2500)
      // })
      // clipboard.on('error', (e) => {
      //   this.toastmsg = '复制失败！'
      //   this.showToast = true
      //   setTimeout(() => {
      //     this.showToast = false
      //   }, 2500)
      // })
    }
  },
  watch: {
    marketCount: function() {
      this.updateMarketCount();
    },
    deltaStockList: function() {
      if (this.deltaStockList.length === 0) {
        if (pcid4) {
          this.stockList = [];
          clearInterval(pcid4);
        }
        return
      }
      this.stockList = [].concat(this.deltaStockList).reverse();
    },
    updateStockList: function() {
      if (this.updateStockList && this.updateStockList.length !== 0) {
        const delta = [].concat(this.updateStockList).reverse();
        this.stockList.push(...delta);
      }
    },
    deltaPlateList: function() {
      if (this.deltaPlateList.length === 0) {
        return
      }
      const delta = [].concat(this.deltaPlateList).reverse();
      this.plateLastTime = delta[0].tradeTime;
      this.plateList.unshift(...delta);
    },
    scrollHeight: function() {
      if (this.scrollHeight === 0) {
        this.bottomTime = 0
        this.updateAbnormalStocks();
        pcid3 = setInterval(() => {
          this.updateAbnormalStocks();
        }, 6 * 1000);
      } else {
        if ((this.scrollHeight + this.$refs.stocks_list.clientHeight) === this.$refs.stocks_list.scrollHeight) {
          // 显示剩余数据的逻辑
          // alert('到底了')
          this.bottomTime = this.bottomTime + 1
          this.$store.dispatch('marketBubble/addAbnormalStocks', {
            bottomTime: this.bottomTime
          })
        }
        if (pcid3) {
          clearInterval(pcid3);
        }
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollHeight = this.$refs.stocks_list.scrollTop
      this.$refs.stocks_list.addEventListener('scroll', this.handleScroll, false)
    })

    this.initStocks();
    this.updateBubble();
    this.updateAbnormalStocks();
    this.updateAbnormalPlates();
    this.initCopyFn();
    pcid1 = setInterval(() => {
      this.updateBubble();
    }, 6 * 1000);
    pcid2 = setInterval(() => {
      this.updateAbnormalPlates()
    }, 60 * 1000);
    const datetime = new Date();
    const hour = datetime.getHours();
    const minute = datetime.getMinutes();
    // 9点05分之前打开页面，则每10分钟刷一次全部数据，直到为空（说明已经完成初始化了）。
    if (hour < 9 || (hour === 9 && minute < 5)) {
      pcid4 = setInterval(() => {
        this.getAllAbnormalStocks();
      }, 10 * 60 * 1000);
    }
    window.addEventListener('resize', () => {
      const chartWrapper = this.$refs.chart;
      let height = chartWrapper.clientHeight;
      let width = chartWrapper.clientWidth;
      this.chart && this.chart.resize({
        height: height,
        width: width
      })
    }, false)
  },
  destroyed() {
    if (pcid1) {
      clearInterval(pcid1);
    }
    if (pcid2) {
      clearInterval(pcid2);
    }
    if (pcid3) {
      clearInterval(pcid3);
    }
    if (pcid4) {
      clearInterval(pcid4);
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/scss/style.scss';
.chgmark {
    float: right;
}
.market {
    height: 100%;
    font-size: 12px;
    color: $wordsColorBase;
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
    width: calc(100% - 6px - 461px);
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
    width: 461px;
    float: right;
    background: #23252E;
    height: 100%;
    box-sizing: border-box;
}
.market .right-content {
    width: 100%;
    height: 100%;
}
.market .stocks {
    height: 50%;
    border-bottom: 1px solid #32343E;
    .list {
        height: calc(100% - 25px);
        overflow: auto;
    }
    .no-data {
        height: calc(100% - 25px);
        overflow: hidden;
    }
    .topic {
        color: #a6a6a6;
    }
}
.market .stocks.expend {
    height: calc(100% - 25px);
}
.market .stocks.hide-box {
    height: 24px;
}
.initWait {
    position: relative;
    width: 100%;
    height: 100%;
    .initWait-wrapper {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
        text-align: center;
        .cont {
            margin-top: 10px;
            font-family: 'Micorsoft yahei';
            text-align: center;
            color: #808ba1;
            .minutes {
                color: #18a6f0;
                padding: 0 2px;
            }
        }
    }
}
.market .news {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.market .news .mark {
    padding: 2px;
    color: #fff;
    margin-right: 4px;
}
.market .news .good {
    background: #ca4941;
}
.market .news .bad {
    background: #56a870;
}
.market .news .normal {
    background: #505A66;
}
.market .news .news_tit {
    color: $wordsColorBase;
}
.market .news .news_tit:hover {
    color: $blueWordsColor;
}
.market .blocks {
    height: 50%;
    overflow: hidden;
    .list {
        height: calc(100% - 25px);
        overflow: auto;
    }
    .no-data {
        height: calc(100% - 25px);
        overflow: hidden;
    }
}
.market .blocks.expend {
    height: calc(100% - 25px);
}
.market .blocks.hide-box {
    height: 25px;
}
.market .right .tit {
    height: 24px;
    line-height: 24px;
    padding: 0 10px;
    border-bottom: 1px solid #32343E;
    cursor: pointer;
    .arrow_up {
        height: 24px;
        width: 10px;
        display: inline-block;
        float: right;
        background: url('../../assets/images/z3img/toggle-arrow-up.png') center center no-repeat;
    }
    .arrow_down {
        height: 24px;
        width: 10px;
        display: inline-block;
        float: right;
        background: url('../../assets/images/z3img/toggle-arrow-down.png') center center no-repeat;
    }
    .mode {
        margin-left: 20px;
    }
    .active {
        color: $blueWordsColor;
    }
    .separator {
        padding: 0 10px;
        color: #525A65;
    }
    .copy {
        height: 24px;
        width: 15px;
        display: inline-block;
        float: right;
        margin-right: 10px;
        background: url('../../assets/images/z3img/copy.png') center center no-repeat;
    }
}

.market .block {
    padding: 2px 8px;
    overflow: hidden;
    margin: 0 0 4px;
    cursor: pointer;
    .stockList {
        color: #b8b8b8;
    }

}
.market .text-block {
    overflow: hidden;
    margin: 0 0 4px;
    line-height: 18px;
}
.market .text-block:hover {
    background: $hoverBgColor;
    color: #fff;
}
.market .block:hover .stockList {
    color: #fff;
}
.market .block:hover {
    background: #525A65;
}

.market .time {
    padding: 1px 2px;
}

.market .plate_top {
    height: 24px;
    line-height: 24px;
    .name {
        border: 1px solid #525A65;
        text-align: center;
        min-width: 60px;
        padding: 0 4px;
        display: inline-block;
        margin-left: 10px;
    }

    .chg {
        height: 24px;
        margin-left: 10px;
        line-height: 24px;
    }

}
.market .block .item {
    padding: 2px;
    span {
        margin-right: 10px;
    }
}

.market .block .item .type {
    float: right;
    margin-right: 0;
}

.market .news {
    padding: 2px;
}

.market .block .topics {
    padding: 0;
    margin: 2px 0;
    overflow: hidden;
    a {
        text-align: center;
        color: #a6a6a6;
    }
    .name {
        overflow: hidden;
    }
}

.market .block .topic {
    list-style: none;
    float: left;
    width: calc(25% - 4px);
    margin: 0 1px;
    background: #23252E;
    border: 1px solid #525A65;
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