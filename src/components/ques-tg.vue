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
    border-radius: 0.5rem;
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
.ques-tg-list-box img {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    margin-top: 0.32rem;
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
    <div class="ques-tg">
        <div class="ques-tg-top clearfix">
            <img src="../assets/images/ques-alading/tg-i2.png" />
            <div>
                <p>
                    <strong>空空道人</strong>
                    <span>资深达人</span>
                    <i></i>
                    <em>231粉丝</em>
                </p>
                <button type="button" name="button" class="ques-tg-focus"><i></i>关注</button>
                <button type="button" name="button" class="ques-tg-btn">问顾</button>
            </div>
        </div>
        <p class="ques-msg">介绍：曾担任某私募操盘手，拥有十余年的私募操盘经验，精资金管理，波浪理论，趋势分析等精资金管理，波浪理论，趋势分析等精资金管理，波浪理论，趋势分析等精资金管理，波浪理论，趋势分析等</p>
    </div>
    <div class="ques-tg-list">
        <h3>看看TA的精彩回答</h3>
        <ul>
            <li>
                <div class="ques-tg-list-box clearfix">
                    <h5>你好老师，平安银行这只股有做中线的价值吗， 我有500股先成本8.05元后边如何操作？ </h5>
                    <div>
                        <img src="../assets/images/ques-alading/tg-i4.png" />
                        <p>
                            <span>空道人</span>
                            <em>今天 14:31</em>
                            <strong>震荡反弹中，但是反弹力度较弱</strong>
                        </p>
                    </div>
                </div>
            </li>
            <li>
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
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'

export default {
  data () {
    return {}
  },
  computed: mapState({
        // CodeData: state => {
        //   return state.quesSearch.CodeData
        // }
  }),
  components: {

  },
  methods: {
        // searchInput (value) {
        //   this.$store.dispatch('quesSearch/fetch', {
        //     key: value
        //   })
        // }
  },
  mounted () {
    document.title = '投顾问答'
        // this.$watch('CodeData', CodeData => {
        //   this.searchDataType = true
        //   if (CodeData.length === 0) {
        //     this.searchNo = true
        //     this.dataType = false
        //   } else {
        //     this.searchNo = false
        //     this.dataType = true
        //   }
        // })
  }
}
</script>
