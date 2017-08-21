<style lang="scss" scoped>
@import '../assets/css/reset.css';

.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/pay-video-activity/m-bg1.jpg") no-repeat;
    background-size: 100% 100%;
    height: 5.72rem;
}
.bg2 {
    background: url("../assets/images/pay-video-activity/m-bg2.jpg") no-repeat;
    background-size: 100% 100%;
    height: 4.88rem;
}
.bg3 {
    background: url("../assets/images/pay-video-activity/m-bg3.jpg") no-repeat;
    background-size: 100% 100%;
    height: 6.91rem;
}
.bg4 {
    background: url("../assets/images/pay-video-activity/m-bg4.jpg") no-repeat;
    background-size: 100% 100%;
    height: 5.53rem;
}
.bg5 {
    background: url("../assets/images/pay-video-activity/m-bg5.jpg") no-repeat;
    background-size: 100% 100%;
    height: 8.16rem;
}
.bg6 {
    background: url("../assets/images/pay-video-activity/m-bg6.jpg") no-repeat;
    background-size: 100% 100%;
    height: 9.97rem;
}
.bg7 {
    background: url("../assets/images/pay-video-activity/m-bg7.jpg") no-repeat;
    background-size: 100% 100%;
    height: 15.1rem;
}
.bg8 {
    background: url("../assets/images/pay-video-activity/m-bg8.jpg") no-repeat;
    background-size: 100% 100%;
    height: 12.4rem;
}
.bg9 {
    background: url("../assets/images/pay-video-activity/m-bg9.jpg") no-repeat;
    background-size: 100% 100%;
    height: 12.4rem;
}
.bg10 {
    background: url("../assets/images/pay-video-activity/m-bg10.jpg") no-repeat;
    background-size: 100% 100%;
    height: 3.2rem;
}
.box-con {
    width: 100%;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg2 .box-con a {
    width: 2.44rem;
    height: 0.88rem;
    background: url("../assets/images/pay-video-activity/btn.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    border: none;
    cursor: pointer;
    bottom: 0.4rem;
    right: 0.2rem;
    outline: none;
}
.slider {
    margin-top: 11.2rem;
    float: left;
    width: 100%;
}
.di {
    width: 100%;
    height: 2rem;
    background: url("../assets/images/pay-video-activity/m-di.png") no-repeat;
    background-size: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1;
}
.di .box-con a {
    width: 1.81rem;
    height: 0.53rem;
    float: left;
    margin: 0.96rem 0 0 4.39rem;
}
</style>

<template>
<div class="box">
    <div class="bg1">
    </div>
    <div class="bg2" id="d1">
        <div class="box-con">
            <a href="javascript:;"></a>
        </div>
    </div>
    <div class="bg3">

    </div>
    <div class="bg4">

    </div>
    <div class="bg5" id="d2">

    </div>
    <div class="bg6" id="d3">

    </div>
    <div class="bg7">
        <div class="box-con">
            <div class="slider">
                <activity-slider :listData="listData" />
            </div>
        </div>
    </div>
    <div class="bg8">

    </div>
    <div class="bg9" id="d4">

    </div>
    <div class="bg10">

    </div>
    <div class="di">
        <div class="box-con">
            <a href="javascript:;"></a>
        </div>
    </div>
</div>
</template>
<script>
import activitySlider from 'components/activity-slider'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery

export default {
  data () {
    return {
      listData: {
        conWidth: '7rem',
        conHeight: '3.78rem',
        conPadding: '0',
        pagShow: true,
        arrowShow: false,
        loop: true,
        prev: {
          imgUrl: require('assets/images/pay-video-activity/prev.png'),
          width: '64px',
          height: '64px',
          marginTop: '-32px'
        },
        next: {
          imgUrl: require('assets/images/pay-video-activity/next.png'),
          width: '64px',
          height: '64px',
          marginTop: '-32px'
        },
        list: [{
          imgUrl: require('assets/images/pay-video-activity/slider-img1.jpg'),
          link: ''
        },
        {
          imgUrl: require('assets/images/pay-video-activity/slider-img2.jpg'),
          link: ''
        },
        {
          imgUrl: require('assets/images/pay-video-activity/slider-img3.jpg'),
          link: ''
        },
        {
          imgUrl: require('assets/images/pay-video-activity/slider-img4.jpg'),
          link: ''
        }
        ]
      }
    }
  },
  components: {
    activitySlider
  },
  methods: {
  },
  mounted () {
    document.title = '付费视频专题'
    setTimeout(function () {
      var pos = $('#d2').offset().top
      $('html,body').stop().animate({
        scrollTop: pos + 250
      }, 500)
    }, 3000)
  }
}
</script>
