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
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/11th-activity/11th-bg1.jpg") center 0 no-repeat;
    height: 6.76rem;
    background-size: 100% 100%;
}
.bg2 {
    background: url("../assets/images/11th-activity/11th-bg2.jpg") center 0 no-repeat;
    height: 8.09rem;
    background-size: 100% 100%;
}
.bg3 {
    background: url("../assets/images/11th-activity/11th-bg3.jpg") center 0 no-repeat;
    height: 3.75rem;
    background-size: 100% 100%;
}
.bg4 {
    background: url("../assets/images/11th-activity/11th-bg4.jpg") center 0 no-repeat;
    height: 7.88rem;
    background-size: 100% 100%;
}
.bg5 {
    background: url("../assets/images/11th-activity/11th-bg5.jpg") center 0 no-repeat;
    height: 6.22rem;
    background-size: 100% 100%;
}
.box-con {
    position: relative;
    height: 100%;
}
.lottery {
    width: 6.74rem;
    height: 6.72rem;
    position: absolute;
    bottom: 0;
    left: 0.38rem;
}
.lottery-plate {
    width: 100%;
    height: 100%;
    background: url('../assets/images/11th-activity/11th-plate.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.lottery-pointer {
    position: absolute;
    width: 0.47rem;
    height: 2.36rem;
    left: 3.16rem;
    bottom: 3rem;
    background: url('../assets/images/11th-activity/11th-pointer.png') center 0 no-repeat;
    background-size: 100% 100%;
}
.rotate_origin {
    transform-origin: 50% 50%;
    -ms-transform-origin: 50% 50%;
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
}
.rotate_origin1 {
    transform-origin: 50% 85%;
    -ms-transform-origin: 50% 85%;
    -webkit-transform-origin: 50% 85%;
    -moz-transform-origin: 50% 85%;
    -o-transform-origin: 50% 85%;
}
.bg2 .box-con p {
    width: 100%;
    height: 0.42rem;
    line-height: 0.42rem;
    text-align: center;
    font-weight: bold;
    font-size: 0.3rem;
    color: #fef0cc;
    float: left;
    margin-top: 0.9rem;
}
.bg2 .box-con p span {
    width: 0.49rem;
    height: 0.4rem;
    border: 0.01rem #fef0cc solid;
    display: inline-block;
    margin: 0 0.1rem;
}
// .footer {
//     width: 100%;
//     height: 1.21rem;
//     position: fixed;
//     bottom: -0.01rem;
//     background: url("../assets/images/anniversary-activity/anniversary-h5-footer-2.png") center 0 no-repeat;
//     background-size: 100% 100%;
//     z-index: 10;
// }
// .fixBg {
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     top: 0;
//     left: 0;
//     background-color: #000;
//     opacity: 0.8;
//     z-index: 11;
// }
// .pop {
//     width: 100%;
//     height: 5.01rem;
//     background: url("../assets/images/anniversary-activity/anniversary-h5-pop-1.png") 0 0 no-repeat;
//     background-size: 100% 100%;
//     position: fixed;
//     top: 50%;
//     margin-top: -2.50rem;
//     left: 0;
//     z-index: 12;
// }
// .pop img {
//     width: 1.98rem;
//     height: 1.98rem;
//     position: absolute;
//     top: 1.95rem;
//     left: 2.74rem;
// }
// .pop .close {
//     width: 2rem;
//     height: 0.52rem;
//     position: absolute;
//     bottom: 0.41rem;
//     left: 2.76rem;
// }
// .pop div {
//     width: 100%;
//     float: left;
//     // margin-top: 1.82rem;
// }
// .pop p {
//     font-family: '微软雅黑';
//     font-size: 0.31rem;
//     color: #8a2000;
//     text-align: center;
// }
// .pop p .co {
//     color: #e84a19;
// }
//
// .footer .box-con div {
//     float: left;
// }
// .footer div p {
//     // width: 2.3rem;
//     height: 0.42rem;
//     line-height: 0.42rem;
//     float: left;
//     margin: 0.67rem 0 0 0.35rem;
//     position: relative;
// }
// .footer div p span {
//     font-size: 0.16rem;
//     color: #fff;
//     float: left;
//     width: 0.55rem;
//     text-align: left;
//     text-indent: -9999px;
// }
// .footer div p input {
//     width: 1.51rem;
//     height: 0.3rem;
//     padding: 0.05rem 0.1rem;
//     float: left;
//     // background-color: #4d4b4a;
//     background: none;
//     border: none;
//     color: #000;
// }
// .footer a {
//     width: 1.62rem;
//     height: 0.65rem;
//     position: absolute;
//     top: 0.47rem;
//     right: 0.23rem;
// }
// .footer em {
//     float: left;
//     font-size: 0.12rem;
//     background: #fff;
//     border: 0.01rem red solid;
//     border-radius: 0.03rem;
//     padding: 0 0.05rem;
//     position: absolute;
//     right: 0;
//     top: -0.01rem;
// }
//
// .join {
//     width: 100%;
//     height: 100%;
//     position: relative;
// }
// .join span {
//     position: absolute;
// }
// .join span input {
//     width: 2.91rem;
//     height: 0.54rem;
//     line-height: 0.54rem;
//     background: none;
//     border: none;
//     font-size: 0.2rem;
//     color: #452609;
//     position: absolute;
// }
// .join span input::-webkit-input-placeholder {
//     color: #A78B67;
// }
// .join .userNamebox {
//     width: 2.91rem;
//     height: 0.54rem;
//     top: 1.94rem;
//     left: 2.49rem;
// }
// .join .phonebox {
//     width: 2.91rem;
//     height: 0.54rem;
//     top: 2.64rem;
//     left: 2.49rem;
// }
// .join .phonebox input {
//     width: 2.91rem;
// }
// .join .btn-join {
//     position: absolute;
//     bottom: 0.72rem;
//     left: 2.65rem;
//     opacity: 0;
//     width: 2.29rem;
//     height: 0.71rem;
// }
// .join em {
//     position: absolute;
//     top: 0;
//     right: 0;
//     background: #fff;
//     border: 0.01rem red solid;
//     border-radius: 0.05rem;
//     padding: 0 0.05rem;
//     font-size: 0.16rem;
//     line-height: 0.54rem;
// }
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
        <div class="box-con">
            <p>您当前有<span>1</span>次抽奖机会</p>
            <div class="lottery">
                <div class="lottery-plate rotate_origin"></div>
                <div class="lottery-pointer rotate_origin1" id="i_cont"></div>
            </div>
        </div>
    </div>
    <div class="bg3">
    </div>
    <div class="bg4">
    </div>
    <div class="bg5">
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
    <!-- <div class='fixBg' v-if="popShow"></div>
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
    </div> -->
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
    data() {
        $(function() {
            // 转盘样式，a：旋转角度，p：概率（1代表100%），t：需要显示的其它信息（文案or分享）
            var resultAngle = [{
                    a: 0,
                    p: 0,
                    t: '桃花朵朵开^_^'
                },
                {
                    a: 60,
                    p: 0.5,
                    t: '哎呦，不错哦^_^'
                },
                {
                    a: 120,
                    p: 0,
                    t: '天天开心呢^_^'
                },
                {
                    a: 180,
                    p: 0,
                    t: '给姐笑一个^_^'
                },
                {
                    a: 240,
                    p: 0,
                    t: '今天天气不错^_^'
                },
                {
                    a: 300,
                    p: 0.5,
                    t: '心情大好哈哈^_^'
                }
            ]
            var rotate = {
                // 起始位置为0
                rotateAngle: 0,
                // 转盘转动过程中不可再次触发
                flagClick: true,
                // type:0,箭头转动,1,背景转动;during_time:持续时间(s)
                calculateResult: function(type, duringTime) {
                    var self = this;
                    // 默认为箭头转动
                    type = type || 0;
                    // 默认为1s
                    duringTime = duringTime || 1;

                    // 用来判断的随机数，1-100
                    var randNum = Math.ceil(Math.random() * 100);

                    // 最终要旋转到哪一块，对应result_angle的下标
                    var resultIndex;
                    // 判断的角度值起始位置和结束位置
                    var startPos;
                    var endPos = startPos = 0;

                    for (var i in resultAngle) {
                        // 区块的起始值
                        startPos = endPos + 1;
                        // 区块的结束值
                        endPos = endPos + 100 * resultAngle[i].p;

                        // 如果随机数落在当前区块，那么获取到最终要旋转到哪一块
                        if (randNum >= startPos && randNum <= endPos) {
                            resultIndex = i;
                            break;
                        }
                    }
                    // 附加多转几圈，2-3
                    var randCircle = Math.ceil(Math.random() * 2) + 1;

                    // 旋转结束前，不允许再次触发
                    self.flagClick = false;
                    // 转动盘子
                    if (type === 1) {
                        self.rotateAngle = self.rotateAngle - randCircle * 360 - resultAngle[resultIndex].a - self.rotateAngle % 360;
                        $('#i_bg').css({
                            'transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-ms-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-moz-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            'transition': 'transform ease-out ' + duringTime + 's',
                            '-moz-transition': '-moz-transform ease-out ' + duringTime + 's',
                            '-webkit-transition': '-webkit-transform ease-out ' + duringTime + 's',
                            '-o-transition': '-o-transform ease-out ' + duringTime + 's'
                        });
                    } else {
                        // 转动指针
                        self.rotateAngle = self.rotateAngle + randCircle * 360 + resultAngle[resultIndex].a - self.rotateAngle % 360;
                        $('#i_cont').css({
                            'transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-ms-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-webkit-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-moz-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            '-o-transform': 'rotate(' + self.rotateAngle + 'deg)',
                            'transition': 'transform ease-out ' + duringTime + 's',
                            '-moz-transition': '-moz-transform ease-out ' + duringTime + 's',
                            '-webkit-transition': '-webkit-transform ease-out ' + duringTime + 's',
                            '-o-transition': '-o-transform ease-out ' + duringTime + 's'
                        });
                    }
                    // 旋转结束后，允许再次触发
                    setTimeout(function() {
                        self.flagClick = true;
                        // 告诉结果
                        alert(resultAngle[resultIndex].t);
                    }, duringTime * 1000);
                }
            }
            $('#i_cont').click(function() {
                // 旋转结束前，不允许再次触发
                if (rotate.flagClick) {
                    rotate.calculateResult(0, 1);
                }
            });
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
        return {}
    },
    computed: mapState({}),
    components: {},
    methods: {},
    mounted() {}
}
</script>
