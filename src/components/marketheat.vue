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
    top: 5.76rem;
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
    top: 0.36rem;
    z-index: 10;
    background: url(http://i0.jrjimg.cn/stock/therm/tickShine.png) no-repeat;
    background-size: contain;
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
.therm-tooltip1 {
    background: url(http://i0.jrjimg.cn/stock/therm/therm-tooltip1.png)no-repeat;
    background-size: 1.5rem 0.8rem;
}
.therm-tooltip2 {
    background: url(http://i0.jrjimg.cn/stock/therm/therm-tooltip2.png)no-repeat;
    background-size: 1.5rem 0.8rem;
}
.therm-tooltip3 {
    background: url(http://i0.jrjimg.cn/stock/therm/therm-tooltip3.png)no-repeat;
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
    border-bottom: 0.04rem solid #1a9a2a;
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
    color: rgb(215, 40, 30)!important;
}
.green {
    color: rgb(47, 171, 50)!important;
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
      <div class="title-item" onclick="window.location.href='http://itougu.jrj.com.cn/h5/limitmove'">
        涨跌停强度
        <span></span>
      </div>
      <div class="title-item" onclick="window.location.href='http://itougu.jrj.com.cn/h5/yestoday'">
        昨板今均
        <span></span>
      </div>
      <div class="title-item active" onclick="window.location.href='http://itougu.jrj.com.cn/h5/marketheat'">
        市场热度
        <span></span>
      </div>
    </div>

    <!--今日市场温度-->
    <div id="content_temperature" style="display: block;">
			<div class="inforBox">
				<span class="time stockTime1">{{time}}</span>
			</div>
			<div class="rectangular">
				<div class="thermText red">{{topHint}}个股<span>{{limitchange}}</span>家</div>
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
							<img id="therm-top" src="http://i0.jrjimg.cn/stock/therm/glassTop.png">
							<img id="therm-body-bg" src="http://i0.jrjimg.cn/stock/therm/glassBody.gif">
							<img id="therm-body-mercury" :src="bgMercury" style="height:0.38rem; top: 5.06rem; overflow: hidden;">
							<div id="therm-body-fore" style="background-size: 0.7rem 4.92rem"></div>
							<img id="therm-bottom" :src="bgBottom">
							<div id="therm-tooltip" :class="tooltip" style="top: 4.64rem;">
								<div class="tip-middle">涨停个股<br> <span :class="colorType">{{limitchange}}</span>家</div>
							</div>
						</div>
						<div id="therm-type">
							<!--  -->
							<div class="therm-border cir1" @click="animateThermometer('zt')" :style="{borderColor: activeColor}">
								<div class="therm-kind">涨停</div>
							</div>
							<div class="therm-border cir2" @click="animateThermometer('dt')" :style="{borderColor: activeColor1}">
								<div class="therm-kind">跌停</div>
							</div>
							<div class="therm-border cir3" @click="animateThermometer('z5')" :style="{borderColor: activeColor2}">
								<div class="therm-kind">≥5%</div>
							</div>
							<div class="therm-border cir4" @click="animateThermometer('d5')" :style="{borderColor: activeColor3}">
								<div class="therm-kind">≤-5%</div>
							</div>
						</div>
					</div>
				<div class="thermText1">
					总计：<span class="red">{{totalNum}}</span>家
					停牌：<span class="green">{{stopNum}}</span>家
				</div>
			</div>
		</div>

		<!-- 列表数据 -->
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
											 <td  v-if="zrztList.length>=1" class="bor" @click="toStock(zrztList[0][0])">
												 <div class="wzT wzTRed">{{zrztList[0][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[0][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[0][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=2" class="bor" @click="toStock(zrztList[1][0])">
												 <div class="wzT wzTRed">{{zrztList[1][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[1][0]}}</div>
												 <div class="wzN"><span>{{zrztList[1][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=3" class="" @click="toStock(zrztList[2][0])">
												 <div class="wzT wzTRed">{{zrztList[2][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[2][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[2][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="zrztList.length>=4">
											 <td v-if="zrztList.length>=4" class="bor" @click="toStock(zrztList[3][0])">
												 <div class="wzT wzTRed">{{zrztList[3][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[3][0]}}</div>
												 <div class="wzN">
													 <span>{{zrztList[3][2]}}</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=5" class="bor" @click="toStock(zrztList[4][0])">
												 <div class="wzT wzTRed">{{zrztList[4][1]}}</div>
												 <div class="wzN wzTRed">{{zrztList[4][0]}}</div>
												 <div class="wzN"><span>{{zrztList[4][2]}}</span> <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrztList.length>=6" class="" @click="toStock(zrztList[5][0])">
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
											 <td  v-if="yzztList.length>=1" class="bor" @click="toStock(yzztList[0][0])">
												 <div class="wzT wzTRed">{{yzztList[0][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[0][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
									 	 	 <td v-if="yzztList.length>=2" class="bor" @click="toStock(yzztList[1][0])">
												 <div class="wzT wzTRed">{{yzztList[1][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[1][0]}}</div>
												 <div class="wzN"><span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzztList.length>=3" class="" @click="toStock(yzztList[2][0])">
												 <div class="wzT wzTRed">{{yzztList[2][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[2][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="yzztList.length>=4">
											 <td v-if="yzztList.length>=4" class="bor" @click="toStock(yzztList[3][0])">
												 <div class="wzT wzTRed">{{yzztList[3][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[3][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzztList.length>=5" class="bor" @click="toStock(yzztList[4][0])">
												 <div class="wzT wzTRed">{{yzztList[4][1]}}</div>
												 <div class="wzN wzTRed">{{yzztList[4][0]}}</div>
												 <div class="wzN"><span>09:30:00</span> <span class="wzTRed">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzztList.length>=6" class="" @click="toStock(yzztList[5][0])">
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
											 <td  v-if="zrdtList.length>=1" class="bor" @click="toStock(zrdtList[0][0])">
												 <div class="wzT wzTGreen">{{zrdtList[0][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[0][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[0][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=2" class="bor" @click="toStock(zrdtList[1][0])">
												 <div class="wzT wzTGreen">{{zrdtList[1][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[1][0]}}</div>
												 <div class="wzN"><span>{{zrdtList[1][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=3" class="" @click="toStock(zrdtList[2][0])">
												 <div class="wzT wzTGreen">{{zrdtList[2][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[2][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[2][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="zrdtList.length>=4">
											 <td v-if="zrdtList.length>=4" @click="toStock(zrdtList[3][0])">
												 <div class="wzT wzTGreen">{{zrdtList[3][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[3][0]}}</div>
												 <div class="wzN">
													 <span>{{zrdtList[3][2]}}</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=5" @click="toStock(zrdtList[4][0])">
												 <div class="wzT wzTGreen">{{zrdtList[4][1]}}</div>
												 <div class="wzN wzTGreen">{{zrdtList[4][0]}}</div>
												 <div class="wzN"><span>{{zrdtList[4][2]}}</span> <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="zrdtList.length>=6" class="" @click="toStock(zrdtList[5][0])">
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
											 <td  v-if="yzdtList.length>=1" class="bor" @click="toStock(yzdtList[0][0])">
												 <div class="wzT wzTGreen">{{yzdtList[0][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[0][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
									 	 	 <td v-if="yzdtList.length>=2" class="bor" @click="toStock(yzdtList[1][0])">
												 <div class="wzT wzTGreen">{{yzdtList[1][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[1][0]}}</div>
												 <div class="wzN"><span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzdtList.length>=3" class="" @click="toStock(yzdtList[2][0])">
												 <div class="wzT wzTGreen">{{yzdtList[2][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[2][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
										 </tr>
										 <tr v-if="yzdtList.length>=4">
											 <td v-if="yzdtList.length>=4" class="bor" @click="toStock(yzdtList[3][0])">
												 <div class="wzT wzTGreen">{{yzdtList[3][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[3][0]}}</div>
												 <div class="wzN">
													 <span>09:30:00</span>
													 <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzdtList.length>=5" class="bor" @click="toStock(yzdtList[4][0])">
												 <div class="wzT wzTGreen">{{yzdtList[4][1]}}</div>
												 <div class="wzN wzTGreen">{{yzdtList[4][0]}}</div>
												 <div class="wzN"><span>09:30:00</span> <span class="wzTGreen">涨停</span>
												 </div>
											 </td>
											 <td v-if="yzdtList.length>=6" class="" @click="toStock(yzdtList[5][0])">
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

export default {
  data () {
    return {
			wendjFour:this.getQueryString('wendjFour'),
			activeColor:'#f7f7f7',
			activeColor1:'#f7f7f7',
			activeColor2:'#f7f7f7',
			activeColor3:'#f7f7f7',
			topHint:'目前涨停',
			time:'',
			totalNum:0,
			stopNum:0,
			limitchange:0,
			tooltip:'therm-tooltip',
			colorType:'red',
			bgMercury:'http://i0.jrjimg.cn/stock/therm/redVertical.png',
			bgBottom:'http://i0.jrjimg.cn/stock/therm/glassBottom.gif',
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
		// zt dt z5 d5
		this.animateThermometer('zt');
		this.getmarketData()
		this.load()
		//	setInterval(this.load(),30*1000);

		// var a=this.wendjFour? this.wendjFour :1
		// if(a === 1){
    //     this.animateThermometer('zt');
    // }else if(a === 2){
    //     this.animateThermometer('dt');
    // }else if(a === 3){
    //     this.animateThermometer('z5');
    // }else if(a === 4){
    //     this.animateThermometer('d5');
    // }
  },
  filters: {

  },
  methods: {
		getQueryString (name,chinese) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
			if (chinese) {
				// 中文解码
				if (r != null) return decodeURI(r[2])
			}else{
				// 英文解码
				if (r != null) return unescape(r[2])
			}
      return null
    },
		animateThermometer(type){
			var goalAmount = 0
			var animateTime = 0
			var percentageComplete,mercuryHeight,newMercuryTop
			$.ajax({
				 url:'http://home.flashdata2.jrj.com.cn/limitStatistic/market.js',
				 type:'get',
				 cache:false,
				 dataType:'script',
				 success:() => {
					 if ( window.market ) {
						 // 设置当前时间
						 this.time=window.market.time
						 // 设置总家数
						 this.totalNum=window.market.total
						 // 设置停牌家数
						 this.stopNum=window.market.stop
						 // 清除tab边框颜色
						 this.activeColor='#f7f7f7'
						 this.activeColor1='#f7f7f7'
						 this.activeColor2='#f7f7f7'
						 this.activeColor3='#f7f7f7'
						 switch (type){
							 // 设置涨停数据
							 case 'zt':
										// 设置tab边框颜色
							 			this.activeColor='#d7281e'
										// 设置顶部提示文字
										this.topHint='目前涨停'
							 			// 设置温度计变动值
									 	this.limitchange=window.market.limitUp
										// 更改提示框颜色
										this.tooltip='therm-tooltip'
										// 更改提示框文字颜色
										this.colorType='red'

										// 更改温度计中部背景图片
			 						 	this.bgMercury='http://i0.jrjimg.cn/stock/therm/redVertical.png'
				 						// 更改温度计底部背景图片
				 						this.bgBottom='http://i0.jrjimg.cn/stock/therm/glassBottom.gif'

										goalAmount = 300;
										break;

								// 设置跌停数据
								case 'dt':
										// 设置tab边框颜色
							 			this.activeColor1='#2fab32'
										// 设置顶部提示文字
										this.topHint='目前跌停'
										// 设置温度计变动值
										this.limitchange=window.market.limitDown
										// 更改提示框颜色
										this.tooltip='therm-tooltip1'
										// 更改提示框文字颜色
										this.colorType='green'

										// 更改温度计中部背景图片
										this.bgMercury='http://i0.jrjimg.cn/stock/therm/redVertical1.png'
										// 更改温度计底部背景图片
										this.bgBottom='http://i0.jrjimg.cn/stock/therm/glassBottom1.gif'

										goalAmount = 300;
										break;

								// 设置上涨>=5%的数据
								case 'z5':
										// 设置tab边框颜色
							 			this.activeColor2='#ff6969'
										// 设置顶部提示文字
										this.topHint='涨幅5%以上的'
										// 设置温度计变动值
										this.limitchange=window.market.up5
										// 更改提示框颜色
										this.tooltip='therm-tooltip2'
										// 更改提示框文字颜色
										this.colorType='red'

										// 更改温度计中部背景图片
										this.bgMercury='http://i0.jrjimg.cn/stock/therm/redVertical2.png'
										// 更改温度计底部背景图片
										this.bgBottom='http://i0.jrjimg.cn/stock/therm/glassBottom2.gif'
										goalAmount = 500;
										break;
								// 设置上涨<=5%的数据
								case 'd5':
										// 设置tab边框颜色
							 			this.activeColor3='#ccf264'
										// 设置顶部提示文字
										this.topHint='跌幅5%以上的'
										// 设置温度计变动值
										this.limitchange=window.market.down5
										// 更改提示框颜色
										this.tooltip='therm-tooltip3'
										// 更改提示框文字颜色
										this.colorType='green'

										// 更改温度计中部背景图片
										this.bgMercury='http://i0.jrjimg.cn/stock/therm/redVertical3.png'
										// 更改温度计底部背景图片
										this.bgBottom='http://i0.jrjimg.cn/stock/therm/glassBottom3.gif'
										goalAmount = 500;
										break;
						 }
						 switch (true){
                 case  this.limitchange<10:
                     animateTime = 100;
                     break;
                 case  this.limitchange<50:
                     animateTime = 1000;
                     break;
                 default :
                     animateTime = 2000;
                     break;
             }
						 switch (goalAmount){
                 case 300:
                     $('#therm-body-fore').css('background-size','0.7rem 4.92rem');
                     $('.pos0').text(300);
                     $('.pos1').css('top', '1.76rem').text(250);
                     $('.pos2').css('top', '2.56rem').text(200);
                     $('.pos3').css('top', '3.36rem').text(150);
                     $('.pos4').css('top', '4.16rem').text(100);
                     $('.pos5').css('top', '4.96rem').text(50);
                     $('.pos6').show();
                     break;
                 case  500:
                     $('#therm-body-fore').css('background-size','0.7rem 5.78rem');
                     $('.pos0').text(500);
                     $('.pos1').css('top', '1.92rem').text(400);
                     $('.pos2').css('top', '2.88rem').text(300);
                     $('.pos3').css('top', '3.84rem').text(200);
                     $('.pos4').css('top', '4.8rem').text(100);
                     $('.pos5').css('top', '5.76rem').text(0);
                     $('.pos6').hide();
                     break;

             }
						 if (this.limitchange/goalAmount>1) {
                 percentageComplete =1
             }else{
                 percentageComplete = this.limitchange/goalAmount
             }
						 mercuryHeight = (5.1 * percentageComplete).toFixed(2)
             newMercuryTop = (5.28 - mercuryHeight).toFixed(2)
						 $('#therm-body-mercury').is(':animated')?$('#therm-body-mercury').stop(true):false;
             $('#therm-tooltip').is(':animated')?$('#therm-tooltip').stop(true):false;
             var time =Math.round(2000/this.limitchange);
             $('#therm-body-mercury').css( { 'height':'0rem','top':'5.28rem' } ).animate({ height:mercuryHeight+'rem',top:newMercuryTop+'rem' },animateTime);
             $('#therm-tooltip').css('top','4,88rem').animate({ top:newMercuryTop-0.36+'rem' },animateTime);
             var int = setInterval(function(){
                 if( $('#therm-body-mercury').is(':animated')){
                     var s= Number($('#therm-tooltip').find('span').text());
                     $('#therm-tooltip').find('span').text(s + 1)
                 }else{
                     clearInterval(int);
                     $('#therm-tooltip').find('span').text( $('.thermText').find('span').text());

                 }
             }, time)

					 }
				 },
				 error:function(){
					 console.log('error');
				 }
			 })
		},
		getmarketData (){
			 var url = 'http://home.flashdata2.jrj.com.cn/limitStatistic/market.js';
			 $.ajax({
					url:url,
					type:'get',
					cache:false,
					dataType:'script',
					success:() => {
						if ( window.market ) {
							this.time=window.market.time
							this.totalNum=window.market.total
							this.stopNum=window.market.stop


							this.limitUp=window.market.limitUp
							this.limitDown=window.market.limitDown
							this.up5=window.market.up5
							this.down5=window.market.down5
						}
					},
					error:function(){
						console.log('error');
					}
				})
		 },
		toStock (stockcode){
			var stockCode=stockcode
			let market = '';
			if((stockCode.slice(0,3) === '000') || (stockCode.slice(0,3) === '002') || (stockCode.slice(0,3) === '300')){
					market = 'sz'
			}else {
					market = 'sh'
			}
			if (window.jrj && window.jrj.jsCallNative) {
					window.jrj.jsCallNative(100, JSON.stringify({
						stockCode:stockCode,
						stockMarket:market
					}))
			}
		},
		load(){
			this.getZrztData()
			this.getYzztData()
			this.getZrdtData()
			this.getYzdtData()
		},
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
