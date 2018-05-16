<template>
<div class="ztgBox">
  <div class="siweiDialog" :style="{left:offsetX+'px',top:offsetY+'px',zIndex:zIndex}">
    <Siweidialog :dialogOptions="dialogOptions" v-show="isOverBubbles || isOverDialog" @toShowDialog="setDialog" @toHideDialog="setDialog"></Siweidialog>
  </div>
  <div class="ztgMain display-box">
    <div class="ztgChart box-flex-1">
      <div ref="ztgBubbles" :style="{height:bubbleHeight+'px'}"></div>
      <div ref="ztgLine" :style="{height:lineChartHeight+'px'}"></div>
    </div>
    <div class="qsgList">
      <div class="qsgListTitle clearfix">
        <a><span>序号</span></a>
        <a v-for="(item,index) in newListTitle">
            <span ref="sortSpan" :sortType="item.type === 'afterKb' ? 'asce':''"
                  @click="sortList(item.type,index,$event)"
                  @mouseover="showTitleDetail(item.type,'over',$event)"
                  @mouseout="showTitleDetail(item.type,'out',$event)">{{item.name}}</span>
                  <img v-show="item.showImg" src="../../assets/images/z3img/siwei-xia.png">
                  <img v-show="item.showBImg" src="../../assets/images/z3img/siwei-shang.png">
              </a>
        <span class="titleDetail" ref="titleDetail"></span>
      </div>
      <ul ref="newListUl">
        <li v-for="(item,index) in newStockList" class="clearfix" @dblclick="toStockDetail(item.symbol)">
          <span>{{index+1}}</span>
          <span>{{item.name | isNull}}</span>
          <span>{{item.symbol.substring(0,6) | isNull}}</span>
          <span v-z3-updowncolor="item.chg">{{item.price === null?'--':Number(item.price).toFixed(2)}}</span>
          <span v-z3-updowncolor="item.chg">{{item.chg === null?'--':Number(item.chg).toFixed(2)+'%' | chng}}</span>
          <span v-z3-updowncolor="item.limitNum">{{item.limitNum | isNull}}</span>
          <span v-z3-updowncolor="item.chgNum">{{item.chgNum === null?'--':Number(item.chgNum).toFixed(2)+'%'}}</span>
          <span>{{item.listDate}}</span>
        </li>
      </ul>
    </div>
  </div>
  <div class="legend clearfix">
    <div class="fr">
      <ul class="clearfix">
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.cur_chng_pct'">{{item}}%
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

export default {
  data() {
    return {
      options: {
        xDefault: 'accum_chg_pct_up_term',
        yDefault: 'up_limit_num',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'mkt_idx.cur_chng_pct',
        type: 6
      },
      defaultColor: '#2F323D',
      groupArr: Data.groupArr,
      quoteChange: Data.quoteChange,
      chgColor: Data.chgColor,
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
      bubbleHeight: (window.innerHeight - 29) * 0.66-22,
      lineChartHeight: (window.innerHeight - 29) * 0.33-22,
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
          name: '连板数',
          type: 'beforeKb',
          showImg: false,
          showBImg: false
        },
        {
          name: '开板涨幅',
          type: 'afterKb',
          showImg: true,
          showBImg: false
        },
        {
          name: '上市天数',
          type: 'ssts',
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
      this.chart = echarts.init(this.$refs.ztgBubbles)
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
            top: 70,
            left: 65,
            right: 60,
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
            offset: 20,
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
                  return 'ln(2+开板后累计涨幅)'
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
            max: Math.max.apply(null, yData) + 5,
            axisLabel: {
              showMaxLabel: true,
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '开板前' + '\n' + '连板数'
                }
                return Number(v).toFixed(0)
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData,
            splitNumber: 5,
            interval: (Math.max.apply(null, yData) + 5) / 5

          },
          dataZoom: [{
              type: 'slider',
              xAxisIndex: 0,
              filterMode: 'empty',
              top: 50,
              left:'center',
              textStyle: {
                color: '#aed2ff'
              },
              borderColor: '#3c4868',
              height: '6',
              handleIcon: 'M0,0 v9.7h5 v-9.7h-5 Z',
              handleSize: '250%',
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
              realtime: false,
              labelPrecision: 2,
              startValue: 0.45,
              endValue: 0.55
            },
            {
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
          that.dialogOptions.leftList.xData.value = Number(that.$store.state.bubbles.ztgBubblesData.xDefault[params.dataIndex]).toFixed(2) + '%'
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
      this.lineChart = echarts.init(this.$refs.ztgLine)
      this.lineChart.showLoading(config.loadingConfig);
      this.$store.dispatch('bubbles/getCxLine', {
        type: 0
      }).then(() => {
        const that = this
        // 生成横坐标时间轴
        let beforenoon = this.autoTimeline('9:30', '11:30')
        let afternoon = this.autoTimeline('13:00', '15:00')
        beforenoon.splice(beforenoon.length - 1, 1)
        afternoon[0] = '11:30/13:00'
        let timeline = beforenoon.concat(afternoon)
        let czgLineData = this.$store.state.bubbles.cxLineData

        this.lineChart.setOption({
          title: {
            text: '次新指数',
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
                return Number(val) + '%'
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
              name: '次新指数',
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
              data: czgLineData.condition
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
              data: czgLineData.szIndex

            }
          ],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              if(czgLineData.condition[params[0].dataIndex][1] === null && czgLineData.szIndex[params[0].dataIndex][1] === null){
                  return ''
              }
              var tooltipStr =
                '<p>次新指数 : ' + (czgLineData.condition[params[0].dataIndex][1] === null ? '--' : Number(czgLineData.condition[params[0].dataIndex][1]).toFixed(2)+'%') + '</p>' +
                '<p style="color:#f0b540">上证指数 : ' + (czgLineData.szIndex[params[0].dataIndex][1] === null ? '--' : Number(czgLineData.szIndex[params[0].dataIndex][1]).toFixed(2)+'%') + '</p>'

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7],
            axisPointer:{
                  show:true,
                  type:'line',
                  snap:true,
                  label:{
                      show:true
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
            offset: 20,
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
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().xAxis[0].max)) {
                  return 'ln(2+开板后累计涨幅)'
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
            max: Math.max.apply(null, yData) + 5,
            axisLabel: {
              showMaxLabel: true,
              textStyle: {
                color: '#c9d0d7'
              },
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().yAxis[0].max)) {
                  return '开板前' + '\n' + '连板数'
                }
                return Number(v).toFixed(0)
                // return that.convertNumBySelect('yData', v)
              }

            },
            data: yData,
            splitNumber: 5,
            interval: (Math.max.apply(null, yData) + 5) / 5

          },
          dataZoom: [{
              type: 'slider',
              xAxisIndex: 0,
              filterMode: 'empty',
              top: 50,
              left:'center',
              textStyle: {
                color: '#aed2ff'
              },
              borderColor: '#3c4868',
              height: '6',
              handleIcon: 'M0,0 v9.7h5 v-9.7h-5 Z',
              handleSize: '250%',
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
              realtime: false,
              labelPrecision: 2
            },
            {
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
        type: 0
      }).then(() => {
        let czgLineData = this.$store.state.bubbles.cxLineData
        this.lineChart && this.lineChart.setOption({
          series: [{
              name: '次新指数',
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
              data: czgLineData.condition
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
              data: czgLineData.szIndex

            }
          ],
          tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function(params) {
              if(czgLineData.condition[params[0].dataIndex][1] === null && czgLineData.szIndex[params[0].dataIndex][1] === null){
                  return ''
              }
              var tooltipStr =
                  '<p>次新指数 : ' + (czgLineData.condition[params[0].dataIndex][1] === null ? '--':Number(czgLineData.condition[params[0].dataIndex][1]).toFixed(2)+'%') + '</p>' +
                  '<p style="color:#f0b540">上证指数 : ' + (czgLineData.szIndex[params[0].dataIndex][1] === null ? '--':Number(czgLineData.szIndex[params[0].dataIndex][1]).toFixed(2)+'%') + '</p>'

              return tooltipStr;
            },
            backgroundColor: 'rgba(67, 73, 84,0.9)',
            padding: [10, 50, 8, 7]

          }
        })
      })
    },
    sortList(type, indexNum, e) {
      const that = this
      let sortType = e.target.getAttribute('sortType')
      let clearSort = () => {
        this.$refs.sortSpan.forEach(function(item, index) {
          that.newListTitle[index].showImg = false
          that.newListTitle[index].showBImg = false
          item.setAttribute('sortType', '')
        })
      }
      if (sortType === '') {
        clearSort()
        this.$store.dispatch('bubbles/sortNewStockList', {
          type: type
        })
        this.newListTitle[indexNum].showImg = true
        e.target.setAttribute('sortType', 'asce')
      } else if (sortType === 'asce') {
        clearSort()
        this.$store.dispatch('bubbles/sortNewStockList', {
          type: type,
          sortType: 'desc'
        })
        this.newListTitle[indexNum].showImg = false
        this.newListTitle[indexNum].showBImg = true
        e.target.setAttribute('sortType', 'desc')
      } else if (sortType === 'desc') {
        clearSort()
        this.$store.dispatch('bubbles/sortNewStockList', {
          type: type
        })
        this.newListTitle[indexNum].showImg = true
        this.newListTitle[indexNum].showBImg = false
        e.target.setAttribute('sortType', 'asce')
      }
    },
    showTitleDetail(titleTime, isOver, e) {
      if (isOver === 'over' && titleTime === 'beforeKb') {
        this.$refs.titleDetail.style.display = 'block'
        this.$refs.titleDetail.innerHTML = '开板前连板数'
        this.$refs.titleDetail.style.left = '214px'
      } else if (isOver === 'out' && titleTime === 'beforeKb') {
        this.$refs.titleDetail.style.display = 'none'
      }
      if (isOver === 'over' && titleTime === 'afterKb') {
        this.$refs.titleDetail.style.display = 'block'
        this.$refs.titleDetail.innerHTML = '开板后累计涨幅'
        this.$refs.titleDetail.style.left = '254px'
      } else if (isOver === 'out' && titleTime === 'afterKb') {
        this.$refs.titleDetail.style.display = 'none'
      }
    }

  },
  mounted() {
    const that = this
    this.initBubbles()
    this.initZtgCompare()

    this.$store.dispatch('bubbles/getNewStockList', {
      type: 1
    }).then(() => {})

    this.interval = setInterval(function() {

      that.updateBubbles()
      that.updateCompare()

      that.$store.dispatch('bubbles/getNewStockList', {
        type: 1
      }).then(() => { // that.$refs.ztgListUl.scrollTop = 0
        that.$store.dispatch('bubbles/sortNewStockList', {
          type: that.$store.state.bubbles.newStockSortType,
          sortType: that.$store.state.bubbles.newStockSort
        })
      })
    }, Data.refreshTime)
  },
  destroyed() {
    this.$store.state.bubbles.newStockSortType = ''
    this.$store.state.bubbles.newStockSort = ''
    this.chart.dispose();
    this.interval && clearInterval(this.interval)
  }

}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
@import '../../assets/css/base.css';

.ztgBox {
    width: 100%;
    height: calc(100% - 44px);

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
            width: 450px;
            background: #232630;
        }

    }
}
.qsgList {

    .qsgListTitle {
        width: 100%;
        border-bottom: 1px solid #131417;
        padding-top: 10px;
        position: relative;

        a {
            width: 12.5%;
            height: 100%;
            float: left;
            display: block;
            text-align: center;

            span {
                height: 17px;
                width: 100%;
                display: block;
                line-height: 17px;
                box-sizing: border-box;
                /*padding: 0 10px;*/
                cursor: pointer;
                margin-bottom: 5px;
                color: #c9d0d7;
            }

            img {
                margin-top: 3px;
            }

        }
        a:first-child span {
            cursor: default;
        }

        .titleDetail {
            display: none;
            padding: 5px 10px;
            color: #666666;
            background: #cccfd9;
            border-radius: 3px;
            z-index: 999999;
            line-height: 18px;
            position: absolute;
            top: 29px;
        }

    }

    ul {
        height: calc(100% - 60px);
        overflow: auto;

        li {

            /*padding: 10px 5px 10px 10px;*/
            span {
                float: left;
                width: 12.5%;
                display: block;
                line-height: 25px;
                text-align: center;
            }

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
</style>