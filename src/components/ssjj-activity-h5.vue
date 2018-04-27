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
  bottom: -0.15rem;
  width: 100%;
  text-align: center;
  z-index: 9;
}

.swiper-pagination-switch {
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 0.1rem;
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
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg1.jpg") center 0 no-repeat;
    height: 5.08rem;
    background-size: 100% 100%;
}
.bg2 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg2.jpg") center 0 no-repeat;
    height: 8.33rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg3.jpg") center 0 no-repeat;
    height: 11.47rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg4.jpg") center 0 no-repeat;
    height: 5.73rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg5.jpg") center 0 no-repeat;
    height: 6.85rem;
    background-size: 100% 100%;
}
.bg6 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg6.jpg") center 0 no-repeat;
    height: 7.72rem;
    background-size: 100% 100%;
}
.bg7 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg7.jpg") center 0 no-repeat;
    height: 7.22rem;
    background-size: 100% 100%;
}
.bg8 {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg8.jpg") center 0 no-repeat;
    height: 5.6rem;
    background-size: 100% 100%;
}
.bg8.xld {
    background: url("../assets/images/ssjj-activity/ssjj-h5-bg8-1.jpg") center 0 no-repeat;
    height: 6.6rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.bg2 video {
    width: 6.4rem;
    height: 3.6rem;
    position: absolute;
    top: 1.35rem;
    left: 0.55rem;
}
.bg4 a,
.bg5 a,
.bg6 a {
    width: 3.01rem;
    height: 0.61rem;
    position: absolute;
    bottom: 0.42rem;
    left: 2.24rem;
}
.bg7 a {
    width: 3.6rem;
    height: 0.61rem;
    position: absolute;
    bottom: 0.53rem;
    left: 1.94rem;
}
.swiper-box {
    width: 6.94rem;
    height: 2.94rem;
    position: absolute;
    top: 2.1rem;
    left: 0.25rem;
}
.swiper-container {
    width: 6.94rem;
    height: 2.94rem;
}
.swiper-container .swiper-slide {
    position: relative;
}
.swiper-container .swiper-slide span {
    opacity: 0;
}
.swiper-container .img1 {
    background: url("../assets/images/ssjj-activity/zczg-h5-img1.jpg") no-repeat;
    background-size: 100% 100%;
}
.swiper-container .img1 .i1 {
    width: 0.42rem;
    height: 0.35rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img1-1.png") no-repeat;
    position: absolute;
    top: 1.32rem;
    left: 2.67rem;
    background-size: 100% 100%;
}
.swiper-container .img1 .i2 {
    width: 1.16rem;
    height: 1rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img1-2.png") no-repeat;
    position: absolute;
    top: 0.47rem;
    left: 3.14rem;
    background-size: 100% 100%;
}
.swiper-container .img1 .i3 {
    width: 0.66rem;
    height: 0.4rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img1-3.png") no-repeat;
    position: absolute;
    top: 0.13rem;
    left: 4.21rem;
    background-size: 100% 100%;
}
.swiper-container .img1 .i4 {
    width: 3.61rem;
    height: 1.01rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img1-4.png") no-repeat;
    position: absolute;
    top: 1.85rem;
    left: 1.7rem;
    background-size: 100% 100%;
}
.swiper-container .img2 .i1 {
    width: 0.45rem;
    height: 0.42rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img2-1.png") no-repeat;
    position: absolute;
    top: 2.03rem;
    left: 2.8rem;
    background-size: 100% 100%;
}
.swiper-container .img2 .i2 {
    width: 1.35rem;
    height: 1.55rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img2-2.png") no-repeat;
    position: absolute;
    top: 0.68rem;
    left: 3.14rem;
    background-size: 100% 100%;
}
.swiper-container .img2 .i3 {
    width: 0.65rem;
    height: 0.41rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img2-3.png") no-repeat;
    position: absolute;
    top: 0.44rem;
    left: 3.98rem;
    background-size: 100% 100%;
}
.swiper-container .img2 .i4 {
    width: 3.23rem;
    height: 0.99rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img2-4.png") no-repeat;
    position: absolute;
    top: 1.87rem;
    left: 3.64rem;
    background-size: 100% 100%;
}
.swiper-container .img3 .i1 {
    width: 0.45rem;
    height: 0.42rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img3-1.png") no-repeat;
    position: absolute;
    top: 1.44rem;
    left: 3.82rem;
    background-size: 100% 100%;
}
.swiper-container .img3 .i2 {
    width: 0.75rem;
    height: 0.96rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img3-2.png") no-repeat;
    position: absolute;
    top: 0.57rem;
    left: 4.27rem;
    background-size: 100% 100%;
}
.swiper-container .img3 .i3 {
    width: 0.68rem;
    height: 0.44rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img3-3.png") no-repeat;
    position: absolute;
    top: 0.18rem;
    left: 4.23rem;
    background-size: 100% 100%;
}
.swiper-container .img3 .i4 {
    width: 3.57rem;
    height: 0.99rem;
    background: url("../assets/images/ssjj-activity/zczg-h5-img3-4.png") no-repeat;
    position: absolute;
    top: 1.85rem;
    left: 2.17rem;
    background-size: 100% 100%;
}
.swiper-container .img2 {
    background: url("../assets/images/ssjj-activity/zczg-h5-img2.jpg") no-repeat;
    background-size: 100% 100%;
}
.swiper-container .img3 {
    background: url("../assets/images/ssjj-activity/zczg-h5-img3.jpg") no-repeat;
    background-size: 100% 100%;
}
.footer {
    width: 100%;
    height: 1.23rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/ssjj-activity/ssjj-h5-footer.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.footer a {
    width: 2.1rem;
    height: 0.46rem;
    position: absolute;
    top: 0.38rem;
    right: 0.87rem;
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
    width: 6rem;
    height: 3.5rem;
    background: url("../assets/images/ssjj-activity/zczg-web-pop.jpg") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -1.75rem;
    left: 50%;
    margin-left: -3rem;
    z-index: 12;
}
.pop .close {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.18rem;
    right: 0.21rem;
}

.join {
    width: 100%;
    height: 100%;
    position: relative;
}
.join h5 {
    width: 100%;
    text-align: center;
    font-size: 0.4rem;
    color: #da2005;
    font-weight: bold;
    padding-top: 0.35rem;
}
.join span {
    position: absolute;
}
.join span input {
    width: 2.55rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background: none;
    border: none;
    font-size: 0.2rem;
    color: #452609;
}
.join span input::-webkit-input-placeholder {
    color: #898989;
}
.join .phonebox {
    top: 1.1rem;
    left: 1rem;
}
.join .phonebox input {
    width: 4.02rem;
    height: 0.66rem;
    background-color: #fff;
    border-radius: 0.1rem;
    text-align: center;
    float: left;
}
.join .btn-join {
    position: absolute;
    bottom: 0.74rem;
    left: 1.75rem;
    width: 2.5rem;
    height: 0.56rem;
    background-color: #dd2a03;
    color: #fff;
    font-size: 0.24rem;
    text-align: center;
    line-height: 0.56rem;
    border-radius: 0.05rem;
}
.join em {
    position: absolute;
    top: 0.01rem;
    right: 0;
    background: #fff;
    border: 0.01rem red solid;
    border-radius: 0.05rem;
    padding: 0.05rem;
    font-size: 0.16rem;
}
.join strong {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0.15rem;
    left: 0;
    font-size: 0.18rem;
    color: #000;
    font-weight: normal;
}
.join p {
    width: 100%;
    text-align: center;
    font-size: 0.18rem;
    color: #000;
    line-height: 0.3rem;
    padding: 0.4rem 0;
}
</style>

<template>
<div class="box">
  <div class="bg1">
  </div>
  <div class="bg2">
    <div class="box-con">
      <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/2018ssjj.mp4" controls="controls" id="myvideo">
            您的浏览器不支持 video 标签。
            </video>
    </div>
  </div>
  <div class="bg3">
  </div>
  <div class="bg4">
    <div class="box-con">
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
  <div :class="xldType ? 'bg8 xld':'bg8'">
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
      <a href="javascript:;" class="btn btn-large btn-join" style="bottom:0.64rem;" @click="close">知道了</a>
    </div>
    <a href="javascript:;" class="close" @click="close"></a>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import Swiper from 'swiper/dist/idangerous.swiper.js'
import getQueryString from 'utils/getQueryString'

export default {
  data() {
    return {
      popShow: false,
      txtPHtml: '',
      txtPShow: false,
      editType: false,
      xldType: false
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
      window.dcsMultiTrack('DCS.dcsuri', 'zczg-h5-' + i, 'WT.ti', 'zczg-h5-' + i)
    },
    close() {
      this.popShow = false
      this.editType = false
      window.dcsMultiTrack('DCS.dcsuri', 'zczg-h5-close', 'WT.ti', 'zczg-h5-close')
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
        bizsource: getQueryString('bizsource') || 'mSite',
        source: '4',
        tgqdcode: getQueryString('tgqdcode') || '4VGMD5G7'
      })
    }
  },
  mounted() {
    document.title = '2018盛世掘金-金融界'
    var _this = this
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
        window.dcsMultiTrack('DCS.dcsuri', 'zczg-h5-success', 'WT.ti', 'zczg-h5-success')
      }
    }, {
      deep: true
    })
    this.$watch('err', err => {
      alert(err.msg)
    })
    // 微信分享
    window.InitWeChatShare({
      shareTitle: window.document.title,
      shareLink: window.location.href,
      shareDesc: '铸大国重器，挺民族脊梁！ A股投资盛宴全面开启，立即查看机会>>',
      shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/ssjj-h5-bg1.jpg',
      callback: function(wx) {

      }
    })
    if (getQueryString('frm') === 'xld') {
      this.xldType = true
    }
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
