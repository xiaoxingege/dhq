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
    background: url("../assets/images/ques-alading/success-i2.png") no-repeat;
    background-size: 100% 100%;
    float: left;
}
.ques-success-box div {
    width: 5rem;
    float: left;
    margin: 0 0 0.5rem 0.3rem;
    color: #fff;
}
.ques-success-box div h3{
    font-size: 0.42rem;
    font-weight: normal;
}
.ques-success-box div h4{
    font-size: 0.32rem;
    font-weight: normal;
}
.ques-success-box div p{
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
}
.ques-detail-list li .ques-detail-list-box {
    width: 95%;
    padding: 0.3rem 2.5%;
}
.ques-detail-list-box img {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
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
    font-size: 0.28rem;
    color: #555;
    line-height: 0.4rem;
    margin-top: 0.2rem;
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
    font-size: 0.24rem;
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
.ques-success-load-desc { position: absolute; bottom: 0; left: -0.7rem; width: 3.8rem; text-align: center; }
.ques-success-load-desc h3 { font-size: 0.38rem; color: #fff; font-weight: normal; }
.ques-success-load-desc p { font-size: 0.24rem; color: #fff; }
</style>

<template>
<div class="ques-box">
    <ques-nav :title="quesNavTitle" @navBak="navBak" :btnTxt="btnTxt" @navEvents="navEvents"/>
    <div class="ques-success">
        <div class="circleProgress_wrapper" v-if="quesSuccessLoadShow">
            <div class="wrapper right">
                <div class="circleProgress rightcircle"></div>
            </div>
            <div class="wrapper left">
                <div class="circleProgress leftcircle"></div>
            </div>
            <div class="ques-success-load">
                <h3>1815</h3>
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
                <p>2017年04月23日 10:52</p>
            </div>
            <div>
                <h4>预计会在10分钟内被回答</h4>
                <p>有回答时，会第一时间推送通知您 10:52</p>
            </div>
        </div>

    </div>
    <div class="ques-detail-list">
        <h3>其他精彩回答</h3>
        <ul>
            <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>投资达人空空空道人已回答该问题，<a href="javascript:;">点击查看 > </a></p>
                        <span>今天 14:31</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>投资达人空空空道人已回答该问题，<a href="javascript:;">点击查看 > </a></p>
                        <span>今天 14:31</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>投资达人空空空道人已回答该问题，<a href="javascript:;">点击查看 > </a></p>
                        <span>今天 14:31</span>
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

export default {
  data () {
    var _this = this
    setTimeout(function () { _this.quesSuccessLoadShow = false }, 1000)
    return {
      quesNavTitle: '问股',
      btnTxt: '再问一个',
      quesSuccessLoadShow: true
    }
  },
  computed: mapState({
        // CodeData: state => {
        //   return state.quesSearch.CodeData
        // }
  }),
  components: {
    quesNav
  },
  methods: {
    navBak () {
      alert('navBak')
    },
    navEvents () {
      alert('submit')
    }
  },
  mounted () {
    document.title = '问答详情'
  }
}
</script>
