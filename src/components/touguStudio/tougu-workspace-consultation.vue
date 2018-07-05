<style>
@import '../../assets/css/base.css';
* {
  outline: none;
}
.tougu-consultation {
  width: 96%;
  margin: 2px 2%;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.consultation-content {
  width: 70%;
  margin: 0px 1.7%;
  overflow-y: scroll;
  flex: 1;
}

.recipient {
  max-width: 80%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  float: left;
  margin-top: 24px;
}

.sender {
  max-width: 80%;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  float: right;
  margin-top: 24px;
}

.recipient-content {
  margin-left: 14px;
  width: 100%;
}

.sender-content {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-right: 14px;
}

.recipient-content img {
  width: 23px;
  height: 17px;
  float: left;
}

.sender-content img {
  width: 23px;
  height: 17px;
  margin-top: 6px;
}

.recipient-content p,
.sender-content p {
  padding: 21px 25px;
  border-radius: 20px;
  font-family: MicrosoftYaHei;
  line-height: 22px;
  font-size: 14px;
}

.recipient-content p {
  background: rgba(48, 53, 59, 1);
  color: #D3D9DD;
  margin-top: 7px;
  margin-left: 7px;
}

.sender-content p {
  background: rgba(178, 214, 255, 1);
  color: #525A66;
  margin-top: 7px;
  float: right;
  margin-right: -13px;
}

.sender-content p a {
  font-size: 14px !important;
  ;
}

.recipient-headimage img,
.sender-headimage img {
  width: 42px;
  height: 43px;
  border-radius: 50%;
}

.sender-headimage img {
  margin-right: 5px;
}

.usersend-content {
  width: 71.7%;
  height:99px;
  margin: 2px 0%;
  display: flex;
  flex-direction: row;
  position: relative;
}

.sendtocontent {
  width: 100%;
  height: 100%;
}

.input-text {
  width: 95%;
  padding: 10px 2.5%;
  overflow: auto;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  background: rgba(48, 53, 59, 1);
}

.usersend-btn {
  position: absolute;
  right: 2%;
  top: 60%;
  width: 90px;
  height: 24px;
  background: rgba(22, 116, 204, 1);
  border-radius: 4px;
  font-size: 14px;
  font-family: MicrosoftYaHei;
  color: rgba(255, 255, 255, 1);
  padding-top: 8px;
  cursor: pointer;
}

.usersend-btn img {
  width: 17px;
  height: 14px;
  margin: 0px 5px 0px 18px;
}

.divisionTime {
  width: 15%;
  height: 10px;
  font-size: 12px;
  font-family: MicrosoftYaHei;
  color: rgba(175, 182, 189, 1);
  margin: 0px auto;
  margin-top: 15px;
}
</style>

<template>
<div class="tougu-consultation">
  <div class="consultation-content" ref="cBOX" id="consultation-content">
    <div v-for="item in messageList">
      <div class="divisionTime">{{dateFormat(new Date(item.ctime), 'yyyy-mm-dd hh:nn')}}</div>
      <div class="recipient" v-show="item.senderId !== userId">
        <div class="recipient-headimage">
          <img :src="conversationList.userList[0].headImage" />
        </div>
        <div class="recipient-content">
          <img src="../../assets/images/touguStudio/QP.png" class="QP" />
          <p v-html="item.content"></p>
        </div>
      </div>
      <div style="clear:both"></div>
      <div class="sender" v-show="item.senderId === userId">
        <div class="sender-content">
          <p v-html="item.content"></p>
          <img src="../../assets/images/touguStudio/QP2.png" />
        </div>
        <div class="sender-headimage">
          <img src="../../assets/images/touguStudio/AI-headimage.png" />
        </div>
      </div>
      <div style="clear:both"></div>
    </div>
  </div>
   <div class="usersend-content">
      <div id="inputArea" contenteditable="true" class="input-text"></div>
    <div class="usersend-btn" @click="sendMessage()"><img src="../../assets/images/touguStudio/send-icon.png">发送</div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      maxId: 0,
      topHeight:0
    }
  },
  methods: {
    sendMessage() {
      var messageContent = document.getElementById('inputArea').innerHTML;
      if (messageContent !== '') {
        this.$store.dispatch('touguSpaceConsultation/sendSpaceConsultation', {
          message: messageContent,
          adviserId: this.studioList.userid
        });
      }
      document.getElementById('inputArea').innerHTML = '';
    },
    Message(){
      this.$store.dispatch('touguSpaceConsultation/getSpaceConsultation', {
        maxId: this.maxId,
        adviserId: this.studioList.userid
      })
    },
    PullMessage(){
      this.$store.dispatch('touguSpaceConsultation/getPullSpaceConsultation', {
        maxId: this.messageList[this.messageList.length - 1].id,
        adviserId: this.studioList.userid
      })
    },
    leadingZero: function(num, size) {
      var s = '000000000' + num;
      return s.substr(s.length - size);
    },
    dateFormat: function(date, formatString) {
      let vm = this;
      if (!date.valueOf()) {
        return '';
      }
      var d = date
      return formatString.replace(/(yyyy|mm|dd|hh|nn|ss)/gi,
        function($1) {
          switch ($1.toLowerCase()) {
            case 'yyyy':
              return d.getFullYear();
            case 'mm':
              return vm.leadingZero((d.getMonth() + 1), 2);
            case 'dd':
              return vm.leadingZero(d.getDate(), 2);
            case 'hh':
              return vm.leadingZero(d.getHours(), 2);
            case 'nn':
              return vm.leadingZero(d.getMinutes(), 2);
            case 'ss':
              return vm.leadingZero(d.getSeconds(), 2);
          }
        }
      );
    },
     scrollHistory() {
      var _this=this;
      _this.$nextTick(() => {
       var Cbox = _this.$refs.cBOX;
       Cbox.scrollTop = _this.topHeight;
      });
    }
  },
  computed: {
    ...mapState({
      conversationList: state => {
        return state.touguSpaceConsultation.conversation
      },
      messageList: state => {
        return state.touguSpaceConsultation.messageList
      },
      studioList: state => {
        return state.touguSpaceNav.roomData
      },
      userId: state => state.auth.passportId
    })
  },
  components: {},
  mounted() {
    var _this=this;
    _this.Message();
    setInterval(() => {
      _this.PullMessage();
    }, 1000);
    var Cbox = _this.$refs.cBOX;
    Cbox.onscroll = () => {
      var scrollTop = Cbox.scrollTop;
      if (scrollTop === 0) {
        // 异步加载历史数据 
        var OHeight=Cbox.scrollHeight;
        this.$store.dispatch('touguSpaceConsultation/getSpaceConsultationold', {
          minId: _this.messageList[0].id,
          adviserId: _this.studioList.userid
        }).then(() => {
            var NHeight=Cbox.scrollHeight;
            _this.topHeight=NHeight-OHeight;
            _this.scrollHistory();
        });
      }
    };

  }
}
</script>
