<template>
<div class="bullBox">
  <StockList :node="hoverNode" :parent="hoverNodeParent" :offsetX="offsetX" :offsetY="offsetY" :condition="mapCondition" :kLineType="kLineType"  :stockUpNo="topicStockUpNo" :stockDownNo="topicStockDownNo" @updateWrapHeight="changeWrapHeight"
             v-if="showHover" :topicIndexs="topicIndexs" :industryIndexs="industryIndexs">
    <div slot="newsInfo" v-if="bullNewsInfo" class="clearfix mb-5">
      <span v-if="bullNewsInfo.postiveIndex === 1" style="background-color: #56a870" class="markBox">利空</span>
      <span v-else-if="bullNewsInfo.postiveIndex === 2" style="background-color: #ca4941" class="markBox">利好</span>
      <span v-else-if="bullNewsInfo.postiveIndex === 0" style="background-color: #525a65" class="markBox">中性</span>
      <span class="markTittle">{{bullNewsInfo.title}}</span>
    </div>
  </StockList>
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
        <div class="themeBox" @mousemove="move($event)"></div>
        <div class="themeBox" @mousemove="move($event)"></div>

      </div>
      <div class="fl">
        <p>行业板块</p>
        <div class="industryBox" @mousemove="move($event)"></div>
        <div class="industryBox" @mousemove="move($event)"></div>
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
</div>
</template>
<script>
import echarts from 'echarts'
import {
  mapState
} from 'vuex'
import StockList from 'components/stock-list-map'

const colorsList = ['#f63538', '#ee373a', '#e6393b', '#df3a3d', '#d73c3f', '#ce3d41', '#c73e43', '#bf4045', '#b64146', '#ae4248', '#a5424a', '#9d434b', '#94444d', '#8b444e', '#824450', '#784551', '#6f4552', '#644553', '#5a4554', '#4f4554', '#414554', '#3f4c53', '#3d5451', '#3b5a50', '#3a614f', '#38694f', '#366f4e', '#35764e', '#347d4e', '#32844e', '#31894e', '#31904e', '#30974f', '#2f9e4f', '#2fa450', '#2faa51', '#2fb152', '#2fb854', '#30be56', '#30c558', '#30cc5a']
const valueRangeHeat = [0, 12, 24, 36, 48, 60, 72, 84, 96]
const valueRangePct = [-4, -3, -2, -1, 0, 1, 2, 3, 4]
const valueRangeDay = [-12, -9, -6, -3, 0, 3, 6, 9, 12]

export default {
  data() {
    return {
      currentTime: '',
      bullSelected: 'chngPct',
      cnodition:'',
      mapCondition:'chg_pct',
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
      valueRangeDay: [-12, -9, -6, -3, 0, 3, 6, 9, 12],
        /* 弹窗 */
      offsetX: 0,
      offsetY: 0,
      wrapHeight: 0,
      showHover: false,
      kLineType: '',
      topicStockUpNo: '',
      topicStockDownNo: '',
      topicIndexs: ['topic_market.tech_index', 'chg_pct','topic_market.rise_speed_3min', 'chg_pct_week', 'chg_pct_month', 'chg_pct_3month', 'chg_pct_6month', 'chg_pct_year', 'chg_pct_year_sofar', 'rela_volume', 'peg', 'ps', 'pb', 'div_rate', 'pe_ttm', 'fir_fcst_pe', 'eps_5year', 'keep_days'],
      industryIndexs: ['indu_market.tech_index', 'chg_pct','indu_market.rise_speed_3min','chg_pct_week', 'chg_pct_month', 'chg_pct_3month', 'chg_pct_6month', 'chg_pct_year', 'chg_pct_year_sofar', 'rela_volume', 'peg', 'ps', 'pb', 'div_rate', 'pe_ttm', 'fir_fcst_pe', 'eps_5year', 'keep_days']

    }
  },
  components: {
    StockList
  },
  computed: {
    ...mapState({
      topicData: state => state.bullStock.topicData,
      industryData: state => state.bullStock.industryData,
      bullNewsInfo: state => state.bullStock.bullNewsInfo,
      topicHoverStockValue: function() { // 鼠标移入的时候调用
            const that = this
            let topicStock = []
            let topicStockValue = []
          console.log(this.kLineType)
            if(this.kLineType === 'topic'){
                topicStock = [].concat(this.$store.state.plateMap.topicStock)
            }else if(this.kLineType === 'industry'){
                topicStock = [].concat(this.$store.state.plateMap.industryStockData)
            }

            topicStock.sort((a, b) => (b.size - a.size))
            topicStock.forEach(function(industry) {
                industry.value = industry.size
            })
          if(this.kLineType === 'topic'){
              topicStockValue = this.$store.state.plateMap.topicStockValue
          }else if(this.kLineType === 'industry'){
              topicStockValue = this.$store.state.plateMap.industryStockValue
          }
            topicStock.forEach(function(stock) {
                if (topicStockValue) {
                    stock.perf = topicStockValue[stock.id] !== undefined ? topicStockValue[stock.id] : topicStockValue[stock.name];
                    if (stock.perf !== null && typeof stock.perf !== 'undefined') {
                        if(that.bullSelected === 'chngPct'){
                            stock.perfText = (stock.perf >= 0 ? '+' : '') + Number(stock.perf).toFixed(2) +'%'
                        }else if(that.bullSelected === 'heatIndex'){
                            stock.perfText = Math.ceil(stock.perf)
                        }else if(that.bullSelected === 'keepDaysToday'){
                            stock.perfText = stock.perf+'天'
                        }
                    }else {
                        stock.perfText = '--'
                    }

                    stock.itemStyle = {
                        normal: {
                            color: that.showColor(that.colors[that.bullSelected], that.ranges[that.bullSelected], stock.perf) || '#2f323d'
                        }
                    }
                } else {
                    stock.perfText = '--'
                    stock.itemStyle = {
                        normal: {
                            color: '#2f323d'
                        }
                    }
                }
            })
            return topicStock
        }
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
    changeWrapHeight: function(wrapHeight) {
          this.wrapHeight = wrapHeight
          if (this.wrapHeight > 52) {
              this.move()
          }
      },
    move: function(event) {
          if (event) {
              this.clientX = event.clientX + 50
              this.clientY = event.clientY + 50
              this.offsetX = event.clientX + 50
              this.offsetY = event.clientY + 50
          }
          const windowWidth = document.body.clientWidth
          const windowHeight = window.innerHeight
          if (document.getElementsByClassName('hover-wrapper').length > 0) {
              const wrapWidth = document.getElementsByClassName('hover-wrapper')[0].offsetWidth
              // const wrapHeight = document.getElementsByClassName('hover-wrapper')[0].offsetHeight
              const wrapHeight = this.wrapHeight
              if (windowWidth - this.clientX <= wrapWidth) {
                  this.offsetX = this.clientX - wrapWidth - 100
              }
              if (windowHeight - 17 - this.clientY <= wrapHeight) {
                  this.offsetY = windowHeight - wrapHeight - 17
              }
              if (this.offsetY < 0) {
                  this.offsetY = 0
              }
          }
      },
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

        let tData = this.topicData.slice(0, 12)
        let iData = this.industryData.slice(0, 12)

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
                                    return that.topicData.slice(12)[params.dataIndex].name + '\n\n' + '--'
                                }
                                return that.topicData.slice(12)[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                            }
                            if (that.bullSelected === 'heatIndex') {
                                return that.topicData.slice(12)[params.dataIndex].name + '\n\n' + Math.ceil(params.data[2])
                            }
                            return that.topicData.slice(12)[params.dataIndex].name + '\n\n' + params.data[2] + '天'
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
                                    return that.industryData.slice(12)[params.dataIndex].name + '\n\n' + '--'
                                }
                                return that.industryData.slice(12)[params.dataIndex].name + '\n\n' + Number(params.data[2]).toFixed(2) + '%'
                            }
                            if (that.bullSelected === 'heatIndex') {
                                return that.industryData.slice(12)[params.dataIndex].name + '\n\n' + Math.ceil(params.data[2])
                            }
                            return that.industryData.slice(12)[params.dataIndex].name + '\n\n' + params.data[2] + '天'
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
          window.open(url + 'topic/' + that.topicData.slice(12)[params.dataIndex].topicCode)
        })
        this.industryChart.on('dblclick', function(params) {
            window.open(url + 'industry/' + that.industryData[params.dataIndex].induCode)
        })
        this.industryChartB.on('dblclick', function(params) {
            window.open(url + 'industry/' + that.industryData.slice(12)[params.dataIndex].induCode)
        })

        // show tooltip
          this.chart.on('mouseover', (params) => {
              if(that.bullSelected === 'chngPct'){
                  that.condition = 'mkt_idx.cur_chng_pct'
                  that.mapCondition = 'chg_pct'
              }else if(that.bullSelected === 'heatIndex'){
                  that.condition = 'tech_index'
                  that.mapCondition = 'topic_market.tech_index'

              }else{
                  that.condition = 'mkt_idx.keep_days_today'
                  that.mapCondition = 'keep_days'

              }
              this.kLineType = 'topic'
              this.hoverNodeId = that.topicData[params.dataIndex].topicCode
              this.topicCode = that.topicData[params.dataIndex].topicCode
              this.showHover = true

              let p1 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryTopicStock', {
                      topicCode: this.topicCode
                  }).then(() => {
                      resolve();
                  })
              });
              let p2 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryTopicStockValue', {
                      isContinue: 1,
                      condition: that.condition,
                      topicCode: this.topicCode
                  }).then(({
                               result,
                               condition,
                               topicCode
                           }) => {
                      resolve(topicCode);
                  })
              });
              let p3 = new Promise((resolve, reject) => {
                  this.$store.dispatch('bullStock/getBullNewsInfo', {
                      plateId: that.topicData[params.dataIndex].topicCode,
                      type:1,
                      location:'top'
                  }).then(() => {
                      resolve();
                  })
              });
              Promise.all([p1, p2,p3]).then((x) => {
                  if (x[1] !== this.hoverNodeId) {
                      console.info('invalide callback and do nothing');
                      return;
                  }
                  this.conditionStock = that.bullSelected
                  this.hoverNodeParent = {
                      id:this.topicCode,
                      perf:params.data[2],
                      perfText:params.data[2],
                      name:that.topicData[params.dataIndex].name
                  }
                  console.log(this.hoverNodeParent)
                  const stockInfoList = this.topicHoverStockValue
                  this.topicStockUpNo = 0;
                  this.topicStockDownNo = 0;
                  stockInfoList.forEach((stock) => { // 龙一股
                      if (stock.name === this.$store.state.plateMap.bestTopicStock.name) {
                          that.hoverNode = stock
                      }
                      if (stock.perf && stock.perf >= 0) {
                          that.topicStockUpNo++
                      } else if (stock.perf && stock.perf < 0) {
                          that.topicStockDownNo++
                      }
                  })
                  const windowHeight = window.innerHeight
                  const stockNum = Math.ceil((windowHeight - 17 - 82) / 30)
                  if (stockInfoList.length > stockNum) {
                      stockInfoList.length = stockNum
                  }
                  this.hoverNodeParent.children = stockInfoList // 浮窗股票列表
              });
          })
          this.chart.on('mouseout', (params) => {
                  this.showHover = false
          });

          this.chartB.on('mouseover', (params) => {
              if(that.bullSelected === 'chngPct'){
                  that.condition = 'mkt_idx.cur_chng_pct'
                  that.mapCondition = 'chg_pct'
              }else if(that.bullSelected === 'heatIndex'){
                  that.condition = 'tech_index'
                  that.mapCondition = 'topic_market.tech_index'

              }else{
                  that.condition = 'mkt_idx.keep_days_today'
                  that.mapCondition = 'keep_days'

              }
              this.kLineType = 'topic'
              this.hoverNodeId = that.topicData.slice(12)[params.dataIndex].topicCode
              this.topicCode = that.topicData.slice(12)[params.dataIndex].topicCode
              this.showHover = true
              let p1 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryTopicStock', {
                      topicCode: this.topicCode
                  }).then(() => {
                      resolve();
                  })
              });
              let p2 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryTopicStockValue', {
                      isContinue: 1,
                      condition: that.condition,
                      topicCode: this.topicCode
                  }).then(({
                               result,
                               condition,
                               topicCode
                           }) => {
                      resolve(topicCode);
                  })
              });
              let p3 = new Promise((resolve, reject) => {
                  this.$store.dispatch('bullStock/getBullNewsInfo', {
                      plateId: that.topicData.slice(12)[params.dataIndex].topicCode,
                      type:1,
                      location:'bottom'
                  }).then(() => {
                      resolve();
                  })
              });
              Promise.all([p1, p2, p3]).then((x) => {
                  if (x[1] !== this.hoverNodeId) {
                      console.info('invalide callback and do nothing');
                      return;
                  }
                  this.conditionStock = that.bullSelected
                  this.hoverNodeParent = {
                      id:this.topicCode,
                      perf:params.data[2],
                      perfText:params.data[2],
                      name:that.topicData.slice(12)[params.dataIndex].name
                  }
                  const stockInfoList = this.topicHoverStockValue
                  this.topicStockUpNo = 0;
                  this.topicStockDownNo = 0;
                  stockInfoList.forEach((stock) => { // 龙一股
                      if (stock.name === this.$store.state.plateMap.bestTopicStock.name) {
                          that.hoverNode = stock
                      }
                      if (stock.perf && stock.perf >= 0) {
                          that.topicStockUpNo++
                      } else if (stock.perf && stock.perf < 0) {
                          that.topicStockDownNo++
                      }
                  })
                  const windowHeight = window.innerHeight
                  const stockNum = Math.ceil((windowHeight - 17 - 82) / 30)
                  if (stockInfoList.length > stockNum) {
                      stockInfoList.length = stockNum
                  }
                  this.hoverNodeParent.children = stockInfoList // 浮窗股票列表
              });
          })
          this.chartB.on('mouseout', (params) => {
              this.showHover = false
          });

          this.industryChart.on('mouseover', (params) => {
              if(that.bullSelected === 'chngPct'){
                  that.condition = 'mkt_idx.cur_chng_pct'
                  that.mapCondition = 'chg_pct'
              }else if(that.bullSelected === 'heatIndex'){
                  that.condition = 'tech_index'
                  that.mapCondition = 'topic_market.tech_index'

              }else{
                  that.condition = 'mkt_idx.keep_days_today'
                  that.mapCondition = 'keep_days'

              }
              this.kLineType = 'industry'
              this.hoverNodeId = that.industryData[params.dataIndex].induCode
              this.industryCode = that.industryData[params.dataIndex].induCode
              this.showHover = true
              let p1 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryIndustryStock', {
                      industryCode: this.industryCode
                  }).then(() => {
                      resolve();
                  })
              });
              let p2 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryIndustryStockValue', {
                      isContinue: 1,
                      condition: that.condition,
                      industryCode: this.industryCode
                  }).then(({
                               result,
                               condition,
                               industryCode
                           }) => {
                      resolve(industryCode);
                  })
              });
              let p3 = new Promise((resolve, reject) => {
                  this.$store.dispatch('bullStock/getBullNewsInfo', {
                      plateId: that.industryData[params.dataIndex].induCode,
                      type:2,
                      location:'top'
                  }).then(() => {
                      resolve();
                  })
              });
              Promise.all([p1, p2, p3]).then((x) => {
                  if (x[1] !== this.hoverNodeId) {
                      console.info('invalide callback and do nothing');
                      return;
                  }
                  this.conditionStock = that.bullSelected
                  this.hoverNodeParent = {
                      id:this.industryCode,
                      perf:params.data[2],
                      perfText:params.data[2],
                      name:that.industryData[params.dataIndex].name
                  }
                  const stockInfoList = this.topicHoverStockValue
                  this.topicStockUpNo = 0;
                  this.topicStockDownNo = 0;
                  stockInfoList.forEach((stock) => { // 龙一股
                      if (stock.name === this.$store.state.plateMap.bestIndustryStock.name) {
                          that.hoverNode = stock
                      }
                      if (stock.perf && stock.perf >= 0) {
                          that.topicStockUpNo++
                      } else if (stock.perf && stock.perf < 0) {
                          that.topicStockDownNo++
                      }
                  })
                  const windowHeight = window.innerHeight
                  const stockNum = Math.ceil((windowHeight - 17 - 82) / 30)
                  if (stockInfoList.length > stockNum) {
                      stockInfoList.length = stockNum
                  }
                  this.hoverNodeParent.children = stockInfoList // 浮窗股票列表
              });
          })
          this.industryChart.on('mouseout', (params) => {
              this.showHover = false
          });

          this.industryChartB.on('mouseover', (params) => {
              if(that.bullSelected === 'chngPct'){
                  that.condition = 'mkt_idx.cur_chng_pct'
                  that.mapCondition = 'chg_pct'
              }else if(that.bullSelected === 'heatIndex'){
                  that.condition = 'tech_index'
                  that.mapCondition = 'topic_market.tech_index'

              }else{
                  that.condition = 'mkt_idx.keep_days_today'
                  that.mapCondition = 'keep_days'

              }
              this.kLineType = 'industry'
              this.hoverNodeId = that.industryData.slice(12)[params.dataIndex].induCode
              this.industryCode = that.industryData.slice(12)[params.dataIndex].induCode
              this.showHover = true
              let p1 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryIndustryStock', {
                      industryCode: this.industryCode
                  }).then(() => {
                      resolve();
                  })
              });
              let p2 = new Promise((resolve, reject) => {
                  this.$store.dispatch('plateMap/queryIndustryStockValue', {
                      isContinue: 1,
                      condition: that.condition,
                      industryCode: this.industryCode
                  }).then(({
                               result,
                               condition,
                               industryCode
                           }) => {
                      resolve(industryCode);
                  })
              });
              let p3 = new Promise((resolve, reject) => {
                  this.$store.dispatch('bullStock/getBullNewsInfo', {
                      plateId: that.industryData.slice(12)[params.dataIndex].induCode,
                      type:2,
                      location:'bottom'
                  }).then(() => {
                      resolve();
                  })
              });
              Promise.all([p1, p2, p3]).then((x) => {
                  if (x[1] !== this.hoverNodeId) {
                      console.info('invalide callback and do nothing');
                      return;
                  }
                  this.conditionStock = that.bullSelected
                  this.hoverNodeParent = {
                      id:this.industryCode,
                      perf:params.data[2],
                      perfText:params.data[2],
                      name:that.industryData.slice(12)[params.dataIndex].name
                  }
                  const stockInfoList = this.topicHoverStockValue
                  this.topicStockUpNo = 0;
                  this.topicStockDownNo = 0;
                  stockInfoList.forEach((stock) => { // 龙一股
                      if (stock.name === this.$store.state.plateMap.bestIndustryStock.name) {
                          that.hoverNode = stock
                      }
                      if (stock.perf && stock.perf >= 0) {
                          that.topicStockUpNo++
                      } else if (stock.perf && stock.perf < 0) {
                          that.topicStockDownNo++
                      }
                  })
                  const windowHeight = window.innerHeight
                  const stockNum = Math.ceil((windowHeight - 17 - 82) / 30)
                  if (stockInfoList.length > stockNum) {
                      stockInfoList.length = stockNum
                  }
                  this.hoverNodeParent.children = stockInfoList // 浮窗股票列表
              });
          })
          this.industryChartB.on('mouseout', (params) => {
              this.showHover = false
          });
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
  .markBox{
    display: inline-block;
    padding: 2px;
    color: #fff;
    margin-right: 4px;
    background-color: #ca4941;
    line-height: 13px;
    float: left;
  }
  .markTittle{
    display: inline-block;
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 17px;
    float: left;
  }
</style>