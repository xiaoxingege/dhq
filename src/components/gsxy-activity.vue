<style>
body {
    background-color: #0f2180 !important;
    font-family: '微软雅黑';
}

input,
button {
    outline: none;
}

.list-box {
    height: 6.72rem;
    overflow-y: scroll;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/gsxy-activity/gsxy-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 5.73rem;
}
.bg2 {
    background: url("../assets/images/gsxy-activity/gsxy-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 6.93rem;
}
.bg3 {
    background: url("../assets/images/gsxy-activity/gsxy-bg3.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 8.94rem;
}
.bg4 {
    background: url("../assets/images/gsxy-activity/gsxy-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 8.33rem;
}
.bg5 {
    background: url("../assets/images/gsxy-activity/gsxy-bg5.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 14.59rem;
}
.box-con {
    height: 100%;
    position: relative;
}
.nav-a {
    width: 6.9rem;
    height: 0.8rem;
    position: absolute;
    bottom: 0;
    left: 0.3rem;
}
.nav-a a {
    float: left;
    width: 33.33%;
    height: 100%;
}
.bg2 .box-con h3 {
    font-size: 0.34rem;
    color: #fff;
    width: 6.9rem;
    height: 1.09rem;
    line-height: 1.09rem;
    margin-left: 0.3rem;
    text-indent: 0.3rem;
    font-weight: normal;
    float: left;
}
.stockCamp-box {
    width: 6.9rem;
    height: 5.35rem;
    float: left;
    margin-left: 0.3rem;
}
.stockCamp-box img {
    width: 6.9rem;
    height: 3.4rem;
    float: left;
    border-top-left-radius: 0.15rem;
    border-top-right-radius: 0.15rem;
}
.stockCamp-box p {
    width: 100%;
    height: 0.58rem;
    line-height: 0.58rem;
    float: left;
    text-indent: 0.2rem;
    font-size: 0.26rem;
    color: #081355;
}
.stockCamp-links {
    width: 100%;
    height: 0.79rem;
    float: left;
}
.stockCamp-links a {
    width: 50%;
    height: 100%;
    float: left;
}
.pubCourse-box {
    width: 6.9rem;
    height: 7.1rem;
    overflow: hidden;
    float: left;
    margin: 0.7rem 0 0 0.3rem;
}
.pubCourse-box img {
    width: 6.9rem;
    height: 3rem;
    float: left;
    border-radius: 0.15rem;
}
.pubCourse-box li {
    width: 100%;
    height: 0.83rem;
    border-bottom: 0.01rem dashed #6a80f3;
    float: left;
    font-size: 0.28rem;
    color: #fff;
    line-height: 0.83rem;
    text-align: center;
}
.pubCourse-box li a {
    color: #fff;
}
.excellentCourse-box {
    width: 6.9rem;
    height: 11.2rem;
    overflow: hidden;
    float: left;
    margin: 0.71rem 0 0 0.3rem;
}
.excellentCourse-box li {
    width: 6.9rem;
    height: 2rem;
    float: left;
    margin-bottom: 0.3rem;
    border-radius: 0.15rem;
    background-color: #fff;
    overflow: hidden;
}
.excellentCourse-box img {
    width: 2.2rem;
    height: 2rem;
    float: left;
}
.excellentCourse-box li div {
    width: 4.7rem;
    height: 2rem;
    float: left;
    position: relative;
}
.excellentCourse-box li div h5 {
    font-size: 0.3rem;
    color: #2158f4;
    width: 100%;
    height: 0.72rem;
    line-height: 0.72rem;
    text-indent: 0.2rem;
}
.excellentCourse-box li div span {
    font-size: 0.24rem;
    color: #000;
    position: absolute;
    top: 0.68rem;
    left: 0.2rem;
}
.excellentCourse-box li div strong {
    font-size: 0.24rem;
    color: #2158f4;
    position: absolute;
    right: 0.3rem;
    top: 0.68rem;
}
.excellentCourse-box li div p {
    width: 4.21rem;
    font-size: 0.24rem;
    color: #000;
    line-height: 0.4rem;
    float: left;
    height: 0.8rem;
    overflow: hidden;
    margin: 0.3rem 0 0 0.2rem;
}
.bg3-box {
    width: 6.9rem;
    float: left;
    margin: 0.71rem 0 0 0.3rem;
}
</style>

<template>
<div class="box">
    <div class="bg1">
        <div class="box-con">
            <div class="nav-a">
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
                <a href="javascript:;"></a>
            </div>
        </div>
    </div>
    <div class="bg2">
        <div class="box-con" v-if="dataType">
            <h3>{{stockCamp.title}}</h3>
            <div class="stockCamp-box">
                <img :src="stockCamp.image" />
                <p>主讲嘉宾：{{stockCamp.guest}}</p>
                <p>本期主题：{{stockCamp.title}}</p>
                <div class="stockCamp-links">
                    <a :href="stockCamp.courseware"></a>
                    <a :href="stockCamp.roomId"></a>
                </div>
            </div>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <!-- :listData="listData" -->
            <div class="bg3-box">
                <topic-comment :appItemId="appItemId" />
            </div>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con" v-if="dataType">
            <div class="pubCourse-box">
                <a :href="pubCourse.list[0].url"><img :src="pubCourse.list[0].image" /></a>
                <ul>
                    <li v-for="item,index in pubCourse.list" v-if="index !== 0">
                        <a :href="item.url">{{item.title}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con" v-if="dataType">
            <ul class="excellentCourse-box">
                <li v-for="item in excellentCourse.list">
                    <img :src="item.image" />
                    <div>
                        <h5>{{item.courseName}}</h5>
                        <span>{{item.tgName}}</span>
                        <strong>{{item.studyNum}}人学习</strong>
                        <p>课程概要：{{item.courseDesc}}</p>
                    </div>
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
import topicComment from 'components/topic-comment'

export default {
    data() {
        return {
            stockCamp: null,
            pubCourse: null,
            excellentCourse: null,
            dataType: false,
            appItemId: 8
        }
    },
    computed: mapState({}),
    components: {
        topicComment
    },
    methods: {},
    mounted() {
        document.title = '每日3只强势股-金融界'
        var _this = this

        $.ajax({
            url: 'http://itougu.jrj.com.cn/marketing/stockRoom.jspa',
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        }).then(data => {
            if (data.retCode === 1) {
                _this.excellentCourse = data.data.excellentCourse
                _this.pubCourse = data.data.pubCourse
                _this.stockCamp = data.data.stockCamp[0]
                _this.dataType = true
            } else {
                alert(data.msg)
            }
        })
        $(function() {
            window.InitWeChatShare({
                shareTitle: window.document.title,
                shareLink: window.location.href,
                shareDesc: '2017年底行情如何布局？2018A股市场将会怎样？金融界送您每天3只盘前热股，关注跨年行情',
                shareImg: 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/endYear-H5-bg1.jpg',
                callback: function(wx) {

                }
            })
            $('.nav-a a').click(function() {
                var index = $(this).index();
                index = index === 0 ? 2 : index === 1 ? 4 : index === 2 ? 5 : ''
                var pos = $('.bg' + index).offset().top
                // 实现平滑移动 1000代表时间ms
                $('html,body').stop().animate({
                    scrollTop: pos
                }, 500)
            })

        })
    }
}
</script>
