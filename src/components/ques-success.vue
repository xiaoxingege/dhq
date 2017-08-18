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
</style>

<template>
<div class="ques-box">
    <ques-nav :title="quesNavTitle" @navBak="navBak" :btnTxt="btnTxt" @navEvents="navEvents"/>
    <div class="ques-success">
        <div class="ques-success-box">
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
        <!-- <div>
            <p><i></i>上证指数<span>（000001）</span>王老师明天大盘觉得怎么样？今天真的走微放量吗，但是尾盘刻意拉高，明天会是黑色星期五吗？</p>
            <strong>沉沉浮浮<i></i>2017年07月13日14:23</strong>
        </div> -->
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
    return {
      quesNavTitle: '问股',
      btnTxt: '再问一个'
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
