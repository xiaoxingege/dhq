<style>
@import '../../assets/css/base.css';
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
  height: 24px;
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
  background-color: #1A1D23;
}

.currentTime {
  line-height: 24px;
}

.bullChart {
  position: absolute;
  width: 100%;
  top: 30px;
  bottom: 30px;
  /*padding-top: 15px;*/
  box-sizing: border-box;
}

.chart_con {
  height: 100%;
  width: 100%;
}

.bullChart .chart_con>div {
  width: 50%;
  height: 100%;
}

.bullChart .chart_con>div>p {
  padding-left: 15px;
  font-size: 16px;
}

.themeBox {
  height: calc(100% - 30px);
}

.industryBox {
  height: calc(100% - 30px);
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
<template>
<div class="bullBox">
  <div class="bullChartHeader clearfix">
    浏览指标：<select v-model="bullSelected" @change="changeSelect">
      <option value="heatIndex">热度指数</option>
      <option value="chngPct">涨跌幅</option>
      <option value="keepDaysToday">连续涨跌天数</option>
    </select>
    <span class="fr currentTime">{{currentTime}}</span>
  </div>
  <div class="bullChart clearfix">
    <div class="chart_con">
      <div class="fl">
        <p>题材板块</p>
        <div class="themeBox"></div>
      </div>
      <div class="fl">
        <p>行业板块</p>
        <div class="industryBox"></div>
      </div>
    </div>
  </div>
  <div class="bullLegend clearfix" v-if="bullSelected === 'heatIndex'">
    <ul class="clearfix fr">
      <li v-for="item in valueRangeHeat" :style="{background:showColor(colors[bullSelected], ranges[bullSelected],item)}">{{item}}
      </li>
    </ul>
    <p class="fl">温馨提示：展示热度最高的20个行业和题材</p>
  </div>
  <div class="bullLegend clearfix" v-if="bullSelected === 'chngPct'">
    <ul class="clearfix fr">
      <li v-for="item in valueRangePct" :style="{background:showColor(colors[bullSelected], ranges[bullSelected],item)}">{{item}}%
      </li>
    </ul>
    <p class="fl">温馨提示：展示涨跌幅最高的20个行业和题材</p>
  </div>
  <div class="bullLegend clearfix" v-if="bullSelected === 'keepDaysToday'">
    <ul class="clearfi fr">
      <li v-for="item in valueRangeDay" :style="{background:showColor(colors[bullSelected], ranges[bullSelected],item)}">{{item}}
      </li>
    </ul>
    <p class="fl">温馨提示：展示连续涨跌天数最高的20个行业和题材</p>
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
      bullSelected: 'heatIndex',
      colors: {
        'heatIndex': colorsList.slice().reverse().slice(20),
        'chngPct': colorsList.slice().reverse(),
        'keepDaysToday': colorsList.slice().reverse()
      },
      ranges: {
        'heatIndex': valueRangeHeat,
        'chngPct': valueRangePct,
        'keepDaysToday': valueRangeDay
      },
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
        yCates: ['1', '2', '3', '4', '5'],
        xCates: ['1', '2', '3', '4'],
        topicData: [
          // [yCateIndex, xCateIndex, value]
          [4, 0],
          [4, 1],
          [4, 2],
          [4, 3],
          [3, 0],
          [3, 1],
          [3, 2],
          [3, 3],
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
          [4, 0],
          [4, 1],
          [4, 2],
          [4, 3],
          [3, 0],
          [3, 1],
          [3, 2],
          [3, 3],
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

        let tData = this.topicData.sort(this.compare(key)).slice().reverse()
        let iData = this.industryData.sort(this.compare(key)).slice().reverse()

        for (let i = 0; i < model.topicData.length; i++) {
          model.topicData[i][2] = tData[i][key]
        }
        for (let j = 0; j < model.induData.length; j++) {
          model.induData[j][2] = iData[j][key]
        }

        let dataT = model.topicData.map(function(item) {
          return [item[1], item[0], item[2] || '-'];
        });
        let dataI = model.induData.map(function(item) {
          return [item[1], item[0], item[2] || '-'];
        })
        this.chart = echarts.getInstanceByDom(document.getElementsByClassName('themeBox')[0]) || echarts.init(document.getElementsByClassName('themeBox')[0])
        this.industryChart = echarts.getInstanceByDom(document.getElementsByClassName('industryBox')[0]) || echarts.init(document.getElementsByClassName('industryBox')[0])

        this.chart.setOption({
          animation: true,
          visualMap: [{
            type: 'continuous',
            show: false,
            min: this.visualMin,
            max: this.visualMax,
            calculable: true,
            realtime: false,
            inRange: {
              color: colorsList.slice().reverse()
            }
          }],
          grid: {
            height: '100%',
            top: 0,
            left: 10,
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
            data: dataT,
            label: {
              normal: {
                show: true,
                formatter: (params) => {
                  if (that.bullSelected === 'chngPct') {
                    return that.topicData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                  }
                  if (that.bullSelected === 'heatIndex') {
                    return that.topicData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(0)
                  }
                  return that.topicData[params.dataIndex].name + '\n\n' + params.data[2]
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'black',
                borderWidth: 10
                // color: function(params) {
                //   return that.showColor(that.colors[that.bullSelected], that.ranges[that.bullSelected], params.data[2])
                // }
              }

            }
          }]
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
              color: colorsList.slice().reverse()
            }
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
                    return that.industryData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                  }
                  if (that.bullSelected === 'heatIndex') {
                    return that.industryData[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(0)
                  }
                  return that.industryData[params.dataIndex].name + '\n\n' + params.data[2]
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'black',
                borderWidth: 10
                // color: function(params) {
                //   return that.showColor(that.colors[that.bullSelected], that.ranges[that.bullSelected], params.data[2])
                // }
              }
            }
          }]
        })
        window.onresize = function() {
          that.chart.resize()
          that.industryChart.resize()
        }
        let url = window.location.href.substring(0, window.location.href.indexOf('zstgweb') + 8)
        this.chart.on('dblclick', function(params) {
          window.open(url + 'topic/' + that.topicData[params.dataIndex].topicCode)
        })
        this.industryChart.on('dblclick', function(params) {
          window.open(url + 'industry/' + that.industryData[params.dataIndex].induCode)
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