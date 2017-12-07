<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg4 .box-con .swiper-box {
    top: 83px;
}

.bg4 .swiper-slide {
    background-size: 98% 100% !important;
    background-repeat: no-repeat;
    background-position: center;
}

.bg2 .pagination .swiper-pagination-switch {
    width: 15px;
    height: 15px;
    background-color: #e90832;
    margin: 0 5px;
}

.bg2 .pagination .swiper-pagination-switch.swiper-active-switch {
    background-color: #ffd280;
}

.lottery-list li {
    line-height: 28px;
    font-size: 18px;
    color: #ffddc8;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/endYear-activity/endYear-web-bg1.jpg") center 0 no-repeat;
    height: 697px;
}
.bg2 {
    background: url("../assets/images/endYear-activity/endYear-web-bg2.jpg") center 0 no-repeat;
    height: 626px;
}
.bg3 {
    background: url("../assets/images/endYear-activity/endYear-web-bg3.jpg") center 0 no-repeat;
    height: 892px;
}
.bg4 {
    background: url("../assets/images/endYear-activity/endYear-web-bg4.jpg") center 0 no-repeat;
    height: 555px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.nav-fixed {
    width: 219px;
    height: 268px;
    position: fixed;
    top: 30%;
    right: 3%;
    background: url("../assets/images/endYear-activity/endYear-web-nav.png") center 0 no-repeat;
    z-index: 10;
}
.footer {
    width: 100%;
    height: 254px;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/endYear-activity/endYear-web-footer.png") center bottom no-repeat;
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
    width: 830px;
    height: 492px;
    background: url("../assets/images/endYear-activity/endYear-web-pop-bg1.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -246px;
    left: 50%;
    margin-left: -415px;
    z-index: 12;
}
.pop-con {
    width: 570px;
    height: 391px;
    float: left;
    margin: 45px 0 0 124px;
}
.pop-con strong {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    width: 100%;
    float: left;
    color: #ffeee4;
    line-height: 42px;
}
.pop-con img {
    width: 182px;
    height: 182px;
    border-radius: 15px;
    float: left;
    margin: 10px 0 0 191px;
}
.pop-con p {
    width: 100%;
    text-align: center;
    float: left;
    font-size: 22px;
    color: #ffeee4;
    margin-top: 10px;
}
.pop-con h1 {
    text-align: center;
    color: #ffeee4;
}
.pop-con .pop-text2 h1 {
    font-size: 48px;
    margin-top: 20px;
}
.pop-con .pop-text3 h1 {
    font-size: 36px;
    margin-top: 20px;
}
.pop-con .pop-text1 strong {
    margin-top: 40px;
}
.close {
    width: 46px;
    height: 45px;
    background: url("../assets/images/endYear-activity/endYear-web-pop-close.png") 0 0 no-repeat;
    position: absolute;
    top: -10px;
    right: 140px;
    cursor: pointer;
}
.swiper1-container {
    width: 582px;
    height: 286px;
    margin: 0 auto;
    position: absolute;
    right: 0;
    top: 152px;
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
// .swiper1-container .swiper-slide {
//     background-size: 100%;
// }
.bg2 .pagination {
    width: 582px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 479px;
}

.lottery {
    width: 507px;
    height: 507px;
    position: absolute;
    top: 86px;
    left: 4px;
    overflow: hidden;
}
.lottery-plate {
    width: 100%;
    height: 100%;
    background: url('../assets/images/endYear-activity/endYear-web-plate-bg1.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.lottery-pointer {
    position: absolute;
    width: 186px;
    height: 209px;
    left: 165px;
    top: 141px;
    background: url('../assets/images/endYear-activity/endYear-web-needle-bg1.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.rotate_origin {
    transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
}
.rotate_origin1 {
    transform-origin: 50% 85%;
    -ms-transform-origin: 50% 85%;
    -webkit-transform-origin: 50% 85%;
    -moz-transform-origin: 50% 85%;
    -o-transform-origin: 50% 85%;
}
.f-lottery {
    width: 251px;
    height: 249px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.f-lottery-plate {
    width: 100%;
    height: 100%;
    background: url('../assets/images/endYear-activity/endYear-web-plate-bg2.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.f-lottery-pointer {
    position: absolute;
    width: 101px;
    height: 109px;
    left: 77px;
    bottom: 65px;
    background: url('../assets/images/endYear-activity/endYear-web-needle-bg2.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.popClick1 {
    width: 223px;
    height: 50px;
    position: absolute;
    top: 427px;
    left: 111px;
    cursor: pointer;
}
.popClick2 {
    width: 177px;
    height: 46px;
    position: absolute;
    right: 140px;
    top: 288px;
    cursor: pointer;
}
.footer .box-con img {
    width: 180px;
    height: 180px;
    position: absolute;
    right: 16px;
    bottom: 33px;
    border-radius: 15px;
}
.nav-fixed img {
    width: 175px;
    height: 175px;
    float: left;
    margin: 55px 0 0 21px;
}
.lottery-list {
    width: 440px;
    height: 85px;
    position: absolute;
    top: 410px;
    right: 10px;
    overflow: hidden;
}
.lottery-list li {
    line-height: 28px;
    font-size: 16px;
    color: #ffddc8;
}

.swiper1-container .slide-img1 {
    background: url('../assets/images/endYear-activity/endYear-slide-img1.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img2 {
    background: url('../assets/images/endYear-activity/endYear-slide-img2.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img3 {
    background: url('../assets/images/endYear-activity/endYear-slide-img3.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img4 {
    background: url('../assets/images/endYear-activity/endYear-slide-img4.jpg') center 0 no-repeat;
    background-size: 100%;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <div class="popClick1" @click="popClick(1)"></div>
            <div class="swiper1-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide red-slide slide-img1"></div>
                    <div class="swiper-slide blue-slide slide-img2"></div>
                    <div class="swiper-slide orange-slide slide-img3"></div>
                    <div class="swiper-slide green-slide slide-img4"></div>
                </div>
            </div>
            <div class="pagination"></div>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <div class="popClick2" @click="popClick(1)"></div>
            <div class="lottery">
                <div class="lottery-plate rotate_origin" id="i_bg"></div>
                <div class="lottery-pointer rotate_origin1" id="i_cont"></div>
            </div>
            <div class="lottery-list">
                <ul>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <activity-slider :listData="listData" />
        </div>
    </div>
    <div class="nav-fixed">
        <img :src="codeImg" />
    </div>
    <div class="footer">
        <div class="box-con">
            <div class="f-lottery">
                <div class="f-lottery-plate rotate_origin" id="i_bg1"></div>
                <div class="f-lottery-pointer rotate_origin1" id="i_cont1"></div>
            </div>
            <img :src="codeImg" />
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <div class="close" @click="close"></div>
        <div class="pop-con">
            <div class="pop-text1" v-if="popText === 1">
                <strong>微信扫描下方二维码添加好友，即可免费收<br />到每天3只盘前热股、极智解盘等服务。</strong>
                <img :src="codeImg" />
                <p>盘前热股在添加好友后每天早上9:00准时发布</p>
            </div>
            <div class="pop-text2" v-else-if="popText === 2">
                <h1>恭喜您</h1>
                <strong>抽中了{{lotteryText}}</strong>
                <img :src="codeImg" />
                <p>微信扫描二维码，联系金融界投服助理领奖。</p>
            </div>
            <div class="pop-text3" v-else-if="popText ===3">
                <h1>添加微信兑换奖品</h1>
                <strong>您的抽奖次数已经用完，抽到的奖品有：<br />{{lotteryText1}}，{{lotteryText2}}</strong>
                <img :src="codeImg" />
            </div>
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
                conWidth: '1000px',
                conHeight: '220px',
                conPadding: '0',
                pagShow: false,
                arrowShow: false,
                loop: true,
                slidesPerView: 3,
                autoplay: 4000,
                list: [{
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img1.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img2.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img3.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img4.png'),
                        link: ''
                    },
                    // {
                    //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img5.png'),
                    //     link: ''
                    // },
                    // {
                    //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img6.png'),
                    //     link: ''
                    // },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img7.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img8.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img9.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img10.png'),
                        link: ''
                    },
                    // {
                    //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img11.png'),
                    //     link: ''
                    // },
                    // {
                    //     imgUrl: require('assets/images/endYear-activity/endYear-slide1-img12.png'),
                    //     link: ''
                    // },
                    {
                        imgUrl: require('assets/images/endYear-activity/endYear-slide1-img13.png'),
                        link: ''
                    }
                ]
            },
            popShow: false,
            codeImg: '',
            lotteryNum: 2,
            resultAngle: [{
                    a: 0,
                    p: 0,
                    t: '12月每周主题金股'
                },
                {
                    a: 60,
                    p: 0,
                    t: '2018年A股投资图谱'
                },
                {
                    a: 120,
                    p: 0,
                    t: '投顾工作室9折券'
                },
                {
                    a: 180,
                    p: 0,
                    t: '新科技蓝筹股投资策略'
                },
                {
                    a: 240,
                    p: 0,
                    t: '2017最具投资价值股'
                },
                {
                    a: 300,
                    p: 0,
                    t: '极智选股500元券'
                }
            ],
            plate: '',
            needle: '',
            popText: 3,
            lotteryText: '',
            lotteryText1: '',
            lotteryText2: ''
        }
    },
    computed: mapState({}),
    components: {
        activitySlider
    },
    methods: {
        popClick(type) {
            this.popShow = true
            this.popText = type
        },
        close() {
            this.popShow = false
        }
    },
    mounted() {
        document.title = '每日3只强势股-金融界'
        var _this = this
        new Swiper('.swiper1-container', {
            pagination: '.pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false
        })
        var rotate = {
            // 起始位置为0
            rotateAngle: 0,
            // 转盘转动过程中不可再次触发
            flagClick: true,
            // type:0,箭头转动,1,背景转动;during_time:持续时间(s)
            calculateResult: function(type, duringTime) {
                var self = this;
                // 默认为箭头转动
                type = type || 0;
                // 默认为1s
                duringTime = duringTime || 1;

                // 用来判断的随机数，1-100
                var randNum = Math.ceil(Math.random() * 100);

                // 最终要旋转到哪一块，对应result_angle的下标
                var resultIndex;
                // 判断的角度值起始位置和结束位置
                var startPos;
                var endPos = startPos = 0;

                for (var i in _this.resultAngle) {
                    // 区块的起始值
                    startPos = endPos + 1;
                    // 区块的结束值
                    endPos = endPos + 100 * _this.resultAngle[i].p;

                    // 如果随机数落在当前区块，那么获取到最终要旋转到哪一块
                    if (randNum >= startPos && randNum <= endPos) {
                        resultIndex = i;
                        break;
                    }
                }
                // 附加多转几圈，2-3
                var randCircle = Math.ceil(Math.random() * 2) + 1;

                // 旋转结束前，不允许再次触发
                self.flagClick = false;
                // 转动盘子
                if (type === 1) {
                    self.rotateAngle = self.rotateAngle - randCircle * 360 - _this.resultAngle[resultIndex].a - self.rotateAngle % 360;
                    $(_this.plate).css({
                        'transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-ms-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-moz-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        'transition': 'transform ease-out ' + duringTime + 's',
                        '-moz-transition': '-moz-transform ease-out ' + duringTime + 's',
                        '-webkit-transition': '-webkit-transform ease-out ' + duringTime + 's',
                        '-o-transition': '-o-transform ease-out ' + duringTime + 's'
                    });
                } else {
                    // 转动指针
                    self.rotateAngle = self.rotateAngle + randCircle * 360 + _this.resultAngle[resultIndex].a - self.rotateAngle % 360;
                    $(_this.needle).css({
                        'transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-ms-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-moz-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
                        'transition': 'transform ease-out ' + duringTime + 's',
                        '-moz-transition': '-moz-transform ease-out ' + duringTime + 's',
                        '-webkit-transition': '-webkit-transform ease-out ' + duringTime + 's',
                        '-o-transition': '-o-transform ease-out ' + duringTime + 's'
                    });
                }
                // 旋转结束后，允许再次触发
                setTimeout(function() {
                    self.flagClick = true;
                    // 告诉结果
                    if (resultIndex === '5') {
                        _this.perText = '99.80%'
                    } else {
                        _this.perText = '90.00%'
                    }
                    // console.log(_this.resultAngle[resultIndex].t)
                    _this.lotteryNum = _this.lotteryNum - 1
                    _this.popShow = true
                    _this.popText = 2
                    if (_this.lotteryNum === 1) {
                        _this.lotteryText1 = _this.resultAngle[resultIndex].t
                    } else {
                        _this.lotteryText2 = _this.resultAngle[resultIndex].t
                    }
                    _this.lotteryText = _this.resultAngle[resultIndex].t
                    var day = new Date();
                    day.setTime(day.getTime());
                    var s2 = (day.getMonth() + 1) + '月' + day.getDate() + '日' + day.getHours() + '时' + day.getMinutes() + '分';
                    var html = '<li>' + s2 + '，' + Math.floor(Math.random() * 9 + 1) + '***' + Math.floor(Math.random() * 100) + ' 抽到' + _this.resultAngle[resultIndex].t + '</li>'
                    $('.lottery-list ul').append(html)
                }, duringTime * 1000);
            }
        }
        $('#i_cont').click(function() {
            _this.plate = '#i_bg'
            _this.needle = '#i_cont'
            if (_this.lotteryNum > 0) {
                if (_this.lotteryNum === 1) {
                    // _this.resultAngle[0].p = 0
                    _this.resultAngle[1].p = 0
                    _this.resultAngle[3].p = 0
                    _this.resultAngle[4].p = 0
                    // _this.resultAngle[2].p = 0.5
                    _this.resultAngle[5].p = 1
                } else if (_this.lotteryNum === 2) {
                    // _this.resultAngle[0].p = 0.25
                    _this.resultAngle[1].p = 0.33
                    _this.resultAngle[3].p = 0.33
                    _this.resultAngle[4].p = 0.33
                }
                rotate.calculateResult(1, 1);
            } else {
                _this.popShow = true
                _this.popText = 3
            }
        })
        $('#i_cont1').click(function() {
            _this.plate = '#i_bg1'
            _this.needle = '#i_cont1'
            if (_this.lotteryNum > 0) {
                if (_this.lotteryNum === 1) {
                    // _this.resultAngle[0].p = 0
                    _this.resultAngle[1].p = 0
                    _this.resultAngle[3].p = 0
                    _this.resultAngle[4].p = 0
                    // _this.resultAngle[2].p = 0.5
                    _this.resultAngle[5].p = 1
                } else if (_this.lotteryNum === 2) {
                    // _this.resultAngle[0].p = 0.25
                    _this.resultAngle[1].p = 0.33
                    _this.resultAngle[3].p = 0.33
                    _this.resultAngle[4].p = 0.33
                }
                rotate.calculateResult(1, 1);
            } else {
                _this.popShow = true
                _this.popText = 3
            }
        })
        $.ajax({
            url: 'http://wx.jrj.com.cn/jrj/open.jsp?action=getImage',
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        }).then(data => {
            _this.codeImg = 'http://wx.jrj.com.cn' + data.imgurl
        })

        var date = new Date()
        var htmls = ''

        for (var i = 1; i < 6; i++) {
            date.setTime(date.getTime() - i * 60 * 1000)
            var s1 = (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '时' + date.getMinutes() + '分'
            htmls += '<li>' + s1 + '，' + Math.floor(Math.random() * 9 + 1) + '***' + Math.floor(Math.random() * 100) + ' 抽到' + _this.resultAngle[Math.floor(Math.random() * 5)].t + '</li>'
        }
        $('.lottery-list ul').append(htmls)
        var liHeight = $('.lottery-list ul li').height()
        setInterval(function() {
            $('.lottery-list ul').animate({
                'margin-top': '-' + liHeight
            }, 500, 'linear', function() {
                $('.lottery-list ul').append($('.lottery-list ul li:first'))
                $('.lottery-list ul').css({
                    'margin-top': '0'
                })
            })
        }, 1000)
    }
}
</script>
