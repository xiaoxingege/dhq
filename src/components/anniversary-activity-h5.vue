<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg5 .box-con .swiper-box {
    top: 0.75rem;
}

.bg5 .swiper-button-next {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    z-index: 10;
}

.bg5 .swiper-button-prev {
    position: absolute;
    left: 0.3rem;
    top: 50%;
    z-index: 10;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/anniversary-activity/anniversary-h5-b1.jpg") center 0 no-repeat;
    height: 5.52rem;
    background-size: 100% 100%;
}
.bg2 {
    background: url("../assets/images/anniversary-activity/anniversary-h5-b2.jpg") center 0 no-repeat;
    height: 11.46rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/anniversary-activity/anniversary-h5-b3.jpg") center 0 no-repeat;
    height: 11.38rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/anniversary-activity/anniversary-h5-b4.jpg") center 0 no-repeat;
    height: 24.66rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/anniversary-activity/anniversary-h5-b5.jpg") center 0 no-repeat;
    height: 11.08rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
}
.nav-fixed {
    width: 1.44rem;
    height: 3.05rem;
    position: fixed;
    top: 30%;
    right: 0;
    background: url("../assets/images/anniversary-activity/anniversary-h5-nav.png") center 0 no-repeat;
    background-size: 100% 100%;
    z-index: 10;
    cursor: pointer;
}
.nav-fixed a {
    width: 1.44rem;
    height: 0.61rem;
    float: left;
}
.nav-fixed div {
    width: 1.44rem;
    height: 0.61rem;
    float: left;
}
.footer {
    width: 100%;
    height: 1.57rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/anniversary-activity/anniversary-h5-footer-1.png") center 0 no-repeat;
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
    width: 100%;
    height: 5.01rem;
    background: url("../assets/images/anniversary-activity/anniversary-h5-pop.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -2.50rem;
    left: 0;
    z-index: 12;
}
.pop img {
    width: 1.98rem;
    height: 1.98rem;
    position: absolute;
    top: 1.95rem;
    left: 2.74rem;
}
.pop .close {
    width: 2rem;
    height: 0.52rem;
    position: absolute;
    bottom: 0.41rem;
    left: 2.76rem;
}
.footer .box-con img {
    width: 1.80rem;
    height: 1.75rem;
    position: absolute;
    right: 0.31rem;
    top: -0.18rem;
    display: none;
}
.footer .box-con div {
    width: 2.89rem;
    height: 0.63rem;
    position: absolute;
    top: 0.5rem;
    right: 0.43rem;
}
.jzxgLink {
    width: 1.93rem;
    height: 0.39rem;
    position: absolute;
    top: 0;
    left: 0.84rem;
}
.popClick {
    width: 3.32rem;
    height: 0.63rem;
    position: absolute;
    top: 8.22rem;
    left: 2.54rem;
}
.pop div {
    width: 100%;
    float: left;
    margin-top: 1.82rem;
}
.pop p {
    font-family: '微软雅黑';
    font-size: 0.31rem;
    color: #8a2000;
    text-align: center;
}
.pop p .co {
    color: #e84a19;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
    </div>
    <div class="bg3">
    </div>
    <div class="bg4">
        <div class="box-con">
            <a href="javascript:;" class="jzxgLink" target="_blank"></a>
            <a href="javascript:;" class="popClick clipboard" @click="popClick" data-clipboard-text=""></a>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <activity-slider :listData="listData" />
        </div>
    </div>
    <div class="nav-fixed">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <div @click="popClick" class="clipboard" data-clipboard-text=""></div>
    </div>
    <div class="footer">
        <div class="box-con">
            <img src="" />
            <div @click="popClick" class="clipboard" data-clipboard-text=""></div>
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <!-- <img :src="codeImg" /> -->
        <div>
            <p>微信号 <span class="co">{{qcode}}</span> 复制成功</p>
            <p>打开微信 添加好友</p>
            <p>即可免费领取每日<span class="co">极智金股</span></p>
        </div>
        <a href="javascript:;" class="close" @click="close"></a>
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
import Clipboard from '../assets/plugins/clipboard/clipboard.min.js'
window.Clipboard = Clipboard

export default {
    data() {
        $(function() {
            if (localStorage.QcodeNum && parseInt(localStorage.QcodeNum) < 30) {
                localStorage.QcodeNum = parseInt(localStorage.QcodeNum) + 1
            } else {
                localStorage.QcodeNum = '1'
            }
            $.ajax({
                url: 'http://wx.jrj.com.cn/jrj/open.jsp?action=getImage',
                dataType: 'jsonp',
                jsonpCallback: 'callback'
            }).then(data => {
                $('.footer img').attr({
                    'src': 'http://wx.jrj.com.cn' + data.imgurl,
                    'qcode': data.wxid
                })
                $('.clipboard').attr('data-clipboard-text', data.wxid)
            })
            $('.nav-fixed a').click(function() {
                var index = $(this).index() + 2
                var pos = $('.bg' + index).offset().top
                // 实现平滑移动 1000代表时间ms
                $('html,body').stop().animate({
                    scrollTop: pos
                }, 500)
            })
            // 微信分享
            window.InitWeChatShare({
                shareTitle: window.document.title,
                shareLink: window.location.href,
                shareDesc: '庆祝金融界成立18周年、上市13周年，极智选股2.0全心升级，钜惠来袭……',
                shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/anniversary-h5-b1.jpg',
                callback: function(wx) {

                }
            })
        })
        return {
            listData: {
                conWidth: '7.07rem',
                conHeight: '3.63rem',
                conPadding: '0',
                pagShow: false,
                arrowShow: true,
                loop: true,
                prev: {
                    imgUrl: require('assets/images/anniversary-activity/anniversary-web-prev.png'),
                    width: '0.68rem',
                    height: '0.68rem',
                    marginTop: '-0.34rem'
                },
                next: {
                    imgUrl: require('assets/images/anniversary-activity/anniversary-web-next.png'),
                    width: '0.68rem',
                    height: '0.68rem',
                    marginTop: '-0.34rem'
                },
                list: [{
                        imgUrl: require('assets/images/anniversary-activity/anniversary-h5-banner1.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/anniversary-activity/anniversary-h5-banner2.png'),
                        link: ''
                    }
                ]
            },
            popShow: false,
            codeImg: '',
            qcode: ''
        }
    },
    computed: mapState({}),
    components: {
        activitySlider
    },
    methods: {
        popClick() {
            var qcode = $('.footer img').attr('qcode')
            this.qcode = qcode
            this.popShow = true
            // 复制粘贴
            new Clipboard('.clipboard')
        },
        close() {
            this.popShow = false
            // location.href = 'weixin://'

            var ua = navigator.userAgent.toLowerCase()
            if (/iphone|ipad|ipod/.test(ua) && typeof window.jrj !== 'undefined') {
                location.href = 'weixin://?about:blank'
            } else if (/android/.test(ua) && typeof window.jrj !== 'undefined') {
                return
            } else {
                location.href = 'weixin://'
            }
        }
    },
    mounted() {
        document.title = '辉煌金融界上市13周年庆'
    }
}
</script>
