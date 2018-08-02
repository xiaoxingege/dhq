<style lang="scss" scoped="">
@import "../../assets/scss/style.scss";
.preferred-strategy-con {
    width: 100%;
}

.preferred-strategy-top {
    height: 15%;
    position: relative;
}

.preferred-strategy-table-wrap {
    height: 85%;
}

.preferred-strategy-table {
    float: left;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.preferred-strategy-table tr:hover {
    background-color: $hoverBgColor;
}
.preferred-strategy-table tr:first-child:hover {
    background-color: $bgConColor;
}

.preferred-strategy-table td span {
    cursor: pointer;
}

.preferred-strategy-table td {
    border: 1px solid $lineAndTitleColor;
    text-align: center;
    height: 12%;
    color: $wordsColorBase;
}
.preferred-strategy-table tr:nth-child(1) td {
    border-top-width: 0;
}
.preferred-strategy-table tr:last-child td {
    border-bottom-width: 0;
}
.preferred-strategy-table tr td:last-child {
    border-right-width: 0;
}
.preferred-strategy-table tr td:first-child {
    text-align: left;
    padding-left: 23px;
    padding-right: 0;
    border-left-width: 0;
}
.preferred-strategy-table tr:first-child td {
    border: 0 solid $lineAndTitleColor;
    height: 16%;
}

.more-preferred-strategy {
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    right: 10px;
    width: 40px;
    height: 100%;
}

.more-preferred-strategy a {
    color: $grayWordsColor;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
}
.help-img-wrap {
    width: 20px;
    height: 100%;
    position: absolute;
    right: 10px;
    top: 0;
}

.help-img-wrap img {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}

.help-window {
    @include noteBoxBig;
    position: absolute;
    bottom: 30px;
    left: 27px;
    padding: 15px;
    width: 300px;
    line-height: 18px;
    z-index: 9999;
}
.lineChart {
    width: 100%;
    height: 168px;
}

.syqxTab {
    position: absolute;
    left: 90px;
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
    color: #E1E1E1;
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
<div class="preferred-strategy-con">
  <div class="preferred-strategy-top">
    <NavBar :data="navText" :type="type" v-on:changeType="changeNavType"></NavBar>
    <div class="help-img-wrap">
      <img src='../../assets/images/z3img/help.png' @mouseover="showWindow" @mouseout="hideWindow" />
      <div class="help-window" v-if="isShowWindow">{{ hoverMsg }}</div>
    </div>
  </div>
  <div class="preferred-strategy-table-wrap clearfix">
    <div style="position: relative;">
        <ul class="syqxTab">
          <li @click="changeSyTab($event,1)" :class="{active: flagTime ===1}">近1月</li>
          <li @click="changeSyTab($event,2)" :class="{active: flagTime ===2}">近6月</li>
          <li @click="changeSyTab($event,3)" :class="{active: flagTime ===3}">近1年</li>
          <li @click="changeSyTab($event,0)" :class="{active: flagTime ===0}">全部</li>
        </ul>
     <div class="lineChart" ref="lineChart"></div>
    </div>
  </div>
</div>
</template>
<script>
import echarts from 'echarts'
import NavBar from 'components/z3touguhome/nav-bar'
import DataTable from 'components/z3touguhome/data-table'
import PositionBox from 'components/z3touguhome/position-box'
import { mapState } from 'vuex'
import {
  ctx
} from '../../z3tougu/config'
export default {
  props: [],
  data() {
    return {
      navText: [
        ['两融余额', 'goldTop'],
        ['北向资金', 'northGold'],
        ['南向资金', 'southGold']
      ],
      type: 'goldTop',
      stockList: [],
      noDataList: [],
      updateDataPid: null,
      intervalTime: 6,
      strategyId: '',
      isShow: false,
      positionNum: '当前持仓',
      tableTitle: '近一周累计收益',
      isShowWindow: false,
      hoverMsg : '两融余额代表杠杆资金动向，牛市初期为先行看好指标，牛市后期为先行见顶指标',
      flagTime : 2,
      dataName : '两融余额',
      dataName2 : '上证指数',
      xAxisData : [], // x轴数据(日期)
      indexPrice : [], // 两融余额
      marginBalance : [], // 上证指数
      northDate : [] , // 北向资金X轴数据
      shStkConnectMoney: [], // 沪股通资金(亿元)
      szStkConnectMoney:[], // 深股通资金(亿元)
      c : [], // 南向资金x轴数据
      hkStkShMoney :[], // 港股通(沪)资金(亿元)
      hkStkSzMoney : [], // 港股通(深)资金(亿元)
      isMillions : true
    }
  },
  watch: {
    type() {
      this.initPreferredStrategy() // 点击板块标签初始化表格数据
    },
    flagTime() {
      this.initPreferredStrategy()
    }
  },
  components: {
    NavBar,
    PositionBox,
    DataTable
  },
  computed: {
    ...mapState({
      twoMeltingInfo() {
        return this.$store.state.z3touguIndex.twoMeltingInfo
      },
      northFinanceInfo() {
        return this.$store.state.z3touguIndex.northFinanceInfo
      },
      southWardFundsInfo() {
        return this.$store.state.z3touguIndex.southWardFundsInfo
      }
    })
  },
  methods: {
    changeNavType(data) {
      this.type = data
      this.flagTime = 2 // 初始化成近6月
    },
    changeSyTime(time) {
      this.flagTime = time
    },
    initPreferredStrategy() {
      if (this.type === 'goldTop') {
        this.dataName = '两融余额'
        this.dataName2 = '上证指数'
        this.isMillions = true
        this.hoverMsg = '两融余额代表杠杆资金动向，牛市初期为先行看好指标，牛市后期为先行见顶指标'
        this.$store.dispatch('z3touguIndex/getTwoMeltingInfo', {
          flag: this.flagTime
        }).then(() => {
          if (this.twoMeltingInfo && this.twoMeltingInfo.length > 0) {
            this.stockList = this.twoMeltingInfo
            this.getAxisData(this.stockList) // 初始化数轴数据
            this.drawEcharts(this.xAxisData,this.marginBalance,this.indexPrice) // 画图表
          }
        })
      } else if (this.type === 'northGold') {
        this.dataName = '沪股通'
        this.dataName2 = '深股通'
        this.isMillions = false
        this.hoverMsg = '北向资金代表境外资金动向，北向资金流入额=当日限额-当日余额，资金流入额包含两部分：当日成交净买额，以及当日申报但未成交的买单金额。北向资金流入越多，境外资金购买意愿越强，则境外资金越看好A股。'
        this.$store.dispatch('z3touguIndex/getNorthFinanceInfo', {
          flag: this.flagTime
        }).then(() => {
          if (this.northFinanceInfo && this.northFinanceInfo.length > 0) {
            this.stockList = this.northFinanceInfo
            this.getNorthData(this.stockList) // 获取数轴数据
            this.drawEcharts(this.northDate,this.shStkConnectMoney,this.szStkConnectMoney) // 画图表
          }
        })
      } else {
        this.dataName = '港股通(沪)'
        this.dataName2 = '港股通(深)'
        this.isMillions = false
        this.hoverMsg = '南向资金代表内地资金动向，南向资金流入额=当日限额-当日余额，资金流入额包含两部分：当日成交净买额，以及当日申报但未成交的买单金额。南向资金流入越多，内地资金购买意愿越强，则内地资金越看好港股。'
        this.$store.dispatch('z3touguIndex/getSouthwardFundsInfo', {
          flag: this.flagTime
        }).then(() => {
          if (this.southWardFundsInfo && this.southWardFundsInfo.length > 0) {
            this.stockList = this.southWardFundsInfo
            this.getSouthData(this.stockList) // 获取数轴数据
            this.drawEcharts(this.southDate,this.hkStkShMoney,this.hkStkSzMoney) // 画图表
          }
        })
      }
    },
    autoUpdate: function() {
      const _this = this
      if (this.updateDataPid) {
        clearInterval(this.updateDataPid)
      } else {
        this.updateDataPid = setInterval(function() {
          _this.initPreferredStrategy()
        }, 1000 * _this.intervalTime)
      }
    },
    toStockList: function(type) {
      window.open(type)
    },
    formatData: function(value) {
      if (value || value === 0) {
        return false
      } else {
        return true
      }
    },
    formatDataPercent: function(val) {
      let getVal
      if (val || val === 0) {
        getVal = (100 * val).toFixed(2) + '%'
      } else {
        getVal = '--'
      }
      return getVal
    },
    showPositionBox: function(item, index) {
      if (this.type === 'southTop') {
        return
      }
      item.isShow = true
      this.strategyId = item.id
      for (let i = 0; i < document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div').length; i++) {
        document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div')[i].style.display = 'none'
      }
      document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div')[index].style.display = 'block'
    },
    hidePositionBox: function(item, index) {
      if (this.type === 'southTop') {
        return
      }
      document.getElementsByClassName('preferred-strategy-table')[0].getElementsByTagName('div')[index].style.display = 'none'
      item.isShow = false
    },
    linkDetail: function(id) {
      if (this.type === 'goldTop') {
        window.open(ctx + '/gold-strategy/' + id)
      } else if (this.type === 'northGold') {
        window.open(ctx + '/backtestFilter/' + id)
      } else if (this.type === 'northGold') {
        window.open(ctx + '/backtesttime/' + id)
      }
    },
    showWindow() {
      this.isShowWindow = true
    },
    hideWindow() {
      this.isShowWindow = false
    },
    getAxisData(data) { // 两融余额各项数据
        let tradeDate = []
        let indexPrice = []
        let marginBalance = []
          let keysArr = []
            for(let i in data[0]) {
               if(keysArr.indexOf(i) === -1) {
                   keysArr.push(i)
               }
            }
        data && data.forEach((item) => {
          if(item[keysArr[0]] !== null && item[keysArr[2]] !== null) {
            tradeDate.push(item[keysArr[1]])  // 日期
          }
            indexPrice.push(item[keysArr[0]]) // 上证指数
            marginBalance.push(item[keysArr[2]])  // 两融余额
        })
        this.indexPrice = indexPrice
        this.xAxisData = tradeDate
        this.marginBalance = marginBalance
    },
    getNorthData(data) { // 北向资金各项数据
      let northDate = []
      let shStkConnectMoney = [] // 沪股通资金(亿元)
      let szStkConnectMoney = [] // 深股通资金(亿元)
      data && data.forEach((item) => {
        if(item.shStkConnectMoney !== null && item.szStkConnectMoney !== null) {
            northDate.push(item.tradeDate) // 北向日期
        }
            shStkConnectMoney.push(item.shStkConnectMoney)  // 沪股通资金(亿元)
            szStkConnectMoney.push(item.szStkConnectMoney)  // 深股通资金(亿元)
      })
      this.northDate = northDate
      this.shStkConnectMoney = shStkConnectMoney
      this.szStkConnectMoney = szStkConnectMoney
    },
    getSouthData(data) { // 南向资金各项数据
      let southDate = []
      let hkStkShMoney = [] // 沪股通资金(亿元)
      let hkStkSzMoney = [] // 深股通资金(亿元)
      data && data.forEach((item) => {
        if(item.hkStkShMoney !== null && item.hkStkSzMoney !== null) {
          southDate.push(item.tradeDate) // 北向日期
        }
            hkStkShMoney.push(item.hkStkShMoney)  // 港股通(沪)资金(亿元)
            hkStkSzMoney.push(item.hkStkSzMoney)  // 港股通(深)资金(亿元)
        })
        this.southDate = southDate
        this.hkStkShMoney = hkStkShMoney
        this.hkStkSzMoney = hkStkSzMoney
    },
    drawEcharts(xData,blueLine,redLine) {
      if (this.chart !== null && this.chart !== '' && this.chart !== undefined) {
        this.chart.dispose();
      }
        this.chart = echarts.getInstanceByDom(document.getElementsByClassName('lineChart')[0]) || echarts.init(document.getElementsByClassName('lineChart')[0], {
          width: window.screen.width / 100 + 'rem',
          height: 2.1 + 'rem'
        })
        let millions = this.isMillions
        let Yname = millions ? '单位 : 万亿' : '单位 : 亿'
        
        this.chart.setOption({
          legend: { // 右上角(图例)
            right: 0,
            top: '5px',
            itemHeight : 1,
            itemGap : 3,
            orient: 'vertical',
            selectedMode : false,
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
                  let seriesName = params[i].seriesName
                  let result = Number(params[i].value)
                  let res = ''
                  if(Number(result) !== 0) {
                      res = isNaN(result) ? '--' : result >=10000 ? Number(result/10000).toFixed(2) + '万亿' : Number(result).toFixed(2) + '亿'
                  }else {
                      res = 0
                  }
                  s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>'+ seriesName +': ' + res
                }
                if (i === 1) {
                  let seriesName = params[i].seriesName
                  let result = Number(params[i].value)
                  let res = ''
                  if(millions){
                      res = isNaN(result) ? '--' : Number(result) === 0 ? 0 : Number(result).toFixed(2)
                  }else {
                    if(Number(result) !== 0) {
                        res = isNaN(result) ? '--' : result >=10000 ? Number(result/10000).toFixed(2) + '万亿' : Number(result).toFixed(2) + '亿'
                    }else {
                        res = 0
                    }
                  }
                    s = s + '<br/><span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
                    params[i].color + '"></span>'+ seriesName +': ' +res
                }
              }
              return s
            }
          },
          xAxis: {
            interval: 4,
            type: 'category',
            boundaryGap: false,
            axisLabel: {
              color: '#808ba1'
            },
            axisLine : { // 坐标轴轴线相关设置
              onZero : false
            },
            axisTick : { // 坐标轴刻度相关设置
              show : false
            },
            data: xData
          },
          yAxis: [{
            name: Yname,
            show: true,
            type: 'value',
            interVal : 4,
            axisTick : { // 坐标轴刻度相关设置
              show : false
            },
            axisLabel: {  // 坐标轴刻度的相关设置
              formatter: function(val) {
                let num = millions ? (val/10000).toFixed(2) :Math.round(val)
                return  num
              },
              color: '#808ba1'
            },
            nameTextStyle: {
              fontSize: 12,
              color : '#707D90'
            },
            position: 'left',
            splitLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            },
            min : 'dataMin',
            max : 'dataMax',
            splitNumber: 5,
            scale: true,
            boundaryGap: true
          },{
            show: true,
            type: 'value',
            interVal : 4,
            axisLabel: {  // 坐标轴刻度的相关设置
              formatter: function(val) {
                return Math.round(Number(val))
              },
              color: '#808ba1'
            },
            axisTick : { // 坐标轴刻度相关设置
              show : false
            },
            position: 'right',
            splitLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#2A2E36'
              }
            },
            min : null,
            max : null,
            // splitNumber: 5,
             scale: true // 是否必须包含0刻度，true不包含
            // boundaryGap: false
          }],
          series: [{
             yAxisIndex: 0,
              data: blueLine,
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
              yAxisIndex: 1,
              data: redLine,
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
            width: '90%',
            height: '75%',
            left: '5%',
            top: '20%',
            right: '5%',
            containLabel: true
          }
      })
      const that = this
      window.onresize = function() {
        that.chart.resize()
      }
    },
    changeSyTab(e, dateNum) {
        this.flagTime = dateNum     
    }
  },
  mounted() {

    this.initPreferredStrategy()
    // this.autoUpdate()
  },
  destroyed() {
    // this.updateDataPid && clearInterval(this.updateDataPid)
  }
}
</script>
