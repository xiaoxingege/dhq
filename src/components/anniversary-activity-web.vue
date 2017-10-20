<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg5 .box-con .swiper-box {
    top: 78px;
}

.bg5 .swiper-button-next {
    position: absolute;
    top: 50%;
    right: 0;
    z-index: 10;
}

.bg5 .swiper-button-prev {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 10;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b1-1.jpg") center 0 no-repeat;
    height: 550px;
}
.bg2 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b2.jpg") center 0 no-repeat;
    height: 1032px;
}
.bg3 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b3-1.jpg") center 0 no-repeat;
    height: 1004px;
}
.bg4 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b4-1.jpg") center 0 no-repeat;
    height: 2003px;
}
.bg5 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b5.jpg") center 0 no-repeat;
    height: 951px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.nav-fixed {
    width: 177px;
    height: 313px;
    position: fixed;
    top: 30%;
    right: 3%;
    background: url("../assets/images/anniversary-activity/anniversary-web-nav.png") center 0 no-repeat;
    z-index: 10;
    cursor: pointer;
}
.nav-fixed a {
    width: 177px;
    height: 62px;
    float: left;
}
.nav-fixed div {
    width: 177px;
    height: 62px;
    float: left;
}
.footer {
    width: 100%;
    height: 115px;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/anniversary-activity/anniversary-web-footer-1.png") center bottom no-repeat;
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
    width: 913px;
    height: 465px;
    background: url("../assets/images/anniversary-activity/anniversary-web-pop-1.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -232.5px;
    left: 50%;
    margin-left: -456.5px;
    z-index: 12;
}
.pop img {
    width: 182px;
    height: 182px;
    position: absolute;
    top: 170px;
    left: 336px;
}
.pop .close {
    width: 200px;
    height: 52px;
    position: absolute;
    bottom: 41px;
    left: 327px;
}
.jzxgLink {
    width: 154px;
    height: 31px;
    position: absolute;
    top: 0;
    left: 199px;
}
.popClick {
    width: 332px;
    height: 63px;
    position: absolute;
    top: 677px;
    left: 414px;
}

.footer .box-con div {
    height: 147px;
    float: left;
}
.footer div p:first-child {
    margin-left: 95px;
}
.footer div p {
    width: 251px;
    height: 34px;
    line-height: 34px;
    float: left;
    margin: 64px 0 0 35px;
    position: relative;
}
.footer div p span {
    font-size: 16px;
    color: #fff;
    float: left;
    width: 40px;
    text-align: left;
    text-indent: -9999px;
}
.footer div p input {
    width: 191px;
    height: 24px;
    padding: 5px 10px;
    float: left;
    // background-color: #4d4b4a;
    background: none;
    border: none;
    color: #000;
}
.footer a {
    width: 207px;
    height: 65px;
    float: right;
    margin: 34px 87px 0 0;
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

.join {
    width: 100%;
    height: 100%;
    position: relative;
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
    color: #A78B67;
}
.join .userNamebox {
    top: 185px;
    left: 323px;
}
.join .phonebox {
    top: 250px;
    left: 323px;
}
.join .phonebox input {
    width: 248px;
}
.join .btn-join {
    position: absolute;
    bottom: 70px;
    left: 332px;
    opacity: 0;
    width: 207px;
    height: 65px;
}
.join em {
    position: absolute;
    top: 5px;
    right: 0;
    background: #fff;
    border: 1px red solid;
    border-radius: 5px;
    padding: 5px;
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
            <a href="/act/jzxg-activity-new" class="jzxgLink" target="_blank"></a>
            <a href="javascript:;" class="popClick" @click="popClick"></a>
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
        <div @click="popClick"></div>
    </div>
    <div class="footer">
        <div class="box-con">
            <div>
                <p>
                    <span>姓名</span>
                    <input type="text" value="" placeholder="请输入您的中文姓名" v-model="fUserName" />
                    <em v-html="fTxtUHtml" v-if="fTxtUShow"></em>
                </p>
                <p>
                    <span>手机</span>
                    <input type="text" value="" placeholder="请输入您的11位手机号码" v-model="fPhone" />
                    <em v-html="fTxtPHtml" v-if="fTxtPShow"></em>
                </p>
            </div>
            <a href="javascript:;" @click="fJoinSubmit">&nbsp;</a>
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
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
        <!-- <img :src="codeImg" />
        <a href="javascript:;" class="close" @click="close"></a> -->
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
            //     $('.footer img').attr('src', 'http://wx.jrj.com.cn' + data.imgurl)
            // })
            $('.nav-fixed a').click(function() {
                var index = $(this).index() + 2
                var pos = $('.bg' + index).offset().top
                // 实现平滑移动 1000代表时间ms
                $('html,body').stop().animate({
                    scrollTop: pos
                }, 500)
            })
            window.dcsMultiTrack('DCS.dcsuri', 'anniversary_web', 'WT.ti', 'anniversary_web')
        })
        return {
            listData: {
                conWidth: '847px',
                conHeight: '363px',
                conPadding: '0',
                pagShow: false,
                arrowShow: true,
                loop: true,
                prev: {
                    imgUrl: require('assets/images/anniversary-activity/anniversary-web-prev.png'),
                    width: '68px',
                    height: '68px',
                    marginTop: '-34px'
                },
                next: {
                    imgUrl: require('assets/images/anniversary-activity/anniversary-web-next.png'),
                    width: '68px',
                    height: '68px',
                    marginTop: '-34px'
                },
                list: [{
                        imgUrl: require('assets/images/anniversary-activity/anniversary-web-banner1.png'),
                        link: ''
                    },
                    {
                        imgUrl: require('assets/images/anniversary-activity/anniversary-web-banner2.png'),
                        link: ''
                    }
                ]
            },
            popShow: false,
            codeImg: '',
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
            // var codeSrc = $('.footer img').attr('src')
            // this.codeImg = codeSrc
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
                alert('报名成功')
                // this.maskShow = true
                // this.successShow = true
                this.popShow = false
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
