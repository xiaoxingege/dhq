<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input,
button {
    outline: none;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
@import '../assets/css/animate.min.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg1.jpg") center -0.66rem no-repeat;
    background-size: 100%;
    height: 7.2rem;
}
.bg2 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg2.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 6.52rem;
}
.bg3 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg3.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 19.85rem;
}
.bg4 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg4.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 5.17rem;
}
.bg5 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg5.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 6.91rem;
}
.bg6 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg6.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 8.73rem;
}
.bg7 {
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-bg7-1.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 1.52rem;
    margin-top: -0.05rem;
}
.bg4 a {
    width: 3.38rem;
    height: 1.04rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-btn1.png") center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    left: 1.95rem;
    bottom: 0.4rem;
}
.bg5 a {
    width: 3.38rem;
    height: 1.04rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-btn2.png") center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    left: 1.95rem;
    bottom: 0.6rem;
}
.bg5 .box-con div {
    width: 1.83rem;
    height: 1.96rem;
    position: absolute;
    top: 2.14rem;
    left: 0.38rem;
}
.bg5 .box-con div span {
    float: left;
    width: 100%;
    height: 25%;
    cursor: pointer;
}
.bg6 a {
    width: 3.38rem;
    height: 1.04rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-btn3.png") center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    left: 1.95rem;
    bottom: 0.4rem;
}
// .bg7 .left,
// .bg7 .right {
//     width: 50%;
//     height: 100%;
//     float: left;
// }
// .bg7 .left div,
// .bg7 .right div {
//     font-size: 18px;
//     color: #fff;
//     margin-top: 440px;
//     width: 405px;
//     line-height: 40px;
// }
// .bg7 .left div {
//     margin-left: 35px;
// }
// .bg7 .right div {
//     margin-left: 65px;
// }
.box-con {
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg2 video {
    width: 6.62rem;
    height: 3.66rem;
    float: left;
    margin: 0.14rem 0 0 0.44rem;
}
.nav-fixed {
    width: 1.93rem;
    height: 1.67rem;
    position: fixed;
    top: 40%;
    right: 0;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-nav-1.png") center 0 no-repeat;
    background-size: 100%;
    z-index: 10;
}
.nav-fixed a {
    width: 100%;
    height: 50%;
    float: left;
}
.footer {
    width: 100%;
    height: 1.57rem;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-footer.png") center bottom no-repeat;
    background-size: 100%;
    z-index: 10;
}
.footer .box-con div {
    width: 5.49rem;
    height: 0.65rem;
    float: right;
    margin-top: 0.7rem;
}
.footer .box-con div span {
    width: 1rem;
    height: 0.65rem;
    float: left;
    margin-right: 0.38rem;
    font-size: 0.34rem;
    line-height: 0.65rem;
    color: #fff;
    letter-spacing: 0.27rem;
    text-indent: 0.14rem;
}
.footer .box-con div span:last-child {
    margin-right: 0;
    margin-left: 0.05rem;
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
    width: 6.1rem;
    height: 4.43rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-pop1.png") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;
    top: 50%;
    margin-top: -2.21rem;
    left: 50%;
    margin-left: -3.05rem;
    z-index: 12;
}
.pop1 {
    width: 6.1rem;
    height: 5.83rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-pop2.png") 0 0 no-repeat;
    background-size: 100%;
    position: fixed;
    top: 50%;
    margin-top: -2.91rem;
    left: 50%;
    margin-left: -3.05rem;
    z-index: 12;
}
.pop-con,
.pop1-con {
    width: 100%;
    height: 100%;
}
.pop1-con div {
    width: 5.4rem;
    float: left;
    margin: 0.2rem 0 0 0.35rem;
}
.pop1-con div p {
    font-size: 0.2rem;
    color: #009fe9;
    line-height: 0.36rem;
    width: 100%;
    float: left;
}
.pop1-con div strong {
    width: 100%;
    float: left;
    font-size: 0.2rem;
    color: #fff;
    line-height: 0.36rem;
    font-weight: normal;
}
.pop1-con div img {
    width: 5.4rem;
    height: 3.17rem;
    float: left;
    margin-top: 0.1rem;
}
.pop-con h3,
.pop1-con h3 {
    width: 100%;
    height: 0.63rem;
    line-height: 0.63rem;
    float: left;
    margin-top: 0.12rem;
    text-align: center;
    font-size: 0.28rem;
    color: #fff;
    font-weight: normal;
}
.pop-con .pop-text1 input {
    width: 3.8rem;
    height: 0.6rem;
    padding: 0.1rem 0.2rem;
    background-color: #fff;
    color: #000;
    font-size: 0.2rem;
    float: left;
    margin: 0.66rem 0 0 0.95rem;
}
.pop-con button {
    width: 4.2rem;
    height: 0.8rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-h5-pop-btn.png") 0 0 no-repeat;
    background-size: 100%;
    float: left;
    text-align: center;
    line-height: 0.8rem;
    font-size: 0.24rem;
    color: #fff;
    margin: 0.3rem 0 0 0.95rem;
    border: none;
    cursor: pointer;
}
.pop-con .pop-text1 p {
    width: 100%;
    float: left;
    font-size: 0.2rem;
    color: #009fe9;
    text-align: center;
    margin-top: 0.43rem;
}
.pop-con .pop-text1 em {
    position: absolute;
    top: 1.6rem;
    right: 1rem;
    background: #fff;
    border: 1px red solid;
    border-radius: 0.05rem;
    padding: 0.05rem;
    font-size: 0.2rem;
}
.pop-con .pop-text2 div {
    width: 100%;
    margin-top: 0.8rem;
    line-height: 0.6rem;
    font-size: 0.22rem;
    color: #009fe9;
    float: left;
    text-align: center;
}
.pop-con .pop-text2 button {
    margin-top: 0.4rem;
}
.close {
    width: 0.29rem;
    height: 0.29rem;
    background: url("../assets/images/yearEnd-activity/yearEnd-web-pop-close.png") 0 0 no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0.55rem;
    right: 0.18rem;
    cursor: pointer;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/20171222ng.mp4" controls="controls" id="myvideo">
            您的浏览器不支持 video 标签。
            </video>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <a href="javascript:;" class="animated pulse infinite" @click="clickPop"></a>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <a href="javascript:;" class="animated pulse infinite" @click="link('http://itougu.jrj.com.cn/activity/app/midblack.jspa#/midblackPayIntro','jzxg')"></a>
        </div>
    </div>
    <div class="bg6">
        <div class="box-con">
            <a href="javascript:;" class="animated pulse infinite" @click="link('http://itougu.jrj.com.cn/activity/app/vipapp.jspa','vip')"></a>
        </div>
    </div>
    <div class="bg7">
        <!-- <div class="box-con">
            <div class="left">
                <div>
                    <p>※ 2017.12.25-2017.12.31期间订阅极智选股、Z量化、工作室的用户，可以在2018年1月2日抢开年红包，最大红包为2018元；</p>
                    <p>※抢红包活动通过订阅用户专属链接进行，中奖后5个工作日内安排发放。</p>
                </div>
            </div>
            <div class="right">
                <div>
                    <p>※ 2017.12.25-2017.12.31期间订阅极智选股、Z量化、工作室一年期的用户，可以获赠相应产品2个月权限；</p>
                    <p>※ 赠送权限将于订阅成功后，联系投服助理为您开通，一般1-2个工作日内赠送开通。</p>
                </div>
            </div>
        </div> -->
    </div>
    <div class="nav-fixed">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <!-- <a href="javascript:;"></a> -->
    </div>
    <!-- <div class="footer">
        <div class="box-con">
            <div>
                <span id="text-day" class="text-day">00</span>
                <span id="text-hour" class="text-hour">00</span>
                <span id="text-min" class="text-min">00</span>
                <span id="text-sec" class="text-sec">00</span>
            </div>
        </div>
    </div> -->
    <div class='fixBg' v-if="popShow || pop1Show"></div>
    <div class="pop" v-if="popShow">
        <div class="close" @click="close"></div>
        <div class="pop-con">
            <div class="pop-text1" v-if="popText === 1">
                <h3>预约领取</h3>
                <input type="text" name="" value="" placeholder="请输入手机号" v-model="phone" />
                <em v-html="txtHtml" v-if="txtShow"></em>
                <button type="button" name="button" @click="submit">立即预约</button>
                <p>稍后将由金融界智能投服助理联系您发放。</p>
            </div>
            <div class="pop-text2" v-if="popText === 2">
                <h3>预约成功！</h3>
                <div>
                    <p>《2018年A股投资全景策略》</p>
                    <p>将会在3个工作日内联系您发放。</p>
                </div>
                <button type="button" name="button" @click="close">知道了</button>
            </div>
        </div>
    </div>
    <div class="pop1" v-if="pop1Show">
        <div class="close" @click="close"></div>
        <div class="pop1-con">
            <h3 v-text="popTitle"></h3>
            <div>
                <p v-text="popMsg"></p>
                <strong>历史胜率：<span v-text="per"></span></strong>
                <img :src="imgSrc" />
            </div>
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
import getQueryString from 'utils/getQueryString'

export default {
    data() {
        return {
            popShow: false,
            txtShow: false,
            txtHtml: '',
            popText: 1,
            pop1Show: false,
            popTitle: '热点狙击 策略池',
            popMsg: '识别主力已完成建仓且股价即将持续拉升时，提示调入；再在 满足止盈止损条件时提示调出。 ',
            per: '70.18%',
            imgSrc: require('assets/images/yearEnd-activity/yearEnd-web-img1.jpg')
        }
    },
    computed: mapState({
        type: state => {
            return state.reservation.type
        }
    }),
    components: {},
    methods: {
        link(url, sourc) {
            window.dcsMultiTrack('DCS.dcsuri', 'yearEnd-h5-' + sourc, 'WT.ti', 'yearEnd-h5-' + sourc)
            window.location.href = url
        },
        clickPop() {
            this.popShow = true
            window.dcsMultiTrack('DCS.dcsuri', 'yearEnd-h5-record', 'WT.ti', 'yearEnd-h5-record')
        },
        close() {
            this.popText = 1
            this.popShow = false
            this.pop1Show = false
        },
        submit() {
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
            if (!this.phone || this.phone.length === 0) {
                this.txtShow = true
                this.txtHtml = '手机号不能为空！'
                return
            } else if (!reg.test(this.phone)) {
                this.txtShow = true
                this.txtHtml = '手机号输入不正确！'
                return
            }
            this.$store.dispatch('reservation/fetch', {
                aid: '810495534830305280',
                userName: '',
                phone: this.phone,
                bizsource: getQueryString('bizsource') || 'mSite',
                source: '4',
                tgqdcode: getQueryString('tgqdcode') || 'ZBXUALA7'
            })
        }
    },
    mounted() {
        document.title = '领航2018 布局“复兴牛”-金融界'
        var _this = this
        this.$watch('txtShow', txtShow => {
            setTimeout(function() {
                _this.txtShow = false
                _this.txtHtml = ''
            }, 1000)
        })
        this.$watch('type', type => {
            if (type) {
                this.popText = 2
            }
        })
        $(function() {
            window.InitWeChatShare({
                shareTitle: window.document.title,
                shareLink: window.location.href,
                shareDesc: '大国乘势而上，“复兴牛”行情有望开启，2018年A股这些布局机会不容错过',
                shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/share-img.jpg',
                callback: function(wx) {

                }
            })
            $('.bg5 .box-con span').click(function() {
                var index = $(this).index()
                if (index === 0) {
                    _this.popTitle = '热点狙击 策略池'
                    _this.popMsg = '根据趋势分析寻找近期热点板块，再通过多层次量化策略筛选出表现优越且大概率持续上涨股票。'
                    _this.per = '3.27'
                    _this.imgSrc = require('assets/images/yearEnd-activity/yearEnd-h5-img1.jpg')
                    _this.pop1Show = true
                } else if (index === 1) {
                    _this.popTitle = '主力天机 策略池'
                    _this.popMsg = '识别主力已完成建仓且股价即将持续拉升时，提示调入；再在 满足止盈止损条件时提示调出。 '
                    _this.per = '70.18%'
                    _this.imgSrc = require('assets/images/yearEnd-activity/yearEnd-h5-img2.jpg')
                    _this.pop1Show = true
                } else if (index === 2) {
                    _this.popTitle = '波段优选 策略池'
                    _this.popMsg = '量化精选处于阶段低位个股，一进一出提示，提供低位调入信号、高位调出信号，“一进一出”捕捉波段行情机会。'
                    _this.per = '73.93%'
                    _this.imgSrc = require('assets/images/yearEnd-activity/yearEnd-h5-img3.jpg')
                    _this.pop1Show = true
                } else if (index === 3) {
                    _this.popTitle = '中线掘金 策略池'
                    _this.popMsg = '挖掘股价超低且出现底部拐点的股票，再根据算法在高位给出调出信号，抓住个股主升浪。'
                    _this.per = '74.56%'
                    _this.imgSrc = require('assets/images/yearEnd-activity/yearEnd-h5-img4.jpg')
                    _this.pop1Show = true
                }
            })
            $('.nav-fixed a').click(function() {
                var index = $(this).index() + 3
                index = index === 5 ? 7 : index
                console.log(index)
                var pos = $('.bg' + index).offset().top
                // 实现平滑移动 1000代表时间ms
                $('html,body').stop().animate({
                    scrollTop: pos
                }, 500)
            })

            // function pad(str, len) {
            //     str = str + ''
            //     if (str.length < len) {
            //         for (let i = 0; i < len - str.length; i++) {
            //             str = '0' + str
            //         }
            //     }
            //     return str
            // }
            //
            // function ShowCountDown(year, month, day, hours, minutes, seconds, divname) {
            //     var now = new Date()
            //     var endDate = new Date(year, month - 1, day, hours, minutes, seconds)
            //     var leftTime = endDate.getTime() - now.getTime()
            //     var leftsecond = parseInt(leftTime / 1000)
            //     var day1 = Math.floor(leftsecond / (60 * 60 * 24))
            //     var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
            //     var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
            //     var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
            //     if (day1 < 0) {
            //         day1 = '00';
            //         hour = '00';
            //         minute = '00';
            //         second = '00';
            //     }
            //     document.getElementById('text-day').innerHTML = pad(day1, 2)
            //     document.getElementById('text-hour').innerHTML = pad(hour, 2)
            //     document.getElementById('text-min').innerHTML = pad(minute, 2)
            //     document.getElementById('text-sec').innerHTML = pad(second, 2)
            // }
            //
            // window.setInterval(function() {
            //     ShowCountDown(2018, 1, 1, 0, 0, 0, 'divdown1')
            // }, 1000)
        })
    }
}
</script>
