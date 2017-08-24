<style lang="scss">
@import '../assets/css/reset.css';

.ques-detail {
    width: 100%;
}
.ques-detail div {
    width: 95%;
    padding: 0.3rem 2.5%;
    background-color: #fff;
}
.ques-detail div p {
    font-size: 0.3rem;
}
.ques-detail div p span {
    color: #2e7cd7;
}
.ques-detail div p i {
    width: 0.33rem;
    height: 0.28rem;
    float: left;
    background: url("../assets/images/ques-alading/detail-i1.png") no-repeat;
    background-size: 100% 100%;
    margin-top: 0.05rem;
}
.ques-detail div strong {
    font-size: 0.24rem;
    color: #aaa;
    display: block;
    font-weight: normal;
    margin-top: 0.2rem;
}
.ques-detail div strong i {
    height: 0.2rem;
    width: 0;
    border-left: 1px #e6e6e6 solid;
    display: inline-block;
    margin: 0 0.15rem;
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
}
.ques-detail-list li .ques-detail-list-box {
    width: 95%;
    padding: 0.3rem 2.5%;
}
.ques-detail-list-box img {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    border-radius: 50%;
}
.ques-detail-list-box div {
    width: 6.12rem;
    float: left;
    margin-left: 0.18rem;
    position: relative;
}
.ques-detail-list-box div h5 {
    font-size: 0.26rem;
    color: #666;
    font-weight: normal;
}
.ques-detail-list-box div h5 span {
    color: #aaa;
}
.ques-detail-list-box div p {
    font-size: 0.3rem;
    color: #555;
    line-height: 0.4rem;
    margin: 0.2rem 0;
}
.ques-detail-list-box div p a {
    color: #2e7cd7;
}
.ques-detail-list-box div strong {
    display: block;
    font-size: 0.24rem;
    color: #aaa;
    font-weight: normal;
}
.ques-detail-list-box div > span {
    font-size: 0.3rem;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 0.35rem;
    color: #aaa;
}
.ques-detail-list-box div > span.focus {
    color: #ff4040;

}
.ques-detail-list-box div > span.focus i {
    width: 0.14rem;
    height: 0.14rem;
    background: url("../assets/images/ques-alading/tg-i3.png") no-repeat;
    background-size: 100% 100%;
    margin: 0.1rem;
    float: left;
}
.ques-detail-list > p {
    text-align: center;
    font-size: 0.26rem;
    color: #bbb;
}
.ques-detail-list > p i {
    width: 0.3rem;
    height: 0.08rem;
    overflow: hidden;
    border-top: 1px #dbdbdb solid;
    display: inline-block;
    margin: 0 0.1rem;
}
</style>

<template>
<div class="ques-box">
    <ques-nav :title="quesNavTitle" @navBak="navBak" />
    <div class="ques-detail">
        <div>
            <p><i></i>{{askData.textContent}}</p>
            <strong>{{askData.answeredTimes}}个回答<i></i>{{moment(parseInt(askData.ctime),'YYYY年MM月DD日 HH:mm')}}</strong>
        </div>
    </div>
    <div class="ques-detail-list">
        <h3>以下为投顾回答</h3>
        <ul>
            <li v-for="item in dataList">
                <div class="ques-detail-list-box clearfix">
                    <img :src="item.adviserUser.headImage" />
                    <div>
                        <h5>{{item.adviserUser.userName}}<span>-{{item.adviserUser.company}}</span></h5>
                        <p v-if="userShow">{{item.textContent}}</p>
                        <p v-else>关注<a href="javascript:;" @click="authorize">金融界</a>，查看回答详情</p>
                        <strong>{{moment(parseInt(item.ctime),'YYYY-MM-DD HH:mm')}}</strong>
                        <span class="focus"><i></i>关注</span>
                        <!-- <span>已关注</span> -->
                    </div>
                </div>
            </li>
            <!-- <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>比较强势，中线可以持有</p>
                        <strong>2107-02-13  14:31</strong>
                        <span>已关注</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>平安银行这只股有做中线的价值吗，我有5000 股先成本8.05元后边如何操作</p>
                        <strong>2107-02-13  14:31</strong>
                        <span>已关注</span>
                    </div>
                </div>
            </li> -->
        </ul>
        <p><i></i>以上内容仅代表个人观点，不构成投资建议<i></i></p>
    </div>
    <fix-bg v-if="fixBgShow"/>
    <ques-focus v-if="quesFocusShow" @focusClose="focusClose"/>
    <ques-license @licenseClose="licenseClose" v-if="quesLicenseShow"/>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import moment from 'moment'
import fixBg from 'components/fix-bg'
import quesFocus from 'components/ques-focus'
import quesNav from 'components/ques-nav'
import quesLicense from 'components/ques-license'
import getQueryString from 'utils/getQueryString'

export default {
  data () {
    return {
      fixBgShow: false,
      quesFocusShow: false,
      quesLicenseShow: false,
      quesNavTitle: '问答详情',
      userShow: false
    }
  },
  computed: mapState({
    dataList: state => {
      return state.quesDetail.dataList
    },
    askData: state => {
      return state.quesDetail.askData
    }
  }),
  components: {
    fixBg,
    quesFocus,
    quesNav,
    quesLicense
  },
  methods: {
    moment (time, format) {
      return moment(time).format(format)
    },
    focusClose () {
      this.fixBgShow = false
      this.quesFocusShow = false
    },
    licenseClose () {
      this.fixBgShow = false
      this.quesLicenseShow = false
    },
    navBak () {
      history.go(-1)
    },
    authorize () {
      window.location.href = 'https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=O8FVpeZ0w75ekNMvaWf5oBa63WSEfnIi&scope=snsapi_userinfo&redirect_uri=' + 'http://a.jrj.com.cn:8081/dist/ques_alading/ques-detail.html'
    }
  },
  mounted () {
    document.title = '问答详情'
    if (window.basicUserInfo.userId) {
      this.userShow = true
    } else {
      this.userShow = false
      if (getQueryString('code')) {
        this.$store.dispatch('quesDetail/authorize', {
          code: getQueryString('code'),
          redirectUri: 'http://a.jrj.com.cn:8081/dist/ques_alading/ques-detail.html'
        })
      }
    }
    this.$store.dispatch('quesDetail/fetch', {
      askid: getQueryString('askid')
    })
  }
}
</script>
