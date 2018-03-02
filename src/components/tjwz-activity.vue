<style>
body {
    background-color: #1d1c3e !important;
    font-family: '微软雅黑';
}

input,
button {
    outline: none;
}

.list-box {
    height: 7.2rem;
    overflow-y: scroll;
}

.bg4 .send-box {
    position: absolute;
    top: 0.7rem;
    left: 0.01rem;
    height: 2.3rem;
    background-color: #fff;
    border: none;
    width: auto;
}

.bg4 .list-box {
    position: absolute;
    top: 3rem;
    left: 0;
}

.bg4 .box {
    height: 9.9rem;
}

.bg4 .send-box textarea {
    width: 5.88rem;
    height: 0.78rem;
    padding: 0.2rem;
    border: 0.01rem #c59b53 solid;
    float: left;
    margin: 0.3rem 0 0 0.3rem;
    resize: none;
}

.bg4 .send-box button {
    width: 1.4rem;
    height: 0.5rem;
    position: absolute;
    bottom: 0.2rem;
    right: 0;
    font-size: 0.28rem;
    background-color: #d0ab6f;
    line-height: 0.5rem;
}

.bg4 .tips {
    font-size: 0.24rem;
    color: #775f41;
    position: absolute;
    top: 2.42rem;
    left: 0.3rem;
    z-index: 9;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/tjwz-activity/tjwz-activity-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 7.93rem;
}
.bg5 {
    background: url("../assets/images/tjwz-activity/tjwz-activity-bg5.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 2.53rem;
    width: 100%;
    float: left;
}
.box-con {
    height: 100%;
    position: relative;
}
.bg1-title {
    width: 6.11rem;
    height: 2.47rem;
    float: left;
    margin: 0.96rem 0 0 0.71rem;
}
.bg1-title img {
    width: 5.45rem;
    height: 0.86rem;
    float: left;
    margin: 0.52rem 0 0 0.33rem;
}
.bg1 .bg1-title p {
    width: 100%;
    text-align: center;
    font-size: 0.36rem;
    color: #fc8715;
    float: left;
    margin-top: 0.15rem;
}
.bg1 h3 {
    width: 4.06rem;
    height: 0.58rem;
    float: left;
    margin: 0.92rem 0 0 1.71rem;
    font-size: 0.36rem;
    font-weight: bold;
    color: #fadaa7;
    text-align: center;
}
.bg1 .bg1-txt {
    width: 6.5rem;
    min-height: 1.7rem;
    padding: 0.2rem;
    float: left;
    margin: 0.4rem 0 0 0.3rem;
    font-size: 0.26rem;
    color: #4f3307;
    background-color: #fefdf9;
    line-height: 0.4rem;
    overflow: hidden;
}
.bg2 .box-con {
    width: 6.9rem;
    position: relative;
    float: left;
    margin-left: 0.3rem;
}
.bg2-title {
    width: 100%;
    height: 0.7rem;
    background: url("../assets/images/tjwz-activity/tjwz-activity-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
}
.bg2-con {
    width: 100%;
    height: auto;
    background-color: #fefdf9;
    float: left;
    padding-bottom: 0.5rem;
}
.bg2-con ul {
    height: 1.4rem;
    overflow: hidden;
}
.bg2-con li {
    width: 25%;
    float: left;
    font-size: 0.3rem;
    margin: 0.15rem 0;
    text-align: center;
}
.bg2-con li a {
    color: #ce9628;
}
.bg2-con div {
    width: 0.39rem;
    height: 0.35rem;
    background: url("../assets/images/tjwz-activity/tjwz-activity-icon1.png") center 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    bottom: 0.1rem;
    left: 50%;
    margin-left: -0.175rem;
}
.bg2-con .show {
    height: auto;
}
.bg2-con .toggle {
    background: url("../assets/images/tjwz-activity/tjwz-activity-icon2.png") center 0 no-repeat;
    background-size: 100% 100%;
}
.bg3 .box-con {
    width: 6.9rem;
    position: relative;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.51rem;
}
.bg3-title {
    width: 100%;
    height: 0.7rem;
    background: url("../assets/images/tjwz-activity/tjwz-activity-bg3.jpg") center 0 no-repeat;
    background-size: 100% 100%;
}
.bg3-con {
    width: 6.3rem;
    height: auto;
    background-color: #fefdf9;
    float: left;
    padding: 0.3rem;
}
.gd-box {
    margin-bottom: 0.3rem;
}
.gd-box:last-child {
    margin-bottom: 0;
}
.gd-box .tg {
    width: 100%;
    height: 0.9rem;
    border-bottom: 1px #e9d7ba solid;
    position: relative;
}
.gd-box .tg img {
    width: 0.6rem;
    height: 0.6rem;
    float: left;
    border-radius: 50%;
}
.gd-box .tg span {
    float: left;
    line-height: 0.6rem;
    font-size: 0.28rem;
    color: #ce9628;
    padding-left: 0.1rem;
}
.gd-box .tg p {
    font-size: 0.28rem;
    color: #ce9628;
    text-decoration: underline;
    position: absolute;
    top: 0.18rem;
    right: 0;
}
.gd-box .gd {
    position: relative;
    margin: 0.2rem 0;
}
.gd-box .gd p {
    font-size: 0.26rem;
    color: #4f3307;
    line-height: 0.4rem;
}
.gd-box .gd span {
    font-size: 0.28rem;
    color: #ce9628;
    position: absolute;
    right: 0;
    text-decoration: underline;
}
.gd-box .pl {
    width: 5.9rem;
    padding: 0.2rem;
    background-color: #fdf2de;
    margin-top: 0.5rem;
}
.gd-box .pl p {
    font-size: 0.24rem;
    color: #4f3307;
    line-height: 0.4rem;
}
.gd-box .pl p span {
    color: #775f41;
}
.gd-box .pl .pl-2 {
    text-indent: 0.5rem;
}

.bg4 .box-con {
    width: 6.9rem;
    position: relative;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.5rem;
}
.bg4-title {
    width: 100%;
    height: 0.7rem;
    background: url("../assets/images/tjwz-activity/tjwz-activity-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
}
</style>

<template>
<div class="box">
    <div class="bg1">
        <div class="box-con" v-if="dataType">
            <div class="bg1-title">
                <img :src="data.mainTitle" />
                <p>{{data.subTitle}}</p>
            </div>
            <h3>{{data.contentTitle}}</h3>
            <p class="bg1-txt">{{data.contentDesc}}</p>
        </div>
    </div>
    <div class="bg2">
        <div class="box-con">
            <div class="bg2-title"></div>
            <div class="bg2-con" v-if="dataType">
                <ul :class="toggleType ? 'show' : ''">
                    <li v-for="item in data.stocks"><a href="javascript:;" @click="stocks(item.stockCode,item.stockMarket,item.stockName)">{{item.stockName}}</a></li>
                </ul>
                <div @click="toggle" :class="toggleType ? 'toggle' : ''"></div>
            </div>
        </div>
    </div>
    <div class="bg3">
        <div class="box-con">
            <div class="bg3-title"></div>
            <div class="bg3-con" v-if="dataType">
                <div class="gd-box" v-for="item in data.tgViews">
                    <div class="tg">
                        <img :src="item.tgImage" />
                        <span>{{item.tgName}}</span>
                        <p @click="linksClick('http://itougu.jrj.com.cn/live/'+item.roomId),'room'+item.roomId">进入直播室</p>
                    </div>
                    <div class="gd">
                        <p>{{item.viewDesc}}</p>
                        <span @click="linksClick('http://itougu.jrj.com.cn/view/'+item.viewId+'.jspa','view'+item.viewId)">查看观点></span>
                    </div>
                    <div class="pl" v-if="plType">
                        <div class="pl-1" v-for="items in dataList[item.viewId]">
                            <p>{{items.senderName}}：<span v-html="items.content"></span></p>
                            <div class="pl-2" v-if="items.reply.length > 0">
                                <p v-for="replyData in items.reply">{{replyData.senderName}}回复了{{replyData.receiverName}}：<span v-html="replyData.content"></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bg4">
        <div class="box-con">
            <div class="bg4-title"></div>
            <topic-comment :appItemId="appItemId" />
            <p class="tips">发表内容限100字以内</p>
        </div>
    </div>
    <div class="bg5"></div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import topicComment from 'components/topic-comment'
import getQueryString from 'utils/getQueryString'

export default {
    data() {
        return {
            data: null,
            dataType: false,
            // appItemId: 8,
            appItemId: 28,
            toggleType: false,
            plType: false
        }
    },
    computed: mapState({
        commentSubmit: state => state.topicComment.commentSubmit,
        dataList: state => state.tjwzActivity.dataList
    }),
    components: {
        topicComment
    },
    methods: {
        stocks(stockCode, stockMarket, stockName) {
            if (window.app.name !== '{{appid}}') {
                window.jrj.jsCallNative('100', JSON.stringify({
                    stockCode: stockCode,
                    stockMarket: stockMarket,
                    stockName: stockName
                }))
            } else {
                window.location.href = 'jrjnews://tougu?t=web&url=' + window.location.href
                setTimeout(function() {
                    if (!document.webkitHidden) {
                        window.location.href = 'http://appcms.jrj.com.cn/download.jspa?channel=transfer2&tgqdcode=transfe3&channel=V4V6497Y9&tgqdcode=3Q2Y3H95'
                    }
                }, 1500);
            }
        },
        linksClick(linkUrl, index) {
            if (window.app.name !== '{{appid}}') {
                window.location.href = linkUrl
            } else {
                window.location.href = 'jrjnews://tougu?t=web&url=' + window.location.href
                setTimeout(function() {
                    if (!document.webkitHidden) {
                        window.location.href = 'http://appcms.jrj.com.cn/download.jspa?channel=transfer2&tgqdcode=transfe3&channel=V4V6497Y9&tgqdcode=3Q2Y3H95'
                    }
                }, 1500);
            }
        },
        toggle() {
            if (this.toggleType) {
                this.toggleType = false
            } else {
                this.toggleType = true
            }
        }
    },
    mounted() {

        var _this = this
        var id = getQueryString('id') || '3'
        $.ajax({
            url: 'http://itougu.jrj.com.cn/marketing/topics.jspa?id=' + id,
            dataType: 'jsonp',
            jsonpCallback: 'callback'
        }).then(data => {
            if (data.retCode === 1) {
                _this.data = data.data
                _this.dataType = true
            } else {
                alert(data.msg)
            }
        })
        this.$watch('dataType', dataType => {
            if (dataType) {
                document.title = _this.data.addressTitle
                _this.appItemId = _this.data.topicId
                let allPromises = []
                for (var i = 0; i < _this.data.tgViews.length; i++) {
                    var viewId = _this.data.tgViews[i].viewId
                    allPromises.push(_this.$store.dispatch('tjwzActivity/whereList', {
                        appItemId: viewId
                    }))
                }
                Promise.all(allPromises).then(() => {
                    _this.plType = true
                })
            }
        })
    }
}
</script>
