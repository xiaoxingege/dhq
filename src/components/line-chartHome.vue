<style lang="scss" scoped>
.lineChart {
    width: 100%;
    height: 168px;
}

.syqxTab {
    position: absolute;
    left: 100px;
    top: 5px;
    z-index: 9999;
}

.syqxTab li {
    float: left;
    background: #23262B;
    padding: 2px 4px;
    margin-right: 1px;
    font-size: 12px;
    color: #798196;
    cursor: pointer;
}
.syqxTab li.active {
    background: #2D4464;
    color:#E1E1E1;
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
  <ul class="syqxTab" v-show='strategyType !== "goldTop"'>
    <li @click="changeSyTab($event,1)">近1月</li>
    <li @click="changeSyTab($event,6)">近6月</li>
    <li @click="changeSyTab($event,12)">近1年</li>
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
  props: ['strategyId','strategyType'],
  data() {
    return {
        dataName : '两融余额',
        dataName2 : '上证指数'
    }
  },
  watch: {
    strategyType:function(val){
        this.initChart()
        if(val === 'filterTop') {
           this.dataName = '沪股通'
           this.dataName2 = '深股通'
        } else if(val === 'timeTop') {
            this.dataName = '港股通(沪)'
           this.dataName2 = '港股通(深)'
        }else {
            this.dataName = '两融余额'
           this.dataName2 = '上证指数'
        }
    }
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
          legend: { // 右上角(图例)
            right: 0,
            top: '5px',
            itemWidth: 4,
            orient: 'vertical',
            textStyle: {
              color: '#808ba1'
            },
            data: [{
              name: this.dataName,
              icon: 'images://../assets/images/z3img/homelines.jpg'
            }, {
              name: this.dataName2,
              icon: 'images://../assets/images/z3img/homelines2.jpg'
            }]
          },
          tooltip: { // 提示框
            show: true,
            trigger: 'axis', // 触发类型 axis(坐标轴触发)
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
          yAxis: [{
            type: 'value',
            axisLabel: {  // 坐标轴刻度的相关设置
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
          },{
            type: 'value',
            axisLabel: {  // 坐标轴刻度的相关设置
              formatter: function(val) {
                return (val * 100).toFixed(2) + '%'
              },
              color: '#808ba1'
            },
            nameTextStyle: {
              fontSize: 10
            },
            position: 'right',
            min: 'dataMin',
            max: 'dataMax',
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            }
          }],
          series: [{
              data: lineData.data1,
              name: this.dataName,
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
              name: this.dataName2,
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
            left: '0.7%',
            top: '15%',
            containLabel: true
          },
          dataZoom: [{
            backgroundColor: '#32383E',
            type: 'slider',
            show: false,
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
      console.log(this.syqxFirstDate)
    this.initChart()
  }
}
</script>
