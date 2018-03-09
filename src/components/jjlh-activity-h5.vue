<style>
body {
    background-color: #99001e !important;
    font-family: '微软雅黑';
}

input,
button {
    outline: none;
}

.bg4 .box-con .swiper-box {
    width: 7.28rem;
    height: 3.4rem;
    top: 3.87rem;
    left: 0.12rem;
}

.bg4 .swiper-pagination {
    z-index: 9;
    bottom: -0.9rem !important;
}

.bg4 .swiper-pagination .swiper-pagination-switch {
    width: 0.18rem;
    height: 0.18rem;
    background-color: #84001a;
    margin: 0 0.05rem;
}

.bg4 .swiper-pagination .swiper-pagination-switch.swiper-active-switch {
    background-color: #ff4f71;
}

.bg3 .pagination .swiper-pagination-switch {
    width: 0.18rem;
    height: 0.18rem;
    background-color: #84001a;
    margin: 0 0.05rem;
}

.bg3 .pagination .swiper-pagination-switch.swiper-active-switch {
    background-color: #ff4f71;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/jjlh-activity/jjlh-activity-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 10.48rem;
}
.bg2 {
    background: url("../assets/images/jjlh-activity/jjlh-activity-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 9.71rem;
}
.bg3 {
    background: url("../assets/images/jjlh-activity/jjlh-activity-bg3.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 8.1rem;
}
.bg4 {
    background: url("../assets/images/jjlh-activity/jjlh-activity-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 18.34rem;
}
.bg5 {
    background: url("../assets/images/jjlh-activity/jjlh-activity-bg5-1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 13.23rem;
}
.bg6 {
    background: url("../assets/images/jjlh-activity/jjlh-activity-bg6.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 12.36rem;
}
.box-con {
    height: 100%;
    position: relative;
}
.footer {
    width: 100%;
    height: 2.02rem;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/jjlh-activity/jjlh-activity-footer.jpg") center bottom no-repeat;
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
    width: 6.5rem;
    height: 4.3rem;
    position: fixed;
    top: 50%;
    margin-top: -2.15rem;
    left: 50%;
    margin-left: -3.25rem;
    z-index: 12;
    background-color: #fff;
    border-radius: 0.2rem;
}
.pop-con {
    float: left;
    width: 100%;
}
.pop-con strong {
    font-size: 0.4rem;
    font-weight: bold;
    text-align: center;
    width: 100%;
    float: left;
    color: #000;
    margin-top: 0.7rem;
}
.pop-con h1 {
    text-align: center;
    color: #000;
    font-size: 0.4rem;
    margin-top: 0.7rem;
}
.pop-con div {
    width: 100%;
    height: 0.8rem;
    text-align: center;
    margin-top: 0.33rem;
    font-size: 0.3rem;
}
.pop-con div span {
    font-size: 0.3rem;
    line-height: 0.8rem;
    float: left;
    margin-left: 0.5rem;
}
.pop-con div input {
    width: 3.72rem;
    height: 0.38rem;
    padding: 0.2rem;
    border: 0.01rem #a3a3a3 solid;
    font-size: 0.3rem;
    color: #474747;
    float: left;
}
.pop-con button {
    width: 4.33rem;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
    color: #fff;
    border: none;
    font-size: 0.3rem;
    position: absolute;
    bottom: 0.67rem;
    left: 1.09rem;
    background-color: #f84040;
    border-radius: 0.5rem;
}
.close {
    width: 0.46rem;
    height: 0.45rem;
    background-size: 100%;
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    cursor: pointer;
    font-size: 0.4rem;
    text-align: center;
    line-height: 0.45rem;
    color: #000;
}
.swiper1-container {
    width: 7.18rem;
    height: 4.28rem;
    margin: 0 auto;
    position: absolute;
    left: 0.12rem;
    top: 3rem;
    overflow: hidden;
    direction: ltr;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    /* Fix of Webkit flickering */
    z-index: 1;
    border: 0.05rem #f5db67 solid;
}
.bg3 .pagination {
    width: 7.18rem;
    text-align: center;
    position: absolute;
    left: 0.17rem;
    top: 6.79rem;
}
.popClick3 {
    width: 100%;
    height: 100%;
}
.swiper1-container .slide-img1 {
    background: url('../assets/images/jjlh-activity/jjlh-activity-img4.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img2 {
    background: url('../assets/images/jjlh-activity/jjlh-activity-img1.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img3 {
    background: url('../assets/images/jjlh-activity/jjlh-activity-img2.jpg') center 0 no-repeat;
    background-size: 100%;
}
.swiper1-container .slide-img4 {
    background: url('../assets/images/jjlh-activity/jjlh-activity-img3.jpg') center 0 no-repeat;
    background-size: 100%;
}
.bg2 video {
    width: 7.16rem;
    height: 4.02rem;
    position: absolute;
    top: 1.77rem;
    left: 0.17rem;
}
.bg4 button {
    width: 5.72rem;
    height: 0.94rem;
    background: url('../assets/images/jjlh-activity/jjlh-activity-btn.png') center 0 no-repeat;
    background-size: 100%;
    position: absolute;
    bottom: 0.57rem;
    left: 0.91rem;
    border: none;
}
.pop-con .pop-text1 em {
    position: absolute;
    top: 1.73rem;
    right: 0.8rem;
    background: #fff;
    border: 1px red solid;
    border-radius: 0.05rem;
    padding: 0.05rem;
    font-size: 0.2rem;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/20180301lh2.mp4" controls="controls">
                您的浏览器不支持 video 标签。
            </video>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
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
    <div class="bg4">
        <div class="box-con">
            <activity-slider :listData="listData" />
            <button type="button" name="button" @click="popClick(1)"></button>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
        </div>
    </div>
    <div class="bg6">
        <div class="box-con">
        </div>
    </div>
    <div class="footer">
        <div class="box-con">
            <div class="popClick3" @click="popClick(1)"></div>
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <div class="close" @click="close">X</div>
        <div class="pop-con">
            <div class="pop-text1" v-if="popText === 1">
                <h1>预约领取</h1>
                <div>
                    <span>手机号：</span>
                    <input type="text" name="" value="" v-model="phone">
                    <em v-html="txtHtml" v-if="txtShow"></em>
                </div>
                <button type="button" name="button" @click="joinSubmit">立即添加，领热点金股</button>
            </div>
            <div class="pop-text2" v-else-if="popText === 2">
                <h1>预约成功</h1>
                <div>工作人员将会在3个工作日内为您发放<br />《2018年两会超级热点金股策略》</div>
                <button type="button" name="button" @click="close">知道了</button>
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
import Clipboard from '../assets/plugins/clipboard/clipboard.min.js'
window.Clipboard = Clipboard
import getQueryString from 'utils/getQueryString'

export default {
    data() {
        return {
            listData: {
                conWidth: '7.28rem',
                conHeight: '3.4rem',
                conPadding: '0',
                pagShow: true,
                arrowShow: false,
                loop: true,
                slidesPerView: 1,
                autoplay: 5000,
                list: [{
                        imgUrl: require('assets/images/jjlh-activity/jjlh-activity-img1.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/jjlh-activity/jjlh-activity-img2.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/jjlh-activity/jjlh-activity-img3.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/jjlh-activity/jjlh-activity-img4.png'),
                        link: ''
                    }
                ]
            },
            popShow: false,
            popText: 1,
            txtShow: false,
            txtHtml: ''
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
    components: {
        activitySlider
    },
    methods: {
        popClick(type) {
            this.popShow = true
            this.popText = type
            this.phone = ''
            window.dcsMultiTrack('DCS.dcsuri', 'jjlh-activity-popClick', 'WT.ti', 'jjlh-activity-popClick')
        },
        close() {
            this.popShow = false
        },
        joinSubmit() {
            if (!this.type) {
                alert('提交中')
                return
            }
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
                aid: '835110116492165120',
                userName: '',
                phone: this.phone,
                bizsource: getQueryString('bizsource') || 'mSite',
                source: '4',
                tgqdcode: getQueryString('tgqdcode') || 'LHUXZRZB'
            })
            window.dcsMultiTrack('DCS.dcsuri', 'jjlh-activity-joinSubmit', 'WT.ti', 'jjlh-activity-joinSubmit')
        }
    },
    mounted() {
        document.title = '决胜开局 聚焦超级热点'
        var _this = this
        new Swiper('.swiper1-container', {
            pagination: '.pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 5000,
            autoplayDisableOnInteraction: false
        })
        window.InitWeChatShare({
            shareTitle: window.document.title,
            shareLink: window.location.href,
            shareDesc: '政策红利孕育超级龙头，2018年这些股将蓄势腾飞！',
            shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/jjlh-activity-bg1.jpg',
            callback: function(wx) {

            }
        })
        this.$watch('type', type => {
            if (type) {
                this.popText = 2
            }
        })
        this.$watch('txtShow', txtShow => {
            setTimeout(function() {
                _this.txtShow = false
                _this.txtHtml = ''
            }, 1000)
        })
    }
}
</script>
