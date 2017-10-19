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
    height: 1.21rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/anniversary-activity/anniversary-h5-footer-2.png") center 0 no-repeat;
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
    background: url("../assets/images/anniversary-activity/anniversary-h5-pop-1.png") 0 0 no-repeat;
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
// .footer .box-con img {
//     width: 1.80rem;
//     height: 1.75rem;
//     position: absolute;
//     right: 0.31rem;
//     top: -0.18rem;
//     display: none;
// }
// .footer .box-con div {
//     width: 2.89rem;
//     height: 0.63rem;
//     position: absolute;
//     top: 0.5rem;
//     right: 0.43rem;
// }
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
    // margin-top: 1.82rem;
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

.footer .box-con div {
    float: left;
}
// .footer div p:first-child {
//     margin-left: 95px;
// }
.footer div p {
    // width: 2.3rem;
    height: 0.42rem;
    line-height: 0.42rem;
    float: left;
    margin: 0.67rem 0 0 0.35rem;
    position: relative;
}
.footer div p span {
    font-size: 0.16rem;
    color: #fff;
    float: left;
    width: 0.55rem;
    text-align: left;
    text-indent: -9999px;
}
.footer div p input {
    width: 1.51rem;
    height: 0.3rem;
    padding: 0.05rem 0.1rem;
    float: left;
    // background-color: #4d4b4a;
    background: none;
    border: none;
    color: #000;
}
.footer a {
    width: 1.62rem;
    height: 0.65rem;
    position: absolute;
    top: 0.47rem;
    right: 0.23rem;
}
.footer em {
    float: left;
    font-size: 0.12rem;
    background: #fff;
    border: 0.01rem red solid;
    border-radius: 0.03rem;
    padding: 0 0.05rem;
    position: absolute;
    right: 0;
    top: -0.01rem;
}

.join {
    width: 100%;
    height: 100%;
    position: relative;
}
.join span {
    position: absolute;
}
.join span input {
    width: 2.91rem;
    height: 0.54rem;
    line-height: 0.54rem;
    background: none;
    border: none;
    font-size: 0.2rem;
    color: #452609;
    position: absolute;
}
.join span input::-webkit-input-placeholder {
    color: #A78B67;
}
.join .userNamebox {
    width: 2.91rem;
    height: 0.54rem;
    top: 1.94rem;
    left: 2.49rem;
}
.join .phonebox {
    width: 2.91rem;
    height: 0.54rem;
    top: 2.64rem;
    left: 2.49rem;
}
.join .phonebox input {
    width: 2.91rem;
}
.join .btn-join {
    position: absolute;
    bottom: 0.72rem;
    left: 2.65rem;
    opacity: 0;
    width: 2.29rem;
    height: 0.71rem;
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
    line-height: 0.54rem;
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
            <div>
                <p>
                    <span>姓名</span>
                    <input type="text" value="" placeholder="请输入您的中文姓名" v-model="fUserName" />
                    <em v-html="fTxtUHtml" v-if="fTxtUShow"></em>
                </p>
                <p style="margin-left:0.1rem;">
                    <span>手机</span>
                    <input type="text" value="" placeholder="请输入您的11位手机号码" v-model="fPhone" style="width:1.96rem;" />
                    <em v-html="fTxtPHtml" v-if="fTxtPShow"></em>
                </p>
            </div>
            <a href="javascript:;" @click="fJoinSubmit">&nbsp;</a>
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <!-- <img :src="codeImg" /> -->
        <!-- <div>
            <p>微信号 <span class="co">{{qcode}}</span> 复制成功</p>
            <p>打开微信 添加好友</p>
            <p>即可免费领取每日<span class="co">极智金股</span></p>
        </div>
        <a href="javascript:;" class="close" @click="close"></a> -->
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
            // if (localStorage.QcodeNum && parseInt(localStorage.QcodeNum) < 30) {
            //     localStorage.QcodeNum = parseInt(localStorage.QcodeNum) + 1
            // } else {
            //     localStorage.QcodeNum = '1'
            // }
            // $.ajax({
            //     url: 'http://wx.jrj.com.cn/jrj/open.jsp?action=getImage',
            //     dataType: 'jsonp',
            //     jsonpCallback: 'callback'
            // }).then(data => {
            //     $('.footer img').attr({
            //         'src': 'http://wx.jrj.com.cn' + data.imgurl,
            //         'qcode': data.wxid
            //     })
            //     $('.clipboard').attr('data-clipboard-text', data.wxid)
            // })
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
            qcode: '',
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
                aid: '786965762733092864',
                userName: this.userName,
                phone: this.phone,
                bizsource: 'ZNTF',
                source: '1',
                tgqdcode: 'MRD9MC9J'
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
                aid: '786965762733092864',
                userName: this.fUserName,
                phone: this.fPhone,
                bizsource: 'ZNTF',
                source: '1',
                tgqdcode: 'MRD9MC9J'
            })
        }
    },
    mounted() {
        document.title = '辉煌金融界上市13周年庆'
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
