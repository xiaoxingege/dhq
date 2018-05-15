<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-size: $fontSizeBase;
    /*  color: $wordsColorBase; */
}
/*$bgDeepColor:#0d0e0f;/* 最深背景 */
/*$bgConColor:#141518;/* 内容背景 */
/*$lineAndTitleColor:#23272c;/* 线条颜色和内容标题背景 */
/*$bgNavColor:#404852;/* 导航外框背景 */
/*$wordsColorBase:#c9d0d7;/* 最亮文字颜色 */
/*$grayWordsColor:#808ba1;/* 灰色文字颜色 所有图标颜色 */
/*$menuSelColor:#525a65;/* 二级菜单选中颜色 */
/*$blueWordsColor:#1984ea;/* 蓝色文字色 */
/*$hoverBgColor:#2e4465;/* 鼠标滑过列表背景色 */
/*$upColor:#ca4941;/* 所有红色 上涨 */
/*$downColor:#56a870;/* 所有绿色 上涨 */
/*$backupYellow:#f0b540;/* 备用黄色 */
/*$fontSizeBase:12px; /* 基本字体 */
.topic-detail {
    width: 100%;
    background: #141518;
    font-size: 12px;
    color: #c9d0d7;
    /* height: 100%; */
    border-left: 1px solid #0d0e0f;
    border-bottom: 3px solid #0d0e0f;
}
.app,
body,
html {
    height: 100%;
    /*background-color: $bgDeepColor;*/
}

body {
    background-color: $bgDeepColor;
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
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.clinic-top-left {

    border-right: 1px solid $lineAndTitleColor;
}
.red {
    color: $upColor;
}

.green {
    color: $downColor;
}
.lightcolor {
    color: $wordsColorBase;
}
.c_txt {
    color: $wordsColorBase;
}

.radar-box {
    height: 180px;
    position: relative;
    left: 15%;
}
.radarChart {
    height: 100%;
    width: 100%;

}

.desc-red {
    border: 1px solid $upColor;

}
.desc-green {
    border: 1px solid $downColor;

}

.pl-5 {
    padding-left: 5px;
}

.clinic-dime-wrap {
    background-color: $bgConColor;
}
.tab-ul {
    width: 100%;
    background: $bgNavColor;
}
.tab-ul li {
    width: 70px;
    height: 30px;
    line-height: 30px;
    background: $bgNavColor;
    text-align: center;
    border-right: 1px solid $bgDeepColor;
    cursor: pointer;
}
.tab-ul li.active {
    background: $menuSelColor;
}
.dime-kline {
    padding: 10px;
    clear: both;

}
.kline-title {

    line-height: 41px;
    border-bottom: 1px solid $lineAndTitleColor;
    font-size: 14px;
    font-weight: 900;
}
.kline-title2 {
    /*padding: 10px 7px;*/
    /*  padding: 10px 7px 16px; */
    height: 62px;
    padding: 10px 5px;
    font-size: 14px;
}
.kline {
    /* height: 264px; */
    height: 450px;
}
.kline-charts {

    /*  height: 264px; */
    height: 450px;
    width: 100%;
}
.assess1 {
    padding-left: 5px;
    font-size: 14px;
}
.txt {
    padding-top: 5px;
}
.txt > div {
    margin-right: 10px;
    float: left;
}
.txt .volu-box {
    margin-right: 0;
}
.volume {
    width: 72px;
    display: inline-block;
}
.kma5 {
    color: #c9d0d7;
    cursor: pointer;
}

.kma10 {
    color: #e6e603;
    cursor: pointer;
}
.kma20 {
    color: #d776d7;
    cursor: pointer;
}
.kma30 {
    color: #2fb92f;
    cursor: pointer;
}
.kma60 {
    color: #1879d5;
    cursor: pointer;
}
.kma120 {
    color: #e69603;
    cursor: pointer;
}

.triangle {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #f2f2f2;
    position: relative;
    top: -25px;
}
.gray {
    color: $grayWordsColor;
}
</style>
<template>
<div class="dime-kline">
  <div>
    <div class="kline-title">
      个股近120日技术指标多空信号分布（注：日K线前复权）
      <!--  {{techFace.title}}<span class="assess1" :class="checkStatus(techFace.status)">{{techFace.tag==null?'':techFace.tag}}</span> -->
    </div>
    <!-- <div class="kline-title2">{{techFace.describe==null?'':techFace.describe}}</div> -->
    <div id="fstxt" class="txt clearfix">
      <div>
        时间：<span class="num" id="kdate" ref='kdate'>{{endDate}}</span>
      </div>
      <div class="">
        今开：<span class="price cred" id="open" ref='open'>{{openPx}}</span>
      </div>
      <div class="">
        最高：<span class="price cred" id="high" ref='high'>{{highPx}}</span>
      </div>
      <div class="">
        最低：<span class="price cred" id="low" ref='low'>{{lowPx}}</span>
      </div>
      <div class="">
        昨收：<span class="price cred" id="prevClosePx" ref='prevClosePx'>{{prevClosePx}}</span>
      </div>
      <div class="volu-box">成交量：<span class="volume" id="volume" ref='volume'>{{volume}}</span></div>
      <div class="chg">涨幅：<span class="num" id="chgPct" ref='chgPct'>{{chgPct}}%</span></div>
      <div class="kma5" @click="showMa('Ma5')" :class="opacityMa5===0?'gray':''">MA5：<span id="kma5" ref='kma5'>{{ma5}}</span></div>
      <div class="kma10" @click="showMa('Ma10')" :class="opacityMa10===0?'gray':''">MA10：<span id="kma10" ref='kma10'>{{ma10}}</span></div>
      <div class="kma20" @click="showMa('Ma20')" :class="opacityMa20===0?'gray':''">MA20：<span id="kma20" ref='kma20'>{{ma20}}</span></div>
      <div class="kma30" @click="showMa('Ma30')" :class="opacityMa30===0?'gray':''">MA30：<span id="kma30" ref='kma30'>{{ma30}}</span></div>
      <div class="kma60" @click="showMa('Ma60')" :class="opacityMa60===0?'gray':''">MA60：<span id="kma60" ref='kma60'>{{ma60}}</span></div>
      <div class="kma120" @click="showMa('Ma120')" :class="opacityMa120===0?'gray':''">MA120：<span id="kma120" ref='kma120'>{{ma120}}</span></div>
      <!--  <div>MA250：<span class="num" id="kma250" ref='kma250'>208.00</span></div> -->
    </div>
  </div>
  <div id="toolpoint" style="position: absolute;" ref='toolpoint'></div>
  <div class="kline-charts" ref="klineChart">

  </div>

</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
/* import {
  formatDateStr
} from 'utils/date' */
import config from '../../z3tougu/config'
import util from '../../z3tougu/util'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
export default {
  // props: ['innerCode'],
  data() {
    return {
      code: this.$route.params.innerCode,
      innerCode: '',
      ma5: '--',
      ma10: '--',
      ma20: '--',
      ma30: '--',
      ma60: '--',
      ma120: '--',
      ma250: '--',
      endDate: '--',
      openPx: '--',
      highPx: '--',
      lowPx: '--',
      prevClosePx: '--',
      volume: '--',
      chgPct: '--',
      message: '',
      showX: true,
      techFace: {},
      techAllData: '',
      pointTitle: '',
      redGreen: '',
      allData: {},
      opintRedGreen: '',
      reds: '',
      greens: '',
      strs: '',
      isMa5: true,
      opacityMa5: 0,
      opacityMa10: 0,
      opacityMa20: 0.5,
      opacityMa30: 0,
      opacityMa60: 0.5,
      opacityMa120: 0.5,
      data: {
        ma5: [],
        ma10: [],
        ma20: [],
        ma30: [],
        ma60: [],
        ma120: [],
        ma250: [],
        times: [],
        tradeTimeArr: [],
        kdata: [],
        markLineData: [],
        markPointData: [],
        vols: [],
        chgPct: [],
        detailJson: [],
        pointTitle: '',
        pointColor: '',
        pointText: '',
        pointColorDown: '',
        pointColorUp: '',
        openClose: true,
        redNum: 0,
        greenNum: 0
      }
    }
  },
  components: {

  },

  computed: mapState({

    lineData: state => {

      // const klineData = [].concat(this.techFace.datas).reverse()


      // Object.keys(klineTags).forEach((key) => {

      // console.log(klineTags[index][1]);

      //  if(klineTags[key][1] === undefined && klineTags[key][2] === undefined){
      // console.log(key);
      //  }else{

      // if(klineTags[key][1] === undefined){
      //   data.pointColor = config.upColor
      //   data.pointText = '看涨'
      //   data.openClose = 'open'
      //   }else if(klineTags[key][2] === undefined){
      //   data.pointColor = config.downColor
      //   data.pointText = '看跌'
      //   data.openClose = 'close'
      //    console.log(data.pointText)
      //  }
      // console.log(klineTags[key][1]);
      // console.log(klineTags[key]);
      //  console.log(key)

      //  var packJson = klineTags[key][1]

      //  var _self = this 
      /*  for(var p in packJson) { // 遍历json数组时，这么写p为索引，0,1
           console.log(p)
           console.log(packJson[p])
           data.detailJson.push(packJson[p])
         // console.log(packJson[p].name + " " + packJson[p].password);
         console.log(data.detailJson)
       } */

      //   }

      //  }) 
      /*    for(var key in klineTags){
                          console.log(key);// 时间
                          var todayTag = klineTags[key];
                          console.log(todayTag[1]);// 状态为1的标签(下跌的)
                          console.log(todayTag[2]);// 状态为2的标签(上涨的)
           } */

    }
  }),
  methods: {

    init() {
      this.chart = echarts.getInstanceByDom(this.$refs.klineChart) || echarts.init(this.$refs.klineChart)

      /*   this.$store.dispatch('clinicShares/queryTechFace', {
           innerCode: '600000.SH'
         }).then(() => {
           
           this.allData = this.$store.state.clinicShares.techFace

           this.drawCharts()
         }) */
      // console.log(this.lineData)
      if (this.allData) {
        this.drawCharts()

      }
      this.eventPoint()
    },
    initData() {
      // var allData = state.clinicShares.techFace
      // const klineData = [].concat(this.allData.datas).reverse()
      var klineData = []
      /*  const klineTags = this.allData.tags */
      // console.log(klineData)
      var dateArr = this.allData.datas;
      // var tagsArr = this.allDataa.tags;
      const tagsArr = this.allData.tags

      for (var s = 0; s < dateArr.length; s++) {
        var obj = dateArr[s];

        obj.tagsInfo = getOneDateData(obj.endDate);
        //  console.log(obj);
        klineData.push(obj)
      }

      this.techAllData = klineData
      // console.log(this.techAllData);
      /** 传日期获取当天的tags里的数据 */
      function getOneDateData(key) {
        //  var infoStr='';
        var obj = tagsArr[key];
        return obj
      }
      /*  function redgreenObj(arr,type){
            var allStr='';
            for(var i=0; i<arr.length; i++){
                var obj = arr[i];
                console.log(obj)
                var oneStr='';
                for(var key in obj){
                 
                    oneStr+=key+':'+obj[key]
                }
                allStr += oneStr;
            }
            return allStr;
        } */
      var data = this.data
      // data.pointTitle = this.allData.tags
      klineData && klineData.reverse().forEach((item, index) => {
        // console.log(item)
        let time = ''
        time = (item.endDate + '').substring(0, 4) + '-' + (item.endDate + '').substring(4, 6) + '-' + (item.endDate + '').substring(6, (item.endDate + '').length)
        data.times.push(time)
        data.tradeTimeArr.push(time)

        let openPx = item.openPx.toFixed(2)
        let closePx = item.closePx.toFixed(2)
        const highPx = item.highPx.toFixed(2)
        const lowPx = item.lowPx.toFixed(2)
        const volume = item.volume.toFixed(2)
        console.log(item.volume)
        const prevClosePx = item.prevClosePx.toFixed(2)
        const chgPct = item.chgPct.toFixed(2)
        const ma5 = Number(item.ma5).toFixed(2)
        const ma10 = Number(item.ma10).toFixed(2)
        const ma20 = Number(item.ma20).toFixed(2)
        const ma30 = Number(item.ma30).toFixed(2)
        const ma60 = Number(item.ma60).toFixed(2)
        const ma120 = Number(item.ma120).toFixed(2)
        // const ma250 = item.ma250
        data.kdata.push([openPx, closePx, highPx, lowPx])
        data.ma5.push(ma5)
        data.ma10.push(ma10)
        data.ma20.push(ma20)
        data.ma30.push(ma30)
        data.ma60.push(ma60)
        data.ma120.push(ma120)
        data.chgPct.push(chgPct)
        // data.ma250.push(ma250)
        // var highPx = '10.97'
        //  var keyTime = (key + '').substring(0, 4) + '-' + (key + '').substring(4, 6) + '-' + (key + '').substring(6, (key + '').length)
        // const color = riseSpeed >= 0 ? config.upColor : config.downColor;
        //  const itemIndex = this.indexArr[this.timeline.indexOf(time)] || 0;
        // console.log(item.tagsInfo)

        console.log(klineData[index])
        if (index === klineData.length - 1) {
          console.log(index === klineData.length - 1)
          this.ma5 = klineData[index].ma5 === null ? '--' : Number(klineData[index].ma5).toFixed(2)
          this.ma10 = klineData[index].ma10 === null ? '--' : Number(klineData[index].ma10).toFixed(2)
          this.ma20 = klineData[index].ma20 === null ? '--' : Number(klineData[index].ma20).toFixed(2)
          this.ma30 = klineData[index].ma30 === null ? '--' : Number(klineData[index].ma30).toFixed(2)
          this.ma60 = klineData[index].ma60 === null ? '--' : Number(klineData[index].ma60).toFixed(2)
          this.ma120 = klineData[index].ma120 === null ? '--' : Number(klineData[index].ma120).toFixed(2)
          this.openPx = klineData[index].openPx.toFixed(2)
          this.highPx = klineData[index].highPx.toFixed(2)
          this.lowPx = klineData[index].lowPx.toFixed(2)
          this.prevClosePx = klineData[index].prevClosePx.toFixed(2)
          this.chgPct = klineData[index].chgPct.toFixed(2)
          if (klineData[index].volume > 100000000) {
            this.volume = (klineData[index].volume / 100000000).toFixed(2) + '亿手'
          } else if (klineData[index].volume > 10000) {
            this.volume = (klineData[index].volume / 10000).toFixed(2) + '万手'
          } else {
            this.volume = (klineData[index].volume).toFixed(2) + '手';
          }

          console.log(klineData[index].volume)
          this.endDate = data.times[klineData.length - 1]
        }

        console.log(this.ma5)
        let tags = item.tagsInfo

        for (var key in tags) {
          // console.log(tags[key])
          //   var infoStr='';
          //   console.log(time)
          var obj = tags[key];
          if (obj === {}) continue;
          var oneObj = tags[1];
          var twoObj = tags[2];
          var lenGreen = ''
          var lenRed = ''
          if (tags[1] && tags[2]) {
            // console.log('(3):' + oneObj + twoObj) //  两个都画上  
            lenGreen = oneObj.length
            lenRed = twoObj.length
            const pointRed = {
              coord: [time, highPx],
              symbol: 'image://http://i0.jrjimg.cn/Astock/tech-red.png',
              // symbolSize: [19, 22],
              // symbolSize: [50, 20],
              symbolOffset: ['40%', '-75%'],
              itemStyle: {
                normal: {
                  //  borderColor:data.pointColorUp,
                  color: config.upColor
                },
                emphasis: {
                  itemStyle: {
                    /*   borderColor:'#000',
                      borderType:'dotted',
                      color:'#141518' */
                  },
                  label: {
                    /* show: true,
                     color:'green',
                     backgroundColor:'#fff' */
                  }
                }
              },
              label: {
                normal: {
                  // position: 'insideTop',
                  position: ['15%', 3],
                  color: '#c9d0d7',

                  /* formatter: () => name */
                  formatter: function(params) {
                    // console.log(params)
                    return '看涨(' + lenRed + ')'
                  }
                }
              }
            };


            data.markPointData.push(pointRed);
            const pointGreen = {
              coord: [time, lowPx],
              // symbolSize: [50, 18],
              // symbolOffset: ['0', '75px'],
              symbol: 'image://http://i0.jrjimg.cn/Astock/tech-green.png',
              symbolOffset: ['40%', '75%'],
              itemStyle: {
                normal: {
                  // borderColor:data.pointColorDown,
                  color: config.downColor
                },
                emphasis: {
                  itemStyle: {
                    /*     borderColor:'#000',
                         borderType:'dotted',
                         color:'#141518' */
                  },
                  label: {
                    /*  show: true,
                      color:'green',
                      backgroundColor:'#fff' */
                  }
                }
              },
              label: {
                normal: {
                  // position: 'insideTop',
                  position: ['15%', 32],
                  color: '#c9d0d7',
                  /* formatter: () => name */
                  formatter: function(params) {
                    // console.log(params)
                    return '看跌(' + lenGreen + ')'
                  }
                }
              }
            };

            data.markPointData.push(pointGreen);

          } else if (tags[1] && tags[2] === undefined) {
            //  console.log('(1):' + oneObj) // 如果只有1 就只画上 1,
            lenGreen = oneObj.length
            const pointGreen = {
              coord: [time, lowPx],
              // symbolSize: [50, 18],
              // symbolOffset: ['0', '75px'],
              symbol: 'image://http://i0.jrjimg.cn/Astock/tech-green.png',
              symbolOffset: ['40%', '75%'],
              itemStyle: {
                normal: {
                  // borderColor:data.pointColorDown,
                  color: config.downColor
                },
                emphasis: {
                  itemStyle: {
                    /*     borderColor:'#000',
                         borderType:'dotted',
                         color:'#141518' */
                  },
                  label: {
                    /*  show: true,
                      color:'green',
                      backgroundColor:'#fff' */
                  }
                }
              },
              label: {
                normal: {
                  // position: 'insideTop',
                  position: ['15%', 32],
                  color: '#c9d0d7',
                  /* formatter: () => name */
                  formatter: function(params) {
                    // console.log(params)
                    return '看跌(' + lenGreen + ')'
                  }
                }
              }
            };

            data.markPointData.push(pointGreen);
            // data.markLineData.push(lineGreen);

          } else if (tags[1] === undefined && tags[2]) {
            //   console.log('(2):' + twoObj) // 如果只有2 ，就只画上2 
            // var pointOpen = ''
            lenRed = twoObj.length
            //    pointOpen = openPx
            const pointRed = {
              coord: [time, highPx],
              symbol: 'image://http://i0.jrjimg.cn/Astock/tech-red.png',
              // symbolSize: [19, 22],
              // symbolSize: [50, 20],
              symbolOffset: ['40%', '-75%'],
              itemStyle: {
                normal: {
                  //  borderColor:data.pointColorUp,
                  color: config.upColor
                },
                emphasis: {
                  itemStyle: {
                    /*   borderColor:'#000',
                      borderType:'dotted',
                      color:'#141518' */
                  },
                  label: {
                    /* show: true,
                     color:'green',
                     backgroundColor:'#fff' */
                  }
                }
              },
              label: {
                normal: {
                  // position: 'insideTop',
                  position: ['15%', 3],
                  color: '#c9d0d7',

                  /* formatter: () => name */
                  formatter: function(params) {
                    // console.log(params)
                    return '看涨(' + lenRed + ')'
                  }
                }
              }
            };


            data.markPointData.push(pointRed);
            //  data.markLineData.push(lineRed);


          }


        }

        var newVols = {
          value: volume, // 万手
          itemStyle: {
            normal: {
              color: closePx < prevClosePx ? config.downColor : config.upColor,
              borderColor: closePx < prevClosePx ? config.downColor : config.upColor
            }
          }
        }
        data.vols.push(newVols)
      })

      if (klineData.length < 60) {
        for (var i = 0; i < 60 - klineData.length; i++) {
          data.times.push('')
          data.tradeTimeArr.push('')
          const dt = []
          data.kdata.push(dt)
          data.vols.push('')
        }
      }
      //  return data
      this.init()
    },
    eventPoint() {
      var self = this
      this.chart.on('mouseover', function(params) {
        if (params.componentType === 'markPoint') {
          console.log(params);
          console.log(params.data.coord[0])
          // console.log(params.event.offsetX);
          // console.log(params.marker);
          var last = document.getElementById('toolpoint')
          // last.innerText = '123456789034567890'
          var left = parseInt(params.event.offsetX) + 38
          var top = parseInt(params.event.offsetY) - 15
          var scrollx = $(window).scrollLeft()

          var elewidth = 270
          if ((left + elewidth - scrollx) > (window.innerWidth)) {
            left = parseInt(params.event.offsetX) - 100 - 320;
            console.log(left)
          }
          /* downtxt.appendChild(newSpan); */
          var klineTags = self.allData.tags
          // console.log(klineTags[20180502][1])
          // var need = klineTags[20180502][1]
          var coordTime = params.data.coord[0]
          console.log(coordTime.replace(/\-/g, ''))
          var timeNew = coordTime.replace(/\-/g, '')
          var need1 = klineTags[timeNew][1]
          var need2 = klineTags[timeNew][2]
          var allStr = '';
          // console.log(need1)
          // console.log(need2)

          /*   if(tags[1] && tags[2] === undefined){
    position: relative;
    top: -2px;
    left: -3px;margin: 3px 6px;
                } */
          if (params.color === '#56a870') { //  green  对应的状态是1
            for (var i = 0; i < need1.length; i++) {
              var objs1 = need1[i];
              var oneStr1 = '';

              for (var k in objs1) {
                if (k === 'title') {
                  oneStr1 += '<i style="display: inline-block;width: 4px;height: 4px;background: #c9d0d7;border-radius: 50%;position: relative;top: -2px;left: -5px;"></i>' + objs1[k] + '\n'
                } else if (k === 'tag') {
                  oneStr1 += objs1[k] + '\n<br/>'
                }
              }
              allStr += oneStr1;
            }
          } else if (params.color === '#ca4941') { // red 对应的状态是 2
            for (var j = 0; j < need2.length; j++) {
              var objs2 = need2[j];
              var oneStr2 = '';
              for (var p in objs2) {
                console.log(p)
                if (p === 'title') {
                  oneStr2 += '<i style="display: inline-block;width: 4px;height: 4px;background: #c9d0d7;border-radius: 50%;position: relative;top: -2px;left:-5px;"></i>' + objs2[p] + '\n'
                } else if (p === 'tag') {
                  oneStr2 += objs2[p] + '\n<br/>'
                }
              }
              allStr += oneStr2;
            }
          }
          // console.log(allStr);
          last.innerHTML = '<div style="display:inline-block;border:1px solid ' + params.color + ';padding:13px;position:absolute;left:' + left + 'px;top:' + top + 'px;z-index:99999;background:#141518;width:270px;color:#c9d0d7" id="toopdetail"><em id="triang" style="display:inline-block;width: 7px;height: 10px;background: url("../../assets/images/z3img/red-triangle.png") no-repeat;position: relative;top: -6px;left: -33px;"></em><div style="margin-top:-22px">' + coordTime + '</div>' + allStr + '</div>';
          /* var downtxt = document.getElementById('triang');
                 // var downtxt = document.createElement('span');
                  downtxt.class = 'triangle'; */
          /*  var klineTags = self.lineData.pointTitle
             for(var key in klineTags){
              if(klineTags[key][1] === undefined && klineTags[key][2] === undefined){
             // console.log(key);
              }else{
               // var packJson = klineTags[key][1]
                var str = ''
                var str1 = ''
                if(klineTags[key][1] === undefined){
                  var len2 = klineTags[key][2].length
                  var tagTitle = klineTags[key][2]
                  for(var i=0; i<len2; i++){
                    console.log(tagTitle[i].title)
                    str += '<span>' + tagTitle[i].tag + '</span>';
                    // console.log(str)
                  }
                  document.getElementById('toopdetail').innerHTML = str
                }else if(klineTags[key][2] === undefined){
                  var len1 = klineTags[key][1].length
                  var tagTitle2 = klineTags[key][1]
                 // console.log(len1)
                  for(var j=0; j<len1; j++){
                    str1 += '<span>' + tagTitle2[j].tag + '</span>';
                  }
                  document.getElementById('toopdetail').innerHTML = str1

                } */
          // for(var p in packJson) { // 遍历json数组时，这么写p为索引，0,1
          // console.log(p)
          //  console.log(packJson[p])
          // data.detailJson.push(packJson[p])
          // console.log(packJson[p].name + " " + packJson[p].password);
          //   console.log(data.detailJson)
          // console.log(packJson)




          // } 
          /*  }
          } */
        }
      })
      this.chart.on('mouseout', function(params) {
        var last = document.getElementById('toolpoint')
        // last.removeChild(detail);
        last.innerHTML = ''

      })
    },
    initTag() {
      const klineTags = this.allData.tags
      // var data = this.data
      for (var key in klineTags) {
        var obj = klineTags[key];
        // console.log(key)
        if (obj === {}) continue;
        var oneObj = obj[1];
        var twoObj = obj[2];
        if (obj[1] && obj[2]) {
          //  var oneObj = obj[1];
          //  var twoObj = obj[2];
          //  console.log(key+'(3):'+oneObj+twoObj) //  两个都画上
          /*  data.pointColorDown = config.downColor
            data.pointColorUp = config.upColor */
          this.opintRedGreen = 'all'

        } else if (obj[1] && obj[2] === undefined) {
          //  console.log(key+'(1):'+oneObj)   // 如果只有1 就只画上 1,

          //  data.pointColorDown = config.downColor
          this.opintRedGreen = 'green'
          this.data.greenNum = oneObj.length
        } else if (obj[1] === undefined && obj[2]) {
          //   console.log(key+'(2):'+twoObj)     // 如果只有2 ，就只画上2 
          //  data.pointColorUp = config.upColor
          this.opintRedGreen = 'red'
          // console.log(twoObj.length)
          this.data.redNum = twoObj.length
          var allStr = '';
          for (var i = 0; i < twoObj.length; i++) {
            var objs = twoObj[i];
            var oneStr = '';
            for (var k in objs) {
              oneStr += objs[k] + '\n'
            }
            allStr += oneStr;
          }
          // console.log(allStr);
          this.strs = allStr

        }

        // console.log(this.data.redNum) 
      }
    },
    drawCharts() {
      const lineData = this.data
      var _self = this
      const opt = {
        toolbox: {
          show: false
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          },
          formatter: function(t) {
            var obj = t[0];
            var time = obj.name; // 时间
            var axisid = obj.axisIndex
            var objarr;
            var openPx;
            //  var closePx;
            var highPx;
            var lowPx;
            var volume;

            _self.$refs.kdate.innerText = time === '' || null || undefined ? '--' : time
            // console.log(time)
            if (axisid === 1) {
              //  console.log(t[1])
              objarr = t[1].value; // 开盘 收盘  最高 最低  成交量
              if (objarr[0] >= 0) {
                openPx = objarr[1];
                //  closePx = objarr[2];
                highPx = objarr[3];
                lowPx = objarr[4];
                volume = t[0].value;
                //  console.log(_self.$refs.kdate.innerText)

              }
            } else if (axisid === 0) {
              objarr = obj.value; // 开盘 收盘  最高 最低  成交量
              if (objarr[0] >= 0) {
                openPx = objarr[1];
                //  closePx = objarr[2];
                highPx = objarr[3];
                lowPx = objarr[4];
                volume = t[7].value;

                /*  return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') +
                    '<br/>最低价：' + (lowPx || '--') + '<br/>成交量：' + (volume || '--'); */
              }
            }

            if (volume > 100000000) {
              volume = (volume / 100000000).toFixed(2) + '亿手'
            } else if (volume > 10000) {
              volume = (volume / 10000).toFixed(2) + '万手'
            } else {
              volume = Number(volume).toFixed(2) + '手';
            }
            for (var i = 0; i < t.length; i++) {
              if (t[i].seriesName === 'MA5') {
                var ma5 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma5

                _self.ma5 = ma5
              } else if (t[i].seriesName === 'MA10') {
                var ma10 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma10
                _self.ma10 = ma10
              } else if (t[i].seriesName === 'MA20') {
                var ma20 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma120
                _self.ma20 = ma20
              } else if (t[i].seriesName === 'MA30') {
                var ma30 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma120
                _self.ma30 = ma30
              } else if (t[i].seriesName === 'MA60') {
                var ma60 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma120
                _self.ma60 = ma60
              } else if (t[i].seriesName === 'MA120') {
                var ma120 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma120
                _self.ma120 = ma120
              } else if (t[i].seriesName === 'MA250') {
                var ma250 = t[i].value === undefined ? '--' : t[i].value;
                // 更新ma120
                _self.ma250 = ma250
              }
            }

            var kData = _self.allData.datas
            var newTime = time.replace(/\-/g, '')
            kData && kData.reverse().forEach((item) => {
              //  console.log(item)
              if (item.endDate + '' === newTime) {
                //  console.log(item.endDate === newTime)
                _self.chgPct = item.chgPct.toFixed(2)
                _self.prevClosePx = item.prevClosePx.toFixed(2)

              }
            })

            _self.openPx = openPx === undefined ? '--' : openPx
            //  _self.$refs.close.innerText = closePx
            _self.highPx = highPx === undefined ? '--' : highPx
            _self.lowPx = lowPx === undefined ? '--' : lowPx
            _self.volume = volume === undefined ? '--' : volume
            //  return '时间：' + time + '<br/>开盘价：' + (openPx || '--') + '<br/>收盘价：' + (closePx || '--') + '<br/>最高价：' + (highPx || '--') + '<br/>最低价：' + (lowPx || '--') + '<br/>MA5：' + (ma5 || '--') + '<br/>MA10：' + (ma10 || '--') + '<br/>MA20：' + (ma20 || '--') + '<br/>MA30：' + (ma30 || '--') + '<br/>MA60：' + (ma60 || '--') + '<br/>MA120：' + (ma120 || '--') + '<br/>成交量：' + (volume || '--');
          }
        },
        animation: false,
        axisPointer: {
          link: {
            xAxisIndex: 'all'
          },
          label: {
            backgroundColor: '#777'
          }
        },

        grid: [{
            left: 35,
            right: 40,
            top: 60,
            height: '60%',
            show: false
          },
          {
            left: 35,
            right: 40,
            bottom: 25,
            height: '27%',
            show: false
          }
        ],
        xAxis: [{
            show: this.showX,
            type: 'category',
            data: lineData.times,
            scale: true,
            axisTick: {
              show: false
            },
            boundaryGap: true, // 不从零刻度开始，不然会挤在y轴上
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            /* min: 'dataMin',
            max: 'dataMax', */
            axisLabel: {
              show: false,
              interval: this.xLabelInterval,
              showMinLabel: true,
              color: '#c9d0d7'
            }
          },
          {
            /*  
        boundaryGap : false,
        axisPointer: {
            type: 'shadow',
            label: {show: false},
            triggerTooltip: true,
            handle: {
                show: true,
                margin: 30,
                color: '#B80C00'
            }
        }*/
            type: 'category',
            gridIndex: 1,
            data: lineData.times,
            splitNumber: 20,
            scale: true,
            boundaryGap: true, // 不从零刻度开始，不然会挤在y轴上
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            axisLabel: {
              show: true,
              color: '#c9d0d7'
              // interval: this.xLabelInterval,
              // showMinLabel: true
            },
            axisPointer: {
              /* label: {
                formatter: function(params) {
                  var seriesValue = (params.seriesData[0] || {}).value
                  return (seriesValue != null ? echarts.format.addCommas(seriesValue) : '')
                }
              } */
              /* type: 'shadow',
               label: {show: false},
               triggerTooltip: true,
               handle: {
                   show: true,
                   margin: 30,
                   color: '#B80C00'
               } */
            }
          }
        ],
        yAxis: [{
            scale: true,
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false,
              lineStyle: {
                type: 'solid',
                color: '#23272c'
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: '#23272c'
              }
            }
          },
          {
            scale: true,
            gridIndex: 1,
            splitNumber: 2,
            axisLabel: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            }
          }
        ],
        brush: {
          xAxisIndex: 'all',
          brushLink: 'all',
          outOfBrush: {
            colorAlpha: 0.1
          }
        },
        series: [{
            name: 'K线',
            type: 'candlestick',
            data: lineData.kdata,
            stack: 'K线',
            // barCategoryGap: '3',
            // barWidth : data.length<30?8:3.5,//柱图宽度
            itemStyle: {
              normal: {
                color: config.upColor,
                color0: config.downColor,
                borderColor: config.upColor,
                borderColor0: config.downColor
              }
            },
            markLine: {
              silent: true,
              data: lineData.markLineData
            },
            markPoint: {
              silent: false,
              // symbol: 'rect',
              // symbolSize: [50, 20],
              effect: {
                show: true,
                color: 'red',
                shadowColor: 'red',
                // period: 10,
                shadowBlur: 0
              },
              /* itemStyle: {
                normal: {
                  color: '#fff',
                  borderWidth: 1
                }
              }, */
              data: lineData.markPointData
            }
          },
          {
            name: 'MA5',
            type: 'line',
            data: lineData.ma5,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                opacity: this.opacityMa5,
                color: '#c9d0d7'
              }
            }
          },
          {
            name: 'MA10',
            type: 'line',
            data: lineData.ma10,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                opacity: this.opacityMa10,
                color: '#e6e603'
              }
            }
          },
          {
            name: 'MA20',
            type: 'line',
            data: lineData.ma20,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                opacity: this.opacityMa20,
                color: '#d776d7'
              }
            }
          },
          {
            name: 'MA30',
            type: 'line',
            data: lineData.ma30,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                opacity: this.opacityMa30,
                color: '#2fb92f'
              }
            }
          },
          {
            name: 'MA60',
            type: 'line',
            data: lineData.ma60,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                opacity: this.opacityMa60,
                color: '#1879d5'
              }
            }
          },
          {
            name: 'MA120',
            type: 'line',
            data: lineData.ma120,
            smooth: true,
            symbol: 'none',
            lineStyle: {
              normal: {
                opacity: this.opacityMa120,
                color: '#e69603'
              }
            }
          },
          /* {
            name: 'MA250',
            type: 'line',
            data: lineData.ma250,
            smooth: true,
            symbol:'none',
            lineStyle: {
              normal: {
                opacity: 0.5,
                color: '#04e0f6'
              }
            }
          }, */
          {
            name: '成交量',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: lineData.vols,
            // barCategoryGap: '3', // 需要根据宽度定
            itemStyle: {
              normal: {
                color: '#7fbe9e'
              },
              emphasis: {
                color: '#140'
              }
              /* normal: {
                color: function(params) {
                  return lineData.kdata[params.dataIndex][1] > lineData.kdata[params.dataIndex][0] ? config.upColor : config.downColor
                }
              } */
            }
          }

        ]
      }
      this.chart.setOption(opt)
      window.addEventListener('resize', () => this.chart.resize(), false)
      //          })
    },
    showMa(type) {
      this.checkOpacity(type)
    },
    checkOpacity(type) {
      if (type === 'Ma5') {
        if (this.opacityMa5 === 0.5) {
          this.opacityMa5 = 0

        } else if (this.opacityMa5 === 0) {
          this.opacityMa5 = 0.5
        }
      } else if (type === 'Ma10') {
        if (this.opacityMa10 === 0.5) {
          this.opacityMa10 = 0
        } else if (this.opacityMa10 === 0) {
          this.opacityMa10 = 0.5
        }
      } else if (type === 'Ma20') {
        if (this.opacityMa20 === 0.5) {
          this.opacityMa20 = 0
        } else if (this.opacityMa20 === 0) {
          this.opacityMa20 = 0.5
        }
      } else if (type === 'Ma30') {
        if (this.opacityMa30 === 0.5) {
          this.opacityMa30 = 0
        } else if (this.opacityMa30 === 0) {
          this.opacityMa30 = 0.5
        }
      } else if (type === 'Ma60') {
        if (this.opacityMa60 === 0.5) {
          this.opacityMa60 = 0
        } else if (this.opacityMa60 === 0) {
          this.opacityMa60 = 0.5
        }
      } else if (type === 'Ma120') {
        if (this.opacityMa120 === 0.5) {
          this.opacityMa120 = 0
        } else if (this.opacityMa120 === 0) {
          this.opacityMa120 = 0.5
        }
      }

    },
    concats(code) {
      this.innerCode = util.formatterInnercode(code)
    },
    checkStatus(status) {
      if (status === 2) {
        return 'red'
      } else if (status === 1) {
        return 'green'
      } else {
        return 'lightcolor'
      }
    }

  },
  watch: {
    opacityMa5() {
      this.drawCharts()
    },
    opacityMa10() {
      this.drawCharts()
    },
    opacityMa20() {
      this.drawCharts()
    },
    opacityMa30() {
      this.drawCharts()
    },
    opacityMa60() {
      this.drawCharts()
    },
    opacityMa120() {
      this.drawCharts()
    },
    innerCode: function() {
      this.initData()
    }
  },
  mounted() {
    // this.init()
    this.concats(this.code)
    this.$store.dispatch('clinicShares/queryTechFace', {
      innerCode: this.innerCode
    }).then(() => {

      this.allData = this.$store.state.clinicShares.techFace
      this.initData()
      // this.initTag()
      // this.drawCharts()
    })

  }

}
</script>
