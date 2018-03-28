<style>
body {
  background-color: #12122f !important;
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
    background: url("../assets/images/zcpz-activity/zcpz-bg1.jpg") center 0 no-repeat;
    height: 11.55rem;
    background-size: 100% 100%;
    position: relative;
}
.bg2 {
    background: url("../assets/images/zcpz-activity/zcpz-bg2.jpg") center 0 no-repeat;
    height: 11.54rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/zcpz-activity/zcpz-bg3.jpg") center 0 no-repeat;
    height: 11.55rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.footer {
    width: 100%;
    height: 1.6rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/zcpz-activity/zcpz-footer.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
#divdown1 {
    position: absolute;
    font-size: 0.32rem;
    top: 0.64rem;
    left: 0.26rem;
    font-family: Consolas, Monaco, monospace;
    color: #492828;
}
.footer div span {
    width: 1rem;
    height: 0.65rem;
    line-height: 0.65rem;
    letter-spacing: 0.26rem;
    text-indent: 0.17rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    border-radius: 0.15rem;
    color: #fff;
    margin-right: 0.36rem;
}
.footer a {
    width: 1.5rem;
    height: 0.65rem;
    background: url("../assets/images/zcpz-activity/zcpz-btn2.png") center 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0.64rem;
    right: 0.3rem;
}
.bg3 .box-con a {
    width: 4rem;
    height: 0.92rem;
    background: url("../assets/images/zcpz-activity/zcpz-btn1.png") center 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 4.61rem;
    left: 1.75rem;
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
    width: 6.9rem;
    height: 4rem;
    background: url("../assets/images/zcpz-activity/zcpz-pop.jpg") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;
    top: 50%;
    margin-top: -2rem;
    left: 50%;
    margin-left: -3.45rem;
    z-index: 12;
}
.pop-con {
    width: 100%;
    height: 100%;
}
.pop-con h3 {
    width: 100%;
    height: 0.82rem;
    line-height: 0.82rem;
    float: left;
    text-align: center;
    font-size: 0.36rem;
    color: #fff;
    font-weight: normal;
}
.pop-con .pop-text1 div {
    width: 100%;
    height: 0.7rem;
    font-size: 0.28rem;
    float: left;
    margin: 0.52rem 0 0.36rem;
}
.pop-con .pop-text1 div span {
    width: 0.7rem;
    float: left;
    line-height: 0.7rem;
    margin-left: 1.1rem;
}
.pop-con .pop-text1 input {
    width: 3.6rem;
    height: 0.5rem;
    padding: 0.1rem 0.2rem;
    background-color: #fff;
    color: #000;
    font-size: 0.2rem;
    float: left;
    border: 0.01rem solid #dcdcdc;
}
.pop-con button {
    width: 3rem;
    height: 0.76rem;
    background: url("../assets/images/zcpz-activity/zcpz-btn3.png") 0 0 no-repeat;
    background-size: 100%;
    float: left;
    text-align: center;
    line-height: 0.76rem;
    font-size: 0.36rem;
    color: #fff;
    margin-left: 1.95rem;
    border: none;
    cursor: pointer;
}
.pop-con .pop-text1 p {
    width: 100%;
    float: left;
    font-size: 0.24rem;
    // color: #009fe9;
    text-align: center;
    margin-top: 0.33rem;
}
.pop-con .pop-text1 em {
    position: absolute;
    top: 1.46rem;
    right: 1.2rem;
    background: #fff;
    border: 1px red solid;
    border-radius: 0.05rem;
    padding: 0.05rem;
    font-size: 0.2rem;
}
.pop-con .pop-text2 div {
    width: 100%;
    margin-top: 0.5rem;
    line-height: 0.6rem;
    font-size: 0.28rem;
    float: left;
    text-align: center;
}
.pop-con .pop-text2 button {
    margin-top: 0.4rem;
}
.close {
    width: 0.34rem;
    height: 0.34rem;
    background: url("../assets/images/zcpz-activity/zcpz-close.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0.25rem;
    right: 0.2rem;
    cursor: pointer;
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
    <div class="box-con">
      <a href="javascript:;" @click="clickPop"></a>
    </div>
  </div>

  <div class="footer">
    <div class="box-con">
      <div id="divdown1">
        <span id="text-day" class="text-day">00</span><span id="text-hour" class="text-hour">00</span><span id="text-min" class="text-min">00</span><span id="text-sec" class="text-sec">00</span>
      </div>
      <a href="javascript:;" @click="clickPop"></a>
    </div>
  </div>
  <div class='fixBg' v-if="popShow"></div>
  <div class="pop" v-if="popShow">
    <div class="close" @click="close"></div>
    <div class="pop-con">
      <div class="pop-text1" v-if="popText === 1">
        <h3>预约领取</h3>
        <div>
          <span>手机</span>
          <input type="text" name="" value="" placeholder="请输入手机号" v-model="phone" />
        </div>
        <em v-html="txtHtml" v-if="txtShow"></em>
        <button type="button" name="button" @click="submit">立即预约</button>
        <p>稍后将由金融界智能投服助理联系您发放。</p>
      </div>
      <div class="pop-text2" v-if="popText === 2">
        <h3>预约成功！</h3>
        <div>
          <p>工作人员将会在3个工作日内联系您发放 </p>
          <p>《超豪华资产配置礼包》</p>
        </div>
        <button type="button" name="button" @click="close">知道了</button>
      </div>
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
import getQueryString from 'utils/getQueryString'

export default {
  data() {
    $(function() {
      // 微信分享
      window.InitWeChatShare({
        shareTitle: window.document.title,
        shareLink: window.location.href,
        shareDesc: '聪明投资，从资产配置开始！金融界送您资产配置大礼包，一键免费预约~',
        shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/zcpz-share-img.jpg',
        callback: function(wx) {

        }
      })
    })
    return {
      popShow: false,
      txtShow: false,
      txtHtml: '',
      popText: 1
    }
  },
  computed: mapState({
    type: state => {
      return state.reservation.type
    }
  }),
  components: {},
  methods: {
    clickPop() {
      this.popShow = true
      window.dcsMultiTrack('DCS.dcsuri', 'zcpz-activity-record', 'WT.ti', 'zcpz-activity-record')
    },
    close() {
      this.popText = 1
      this.popShow = false
    },
    submit() {
      var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
      if (!this.phone || this.phone.length === 0) {
        this.txtShow = true
        this.txtHtml = '手机号不能为空！'
        return
      } else if (!reg.test(this.phone)) {
        this.txtShow = true
        this.txtHtml = '手机号输入不正确！'
        return
      }
      this.$store.dispatch('reservation/fetch', {
        aid: '822489183235452928',
        userName: '',
        phone: this.phone,
        bizsource: getQueryString('bizsource') || 'mSite',
        source: '4',
        tgqdcode: getQueryString('tgqdcode') || 'M9837UQL'
      })
    }
  },
  mounted() {
    var _this = this
    this.$watch('txtShow', txtShow => {
      setTimeout(function() {
        _this.txtShow = false
        _this.txtHtml = ''
      }, 1000)
    })
    this.$watch('type', type => {
      if (type) {
        this.popText = 2
      }
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

    function ShowCountDown(year, month, day, hours, minutes, seconds) {
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
      ShowCountDown(2018, 2, 10, 0, 0, 0)
    }, 1000)
  }
}
</script>
