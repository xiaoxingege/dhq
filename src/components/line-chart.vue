<style lang="scss" scoped>
.lineChart {
    width: 100%;
    height: 420px;
    padding-top: 20px;
}

.syqxTab {
    position: absolute;
    right: 53px;
    top: 23px;
    z-index: 9999;
}

.syqxTab li {
    float: left;
    background: #23272C;
    padding: 5px 7px;
    margin-right: 1px;
    font-size: 12px;
    color: #C9D0D7;
    cursor: pointer;
}
.syqxTab li:first-child {
    border-radius: 3px 0 0 3px;
}
.syqxTab li:last-child {
    border-radius: 0 3px 3px 0;
}
.syqxTab li.active {
    background: #1984EA;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .lineChart {
        width: 100%;
        height: 4.2rem;
        padding-top: 0;
        padding-bottom: 0.1rem;
    }
}
</style>
<template>
<div style="position: relative;">
  <ul class="syqxTab">
    <li @click="changeSyTab($event,1)">近1月</li>
    <li @click="changeSyTab($event,3)">近3月</li>
    <li @click="changeSyTab($event,6)">近6月</li>
    <li @click="changeSyTab($event,12)">近1年</li>
    <li @click="changeSyTab($event,36)">近3年</li>
    <li @click="changeSyTab($event,'all')" class="active">全部</li>
  </ul>
  <div class="lineChart" ref="lineChart"></div>
</div>
</template>
<script>
import echarts from 'echarts'
import {
  mapState
} from 'vuex'

export default {
  props: ['strategyId'],
  data() {
    return {

    }
  },
  watch: {

  },
  computed: mapState({
    lineData: state => state.goldStrategy.syqxtData,
    syqxLastDate: function() {
      return this.$store.state.goldStrategy.syqxtData.lastDate
    },
    syqxFirstDate: function() {
      return this.$store.state.goldStrategy.syqxtData.firstDate
    }
  }),
  methods: {
    initChart(startDate, endDate) {
      if (this.chart !== null && this.chart !== '' && this.chart !== undefined) {
        this.chart.dispose();
      }
      this.$store.dispatch('goldStrategy/getSyqxtData', {
        strategyId: this.strategyId,
        startDate: startDate || '',
        endDate: endDate || ''
      }).then(() => {
        const lineData = this.$store.state.goldStrategy.syqxtData
        // echarts.getInstanceByDom(document.getElementsByClassName('lineChart')[0]) ||

        this.chart = echarts.getInstanceByDom(document.getElementsByClassName('lineChart')[0]) || echarts.init(document.getElementsByClassName('lineChart')[0], {
          width: window.screen.width / 100 + 'rem',
          height: 2.1 + 'rem'
        })

        this.chart.setOption({
          legend: {
            left: '1%',
            top: 0,
            itemWidth: 8,
            orient: 'vertical',
            textStyle: {
              color: '#808ba1'
            },
            data: [{
              name: '策略收益率',
              icon: 'circle'
            }, {
              name: '沪深300',
              icon: 'circle'
            }]
          },
          tooltip: {
            show: true,
            trigger: 'axis',
            padding: [10, 55, 10, 20],
            textStyle: {
              align: 'left',
              fontFamily: '微软雅黑'
            },
            axisPointer: {
              type: 'line'
            },
            formatter: function(params) {
              var s = params[0].name
              for (var i = 0; i < params.length; i++) {
                if (i === 0) {
                  let result = Number(params[i].value)
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>策略累计收益率: ' +
                    Number(Math.round(result * Math.pow(10, 4)) / Math.pow(10, 2)).toFixed(2) + '%'
                }
                if (i === 1) {
                  let result = Number(params[i].value)
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>基准累计收益率: ' +
                    Number(Math.round(result * Math.pow(10, 4)) / Math.pow(10, 2)).toFixed(2) + '%'
                }
              }
              return s
            }
          },
          xAxis: {
            interval: 0,
            type: 'category',
            boundaryGap: false,
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            },
            axisLabel: {
              // show:false
              color: '#808ba1'
            },
            data: lineData.xData

          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: function(val) {
                return (val * 100).toFixed(2) + '%'
              },
              color: '#808ba1'
            },
            nameTextStyle: {
              fontSize: 10
            },
            position: 'left',
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            }
          },
          series: [{
              data: lineData.data1,
              name: '策略收益率',
              type: 'line',
              symbol: 'none',
              lineStyle: {
                normal: {
                  width: 2
                }
              }
            },
            {
              data: lineData.data2,
              name: '沪深300',
              type: 'line',
              symbol: 'none',
              lineStyle: {
                normal: {
                  width: 2
                }
              }
            }
          ],
          color: ['#0C86ED', '#E73E3A', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)',
            'rgba(0,0,0,0)', 'rgba(0,0,0,0)'
          ],
          grid: {
            width: '97%',
            height: '75%',
            left: 0,
            top: '15%',
            containLabel: true
          },
          dataZoom: [{
            backgroundColor: '#32383E',
            type: 'slider',
            show: true,
            showDetail: false,
            xAxisIndex: [0],
            // bottom:-10,
            left: '2%',
            bottom: 0,
            start: 0,
            end: 100,
            textStyle: {
              // color: '#aed2ff'
            },
            // borderColor: '#d5dbe4',
            width: '95%',
            height: '5%',
            handleSize: '100%',
            dataBackground: {
              areaStyle: {
                // color: '#cad2db'
              },
              lineStyle: {
                /* opacity: 0.9,
                 color: '#a7b7cc'*/
              }
            },
            handleStyle: {
              // color: '#a7b7cc'
            }
          }]
        })
        const that = this
        window.onresize = function() {
          that.chart.resize()
        }
      })
    },
    changeSyTab(e, dateNum) {


      /* 切换标签选中样式*/

      const tabs = document.getElementsByClassName('syqxTab')[0].getElementsByTagName('li')
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].removeAttribute('class', 'active')
      }
      e.target.setAttribute('class', 'active')

      /* 切换标签切换数据*/
      if (dateNum === 'all') {
        this.initChart()
        return
      }
      let syqxYear = String(this.syqxLastDate).substring(0, 4)
      let syqxMonth = String(this.syqxLastDate).substring(4, 6)
      const syqxDay = String(this.syqxLastDate).substring(6)
      const mValue = Number(syqxMonth) - dateNum
      if (dateNum >= 12) {
        syqxYear = Number(syqxYear) - dateNum / 12
      } else {
        if (mValue <= 0) {
          syqxYear = Number(syqxYear) - 1
          syqxMonth = 12 + mValue < 10 ? '0' + (12 + mValue) : String(12 + mValue)
        } else {
          syqxMonth = mValue < 10 ? '0' + String(mValue) : String(mValue)
        }
      }
      let lastDate = Number(syqxYear + syqxMonth + syqxDay) < Number(this.syqxFirstDate) ? this.syqxFirstDate : syqxYear + syqxMonth + syqxDay
      this.initChart(lastDate, this.syqxLastDate)

    }
  },
  mounted() {
    this.initChart()
  }
}
</script>
