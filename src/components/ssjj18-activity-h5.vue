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
    bottom: -0.15rem;
    width: 100%;
    text-align: center;
    z-index: 9;
}

.swiper-pagination-switch {
    display: inline-block;
    width: 0.1rem;
    height: 0.1rem;
    border-radius: 0.1rem;
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
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-bg1.jpg") center 0 no-repeat;
    height: 4.86rem;
    background-size: 100% 100%;
}
.bg2 {
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-bg2.jpg") center 0 no-repeat;
    height: 8.4rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-bg3.jpg") center 0 no-repeat;
    height: 16.16rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-bg4.jpg") center 0 no-repeat;
    height: 11.78rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-bg5.jpg") center 0 no-repeat;
    height: 17.41rem;
    background-size: 100% 100%;
}
.bg6 {
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-bg6.jpg") center 0 no-repeat;
    height: 10.54rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.bg6 video {
    width: 6.88rem;
    height: 3.38rem;
    position: absolute;
    top: 0.01rem;
    left: 0.29rem;
}
.bg6 p {
    width: 6.9rem;
    height: 0.78rem;
    line-height: 0.78rem;
    font-size: 0.34rem;
    color: #150902;
    text-align: center;
    position: absolute;
    top: 3.39rem;
    left: 0.28rem;
}
.bg3 a {
    width: 6.35rem;
    height: 1.33rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -3.175rem;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn1.png") no-repeat;
    background-size: 100% 100%;
}
.bg4 .a1 {
    width: 2.21rem;
    height: 0.55rem;
    position: absolute;
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-btn1.png") no-repeat;
    background-size: 100% 100%;
    top: 6.35rem;
    right: 0.88rem;
}
.bg4 .a2 {
    width: 6.35rem;
    height: 1.33rem;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -3.175rem;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn1.png") no-repeat;
    background-size: 100% 100%;
}
.bg5 a {
    width: 6.35rem;
    height: 1.33rem;
    position: absolute;
    background: url("../assets/images/ssjj18-activity/ssjj18-web-btn3.png") no-repeat;
    background-size: 100% 100%;
    bottom: 0.1rem;
    left: 50%;
    margin-left: -3.175rem;
}
.swiper-box {
    width: 6.3rem;
    height: 3.9rem;
    position: absolute;
    top: 4.04rem;
    left: 0.64rem;
}
.swiper-container {
    width: 6.3rem;
    height: 3.9rem;
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
.footer {
    width: 100%;
    height: 1.08rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/ssjj18-activity/ssjj18-h5-footer.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
}
.footer a {
    width: 2.1rem;
    height: 0.46rem;
    position: absolute;
    top: 0.38rem;
    right: 0.87rem;
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
    width: 6.2rem;
    height: 3.4rem;
    // background: url("../assets/images/ssjj-activity/zczg-web-pop.jpg") 0 0 no-repeat;
    // background-size: 100% 100%;
    background-color: #fccc6c;
    position: fixed;
    top: 50%;
    margin-top: -1.7rem;
    left: 50%;
    margin-left: -3.1rem;
    z-index: 12;
    border-radius: 0.15rem;
}
.pop .close {
    width: 0.26rem;
    height: 0.26rem;
    position: absolute;
    top: 0.2rem;
    right: 0.28rem;
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
    font-size: 0.34rem;
    color: #160800;
    font-weight: bold;
    padding-top: 0.35rem;
}
.join span {
    position: absolute;
}
.join span input {
    width: 2.55rem;
    height: 0.4rem;
    line-height: 0.4rem;
    background: none;
    border: none;
    font-size: 0.2rem;
    color: #452609;
}
.join span input::-webkit-input-placeholder {
    color: #898989;
}
.join .phonebox {
    top: 1rem;
    left: 1rem;
}
.join .phonebox span {
    float: left;
    line-height: 0.6rem;
    font-size: 0.3rem;
    color: #160800;
    position: static;
    margin-right: 0.2rem;
}
.join .phonebox input {
    width: 3.4rem;
    height: 0.4rem;
    line-height: 0.4rem;
    padding: 0.2rem 0.1rem;
    background: none;
    border: 0.01rem #895f46 solid;
    background-color: #fff;
    border-radius: 0.1rem;
    float: left;
}
.join .btn-join {
    position: absolute;
    bottom: 0.8rem;
    left: 1.84rem;
    width: 2.52rem;
    height: 0.6rem;
    background-color: #f82820;
    color: #fccc6c;
    font-size: 0.32rem;
    text-align: center;
    line-height: 0.6rem;
    border-radius: 0.25rem;
}
.join em {
    position: absolute;
    top: 0.18rem;
    right: 0;
    background: #fff;
    border: 0.01rem red solid;
    border-radius: 0.05rem;
    padding: 0.05rem;
    font-size: 0.16rem;
}
.join strong {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0.3rem;
    left: 0;
    font-size: 0.24rem;
    color: #160800;
    font-weight: normal;
}
.join p {
    width: 100%;
    text-align: center;
    font-size: 0.28rem;
    color: #160800;
    line-height: 0.4rem;
    padding: 0.3rem 0;
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
        <div class="box-con">
            <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/201805ssjjsj.mp4" controls="controls" id="myvideo">
            您的浏览器不支持 video 标签。
            </video>
            <p>5月掘金计划视频</p>
            <!-- <a href="javascript:;" @click="popClick(3)"></a> -->
        </div>
    </div>
    <div class="footer">
        <div class="box-con">
            <a href="javascript:;" @click="popClick(5)"></a>
        </div>
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
            <a href="javascript:;" class="btn btn-large btn-join" style="bottom:0.64rem;" @click="close">知道了</a>
        </div>
        <a href="javascript:;" class="close" @click="close" v-show="editType"></a>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import Swiper from 'swiper/dist/idangerous.swiper.js'
import getQueryString from 'utils/getQueryString'

export default {
    data() {
        return {
            popShow: false,
            txtPHtml: '',
            txtPShow: false,
            editType: false,
            xldType: false
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
            window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-h5-' + i, 'WT.ti', 'ssjj18-h5-' + i)
        },
        close() {
            this.popShow = false
            this.editType = false
            window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-h5-close', 'WT.ti', 'ssjj18-h5-close')
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
                bizsource: getQueryString('bizsource') || 'mSite',
                source: '4',
                tgqdcode: getQueryString('tgqdcode') || '4VGMD5G7'
            })
        }
    },
    mounted() {
        document.title = '2018盛世掘金火爆升级-金融界'
        var _this = this
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
                window.dcsMultiTrack('DCS.dcsuri', 'ssjj18-h5-success', 'WT.ti', 'ssjj18-h5-success')
            }
        }, {
            deep: true
        })
        this.$watch('err', err => {
            alert(err.msg)
        })
        // 微信分享
        window.InitWeChatShare({
            shareTitle: window.document.title,
            shareLink: window.location.href,
            shareDesc: '多重因素引爆国产替代，这些板块龙头值得关注……',
            shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/ssjj18-h5-bg1.jpg',
            callback: function(wx) {

            }
        })
        if (getQueryString('frm') === 'xld') {
            this.xldType = true
        }
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
