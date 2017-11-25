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
    background: url("../assets/images/pilot-conference/pilot-conference-bg5.jpg") center 0 no-repeat;
}
.box.level1 {
    width: 100%;
    height: 1080px;
    background: url("../assets/images/pilot-conference/pilot-conference-bg6.jpg") center 0 no-repeat;
}
.box.level2 {
    width: 100%;
    height: 1080px;
    background: url("../assets/images/pilot-conference/pilot-conference-bg7.jpg") center 0 no-repeat;
}
.box-con {
    width: 1455px;
    margin: 0 auto;
}
.level-con1 {
    float: left;
    margin: 471px 0 0 446px;
}
.box-con .level-con1 div {
    height: 236px;
    float: left;
    width: 100%;
    background: url("../assets/images/pilot-conference/pilot-conference-head-bg2.png") 0 0 no-repeat;
}
.box-con .level-con1 div img {
    width: 205px;
    height: 205px;
    float: left;
    border-radius: 50%;
    margin: 14px 0 0 18px;
    display: inline;
}
.box-con .level-con1 div p {
    width: 65%;
    float: left;
    margin-left: 30px;
    color: #fff;
    margin-top: 40px;
}
.box-con .level-con1 div p strong {
    font-size: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box-con .level-con1 div p span {
    font-size: 50px;
}

.level-con2 {
    float: left;
    margin: 513px 0 0;
}
.box-con .level-con2 div {
    height: 180px;
    float: left;
    width: 485px;
    background: url("../assets/images/pilot-conference/pilot-conference-head-bg3.png") 26px 0 no-repeat;
}
.box-con .level-con2 div img {
    width: 160px;
    height: 160px;
    float: left;
    border-radius: 50%;
    margin: 10px 0 0 40px;
    display: inline;
}
.box-con .level-con2 div p {
    width: 260px;
    float: left;
    margin-left: 20px;
    color: #fff;
    margin-top: 40px;
}
.box-con .level-con2 div p strong {
    font-size: 46px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box-con .level-con2 div p span {
    font-size: 38px;
}

.level-con3 {
    float: left;
    margin: 380px 0 0;
}
.box-con .level-con3 div {
    height: 170px;
    float: left;
    width: 485px;
    background: url("../assets/images/pilot-conference/pilot-conference-head-bg4.png") 26px 0 no-repeat;
    margin-bottom: 84px;
}
.box-con .level-con3 div img {
    width: 150px;
    height: 150px;
    float: left;
    border-radius: 50%;
    margin: 10px 0 0 40px;
    display: inline;
}
.box-con .level-con3 div p {
    width: 260px;
    float: left;
    margin-left: 20px;
    color: #fff;
    margin-top: 40px;
}
.box-con .level-con3 div p strong {
    font-size: 44px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.box-con .level-con3 div p span {
    font-size: 36px;
}
.box-con div p span,
.box-con div p strong {
    width: 100%;
    float: left;
    line-height: inherit;
    text-align: left;
}
</style>

<template>
<div :class="level == 1 ? 'box' : level > 1 && level < 3 ? 'box level1' : 'box level2'">
    <div class="box-con">
        <div class="level-con1" v-if="level == 1">
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
        </div>
        <div class="level-con2" v-if="level == 2">
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
        </div>
        <div class="level-con3" v-if="level == 3">
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
            <div>
                <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                <p>
                    <strong>用户名</strong>
                    <span>186****0000</span>
                </p>
            </div>
        </div>
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
            level: ''
        }
    },
    computed: mapState({
        // type: state => {
        //     return state.reservation.type
        // },
        // err: state => {
        //     return state.reservation.err
        // }
    }),
    components: {},
    methods: {
        // popClick() {
        //     this.popShow = true
        // }
    },
    mounted() {
        document.title = '领航中国大会'
        if (!getQueryString('level')) {
            this.level = '1'
        } else {
            this.level = getQueryString('level')
        }
    }
}
</script>
