<template>
<div class="qsgBox">
  <div class="siweiDialog" :style="{left:offsetX+'px',top:offsetY+'px',zIndex:zIndex}">
    <Siweidialog :dialogOptions="dialogOptions" v-show="isOverBubbles || isOverDialog" @toShowDialog="setDialog" @toHideDialog="setDialog"></Siweidialog>
  </div>
  <div class="qsgMian clearfix">
    <div class="qsgChart fl">
      <div ref="qsgBubbles" :style="{height:bubbleHeight+'px'}"></div>
    </div>
    <div class="qsgList fr">
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
          <span>{{item.symbol | isNull}}</span>
          <span v-z3-updowncolor="item.chg">{{item.price | isNull}}</span>
          <span v-z3-updowncolor="item.chg">{{item.chg | isNull | chng}}</span>
          <span v-z3-updowncolor="item.limitNum">{{item.limitNum | isNull}}</span>
          <span v-z3-updowncolor="item.chgNum">{{item.chgNum | isNull}}</span>
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
        xDefault: 'mkt_idx.volume_ratio',
        yDefault: 'mkt_idx.exchr',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'mkt_idx.cur_chng_pct',
        type: 4
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
          name: '开板前连涨数',
          type: 'lznum',
          showImg: false,
          showBImg: false
        },
        {
          name: '累计涨幅',
          type: 'zfnum',
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
    initBubbles() {
      this.chart = echarts.init(this.$refs.qsgBubbles)
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
            max: Math.max.apply(null, xData),
            axisLabel: {
              showMaxLabel: true,
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
            max: Math.max.apply(null, yData),
            axisLabel: {
              showMaxLabel: true,
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

        that.chart.on('dblclick', function(params) {
          window.open('/stock/' + that.$store.state.bubbles.ztgBubblesData.innerCode[params.dataIndex] + '.shtml')
        })

        that.chart.on('mouseover', function(params) {
          clearTimeout(that.timeout)
          if ((params.event.offsetX + 500) >= that.$refs.qsgBubbles.clientWidth) {
            that.offsetX = params.event.offsetX - 490
          } else {
            that.offsetX = params.event.offsetX + 20
          }

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
          that.dialogOptions.leftList.xData.value = that.$store.state.bubbles.ztgBubblesData.xData[params.dataIndex]
          that.dialogOptions.leftList.yData.value = that.$store.state.bubbles.ztgBubblesData.yData[params.dataIndex] + '%'
          that.dialogOptions.leftList.bubbleSize.value = (Number(that.$store.state.bubbles.ztgBubblesData.bubbleSize[params.dataIndex]) / 100000000).toFixed(2) + '亿'
          that.dialogOptions.leftList.bubbleColor.value = Number(that.$store.state.bubbles.ztgBubblesData.bubbleColor[params.dataIndex]).toFixed(2) + '%'
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
          animation: false,
          xAxis: {
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
            max: Math.max.apply(null, yData),
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
    toStockDetail(innerCode) {
      window.open('/stock/' + innerCode + '.shtml')
    },
    sortList(type, indexNum, e) {
      if (this.newListTitle[indexNum].showImg || this.newListTitle[indexNum].showBImg) {
        this.newListTitle[indexNum].showImg = !this.newListTitle[indexNum].showImg
        this.newListTitle[indexNum].showBImg = !this.newListTitle[indexNum].showBImg
        /* if(this.newListTitle[indexNum].showBImg){

         }else{

         } */
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
      //  this.newListTitle[index].showImg = true
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
          type: that.$store.state.bubbles.newStockSortType
        })
      })
    }, Data.refreshTime)
  },
  destroyed() {
    this.$store.state.bubbles.newStockSortType = ''
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
            width: calc(75% - 6px);
            background: #232630;
        }

        .qsgList {
            height: 100%;
            width: 25%;
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
                padding: 0 10px;
                cursor: pointer;
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
}
</style>