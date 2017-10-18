<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/wangLun-activity/wangLun-h5-b1-1.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 8.04rem;
}
.bg2 {
    background: url("../assets/images/wangLun-activity/wangLun-h5-b2.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 3.08rem;
}
.bg3 {
    background: url("../assets/images/wangLun-activity/wangLun-h5-b3.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 7.2rem;
}
.bg4 {
    background: url("../assets/images/wangLun-activity/wangLun-h5-b4.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 7.47rem;
}
.bg5 {
    background: url("../assets/images/wangLun-activity/wangLun-h5-b5.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 7.78rem;
}
.bg6 {
    background: url("../assets/images/wangLun-activity/wangLun-h5-b6.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 4.93rem;
}
.box-con {
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
// .nav-fixed {
//     padding-top: 111px;
//     width: 164px;
//     height: 241px;
//     position: fixed;
//     top: 30%;
//     right: 3%;
//     background: url("../assets/images/wangLun-activity/wangLun-web-nav.png") center 0 no-repeat;
//     z-index: 10;
// }
// .nav-fixed a {
//     width: 164px;
//     height: 41px;
//     float: left;
// }
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
    width: 6.43rem;
    height: 7.66rem;
    background: url("../assets/images/wangLun-activity/wangLun-pop-bg2.jpg") 0 0 repeat-y;
    position: fixed;
    top: 50%;
    margin-top: -3.83rem;
    left: 50%;
    margin-left: -3.21rem;
    z-index: 12;
    border-radius: 0.15rem;
}
.pop .pop-con1 h3 {
    font-size: 0.28rem;
    color: #ffe60c;
    text-align: center;
    font-family: '微软雅黑';
    margin-top: 0.4rem;
}
.pop .pop-con1 div {
    width: 100%;
    clear: both;
    font-size: 0.18rem;
    color: #fff;
    margin: 0.3rem 0;
}
.pop .pop-con1 div p {
    text-indent: 0.4rem;
}
.pop .pop-con1 ul {
    width: 100%;
    min-height: 0.4rem;
    line-height: 0.4rem;
    text-indent: 0.6rem;
}
.pop .pop-con1 ul li {
    float: left;
    padding-right: 0.2rem;
    cursor: pointer;
}
.pop .pop-con1 a {
    width: 1.81rem;
    height: 0.61rem;
    background: url("../assets/images/wangLun-activity/wangLun-web-button.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0.25rem;
    left: 2.3rem;
    text-align: center;
    line-height: 0.53rem;
    color: #ffe60c;
    font-size: 0.26rem;
}
.yl {
    color: #ffe60c;
}
.bg1 a {
    width: 5.66rem;
    height: 0.81rem;
    position: absolute;
    bottom: 1.08rem;
    left: 0.96rem;
}
.pop-return {
    width: 5.43rem;
    height: 3.41rem;
    padding: 0.62rem 0.41rem 0.28rem 1.01rem;
    background: url("../assets/images/wangLun-activity/wangLun-web-pop-bg2.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -2.15rem;
    left: 50%;
    margin-left: -3.42rem;
    z-index: 12;
}
.pop-return h3 {
    width: 100%;
    text-align: center;
    float: left;
    font-size: 0.4rem;
    color: #ffe60c;
    font-family: '黑体';
    margin-top: 0.2rem;
}
.pop-return p {
    width: 100%;
    text-align: center;
    float: left;
    margin-top: 0.15rem;
    font-size: 0.28rem;
    font-family: '黑体';
    color: #fff;
    line-height: 0.5rem;
}
.pop-return a {
    width: 1.97rem;
    height: 0.53rem;
    position: absolute;
    bottom: 0.71rem;
    right: 2.11rem;
}
.bg3 a {
    position: absolute;
}
.bg3 .l1 {
    width: 2.77rem;
    height: 0.49rem;
    left: 0.54rem;
    top: 1.29rem;
}
.bg3 .l2 {
    width: 2.77rem;
    height: 0.49rem;
    right: 0.46rem;
    top: 1.29rem;
}
.bg3 .l3 {
    width: 3.03rem;
    height: 0.49rem;
    left: 0.34rem;
    bottom: 2.24rem;
}
.bg3 .l4 {
    width: 2.77rem;
    height: 0.49rem;
    right: 0.49rem;
    bottom: 2.24rem;
}
.bg4 a {
    width: 100%;
    height: 6.32rem;
    position: absolute;
    bottom: 0;
}
.bg6 a {
    position: absolute;
    width: 3.36rem;
    height: 0.9rem;
}
.bg6 .l1 {
    top: 1.02rem;
    left: 0.3rem;
}
.bg6 .l2 {
    top: 1.02rem;
    right: 0.29rem;
}
.bg6 .l3 {
    top: 2.08rem;
    left: 0.3rem;
}
.bg6 .l4 {
    top: 2.08rem;
    right: 0.29rem;
}
// .nav-fixed .l1 {
//     position: absolute;
//     width: 164px;
//     height: 111px;
//     top: 0;
//     left: 0;
// }
</style>

<template>
<div class="box">
    <div class="bg1">
        <div class="box-con">
            <a href="javascript:;" @click="popClick"></a>
        </div>
    </div>
    <div class="bg2">
    </div>
    <div class="bg3">
        <div class="box-con">
            <a href="http://itougu.jrj.com.cn/live/70" target="_blank" class="l1"></a>
            <a href="http://itougu.jrj.com.cn/live/70" target="_blank" class="l2"></a>
            <a href="http://itougu.jrj.com.cn/live/70" target="_blank" class="l3"></a>
            <a href="http://itougu.jrj.com.cn/account/adviser/091124010076736396/1" target="_blank" class="l4"></a>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <a href="http://itougu.jrj.com.cn/tips/10150.jspa" target="_blank"></a>
        </div>
    </div>
    <div class="bg5">
    </div>
    <div class="bg6">
        <div class="box-con">
            <a href="http://itougu.jrj.com.cn/view/163461.jspa" target="_blank" class="l1"></a>
            <a href="http://itougu.jrj.com.cn/view/169262.jspa" target="_blank" class="l2"></a>
            <a href="http://itougu.jrj.com.cn/view/22083.jspa" target="_blank" class="l3"></a>
            <a href="http://itougu.jrj.com.cn/view/28619.jspa" target="_blank" class="l4"></a>
        </div>
    </div>
    <!-- <div class="nav-fixed">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="http://itougu.jrj.com.cn/live/70" target="_blank" class="l1"></a>
    </div> -->
    <div class='fixBg' v-if="fixBgShow"></div>
    <div class="pop" v-if="popShow">
        <div class="pop-con1" v-if="topicShow">
            <h3>回答问题领取现金券</h3>
            <div v-for='item,index in datas'>
                <p>{{item.title}}</p>
                <ul>
                    <li v-for='items in item.opt' @click='opts($event,index)'>{{items}}</li>
                </ul>
            </div>
            <a href="javascript:;" @click="submit">提交</a>
        </div>
        <div class="pop-con1" v-if="answerShow">
            <h3>正确答案</h3>
            <div v-for='item in datas'>
                <p>{{item.title}}</p>
                <ul>
                    <li v-for='items,index in item.opt' :class="index === item.correct ? 'yl': ''">{{items}}</li>
                </ul>
            </div>
            <a href="javascript:;" @click="req">提交</a>
        </div>
    </div>
    <div class="pop-return" v-if="returnShow">
        <h3>{{popReturn.title}}</h3>
        <p v-html="popReturn.content"></p>
        <a href="javascript:;" @click="close"></a>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
    data() {
        $(function() {
            $('.nav-fixed a').click(function() {
                var index = $(this).index() + 1
                var pos = $('.bg' + index).offset().top

                // 实现平滑移动 1000代表时间ms
                $('html,body').stop().animate({
                    scrollTop: pos
                }, 500)
            })
        })
        return {
            fixBgShow: false,
            popShow: false,
            index1: false,
            index2: false,
            index3: false,
            index4: false,
            index5: false,
            topicShow: true,
            answerShow: false,
            returnShow: false,
            popReturn: {
                title: '',
                content: ''
            },
            datas: [{
                    title: '1 王伦老师在金融界昵称是叫什么？',
                    opt: [
                        'A.王伦',
                        'B.伦哥量化',
                        'C.伦哥',
                        'D.王伦老'
                    ],
                    correct: 1
                },
                {
                    title: '2 伦哥经常做客的电视台是哪个电视台？',
                    opt: [
                        'A.北京电视台',
                        'B.东方卫视',
                        'C.中央电视台',
                        'D.浙江卫视'
                    ],
                    correct: 2
                },
                {
                    title: '3 伦哥最擅长的投资领域是什么？',
                    opt: [
                        'A.长线',
                        'B.短线',
                        'C.波段',
                        'D.量化投资'
                    ],
                    correct: 3
                },
                {
                    title: '4 伦哥这里可以学到些什么？',
                    opt: [
                        'A.量化投资的理念',
                        'B.量化投资的方法',
                        'C.与实战无缝衔接的投资模型',
                        'D.以上都是'
                    ],
                    correct: 3
                },
                {
                    title: '5 伦哥的内参里会更新什么内容？',
                    opt: [
                        'A.行情的实战分析思路',
                        'B.实战操作的方法',
                        'C.具体可操作的股票',
                        'D.以上都是'
                    ],
                    correct: 3
                }
            ]
        }
    },
    computed: mapState({
        loginStatus: state => state.user.loginStatus,
        riskAssessed: state => state.user.riskAssessed,
        bindingMobile: state => state.user.bindingMobile,
        bindingIdentity: state => state.user.bindingIdentity,
        ssoId: state => state.user.ssoId
    }),
    components: {},
    methods: {
        popClick() {
            if (this.loginStatus === 'yes') {
                this.popShow = true
                this.fixBgShow = true
            } else {
                window.jrj.jsCallNative(109, JSON.stringify({
                    url: window.location.href
                }))
            }
        },
        req() {
            var _this = this
            $.ajax({
                url: 'http://itougu.jrj.com.cn/marketing/sendCouponToUserForActivity.jspa',
                type: 'post',
                dataType: 'json',
                data: {
                    userId: _this.ssoId,
                    couponInfoId: 761,
                    platId: 'web'
                },
                success: function(data) {
                    if (data === 1) {
                        alert('成功')
                        _this.popReturn.title = '恭喜您！'
                        _this.popReturn.content = '<span class="yl">700元</span>现金券已发放到您的账户，<br />请尽快使用！'
                        _this.popShow = false
                        _this.topicShow = true
                        _this.answerShow = false
                        _this.returnShow = true
                    } else if (data === 2) {
                        alert('领取过')
                        _this.popReturn.title = '很抱歉！'
                        _this.popReturn.content = '您已经领取过现金券，请尽快使用！'
                        _this.popShow = false
                        _this.topicShow = true
                        _this.answerShow = false
                        _this.returnShow = true
                    } else if (data === 3) {
                        alert('失败')
                        _this.popReturn.title = '很抱歉！'
                        _this.popReturn.content = '您所参加的活动已过期！<br />欢迎关注伦哥量化其他内容，<br />可以享受更多服务哦！'
                        _this.popShow = false
                        _this.topicShow = true
                        _this.answerShow = false
                        _this.returnShow = true
                    }
                }
            })
        },
        opts(e, index) {
            if (index === 0) {
                this.index1 = true
            } else if (index === 1) {
                this.index2 = true
            } else if (index === 2) {
                this.index3 = true
            } else if (index === 3) {
                this.index4 = true
            } else if (index === 4) {
                this.index5 = true
            }
            $(e.target).addClass('yl').siblings().removeClass('yl')
        },
        submit() {
            if (!this.index1 || !this.index2 || !this.index3 || !this.index4 || !this.index5) {
                alert('请答完全部题目')
                return
            } else {
                this.topicShow = false
                this.answerShow = true
            }
        },
        close() {
            this.popShow = false
            this.returnShow = false
            this.fixBgShow = false
            this.index1 = false
            this.index2 = false
            this.index3 = false
            this.index4 = false
            this.index5 = false
        }
    },
    mounted() {
        document.title = '央视嘉宾王伦全网限时回馈'
        this.$store.dispatch('user/checkLogin')
    }
}
</script>
