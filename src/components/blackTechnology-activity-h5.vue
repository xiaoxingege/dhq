<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

a,
input {
    outline: none;
}

.bg8 .box-con .swiper-box {
    top: 0.78rem;
}

.bg8 .swiper-button-next {
    position: absolute;
    right: 0.3rem;
    top: 50%;
    z-index: 10;
    display: none;
}

.bg8 .swiper-button-prev {
    position: absolute;
    left: 0.3rem;
    top: 50%;
    z-index: 10;
    display: none;
}

.bg8 .swiper-pagination {
    bottom: -0.73rem !important;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg1.jpg") center 0 no-repeat;
    height: 6.35rem;
    background-size: 100% 100%;
}
.bg2 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg2.jpg") center 0 no-repeat;
    height: 3.90rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg3.jpg") center 0 no-repeat;
    height: 5.45rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg4.jpg") center 0 no-repeat;
    height: 9.61rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg5.jpg") center 0 no-repeat;
    height: 6.53rem;
    background-size: 100% 100%;
}
.bg6 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg6.jpg") center 0 no-repeat;
    height: 6.98rem;
    background-size: 100% 100%;
}
.bg7 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg7.jpg") center 0 no-repeat;
    height: 6.55rem;
    background-size: 100% 100%;
}
.bg8 {
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-bg8.jpg") center 0 no-repeat;
    height: 8.23rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
}
.footer {
    width: 100%;
    height: 1.21rem;
    position: fixed;
    bottom: -0.01rem;
    background: url("../assets/images/blackTechnology-activity/blackTechnology-h5-footer.jpg") center 0 no-repeat;
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
    width: 7.04rem;
    height: 2.42rem;
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-success-pop.png") 0 0 no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 50%;
    margin-top: -1.21rem;
    left: 50%;
    margin-left: -3.52rem;
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
    // width: 2rem;
    // height: 0.52rem;
    // position: absolute;
    // bottom: 0.41rem;
    // left: 2.76rem;
    position: absolute;
    right: -0.05rem;
    top: -0.6rem;
    display: inline-block;
    width: 0.45rem;
    height: 0.45rem;
    background: url("../assets/images/blackTechnology-activity/blackTechnology-web-close.png") no-repeat center center;
    cursor: pointer;
    z-index: 1;
}
.pop p .co {
    color: #e84a19;
}

.footer .box-con div {
    float: left;
}
.footer div p {
    // width: 2.3rem;
    height: 0.42rem;
    line-height: 0.42rem;
    float: left;
    margin: 0.74rem 0 0 0.35rem;
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
    </div>
    <div class="bg5">
    </div>
    <div class="bg6">
    </div>
    <div class="bg7">
    </div>
    <div class="bg8">
        <div class="box-con">
            <activity-slider :listData="listData" />
        </div>
    </div>
    <div class="footer">
        <div class="box-con">
            <div>
                <p>
                    <span>姓名</span>
                    <input type="text" value="" placeholder="请输入中文名" v-model="fUserName" />
                    <em v-html="fTxtUHtml" v-if="fTxtUShow"></em>
                </p>
                <p style="margin-left:0.1rem;">
                    <span>手机</span>
                    <input type="text" value="" placeholder="请输入手机号" v-model="fPhone" />
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
        <!-- <div class="join">
            <span class="userNamebox">
              <input type="text" class="userName" placeholder="请输入中文名" v-model="userName" />
              <em v-html="txtUHtml" v-if="txtUShow"></em>
          </span>
            <span class="phonebox">
              <input type="text" class="phone" placeholder="请输入手机号" v-model="phone" />
              <em v-html="txtPHtml" v-if="txtPShow"></em>
          </span>
            <a href="javascript:;" class="btn btn-large btn-join" @click="joinSubmit">立即预约</a>
        </div> -->
        <a href="javascript:;" class="close" @click="close"></a>
        <!-- <div class="successPop">

        </div> -->
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

export default {
    data() {
        $(function() {
            // 微信分享
            window.InitWeChatShare({
                shareTitle: window.document.title,
                shareLink: window.location.href,
                shareDesc: '股市惊现“ 黑科技“， 千亿金矿等你挖 ',
                shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/blackTechnology-h5-bg1.jpg',
                callback: function(wx) {

                }
            })
        })
        return {
            listData: {
                conWidth: '7.08rem',
                conHeight: '4.65rem',
                conPadding: '0',
                pagShow: true,
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
                        imgUrl: require('assets/images/blackTechnology-activity/blackTechnology-h5-img1.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/blackTechnology-activity/blackTechnology-h5-img2.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/blackTechnology-activity/blackTechnology-h5-img3.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/blackTechnology-activity/blackTechnology-h5-img4.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/blackTechnology-activity/blackTechnology-h5-img5.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/blackTechnology-activity/blackTechnology-h5-img6.png'),
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
            this.popShow = true
        },
        close() {
            this.popShow = false
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
                source: '4',
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
                source: '4',
                tgqdcode: '6YXK263WM'
            })
        }
    },
    mounted() {
        // document.title = '股市惊现“黑科技”'
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
                // alert('报名成功')
                // this.maskShow = true
                // this.successShow = true
                this.popShow = true
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
