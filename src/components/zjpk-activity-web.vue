<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg4 .send-box {
    width: 1070px;
    height: 160px;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 1px #3e200d solid;
}

.bg4 .send-box textarea {
    width: 1030px;
    height: 60px;
    padding: 20px;
    float: left;
    resize: none;
}

.bg4 .send-box button {
    width: 120px;
    height: 40px;
    position: absolute;
    bottom: 10px;
    right: 0;
    background-color: #efda6d;
    color: #3e200d;
    font-size: 20px;
    line-height: 40px;
    text-align: center;
}

.bg4 .list-box {
    width: 100%;
    height: 140px;
    overflow-y: scroll;
    position: absolute;
    top: 170px;
    left: 0;
    background: none;
}

.bg4 .list-box .comment-list {
    width: 100%;
    float: left;
    margin: 5px 0;
    line-height: 50px;
}

.bg4 .list-box .comment-list img {
    width: 50px;
    height: 50px;
}

.bg4 .comment-box {
    width: 1000px;
}

.bg4 .comment-box h5 {
    padding-top: 15px;
}

.bg4 .comment-box h5 span {
    color: #fff57c;
    font-size: 20px;
}

.bg4 .comment-box h5 strong {
    color: #5d3014;
    font-size: 20px;
}

.bg4 .comment-box p {
    font-size: 16px;
    color: #c0a967;
}

.bg4 .comment-box div {
    background-color: #543f2f
}

.bg2 .swiper-button-prev {
    left: 0;
}

.bg2 .swiper-button-next {
    right: 0;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
@import '../assets/css/swiper.min.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/zjpk-activity/zjpk-web-bg1.jpg") center 0 no-repeat;
    height: 860px;
}
.bg2 {
    background: url("../assets/images/zjpk-activity/zjpk-web-bg2.jpg") center 0 no-repeat;
    height: 578px;
}
.bg3 {
    background: url("../assets/images/zjpk-activity/zjpk-web-bg3.jpg") center 0 no-repeat;
    height: 1464px;
}
.bg4 {
    background: url("../assets/images/zjpk-activity/zjpk-web-bg4.jpg") center 0 no-repeat;
    height: 538px;
}
.bg5 {
    background: url("../assets/images/zjpk-activity/zjpk-web-bg5.jpg") center 0 no-repeat;
    height: 360px;
}
.box-con {
    width: 1130px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg1 a {
    width: 184px;
    height: 27px;
    position: absolute;
    bottom: 17px;
    right: 67px;
}
.bg2 h3 {
    font-size: 40px;
    font-weight: bold;
    color: #fff493;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 60px;
}

.device {
    width: 100%;
    position: absolute;
    height: 385px;
    top: 140px;
    overflow-x: hidden;
}
.swiper-container {
    width: 100%;
    height: 385px;
    color: #fff;
    text-align: center;
    overflow: inherit;
}
.swiper-slide {
    position: relative;
    width: 236px;
    height: 100%;
    opacity: 0.4;
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -ms-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
}
.swiper-slide-visible {
    opacity: 0.5;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
}
.swiper-slide-active {
    top: 0;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}
.swiper-slide div {
    width: 100%;
    height: 335px;
    background: url("../assets/images/zjpk-activity/zjpk-web-slide-bg.png") center 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50px;
    z-index: 9;
}
.swiper-slide img {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    z-index: 8;
    height: 220px;
}
.swiper-slide i {
    width: 88px;
    height: 81px;
    background: url("../assets/images/zjpk-activity/zjpk-web-slide-hg.png") center 0 no-repeat;
    position: absolute;
    top: 0;
    right: -39px;
    z-index: 10;
}
.swiper-slide p {
    width: 138px;
    height: 39px;
    position: absolute;
    top: 298px;
    left: 28px;
    text-align: center;
    line-height: 39px;
    font-size: 22px;
    color: #58341a;
    overflow: hidden;
    z-index: 10;
}
.bg3 .tginfo {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
}
.bg3 .tginfo strong {
    font-size: 30px;
    color: #3e200d;
    line-height: 80px;
    float: left;
    margin-left: 21px;
}
.bg3 .tginfo strong span {
    font-size: 26px;
    line-height: 80px;
    padding-right: 20px;
    font-weight: normal;
}
.bg3 .tginfo p {
    font-size: 26px;
    color: #c90606;
    line-height: 80px;
    float: left;
    margin-left: 50px;
}
.bg3 .tginfo a {
    width: 170px;
    height: 41px;
    position: absolute;
    top: 20px;
    right: 21px;
}
.bg3 .ggzj {
    width: 1070px;
    height: 271px;
    border-collapse: collapse;
    position: absolute;
    top: 212px;
    left: 30px;
    color: #3e200d;
    font-size: 26px;
}
.bg3 .ggzj th {
    background-color: #efd96b;
    font-weight: normal;
    border: 1px #b3944a solid;
}
.bg3 .ggzj td {
    background-color: #fffcf5;
    text-align: center;
    border: 1px #b3944a solid;
}
.bg3 .slcz {
    width: 1070px;
    position: absolute;
    top: 632px;
    left: 30px;
    height: 700px;
    overflow: hidden;
}
.bg3 .slcz .slcz-txt {
    width: 100%;
    margin: 15px 0;
    float: left;
}
.bg3 .slcz .slcz-txt h5 {
    font-size: 30px;
    font-weight: bold;
    color: #fff57c;
}
.bg3 .slcz .slcz-txt p {
    font-size: 22px;
    color: #c0a967;
    line-height: 35px;
}
.bg3 .tgzy {
    width: 190px;
    height: 41px;
    position: absolute;
    bottom: 83px;
    right: 21px;
}
.bg5 a {
    width: 736px;
    height: 25px;
    position: absolute;
    top: 112px;
    left: 209px;
}
.bg4-box {
    width: 1070px;
    height: 320px;
    float: left;
    margin: 110px 0 0 30px;
    position: relative;
}
.slcz-img img {
    width: 501px;
    height: 290px;
}
.slcz-img img:first-child {
    float: left;
}
.slcz-img img:last-child {
    float: right;
}
</style>

<template>
<div class="box">
    <div class="bg1">
        <div class="box-con">
            <a :href="data.submitUrl" v-if="dataType"></a>
        </div>
    </div>
    <div class="bg2">
        <div class="box-con" v-if="dataType && plType">
            <h3>{{data.pkNO}}（{{data.pkTime}}）</h3>
            <div class="device">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div></div>
                            <img :src="dataList[3].headImage" />
                            <p>{{dataList[3].sort+'.'+dataList[3].userName}}</p>
                        </div>
                        <div class="swiper-slide">
                            <div></div>
                            <img :src="dataList[1].headImage" />
                            <p>{{dataList[1].sort+'.'+dataList[1].userName}}</p>
                        </div>
                        <div class="swiper-slide">
                            <div></div>
                            <img :src="dataList[0].headImage" />
                            <i></i>
                            <p>{{dataList[0].sort+'.'+dataList[0].userName}}</p>
                        </div>
                        <div class="swiper-slide">
                            <div></div>
                            <img :src="dataList[2].headImage" />
                            <p>{{dataList[2].sort+'.'+dataList[2].userName}}</p>
                        </div>
                        <div class="swiper-slide">
                            <div></div>
                            <img :src="dataList[4].headImage" />
                            <p>{{dataList[4].sort+'.'+dataList[4].userName}}</p>
                        </div>
                    </div>
                    <div class="swiper-button-prev swiper-button-white"></div>
                    <div class="swiper-button-next swiper-button-white"></div>
                </div>
            </div>

        </div>
    </div>
    <div class="bg3">
        <div class="box-con" v-if="plType && dataType">
            <div class="tginfo">
                <strong>NO.{{data.tgInfo[clickIndex].sort}}  <span>{{dataList[clickIndex].userName}}</span><span>{{dataList[clickIndex].typeDesc}}</span></strong>
                <p>{{data.tgInfo[clickIndex].desc}}</p>
                <a :href="'http://itougu.jrj.com.cn/live/'+data.tgInfo[clickIndex].roomId"></a>
            </div>
            <table class="ggzj">
                <tr>
                    <th>内参盈亏</th>
                    <th>建议个股数</th>
                    <th>盈亏比例</th>
                </tr>
                <tr v-for="item in data.tgInfo[clickIndex].profit">
                    <td>{{item.name}}</td>
                    <td>{{item.suggestNum}}</td>
                    <td>{{item.suggestRatio}}</td>
                </tr>
            </table>
            <div class="slcz">
                <div class="slcz-img" v-if="plType" :style="data.tgInfo[clickIndex].pic.length === 1 ? 'text-align:center;' : ''">
                    <img :src="item" v-for="item in data.tgInfo[clickIndex].pic" :style="data.tgInfo[clickIndex].pic.length === 1 ? 'float:none;' : ''" />
                </div>
                <div class="slcz-txt" v-for="item in data.tgInfo[clickIndex].summary">
                    <h5>{{item.title}}</h5>
                    <p>{{item.content}}</p>
                </div>
            </div>
            <a :href="'http://itougu.jrj.com.cn/account/adviser/'+data.tgInfo[clickIndex].userId+'/'" class="tgzy"></a>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <div class="bg4-box" v-if="dataType">
                <topic-comment :appItemId="appItemId" :frm='frm' />
            </div>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <a href="http://itougu.jrj.com.cn/view/102765.jspa"></a>
        </div>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import Swiper from '../assets/plugins/activity-slider/swiper.min.js'
window.Swiper = Swiper
import topicComment from 'components/topic-comment'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import getQueryString from 'utils/getQueryString'

export default {
    data() {
        return {
            // appItemId: 25
            appItemId: 29,
            frm: 'web',
            data: null,
            dataType: false,
            plType: false,
            tgInfo: null,
            clickIndex: 0
        }
    },
    computed: mapState({
        loginStatus: state => state.user.loginStatus,
        riskAssessed: state => state.user.riskAssessed,
        bindingMobile: state => state.user.bindingMobile,
        bindingIdentity: state => state.user.bindingIdentity,
        commentSubmit: state => state.topicComment.commentSubmit,
        dataList: state => state.zjpkActivity.dataList
    }),
    components: {
        topicComment
    },
    methods: {
        submit() {
            if (this.loginStatus === 'no') {
                location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + encodeURIComponent(location.href)
            } else if (this.loginStatus === 'unknown') {
                alert('正在加载用户信息，请稍候')
            } else {
                if (!this.bindingMobile || !this.bindingIdentity) {
                    this.popHtml = '<h3>温馨提示</h3><p class="fz22 mt20">为响应证监会监管要求，保障投资者合法权益，请您先<br /><strong>补充真实信息后再进行购买，</strong></p><p class="fz22">如需帮助，请咨询400-166-1188</p>'
                    this.popShow = true
                } else if (!this.riskAssessed) {
                    this.popHtml = '<h3>温馨提示</h3><p class="fz22 mt20">响应证监会监管要求，投资者购买产品需填写风险承受<br />能力评测。<strong>请您根据下方提示完成风险承受能力测评，</strong></p><p class="fz22">如需帮助，请咨询400-166-1188</p>'
                    this.popShow = true
                } else {
                    location.href = 'http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=100050008&type=2'
                }
            }
        }
    },
    mounted() {

        var _this = this
        var id = getQueryString('id') || '4'
        $.ajax({
            url: 'http://itougu.jrj.com.cn/marketing/topics.jspa?id=' + id,
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        }).then(data => {
            if (data.retCode === 1) {
                _this.data = data.data
                _this.dataType = true
            } else {
                alert(data.msg)
            }
        })
        this.$watch('dataType', dataType => {
            if (dataType) {
                _this.appItemId = _this.data.topicId
                document.title = _this.data.shareInfo.title

                let allPromises = []
                for (var i = 0; i < _this.data.tgInfo.length; i++) {
                    var userId = _this.data.tgInfo[i].userId
                    var sort = _this.data.tgInfo[i].sort
                    allPromises.push(_this.$store.dispatch('zjpkActivity/whereList', {
                        userId: userId,
                        sort: sort
                    }))
                }
                Promise.all(allPromises).then(() => {
                    _this.plType = true
                })
            }
        })
        this.$watch('plType', plType => {
            if (plType) {
                new Swiper('.swiper-container', {
                    slidesPerView: 5,
                    paginationClickable: true,
                    spaceBetween: 30,
                    slideToClickedSlide: true,
                    loop: true,
                    centeredSlides: true,
                    initialSlide: 2,
                    onlyExternal: true,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    onClick: function(swiper) {
                        var index = 0
                        if (swiper.realIndex === 0) {
                            index = 3
                        } else if (swiper.realIndex === 1) {
                            index = 1
                        } else if (swiper.realIndex === 2) {
                            index = 0
                        } else if (swiper.realIndex === 3) {
                            index = 2
                        } else if (swiper.realIndex === 4) {
                            index = 4
                        }
                        _this.clickIndex = index
                    }
                });
            }
        })
        this.$watch('commentSubmit', commentSubmit => {
            $('html,body').scrollTop($('.bg4').offset().top)
        })
    }
}
</script>
