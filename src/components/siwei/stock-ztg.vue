
<template>
<div class="ztgBox">
  <div class="ztgMain">
    <div class="ztgChart">
      涨停股
      <div ref="ztgBubbles"></div>
      <div ref="ztgLine"></div>
    </div>
    <div class="ztgList"></div>
  </div>
  <div class="legend"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import Siweidialog from 'components/siwei-dialog'
import config from '../../z3tougu/config'
import * as Data from '../../z3tougu/constant/siwei.js'

export default {
  data() {
    return {
      options: {
        xDefault: 'mkt_idx.volume_ratio',
        yDefault: 'mkt_idx.exchr',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'perf_idx.chng_pct_month',
        type: 1
      },
      defaultColor: '#2F323D',
      groupArr: Data.groupArr

    }
  },
  components: {
    Siweidialog
  },
  methods: {
    initZtgBubbles() {
      this.chart = echarts.init(this.$refs.ztgBubbles)
      this.chart.showLoading(config.loadingConfig);
      this.$store.dispatch('bubbles/getStockBubbles', {
        options: this.options
      }).then(() => {
        console.log(this.$store.state.bubbles.ztgBubblesData)
        const that = this

        const xData = this.$store.state.bubbles.ztgBubblesData.xData

        const yData = this.$store.state.bubbles.ztgBubblesData.yData

        let sd = [];
        this.$store.state.bubbles.ztgBubblesData.seriesData.forEach((value, index) => {
          let ps = ''
          let labelFun
          let num = this.$store.state.bubbles.ztgBubblesData.bubbleSize[index]
          if (Number((Math.sqrt(num / 1e11) * 40).toFixed(2)) < Number((Math.sqrt(79858278508 / 1e11) * 40).toFixed(2))) {
            ps = 'bottom'
            labelFun = function(params) {
              return that.$store.state.bubbles.ztgBubblesData.name[(params.dataIndex)]
            }
          } else {
            ps = 'inside'
            if (Number((Math.sqrt(num / 1e11) * 40).toFixed(2)) < Number((Math.sqrt(782000000 / 1e11) * 40).toFixed(2))) {
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
          backgroundColor: '#23252D',
          animation: false,
          grid: {
            top: 40,
            left: 90,
            right: 50,
            bottom: 50
          },
          tooltip: {
            triggerOn: 'none',
            formatter: function(params) {
              // return '<p style="background: red; width:200px; height:200px">hello</p>'
            }
          },
          xAxis: {
            type: 'value',
            // name: '日期',
            nameGap: 16,
            nameTextStyle: {
              color: '#fff',
              fontSize: 14
            },
            // max: 31,
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#32343D'
              }
            },
            axisLine: {
              lineStyle: {
                color: '#32343D'
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: function(v) {
                // return that.convertNumBySelect('xData', v)
              },
              textStyle: {
                color: '#fff'
              },
              margin: 20,
              interval: 0
            },
            data: xData

          },
          yAxis: {
            type: 'value',
            // name: 'AQI指数',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
              color: '#fff',
              fontSize: 16
            },
            axisLine: {
              lineStyle: {
                color: '#32343D'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#32343D'
              }
            },
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              formatter: function(v) {
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData

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
                return (Math.sqrt(num / 1e11) * 40).toFixed(2)
              } else if (tmpSize === 'mkt_idx.volume') {
                return (Math.sqrt(num / 1e7) * 20).toFixed(2)
              } else if (tmpSize === 'perf_idx.avg_vol_3month') {
                return (Math.sqrt(num / 1e7) * 20).toFixed(2)
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
          window.open('/stock/' + that.bubblesData.innerCode[params.dataIndex] + '.shtml')
        })
        that.chart.on('mouseover', function(params) {
          clearTimeout(that.timeout)
          if ((params.event.offsetX + 500) >= that.$refs.bubbles.clientWidth) {
            that.offsetX = params.event.offsetX - 255
          } else {
            that.offsetX = params.event.offsetX + 225
          }

          if ((params.event.offsetY + 247) > that.$refs.bubbles.clientHeight) {
            that.offsetY = that.$refs.bubbles.clientHeight - 247
          } else {
            that.offsetY = params.event.offsetY
          }
          that.zIndex = 999999
          that.dialogOptions.stockCode = that.$store.state.bubbles.bubblesData.innerCode[params.dataIndex]
          that.$store.dispatch('stock/queryKline', {
            stockCode: that.dialogOptions.stockCode
          })
          that.dialogOptions.stockName = that.$store.state.bubbles.bubblesData.name[params.dataIndex]
          that.dialogOptions.leftList.xData.value = that.convertNumBySelect('xData', that.$store.state.bubbles.bubblesData.xData[params.dataIndex])
          that.dialogOptions.leftList.yData.value = that.convertNumBySelect('yData', that.$store.state.bubbles.bubblesData.yData[params.dataIndex])
          that.dialogOptions.leftList.bubbleSize.value = that.convertNumBySelect('bubblesSize', that.$store.state.bubbles.bubblesData.bubbleSize[params.dataIndex])
          that.dialogOptions.leftList.bubbleColor.value = that.convertNumBySelect('bubbleColor', that.$store.state.bubbles.bubblesData.bubbleColor[params.dataIndex])
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
                that.zIndex = ''
              }
            }

          }, 500)
          // that.zIndex = ''
          // that.isShowDialog = false
        })
        that.chart.on('dataZoom', function(params) {
          that.$emit('getXYRange', [
            [that.convertNumForZoom('xData', that.chart.getOption().dataZoom[1].startValue), that.convertNumForZoom('xData', that.chart.getOption().dataZoom[1].endValue)],
            [that.convertNumForZoom('yData', that.chart.getOption().dataZoom[0].startValue), that.convertNumForZoom('yData', that.chart.getOption().dataZoom[0].endValue)]
          ])
        })
        window.onresize = function() {
          that.chart.resize({
            height: window.innerHeight < 710 ? 710 - 85 : window.innerHeight - 82
          })
          that.height = window.innerHeight < 710 ? 710 - 85 : window.innerHeight - 82
        }

        this.chart.hideLoading()

      })

    }

  },
  mounted() {
    this.initZtgBubbles()
  }

}
</script>