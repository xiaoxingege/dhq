<template>
<div class="qsgBox">
  <div class="siweiDialog" :style="{left:offsetX+'px',top:offsetY+'px',zIndex:zIndex}">
    <Siweidialog :dialogOptions="dialogOptions" v-show="isOverBubbles || isOverDialog" @toShowDialog="setDialog" @toHideDialog="setDialog"></Siweidialog>
  </div>
  <div class="qsgMian display-box">
    <div class="qsgChart box-flex-1">
      <div ref="qsgBubbles" :style="{height:bubbleHeight+'px'}"></div>
    </div>
    <div class="qsgList">
      <div class="qsgListTitle clearfix">
        <a><span>序号</span></a>
        <a v-for="(item,index) in newListTitle">
            <span ref="sortSpan" :sortType="item.type === 'chg' ? 'asce':''" @click="sortList(item.type,index,$event)"
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
        xDefault: 'accum_chg_pct',
        yDefault: 'up_limit_num',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'mkt_idx.cur_chng_pct',
        type: 5
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
      bubbleHeight: window.innerHeight - 29 - 54,
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
          type: 'lznum',
          showImg: false,
          showBImg: false
        },
        {
          name: '累计涨幅',
          type: 'zfnum',
          showImg: true,
          showBImg: false
        },
        {
          name: '上市天数',
          type: 'ssts',
          showImg: false,
          showBImg: false
        }
      ],
      tcapMax: Math.sqrt(1.650026740738E12 / 1e11),
      tcapMin: Math.sqrt(9.722757458E9 / 1e11)
    }
  },
  components: {
    Siweidialog
  },
  computed: mapState({
    newStockList: state => state.bubbles.newStockList
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
    initBubbles() {
      this.chart = echarts.init(this.$refs.qsgBubbles)
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
            right: 45,
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
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().xAxis[0].max)) {
                  return 'ln(2+累计涨幅)'
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

          if ((params.event.offsetY + 247) > that.$refs.qsgBubbles.clientHeight) {
            that.offsetY = that.$refs.qsgBubbles.clientHeight - 247
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
                that.zIndex = -999999
                that.dialogOptions.stockCode = ''
              }
            }

          }, 500)
          // that.zIndex = ''
          // that.isShowDialog = false
        })

        window.addEventListener('resize', () => {
          let height = document.getElementsByClassName('qsgChart').length !== 0 ? document.getElementsByClassName('qsgChart')[0].offsetHeight : ''
          that.chart && that.chart.resize({
            height: height
          })
          that.bubbleHeight = height
        }, false)

        this.chart.hideLoading()

      })

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
          animation: false,
          xAxis: {
            max: xMaxData + (xMaxData * 0.05),
            min: xMinData - (xMaxData * 0.05),
            axisLabel: {
              formatter: function(v) {
                if (Number(v) === Number(that.chart.getOption().xAxis[0].max)) {
                  return 'ln(2+累计涨幅)'
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
            max: Math.max.apply(null, yData) + 5,
            axisLabel: {
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
    toStockDetail(innerCode) {
      window.open('/stock/' + innerCode + '.shtml')
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
      if (isOver === 'over' && titleTime === 'lznum') {
        this.$refs.titleDetail.style.display = 'block'
        this.$refs.titleDetail.innerHTML = '开板前连板数'
      } else if (isOver === 'out' && titleTime === 'lznum') {
        this.$refs.titleDetail.style.display = 'none'
      }
    }
  },
  mounted() {
    const that = this

    this.initBubbles()

    this.$store.dispatch('bubbles/getNewStockList', {
      type: 0
    }).then(() => {})

    this.interval = setInterval(function() {
      that.updateBubbles()

      that.$store.dispatch('bubbles/getNewStockList', {
        type: 0
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
<style lang="scss" scoped>
@import '../../assets/css/base.css';

.qsgBox {
    height: calc(100% - 44px);

    .qsgMian {
        height: 100%;

        .qsgChart {
            height: 100%;
            margin-right: 6px;
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
            left: 214px;
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