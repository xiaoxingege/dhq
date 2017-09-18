<style lang="scss" scoped>
@import '../assets/css/reset.css';

.ques-ask-box {
    width: 100%;
    position: relative;
}
.ques-ask-box textarea {
    width: 95%;
    padding: 0.2rem 2.5%;
    font-size: 0.3rem;
    color: #333;
    height: 3.3rem;
    resize: none;
    outline: none;
    float: left;
    border: none;
}
.ques-ask-box textarea::placeholder {
    color: #999;
}
.ques-text－num {
    font-size: 0.28rem;
    position: absolute;
    top: 5rem;
    right: 0.2rem;
    color: #999;
}
.ques-text－num span {
    color: #555;
}
.askTimes {
    height: 0.77rem;
    line-height: 0.77rem;
    font-size: 0.28rem;
    color: #999;
    width: 95%;
    padding: 0 2.5%;
    border-top: 1px #e6e6e6 solid;
    background-color: #fff;
    float: left;
}
.askTimes span {
    color: #ff4040;
}
.footer { font-size: 0.26rem; color: #bbb; text-align: center; margin: 0.5rem 0; width: 100%; float: left; }
</style>

<template>
<div class="ques-ask-box" v-if="show">
  <ques-nav :title="quesNavTitle" @navBak="navBak" :btnTxt="btnTxt" @navEvents="navEvents" :bakShow="bakShow" />
  <ques-search @searchVal="searchVal" :value="searchValue" />
  <textarea placeholder="请详细描述问题，可以获得更有针对性的解答" maxlength="200" v-model="text" @input="descInput" onchange="this.value=this.value.substring(0, 200)" onkeydown="this.value=this.value.substring(0, 200)" onkeyup="this.value=this.value.substring(0, 200)"></textarea>
  <div class="ques-text－num"><span>{{txtVal}}</span>/200</div>
  <p class="askTimes">今日您还剩余<span>{{askTimes}}</span>次提问机会</p>
  <p class="footer">- 本服务由金融界提供 -</p>
  <fix-bg v-if="fixBgShow" />
  <ques-license @licenseClose="licenseClose" v-if="quesLicenseShow" />
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import quesSearch from 'components/ques-search'
import fixBg from 'components/fix-bg'
import quesLicense from 'components/ques-license'
import quesNav from 'components/ques-nav'
import getQueryString from 'utils/getQueryString'

export default {
  data () {
    return {
      txtVal: '0',
      fixBgShow: false,
      quesLicenseShow: false,
      quesNavTitle: '问股',
      btnTxt: '提问',
      searchValue: '',
      userShow: false,
      bakShow: true,
      show: false,
      focusShow: false,
      quesBtnClickType: true
    }
  },
  computed: mapState({
    askTimes: state => {
      return state.quesAsk.askTimes
    },
    err: state => {
      return state.quesAsk.err
    },
    userId: state => state.user.ssoId,
    tmpQues () {
      return localStorage.text
    },
    focusResult: state => state.quesFocus.focusResult
  }),
  components: {
    quesSearch,
    fixBg,
    quesLicense,
    quesNav
  },
  methods: {
    descInput () {
      if (this.text) {
        var txtVal = this.text.length
        var _this = this
        if (txtVal > 300) {
          _this.text = (_this.text + '').substring(0, 300)
        }
        this.txtVal = this.text.length
      } else {
        this.txtVal = '0'
      }
    },
    licenseClose () {
      this.fixBgShow = false
      this.quesLicenseShow = false
    },
    navBak () {
    //   history.go(-2)
      history.back()
    },
    navEvents () {
      if (!this.focusShow) {
        alert('请在百度APP中使用')
        return
      }
      var searchValue = this.searchValue
      var textCont = searchValue + '' + this.text
      var passportId = window.basicUserInfo.userId
      if (!this.text) {
        alert('内容不可为空')
        return
      }

    //   if (this.userShow === false) {
    //     // var url = window.location.href
    //     if (searchValue) {
    //       localStorage.searchValue = searchValue
    //     }
    //     if (this.text) {
    //       localStorage.text = this.text
    //     }
      //
    //     return
    //   }
      if (this.quesBtnClickType === false) {
        alert('提交中')
        return
      }
      this.quesBtnClickType = false
      this.$store.dispatch('quesAsk/askto', {
        textCont: textCont,
        passportId: passportId
      })
      window.dcsMultiTrack('DCS.dcsuri', 'TG_Msite_Baidu_ask_click', 'WT.ti', 'TG_Msite_Baidu_ask_click')
      //   alert('submit')
    },
    searchVal (val) {
      this.searchValue = val
    }
  },
  mounted () {
    document.title = '问股'
    this.$store.dispatch('user/fetchFromBasicUserInfo')
    this.$watch('err', err => {
      this.show = true
      this.quesBtnClickType = true
      setTimeout(() => {
        alert(err.msg)
      })
    })
    this.$watch('userId', userId => {
      if (userId) {
        this.$store.dispatch('quesAsk/ask', {
          userId: userId
        })
        // if (this.tmpQues) {
        //   this.show = false
        //   var searchValue = localStorage.searchValue
        //   var textCont = searchValue + '' + localStorage.text
        //   this.$store.dispatch('quesAsk/askto', {
        //     textCont: textCont,
        //     passportId: userId
        //   })
        // } else {
        //   this.show = true
        // }
      } else {
        this.show = true
        if (getQueryString('code')) {
          this.$store.dispatch('quesDetail/authorize', {
            code: getQueryString('code'),
            redirectUri: 'http://itougu.jrj.com.cn/activity/app/ques-ask.jspa'
          })
        } else {
          window.location.href = 'https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=O8FVpeZ0w75ekNMvaWf5oBa63WSEfnIi&scope=snsapi_userinfo&redirect_uri=' + 'http://itougu.jrj.com.cn/activity/app/ques-ask.jspa'

        //   'https://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id=O8FVpeZ0w75ekNMvaWf5oBa63WSEfnIi&scope=snsapi_userinfo&redirect_uri=' + 'http://itougu.jrj.com.cn/activity/app/ques-ask.jspa'
        }
      }
    })
    this.$watch('askTimes', askTimes => {
      console.log(askTimes)
      this.userShow = true
    })
    window.dcsMultiTrack('DCS.dcsuri', 'TG_Msite_Baidu_ask', 'WT.ti', 'TG_Msite_Baidu_ask')
    this.$store.dispatch('quesFocus/jsSdk')
    var _this = this
    this.$watch('focusResult', focusResult => {
      window.cambrian.isBox({
        success: function (res) {
                  // res结构如下，result字段，在手百环境返回ture，否则返回false
                  // 如：{"result": true, "msg":"isBfalseox:ok", "status": 0}
          if (res.result) {
            _this.focusShow = true
          } else {
            _this.focusShow = false
          }
          _this.show = true
        }
      })
    })
  }
}
</script>
