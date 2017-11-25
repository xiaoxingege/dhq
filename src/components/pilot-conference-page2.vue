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
</style>

<template>
<div :class="level == 1 ? 'box' : level > 1 && level < 3 ? 'box level1' : 'box level2'">
    <div class="box-con">
        <div class="title">
            <strong>京东方A</strong>
            <span>+10%</span>
        </div>
        <ul>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
                    </p>
                </div>
            </li>
            <li>
                <div>
                    <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                    <p>
                        <strong>用户名</strong>
                        <span>186****0000</span>
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
