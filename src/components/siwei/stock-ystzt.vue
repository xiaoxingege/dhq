<template>
<div class="ztgBox">
  <div class="siweiDialog" :style="{left:offsetX+'px',top:offsetY+'px',zIndex:zIndex}">
    <Siweidialog :dialogOptions="dialogOptions" v-show="isOverBubbles || isOverDialog" @toShowDialog="setDialog" @toHideDialog="setDialog"></Siweidialog>
  </div>
  <div class="ztgMain display-box">
    <div class="ztgChart box-flex-1">
      <div ref="ztgBubbles" :style="{height:bubbleHeight+'px'}"></div>
      <div class="clearfix" :style="{height:lineChartHeight+'px'}">
        <div class="fl zrLchart" ref="zrLchart" style="height:100%;width:50%"></div>
        <div class="fr zrRchart" ref="zrRchart" style="height:100%;width:50%"></div>
      </div>
    </div>
    <div class="qsgList">
      <div class="qsgListTitle clearfix">
        <a><span>序号</span></a>
        <a v-for="(item,index) in newListTitle">
          <span @click="sortList(item.type,index,$event)">{{item.name}}</span>
          <img v-show="item.showImg" src="../../assets/images/z3img/siwei-xia.png">
          <img v-show="item.showBImg" src="../../assets/images/z3img/siwei-shang.png">
        </a>
      </div>
      <ul ref="newListUl">
        <li v-for="(item,index) in newStockList" class="clearfix" @dblclick="toStockDetail(item.symbol)">
          <span>{{index+1}}</span>
          <span>{{item.name | isNull}}</span>
          <span>{{item.symbol.substring(0,6) | isNull}}</span>
          <span v-z3-updowncolor="item.chg">{{item.price === null?'--':Number(item.price).toFixed(2)}}</span>
          <span v-z3-updowncolor="item.chg">{{item.chg === null?'--':Number(item.chg).toFixed(2)+'%' | chng}}</span>
          <span :style="{color:(item.open === true ? '#56a870':'#ca4941')}">{{item.open === true ? '是':'否'}}</span>
          <span v-z3-updowncolor="item.limitNum">{{item.limitNum | isNull}}</span>
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
        yDefault: 'up_limit_last_day_data.cont_up_limit_days_num',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'mkt_idx.cur_chng_pct',
        type: 7
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
      timeout: null,
      interval: null,
      newListTitle: [{
          name: '简称',
          type: 'name',
          showImg: false,
          showBImg: false
        },
        {
          name: '代码',
          type: 'innerCode',
          showImg: false,
          showBImg: false
        },
        {
          name: '最新价',
          type: 'price',
          showImg: false,
          showBImg: false
        },
        {
          name: '涨跌幅',
          type: 'chg',
          showImg: false,
          showBImg: false
        },
        {
          name: '昨日板否',
          type: 'ysdisKb',
          showImg: false,
          showBImg: false
        },
        {
          name: '连板数',
          type: 'ystlbNum',
          showImg: false,
          showBImg: false
        }
      ]
    }
  },
  components: {
    Siweidialog
  },
  computed: mapState({
    newStockList: state => state.bubbles.newStockList
  }),
  methods: {
    dealNumFormat(v) {
      if (v === null || v === undefined) {
        return '--'
      }
      return (Number(v) * 100).toFixed(2) + '%'
    },
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
      this.chart = echarts.getInstanceByDom(this.$refs.ztgBubbles) || echarts.init(this.$refs.ztgBubbles)
      this.chart.showLoading(config.loadingConfig);
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
            right: 40,
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
              showMinLabel: true,
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
              interval: ((xMaxData + (xMaxData * 0.05)) - (xMinData - (xMaxData * 0.05))) / 5
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
            max: Math.max.apply(null, yData) + 5,
            axisLabel: {
              showMaxLabel: true,
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '昨日连' + '\n' + '板数'
                }
                return Number(v).toFixed(0)
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData,
            splitNumber: 5,
            interval: (Math.max.apply(null, yData) + 5) / 5

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
              const tcapMax = Math.sqrt(1.650026740738E12 / 1e11)
              const tcapMin = Math.sqrt(9.722757458E9 / 1e11)
              const tmpSize = that.options.sizeDefault
              if (tmpSize === '') {
                return 32
              }
              var num = Number(that.$store.state.bubbles.ztgBubblesData.bubbleSize[(value.dataIndex)])
              if (tmpSize.indexOf('tcap') >= 0) {
                return 150 * (Math.sqrt(num / 1e11) - tcapMin) + 13 * (tcapMax - tcapMin)
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
          that.dialogOptions.leftList.xData.value = Number(that.$store.state.bubbles.ztgBubblesData.xDefault[params.dataIndex]).toFixed(2)
          that.dialogOptions.leftList.yData.value = that.$store.state.bubbles.ztgBubblesData.yData[params.dataIndex]
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
                that.zIndex = ''
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
      const that = this
      this.lineChart = echarts.getInstanceByDom(this.$refs.zrLchart) || echarts.init(this.$refs.zrLchart)
      this.lxztChart = echarts.getInstanceByDom(this.$refs.zrRchart) || echarts.init(this.$refs.zrRchart)

      this.lineChart.showLoading(config.loadingConfig);
      this.lxztChart.showLoading(config.loadingConfig);

      // 生成横坐标时间轴
      let beforenoon = this.autoTimeline('9:30', '11:30')
      let afternoon = this.autoTimeline('13:00', '15:00')
      beforenoon.splice(beforenoon.length - 1, 1)
      afternoon[0] = '11:30/13:00'
      let timeline = beforenoon.concat(afternoon)

      this.$store.dispatch('bubbles/getCxLine', {
        type: 1
      }).then(() => {
        let cxLineData = this.$store.state.bubbles.cxLineData

        this.lineChart.setOption({
          title: {
            text: '昨日涨停今日平均涨幅',
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
              interval: 59,
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
              name: '昨日涨停今日平均涨幅',
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
              data: cxLineData.condition
            },
            {
              name: '上证指数',
              itemStyle: {
                normal: {
                  color: '#f0b540'
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
              data: cxLineData.szIndex

            }
          ],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              var tooltipStr =
                '<p>昨日涨停今日平均涨幅 : ' + that.dealNumFormat(cxLineData.condition[params[0].dataIndex]) + '</p>' +
                '<p style="color:#f0b540">上证指数 : ' + that.dealNumFormat(cxLineData.szIndex[params[0].dataIndex]) + '</p>';
              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })

        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('zrLchart').length !== 0 ? document.getElementsByClassName('ztgChart')[0].offsetHeight * 0.33 : ''
          that.lineChart && that.lineChart.resize({
            height: height
          })
          that.lineChartHeight = height
        }, false)
        this.lineChart.hideLoading()
      })
      this.$store.dispatch('bubbles/getYstLine', {
        type: 1
      }).then(() => {
        let lxztData = this.$store.state.bubbles.ystLineData

        this.lxztChart.setOption({
          title: {
            text: '今日连续涨停占比',
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
              interval: 59,
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
            name: '今日连续涨停占比',
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
            data: lxztData
          }],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              var tooltipStr =
                '<p>今日连续涨停占比 : ' + that.dealNumFormat(lxztData[params[0].dataIndex]) + '</p>'

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })

        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('zrRchart').length !== 0 ? document.getElementsByClassName('ztgChart')[0].offsetHeight * 0.33 : ''
          that.lxztChart && that.lxztChart.resize({
            height: height
          })
          that.lineChartHeight = height
        }, false)
        this.lxztChart.hideLoading()

      })

    },
    toStockDetail(innerCode) {
      window.open('/stock/' + innerCode + '.shtml')
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

        this.chart && this.chart.setOption({
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
              showMinLabel: true,
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
              interval: ((xMaxData + (xMaxData * 0.05)) - (xMinData - (xMaxData * 0.05))) / 5
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
            max: Math.max.apply(null, yData) + 5,
            axisLabel: {
              showMaxLabel: true,
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '昨日连' + '\n' + '板数'
                }
                return Number(v).toFixed(0)
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData,
            splitNumber: 5,
            interval: (Math.max.apply(null, yData) + 5) / 5

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
              const tcapMax = Math.sqrt(1.650026740738E12 / 1e11)
              const tcapMin = Math.sqrt(9.722757458E9 / 1e11)
              const tmpSize = that.options.sizeDefault
              if (tmpSize === '') {
                return 32
              }
              var num = Number(that.$store.state.bubbles.ztgBubblesData.bubbleSize[(value.dataIndex)])
              if (tmpSize.indexOf('tcap') >= 0) {
                return 150 * (Math.sqrt(num / 1e11) - tcapMin) + 13 * (tcapMax - tcapMin)
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
      this.$store.dispatch('bubbles/getCxLine', {
        type: 1
      }).then(() => {
        const that = this
        let cxLineData = this.$store.state.bubbles.cxLineData

        this.lineChart && this.lineChart.setOption({
          series: [{
              name: '昨日涨停今日平均涨幅',
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
              data: cxLineData.condition
            },
            {
              name: '上证指数',
              itemStyle: {
                normal: {
                  color: '#f0b540'
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
              data: cxLineData.szIndex

            }
          ],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              var tooltipStr =
                '<p>昨日涨停今日平均涨幅 : ' + that.dealNumFormat(cxLineData.condition[params[0].dataIndex]) + '</p>' +
                '<p style="color:#f0b540">上证指数 : ' + that.dealNumFormat(cxLineData.szIndex[params[0].dataIndex]) + '</p>';

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })
      })
      this.$store.dispatch('bubbles/getYstLine', {
        type: 1
      }).then(() => {
        const that = this
        let lxztData = this.$store.state.bubbles.ystLineData

        this.lxztChart && this.lxztChart.setOption({
          series: [{
            name: '今日连续涨停占比',
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
            data: lxztData
          }],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              var tooltipStr =
                '<p>今日连续涨停占比 : ' + that.dealNumFormat(lxztData[params[0].dataIndex]) + '</p>'

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })
      })
    },
    sortList(type, indexNum) {
      if (this.newListTitle[indexNum].showImg || this.newListTitle[indexNum].showBImg) {
        this.newListTitle[indexNum].showImg = !this.newListTitle[indexNum].showImg
        this.newListTitle[indexNum].showBImg = !this.newListTitle[indexNum].showBImg
        if (this.newListTitle[indexNum].showBImg) {
          this.$store.dispatch('bubbles/sortNewStockList', {
            type: type,
            sortType: 'desc'
          })
        } else {
          this.$store.dispatch('bubbles/sortNewStockList', {
            type: type
          })
        }
      } else if (!this.newListTitle[indexNum].showImg && !this.newListTitle[indexNum].showBImg) {
        this.newListTitle.forEach(function(item, index) {
          if (indexNum === index) {
            item.showImg = true
          } else {
            item.showImg = false
            item.showBImg = false
          }
        })
        this.$store.dispatch('bubbles/sortNewStockList', {
          type: type
        })
      }
    }
  },
  mounted() {
    const that = this

    this.initBubbles()
    this.initZtgCompare()

    this.$store.dispatch('bubbles/getNewStockList', {
      type: 2
    }).then(() => {})

    this.interval = setInterval(function() {

      that.updateBubbles()
      that.updateCompare()

      that.$store.dispatch('bubbles/getNewStockList', {
        type: 2
      }).then(() => {
        that.$store.dispatch('bubbles/sortNewStockList', {
          type: that.$store.state.bubbles.newStockSortType,
          sortType: that.$store.state.bubbles.newStockSort
        })
      })
    }, Data.refreshTime)
  },
  destroyed() {
    this.chart.dispose()
    this.lxztChart.dispose()
    this.interval && clearInterval(this.interval)
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
            margin-right: 6px;
            height: 100%;
            background: #232630;
        }

        .qsgList {
            height: 100%;
            width: 410px;
            background: #232630;
        }

    }
}
.qsgList {

    .qsgListTitle {
        width: 100%;
        border-bottom: 1px solid #131417;
        padding-top: 10px;

        a {
            width: 14%;
            height: 100%;
            float: left;
            display: block;
            text-align: center;

            span {
                height: 34px;
                width: 100%;
                display: block;
                line-height: 17px;
                box-sizing: border-box;
                /*padding: 0 10px;*/
                cursor: pointer;
                margin-bottom: 5px;
            }

            img {
                margin-top: 3px;
            }

        }
        a:first-child span {
            cursor: default;
        }

    }

    ul {
        height: calc(100% - 60px);
        overflow: auto;

        li {

            /*padding: 10px 5px 10px 10px;*/
            span {
                float: left;
                width: 14%;
                display: block;
                line-height: 25px;
                text-align: center;
            }

        }
        li:hover {
            background: #525A65;
            cursor: pointer;
        }

    }

}
.siweiDialog {
    width: 470px;
    height: 247px;
    position: absolute;
}
</style>