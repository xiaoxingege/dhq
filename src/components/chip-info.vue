<style>
	@import '../assets/css/reset.css';
	* {
		margin: 0;
		padding: 0;
	}
	
	.chip {
		width: 100%;
		height: 100%;
		background-color: rgba(250, 250, 250, 1);
		font-family: PingFangSC;
	}
	
	.content {
		width: 6.5rem;
		margin-left: 0.5rem;
		margin-right: 0.5rem;
	}
	
	/*.img img {
		width: 0.28rem;
		height: 0.28rem;
		float: right;
		margin-top: 0.27rem;
		margin-right: 0.30rem;
	}
	*/
	.chip-title {
		height: 0.53rem;
		line-height: 0.53rem;
		color: rgba(51, 51, 51, 1);
		font-size: 0.38rem;
		padding-top: 0.80rem;
		text-align: center;
		font-family: PingFangSC-Medium;
	}
	
	.chip-text {
		width: 6.5rem;
		height: 2.4rem;
		font-family: PingFangSC-Regular;
		color: rgba(102, 102, 102, 1);
		font-size: 0.30rem;
		line-height: 0.48rem;
		margin: 0.60rem auto auto 0.50rem;
	}
	
	.chip-graphic {
		font-size: 0.34rem;
		font-family: PingFangSC-Regular;
		color: rgba(51, 51, 51, 1);
		line-height: 0.48rem;
		margin: 0.80rem auto auto 0.50rem;
	}
	
	.img-chipG img {
		width: 6.48rem;
		height: 3.05rem;
		margin: 0.26rem auto auto 0.50rem;
	}
	
	.graphic,
	.hIcon {
		float: left;
		margin-left: 0.50rem;
	}
	
	.text {
		float: left;
		margin-left: 0.60rem;
	}
	
	.icon-text {
		float: left;
		margin-left: 0.31rem;
	}
	
	.text-title {
		height: 0.45rem;
		font-size: 0.32rem;
		font-family: PingFangSC-Medium;
		color: rgba(51, 51, 51, 1);
		line-height: 0.45rem;
		margin-top: 0.60rem;
	}
	
	.text-content {
		width: 4.74rem;
		font-size: 0.30rem;
		font-family: PingFangSC-Regular;
		color: rgba(102, 102, 102, 1);
		line-height: 0.48rem;
		margin-top: 0.12rem;
	}
	
	.meaning-icon {
		width: 0.20rem;
		height: 0.20rem;
		margin: 0.10rem 0.13rem auto 0;
	}
	
	.icon-text p {
		width: 5.98rem;
		font-size: 0.30rem;
		font-family: PingFangSC-Regular;
		color: rgba(102, 102, 102, 1);
		line-height: 0.48rem;
	}
	
	.hIcon {
		height: 0.30rem;
	}
	
	.hIcon img {
		width: 0.30rem;
		height: 0.30rem;
		margin-top: 0.06rem;
	}
	
	.check p {
		width: 3.30rem;
		height: 0.42rem;
		font-size: 0.30rem;
		font-family: PingFangSC-Regular;
		color: rgba(102, 102, 102, 1);
		line-height: 0.42rem;
		float: left;
		margin-left: 0.50rem;
		margin-top: 0.20rem;
	}
	.check img{
		float: left;
		width: 1.26rem;
		height: 0.68rem;
		margin-left: 2.02rem;
		margin-top: 0.08rem;
	}
	.check-img img{
		width: 6.50rem;
		height: 5.67rem;
		margin: 0.29rem 0.50rem 0.74rem 0.50rem;
	}
</style>

<template>
	<div class="chip">
		 <div></div>
		 <div style="clear: both;"></div>
		<p class="chip-title">筹码分布说明</p>
		<p class="chip-text">
			筹码分布是指“流通股票持仓成本”的分布，展示的是不同价位上投资者的持股数量，投资者可以据此推断此股票的成本分布情况。下面我们来看看如何用筹码分布工具来透视庄家底牌，发现资金异动：
		</p>
		<div class="global-chip">
			<p class="chip-graphic">筹码分布图示:</p>
			<div class="img-chipG">
				<img src="../assets/images/chip-info/chip-g.png"></img>
			</div>
			<div class="graphic-text">
				<div class="graphic">
					<div class="graphic-img">
						<img src="../assets/images/chip-info/chip-z.png" style="width: 1.34rem; height: 0.72rem; margin-top:0.69rem;">
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/red-chipZ.png" style="width: 1.20rem; height: 0.08rem; margin-top:1.49rem;">
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/blue-chipZ.png" style="width: 1.20rem; height: 0.08rem; margin-top:1.59rem;">
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/yellow-chipZ.png" style="width: 1.20rem; height: 0.08rem; margin-top:1.57rem;">
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/average-chipZ.png" style="width: 1.15rem; height: 0.41rem; margin-top:1.63rem;">
					</div>
				</div>
				<div class="text">
					<div class="text-p">
						<p class="text-title" style="margin-top: 0.28rem;">筹码柱</p>
						<p class="text-content">每一根筹码柱代表一个价位，柱子长度代表该价位对应的成交量；</p>
					</div>
					<div class="text-p">
						<p class="text-title">红色筹码柱</p>
						<p class="text-content">代表低于收盘价的获利筹码；</p>
					</div>
					<div class="text-p">
						<p class="text-title">蓝色筹码柱</p>
						<p class="text-content">代表高于收盘价的套牢筹码；</p>
					</div>
					<div class="text-p">
						<p class="text-title">黄色筹码柱</p>
						<p class="text-content">代表所有筹码的平均成本；</p>
					</div>
					<div class="text-p">
						<p class="text-title">筹码平均价成本线</p>
						<p class="text-content">每日的筹码平均成本连接而成的参考线；</p>
					</div>
				</div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<!--第二板块-->
		<div class="global-chip">
			<p class="chip-graphic">筹码分布各项指标含义:</p>
			<div class="img-chipG">
				<img src="../assets/images/chip-info/meaning.png"></img>
			</div>
			<div class="graphic-text">
				<div class="graphic">
					<div class="graphic-img">
						<img src="../assets/images/chip-info/scale.png" style="width: 1.35rem; height: 1.17rem; margin-top:0.69rem;" alt="获利占比" />
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/average-cost.png" style="width: 1.34rem; height: 1.17rem; margin-top:1.18rem;" alt="平均成本" />
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/converge-part.png" style="width: 1.34rem; height: 1.08rem; margin-top:1.76rem;" alt="集中区间" />
					</div>
					<div class="graphic-img">
						<img src="../assets/images/chip-info/converge.png" style="width: 1.35rem; height: 0.86rem; margin-top:1.92rem;" alt="集中度" />
					</div>
				</div>
				<div class="text">
					<div class="text-p">
						<p class="text-title" style="margin-top: 0.28rem;"><img src="../assets/images/chip-info/meaning-icon1.png" class="meaning-icon"><span>获利占比</span></p>
						<p class="text-content">( 筹码获利占比 ) 当日获利盘比例，即收盘价以下的筹码所占所有筹码的比例；</p>
					</div>
					<div class="text-p">
						<p class="text-title"><img src="../assets/images/chip-info/meaning-icon2.png" class="meaning-icon"><span>平均成本</span></p>
						<p class="text-content">( 筹码平均成本 ) 全部筹码的平均价，也就是筹码的重心所在；</p>
					</div>
					<div class="text-p">
						<p class="text-title"><img src="../assets/images/chip-info/meaning-icon3.png" class="meaning-icon"><span>集中区间</span></p>
						<p class="text-content">( 90%筹码集中价格区间 ) 是指市场上大多数筹码集中在哪个价格区间。换句话来说，就是在一只股票换手了90%的时候，他的价格区间是多少。</p>
					</div>
					<div class="text-p">
						<p class="text-title"><img src="../assets/images/chip-info/meaning-icon4.png" class="meaning-icon"><span>集中度</span></p>
						<p class="text-content">数值越小表示筹码越集中，数值越大表示成本越分散。</p>
					</div>
				</div>
			</div>
			<div style="clear: both;"></div>
		</div>
		<!--第三板块-->
		<p class="chip-graphic">筹码分布的三个小窍门:</p>
		<div class="icon-how" style="margin-top: 0.40rem;">
			<div class="hIcon">
				<img src="../assets/images/chip-info/how-icon1.png">
			</div>
			<div class="icon-text">
				<p>获利30%以上不抛的是主力筹码，散户很难做到获利30%仍然持有筹码;</p>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="icon-how" style="margin-top: 0.12rem;">
			<div class="hIcon">
				<img src="../assets/images/chip-info/how-icon2.png">
			</div>
			<div class="icon-text">
				<p>横盘时稳如泰山的是主力筹码；</p>
			</div>
		</div>
		<div style="clear: both;"></div>
		<div class="icon-how" style="margin-top: 0.12rem;">
			<div class="hIcon">
				<img src="../assets/images/chip-info/how-icon3.png">
			</div>
			<div class="icon-text">
				<p>解套后仍然不卖的也是主力筹码。</p>
			</div>
		</div>
		<div style="clear: both;"></div>
		<p class="chip-graphic" style="width: 6.50rem;">如何找到筹码集中度高和获利30%以上的股票？</p>

		<div class="check">
			<p>我们已经为您做好了筛选</p>
			<img src="../assets/images/chip-info/check.png"/>
		</div>
		<div style="clear: both;"></div>
		<div class="check-img">
			<img src="../assets/images/chip-info/check-img.png">
		</div>

	</div>
</template>

<script>
	window.addEventListener('orientationchange', function() {
		window.location.reload()
	}, false);

	import 'whatwg-fetch'
	export default {
		data() {
			return {
				name: '你的名字'
			}
		},
		beforecreated() {

		},
		created() {

		},
		mounted() {
			document.title = '筹码分布说明'
		},
		methods: {
         }
	}
</script>