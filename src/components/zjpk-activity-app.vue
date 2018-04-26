<style>
body {
  background-color: #000 !important;
  font-family: '微软雅黑';
}

textarea {
  resize: none;
}

input,
button {
  outline: none;
}

.list-box {
  height: 6.24rem;
  overflow-y: scroll;
}

.bg4 .box {
  background: none;
}

.bg4 .comment-box h5 span {
  color: #fff57c;
}

.bg4 .comment-box h5 strong {
  color: #5d3014;
}

.bg4 .comment-box p {
  color: #c0a967;
}

.bg4 .comment-list {
  margin: 0.11rem 2.5%;
}

.bg4 .comment-box div {
  background-color: #543f2f;
}

.bg4 .send-box {
  margin-top: 0.1rem;
}

.bg4 .send-box textarea {
  width: 76%;
}

.bg4 .send-box button {
  background-color: #f2dd7b;
  font-size: 0.24rem;
  color: #3e200d;
  float: right;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
@import '../assets/css/swiper.min.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/zjpk-activity/zjpk-app-bg1.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 7.17rem;
}
.bg2 {
    background: url("../assets/images/zjpk-activity/zjpk-app-bg2.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 11.79rem;
}
.bg3 {
    width: 100%;
    background-color: #000;
    float: left;
}
.bg4 {
    background: url("../assets/images/zjpk-activity/zjpk-app-bg4.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 8.91rem;
    float: left;
    width: 100%;
    margin-top: 0.39rem;
}
.bg5 {
    background: url("../assets/images/zjpk-activity/zjpk-app-bg5.jpg") center 0 no-repeat;
    background-size: 100% 100%;
    height: 4.29rem;
    float: left;
    width: 100%;
}
.box-con {
    height: 100%;
    position: relative;
}
.bg1 a {
    width: 2.14rem;
    height: 0.32rem;
    position: absolute;
    bottom: 0.23rem;
    right: 0.5rem;
}
.bg2 h3 {
    width: 98%;
    padding-left: 2%;
    text-align: center;
    font-size: 0.4rem;
    color: #fff493;
    float: left;
    margin-top: 0.5rem;
}

.device {
    width: 95%;
    position: absolute;
    height: 5rem;
    top: 1.2rem;
    overflow-x: hidden;
    padding-left: 5%;
}
.swiper-container {
    width: 100%;
    height: 5rem;
    color: #fff;
    text-align: center;
    overflow: inherit;
}
.swiper-slide {
    position: relative;
    width: 3.07rem;
    height: 100%;
    opacity: 0.4;
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -ms-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -ms-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
}
.swiper-slide-active {
    top: 0;
    opacity: 1;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
}
.swiper-slide div {
    width: 100%;
    height: 4.35rem;
    background: url("../assets/images/zjpk-activity/zjpk-app-slide-bg.png") center 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0.5rem;
    z-index: 9;
}
.swiper-slide img {
    width: 99%;
    position: absolute;
    top: 0.5rem;
    left: 0.5%;
    z-index: 8;
    height: 3rem;
}
.swiper-slide i {
    width: 0.81rem;
    height: 0.8rem;
    background: url("../assets/images/zjpk-activity/zjpk-web-slide-hg.png") center 0 no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    right: -0.44rem;
    z-index: 10;
}
.swiper-slide p {
    width: 2.2rem;
    height: 0.51rem;
    position: absolute;
    top: 3.72rem;
    left: 0.45rem;
    text-align: center;
    line-height: 0.51rem;
    font-size: 0.28rem;
    color: #58341a;
    overflow: hidden;
    z-index: 10;
}
.bg2 .tginfo {
    width: 7.1rem;
    height: 1.2rem;
    position: absolute;
    top: 6.29rem;
    left: 0.2rem;
}
.tginfo strong {
    font-size: 0.3rem;
    color: #3e200d;
    width: 70%;
    float: left;
    padding: 0.15rem;
}
.tginfo strong span {
    font-size: 0.26rem;
    padding-right: 0.2rem;
    font-weight: normal;
}
.tginfo p {
    font-size: 0.24rem;
    color: #c90606;
    width: 70%;
    float: left;
    padding-left: 0.15rem;
}
.tginfo a {
    width: 2rem;
    height: 0.5rem;
    position: absolute;
    right: 0.21rem;
    top: 0.35rem;
}
.bg2 .ggzj {
    width: 6.7rem;
    position: absolute;
    top: 7.89rem;
    left: 0.4rem;
}
.ggzj div {
    width: 6.48rem;
    height: 0.52rem;
    background: url("../assets/images/zjpk-activity/zjpk-app-title-bg1.png") center 0 no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-left: 0.11rem;
}
.ggzj table {
    width: 6.7rem;
    height: 2.71rem;
    border-collapse: collapse;
    color: #3e200d;
    font-size: 0.26rem;
    float: left;
    margin-top: 0.32rem;
}
.ggzj th {
    background-color: #efd96b;
    font-weight: normal;
    border: 0.01rem #b3944a solid;
}
.ggzj td {
    background-color: #fffcf5;
    text-align: center;
    border: 0.01rem #b3944a solid;
}
.bg3 .slcz {
    width: 7.08rem;
    border: 0.01rem #3e200d solid;
    background-color: #261a11;
    border-top: none;
    float: left;
    margin-left: 0.2rem;
}
.bg3 .slcz-box {
    width: 6.7rem;
    height: auto;
    float: left;
    margin: 0.36rem 0 0 0.2rem;
}
.bg3 .slcz-title {
    width: 6.58rem;
    height: 0.52rem;
    background: url("../assets/images/zjpk-activity/zjpk-app-title-bg2.png") center 0 no-repeat;
    background-size: 100% 100%;
    float: left;
    margin-left: 0.07rem;
}
.bg3 .box-con,
.bg4 .box-con,
.bg5 .box-con {
    float: left;
}
.slcz-img {
    float: left;
    margin-top: 0.3rem;
    position: relative;
}
.slcz-img img {
    width: 6.69rem;
    height: 3.87rem;
    float: left;
    margin-bottom: 0.3rem;
}
.slcz-img a {
    width: 2.4rem;
    height: 0.6rem;
    border-radius: 0.15rem;
    color: #fff;
    font-size: 0.24rem;
    line-height: 0.6rem;
    text-align: center;
    background-color: #d39720;
    float: left;
    margin-left: 2.16rem;
}
.slcz-img h5 {
    width: 100%;
    float: left;
    font-size: 0.3rem;
    color: #fff57c;
    margin-top: 0.2rem;
}
.slcz-img p {
    width: 100%;
    float: left;
    font-size: 0.22rem;
    color: #c0a967;
    line-height: 0.36rem;
}
.slcz-con {
    float: left;
    margin-top: 0.3rem;
}
.slcz-con .slcz-tginfo {
    width: 6.7rem;
    height: 1.2rem;
    background-color: #efd96b;
    float: left;
}
.slcz-tginfo img {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    float: left;
    margin: 0.2rem 0 0 0.1rem;
}
.slcz-tginfo div {
    width: 4rem;
    height: 1.2rem;
    float: left;
    margin-left: 0.1rem;
}
.slcz-tginfo div strong {
    font-size: 0.3rem;
    color: #3e200d;
    width: 100%;
    float: left;
    padding: 0.15rem;
}
.slcz-tginfo div strong span {
    font-size: 0.26rem;
    padding-right: 0.2rem;
    font-weight: normal;
}
.slcz-tginfo div p {
    font-size: 0.24rem;
    color: #c90606;
    width: 100%;
    float: left;
    padding-left: 0.15rem;
}
.slcz-tginfo a {
    width: 1.5rem;
    height: 0.5rem;
    background-color: #d39720;
    float: left;
    margin-top: 0.35rem;
    border-radius: 0.15rem;
    font-size: 0.24rem;
    color: #fff;
    text-align: center;
    line-height: 0.5rem;
}
.slcz-con h5 {
    width: 100%;
    float: left;
    font-size: 0.3rem;
    color: #fff57c;
    margin-top: 0.2rem;
}
.slcz-con p {
    width: 100%;
    float: left;
    font-size: 0.22rem;
    color: #c0a967;
    line-height: 0.36rem;
}
.tips {
    width: 100%;
    float: left;
    text-align: center;
    padding: 0.2rem 0 0.1rem;
    font-size: 0.22rem;
    color: #5d3014;
}
.bg4-box {
    width: 7.09rem;
    float: left;
    margin: 0.8rem 0 0 0.21rem;
}
.bg5 a {
    width: 5rem;
    height: 0.33rem;
    position: absolute;
    top: 1.37rem;
    left: 1.26rem;
}
</style>

<template>
<div class="box">
  <div class="bg1">
    <div class="box-con">
      <a :href="data.submitUrl" v-if="dataType"></a>
    </div>
  </div>
  <div class="bg2">
    <div class="box-con" v-if="dataType">
      <h3>{{data.pkNO}}（{{data.pkTime}}）</h3>
      <div class="device">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item,index in dataList.slice(0,2)">
              <div></div>
              <img :src="item.headImage" />
              <i v-if="index===0"></i>
              <p>{{index+1+'.'+item.userName}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="tginfo" v-if="plType">
        <strong>NO.{{data.tgInfo[clickIndex].sort}}  <span>{{dataList[clickIndex].userName}}</span><span>{{dataList[clickIndex].typeDesc}}</span></strong>
        <p>{{data.tgInfo[clickIndex].desc}}</p>
        <a :href="'http://itougu.jrj.com.cn/live/'+data.tgInfo[clickIndex].roomId"></a>
      </div>
      <div class="ggzj">
        <div></div>
        <table v-if="plType">
          <tr>
            <th>内参盈亏</th>
            <th>建议个股数</th>
            <th>盈亏比例</th>
          </tr>
          <tr v-for="item in data.tgInfo[clickIndex].profit">
            <td>{{item.name}}</td>
            <td>{{item.suggestNum}}</td>
            <td>{{item.suggestRatio}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <div class="bg3">
    <div class="box-con">
      <div class="slcz">
        <div class="slcz-box" v-if="plType && dataType">
          <div class="slcz-title"></div>
          <div class="slcz-img">
            <img :src="item" v-for="item in data.tgInfo[clickIndex].pic" />
            <a :href="'http://itougu.jrj.com.cn/account/adviser/'+data.tgInfo[clickIndex].userId+'/'">点击了解ＴA的服务</a>
            <div v-for="item in data.tgInfo[clickIndex].summary">
              <h5>{{item.title}}</h5>
              <p>{{item.content}}</p>
            </div>

          </div>
          <div class="slcz-con" v-for="item in data.tgInfo.slice(2,5)">
            <div class="slcz-tginfo" v-if="plType">
              <img :src="dataList[item.sort-1].headImage" />
              <div>
                <strong>NO.{{item.sort}}  <span>{{dataList[item.sort-1].userName}}</span><span>{{dataList[item.sort-1].typeDesc}}</span></strong>
                <p>{{item.desc}}</p>
              </div>
              <a :href="'http://itougu.jrj.com.cn/live/'+item.roomId">在线交流</a>
            </div>
            <div v-for="items in item.summary">
              <h5>{{items.title}}</h5>
              <p>{{items.content}}</p>
            </div>
          </div>
          <p class="tips">*风险提示：历史战绩不代表未来！</p>
        </div>
      </div>
    </div>
  </div>
  <div class="bg4">
    <div class="box-con">
      <div class="bg4-box" v-if="dataType">
        <topic-comment :appItemId="appItemId" />
      </div>
    </div>
  </div>
  <div class="bg5">
    <div class="box-con">
      <a href="http://itougu.jrj.com.cn/view/102765.jspa"></a>
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
import Swiper from '../assets/plugins/activity-slider/swiper.min.js'
window.Swiper = Swiper
import getQueryString from 'utils/getQueryString'

export default {
  data() {
    return {
      data: null,
      dataType: false,
      appItemId: 29,
      plType: false,
      tgInfo: null,
      clickIndex: 0
      // appItemId: 25
    }
  },
  computed: mapState({
    commentSubmit: state => state.topicComment.commentSubmit,
    dataList: state => state.zjpkActivity.dataList
  }),
  components: {
    topicComment
  },
  methods: {},
  mounted() {

    var _this = this
    var id = getQueryString('id') || '4'
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
        _this.appItemId = _this.data.topicId
        document.title = _this.data.shareInfo.title
        window.InitWeChatShare({
          shareTitle: window.document.title,
          shareLink: window.location.href,
          shareDesc: _this.data.shareInfo.desc,
          shareImg: _this.data.shareInfo.pic,
          callback: function(wx) {

          }
        })

        let allPromises = []
        for (var i = 0; i < _this.data.tgInfo.length; i++) {
          var userId = _this.data.tgInfo[i].userId
          var sort = _this.data.tgInfo[i].sort
          allPromises.push(_this.$store.dispatch('zjpkActivity/whereList', {
            userId: userId,
            sort: sort
          }))
        }
        Promise.all(allPromises).then(() => {
          _this.plType = true
          new Swiper('.swiper-container', {
            slidesPerView: 2,
            paginationClickable: true,
            spaceBetween: 30,
            slideToClickedSlide: true,
            loop: true,
            initialSlide: 0,
            onlyExternal: true,
            onClick: function(swiper) {
              _this.clickIndex = swiper.realIndex
            }
          });
        })
      }
    })
    this.$watch('commentSubmit', commentSubmit => {
      $('html,body').scrollTop($('.bg4').offset().top)
    })
  }
}
</script>
