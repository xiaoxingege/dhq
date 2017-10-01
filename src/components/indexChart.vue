<style>
@import '../assets/css/base.css';
.app,
body,
html {
  height: 100% !important;
}

.index-top {
  width: 100%;
  /*height: 37%;*/
  background: #0d0e0f;
}

.index-chart {
  width: 100%;
  height: 74%;
  background: #0d0e0f;
  padding-bottom: 3px;
}

.line-chart {
  background: #141518;
  margin-right: 3px;
  width: 24.75%;
  height: 100%;
  float: left;
  position: relative;
}

.line-chart :last-child {
  margin-right: 0;
}

.line-chart:hover {
  background: #26272B;
}

.line-chart img {
  margin-top: 5px;
}

.indexChart {
  width: 100%;
  height: 100%;
}

.indexNum {
  position: absolute;
  top: 5px;
  right: 20px;
}

.chartInfo {
  margin: 0 auto;
  float: left;
  width: 25%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  position: relative;
}

.chartInfo_text {
  color: #fff;
}

.chart-info {
  background: #141518;
  font-size: 12px;
  height: 26%;
}

.chartInfo_bar {
  margin-top: 10px;
  background: #404852;
}

.chartInfo_bar div {
  height: 8px;
  /*width: 50%;*/
}

.chartInfo_bar div:first-child {
  background: #ca4941;
  float: left;
}

.chartInfo_bar div:last-child {
  background: #56a870;
  float: right;
}

.info-alert {
  background: #cccfd9;
  color: #666;
  padding: 2px;
  border: 1px solid #eee;
  display: none;
  width: auto;
  position: absolute;
  right: 0;
  top: 80%;
  z-index: 9999;
}
</style>
<template>
<div class="index-top">
  <div class="index-chart clearfix">
    <div class="line-chart">
      <div v-if="szzsChartData !== null" class="indexNum">
        <span v-z3-updowncolor="szzsChartData.stockVal" class="mr-5">{{szzsChartData.stockVal === null ? '--':szzsChartData.stockVal}}</span>
        <img v-if="szzsChartData && szzsChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="szzsChartData && szzsChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="szzsChartData.upDown" class="mr-5">{{szzsChartData.upDown === null ? '--':szzsChartData.upDown}}</span>
        <span v-z3-updowncolor="szzsChartData.upDownExtent">{{szzsChartData.upDownExtent === null ? '(--)':'('+(szzsChartData.upDownExtent>0?'+':'')+szzsChartData.upDownExtent+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </div>
    <div class="line-chart">
      <div v-if="lsChartData !== null" class="indexNum">
        <span v-z3-updowncolor="lsChartData.stockVal" class="mr-5">{{lsChartData.stockVal === null ? '--':Number(lsChartData.stockVal).toFixed(2)}}</span>
        <img v-if="lsChartData && lsChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="lsChartData && lsChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="lsChartData.upDown" class="mr-5">{{lsChartData.upDown === null ? '--':Number(lsChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="lsChartData.upDownExtent">{{lsChartData.upDownExtent === null ? '(--)':'('+(lsChartData.upDownExtent>0?'+':'')+Number(lsChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </div>
    <div class="line-chart">
      <div v-if="szczChartData !== null" class="indexNum">
        <span v-z3-updowncolor="szczChartData.stockVal" class="mr-5">{{szczChartData.stockVal === null ? '--':Number(szczChartData.stockVal).toFixed(2)}}</span>
        <img v-if="szczChartData && szczChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="szczChartData && szczChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="szczChartData.upDown" class="mr-5">{{szczChartData.upDown === null ? '--':Number(szczChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="szczChartData.upDownExtent">{{szczChartData.upDownExtent === null ? '(--)':'('+(szczChartData.upDownExtent>0?'+':'')+Number(szczChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </div>
    <div class="line-chart">
      <div v-if="cybzChartData !== null" class="indexNum">
        <span v-z3-updowncolor="cybzChartData.stockVal" class="mr-5">{{cybzChartData.stockVal === null ? '--':Number(cybzChartData.stockVal).toFixed(2)}}</span>
        <img v-if="cybzChartData && cybzChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="cybzChartData && cybzChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="cybzChartData.upDown" class="mr-5">{{cybzChartData.upDown === null ? '--':Number(cybzChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="cybzChartData.upDownExtent">{{cybzChartData.upDownExtent === null ? '(--)':'('+(cybzChartData.upDownExtent>0?'+':'')+Number(cybzChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </div>
  </div>
  <div class="chart-info clearfix">
    <div class="chartInfo">
      <div class="chartInfo_text clearfix">
        <div class="fl">
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.upNum">{{barData.upNum === 0 ? '--':barData.upNum}}</span>
          <span class="mr-5">上涨</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.upNum, total, 2)}}</span>
        </div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.downNum, total, 2)}}</span>
          <span class="mr-5">下跌</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="barData.downNum">{{barData.downNum === 0 ? '--':barData.downNum}}</span>
        </div>
      </div>
      <div @mouseover="showAlert(0)" @mouseout="hideAlert(0)" class="chartInfo_bar clearfix">
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.upNum, total, 2)}"></div>
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.downNum, total, 2)}"></div>
      </div>
      <span class="info-alert">股票上涨/下跌数及占A股比例（去除停牌）</span>
    </div>
    <div class="chartInfo">
      <div class="chartInfo_text clearfix">
        <div class="fl">
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.limitUpNum">{{barData.limitUpNum === 0 ? '--':barData.limitUpNum}}</span>
          <span class="mr-5">涨停</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.limitUpNum, total, 2)}}</span></div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.limitDownNum, total, 2)}}</span>
          <span class="mr-5">跌停</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="barData.limitDownNum">{{barData.limitDownNum === 0 ? '--':barData.limitDownNum}}</span>
        </div>
      </div>
      <div @mouseover="showAlert(1)" @mouseout="hideAlert(1)" class="chartInfo_bar clearfix">
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.limitUpNum, total, 2)}"></div>
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.limitDownNum, total, 2)}"></div>
      </div>
      <span class="info-alert">股票涨停/跌停数及占A股比例（去除停牌）</span>
    </div>
    <div class="chartInfo">
      <div class="chartInfo_text clearfix">
        <div class="fl">
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.newHighNum">{{barData.newHighNum === 0 ? '--':barData.newHighNum}}</span>
          <span class="mr-5">创新高</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.newHighNum, total, 2)}}</span>
        </div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.newLowNum, total, 2)}}</span>
          <span class="mr-5">创新低</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="barData.newLowNum">{{barData.newLowNum === 0 ? '--':barData.newLowNum}}</span>
        </div>
      </div>
      <div @mouseover="showAlert(2)" @mouseout="hideAlert(2)" class="chartInfo_bar clearfix">
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.newHighNum, total, 2)}"></div>
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.newLowNum, total, 2)}"></div>
      </div>
      <span class="info-alert">股价创60日新高/新低数及占A股比例（去除停牌）</span>
    </div>
    <div class="chartInfo">
      <div class="chartInfo_text clearfix">
        <div class="fl">
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.crossMa5UpNum">{{barData.crossMa5UpNum === 0 ? '--':barData.crossMa5UpNum}}</span>
          <span class="mr-5">上穿MA5</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.crossMa5UpNum, total, 2)}}</span>
        </div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.crossMa5DownNum, total, 2)}}</span>
          <span class="mr-5">下穿MA5</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="barData.crossMa5DownNum">{{barData.crossMa5DownNum === 0 ? '--':barData.crossMa5DownNum}}</span>
        </div>
      </div>
      <div @mouseover="showAlert(3)" @mouseout="hideAlert(3)" class="chartInfo_bar clearfix">
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.crossMa5UpNum, total, 2)}"></div>
        <div v-if="barData && barData!==''" :style="{width:toPercent(barData.crossMa5DownNum, total, 2)}"></div>
      </div>
      <span class="info-alert">股价上穿/下穿5日均线数及占A股比例（去除停牌）</span>
    </div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
import z3websocket from '../z3tougu/z3socket'

import {
  mapState
} from 'vuex'

export default {
  data () {
    return {}
  },
  components: {},
  computed: mapState({
    chartData: state => state.indexChart.chartData,
    szzsChartData: state => state.indexChart.chartData.szzsChartData,
    lsChartData: state => state.indexChart.chartData.lsChartData,
    szczChartData: state => state.indexChart.chartData.szczChartData,
    cybzChartData: state => state.indexChart.chartData.cybzChartData,
    barData: state => state.indexChart.barData,
    total: function () {
      if (this.barData.unchangeNum === null || this.barData.upNum === null || this.barData.downNum === null || this.barData.unchangeNum === 'null' || this.barData.upNum === 'null' || this.barData.downNum === 'null') {
        return 0
      } else {
        return this.barData.unchangeNum + this.barData.upNum + this.barData.downNum
      }
    },
    socketState: state => state.z3sockjs.readystate,
    stockMessage: state => {
      const msg = state.z3sockjs.message
      if (msg && msg.data && msg.data.subject === 'sum') {
        const record = msg.data
        console.log(record)
        return {
          innerCode: record.stockCode,
          //  name: record.stockName,
          price: record.lastpx,
          chg: record.pxchg,
          curChngPct: record.pxchgratio
        }
      } else {
        if (msg && msg.data && msg.data.subject === 'timeline') {
          const record = msg.data
          console.log(record)
          return {
            innerCode: record.stockCode,
            //  name: record.stockName,
            price: record.lastpx,
            chg: record.pxchg,
            curChngPct: record.pxchgratio
          }
        } else {
          return null
        }
      }
    }
  }),
  methods: {
    dealData (zeroArr) {
      var r = []
      if (typeof (zeroArr) === 'undefined') {
        return r
      }
      for (var i = 0; i < zeroArr.length; i++) {
        if (zeroArr[i]) {
          r.push(zeroArr[i])
        }
      }
      return r
    },
    removeZero (zeroArr) {
      if (zeroArr == null) {
        return ''
      }
      var r = []
      if (typeof (zeroArr) === 'undefined') {
        return r
      }
      for (var i = 0; i < zeroArr.length; i++) {
        if (zeroArr[i]) {
          r.push([i, zeroArr[i]])
        }
      }
      return r
    },
    autoTimeline (starts, ends) {
      var timeline = []
      var startHour = starts.split(':')[0] * 1
      var startMin = starts.split(':')[1] * 1
      var endHour = ends.split(':')[0] * 1
      var endMin = ends.split(':')[1] * 1
      for (var i = startHour; i <= endHour; i++) {
        var start = (i === startHour) ? startMin : '0'
        var end = (i === endHour) ? endMin : '59'
        for (var j = start; j <= end; j++) {
          j = (j < 10) ? '0' + j : j
          timeline.push(i + ':' + j)
        }
      }
      return timeline
    },
    refreshEcharts (datas, index, chartName) {
      if (datas !== null && datas.priceArr !== null) {
        var tmpMax = Math.max.apply(Math, this.dealData(datas.priceArr))
        var tmpMin = Math.min.apply(Math, this.dealData(datas.priceArr))
      }
      if (datas !== null && datas.avgArr !== null) {
        var avgMax = Math.max.apply(Math, this.dealData(datas.avgArr))
        var avgMin = Math.min.apply(Math, this.dealData(datas.avgArr))
      }

      tmpMax = tmpMax > avgMax ? tmpMax : avgMax
      tmpMin = tmpMin < avgMin ? tmpMin : avgMin

      if (datas !== null) {
        var Dvalue = Math.abs(tmpMax - datas.line) > Math.abs(tmpMin - datas.line) ? Math.abs(tmpMax - datas.line) : Math.abs(tmpMin - datas.line)
      }

      this.chart = echarts.init(document.getElementsByClassName('indexChart')[index])

      // 生成横坐标时间轴
      var beforenoon = this.autoTimeline('9:30', '11:30')
      var afternoon = this.autoTimeline('13:00', '15:00')
      beforenoon.splice(beforenoon.length - 1, 1)
      afternoon[0] = '11:30/13:00'
      var timeline = beforenoon.concat(afternoon)
      // 图表初始化

      this.chart.setOption({
        title: {
          text: chartName,
          textStyle: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#fff'
          },
          left: 2,
          top: 5
        },
        grid: {
          left: 60,
          top: 40,
          bottom: 30,
          right: 20
        },
        calculable: true,
        xAxis: [{
          type: 'category',

          axisLine: {
            lineStyle: {
              color: '#535a64',
              type: 'solid'
            }
          },
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            interval: 59,
            textStyle: {
              color: function (params) {
                return '#707b8f'
              }
            }
          },
          data: timeline
        }],
        yAxis: [{
          type: 'value',
          // scale: true,
          min: datas === null ? '' : Number(datas.line) - Dvalue,
          max: datas === null ? '' : Number(datas.line) + Dvalue,
          axisLabel: {
            formatter: function (val) {
              return val.toFixed(2)
            },
            textStyle: {
              color: function (params) {
                var cc = (Number(params.split(',').join('')).toFixed(2) - Number(datas.line).toFixed(2)).toFixed(2)
                if (cc > 0) {
                  return '#ca4947'
                } else if (cc < 0) {
                  return '#56a870'
                }
                return '#fff'
              }
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: 'dashed',
              color: '#30343b'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#535a64',
              type: 'solid'
            }
          },
          axisTick: {
            show: false
          },
          splitNumber: 4,
          interval: 2 * Dvalue / 4
        }],

        series: [{
          name: '当前价',
          showSymbol: false,
          itemStyle: {
            normal: {
              color: '#fff'
            }
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          animation: false,
          smooth: true,
          type: 'line',
          data: JSON.parse(JSON.stringify(this.removeZero(datas === null ? '' : datas.priceArr))),
          markLine: {
            silent: true,
            symbol: false,
            animation: false,
            label: {
              normal: {
                show: false
              }
            },
            data: [{
              yAxis: datas === null ? '' : Number(datas.line).toFixed(2)
            }],
            lineStyle: {
              normal: {
                type: 'solid',
                color: '#fff',
                width: 0.3,
                opacity: 1
              }
            }
          }
        }, {
          name: '均值',
          itemStyle: {
            normal: {
              color: '#f4b53c '
            }
          },
          lineStyle: {
            normal: {
              width: 1
            }
          },
          animation: false,
          smooth: true,
          type: 'line',
          showSymbol: false,
          data: JSON.parse(JSON.stringify(this.removeZero(datas === null ? '' : datas.avgArr)))

        }]
      })
      window.onresize = function () {
        echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[0]).resize({
          height: (window.innerHeight * 0.37) * 0.74 < 710 * 0.37 * 0.74 ? 710 * 0.37 * 0.74 : (window.innerHeight * 0.37) * 0.74
        })
        echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[1]).resize({
          height: (window.innerHeight * 0.37) * 0.74 < 710 * 0.37 * 0.74 ? 710 * 0.37 * 0.74 : (window.innerHeight * 0.37) * 0.74
        })
        echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[2]).resize({
          height: (window.innerHeight * 0.37) * 0.74 < 710 * 0.37 * 0.74 ? 710 * 0.37 * 0.74 : (window.innerHeight * 0.37) * 0.74
        })
        echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[3]).resize({
          height: (window.innerHeight * 0.37) * 0.74 < 710 * 0.37 * 0.74 ? 710 * 0.37 * 0.74 : (window.innerHeight * 0.37) * 0.74
        })
      }
    },
    toPercent (x, y, n) {
      if (x === 0 || y === 0) {
        return '--'
      }
      return Number(x / y * 100).toFixed(n) + '%'
    },
    showAlert (index) {
      document.getElementsByClassName('info-alert')[index].style.display = 'inline-block'
    },
    hideAlert (index) {
      document.getElementsByClassName('info-alert')[index].style.display = 'none'
    }
  },
  watch: {
    'barData': function () {
      // alert('barFata')
      if (z3websocket.ws) {
        /* z3websocket.ws && z3websocket.ws.close()*/
      } else {
        this.$store.dispatch('z3sockjs/init')
      }
    },
    'chartData': {
      deep: true,
      handler: function () {
        // alert('chartData')
        if (z3websocket.ws) {
          //          z3websocket.ws && z3websocket.ws.close()
        } else {
          this.$store.dispatch('z3sockjs/init')
        }
      }

    }
  },
  mounted () {
    this.$store.dispatch('indexChart/getIndexChartData', {
      stockCode: '000001.SH'
    }).then(() => {
      this.refreshEcharts(this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
    })
    this.$store.dispatch('indexChart/getIndexChartData', {
      stockCode: '000300.SH'
    }).then(() => {
      this.refreshEcharts(this.$store.state.indexChart.chartData.lsChartData, 1, '沪深300')
    })
    this.$store.dispatch('indexChart/getIndexChartData', {
      stockCode: '399001.SZ'
    }).then(() => {
      this.refreshEcharts(this.$store.state.indexChart.chartData.szczChartData, 2, '深证成指')
    })
    this.$store.dispatch('indexChart/getIndexChartData', {
      stockCode: '399006.SZ'
    }).then(() => {
      this.refreshEcharts(this.$store.state.indexChart.chartData.cybzChartData, 3, '创业板指')
    })
    this.$store.dispatch('indexChart/getBarData').then(() => {})
  },
  destroyed () {
    z3websocket.ws && z3websocket.ws.close()
  }
}
</script>
