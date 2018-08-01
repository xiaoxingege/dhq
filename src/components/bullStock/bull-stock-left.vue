<template>
<div class="bullBox">
  <div class="bullChartHeader clearfix">
    浏览指标：<select v-model="bullSelected" @change="changeSelect">
      <option value="heatIndex">热度指数</option>
      <option value="chngPct">涨跌幅</option>
      <option value="keepDaysToday">连续涨跌天数</option>
    </select>
    <!--<span class="fr currentTime">{{currentTime}}</span>-->
  </div>
  <div class="bullChart clearfix">
    <div class="chart_con">
      <div class="fl">
        <p>题材板块</p>
        <div class="themeBox"></div>
        <div class="themeBox"></div>

      </div>
      <div class="fl">
        <p>行业板块</p>
        <div class="industryBox"></div>
        <div class="industryBox"></div>
      </div>
    </div>
  </div>
  <div class="bullLegend clearfix" v-if="bullSelected === 'heatIndex'">
    <ul class="clearfix fr">
      <li v-for="item in valueRangeHeat" :style="{background:showColor(colors[bullSelected], ranges[bullSelected],item)}">{{item}}
      </li>
    </ul>
    <p class="fl">温馨提示：展示题材和行业的热度榜，首尾各12个</p>
  </div>
  <div class="bullLegend clearfix" v-if="bullSelected === 'chngPct'">
    <ul class="clearfix fr">
      <li v-for="item in valueRangePct" :style="{background:showColor(colors[bullSelected], ranges[bullSelected],item)}">{{item}}%
      </li>
    </ul>
    <p class="fl">温馨提示：展示题材和行业的涨跌幅榜，首尾各12个</p>
  </div>
  <div class="bullLegend clearfix" v-if="bullSelected === 'keepDaysToday'">
    <ul class="clearfi fr">
      <li v-for="item in valueRangeDay" :style="{background:showColor(colors[bullSelected], ranges[bullSelected],item)}">{{item}}
      </li>
    </ul>
    <p class="fl">温馨提示：展示题材和行业的连续涨跌天数榜，首尾各12个</p>
  </div>
  <div></div>
</div>
</template>
<script>
import echarts from 'echarts'
import {
  mapState
} from 'vuex'

const colorsList = ['#f63538', '#ee373a', '#e6393b', '#df3a3d', '#d73c3f', '#ce3d41', '#c73e43', '#bf4045', '#b64146', '#ae4248', '#a5424a', '#9d434b', '#94444d', '#8b444e', '#824450', '#784551', '#6f4552', '#644553', '#5a4554', '#4f4554', '#414554', '#3f4c53', '#3d5451', '#3b5a50', '#3a614f', '#38694f', '#366f4e', '#35764e', '#347d4e', '#32844e', '#31894e', '#31904e', '#30974f', '#2f9e4f', '#2fa450', '#2faa51', '#2fb152', '#2fb854', '#30be56', '#30c558', '#30cc5a']
const valueRangeHeat = [0, 12, 24, 36, 48, 60, 72, 84, 96]
const valueRangePct = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
const valueRangeDay = [-12, -9, -6, -3, 0, 3, 6, 9, 12]

export default {
  data() {
    return {
      currentTime: '',
      bullSelected: 'chngPct',
      colors: {
        // 'heatIndex': colorsList.slice().reverse().slice(20),
        'heatIndex': colorsList.slice().reverse(),
        'chngPct': colorsList.slice().reverse(),
        'keepDaysToday': colorsList.slice().reverse()
      },
      ranges: {
        'heatIndex': valueRangeHeat,
        'chngPct': valueRangePct,
        'keepDaysToday': valueRangeDay
      },
      // valueRangeHeat: [50, 56, 62, 68, 74, 80, 86, 92, 98],
      valueRangeHeat: [0, 12, 24, 36, 48, 60, 72, 84, 96],
      valueRangePct: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
      valueRangeDay: [-12, -9, -6, -3, 0, 3, 6, 9, 12]
    }
  },
  computed: {
    ...mapState({
      topicData: state => state.bullStock.topicData,
      industryData: state => state.bullStock.industryData
    }),
    visualMin: function() {
      if (this.bullSelected === 'heatIndex') {
        const range = this.ranges[this.bullSelected];
        return range[0]
      }
      const range = this.ranges[this.bullSelected];
      return -range[range.length - 1]
    },
    visualMax: function() {
      const range = this.ranges[this.bullSelected];
      return range[range.length - 1]
    }
  },
  methods: {
    getTime() {
      var date = new Date()
      var seperator2 = ':'
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      var strHour = date.getHours()
      var strMin = date.getMinutes()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      if (strHour >= 0 && strHour <= 9) {
        strHour = '0' + strHour
      }
      if (strMin >= 0 && strMin <= 9) {
        strMin = '0' + strMin
      }
      var currentdate = date.getFullYear() + '-' + month + '-' + strDate + ' ' + strHour + seperator2 + strMin
      this.currentTime = currentdate
    },
    initChart(key) {
      let model = {
        yCates: ['1', '2', '3'],
        xCates: ['1', '2', '3', '4'],
        topicData: [
          // [yCateIndex, xCateIndex, value]
          [2, 0],
          [2, 1],
          [2, 2],
          [2, 3],
          [1, 0],
          [1, 1],
          [1, 2],
          [1, 3],
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3]
        ],
        induData: [
          // [yCateIndex, xCateIndex, value]
          [2, 0],
          [2, 1],
          [2, 2],
          [2, 3],
          [1, 0],
          [1, 1],
          [1, 2],
          [1, 3],
          [0, 0],
          [0, 1],
          [0, 2],
          [0, 3]
        ],
        topicBottomData: [
            // [yCateIndex, xCateIndex, value]
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ],
        induBottomData: [
            // [yCateIndex, xCateIndex, value]
            [2, 0],
            [2, 1],
            [2, 2],
            [2, 3],
            [1, 0],
            [1, 1],
            [1, 2],
            [1, 3],
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3]
        ]

      }
      this.$store.dispatch('bullStock/getTopicAndIndustry', {
        index: this.bullSelected
      }).then(() => {
        const that = this

        let tData = this.topicData.slice(0,12)
        let iData = this.industryData.slice(0,12)

        for (let i = 0; i < model.topicData.length; i++) {
          if (tData[i][key] === null) {
            model.topicData[i][2] = 0
            model.topicData[i][3] = null
          } else {
            model.topicData[i][2] = tData[i][key]
            model.topicData[i][3] = 0
          }

        }
        for (let j = 0; j < model.induData.length; j++) {
          if (iData[j][key] === null) {
            model.induData[j][2] = 0
            model.induData[j][3] = null
          } else {
            model.induData[j][2] = iData[j][key]
            model.induData[j][3] = 0
          }
        }

        let dataT = model.topicData.map(function(item) {
          return [item[1], item[0], item[2], item[3]];
        });
        let dataI = model.induData.map(function(item) {
          return [item[1], item[0], item[2], item[3]];
        })

        let tBData = this.topicData.slice(12)
        let iBData = this.industryData.slice(12)

        for (let i = 0; i < model.topicBottomData.length; i++) {
            if (tBData[i][key] === null) {
                model.topicBottomData[i][2] = 0
                model.topicBottomData[i][3] = null
            } else {
                model.topicBottomData[i][2] = tBData[i][key]
                model.topicBottomData[i][3] = 0
            }

        }
        for (let j = 0; j < model.induBottomData.length; j++) {
            if (iBData[j][key] === null) {
                model.induBottomData[j][2] = 0
                model.induBottomData[j][3] = null
            } else {
                model.induBottomData[j][2] = iBData[j][key]
                model.induBottomData[j][3] = 0
            }
        }

        let dataTB = model.topicBottomData.map(function(item) {
            return [item[1], item[0], item[2], item[3]];
        });
        let dataIB = model.induBottomData.map(function(item) {
            return [item[1], item[0], item[2], item[3]];
        })
        this.chart = echarts.getInstanceByDom(document.getElementsByClassName('themeBox')[0]) || echarts.init(document.getElementsByClassName('themeBox')[0])
        this.chartB = echarts.getInstanceByDom(document.getElementsByClassName('themeBox')[1]) || echarts.init(document.getElementsByClassName('themeBox')[1])
        this.industryChart = echarts.getInstanceByDom(document.getElementsByClassName('industryBox')[0]) || echarts.init(document.getElementsByClassName('industryBox')[0])
        this.industryChartB = echarts.getInstanceByDom(document.getElementsByClassName('industryBox')[1]) || echarts.init(document.getElementsByClassName('industryBox')[1])

        this.chart.setOption({
          animation: true,
          grid: {
            height: '100%',
            top: 0,
            left: 10,
            right: 4
          },
          xAxis: {
            type: 'category',
            data: model.xCates
          },
          yAxis: {
            type: 'category',
            data: model.yCates
          },
          series: [{
            type: 'heatmap',
            data: dataT,
            label: {
              normal: {
                show: true,
                formatter: (params) => {
                  if (that.bullSelected === 'chngPct') {
                    if (params.data[3] === null) {
                      return that.topicData[params.dataIndex].name + '\n\n' + '--'
                    }
                    return that.topicData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                  }
                  if (that.bullSelected === 'heatIndex') {
                    return that.topicData[params.dataIndex].name + '\n\n' + Math.ceil(params.data[2])
                  }
                  return that.topicData[params.dataIndex].name + '\n\n' + params.data[2] + '天'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'black',
                borderWidth: 3
              }

            }
          }],
          visualMap: [{
            type: 'continuous',
            show: false,
            min: this.visualMin,
            max: this.visualMax,
            calculable: true,
            realtime: false,
            inRange: {
              color: this.colors[this.bullSelected] // colorsList.slice().reverse()
            },
            dimension: 2
          }],
          tooltip: {
              show: true,
              triggerOn: 'none',
              formatter: function(params){
                  console.log(params.dataIndex)
                  return 'aaa'
              }
          }
        })
        this.industryChart.setOption({
          animation: true,
          visualMap: [{
            type: 'continuous',
            show: false,
            min: this.visualMin,
            max: this.visualMax,
            calculable: true,
            realtime: false,
            inRange: {
              color: this.colors[this.bullSelected]
            },
            dimension: 2
          }],
          grid: {
            height: '100%',
            top: 0,
            left: 0,
            right: 10
          },
          xAxis: {
            type: 'category',
            data: model.xCates
          },
          yAxis: {
            type: 'category',
            data: model.yCates
          },
          series: [{
            type: 'heatmap',
            data: dataI,
            label: {
              normal: {
                show: true,
                formatter: (params) => {
                  if (that.bullSelected === 'chngPct') {
                    if (params.data[3] === null) {
                      return that.topicData[params.dataIndex].name + '\n\n' + '--'
                    }
                    return that.industryData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                  }
                  if (that.bullSelected === 'heatIndex') {
                    return that.industryData[params.dataIndex].name + '\n\n' + Math.ceil(params.data[2])
                  }
                  return that.industryData[params.dataIndex].name + '\n\n' + params.data[2] + '天'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'black',
                borderWidth: 3
              }
            }
          }]
        })
        this.chartB.setOption({
            animation: true,
            grid: {
                height: '100%',
                top: 4,
                left: 10,
                right: 4
            },
            xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4']
            },
            yAxis: {
                type: 'category',
                data: ['1', '2', '3']
            },
            series: [{
                type: 'heatmap',
                data: dataTB,
                label: {
                    normal: {
                        show: true,
                        formatter: (params) => {
                            if (that.bullSelected === 'chngPct') {
                                if (params.data[3] === null) {
                                    return that.topicData[params.dataIndex].name + '\n\n' + '--'
                                }
                                return that.topicData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                            }
                            if (that.bullSelected === 'heatIndex') {
                                return that.topicData[params.dataIndex].name + '\n\n' + Math.ceil(params.data[2])
                            }
                            return that.topicData[params.dataIndex].name + '\n\n' + params.data[2] + '天'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'black',
                        borderWidth: 3
                    }

                }
            }],
            visualMap: [{
                type: 'continuous',
                show: false,
                min: this.visualMin,
                max: this.visualMax,
                calculable: true,
                realtime: false,
                inRange: {
                    color: this.colors[this.bullSelected] // colorsList.slice().reverse()
                },
                dimension: 2
            }]
        })
        this.industryChartB.setOption({
            animation: true,
            visualMap: [{
                type: 'continuous',
                show: false,
                min: this.visualMin,
                max: this.visualMax,
                calculable: true,
                realtime: false,
                inRange: {
                    color: this.colors[this.bullSelected]
                },
                dimension: 2
            }],
            grid: {
                height: '100%',
                top: 4,
                left: 0,
                right: 10
            },
            xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4']
            },
            yAxis: {
                type: 'category',
                data: ['1', '2', '3']
            },
            series: [{
                type: 'heatmap',
                data: dataIB,
                label: {
                    normal: {
                        show: true,
                        formatter: (params) => {
                            if (that.bullSelected === 'chngPct') {
                                if (params.data[3] === null) {
                                    return that.topicData[params.dataIndex].name + '\n\n' + '--'
                                }
                                return that.industryData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                            }
                            if (that.bullSelected === 'heatIndex') {
                                return that.industryData[params.dataIndex].name + '\n\n' + Math.ceil(params.data[2])
                            }
                            return that.industryData[params.dataIndex].name + '\n\n' + params.data[2] + '天'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'black',
                        borderWidth: 3
                    }
                }
            }]
        })

        window.onresize = function() {
          that.chart.resize()
          that.industryChart.resize()
          that.chartB.resize()
          that.industryChartB.resize()
        }
        let url = window.location.href.substring(0, window.location.href.indexOf('zstgweb') + 8)
        this.chart.on('dblclick', function(params) {
          window.open(url + 'topic/' + that.topicData[params.dataIndex].topicCode)
        })
        this.chartB.on('dblclick', function(params) {
          window.open(url + 'industry/' + that.industryData[params.dataIndex].induCode)
        })
        this.industryChart.on('dblclick', function(params) {
            window.open(url + 'topic/' + that.topicData[params.dataIndex].topicCode)
        })
        this.industryChartB.on('dblclick', function(params) {
            window.open(url + 'industry/' + that.industryData[params.dataIndex].induCode)
        })
        this.chart.on('mouseover',function(params){
            that.chart.dispatchAction({
                type:'showTip',
                dataIndex:params.dataIndex
            })
        })
        this.chart.on('mouseout',function(params){
              that.chart.dispatchAction({
                  type:'hideTip'
              })
          })


      })
    },
    showColor: function(colorArr, valueArr, value) {
      if (value == null) {
        return colorArr.nullColor
      }
      if (value <= (valueArr[0] + valueArr[1]) / 2) {
        return colorArr[0]
      } else if (value > (valueArr[valueArr.length - 1] + valueArr[valueArr.length - 2]) / 2) {
        return colorArr[colorArr.length - 1]
      } else {
        var index = Math.round((value - valueArr[0]) / (valueArr[valueArr.length - 1] - valueArr[0]) * colorArr.length)
        return colorArr[index]
      }
    },
    compare: function(property) {
      return function(a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      }
    },
    changeSelect: function() {
      this.initChart(this.bullSelected)
      this.$emit('changeSelectValue', this.bullSelected)
    }

  },
  mounted() {
    const that = this
    setInterval(function() {
      that.getTime()
    }, 1000)
    setInterval(function() {
      that.initChart(that.bullSelected)
    }, 60000)
    this.initChart(this.bullSelected)
  }

}
</script>
<style lang="scss">
  @import '../../assets/css/base.css';
  @import "../../assets/scss/style.scss";
  .bullBox * {
    font-family: "Microsoft YaHei" !important;
  }

  .bullBox {
    width: 100%;
    height: 100%;
    color: #c9d0d7;
    position: relative;
  }

  .bullChartHeader {
    position: absolute;
    padding: 0 15px;
    width: 100%;
    top: 0;
    height: 40px;
    line-height: 40px;
  }

  .bullChartHeader select {
    width: 185px;
    border: 0;
    height: 24px;
    border-radius: 3px;
    line-height: 24px;
    padding-left: 10px;
    -webkit-appearance: none;
    background: url("../../assets/images/select-arrow.png") no-repeat scroll right center transparent;
    background-position-x: 95%;
    color: #c9d0d7;
    background-color: #23272C;
    cursor: pointer;
  }

  .currentTime {
    line-height: 40px;
    color: #c9d0d7;
  }

  .bullChart {
    position: absolute;
    width: 100%;
    top: 40px;
    bottom: 30px;
    /*padding-top: 15px;*/
    box-sizing: border-box;
  }

  .chart_con {
    height: 100%;
    width: 100%;
  }

  .bullChart .chart_con > div {
    width: 50%;
    height: 100%;
  }

  .bullChart .chart_con > div > p {
    padding-left: 15px;
    font-size: 16px;
  }

  .themeBox {
    height: calc((100% - 30px)/2);
  }

  .industryBox {
    height: calc((100% - 30px)/2);
  }

  .bullLegend {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 30px;
    padding: 0 15px;
  }

  .bullLegend ul li {
    float: left;
    width: 45px;
    height: 20px;
    line-height: 20px;
    margin-right: 2px;
    color: #fff;
    text-align: center;
  }
</style>