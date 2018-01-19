<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

input::-webkit-input-placeholder {
    color: #ebab55;
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
    background: url("../assets/images/sdjg-activity/sdjg-h5-bg1.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 8.66rem;
}
.bg2 {
    background: url("../assets/images/sdjg-activity/sdjg-h5-bg2-1.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 29.05rem;
}
.bg3 {
    background: url("../assets/images/sdjg-activity/sdjg-h5-bg3-1.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 16.08rem;
}
.bg4 {
    background: url("../assets/images/sdjg-activity/sdjg-h5-bg4.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 20.76rem;
}
.bg5 {
    background: url("../assets/images/sdjg-activity/sdjg-h5-bg5.jpg") center 0 no-repeat;
    background-size: 100%;
    height: 29.85rem;
}
.box-con {
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 100%;
}

.swiper-container {
    width: 6.82rem;
    height: 3.8rem;
    z-index: 3;
    position: absolute;
    bottom: 1.93rem;
    left: 0.43rem;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
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
    z-index: 11;
}
.layer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 40%;
    text-align: center;
    opacity: 0.9;
    z-index: 12;
    animation: pop 0.6s cubic-bezier(1,-0.49, 0, 1.5);
}

.layer.success {}
.layer.success .box {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 7rem;
    height: 2.78rem;
    background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170814zlhweb/h5/popup-success.png") no-repeat center bottom;
    background-size: 100%;
}

.layer.popup-join {}
.layer.popup-join .box {
    position: relative;
    display: block;
    margin: 0 auto;
    width: 7rem;
    height: 2.78rem;
    background: url("../assets/images/sdjg-activity/sdjg-h5-pop.png") no-repeat center bottom;
    background-size: auto 100%;
}
.layer.popup-join .box .btn-join,
.layer.popup-join .box span {
    position: absolute;
    top: 1.29rem;
    height: 0.4rem;
}
.layer.popup-join .box span input {
    width: 2.2rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background: none;
    border: none;
    font-size: 0.14rem;
    color: #452609;
    float: left;
}
.layer.popup-join .box span input::-webkit-input-placeholder {
    color: #A78B67;
}
.layer.popup-join .box .userNamebox {
    left: 1.15rem;
}
.layer.popup-join .box .phonebox {
    right: 0.3rem;
}
.layer.popup-join .box .phonebox input {
    width: 2.6rem;
}
.layer.popup-join .box .btn-join {
    top: 1.85rem;
    left: 2.6rem;
    margin: 0;
    padding: 0;
    border-radius: 0.04rem;
    width: 2.14rem;
    height: 0.62rem;
    line-height: 0.62rem;
    opacity: 0;
}
.layer .box .close {
    position: absolute;
    right: 0;
    top: -30px;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170814zlhweb/h5/icon-close.png") no-repeat center center;
    background-size: contain;
    cursor: pointer;
    z-index: 1;
    opacity: inherit;
}

.join em {
    position: absolute;
    top: -0.5rem;
    left: 0;
    background: #fff;
    border: 0.01rem red solid;
    border-radius: 0.1rem;
    padding: 0.05rem;
    font-size: 0.12rem;
}
.footer {
    width: 100%;
    height: 2.59rem;
    background: url("../assets/images/sdjg-activity/sdjg-h5-footer-1.png") center 0 no-repeat;
    background-size: 100%;
    position: fixed;
    bottom: 0;
    z-index: 10;
}
.footer a {
    width: 2.57rem;
    height: 0.71rem;
    background: url("../assets/images/sdjg-activity/sdjg-h5-btn1.png") center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0.3rem;
    left: 2.47rem;
}
.bg3 video {
    width: 6.82rem;
    height: 4.05rem;
    position: absolute;
    top: 0.57rem;
    left: 0.25rem;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    overflow: hidden;
}
// .bg3 video {
//     width: 6.82rem;
//     height: 4.05rem;
// }
.bg3 .links {
    width: 7.1rem;
    height: 3.1rem;
    position: absolute;
    top: 5.5rem;
    left: 0.31rem;
}
.bg3 .links a {
    float: left;
    width: 50%;
    height: 16.66%;
}
.big-circle {
    width: 1.8rem;
    height: 1.8rem;
    position: relative;
    float: left;
    font-size: 0.24rem;
    margin: 0 0.28rem 0.35rem;
}
.big-circle ul {
    padding-top: 0.5rem;
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
    background: transparent url("../assets/images/sdjg-activity/small-circle-fine.png") no-repeat;
    background-size: 100%;
    animation: clockwise 1s linear infinite;
    -webkit-animation: clockwise 1s linear infinite;
    /*Safari and Chrome*/
}
.big-circle .after,
.big-circle:after {
    background: transparent url("../assets/images/sdjg-activity/small-circle-thick.png") 0.1rem 0.07rem no-repeat;
    background-size: 81%;
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
.bg4 .box-con .circle-box {
    width: 7.1rem;
    height: 4.26rem;
    position: absolute;
    top: 6.61rem;
    left: 0.2rem;
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
.bg2 .box-con a {
    width: 1.91rem;
    height: 0.59rem;
    background: url("../assets/images/sdjg-activity/sdjg-h5-btn2.png") center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0.23rem;
    right: 0.49rem;
}
.bg4 .box-con a {
    width: 1.91rem;
    height: 0.59rem;
    background: url("../assets/images/sdjg-activity/sdjg-h5-btn2.png") center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0.63rem;
    right: 0.49rem;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <a href="javascript:;" @click="popShow" class="pulse animated infinite">&nbsp;</a>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <video src="http://flvdata.jrj.com.cn/2012/2017/qita/20180112jzw.mp4" controls="controls" preload="load">
            您的浏览器不支持 video 标签。
            </video>
            <!-- <div class="video-box">
                <video src="http://flvdata.jrj.com.cn/2012/2017/qita/20180112jzw.mp4" controls="controls" preload="load">
                您的浏览器不支持 video 标签。
                </video>
            </div> -->
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
    <div class="bg4">
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
                        <p style="padding-top:0.2rem;">量能持续</p>
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
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide slide-img1"></div>
                    <div class="swiper-slide slide-img2"></div>
                    <div class="swiper-slide slide-img3"></div>
                    <div class="swiper-slide slide-img4"></div>
                </div>
                <div class="swiper-pagination" id="pagination"></div>
            </div>
            <a href="javascript:;" @click="popShow" class="pulse animated infinite">&nbsp;</a>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">

        </div>
    </div>
    <div class="footer">
        <div class="box-con">
            <a href="javascript:;" @click="popShow" class="pulse animated infinite">&nbsp;</a>
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
                  <input type="text" class="userName" placeholder="请输入中文名" v-model="userName" />
                  <em v-html="txtUHtml" v-if="txtUShow"></em>
              </span>
                <span class="phonebox">
                  <input type="text" class="phone" placeholder="请输入手机号码" v-model="phone" />
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
            txtPShow: false
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
            window.dcsMultiTrack('DCS.dcsuri', 'sdjg-activity-h5Pop', 'WT.ti', 'sdjg-activity-h5Pop')
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
                bizsource: 'mSite',
                source: '4',
                tgqdcode: 'KAN4M5AT'
            })
            window.dcsMultiTrack('DCS.dcsuri', 'sdjg-activity-h5Sub', 'WT.ti', 'sdjg-activity-h5Sub')
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
