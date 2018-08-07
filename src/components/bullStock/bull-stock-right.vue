<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
input {
    outline: none;
}

* {
    /* font-size: 12px; */
    font-family: "Microsoft YaHei";
    box-sizing: border-box;
    text-align: justify;
    /* user-select: none; */
    box-sizing: border-box;
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}

body {
    background: #141518;
    height: 100%;
}

.blue {
    color: #1984ea;
}

.red {
    color: #ca4941;
}

.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}

.fr {
    float: right;
}

.fl {
    float: left;
}
.clearfix:after {
    display: block;
    content: '';
    clear: both;
}

a {
    color: #c9d0d7;
}

.blue {
    color: #1984ea;
    font-size: 12px;
}

td,
th {
    word-break: break-all;
    /*height: 30px;*/
}

.td div {
    /* padding: 5px; */
    padding: 5px 0;
}

.bull-stock-wrap {
    margin: 0 5px;
    padding: 8px 0 10px;
    height: 100%;
    box-sizing: border-box;
}

.bull-style {
    /*padding: 12px 12px 22px 13px;*/
    padding: 5px 12px 22px 13px;
    background: #141518;
    height: 45%;
}

.bull-head {
    font-size: 16px;
    color: #c9d0d7;
    padding-bottom: 7px;
}

.style-table-box {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    color: #c9d0d7;
}

.style-table-box td {
    /* height: 28px; */
    /*  height:2.8rem; */
    text-align: center;
    /* width: 16%; */
}

.style-table-box2 {
    height: 89%;
}
.style-table-box2 tr:not(:first-child) td:nth-child(2) {

    color: $backupYellow;
}
.style-table-box2 tr:not(:first-child) td:nth-child(2) a {
    cursor: pointer;
    color: $backupYellow;
}
/* .style-table-box2 tr td:nth-child(3) {
    text-align: left;
} */
.style-table-box2 tr td:first-child {
    /* width: 12%; */
}
.style-table-box2 tr:nth-child(1) td {
    text-align: center;
    height: 30px;

}
/* .style-table-box2 tr:nth-child(1) td:nth-child(3) {
    text-align: left;
} */
.style-table-box tr:not(:first-child) td {
    /*padding-left: 3px;*/
}
.topic-box tr td:first-child {
    cursor: pointer;
}
.topic-box tr td:not(:first-child) {
    text-align: center;
}
.industry-box tr td:first-child {
    cursor: pointer;
}
.industry-box tr td:not(:first-child) {
    text-align: center;
}

.leading-plate {
    margin-top: 5px;
    padding: 12px 12px 16px 13px;
    background: #141518;
    height: 54%;
}

.leading-plate .bull-head {
    height: 7%;
    padding-bottom: 0;
}

.topic {
    height: 45%;
}

.topic-box {
    /* margin-bottom: 15px;*/
    height: 98%;
}

.industry {
    border-top: 1px solid #2a2b31;
    height: 45%;
}

.industry-box {
    /* margin-top: 15px;*/
    height: 98%;
}
.stock-table-box {
    border-collapse: collapse;
    width: 100%;
    font-size: 12px;
    color: #c9d0d7;
    /* height: 98%; */
    height: 100%;
}
.stock-table-box td {
    /* height: 28px; */
    /*  height:2.8rem; */
    text-align: center;

}
.stock-table-box tr:not(:first-child) td:nth-child(2) {}
.stock-table-box tr:not(:first-child) td:nth-child(2) a {
    cursor: pointer;
    color: $backupYellow;

}
.stock-table-box tr td:nth-child(5) {
    text-align: left;
}
.stock-table-box tr:not(:first-child) td:nth-child(5) {
    padding-top: 9px;
}
.stock-table-box tr:nth-child(1) td:nth-child(5) {
    /* text-align: left; */
}
.stock-table-box tr:nth-child(1) td {
    /* text-align:center; */
    height: 30px;

}
.stock-table-box tr td:first-child {
    /*  width: 12%; */

}
/* .stock-table-box tr td:nth-child(3) {
    text-align: left;
} */

.progress-box {
    width: 100%;
    display: inline-block;
}

.progress {
    background: #ca4941;
    width: 10%;
    height: 100%;
    display: inline-block;
    text-align: center;
    height: 14px;
    line-height: 13px;
}
.progress-box2 {
    width: 100%;
    display: inline-block;
}

.progress2 {
    background: #ca4941;
    width: 20%;
    height: 100%;
    display: inline-block;
    text-align: center;
    height: 14px;
    line-height: 13px;
}
.redbg {
    background: #ca4941;
}

.greenbg {
    background: #56a870;
}
.topic-tr td:nth-child(1) {
    width: 31%;
}

.help-img {
    width: 15px;
    height: 15px;
    background: url("../../assets/images/z3img/help.png") no-repeat;
    position: relative;
    left: 75px;
    top: 8px;
    cursor: pointer;
    z-index: 999;
    cursor: pointer;
}

.help-img i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 11px 16px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    left: 25px;
    z-index: 999999;
    line-height: 22px;
    width: 192px;
}
.help-img:hover i {
    display: block;
}

.bull-head .icon-show {
    position: relative;
    right: 31px;
    top: 32px;
    max-width: 300px;
    display: block;
    padding: 18px 16px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    line-height: 18px;
    font-size: 12px;
}

.tr-no2 {
    /*text-align: center;*/
    position: relative;
}

.style-table-box {
    position: relative;
}

.no-data {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 176px;
    height: 168px;
    display: inline-block;
    background: url("../../assets/images/z3img/no-data.png") no-repeat;
}

.no-data1 {
    top: 10%;
}

.no-data2 {
    top: 20%;
}

.no-data3 {
    top: 40%;
}
/* $lineAndTitleColor */
.ai-review {
    background: $bgConColor;
    height: 35%;
}
.nav-title {
    background: $lineAndTitleColor;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
}
.ai-content {
    padding: 26px 19px 23px;
    line-height: 20px;

}
.con-txt {
    padding-top: 10px;
}
.ai-content-no {
    min-height: 145px;
}
.wind-box {
    margin-top: 3px;
    background: $bgConColor;
    position: relative;
}
.wind-box1 {
    height: 27%;
}
.wind-box2 {
    height: 34%;
}
.time_icon {
    width: 14px;
    height: 14px;
    display: inline-block;
    background: url("../../assets/images/z3img/bulltime.png") no-repeat;
    position: relative;
    top: 2px;
    right: 3px;
}
.copy_icon {
    width: 15px;
    height: 15px;
    display: inline-block;
    background: url("../../assets/images/z3img/bullcopy.png") no-repeat;
    position: relative;
    top: 2px;
    right: 10px;
    cursor: pointer;
}
.time-txt {
    display: inline-block;
    /*  width: 80px; */
    width: 65px;
}
.pro-td {
    width: 20%;
    cursor: pointer;
}
.progress-box {
    width: 85%;
    /*    display: inline-block; */
    margin: 0 auto;
}

.progress {
    background: #ca4941;
    width: 10%;
    /*  height: 100%; */
    /* display: inline-block; */
    text-align: center;
    /*  border-radius: 10px; */

    height: 8px;
    line-height: 8px;
}

.redbg {
    background: $upColor;

}

.greenbg {
    background: $downColor;

}
.graybg {
    background: $grayWordsColor;

}
.hover-box {

    position: absolute;
    padding: 11px 16px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    /* cursor: pointer; */
    line-height: 22px;
    /* left: -56px; */
    right: 0;
    top: 50%;
    width: 192px;
    /*  height: 119px; */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

}
.hover-box li {
    color: #666666;
}
.hover-box li:hover {
    color: $blueWordsColor;
}
li.hoverli {
    color: $blueWordsColor;
}
</style>
<template>
<div class="bull-stock-wrap">
  <!-- <div class="bull-style">
    <div class="bull-head">牛股风格
      <div class="help-img fr" v-z3-help="iconHelpMsg"></div>
    </div>
    <table class="style-table-box style-table-box2">
      <tr>
        <td v-for="(item,index) in tabledata.th1" class="lightcolor">
          {{item}}
        </td>
      </tr>

      <tr v-for="style of stockStyle" v-if="stockStyle && stockStyle.length>0">
        <td>{{style.cname}}</td>
        <td>{{style.remark}}</td>
        <td class="progress-box"><span class="progress redbg" :style="'width:'+ Math.ceil(Math.abs(style.value))+'%;'">{{Math.round(style.value)}}</span>
        </td>

      </tr>
      <tr v-if="stockStyle.length<=0" class="tr-no2 ">
        <td></td>
        <td class="no-data no-data1"></td>
        <td></td>
      </tr>
    </table>
  </div>
  <div class="leading-plate">
    <div class="bull-head">领先板块</div>
    <div class="topic">
      <table class="style-table-box topic-box" v-for="(topics,key,index) of topicAndIndustry" v-if="index===1">
        <tr>
          <td v-for="(item,index) in tabledata.th2" class="lightcolor">
            {{item}}
          </td>
        </tr>

        <tr v-for="topic of topics" class="topic-tr" v-if="topics && topics.length>0">
          <td>
            <router-link :to="{name:'topicDetail',params:{topicId:topic.topicCode}}" target="_blank">
              {{topic.topicName===null?'--':topic.topicName}}
            </router-link>
          </td>
          <td>{{topic.topicMarket===null || topic.topicMarket.heatIndex===null?'--':Math.ceil(topic.topicMarket.heatIndex)}}</td>
          <td v-z3-updowncolor="topic.topicMarket===null || topic.topicMarket.chngPct===null?'--':topic.topicMarket.chngPct">
            {{topic.topicMarket===null || topic.topicMarket.chngPct===null?'--':changeTofixed(topic.topicMarket.chngPct)}}
          </td>
          <td v-z3-updowncolor="topic.topicMarket===null || topic.topicMarket.keepDaysToday===null?'--':topic.topicMarket.keepDaysToday">
            {{topic.topicMarket===null || topic.topicMarket.keepDaysToday===null?'--':checkContinu(topic.topicMarket.keepDaysToday)}}
          </td>
        </tr>
        <tr v-if="topics.length<=0" class="tr-no2">
          <td></td>
          <td class="no-data no-data2"></td>
          <td></td>
        </tr>
      </table>
    </div>
    <div class="industry">
      <table class="style-table-box industry-box" v-for="(industrys,key,index) of topicAndIndustry" v-if="index===0">
        <tr>
          <td v-for="(item,index) in tabledata.th3" class="lightcolor">
            {{item}}
          </td>
        </tr>

        <tr v-for="industry of industrys" class="topic-tr" v-if="industrys && industrys.length>0">
          <td>
            <router-link :to="{name:'industryDetail',params:{industryId:industry.induCode}}" target="_blank">
              {{industry.induName===null?'--':industry.induName}}
            </router-link>
          </td>
          <td>{{industry.induMarket===null || industry.induMarket.heatIndex===null?'--':Math.ceil(industry.induMarket.heatIndex)}}
          </td>
          <td v-z3-updowncolor="industry.induMarket===null || industry.induMarket.chngPct===null?'--':industry.induMarket.chngPct">
            {{industry.induMarket===null || industry.induMarket.chngPct===null?'--':changeTofixed(industry.induMarket.chngPct)}}
          </td>
          <td v-z3-updowncolor="industry.induMarket===null || industry.induMarket.keepDaysToday===null?'--':industry.induMarket.keepDaysToday">
            {{industry.induMarket===null || industry.induMarket.keepDaysToday===null?'--':checkContinu(industry.induMarket.keepDaysToday)}}
          </td>
        </tr>
        <tr v-if="industrys.length<=0" class="tr-no2">
          <td></td>
          <td class="no-data no-data3"></td>
          <td></td>
        </tr>
      </table>
    </div>
  </div> -->
  <div class="ai-review">
    <div class="nav-title">
      <span class="fl">智能点评</span>
      <div class="fr">
        <i class="time_icon"></i>
        <span ref="timer" class="time-txt" v-show='countText'>{{count}}秒后</span>
        <span ref="timer" class="time-txt" v-show='closeText'>休市中</span>
        <em class="copy_icon" ref='copyicon' title="复制分享链接"></em>
      </div>
    </div>
    <div class="ai-content" ref='copytext' v-html="checkBr(smartEvaluate)" :class="smartEvaluate===''?'ai-content-no':''">

    </div>
  </div>
  <div class="wind-box wind-box1">
    <div class="nav-title"><span>大盘风向</span></div>
    <table class="style-table-box style-table-box2">
      <tr>
        <td v-for="(item,index) in tabledata.th1" class="lightcolor">
          {{item}}
        </td>
      </tr>
      <tr v-for="(style,index) of marketStyle" v-if="marketStyle && marketStyle.length>0">
        <td>{{style.section||'--'}}</td>
        <td><a :href="'/stock/'+style.innerCode" target="_blank">{{style.name||'--'}}</a></td>
        <td v-z3-updowncolor="style.stat==null?'--':style.chng">{{style.stat==null?'--':(style.price | price)}}</td>
        <td v-z3-updowncolor="style.stat==null?'--':style.chng">{{style.stat==null?'--':(style.chng | chngPct)}}</td>
        <td class='pro-td' @mouseover="enterProgress($event,index)" @mouseout="leaveProgress($event,index)">
          <div class="progress-box">
            <span class="progress redbg fl" :style="{'width':style.stat==null?'0%':checkWidth(style.stat.upNum,style.stat)}"></span>
            <span class="progress graybg fl" :style="{'width':style.stat==null?'100%':checkWidth(style.stat.equalNum,style.stat)}"></span>
            <span class="progress greenbg fr" :style="{'width':style.stat==null?'0%':checkWidth(style.stat.downNum,style.stat)}"></span>
          </div>
        </td>
        <td v-z3-updowncolor="style.suggest==null?'--':style.chng">{{style.suggest||'--'}}</td>
      </tr>
      <tr v-if="marketStyle.length<=0" class="tr-no2 ">
        <td></td>
        <td class="no-data no-data1"></td>
        <td></td>
      </tr>
    </table>
    <ul class='hover-box' v-show='isPopup' v-if="marketStyle && marketStyle.length>0" :style="{top: tops + 'px' }">
      <li v-for="(item,index) of marketStyle" :class="index===activeColor?'hoverli':''">{{item.name}} : 涨{{item.stat==null?'-':item.stat.upNum}}-平{{item.stat==null?'-':item.stat.equalNum}}-跌{{item.stat==null?'--':item.stat.downNum}}</li>
    </ul>
  </div>
  <div class="wind-box wind-box2">
    <div class="nav-title">
      <span>个股风向</span>
      <!--  <div class="bull-head"> -->
      <div class="help-img fl"><i :value='iconHelpMsg'>{{iconHelpMsg}}</i></div>
      <!-- </div> -->
    </div>
    <table class="stock-table-box">
      <tr>
        <td v-for="(item,index) in tabledata.th2" class="lightcolor">
          {{item}}
        </td>
      </tr>

      <tr v-for="style of stockStyleNew" v-if="stockStyleNew && stockStyleNew.length>0">
        <td>{{style.remark||'--'}}</td>
        <td><a :href="'/stock/'+style.innerCode" target="_blank">{{style.name||'--'}}</a></td>
        <td v-z3-updowncolor="style.chng">{{style.price | price}}</td>
        <td v-z3-updowncolor="style.chng">{{style.chng | chngPct}}</td>
        <td class="progress-box2"><span class="progress2 redbg" :style="'width:'+ Math.ceil(Math.abs(style.value))+'%;'">{{Math.round(style.value)}}</span>
        </td>
        <td>{{changeDate(style.tradeDate)||'--'}}</td>
      </tr>
      <tr v-if="stockStyleNew.length<=0" class="tr-no2 ">
        <td></td>
        <td class="no-data no-data1"></td>
        <td></td>
      </tr>
    </table>
  </div>
  <toast :msg="toastmsg" v-if="showToast"></toast>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Clipboard from 'clipboard'
import toast from 'components/toast'
// import {
//   formatDate
// } from 'utils/date'
export default {

  data() {
    return {
      defaultKeep: 'chngPct',
      iconHelpMsg: '根据近1月涨跌幅排名靠前的股票，通过Barra风格归因算法计算出的牛股风格。风格指数值为0到100，数值越高，风格的偏向性越强。',
      tabledata: {
        th1: ['大盘风格', '指数名称', '最新', '涨跌幅', '涨跌对比', '操作建议'],
        th2: ['个股风格', '典型个股', '最新', '涨跌幅', '风格指数', '启动日期'],
        th3: ['行业名称', '热度指数', '涨跌幅', '涨跌天数'],
        td: {}
      },
      showToast: false,
      count: '',
      timer: null,
      getDate: '',
      isPopup: false,
      tops: 100,
      activeColor: 0,
      time: '',
      countText: true,
      closeText: false

    }
  },
  props: ['browseIndex'],
  components: {
    toast
  },
  computed: mapState({
    stockStyle: state => state.bullStock.stockStyle,
    topicAndIndustry: state => state.bullStock.topicAndIndustry,
    smartEvaluate: state => state.bullStock.smartEvaluate,
    tradeDate: state => state.bullStock.tradeDate,
    marketStyle: state => state.bullStock.marketStyle,
    stockStyleNew: state => state.bullStock.stockStyleNew

  }),
  methods: {
    initStyle() {
      this.$store.dispatch('bullStock/queryStockStyle')

    },
    init() {
      this.$store.dispatch('bullStock/queryMarketStyle')
      this.$store.dispatch('bullStock/queryStockStyleNew')
    },
    initEvaluate() {
      this.$store.dispatch('bullStock/querySmartEvaluate')
    },
    initTopicAndIndustry() {
      if (this.browseIndex) {
        this.$store.dispatch('bullStock/queryTopicAndIndustry', {
          browseIndex: this.browseIndex
        })
      } else {
        this.$store.dispatch('bullStock/queryTopicAndIndustry', {
          browseIndex: this.defaultKeep
        })
      }
    },
    enterProgress(e, i) {
      this.isPopup = true
      this.tops = (e.currentTarget.offsetTop) + 70
      this.activeColor = i
    },
    leaveProgress(e) {
      this.isPopup = false
    },
    copyText(e) {
      const clipboard = new Clipboard(this.$refs.copyicon, {
        text: () => {
          const copyData = this.$refs.copytext.innerText;
          console.log(this.$refs.copytext.innerText)
          return copyData;
        }
      })
      clipboard.on('success', (e) => {
        this.toastmsg = '复制成功!'
        this.showToast = true
        setTimeout(() => {
          this.showToast = false
        }, 2500)
      })
      clipboard.on('error', (e) => {
        this.toastmsg = '复制失败!'
        this.showToast = true
        setTimeout(() => {
          this.showToast = false
        }, 2500)
      })
    },
    timeRange(beginTime, endTime, nowTime) {
      var strb = beginTime.split(':');
      if (strb.length !== 2) {
        return false;
      }

      var stre = endTime.split(':');
      if (stre.length !== 2) {
        return false;
      }

      var b = new Date();
      var e = new Date();
      var n = new Date();
      b.setHours(strb[0]);
      b.setMinutes(strb[1]);
      e.setHours(stre[0]);
      e.setMinutes(stre[1]);
      // alert((n.getHours () + ':' + n.getMinutes ()))
      if (n.getDay() === 6 || n.getDay() === 0) {
        return false;
      }
      if (n.getTime() - b.getTime() > 0 && n.getTime() - e.getTime() < 0) {
        // this.reFresh()
        return true;
      } else {
        // alert ('当前时间是：' + n.getHours () + ':' + n.getMinutes () + '，不在该时间范围内！');
        return false;
      }
      // return false;
    },
    reFresh() {
      //  var inTime = this.timeRange('9:10', '11:40')
      //  var inTime2 = this.timeRange('12:10', '15:30')
      // if (inTime || inTime2) {
      //   // this.initRealTimeType();
      //   this.getCode()
      // }

      // this.alltimers = setTimeout(this.reFresh, 1000)

    },
    zero(obj) {
      return obj < 10 ? '0' + obj : obj;
    },
    initTradeDate() {
      var now = new Date();
      var nowYear = now.getFullYear();
      var nowMonth = this.zero(now.getMonth() + 1);
      var nowDay = this.zero(now.getDate());
      var newDate = nowYear + nowMonth + nowDay
      // console.log(nowYear)       
      // console.log(nowMonth)       
      // console.log(nowDay)     

      this.$store.dispatch('bullStock/queryCheckTradeDate', {
        date: newDate
      }).then(() => {
        // this.getDate = this.tradeDate
        this.getCode()
      })
    },
    getLeaveTime() {
      // this.updateTime = setInterval(() => {
      //     this.time = new Date()

      // }, 1000)
      //  var time = formatDate('9:00', 'hh:mm')
      // console.log(time.getTime())
      var date = new Date().getTime();
      var fiveMinute = 5 * 60 * 1000
      var nowTime = Math.ceil((fiveMinute - date % fiveMinute) / 1000)
      // // var hour = date.getHours();
      // var minute = date.getMinutes();
      // var nowTime=hour*100+minute;
      console.log(nowTime)
      if (date % fiveMinute === 0) {
        return 0;
      } else {
        // var leaveTime=Math.ceil(nowTime/5)*5-nowTime;
        return nowTime
      }
    },
    getCode() {
      console.log(this.getLeaveTime())
      if (this.tradeDate === true) {
        // console.log(this.tradeDate)
        var inTime = this.timeRange('9:30', '11:30')
        var inTime2 = this.timeRange('13:00', '15:00')
        if (inTime || inTime2) {
          // this.$forceUpdate()
          const TIME_COUNT = this.getLeaveTime();
          if (!this.timer) {
            this.count = TIME_COUNT;
            console.log(this.count)
            // this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                // this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                this.initEvaluate()
                if (this.count === 0) {
                  this.count = 300
                  this.getCode()
                }
              }
            }, 1000)
          }
        } else {
          this.countText = false
          this.closeText = true
          // this.$refs.timer.innerHTML = '休市中';

        }

      } else {
        this.countText = false
        this.closeText = true
        //  this.$refs.timer.innerHTML = '休市中';
      }

    },
    checkContinu(num) {
      if (num > 0) {
        return num + '连涨'
      } else if (num < 0) {
        return Math.abs(num) + '连跌'
      } else if (num === 0) {
        return '无涨跌'
      }

    },
    checkWidth(stat, sum) {

      var allSum = sum.upNum + sum.equalNum + sum.downNum
      return Number((stat / allSum) * 100).toFixed(2) + '%'

      // Math.round(((style.stat.upNum)/(style.stat.upNum+style.stat.equalNum+style.stat.downNum))*100)+'%;'
    },
    checkNull(str) {
      if (str === null) {
        return '--'
      } else {
        return str
      }
    },
    changeAdd(num) {
      if (num > 0) {
        return '+' + (Number(num) * 100).toFixed(2) + '%'
      } else if (num < 0) {
        return (Number(num) * 100).toFixed(2) + '%'
      } else if (num === 0) {
        return num
      }
    },
    changePlus(num) {
      if (num > 0) {
        return '+' + num
      } else if (num <= 0) {
        return num
      }
    },
    changePer(num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    changeDate(time) {
      return (time + '').substring(4, 6) + '.' + (time + '').substring(6, (time + '').length)
    },
    checkBr(val) {
      if (val === '' || val === null || val === undefined) {
        return ''
      }
      const content = val.split('/n')
      let con = ''
      content.forEach((p, i) => {
        if (i === 1) {
          con += '<div style="padding-top:23px;">' + p + '</div>'
        } else {
          con += '<div class="con-txt">' + p + '</div>'
        }
      })
      return con

    }
  },
  watch: {
    browseIndex() {
      // this.updateTime && clearInterval(this.updateTime)
      this.$store.dispatch('bullStock/queryTopicAndIndustry', {
        browseIndex: this.browseIndex
      });
    } // ,
    // time() {
    //   let time = formatDate(this.time, 'hh:mm')
    //   if (time === '9:35' || time === '16:30') {
    //     this.getCode()
    //   }
    // }
  },
  mounted() {
    // this.updateTime = setInterval(() => {
    //   this.time = new Date()
    // }, 1000)
    this.initStyle()
    this.init()
    this.initEvaluate()
    this.initTopicAndIndustry()
    this.initTradeDate()
    this.copyText()
    // this.getCode()   
    // var _this = this
    // this.updateTopicandIndu = setInterval(function() {
    //   _this.initTopicAndIndustry()
    // }, 60000)
  },
  destroyed() {
    // this.updateTime && clearInterval(this.updateTime)
    this.updateTime && clearInterval(this.updateTime)
  }
}
</script>
