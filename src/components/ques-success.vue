<style lang="scss">
@import '../assets/css/reset.css';

.ques-success {
    width: 100%;
    height: 3.7rem;
    background: url("../assets/images/ques-alading/success-i1.png") no-repeat;
    background-size: 100% 100%;
}
.ques-success-box {
    float: left;
    margin: 0.63rem 0 0 0.99rem;
}
.ques-success-box i {
    width: 0.88rem;
    height: 2.2rem;
    background: url("../assets/images/ques-alading/success-i2-1.png") no-repeat;
    background-size: 100% 100%;
    float: left;
}
.ques-success-box div {
    width: 5rem;
    float: left;
    margin: 0 0 0.5rem 0.3rem;
    color: #fff;
}
.ques-success-box div h3 {
    font-size: 0.42rem;
    font-weight: normal;
}
.ques-success-box div h4 {
    font-size: 0.32rem;
    font-weight: normal;
}
.ques-success-box div p {
    font-size: 0.26rem;
}
.ques-detail-list {
    width: 100%;
}
.ques-detail-list h3 {
    font-size: 0.3rem;
    color: #555;
    height: 0.8rem;
    line-height: 0.8rem;
    width: 95%;
    padding: 0 2.5%;
    font-weight: normal;
}
.ques-detail-list li {
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.2rem;
    position: relative;
}
.ques-tg-list-box {
    width: 95%;
    padding: 0.3rem 2.5%;
}
.ques-tg-list-box h5 {
    font-size: 0.34rem;
    color: #333;
    line-height: 0.5rem;
    border-bottom: 0.01rem #e6e6e6 solid;
    padding-bottom: 0.2rem;
}
.ques-tg-list-box h5 a{
    color: #333;
}
.ques-tg-list-box .niceLink {
    color: #333;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left:0;
    z-index: 1;
}
.ques-tg-list-box img {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    margin-top: 0.32rem;
    border-radius: 50%;
}
.ques-tg-list-box p {
    width: 6rem;
    float: left;
    margin: 0.3rem 0 0 0.2rem;
    position: relative;
}
.ques-tg-list-box p span {
    font-size: 0.26rem;
    color: #666;
    float: left;
    width: 100%;
}
.ques-tg-list-box p em {
    font-size: 0.24rem;
    color: #aaa;
    float: right;
    position: absolute;
    right: 0;
    top: 0;
}
.ques-tg-list-box p strong {
    font-size: 0.3rem;
    color: #555;
    float: left;
    font-weight: normal;
    margin-top: 0.1rem;
}
.ques-tg-list-box p strong a {
    color: #2e7cd7;
}
// 111
.circleProgress_wrapper {
    width: 2.46rem;
    height: 3.4rem;
    position: relative;
    float: left;
    margin: 0.2rem 0 0 2.51rem;
}

.wrapper {
    width: 1.24rem;
    height: 2.6rem;
    position: absolute;
    top: 0;
    overflow: hidden;
}

.right {
    right: 0;
}

.left {
    left: 0;
}

.circleProgress {
    width: 2.23rem;
    height: 2.23rem;
    border: 0.13rem solid #ffc85e;
    border-radius: 50%;
    position: absolute;
    top: 0;
    -webkit-transform: rotate(45deg);
    overflow: hidden;
}

.rightcircle {
    border-top: 0.13rem solid #fc7c77;
    border-right: 0.13rem solid #fc7c77;
    right: 0;
    -webkit-animation: circleProgressLoad_right 1s linear infinite;
}

.leftcircle {
    border-bottom: 0.13rem solid #fc7c77;
    border-left: 0.13rem solid #fc7c77;
    left: 0;
    -webkit-animation: circleProgressLoad_left 1s linear infinite;
}
@-webkit-keyframes circleProgressLoad_right {
    0% {
        -webkit-transform: rotate(45deg);
    }
    50% {
        -webkit-transform: rotate(225deg);
    }
    100% {
        -webkit-transform: rotate(225deg);
    }
}
@-webkit-keyframes circleProgressLoad_left {
    0% {
        -webkit-transform: rotate(45deg);
    }
    50% {
        -webkit-transform: rotate(45deg);
    }
    100% {
        -webkit-transform: rotate(225deg);
    }
}

.ques-success-load {
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    position: absolute;
    top: 0.1rem;
    left: 0.08rem;
    box-shadow: 0 0 0.1rem #ccc;
}

.ques-success-load h3 {
    font-size: 0.6rem;
    color: #ff5e33;
    margin-top: 0.4rem;
}

.ques-success-load p {
    font-size: 0.26rem;
    color: #ff5e33;
}
.ques-success-load-desc {
    position: absolute;
    bottom: 0;
    left: -0.7rem;
    width: 3.8rem;
    text-align: center;
}
.ques-success-load-desc h3 {
    font-size: 0.38rem;
    color: #fff;
    font-weight: normal;
}
.ques-success-load-desc p {
    font-size: 0.24rem;
    color: #fff;
}



</style>

<template>
<div class="ques-box" v-if="show">
    <ques-nav :title="quesNavTitle" @navBak="navBak" :btnTxt="btnTxt" @navEvents="navEvents" :bakShow="bakShow" />
    <div class="ques-success">
        <div class="circleProgress_wrapper" v-if="quesSuccessLoadShow">
            <div class="wrapper right">
                <div class="circleProgress rightcircle"></div>
            </div>
            <div class="wrapper left">
                <div class="circleProgress leftcircle"></div>
            </div>
            <div class="ques-success-load">
                <h3 v-text="num"></h3>
                <p>位投顾已推送</p>
            </div>
            <div class="ques-success-load-desc">
                <h3>正在努力</h3>
                <p>把你的提问推送给每一位投顾</p>
            </div>
        </div>
        <div class="ques-success-box" v-else>
            <i></i>
            <div>
                <h3>提问成功</h3>
                <p>{{moment(parseInt(showTime),'YYYY年MM月DD日 HH:mm')}}</p>
            </div>
            <div>
                <!-- <h4>有回答时，会通过百度消息通知您</h4> -->
                <p style="margin-top:0.3rem">有回答时，会通过百度消息通知您</p>
            </div>
        </div>

    </div>
    <div class="ques-detail-list">
        <h3>其他精彩回答</h3>
        <ul>
            <li v-for="item in dataList" v-if="jchdShow">
                <div class="ques-tg-list-box clearfix">
                    <h5 v-html="item.content"></h5>
                    <a :href="'http://itougu.jrj.com.cn/activity/app/ques-detail.jspa?askid='+item.askId+'&source=success'" class="niceLink" v-if="focusResult && focusShow"></a>
                    <!-- <a :href="'http://localhost:8082/dist/ques_alading/ques-detail.html?askid='+item.askId+'&source=success'" class="niceLink" v-if="focusResult"></a> -->

                    <a :href="'javascript:;'" class="niceLink" @click="authorize" v-else-if="!focusResult && focusShow"></a>
                    <div>
                        <img :src="item.lastedAnswer.adviserUser.headImage" :userId="item.lastedAnswer.adviserUser.userId"/>
                        <p>
                            <span>{{item.lastedAnswer.adviserUser.userName}}</span>
                            <em>{{moment(parseInt(item.lastedAnswer.ctime))}}</em>
                            <strong v-html="item.lastedAnswer.content" v-if="focusResult && focusShow"></strong>
                            <strong v-else-if="!focusResult && focusShow">关注<a href="javascript:;" @click="authorize">金融界</a>，查看回答详情</strong>
                            <strong v-else>请在手机百度APP中查看</strong>
                        </p>
                    </div>
                </div>
            </li>
            <li v-else>
                <div class="ques-tg-list-box clearfix">
                    <h5 v-html="item.askContent"></h5>
                    <!-- <a :href="'http://localhost:8082/dist/ques_alading/ques-detail.html?askid='+item.askId+'&source=success'" class="niceLink" v-if="focusResult"></a> -->
                    <a :href="'http://itougu.jrj.com.cn/activity/app/ques-detail.jspa?askid='+item.askId+'&source=success'" class="niceLink" v-if="focusResult && focusShow"></a>
                    <a :href="'javascript:;'" class="niceLink" @click="authorize" v-else-if="!focusResult && focusShow"></a>
                    <div>
                        <img :src="item.userInfo.headImage" :userId="item.userInfo.userId"/>
                        <p>
                            <span>{{item.userInfo.userName}}</span>
                            <em>{{moment(parseInt(item.answerTime))}}</em>
                            <strong v-html="item.answerContent" v-if="focusResult && focusShow"></strong>
                            <strong v-else-if="!focusResult && focusShow">关注<a href="javascript:;" @click="authorize">金融界</a>，查看回答详情</strong>
                            <strong v-else>请在手机百度APP中查看</strong>
                        </p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import quesNav from 'components/ques-nav'
import moment from 'moment'
import getQueryString from 'utils/getQueryString'

export default {
  data () {
    var _this = this
    setTimeout(function () {
      _this.quesSuccessLoadShow = false
      clearInterval(numAdSet)
    }, 1000)
    var numAdSet = setInterval(function () {
      _this.numAdd()
    }, 100)
    return {
      quesNavTitle: '问股',
      btnTxt: '再问一个',
      quesSuccessLoadShow: true,
      jchdShow: false,
      showTime: '1503625474595',
      num: 0,
      userShow: false,
      bakShow: true,
      focusShow: false,
      show: false
    }
  },
  computed: mapState({
    dataList: state => {
      return state.quesSuccess.dataList
    },
    userId: state => state.user.ssoId,
    focusResult: state => state.quesFocus.focusResult
  }),
  components: {
    quesNav
  },
  methods: {
    moment (time, format) {
      if (format) {
        return moment(time).format(format)
      } else {
        return moment(time).locale('zh-cn').calendar(null, {
          sameDay: '[今天] HH:mm',
          nextDay: '[明天] HH:mm',
          nextWeek: '下周',
          lastDay: '[昨天] HH:mm',
          lastWeek: '[上周] dddd'
        })
      }
    },
    navBak () {
      history.back()
    //   window.location.href = 'http://itougu.jrj.com.cn/activity/app/ques-ask.jspa'
    },
    navEvents () {
      window.location.href = 'http://itougu.jrj.com.cn/activity/app/ques-ask.jspa'
    },
    numAdd () {
      this.num = this.num + Math.floor(Math.random() * 900) + 100
    },
    authorize () {
      if (this.userId) {
        window.cambrian.subscribe({ data: {
          type: 'force', // 类型，optional-弱关注 force-强关注
          title: '金融界官方号', // 标题文字，字数限制：4-6个字
          describe: '关注后可及时收到回复', // 关注说明，字数限制：4-30个字
          button: '关注并继续' // 按钮文字，字数限制：2-6个字
        },
          success: function (res) {
            location.reload()
              // res结构如下，result字段：关注状态，0-未关注 1-新增关注 2-已关注
              // 如：{"status": 0, "msg":"subscribe:ok", "result": 1}
          },
          fail: function (res) {
              // res结构如下，可通过status、msg判断错误原因
              // 如：{"status": 100, "msg":"not login", "result": 0}
          },
          complete: function (res) {
              // res结构如下，
              // 如：{"status": 0, "msg":"subscribe:ok", "result": 2}
          }
        })
      } else {
        window.location.href = 'https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=O8FVpeZ0w75ekNMvaWf5oBa63WSEfnIi&scope=snsapi_userinfo&redirect_uri=' + window.location.href
      }
    }
  },
  mounted () {
    if (getQueryString('success') === 'true') {
      this.quesSuccessLoadShow = false
    } else {
      history.replaceState(null, '问答详情', window.location.href + '&success=true')
    }

    document.title = '问答详情'
    this.$store.dispatch('user/fetchFromBasicUserInfo')
    if (getQueryString('stockCode') === '' || !getQueryString('stockCode') || getQueryString('stockCode') === 'undefined') {
      this.jchdShow = false
      this.$store.dispatch('quesSuccess/jchd')
    } else {
      this.jchdShow = true
      this.$store.dispatch('quesSuccess/fetch', {
        stockCode: getQueryString('stockCode')
      })
    }
    if (getQueryString('showTime')) {
      this.showTime = getQueryString('showTime')
    }

    if (this.userId) {
      this.userShow = true
    } else {
      this.userShow = false
      if (getQueryString('code')) {
        this.$store.dispatch('quesDetail/authorize', {
          code: getQueryString('code'),
          redirectUri: window.location.href
        })
      }
    }
    this.$store.dispatch('quesFocus/jsSdk')
    window.dcsMultiTrack('DCS.dcsuri', 'TG_Msite_Baidu_success', 'WT.ti', 'TG_Msite_Baidu_success')
    var _this = this
    this.$watch('focusResult', focusResult => {
      if (focusResult === false) {
        window.cambrian.subscribe({ data: {
          type: 'force', // 类型，optional-弱关注 force-强关注
          title: '金融界官方号', // 标题文字，字数限制：4-6个字
          describe: '关注后可及时收到回复', // 关注说明，字数限制：4-30个字
          button: '关注并继续' // 按钮文字，字数限制：2-6个字
        },
          success: function (res) {
            location.reload()
                      // res结构如下，result字段：关注状态，0-未关注 1-新增关注 2-已关注
                      // 如：{"status": 0, "msg":"subscribe:ok", "result": 1}
          },
          fail: function (res) {
                      // res结构如下，可通过status、msg判断错误原因
                      // 如：{"status": 100, "msg":"not login", "result": 0}
          },
          complete: function (res) {
                      // res结构如下，
                      // 如：{"status": 0, "msg":"subscribe:ok", "result": 2}
          }
        })
      }
      window.cambrian.isBox({
        success: function (res) {
                // res结构如下，result字段，在手百环境返回ture，否则返回false
                // 如：{"result": true, "msg":"isBfalseox:ok", "status": 0}
          if (res.result) {
            _this.focusShow = true
          } else {
            _this.focusShow = false
          }
          _this.show = true
        }
      })
    })
  }
}
</script>
