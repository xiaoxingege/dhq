<style lang="scss">
@import '../assets/css/reset.css';
button,
input,
textarea {
    outline: none;
}
.box {
    width: 100%;
    background-color: #fff;
}
.comment-list {
    width: 95%;
    float: left;
    margin: 0.15rem 2.5%;
}
.comment-list img {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    float: left;
}
.comment-box {
    float: right;
    width: 90%;
}
.comment-box h5 {
    width: 100%;
    position: relative;
    float: left;
    height: 0.44rem;
    line-height: 0.44rem;
    font-weight: normal;
}
.comment-box h5 span {
    font-size: 0.3rem;
    color: #2158f4;
    position: absolute;
    left: 0;
}
.comment-box h5 strong {
    font-size: 0.24rem;
    color: #ccc;
    position: absolute;
    right: 0;
}
.comment-box p {
    width: 100%;
    font-size: 0.28rem;
    color: #081355;
}
.send-box {
    width: 100%;
    height: 0.9rem;
    float: left;
    border-top: 0.01rem #0f2281 solid;
    position: relative;
    z-index: 9;
}
.send-box textarea {
    width: 78%;
    height: 0.7rem;
    background-color: #fff;
    padding: 0.1rem 1%;
    float: left;
    border: none;
    font-size: 0.24rem;
    color: #000;
    -webkit-appearance: none;
    border-radius: 0;
}
.send-box button {
    width: 20%;
    float: left;
    background-color: #655af4;
    text-align: center;
    height: 0.9rem;
    line-height: 0.9rem;
    color: #fff;
    font-size: 0.32rem;
    border: none;
}
.comment-box div {
    width: 95%;
    padding: 0.1rem 0 0.1rem 5%;
    background-color: #f7f3fa;
}
</style>

<template>
<div class="box" v-if="dataType">
  <div class="list-box">
    <div class="comment-list" v-for="item in dataList">
      <img :src="item.senderHeadImage" />
      <div class="comment-box">
        <h5 @click="reply(item.senderId,item.id,item.senderName)">
          <span>{{item.senderName}}:</span>
          <strong>{{moment(parseInt(item.ctime),'MM月DD日 HH:mm')}}</strong>
        </h5>
        <p v-html="item.content.replace(/#.*#/g, '')"></p>
        <div v-for="items in item.reply">
          <h5>
            <span>{{items.senderName}}:</span>
            <strong>{{moment(parseInt(items.ctime),'MM月DD日 HH:mm')}}</strong>
          </h5>
          <p v-html="'回复'+items.receiverName+':'+items.content.replace(/#.*#/g, '')"></p>
        </div>
      </div>
    </div>
  </div>
  <div class="send-box">
    <!-- <input type="text" name="" value="" ref="sendContent" :placeholder="placeholder" /> -->
    <textarea v-model="sendContent" :placeholder="placeholder"></textarea >
        <button type="button" name="button" @click="sendSubmit">发表评论</button>
    </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import moment from 'moment'

export default {
  data() {
    return {
      placeholder: '',
      commentType: false,
      receiverId: '',
      receiverName: '',
      replyRootId: '',
      accessToken: '',
      passportId: '',
      devId: '',
      sendContent: ''
    }
  },
  props: ['appItemId', 'frm'],
  computed: mapState({
    data: state => state.topicComment.data,
    dataList: state => state.topicComment.dataList,
    dataType: state => state.topicComment.dataType,
    loginStatus: state => state.user.loginStatus,
    ssoId: state => state.user.ssoId,
    err: state => state.topicComment.err,
    commentSubmit: state => state.topicComment.commentSubmit
  }),
  methods: {
    moment(time, format) {
      return moment(time).format(format)
    },
    sendSubmit() {
      var _this = this
      var sendContent = this.sendContent
      if (sendContent === '') {
        alert('评论不可为空')
        return
      } else if (sendContent.length > 100) {
        alert('超出字数限制')
        return
      }
      if (window.app && window.app.name && window.app.name !== '{{appid}}') {
        if (this.loginStatus === 'yes') {
          if (this.commentType) {
            this.$store.dispatch('topicComment/addComment', {
              appItemId: _this.data.appItemId,
              bizType: '8',
              senderId: _this.ssoId,
              appId: _this.data.appId,
              content: sendContent,
              // frm: 'web',
              frm: 'app',
              receiverId: _this.receiverId,
              receiverName: _this.receiverName,
              replyRootId: _this.replyRootId,
              replyToId: _this.replyRootId,
              accessToken: _this.accessToken,
              passportId: _this.passportId,
              devId: _this.devId
            })
          } else {
            this.$store.dispatch('topicComment/addComment', {
              appItemId: _this.data.appItemId,
              bizType: '8',
              senderId: _this.ssoId,
              appId: _this.data.appId,
              content: sendContent,
              frm: 'app',
              accessToken: _this.accessToken,
              passportId: _this.passportId,
              devId: _this.devId
              // frm: 'web'
            })
          }
        } else {
          window.jrj.jsCallNative('108', JSON.stringify({
            returnUrl: encodeURI(window.location.href)
          }))
        }
      } else {


        if (this.frm === 'web') {
          if (this.loginStatus === 'yes') {
            if (this.commentType) {
              this.$store.dispatch('topicComment/addComment', {
                appItemId: _this.data.appItemId,
                bizType: '8',
                senderId: _this.ssoId,
                appId: _this.data.appId,
                content: sendContent,
                frm: 'web',
                // frm: 'app',
                receiverId: _this.receiverId,
                receiverName: _this.receiverName,
                replyRootId: _this.replyRootId,
                replyToId: _this.replyRootId,
                accessToken: _this.accessToken,
                passportId: _this.passportId,
                devId: _this.devId
              })
            } else {
              this.$store.dispatch('topicComment/addComment', {
                appItemId: _this.data.appItemId,
                bizType: '8',
                senderId: _this.ssoId,
                appId: _this.data.appId,
                content: sendContent,
                // frm: 'app',
                frm: 'web',
                accessToken: _this.accessToken,
                passportId: _this.passportId,
                devId: _this.devId
              })
            }
          } else {
            location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + encodeURIComponent(location.href)
          }
        } else {
          window.location.href = 'jrjnews://tougu?t=web&url=' + window.location.href
          setTimeout(function() {
            if (!document.webkitHidden) {
              window.location.href = 'http://appcms.jrj.com.cn/download.jspa?channel=transfer2&tgqdcode=transfe3&channel=V4V6497Y9&tgqdcode=3Q2Y3H95'
            }
          }, 1500);
        }
      }

    },
    reply(senderId, replyRootId, senderName) {
      this.placeholder = '回复' + senderName + '：'
      this.commentType = true
      this.receiverId = senderId
      this.receiverName = senderName
      this.replyRootId = replyRootId
    }
  },
  mounted() {
    var _this = this
    this.$store.dispatch('topicComment/whereList', {
      // appItemId: 8
      appItemId: _this.appItemId
    })
    let fnName = 'cb' + Date.now()
    window[fnName] = function(data) {
      delete window[fnName]
      if (typeof data === 'string') {
        data = JSON.parse(data)
      }
      _this.accessToken = data.data.accessToken
      _this.passportId = data.data.passportId
      _this.devId = data.data.devId
    }

    function timedCount() {
      if (!window.jrj) {
        setTimeout(timedCount, 500)
      } else {
        window.jrj.jsCallNative('130', JSON.stringify({
          method: 'get',
          url: 'http://itougu.jrj.com.cn/act/getClientInfo',
          callback: fnName
        }))
      }
    }
    this.$store.dispatch('user/checkLogin').then(() => {
      if (this.loginStatus === 'yes') {
        timedCount()
      }
    })
    // .catch(err => {
    //     alert(err)
    // })
    this.$watch('err', err => {
      alert(err.msg)
    })
    this.$watch('commentSubmit', commentSubmit => {
      _this.sendContent = ''
      $('.list-box').scrollTop(0)
    })
  }
}
</script>
