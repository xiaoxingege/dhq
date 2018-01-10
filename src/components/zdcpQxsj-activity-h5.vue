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
    width: 2.26rem;
    height: 0.53rem;
    background-color: #af30ff;
    margin: 0 0.1rem 0 0;
    border-radius: 0;
    box-shadow: none;
    color: #fff;
    text-align: center;
    line-height: 0.53rem;
    font-size: 0.26rem;
    float: left;
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
    top: 7.5rem;
    left: 0.44rem;
}

.swiper-slide {
    position: relative;
}

.swiper-slide div {
    width: 100%;
    height: 0.45rem;
    background-color: #000;
    opacity: 0.8;
    color: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 8;
}

.swiper-slide div p {
    line-height: 0.45rem;
    padding-left: 0.2rem;
    font-size: 0.26rem;
}

.bg3 .swiper-pagination {
    width: 80px;
    position: absolute;
    top: 10.55rem;
    right: 0.3rem;
    z-index: 9;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-H5-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 5.27rem;
}
.bg2 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-H5-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 9.73rem;
}
.bg3 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-H5-bg3.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 12.79rem;
}
.bg4 {
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-H5-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 13.70rem;
}
.box-con {
    height: 100%;
    position: relative;
}
.bg3 .links {
    width: 7rem;
    height: 5.26rem;
    float: left;
    margin: 1.28rem 0 0 0.23rem;
}
.bg3 .links a {
    width: 100%;
    height: 33.33%;
    float: left;
}
.footer {
    width: 100%;
    height: 1.36rem;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/zdcpQxsj-activity/zdcpQxsj-h5-footer.png") center bottom no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.footer .box-con div {
    width: 3rem;
    height: 0.4rem;
    float: left;
    // margin-top: 66px;
    margin: 0.6rem 0 0 0.3rem;
    font-size: 0.28rem;
    color: #fff;
}
.footer .box-con div span {
    line-height: 0.4rem;
}
.footer .box-con button {
    width: 1.86rem;
    height: 0.72rem;
    background-color: #ff61a0;
    border-radius: 0.2rem;
    text-align: center;
    line-height: 0.72rem;
    color: #fff;
    font-size: 0.26rem;
    position: absolute;
    right: 0.28rem;
    top: 0.28rem;
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
    width: 7.05rem;
    height: 3.81rem;
    background: url("../assets/images/endYear-activity/endYear-web-pop-bg1.png") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;
    top: 50%;
    margin-top: -1.9rem;
    left: 50%;
    margin-left: -3.52rem;
    z-index: 12;
}
.pop-con {
    width: 5rem;
    height: 2.71rem;
    float: left;
    margin: 0.48rem 0 0 1rem;
}
.pop-con strong {
    font-size: 0.26rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    float: left;
    color: #ffeee4;
    line-height: 0.35rem;
    margin-top: 0.2rem;
}
.pop-con h1 {
    text-align: center;
    color: #ffeee4;
    font-size: 0.38rem;
    margin-top: 0.4rem;
}
.pop-con button {
    width: 2.21rem;
    height: 0.6rem;
    background: url("../assets/images/endYear-activity/endYear-H5-btn1.png") 0 0 no-repeat;
    background-size: 100%;
    text-align: center;
    line-height: 0.6rem;
    color: #b5041f;
    border: none;
    font-size: 0.24rem;
    font-weight: bold;
    padding-bottom: 0.08rem;
    float: left;
    margin: 0.3rem 0 0 1.3rem;
}
.pop-con button.bt1 {
    width: 3.41rem;
    height: 0.6rem;
    background: url("../assets/images/endYear-activity/endYear-H5-btn2.png") 0 0 no-repeat;
    background-size: 100%;
    margin: 0.3rem 0 0 0.8rem;
}
.close {
    width: 0.46rem;
    height: 0.45rem;
    background: url("../assets/images/endYear-activity/endYear-web-pop-close.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: -0.15rem;
    right: 1.1rem;
    cursor: pointer;
}
.swiper1-container {
    width: 7rem;
    height: 6.9rem;
    margin: 0 auto;
    position: absolute;
    left: 0.23rem;
    top: 2.15rem;
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
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-h5-img1.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img2 {
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-h5-img2.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img3 {
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-h5-img3.jpg') center 0 no-repeat;
    background-size: 100%;
}
.pagination1 {
    width: 7rem;
    height: 0.53rem;
    margin: 1.24rem 0 0 0.23rem;
    float: left;
}
.bg2 .swiper-button-prev1 {
    width: 0.45rem;
    height: 0.78rem;
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-prev.png') center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 5.22rem;
    left: 0.23rem;
    z-index: 9;
    cursor: pointer;
}
.bg2 .swiper-button-next1 {
    width: 0.45rem;
    height: 0.78rem;
    background: url('../assets/images/zdcpQxsj-activity/zdcpQxsj-web-next.png') center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 5.22rem;
    right: 0.27rem;
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
                <span class="swiper-pagination-switch">时间不足</span>
                <span class="swiper-pagination-switch">喜欢盲追热点</span>
                <span class="swiper-pagination-switch">炒股凭感觉</span>
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
        </div>
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

export default {
    data() {
        return {
            listData: {
                conWidth: '6.57rem',
                conHeight: '4.21rem',
                conPadding: '0',
                pagShow: true,
                arrowShow: false,
                loop: true,
                // slidesPerView: 3,
                autoplay: 4000,
                textType: true,
                paginationClickable: true,
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
        ssoId: state => state.user.ssoId
    }),
    components: {
        activitySlider
    },
    methods: {
        subClick() {
            if (window.app.name !== '{{appid}}') {
                if (this.loginStatus === 'yes') {
                    $.ajax({
                        url: 'http://itougu.jrj.com.cn/smartstock/mk/isActive/zsVersionUp.jspa',
                        success: function(result) {
                            if (result.retCode === 0) {
                                var url = encodeURIComponent('http://itougu.jrj.com.cn/activity/app/strategyInfoNew.jspa#/riskResult?productId=6&type=4');
                                window.location.href = 'http://itougu.jrj.com.cn/actm/pre-pay?payUrl=' + url + '&' + Math.round(new Date().getTime() / 1000)
                                // skipRiskAssessed=1
                            } else {
                                alert(result.msg)
                            }
                        }
                    });
                } else {
                    window.jrj.jsCallNative('108', JSON.stringify({
                        returnUrl: encodeURI(window.location.href)
                    }))
                }
            } else {
                window.location.href = 'jrjnews://tougu?t=web&url=http://itougu.jrj.com.cn/actm/12th-activity'
                setTimeout(function() {
                    if (!document.webkitHidden) {
                        window.location.href = 'http://appcms.jrj.com.cn/download.jspa?channel=transfer2&tgqdcode=transfe3&channel=V4V6497Y9&tgqdcode=3Q2Y3H95'
                    }
                }, 1500);
            }
            window.dcsMultiTrack('DCS.dcsuri', 'zdcpQxsj-activity-h5-6', 'WT.ti', 'zdcpQxsj-activity-h5-6')
        }
    },
    mounted() {
        document.title = 'Z点操盘全心升级，好礼矩献'
        var _this = this
        this.$store.dispatch('user/checkLogin')
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
            window.InitWeChatShare({
                shareTitle: window.document.title,
                shareLink: window.location.href,
                shareDesc: '买卖信号全心升级 限时赠3个月权限+888元内参  立即领取',
                shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/zdcpQxsj-h5-bg1.jpg',
                callback: function(wx) {

                }
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
        })
        $('.links a').click(function() {
            var index = $(this).index()
            _this.clickIndex = index
        })
    }
}
</script>
