<style>
body {
  background: url("../assets/images/pqng-activity/pqng-h5-bg.jpg") center 0 repeat-y #720a0b !important;
  font-family: '微软雅黑';
}

input,
button {
  outline: none;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/pqng-activity/pqng-h5-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 8.1rem;
}
.bg2 {
    background: url("../assets/images/pqng-activity/pqng-h5-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 5.78rem;
}
.bg3 {
    background: url("../assets/images/pqng-activity/pqng-h5-bg3-1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 14.53rem;
}
.bg4 {
    background: url("../assets/images/pqng-activity/pqng-h5-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 5.3rem;
    margin-bottom: 3rem;
}
.box-con {
    height: 100%;
    position: relative;
}
.nav-fixed {
    width: 1.2rem;
    height: 1.2rem;
    position: fixed;
    top: 50%;
    right: 0;
    background: url("../assets/images/pqng-activity/pqng-h5-nav.png") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.footer {
    width: 6.74rem;
    height: 3.09rem;
    position: fixed;
    bottom: -0.06rem;
    left: 0.38rem;
    background: url("../assets/images/pqng-activity/pqng-h5-footer-2.png") center bottom no-repeat;
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
    width: 100%;
    height: 10.18rem;
    background: url("../assets/images/pqng-activity/pqng-h5-pop-1.png") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;
    top: 50%;
    margin-top: -5.09rem;
    left: 0;
    z-index: 12;
}
.pop-con {
    width: 6.35rem;
    height: 3.16rem;
    position: absolute;
    bottom: 0;
    left: 0.68rem;
}
.bg1 button {
    width: 1.99rem;
    height: 2.03rem;
    background: url("../assets/images/pqng-activity/pqng-h5-btn1.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 4.4rem;
    left: 2.7rem;
    border: none;
}
.bg2 button {
    width: 1.15rem;
    height: 1.16rem;
    background: url("../assets/images/pqng-activity/pqng-h5-btn2.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0.96rem;
    right: 1.69rem;
    border: none;
}
.pop button {
    width: 1.71rem;
    height: 0.36rem;
    position: absolute;
    bottom: 1rem;
    left: 2.66rem;
    border: none;
    background: none;
}
.pop span {
    width: 4.77rem;
    height: 0.65rem;
    line-height: 0.65rem;
    text-align: center;
    position: absolute;
    top: 0.81rem;
    left: 0.8rem;
    color: #fff;
    font-size: 0.6rem;
    font-weight: bold;
}
.bg2 span {
    width: 3.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    text-align: center;
    position: absolute;
    bottom: 1.01rem;
    left: 1.32rem;
    color: #fff;
    font-size: 0.4rem;
}
.bg4 span {
    width: 3.3rem;
    height: 0.6rem;
    line-height: 0.6rem;
    position: absolute;
    top: 1.36rem;
    right: 0.74rem;
    color: #fff;
    font-size: 0.4rem;
}
.footer .box-con div {
    width: 4.72rem;
    height: 0.68rem;
    line-height: 0.68rem;
    position: absolute;
    top: 1.12rem;
    left: 1.01rem;
    color: #fff;
    font-size: 0.4rem;
    text-align: center;
}
.footer .box-con div em {
    width: 0.5rem;
    height: 0.68rem;
    background: url("../assets/images/pqng-activity/pqng-h5-wechat.png") center center no-repeat;
    background-size: 90%;
    display: inline-block;
}
.footer .box-con div span {
    position: relative;
    top: -0.2rem;
}
.footer button {
    width: 2.43rem;
    height: 0.45rem;
    position: absolute;
    bottom: 0.63rem;
    right: 1.01rem;
    border: none;
    background: none;
}
@-webkit-keyframes pulse {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
@keyframes pulse {
    0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}
.pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
}
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}
.animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
.close {
    position: absolute;
    width: 0.4rem;
    height: 0.38rem;
    top: 0.3rem;
    right: 0.3rem;
    border: 0.02rem solid #ccc;
    color: #ccc;
    text-align: center;
    line-height: 0.4rem;
    font-size: 0.18rem;
    border-radius: 50%;
}
</style>

<template>
<div class="box">
  <div class="bg1">
    <div class="box-con">
      <button type="button" name="button" class="pulse animated infinite" @click="popClick"></button>
    </div>
  </div>
  <div class="bg2">
    <div class="box-con">
      <span v-text="wxid"></span>
      <button type="button" name="button" class="pulse animated infinite" @click="popClick"></button>
    </div>
  </div>
  <div class="bg3">
  </div>
  <div class="bg4">
    <div class="box-con">
      <span v-text="wxid"></span>
    </div>
  </div>
  <div class="nav-fixed" @click="popClick">
  </div>
  <div class="footer">
    <div class="box-con">
      <div>
        <em></em>
        <span v-text="wxid"></span>
      </div>
      <button type="button" name="button" class='btn' :data-clipboard-text="wxid" @click="copOpenwx" tt-data-click tt-data-convertid="78777396907" tt-data-eventtype="wechat"></button>
    </div>
  </div>
  <div class='fixBg' v-if="popShow"></div>
  <div class="pop" v-if="popShow">
    <div class="close" @click="close">X</div>
    <div class="pop-con">
      <span v-text="wxid"></span>
      <button type="button" name="button" class='btn' :data-clipboard-text="wxid" @click="copOpenwx" tt-data-click tt-data-convertid="78777396907" tt-data-eventtype="wechat"></button>
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
import Clipboard from '../assets/plugins/clipboard/clipboard.min.js'
window.Clipboard = Clipboard

export default {
  data() {
    return {
      popShow: false,
      codeImg: '',
      wxid: ''
    }
  },
  computed: mapState({}),
  components: {},
  methods: {
    close() {
      this.popShow = false
    },
    popClick(type) {
      this.popShow = true
      this.popText = type
      window.dcsMultiTrack('DCS.dcsuri', 'pqng-activity-clickPop', 'WT.ti', 'pqng-activity-clickPop')
    },
    copOpenwx() {
      new Clipboard('.btn')
      window.dcsMultiTrack('DCS.dcsuri', 'pqng-activity-openWx', 'WT.ti', 'pqng-activity-openWx')
      location.href = 'weixin://'
      this.popShow = false
    }
  },
  mounted() {
    document.title = '加微信 送盘前牛股'
    var _this = this
    $.ajax({
      url: 'http://wx.jrj.com.cn/jrj/open.jsp?action=getImage&actId=1',
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
        shareDesc: '这个微信号刷爆了朋友圈，每天免费送牛股，不信试试',
        shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/pqng-h5-share-img.jpg',
        callback: function(wx) {

        }
      })

    })
  }
}
</script>
