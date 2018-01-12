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
@import '../assets/css/swiper.min.css';
@import '../assets/css/animate.min.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg1.jpg") center 0 no-repeat;
    height: 698px;
}
.bg2 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg2.jpg") center 0 no-repeat;
    height: 1402px;
}
.bg3 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg3.jpg") center 0 no-repeat;
    height: 1102px;
}
.bg4 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg4.jpg") center 0 no-repeat;
    height: 1377px;
}
.bg5 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg5.jpg") center 0 no-repeat;
    height: 978px;
}
.bg6 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg6.jpg") center 0 no-repeat;
    height: 646px;
}
.bg7 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg7.jpg") center 0 no-repeat;
    height: 750px;
}
.bg8 {
    background: url("../assets/images/sdjg-activity/sdjg-web-bg8.jpg") center 0 no-repeat;
    height: 1327px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}

.swiper-container {
    width: 471px;
    height: 311px;
    z-index: 3;
    position: absolute;
    top: 102px;
    right: 4px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
}
#pagination {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
.mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
    filter: alpha(opacity=60);
    top: 0;
    left: 0;
    z-index: 2;
}
.layer {
    position: fixed;
    left: 0;
    right: 0;
    top: 15%;
    bottom: 15%;
    text-align: center;
    opacity: 0.9;
    z-index: 3;
    animation: pop 0.6s cubic-bezier(1,-0.49, 0, 1.5);
}

.layer.success {}
.layer.success .box {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 704px;
    height: 307px;
    background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170814zlhweb/popup-success.png") no-repeat center bottom;
}

.layer.popup-join {}
.layer.popup-join .box {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 704px;
    height: 355px;
    background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170814zlhweb/popup-join.png") no-repeat center bottom;
}
.layer.popup-join .box .btn-join,
.layer.popup-join .box span {
    position: absolute;
    top: 196px;
}
.layer.popup-join .box span input {
    width: 211px;
    height: 40px;
    line-height: 40px;
    background: none;
    border: none;
    font-size: 20px;
    color: #452609;
}
.layer.popup-join .box span input::-webkit-input-placeholder {
    color: #A78B67;
}
.layer.popup-join .box .userNamebox {
    left: 101px;
}
.layer.popup-join .box .phonebox {
    right: 32px;
}
.layer.popup-join .box .phonebox input {
    width: 248px;
}
.layer.popup-join .box .btn-join {
    top: 260px;
    right: 227px;
    opacity: 0;
    width: 214px;
    height: 62px;
}
.layer.popup-join .box .tooltip {
    top: -32px;
    right: 0;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    opacity: 0.8;
}

.layer .box .close {
    position: absolute;
    right: 0;
    top: 0;
    display: inline-block;
    width: 45px;
    height: 45px;
    background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170814zlhweb/icon-close.png") no-repeat center center;
    cursor: pointer;
    z-index: 1;
}
.player img {
    display: none;
}
.join em {
    position: absolute;
    top: -36px;
    left: 0;
    background: #fff;
    border: 1px red solid;
    border-radius: 5px;
    padding: 5px;
}
.footer {
    width: 100%;
    height: 236px;
    background: url("../assets/images/sdjg-activity/sdjg-web-footer.png") center 0 no-repeat;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
.footer .box-con div {
    width: 881px;
    height: 208px;
    float: left;
}
.footer div p:first-child {
    margin-left: -25px;
}
.footer div p {
    width: 320px;
    height: 40px;
    line-height: 40px;
    float: left;
    margin: 168px 0 0 100px;
    position: relative;
}
.footer div p span {
    font-size: 16px;
    color: #ebab55;
    float: left;
    width: 50px;
    text-align: left;
}
.footer div p input {
    width: 240px;
    height: 30px;
    padding: 5px 10px;
    float: left;
    background-color: #76562b;
    border: none;
    color: #ebab55;
}
.footer a {
    width: 210px;
    height: 58px;
    background: url("../assets/images/sdjg-activity/sdjg-web-btn1.png") center 0 no-repeat;
    position: absolute;
    top: 109px;
    right: -29px;
}
.footer em {
    margin-left: 40px;
    float: left;
    font-size: 12px;
    background: #fff;
    border: 1px red solid;
    border-radius: 3px;
    padding: 0 5px;
    position: absolute;
    right: 0;
    top: -1px;
}

.bg3 .box-con div {
    width: 881px;
    height: 208px;
    float: left;
    position: absolute;
    bottom: 21px;
    left: 51px;
}
.bg3 div p:first-child {
    margin-left: 0;
}
.bg3 div p {
    width: 320px;
    height: 40px;
    line-height: 40px;
    float: left;
    margin: 168px 0 0 44px;
    position: relative;
}
.bg3 div p span {
    font-size: 16px;
    color: #ebab55;
    float: left;
    width: 50px;
    text-align: left;
}
.bg3 div p input {
    width: 210px;
    height: 30px;
    padding: 5px 10px;
    float: left;
    background-color: #76562b;
    border: none;
    color: #ebab55;
}
.bg3 a {
    width: 214px;
    height: 59px;
    background: url("../assets/images/sdjg-activity/sdjg-web-btn2.png") center 0 no-repeat;
    position: absolute;
    bottom: 45px;
    right: 42px;
}
.bg3 em {
    margin-left: 40px;
    float: left;
    font-size: 12px;
    background: #fff;
    border: 1px red solid;
    border-radius: 3px;
    padding: 0 5px;
    position: absolute;
    right: 0;
    top: -1px;
}
.bg6 .box-con .signInput {
    width: 881px;
    height: 208px;
    float: left;
    position: absolute;
    bottom: 64px;
    left: 51px;
}
.bg6 .signInput p:first-child {
    margin-left: 0;
}
.bg6 .signInput p {
    width: 320px;
    height: 40px;
    line-height: 40px;
    float: left;
    margin: 168px 0 0 44px;
    position: relative;
}
.bg6 .signInput p span {
    font-size: 16px;
    color: #ebab55;
    float: left;
    width: 50px;
    text-align: left;
}
.bg6 .signInput p input {
    width: 210px;
    height: 30px;
    padding: 5px 10px;
    float: left;
    background-color: #76562b;
    border: none;
    color: #ebab55;
}
.bg6 a {
    width: 214px;
    height: 59px;
    background: url("../assets/images/sdjg-activity/sdjg-web-btn2.png") center 0 no-repeat;
    position: absolute;
    bottom: 88px;
    right: 42px;
}
.bg6 em {
    margin-left: 40px;
    float: left;
    font-size: 12px;
    background: #fff;
    border: 1px red solid;
    border-radius: 3px;
    padding: 0 5px;
    position: absolute;
    right: 0;
    top: -1px;
}
.bg4 .video-box {
    width: 645px;
    height: 405px;
    position: absolute;
    top: 71px;
    left: 5px;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    overflow: hidden;
}
.bg4 video {
    width: 645px;
    height: 405px;
}
.bg4 .links {
    width: 258px;
    height: 333px;
    position: absolute;
    top: 128px;
    right: 22px;
}
.bg4 .links a {
    float: left;
    width: 100%;
    height: 16.66%;
}
.big-circle {
    width: 162px;
    height: 160px;
    position: relative;
    float: left;
    margin: 0 85px 35px;
}
.big-circle ul {
    padding-top: 50px;
}
.big-circle P,
.small-circle p {
    color: #FFF;
    padding-left: 0;
    text-align: center;
}
.big-circle .after,
.big-circle .before,
.big-circle:after,
.big-circle:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
.big-circle .before,
.big-circle:before {
    background: transparent url("../assets/images/sdjg-activity/big-circle-fine.png") no-repeat;
    animation: clockwise 1s linear infinite;
    -webkit-animation: clockwise 1s linear infinite;
    /*Safari and Chrome*/
}
.big-circle .after,
.big-circle:after {
    background: transparent url("../assets/images/sdjg-activity/big-circle-thick.png") no-repeat;
    animation: anticlockwise 1s linear infinite;
    -webkit-animation: anticlockwise 1s linear infinite;
    /*Safari and Chrome*/
}

.small-circle {
    width: 154px;
    height: 154px;
    position: relative;
}
.small-circle .after,
.small-circle .before,
.small-circle:after,
.small-circle:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
.small-circle .before,
.small-circle:before {
    background: transparent url("../assets/images/sdjg-activity/small-circle-fine.png") no-repeat;
    animation: clockwise 1s linear infinite;
    -webkit-animation: clockwise 1s linear infinite;
    /*Safari and Chrome*/
}
.small-circle .after,
.small-circle:after {
    background: transparent url("../assets/images/sdjg-activity/small-circle-thick.png") no-repeat;
    animation: anticlockwise 1s linear infinite;
    -webkit-animation: anticlockwise 1s linear infinite;
    /*Safari and Chrome*/
}
@keyframes clockwise {
    from {
        transform: rotate(0);
        -ms-transform: rotate(0);
        /* IE 9 */
        -webkit-transform: rotate(0);
        /* Safari and Chrome */
        -o-transform: rotate(0);
        /* Opera */
        -moz-transform: rotate(0);
        /* Firefox */
    }

    to {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        /* IE 9 */
        -webkit-transform: rotate(360deg);
        /* Safari and Chrome */
        -o-transform: rotate(360deg);
        /* Opera */
        -moz-transform: rotate(360deg);
        /* Firefox */
    }
}
/* Firefox */
@-moz-keyframes clockwise {
    from {
        transform: rotate(0);
        -ms-transform: rotate(0);
        /* IE 9 */
        -webkit-transform: rotate(0);
        /* Safari and Chrome */
        -o-transform: rotate(0);
        /* Opera */
        -moz-transform: rotate(0);
        /* Firefox */
    }

    to {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        /* IE 9 */
        -webkit-transform: rotate(360deg);
        /* Safari and Chrome */
        -o-transform: rotate(360deg);
        /* Opera */
        -moz-transform: rotate(360deg);
        /* Firefox */
    }
}
/* Safari 和 Chrome */
@-webkit-keyframes clockwise {
    from {
        transform: rotate(0);
        -ms-transform: rotate(0);
        /* IE 9 */
        -webkit-transform: rotate(0);
        /* Safari and Chrome */
        -o-transform: rotate(0);
        /* Opera */
        -moz-transform: rotate(0);
        /* Firefox */
    }

    to {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        /* IE 9 */
        -webkit-transform: rotate(360deg);
        /* Safari and Chrome */
        -o-transform: rotate(360deg);
        /* Opera */
        -moz-transform: rotate(360deg);
        /* Firefox */
    }
}
/* Opera */
@-o-keyframes clockwise {
    from {
        transform: rotate(0);
        -ms-transform: rotate(0);
        /* IE 9 */
        -webkit-transform: rotate(0);
        /* Safari and Chrome */
        -o-transform: rotate(0);
        /* Opera */
        -moz-transform: rotate(0);
        /* Firefox */
    }

    to {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        /* IE 9 */
        -webkit-transform: rotate(360deg);
        /* Safari and Chrome */
        -o-transform: rotate(360deg);
        /* Opera */
        -moz-transform: rotate(360deg);
        /* Firefox */
    }
}
@keyframes anticlockwise {
    from {
        transform: rotate(0);
        -ms-transform: rotate(0);
        /* IE 9 */
        -webkit-transform: rotate(0);
        /* Safari and Chrome */
        -o-transform: rotate(0);
        /* Opera */
        -moz-transform: rotate(0);
        /* Firefox */
    }

    to {
        transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        /* IE 9 */
        -webkit-transform: rotate(-360deg);
        /* Safari and Chrome */
        -o-transform: rotate(-360deg);
        /* Opera */
        -moz-transform: rotate(-360deg);
        /* Firefox */
    }
}
.bg5 .box-con .circle-box {
    width: 1000px;
    height: 410px;
    position: absolute;
    bottom: 41px;
    left: 0;
}
.swiper-wrapper .slide-img1 {
    width: 100%;
    height: 100%;
    background: url("../assets/images/sdjg-activity/sdjg-web-img1.jpg") center 0 no-repeat;
    background-size: 100%;
}
.swiper-wrapper .slide-img2 {
    width: 100%;
    height: 100%;
    background: url("../assets/images/sdjg-activity/sdjg-web-img2.jpg") center 0 no-repeat;
    background-size: 100%;
}
.swiper-wrapper .slide-img3 {
    width: 100%;
    height: 100%;
    background: url("../assets/images/sdjg-activity/sdjg-web-img3.jpg") center 0 no-repeat;
    background-size: 100%;
}
.swiper-wrapper .slide-img4 {
    width: 100%;
    height: 100%;
    background: url("../assets/images/sdjg-activity/sdjg-web-img4.jpg") center 0 no-repeat;
    background-size: 100%;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
    </div>
    <div class="bg3">
        <div class="box-con">
            <div>
                <p>
                    <span>姓名：</span>
                    <input type="text" value="" placeholder="请输入您的中文姓名" v-model="bg3UserName" />
                    <em v-html="bg3TxtUHtml" v-if="bg3TxtUShow"></em>
                </p>
                <p>
                    <span>手机：</span>
                    <input type="text" value="" placeholder="请输入您的11位手机号码" v-model="bg3Phone" />
                    <em v-html="bg3TxtPHtml" v-if="bg3TxtPShow"></em>
                </p>
            </div>
            <a href="javascript:;" @click="bg3JoinSubmit" class="pulse animated infinite">&nbsp;</a>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <!-- <video src="http://flvdata.jrj.com.cn/2012/2017/qita/20170911mls.mp4" controls="controls" id="myvideo" autoplay="autoplay"> -->
            <div class="video-box">
                <video src="http://flvdata.jrj.com.cn/2012/2017/qita/20170911mls.mp4" controls="controls" id="myvideo">
                您的浏览器不支持 video 标签。
                </video>
            </div>
            <div class="links">
                <a href="http://finance.jrj.com.cn/focus/csx/"></a>
                <a href="http://finance.jrj.com.cn/ztcfjkedaxunfei/"></a>
                <a href="http://finance.jrj.com.cn/focus/jjj/"></a>
                <a href="http://finance.jrj.com.cn/focus/csx/"></a>
                <a href="http://finance.jrj.com.cn/ztcfjaierphone/"></a>
                <a href="http://finance.jrj.com.cn/ztcfjbaofengjituan/"></a>
            </div>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <div class="circle-box">
                <div class="big-circle circle1">
                    <ul>
                        <p>DDE</p>
                        <p>连续飘红</p>
                    </ul>
                </div>
                <div class="big-circle circle1">
                    <ul>
                        <p>资金强度</p>
                        <p>超过阈值</p>
                    </ul>
                </div>
                <div class="big-circle circle1">
                    <ul>
                        <p style="padding-top:20px;">量能持续</p>
                    </ul>
                </div>
                <div class="big-circle circle1">
                    <ul>
                        <p>技术面</p>
                        <p>平台突破</p>
                    </ul>
                </div>
                <div class="big-circle circle1">
                    <ul>
                        <p>底部</p>
                        <p>蓄势待发</p>
                    </ul>
                </div>
                <div class="big-circle circle1">
                    <ul>
                        <p>盈利</p>
                        <p>能力稳定</p>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="bg6">
        <div class="box-con">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-img1"></div>
                    <div class="swiper-slide slide-img2"></div>
                    <div class="swiper-slide slide-img3"></div>
                    <div class="swiper-slide slide-img4"></div>
                </div>
                <div class="swiper-pagination" id="pagination"></div>
            </div>
            <div class="signInput">
                <p>
                    <span>姓名：</span>
                    <input type="text" value="" placeholder="请输入您的中文姓名" v-model="bg6UserName" />
                    <em v-html="bg6TxtUHtml" v-if="bg6TxtUShow"></em>
                </p>
                <p>
                    <span>手机：</span>
                    <input type="text" value="" placeholder="请输入您的11位手机号码" v-model="bg6Phone" />
                    <em v-html="bg6TxtPHtml" v-if="bg6TxtPShow"></em>
                </p>
            </div>
            <a href="javascript:;" @click="bg6JoinSubmit" class="pulse animated infinite">&nbsp;</a>
        </div>
    </div>
    <div class="bg7">
    </div>
    <div class="bg8">
    </div>
    <div class="footer">
        <div class="box-con">
            <div>
                <p>
                    <span>姓名：</span>
                    <input type="text" value="" placeholder="请输入您的中文姓名" v-model="fUserName" />
                    <em v-html="fTxtUHtml" v-if="fTxtUShow"></em>
                </p>
                <p>
                    <span>手机：</span>
                    <input type="text" value="" placeholder="请输入您的11位手机号码" v-model="fPhone" />
                    <em v-html="fTxtPHtml" v-if="fTxtPShow"></em>
                </p>
            </div>
            <a href="javascript:;" @click="fJoinSubmit" class="pulse animated infinite">&nbsp;</a>
        </div>
    </div>
    <div class="mask" v-if="maskShow"></div>
    <div class="layer success" v-if="successShow">
        <div class="box">
            <i class="close" @click="close"></i>
        </div>
    </div>
    <div class="layer popup-join" v-if="joinShow">
        <div class="box">
            <i class="close" @click="close"></i>
            <div class="join">
                <span class="userNamebox">
                  <input type="text" class="userName" placeholder="请输入您的中文名" v-model="userName" />
                  <em v-html="txtUHtml" v-if="txtUShow"></em>
              </span>
                <span class="phonebox">
                  <input type="text" class="phone" placeholder="请输入您的11位手机号码" v-model="phone" />
                  <em v-html="txtPHtml" v-if="txtPShow"></em>
              </span>
                <a href="javascript:;" class="btn btn-large btn-join" @click="joinSubmit">立即预约</a>
            </div>
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

export default {
    data() {
        return {
            show: false,
            maskShow: false,
            successShow: false,
            joinShow: false,
            txtUHtml: '',
            txtUShow: false,
            txtPHtml: '',
            txtPShow: false,
            fTxtUHtml: '',
            fTxtUShow: false,
            fTxtPHtml: '',
            fTxtPShow: false,
            bg3TxtUHtml: '',
            bg3TxtUShow: false,
            bg3TxtPHtml: '',
            bg3TxtPShow: false,
            bg6TxtUHtml: '',
            bg6TxtUShow: false,
            bg6TxtPHtml: '',
            bg6TxtPShow: false

        }
    },
    computed: mapState({
        type: state => {
            return state.reservation.type
        },
        err: state => {
            return state.reservation.err
        }
    }),
    components: {},
    methods: {
        popShow() {
            this.maskShow = true
            this.joinShow = true
        },
        close() {
            this.maskShow = false
            this.successShow = false
            this.joinShow = false
            this.userName = ''
            this.phone = ''
        },
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
            this.$store.dispatch('reservation/fetch', {
                aid: '818141666863591424',
                userName: this.userName,
                phone: this.phone,
                bizsource: 'JRJ',
                source: '1',
                tgqdcode: 'L54MST72'
            })
        },
        fJoinSubmit() {
            if (!this.type) {
                alert('提交中')
                return
            }
            var regname = /^[\u4e00-\u9fa5]+$/gi
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
            if (!this.fUserName || this.fUserName.length === 0) {
                this.fTxtUShow = true
                this.fTxtUHtml = '姓名不能为空！'
                return
            } else if (!regname.test(this.fUserName)) {
                this.fTxtUShow = true
                this.fTxtUHtml = '请输入中文名'
                return
            } else if (!this.fPhone || this.fPhone.length === 0) {
                this.fTxtPShow = true
                this.fTxtPHtml = '手机号不能为空！'
                return
            } else if (!reg.test(this.fPhone)) {
                this.fTxtPShow = true
                this.fTxtPHtml = '手机号输入不正确！'
                return
            }
            this.$store.dispatch('reservation/fetch', {
                aid: '818141666863591424',
                userName: this.fUserName,
                phone: this.fPhone,
                bizsource: 'JRJ',
                source: '1',
                tgqdcode: 'L54MST72'
            })
            window.dcsMultiTrack('DCS.dcsuri', 'sdjg-activity-webClick', 'WT.ti', 'sdjg-activity-webClick')
        },
        bg3JoinSubmit() {
            if (!this.type) {
                alert('提交中')
                return
            }
            var regname = /^[\u4e00-\u9fa5]+$/gi
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
            if (!this.bg3UserName || this.bg3UserName.length === 0) {
                this.bg3TxtUShow = true
                this.bg3TxtUHtml = '姓名不能为空！'
                return
            } else if (!regname.test(this.bg3UserName)) {
                this.bg3TxtUShow = true
                this.bg3TxtUHtml = '请输入中文名'
                return
            } else if (!this.bg3Phone || this.bg3Phone.length === 0) {
                this.bg3TxtPShow = true
                this.bg3TxtPHtml = '手机号不能为空！'
                return
            } else if (!reg.test(this.bg3Phone)) {
                this.bg3TxtPShow = true
                this.bg3TxtPHtml = '手机号输入不正确！'
                return
            }
            this.$store.dispatch('reservation/fetch', {
                aid: '818141666863591424',
                userName: this.bg3UserName,
                phone: this.bg3Phone,
                bizsource: 'JRJ',
                source: '1',
                tgqdcode: 'L54MST72'
            })
            window.dcsMultiTrack('DCS.dcsuri', 'sdjg-activity-webClick', 'WT.ti', 'sdjg-activity-webClick')
        },
        bg6JoinSubmit() {
            if (!this.type) {
                alert('提交中')
                return
            }
            var regname = /^[\u4e00-\u9fa5]+$/gi
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
            if (!this.bg6UserName || this.bg6UserName.length === 0) {
                this.bg6TxtUShow = true
                this.bg6TxtUHtml = '姓名不能为空！'
                return
            } else if (!regname.test(this.bg6UserName)) {
                this.bg6TxtUShow = true
                this.bg6TxtUHtml = '请输入中文名'
                return
            } else if (!this.bg6Phone || this.bg6Phone.length === 0) {
                this.bg6TxtPShow = true
                this.bg6TxtPHtml = '手机号不能为空！'
                return
            } else if (!reg.test(this.bg6Phone)) {
                this.bg6TxtPShow = true
                this.bg6TxtPHtml = '手机号输入不正确！'
                return
            }
            this.$store.dispatch('reservation/fetch', {
                aid: '818141666863591424',
                userName: this.bg6UserName,
                phone: this.bg6Phone,
                bizsource: 'JRJ',
                source: '1',
                tgqdcode: 'L54MST72'
            })
            window.dcsMultiTrack('DCS.dcsuri', 'sdjg-activity-webClick', 'WT.ti', 'sdjg-activity-webClick')
        }
    },
    mounted() {
        document.title = '金融界实地调研 直击2018A股价值王'
        window.Swiper('.swiper-container', {
            slidesPerView: 1,
            paginationClickable: true,
            autoplay: 4000,
            loop: true,
            grabCursor: true,
            spaceBetween: 0,
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction: false
        })
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
        this.$watch('fTxtUShow', fTxtUShow => {
            setTimeout(function() {
                _this.fTxtUShow = false
                _this.fTxtUHtml = ''
            }, 1000)
        })
        this.$watch('fTxtPShow', fTxtPShow => {
            setTimeout(function() {
                _this.fTxtPShow = false
                _this.fTxtPHtml = ''
            }, 1000)
        })
        this.$watch('bg3TxtUShow', fTxtUShow => {
            setTimeout(function() {
                _this.bg3TxtUShow = false
                _this.bg3TxtUHtml = ''
            }, 1000)
        })
        this.$watch('bg3TxtPShow', fTxtPShow => {
            setTimeout(function() {
                _this.bg3TxtPShow = false
                _this.bg3TxtPHtml = ''
            }, 1000)
        })
        this.$watch('bg6TxtUShow', fTxtUShow => {
            setTimeout(function() {
                _this.bg6TxtUShow = false
                _this.bg6TxtUHtml = ''
            }, 1000)
        })
        this.$watch('bg6TxtPShow', fTxtPShow => {
            setTimeout(function() {
                _this.bg6TxtPShow = false
                _this.bg6TxtPHtml = ''
            }, 1000)
        })
        this.$watch('type', type => {
            if (type) {
                this.maskShow = true
                this.successShow = true
                this.joinShow = false
            }
        }, {
            deep: true
        })
        this.$watch('err', err => {
            alert(err.msg)
        })
    }
}
</script>
