<style lang="scss">
@import '../assets/css/base.css';
@import "../assets/scss/style";
.index-top {
    width: 100%;
    /*height: 37%;*/
    background: $bgDeepColor;
}

.index-chart {
    width: 100%;
    height: 74%;
    background: $bgDeepColor;
    padding-bottom: 3px;
}

.line-chart {
    background: $bgConColor;
    margin-right: 0.3%;
    width: 24.75%;
    height: 100%;
    float: left;
    position: relative;
}
.line-chart:last-child {
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
.indexChart > div:hover {
    cursor: pointer !important;
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
    padding: 1% 20px;
    position: relative;
}

.chartInfo_text {
    color: #fff;
}

.chart-info {
    background: $bgConColor;
    font-size: $fontSizeBase;
    height: 26%;
}

.chartInfo_bar {
    margin-top: 10px;
    background: $bgNavColor;
}

.chartInfo_bar div {
    height: 8px;
    /*width: 50%;*/
}
.chartInfo_bar div:first-child {
    background: $upColor;
    float: left;
}
.chartInfo_bar div:last-child {
    background: $downColor;
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
    <a class="line-chart" @click="toMarketDetail">
      <div v-if="szzsChartData !== null" class="indexNum">
        <span v-z3-updowncolor="szzsChartData.upDown" class="mr-5">{{szzsChartData.stockVal === null ? '--':szzsChartData.stockVal === undefined?'--':Number(szzsChartData.stockVal).toFixed(2)}}</span>
        <img v-if="szzsChartData && szzsChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="szzsChartData && szzsChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="szzsChartData.upDown" class="mr-5">{{szzsChartData.upDown === null ? '--':szzsChartData.upDown === undefined?'--':Number(szzsChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="szzsChartData.upDown">{{szzsChartData.upDownExtent === null ? '(--)':szzsChartData.upDownExtent === undefined?'(--)':'('+(szzsChartData.upDownExtent>0?'+':'')+Number(szzsChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </a>
    <a class="line-chart" href="stock/000300.SH" target="_blank">
      <div v-if="lsChartData !== null" class="indexNum">
        <span v-z3-updowncolor="lsChartData.upDown" class="mr-5">{{lsChartData.stockVal === null ? '--':lsChartData.stockVal === undefined?'--':Number(lsChartData.stockVal).toFixed(2)}}</span>
        <img v-if="lsChartData && lsChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="lsChartData && lsChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="lsChartData.upDown" class="mr-5">{{lsChartData.upDown === null ? '--':lsChartData.upDown === undefined?'--':Number(lsChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="lsChartData.upDown">{{lsChartData.upDownExtent === null ? '(--)':lsChartData.upDownExtent === undefined?'(--)':'('+(lsChartData.upDownExtent>0?'+':'')+Number(lsChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </a>
    <a class="line-chart" href="stock/399001.SZ" target="_blank">
      <div v-if="szczChartData !== null" class="indexNum">
        <span v-z3-updowncolor="szczChartData.upDown" class="mr-5">{{szczChartData.stockVal === null ? '--':szczChartData.stockVal === undefined?'--':Number(szczChartData.stockVal).toFixed(2)}}</span>
        <img v-if="szczChartData && szczChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="szczChartData && szczChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="szczChartData.upDown" class="mr-5">{{szczChartData.upDown === null ? '--':szczChartData.upDown === undefined?'--':Number(szczChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="szczChartData.upDown">{{szczChartData.upDownExtent === null ? '(--)':szczChartData.upDownExtent === undefined?'(--)':'('+(szczChartData.upDownExtent>0?'+':'')+Number(szczChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </a>
    <a class="line-chart" href="stock/399006.SZ" target="_blank">
      <div v-if="cybzChartData !== null" class="indexNum">
        <span v-z3-updowncolor="cybzChartData.upDown" class="mr-5">{{cybzChartData.stockVal === null ? '--':cybzChartData.stockVal === undefined?'--':Number(cybzChartData.stockVal).toFixed(2)}}</span>
        <img v-if="cybzChartData && cybzChartData.upDownExtent>0" src="../assets/images/i_jiantou_up.png" />
        <img v-if="cybzChartData && cybzChartData.upDownExtent<0" src="../assets/images/i_jiantou_down.png" />
        <span v-z3-updowncolor="cybzChartData.upDown" class="mr-5">{{cybzChartData.upDown === null ? '--':cybzChartData.upDown === undefined?'--':Number(cybzChartData.upDown).toFixed(2)}}</span>
        <span v-z3-updowncolor="cybzChartData.upDown">{{cybzChartData.upDownExtent === null ? '(--)':cybzChartData.upDownExtent === undefined?'(--)':'('+(cybzChartData.upDownExtent>0?'+':'')+Number(cybzChartData.upDownExtent).toFixed(2)+'%)'}}</span>
      </div>
      <div class="indexChart"></div>
    </a>
  </div>
  <div class="chart-info clearfix">
    <div class="chartInfo">
      <div class="chartInfo_text clearfix">
        <div class="fl">
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.upNum">{{barData.upNum === null ? '--':barData.upNum}}</span>
          <span class="mr-5">上涨</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.upNum, total, 2)}}</span>
        </div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.downNum, total, 2)}}</span>
          <span class="mr-5">下跌</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="Number(-barData.downNum)">{{barData.downNum === null ? '--':barData.downNum}}</span>
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
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.limitUpNum">{{barData.limitUpNum === null ? '--':barData.limitUpNum}}</span>
          <span class="mr-5">涨停</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.limitUpNum, total, 2)}}</span></div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.limitDownNum, total, 2)}}</span>
          <span class="mr-5">跌停</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="Number(-barData.limitDownNum)">{{barData.limitDownNum === null ? '--':barData.limitDownNum}}</span>
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
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.newHighNum">{{barData.newHighNum === null ? '--':barData.newHighNum}}</span>
          <span class="mr-5">创新高</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.newHighNum, total, 2)}}</span>
        </div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.newLowNum, total, 2)}}</span>
          <span class="mr-5">创新低</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="Number(-barData.newLowNum)">{{barData.newLowNum === null ? '--':barData.newLowNum}}</span>
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
          <span class="mr-5" v-if="barData && barData!==''" v-z3-updowncolor="barData.crossMa5UpNum">{{barData.crossMa5UpNum === null ? '--':barData.crossMa5UpNum}}</span>
          <span class="mr-5">上穿MA5</span>
          <span v-if="barData && barData!==''">{{toPercent(barData.crossMa5UpNum, total, 2)}}</span>
        </div>
        <div class="fr">
          <span class="mr-5" v-if="barData && barData!==''">{{toPercent(barData.crossMa5DownNum, total, 2)}}</span>
          <span class="mr-5">下穿MA5</span>
          <span v-if="barData && barData!==''" v-z3-updowncolor="Number(-barData.crossMa5DownNum)">{{barData.crossMa5DownNum === null ? '--':barData.crossMa5DownNum}}</span>
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
import config from '../z3tougu/config'
import {
  ctx
} from '../z3tougu/config'

import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      updateDataPid: null,
      intervalTime: 1000,
      timeoutID: null,
      chartInterval: null
    }
  },
  components: {},
  computed: mapState({
    chartData: state => state.indexChart.chartData,
    szzsChartData: state => state.indexChart.chartData.szzsChartData,
    lsChartData: state => state.indexChart.chartData.lsChartData,
    szczChartData: state => state.indexChart.chartData.szczChartData,
    cybzChartData: state => state.indexChart.chartData.cybzChartData,
    barData: state => state.indexChart.barData,
    total: function() {
      if (this.barData.unchangeNum === null || this.barData.upNum === null || this.barData.downNum === null || this.barData.unchangeNum === 'null' || this.barData.upNum === 'null' || this.barData.downNum === 'null') {
        return 0
      } else {
        return this.barData.unchangeNum + this.barData.upNum + this.barData.downNum
      }
    },
    socketState: state => state.z3sockjs.readystate,
    stockMessage: state => {
      const msg = state.z3sockjs.message

      if (msg && msg.data && msg.data.subject === 'timeline') {
        const record = msg.data
        return record
      } else {
        return null
      }
    },
    barMessage: state => {
      const msg = state.z3sockjs.message
      if (msg && msg.data && msg.data.subject === 'sum') {
        const record = msg.data
        return {
          crossMa5DownNum: record.downCrossMA5Num,
          crossMa5UpNum: record.upCrossMA5Num,
          downNum: record.slideNum,
          limitDownNum: record.downStopNum,
          limitUpNum: record.upStopNum,
          newHighNum: record.newHighNum,
          newLowNum: record.newLowNum,
          unchangeNum: record.horNum,
          upNum: record.incNum
        }
      } else {
        return null
      }
    },
    moveBlockData: state => {
      const moveBlockData = state.indexChart.moveBlock
      return moveBlockData
    },
    moveUpBlockData: state => {
      const moveBlockData = state.indexChart.moveBlock
      let moveUpBlockData = {}
      if (moveBlockData && moveBlockData.length > 0) {
        moveBlockData.forEach((block) => {
          if (block.moveSignalId === 2) {
            moveUpBlockData = block
            const toTime = moveUpBlockData.tradeTime.toString()
            let m;
            let s;
            if (toTime.length === 6) {
              m = toTime.substring(0, 2)
              s = toTime.substring(2, 4)
            } else if (toTime.length === 5) {
              m = toTime.substring(0, 1)
              s = toTime.substring(1, 3)
            }
            moveUpBlockData.tradeTime = m + ':' + s
          }
        })
        return moveUpBlockData
      }
    },
    moveDownBlockData: state => {
      const moveBlockData = state.indexChart.moveBlock
      let moveDownBlockData = {}
      if (moveBlockData && moveBlockData.length > 0) {
        moveBlockData.forEach((block) => {
          if (block.moveSignalId === 1) {
            moveDownBlockData = block
            const toTime = moveDownBlockData.tradeTime.toString()
            let m;
            let s;
            if (toTime.length === 6) {
              m = toTime.substring(0, 2)
              s = toTime.substring(2, 4)
            } else if (toTime.length === 5) {
              m = toTime.substring(0, 1)
              s = toTime.substring(1, 3)
            }
            moveDownBlockData.tradeTime = m + ':' + s
          }
        })
      }
      return moveDownBlockData
    }
  }),
  methods: {
    dealData(zeroArr) {
      var r = []
      if (typeof zeroArr === 'undefined') {
        return r
      }
      for (var i = 0; i < zeroArr.length; i++) {
        if (zeroArr[i]) {
          r.push(zeroArr[i])
        }
      }
      return r
    },
    removeZero(zeroArr) {
      if (zeroArr == null) {
        return ''
      }
      var r = []
      if (typeof zeroArr === 'undefined') {
        return r
      }
      for (var i = 0; i < zeroArr.length; i++) {
        if (zeroArr[i]) {
          r.push([i, zeroArr[i]])
        }
      }
      return r
    },
    autoTimeline(starts, ends) {
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
    refreshEcharts(datas, index, chartName) {
      const _this = this
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

      this.chart = echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[index]) || echarts.init(document.getElementsByClassName('indexChart')[index])

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
          left: 65,
          top: 40,
          bottom: 30,
          right: 15
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
              color: function(params) {
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
            formatter: function(val) {
              return val.toFixed(2)
            },
            textStyle: {
              color: function(params) {
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
              color: '#f4b53c'
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
      window.onresize = function() {
        const timestampResize = new Date().getTime()
        _this.$emit('isResize', timestampResize)
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
    refreshSzzsEcharts(datas, index, chartName) {
      const _this = this
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
      this.chart = echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[index]) || echarts.init(document.getElementsByClassName('indexChart')[index])
      // 生成横坐标时间轴
      var beforenoon = this.autoTimeline('9:30', '11:30')
      var afternoon = this.autoTimeline('13:00', '15:00')
      beforenoon.splice(beforenoon.length - 1, 1)
      afternoon[0] = '11:30/13:00'
      var timeline = beforenoon.concat(afternoon)
      let moveUpX;
      let moveUpY;
      let moveUpName;
      let moveDownX;
      let moveDownY;
      let moveDownName;
      let pointUpX;
      let pointDownX;
      const chartHeight = (window.innerHeight * 0.37 * 0.74 - 40) * 0.821
      const markLineHeight = 20 * 2 * Dvalue / chartHeight
      const lineWidth = document.getElementsByClassName('line-chart')[0].offsetWidth - 65
      if (_this.moveUpBlockData && timeline.indexOf(_this.moveUpBlockData.tradeTime) !== -1 && _this.moveDownBlockData && timeline.indexOf(_this.moveDownBlockData.tradeTime) !== -1) {
        moveUpX = _this.moveUpBlockData.tradeTime
        moveUpY = datas.priceArr[timeline.indexOf(moveUpX)]
        moveUpName = _this.moveUpBlockData.sectionName
        const upPositionX = (timeline.indexOf(moveUpX) / timeline.length) * lineWidth
        if (moveUpName.length * 15 / 2 > upPositionX) { // 异动板块左边超出了坐标轴
          const pointUpXIndex = Math.ceil(((timeline.length - 1) * moveUpName.length * 15 / 2) / lineWidth)
          pointUpX = timeline[pointUpXIndex]
        } else if (lineWidth - upPositionX < moveUpName.length * 15 / 2) { // 异动板块右边超出了坐标轴
          const pointUpXIndex = Math.ceil(((timeline.length - 1) * (lineWidth - moveUpName.length * 15 / 2)) / lineWidth)
          pointUpX = timeline[pointUpXIndex]
        } else {
          pointUpX = moveUpX
        }
        moveDownX = _this.moveDownBlockData.tradeTime
        moveDownY = datas.priceArr[timeline.indexOf(moveDownX)]
        moveDownName = _this.moveDownBlockData.sectionName
        const downPositionX = (timeline.indexOf(moveDownX) / timeline.length) * lineWidth
        if (moveDownName.length * 15 / 2 > downPositionX) { // 异动板块左边超出了坐标轴
          const pointDownXIndex = Math.ceil(((timeline.length - 1) * moveDownName.length * 15 / 2) / lineWidth)
          pointDownX = timeline[pointDownXIndex]
        } else if (lineWidth - downPositionX < moveDownName.length * 15 / 2) { // 异动板块右边超出了坐标轴
          const pointDownXIndex = Math.ceil(((timeline.length - 1) * (lineWidth - moveDownName.length * 15 / 2)) / lineWidth)
          pointDownX = timeline[pointDownXIndex]
        } else {
          pointDownX = moveDownX
        }
        let lineUpY = moveUpY + markLineHeight; // 上涨板块指示线的终点Y坐标
        let pointUpY = moveUpY + markLineHeight + 20 * Dvalue / chartHeight; // 上涨板块名字Y坐标
        let lineDownY = moveDownY - markLineHeight; // 下跌板块指示线的终点Y坐标
        let pointDownY = moveDownY - markLineHeight - 20 * Dvalue / chartHeight; // 下跌板块名字Y坐标
        // 判断上下是否越界
        if (lineUpY + 40 * Dvalue / chartHeight >= Number(datas.line) + Dvalue) { // 涨的板块超出了图表就在点下面
          lineUpY = moveUpY - markLineHeight
          pointUpY = moveUpY - markLineHeight - 20 * Dvalue / chartHeight
        }
        if (lineDownY - 40 * Dvalue / chartHeight <= Number(datas.line) - Dvalue) { // 跌的板块超出了图表就在点上面
          lineDownY = moveDownY + markLineHeight
          pointDownY = moveDownY + markLineHeight + 20 * Dvalue / chartHeight
        }
        // 判断是否重合
        const moveUpObj = {
          left: timeline.indexOf(pointUpX) * lineWidth / (timeline.length - 1),
          top: pointUpY + 20 * Dvalue / chartHeight,
          right: timeline.indexOf(pointUpX) * lineWidth / (timeline.length - 1) + moveUpName.length * 15,
          bottom: pointUpY - 20 * Dvalue / chartHeight
        }
        const moveDownObj = {
          left: timeline.indexOf(pointDownX) * lineWidth / (timeline.length - 1),
          top: pointDownY + 20 * Dvalue / chartHeight,
          right: timeline.indexOf(pointDownX) * lineWidth / (timeline.length - 1) + moveDownName.length * 15,
          bottom: pointDownY - 20 * Dvalue / chartHeight
        }
        if (!this.isOverlap(moveUpObj, moveDownObj)) {
          if (timeline.indexOf(moveUpX) > timeline.indexOf(moveDownX)) {
            if (pointUpY > moveUpY) {
              pointUpY += 50 * Dvalue / chartHeight
              lineUpY += 50 * Dvalue / chartHeight
            } else {
              pointUpY -= 50 * Dvalue / chartHeight
              lineUpY -= 50 * Dvalue / chartHeight
            }
          } else {
            if (pointDownY > moveDownY) {
              pointDownY += 50 * Dvalue / chartHeight
              lineDownY += 50 * Dvalue / chartHeight
            } else {
              pointDownY -= 50 * Dvalue / chartHeight
              lineDownY -= 50 * Dvalue / chartHeight
            }
          }
        }
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
            left: 65,
            top: 40,
            bottom: 30,
            right: 15
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
                color: function(params) {
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
              formatter: function(val) {
                return val.toFixed(2)
              },
              textStyle: {
                color: function(params) {
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
            symbol: 'circle',
            showAllSymbol: 'true',
            symbolSize: function(value, params) {
              if (params.name === moveUpX) {
                return 6
              } else if (params.name === moveDownX) {
                return 6
              } else {
                return 0
              }
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  if (params.name === moveUpX) {
                    return config.upColor
                  } else if (params.name === moveDownX) {
                    return config.downColor
                  } else {
                    return '#fff'
                  }
                }
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: '#fff'
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
                },
                [{
                    coord: [moveUpX, moveUpY],
                    symbol: 'circle',
                    symbolSize: 0.1,
                    lineStyle: {
                      normal: {
                        width: 1,
                        type: 'solid',
                        color: config.upColor
                      }
                    }
                  },
                  {
                    coord: [moveUpX, lineUpY],
                    symbol: 'circle',
                    symbolSize: 0.1,
                    lineStyle: {
                      normal: {
                        width: 1,
                        type: 'solid',
                        color: config.upColor
                      }
                    }
                  }
                ],
                [{
                    coord: [moveDownX, moveDownY],
                    symbol: 'circle',
                    symbolSize: 0.1,
                    lineStyle: {
                      normal: {
                        width: 1,
                        type: 'solid',
                        color: config.downColor
                      }
                    }
                  },
                  {
                    coord: [moveDownX, lineDownY],
                    symbol: 'circle',
                    symbolSize: 0.1,
                    lineStyle: {
                      normal: {
                        width: 1,
                        type: 'solid',
                        color: config.downColor
                      }
                    }
                  }
                ]
              ],
              lineStyle: {
                normal: {
                  type: 'solid',
                  color: '#fff',
                  width: 0.3,
                  opacity: 1
                }
              }
            },
            markPoint: {
              silent: false,
              symbol: 'rect',
              symbolSize: function(value, params) {
                if (params.name === '上涨板块') {
                  return [moveUpName.length * 15, 20]
                } else if (params.name === '下跌板块') {
                  return [moveDownName.length * 15, 20]
                }
              },
              label: {
                position: [0, 0],
                distance: 0
              },
              data: [{
                  name: '上涨板块',
                  coord: [pointUpX, pointUpY],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,
                      borderColor: config.upColor,
                      color: 'rgba(0,0,0,0)'
                    }
                  },
                  label: {
                    normal: {
                      color: config.upColor,
                      formatter: function() {
                        return moveUpName
                      }
                    }
                  }
                },
                {
                  name: '下跌板块',
                  coord: [pointDownX, pointDownY],
                  itemStyle: {
                    normal: {
                      borderWidth: 1,
                      borderColor: config.downColor,
                      color: 'rgba(0,0,0,0)'
                    }
                  },
                  label: {
                    normal: {
                      color: config.downColor,
                      formatter: function() {
                        return moveDownName
                      }
                    }
                  }
                }
              ]
            }
          }, {
            name: '均值',
            itemStyle: {
              normal: {
                color: '#f4b53c'
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
      } else {
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
            left: 65,
            top: 40,
            bottom: 30,
            right: 15
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
                color: function(params) {
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
              formatter: function(val) {
                return val.toFixed(2)
              },
              textStyle: {
                color: function(params) {
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
            showAllSymbol: 'true',
            symbolSize: function(value, params) {
              return 0
            },
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
                color: '#f4b53c'
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
      }
    },
    isOverlap: function(obj1, obj2) {
      const l1 = obj1.left;
      const t1 = obj1.top;
      const r1 = obj1.right;
      const b1 = obj1.bottom;
      const l2 = obj2.left;
      const t2 = obj2.top;
      const r2 = obj2.right;
      const b2 = obj2.bottom;
      if (r1 >= l2 && l1 <= r2 && b1 >= t2 && t1 <= b2) {
        return true;
      } else {
        return false
      }
    },
    toPercent(x, y, n) {
      if (y === 0 || x === null || x === 'null') {
        return '--'
      }
      return Number(x / y * 100).toFixed(n) + '%'
    },
    showAlert(index) {
      document.getElementsByClassName('info-alert')[index].style.display = 'inline-block'
    },
    hideAlert(index) {
      document.getElementsByClassName('info-alert')[index].style.display = 'none'
    },
    /* indexStock() {
      const msg = {
        subject: 'timeline',
        type: '1',
        actionType: '1',
        stockCodeList: ['000001.SH', '000300.SH', '399001.SZ', '399006.SZ'],
        token: ''
      }
      this.$store.dispatch('z3sockjs/send', msg)
    },
    barStock() {
      const msg = {
        subject: 'sum',
        type: '1',
        actionType: '1',
        stockCodeList: ['000002.SZ'],
        token: ''
      }
      this.$store.dispatch('z3sockjs/send', msg)
    }, */
    updateBar(data) {
      this.$store.commit('indexChart/barSocket', data)
    },
    updateStock(data) {
      this.$store.commit('indexChart/chartSocket', data)
    },
    autoUpdate: function() {
      const _this = this
      /* if (this.updateDataPid) {
         clearInterval(this.updateDataPid)
       } else {
         this.updateDataPid = setInterval(function() {
           _this.$store.dispatch('indexChart/getMoveBlock')
         }, 60 * _this.intervalTime)
       }*/
      this.chartInterval = setInterval(function() {
        let p1 = new Promise((resolve, reject) => {
          _this.$store.dispatch('indexChart/getMoveBlock').then(() => {
            resolve();
          })
        });
        let p2 = new Promise((resolve, reject) => {
          _this.$store.dispatch('indexChart/getIndexChartData', {
            stockCode: '000001.SH'
          }).then(() => {
            resolve();
          })
        });
        Promise.all([p1, p2]).then(() => {
          _this.refreshSzzsEcharts(_this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
        })
        _this.$store.dispatch('indexChart/getIndexChartData', {
          stockCode: '000300.SH'
        }).then(() => {
          _this.refreshEcharts(_this.$store.state.indexChart.chartData.lsChartData, 1, '沪深300')
        })
        _this.$store.dispatch('indexChart/getIndexChartData', {
          stockCode: '399001.SZ'
        }).then(() => {
          _this.refreshEcharts(_this.$store.state.indexChart.chartData.szczChartData, 2, '深证成指')
        })
        _this.$store.dispatch('indexChart/getIndexChartData', {
          stockCode: '399006.SZ'
        }).then(() => {
          _this.refreshEcharts(_this.$store.state.indexChart.chartData.cybzChartData, 3, '创业板指')
        })
        _this.$store.dispatch('indexChart/getBarData').then(() => {})
      }, 3 * _this.intervalTime)
    },
    toMarketDetail: function() {
      window.open(ctx + '/stock/000001.SH')
      /*  clearTimeout(this.timeoutID)
        this.isDbClick('click')*/
    },
    toDingPan: function() {
      clearTimeout(this.timeoutID)
      this.isDbClick('dblclick')
    },
    isDbClick: function(type) {
      this.timeoutID = setTimeout(() => {
        if (type === 'click') {
          window.open(ctx + '/stock/000001.SH')
        } else if (type === 'dblclick') {
          window.open(ctx + '/siweiIndex')
        }
      }, 250);
    }
  },
  watch: {
    /* stockMessage() {
      if (this.stockMessage) {
        this.updateStock(this.stockMessage)
      }
    },
    socketState() {
      if (this.socketState === 1) {
        // 建立连接
        this.indexStock()
        this.barStock()
      } else if (this.socketState === 3) {
        // 断开连接，重新建立连接
        this.$store.dispatch('z3sockjs/init')
      }
    }, */
    barMessage() {
      if (this.barMessage) {
        this.updateBar(this.barMessage)
      }
    },
    'barData': function() {
      // alert('barFata')
      if (z3websocket.ws) {
        /* z3websocket.ws && z3websocket.ws.close()*/
      } else {
        this.$store.dispatch('z3sockjs/init')
      }
    },
    'chartData': {
      deep: true,
      handler: function() {
        // alert('chartData')
        if (z3websocket.ws) {
          //          z3websocket.ws && z3websocket.ws.close()
        } else {
          this.$store.dispatch('z3sockjs/init')
        }
      }

    },
    szzsChartData: {
      deep: true,
      handler: function() {
        if (this.moveBlockData && this.szzsChartData) {
          this.refreshSzzsEcharts(this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
        }
      }
    },
    lsChartData: {
      deep: true,
      handler: function() {
        this.refreshEcharts(this.$store.state.indexChart.chartData.lsChartData, 1, '沪深300')
      }
    },
    szczChartData: {
      deep: true,
      handler: function() {
        this.refreshEcharts(this.$store.state.indexChart.chartData.szczChartData, 2, '深证成指')
      }
    },
    cybzChartData: {
      deep: true,
      handler: function() {
        this.refreshEcharts(this.$store.state.indexChart.chartData.cybzChartData, 3, '创业板指')
      }
    },
    moveBlockData: {
      deep: true,
      handler: function() {
        if (this.moveBlockData && this.szzsChartData) {
          this.refreshSzzsEcharts(this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
        }
      }
    }
  },
  mounted() {
    let p1 = new Promise((resolve, reject) => {
      this.$store.dispatch('indexChart/getMoveBlock').then(() => {
        resolve();
      })
    });
    let p2 = new Promise((resolve, reject) => {
      this.$store.dispatch('indexChart/getIndexChartData', {
        stockCode: '000001.SH'
      }).then(() => {
        this.refreshSzzsEcharts(this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
        resolve();
      })
    });
    Promise.all([p1, p2]).then(() => {
      this.refreshSzzsEcharts(this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
      this.chart = echarts.getInstanceByDom(document.getElementsByClassName('indexChart')[0]) || echarts.init(document.getElementsByClassName('indexChart')[0])
      this.chart.on('click', (params) => {
        if (params.componentType === 'markPoint') {
          params.event.event.stopPropagation();
          window.open(ctx + '/siweiIndex?key=zsIndex')
        }
      })
    });
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
    this.autoUpdate()
    /* this.$store.dispatch('indexChart/getIndexChartData', {
       stockCode: '000001.SH'
     }).then(() => {
       this.refreshEcharts(this.$store.state.indexChart.chartData.szzsChartData, 0, '上证指数')
     })*/
  },
  destroyed() {
    z3websocket.ws && z3websocket.ws.close()
    this.chartInterval && clearInterval(this.chartInterval)
  }
}
</script>
