<style>
@import '../assets/css/reset.css';
.coupon-range{
	background:rgba(242,242,242,1);
	padding-bottom: 0.76rem;
	box-sizing: border-box;
}

.coupon-list{
	margin-bottom: -0.2rem;
}
.coupon-list li{
	box-sizing: border-box;
	padding:0 0.3rem 0.4rem;
	height: 3.5rem;
	background: #fff;
	margin-bottom: 0.2rem;
}
.coupon-list li img{
	display: block;
	width:6.9rem;
	height: 2.2rem;
	border-radius: 0.16rem;
	overflow: hidden;
}
.coupon-hint{
	height: 0.9rem;
	line-height: 0.9rem;
	overflow: hidden;
}
.coupon-hint h3{
	float: left;
	color:#333;
	font-size: 0.32rem;
	font-weight: 600;
}
.coupon-hint p{
	height: 0.9rem;
	float: right;
	color:#888;
	font-size: 0.24rem;
	padding-right: 0.3rem;
	position: relative;
}
.coupon-hint p span{
	position: absolute;
	right:0;
	top:50%;
	margin-top:-0.11rem;
	width:0.12rem;
	height: 0.22rem;
	background: url('../assets/images/coupon-range/more-arrows.png') center no-repeat;
	background-size: contain;
}
</style>

<template>
	<div class="coupon-range" :style="{minHeight:minheight+'px'}">
		<ul class="coupon-list">
			<li v-if="coupon1 === '1'" @click="bannerskip(1)">
				<div class="coupon-hint">
					<h3>智能投顾工作室</h3>
					<p>
						专家投顾+量化算法驱动
						<span></span>
					</p>
				</div>
				<img src="../assets/images/coupon-range/banner1.png" alt="">
			</li>
			<li v-if="coupon2 === '1'" @click="bannerskip(2)">
				<div class="coupon-hint">
					<h3>极智选股</h3>
					<p>多策略量化选股神器<span></span></p>
				</div>
				<img src="../assets/images/coupon-range/banner2.png" alt="">
			</li>
			<li v-if="coupon3 === '1'" @click="bannerskip(3)">
				<div class="coupon-hint">
					<h3>Z点操盘</h3>
					<p>买卖信号提醒<span></span></p>
				</div>
				<img src="../assets/images/coupon-range/banner3.png" alt="">
			</li>
			<li v-if="coupon4 === '1'" @click="bannerskip(4)">
				<div class="coupon-hint">
					<h3>Z量化</h3>
					<p>跟随指定交易，高效省心<span></span></p>
				</div>
				<img src="../assets/images/coupon-range/banner4.png" alt="">
			</li>
			<li v-if="coupon5 === '1'" @click="bannerskip(5)">
				<div class="coupon-hint">
					<h3>Z量化猎庄版</h3>
					<p>让庄家无所遁形<span></span></p>
				</div>
				<img src="../assets/images/coupon-range/banner5.png" alt="">
			</li>
		</ul>
	</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
			minheight:0,
			coupon1:this.getQueryString('coupon1') ? this.getQueryString('coupon1'):0,
			coupon2:this.getQueryString('coupon2') ? this.getQueryString('coupon2'):0,
			coupon3:this.getQueryString('coupon3') ? this.getQueryString('coupon3'):0,
			coupon4:this.getQueryString('coupon4') ? this.getQueryString('coupon4'):0,
			coupon5:this.getQueryString('coupon5') ? this.getQueryString('coupon5'):0
    }
  },
	computed: mapState({
    loginStatus: state => state.user.loginStatus
  }),
  beforecreated () {

  },
  created () {
    document.title = '优惠劵可使用范围'
  },
  mounted () {
		// 设置屏幕高度
		this.minheight=window.screen.availHeight
  },
  methods: {
		getQueryString (name,chinese) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
			if (chinese) {
				if (r != null) return decodeURI(r[2])
			}else{
				if (r != null) return unescape(r[2])
			}
      return null
    },
		bannerskip(show){
			this.$store.dispatch('user/checkLogin').then(() => {
				// 未登录状态执行
	      // if (this.loginStatus === 'no') {
				// 	if (window.jrj && window.jrj.jsCallNative) {
				// 		window.jrj.jsCallNative('108', JSON.stringify({
				// 			returnUrl: encodeURI(window.location.href)
				// 		}))
				// 	}
				// 	return false
	      // }
				// 登录状态执行
				if (show===1) {
					window.location.href='http://itougu.jrj.com.cn/activity/app/vipapp.jspa'
				}
				if (show===2) {
					window.location.href='http://itougu.jrj.com.cn/activity/app/midblack.jspa#/midblackPayIntro'
				}
				if (show===3) {
					window.location.href='http://itougu.jrj.com.cn/activity/app/ZQuantization.jspa#/strategyPayIntro'
				}
				if (show===4) {
					window.location.href='http://itougu.jrj.com.cn/activity/app/ZQuantization.jspa#/ZQuantizationPay'
				}
				if (show===5) {
					window.location.href='http://itougu.jrj.com.cn/activity/app/ZQuantization.jspa#/strategyHunter'
				}
	    })
		}

  }
}
</script>
