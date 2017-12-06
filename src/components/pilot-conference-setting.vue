<style>
body {
    background-color: #071843 !important;
    font-family: '微软雅黑';
}

button {
    outline: none;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
    position: relative;
}
.box-con {
    width: 800px;
    margin: 0 auto;
    position: relative;
}
h1 {
    text-align: center;
    padding: 50px 0 30px;
    color: #fff;
}
.box-con div {
    width: 100%;
    margin: 20px 0;
    float: left;
}
.box-con div span {
    width: 37%;
    text-indent: 50px;
    display: inline-block;
    font-size: 22px;
    color: #fff;
}
.box-con div button {
    padding: 3px 0;
    width: 80px;
    display: inline-block;
    border-radius: 10px;
    margin-right: 20px;
    text-align: center;
    cursor: pointer;
}
.box-con div button:disabled {
    background-color: #dddddd;
    cursor: default;
}
.box-con ul {
    padding: 20px;
    background-color: #063968;
    float: left;
    width: 760px;
    margin-top: 20px;
    border-radius: 15px;
}

.box-con li {
    height: 89px;
    float: left;
    width: 50%;
    background: url("../assets/images/pilot-conference/pilot-conference-head-bg1.png") 24px 0 no-repeat;
    margin: 10px 0;
}
.box-con li img {
    width: 75px;
    height: 75px;
    float: left;
    border-radius: 50%;
    margin: 7px 0 0 30px;
    display: inline;
}
.box-con li p {
    width: 265px;
    float: left;
    margin-left: 10px;
    color: #fff;
    line-height: 40px;
}
.box-con li p strong {
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
}
.box-con li p span {
    font-size: 18px;
    text-indent: 0;
}
.box-con li p span,
.box-con li p strong {
    width: 100%;
    float: left;
    line-height: inherit;
    text-align: left;
}
</style>

<template>
<div class="box">
    <div class="box-con">
        <h1>活动操作后台</h1>
        <div>
            <span>活动开关</span>
            <button type="button" name="button" @click="open" :disabled="LastLotteryData.status === 1">开&nbsp;启</button>
            <button type="button" name="button" @click="close" :disabled="LastLotteryData.status === 2">关&nbsp;闭</button>
        </div>
        <div>
            <span>三等奖获奖名单</span>
            <ul>
                <li v-for="item in getWinerUserListData3.winList">
                    <img :src="item.headImage" />
                    <p>
                        <strong>{{item.userName}}</strong>
                        <span>{{item.mobile}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div>
            <span>二等奖获奖名单</span>
            <ul>
                <li v-for="item in getWinerUserListData2.winList">
                    <img :src="item.headImage" />
                    <p>
                        <strong>{{item.userName}}</strong>
                        <span>{{item.mobile}}</span>
                    </p>
                </li>
            </ul>
        </div>
        <div>
            <span>一等奖获奖名单</span>
            <ul>
                <li v-for="item in getWinerUserListData1.winList">
                    <img :src="item.headImage" />
                    <p>
                        <strong>{{item.userName}}</strong>
                        <span>{{item.mobile}}</span>
                    </p>
                </li>
            </ul>
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
            level: '',
            show: false
        }
    },
    computed: mapState({
        openType: state => {
            return state.pilotConference.openType
        },
        closeType: state => {
            return state.pilotConference.closeType
        },
        LastLotteryData: state => {
            return state.pilotConference.LastLotteryData
        },
        getWinerUserListData1: state => {
            return state.pilotConference.getWinerUserListData1
        },
        getWinerUserListData2: state => {
            return state.pilotConference.getWinerUserListData2
        },
        getWinerUserListData3: state => {
            return state.pilotConference.getWinerUserListData3
        },
        err: state => {
            return state.pilotConference.err
        }
    }),
    components: {},
    methods: {
        open() {
            var mymessage = confirm('开启后上次记录清空，是否确认开启？');
            if (mymessage === true) {
                this.$store.dispatch('pilotConference/openLettery')
            } else if (mymessage === false) {
                return
            }
        },
        close() {
            var mymessage = confirm('是否确认关闭？');
            if (mymessage === true) {
                this.$store.dispatch('pilotConference/closeDiagnose')
            } else if (mymessage === false) {
                return
            }
        }
    },
    mounted() {
        document.title = '领航中国大会-后台'
        var _this = this
        this.$store.dispatch('pilotConference/getLastLottery', {
            id: 0
        })
        this.$store.dispatch('pilotConference/getWinerUserList', {
            level: 1,
            type: true
        })
        this.$store.dispatch('pilotConference/getWinerUserList', {
            level: 2,
            type: true
        })
        this.$store.dispatch('pilotConference/getWinerUserList', {
            level: 3,
            type: true
        })
        _this.$watch('openType', openType => {
            if (openType) {
                window.location.reload()
            }
        })
        _this.$watch('closeType', closeType => {
            if (closeType) {
                window.location.reload()
            }
        })
        _this.$watch('err', err => {
            alert(err.msg)
        })
    }
}
</script>
