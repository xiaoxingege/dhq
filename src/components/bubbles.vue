<style>
    .bubblesChart{
        width:1280px;
        height:768px;
    }

</style>
<template>
    <div class="bubbles">
        <div></div>
        <div class="bubblesChart" ref="bubbles"></div>
    </div>
</template>
<script>
    import echarts from 'echarts'
    import * as Data from '../z3tougu/constant/siwei.js'
    import { mapState } from 'vuex'

    export default{
      props: ['options'],
      data () {
        return {
          colorUnit: 10000,
          defaultColor: '#2F323D',
          industryArr: Data.industryArr,
          rgColor: Data.chgColor,
          quoteChange: Data.quoteChange,
          groupArr: Data.groupArr,
          xSelectData: Data.xSelectData
        }
      },
      components: {

      },
      watch: {
        'options': {
          deep: true,
          handler: function () {
            this.updateBubbles()
          }
        }},
      computed: mapState({
        bubblesData: state => state.bubbles.bubblesData,
        parameterData: state => state.bubbles.parameterData,
        xAxis: function (state) {
          const that = this
          let x
          if (state.bubbles.parameterData.xData === 'sw_indu_name') {
            x = that.industryArr
          } else if (state.bubbles.parameterData.xData === 'chi_spel') {
            x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
          } else {
            x = state.bubbles.bubblesData.xData
          }
          const type = !!(state.bubbles.parameterData.xData === 'sw_indu_name' || state.bubbles.parameterData.xData === 'chi_spel')
          return {
            type: type ? 'category' : 'value',
            axisLabel: {
              formatter: function (v) {
                return that.convertNumBySelect('xData', v)
              },
              textStyle: {
                color: '#fff'
              },
              interval: 0,
              rotate: (type ? 'category' : 'value') === 'category' ? 40 : 0
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#32343D'
              }
            },
            data: x
          }
        },
        yAxis: function (state) {
          const that = this
          let y
          if (state.bubbles.parameterData.yData === 'sw_indu_name') {
            y = this.industryArr
          } else if (state.bubbles.parameterData.yData === 'chi_spel') {
            y = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
          } else {
            y = state.bubbles.bubblesData.yData
          }
          const type = !!(state.bubbles.parameterData.yData === 'sw_indu_name' || state.bubbles.parameterData.yData === 'chi_spel')
          return {
            type: type ? 'category' : 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              },
              formatter: function (v) {
                return that.convertNumBySelect('yData', v)
              }
            },
            splitLine: {
              lineStyle: {
                type: 'solid',
                color: '#32343D'
              }
            },
            data: y
          }
        }
      }),
      methods: {
        convertUnit (selectName) {
          if (selectName === 'mkt_idx.volume' || selectName === 'perf_idx.avg_vol_3month' || selectName === 'fin_idx.tot_revenue' || selectName === 'fin_idx.sale') {
            return 10000
          } else if (selectName === 'mkt_idx.tcap' || selectName === 'mkt_idx.mktcap') {
            return 10000 * 10000
          } else {
            return 1
          }
        },
        convertNumBySelect (select, showData) {
          if (isNaN(Number(showData))) {
            return showData
          } else {
            var tmpSelect = this.xSelectData[this.parameterData[select]]
            if ((tmpSelect.indexOf('率') >= 0 && tmpSelect.indexOf('市盈率') < 0) || tmpSelect.indexOf('幅') >= 0 || tmpSelect.indexOf('最') >= 0 || tmpSelect.indexOf('目标价格') >= 0 || tmpSelect.indexOf('持股') >= 0) {
              return Number(showData).toFixed(2) + '%'
            } else {
              var selectVal = this.parameterData[select]
              if (selectVal === 'fcst_idx.rating_syn') {
                if (showData === 5) {
                  return '卖出'
                } else if (showData === 4) {
                  return '减持'
                } else if (showData === 3) {
                  return '中性'
                } else if (showData === 2) {
                  return '增持'
                } else if (showData === 1) {
                  return '买入'
                } else {
                  return '暂无观点'
                }
              } else if (selectVal === 'fin_idx.tot_revenue' || selectVal === 'fin_idx.sale' || selectVal === 'mkt_idx.tcap' || selectVal === 'mkt_idx.mktcap') {
                return (Number(showData) / 100000000).toFixed(2) + '亿'
              } else if (selectVal === 'mkt_idx.volume' || selectVal === 'perf_idx.avg_vol_3month') {
                return (Number(showData) / 10000).toFixed(0) + '万'
              } else if (selectVal === 'order' || selectVal === 'staff_num') {
                return Number(showData).toFixed(0)
              } else {
                return Number(showData).toFixed(2)
              }
            }
          }
        },
        initBubbles () {
          this.chart = echarts.init(this.$refs.bubbles)
          this.$store.dispatch('bubbles/getBubblesData', { options: this.options }).then(() => {
            const that = this
            const xData = this.$store.state.bubbles.parameterData.xData
            const yData = this.$store.state.bubbles.parameterData.yData
            const xType = !!(xData === 'sw_indu_name' || xData === 'chi_spel')
            const yType = !!(yData === 'sw_indu_name' || yData === 'chi_spel')
            let x
            if (that.parameterData.xData === 'sw_indu_name') {
              x = that.industryArr
            } else if (that.parameterData.xData === 'chi_spel') {
              x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            } else {
              x = that.bubblesData.xData
            }
            let y
            if (that.parameterData.yData === 'sw_indu_name') {
              y = that.industryArr
            } else if (that.parameterData.yData === 'chi_spel') {
              y = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            } else {
              y = that.bubblesData.yData
            }
            this.chart.setOption({
              backgroundColor: '#23252D',
              grid: {
                top: 40,
                left: 90,
                right: 50,
                bottom: 50
              },
              xAxis: {
                type: xType ? 'category' : 'value',
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
                  formatter: function (v) {
                    return that.convertNumBySelect('xData', v)
                  },
                  textStyle: {
                    color: '#fff'
                  },

                  interval: 0,
                  rotate: (xType ? 'category' : 'value') === 'category' ? 40 : 0
                },
                data: x

              },
              yAxis: {
                type: yType ? 'category' : 'value',
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
                  formatter: function (v) {
                    return that.convertNumBySelect('yData', v)
                  }

                },
                data: y

              },
              dataZoom: [
                {
                  type: 'slider',
                  show: true,
                  yAxisIndex: [0],
                  top: 40,
                  right: 20,
                  bottom: 0,
                  start: 0,
                  end: 100,
                  textStyle: {
                    color: '#aed2ff'
                  },
                  borderColor: '#3c4868',
                  width: '6',
                  height: '90%',
                  handleIcon: 'M0,0 v9.7h5 v-9.7h-5 Z',
                  handleSize: '300%',
                  dataBackground: {
                    areaStyle: {
                      color: '#222445'
                    },
                    lineStyle: {
                      opacity: 0.8,
                      color: '#222445'
                    }
                  },
                  handleStyle: {
                    color: '#aed2ff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                  },
                  showDetail: false,
                  realtime: false
                },
                {
                  type: 'slider',
                  show: true,
                  xAxisIndex: [0],
                  top: 10,
                        // right:80,
                  left: 40,
                  start: 0,
                  end: 100,
                  textStyle: {
                    color: '#aed2ff'
                  },
                  borderColor: '#3c4868',
                  width: '92%',
                  height: '6',
                  handleIcon: 'M0,0 v9.7h5 v-9.7h-5 Z',
                  handleSize: '300%',
                  dataBackground: {
                    areaStyle: {
                      color: '#222445'
                    },
                    lineStyle: {
                      opacity: 0.8,
                      color: '#222445'
                    }
                  },
                  handleStyle: {
                    color: '#aed2ff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                  },
                  showDetail: false,
                  realtime: false
                }
              ],
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
                    color: function (params) {
                      let tmpValue = 0
                      const colorType = that.$store.state.bubbles.parameterData.bubbleColor
                      const bubbleColorData = that.$store.state.bubbles.bubblesData.bubbleColor[(params.dataIndex)]
                      const colorArr = that.groupArr[colorType].color
                      const conditionArr = that.groupArr[colorType].condition
                      if (colorType === '' || bubbleColorData === null) {
                        return that.defaultColor
                      }

                      if (colorType === 'sw_indu_name') { // 行业
                        var len = (that.industryArr.indexOf(bubbleColorData)) % 7
                        return colorArr[len]
                      } else if (colorType === 'fcst_idx.rating_syn') { // 1=买入，2=增持，3=中性，4=减持，5=卖出
                        if (bubbleColorData === 5) {
                          return colorArr[0]
                        } else if (bubbleColorData === 4) {
                          return colorArr[1]
                        } else if (bubbleColorData === 3) {
                          return colorArr[2]
                        } else if (bubbleColorData === 2) {
                          return colorArr[3]
                        } else if (bubbleColorData === 1) {
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
                data: this.$store.state.bubbles.bubblesData.seriesData,
                symbolSize: function (params, value) {
                  const tmpSize = that.$store.state.bubbles.parameterData.bubblesSize
                  if (tmpSize === '') {
                    return 32
                  }
                  var num = Number(that.$store.state.bubbles.bubblesData.bubbleSize[(value.dataIndex)])
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
            this.chart.hideLoading()
          })
          this.chart.showLoading()
        },
        updateBubbles () {
          this.$store.dispatch('bubbles/getBubblesData', { options: this.options }).then(() => {
            this.chart && this.chart.setOption({ xAxis: this.xAxis, yAxis: this.yAxis, series: [{ data: this.bubblesData.seriesData }] })
          })
        }

      },
      mounted () {
        this.initBubbles()
      }
}
</script>
