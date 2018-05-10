<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.swiper-pagination {
    position: absolute;
    bottom: 5px;
    width: 100%;
    text-align: center;
    z-index: 9;
}

.swiper-pagination-switch {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: #999;
    box-shadow: 0 1px 2px #555 inset;
    margin: 0 3px;
    cursor: pointer;
}

.swiper-active-switch {
    background: #fff;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
@import '~swiper/dist/idangerous.swiper.css';
@import '../assets/css/animate.min.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/ssjj18-activity/ssjj18-web-bg1.jpg") center 0 no-repeat;
    height: 509px;
}
.bg2 {
    background: url("../assets/images/ssjj18-activity/ssjj18-web-bg2.jpg") center 0 no-repeat;
    height: 297px;
}
.bg3 {
    background: url("../assets/images/ssjj18-activity/ssjj18-web-bg3.jpg") center 0 no-repeat;
    height: 967px;
}
.bg4 {
    background: url("../assets/images/ssjj18-activity/ssjj18-web-bg4.jpg") center 0 no-repeat;
    height: 771px;
}
.bg5 {
    background: url("../assets/images/ssjj18-activity/ssjj18-web-bg5.jpg") center 0 no-repeat;
    height: 1106px;
}
.bg6 {
    background: url("../assets/images/ssjj18-activity/ssjj18-web-bg6.jpg") center 0 no-repeat;
    height: 743px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg2 video {
    width: 862px;
    height: 482px;
    position: absolute;
    top: 140px;
    left: 75px;
}
// .bg4 ul {
//     width: 904px;
//     height: 186px;
//     position: absolute;
//     top: 219px;
//     left: 47px;
// }
// .bg4 ul li {
//     float: left;
//     width: 274px;
//     height: 186px;
//     background-color: #373438;
//     margin: 0 13px;
// }
// .bg4 p {
//     width: 100%;
//     font-size: 14px;
//     color: #ffeab5;
//     text-align: center;
//     position: absolute;
//     top: 421px;
//     left: 0;
// }

.footer {
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-footer.jpg") center bottom no-repeat;
    z-index: 10;
}
.swiper-box {
    width: 329px;
    height: 204px;
    position: absolute;
    top: 27px;
    right: 33px;
}
.swiper-container {
    width: 329px;
    height: 204px;
}
.swiper-container .swiper-slide {
    position: relative;
}
.swiper-container .swiper-slide span {
    opacity: 0;
}
.swiper-container .img1 {
    background: url("../assets/images/ssjj18-activity/1.jpg") no-repeat;
    background-size: 100% 100%;
}
.swiper-container .img2 {
    background: url("../assets/images/ssjj18-activity/2.jpg") no-repeat;
    background-size: 100% 100%;
}
.swiper-container .img3 {
    background: url("../assets/images/ssjj18-activity/3.jpg") no-repeat;
    background-size: 100% 100%;
}
.bg3 a {
    width: 635px;
    height: 133px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -317.5px;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn1.png") no-repeat;
    background-size: 100% 100%;
}
.bg4 .a1 {
    width: 117px;
    height: 38px;
    position: absolute;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn2.png") no-repeat;
    background-size: 100% 100%;
    top: 505px;
    left: 218px;
}
.bg4 .a2 {
    width: 635px;
    height: 133px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -317.5px;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn1.png") no-repeat;
    background-size: 100% 100%;
}
.bg5 a {
    width: 635px;
    height: 135px;
    position: absolute;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn3.png") no-repeat;
    background-size: 100% 100%;
    bottom: 45px;
    left: 50%;
    margin-left: -317.5px;
}
.footer a {
    width: 152px;
    height: 48px;
    position: absolute;
    top: 25px;
    right: 186px;
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
    width: 420px;
    height: 247px;
    // background: url("../assets/images/ssjj-activity/zczg-web-pop.jpg") 0 0 no-repeat;
    background-color: #fccc6c;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    margin-top: -123.5px;
    left: 50%;
    margin-left: -210px;
    z-index: 12;
}
.pop .close {
    width: 17px;
    height: 17px;
    position: absolute;
    top: 21px;
    right: 28px;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-close.png") no-repeat;
    background-size: 100% 100%;
}

.join {
    width: 100%;
    height: 100%;
    position: relative;
}
.join h5 {
    width: 100%;
    text-align: center;
    font-size: 26px;
    color: #160800;
    font-weight: bold;
    padding-top: 25px;
}
.join span {
    position: absolute;
}
.join span input {
    width: 255px;
    height: 40px;
    line-height: 40px;
    background: none;
    border: none;
    font-size: 20px;
    color: #452609;
}
.join span input::-webkit-input-placeholder {
    color: #928781;
}
.join .phonebox {
    top: 83px;
    left: 40px;
}
.join .phonebox span {
    float: left;
    line-height: 40px;
    font-size: 18px;
    color: #160800;
    position: static;
    margin-right: 20px;
}
.join .phonebox input {
    float: left;
    width: 230px;
    height: 20px;
    background-color: #fff;
    border-radius: 10px;
    // text-align: center;
    padding: 10px 20px;
    border: 1px #895f46 solid;
}
.join .btn-join {
    position: absolute;
    bottom: 60px;
    left: 119px;
    width: 182px;
    height: 40px;
    background-color: #f72820;
    color: #fccc6c;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
    border-radius: 25px;
}
.join em {
    position: absolute;
    top: 4px;
    right: 0;
    background: #fff;
    border: 1px red solid;
    border-radius: 5px;
    padding: 5px;
}
.join strong {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 15px;
    left: 0;
    font-size: 14px;
    color: #160800;
    font-weight: normal;
}
.join p {
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #160800;
    line-height: 30px;
    padding: 15px 0;
}
.nav {
    position: relative;
    z-index: 10;
    width: 232px;
    height: 165px;
    position: fixed;
    top: 15%;
    right: 5%;
    background-color: #e5d4ac;
    border-radius: 10px;
}
.nav video {
    width: 230px;
    height: 130px;
    margin: 1px;
    border-radius: 10px 10px 0 0;
}
.nav p {
    font-size: 14px;
    color: #150902;
    text-align: center;
}
.nav a {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <div class="swiper-box">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide img1">
                        </div>
                        <div class="swiper-slide img2">
                        </div>
                        <div class="swiper-slide img3">
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>

        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <a href="javascript:;" @click="popClick(1)" class="pulse animated infinite"></a>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <a href="javascript:;" @click="popClick(2)" class="a1 pulse animated infinite"></a>
            <a href="javascript:;" @click="popClick(3)" class="a2 pulse animated infinite"></a>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <a href="javascript:;" @click="popClick(4)" class="pulse animated infinite"></a>
        </div>
    </div>
    <div class="bg6">
    </div>
    <div class="footer">
        <div class="box-con">
            <a href="javascript:;" @click="popClick(5)"></a>
        </div>
    </div>
    <div class="nav">
        <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/201805ssjjsj.mp4" controls="controls" id="myvideo" autoplay="autoplay">
        您的浏览器不支持 video 标签。
        </video>
        <p>5月掘金计划视频</p>
        <a href="javascript:;" @click="launchFullScreen"></a>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <div class="join" v-show="editType">
            <h5>预约领取</h5>
            <span class="phonebox">
            <span>手机</span>
            <input type="text" class="phone" placeholder="请输入您的11位手机号码" v-model="phone" />
            <em v-html="txtPHtml" v-if="txtPShow"></em>
            </span>
            <a href="javascript:;" class="btn btn-large btn-join" @click="joinSubmit">立即预约</a>
            <strong>稍后将由金融界智能投服助理联系您发放。</strong>
        </div>
        <div class="join" v-show="!editType">
            <h5>预约成功</h5>
            <p>金融界高级投服将会在3个工作日内<br />为您安排预约名额。</p>
            <a href="javascript:;" class="btn btn-large btn-join" style="bottom:44px;" @click="close">知道了</a>
        </div>
        <a href="javascript:;" class="close" @click="close"></a>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import Swiper from 'swiper/dist/idangerous.swiper.js'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import getQueryString from 'utils/getQueryString'
export default {
    data() {
        return {
            popShow: false,
            codeImg: '',
            txtUHtml: '',
            txtUShow: false,
            txtPHtml: '',
            txtPShow: false,
            editType: false
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
        popClick(i) {
            this.popShow = true
            this.editType = true
            window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-web-' + i, 'WT.ti', 'ssjj18-web-' + i)
        },
        close() {
            this.popShow = false
            this.editType = false
            window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-web-close', 'WT.ti', 'ssjj18-web-close')
        },
        joinSubmit() {
            if (!this.type) {
                alert('提交中')
                return
            }
            var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/
            if (!this.phone || this.phone.length === 0) {
                this.txtPShow = true
                this.txtPHtml = '手机号不能为空！'
                return
            } else if (!reg.test(this.phone)) {
                this.txtPShow = true
                this.txtPHtml = '手机号输入不正确！'
                return
            }
            this.$store.dispatch('reservation/fetch', {
                aid: '859800251288633344',
                userName: '',
                phone: this.phone,
                bizsource: getQueryString('bizsource') || 'JRJ',
                source: '1',
                tgqdcode: getQueryString('tgqdcode') || '4VGMD5G7'
            })
        },
        launchFullScreen() {
            // var element = document.documentElement;
            var element = document.getElementById('myvideo')
            if (element.requestFullScreen) {
                element.requestFullScreen();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
            } else if (element.msRequestFullscreen) {
                element.msRequestFullscreen();
            }
            window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-web-video', 'WT.ti', 'ssjj18-web-video')
        }
    },
    mounted() {
        document.title = '2018盛世掘金火爆升级-金融界'
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
        this.$watch('type', type => {
            if (type) {
                this.phone = ''
                this.editType = false
                window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-web-success', 'WT.ti', 'ssjj18-web-success')
            }
        }, {
            deep: true
        })
        this.$watch('err', err => {
            alert(err.msg)
        })


        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            effect: 'fade',
            grabCursor: true,
            centeredSlides: false,
            watchActiveIndex: false,
            createPagination: true,
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            paginationClickable: true,
            autoplay: 4000,
            autoplayDisableOnInteraction: false
        })
    }
}
</script>
