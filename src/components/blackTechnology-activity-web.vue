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
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg1.jpg") center 0 no-repeat;
    height: 608px;
}
.bg2 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg2.jpg") center 0 no-repeat;
    height: 664px;
}
.bg3 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg3.jpg") center 0 no-repeat;
    height: 1158px;
}
.bg4 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg4.jpg") center 0 no-repeat;
    height: 598px;
}
.bg5 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg5.jpg") center 0 no-repeat;
    height: 673px;
}
.bg6 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg6.jpg") center 0 no-repeat;
    height: 749px;
    // margin-bottom: 147px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg3 a {
    width: 80px;
    height: 20px;
    float: left;
}
.bg3 a.link1 {
    margin: 428px 0 0 81px;
}
.bg3 a.link2 {
    margin: 428px 0 0 285px;
}
.bg3 a.link3 {
    margin: 428px 0 0 290px;
}
.bg4 a {
    width: 142px;
    height: 48px;
    float: right;
    margin: 26px 48px 0 0;
}
.bg5 .btn {
    width: 142px;
    height: 48px;
    float: right;
    margin: 21px 107px 0 0;
}

.swiper-container {
    width: 1000px;
    height: 334px;
    z-index: 3;
    margin-top: 144px;
    position: static;
    float: left;
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
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-success-pop.png") no-repeat center bottom;
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
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-close.png") no-repeat center center;
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
    height: 160px;
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-bg7.jpg") center 0 no-repeat;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
.footer .box-con div {
    width: 700px;
    height: 160px;
    float: left;
}
.footer div p:first-child {
    margin-left: 112px;
}
.footer div p {
    width: 261px;
    height: 39px;
    line-height: 39px;
    float: left;
    margin: 104px 0 0 32px;
    position: relative;
}
.footer div p span {
    font-size: 16px;
    color: #fff;
    float: left;
    width: 48px;
    text-align: left;
}
.footer div p input {
    width: 191px;
    height: 28px;
    padding: 5px 10px;
    float: left;
    border: none;
    background: none;
}
.footer a {
    width: 210px;
    height: 58px;
    float: right;
    margin: 81px 84px 0 0;
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
#swiper-button-prev {
    width: 70px;
    height: 70px;
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-prev.png") 0 0 no-repeat;
    position: absolute;
    top: 287px;
    left: -96px;
}
#swiper-button-next {
    width: 70px;
    height: 70px;
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-next.png") 0 0 no-repeat;
    position: absolute;
    top: 287px;
    right: -96px;
}
.codeImg {
    width: 200px;
    height: 230px;
    position: fixed;
    bottom: 160px;
    right: 0;
    z-index: 999;
    background-color: #011f86;
    color: #07b0f5;
    border-radius: 10px;
}
.codeImg p {
    width: 100%;
    line-height: 30px;
    font-size: 16px;
    float: left;
    text-align: center;

}
.codeImg img {
    width: 190px;
    height: 190px;
    float: left;
    margin-left: 5px;
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
            <a href="http://itougu.jrj.com.cn/activity/web/zlhweb7.jspa#section1" class="link1">&nbsp;</a>
            <a href="http://itougu.jrj.com.cn/activity/web/vipweb.jspa" class="link2">&nbsp;</a>
            <a href="http://itougu.jrj.com.cn/activity/web/zlhweb7.jspa#section3" class="link3">&nbsp;</a>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <a href="javascript:;" @click="popShow">&nbsp;</a>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <!-- <a href="javascript:;" class="btn" @click="popShow">&nbsp;</a> -->

        </div>
    </div>
    <div class="bg6">
        <div class="box-con">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../assets/images/blackTechnology-activity/blackTechnology-web-img1.png" class="main-img"></div>
                    <div class="swiper-slide"><img src="../assets/images/blackTechnology-activity/blackTechnology-web-img2.png" class="main-img"></div>
                    <div class="swiper-slide"><img src="../assets/images/blackTechnology-activity/blackTechnology-web-img3.png" class="main-img"></div>
                </div>
                <div class="swiper-button-prev swiper-button-white" id="swiper-button-prev"></div>
                <div class="swiper-button-next swiper-button-white" id="swiper-button-next"></div>
            </div>
        </div>
    </div>
    <div class="footer">
        <div class="box-con">
            <div>
                <p>
                    <span>&nbsp;</span>
                    <input type="text" value="" placeholder="请输入您的中文姓名" v-model="fUserName" />
                    <em v-html="fTxtUHtml" v-if="fTxtUShow"></em>
                </p>
                <p>
                    <span>&nbsp;</span>
                    <input type="text" value="" placeholder="请输入您的11位手机号码" v-model="fPhone" />
                    <em v-html="fTxtPHtml" v-if="fTxtPShow"></em>
                </p>
            </div>
            <a href="javascript:;" @click="fJoinSubmit">&nbsp;</a>
        </div>
    </div>

    <div class="codeImg">
        <p>扫码抽奖</p>
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/11th-activity-code.png" />
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
            fTxtPShow: false

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
                aid: '796677455495147520',
                userName: this.userName,
                phone: this.phone,
                bizsource: 'mSite',
                source: '1',
                tgqdcode: '6YXK263WM'
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
                aid: '796677455495147520',
                userName: this.fUserName,
                phone: this.fPhone,
                bizsource: 'mSite',
                source: '1',
                tgqdcode: '6YXK263WM'
            })
        }
    },
    mounted() {
        // document.title = '股市惊现“黑科技”'
        window.Swiper('.swiper-container', {
            slidesPerView: 1,
            paginationClickable: true,
            autoplay: 3000,
            loop: true,
            grabCursor: true,
            spaceBetween: 0,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
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
