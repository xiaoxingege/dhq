<style>
@import '../assets/css/reset.css';
.limitmove{

}
.title-tab{
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom:0.01rem solid #DBDBDB;
}
.title-tab{
  overflow: hidden;
}
.title-item{
  text-align: center;
  font-size: 0.28rem;
  color:#333;
  float: left;
  width:2.5rem;
  position: relative;
}
.title-item.active{
  color:#F54949;
}
.title-item.active span{
  display: block;
  width:0.5rem;
  height: 0.04rem;
  background: #F54949 ;
  position: absolute;
  bottom:0;
  left:50%;
  margin-left:-0.25rem;
}



/*====================my.css-start==============================*/
.inforBox{
	overflow: hidden;
  padding: 0 0.2rem;
}
.inforBox .time{
	float: right;
	height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.24rem;
}
.rectangular {
    width: 85%;
    height: 8.4rem;
    border: 0.02rem solid #ccc;
    border-radius: 0.16rem;
    box-shadow: 0.02rem 0.06rem 0.2rem #b9b9b9;
    background-color: #fff;
    margin: 0 auto;
    position: relative;
}
.thermText {
    font-size: 0.28rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
}
#goal-thermometer{
	width:100%;
}
.pos0 {
    top: 0.96rem;
}
.pos6 {
    top: 288px;
}
.therm-number{
	position: absolute;
	text-align: center;
	font-size: 0.28rem;
	left: 30%;
	width: 0.5rem;
}
#therm-graphics{
	position: absolute;
  top: 0.8rem;
  left: 40%;
}
#therm-top{
	position: absolute;
	width: 0.72rem;
	left: 0;
	z-index: 9;
}
#therm-body-bg {
    position: absolute;
    width: 0.72rem;
    height: 4.92rem;
    left: 0;
    top:0.36rem;
    z-index: 1;
}
#therm-body-mercury {
    position: absolute;
    width: 0.72rem;
    left: 0;
    height: 0;
    top: 5.28rem;
    z-index: 5;
}
#therm-body-fore {
    position: absolute;
    width: 0.7rem;
    height:4.92rem;
    left: 0;
    top: 0.22rem;
    z-index: 10;
    background: url(http://i0.jrjimg.cn/stock/therm/tickShine.png) no-repeat;
    background-size: 0.7rem 4.86rem;
}
#therm-bottom {
    position: absolute;
    width: 1.64rem;
    left: -0.46rem;
    top: 5.28rem;
}

#therm-tooltip {
    position: absolute;
    width:1.5rem;
    height: 0.8rem;
    left: 0.72rem;
    top: 4.88rem;
    z-index: 10;
    font-size: 0.2rem;
    line-height: 0.4rem;
    box-sizing: border-box;
    padding-left: 0.24rem;
}
.therm-tooltip {
    background: url(http://i0.jrjimg.cn/stock/therm/therm-tooltip.png) no-repeat;
    background-size: 1.5rem 0.8rem;
}
#therm-type {
    position: absolute;
    right: 25%;
}
.cir1 {
    top: 0;
}
.cir2 {
    top: 1.4rem;
}
.cir3 {
    top: 2.8rem;
}
.cir4 {
    top:4.2rem;
}
.therm-border {
    width:0.9rem;
    height:0.9rem;
    border-radius: 50%;
    border: 0.06rem solid #f7f7f7;
    line-height: 0.8rem;
    text-align: center;
    position: absolute;
    box-sizing: content-box;
}
.therm-kind {
		width:0.9rem;
		height:0.9rem;
		border-radius: 50%;
    background: -webkit-linear-gradient(top, #ededed, #e2e2e2);
    border: 0.02rem solid #cccccc;
    font-size: 0.24rem;
    line-height: 0.8rem;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
}

.thermText1 {
    font-size: 0.28rem;
    height: 0.7rem;
    line-height: 0.7rem;
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 0;
    color: #666666;
}


.wdjBottom {
    width: 100%;
    margin-bottom: 0.3rem;
}
.ziranAll {
    width: 100%;
    margin-top: 0.24rem;
}
.ziranAll .zirTit {
    width: 100%;
    height: 0.68rem;
    line-height:0.68rem;
    border-top: 0.02rem solid #cccccc;
    border-bottom:0.02rem solid #cccccc;
    position: relative;
}
.ziranAll .zirTit .zirJt {
    position: absolute;
    width: 100%;
    height: 0.68rem;
    top: 0;
    right: 0.18rem;
}
.ziranAll .zirTit .zirRed {
    border-bottom: 0.04rem solid #c0163a;
    height:0.66rem;
    line-height:0.66rem;
}
.ziranAll .zirTit .zirGreen {
    border-bottom: 2px solid #1a9a2a;
		height:0.66rem;
    line-height:0.66rem;
}

.ziranAll .zirTit .title {
    width: 33%;
    text-align: center;
    color: #333333;
    font-size: 0.28rem;
}
.ziranAll .zirBot {
    width: 100%;
    text-align: center;
}
.ziranAll .zirBot .zirTab tr {
    border-bottom: 0.02rem solid #cccccc;
}
.ziranAll .zirBot .zirTab tr td.bor {
    border-right: 0.02rem solid #cccccc;
}
.ziranAll .zirBot .zirTab tr td {
    -webkit-box-flex: 1;
    height: 1.44rem;
    color: #333333;
    width: 33%;
    float: left;
    display: inline-block;
    padding-top: 0.16rem;
}
.ziranAll .zirBot .zirTab tr td .wzTRed {
    color: #c02921;
}
.ziranAll .zirBot .zirTab tr td .wzTGreen {
    color: #1a9a2a;
}
.ziranAll .zirBot .zirTab tr td .wzT {
    font-size: 0.28rem;
}
.ziranAll .zirBot .zirTab tr td .wzN {
    font-size: 0.26rem;
}
/*====================my.css-end==============================*/
.red {
    color: #c00000!important;
}
img {
    border: none;
    display: block;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
/*====================newStyle.css-start==============================*/

/*====================newStyle.css-end==============================*/

</style>

<template>
	<div class="limitmove">
		<div class="title-tab">
      <div class="title-item">
        涨跌停强度
        <span></span>
      </div>
      <div class="title-item">
        昨板今均
        <span></span>
      </div>
      <div class="title-item active">
        市场热度
        <span></span>
      </div>
    </div>

    <!--今日市场温度-->
    <div id="content_temperature" style="display: block;">
			<div class="inforBox">
				<span class="time stockTime1">2017-12-04 15:29:58</span>
			</div>
			<div class="rectangular">
				<div class="thermText red">目前涨停个股<span>13</span>家</div>
					<div id="goal-thermometer">
						<div id="therm-numbers">
							<div class="therm-number pos0">300</div>
							<div class="therm-number pos1" style="top: 1.76rem;">250</div>
							<div class="therm-number pos2" style="top: 2.56rem;">200</div>
							<div class="therm-number pos3" style="top: 3.36rem;">150</div>
							<div class="therm-number pos4" style="top: 4.16rem;">100</div>
							<div class="therm-number pos5" style="top: 4.96rem;">50</div>
							<div class="therm-number pos6"> 0 </div>
						</div>
						<div id="therm-graphics">
							<img id="therm-top" src="http://i0.jrjimg.cn/optional/marketheat/glassTop.png">
							<img id="therm-body-bg" src="http://i0.jrjimg.cn/optional/marketheat/glassBody.gif">
							<img id="therm-body-mercury" src="http://i0.jrjimg.cn/optional/marketheat/redVertical.png" style="height:0.38rem; top: 5.06rem; overflow: hidden;">
							<div id="therm-body-fore" style="background-size: 0.7rem 4.86rem;"></div>
							<img id="therm-bottom" src="http://i0.jrjimg.cn/optional/marketheat/glassBottom.gif">
							<div id="therm-tooltip" class="therm-tooltip" style="top: 4.64rem;">
								<div class="tip-middle">涨停个股<br> <span class="red">13</span>家</div>
							</div>
						</div>
						<div id="therm-type">
							<div class="therm-border cir1" data-color="#d7281e" style="border-color: #d7281e">
								<div class="therm-kind">涨停</div>
							</div>
							<div class="therm-border cir2" data-color="#2fab32">
								<div class="therm-kind">跌停</div>
							</div>
							<div class="therm-border cir3" data-color="#ff6969">
								<div class="therm-kind">≥5%</div>
							</div>
							<div class="therm-border cir4" data-color="#ccf264">
								<div class="therm-kind">≤-5%</div>
							</div>
						</div>
					</div>
				<div class="thermText1">
					总计：<span class="red">3449</span>家
					停牌：<span class="green">219</span>家
				</div>
			</div>
		</div>

		<!-- 数据 -->
		<div class="wdjBottom">
				<div class="ziranAll">
						<div class="zirTit">
								<div class="title zirRed">
										自然涨停(<i id="zr_zt_total">6</i>)
								</div>
								<div class="zirJt">
										<a href="http://mapp.jrj.com.cn/stock/getWdjList?param=zr_zt">&nbsp;</a>
								</div>
						</div>
						<div class="zirBot">
								<table cellpadding="0" cellspacing="0" border="0" width="100%" class="zirTab">
										<tbody id="zr_zt"><tr><td class="bor" >
											<div class="wzT wzTRed">*ST 中绒</div>
											<div class="wzN wzTRed">000982</div>
											<div class="wzN"><span>14:47:51</span>
												<span class="wzTRed">涨停</span>
											</div>
										</td>
										<td class="bor"><div class="wzT wzTRed">*ST一重</div>
											<div class="wzN wzTRed">601106</div>
											<div class="wzN"><span>13:56:46</span>
												<span class="wzTRed">涨停</span>
											</div>
										</td>
										<td class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600722&amp;name=金牛化工&quot;">
											<div class="wzT wzTRed">金牛化工</div>
											<div class="wzN wzTRed">600722</div>
											<div class="wzN">
												<span>13:42:50</span>
												 <span class="wzTRed">涨停</span>
											 </div>
										 </td>
									 </tr>
									 <tr>
										 <td class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=002323&amp;name=雅百特&quot;">
											 <div class="wzT wzTRed">雅百特</div>
											 <div class="wzN wzTRed">002323</div>
											 <div class="wzN"><span>13:18:51</span>
												 <span class="wzTRed">涨停</span>
											 </div>
										 </td>
										 <td class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600311&amp;name=荣华实业&quot;">
											 <div class="wzT wzTRed">荣华实业</div>
											 <div class="wzN wzTRed">600311</div>
											 <div class="wzN"><span>10:02:59</span>
												 <span class="wzTRed">涨停</span>
											 </div></td><td class="" >
												 <div class="wzT wzTRed">云南能投</div>
												 <div class="wzN wzTRed">002053</div>
												 <div class="wzN"><span>09:35:06</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
										 </tr>
									 </tbody>
								</table>
						</div>
				</div>

				<div class="ziranAll">
						<div class="zirTit">
								<div class="title zirGreen">
										一字涨停(<i id="yzb_zt_total">{{yzztNum}}</i>)
								</div>
								<div class="zirJt">
										<a href="http://mapp.jrj.com.cn/stock/getWdjList?param=yzb_zt">&nbsp;</a>
								</div>
						</div>
						<div class="zirBot">
								<table cellpadding="0" cellspacing="0" border="0" width="100%" class="zirTab">
									 <tbody id="yzb_zt">
										 <div v-if="yzztList.length===0" class="zirBot"><div class="zwsj">暂无数据</div></div>
										 <tr v-if="yzztList.length>0">
											 <td class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=000503&amp;name=海虹控股&quot;">
												 <div class="wzT wzTGreen">海虹控股</div>
												 <div class="wzN wzTRed">000503</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
									 	 	 <td class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=002913&amp;name=奥士康&quot;">
												 <div class="wzT wzTRed">奥士康</div>
												 <div class="wzN wzTRed">002913</div>
												 <div class="wzN"><span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300727&amp;name=润禾材料&quot;">
												 <div class="wzT wzTRed">润禾材料</div>
												 <div class="wzN wzTRed">300727</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="yzztList.length>0">
											 <td class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300729&amp;name=乐歌股份&quot;">
												 <div class="wzT wzTRed">乐歌股份</div>
												 <div class="wzN wzTRed">300729</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600725&amp;name=ST云维&quot;">
												 <div class="wzT wzTRed">ST云维</div>
												 <div class="wzN wzTRed">600725</div>
												 <div class="wzN"><span>09:30:00</span> <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=603711&amp;name=香飘飘&quot;">
												 <div class="wzT wzTRed">香飘飘</div>
												 <div class="wzN wzTRed">603711</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 </tr>
										 </tbody>
								</table>
						</div>
				</div>
		</div>


	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'

export default {
  data () {
    return {
			zrztNum:0,
			zrztList:[],
			yzztNum:0,
			yzztList:[],
			zrdtNum:0,
			zrdtList:[],
			yzdtNum:0,
			yzdtList:[]
    }
  },
  beforecreated () {

  },
  created () {
    document.title = '涨停追击'
  },
  mounted () {
		this.getUpAndDown()
  },
  filters: {

  },
  methods: {
		/*
		 * 一字板涨跌停数据获取
		 */
		 getUpAndDown (){
			 var url = 'http://home.flashdata2.jrj.com.cn/limitStatistic/yzbzt.js';
			 // var col = 'wzTRed';
			 // var param = '涨停';
			 $.ajax({
         url:url,
         type:'post',
         cache:false,
         dataType:'script',
				 scriptCharset: 'gbk',
         success:() => {
					 // console.log(window.yzb_zt)
					 // console.log(window.yzb_zt.Data)
					 this.yzztNum=window.yzb_zt.size
					 // if (window.yzb_zt.Data.length===0) {
						//  this.yzztList=[];
					 // }else{
						//  this.yzztList=window.yzb_zt.Data
					 // }
					 this.yzztList=[
										    // [
										    //     "002915",
										    //     "中欣氟材",
										    //     10.190,
										    //     10.040
										    // ],
										    // [
										    //     "300727",
										    //     "润禾材料",
										    //     23.400,
										    //     10.010
										    // ],
										    // [
										    //     "300729",
										    //     "乐歌股份",
										    //     30.780,
										    //     10.010
										    // ],
										    // [
										    //     "300730",
										    //     "科创信息",
										    //     13.240,
										    //     9.970
										    // ],
										    // [
										    //     "603711",
										    //     "香飘飘",
										    //     29.900,
										    //     10.010
										    // ],
										    // [
										    //     "603848",
										    //     "好太太",
										    //     15.130,
										    //     10.040
										    // ],
										    // [
										    //     "603917",
										    //     "合力科技",
										    //     24.780,
										    //     9.990
										    // ]
										]

										console.log(this.yzztList)
					 // console.log(window.yzb_zt.size)
					 // console.log(window.yzb_zt.Data)
           // if ( window.yzb_dtForce ) {
           //   this.limitList = window.yzb_dtForce.Data
           //   console.log(this.limitList)
           // }
         },
         error:function(){
           console.log('error');
         }
       })

		 }
  }
}
</script>
