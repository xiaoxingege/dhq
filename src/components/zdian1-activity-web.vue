<style>
body {
  background-color: #000 !important;
  font-family: '微软雅黑';
}

input {
  outline: none;
}

.bg3 .box-con .swiper-pagination {
  bottom: 20px !important;
}

.bg6 .box-con .inner_01>ul li {
  width: 167px;
  height: 140px;
  margin: 2px 3px;
  border-radius: 15px;
}

.bg6 .box-con .inner_01>ul {
  width: 520px;
  margin: 0 auto;
}

.bg6 .box-con .inner_01>ul li.b1 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg1.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b2 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg3.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b3 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg9.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b4 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg7.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b5 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg2.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b6 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg6.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b7 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg4.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.b8 {
  background: url("../assets/images/zdian1-activity/web-lottery-bg8.png") 0 0 no-repeat;
}

.bg6 .box-con .inner_01>ul li.btn-lottery {
  background: url("../assets/images/zdian1-activity/web-lottery-bg5.png") 0 0 no-repeat;
}

.fz20 {
  font-size: 20px;
}

.fz22 {
  font-size: 22px;
}

.fz24 {
  font-size: 24px;
}

.fz26 {
  font-size: 26px;
}

.fz30 {
  font-size: 30px;
}

.mt10 {
  margin-top: 10px;
}

.lh40 {
  line-height: 40px;
}

.mt20 {
  margin-top: 20px;
}

.pop-top span {
  color: #b4113c;
}

.pop-top h3 {
  font-size: 30px;
  color: #992d01;
}

.cl1 {
  color: #cb7d37;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/zdian1-activity/zdian1-web-bg1.jpg") center 0 no-repeat;
    height: 575px;
}
.bg2 {
    position: relative;
    background: url("../assets/images/zdian1-activity/zdian1-web-bg2-1.jpg") center 0 no-repeat;
    height: 365px;
}
.bg3 {
    background: url("../assets/images/zdian1-activity/zdian1-web-bg3.jpg") center 0 no-repeat;
    height: 516px;
}
.bg4 {
    background: url("../assets/images/zdian1-activity/zdian1-web-bg4-1.jpg") center 0 no-repeat;
    height: 582px;
    position: relative;
}
.bg5 {
    background: url("../assets/images/zdian1-activity/zdian1-web-bg5-2.jpg") center 0 no-repeat;
    height: 588px;
    position: relative;
}
.bg6 {
    background: url("../assets/images/zdian1-activity/zdian1-web-bg6-1.jpg") center 0 no-repeat;
    height: 994px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.slider-box {
    width: 980px;
    height: 399px;
    border: 10px #b98d1e solid;
    margin-top: 33px;
    float: left;
}
.bg4 a {
    width: 214px;
    height: 63px;
    position: absolute;
    left: 156px;
    bottom: 68px;
}
.bg4 img {
    width: 424px;
    height: 242px;
    position: absolute;
    right: 11px;
    bottom: 76px;
}
.bg5 a {
    width: 143px;
    height: 44px;
    position: absolute;
}
.bg5 a.link1 {
    left: 308px;
    top: 250px;
}
.bg5 a.link2 {
    right: 59px;
    top: 260px;
}
.bg6 .left {
    width: 580px;
    float: left;
}
.bg6 .left p {
    font-size: 28px;
    color: #821800;
    width: 100%;
    height: 48px;
    text-align: center;
    line-height: 48px;
    float: left;
    margin: 186px 0 25px;
}
.bg6 .right {
    width: 400px;
    float: right;
}
.bg6 .right p {
    width: 365px;
    text-align: left;
    font-size: 26px;
    color: #ffe4c3;
    float: right;
    margin-top: 200px;
}
.right div {
    width: 365px;
    height: 120px;
    margin-top: 20px;
    float: right;
    overflow: hidden;
}
.right ul {
    width: 365px;
    float: right;
}
.right ul li {
    font-size: 16px;
    color: #e5b880;
    line-height: 30px;
    font-family: "微软雅黑";
}
.right ul li.cur {
    font-size: 20px;
    color: #efb351;
    line-height: 30px;
    padding-right: 10px;
}
.nav {
    width: 264px;
    height: 167px;
    background: url("../assets/images/zdian1-activity/web-nav-bg.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    right: 0;
    margin-top: -121px;
    z-index: 10;
    padding-top: 76px;
}
.nav a {
    width: 100%;
    height: 55px;
    float: left;
}
.footer {
    width: 100%;
    height: 215px;
    background: url("../assets/images/zdian1-activity/web-footer-bg-1.png") center 0 no-repeat;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
.bg2-text {
    position: absolute;
    width: 999px;
    height: 200px;
    top: 120px;
    left: 0;
    font-size: 22px;
    color: #161412;
    line-height: 1.5;
}
.red-text {
    color: #a80000;
}
.black-text {
    font-weight: bold;
}
.bg4-text {
    color: #daad3d;
    position: absolute;
    top: 326px;
    li {
        padding-bottom: 18px;
        padding-left: 9px;
    }
}
.bg5 .notice {
    position: absolute;
    color: #e7b841;
    top: 572px;
    left: 329px;
    font-size: 18px;
    p {
        background: #601425;
    }
    p:last-child {
        margin-left: 30px;
    }
}
.bg5-text {
    color: #151311;
    position: absolute;
    font-size: 22px;
    top: 445px;
    left: 194px;
    li {
        padding-bottom: 7px;
    }
    li:nth-child(2) {
        padding-left: 25px;
    }
    li:nth-child(3) {
        padding-left: 51px;
    }
}
.bg6-text {
    position: absolute;
    color: #e5b880;
    font-size: 16px;
    width: 361px;
    top: 504px;
    left: 635px;
    li {
        padding-bottom: 15px;
    }
}
[class^="text-"] {
    letter-spacing: 44px;
    width: 122px;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
}
.footer-btn {
    display: block;
    width: 219px;
    height: 66px;
    position: absolute;
    top: 138px;
    left: 416px;
}
</style>
<style>
#divdown1 {
  position: absolute;
  color: white;
  font-size: 52px;
  top: 57px;
  left: 227px;
  width: 1000px;
  font-family: Consolas, Monaco, monospace;
}

#divdown1 .time-unit {
  color: #980d00;
  font-size: 36px;
  padding-right: 16px;
}
</style>

<template>
<div class="box">
  <div class="bg1">
  </div>
  <div class="bg2">
    <div class="box-con">
      <div class="bg2-text">
        <!-- 沪指顺利突破3300点，3400点已近在咫尺。创业板与次新股风云再起，国家队带领资金跑步入场，十九大盛会在前，年内最大一波行情即将到来，3600点指日可待，你还要无动于衷？ 金融界重磅推出智能调仓工具
        <span class="red-text">Z点操盘</span>，能够在市场低迷期，及时给出<span class="black-text">S点风险预警信号</span>；在每一波行情到来时，精准识别个股多空力量，及时<span class="black-text">发出Z点买入信号</span>。7-9月份， 抓住天齐锂业、宝泰隆、国盛金控等多只板块龙头股，
        <span class="black-text">短线收益均超50%</span>！近期行情及业绩如图： -->
        十一期间，市场内外利好不断，节后首日沪指突破3400点，创近22个月新高，为10月行情打下坚实基础，外资北上活跃，且四季度将迎多次重要会议，政策驱动市场行情向好，上涨逻辑和趋势仍然清晰，逢低就是入场良机！
        <br/><br/>在过去的9月，Z点操盘战绩喜人，10月即将过半，你无动于衷？
      </div>
    </div>
  </div>
  <div class="bg3">
    <div class="box-con">
      <div class="slider-box">
        <activity-slider :listData="listData" />
      </div>
    </div>
  </div>
  <div class="bg4" id="d0">
    <div class="box-con">
      <ol class="bg4-text">
        <li>1&nbsp;&nbsp;自选股、持仓股买卖信号即时提醒；</li>
        <li>2&nbsp;&nbsp;查看两市3000+支股票趋势分析、买卖信号ZS点；</li>
        <li>3&nbsp;&nbsp;十档行情、千档盘口，市场唯一一款免费Level 2行情。</li>
      </ol>
      <a href="javascript:;" @click="free">&nbsp;</a>
      <img src="http://i0.jrjimg.cn/assets/images/zdian/zdxh.png" />
    </div>
  </div>
  <div class="bg5" id="d1">
    <div class="box-con">
      <ol class="bg5-text">
        <li>1&nbsp;&nbsp;低至1折，优惠力度大，有效期长！</li>
        <li>2&nbsp;&nbsp;金融界智能操盘工具促销598元/季，1980元/年，用券再减88元/288元！</li>
        <li>3&nbsp;&nbsp;参与现金券抢购的用户均可参与抽奖，赢万元专属定制投资服务！</li>
      </ol>
      <a href="http://itougu.jrj.com.cn/tips/438.jspa" class="link1" @click="grab('1')"></a>
      <a href="http://itougu.jrj.com.cn/tips/439.jspa" class="link2" @click="grab('2')"></a>
      <div class="notice">
        <p>温馨提示：现金券订阅成功后，将在次日发放，如遇休息日顺延，可在个人</p>
        <p>中心查看并使用。一经订阅，概不退款~</p>
      </div>
    </div>
  </div>
  <div class="bg6" id="d2">
    <div class="box-con">
      <div class="left">
        <p>您有 {{lotteryInfo.drawNum || 0}} 次抽奖机会</p>
        <lottery @start="playLottery" @stop="showLotteryResult" :prize="prize" />
      </div>
      <div class="right">
        <p>目前已有 {{lotteryInfo.joinNum || 0}} 人参与</p>
        <div v-if="lotteryInfo.prizeUserList && lotteryInfo.prizeUserList.length > 0">
          <ul>
            <li v-for="item of lotteryInfo.prizeUserList">恭喜{{item.userName}}抽中{{item.pname}}，祝您投资愉快。</li>
          </ul>
        </div>
        <div v-else style="color:#ffe4c3">暂无人中奖</div>
      </div>
      <ol class="bg6-text">
        <li>用户参与1种现金券抢购，则每日拥有1次抽奖机会；参与2种现金券抢购，则每日拥有2次抽奖机会</li>
        <li>用户抽取到工作室、Z量化、极智选股等，会有投服人员联系您讲解使用方法，请提前绑定手机号码</li>
        <li>所有奖品，将于中奖后3个工作日内派发；活动最终解释权归金融界所有，如果疑问，请咨询400-166-1188</li>
      </ol>
    </div>
  </div>
  <div class="nav">
    <a href="javascript:;" data-index="0"></a>
    <a href="javascript:;" data-index="1"></a>
    <a href="javascript:;" data-index="2"></a>
  </div>
  <div class="footer">
    <div class="box-con">
      <div id="divdown1">
        <span id="text-day" class="text-day"></span><span class="time-unit">天</span>
        <span id="text-hour" class="text-hour"></span><span class="time-unit">时</span>
        <span id="text-min" class="text-min"></span><span class="time-unit">分</span>
        <span id="text-sec" class="text-sec"></span><span class="time-unit">秒</span>
      </div>
      <a class="footer-btn" href="javascript:;" @click="scrollTo(1)"></a>
    </div>
  </div>
  <zdian1-activity-pop1 @close="pop1Close" v-if="pop1Show">
    <div v-html="pop1Html">

    </div>
  </zdian1-activity-pop1>
  <zdian1-activity-pop2 @pop2Close="pop2Close" v-if="pop2Show">
    <div v-html="pop2Html">

    </div>
  </zdian1-activity-pop2>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import activitySlider from 'components/activity-slider'
import lottery from 'components/lottery'
import zdian1ActivityPop1 from 'components/zdian1-activity-pop1'
import zdian1ActivityPop2 from 'components/zdian1-activity-pop2'

export default {
  data() {
    return {
      listData: {
        conWidth: '980px',
        conHeight: '399px',
        conPadding: '0',
        pagShow: true,
        arrowShow: false,
        paginationClickable: true,
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        list: [{
            imgUrl: 'http://i0.jrjimg.cn/assets/images/zdian/1-1.jpg',
            link: ''
          },
          {
            imgUrl: 'http://i0.jrjimg.cn/assets/images/zdian/1-2.jpg',
            link: ''
          },
          {
            imgUrl: 'http://i0.jrjimg.cn/assets/images/zdian/1-3.jpg',
            link: ''
          },
          {
            imgUrl: 'http://i0.jrjimg.cn/assets/images/zdian/1-4.jpg',
            link: ''
          }
        ]
      },
      pop1Show: false,
      pop1Html: '',
      pop2Show: false,
      pop2Html: '',
      prize: -1
    }
  },
  computed: mapState({
    loginStatus: state => state.user.loginStatus,
    err: state => state.actZdfl.err,
    lotteryInfo: state => state.actZdfl.lotteryInfo || {},
    lotteryResult: state => state.actZdfl.lotteryResult
  }),
  components: {
    activitySlider,
    lottery,
    zdian1ActivityPop1,
    zdian1ActivityPop2
  },
  methods: {
    playLottery() {
      if (this.loginStatus === 'no') {
        location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + encodeURIComponent(location.href)
      } else {
        if (!this.lotteryInfo || !this.lotteryInfo.drawNum) {
          this.pop2Html = '<h3 class="pop-title">很遗憾<br />您当前没有抽奖机会</h3><p class="fz26 cl1">参与现金券抢购，</p><p class="fz20 cl1">可以获取更多抽奖机会哟~</p><p class="fz20 cl1">祝您投资愉快</p>'
          this.pop2Show = true
          return
        }
        this.prize = -1
        this.$store.dispatch('actZdfl/playLottery').then(() => {
          if (!this.err) {
            this.prize = this.lotteryResult.prizePosition * 1
          }
          this.$store.dispatch('actZdfl/getLotteryInfo')
        })
      }
    },
    scrollTo(n) {
      var pos = $('#d' + n).offset().top
      // 实现平滑移动 1000代表时间ms
      $('html,body').stop().animate({
        scrollTop: pos
      }, 500)
    },
    showLotteryResult() {
      if (this.prize > 0) {
        if (this.prize === 8) {
          this.pop2Html = '<h3 class="pop-title">遗憾了！<br />大奖与您擦肩而过</h3><p class="fz26 cl1">继续参与现金券抢购，</p><p class="fz20 cl1">可以获得更多抽奖机会。~</p><p class="fz20 cl1">祝您投资愉快</p>'
        } else {
          this.pop2Html = '<h3 class="pop-title">恭喜您！<br />成功抽取 ' + this.lotteryResult.prizeName + '</h3><p class="fz20 cl1">奖品将于3个工作日内派发，您可以</p><p class="fz20 cl1">前往APP活动页面“我的礼品”~</p><p class="fz20 cl1">里查看中奖记录。</p>'
        }
        this.pop2Show = true
      } else {
        this.pop2Show = false
      }
    },
    pop1Close() {
      this.pop1Html = ''
      this.pop1Show = false
    },
    pop2Close() {
      this.pop2Html = ''
      this.pop2Show = false
    },
    free() {
      if (this.loginStatus === 'no') {
        location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + encodeURIComponent(location.href)
      } else {
        this.$store.dispatch('actZdfl/getZPoint').then(() => {
          if (this.err) {
            this.pop1Html = '<img src="http://i0.jrjimg.cn/zqt-red-1000/focus/zlhWeb/web-text1.png" /><p class="fz24 mt10">免费体验权限<span>仅限Z点操盘新用户</span>领取。</p><p class="fz30">您可以参与<span>“8元抢购”</span>福利，<br />享受超低折扣~</p>'
          } else {
            this.pop1Html = '<img src="http://i0.jrjimg.cn/zqt-red-1000/focus/zlhWeb/web-text2.png" /><p class="fz26 mt20">成功领取智能炒股择时工具</p><p class="fz26">Z点操盘7天免费使用权限。</p><p class="fz20">您可以在金融界APP“智能选股”页查看并使用。</p>'
          }
          this.pop1Show = true
        })
      }
    },
    grab(type) {
      this.pop1Html = '<img src="http://i0.jrjimg.cn/zqt-red-1000/focus/zlhWeb/web-text3.png" /><p class="fz22 mt20 lh40">现金券将在次日发放，如遇节假日则顺延；</p><p class="fz22 lh40">此现金券可用于订阅智能炒股择时工具Z点操<br />盘，请在个人中心查看并使用。</p>'
      // this.pop1Show = true
    }
  },
  mounted() {
    document.title = 'Z点操盘送三大福利-金融界'
    this.$store.dispatch('user/checkLogin').then(() => {
      this.$store.dispatch('actZdfl/getLotteryInfo')
    })

    function pad(str, len) {
      str = str + ''
      if (str.length < len) {
        for (let i = 0; i < len - str.length; i++) {
          str = '0' + str
        }
      }
      return str
    }

    function ShowCountDown(year, month, day, divname) {
      var now = new Date()
      var endDate = new Date(year, month - 1, day)
      var leftTime = endDate.getTime() - now.getTime()
      var leftsecond = parseInt(leftTime / 1000)
      var day1 = Math.floor(leftsecond / (60 * 60 * 24))
      var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
      var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
      var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
      document.getElementById('text-day').innerHTML = pad(day1, 2)
      document.getElementById('text-hour').innerHTML = pad(hour, 2)
      document.getElementById('text-min').innerHTML = pad(minute, 2)
      document.getElementById('text-sec').innerHTML = pad(second, 2)
    }
    window.setInterval(function() {
      ShowCountDown(2017, 10, 22, 'divdown1')
    }, 1000)
    $('.nav a').click((e) => {
      var index = $(e.target).attr('data-index')
      this.scrollTo(index)
    })
    setInterval(function() {
      $('.bg6 .right ul').animate({
        'margin-top': '-30px'
      }, 500, function() {
        $('.bg6 .right ul li:first').css({
          'font-size': '16px'
        })
        $('.bg6 .right ul').append($('.bg6 .right ul li:first'))
        $('.bg6 .right ul li:first').addClass('cur').siblings().removeClass('cur')
        $('.bg6 .right ul').css({
          'margin-top': '0'
        })
      })
      $('.bg6 .right ul li:eq(1)').animate({
        'font-size': '20px'
      }, 500)
    }, 1500)
  }
}
</script>
