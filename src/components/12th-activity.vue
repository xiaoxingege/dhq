<style>
body {
    background-color: #c31678 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg6 .box-con .swiper-box {
    top: 0.91rem;
}

.bg6 .box-con .swiper-box .swiper-slide {
    position: relative;
}

.bg6 .box-con .swiper-box .swiper-slide div {
    width: 100%;
    height: 0.66rem;
    background-color: #000;
    opacity: 0.8;
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 0.26rem;
    color: #fff;
    line-height: 0.66rem;
    text-indent: 0.25rem;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/12th-activity/12th-bg1.jpg") center 0 no-repeat;
    height: 5.56rem;
    background-size: 100% 100%;
    position: relative;
}
// .bg1-1 {
//     width: 100%;
//     background: url("../assets/images/12th-activity/12th-bg1-1.jpg") center 0 no-repeat;
//     height: 6.76rem;
//     background-size: 100% 100%;
//     position: absolute;
//     top: 0;
//     left: 0;
// }
.bg2 {
    background: url("../assets/images/12th-activity/12th-bg2.jpg") center 0 no-repeat;
    height: 3.29rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/12th-activity/12th-bg3.jpg") center 0 no-repeat;
    height: 3.29rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/12th-activity/12th-bg4.jpg") center 0 no-repeat;
    height: 3.31rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/12th-activity/12th-bg5.jpg") center 0 no-repeat;
    height: 3.62rem;
    background-size: 100% 100%;
}
.bg6 {
    background: url("../assets/images/12th-activity/12th-bg6.jpg") center 0 no-repeat;
    height: 6.85rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.footer {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/12th-activity/12th-footer.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
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
    width: 5.7rem;
    height: 3.43rem;
    background: url("../assets/images/12th-activity/12th-pop.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -1.71rem;
    margin-left: -2.85rem;
    left: 50%;
    z-index: 12;
}
.pop-close {
    width: 2rem;
    height: 0.66rem;
    position: absolute;
    bottom: 0.41rem;
    left: 1.85rem;
}
#divdown1 {
    position: absolute;
    color: white;
    width: 5.2rem;
    font-size: 0.34rem;
    top: 0.1rem;
    left: 1.95rem;
    font-family: Consolas, Monaco, monospace;
}
.footer div span {
    letter-spacing: 0.25rem;
    text-indent: 0.1rem;
    width: 1.06rem;
    overflow: hidden;
    display: inline-block;
    vertical-align: middle;
    float: left;
    margin-right: 0.32rem;
    line-height: 0.66rem;
}
.footer div span:last-child {
    margin: 0;
}
.bg2 .box-con div,
.bg3 .box-con div,
.bg4 .box-con div,
.bg5 .box-con div {
    width: 1.9rem;
    height: 0.6rem;
    position: absolute;
    top: 2.19rem;
    right: 0.68rem;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <div @click="popClick">

            </div>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <div>

            </div>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <div>

            </div>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <div>

            </div>
        </div>
    </div>
    <div class="bg6">
        <div class="box-con">
            <activity-slider :listData="listData" />
        </div>
    </div>

    <div class="footer">
        <div class="box-con">
            <div id="divdown1">
                <span id="text-day" class="text-day"></span>
                <span id="text-hour" class="text-hour"></span>
                <span id="text-min" class="text-min"></span>
                <span id="text-sec" class="text-sec"></span>
            </div>
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <div class="pop-close" @click="close">

        </div>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import activitySlider from 'components/activity-slider'
// import getQueryString from 'utils/getQueryString'

export default {
    data() {
        $(function() {
            // 微信分享
            window.InitWeChatShare({
                shareTitle: window.document.title,
                shareLink: window.location.href,
                shareDesc: '双11金融界狂送10000万，还有免费iPhone可以抢~',
                shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/11th-bg1.jpg',
                callback: function(wx) {

                }
            })
        })
        return {
            popShow: false,
            listData: {
                conWidth: '7rem',
                conHeight: '3.62rem',
                conPadding: '0',
                pagShow: false,
                arrowShow: false,
                loop: true,
                autoplay: 4000,
                textType: true,
                list: [{
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img1.png'),
                        text: '营业执照、投顾资质、奖杯等1'
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img2.png'),
                        text: '营业执照、投顾资质、奖杯等2'
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img3.png'),
                        text: '营业执照、投顾资质、奖杯等3'
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img4.png'),
                        text: '营业执照、投顾资质、奖杯等4'
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img5.png'),
                        text: '营业执照、投顾资质、奖杯等5'
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img6.png'),
                        text: '营业执照、投顾资质、奖杯等6'
                    }
                ]
            }
        }
    },
    computed: mapState({
        // type: state => {
        //     return state.reservation.type
        // }
    }),
    components: {
        activitySlider
    },
    methods: {
        popClick() {
            this.popShow = true
        },
        close() {
            this.popShow = false
        }
    },
    mounted() {

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

        function transdate(endTime) {
            var date = new Date();
            date.setFullYear(endTime.substring(0, 4));
            date.setMonth(endTime.substring(5, 7) - 1);
            date.setDate(endTime.substring(8, 10));
            date.setHours(endTime.substring(11, 13));
            date.setMinutes(endTime.substring(14, 16));
            date.setSeconds(endTime.substring(17, 19));
            return Date.parse(date) / 1000;
        }


        if (Math.round(new Date().getTime() / 1000) > transdate('2017-11-11 20:00:00') && Math.round(new Date().getTime() / 1000) < transdate('2017-11-19 20:00:00')) {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 17, 20, 0, 0, 'divdown1')

            }, 1000)
        } else if (Math.round(new Date().getTime() / 1000) > transdate('2017-11-17 20:00:00') && Math.round(new Date().getTime() / 1000) < transdate('2017-11-26 20:00:00')) {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 24, 20, 0, 0, 'divdown1')

            }, 1000)
        } else if (Math.round(new Date().getTime() / 1000) > transdate('2017-11-24 20:00:00')) {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 30, 20, 0, 0, 'divdown1')

            }, 1000)
        } else {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 11, 20, 0, 0, 'divdown1')

            }, 1000)
        }
        window.setInterval(function() {
            $('.bg1-1').animate({
                'opacity': '0'
            }, 350, function() {
                $('.bg1-1').animate({
                    'opacity': '1'
                }, 350)
            })
        }, 700)
        // var _this = this

    }
}
</script>
