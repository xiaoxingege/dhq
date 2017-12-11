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
.ziranAll .zirBot .zwsj {
    height: 1.44rem;
    line-height: 1.44rem;
    font-size: 0.36rem;
    color: #999999;
    border-bottom: 0.01rem solid #cccccc;
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
.ziranAll .zirTit .zirJt a {
    width: 100%;
    height: 0.68rem;
    display: block;
    background: url(http://i0.jrjimg.cn/appjrjv2016/zjlx_07.png) no-repeat right center;
    background-size: 0.18rem 0.3rem;
    float: right;
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
										自然涨停(<i id="yzb_zt_total">{{zrztNum}}</i>)
								</div>
								<div class="zirJt">
										<a href="http://mapp.jrj.com.cn/stock/getWdjList?param=zr_zt">&nbsp;</a>
								</div>
						</div>
						<div class="zirBot">
								<table cellpadding="0" cellspacing="0" border="0" width="100%" class="zirTab">
									 <tbody id="yzb_zt">
										 <div v-if="zrztList.length===0" class="zirBot"><div class="zwsj">暂无数据</div></div>
										 <tr v-if="zrztList.length>0">
											 <td  v-if="zrztList.length>=1" class="bor" onclick="location.href='jrjapp://com.jrj.stock/stocks?code=000503&name=海虹控股'">
												 <div class="wzT wzTRed">{{zrztList[0][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[0][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[0][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=2" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=002913&amp;name=奥士康&quot;">
												 <div class="wzT wzTRed">{{zrztList[1][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[1][0]}}</div>
												 <div class="wzN"><span>{{zrztList[1][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=3" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300727&amp;name=润禾材料&quot;">
												 <div class="wzT wzTRed">{{zrztList[2][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[2][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[2][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="zrztList.length>=4">
											 <td v-if="zrztList.length>=4" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300729&amp;name=乐歌股份&quot;">
												 <div class="wzT wzTRed">{{zrztList[3][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[3][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[3][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=5" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600725&amp;name=ST云维&quot;">
												 <div class="wzT wzTRed">{{zrztList[4][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[4][0]}}</div>
												 <div class="wzN"><span>{{zrztList[4][2]}}</span> <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=6" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=603711&amp;name=香飘飘&quot;">
												 <div class="wzT wzTRed">{{zrztList[5][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[5][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[5][2]}}</span>
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
								<div class="title zirRed">
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
											 <td  v-if="yzztList.length>=1" class="bor" onclick="location.href='jrjapp://com.jrj.stock/stocks?code=000503&name=海虹控股'">
												 <div class="wzT wzTRed">{{yzztList[0][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[0][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
									 	 	 <td v-if="yzztList.length>=2" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=002913&amp;name=奥士康&quot;">
												 <div class="wzT wzTRed">{{yzztList[1][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[1][0]}}</div>
												 <div class="wzN"><span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzztList.length>=3" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300727&amp;name=润禾材料&quot;">
												 <div class="wzT wzTRed">{{yzztList[2][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[2][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="yzztList.length>=4">
											 <td v-if="yzztList.length>=4" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300729&amp;name=乐歌股份&quot;">
												 <div class="wzT wzTRed">{{yzztList[3][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[3][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzztList.length>=5" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600725&amp;name=ST云维&quot;">
												 <div class="wzT wzTRed">{{yzztList[4][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[4][0]}}</div>
												 <div class="wzN"><span>09:30:00</span> <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzztList.length>=6" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=603711&amp;name=香飘飘&quot;">
												 <div class="wzT wzTRed">{{yzztList[5][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[5][0]}}</div>
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

				<div class="ziranAll">
						<div class="zirTit">
								<div class="title zirGreen">
										自然跌停(<i id="yzb_zt_total">{{zrdtNum}}</i>)
								</div>
								<div class="zirJt">
										<a href="http://mapp.jrj.com.cn/stock/getWdjList?param=zr_dt">&nbsp;</a>
								</div>
						</div>
						<div class="zirBot">
								<table cellpadding="0" cellspacing="0" border="0" width="100%" class="zirTab">
									 <tbody id="yzb_zt">
										 <div v-if="zrdtList.length===0" class="zirBot"><div class="zwsj">暂无数据</div></div>
										 <tr v-if="zrdtList.length>0">
											 <td  v-if="zrdtList.length>=1" class="bor" onclick="location.href='jrjapp://com.jrj.stock/stocks?code=000503&name=海虹控股'">
												 <div class="wzT wzTGreen">{{zrdtList[0][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[0][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[0][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=2" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=002913&amp;name=奥士康&quot;">
												 <div class="wzT wzTGreen">{{zrdtList[1][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[1][0]}}</div>
												 <div class="wzN"><span>{{zrdtList[1][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=3" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300727&amp;name=润禾材料&quot;">
												 <div class="wzT wzTGreen">{{zrdtList[2][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[2][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[2][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="zrdtList.length>=4">
											 <td v-if="zrdtList.length>=4" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300729&amp;name=乐歌股份&quot;">
												 <div class="wzT wzTGreen">{{zrdtList[3][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[3][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[3][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=5" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600725&amp;name=ST云维&quot;">
												 <div class="wzT wzTGreen">{{zrdtList[4][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[4][0]}}</div>
												 <div class="wzN"><span>{{zrdtList[4][2]}}</span> <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=6" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=603711&amp;name=香飘飘&quot;">
												 <div class="wzT wzTGreen">{{zrdtList[5][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[5][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[5][2]}}</span>
													 <span class="wzTGreen">涨停</span>
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
										一字跌停(<i id="yzb_zt_total">{{yzdtNum}}</i>)
								</div>
								<div class="zirJt">
										<a href="http://mapp.jrj.com.cn/stock/getWdjList?param=yzb_dt">&nbsp;</a>
								</div>
						</div>
						<div class="zirBot">
								<table cellpadding="0" cellspacing="0" border="0" width="100%" class="zirTab">
									 <tbody id="yzb_zt">
										 <div v-if="yzdtList.length===0" class="zirBot"><div class="zwsj">暂无数据</div></div>
										 <tr v-if="yzdtList.length>0">
											 <td  v-if="yzdtList.length>=1" class="bor" onclick="location.href='jrjapp://com.jrj.stock/stocks?code=000503&name=海虹控股'">
												 <div class="wzT wzTGreen">{{yzdtList[0][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[0][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
									 	 	 <td v-if="yzdtList.length>=2" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=002913&amp;name=奥士康&quot;">
												 <div class="wzT wzTGreen">{{yzdtList[1][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[1][0]}}</div>
												 <div class="wzN"><span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzdtList.length>=3" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300727&amp;name=润禾材料&quot;">
												 <div class="wzT wzTGreen">{{yzdtList[2][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[2][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="yzdtList.length>=4">
											 <td v-if="yzdtList.length>=4" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=300729&amp;name=乐歌股份&quot;">
												 <div class="wzT wzTGreen">{{yzdtList[3][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[3][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzdtList.length>=5" class="bor" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=600725&amp;name=ST云维&quot;">
												 <div class="wzT wzTGreen">{{yzdtList[4][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[4][0]}}</div>
												 <div class="wzN"><span>09:30:00</span> <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzdtList.length>=6" class="" onclick="location.href=&quot;jrjapp://com.jrj.stock/stocks?code=603711&amp;name=香飘飘&quot;">
												 <div class="wzT wzTGreen">{{yzdtList[5][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[5][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
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
		this.getZrztData()
		this.getYzztData()
		this.getZrdtData()
		this.getYzdtData()
  },
  filters: {

  },
  methods: {
		/*
		* 自然涨停数据获取
		*/
		getZrztData (){
			var url = 'http://home.flashdata2.jrj.com.cn/limitStatistic/zt_all.js';
			$.ajax({
				 url:url,
				 type:'post',
				 cache:false,
				 dataType:'script',
				scriptCharset: 'gbk',
				 success:() => {
					this.zrztNum=window.zr_zt.size
					if (window.zr_zt.Data.length===0) {
						this.zrztList=[];
					}else{
						this.zrztList=window.zr_zt.Data
					}
				 },
				 error:function(){
					 console.log('error');
				 }
			 })
		},
		/*
		 * 一字板涨停数据获取
		 */
		 getYzztData (){
			 var url = 'http://home.flashdata2.jrj.com.cn/limitStatistic/yzbzt.js';
			 $.ajax({
         url:url,
         type:'post',
         cache:false,
         dataType:'script',
				 scriptCharset: 'gbk',
         success:() => {
					 console.log(window.yzb_zt.Data)
					 this.yzztNum=window.yzb_zt.size
					 if (window.yzb_zt.Data.length===0) {
						 this.yzztList=[];
					 }else{
						 this.yzztList=window.yzb_zt.Data
					 }
         },
         error:function(){
           console.log('error');
         }
       })

		 },

		 /*
 		 * 自然涨停数据获取
 		 */
 		 getZrdtData (){
 			 var url = 'http://home.flashdata2.jrj.com.cn/limitStatistic/dt_all.js';
 			 $.ajax({
          url:url,
          type:'post',
          cache:false,
          dataType:'script',
 				 scriptCharset: 'gbk',
          success:() => {
						console.log(window.zr_dt.Data)
 					 this.zrdtNum=window.zr_dt.size
 					 if (window.zr_dt.Data.length===0) {
 						 this.zrdtList=[];
 					 }else{
 						 this.zrdtList=window.zr_dt.Data
 					 }
          },
          error:function(){
            console.log('error');
          }
        })

 		 },
		 /*
 		 * 一字板跌停数据获取
 		 */
 		 getYzdtData (){
 			 var url = 'http://home.flashdata2.jrj.com.cn/limitStatistic/yzbdt.js';
 			 $.ajax({
          url:url,
          type:'post',
          cache:false,
          dataType:'script',
 				 scriptCharset: 'gbk',
          success:() => {
 					 this.yzdtNum=window.yzb_dt.size
 					 if (window.yzb_dt.Data.length===0) {
 						 this.yzdtList=[];
 					 }else{
 						 this.yzdtList=window.yzb_dt.Data
 					 }
          },
          error:function(){
            console.log('error');
          }
        })

 		 }



  }
}
</script>
