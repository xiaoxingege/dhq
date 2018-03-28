<style>
body {
  background-color: #12122f !important;
  font-family: '微软雅黑';
}

input {
  outline: none;
}

.bg6 .box-con .swiper-box {
  top: 1.49rem;
}

.bg6 .box-con .swiper-box .swiper-slide {
  position: relative;
}

.bg6 .box-con .swiper-box .swiper-slide div {
  width: 100%;
  height: 0.66rem;
  background-color: #000;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.26rem;
  color: #fff;
  line-height: 0.66rem;
  text-indent: 0.25rem;
}

.bg6 .swiper-pagination {
  z-index: 10;
  bottom: -0.8rem !important;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/zj-activity/zj-h5-bg1.jpg") center 0 no-repeat;
    height: 7.68rem;
    background-size: 100% 100%;
    position: relative;
}
.bg2 {
    background: url("../assets/images/zj-activity/zj-h5-bg2.jpg") center 0 no-repeat;
    height: 5.6rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/zj-activity/zj-h5-bg3.jpg") center 0 no-repeat;
    height: 3.3rem;
    background-size: 100% 100%;
}
.bg6 {
    background: url("../assets/images/zj-activity/zj-h5-bg4.jpg") center 0 no-repeat;
    height: 10.47rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.footer {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/zj-activity/zj-h5-footer.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.nav-fixed {
    width: 1.54rem;
    height: 1.56rem;
    position: fixed;
    top: 45%;
    right: 0;
    background: url("../assets/images/zj-activity/zj-h5-nav.png") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    cursor: pointer;
}
#divdown1 {
    position: absolute;
    font-size: 0.32rem;
    top: 0.19rem;
    left: 2.93rem;
    font-family: Consolas, Monaco, monospace;
    color: #492828;
}
.footer div span {
    letter-spacing: 0.05rem;
    text-indent: 0.05rem;
    padding: 0.1rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 0.15rem;
    color: #d82044;
    margin: 0 0.2rem;
}
.footer div em {
    display: inline-block;
    color: #333333;
}
.footer div em:last-child {
    margin-right: 0.1rem;
}
.bg2 .box-con div {
    width: 3.28rem;
    height: 2.53rem;
    position: absolute;
    right: 0.19rem;
    bottom: 0.75rem;
}
.bg2 .box-con div a {
    width: 100%;
    float: left;
    height: 25%;
}
</style>

<template>
<div class="box">
  <div class="bg1">
  </div>
  <div class="bg2">
    <div class="box-con">
      <div class="links">
        <a href="javascript:;" shref="http://itougu.jrj.com.cn/activity/app/midblack.jspa#/midblackPayIntro"></a>
        <a href="javascript:;" shref="http://itougu.jrj.com.cn/marketing/gotoAppZquantize.jspa"></a>
        <a href="javascript:;" shref="http://itougu.jrj.com.cn/activity/app/vipapp.jspa"></a>
        <a href="javascript:;" shref="http://itougu.jrj.com.cn/activity/app/vipapp.jspa"></a>
      </div>
    </div>
  </div>
  <div class="bg3">
  </div>
  <div class="bg6">
    <div class="box-con">
      <activity-slider :listData="listData" />
    </div>
  </div>

  <div class="footer">
    <div class="box-con">
      <div id="divdown1">
        <span id="text-day" class="text-day">00</span><em>天</em><span id="text-hour" class="text-hour">00</span><em>小时</em><span id="text-min" class="text-min" style="display:none;">00</span><em style="display:none;">分</em><span id="text-sec" class="text-sec"
          style="display:none;">00</span><em style="display:none;">秒</em>
      </div>
    </div>
  </div>
  <div class="nav-fixed">
  </div>
  <div class='fixBg' v-if="popShow"></div>
  <div class="pop" v-if="popShow">
    <div class="pop-close" @click="close">

    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import activitySlider from 'components/activity-slider'
// import getQueryString from 'utils/getQueryString'

export default {
  data() {
    $(function() {
      // 微信分享
      window.InitWeChatShare({
        shareTitle: window.document.title,
        shareLink: window.location.href,
        shareDesc: '金融界智能金融超级引擎算法再次升级，趁未涨价，先送您1个月权限~',
        shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/zj-h5-bg1.jpg',
        callback: function(wx) {

        }
      })
    })
    return {
      popShow: false,
      ygType: false,
      listData: {
        conWidth: '6.49rem',
        conHeight: '6.03rem',
        conPadding: '0',
        pagShow: true,
        arrowShow: false,
        loop: true,
        autoplay: 4000,
        textType: false,
        paginationClickable: true,
        appType: false,
        list: [{
            imgUrl: require('assets/images/zj-activity/zj-h5-img1.png'),
            text: ''
          },
          {
            imgUrl: require('assets/images/zj-activity/zj-h5-img2.png'),
            text: ''
          },
          {
            imgUrl: require('assets/images/zj-activity/zj-h5-img3.png'),
            text: ''
          },
          {
            imgUrl: require('assets/images/zj-activity/zj-h5-img4.png'),
            text: ''
          }
        ]
      }
    }
  },
  computed: mapState({}),
  components: {
    activitySlider
  },
  methods: {},
  mounted() {
    // var _this = this
    $(function() {
      var ua = navigator.userAgent.toLowerCase()
      $('.links a').click(function() {
        var url = $(this).attr('shref');
        var index = $(this).index();
        window.dcsMultiTrack('DCS.dcsuri', 'zj-activity-h5-links' + index, 'WT.ti', 'zj-activity-h5-links' + index)
        if (ua.match(/MicroMessenger/i) === 'micromessenger') {
          alert('请用浏览器打开')
        } else if (typeof window.jrj === 'undefined') {
          window.location.href = url
        } else {
          window.location.href = index === 1 ? 'http://itougu.jrj.com.cn/activity/app/ZQuantization.jspa#/ZQuantizationPay' : url
        }
      })
      $('.nav-fixed').click(function() {
        var pos = $('.bg2').offset().top
        // 实现平滑移动 1000代表时间ms
        $('html,body').stop().animate({
          scrollTop: pos
        }, 500)
        window.dcsMultiTrack('DCS.dcsuri', 'zj-activity-h5', 'WT.ti', 'zj-activity-h5')
      })
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

    function ShowCountDown(year, month, day, hours, minutes, seconds, divname) {
      var now = new Date()
      var endDate = new Date(year, month - 1, day, hours, minutes, seconds)
      var leftTime = endDate.getTime() - now.getTime()
      var leftsecond = parseInt(leftTime / 1000)
      var day1 = Math.floor(leftsecond / (60 * 60 * 24))
      var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
      var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
      var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
      if (day1 < 0) {
        day1 = '00';
        hour = '00';
        minute = '00';
        second = '00';
      }
      document.getElementById('text-day').innerHTML = pad(day1, 2)
      document.getElementById('text-hour').innerHTML = pad(hour, 2)
      document.getElementById('text-min').innerHTML = pad(minute, 2)
      document.getElementById('text-sec').innerHTML = pad(second, 2)
    }

    window.setInterval(function() {
      ShowCountDown(2018, 2, 5, 0, 0, 0, 'divdown1')
    }, 1000)
  }
}
</script>
