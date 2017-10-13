<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg6 .box-con .swiper-container {
    top: 102px;
    left: 245px;
    margin: 0;
    overflow: visible;
}

.bg6 .box-con .swiper-pagination {
    width: 233px;
    height: 319px;
    left: -250px;
}

.bg6 .box-con .swiper-pagination span {
    width: 233px;
    height: 69px;
    float: left;
    margin: 0 0 14px;
    background: none;
}

.pop-top h3 {
    font-size: 36px;
    color: #f8ce9a;
}

.fz22 {
    font-size: 22px;
}

.pop-top p {
    color: #e3a75d;
    line-height: 40px;
}

.mt20 {
    margin-top: 20px;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/jzxg-activity/jzxg-web-new-bg1.jpg") center 0 no-repeat;
    height: 474px;
}
.bg2 {
    background: url("../assets/images/jzxg-activity/jzxg-web-new-bg2.jpg") center 0 no-repeat;
    height: 603px;
}
.bg3 {
    background: url("../assets/images/jzxg-activity/jzxg-web-new-bg3.jpg") center 0 no-repeat;
    height: 649px;
}
.bg4 {
    background: url("../assets/images/jzxg-activity/jzxg-web-new-bg4.jpg") center 0 no-repeat;
    height: 542px;
}
.bg5 {
    background: url("../assets/images/jzxg-activity/jzxg-web-new-bg5.jpg") center 0 no-repeat;
    height: 591px;
}
.bg6 {
    background: url("../assets/images/jzxg-activity/jzxg-web-new-bg6.jpg") center 0 no-repeat;
    height: 706px;
}
// .bg7 {
//     background: url("../assets/images/jzxg-activity/jzxg-web-new-bg7.jpg") center 0 no-repeat;
//     height: 401px;
// }
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.nav-fixed {
    width: 192px;
    height: 200px;
    position: fixed;
    top: 50%;
    right: 5%;
    margin-top: -100px;
    background: url("../assets/images/jzxg-activity/jzxg-web-nav.png") center 0 no-repeat;
    z-index: 10;
    cursor: pointer;
}
.footer {
    width: 100%;
    height: 210px;
    position: fixed;
    bottom: 0;
    margin-top: -100px;
    background: url("../assets/images/jzxg-activity/jzxg-web-new-footer-1.png") center 0 no-repeat;
    z-index: 10;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2">
    </div>
    <div class="bg3">
    </div>
    <div class="bg4">
    </div>
    <div class="bg5">
    </div>
    <div class="bg6">
        <div class="box-con">
            <activity-slider :listData="listData" />
        </div>
    </div>
    <!-- <div class="bg7">
    </div> -->
    <!-- <div class="nav-fixed" @click="navFixed">
    </div> -->
    <div class="footer" @click="submit">

    </div>
    <jzxg-activity-pop v-if="popShow" @close="popClose">
        <div v-html="popHtml">
        </div>
    </jzxg-activity-pop>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import activitySlider from 'components/activity-slider'
import jzxgActivityPop from 'components/jzxg-activity-pop'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
  data () {
    return {
      listData: {
        conWidth: '755px',
        conHeight: '320px',
        conPadding: '0',
        pagShow: true,
        arrowShow: false,
        paginationClickable: true,
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        list: [{
          imgUrl: 'http://i0.jrjimg.cn/assets/images/zytd-1.jpg',
          link: ''
        },
        {
          imgUrl: 'http://i0.jrjimg.cn/assets/images/lxsf.jpg',
          link: ''
        },
        {
          imgUrl: 'http://i0.jrjimg.cn/assets/images/dwcl.jpg',
          link: ''
        },
        {
          imgUrl: 'http://i0.jrjimg.cn/assets/images/sjtm.jpg',
          link: ''
        }
        ]
      },
      popHtml: '',
      popShow: false
    }
  },
  computed: mapState({
    loginStatus: state => state.user.loginStatus,
    riskAssessed: state => state.user.riskAssessed,
    bindingMobile: state => state.user.bindingMobile,
    bindingIdentity: state => state.user.bindingIdentity
  }),
  components: {
    activitySlider,
    jzxgActivityPop
  },
  methods: {
    navFixed () {
      var pos = $('.bg6').offset().top
            // 实现平滑移动 1000代表时间ms
      $('html,body').stop().animate({
        scrollTop: pos
      }, 500)
    },
    popClose () {
      this.popShow = false
      this.popHtml = ''
      if (!this.bindingMobile) {
        location.href = 'http://i.jrj.com.cn/home/userSetting/phoneIdentity?ReturnURL=' + encodeURIComponent(location.href)
      } else if (!this.bindingIdentity) {
        location.href = 'http://i.jrj.com.cn/home/userSetting/nameIdentity?ReturnURL=' + encodeURIComponent(location.href)
      } else if (!this.riskAssessed) {
        location.href = 'http://i.jrj.com.cn/home/userSetting/fxcp?ReturnURL=' + encodeURIComponent('http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=100050008&type=4')
      } else {
        location.href = 'http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=100050008&type=4'
      }
    },
    submit () {
      if (this.loginStatus === 'no') {
        location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + encodeURIComponent(location.href)
      } else if (this.loginStatus === 'unknown') {
        alert('正在加载用户信息，请稍候')
      } else {
        if (!this.bindingMobile || !this.bindingIdentity) {
          this.popHtml = '<h3>温馨提示</h3><p class="fz22 mt20">为响应证监会监管要求，保障投资者合法权益，请您先<br /><strong>补充真实信息后再进行购买，</strong></p><p class="fz22">如需帮助，请咨询400-166-1188</p>'
          this.popShow = true
        } else if (!this.riskAssessed) {
          this.popHtml = '<h3>温馨提示</h3><p class="fz22 mt20">响应证监会监管要求，投资者购买产品需填写风险承受<br />能力评测。<strong>请您根据下方提示完成风险承受能力测评，</strong></p><p class="fz22">如需帮助，请咨询400-166-1188</p>'
          this.popShow = true
        } else {
          location.href = 'http://itougu.jrj.com.cn/activity/web/groupOrderWeb.jspa#/?productSubId=100050008&type=4'
        }
      }
    }
  },
  mounted () {
    document.title = '极智选股-金融界'
    this.$store.dispatch('user/checkLogin')
    this.$watch('loginStatus', () => {
      this.$store.dispatch('user/checkBindingInfo', {})
    })
  }
}
</script>
