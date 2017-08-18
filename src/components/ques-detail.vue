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
            <p><i></i>上证指数<span>（000001）</span>王老师明天大盘觉得怎么样？今天真的走微放量吗，但是尾盘刻意拉高，明天会是黑色星期五吗？</p>
            <strong>沉沉浮浮<i></i>2017年07月13日14:23</strong>
        </div>
    </div>
    <div class="ques-detail-list">
        <h3>以下为投顾回答（2）</h3>
        <ul>
            <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>关注<a href="javascript:;">金融界</a>，查看回答详情</p>
                        <strong>2107-02-13  14:31</strong>
                        <span class="focus"><i></i>关注</span>
                        <!-- <span>已关注</span> -->
                    </div>
                </div>
            </li>
            <li>
                <div class="ques-detail-list-box clearfix">
                    <img src="../assets/images/ques-alading/tg-i4.png" />
                    <div>
                        <h5>不败女王<span>-深圳新兰德</span></h5>
                        <p>比较强势，中线可以持有</p>
                        <strong>2107-02-13  14:31</strong>
                        <!-- <span class="focus"><i></i>关注</span> -->
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
                        <!-- <span class="focus"><i></i>关注</span> -->
                        <span>已关注</span>
                    </div>
                </div>
            </li>
        </ul>
        <p><i></i>以上内容仅代表个人观点，不构成投资建议<i></i></p>
    </div>
    <fix-bg v-if="fixBgShow"/>
    <ques-focus v-if="quesFocusShow" @focusClose="focusClose"/>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import fixBg from 'components/fix-bg'
import quesFocus from 'components/ques-focus'
import quesNav from 'components/ques-nav'

export default {
  data () {
    return {
      fixBgShow: true,
      quesFocusShow: true,
      quesNavTitle: '问答详情'
    }
  },
  computed: mapState({
        // CodeData: state => {
        //   return state.quesSearch.CodeData
        // }
  }),
  components: {
    fixBg,
    quesFocus,
    quesNav
  },
  methods: {
    focusClose () {
      this.fixBgShow = false
      this.quesFocusShow = false
    },
    navBak () {
      alert('navBak')
    }
  },
  mounted () {
    document.title = '问答详情'
  }
}
</script>
