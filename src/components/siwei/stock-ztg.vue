<template>
<div class="ztgBox">
  <div class="siweiDialog" :style="{left:offsetX+'px',top:offsetY+'px',zIndex:zIndex}">
    <Siweidialog :dialogOptions="dialogOptions" v-show="isOverBubbles || isOverDialog" @toShowDialog="setDialog" @toHideDialog="setDialog"></Siweidialog>
  </div>
  <div class="ztgMain clearfix">
    <div class="ztgChart">
      <div ref="ztgBubbles" :style="{height:bubbleHeight+'px'}"></div>
      <div ref="ztgLine" :style="{height:lineChartHeight+'px'}"></div>
    </div>
    <div class="ztgList">
      <ul ref="ztgListUl">
        <li v-for="item in ztgList" class="pb-20">
          <div class="mb-10">{{item.dateTime}}</div>
          <div style="margin-bottom: 8px;" class="clearfix">
            <div class="fl"><span class="mr-10">{{item.stockName}}</span><span>{{item.symbol}}</span>
            </div>
            <div class="fr"><span>{{item.price | isNull}}</span><span class="ml-20 mr-10" v-z3-updowncolor="item.chg">{{(Number(item.chg) > 0 ? '+' : '') + item.chg | isNull}}%</span>
            </div>
          </div>
          <ul class="topicStock clearfix">
            <li v-for="value in item.topics" :value="value.topicCode">
              <div class="name">{{value.topicName}}</div>
              <div class="price" v-z3-updowncolor="value.topicChngPct">{{(Number(value.topicChngPct) > 0 ? '+' : '') + value.topicChngPct}}%
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div class="legend"></div>
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
      bubbleHeight: (window.innerHeight - 29) * 0.66,
      lineChartHeight: (window.innerHeight - 29) * 0.33,
      isShowDialog: false,
      offsetX: '',
      offsetY: '',
      zIndex: '',
      isOverBubbles: false,
      isOverDialog: false,
      timeout: null
    }
  },
  components: {
    Siweidialog
  },
  computed: mapState({
    ztgList: state => state.bubbles.ztgBubblesLine
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
        this.zIndex = ''
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
      this.chart = echarts.init(this.$refs.ztgBubbles)
      this.chart.showLoading(config.loadingConfig);
      this.$store.dispatch('bubbles/getStockBubbles', {
        options: this.options
      }).then(() => {
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
            right: 20,
            bottom: 20
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
            max: Math.max.apply(null, xData),
            axisLabel: {
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().xAxis[0].max)) {
                  return '量比'
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
            data: xData

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
            max: Math.max.apply(null, yData).toFixed(2),
            axisLabel: {
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '换手率'
                }
                return v.toFixed(2) + '%'
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
        this.chart.on('dblclick', function(params) {
          window.open('/stock/' + that.$store.state.bubbles.ztgBubblesData.innerCode[params.dataIndex] + '.shtml')
        })
        that.chart.on('mouseover', function(params) {
          clearTimeout(that.timeout)
          if ((params.event.offsetX + 500) >= that.$refs.ztgBubbles.clientWidth) {
            that.offsetX = params.event.offsetX - 490
          } else {
            that.offsetX = params.event.offsetX + 20
          }

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
          that.dialogOptions.leftList.xData.value = that.$store.state.bubbles.ztgBubblesData.xData[params.dataIndex]
          that.dialogOptions.leftList.yData.value = that.$store.state.bubbles.ztgBubblesData.yData[params.dataIndex]
          that.dialogOptions.leftList.bubbleSize.value = that.$store.state.bubbles.ztgBubblesData.bubbleSize[params.dataIndex]
          that.dialogOptions.leftList.bubbleColor.value = that.$store.state.bubbles.ztgBubblesData.bubbleColor[params.dataIndex]
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

        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('ztgChart')[0].offsetHeight * 0.66
          that.chart.resize({
            height: height
          })
          that.bubbleHeight = height
        }, false)

        this.chart.hideLoading()

      })

    },
    initZtgCompare() {
      this.lineChart = echarts.init(this.$refs.ztgLine)
      this.lineChart.showLoading(config.loadingConfig);
      this.$store.dispatch('bubbles/getZdCompare').then(() => {
        const that = this
        // 生成横坐标时间轴
        let beforenoon = this.autoTimeline('9:30', '11:30')
        let afternoon = this.autoTimeline('13:00', '15:00')
        beforenoon.splice(beforenoon.length - 1, 1)
        afternoon[0] = '11:30/13:00'
        let timeline = beforenoon.concat(afternoon)
        let zdCompareData = this.$store.state.bubbles.ztgCompare
        console.log(zdCompareData)

        this.lineChart.setOption({
          title: {
            text: '涨跌停对比',
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
                return val.toFixed(0)
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
              name: '涨停',
              showSymbol: false,
              itemStyle: {
                normal: {
                  color: '#ca4941'
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
              data: zdCompareData.up
            },
            {
              name: '非一字涨停',
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
              showSymbol: false,
              data: zdCompareData.openUp

            },
            {
              name: '跌停',
              itemStyle: {
                normal: {
                  color: '#56a870'
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
              data: zdCompareData.down

            },
            {
              name: '非一字跌停',
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
              showSymbol: false,
              data: zdCompareData.openDown

            }
          ],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              var tooltipStr =
                '<p style="color:#ca4941;">涨停 : ' + zdCompareData.up[params[0].dataIndex] + '</p>' +
                '<p>非一字涨停 : ' + zdCompareData.openUp[params[0].dataIndex] + '</p>' +
                '<p style="color:#56a870;">跌停 : ' + zdCompareData.down[params[0].dataIndex] + '</p>' +
                '<p>非一字跌停 : ' + zdCompareData.openDown[params[0].dataIndex] + '</p>';

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })

        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('ztgChart')[0].offsetHeight * 0.33
          that.lineChart.resize({
            height: height
          })
          that.lineChartHeight = height
        }, false)
        this.lineChart.hideLoading()
      })

    }
  },
  mounted() {
    // const that = this
    this.initBubbles()
    this.initZtgCompare()
    let date = new Date()
    let currentTime = date.getFullYear() + '' + (String(date.getMonth() + 1).length === 1 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '' + (String(date.getDate()).length === 1 ? '0' + date.getDate() : date.getDate())
    this.$store.dispatch('bubbles/getBubblesLine', {
      type: 1,
      currentTime: currentTime
    }).then(() => { /* this.$refs.ztgListUl.scrollTop = this.$refs.ztgListUl.scrollHeight */ })
    /* setInterval(function() {
     console.log(1)
     that.$store.dispatch('bubbles/getBubblesLine', { type: 1 }).then(() => {
     that.$refs.ztgListUl.scrollTop = that.$refs.ztgListUl.scrollHeight
     })
     }, Data.refreshTime) */
  },
  destroyed() {
    this.chart.dispose();
  }

}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../assets/css/base.css';

.ztgBox {
    width: 100%;
    height: 100%;

    .ztgMain {
        width: 100%;
        height: 100%;

        .ztgChart {
            float: left;
            width: calc(75% - 6px);
            height: 100%;
            background: #232630;
        }

        .ztgList {
            float: right;
            width: 25%;
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

                .name {
                    line-height: 20px;
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
</style>