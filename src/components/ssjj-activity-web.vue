<style>
body {
  background-color: #000 !important;
  font-family: '微软雅黑';
}

input {
  outline: none;
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  width: 100%;
  text-align: center;
  z-index: 9;
}

.swiper-pagination-switch {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #999;
  box-shadow: 0 1px 2px #555 inset;
  margin: 0 3px;
  cursor: pointer;
}

.swiper-active-switch {
  background: #fff;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
@import '~swiper/dist/idangerous.swiper.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg1.jpg") center 0 no-repeat;
    height: 826px;
}
.bg2 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg2.jpg") center 0 no-repeat;
    height: 840px;
}
.bg3 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg3.jpg") center 0 no-repeat;
    height: 1269px;
}
.bg4 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg4.jpg") center 0 no-repeat;
    height: 632px;
}
.bg5 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg5.jpg") center 0 no-repeat;
    height: 746px;
}
.bg6 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg6.jpg") center 0 no-repeat;
    height: 758px;
}
.bg7 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg7.jpg") center 0 no-repeat;
    height: 745px;
}
.bg8 {
    background: url("../assets/images/ssjj-activity/zczg-web-bg8.jpg") center 0 no-repeat;
    height: 684px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg2 video {
    width: 862px;
    height: 482px;
    position: absolute;
    top: 140px;
    left: 75px;
}
// .bg4 ul {
//     width: 904px;
//     height: 186px;
//     position: absolute;
//     top: 219px;
//     left: 47px;
// }
// .bg4 ul li {
//     float: left;
//     width: 274px;
//     height: 186px;
//     background-color: #373438;
//     margin: 0 13px;
// }
// .bg4 p {
//     width: 100%;
//     font-size: 14px;
//     color: #ffeab5;
//     text-align: center;
//     position: absolute;
//     top: 421px;
//     left: 0;
// }
.bg4 a {
    width: 301px;
    height: 61px;
    position: absolute;
    bottom: 49px;
    left: 350px;
}
.footer {
    width: 100%;
    height: 123px;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/ssjj-activity/zczg-web-footer.jpg") center bottom no-repeat;
    z-index: 10;
}
.swiper-box {
    width: 862px;
    height: 366px;
    position: absolute;
    top: 200px;
    left: 68px;
}
.swiper-container {
    width: 862px;
    height: 366px;
}
.swiper-container .swiper-slide {
    position: relative;
}
.swiper-container .swiper-slide span {
    opacity: 0;
}
.swiper-container .img1 {
    background: url("../assets/images/ssjj-activity/zczg-web-img1.jpg") no-repeat;
    background-size: 100% 100%;
}
.swiper-container .img1 .i1 {
    width: 52px;
    height: 43px;
    background: url("../assets/images/ssjj-activity/zczg-web-img1-1.png") no-repeat;
    position: absolute;
    top: 165px;
    left: 332px;
}
.swiper-container .img1 .i2 {
    width: 142px;
    height: 122px;
    background: url("../assets/images/ssjj-activity/zczg-web-img1-2.png") no-repeat;
    position: absolute;
    top: 58px;
    left: 390px;
}
.swiper-container .img1 .i3 {
    width: 81px;
    height: 50px;
    background: url("../assets/images/ssjj-activity/zczg-web-img1-3.png") no-repeat;
    position: absolute;
    top: 16px;
    left: 523px;
}
.swiper-container .img1 .i4 {
    width: 448px;
    height: 125px;
    background: url("../assets/images/ssjj-activity/zczg-web-img1-4.png") no-repeat;
    position: absolute;
    top: 231px;
    left: 211px;
}
.swiper-container .img2 .i1 {
    width: 56px;
    height: 52px;
    background: url("../assets/images/ssjj-activity/zczg-web-img2-1.png") no-repeat;
    position: absolute;
    top: 253px;
    left: 347px;
}
.swiper-container .img2 .i2 {
    width: 164px;
    height: 191px;
    background: url("../assets/images/ssjj-activity/zczg-web-img2-2.png") no-repeat;
    position: absolute;
    top: 84px;
    left: 389px;
}
.swiper-container .img2 .i3 {
    width: 81px;
    height: 50px;
    background: url("../assets/images/ssjj-activity/zczg-web-img2-3.png") no-repeat;
    position: absolute;
    top: 54px;
    left: 494px;
}
.swiper-container .img2 .i4 {
    width: 401px;
    height: 122px;
    background: url("../assets/images/ssjj-activity/zczg-web-img2-4.png") no-repeat;
    position: absolute;
    top: 233px;
    left: 452px;
}
.swiper-container .img3 .i1 {
    width: 56px;
    height: 52px;
    background: url("../assets/images/ssjj-activity/zczg-web-img3-1.png") no-repeat;
    position: absolute;
    top: 180px;
    left: 474px;
}
.swiper-container .img3 .i2 {
    width: 91px;
    height: 119px;
    background: url("../assets/images/ssjj-activity/zczg-web-img3-2.png") no-repeat;
    position: absolute;
    top: 72px;
    left: 530px;
}
.swiper-container .img3 .i3 {
    width: 84px;
    height: 55px;
    background: url("../assets/images/ssjj-activity/zczg-web-img3-3.png") no-repeat;
    position: absolute;
    top: 23px;
    left: 525px;
}
.swiper-container .img3 .i4 {
    width: 443px;
    height: 122px;
    background: url("../assets/images/ssjj-activity/zczg-web-img3-4.png") no-repeat;
    position: absolute;
    top: 233px;
    left: 271px;
}
.swiper-container .img2 {
    background: url("../assets/images/ssjj-activity/zczg-web-img2.jpg") no-repeat;
    background-size: 100% 100%;
}
.swiper-container .img3 {
    background: url("../assets/images/ssjj-activity/zczg-web-img3.jpg") no-repeat;
    background-size: 100% 100%;
}
.bg5 a {
    width: 301px;
    height: 61px;
    position: absolute;
    bottom: 45px;
    left: 350px;
}
.bg6 a {
    width: 301px;
    height: 61px;
    position: absolute;
    bottom: 50px;
    left: 350px;
}
.bg7 a {
    width: 360px;
    height: 61px;
    position: absolute;
    bottom: 42px;
    left: 310px;
}
.footer a {
    width: 262px;
    height: 60px;
    position: absolute;
    top: 33px;
    right: 245px;
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
    width: 500px;
    height: 250px;
    background: url("../assets/images/ssjj-activity/zczg-web-pop.jpg") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -125px;
    left: 50%;
    margin-left: -250px;
    z-index: 12;
}
.pop .close {
    width: 36px;
    height: 36px;
    position: absolute;
    top: 18px;
    right: 21px;
}

.join {
    width: 100%;
    height: 100%;
    position: relative;
}
.join h5 {
    width: 100%;
    text-align: center;
    font-size: 40px;
    color: #da2005;
    font-weight: bold;
    padding-top: 25px;
}
.join span {
    position: absolute;
}
.join span input {
    width: 255px;
    height: 40px;
    line-height: 40px;
    background: none;
    border: none;
    font-size: 20px;
    color: #452609;
}
.join span input::-webkit-input-placeholder {
    color: #898989;
}
.join .phonebox {
    top: 95px;
    left: 100px;
}
.join .phonebox input {
    width: 302px;
    height: 36px;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
}
.join .btn-join {
    position: absolute;
    bottom: 64px;
    left: 165px;
    width: 172px;
    height: 36px;
    background-color: #dd2a03;
    color: #fff;
    font-size: 24px;
    text-align: center;
    line-height: 36px;
    border-radius: 5px;
}
.join em {
    position: absolute;
    top: 1px;
    right: 0;
    background: #fff;
    border: 1px red solid;
    border-radius: 5px;
    padding: 5px;
}
.join strong {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 0;
    font-size: 18px;
    color: #000;
    font-weight: normal;
}
.join p {
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #000;
    line-height: 30px;
    padding: 10px 0;
}
</style>

<template>
<div class="box">
  <div class="bg1">
  </div>
  <div class="bg2">
    <div class="box-con">
      <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/2018ssjj.mp4" controls="controls" id="myvideo" autoplay="autoplay">
            您的浏览器不支持 video 标签。
            </video>
    </div>
  </div>
  <div class="bg3">
  </div>
  <div class="bg4">
    <div class="box-con">
      <!-- <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <p>证券咨询界殿堂级团队</p> -->
      <a href="javascript:;" @click="popClick(1)"></a>
    </div>
  </div>
  <div class="bg5">
    <div class="box-con">
      <div class="swiper-box">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide img1">
              <span class="i1"></span>
              <span class="i2"></span>
              <span class="i3"></span>
              <span class="i4"></span>
            </div>
            <div class="swiper-slide img2">
              <span class="i1"></span>
              <span class="i2"></span>
              <span class="i3"></span>
              <span class="i4"></span>
            </div>
            <div class="swiper-slide img3">
              <span class="i1"></span>
              <span class="i2"></span>
              <span class="i3"></span>
              <span class="i4"></span>
            </div>
          </div>

        </div>
        <div class="swiper-pagination"></div>
      </div>
      <a href="javascript:;" @click="popClick(2)"></a>
    </div>
  </div>
  <div class="bg6">
    <div class="box-con">
      <a href="javascript:;" @click="popClick(3)"></a>
    </div>
  </div>
  <div class="bg7">
    <div class="box-con">
      <a href="javascript:;" @click="popClick(4)"></a>
    </div>
  </div>
  <div class="bg8">
  </div>
  <div class="footer">
    <div class="box-con">
      <a href="javascript:;" @click="popClick(5)"></a>
    </div>
  </div>
  <div class='fixBg' v-if="popShow"></div>
  <div class="pop" v-if="popShow">
    <div class="join" v-show="editType">
      <h5>预约领取</h5>
      <span class="phonebox">
              <input type="text" class="phone" placeholder="请输入您的11位手机号码" v-model="phone" />
              <em v-html="txtPHtml" v-if="txtPShow"></em>
            </span>
      <a href="javascript:;" class="btn btn-large btn-join" @click="joinSubmit">立即预约</a>
      <strong>稍后将由金融界智能投服助理联系您发放。</strong>
    </div>
    <div class="join" v-show="!editType">
      <h5>预约成功</h5>
      <p>金融界高级投服将会在3个工作日内<br />为您安排预约名额。</p>
      <a href="javascript:;" class="btn btn-large btn-join" style="bottom:44px;" @click="close">知道了</a>
    </div>
    <a href="javascript:;" class="close" @click="close"></a>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import Swiper from 'swiper/dist/idangerous.swiper.js'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import getQueryString from 'utils/getQueryString'
export default {
  data() {
    return {
      popShow: false,
      codeImg: '',
      txtUHtml: '',
      txtUShow: false,
      txtPHtml: '',
      txtPShow: false,
      editType: false
    }
  },
  computed: mapState({
    type: state => {
      return state.reservation.type
    },
    err: state => {
      return state.reservation.err
    }
  }),
  components: {},
  methods: {
    popClick(i) {
      this.popShow = true
      this.editType = true
      window.dcsMultiTrack('DCS.dcsuri', 'zczg-web-' + i, 'WT.ti', 'zczg-web-' + i)
    },
    close() {
      this.popShow = false
      this.editType = false
      window.dcsMultiTrack('DCS.dcsuri', 'zczg-web-close', 'WT.ti', 'zczg-web-close')
    },
    joinSubmit() {
      if (!this.type) {
        alert('提交中')
        return
      }
      var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
      if (!this.phone || this.phone.length === 0) {
        this.txtPShow = true
        this.txtPHtml = '手机号不能为空！'
        return
      } else if (!reg.test(this.phone)) {
        this.txtPShow = true
        this.txtPHtml = '手机号输入不正确！'
        return
      }
      this.$store.dispatch('reservation/fetch', {
        aid: '847099003355643904',
        userName: '',
        phone: this.phone,
        bizsource: getQueryString('bizsource') || 'JRJ',
        source: '1',
        tgqdcode: getQueryString('tgqdcode') || '4VGMD5G7'
      })
    }
  },
  mounted() {
    document.title = '2018盛世掘金-金融界'
    var _this = this
    this.$watch('txtUShow', txtUShow => {
      setTimeout(function() {
        _this.txtUShow = false
        _this.txtUHtml = ''
      }, 1000)
    })
    this.$watch('txtPShow', txtPShow => {
      setTimeout(function() {
        _this.txtPShow = false
        _this.txtPHtml = ''
      }, 1000)
    })
    this.$watch('type', type => {
      if (type) {
        this.phone = ''
        this.editType = false
        window.dcsMultiTrack('DCS.dcsuri', 'zczg-web-success', 'WT.ti', 'zczg-web-success')
      }
    }, {
      deep: true
    })
    this.$watch('err', err => {
      alert(err.msg)
    })


    new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      effect: 'fade',
      grabCursor: true,
      centeredSlides: false,
      watchActiveIndex: false,
      createPagination: true,
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      paginationClickable: true,
      autoplay: 4000,
      autoplayDisableOnInteraction: false,
      onSlideChangeStart: function(swiper) {
        $('.swiper-wrapper .swiper-slide span').stop()
        $('.swiper-wrapper .swiper-slide span').css({
          opacity: 0
        })
      },
      onSlideChangeEnd: function(swiper) {
        var index = swiper.activeLoopIndex + 1
        $('.swiper-wrapper .swiper-slide span').css({
          opacity: 0
        })
        $('.swiper-wrapper .img' + index + ' .i1').animate({
          opacity: 1
        }, 500, function() {
          $('.swiper-wrapper .img' + index + ' .i2').animate({
            opacity: 1
          }, 500, function() {
            $('.swiper-wrapper .img' + index + ' .i3').animate({
              opacity: 1
            }, 500, function() {
              $('.swiper-wrapper .img' + index + ' .i4').animate({
                opacity: 1
              }, 500)
            })
          })
        })
      },
      onSwiperCreated: function(swiper) {
        var index = swiper.activeLoopIndex + 1
        $('.swiper-wrapper .swiper-slide span').css({
          opacity: 0
        })
        $('.swiper-wrapper .img' + index + ' .i1').animate({
          opacity: 1
        }, 500, function() {
          $('.swiper-wrapper .img' + index + ' .i2').animate({
            opacity: 1
          }, 500, function() {
            $('.swiper-wrapper .img' + index + ' .i3').animate({
              opacity: 1
            }, 500, function() {
              $('.swiper-wrapper .img' + index + ' .i4').animate({
                opacity: 1
              }, 500)
            })
          })
        })
      }
    })
  }
}
</script>
