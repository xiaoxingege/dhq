<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    body{
      font-size: 12px;
      background: #f2f2f2;
    }
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a ;
    }
    .green {
      color:#48a854 ;
    }
    .fr{
      float: right;
    }
    .fl{
      float: left;
    }
    .backtest-time{
        background: #f2f2f2;
        color: #191919;
        width: 100%;
        font-size: 12px;
    }
    .btime-main{
       padding: 0 10px 0;
    }
   
    .time-inp-box{
      background: #fff;
      margin-top: 10px;
      padding: 14px 10px 14px 11px;
    }
    .time-inp{
      padding-left: 6px;
    }
    .ana-btn{
      width: 40px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border: 1px solid #e5e5e5;
      display: inline-block;
      background: #f2f2f2;
      cursor: pointer;
    }
    .label-txt{
      padding-right: 50px;
    }
    .k-line-box{
        padding: 11px 7px 20px 6px;
        background: #fff;
        margin-top: 10px;
        position: relative;

    }
    .kcharts{
      height: 360px;
    }
    .ma-box{
      position: absolute;
      top: 10%;
      left: 3%;
      width: 50%;
    }
    .ma5{
      color: #e75443;
    }
    .ma10{
      color: #942a52;
    }
    .ma20{
      color:#f6bc4d;
    }
    .ma30{
      color: #2388da;
    }
    .mawidth{
      width: 6%;
      display: inline-block;
    }
    
</style>
<template> 
   <div class="backtest-time">
      <div class="btime-main">
           <BackTimeStra/> 
           <div class="time-inp-box">
               <label class="label-txt">全部A股中，单只股票近一年买卖点分析</label>
               <input type="text" name="inp" placeholder="请输入股票名称/代码" class="time-inp">
               <span class="ana-btn">分析</span>
           </div>
           <div class="k-line-box"> 
                <!-- <div>格力电器买卖点分析</div> -->
                 <div class="ma-box">
                     <span class="ma5">MA5：</span><span class="ma5 mawidth">{{ma5}}</span><span class="ma10">MA10：</span><span class="ma10 mawidth">{{ma10}}</span><span class="ma20">MA20：</span><span class="ma20 mawidth">{{ma20}}</span><span class="ma30">MA30：</span><span class="ma30 mawidth">{{ma30}}</span>
                     <div></div>
                 </div>
                <div class="kcharts" ref="kcharts"></div>
           </div> 
              
      </div>
      
      
   </div>
       
</template>

<script>
 import { mapState } from 'vuex'
 import echarts from 'echarts'
 import BackTimeStra from './back-time-stra'
 export default {
   data () {
     return {
       ma5: '--',
       ma10: '--',
       ma20: '--',
       ma30: '--',
       strategyId: this.$route.params.strategyId

     }
   },
   computed: mapState({
     kLineDataAll: state => {
       const dataAll = state.backtestDetail.kLineData
       const kLine = dataAll.kLine.reverse()
       const kLineXdata = []
       const kLineYdata = []
       const ma5 = []
       const ma10 = []
       const ma20 = []
       const ma30 = []
       kLine && kLine.forEach(item => {
         const openPx = item.openPx// 开盘价
         const closePx = item.closePx// 收盘价
         const highPx = item.highPx// 最高价
         const lowPx = item.lowPx// 最低价
         kLineXdata.push(item.endDate)
         kLineYdata.push([openPx, closePx, highPx, lowPx])
         ma5.push(item.ma5)
         ma10.push(item.ma10)
         ma20.push(item.ma20)
         ma30.push(item.ma30)
       })
       return {
         kLineXdata: kLineXdata,
         kLineYdata: kLineYdata,
         ma5: ma5,
         ma10: ma10,
         ma20: ma20,
         ma30: ma30
       }
     }
   }),
   components: {
     BackTimeStra
   },
   methods: {
     init () {
       this.chart = echarts.init(this.$refs.kcharts)
       this.$store.dispatch('backtestDetail/queryKline', { strategyId: this.strategyId })
            .then(() => {
              this.drawCharts(this.kLineDataAll.kLineXdata, this.kLineDataAll.kLineYdata, this.kLineDataAll.ma5, this.kLineDataAll.ma10, this.kLineDataAll.ma20, this.kLineDataAll.ma30)
            })
     },
     drawCharts (kLineXdata, kLineYdata, ma5, ma10, ma20, ma30) {
       const self = this
       self.chart.setOption({
         title: {
           text: '格力电器买卖点分析',
           left: '1%',
           textStyle: {
             color: '#191919',
             fontFamily: '宋体',
             fontSize: 12,
             fontStyle: 'normal',
             fontWeight: 'normal'
           }
         },
         tooltip: {
           trigger: 'axis',
           axisPointer: {
             type: 'cross'
           },
           formatter: function (t) {
             // console.log(t)
             var time = t[0].name
             var openPx = t[0].value[1]
             var closePx = t[0].value[2]
             var highPx = t[0].value[3]
             var lowPx = t[0].value[4]
             self.ma5 = t[1].value
             self.ma10 = t[2].value
             self.ma20 = t[3].value
             self.ma30 = t[4].value
             console.log(self.ma5)
             for (var i = 0; i < t.length; i++) {
               if (t[i].seriesName === 'MA5') {
                 var ma5 = t[i].value

                 // this.ma5 = t[1].value
 
                           // 更新ma20
                // $('#kma20').html(ma20)
               } else if (t[i].seriesName === 'MA10') {
                 var ma10 = t[i].value
                 // this.ma10 = t[2].value
 
                          // 更新ma60
                 // $('#kma60').html(ma60)
               } else if (t[i].seriesName === 'MA20') {
                 var ma20 = t[i].value
                 // this.ma20 = t[3].value
 
                          // 更新ma120
                 // $('#kma120').html(ma120)
               } else if (t[i].seriesName === 'MA30') {
                 var ma30 = t[i].value
                 // this.ma30 = t[4].value
 
                          // 更新ma120
                 // $('#kma120').html(ma120)
               }
             }
             // return 123
             return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
                    '<br/>最低价：' + (lowPx || '--') + '<br/>MA5：' + (ma5 || '--') + '<br/>MA10：' + (ma10 || '--') +
                    '<br/>MA20：' + (ma20 || '--') + '<br/>MA30：' + (ma30 || '--')
           }
         },
         legend: {
           data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
         },
         grid: {
           left: '2.5%',
           right: '2%',
           bottom: '10%'
         },
 
         xAxis: {
           type: 'category',
           data: kLineXdata,
           scale: true,
           boundaryGap: false,
           axisLine: { onZero: false },
           splitLine: { show: true },
           splitNumber: 5,
           min: 'dataMin',
           max: 'dataMax'
         },
 
         yAxis: {
           scale: true,
           splitArea: {
             show: false
           },
           axisTick: {
             show: false
           },
           splitLine: {
             show: true
           },
           axisLine: {
             show: false
           },
           axisLabel: {
             show: false
           }
         },
 
         series: [
           {
             name: '日K',
             type: 'candlestick',
             data: kLineYdata,
             barWidth: '3',
             itemStyle: {
               normal: {
                 color: '#e6363a',
                 color0: '#48a854',
                 borderColor: '#ff4040',
                 borderColor0: '#2dc678'
               }
             },
             markPoint: {
               symbol: 'image://src/assets/images/z3img/kline-red.png',
               symbolSize: 25,
               label: {
                 normal: {
                   formatter: function (param) {
                     return param != null ? Math.round(param.value) : ''
                   }
                 }
               },
               data: [
                 {
                   name: 'XX标点',
                   coord: ['2013/5/31', 2300],
                   value: 2300,
                   itemStyle: {
                     normal: { color: 'rgb(41,60,85)' }
                   }
                 },
                 {
                   name: 'highest value',
                   type: 'max',
                   valueDim: 'highest'
                 },
                 {
                   name: 'lowest value',
                   type: 'min',
                   valueDim: 'lowest'
                 },
                 {
                   name: 'average value on close',
                   type: 'average',
                   valueDim: 'close'
                 }
               ],
               tooltip: {
                 formatter: function (param) {
                   console.log(param)
                 /* for(var i=0;i<t.length;i++){
                     if(t[i].seriesName =='MA20'){
                       var ma20 = toDecimalN(t[i].value);
                           //更新ma20
                                 $("#kma20").html(ma20);
                     }else if(t[i].seriesName =='MA60'){
                       var ma60 = toDecimalN(t[i].value);
                         //更新ma60
                                 $("#kma60").html(ma60);
                     }else if(t[i].seriesName =='MA120'){
                       var ma120 = toDecimalN(t[3].value);
                         //更新ma120
                                 $("#kma120").html(ma120);
                     }
                   }
                       return "时间："+time+"<br/>开盘价："+(openPx||"--")+"<br/>收盘价："+(closePx||"--")+"<br/>最高价："+(highPx||"--")+
                    "<br/>最低价："+(lowPx||"--")+"<br/>MA20："+(ma20||"--")+"<br/>MA60："+(ma60||"--")+
                    "<br/>MA120："+(ma120||"--")+"<br/>成交量："+(volume||"--");*/
                   return param.name + '<br>' + (param.data.coord || '')
                 }
               }
             }
           },
           {
             name: 'MA5',
             type: 'line',
             data: ma5,
             smooth: true,
             lineStyle: {
               normal: {
                 opacity: 0.5,
                 color: '#e75443'
               }
             }
           },
           {
             name: 'MA10',
             type: 'line',
             data: ma10,
             smooth: true,
             lineStyle: {
               normal: {
                 opacity: 0.5,
                 color: '#942a52'
               }
             }
           },
           {
             name: 'MA20',
             type: 'line',
             data: ma20,
             smooth: true,
             lineStyle: {
               normal: {
                 opacity: 0.5,
                 color: '#f6bc4d'
               }
             }
           },
           {
             name: 'MA30',
             type: 'line',
             data: ma30,
             smooth: true,
             lineStyle: {
               normal: {
                 opacity: 0.5,
                 color: '#2388da'
               }
             }
           }

         ]
       })
     },
     changePer (num) {
       return (Number(num) * 100).toFixed(2) + '%'
     },
     changeDate (time) {
       return (time + '').substring(0, 4) + '.' + (time + '').substring(4, 6) + '.' + (time + '').substring(6, (time + '').length)
     }

   },
   mounted () {
     this.init()
     // this.$store.dispatch('')
   }
 
 }
</script>
