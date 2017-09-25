<style>
body {
  background-color: #000 !important;
  font-family: '微软雅黑';
}

input {
  outline: none;
}

.bg5 .box-con .swiper-container {
  top: 102px;
  left: 250px;
  margin: 0;
  overflow: visible;
}

.bg5 .box-con .swiper-pagination {
  width: 233px;
  height: 319px;
  left: -250px;
}

.bg5 .box-con .swiper-pagination span {
  width: 233px;
  height: 69px;
  float: left;
  margin: 0 0 14px;
  background: none;
}

.pop-top h3 {
  font-size: 36px;
  color: #f8ce9a;
}

.fz22 {
  font-size: 22px;
}

.pop-top p {
  color: #e3a75d;
  line-height: 40px;
}

.mt20 {
  margin-top: 20px;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/jzxg-activity/section-1.jpg") center 0 no-repeat;
    height: 5.03rem;
    width: 7.5rem;
    background-size: 100%;
}
.bg2 {
    background: url("../assets/images/jzxg-activity/section-2.jpg") center 0 no-repeat;
    height: 11.21rem;
    width: 7.5rem;
    background-size: 100%;
}
.bg3 {
    background: url("../assets/images/jzxg-activity/section-3.jpg") center 0 no-repeat;
    height: 11.62rem;
    width: 7.5rem;
    background-size: 100%;
}
.bg4 {
    background: url("../assets/images/jzxg-activity/section-4.jpg") center 0 no-repeat;
    height: 6.58rem;
    width: 7.5rem;
    background-size: 100%;
}
.bg5 {
    background: url("../assets/images/jzxg-activity/section-5.jpg") center 0 no-repeat;
    height: 7.15rem;
    width: 7.5rem;
    background-size: 100%;
}
.bg6 {
    background: url("../assets/images/jzxg-activity/section-6.jpg") center 0 no-repeat;
    height: 5.22rem;
    width: 7.5rem;
    background-size: 100%;
}
.bg7 {
    background: url("../assets/images/jzxg-activity/section-7.jpg") center 0 no-repeat;
    height: 10.69rem;
    width: 7.5rem;
    background-size: 100%;
    position: relative;
}
.nav-fixed {
    width: 1.41rem;
    height: 1.90rem;
    position: fixed;
    top: 50%;
    right: 0;
    margin-top: -.95px;
    background: url("../assets/images/jzxg-activity/jzxg-h5-nav.png") center 0 no-repeat;
    z-index: 10;
    background-size: 100%;
    cursor: pointer;
}
.bottom-fixed {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 7.5rem;
    height: 2rem;
    background: url("../assets/images/jzxg-activity/h5-bottom.png") center 0 no-repeat;
    background-size: 100%;
}
#divdown1 {
    position: absolute;
    top: 0.75rem;
    left: 2.18rem;
    font-size: 0.4rem;
    color: #ffe0c0;
    letter-spacing: 0.249rem;
}
</style>

<template>
<div class="box">
  <div class="bg1">
  </div>
  <div class="bg2">
  </div>
  <div class="bg3">
  </div>
  <div class="bg4">
  </div>
  <div class="bg5">
    <div class="box-con">
      <activity-slider :listData="listData" />
    </div>
  </div>
  <div class="bg6">
  </div>
  <div class="bg7">
    <div class="bottom-fixed" @click="submit">
      <div id="divdown1">
        <span id="t_d">00</span>
        <span id="t_h">00</span>
        <span id="t_m">00</span>
        <span id="t_s">00</span>
      </div>
    </div>
  </div>
  <div class="nav-fixed" @click="navFixed">
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
  data () {
    function GetRTime () {
      var EndTime = new Date('2017/09/30 23:59:59')
      var NowTime = new Date()
      var t = EndTime.getTime() - NowTime.getTime()
      var d = 0
      var h = 0
      var m = 0
      var s = 0
      if (t >= 0) {
        d = Math.floor(t / 1000 / 60 / 60 / 24)
        h = Math.floor(t / 1000 / 60 / 60 % 24)
        m = Math.floor(t / 1000 / 60 % 60)
        s = Math.floor(t / 1000 % 60)
      }
      if (d < 10) {
        d = '0' + d
      }
      if (h < 10) {
        h = '0' + h
      }
      if (m < 10) {
        m = '0' + m
      }
      if (s < 10) {
        s = '0' + s
      }
      document.getElementById('t_d').innerHTML = d
      document.getElementById('t_h').innerHTML = h
      document.getElementById('t_m').innerHTML = m
      document.getElementById('t_s').innerHTML = s
    }
    // 倒计时开关
    setInterval(GetRTime, 1000)
    return {
      listData: {
        conWidth: '743px',
        conHeight: '307px',
        conPadding: '0',
        pagShow: true,
        arrowShow: false,
        paginationClickable: true,
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        list: [{
          imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go0.jpg',
          link: ''
        },
        {
          imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go1.jpg',
          link: ''
        },
        {
          imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go2.jpg',
          link: ''
        },
        {
          imgUrl: 'http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go3.jpg',
          link: ''
        }
        ]
      },
      popHtml: '',
      popShow: false
    }
  },
  computed: mapState({}),
  components: {},
  methods: {
    navFixed () {
      var pos = $('.bottom-fixed').offset().top
      // 实现平滑移动 1000代表时间ms
      $('html,body').stop().animate({
        scrollTop: pos
      }, 500)
    },
    submit () {
      location.href = 'http://itougu.jrj.com.cn/activity/app/strategyInfoNew.jspa#/riskResult?productId=100050008&reNew=5&type=4'
    }
  },
  mounted () {
    document.title = '极致选股'
  }
}
</script>
