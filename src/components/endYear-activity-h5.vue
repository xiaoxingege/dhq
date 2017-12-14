<style>
body {
  background-color: #7e1d17 !important;
  font-family: '微软雅黑';
}

input,
button {
  outline: none;
}

.bg6 .box-con .swiper-box {
  top: 0.86rem;
}

.bg6 .swiper-slide {
  background-size: 98% 100% !important;
  background-repeat: no-repeat;
  background-position: center;
}

.bg3 .pagination .swiper-pagination-switch {
  width: 0.18rem;
  height: 0.18rem;
  background-color: #e90832;
  margin: 0 0.05rem;
}

.bg3 .pagination .swiper-pagination-switch.swiper-active-switch {
  background-color: #ffd280;
}

.lottery-list li {
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #ffddc8;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 7.23rem;
}
.bg2 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 6.57rem;
}
.bg3 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg3.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 6.01rem;
}
.bg4 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 9.88rem;
}
.bg5 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg5.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 7.63rem;
}
.bg6 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg6.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 6.78rem;
}

.bg6-1 {
    background: url("../assets/images/endYear-activity/endYear-H5-bg6-1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 3.79rem;
    margin-top: -0.1rem;
}
.box-con {
    height: 100%;
    position: relative;
}
.nav-fixed {
    width: 1.33rem;
    height: 1.64rem;
    position: fixed;
    top: 53%;
    right: 0;
    background: url("../assets/images/endYear-activity/endYear-h5-nav1.png") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.nav-fixed div {
    width: 100%;
    height: 50%;
}
.footer {
    width: 100%;
    height: 3.28rem;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/endYear-activity/endYear-h5-footer1.png") center bottom no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.fixBg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
    z-index: 11;
}
.pop {
    width: 7.05rem;
    height: 3.81rem;
    background: url("../assets/images/endYear-activity/endYear-web-pop-bg1.png") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;
    top: 50%;
    margin-top: -1.9rem;
    left: 50%;
    margin-left: -3.52rem;
    z-index: 12;
}
.pop-con {
    width: 5rem;
    height: 2.71rem;
    float: left;
    margin: 0.48rem 0 0 1rem;
}
.pop-con strong {
    font-size: 0.26rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    float: left;
    color: #ffeee4;
    line-height: 0.35rem;
    margin-top: 0.2rem;
}
.pop-con h1 {
    text-align: center;
    color: #ffeee4;
    font-size: 0.38rem;
    margin-top: 0.4rem;
}
.pop-con button {
    width: 2.21rem;
    height: 0.6rem;
    background: url("../assets/images/endYear-activity/endYear-H5-btn1.png") 0 0 no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 0.6rem;
    color: #b5041f;
    border: none;
    font-size: 0.24rem;
    font-weight: bold;
    padding-bottom: 0.08rem;
    float: left;
    margin: 0.3rem 0 0 1.3rem;
}
.pop-con button.bt1 {
    width: 3.41rem;
    height: 0.6rem;
    background: url("../assets/images/endYear-activity/endYear-H5-btn2.png") 0 0 no-repeat;
    background-size: 100%;
    margin: 0.3rem 0 0 0.8rem;
}
.close {
    width: 0.46rem;
    height: 0.45rem;
    background: url("../assets/images/endYear-activity/endYear-web-pop-close.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: -0.15rem;
    right: 1.1rem;
    cursor: pointer;
}
.swiper1-container {
    width: 6.77rem;
    height: 3.34rem;
    margin: 0 auto;
    position: absolute;
    left: 0.39rem;
    top: 0.53rem;
    overflow: hidden;
    direction: ltr;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    /* Fix of Webkit flickering */
    z-index: 1;
}
.bg3 .pagination {
    width: 6.77rem;
    text-align: center;
    position: absolute;
    left: 0.39rem;
    top: 3.58rem;
}

.lottery {
    width: 6.68rem;
    height: 6.68rem;
    position: absolute;
    top: 0.8rem;
    left: 0.4rem;
    overflow: hidden;
}
.lottery-plate {
    width: 100%;
    height: 100%;
    background: url('../assets/images/endYear-activity/endYear-web-plate-bg1.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.lottery-pointer {
    position: absolute;
    width: 1.95rem;
    height: 2.41rem;
    left: 2.36rem;
    top: 1.89rem;
    background: url('../assets/images/endYear-activity/endYear-web-needle-bg1.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.rotate_origin {
    transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
}
.rotate_origin1 {
    transform-origin: 50% 85%;
    -ms-transform-origin: 50% 85%;
    -webkit-transform-origin: 50% 85%;
    -moz-transform-origin: 50% 85%;
    -o-transform-origin: 50% 85%;
}
.f-lottery {
    width: 2.51rem;
    height: 2.48rem;
    position: absolute;
    bottom: 0;
    left: 0;
}
.f-lottery-plate {
    width: 100%;
    height: 100%;
    background: url('../assets/images/endYear-activity/endYear-web-plate-bg2.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.f-lottery-pointer {
    position: absolute;
    width: 0.73rem;
    height: 0.9rem;
    left: 0.89rem;
    top: 0.71rem;
    background: url('../assets/images/endYear-activity/endYear-web-needle-bg2.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.popClick1 {
    width: 3.27rem;
    height: 0.73rem;
    position: absolute;
    bottom: 0.42rem;
    left: 2.75rem;
    cursor: pointer;
}
.popClick2 {
    width: 2.05rem;
    height: 0.52rem;
    position: absolute;
    left: 2.69rem;
    bottom: 0.16rem;
    cursor: pointer;
}
.lottery-list {
    width: 6.3rem;
    height: 1.1rem;
    position: absolute;
    top: 0.5rem;
    right: 0.57rem;
    overflow: hidden;
}
.popClick3 {
    width: 3.22rem;
    height: 0.57rem;
    position: absolute;
    right: 1rem;
    bottom: 0.66rem;
}
.swiper1-container .slide-img1 {
    background: url('../assets/images/endYear-activity/endYear-slide-img1.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img2 {
    background: url('../assets/images/endYear-activity/endYear-slide-img2.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img3 {
    background: url('../assets/images/endYear-activity/endYear-slide-img3.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img4 {
    background: url('../assets/images/endYear-activity/endYear-slide-img4.jpg') center 0 no-repeat;
    background-size: 100%;
}
</style>

<template>
<div class="box">
  <div class="bg1">
  </div>
  <div class="bg2">
    <div class="box-con">
      <div class="popClick1" @click="popClick(1)" tt-data-click tt-data-convertid="78777396907" tt-data-eventtype="wechat"></div>
    </div>
  </div>
  <div class="bg3">
    <div class="box-con">
      <div class="swiper1-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide red-slide slide-img1"></div>
          <div class="swiper-slide blue-slide slide-img2"></div>
          <div class="swiper-slide orange-slide slide-img3"></div>
          <div class="swiper-slide green-slide slide-img4"></div>
        </div>
      </div>
      <div class="pagination"></div>
    </div>
  </div>
  <div class="bg4">
    <div class="box-con">
      <div class="popClick2" @click="popClick(1)" tt-data-click tt-data-convertid="78777396907" tt-data-eventtype="wechat"></div>
      <div class="lottery">
        <div class="lottery-plate rotate_origin" id="i_bg"></div>
        <div class="lottery-pointer rotate_origin1" id="i_cont"></div>
      </div>
    </div>
  </div>
  <div class="bg5">
    <div class="box-con">
      <div class="lottery-list">
        <ul>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg6" v-if="type">
    <div class="box-con">
      <activity-slider :listData="listData" />
    </div>
  </div>
  <div class="bg6-1" v-else>

  </div>
  <div class="nav-fixed" tt-data-click tt-data-convertid="78777396907" tt-data-eventtype="wechat">
    <div @click="popClick(1)"></div>
    <div></div>
  </div>
  <div class="footer">
    <div class="box-con">
      <div class="popClick3" @click="popClick(4)" tt-data-click tt-data-convertid="78777396907" tt-data-eventtype="wechat"></div>
      <div class="f-lottery">
        <div class="f-lottery-plate rotate_origin" id="i_bg1"></div>
        <div class="f-lottery-pointer rotate_origin1" id="i_cont1"></div>
      </div>
    </div>
  </div>
  <div class='fixBg' v-if="popShow"></div>
  <div class="pop" v-if="popShow">
    <div class="close" @click="close"></div>
    <div class="pop-con">
      <div class="pop-text1" v-if="popText === 1">
        <h1>恭喜您！</h1>
        <strong>成功复制投服助理微信号<br />{{wxid}}</strong>
        <button type="button" name="button" class="bt1 btn" :data-clipboard-text="wxid" @click="copOpenwx">立即添加，领每日强势股</button>
      </div>
      <div class="pop-text2" v-else-if="popText === 2">
        <h1>恭喜您！</h1>
        <strong>抽中了{{lotteryText}}</strong>
        <button type="button" name="button" @click="close">继续抽奖</button>
      </div>
      <div class="pop-text3" v-else-if="popText ===3">
        <h1>要知足哟！</h1>
        <strong>您的抽奖次数已经用完，奖品为：<br />{{lotteryText1}}<br />{{lotteryText2}}</strong>
        <button type="button" name="button" @click="popClick(4)">立即领奖</button>
      </div>
      <div class="pop-text4" v-else-if="popText ===4">
        <h1>复制成功</h1>
        <strong>您已成功复制投服助理微信号<br />{{wxid}}</strong>
        <button type="button" name="button" :data-clipboard-text="wxid" class="btn" @click="copOpenwx">前去领奖</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import activitySlider from 'components/activity-slider'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import Swiper from 'swiper/dist/idangerous.swiper.js'
import Clipboard from '../assets/plugins/clipboard/clipboard.min.js'
window.Clipboard = Clipboard
import getQueryString from 'utils/getQueryString'

export default {
  data() {
    return {
      listData: {
        conWidth: '6.75rem',
        conHeight: '2.23rem',
        conPadding: '0',
        pagShow: false,
        arrowShow: false,
        loop: true,
        slidesPerView: 2,
        autoplay: 4000,
        list: [{
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img1.png'),
            link: ''
          },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img2.png'),
            link: ''
          },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img3.png'),
            link: ''
          },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img4.png'),
            link: ''
          },
          // {
          //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img5.png'),
          //     link: ''
          // },
          // {
          //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img6.png'),
          //     link: ''
          // },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img7.png'),
            link: ''
          },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img8.png'),
            link: ''
          },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img9.png'),
            link: ''
          },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img10.png'),
            link: ''
          },
          // {
          //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img11.png'),
          //     link: ''
          // },
          // {
          //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img12.png'),
          //     link: ''
          // },
          {
            imgUrl: require('assets/images/endYear-activity/endYear-slide1-img13.png'),
            link: ''
          }
        ]
      },
      popShow: false,
      codeImg: '',
      lotteryNum: 2,
      resultAngle: [{
          a: 0,
          p: 0,
          t: '12月每周主题金股'
        },
        {
          a: 60,
          p: 0,
          t: '2018年A股投资图谱'
        },
        {
          a: 120,
          p: 0,
          t: '投顾工作室9折券'
        },
        {
          a: 180,
          p: 0,
          t: '新科技蓝筹股投资策略'
        },
        {
          a: 240,
          p: 0,
          t: '2017最具投资价值股'
        },
        {
          a: 300,
          p: 0,
          t: '极智选股500元券'
        }
      ],
      plate: '',
      needle: '',
      popText: 4,
      lotteryText: '',
      lotteryText1: '',
      lotteryText2: '',
      wxid: '',
      type: true
    }
  },
  computed: mapState({}),
  components: {
    activitySlider
  },
  methods: {
    popClick(type) {
      this.popShow = true
      this.popText = type
    },
    close() {
      this.popShow = false
    },
    copOpenwx() {
      new Clipboard('.btn')
      location.href = 'weixin://'
    }
  },
  mounted() {
    document.title = '每日3只强势股-金融界'
    var _this = this
    new Swiper('.swiper1-container', {
      pagination: '.pagination',
      paginationClickable: true,
      loop: true,
      autoplay: 4000,
      autoplayDisableOnInteraction: false
    })
    var rotate = {
      // 起始位置为0
      rotateAngle: 0,
      // 转盘转动过程中不可再次触发
      flagClick: true,
      // type:0,箭头转动,1,背景转动;during_time:持续时间(s)
      calculateResult: function(type, duringTime) {
        var self = this;
        // 默认为箭头转动
        type = type || 0;
        // 默认为1s
        duringTime = duringTime || 1;

        // 用来判断的随机数，1-100
        var randNum = Math.ceil(Math.random() * 100);

        // 最终要旋转到哪一块，对应result_angle的下标
        var resultIndex;
        // 判断的角度值起始位置和结束位置
        var startPos;
        var endPos = startPos = 0;

        for (var i in _this.resultAngle) {
          // 区块的起始值
          startPos = endPos + 1;
          // 区块的结束值
          endPos = endPos + 100 * _this.resultAngle[i].p;

          // 如果随机数落在当前区块，那么获取到最终要旋转到哪一块
          if (randNum >= startPos && randNum <= endPos) {
            resultIndex = i;
            break;
          }
        }
        // 附加多转几圈，2-3
        var randCircle = Math.ceil(Math.random() * 2) + 1;

        // 旋转结束前，不允许再次触发
        self.flagClick = false;
        // 转动盘子
        if (type === 1) {
          self.rotateAngle = self.rotateAngle - randCircle * 360 - _this.resultAngle[resultIndex].a - self.rotateAngle % 360;
          $(_this.plate).css({
            'transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-ms-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-moz-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
            'transition': 'transform ease-out ' + duringTime + 's',
            '-moz-transition': '-moz-transform ease-out ' + duringTime + 's',
            '-webkit-transition': '-webkit-transform ease-out ' + duringTime + 's',
            '-o-transition': '-o-transform ease-out ' + duringTime + 's'
          });
        } else {
          // 转动指针
          self.rotateAngle = self.rotateAngle + randCircle * 360 + _this.resultAngle[resultIndex].a - self.rotateAngle % 360;
          $(_this.needle).css({
            'transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-ms-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-moz-transform': 'rotate(' + self.rotateAngle + 'deg)',
            '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
            'transition': 'transform ease-out ' + duringTime + 's',
            '-moz-transition': '-moz-transform ease-out ' + duringTime + 's',
            '-webkit-transition': '-webkit-transform ease-out ' + duringTime + 's',
            '-o-transition': '-o-transform ease-out ' + duringTime + 's'
          });
        }
        // 旋转结束后，允许再次触发
        setTimeout(function() {
          self.flagClick = true;
          // 告诉结果
          if (resultIndex === '5') {
            _this.perText = '99.80%'
          } else {
            _this.perText = '90.00%'
          }
          // console.log(_this.resultAngle[resultIndex].t)
          _this.lotteryNum = _this.lotteryNum - 1
          _this.popShow = true
          _this.popText = 2
          if (_this.lotteryNum === 1) {
            _this.lotteryText1 = _this.resultAngle[resultIndex].t
          } else {
            _this.lotteryText2 = _this.resultAngle[resultIndex].t
          }
          _this.lotteryText = _this.resultAngle[resultIndex].t
          var day = new Date();
          day.setTime(day.getTime());
          var s2 = (day.getMonth() + 1) + '月' + day.getDate() + '日' + day.getHours() + '时' + day.getMinutes() + '分';
          var html = '<li>' + s2 + '，' + Math.floor(Math.random() * 9 + 1) + '***' + Math.floor(Math.random() * 100) + ' 抽到' + _this.resultAngle[resultIndex].t + '</li>'
          $('.lottery-list ul').append(html)
        }, duringTime * 1000);
      }
    }
    $('#i_cont').click(function() {
      _this.plate = '#i_bg'
      _this.needle = '#i_cont'
      if (_this.lotteryNum > 0) {
        if (_this.lotteryNum === 1) {
          // _this.resultAngle[0].p = 0
          _this.resultAngle[1].p = 0
          _this.resultAngle[3].p = 0
          _this.resultAngle[4].p = 0
          // _this.resultAngle[2].p = 0.5
          _this.resultAngle[5].p = 1
        } else if (_this.lotteryNum === 2) {
          // _this.resultAngle[0].p = 0.25
          _this.resultAngle[1].p = 0.33
          _this.resultAngle[3].p = 0.33
          _this.resultAngle[4].p = 0.33
        }
        rotate.calculateResult(1, 1);
      } else {
        _this.popShow = true
        _this.popText = 3
      }
    })
    $('#i_cont1').click(function() {
      _this.plate = '#i_bg1'
      _this.needle = '#i_cont1'
      if (_this.lotteryNum > 0) {
        if (_this.lotteryNum === 1) {
          // _this.resultAngle[0].p = 0
          _this.resultAngle[1].p = 0
          _this.resultAngle[3].p = 0
          _this.resultAngle[4].p = 0
          // _this.resultAngle[2].p = 0.5
          _this.resultAngle[5].p = 1
        } else if (_this.lotteryNum === 2) {
          // _this.resultAngle[0].p = 0.25
          _this.resultAngle[1].p = 0.33
          _this.resultAngle[3].p = 0.33
          _this.resultAngle[4].p = 0.33
        }
        rotate.calculateResult(1, 1);
      } else {
        _this.popShow = true
        _this.popText = 3
      }
    })
    $.ajax({
      url: 'http://wx.jrj.com.cn/jrj/open.jsp?action=getImage',
      dataType: 'jsonp',
      jsonpCallback: 'callback'
    }).then(data => {
      _this.codeImg = 'http://wx.jrj.com.cn' + data.imgurl
      _this.wxid = data.wxid
    })
    $(function() {
      window.InitWeChatShare({
        shareTitle: window.document.title,
        shareLink: window.location.href,
        shareDesc: '2017年底行情如何布局？2018A股市场将会怎样？金融界送您每天3只盘前热股，关注跨年行情',
        shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/endYear-H5-bg1.jpg',
        callback: function(wx) {

        }
      })
      $('.nav-fixed div:eq(1)').click(function() {
        var pos = $('.bg4').offset().top
        // 实现平滑移动 1000代表时间ms
        $('html,body').stop().animate({
          scrollTop: pos
        }, 500)
      })
      var date = new Date()
      var htmls = ''
      for (var i = 1; i < 6; i++) {
        date.setTime(date.getTime() - i * 60 * 1000)
        var s1 = (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '时' + date.getMinutes() + '分'
        htmls += '<li>' + s1 + '，' + Math.floor(Math.random() * 9 + 1) + '***' + Math.floor(Math.random() * 100) + ' 抽到' + _this.resultAngle[Math.floor(Math.random() * 5)].t + '</li>'
      }
      $('.lottery-list ul').append(htmls)
      var liHeight = $('.lottery-list ul li').height()
      setInterval(function() {
        $('.lottery-list ul').animate({
          'margin-top': '-' + liHeight
        }, 500, function() {
          $('.lottery-list ul').append($('.lottery-list ul li:first'))
          $('.lottery-list ul').css({
            'margin-top': '0'
          })
        })
      }, 1000)
    })
    if (getQueryString('type')) {
      _this.type = false
    }
  }
}
</script>
