<style>
body {
    background-color: #000 !important;
    font-family: '微软雅黑';
}

input {
    outline: none;
}

.bg5 .box-con .swiper-container {
    top: 78px;
    overflow: visible;
}

.bg5 .swiper-button-next {
    right: -74px;
}

.bg5 .swiper-button-prev {
    left: -74px;
}
</style>
<style lang="scss" scoped>
@import '../assets/css/reset.css';
.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b1-1.jpg") center 0 no-repeat;
    height: 550px;
}
.bg2 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b2.jpg") center 0 no-repeat;
    height: 1032px;
}
.bg3 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b3-1.jpg") center 0 no-repeat;
    height: 1004px;
}
.bg4 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b4.jpg") center 0 no-repeat;
    height: 2003px;
}
.bg5 {
    background: url("../assets/images/anniversary-activity/anniversary-web-b5.jpg") center 0 no-repeat;
    height: 951px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.nav-fixed {
    width: 177px;
    height: 313px;
    position: fixed;
    top: 30%;
    right: 3%;
    background: url("../assets/images/anniversary-activity/anniversary-web-nav.png") center 0 no-repeat;
    z-index: 10;
    cursor: pointer;
}
.nav-fixed a {
    width: 177px;
    height: 62px;
    float: left;
}
.nav-fixed div {
    width: 177px;
    height: 62px;
    float: left;
}
.footer {
    width: 100%;
    height: 163px;
    position: fixed;
    bottom: 0;
    background: url("../assets/images/anniversary-activity/anniversary-web-footer.png") center bottom no-repeat;
    z-index: 10;
}
.fixBg {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #000;
    opacity: 0.8;
    z-index: 11;
}
.pop {
    width: 879px;
    height: 465px;
    background: url("../assets/images/anniversary-activity/anniversary-web-pop.png") 0 0 no-repeat;
    position: fixed;
    top: 50%;
    margin-top: -232.5px;
    left: 50%;
    margin-left: -439.5px;
    z-index: 12;
}
.pop img {
    width: 182px;
    height: 182px;
    position: absolute;
    top: 170px;
    left: 336px;
}
.pop .close {
    width: 200px;
    height: 52px;
    position: absolute;
    bottom: 41px;
    left: 327px;
}
.footer .box-con img {
    width: 162px;
    height: 162px;
    position: absolute;
    right: 0;
    top: 0;
}
.jzxgLink {
    width: 154px;
    height: 31px;
    position: absolute;
    top: 0;
    left: 199px;
}
.popClick {
    width: 332px;
    height: 63px;
    position: absolute;
    top: 677px;
    left: 414px;
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
        <div class="box-con">
            <a href="/act/jzxg-activity-new" class="jzxgLink" target="_blank"></a>
            <a href="javascript:;" class="popClick" @click="popClick"></a>
        </div>
    </div>
    <div class="bg5">
        <div class="box-con">
            <activity-slider :listData="listData" />
        </div>
    </div>
    <div class="nav-fixed">
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <div @click="popClick"></div>
    </div>
    <div class="footer">
        <div class="box-con">
            <img src="" />
        </div>
    </div>
    <div class='fixBg' v-if="popShow"></div>
    <div class="pop" v-if="popShow">
        <img :src="codeImg" />
        <a href="javascript:;" class="close" @click="close"></a>
    </div>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import activitySlider from 'components/activity-slider'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
  data () {
    $(function () {
      if (localStorage.QcodeNum && parseInt(localStorage.QcodeNum) < 30) {
        localStorage.QcodeNum = parseInt(localStorage.QcodeNum) + 1
      } else {
        localStorage.QcodeNum = '1'
      }
      $('.footer img').attr('src', 'http://i0.jrjimg.cn/zqt-red-1000/focus/Qcode/Qcode' + localStorage.QcodeNum + '.jpg')
      $('.nav-fixed a').click(function () {
        var index = $(this).index() + 2
        var pos = $('.bg' + index).offset().top
                // 实现平滑移动 1000代表时间ms
        $('html,body').stop().animate({
          scrollTop: pos
        }, 500)
      })
      window.dcsMultiTrack('DCS.dcsuri', 'anniversary_web', 'WT.ti', 'anniversary_web')
    })
    return {
      listData: {
        conWidth: '847px',
        conHeight: '363px',
        conPadding: '0',
        pagShow: false,
        arrowShow: true,
        loop: true,
        prev: {
          imgUrl: require('assets/images/anniversary-activity/anniversary-web-prev.png'),
          width: '68px',
          height: '68px',
          marginTop: '-34px'
        },
        next: {
          imgUrl: require('assets/images/anniversary-activity/anniversary-web-next.png'),
          width: '68px',
          height: '68px',
          marginTop: '-34px'
        },
        list: [{
          imgUrl: require('assets/images/anniversary-activity/anniversary-web-banner1.png'),
          link: ''
        },
        {
          imgUrl: require('assets/images/anniversary-activity/anniversary-web-banner2.png'),
          link: ''
        }
        ]
      },
      popShow: false,
      codeImg: ''
    }
  },
  computed: mapState({}),
  components: {
    activitySlider
  },
  methods: {
    popClick () {
      var codeSrc = $('.footer img').attr('src')
      this.codeImg = codeSrc
      this.popShow = true
    },
    close () {
      this.popShow = false
    }
  },
  mounted () {
    document.title = '辉煌金融界上市13周年庆'
  }
}
</script>
