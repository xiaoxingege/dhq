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

    export default{
      data () {
        return {
          industryArr: ['采掘', '传媒', '电气设备', '电子', '房地产', '纺织服装', '非银金融', '钢铁', '公用事业', '国防军工', '化工', '建筑材料', '建筑装饰', '交通运输', '家用电器', '计算机', '机械设备', '农林牧渔', '汽车', '轻工制造', '商业贸易', '食品饮料', '通信', '休闲服务', '银行', '医药生物', '有色金属', '综合'],
          defaultColor: '#2F323D',
          rgColor: ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'],
          quoteChange: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
          colorUnit: 10000
        }
      },
      components: {

      },
      watch: {

      },
      computed: {

      },
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
        initBubbles () {
          this.chart = echarts.init(this.$refs.bubbles)
          this.$store.dispatch('bubbles/getBubblesData', {}).then(() => {
            const that = this
            this.chart.setOption({
              backgroundColor: '#23252D',
              grid: {
                top: 40,
                left: 90,
                right: 50,
                bottom: 50
              },
              xAxis: {
                type: 'category',
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

                  textStyle: {
                    color: '#fff'
                  },

                  interval: 0,
                  rotate: 40
                },
                data: this.industryArr

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
                  }

                },
                data: this.$store.state.bubbles.bubblesData.yData

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
                name: '北京',
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
                      var typeInfo = 'perf_idx.chng_pct_month'
                      if (typeInfo === '' || that.$store.state.bubbles.bubblesData.bubbleColor === null) {
                        return that.defaultColor
                      }

                      var tmpColor = that.$store.state.bubbles.bubblesData.bubbleColor[(params.dataIndex)]
                      var colorArr = that.rgColor
                      var conditionArr = that.quoteChange
                      var tmpValue = 0
                      if (typeInfo === 'sw_indu_name') {
                              // 行业
                        var len = (that.industryArr.indexOf(tmpColor)) % 7
                        return colorArr[len]
                      } else if (typeInfo === 'fcst_idx.rating_syn') { // 1=买入，2=增持，3=中性，4=减持，5=卖出
                        if (tmpColor === 5) {
                          return colorArr[0]
                        } else if (tmpColor === 4) {
                          return colorArr[1]
                        } else if (tmpColor === 3) {
                          return colorArr[2]
                        } else if (tmpColor === 2) {
                          return colorArr[3]
                        } else if (tmpColor === 1) {
                          return colorArr[4]
                        } else {
                          return '#2F323D'
                        }
                      } else if (typeInfo === 'mkt_idx.tcap' || typeInfo === 'mkt_idx.mktcap' || typeInfo === 'mkt_idx.volume' || typeInfo === 'perf_idx.avg_vol_3month' || typeInfo === 'mkt_idx.relaVolume' || typeInfo === 'mkt_idx.rela_volume') {
                        that.colorUnit = that.convertUnit(typeInfo)
                        tmpValue = tmpColor / that.colorUnit
                      } else {
                        var ratioArr = 3
                        tmpValue = tmpColor / ratioArr
                      }
                      if (typeInfo !== 'sw_indu_name' && typeInfo !== 'fcst_idx.rating_syn') {
                        if (typeInfo === 'mkt_idx.rela_volume') {
                          var num = Number(Math.abs((conditionArr[1] - conditionArr[2]) / 2).toFixed(1))
                        } else {
                          var num = Math.abs((conditionArr[1] - conditionArr[2]) / 2)
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
                  var tmpSize = 'mkt_idx.mktcap'
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
        }
    
      },
      mounted () {
        this.initBubbles()
      }
}
</script>
