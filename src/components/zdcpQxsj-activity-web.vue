<style>
body {
    background-color: #56079e !important;
    font-family: '微软雅黑';
}

input,
button {
    outline: none;
}

.pagination1 .swiper-pagination-switch {
    width: 326px;
    height: 53px;
    background-color: #af30ff;
    margin: 0 5px 0 0;
    border-radius: 0;
    box-shadow: none;
    color: #fff;
    text-align: center;
    line-height: 53px;
}

.pagination1 .swiper-pagination-switch:last-child {
    margin-right: 0;
}

.pagination1 .swiper-visible-switch {
    background-color: #eac8ff;
    color: #702fdd;
}

.bg3 .swiper-container {
    position: absolute;
    top: 173px;
    right: 20px;
}

.swiper-slide {
    position: relative;
}

.swiper-slide div {
    width: 100%;
    height: 45px;
    background-color: #000;
    opacity: 0.8;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 8;
}

.swiper-slide div p {
    line-height: 45px;
    padding-left: 20px;
}

.bg3 .swiper-pagination {
    width: 80px;
    position: absolute;
    top: 458px;
    right: 20px;
    z-index: 9;
}

.bg3 .swiper-button-prev {
    position: absolute;
    right: 478px;
    top: 292px;
    z-index: 9;
    cursor: pointer;
}

.bg3 .swiper-button-next {
    position: absolute;
    right: 31px;
    top: 292px;
    z-index: 9;
    cursor: pointer;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
@import '../assets/css/animate.min.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-bg1.jpg") center 0 no-repeat;
    height: 605px;
}
.bg2 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-bg2.jpg") center 0 no-repeat;
    height: 609px;
}
.bg3 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-bg3.jpg") center 0 no-repeat;
    height: 587px;
}
.bg4 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-bg4.jpg") center 0 no-repeat;
    height: 907px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg3 .links {
    width: 447px;
    height: 410px;
    float: left;
    margin-top: 120px;
}
.bg3 .links a {
    width: 100%;
    height: 33.33%;
    float: left;
}
.nav-fixed {
    width: 147px;
    height: 135px;
    position: fixed;
    top: 40%;
    right: 3%;
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-nav.png") center 0 no-repeat;
    z-index: 10;
}
.nav-fixed a {
    width: 100%;
    height: 33.33%;
    float: left;
}
.footer {
    width: 100%;
    height: 96px;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-web-footer.jpg") center bottom no-repeat;
    z-index: 10;
}
.footer .box-con div {
    width: 655px;
    height: 96px;
    float: left;
    // margin-top: 66px;
    margin-left: 180px;
}
.footer .box-con div span {
    width: 100px;
    height: 96px;
    // float: left;
    // margin-right: 39px;
    font-size: 34px;
    line-height: 108px;
    color: #fff;
    // letter-spacing: 27px;
    // text-indent: 14px;
}
.footer .box-con button {
    width: 186px;
    height: 45px;
    background-color: #ff61a0;
    border-radius: 20px;
    text-align: center;
    line-height: 45px;
    color: #fff;
    font-size: 26px;
    position: absolute;
    right: 34px;
    top: 29px;
    border: none;
    cursor: pointer;
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
    width: 610px;
    height: 443px;
    background: url("../assets/images/yearEnd-activity/yearEnd-web-pop1.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -221px;
    left: 50%;
    margin-left: -305px;
    z-index: 12;
}
.pop1 {
    width: 610px;
    height: 563px;
    background: url("../assets/images/yearEnd-activity/yearEnd-web-pop2.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -281px;
    left: 50%;
    margin-left: -305px;
    z-index: 12;
}
.pop-con,
.pop1-con {
    width: 100%;
    height: 100%;
}
.pop1-con div {
    width: 540px;
    float: left;
    margin: 30px 0 0 35px;
}
.pop1-con div p {
    font-size: 20px;
    color: #009fe9;
    line-height: 36px;
}
.pop1-con div strong {
    font-size: 20px;
    color: #fff;
    line-height: 36px;
    font-weight: normal;
}
.pop-con h3,
.pop1-con h3 {
    width: 100%;
    height: 63px;
    line-height: 63px;
    float: left;
    margin-top: 12px;
    text-align: center;
    font-size: 29px;
    color: #fff;
    font-weight: normal;
}
.pop-con .pop-text1 input {
    width: 320px;
    height: 40px;
    padding: 10px 20px;
    background-color: #fff;
    color: #000;
    font-size: 20px;
    float: left;
    margin: 86px 0 0 125px;
}
.pop-con button {
    width: 360px;
    height: 60px;
    background: url("../assets/images/yearEnd-activity/yearEnd-web-pop-btn.png") 0 0 no-repeat;
    float: left;
    text-align: center;
    line-height: 60px;
    font-size: 24px;
    color: #fff;
    margin: 30px 0 0 125px;
    border: none;
    cursor: pointer;
}
.pop-con .pop-text1 p {
    width: 100%;
    float: left;
    font-size: 20px;
    color: #009fe9;
    text-align: center;
    margin-top: 55px;
}
.pop-con .pop-text1 em {
    position: absolute;
    top: 175px;
    right: 125px;
    background: #fff;
    border: 1px red solid;
    border-radius: 5px;
    padding: 5px;
}
.pop-con .pop-text2 div {
    width: 100%;
    margin-top: 80px;
    line-height: 48px;
    font-size: 22px;
    color: #009fe9;
    float: left;
    text-align: center;
}
.pop-con .pop-text2 button {
    margin-top: 60px;
}
.close {
    width: 29px;
    height: 29px;
    background: url("../assets/images/yearEnd-activity/yearEnd-web-pop-close.png") 0 0 no-repeat;
    position: absolute;
    top: 55px;
    right: 18px;
    cursor: pointer;
}
.swiper1-container {
    width: 1000px;
    height: 345px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 186px;
    overflow: hidden;
    direction: ltr;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    /* Fix of Webkit flickering */
    z-index: 1;
}
.swiper1-container .slide-img1 {
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-img1.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img2 {
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-img2.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img3 {
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-img3.jpg') center 0 no-repeat;
    background-size: 100%;
}
.pagination1 {
    width: 1000px;
    height: 53px;
    margin-top: 114px;
    float: left;
}
.bg2 .swiper-button-prev1 {
    width: 31px;
    height: 53px;
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-prev.png') center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 325px;
    left: 0;
    z-index: 9;
    cursor: pointer;
}
.bg2 .swiper-button-next1 {
    width: 31px;
    height: 53px;
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-next.png') center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 325px;
    right: 0;
    z-index: 9;
    cursor: pointer;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <div class="swiper1-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide red-slide slide-img1"></div>
                    <div class="swiper-slide blue-slide slide-img2"></div>
                    <div class="swiper-slide orange-slide slide-img3"></div>
                </div>
            </div>
            <div class="swiper-button-prev1"></div>
            <div class="swiper-button-next1"></div>
            <div class="pagination1">
                <span class="swiper-pagination-switch">边工作边炒股，时间不足</span>
                <span class="swiper-pagination-switch">入市时间短，喜欢盲追热点</span>
                <span class="swiper-pagination-switch">缺乏专业知识与指导，炒股凭感觉</span>
            </div>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <div class="links">
                <a href="javascript:;" id="btn1"></a>
                <a href="javascript:;" id="btn2"></a>
                <a href="javascript:;" id="btn3"></a>
            </div>
            <activity-slider :listData="listData" :clickIndex="clickIndex" />
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <a href="javascript:;" class="animated pulse infinite" @click="clickPop"></a>
        </div>
    </div>
    <div class="nav-fixed">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
    </div>
    <div class="footer">
        <div class="box-con">
            <div>
                <span id="text-day" class="text-day">00</span>天
                <span id="text-hour" class="text-hour">00</span>时
                <span id="text-min" class="text-min">00</span>分
                <span id="text-sec" class="text-sec">00</span>秒
            </div>
            <button type="button" name="button" @click="subClick">立即订阅</button>
        </div>
    </div>
    <zdcp-activity-pop v-if="popShow" @close="popClose" @closeClick="closeClick">
        <div v-html="popHtml">
        </div>
    </zdcp-activity-pop>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import activitySlider from 'components/activity-slider'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import Swiper from 'swiper/dist/idangerous.swiper.js'
import zdcpActivityPop from 'components/zdcp-activity-pop'

export default {
    data() {
        return {
            listData: {
                conWidth: '500px',
                conHeight: '320px',
                conPadding: '0',
                pagShow: true,
                arrowShow: true,
                loop: true,
                // slidesPerView: 3,
                autoplay: 4000,
                textType: true,
                paginationClickable: true,
                prev: {
                    imgUrl: require('assets/images/zdcpQxsj-activity/zdcpQxsj-web-prev.png'),
                    width: '31px',
                    height: '53px',
                    marginTop: '0'
                },
                next: {
                    imgUrl: require('assets/images/zdcpQxsj-activity/zdcpQxsj-web-next.png'),
                    width: '31px',
                    height: '53px',
                    marginTop: '0'
                },
                list: [{
                        imgUrl: require('assets/images/zdcpQxsj-activity/zdcpQxsj-web-img4.png'),
                        text: '算法深度优化，获胜概率更高'
                    },
                    {
                        imgUrl: require('assets/images/zdcpQxsj-activity/zdcpQxsj-web-img5.jpg'),
                        text: '买卖信号一对一，操作更简单'
                    },
                    {
                        imgUrl: require('assets/images/zdcpQxsj-activity/zdcpQxsj-web-img6.png'),
                        text: '盘中提醒买卖信号，操盘更及时'
                    }
                ]
            },
            clickIndex: null,
            popShow: false,
            popHtml: ''
        }
    },
    computed: mapState({
        loginStatus: state => state.user.loginStatus,
        riskAssessed: state => state.user.riskAssessed,
        bindingMobile: state => state.user.bindingMobile,
        bindingIdentity: state => state.user.bindingIdentity
    }),
    components: {
        activitySlider,
        zdcpActivityPop
    },
    methods: {
        closeClick() {
            this.popShow = false
            this.popHtml = ''
        },
        popClose() {
            this.popShow = false
            this.popHtml = ''
            if (!this.bindingMobile) {
                location.href = 'http://i.jrj.com.cn/home/userSetting/phoneIdentity?ReturnURL=' + encodeURIComponent(location.href)
            } else if (!this.bindingIdentity) {
                location.href = 'http://i.jrj.com.cn/home/userSetting/nameIdentity?ReturnURL=' + encodeURIComponent(location.href)
            } else if (!this.riskAssessed) {
                location.href = 'http://i.jrj.com.cn/home/userSetting/fxcp?ReturnURL=' + encodeURIComponent('http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=6&type=2')
            } else {
                location.href = 'http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=6&type=2'
            }
        },
        subClick() {
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
                    $.ajax({
                        url: 'http://itougu.jrj.com.cn/smartstock/mk/isActive/zsVersionUp.jspa',
                        success: function(result) {
                            if (result.retCode === 0) {
                                location.href = 'http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=6&type=2'
                            } else {
                                alert(result.msg)
                            }
                        }
                    });

                }
            }
            window.dcsMultiTrack('DCS.dcsuri', 'zdcpQxsj-activity-web-6', 'WT.ti', 'zdcpQxsj-activity-web-6')
        }
    },
    mounted() {
        document.title = 'Z点操盘全心升级，好礼矩献'
        var _this = this
        this.$store.dispatch('user/checkLogin')
        this.$watch('loginStatus', () => {
            this.$store.dispatch('user/checkBindingInfo', {})
        })
        var mySwiper1 = new Swiper('.swiper1-container', {
            pagination: '.pagination1',
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false,
            createPagination: false
        })
        $('.swiper-button-prev1').on('click', function(e) {
            e.preventDefault()
            mySwiper1.swipePrev()
        })
        $('.swiper-button-next1').on('click', function(e) {
            e.preventDefault()
            mySwiper1.swipeNext()
        })
        $(function() {
            $('.nav-fixed a').click(function() {
                var index = $(this).index() + 2
                // index = index === 5 ? 7 : index
                var pos = $('.bg' + index).offset().top
                // 实现平滑移动 1000代表时间ms
                $('html,body').stop().animate({
                    scrollTop: pos
                }, 500)
            })

            function pad(str, len) {
                str = str + ''
                if (str.length < len) {
                    for (let i = 0; i < len - str.length; i++) {
                        str = '0' + str
                    }
                }
                return str
            }

            function ShowCountDown(year, month, day, hours, minutes, seconds, divname) {
                var now = new Date()
                var endDate = new Date(year, month - 1, day, hours, minutes, seconds)
                var leftTime = endDate.getTime() - now.getTime()
                var leftsecond = parseInt(leftTime / 1000)
                var day1 = Math.floor(leftsecond / (60 * 60 * 24))
                var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
                var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
                var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
                if (day1 < 0) {
                    day1 = '00';
                    hour = '00';
                    minute = '00';
                    second = '00';
                }
                document.getElementById('text-day').innerHTML = pad(day1, 2)
                document.getElementById('text-hour').innerHTML = pad(hour, 2)
                document.getElementById('text-min').innerHTML = pad(minute, 2)
                document.getElementById('text-sec').innerHTML = pad(second, 2)
            }

            window.setInterval(function() {
                ShowCountDown(2018, 1, 15, 0, 0, 0, 'divdown1')
            }, 1000)
            $('.links a').click(function() {
                var index = $(this).index()
                _this.clickIndex = index
            })
        })
    }
}
</script>
