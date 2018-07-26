<template>
<div class="ztgBox">
  <div class="siweiDialog" :style="{left:offsetX+'px',top:offsetY+'px',zIndex:zIndex}">
    <Siweidialog :dialogOptions="dialogOptions" v-show="isOverBubbles || isOverDialog" @toShowDialog="setDialog" @toHideDialog="setDialog"></Siweidialog>
  </div>
  <div class="ztgMain display-box">
    <div class="ztgChart box-flex-1">
      <div ref="ztgBubbles" :style="{height:bubbleHeight+'px'}"></div>
      <div class="ztgLine" ref="ztgLine" :style="{height:lineChartHeight+'px'}" @keydown="zoomData($event)" @mouseover="zoomOver($event)" tabindex="0" onfocus='console.log("得到焦点!");'></div>
    </div>
    <div class="ztgList">
      <ul ref="ztgListUl">
        <li v-for="item in ztgList" class="pb-20" @dblclick="toStockDetail(item.innerCode)">
          <div class="mb-10" v-if="String(item.tradeTime).length === 6">
            {{String(item.tradeTime).substring(0,2)+':'+String(item.tradeTime).substring(2,4)+':'+String(item.tradeTime).substring(4)}}
          </div>
          <div class="mb-10" v-if="String(item.tradeTime).length === 5">
            {{String(item.tradeTime).substring(0,1)+':'+String(item.tradeTime).substring(1,3)+':'+String(item.tradeTime).substring(3)}}
          </div>
          <div style="margin-bottom: 7px;" class="clearfix">
            <div class="fl mr-20"><span style="margin-right: 2px;">{{item.name}}</span><span>[{{item.symbol.substring(0,6)}}]</span>
            </div>
            <div class="fl"><span v-z3-updowncolor="item.chngPct">{{item.price | decimal(2)}}</span><span class="ml-10 mr-10" v-z3-updowncolor="item.chngPct">{{item.chngPct | chngPct}}</span>
            </div>
            <div class="fr" style="margin-right: 5px" v-z3-updowncolor="item.moveSignalId -1.5">{{item.reasonShortLine}}</div>
          </div>
          <div v-if="item.title" style="margin-bottom: 5px;"><span class="markBox" v-if="item.moveSignalId === 1" style="background-color: #56a870">利空</span><span class="markBox" v-if="item.moveSignalId === 2" style="background-color: #ca4941">利好</span>{{item.title}}</div>
          <ul class="topicStock clearfix">
            <li v-for="value in item.topicDataList" :value="value.topicCode" @dblclick="toThemeDetail(value.topicCode,$event)">
              <div class="name">{{value.topicName}}</div>
              <div class="price" v-z3-updowncolor="value.topicChngPct">{{value.topicChngPct | chngPct}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!--图例-->
  <div class="legend clearfix">
    <div class="fr">
      <ul class="clearfix">
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.cur_chng_pct'">{{item}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.chng_pct_week'">{{item*2}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_month'">{{item*3}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_3month'">{{item*6}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_6month'">{{item*8}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_year'">{{item*9}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_year_sofar'">{{item*8}}%
        </li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
import Siweidialog from 'components/siwei-dialog'
import config from '../../z3tougu/config'
import * as Data from '../../z3tougu/constant/siwei.js'
import {
  mapState
} from 'vuex'
import {
  ctx
} from '../../z3tougu/config'

export default {
  data() {
    return {
      options: {
        xDefault: 'mkt_idx.volume_ratio',
        yDefault: 'mkt_idx.exchr',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'mkt_idx.cur_chng_pct',
        type: 2
      },
      defaultColor: '#2F323D',
      groupArr: Data.groupArr,
      dialogOptions: {
        stockName: '',
        stockCode: '',
        leftList: {
          xData: {
            value: ''
          },
          yData: {
            value: ''
          },
          bubbleSize: {
            value: ''
          },
          bubbleColor: {
            value: ''
          }
        }
      },
      bubbleHeight: (window.innerHeight - 29) * 0.66 - 22,
      lineChartHeight: (window.innerHeight - 29) * 0.33 - 22,
      isShowDialog: false,
      offsetX: '',
      offsetY: '',
      zIndex: '',
      isOverBubbles: false,
      isOverDialog: false,
      timeout: null,
      quoteChange: Data.quoteChange,
      chgColor: Data.chgColor,
      interval: null,
      tcapMax: Math.sqrt(1.650026740738E12 / 1e11),
      tcapMin: Math.sqrt(9.722757458E9 / 1e11)
    }
  },
  components: {
    Siweidialog
  },
  computed: mapState({
    ztgList: state => state.bubbles.ztgBubblesLine,
    stockListTime: state => state.bubbles.stockListTime,
    isTop: state => state.bubbles.isTop
  }),
  methods: {
    setDialog(data) {
      if (data) {
        this.isOverDialog = data
        this.zIndex = 999999
      } else {
        // alert('i dont konw')
        this.isOverBubbles = data
        this.isOverDialog = data
        this.zIndex = -999999
      }

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
    initBubbles() {
      this.$nextTick(() => {
        // DOM 更新了
        this.chart = echarts.init(this.$refs.ztgBubbles)
        this.chart.showLoading(config.loadingConfig);
      })

      this.$store.dispatch('bubbles/getStockBubbles', {
        options: this.options
      }).then(() => {
        const that = this

        const xData = this.$store.state.bubbles.ztgBubblesData.xData

        const yData = this.$store.state.bubbles.ztgBubblesData.yData
        const xMaxData = Math.max.apply(null, xData)
        const xMinData = Math.min.apply(null, xData)

        let sd = [];
        this.$store.state.bubbles.ztgBubblesData.seriesData.forEach((value, index) => {
          let ps = ''
          let labelFun
          let num = this.$store.state.bubbles.ztgBubblesData.bubbleSize[index]
          if ((150 * (Math.sqrt(num / 1e11) - that.tcapMin) + 13 * (that.tcapMax - that.tcapMin)) < 30) {
            ps = 'bottom'
            labelFun = function(params) {
              return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)]
            }
          } else {
            ps = 'inside'
            if ((150 * (Math.sqrt(num / 1e11) - that.tcapMin) + 13 * (that.tcapMax - that.tcapMin)) < 60) {
              labelFun = function(params) {
                return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)].substring(0, 2) + '\n' + that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)].substring(2)

              }
            } else {
              labelFun = function(params) {
                return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)]
              }
            }

          }

          sd.push({
            label: {
              normal: {
                show: true,
                position: ps,
                color: '#fff',
                formatter: labelFun
              }
            },
            value: value
          })
        })

        this.chart.setOption({
          title: {
            show: true,
            right: 5,
            top: 5,
            text: '气泡大小：流通市值   气泡颜色：涨跌幅',
            textStyle: {
              color: '#c9d0d7',
              fontSize: 12,
              fontWeight: 'normal'
            }
          },
          // backgroundColor: '#23252D',
          animation: false,
          grid: {
            top: 50,
            left: 65,
            right: 25,
            bottom: 50
          },
          tooltip: {
            triggerOn: 'none',
            formatter: function(params) {
              // return '<p style="background: red; width:200px; height:200px">hello</p>'
            }
          },
          dataZoom: [{
              type: 'inside',
              xAxisIndex: 0,
              filterMode: 'empty'
            },
            {
              type: 'inside',
              yAxisIndex: 0,
              filterMode: 'empty'
            }
          ],
          xAxis: {
            type: 'value',
            // name: '日期',
            nameGap: 16,
            nameTextStyle: {
              color: '#fff',
              fontSize: 14
            },
            position: 'top',
            // max: 31,
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#343741'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#343741'
              }
            },
            axisTick: {
              show: false
            },
            max: xMaxData + (xMaxData * 0.05),
            min: xMinData - (xMaxData * 0.05),
            axisLabel: {
              showMaxLabel: true,
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().xAxis[0].max)) {
                  return 'ln(量比)'
                }
                return Number(v).toFixed(2)
                // return that.convertNumBySelect('xData', v)
              },
              textStyle: {
                color: '#c9d0d7'
              },
              margin: 10,
              interval: 0
            },
            data: xData,
            splitNumber: 5,
            interval: ((xMaxData + (xMaxData * 0.05)) - (xMinData - (xMaxData * 0.05))) / 5

          },
          yAxis: {
            type: 'value',
            nameGap: 20,
            nameTextStyle: {
              color: '#fff',
              fontSize: 12,
              backgroundColor: 'red',
              padding: [100, 50, 10, 10]
            },
            axisLine: {
              lineStyle: {
                color: '#343741'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#343741'
              }
            },
            max: Math.max.apply(null, yData) + (Math.max.apply(null, yData) * 0.05),
            axisLabel: {
              showMaxLabel: true,
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '换手率'
                }
                return v.toFixed(0) + '%'
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData,
            splitNumber: 5,
            interval: (Math.max.apply(null, yData) + (Math.max.apply(null, yData) * 0.05)) / 5

          },
          series: [{
            type: 'scatter',
            itemStyle: {
              normal: {
                opacity: 0.7,
                // shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                // shadowColor: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(153,153,153,0.5)',
                borderWidth: 1,
                borderType: 'solid',
                color: function(params) {
                  const colorType = that.options.colorDefault
                  const bubbleColorData = that.$store.state.bubbles.ztgBubblesData.bubbleColor[(params.dataIndex)]
                  if (colorType === '' || bubbleColorData === null) {
                    return that.defaultColor
                  }
                  let tmpValue = 0
                  const colorArr = that.groupArr[colorType].color
                  const conditionArr = that.groupArr[colorType].condition

                  if (colorType === 'sw_indu_name') { // 行业
                    var len = (that.industryArr.indexOf(bubbleColorData)) % 7
                    return colorArr[len]
                  } else if (colorType === 'fcst_idx.rating_syn') { // 1=买入，2=增持，3=中性，4=减持，5=卖出
                    if (Number(bubbleColorData) === 5) {
                      return colorArr[0]
                    } else if (Number(bubbleColorData) === 4) {
                      return colorArr[1]
                    } else if (Number(bubbleColorData) === 3) {
                      return colorArr[2]
                    } else if (Number(bubbleColorData) === 2) {
                      return colorArr[3]
                    } else if (Number(bubbleColorData) === 1) {
                      return colorArr[4]
                    } else {
                      return '#2F323D'
                    }
                  } else if (colorType === 'mkt_idx.tcap' || colorType === 'mkt_idx.mktcap' || colorType === 'mkt_idx.volume' || colorType === 'perf_idx.avg_vol_3month' || colorType === 'mkt_idx.relaVolume' || colorType === 'mkt_idx.rela_volume') {
                    that.colorUnit = that.convertUnit(colorType)
                    tmpValue = bubbleColorData / that.colorUnit
                  } else {
                    var ratioArr = that.groupArr[colorType].ratio
                    tmpValue = bubbleColorData / ratioArr
                  }
                  if (colorType !== 'sw_indu_name' && colorType !== 'fcst_idx.rating_syn') {
                    let num
                    if (colorType === 'mkt_idx.rela_volume') {
                      num = Number(Math.abs((conditionArr[1] - conditionArr[2]) / 2).toFixed(1))
                    } else {
                      num = Math.abs((conditionArr[1] - conditionArr[2]) / 2)
                    }
                    if (tmpValue < (conditionArr[1] - num)) {
                      return colorArr[0]
                    } else if ((conditionArr[1] + num) > tmpValue && tmpValue >= (conditionArr[1] - num)) {
                      return colorArr[1]
                    } else if ((conditionArr[2] + num) > tmpValue && tmpValue >= (conditionArr[2] - num)) {
                      return colorArr[2]
                    } else if ((conditionArr[3] + num) > tmpValue && tmpValue >= (conditionArr[3] - num)) {
                      return colorArr[3]
                    } else if ((conditionArr[4] + num) > tmpValue && tmpValue >= (conditionArr[4] - num)) {
                      return colorArr[4]
                    } else if ((conditionArr[5] + num) > tmpValue && tmpValue >= (conditionArr[5] - num)) {
                      return colorArr[5]
                    } else if ((conditionArr[6] + num) > tmpValue && tmpValue >= (conditionArr[6] - num)) {
                      return colorArr[6]
                    } else if ((conditionArr[7] + num) > tmpValue && tmpValue >= (conditionArr[7] - num)) {
                      return colorArr[7]
                    } else if ((conditionArr[7] + num) < tmpValue) {
                      return colorArr[8]
                    }
                  }
                }
              }
            },
            data: sd,
            symbolSize: function(params, value) {
              const tmpSize = that.options.sizeDefault
              if (tmpSize === '') {
                return 32
              }
              var num = Number(that.$store.state.bubbles.ztgBubblesData.bubbleSize[(value.dataIndex)])
              if (tmpSize.indexOf('tcap') >= 0) {
                return 150 * (Math.sqrt(num / 1e11) - that.tcapMin) + 13 * (that.tcapMax - that.tcapMin)
              } else {
                num = num > 40 ? 40 : num
                return (num * 4).toFixed(2)
              }
            },
            hoverAnimation: true,
            legendHoverLink: true

          }]
        })
        that.chart.on('dblclick', function(params) {
          window.open('/stock/' + that.$store.state.bubbles.ztgBubblesData.innerCode[params.dataIndex] + '.shtml')
        })
        that.chart.on('mouseover', function(params) {
          clearTimeout(that.timeout)

          that.offsetX = params.event.offsetX + 20

          if ((params.event.offsetY + 247) > that.$refs.ztgBubbles.clientHeight) {
            that.offsetY = that.$refs.ztgBubbles.clientHeight - 247
          } else {
            that.offsetY = params.event.offsetY
          }
          that.zIndex = 999999
          that.dialogOptions.stockCode = that.$store.state.bubbles.ztgBubblesData.innerCode[params.dataIndex]
          that.$store.dispatch('stock/queryKline', {
            stockCode: that.dialogOptions.stockCode
          })
          that.dialogOptions.stockName = that.$store.state.bubbles.ztgBubblesData.name[params.dataIndex]
          that.dialogOptions.leftList.xData.value = Number(that.$store.state.bubbles.ztgBubblesData.xDefault[params.dataIndex]).toFixed(2)
          that.dialogOptions.leftList.yData.value = that.$store.state.bubbles.ztgBubblesData.yData[params.dataIndex] + '%'
          that.dialogOptions.leftList.bubbleSize.value = (Number(that.$store.state.bubbles.ztgBubblesData.bubbleSize[params.dataIndex]) / 100000000).toFixed(2) + '亿'
          that.dialogOptions.leftList.bubbleColor.value = that.$store.state.bubbles.ztgBubblesData.bubbleColor[params.dataIndex] === null ? '--' : Number(that.$store.state.bubbles.ztgBubblesData.bubbleColor[params.dataIndex]).toFixed(2) + '%'
          that.isOverBubbles = true
        })
        that.chart.on('mouseout', function(params) {

          that.timeout = setTimeout(function() {
            // alert('延时 is work')
            if (that.isOverBubbles && that.isOverDialog) {
              // that.zIndex = 999999
              return
            } else {
              that.isOverBubbles = false
              if (!that.isOverDialog) {
                that.zIndex = -999999
                that.dialogOptions.stockCode = ''
              }
            }

          }, 500)
          // that.zIndex = ''
          // that.isShowDialog = false
        })
        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('ztgChart').length !== 0 ? document.getElementsByClassName('ztgChart')[0].offsetHeight * 0.66 : ''
          that.chart && that.chart.resize({
            height: height
          })
          that.bubbleHeight = height
        }, false)

        this.chart.hideLoading()

      })

    },
    initZtgCompare() {
      this.$nextTick(() => {
        // DOM 更新了
        this.lineChart = echarts.init(this.$refs.ztgLine)
        this.lineChart.showLoading(config.loadingConfig);
      })

      this.$store.dispatch('bubbles/getZbgLine', {
        type: '0'
      }).then(() => {
        const that = this
        // 生成横坐标时间轴
        let beforenoon = this.autoTimeline('9:30', '11:30')
        let afternoon = this.autoTimeline('13:00', '15:00')
        beforenoon.splice(beforenoon.length - 1, 1)
        afternoon[0] = '11:30/13:00'
        let timeline = beforenoon.concat(afternoon)

        this.lineChart.setOption({
          title: {
            text: '封板未遂(炸板率)',
            textStyle: {
              fontSize: 12,
              fontWeight: 'normal',
              color: '#c9d0d7'
            },
            left: 60,
            top: 15
          },
          grid: {
            left: 65,
            top: 40,
            bottom: 30,
            right: 20
          },
          calculable: true,
          xAxis: [{
            type: 'category',
            axisLine: {
              lineStyle: {
                color: '#343741',
                type: 'solid'
              }
            },
            boundaryGap: false,
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 29,
              textStyle: {
                color: '#c9d0d7'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#343741'
              }
            },
            data: timeline
          }],
          yAxis: [{
            type: 'value',
            // scale: true,
            // min: datas === null ? '' : Number(datas.line) - Dvalue,
            // max: datas === null ? '' : Number(datas.line) + Dvalue,
            axisLabel: {
              formatter: function(val) {
                return val * 100 + '%'
              },
              textStyle: {
                color: '#c9d0d7'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#343741'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#343741',
                type: 'solid'
              }
            },
            axisTick: {
              show: false
            }
            // splitNumber: 4,
            // interval: 2 * Dvalue / 4
          }],
          series: [{
            name: '炸板率',
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#1984ea'
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
            data: this.$store.state.bubbles.zbgLine
          }],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              that.dataIndex = params[0].dataIndex
              if (that.$store.state.bubbles.zbgLine[params[0].dataIndex][1] === null) {
                return ''
              }
              let isNull = (v) => {
                if (v === null) {
                  return '--'
                }
                return (v * 100).toFixed(0) + '%'
              }
              var tooltipStr = '<p>炸板率 : ' + isNull(that.$store.state.bubbles.zbgLine[params[0].dataIndex][1]) + '</p>'

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7],
            axisPointer: {
              show: true,
              type: 'line',
              snap: true,
              label: {
                show: true
              }
            }

          }
        })

        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('ztgChart').length !== 0 ? document.getElementsByClassName('ztgChart')[0].offsetHeight * 0.33 : ''
          that.lineChart && that.lineChart.resize({
            height: height
          })
          that.lineChartHeight = height
        }, false)
        this.lineChart.hideLoading()
      })

    },
    toStockDetail(innerCode) {
      window.open('/stock/' + innerCode + '.shtml')
    },
    toThemeDetail(topicCode, target) {
      target.stopPropagation();
      if (topicCode) {
        if (String(topicCode).length === 9) {
          window.open(ctx + '/topic/' + topicCode)
        } else if (String(topicCode).length === 6) {
          window.open(ctx + '/industry/' + topicCode)
        }
      }
    },
    updateBubbles() {
      this.$store.dispatch('bubbles/getStockBubbles', {
        options: this.options
      }).then(() => {
        const that = this
        const xData = this.$store.state.bubbles.ztgBubblesData.xData
        const yData = this.$store.state.bubbles.ztgBubblesData.yData
        const xMaxData = Math.max.apply(null, xData)
        const xMinData = Math.min.apply(null, xData)
        let sd = [];
        this.$store.state.bubbles.ztgBubblesData.seriesData.forEach((value, index) => {
          let ps = ''
          let labelFun
          let num = this.$store.state.bubbles.ztgBubblesData.bubbleSize[index]
          if ((150 * (Math.sqrt(num / 1e11) - that.tcapMin) + 13 * (that.tcapMax - that.tcapMin)) < 30) {
            ps = 'bottom'
            labelFun = function(params) {
              return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)]
            }
          } else {
            ps = 'inside'
            if ((150 * (Math.sqrt(num / 1e11) - that.tcapMin) + 13 * (that.tcapMax - that.tcapMin)) < 60) {
              labelFun = function(params) {
                return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)].substring(0, 2) + '\n' + that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)].substring(2)

              }
            } else {
              labelFun = function(params) {
                return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)]
              }
            }

          }

          sd.push({
            label: {
              normal: {
                show: true,
                position: ps,
                color: '#fff',
                formatter: labelFun
              }
            },
            value: value
          })
        })

        this.chart && this.chart.setOption({
          xAxis: {
            max: xMaxData + (xMaxData * 0.05),
            min: xMinData - (xMaxData * 0.05),
            axisLabel: {
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().xAxis[0].max)) {
                  return 'ln(量比)'
                }
                return Number(v).toFixed(2)
                // return that.convertNumBySelect('xData', v)
              },
              textStyle: {
                color: '#c9d0d7'
              },
              margin: 10,
              interval: 0
            },
            data: xData,
            splitNumber: 5,
            interval: ((xMaxData + (xMaxData * 0.05)) - (xMinData - (xMaxData * 0.05))) / 5

          },
          yAxis: {
            max: Math.max.apply(null, yData) + (Math.max.apply(null, yData) * 0.05),
            axisLabel: {
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '换手率'
                }
                return v.toFixed(0) + '%'
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData,
            splitNumber: 5,
            interval: (Math.max.apply(null, yData) + (Math.max.apply(null, yData) * 0.05)) / 5

          },
          series: [{
            type: 'scatter',
            itemStyle: {
              normal: {
                opacity: 0.7,
                // shadowBlur: 5,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                // shadowColor: 'rgba(255,255,255,0.5)',
                borderColor: 'rgba(153,153,153,0.5)',
                borderWidth: 1,
                borderType: 'solid',
                color: function(params) {
                  const colorType = that.options.colorDefault
                  const bubbleColorData = that.$store.state.bubbles.ztgBubblesData.bubbleColor[(params.dataIndex)]
                  if (colorType === '' || bubbleColorData === null) {
                    return that.defaultColor
                  }
                  let tmpValue = 0
                  const colorArr = that.groupArr[colorType].color
                  const conditionArr = that.groupArr[colorType].condition

                  if (colorType === 'sw_indu_name') { // 行业
                    var len = (that.industryArr.indexOf(bubbleColorData)) % 7
                    return colorArr[len]
                  } else if (colorType === 'fcst_idx.rating_syn') { // 1=买入，2=增持，3=中性，4=减持，5=卖出
                    if (Number(bubbleColorData) === 5) {
                      return colorArr[0]
                    } else if (Number(bubbleColorData) === 4) {
                      return colorArr[1]
                    } else if (Number(bubbleColorData) === 3) {
                      return colorArr[2]
                    } else if (Number(bubbleColorData) === 2) {
                      return colorArr[3]
                    } else if (Number(bubbleColorData) === 1) {
                      return colorArr[4]
                    } else {
                      return '#2F323D'
                    }
                  } else if (colorType === 'mkt_idx.tcap' || colorType === 'mkt_idx.mktcap' || colorType === 'mkt_idx.volume' || colorType === 'perf_idx.avg_vol_3month' || colorType === 'mkt_idx.relaVolume' || colorType === 'mkt_idx.rela_volume') {
                    that.colorUnit = that.convertUnit(colorType)
                    tmpValue = bubbleColorData / that.colorUnit
                  } else {
                    var ratioArr = that.groupArr[colorType].ratio
                    tmpValue = bubbleColorData / ratioArr
                  }
                  if (colorType !== 'sw_indu_name' && colorType !== 'fcst_idx.rating_syn') {
                    let num
                    if (colorType === 'mkt_idx.rela_volume') {
                      num = Number(Math.abs((conditionArr[1] - conditionArr[2]) / 2).toFixed(1))
                    } else {
                      num = Math.abs((conditionArr[1] - conditionArr[2]) / 2)
                    }
                    if (tmpValue < (conditionArr[1] - num)) {
                      return colorArr[0]
                    } else if ((conditionArr[1] + num) > tmpValue && tmpValue >= (conditionArr[1] - num)) {
                      return colorArr[1]
                    } else if ((conditionArr[2] + num) > tmpValue && tmpValue >= (conditionArr[2] - num)) {
                      return colorArr[2]
                    } else if ((conditionArr[3] + num) > tmpValue && tmpValue >= (conditionArr[3] - num)) {
                      return colorArr[3]
                    } else if ((conditionArr[4] + num) > tmpValue && tmpValue >= (conditionArr[4] - num)) {
                      return colorArr[4]
                    } else if ((conditionArr[5] + num) > tmpValue && tmpValue >= (conditionArr[5] - num)) {
                      return colorArr[5]
                    } else if ((conditionArr[6] + num) > tmpValue && tmpValue >= (conditionArr[6] - num)) {
                      return colorArr[6]
                    } else if ((conditionArr[7] + num) > tmpValue && tmpValue >= (conditionArr[7] - num)) {
                      return colorArr[7]
                    } else if ((conditionArr[7] + num) < tmpValue) {
                      return colorArr[8]
                    }
                  }
                }
              }
            },
            data: sd,
            symbolSize: function(params, value) {
              const tmpSize = that.options.sizeDefault
              if (tmpSize === '') {
                return 32
              }
              var num = Number(that.$store.state.bubbles.ztgBubblesData.bubbleSize[(value.dataIndex)])
              if (tmpSize.indexOf('tcap') >= 0) {
                return 150 * (Math.sqrt(num / 1e11) - that.tcapMin) + 13 * (that.tcapMax - that.tcapMin)
              } else {
                num = num > 40 ? 40 : num
                return (num * 4).toFixed(2)
              }
            },
            hoverAnimation: true,
            legendHoverLink: true

          }]
        })
      })
    },
    updateCompare() {

      this.$store.dispatch('bubbles/getZbgLine', {
        type: '0'
      }).then(() => {
        const that = this

        this.lineChart && this.lineChart.setOption({
          series: [{
            name: '炸板率',
            showSymbol: false,
            itemStyle: {
              normal: {
                color: '#1984ea'
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
            data: this.$store.state.bubbles.zbgLine
          }],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              that.dataIndex = params[0].dataIndex
              if (that.$store.state.bubbles.zbgLine[params[0].dataIndex][1] === null) {
                return ''
              }
              let isNull = (v) => {
                if (v === null) {
                  return '--'
                }
                return (v * 100).toFixed(0) + '%'
              }
              var tooltipStr = '<p>炸板率 : ' + isNull(that.$store.state.bubbles.zbgLine[params[0].dataIndex][1]) + '</p>'

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })
      })

    },
    initStockList() {
      const that = this
      const datetime = new Date();
      const hour = datetime.getHours();
      const minute = datetime.getMinutes();
      if ((hour < 9 || hour === 9) && minute < 5) {
        let picd1 = setInterval(() => {
          that.$store.dispatch('bubbles/getBubblesLine', {
            type: 1,
            currentTime: ''
          }).then(() => {
            if (that.ztgList.length === 0) {
              picd1 && clearInterval(picd1)
              that.stockListTime = ''
              this.interval = setInterval(function() {
                that.updateBubbles()
                that.updateCompare()
                if (that.stockListTime) {
                  that.$store.dispatch('bubbles/getBubblesLine', {
                    type: 2,
                    currentTime: that.stockListTime
                  }).then(() => {
                    if (that.isTop) {
                      that.$refs.ztgListUl.scrollTop = 0
                    }
                  })
                } else {
                  that.$store.dispatch('bubbles/getBubblesLine', {
                    type: 2,
                    currentTime: ''
                  }).then(() => {})
                }

              }, Data.refreshTime)
            }
          })
        }, 1000);
      } else {
        this.interval = setInterval(function() {
          that.updateBubbles()
          that.updateCompare()
          if (that.stockListTime) {
            that.$store.dispatch('bubbles/getBubblesLine', {
              type: 2,
              currentTime: that.stockListTime
            }).then(() => {
              if (that.isTop) {
                that.$refs.ztgListUl.scrollTop = 0
              }
            })
          } else {
            that.$store.dispatch('bubbles/getBubblesLine', {
              type: 2,
              currentTime: ''
            }).then(() => {})
          }

        }, Data.refreshTime)
      }
    },
    zoomOver() {
      this.$refs.ztgLine.focus()
    },
    zoomData(event) {
      const that = this
      if (this.lineChart && event.keyCode === 37) {
        if (that.dataIndex !== 0) {
          that.dataIndex = that.dataIndex - 1
          this.lineChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0, // 第几条series
            dataIndex: that.dataIndex // 第几个tooltip
          });
        }
      } else if (this.lineChart && event.keyCode === 39) {
        if (that.dataIndex !== 240) {
          that.dataIndex = that.dataIndex + 1
          this.lineChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0, // 第几条series
            dataIndex: that.dataIndex // 第几个tooltip
          });
        }
      }
    }
  },
  mounted() {
    this.initStockList()
    this.initBubbles()
    this.initZtgCompare()
    this.$store.dispatch('bubbles/getBubblesLine', {
      type: 2,
      currentTime: this.stockListTime
    }).then(() => { /* this.$refs.ztgListUl.scrollTop = this.$refs.ztgListUl.scrollHeight */ })

  },
  destroyed() {
    this.$store.state.bubbles.stockListTime = ''
    this.$store.state.bubbles.ztgBubblesLine = []
    this.chart && this.chart.dispose();
    this.interval && clearInterval(this.interval)
  }

}
</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';

.con {}
.ztgBox {
    width: 100%;
    height: calc(100% - 44px);

    .ztgMain {
        width: 100%;
        height: 100%;

        .ztgChart {
            height: 100%;
            background: #232630;
            margin-right: 6px;
        }

        .ztgList {
            width: 464px;
            height: 100%;
            background: #232630;
        }

    }
}
.ztgList {

    ul {
        height: 100%;
        overflow: auto;

        li {
            padding: 10px 5px 10px 10px;
            color: #fff;
        }
        li:hover {
            background: #525A65;
            cursor: pointer;

            .topicStock {

                li {
                    background: #23272C;
                    border: 1px solid #23272C;
                }

            }
        }

        .topicStock {
            width: 100%;

            li {
                width: calc((100% - 12px) / 4);
                float: left;
                border: 1px solid #4A525C;
                margin-right: 3px;
                text-align: center;
                box-sizing: border-box;
                padding-bottom: 2px;
                padding-left: 5px;
                .name {
                    line-height: 20px;
                    color: #a6a6a6;
                }

                .price {
                    line-height: 16px;
                    font-size: 10px;
                }

            }

        }
    }

}
.siweiDialog {
    width: 470px;
    height: 247px;
    position: absolute;
}

.legend {
    right: 10px;
    position: absolute;
    bottom: 0;
    color: #fff;
    margin: 12px 0;
}

.legend ul li {
    float: left;
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
    border-right: 1px solid #000000;
    box-sizing: border-box;
    border-bottom: 1px solid #000;
}
.ztgLine {
    outline: none;
}
.markBox {
    display: inline-block;
    padding: 2px;
    color: #fff;
    margin-right: 4px;
    background-color: #ca4941;
}
</style>