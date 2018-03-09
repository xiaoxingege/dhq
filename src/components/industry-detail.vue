<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #eee;
    border-radius: 10px;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #515A65;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #808ba1;
}
em,
i {
    font-style: normal;
}
a {
    color: #c9d0d7;
    text-decoration: none;
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
.mb-8 {
    margin-bottom: 8px;
}
.mr-8 {
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
body,
html {
    /* height: 100%; */
    background: #141518;
}
.topic-detail {
    width: 100%;
    background: #141518;
    font-size: 12px;
    color: #c9d0d7;
    /* height: 100%; */
    border-left: 1px solid #0d0e0f;
    border-bottom: 3px solid #0d0e0f;
}
.topic-detail a:hover {
    text-decoration: none;
}
.topic-head {
    /* padding: 19px 0 6px 18px; */
    padding: 13px 0 13px 10px;
    background: #141518;
}

.topic-head strong {
    font-weight: normal;
    font-size: 16px;
}
.topic-time {
    /* margin-right: 14px; */
    margin-left: 20px;
    font-size: 12px;
    line-height: 20px;

}
.topic-time span {
    display: inline-block;
}
.time-num {
    width: 90px;
    text-align: center;
}
.time-num2 {
    /*  width: 48px;
  text-align: center; */
    padding-left: 6px;
    padding-right: 16px;
}
.time-num3 {
    /*  width: 61px; */
    /* text-align: center; */
    font-size: 16px;
    margin-left: 10px;
}
.time-num4 {
    /* width: 36px;
  text-align: center; */
    color: #808ba1;
}

.detail-content {
    /*  margin: 9px; */
    background: #141518;
}
.detail-main {
    margin-bottom: 18px;
}
.main-left {
    width: 60%;
    border: 1px solid #0d0e0f;
    border-left: none;
    border-right: none;
}
.left-con1 {
    padding: 20px 21px 18px 20px;
    /* height: 82px; */
    height: auto;
    line-height: 18px;
    box-sizing: border-box;
    border-bottom: 1px solid #0d0e0f;
}
.left-con1 strong {
    color: #c9d0d7;
}

.con1-ti {
    width: 48%;
    color: #c9d0d7;
    margin-right: 29px;
    position: relative;
}
.tip-1 i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 9px 20px 9px 12px;
    color: #666666;
    background: #cccfd9;
    border-radius: 3px;
    z-index: 999;
    /* top: 25px; */
    /* top: 23px; 
    left: 157px;*/
    top: 40px;
}
.tip-1:hover i {
    display: block;
}
.tip-2 i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 9px 20px 9px 12px;
    color: #666666;
    background: #cccfd9;
    border-radius: 3px;
    z-index: 999;
    /* top: 25px; */
    /* top: 23px; 
    left: 157px;*/
    top: 40px;
}
.tip-2:hover i {
    display: block;
}
.con1-event {
    width: 47%;
    color: #c9d0d7;
    position: relative;
}
.con1-event a:hover {
    color: #1984ea;
    text-decoration: none;
}
.left-con2 {
    /* height: 317px; */
    /* height: 303px; */
    height: 321px;
    /* padding: 11px 19px 12px 0; */
    padding: 19px 18px 20px 20px;
    position: relative;
    border-bottom: 1px solid #0d0e0f;
}
.topic-chart2 {
    height: 100%;
    width: 100%;
    display: block;
    position: relative;
    /*left: 0;
    top: 0;*/
}
.left-con3 {
    /* padding: 20px 20px 14px; */
    /* padding: 20px 20px 17px; */
    /* padding: 0 0 17px; */
    padding: 0;
    /* border-bottom: 1px solid #0d0e0f; */
    /* padding: 13px 25px 10px 13px; */

}
.left-con3-1 {
    height: 421px;
}
.in-content {
    line-height: 18px;
    /* height: 168px;*/
    overflow: auto;
    position: relative;
    padding: 0 20px;
}

.in-content-a {
    line-height: 26px;
}
.in-content-b {
    font-size: 14px;
    text-align: center;
    position: absolute;
    top: 18%;
    left: 0;
    right: 0;
    margin: auto;
}
.in-content-no {
    text-align: center;

    position: relative;
}
.in-title {
    line-height: 62px;
}
.new-link span {
    line-height: 18px;
}
.new-tit {
    /*width: 70%;*/
    width: 65%;
    text-align: left;
    float: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 26px;

}
.new-date {
    color: #c9d0d7;
    line-height: 25px;
    float: left;
    width: 12%;
    text-align: right;
}
.new-srcname {
    line-height: 25px;
    float: left;
    width: 14%;
    text-align: right;
    color: #c9d0d7;
}
.new-tit:hover {
    color: #1984ea;
}
/*.new-tit:hover i {
    display: block;
}*/
.new-tit i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 9px 20px 9px 12px;
    color: #666666;
    background: #cccfd9;
    border-radius: 3px;
    z-index: 999;
    /* top: 25px; */
    /* top: 23px; */
    left: 157px;
}

.left-con3 strong {
    display: inline-block;
    /* margin-bottom: 6px; */
    font-weight: 400;
    color: #808ba1;
}
.view-all {
    position: relative;
    margin-top: 10px;
    /* margin-right: 7%; */
    margin-right: 5%;
    cursor: pointer;
    background: #fff;
}
.view-all2 {
    /* margin-right:9%; */
    margin-right: 6%;
}
.view-all i {
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-left-color: #8eb6dd;
    display: inline-block;
    position: absolute;
    top: 1px;
    left: 51px;
}
.main-right {
    /* width: 39%; */
    width: 40%;
    /* max-height: 898px; */
    /* max-height: 74.7em;
      height: 55.7rem;*/
    border: 1px solid #0d0e0f;
    border-right: none;
}

.right-top {
    padding-left: 10px;
    font-size: 12px;
    line-height: 30px;
    color: #808ba1;
    background: #23272c;
}
.right-top2 {
    margin-bottom: 8px;
}
.see-filter {
    padding-right: 20px;
    padding-left: 29px;
    cursor: pointer;
}
.see-filter a {
    text-decoration: none;
}
.see-filter a:hover {
    text-decoration: none;
}

.mo-sort {
    cursor: pointer;
}

.right-table {
    border-collapse: collapse;
    width: 97%;
    margin-left: 3%;
    font-size: 12px;
    /*  position: relative; */
}

.td-txt {
    position: relative;
}

.td-txt i {
    width: 11px;
    height: 6px;
    display: inline-block;
    position: absolute;
    top: 12px;
    /* right: 15%; */
    padding-left: 4px;
}

.td-txt.active {}

.td-txt.active .sort-down {
    width: 11px;
    height: 6px;
    display: inline-block;
    background: url("../assets/images/z3img/topic-sort-down.png") no-repeat;

}

.td-txt.active .sort-up {
    width: 11px;
    height: 6px;
    display: inline-block;
    background: url("../assets/images/z3img/topic-sort-up.png") no-repeat;
}
.right-table tr:nth-child(1) {
    /* background: #f2f2f2;
    color: #666; */
    font-size: 12px;
    cursor: pointer;
}
.right-table tr:nth-child(1) td {
    height: 30px;

}
.right-table tr td:nth-child(1) {
    text-align: left;

}

.right-table tr {
    position: relative;
    border-bottom: 1px solid #23272c;
}

.right-table tr td {
    text-align: center;
    height: 44px;
    /*border-bottom: 1px solid #23272c;*/
}

.stock-td1 {
    /* position: relative; */
}

.stock-td2 {
    /* text-align: right; */
    /* position: relative; */
    text-align: center;
    /* padding-left: 34px; */
    cursor: pointer;
}

.numTopic {
    position: absolute;
    display: none;
    padding: 9px 20px 9px 12px;
    color: #666666;
    background: #cccfd9;
    border-radius: 3px;
    z-index: 999;
    cursor: pointer;
}

.numTopic span {
    margin-right: 8px;
    cursor: pointer;
    line-height: 20px;
}

.numTopic span a {
    color: #666666;
}
.numTopic span a:hover {
    color: #1984ea;
}
.stock-td3 {
    /* text-align: left; */
    text-align: center;
    cursor: pointer;
    /* position: relative; */
}
.see-topic {
    display: none;
}
.see-topicmark {
    display: none;
    position: absolute;
    padding: 19px 17px 20px 16px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    cursor: pointer;
    right: 0;
    /* left: -927px; */
    /* left: -56px; */
    /* top: 64px; */
    /* max-width: 1040px; */
    max-width: 40%;
}
.stock-td3:hover span {
    display: block;
}

.main-right .page {
    background: #141518;
    text-align: center;
    padding: 10px 0 0;
    width: 100%;
    zoom: 1;
    clear: both;
}

.main-right .page .pages li {
    background: #141518;

}

/* .main-right2 {
    height: 896px;
} */
.right-con {
    background: #fff;
    border-radius: 3px;
}
table {
    border-spacing: 1px;
    width: 100%;
    /* border-collapse:collapse;
      border-spacing:0;  */
    padding-bottom: 10px;
}
.right-con th {
    background: #eff3f8;
    /* padding: 11px 0 8px 0; */
    padding: 13px 0 12px;
    text-align: center;
    width: 100%;
}
.right-con td {
    text-align: center;
    /* width: 18%; */
    /* width: 19%; */
    width: 10%;
    float: left;
    font-weight: 400;
}
.right-con tbody tr {
    width: 100%;
    border-bottom: 1px solid #e5e5e5;
}
.right-con tbody tr td {
    /* line-height: 42px; */
    line-height: 42px;
}
.td-tit1 {
    position: relative;
}
.txt-td {
    /*  position: absolute;
      top: -5px;
      left: 31%; */
    position: relative;
    top: -5px;
    left: 5px;
}
.num-td {
    /* position: absolute;
  top: 10px; */
    /* left: 34%; */
    /* left: 39%; */
    font-size: 12px;
    text-align: center;
}
.right-con .td1 {
    /* width: 22%; */
    width: 24%;
}
.topic-chart {
    height: 100%;
    width: 100%;
    display: inline-block;
}

.time-ul {
    position: absolute;
    /* right: 2%; */
    right: 4%;
    top: 3%;
    z-index: 9999;
    background: #22272d;
}
.time-ul li {
    float: left;
    color: #808ba1;
    border: 1px solid #23272c;
    padding: 6px;
    border-right: 1px solid #141518;
    /* padding: 5px 10px; */
    /*padding: 7px 6px;*/
    /*  margin-right: -1px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px; */
    cursor: pointer;

}
.time-ul li:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.time-ul li:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.chart-title {
    position: absolute;
    left: 2%;
    top: 3%;
}
.time-ul .active {
    color: #c9d0d7;
    background-color: #1984ea;
    /*border-color: #1984ea;*/
}
.mo {
    display: none;
}

.foot-tishi {
    font-size: 12px;
    /*  position: absolute;
bottom: 0; */
    background: #141518;
    color: #808ba1;
    line-height: 24px;

}

.time-ol {
    position: absolute;
    left: 3%;
    top: 3%;
    z-index: 9999;
    background: #22272d;
}
.time-ol .li {
    float: left;
    color: #808ba1;
    /*border: 1px solid #23272c;
    padding: 8px 18px;*/
    border-right: 1px solid #141518;
    padding: 6px 18px;
    cursor: pointer;

}
.time-ol .li:first-child {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.time-ol .li:last-child {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.time-ol .active {
    color: #c9d0d7;
    background-color: #1984ea;
    /*border-color: #1984ea;*/
}
.help-img {
    width: 15px;
    height: 15px;
    background: url("../assets/images/z3img/help.png") no-repeat;
    position: relative;
    left: 215px;
    top: 0;
    cursor: pointer;
    z-index: 999999;
}
.help-img i {
    color: #1984ea;
    position: absolute;
    display: none;
    padding: 15px;
    color: #666666;
    background: #cccfd9;
    border-radius: 10px;
    z-index: 999;
    top: -8px;
    left: 44px;
    width: 300px;
    z-index: 999999;
}
.help-img:hover i {
    display: block;
}
.no-data {
    width: 176px;
    height: 168px;
    display: inline-block;
    background: url("../assets/images/z3img/no-data.png") no-repeat;
}
.detail-keepdays {
    text-align: center;
    margin-top: -11px;

}
.detail-keep-num {
    width: 43px;
    height: 21px;
    text-align: center;
    font-size: 12px;
    line-height: 15px;
    display: inline-block;

    background: url("../assets/images/z3img/detail-red.png") no-repeat;

}
.detail-keep-num1 {
    background: url("../assets/images/z3img/detail-green.png") no-repeat;
}
.assess {
    width: 30px;
    height: 17px;
    text-align: center;
    line-height: 17px;
    font-size: 12px;
    margin: 5px 9px 0 0;
}
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
.right-table .progress-box {
    text-align: left;
    line-height: 44px;
}
.redbg {
    background: #ca4941;
}

/*.greenbg {
  background: #56a870;
}
.redbg {
    background: #ff3232;
}*/

.greenbg {
    background: #059509;
}
.blockbg {
    background: #525a65;
}
.selectma {
    position: absolute;
    left: 15%;
    top: 20%;
    z-index: 999;
    display: none;
}
.selectma option {
    opacity: 0;
}
.select {
    width: 180px;
    height: 30px;
    float: left;
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 10px;
    position: relative;

}
.select:after {
    content: "";
    width: 0;
    height: 0;
    border: 8px solid transparent;
    border-top-color: #fff;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -4px;
}
/*两个连续写的就是一个上面，起两个class 名 */
.select.down:after {
    border-top-color: transparent;
    border-bottom-color: #fff;
    margin-top: -12px;
}
.select h5 {
    width: 180px;
    height: 30px;
    background: pink;
    /* text-indent: 1em; */
    line-height: 30px;
    color: #999;
}
ol {
    border: 1px solid #ccc;
    width: 178px;
    position: absolute;
    left: 0;
    top: 30px;
    display: none;

}
ol li {
    line-height: 40px;
    border-bottom: 1px dashed #ccc;
    font-size: 15px;
    text-indent: 1em;
    height: 40px;
}
.select ol li:hover {
    background: rgba(255,0,0,.3);
}
.icon-box {
    width: 77px;
    height: 10px;
    position: relative;
    /*left: 19%;*/
    left: 204px;
    top: 17px;
    float: left;
}
.icon-line {
    width: 21px;
    height: 2px;
    border: 1px dashed #ebb344;
    position: absolute;
    /*left: -104px;*/
    left: -100px;
    top: 31px;
}
.down {
    width: 11px;
    height: 6px;
    display: inline-block;
    background: url("../assets/images/z3img/topic-sort-down.png") no-repeat;
    position: absolute;
    left: -43%;
    top: 29px;
    cursor: pointer;
    /*z-index: 999;*/
}
.td-txt1 {
    width: 13%;
}
.td-txt2 {
    width: 11%;
}
.td-txt4 {
    width: 14%;
}
.td-txt5 {
    width: 12%;
}
</style>
<template>
<div class="topic-detail">
  <div class="topic-head clearfix">
    <strong class="fl">{{detail.induName}}</strong>
    <div class="detail-keepdays fl" v-if="detail.induMarket!==null && detail.induMarket.chngPct!==null">
      <span class="detail-keep-num" v-if="detail.induMarket.keepDaysToday>=2">{{detail.induMarket.keepDaysToday}}连涨</span>
      <span class="detail-keep-num detail-keep-num1" v-if="detail.induMarket.keepDaysToday<=-2">{{Math.abs(detail.induMarket.keepDaysToday)}}连跌</span>
    </div>
    <span class="time-num3 fl" v-z3-updowncolor="detail.induMarket===null || detail.induMarket.chngPct===null?'--':detail.induMarket.chngPct">{{detail.induMarket===null || detail.induMarket.chngPct==null?'--':changeTofixed(detail.induMarket.chngPct)}}</span>
    <div class="topic-time fl">
      <span class="time-num4">成份股数</span><span class="time-num2">{{detail.samNum}}只
      </span><span class="time-num4">上涨股票</span><span class="red time-num2">{{detail.induMarket===null || detail.induMarket.stkUpNum==null?'--':detail.induMarket.stkUpNum}}
      </span><span class="time-num4">下跌股票</span><span class="green time-num2">{{detail.induMarket===null || detail.induMarket.stkDownNum==null?'--':detail.induMarket.stkDownNum}}
      </span><span class="time-num4">持平股票</span><span class="time-num2">{{detail.induMarket===null || detail.induMarket.stkEqualNum==null?'--':detail.induMarket.stkEqualNum}}
      </span><span class="time-num4">相关新闻</span><span class="time-num2">{{detail.eventNum}}条
      </span>
    </div>
  </div>
  <div class="detail-content clearfix">
    <div class="detail-main clearfix display-box">
      <div class="main-left box-flex-1">
        <div class="left-con2">
          <!-- <div class="chart-title">主题<span class="blue">[{{detail.induName}}]</span>累计收益率</div> -->
          <div class="help-img fl"><i :value='iconHelpMsgUdown' id="downtxt">{{this.riseOrHeat === 'techIndex'?iconHelpMsgHeat:(this.riseOrHeat === 'infoIndex'?iconHelpMsgPublic:iconHelpMsgUdown)}}</i></div>
          <div class="icon-box" v-show='!isUpDown'>
            <span class="icon-line"></span>
            <select class="selectma">
                    <!-- <option v-for="(tmd,key) in maDatas" :value="tmd.value">{{tmd.name}}</option> -->
                        <option value="Ma5">MA5</option>
                        <option value="Ma10">MA10</option>
                        <option value="Ma20">MA20</option>
                      </select>
            <i class="down"></i>
          </div>
          <div class="time-ol">
            <div class="li" @click="heatOrPublicChange('rise')" :class="this.riseOrHeat === 'rise'?'active':''">涨跌</div>
            <div class="li" @click="heatOrPublicChange('techIndex')" :class="this.riseOrHeat === 'techIndex'?'active':''">热度</div>
            <div class="li" @click="heatOrPublicChange('infoIndex')" :class="this.riseOrHeat === 'infoIndex'?'active':''">舆情</div>
          </div>
          <ul class="time-ul" v-show='isUpDown'>
            <li @click="renderCharts('day')" :class="this.period==='day'?'active':''">日内</li>
            <li @click="renderCharts('M01')" :class="this.period==='M01'?'active':''">近1月</li>
            <li @click="renderCharts('M03')" :class="this.period==='M03'?'active':''">近3月</li>
            <li @click="renderCharts('M06')" :class="this.period==='M06'?'active':''">近6月</li>
            <li @click="renderCharts('M12')" :class="this.period==='M12'?'active':''">近1年</li>
            <li @click="renderCharts('M36')" :class="this.period==='M36'?'active':''">近3年</li>
            <li @click="renderCharts('ALL')" :class="this.period==='ALL'?'active':''">全部</li>
          </ul>
          <div class="topic-chart" ref="chart" v-show='isShowCharts1'></div>
          <div class="topic-chart topic-chart2" v-show='!isShowCharts1'></div>
        </div>
        <div class="left-con1 display-box">
          <div class="con1-ti box-flex-1">
            <strong>行业简介：</strong>
            <!-- <router-link :to="{name:'detailPages',params:{id : detail.newsId, detailType:'news'}}"> -->
            <span class="tip-1">{{cutStr(checkNull(detail.induDesc)+'',201)}}<i>{{checkNull(detail.induDesc)}}</i></span>
            <!-- </router-link> -->
          </div>
          <!-- <div class="con1-event box-flex-1">
            <strong>驱动事件：</strong>
            <router-link :to="{name:'detailPages',params:{id : detail.eventId, detailType:'news'}}"><span class="tip-1 tip-event">{{checkNull(detail.drivenEvent)}}</span>
            </router-link>
          </div> -->
        </div>
        <div class="left-con3 clearfix">
          <div class="right-top right-top2"><strong>相关资讯</strong></div>
          <div class="in-content" :style="{  height: fullHeight1 + 'px' }" v-if="informatList.length>0">
            <a class="clearfix in-content-a" v-for="(infor,index) of informatList">
              <router-link :to="{name:'detailPages',params:{id : infor.newsId, detailType:'news'}}" class="list-bottom" target="_blank">
                <span class="fl assess" :class="checkAssessBg(infor.postiveIndex)" v-if="infor.postiveIndex!==null">{{checkAssessTxt(infor.postiveIndex)}}</span>
                <span class="fl assess" v-if="infor.postiveIndex===null"></span>
                <span class="new-tit" @mouseenter="enterNewTit($event)" @mouseleave="leaveNewTit($event)">{{checkNull(infor.title)}}<i>{{checkNull(infor.title)}}</i></span>
                <span class="new-date">{{infor.declareDate==null?'--':format(infor.declareDate)}}</span>
                <span class="new-srcname">{{checkNull(infor.srcName)}}</span>
              </router-link>
            </a>

          </div>
          <div class="in-content-no" :style="{  height: (fullHeight1+36) + 'px' }" v-if="informatList.length<=0">
            <!-- <a class="clearfix in-content-b" >
               暂无相关资讯
               </a> -->
            <div class="no-data"></div>
          </div>
        </div>
      </div>
      <div class="main-right box-flex-1">
        <div class="right-top"><span>成份股</span><span class="blue fr see-filter"><a
                :href="'/filter.shtml?from=subIndustry&IndustryCode='+detail.induCode" target="_blank"
                class="blue">筛选器查看</a></span><span class="blue fr mo-sort" :class="this.stockSort==='recommendIndex'?'active':''" @click="defaultSort('recommendIndex','DESC')">默认相关度排序</span></div>
        <table class="right-table clearfix" :style="{  height: fullHeight3 + 'px' }">
          <tr>
            <td @click="isDireSymbol===true?sortStock($event,'symbol','DESC'):sortStock($event,'symbol','ASC')" :class="this.stockSort==='symbol'?'active':''" class="td-txt td-txt1">简称/代码<i :class="isDireSymbol===true?'sort-up':'sort-down'"></i></td>
            <td @click="isDirePrice===true?sortStock($event,'marketData.price','DESC'):sortStock($event,'marketData.price','ASC')" :class="this.stockSort==='marketData.price'?'active':''" class="td-txt td-txt2">最新价<i :class="isDirePrice===true?'sort-up':'sort-down'"></i></td>
            <td @click="isDireCurChng===true?sortStock($event,'marketData.curChngPct','DESC'):sortStock($event,'marketData.curChngPct','ASC')" :class="this.stockSort==='marketData.curChngPct'?'active':''" class="td-txt td-txt2">涨跌幅<i :class="isDireCurChng===true?'sort-up':'sort-down'"></i></td>
            <td @click="isDireIndustry===true?sortStock($event,'industryName','DESC'):sortStock($event,'industryName','ASC')" :class="this.stockSort==='industryName'?'active':''" class="td-txt td-txt4">申万行业<i :class="isDireIndustry===true?'sort-up':'sort-down'"></i></td>
            <td class="td-txt5">关联题材</td>
            <td class="td-txt5">主营业务</td>
            <td @click="isDireRecommendIndex===true?sortStock($event,'recommendIndex','DESC'):sortStock($event,'recommendIndex','ASC')" :class="this.stockSort==='recommendIndex' && this.isRecommendIndex===true?'active':''" class="td-txt td-txt6">相关度<i :class="isDireRecommendIndex===true?'sort-up':'sort-down'"></i></td>
          </tr>
          <tr v-for="stock of stockList">
            <td v-z3-stock="{ref:'stockbox',code:stock.innerCode}" class="stock-td1" :value="stock.innerCode"><a :href="'/stock/'+stock.innerCode" target="_blank"><span class="blue">{{stock.name==null?'--':stock.name}}</span></br>
              <small class="num-td">{{stock.symbol==null?'--':stock.symbol}}</small>
            </a></td>
            <td v-z3-updowncolor="stock.curChngPct">{{relatedStocks[stock.innerCode].price==null?'--':relatedStocks[stock.innerCode].price}}</td>
            <td v-z3-updowncolor="stock.curChngPct">{{relatedStocks[stock.innerCode].curChngPct==null?'--':changeTofixed(relatedStocks[stock.innerCode].curChngPct)}}</td>
            <td class="gray">{{checkNull(stock.induName)}}</td>
            <td class="blue stock-td2" @mouseenter="enterNumberTopic($event,stock.innerCode)" @mouseleave="leaveNumberTopic($event)">{{checkNull(stock.relaTopicNum)}}<a class="numTopic">
              <span v-for="number of numberTopic"><router-link
                      :to="{name:'topicDetail',params:{topicId:number.topicCode}}" target="_blank">{{number.topicName}}</router-link></span></a></td>
            <td class="blue stock-td3">查看<span class="see-topicmark" v-if='stock.induMark===null'>暂无数据</span><span class="see-topicmark" v-if='stock.induMark!==null'>{{stock.induMark.length<=200?stock.induMark:stock.induMark.substring(0,201)+'…'}}</span></td>
            <td class="progress-box">
              <span class="progress redbg" :style="'width:'+ Math.ceil(Math.abs(stock.recommendIndex*100))+'%;min-width:20%'" v-if="stock.recommendIndex==0">1%</span>
              <span class="progress redbg" :style="'width:'+ Math.ceil(Math.abs(stock.recommendIndex*100))+'%;min-width:20%'" v-else>{{checkNull(checkRecommend(stock.recommendIndex))}}</span>
            </td>
          </tr>
        </table>
        <Pagination @getPageFromChild="goToPage" :totalPage="stockTotal" />
      </div>
    </div>
    <div class="foot-tishi clearfix">
      风险提示：本行业业绩表现及成份股仅供参考，不作为买卖建议，风险自担！
    </div>
  </div>
  <StockBox ref="stockbox"></StockBox>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import echarts from 'echarts'
import {
  formatDate,
  cutString
} from 'utils/date'
// import { mutationTypes } from 'stores/z3tougu-theme'
import z3websocket from '../z3tougu/z3socket'
import StockBox from 'components/stock-box'
import Pagination from './pagination'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
export default {
  data() {
    return {
      period: {
        all: 'ALL',
        M01: 'M01',
        M03: 'M03',
        M06: 'M06',
        M12: 'M12',
        M36: 'M36',
        day: 'day'
      },
      stockSort: {
        symbol: 'symbol',
        recommendIndex: 'recommendIndex',
        price: 'marketData.price',
        curChngPct: 'marketData.curChngPct',
        industryName: 'industryName'
      },
      riseOrHeat: {
        rise: 'rise',
        techIndex: 'techIndex',
        infoIndex: 'infoIndex'
      },
      selectMaValue: 'Ma5',
      isUpDown: true,
      direction: '',
      isDireSymbol: true,
      isDirePrice: true,
      isDireCurChng: true,
      isDireIndustry: true,
      isDireRecommendIndex: true,
      isRecommendIndex: false,
      isShowCharts1: true,
      isShowCharts2: false,
      induCode: this.$route.params.industryId,
      // fullHeight1: document.documentElement.clientHeight - 546,
      fullHeight1: document.documentElement.clientHeight - 505,
      fullHeight2: parseInt((document.documentElement.clientHeight - 166) / 44),
      fullHeight3: document.documentElement.clientHeight - 166,
      size: 12,
      inforPageSize: 100,
      endAll: '',
      alltimers: '',
      stockPage: 0,
      stockPageSize: '',
      showSee: false,
      stockList: [],
      titleName: '',
      maName: 'MA5',
      iconHelpMsg: '',
      iconHelpMsgUdown: '行业涨跌幅通过成份股的流通市值加权平均涨跌幅计算而来，再通过∏(1+r',
      iconHelpMsgHeat: '行业热度通过行业的涨跌幅、近1周涨跌幅、成份股上涨数量占比，并叠加一定的全局惩罚参数和单个行业惩罚参数加权平均计算而来，完全从技术层面评价行业热度。',
      iconHelpMsgPublic: '行业舆情通过监听全网财经新闻、董秘问答、社区讨论数据等，采用文本挖掘算法、图算法等相关理论计算行业关注度，并通过成份股的舆情做进一步修正，完全从舆情层面评价行业。'


    }
  },
  components: {
    StockBox,
    Pagination
  },
  computed: {
    ...mapState({
      relatedStocks: state => state.industry.relatedStocks,
      allLimit: state => state.industry.allLimit,
      realtimeLimit: state => state.industry.realtimeLimit,
      numberTopic: state => state.industry.numberTopic,
      stockTotal: state => state.industry.stockTotal,
      socketState: state => state.z3sockjs.readystate,
      stockMessage: state => {
        const msg = state.z3sockjs.message
        if (msg && msg.data && msg.data.subject === 'snapshot') {
          const record = msg.data
          console.log(record)
          return {
            innerCode: record.stockCode,
            // name: record.stockname,
            price: record.lastpx,
            chg: record.pxchg,
            curChngPct: record.pxchgratio
          }
        } else {
          return null
        }
      },
      lineData: state => state.industry.lineData,
      news: state => state.industry.news,
      informatList: state => state.industry.informatList,
      inforTotalElements: state => state.industry.inforTotalElements,
      stockData: state => {
        const listData = state.industry.stockList
        return listData
      },
      detail: state => state.industry.detail,
      chartData: state => {
        const chartData = state.industry.allCharts
        const induReturnRate = []
        const hs300ReturnRate = []
        const tradeDate = []
        let induName = ''
        let time = ''
        let chartDataEnd = ''
        chartData && chartData.forEach(item => {
          time = (item.tradeDate + '').substring(0, 4) + '-' + (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length)
          induReturnRate.push(Number(item.induReturnRate).toFixed(2))
          hs300ReturnRate.push(Number(item.hs300ReturnRate).toFixed(2))
          tradeDate.push(time)
          induName = item.induName
          // console.log(chartData.length)
          chartDataEnd = chartData[chartData.length - 1].tradeDate
          // console.log(chartDataEnd)
        })

        return {
          induReturnRate: induReturnRate,
          hs300ReturnRate: hs300ReturnRate,
          tradeDate: tradeDate,
          induName: induName,
          chartDataEnd: chartDataEnd
        }
      },
      realTimeData: state => {
        const realtimeCharts = state.industry.realtimeCharts
        const realData = state.industry.realtimeCharts
        const induChngPct = []
        const hs300ChngPct = []
        const tradeMin = []
        const arr = [9, 10, 11, 13, 14, 15]
        let start = null
        let end = null
        let realTime = null
        let topicTimeName = ''
        let realTimeEnd = ''
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === 9) {
            start = 30
            end = 60
          } else if (arr[i] === 11) {
            start = 0
            end = 31
          } else if (arr[i] === 15) {
            start = 0
            end = 1
          } else {
            start = 0
            end = 60
          }
          for (var j = start; j < end; j++) {
            j = j < 10 ? '0' + j : j
            if (arr[i] === 11 && j === 30) {
              break
            } else if (arr[i] === 13 && j === '00') {
              realTime = '11:30'
              // realTime = '11:30' + '/' + arr[i] + ':' + j
              //  realTime = arr[i] + ':' + j
            } else {
              realTime = arr[i] + ':' + j
            }
            // console.log(realTime)
            tradeMin.push(realTime)
          }
        }

        function getIndex(time) {
          if (time > 930 && time <= 959) {
            return time - 930;
          } else if (time >= 1000 && time <= 1059) {
            return 30 + (time - 1000);
          } else if (time >= 1100 && time <= 1130) {
            return 90 + (time - 1100);
          } else if (time > 1300 && time <= 1359) {
            return 120 + (time - 1300);
          } else if (time >= 1400 && time <= 1459) {
            return 180 + (time - 1400);
          } else if (time === 1500) {
            return 240;
          }
        }
        realtimeCharts && realtimeCharts.forEach((item, index) => {
          topicTimeName = item.induName
          realTimeEnd = realtimeCharts[realtimeCharts.length - 1].tradeMin
          console.log(realTimeEnd)
          if (index === 0) {
            induChngPct.push(0)
            hs300ChngPct.push(0)
          } else {
            var indexs = getIndex(item.tradeMin)
            induChngPct[indexs] = Number(item.induChngPct).toFixed(2)
            hs300ChngPct[indexs] = Number(item.hs300ChngPct).toFixed(2)
            // induChngPct.push(Number(item.induChngPct).toFixed(2))
            // hs300ChngPct.push(Number(item.hs300ChngPct).toFixed(2))
          }
          /* tradeMin.push(tradeMinDate)*/
        })

        return {
          induChngPct: induChngPct,
          hs300ChngPct: hs300ChngPct,
          tradeMin: tradeMin,
          topicTimeName: topicTimeName,
          realTimeEnd: realTimeEnd,
          realData: realData
        }
      },
      xLabelInterval() {
        let interval = 'auto'
        if (this.period === 'day') {
          interval = 14
        } else {
          interval = 'auto'
        }
        return interval
      },
      topicTechAndInfoData: state => {
        const topicData = state.industry.industryTechAndInfo
        const indexValue = []
        const maValue = []
        const tradeDate = []
        const pointData = []
        let topicName = ''
        let time = ''
        topicData && topicData.forEach(item => {
          time = (item.tradeDate + '').substring(0, 4) + '-' + (item.tradeDate + '').substring(4, 6) + '-' + (item.tradeDate + '').substring(6, (item.tradeDate + '').length)
          indexValue.push(Number(item.indexValue).toFixed(2))
          maValue.push(Number(item.maValue).toFixed(2))
          tradeDate.push(time)
          topicName = item.induName
          // console.log(chartData.length)
          // console.log(chartDataEnd)

          pointData.push({
            name: 'XX标点',
            coord: [time + '', item.indexValue],
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: '#1984ea'

              }
            },
            label: {
              normal: {
                show: true,
                formatter: function(params, ticket, callback) {
                  return ''
                },
                textStyle: {
                  fontSize: 0
                }
              }
            }
          })

        })

        return {
          indexValue: indexValue,
          maValue: maValue,
          tradeDate: tradeDate,
          topicName: topicName,
          pointData: pointData
        }
      }

    })
  },
  watch: {
    relatedStocks() {
      if (z3websocket.ws) {
        z3websocket.ws && z3websocket.ws.close()
      } else {
        this.$store.dispatch('z3sockjs/init')
      }
    },
    stockMessage() {
      if (this.stockMessage) {
        console.log(this.stockMessage)
        this.updateStock(this.stockMessage)
      }
    },
    socketState() {
      if (this.socketState === 1) {
        // 建立连接
        this.subscribeStock()
      } else if (this.socketState === 3) {
        // 断开连接，重新建立连接
        this.$store.dispatch('z3sockjs/init')
      }
    },
    realTimeData() {
      this.$store.dispatch('industry/queryRealtimeChartsLimit', {
        period: this.period,
        induCode: this.induCode
      }).then((v) => {
        console.log(12)
      })
    },
    stockPage() {
      this.stockList = []
      this.initStockList(this.stockPage)
    }
  },
  methods: {
    initChart() {
      // this.chart = echarts.init(this.$refs.chart)
      this.chart = echarts.getInstanceByDom(document.getElementsByClassName('topic-chart')[0]) || echarts.init(document.getElementsByClassName('topic-chart')[0])
      this.period = 'day'
      this.renderCharts(this.period)
    },
    goToPage(page) {
      this.stockPage = Number(page) - 1
      // console.log(this.stockPage)
    },
    renderCharts(type) {
      this.period = type
      console.log(type)
      var _this = this
      if (type === 'day') {
        this.$store.dispatch('industry/queryRealtimeCharts', {
          period: this.period,
          induCode: this.induCode
        }).then(() => {
          console.log(this.detail.induName)
          this.drawCharts(this.detail.induName, this.realTimeData.tradeMin, this.realTimeData.induChngPct, this.realTimeData.hs300ChngPct)
          if (this.alltimers) {
            clearInterval(this.alltimers)
          } else if (this.alls) {
            clearInterval(this.alls)
          }

          this.alltimers = setInterval(function() {
            _this.updateChartRealTime()
          }, 30000)
        })
      } else {
        this.$store.dispatch('industry/queryAllCharts', {
            period: this.period,
            induCode: this.induCode
          })
          .then(() => {
            this.drawCharts(this.chartData.induName, this.chartData.tradeDate, this.chartData.induReturnRate, this.chartData.hs300ReturnRate)
            if (this.alltimers) {
              clearInterval(this.alltimers)
            } else if (this.alls) {
              clearInterval(this.alls)
            }
            this.alls = setInterval(function() {
              _this.updateChartAll()
            }, 50000)
          })
      }
    },
    renderMa5() {
      this.$store.dispatch('industry/queryIndustryTechAndInfo', {
          induCode: this.induCode,
          riseOrHeat: this.riseOrHeat,
          selectMaValue: this.selectMaValue
        })
        .then(() => {
          this.drawHeatPublicCharts(this.topicTechAndInfoData.topicName, this.topicTechAndInfoData.tradeDate, this.topicTechAndInfoData.indexValue, this.topicTechAndInfoData.maValue, this.topicTechAndInfoData.pointData)
        })
    },
    loadHeatRiseCharts() {
      this.isUpDown = false
      this.isShowCharts1 = false
      this.isShowCharts2 = true
      document.getElementsByClassName('topic-chart')[0].style.display = 'none';
      document.getElementsByClassName('topic-chart')[1].style.display = 'block';
      this.chart2 = echarts.getInstanceByDom(document.getElementsByClassName('topic-chart')[1]) || echarts.init(document.getElementsByClassName('topic-chart')[1])
      this.initSelect('.selectma')
      document.getElementById('select-h5').innerHTML = 'MA5'
      this.selectMaValue = 'Ma5'
      this.maName = 'MA5'
      this.renderMa5()
    },
    heatOrPublicChange(type) {
      console.log(type)
      this.riseOrHeat = type
      if (type === 'rise') {
        this.renderCharts('day')
        this.isUpDown = true
        this.isShowCharts1 = true
        // $('#downtxt').append('<span><sub>t</sub>)-1计算累计收益率曲线，其中r<sub>t</sub>代表第t日题材涨跌幅。</span>');
        var downtxt = document.getElementById('downtxt');
        var newSpan = document.createElement('span');
        newSpan.id = 'expres';
        newSpan.innerHTML = '<sub>t</sub>)-1计算累计收益率曲线，其中r<sub>t</sub>代表第t日行业涨跌幅。';
        downtxt.appendChild(newSpan);
      } else if (type === 'techIndex') {
        this.loadHeatRiseCharts()
        this.titleName = '热度指数'
        // $(".select-h5").text('asas')
        /* var expres=document.getElementById('expres')
        document.getElementById('downtxt').removeChild(expres); */
        // $('#downtxt').find('span').remove();
        $('#downtxt').find('span').remove();
      } else if (type === 'infoIndex') {
        this.loadHeatRiseCharts()
        this.titleName = '舆情指数'
        $('#downtxt').find('span').remove();

      }

    },
    updateChartAll() {
      this.$store.dispatch('industry/queryAllChartsLimit', {
        period: this.period,
        induCode: this.induCode
      }).then(() => {
        if (this.allLimit[0].tradeDate === this.chartData.chartDataEnd) {
          const allLimitHs = Number(this.allLimit[0].hs300ReturnRate).toFixed(2) // 新
          const allLimitReturn = Number(this.allLimit[0].induReturnRate).toFixed(2)
          var hsLen = this.chartData.hs300ReturnRate.length - 1
          var induLen = this.chartData.induReturnRate.length - 1
          console.log(induLen)
          this.chartData.hs300ReturnRate[hsLen] = allLimitHs
          this.chartData.induReturnRate[induLen] = allLimitReturn
        } else {
          this.chartData.chartDataEnd = this.allLimit[0].tradeDate
          this.chartData.hs300ReturnRate.push(Number(this.allLimit[0].hs300ReturnRate).toFixed(2))
          this.chartData.induReturnRate.push(Number(this.allLimit[0].induReturnRate).toFixed(2))
          this.drawCharts(this.chartData.induName, this.chartData.tradeDate, this.chartData.induReturnRate, this.chartData.hs300ReturnRate)
        }
      })
    },
    updateChartRealTime() {
      this.$store.dispatch('industry/queryRealtimeChartsLimit', {
        period: this.period,
        induCode: this.induCode
      }).then((v) => {
        if (this.realtimeLimit[0].tradeMin === this.realTimeData.realTimeEnd) {
          const realTimeLimitHs = Number(this.realtimeLimit[0].hs300ChngPct).toFixed(2) // xin
          const realTimeLimitReturn = Number(this.realtimeLimit[0].induChngPct).toFixed(2)
          this.realTimeData.hs300ChngPct[this.realTimeData.hs300ChngPct.length - 1] = realTimeLimitHs
          this.realTimeData.induChngPct[this.realTimeData.induChngPct.length - 1] = realTimeLimitReturn
          console.log('1')
        } else {
          console.log('不相同')
          this.realTimeData.realTimeEnd = this.realtimeLimit[0].tradeMin
          this.realTimeData.induChngPct.push(Number(this.realtimeLimit[0].induChngPct).toFixed(2))
          this.realTimeData.hs300ChngPct.push(Number(this.realtimeLimit[0].hs300ChngPct).toFixed(2))
          this.drawCharts(this.detail.induName, this.realTimeData.tradeMin, this.realTimeData.induChngPct, this.realTimeData.hs300ChngPct)
        }
      })
    },
    handleResize(event) {
      this.fullHeight = document.documentElement.clientHeight
    },

    initStockList(type, stockPage) {
      if (type === 'recommendIndex') {
        this.stockSort = 'recommendIndex'
        this.direction = 'DESC'
      }
      this.fullHeight > 710 ? (this.fullHeight > 876 ? this.size = 18 : this.size = 15) : this.size = 12
      /* this.stockList = []*/
      this.$store.dispatch('industry/queryStockList', {
        induCode: this.induCode,
        sortField: this.stockSort,
        direction: this.direction,
        stockPage: this.stockPage,
        stockPageSize: this.fullHeight2
      }).then(() => {
        this.stockList = this.stockData
      })

    },
    initInformatList() {
      this.$store.dispatch('industry/queryInformatList', {
        induCode: this.induCode,
        inforPageSize: this.inforPageSize
      })
    },
    enterNumberTopic(e, innerCode) {
      e.preventDefault()
      var numTopics = document.getElementsByClassName('numTopic')
      for (var i = 0; i < numTopics.length; i++) { // 遍历内容块
        numTopics[i].style.display = 'none'
      }
      e.currentTarget.children[0].style.display = 'block'
      this.$store.dispatch('industry/queryStockNumberTopic', {
        innerCode: innerCode
      })
    },
    leaveNumberTopic(e) {
      e.preventDefault()
      e.currentTarget.children[0].style.display = 'none'
    },
    enterNewTit(e) {
      e.preventDefault()
      var inContent = document.getElementsByClassName('in-content')[0]
      var inDivHight = inContent.clientHeight
      e.currentTarget.children[0].style.display = 'block'
      if (e.currentTarget.offsetTop > inDivHight - 80) {
        e.currentTarget.children[0].style.top = e.currentTarget.offsetTop - 20 + 'px'
        e.currentTarget.children[0].style.left = e.currentTarget.offsetLeft + 200 + 'px'
      }
    },
    leaveNewTit(e) {
      e.preventDefault()
      e.currentTarget.children[0].style.display = 'none'
    },
    enterSee(e) {
      e.preventDefault()
      console.log(e.currentTarget.nextElementSibling)
      e.currentTarget.nextElementSibling.style.display = 'block'
    },
    leaveSee(e) {
      e.preventDefault()
      e.currentTarget.nextElementSibling.style.display = 'none'
    },
    defaultSort(type, dire) {
      // e.preventDefault()
      if (type === 'recommendIndex') {
        this.stockSort = 'recommendIndex'
        this.isRecommendIndex = true
        this.isDireRecommendIndex = false
        this.direction = 'DESC'
      }
      this.$store.dispatch('industry/queryStockList', {
        induCode: this.induCode,
        sortField: this.stockSort,
        direction: this.direction,
        stockPage: this.stockPage,
        stockPageSize: this.fullHeight2
      }).then(() => {
        this.stockList = this.stockData
      })
    },
    sortStock(e, type, dire) {
      e.preventDefault()
      this.stockSort = type
      this.direction = dire
      console.log(type)
      if (type === 'symbol') {
        this.isDireSymbol = !this.isDireSymbol
      } else if (type === 'marketData.price') {
        console.log(this.isDirePrice)
        this.isDirePrice = !this.isDirePrice
      } else if (type === 'marketData.curChngPct') {
        console.log(this.isDireCurChng)
        this.isDireCurChng = !this.isDireCurChng
      } else if (type === 'industryName') {
        this.isDireIndustry = !this.isDireIndustry
      } else if (type === 'recommendIndex') {
        this.stockSort = 'recommendIndex'
        this.isDireRecommendIndex = !this.isDireRecommendIndex
        this.isRecommendIndex = true
      }
      console.log(dire)
      this.$store.dispatch('industry/queryStockList', {
        induCode: this.induCode,
        sortField: this.stockSort,
        direction: dire,
        stockPage: this.stockPage,
        stockPageSize: this.fullHeight2
      }).then(() => {
        this.stockList = this.stockData
      })
      console.log(this.induCode)
    },
    drawCharts(induName, tradeDate, induReturnRate, hs300ReturnRate) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            if (params.length) {
              if (params[0].value !== '') {
                var boxHtml = '<div style="color:#c9d0d7;">' + params[0].name + '<br/>'
              }
              for (var i = 0; i < params.length; i++) {
                var param = params[i]
                if (param.value !== '') {
                  boxHtml += '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + param.color + '\'></span><span style="color:#c9d0d7;">' + ' ' + param.seriesName + ': ' + param.value + '%<br/></span></div>'
                }
              }
              return boxHtml
            }
          }
        },
        legend: {
          left: '3%',
          // top: 5,
          top: 23,
          itemWidth: 15,
          itemHeight: 8,
          data: [{
              name: induName,
              icon: 'pin',
              textStyle: {
                color: '#c9d0d7'
              }
            },
            {
              name: '沪深300',
              icon: 'pin',
              textStyle: {
                color: '#c9d0d7'
              }
            }
          ]

        },
        toolbox: {
          show: false
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: tradeDate,
          axisLabel: {
            // X轴刻度配置
            interval: this.xLabelInterval, // 0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
            textStyle: {
              color: '#c9d0d7'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}%',
            textStyle: {
              color: '#c9d0d7'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#23272c'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#23272c'
            }
          }
        }],
        grid: {
          /* width: '97%',*/
          left: '10px',
          /* right: '3%',*/
          /* right: '4%',*/
          /* right: '4.7%',*/
          right: '40px',
          /* bottom: '50',*/
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
          height: '8%',
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
        }],
        series: [{
            name: induName,
            type: 'line',
            smooth: true,
            data: induReturnRate,
            lineStyle: { // 网格线
              normal: {
                color: '#1984ea'
              }
            },
            itemStyle: { // 折线拐点标志的样式
              normal: {
                opacity: 0,
                color: '#1984ea'
              }
            },
            markPoint: { // 图标标注
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ],
              label: {
                normal: {
                  show: false
                }
              },
              symbolSize: 10, // 标记大小
              symbol: '' // 标记的图形
            }
          },
          {
            name: '沪深300',
            type: 'line',
            smooth: true,
            data: hs300ReturnRate,
            lineStyle: {
              normal: {
                color: '#ca4941'
              }
            },
            itemStyle: {
              normal: {
                opacity: 0,
                color: '#ca4941'
              }
            },
            markPoint: { // 图标标注
              data: [{
                  type: 'max',
                  name: '最大值'
                },
                {
                  type: 'min',
                  name: '最小值'
                }
              ],
              label: {
                normal: {
                  show: false
                }
              },
              symbolSize: 10, // 标记大小
              symbol: '' // 标记的图形
            }
          }
        ]

      })
      window.onresize = this.chart.resize
    },
    drawHeatPublicCharts(topicName, tradeDate, indexValue, maValue, pointData) {
      var _self = this
      this.chart2.setOption({
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            if (params.length) {
              if (params[0].value !== '') {
                var boxHtml = '<div style="color:#c9d0d7;">' + params[0].name + '<br/>'
              }
              for (var i = 0; i < params.length; i++) {
                var param = params[i]
                if (param.value !== '') {
                  if (i === 0) {
                    if (_self.riseOrHeat === 'techIndex') {
                      params[i].seriesName = '热度'

                    } else if (_self.riseOrHeat === 'infoIndex') {
                      params[i].seriesName = '舆情'
                    }

                  }
                  boxHtml += '<span style=\'display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + param.color + '\'></span><span style="color:#c9d0d7;">' + ' ' + params[i].seriesName + ': ' + param.value + '<br/></span></div>'
                }
              }
              return boxHtml
            }
          }
        },
        legend: {
          // left: '3%',
          left: '3%',
          // top: 5,
          top: 23,
          itemWidth: 15,
          itemHeight: 8,
          selected: {
            'MA5': true
          },

          data: [{
              name: this.titleName,
              icon: 'pin',
              textStyle: {
                color: '#c9d0d7'
              }
            }
            /*,
                        {
                          name: 'MA5',
                          icon: 'circle',
                          textStyle: {
                            color: '#c9d0d7'
                          }
                        }*/
          ]

        },
        toolbox: {
          show: false
        },
        calculable: true,
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: tradeDate,
          axisLabel: {
            // X轴刻度配置
            interval: this.xLabelInterval, // 0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
            textStyle: {
              color: '#c9d0d7'
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#c9d0d7'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#23272c'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#23272c'
            }
          }
        }],
        grid: {
          /* width: '97%',*/
          left: '10px',
          /* right: '3%',*/
          /* right: '4%',*/
          /* right: '4.7%',*/
          right: '40px',
          /* bottom: '50',*/
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
          height: '8%',
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
        }],
        series: [{
            name: this.titleName,
            type: 'line',
            smooth: true,
            data: indexValue,
            lineStyle: { // 网格线
              normal: {
                color: '#1984ea'
              }
            },
            itemStyle: { // 折线拐点标志的样式
              normal: {
                opacity: 0,
                color: '#1984ea'
              }
            },
            markPoint: {

              label: {
                normal: {
                  formatter: function(param) {
                    return param != null ? Math.round(param.value) : ''
                  }
                }
              },
              data: pointData,
              tooltip: {
                formatter: function(param) {
                  return param.name + '<br>' + (param.data.coord || '')
                }
              }
            }
          },
          {
            name: this.maName,
            type: 'line',
            data: maValue,
            smooth: true,
            lineStyle: {
              normal: {
                color: '#edb443',
                type: 'dashed'
              }
            },
            itemStyle: { // 折线拐点标志的样式
              normal: {
                opacity: 0,
                color: '#edb443'
              }
            }
          }
        ]

      })
      window.onresize = this.chart2.resize
    },
    format(date) {
      return formatDate(date)
    },
    initSelect(node) {
      var _this = this
      $(node).each(function(i, val) {
        var old = this;
        var aNode = ['<h5 style="width: 70px;height:10px;text-indent: 1em; line-height: 10px;color: #c9d0d7;font-size:12px;font-weight:400;" id="select-h5"></h5>', '<ol style="width: 60px;position: absolute;left:0;top:12px;text-indent: 1em;display: none;color: #c9d0d7;font-size:12px;" id="select-ol">'];
        var opt = $(this).find('option');
        opt.each(function() {
          var val = $(this).val();
          var txt = $(this).text();
          aNode.push('<li style="color: #c9d0d7;font-size:12px;" data-value=' + val + '>' + txt + '</li>');
        })
        aNode.push('</ol>');
        console.log(aNode);
        var wrap = $('<div class="select" style="position: absolute;left: -108%;;top: 26px;;z-index: 999;cursor: pointer;"><div>');

        wrap.html(aNode.join(''));
        $(this).before(wrap);
        // 显示默认菜单文字
        var tit = wrap.find('h5');

        var txt = this.options[0].text;
        console.log(this.options[0].text)
        tit.text(txt);

        wrap.on('click', function(e) {
          e.stopPropagation(); // 阻止冒泡
          var sub = $(this).find('ol');

          if (sub.is(':hidden')) {
            sub.show();
            $(this).addClass('down');
          } else {
            sub.hide();
            $(this).removeClass('down"');
          }
        }).on('click', 'li', function() {
          tit.text($(this).text());
          _this.selectMaValue = $(this).attr('data-value')
          _this.maName = $(this).html()
          console.log(_this.maName)
          // 让原来的select 的selectedIndex 为当前里li的索引
          console.log(_this.selectMaValue)

          _this.renderMa5()
          old.selectedIndex = $(this).index();
          $(old).triggerHandler('change');
        }).on('mouseover', 'li', function() {
          $(this).css('background', '#1984ea')
        }).on('mouseout', 'li', function() {
          $(this).css('background', 'none')
        })
        $('body').click(function(e) {
          var target = $(e.target);
          var sub = $(this).find('ol');
          if (!target.is('.select')) {
            if (sub.is(':visible')) {
              sub.hide();
            }
          }
        });

      })
      $(node).remove();
    },
    checkNull(str) {
      if (str === null) {
        return '--'
      }
      if (str === undefined) {
        return '--'
      } else {
        return str
      }
    },
    cutStr(str, len) {
      return cutString(str, len)
    },
    updateStock(stock) {
      this.$store.commit('industry/UPDATE_TOPIC_RELSTOCK', stock)
    },
    subscribeStock() {
      const msg = {
        subject: 'snapshot',
        type: '1',
        actionType: '1',
        stockCodeList: Object.keys(this.relatedStocks),
        token: ''
      }
      this.$store.dispatch('z3sockjs/send', msg)
    },
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    checkRecommend(num) {
      return Math.ceil(num * 100) + '%'
    },
    checkAssessBg(str) {
      if (str === 0) {
        str = 'blockbg'
      } else if (str === 2) {
        str = 'redbg'
      } else if (str === 1) {
        str = 'greenbg'
      } else {
        str = 'blockbg'
      }
      return str
    },
    checkAssessTxt(str) {
      if (str === 0) {
        str = '中性'
      } else if (str === 2) {
        str = '正面'
      } else if (str === 1) {
        str = '负面'
      } else {
        str = '中性'
      }
      return str
    }

  },
  created() {
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    this.initChart()
    // this.initStockList('recommendIndex')
    this.defaultSort('recommendIndex', 'DESC')
    this.initInformatList()
    this.heatOrPublicChange('rise')
    // this.chart = echarts.init(this.$refs.chart)
    this.$store.dispatch('industry/queryDetailHead', {
      induCode: this.induCode
    })
    var _this = this
    this.updateDetail = setInterval(function() {
      _this.$store.dispatch('industry/queryDetailHead', {
        induCode: _this.induCode
      })
    }, 60000)
    console.log(_this.induCode)

  },
  destroyed() {
    z3websocket.ws && z3websocket.ws.close()
    this.alltimers && clearInterval(this.alltimers)
    this.alls && clearInterval(this.alls)
    this.updateDetail && clearInterval(this.updateDetail)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script>
