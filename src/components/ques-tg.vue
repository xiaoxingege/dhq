<style lang="scss">
@import '../assets/css/reset.css';

.ques-tg {
    width: 100%;
    height: 3.1rem;
    background: url("../assets/images/ques-alading/tg-i1.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
.ques-tg-top {
    float: left;
    margin: 0.6rem 0 0 0.32rem;
    height: 1.42rem;
}
.ques-tg-top img {
    width: 1.1rem;
    height: 1.1rem;
    float: left;
    border-radius: 50%;
}
.ques-tg-top div {
    float: left;
    margin-left: 0.4rem;
}
.ques-tg-top div p {
    height: 0.5rem;
    line-height: 0.5rem;
}
.ques-tg-top div p strong {
    font-size: 0.34rem;
    font-weight: normal;
    color: #fff;
    float: left;
    margin-right: 0.1rem;
}
.ques-tg-top div p em,
.ques-tg-top div p span {
    font-size: 0.26rem;
    color: #a6a8be;
    float: left;
}
.ques-tg-top div p i {
    height: 0.2rem;
    width: 0;
    border-left: 1px #5d6071 solid;
    float: left;
    margin: 0.13rem 0.2rem;
}
.ques-tg-top div button {
    width: 1.38rem;
    height: 0.55rem;
    float: left;
    border-radius: 0.5rem;
    background: none;
    outline: none;
    margin-top: 0.05rem;
}
.ques-tg-top div button.ques-tg-focus {
    border: 1px #ff4040 solid;
    color: #ff4040;
    margin-right: 0.36rem;
}
.ques-tg-top div button.ques-tg-btn {
    border: 1px #e5e8f9 solid;
    color: #e5e8f9;
}
.ques-tg-top div button i {
    width: 0.14rem;
    height: 0.14rem;
    display: inline-block;
    background: url("../assets/images/ques-alading/tg-i3.png") no-repeat;
    background-size: 100% 100%;
    margin-right: 0.1rem;
}
.ques-msg {
    font-size: 0.24rem;
    width: 95%;
    padding: 0 2.5%;
    float: left;
    color: #a9abc1;
    height: 0.6rem;
    line-height: 0.32rem;
    margin-top: 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.ques-tg-list h3 {
    height: 0.8rem;
    line-height: 0.8rem;
    width: 95%;
    padding: 0 2.5%;
    font-size: 0.3rem;
    color: #555;
}
.ques-tg-list li {
    width: 100%;
    background-color: #fff;
    margin-bottom: 0.2rem;
}
.ques-tg-list-box {
    width: 95%;
    padding: 0.3rem 2.5%;
}
.ques-tg-list-box h5 {
    font-size: 0.34rem;
    color: #333;
    line-height: 0.5rem;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 0.2rem;
    font-weight: normal;
}
.ques-tg-list-box h5 a {
    color: #333;
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
</style>

<template>
<div class="ques-box">
    <ques-nav :title="quesNavTitle" @navBak="navBak" />
    <div class="ques-tg">
        <div class="ques-tg-top clearfix">
            <img :src="userInfo.headImage" />
            <div>
                <p>
                    <strong>{{userInfo.userName}}</strong>
                    <span>{{userInfo.typeDesc}}</span>
                    <i></i>
                    <em>231粉丝</em>
                </p>
                <button type="button" name="button" class="ques-tg-focus"><i></i>关注</button>
                <button type="button" name="button" class="ques-tg-btn" @click="search">问股</button>
            </div>
        </div>
        <p class="ques-msg">介绍：{{userInfo.intro}}</p>
    </div>
    <div class="ques-tg-list">
        <h3>看看TA的精彩回答</h3>
        <ul>
            <li v-for="item in dataList">
                <div class="ques-tg-list-box clearfix">
                    <h5><a :href="'http://a.jrj.com.cn:8081/dist/ques_alading/ques-detail.html?askid='+item.askId">{{item.content}}</a></h5>
                    <div>
                        <img :src="item.lastedAnswer.adviserUser.headImage" :userId="item.lastedAnswer.adviserUser.userId"/>
                        <p>
                            <span>{{item.lastedAnswer.adviserUser.userName}}</span>
                            <em>{{moment(parseInt(item.lastedAnswer.ctime))}}</em>
                            <strong v-if="userShow">{{item.lastedAnswer.content}}</strong>
                            <strong v-else>关注<a href="javascript:;" @click="authorize">金融界</a>，查看回答详情</strong>
                        </p>
                    </div>
                </div>
            </li>
            <!-- <li>
                <div class="ques-tg-list-box clearfix">
                    <h5>你好老师，平安银行这只股有做中线的价值吗， 我有500股先成本8.05元后边如何操作？ </h5>
                    <div>
                        <img src="../assets/images/ques-alading/tg-i4.png" />
                        <p>
                            <span>空道人</span>
                            <em>今天 14:31</em>
                            <strong>关注<a href="javascript:;">金融界</a>，查看回答详情</strong>
                        </p>
                    </div>
                </div>
            </li> -->
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
    return {
      quesNavTitle: '投顾问答',
      userShow: false
    }
  },
  computed: mapState({
    dataList: state => {
      return state.quesTg.dataList
    },
    userInfo: state => {
      return state.quesTg.userInfo
    }
  }),
  components: {
    quesNav
  },
  methods: {
    moment (time, format) {
      return moment(time).locale('zh-cn').calendar(null, {
        sameDay: '[今天] HH:mm',
        nextDay: '[明天] HH:mm',
        nextWeek: '下周',
        lastDay: '[昨天] HH:mm',
        lastWeek: '[上周] dddd',
        sameElse: 'DD/MM/YYYY'
      })
    },
    navBak () {
      history.go(-1)
    //   alert('navBak')
    },
    search () {
      window.location.href = 'http://a.jrj.com.cn:8081/dist/ques_alading/ques-ask.html'
    },
    authorize () {
      var url = window.location.href
      window.location.href = 'https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=O8FVpeZ0w75ekNMvaWf5oBa63WSEfnIi&scope=snsapi_userinfo&redirect_uri=' + url
    }
  },
  mounted () {
    if (window.basicUserInfo.userId) {
      this.userShow = true
    }
    document.title = '投顾问答'
    this.$store.dispatch('quesTg/fetch')
    if (getQueryString('code')) {
      this.$store.dispatch('quesDetail/authorize', {
        code: getQueryString('code'),
        redirectUri: window.location.href
      })
    }
  }
}
</script>
