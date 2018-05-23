<style>
body {
  background-color: #d20001 !important;
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
    background: url("../assets/images/cgzf-activity/cgzf-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 8.79rem;
}
.bg2 {
    background: url("../assets/images/cgzf-activity/cgzf-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 15.9rem;
}
.bg3 {
    background: url("../assets/images/cgzf-activity/cgzf-bg3.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 11.6rem;
}
.box-con {
    height: 100%;
    position: relative;
}
.footer {
    width: 100%;
    height: 1.52rem;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/cgzf-activity/cgzf-footer.jpg") center bottom no-repeat;
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
    width: 6.5rem;
    height: 4.3rem;
    position: fixed;
    top: 50%;
    margin-top: -2.15rem;
    left: 50%;
    margin-left: -3.25rem;
    z-index: 12;
    background-color: #ffb924;
    border-radius: 0.2rem;
}
.pop-con {
    float: left;
    width: 100%;
}
.pop-con strong {
    font-size: 0.4rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    float: left;
    color: #000;
    margin-top: 0.7rem;
}
.pop-con h1 {
    text-align: center;
    color: #ca0001;
    font-size: 0.4rem;
    margin-top: 0.7rem;
}
.pop-con div {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    margin-top: 0.33rem;
    font-size: 0.3rem;
    color: #1d1d1d;
}
.pop-con div span {
    font-size: 0.3rem;
    line-height: 0.8rem;
    float: left;
    margin-left: 0.5rem;
}
.pop-con div input {
    width: 3.72rem;
    height: 0.38rem;
    padding: 0.2rem;
    border: 0.01rem #a3a3a3 solid;
    font-size: 0.3rem;
    color: #474747;
    float: left;
}
.pop-con button {
    width: 4.33rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    color: #ffe3b1;
    border: none;
    font-size: 0.3rem;
    position: absolute;
    bottom: 0.67rem;
    left: 1.09rem;
    background-color: #ca0001;
    border-radius: 0.5rem;
}
.close {
    width: 0.46rem;
    height: 0.45rem;
    background-size: 100%;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    cursor: pointer;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.45rem;
    color: #000;
}
.popClick3 {
    width: 100%;
    height: 100%;
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
  <div class="footer">
    <div class="box-con">
      <div class="popClick3" @click="popClick(1)"></div>
    </div>
  </div>
  <div class='fixBg' v-if="popShow"></div>
  <div class="pop" v-if="popShow">
    <div class="close" @click="close">X</div>
    <div class="pop-con">
      <div class="pop-text1" v-if="popText === 1">
        <h1>预约领取</h1>
        <div>
          <span>手机号：</span>
          <input type="text" name="" value="" v-model="phone" placeholder="请输入您的手机号码">
          <em v-html="txtHtml" v-if="txtShow"></em>
        </div>
        <button type="button" name="button" @click="joinSubmit">马上领取</button>
      </div>
      <div class="pop-text2" v-else-if="popText === 2">
        <h1>预约成功</h1>
        <div>稍后会有工作人员与您联系<br />请保持手机畅通</div>
        <button type="button" name="button" @click="close">好的</button>
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
    return {
      popShow: false,
      popText: 1,
      txtShow: false,
      txtHtml: ''
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
    popClick(type) {
      this.popShow = true
      this.popText = type
      this.phone = ''
      window.dcsMultiTrack('DCS.dcsuri', 'cgzf-activity-popClick', 'WT.ti', 'cgzf-activity-popClick')
    },
    close() {
      this.popShow = false
    },
    joinSubmit() {
      if (!this.type) {
        alert('提交中')
        return
      }
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
        aid: '841000458974244864',
        userName: '',
        phone: this.phone,
        bizsource: getQueryString('bizsource') || 'YG_WX',
        source: '4',
        tgqdcode: getQueryString('tgqdcode') || 'R35E9BFW'
      })
      window.dcsMultiTrack('DCS.dcsuri', 'cgzf-activity-joinSubmit', 'WT.ti', 'cgzf-activity-joinSubmit')
    }
  },
  mounted() {
    document.title = '聚焦春季热点，开启三月红利行动'
    var _this = this
    window.InitWeChatShare({
      shareTitle: window.document.title,
      shareLink: window.location.href,
      shareDesc: 'AI工作室红利行动，带你抓3月金股！',
      shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/cgzf-share-img.jpg',
      callback: function(wx) {

      }
    })
    this.$watch('type', type => {
      if (type) {
        this.popText = 2
      }
    })
    this.$watch('txtShow', txtShow => {
      setTimeout(function() {
        _this.txtShow = false
        _this.txtHtml = ''
      }, 1000)
    })
  }
}
</script>
