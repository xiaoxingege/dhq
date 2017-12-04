<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
    height: 1080px;
    background: url("../assets/images/pilot-conference/pilot-conference-bg2.jpg") center 0 no-repeat;
    position: relative;
}
.box.level1 {
    width: 100%;
    height: 1080px;
    background: url("../assets/images/pilot-conference/pilot-conference-bg3.jpg") center 0 no-repeat;
}
.box.level2 {
    width: 100%;
    height: 1080px;
    background: url("../assets/images/pilot-conference/pilot-conference-bg4.jpg") center 0 no-repeat;
}
.box-con {
    width: 1455px;
    margin: 0 auto;
    position: relative;
}
.box-con .title {
    width: 395px;
    height: 45px;
    float: left;
    margin: 165px 0 0 35px;
    color: #03fdfd;
    font-size: 36px;
}
.box-con .title strong {
    float: left;
    line-height: 45px;
    font-weight: normal;
}
.box-con .title span {
    float: right;
    line-height: 45px;
    margin-right: 20px;
}
.box-con ul {
    float: left;
    width: 100%;
    margin-top: 110px;
    height: 600px;
    overflow-y: scroll;
}
.box-con li {
    float: left;
    width: 240px;
    height: 89px;
    margin-bottom: 32px;
}
.box-con li div {
    height: 89px;
    float: left;
    width: 100%;
    background: url("../assets/images/pilot-conference/pilot-conference-head-bg1.png") 24px 0 no-repeat;
}
.box-con li div img {
    width: 78px;
    height: 78px;
    float: left;
    border-radius: 50%;
    margin: 5px 0 0 30px;
    display: inline;
}
.box-con li div p {
    width: 120px;
    float: left;
    margin-left: 10px;
    color: #fff;
    line-height: 40px;
    margin-top: 10px;
}
.box-con li div p strong {
    font-size: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box-con li div p span {
    font-size: 18px;
}
.box-con li div p span,
.box-con li div p strong {
    width: 100%;
    float: left;
    line-height: inherit;
    text-align: left;
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
.title1 {
    color: #03fdfd;
    font-size: 36px;
    position: absolute;
    left: 905px;
    top: 163px;
}
.title1 span {
    color: #f56e5e;
}
</style>

<template>
<div :class="level == 1 ? 'box' : level > 1 && level < 3 ? 'box level1' : 'box level2'">
    <a href="javascript:history.go(-1);" class="left-link" v-if="linkShow"></a>
    <div class="right-link" @click="rightLink" v-if="linkShow"></div>
    <div class="box-con">
        <div class="title">
            <strong>{{getTopUserListData.stockName}}</strong>
            <span>+{{getTopUserListData.rate}}%</span>
        </div>
        <div class="title1" v-if="show"><em v-text="level == 1 ? '一' : level > 1 && level < 3 ? '二' : '三'"></em>等奖获奖者将从以下<span>{{getTopUserListData.userList.length}}人</span>中抽出</div>
        <ul>
            <li v-for="item in getTopUserListData.userList" v-if="show">
                <div>
                    <img :src="item.headImage" />
                    <p>
                        <strong>{{item.userName}}</strong>
                        <span>{{item.mobile}}</span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
import getQueryString from 'utils/getQueryString'
window.jQuery = window.$ = jQuery

export default {
    data() {
        return {
            level: '',
            show: false,
            linkShow: false
        }
    },
    computed: mapState({
        getTopUserListData: state => {
            return state.pilotConference.getTopUserListData
        },
        err: state => {
            return state.pilotConference.err
        }
    }),
    components: {},
    methods: {
        rightLink() {
            if (getQueryString('level') === '1') {
                window.location.href = 'http://itougu.jrj.com.cn/act/pilot-conference-stages3?level=1'
            } else if (getQueryString('level') === '2') {
                window.location.href = 'http://itougu.jrj.com.cn/act/pilot-conference-stages3?level=2'
            } else if (getQueryString('level') === '3') {
                window.location.href = 'http://itougu.jrj.com.cn/act/pilot-conference-stages3?level=3'
            }
        }
    },
    mounted() {
        document.title = '领航中国大会'
        var _this = this
        if (!getQueryString('level')) {
            this.level = '1'
        } else {
            this.level = getQueryString('level')
        }
        this.$store.dispatch('pilotConference/getTopUserList', {
            level: _this.level
        })
        this.$watch('getTopUserListData', getTopUserListData => {
            if (getTopUserListData.userList.length !== 0) {
                _this.show = true

            }
        })
        setTimeout(function() {
            _this.linkShow = true
        }, 3000)
    }
}
</script>
