<style scoped>
.portrait-timing-title {
  height: 15%;
  position: relative;
}

.portrait-timing-title select {
  width: 247px;
  color: #1984ea;
  -webkit-appearance: none;
  padding-left: 4px;
  background: url("../../assets/images/selectindex.png") no-repeat scroll 228px center transparent;
  background-color: #141518;
  border-radius: 3px;
  border: 1px solid #141518;
  position: absolute;
  left: 58px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.portrait-timing-title select option {
  color: #666;
  background-color: #d6d6d6;
}

.portrait-timing-title select:focus {
  outline: none;
}

.portrait-timing-title .portrait-timing-lable1 {
  color: #c9d0d7;
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
}

.portrait-timing-title .portrait-timing-lable2 {
  color: #1984ea;
  position: absolute;
  left: 312px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  width: 60px;
  height: 100%;
}

.portrait-timing-lable2 a {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.timing-table-wrap {
  width: 100%;
  height: 100%;
}

.position-title {
  color: #c9d0d7;
  padding-left: 6px;
  height: 10%;
  line-height: 22px;
}

.timing-data-table {
  width: 100%;
  height: 90%;
  overflow: auto;
}

.timing-data-table li {
  width: 100%;
  height: 22px;
}

.timing-data-table li {
  cursor: pointer;
}

.timing-data-table li:hover {
  background-color: #2e4465;
}

.timing-data-table li span {
  display: inline-block;
  width: 33.3%;
  line-height: 22px;
  height: 100%;
  text-align: center;
  float: left;
}

.timing-data-table li span:first-child {
  color: #1984ea;
  text-align: left;
  padding-left: 6px;
}

.timing-no-data {
  width: 100%;
  height: 100%;
  position: relative;
}

.timing-no-data span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #808ba1;
}

.portrait-timing-con {
  height: 85%;
  border: 1px solid #23272c;
}

.portrait-timing-table {
  height: 100%;
  width: 33.3%;
  float: left;
  border-right: 1px solid #23272c;
  padding: 5px 0px 5px 5px;
}

.portrait-timing-chart {
  height: 100%;
  width: 66.7%;
  float: right;
  padding: 5px 0px;
}

.portrait-timing-more {
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
}

.portrait-timing-more a {
  color: #1984ea;
}

.kcharts {
  height: 90%;
}

.time-chart-title {
  height: 10%;
  line-height: 22px;
  color: #c9d0d7;
  padding-left: 20px;
}

.tr-focus {
  background-color: #2e4465
}
</style>
<template>
<div style="height:100%;">
  <div class="portrait-timing-title">
    <span class="portrait-timing-lable1">择时策略</span>
    <select v-model="strategyId">
                <option v-for="item of timeStrategyList" :value='item.id'>{{item.name}}</option>
            </select>
    <p class="portrait-timing-lable2">
      <router-link :to="{name:'backtesttime',params:{strategyId:strategyId}}" target="_blank">策略详情</router-link>
    </p>
    <!--p class="portrait-timing-more" @click="toStrategyList"-->
    <p class="portrait-timing-more">
      <a>更多>></a>
    </p>
  </div>
  <div class="portrait-timing-con clearfix">
    <div v-if="isNoData" class="timing-no-data">
      <span>客户无持仓，点击更多，查看择时策略</span>
    </div>
    <div class="portrait-timing-table" v-if="!isNoData">
      <div class="timing-table-wrap">
        <div style="height: 100%;">
          <p class="position-title">当前持仓</p>
          <ul class="timing-data-table">
            <li v-for="(item,index) of dataList" @click='changeKline(item.name,item.innerCode,index)' class="stock-li clearfix" :class="{'tr-focus':index === trIndex}">
              <span :value="item.innerCode" class="stock-hover">{{item.name === null?'--':item.name}}</span>
              <span v-z3-updowncolor="item.curChngPct">{{item.price === null?'--':item.price.toFixed(2)}}</span>
              <span v-z3-updowncolor="item.curChngPct">{{formatData(item.curChngPct)}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="portrait-timing-chart" v-if="!isNoData">
      <p class="time-chart-title" v-if="innerCode">{{stockName}}[{{innerCode.split('.')[0]}}]</p>
      <div class="kcharts" ref="kcharts"></div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import echarts from 'echarts'
import config from '../../z3tougu/config'
export default {
  data() {
    return {
      page: 0,
      size: 6,
      dataList: [],
      updateDataPid: null,
      intervalTime: 6,
      isNoData: false,
      strategyId: '',
      timeStrategyList: [],
      clientPassport: this.$route.params.clientPassport || 3454565,
      innerCode: '',
      stockName: '',
      trIndex: 0
    }
  },
  watch: {
    strategyId() {
      this.initTimeChart()
    },
    innerCode() {
      this.initTimeChart()
    },
    dataList() {
      if (this.dataList && this.dataList.length > 0) {
        this.isNoData = false
      } else {
        this.isNoData = true
      }
    }
  },
  computed: {
    timeStrategyListData: function() {
      const timeStrategyList = this.$store.state.portraitDetail.timeStrategyList
      return timeStrategyList
    },
    customerPositionList: function() {
      const customerPositionList = this.$store.state.portraitDetail.customerPositionList
      return customerPositionList
    },
    kLineDataAll: function() {
      const dataAll = this.$store.state.backtestDetail.kLineData
      const kLine = dataAll.kLine
      const sellData = dataAll.sellDay
      const buyData = dataAll.buyDay
      const kLineXdata = []
      const kLineYdata = []
      const ma5 = []
      const ma10 = []
      const ma20 = []
      const ma30 = []
      let name = ''
      let code = ''
      const pointData = []
      const seriesData = []
      kLine && kLine.forEach(item => {
        const openPx = item.openPx // 开盘价
        const closePx = item.closePx // 收盘价
        const highPx = item.highPx // 最高价
        const lowPx = item.lowPx // 最低价
        const endDate = (item.endDate + '').substring(0, 4) + '-' + (item.endDate + '').substring(4, 6) + '-' + (item.endDate + '').substring(6, (item.endDate + '').length)
        kLineXdata.push(endDate)
        kLineYdata.push([openPx, closePx, highPx, lowPx])
        ma5.push(item.ma5)
        ma10.push(item.ma10)
        ma20.push(item.ma20)
        ma30.push(item.ma30)
        name = item.name
        code = item.innerCode
        for (let i = 0; i < sellData.length; i++) {
          if (sellData[i] === item.endDate) {
            seriesData.push([endDate, closePx])
            const point = {
              name: 'XX标点',
              coord: [endDate, closePx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-green4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '-75%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }

            }
            pointData.push({
              name: 'XX标点',
              coord: [endDate + '', closePx],
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#000',
                  borderColor: '#fff',
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            })
            pointData.push(point)
          }
        }
        for (let i = 0; i < buyData.length; i++) {

          if (buyData[i] === item.endDate) {
            seriesData.push([endDate + '', closePx])
            const point = {
              name: 'XX标点',
              coord: [endDate, closePx],
              symbol: 'image://http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170321jizz/kline-red4.png',
              symbolSize: [19, 22],
              symbolOffset: ['0', '75%'],
              itemStyle: {
                normal: {
                  color: 'rgb(41,60,85)'
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            }
            pointData.push({
              name: 'XX标点',
              coord: [endDate + '', closePx],
              symbol: 'circle',
              symbolSize: 8,
              itemStyle: {
                normal: {
                  color: '#000',
                  borderColor: '#fff',
                  borderWidth: 3
                }
              },
              label: {
                normal: {
                  show: true,
                  formatter: function(params, ticket, callback) {
                    return ''
                  },
                  textStyle: {
                    fontSize: 0
                  }
                }
              }
            })
            pointData.push(point)
          }
        }
      })
      return {
        kLineXdata: kLineXdata,
        kLineYdata: kLineYdata,
        ma5: ma5,
        ma10: ma10,
        ma20: ma20,
        ma30: ma30,
        name: name,
        code: code,
        pointData: pointData,
        seriesData: seriesData
      }
    }
  },
  methods: {
    initTimeStrategy() {
      this.chart = echarts.init(this.$refs.kcharts)
      let p1 = new Promise((resolve, reject) => {
        this.$store.dispatch('portraitDetail/getTimeStrategyList', {
          clientPassport: this.clientPassport
        }).then(() => {
          if (this.timeStrategyListData.length > 0) {
            this.timeStrategyList = this.timeStrategyListData
            this.strategyId = this.timeStrategyListData[0].id

          }
          resolve();
        })
      });
      let p2 = new Promise((resolve, reject) => {
        this.$store.dispatch('portraitDetail/getCustomerPosition', {
          clientPassport: this.clientPassport
        }).then(() => {
          if (this.timeStrategyListData.length > 0) {
            this.dataList = this.customerPositionList
            this.innerCode = this.customerPositionList[0].innerCode
            this.stockName = this.customerPositionList[0].name || '';
          }
          resolve();
        })
      });
      Promise.all([p1, p2]).then(() => {
        if (!this.isNoData) {
          this.initTimeChart();
        }
      })
    },
    initTimeChart: function() {
      this.$store.dispatch('backtestDetail/queryKline', {
          innerCode: this.innerCode,
          strategyId: this.strategyId
        })
        .then(() => {
          this.chart.showLoading(config.loadingConfig)
          this.drawCharts(this.kLineDataAll.name, this.kLineDataAll.kLineXdata, this.kLineDataAll.kLineYdata, this.kLineDataAll.pointData, this.kLineDataAll.seriesData)
        })
    },
    drawCharts(name, kLineXdata, kLineYdata, pointData, seriesData) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          formatter: function(t) {
            var time = t[0].name
            var openPx = t[0].value[1]
            var closePx = t[0].value[2]
            var highPx = t[0].value[3]
            var lowPx = t[0].value[4]
            return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
              '<br/>最低价：' + (lowPx || '--') + '<br/>'
          }
        },
        grid: {
          left: '15px',
          right: '10px',
          top: '5px',
          bottom: '0px'
        },
        xAxis: {
          type: 'category',
          data: kLineXdata,
          scale: true,
          boundaryGap: false,
          axisLine: {
            onZero: false,
            lineStyle: {
              color: '#23272c'
            }
          },
          splitLine: {
            show: false
          },
          splitNumber: 5,
          min: 'dataMin',
          max: 'dataMax',
          axisLabel: {
            align: 'left',
            textStyle: {
              color: '#c9d0d7'
            },
            show: false
          }
        },
        yAxis: {
          scale: true,
          splitArea: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              // 使用深浅的间隔色
              color: '#23272c'
            }
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: '#23272c'
            }
          },
          position: 'right',
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#c9d0d7'
            },
            show: false
          }
        },
        series: [{
            name: '日K',
            type: 'candlestick',
            data: kLineYdata,
            barWidth: '3',
            itemStyle: {
              normal: {
                color: '#e6363a',
                color0: '#48a854',
                borderColor: '#ff4040',
                borderColor0: '#2dc678'
              }
            },
            markPoint: {
              label: {
                normal: {
                  formatter: function(param) {
                    return param != null ? Math.round(param.value) : ''
                  }
                }
              },
              data: pointData,
              tooltip: {
                formatter: function(param) {
                  return param.name + '<br>' + (param.data.coord || '')
                }
              }
            }
          },
          {
            type: 'line',
            data: seriesData,
            lineStyle: {
              normal: {
                width: 3,
                color: '#fff'
              }
            }
          }
        ]
      })
      this.chart.hideLoading()
      window.addEventListener('resize', () => this.chart.resize(), false)
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.$store.dispatch('portraitDetail/getCustomerPosition', {
            clientPassport: _this.clientPassport
          }).then(() => {
            if (_this.timeStrategyListData.length > 0) {
              _this.dataList = _this.customerPositionList
            }
          })
        }, 1000 * _this.intervalTime)
      }
    },
    changeKline: function(name, code, index) {
      this.stockName = name
      this.innerCode = code
      this.trIndex = index
    },
    toStrategyList: function() {
      window.open('timeTop')
    },
    formatData: function(val) {
      let getVal
      if (val !== null) {
        getVal = val.toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    }
  },
  mounted() {
    this.initTimeStrategy()
    this.autoUpdate()
  },
  destroyed() {
    this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>