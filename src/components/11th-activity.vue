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
    background: url("../assets/images/11th-activity/11th-bg1.jpg") center 0 no-repeat;
    height: 6.76rem;
    background-size: 100% 100%;
    position: relative;
}
.bg1-1 {
    width: 100%;
    background: url("../assets/images/11th-activity/11th-bg1-1.jpg") center 0 no-repeat;
    height: 6.76rem;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
}
.bg2 {
    background: url("../assets/images/11th-activity/11th-bg2.jpg") center 0 no-repeat;
    height: 8.09rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/11th-activity/11th-bg3.jpg") center 0 no-repeat;
    height: 3.75rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/11th-activity/11th-bg4.jpg") center 0 no-repeat;
    height: 7.88rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/11th-activity/11th-bg5.jpg") center 0 no-repeat;
    height: 6.22rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.lottery {
    width: 6.74rem;
    height: 6.72rem;
    position: absolute;
    bottom: 0;
    left: 0.38rem;
    overflow: hidden;
}
.lottery-plate {
    width: 100%;
    height: 100%;
    background: url('../assets/images/11th-activity/11th-plate.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.lottery-pointer {
    position: absolute;
    width: 0.47rem;
    height: 2.36rem;
    left: 3.16rem;
    bottom: 3rem;
    background: url('../assets/images/11th-activity/11th-pointer.png') center 0 no-repeat;
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
.bg2 .box-con p {
    width: 100%;
    height: 0.42rem;
    line-height: 0.42rem;
    text-align: center;
    font-weight: bold;
    font-size: 0.3rem;
    color: #fef0cc;
    float: left;
    margin-top: 0.9rem;
}
.bg2 .box-con p span {
    width: 0.49rem;
    height: 0.4rem;
    border: 0.01rem #fef0cc solid;
    display: inline-block;
    margin: 0 0.1rem;
}
.text-box {
    width: 6.78rem;
    height: 2.6rem;
    float: left;
    margin: 0.3rem 0 0 0.36rem;
    background: #fcae2b;
    border-radius: 0.15rem;
    box-shadow: 0.05rem 0.05rem 0.05rem #3d3232;
    font-size: 0.26rem;
    color: #78000e;
}
.text-box div {
    line-height: 0.38rem;
    width: 5.80rem;
    height: 2.1rem;
    float: left;
    margin: 0.21rem 0 0 0.5rem;
    overflow: hidden;
}
.text-box div strong {
    text-align: center;
    display: block;
    width: 100%;
}
.text-box div p {
    font-size: 0.24rem;
}
.text-nav {
    width: 100%;
    height: 0.65rem;
}
.text-nav a {
    width: 50%;
    height: 0.65rem;
    float: left;
}
.footer {
    width: 100%;
    height: 1.52rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/11th-activity/11th-footer.jpg") center 0 no-repeat;
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
    width: 5.3rem;
    height: 4.37rem;
    background: url("../assets/images/11th-activity/11th-pop-bg.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -2.18rem;
    margin-left: -2.65rem;
    left: 50%;
    z-index: 12;
}
.join {
    width: 100%;
    height: 100%;
    position: relative;
}
.join strong {
    font-size: 0.38rem;
    font-weight: bold;
    color: #840135;
    text-align: center;
    float: left;
    width: 100%;
    margin-top: 0.6rem;
}
.join p {
    font-size: 0.24rem;
    color: #cc2564;
    text-align: center;
}
.join span {
    font-size: 0.24rem;
    color: #840034;
    position: absolute;
    line-height: 0.46rem;
}
.join span input {
    width: 2.04rem;
    height: 0.44rem;
    line-height: 0.44rem;
    background: none;
    border: none;
    font-size: 0.24rem;
    color: #452609;
    position: absolute;
    border: 0.01rem #840034 solid;
    background-color: #feecba;
    margin-left: 0.1rem;
}
.join span input::-webkit-input-placeholder {
    color: #A78B67;
}
.join .userNamebox {
    width: 2.65rem;
    height: 0.44rem;
    top: 1.7rem;
    left: 1.3rem;
}
.join .phonebox {
    width: 2.65rem;
    height: 0.44rem;
    top: 2.3rem;
    left: 1.3rem;
}

.join .btn-join {
    position: absolute;
    bottom: 0.7rem;
    left: 1.65rem;
    width: 2.1rem;
    height: 0.56rem;
    background-color: #840034;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    border-radius: 0.15rem;
    line-height: 0.56rem;
}
.join em {
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    border: 0.01rem red solid;
    border-radius: 0.05rem;
    padding: 0 0.05rem;
    font-size: 0.16rem;
    line-height: 0.44rem;
}
.lottery-msg {
    width: 100%;
    height: 100%;
    position: relative;
}
.lottery-msg strong {
    font-size: 0.46rem;
    font-weight: bold;
    color: #840135;
    text-align: center;
    float: left;
    width: 100%;
    margin-top: 0.6rem;
}
.lottery-msg p {
    float: left;
    width: 100%;
    margin-top: 0.2rem;
    text-align: center;
    font-size: 0.26rem;
    color: #840034;
    line-height: 0.4rem;
}
.lottery-msg p span {
    font-weight: bold;
}
.lottery-msg a {
    position: absolute;
    bottom: 1.14rem;
    left: 1.65rem;
    width: 2.1rem;
    height: 0.56rem;
    background-color: #840034;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    border-radius: 0.15rem;
    line-height: 0.56rem;
}
.lottery-msg em {
    width: 100%;
    position: absolute;
    bottom: 0.45rem;
    font-size: 0.22rem;
    text-align: center;
    color: #cc2564;
    left: 0;
    padding-left: 0.15rem;
}
.lottery-msg1 {
    width: 100%;
    height: 100%;
    position: relative;
}
.lottery-msg1 strong {
    font-size: 0.46rem;
    font-weight: bold;
    color: #840135;
    text-align: center;
    float: left;
    width: 100%;
    margin-top: 0.6rem;
}
.lottery-msg1 p {
    float: left;
    width: 100%;
    margin-top: 0.2rem;
    text-align: center;
    font-size: 0.26rem;
    color: #840034;
    line-height: 0.4rem;
}
.lottery-msg1 a {
    position: absolute;
    bottom: 1.14rem;
    left: 1.65rem;
    width: 2.1rem;
    height: 0.56rem;
    background-color: #840034;
    color: #fff;
    font-size: 0.3rem;
    text-align: center;
    border-radius: 0.15rem;
    line-height: 0.56rem;
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
.footer a {
    width: 2.33rem;
    height: 0.59rem;
    position: absolute;
    bottom: 0.11rem;
    left: 2.56rem;
}
.pop1 {
    width: 5.17rem;
    height: 1.86rem;
    background: url("../assets/images/11th-activity/11th-pop-bg-1.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -0.93rem;
    margin-left: -2.58rem;
    left: 50%;
    z-index: 12;
}
.pop1 a {
    width: 1.83rem;
    height: 0.52rem;
    position: absolute;
    bottom: 0.27rem;
    left: 1.67rem;
}
</style>

<template>
<div class="box">
    <div class="bg1">
        <div class="bg1-1">

        </div>
    </div>
    <div class="bg2">
        <div class="box-con">
            <p>您当前有<span v-text='lotteryNum'>1</span>次抽奖机会</p>
            <div class="lottery">
                <div class="lottery-plate rotate_origin" id="i_bg"></div>
                <div class="lottery-pointer rotate_origin1" id="i_cont"></div>
            </div>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <div class="text-nav">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
            </div>
            <div class="text-box">
                <div class="text-scroll">
                    <ul>
                        <li v-for="item in whereList">{{item.createDataTime}}，{{item.phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2")}} 抽中{{item.msg}}</li>
                    </ul>
                </div>
                <div style="display:none;">
                    <p>1、11月6日-11月30日，金融界付费用户，及200名幸运用户，有机会参与幸运抽奖；</p>
                    <p>2、所有奖品将在24小时后发放，奖项可用于订阅极智选股、Z量化、工作室等金融界核心产品；</p>
                    <p>3、奖品有效期为48小时，中奖后请及时联系专属投服兑换；如没有专属投服，请咨询400-166-1188转1；</p>
                </div>
            </div>
        </div>
    </div>
    <div class="bg4">
    </div>
    <div class="bg5">
    </div>

    <div class="footer">
        <div class="box-con">
            <div id="divdown1">
                <span id="text-day" class="text-day"></span>
                <span id="text-hour" class="text-hour"></span>
                <span id="text-min" class="text-min"></span>
                <span id="text-sec" class="text-sec"></span>
            </div>
            <a href="javascript:;" @click="pop">&nbsp;</a>
        </div>
    </div>
    <div class='fixBg' v-if="popShow || pop1Show"></div>
    <div class="pop" v-if="popShow">
        <div class="join" v-if="joinShow">
            <strong>您离大奖只有一步之遥</strong>
            <p>快速报名，获取抽奖机会</p>
            <span class="userNamebox">
                姓名
              <input type="text" class="userName" placeholder="请输入您的中文名" v-model="userName" />
              <em v-html="txtUHtml" v-if="txtUShow"></em>
          </span>
            <span class="phonebox">
                手机
              <input type="text" class="phone" placeholder="请输入您的手机号" v-model="phone" />
              <em v-html="txtPHtml" v-if="txtPShow"></em>
          </span>
            <a href="javascript:;" class="btn btn-large btn-join" @click="joinSubmit">立即预约</a>
        </div>
        <div class="lottery-msg" v-if="lotteryMsgShow">
            <strong>太幸运啦！</strong>
            <p>恭喜您成功获得<span v-text="lotteryText">600元现金券</span>。<br />您的运气值战胜了<span v-text="perText">99.80%</span>的用户！</p>
            <a href="javascript:;" class="btn-close" @click="close">知道了</a>
            <em>奖品有效期为48小时，<br />请及时联系投服领取。</em>
        </div>
        <div class="lottery-msg1" v-if="lotteryMsg1Show">
            <strong>很遗憾</strong>
            <p>每个人只有1次抽奖机会，<br />要知足哟~</p>
            <a href="javascript:;" class="btn-close" @click="close">知道了</a>
        </div>
    </div>
    <div class="pop1" v-if="pop1Show">
        <a href="javascript:;" @click="close1"></a>
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
            txtUHtml: '',
            txtUShow: false,
            txtPHtml: '',
            txtPShow: false,
            joinShow: false,
            lotteryMsgShow: false,
            lotteryMsg1Show: false,
            lotteryText: '',
            perText: '',
            lotteryType: false,
            lotteryNum: '0',
            pop1Show: false
        }
    },
    computed: mapState({
        type: state => {
            return state.reservation.type
        },
        whereList: state => {
            return state.activity11Th.dataList
        },
        repeatType: state => {
            return state.activity11Th.repeatType
        },
        err: state => {
            return state.reservation.err
        }
    }),
    components: {},
    methods: {
        joinSubmit() {
            if (!this.type) {
                alert('提交中')
                return
            }
            var regname = /^[\u4e00-\u9fa5]+$/gi
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
            if (!this.userName || this.userName.length === 0) {
                this.txtUShow = true
                this.txtUHtml = '姓名不能为空！'
                return
            } else if (!regname.test(this.userName)) {
                this.txtUShow = true
                this.txtUHtml = '请输入中文名'
                return
            } else if (!this.phone || this.phone.length === 0) {
                this.txtPShow = true
                this.txtPHtml = '手机号不能为空！'
                return
            } else if (!reg.test(this.phone)) {
                this.txtPShow = true
                this.txtPHtml = '手机号输入不正确！'
                return
            }
            this.$store.dispatch('activity11Th/repeatFind', {
                phone: this.phone
            })

        },
        close() {
            this.popShow = false
            this.pop1Show = false
            this.joinShow = false
            this.lotteryMsgShow = false
            this.lotteryMsg1Show = false
            this.phone = ''
            this.userName = ''
        },
        close1() {
            this.popShow = false
            this.pop1Show = false
            this.joinShow = false
            this.lotteryMsgShow = false
            this.lotteryMsg1Show = false
        },
        pop() {
            // this.popShow = true
            // this.joinShow = true
            if (!this.lotteryType && this.lotteryNum === '0') {
                this.popShow = true
                this.joinShow = true
                this.lotteryMsgShow = false
                this.lotteryMsg1Show = false
                this.pop1Show = false
            } else {
                this.popShow = true
                this.pop1Show = false
                this.joinShow = false
                this.lotteryMsgShow = false
                this.lotteryMsg1Show = true
            }
        }
    },
    mounted() {

        $('.text-nav a').click(function() {
            var index = $(this).index()
            $('.text-box div').eq(index).show().siblings().hide()
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

        function ShowCountDown(year, month, day, divname) {
            var now = new Date()
            var endDate = new Date(year, month - 1, day)
            var leftTime = endDate.getTime() - now.getTime()
            var leftsecond = parseInt(leftTime / 1000)
            var day1 = Math.floor(leftsecond / (60 * 60 * 24))
            var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
            var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
            var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
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
        if (Math.round(new Date().getTime() / 1000) > transdate('2017-11-11 00:00:00')) {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 17, 'divdown1')

            }, 1000)
        } else if (Math.round(new Date().getTime() / 1000) > transdate('2017-11-17 00:00:00')) {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 24, 'divdown1')

            }, 1000)
        } else {
            window.setInterval(function() {
                ShowCountDown(2017, 11, 11, 'divdown1')

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
        var _this = this
        this.$watch('txtUShow', txtUShow => {
            setTimeout(function() {
                _this.txtUShow = false
                _this.txtUHtml = ''
            }, 1000)
        })
        this.$watch('txtPShow', txtPShow => {
            setTimeout(function() {
                _this.txtPShow = false
                _this.txtPHtml = ''
            }, 1000)
        })
        this.$watch('err', err => {
            alert(err.msg)
        })
        this.$watch('type', type => {
            if (type) {
                this.pop1Show = true
                this.popShow = false
                this.joinShow = false
                this.lotteryNum = '1'
            }
        }, {
            deep: true
        })
        // 转盘样式，a：旋转角度，p：概率（1代表100%），t：需要显示的其它信息（文案or分享）
        var resultAngle = [{
                a: 0,
                p: 0,
                t: '300元'
            },
            {
                a: 60,
                p: 0.5,
                t: '500元'
            },
            {
                a: 120,
                p: 0,
                t: '100元'
            },
            {
                a: 180,
                p: 0,
                t: '200元'
            },
            {
                a: 240,
                p: 0,
                t: '400元'
            },
            {
                a: 300,
                p: 0.5,
                t: '600元'
            }
        ]
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

                for (var i in resultAngle) {
                    // 区块的起始值
                    startPos = endPos + 1;
                    // 区块的结束值
                    endPos = endPos + 100 * resultAngle[i].p;

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
                    self.rotateAngle = self.rotateAngle - randCircle * 360 - resultAngle[resultIndex].a - self.rotateAngle % 360;
                    $('#i_bg').css({
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
                    self.rotateAngle = self.rotateAngle + randCircle * 360 + resultAngle[resultIndex].a - self.rotateAngle % 360;
                    $('#i_cont').css({
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
                    _this.lotteryText = resultAngle[resultIndex].t + '现金券'
                    _this.popShow = true
                    _this.pop1Show = false
                    _this.joinShow = false
                    _this.lotteryMsgShow = true
                    _this.lotteryMsg1Show = false
                    _this.lotteryType = true
                    _this.lotteryNum = '0'
                    var day = new Date();
                    day.setTime(day.getTime());
                    var s2 = (day.getMonth() + 1) + '月' + day.getDate() + '日' + day.getHours() + '时' + day.getMinutes() + '分';
                    var html = '<li>' + s2 + '，' + _this.phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2") + ' 抽中' + resultAngle[resultIndex].t + '</li>'
                    $('.text-scroll ul').append(html)
                    _this.$store.dispatch('activity11Th/addData', {
                        userName: _this.userName,
                        phone: _this.phone,
                        bizsource: getQueryString('bizsource') || 'mSite',
                        tgqdcode: getQueryString('tgqdcode') || 'E6JYHN3V',
                        createDataTime: s2,
                        msg: resultAngle[resultIndex].t,
                        boolean: true
                    })
                }, duringTime * 1000);
            }
        }
        $('#i_cont').click(function() {
            // 旋转结束前，不允许再次触发
            if (!_this.lotteryType && _this.lotteryNum === '1') {
                if (rotate.flagClick) {
                    rotate.calculateResult(1, 1);
                }
            } else if (!_this.lotteryType && _this.lotteryNum === '0') {
                _this.popShow = true
                _this.pop1Show = false
                _this.joinShow = true
                _this.lotteryMsgShow = false
                _this.lotteryMsg1Show = false
            } else {
                _this.popShow = true
                _this.pop1Show = false
                _this.joinShow = false
                _this.lotteryMsgShow = false
                _this.lotteryMsg1Show = true
            }

        });
        this.$store.dispatch('activity11Th/whereList')
        this.$watch('repeatType', repeatType => {
            if (repeatType === 1) {
                this.$store.dispatch('reservation/fetch', {
                    aid: '792322625599270912',
                    userName: this.userName,
                    phone: this.phone,
                    bizsource: getQueryString('bizsource') || 'mSite',
                    source: '4',
                    tgqdcode: getQueryString('tgqdcode') || 'E6JYHN3V'
                })
            } else if (repeatType === 2) {
                _this.popShow = true
                _this.pop1Show = false
                _this.joinShow = false
                _this.lotteryMsgShow = false
                _this.lotteryMsg1Show = true
            }
        })
        this.$watch('whereList', whereList => {
            var liHeight = $('.text-scroll ul li').height()
            setInterval(function() {
                $('.text-scroll ul').animate({
                    'margin-top': '-' + liHeight
                }, 500, function() {
                    $('.text-scroll ul').append($('.text-scroll ul li:first'))
                    $('.text-scroll ul').css({
                        'margin-top': '0'
                    })
                })
            }, 1000)
        })
    }
}
</script>
