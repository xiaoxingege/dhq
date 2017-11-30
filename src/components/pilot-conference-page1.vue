<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}
</style>
<style lang="scss">
@import '../assets/css/reset.css';
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
// .left ul {
//     height: 720px;
//
// }
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
        <!-- <div class="gp-text">京东方A</div>
        <div class="gp-">

        </div> -->
        <div class="left">
            <ul>
                <!-- <li v-for="item in dataList">
                    <div>
                        <img :src="item.headImg" />
                        <p>
                            <strong>{{item.userName}}</strong>
                            <span>{{item.phoneNum}}</span>
                        </p>
                    </div>
                    <div>
                        <strong>{{item.gpText}}</strong>
                    </div>
                    <div>
                        <strong>{{item.gpRise}}</strong>
                    </div>
                </li> -->
                <!-- <li>
                    <div>
                        <img src="../assets/images/pilot-conference/pilot-conference-img1.png" />
                        <p>
                            <strong>用户名</strong>
                            <span>186****0000</span>
                        </p>
                    </div>
                    <div>
                        <strong>京东方A</strong>
                    </div>
                    <div>
                        <strong>＋10%</strong>
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
                    <div>
                        <strong>京东方A</strong>
                    </div>
                    <div>
                        <strong>＋10%</strong>
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
                    <div>
                        <strong>京东方A</strong>
                    </div>
                    <div>
                        <strong>＋10%</strong>
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
                    <div>
                        <strong>京东方A</strong>
                    </div>
                    <div>
                        <strong>＋10%</strong>
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
                    <div>
                        <strong>京东方A</strong>
                    </div>
                    <div>
                        <strong>＋10%</strong>
                    </div>
                </li> -->
            </ul>
        </div>
        <div class="right">
            <ul>
                <li>
                    <div>京东方A</div>
                    <div>＋10%</div>
                    <div class="red">40人</div>
                </li>
                <li>
                    <div>京东方A</div>
                    <div>＋10%</div>
                    <div class="red">40人</div>
                </li>
                <li>
                    <div>京东方A</div>
                    <div>＋10%</div>
                    <div class="red">40人</div>
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
            dataList: [{
                'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
                'userName': '用户名',
                'phoneNum': '186****0000',
                'gpText': '京东方A',
                'gpRise': '＋10%'
            }, {
                'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
                'userName': '用户名',
                'phoneNum': '186****0000',
                'gpText': '京东方A',
                'gpRise': '＋10%'
            }, {
                'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
                'userName': '用户名',
                'phoneNum': '186****0000',
                'gpText': '京东方A',
                'gpRise': '＋10%'
            }, {
                'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
                'userName': '用户名',
                'phoneNum': '186****0000',
                'gpText': '京东方A',
                'gpRise': '＋10%'
            }, {
                'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
                'userName': '用户名',
                'phoneNum': '186****0000',
                'gpText': '京东方A',
                'gpRise': '＋10%'
            }, {
                'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
                'userName': '用户名',
                'phoneNum': '186****0000',
                'gpText': '京东方A',
                'gpRise': '＋10%'
            }]
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
        rightLink() {
            window.location.href = 'http://localhost:8081/dist/web/pilot-conference-stages2.html?level=3'
        }
    },
    mounted() {
        document.title = '领航中国大会'
        // var a = [{
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '111用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '222用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '333用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '111用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '222用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '333用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '111用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '222用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }, {
        //     'headImg': require('../assets/images/pilot-conference/pilot-conference-img1.png'),
        //     'userName': '333用户名',
        //     'phoneNum': '186****0000',
        //     'gpText': '京东方A',
        //     'gpRise': '＋10%',
        //     'a': true
        // }]
        // var _this = this;

        function doSetTimeout(i) {
            setTimeout(function() {
                // _this.dataList.unshift(a[i])
                var htmls = '<li class="a' + i + '" style="transition:height 0.8s;"><div><img src="' + require('../assets/images/pilot-conference/pilot-conference-img1.png') +
                    '" /><p><strong>用户名</strong><span>186****0000</span></p></div><div><strong>京东方A' + i +
                    '</strong></div><div><strong>＋10%</strong></div></li>'
                $('.left ul').prepend(htmls)
                $('.a' + i).height('120px')
            }, i * 800);
        }
        for (var i = 0; i < 6; ++i) {
            doSetTimeout(i);
        }
    }
}
</script>
