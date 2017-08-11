<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    em,i{
      font-style: normal;
    }
    a{
      color: #191919;
    }
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a !important;
    }
    .green {
      color:#48a854 !important;
    }
    .fr{
      float: right;
    }
    .fl{
      float: left;
    }
    .mb-8{
      margin-bottom: 8px;
    }
    .mr-8{
      margin-right: 8px;
    }
    .display-box {
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -o-box;
      display: box;
    }
    .box-flex-1 {
      -webkit-box-flex: 1;
      -moz-box-flex: 1;
      -ms-flex: 1;
      -o-box-flex: 1;
      box-flex: 1;
    }
    body,html{
      /* height: 100%; */
    }
    .topic-detail{
        width: 100%;
        background: #f2f2f2;
        font-size: 12px;
        color: #191919;
       /*  height: 100%; */
    }
    .header{
      padding: 19px 0 6px 18px;
      font-size: 12px;
    }
    .topic-time{
       margin-right: 14px;

    }
    .topic-time span{
      display: inline-block;
    }
    .time-num{
      width: 90px;
      text-align: center;
    }
    .time-num2{
      width: 49px;
      text-align: center;
    }
    .time-num3{
      width: 61px;
      text-align: center;
    }
    .time-num4{
      width: 37px;
      text-align: center;
    }
    
    .detail-content{
      margin: 9px;
    }

    .main-left{
      width: 60%;
    }
    .left-con1{
      background: #fff;
      border-radius: 3px;
      padding: 20px 25px 20px 18px;
      /* height: 82px; */
      height: auto;
      line-height: 18px;
    }
    .left-con1 strong{
      padding-bottom: 3px;
      display: inline-block;
    }
    .left-con2{
      background: #fff;
      border-radius: 3px;
      height: 317px;
      padding: 11px 19px 12px 0;
      position:relative;
    }
    .left-con3{
      background: #fff;
      border-radius: 3px;
      padding: 13px 25px 10px 13px;
    }
    .in-content{
      line-height: 18px;
    }
    .in-title{
      line-height: 62px;
    }
    .new-tit{
      width: 70%;
      text-align: left;
      float: left;
      white-space: nowrap;  
      overflow: hidden;  
      text-overflow: ellipsis; 

    }
    .new-date{
     /*  color: #7e7e7e; */
      line-height: 24px;
      float: left;
      width: 12%;
      text-align: right;
    }
    .new-srcname{
      line-height: 24px;
      float: left;
      width: 12%;
      text-align: right;
    }
    .in-content a:hover{
      color: #2388da;
    }
    .left-con3 strong{
      display: inline-block;
    }
    .view-all{
      position:relative;
      margin-top: 10px;
      margin-right: 7%;
      cursor: pointer;
      background: #fff;
    }
    .view-all2{

    }
    .view-all i{
      width: 0;
      height: 0;
      border: 6px solid transparent;
      border-left-color: #8eb6dd;
      display: inline-block;
      position: absolute;
      top: 2px;
      left: 51px;
    }
    .main-right{
      width: 39%;
    }
    .right-con{
       background: #fff;
       border-radius: 3px;
    }
    table{
      border-spacing: 1px;
      width: 100%;
      /* border-collapse:collapse; 
      border-spacing:0;  */
      padding-bottom: 10px;
    }
    .right-con th{
      background: #eff3f8;
      padding: 11px 0 8px 0;
      text-align: center;
      width: 100%;
    }
    .right-con td{
      text-align: center;
      width: 18%;
      float: left;
      font-weight: 400;
    }
   .right-con tbody tr{
      width: 100%;
      border-bottom: 1px solid #e5e5e5;
    }
   .right-con tbody tr td{
     line-height: 42px;
    }
    .td-tit1{
      position: relative;
    }
    .txt-td{
      position: absolute;
      top: -5px;
      left: 31%;
    }
    .num-td{
      position: absolute;
      top: 10px;
      left: 34%;
      font-size: 12px;
    }
    .right-con .td1{
      width: 22%;
    }
    .chart{
       height: 100%;
       width: 100%;
    }
    .time-ul{
     position: absolute;
     right: 2%;
     top: 3%;
    }
    .time-ul li{
      float: left;
      color: #2388da;
      border: 1px solid #ddd;
      padding: 5px 10px;
      margin-right: -1px;
      -webkit-border-radius: 2px;
      -moz-border-radius: 2px;
      border-radius: 2px;
    }
    .chart-title{
      position: absolute;
      left: 2%;
      top: 3%;
    }
    .time-ul .active{
      color: #fff;
      background-color: #2388da;
      border-color: #2388da;
    }
</style>
<template>
    <div class="topic-detail">
        <div class="header clearfix">
            <strong>{{detail.topicName}}</strong>
            <div class="topic-time fr">
                 <span class="">发布时间</span><span class="blue time-num">{{format(detail.declareDate)}}</span><span>成分股数</span><span class="blue time-num2">{{detail.equityNum}}只</span><span>相关新闻</span><span class="blue time-num2">{{detail.eventNum}}条</span>
                 <span>今日涨跌</span>
                 <span class="time-num3" :class="detail.topicMarket.chngPct>0 ? 'red':'green'">{{detail.topicMarket.chngPct}}</span><span>上涨股票</span><span class="red time-num4">{{detail.topicMarket.stkUpNum}}</span><span>下跌股票</span><span class="green time-num4">{{detail.topicMarket.stkDownNum}}</span>
            </div>
        </div>
        <div class="detail-content">
              <div class="detail-main">
                  <div class="main-left fl mr-8">
                      <div class="left-con1 mb-8">
                          <strong>最新事件</strong>
                          <div><span>{{detail.title}}</span>  <span>{{format(detail.newsDeclareDate)}}</span>
                          </div>
                          <div>
                             <span>{{detail.summary}}</span>
                            （<span>{{detail.srcName}}</span>）
                          </div>
                      </div>
                      <div class="left-con2 mb-8">
                        <div class="chart-title">雄安新区风分股累计收益率</div>
                        <ul class="time-ul">
                            <li @click="renderCharts($event)">日内</li>
                            <li >近1月</li>
                            <li >近3月</li>
                            <li >近6月</li>
                            <li >近1年</li>
                            <li >近3年</li>
                            <li  class="active">全部</li>
                        </ul>
                          <div class="chart" ref="chart"></div>
                      </div>
                      <div class="left-con3 clearfix">
                          <strong class="mb-8" v-if="index==0" v-for="(infor,index) of informatList">{{infor.topicName}}</strong><strong>相关资讯</strong>
                          <div class="in-content">
                              <a class="new-link clearfix" v-if="informatList && informatList.length > 0" v-for="infor of informatList">
                                <span class="new-tit">{{infor.title}}</span>
                                 <span class="new-date">{{format(infor.declareDate)}}</span>
                                 <span class="new-srcname">{{infor.srcName}}</span>
                              </a>
                              
                          </div>
                          <div class="view-all blue fr"><span>查看全部</span><i></i></div>
                      </div>
                  </div>
                  <div class="main-right fl">
                        <table class="right-con clearfix">
                          <thead>
                             <th class="fl mb-8">
                               <td class="td1">雄安新区相关股票</td>
                               <td>最新价</td>
                               <td>涨跌幅</td>
                               <td>所属申万行业</td>
                               <td>关联说明</td>
                             </th>
                          </thead>
                          <tbody>
                              <tr class="fl" v-for="stock of stockList">
                                 <td class="td1 td-tit1"><span class="blue txt-td">{{stock.name}}</span><small class="num-td">{{stock.symbol}}</small></td>
                                 <td :class="stock.price>0 ? 'red':'green'">{{stock.price==null?'--':stock.price}}</td>
                                 <td :class="stock.curChngPct>0 ? 'red':'green'">{{stock.curChngPct==null?'--':changeTofixed(stock.curChngPct)}}</td>
                                 <td>{{stock.industryName}}</td>
                                 <td class="blue" :title="stock.topicMark">关联原因</td>
                              </tr>
                             
                          </tbody>
                          <tfoot>
                                <div class="view-all blue fr view-all2"><span>查看全部</span><i></i></div></td>
                          </tfoot>
                        </table>
                        
                  </div>
              </div>
        </div>      
        <!--<div class="con">
             <div class="left">
                <div class="desc"></div>
                <div class="yield">
                    <div><ul><li>日内</li><li>近一月</li><li>近三月</li><li>近六月</li><li>近一年</li><li>近三年</li><li>全部</li></ul></div>
                    <div class="chart" ref="chart"></div>
                </div>
                <div class="news"></div>
            </div>
            <div class="right">
                <div class="stock-list"></div>
            </div> 
        </div>-->
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import echarts from 'echarts'
    import { formatDate } from 'utils/date'

    export default{
      data () {
        return {
          period: 'ALL',
          topicCode: this.$route.params.topicId
        }
      },
      computed: {
        ...mapState({
          lineData: state => state.topic.lineData,
          news: state => state.topic.news,
          informatList: state => state.topic.informatList,
          stockList: state => state.topic.stockList,
          detail: state => state.topic.detail,
          chartData: state => {
            const chartData = state.topic.allCharts
            const topicReturnRate = []
            const hs300ReturnRate = []
            const tradeDate = []
            chartData && chartData.forEach(item => {
              topicReturnRate.push(item.topicReturnRate)
              hs300ReturnRate.push(item.hs300ReturnRate)
              tradeDate.unshift(item.tradeDate)

  // return {
  //   topicName: item.topicName,
  //   tradeDate: item.tradeDate,
  //   topicReturnRate: item.topicReturnRate,
  //   hs300ReturnRate: item.hs300ReturnRate
  // }
            })
            return {
              topicReturnRate: topicReturnRate,
              hs300ReturnRate: hs300ReturnRate,
              tradeDate: tradeDate
            }
          }
        //   stockNum: state => state.topic.stockList.length,
        //   newsNum: state => state.topic.news.length
    
        })
      },
      watch: {
      /*  period () {
           if (this.period != 'day') {

          } else {
            this.updateChart()
          }
        },*/
        /* chartData () {
          监测setOption
        }*/
    
      },
      methods: {
        initChart () {
          debugger
         /* this.chart = echarts.init(this.refs.chart)*/
          this.chart = echarts.init(this.$refs.chart)
          this.$store.dispatch('topic/queryAllCharts', { period: this.period, topicCode: this.topicCode })
                      .then(() => {
                        this.chart.setOption({
                          tooltip: {
                            trigger: 'axis',
                            formatter: function (params) {
                              if (params.length) {
                                if (params[0].value !== '') {
                                  var boxHtml = '<div>' + params[0].name + '<br/>'
                                }
                                for (var i = 0; i < params.length; i++) {
                                  var param = params[i]
                                  if (param.value !== '') {
                                    boxHtml += '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + param.color + '\'></span>' + ' ' + param.seriesName + ': ' + param.value + '%<br/></div>'
                                  }
                                }
                                return boxHtml
                              }
                            }
                          },
                          legend: {
                            left: '3%',
                            top: 30,
                            itemWidth: 15,
                            itemHeight: 8,
                            data: [{
                              name: '策略累计收益率',
                              icon: 'pin'
                            },
                            {
                              name: '沪深300',
                              icon: 'pin'
                            }]
    
                          },
                          toolbox: {
                            show: false
                          },
                          calculable: true,
                          xAxis: [
                            {
                              type: 'category',
                              boundaryGap: false,
                              data: this.chartData.tradeDate,
                              axisLabel: {
                                                    // X轴刻度配置
                                interval: 'auto' // 0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
                              }
                            }
                          ],
                          yAxis: [
                            {
                              type: 'value',
                              axisLabel: {
                                formatter: '{value}%'
                              }
                            }
                          ],
                          grid: {
                              /* width: '97%',*/
                            left: '1%',
                            right: '1%',
                             /* bottom: '50',*/
                            containLabel: true
                          },
                          dataZoom: [
                            {
                              show: true,
                              showDetail: false,
                              type: 'slider',
                              y: '88%',
                              start: 0,
                              end: 100
                            }
                          ],
                          series: [{
                            name: '策略累计收益率',
                            type: 'line',
                            smooth: true,
                            data: this.chartData.topicReturnRate,
                            lineStyle: {// 网格线
                              normal: {
                                color: '#5597d3'
                              }
                            },
                            itemStyle: {// 折线拐点标志的样式
                              normal: {
                                opacity: 0,
                                color: '#5597d3'
                              }
                            },
                            markPoint: {// 图标标注
                              data: [
                                                { type: 'max', name: '最大值' },
                                                { type: 'min', name: '最小值' }
                              ],
                              label: {
                                normal: {
                                  show: false
                                }
                              },
                              symbolSize: 10, // 标记大小
                              symbol: ''// 标记的图形
                            }
                          },
                          {
                            name: '沪深300',
                            type: 'line',
                            smooth: true,
                            data: this.chartData.hs300ReturnRate,
                            lineStyle: {
                              normal: {
                                color: '#f1975d'
                              }
                            },
                            itemStyle: {
                              normal: {
                                opacity: 0,
                                color: '#f1975d'
                              }
                            },
                            markPoint: {// 图标标注
                              data: [
                                                { type: 'max', name: '最大值' },
                                                { type: 'min', name: '最小值' }
                              ],
                              label: {
                                normal: {
                                  show: false
                                }
                              },
                              symbolSize: 10, // 标记大小
                              symbol: ''// 标记的图形
                            }
                          }]
    
                        })
                      })
        },
    
        updateChart () {

        },
        initStockList () {
        //   this.$store.dispatch('z3tougu-theme/queryTopicStocks')
        },
        initNews () {

        },
        format (date) {
          return formatDate(date)
        },
        changeTofixed (num) {
          return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
        }/* this.$store.dispatch('stockMap/queryRangeByCode', { code: this.rangeCode })
                    .then(() => {
                      this.chart.setOption({*/
        /* drawCharts () {
          const myChart = echarts.init(document.getElementById('chart'))*/
    
      },
      mounted () {
        this.initChart()
        /* this.initStockList()
        this.initNews()*/
        this.$store.dispatch('topic/queryInformatList', { topicCode: this.topicCode })
        this.$store.dispatch('topic/queryStockList', { topicCode: this.topicCode })
        this.$store.dispatch('topic/queryDetailHead', { topicCode: this.topicCode })
        // this.drawCharts()
      }
    }
</script>
