<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}
</style>
<style lang="scss">
@import '../assets/css/reset.css';
@import '../assets/css/animate.min.css';
.box {
    width: 100%;
    height: 1080px;
    background: url("../assets/images/pilot-conference/pilot-conference-bg1.jpg") center 0 no-repeat;
    position: relative;
}
.box-con {
    width: 1455px;
    height: 1080px;
    margin: 0 auto;
    position: relative;
}
.left {
    float: left;
    width: 728px;
    height: 720px;
    margin: 218px 0 0 62px;
    display: inline;
    overflow: hidden;
}
.left li {
    width: 100%;
    height: 0;
    overflow: hidden;
}
.left li:nth-of-type(odd) {
    background: #063968;
}
.left li:nth-of-type(even) {
    background: #062d5b;
}
.left li div {
    width: 30%;
    height: 120px;
    float: left;
}
.left li div:first-child {
    width: 40%;
    background: url("../assets/images/pilot-conference/pilot-conference-head-bg.png") 34px 11px no-repeat;
}
.left li div img {
    width: 86px;
    height: 86px;
    float: left;
    border-radius: 50%;
    margin: 17px 0 0 42px;
    display: inline;
}
.left li div p {
    width: 130px;
    float: left;
    margin-left: 20px;
    color: #fff;
    line-height: 40px;
    margin-top: 22px;
}
.left li div p strong {
    font-size: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.left li div p span {
    font-size: 20px;
}
.left li div p span,
.left li div p strong {
    width: 100%;
    float: left;
    line-height: inherit;
    text-align: left;
}
.left li div strong {
    float: left;
    width: 100%;
    line-height: 120px;
    font-size: 24px;
    text-align: center;
    color: #fff;
}
.right {
    width: 596px;
    min-height: 745px;
    float: right;
    margin-top: 209px;
    display: inline;
}
.right li {
    width: 100%;
    height: 160px;
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg.png") 0 0 no-repeat;
    margin-bottom: 18px;
}
.right li.rightList-1 {
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg4.png") 0 0 no-repeat;
}
.right li.rightList-2 {
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg.png") 0 0 no-repeat;
}
.right li.rightList-3 {
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg.png") 0 0 no-repeat;
}
.right li.rightList1 {
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg1.png") 0 0 no-repeat;
}
.right li.rightList2 {
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg2.png") 0 0 no-repeat;
}
.right li.rightList3 {
    background: url("../assets/images/pilot-conference/pilot-conference-right-bg3.png") 0 0 no-repeat;
}
.right li:last-child {
    margin-bottom: 13px;
}
.right li div {
    width: 33.33%;
    height: 160px;
    float: left;
    text-align: center;
    color: #fff;
    font-size: 32px;
    line-height: 160px;
}
.right li div:last-child {
    text-indent: 40px;
}
.right li div.red {
    color: #f5514e;
}
.left-link {
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.right-link {
    width: 200px;
    height: 200px;
    position: absolute;
    bottom: 0;
    right: 0;
}
</style>

<template>
<div class="box">
    <a href="javascript:history.go(-1);" class="left-link"></a>
    <div class="right-link" @click="rightLink"></div>
    <div class="box-con">
        <div class="left">
            <ul>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li v-for="item,index in LastLotteryData.topInfoList" v-if="show" :class="item.size > 0 ? 'animated flipInX rightList-'+(index+1):' animated rightList'+(index+1)">
                    <div v-if='item.size > 0'>{{item.stockName}} </div>
                    <div v-if='item.size > 0'>{{item.rate}}%</div>
                    <div class="red" v-if='item.size > 0'>{{item.size}}人</div>
                </li>
            </ul>
            <img src="../assets/images/pilot-conference/pilot-conference-img2.png" />
        </div>
    </div>
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

        return {
            show: false,
            id: ''
        }
    },
    computed: mapState({
        LastLotteryData: state => {
            return state.pilotConference.LastLotteryData
        },
        err: state => {
            return state.pilotConference.err
        }
    }),
    components: {},
    methods: {
        rightLink() {
            if (this.LastLotteryData.status === 2) {
                window.location.href = 'http://itougu.jrj.com.cn/act/pilot-conference-stages2?level=3'
            } else {
                return
            }
        }
    },
    mounted() {
        document.title = '领航中国大会'
        var _this = this
        this.$store.dispatch('pilotConference/getLastLottery', {
            id: 0
        })
        this.$watch('LastLotteryData', LastLotteryData => {
            var htmls = ''
            this.show = true

            if (LastLotteryData.userList.length === 0) {
                setTimeout(function() {
                    _this.$store.dispatch('pilotConference/getLastLottery', {
                        id: _this.id
                    })
                }, 1000)
            } else {
                for (var i = 0; i < LastLotteryData.userList.length; ++i) {
                    doSetTimeout(i);
                }
            }

            function doSetTimeout(i) {
                if (i + 1 === LastLotteryData.userList.length) {
                    setTimeout(function() {
                        _this.id = LastLotteryData.userList[0].id
                        _this.$store.dispatch('pilotConference/getLastLottery', {
                            id: LastLotteryData.userList[0].id
                        })
                    }, (LastLotteryData.userList.length) * 400)
                }
                setTimeout(function() {
                    if (LastLotteryData.userList[i].mobile) {
                        htmls = '<li class="a' + i + '" style="transition:height 0.8s;"><div><img src="' + LastLotteryData.userList[i].headImage +
                            '" /><p><strong>' + LastLotteryData.userList[i].userName + '</strong><span>' + LastLotteryData.userList[i].mobile + '</span></p></div><div><strong>' + LastLotteryData.userList[i].stockName +
                            '</strong></div><div><strong>＋' + LastLotteryData.userList[i].rate +
                            '%</strong></div></li>'
                    } else {
                        htmls = '<li class="a' + i + '" style="transition:height 0.8s;"><div><img src="' + LastLotteryData.userList[i].headImage +
                            '" /><p><strong style="margin-top:20px;">' + LastLotteryData.userList[i].userName + '</strong></p></div><div><strong>' + LastLotteryData.userList[i].stockName +
                            '</strong></div><div><strong>＋' + LastLotteryData.userList[i].rate +
                            '%</strong></div></li>'
                    }
                    $('.left ul').prepend(htmls)
                    $('.a' + i).height('120px')
                }, i * 400);
            }

        })
    }
}
</script>
