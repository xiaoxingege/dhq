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
    background: url("../assets/images/wangLun-activity/wangLun-web-b1.jpg") center 0 no-repeat;
    height: 849px;
}
.bg2 {
    background: url("../assets/images/wangLun-activity/wangLun-web-b2.jpg") center 0 no-repeat;
    height: 269px;
}
.bg3 {
    background: url("../assets/images/wangLun-activity/wangLun-web-b3.jpg") center 0 no-repeat;
    height: 649px;
}
.bg4 {
    background: url("../assets/images/wangLun-activity/wangLun-web-b4.jpg") center 0 no-repeat;
    height: 676px;
}
.bg5 {
    background: url("../assets/images/wangLun-activity/wangLun-web-b5.jpg") center 0 no-repeat;
    height: 781px;
}
.bg6 {
    background: url("../assets/images/wangLun-activity/wangLun-web-b6.jpg") center 0 no-repeat;
    height: 527px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.nav-fixed {
    padding-top: 111px;
    width: 164px;
    height: 241px;
    position: fixed;
    top: 30%;
    right: 3%;
    background: url("../assets/images/wangLun-activity/wangLun-web-nav.png") center 0 no-repeat;
    z-index: 10;
}
.nav-fixed a {
    width: 164px;
    height: 41px;
    float: left;
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
    width: 738px;
    height: 604px;
    background: url("../assets/images/wangLun-activity/wangLun-pop-bg1.jpg") 0 0 repeat-y;
    position: fixed;
    top: 50%;
    margin-top: -302px;
    left: 50%;
    margin-left: -369px;
    z-index: 12;
    border-radius: 15px;
}
.pop .pop-con1 h3 {
    font-size: 28px;
    color: #ffe60c;
    text-align: center;
    font-family: '微软雅黑';
    margin-top: 40px;
}
.pop .pop-con1 div {
    width: 100%;
    clear: both;
    font-size: 18px;
    color: #fff;
    margin: 5px 0;
}
.pop .pop-con1 div p {
    text-indent: 40px;
}
.pop .pop-con1 ul {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 60px;
}
.pop .pop-con1 ul li {
    float: left;
    padding-right: 25px;
    cursor: pointer;
}
.pop .pop-con1 a {
    width: 181px;
    height: 61px;
    background: url("../assets/images/wangLun-activity/wangLun-web-button.png") 0 0 no-repeat;
    position: absolute;
    bottom: 25px;
    left: 275px;
    text-align: center;
    line-height: 53px;
    color: #ffe60c;
    font-size: 26px;
}
.yl {
    color: #ffe60c;
}
.bg1 a {
    width: 566px;
    height: 81px;
    position: absolute;
    top: 660px;
    left: 226px;
}
.pop-return {
    width: 543px;
    height: 341px;
    padding: 62px 41px 28px 101px;
    background: url("../assets/images/wangLun-activity/wangLun-web-pop-bg2.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -215.5px;
    left: 50%;
    margin-left: -342.5px;
    z-index: 12;
}
.pop-return h3 {
    width: 100%;
    text-align: center;
    float: left;
    font-size: 40px;
    color: #ffe60c;
    font-family: '黑体';
    margin-top: 20px;
}
.pop-return p {
    width: 100%;
    text-align: center;
    float: left;
    margin-top: 15px;
    font-size: 28px;
    font-family: '黑体';
    color: #fff;
    line-height: 50px;
}
.pop-return a {
    width: 197px;
    height: 53px;
    position: absolute;
    bottom: 71px;
    right: 211px;
}
.bg3 a {
    position: absolute;
}
.bg3 .l1 {
    width: 277px;
    height: 49px;
    left: 92px;
    top: 127px;
}
.bg3 .l2 {
    width: 277px;
    height: 49px;
    right: 94px;
    top: 127px;
}
.bg3 .l3 {
    width: 330px;
    height: 49px;
    left: 67px;
    bottom: 199px;
}
.bg3 .l4 {
    width: 277px;
    height: 49px;
    right: 94px;
    bottom: 199px;
}
.bg4 a {
    width: 100%;
    height: 578px;
    position: absolute;
    bottom: 0;
}
.bg6 a {
    position: absolute;
    width: 460px;
    height: 90px;
}
.bg6 .l1 {
    top: 102px;
    left: 0;
}
.bg6 .l2 {
    top: 102px;
    right: 0;
}
.bg6 .l3 {
    top: 222px;
    left: 0;
}
.bg6 .l4 {
    top: 222px;
    right: 0;
}
.nav-fixed .l1 {
    position: absolute;
    width: 164px;
    height: 111px;
    top: 0;
    left: 0;
}
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
    <div class="nav-fixed">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="http://itougu.jrj.com.cn/live/70" target="_blank" class="l1"></a>
    </div>
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
                window.location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + location.href
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
