<style lang="scss" scoped>
@import '../assets/css/reset.css';

.box {
    width: 100%;
}
.bg1 {
    background: url("../assets/images/pay-video-activity/bg1.jpg") center 0 no-repeat;
    height: 682px;
}
.bg2 {
    background: url("../assets/images/pay-video-activity/bg2.jpg") center 0 no-repeat;
    height: 602px;
}
.bg3 {
    background: url("../assets/images/pay-video-activity/bg3.jpg") center 0 no-repeat;
    height: 554px;
}
.bg4 {
    background: url("../assets/images/pay-video-activity/bg4.jpg") center 0 no-repeat;
    height: 468px;
}
.bg5 {
    background: url("../assets/images/pay-video-activity/bg5.jpg") center 0 no-repeat;
    height: 882px;
}
.bg6 {
    background: url("../assets/images/pay-video-activity/bg6.jpg") center 0 no-repeat;
    height: 964px;
}
.bg7 {
    background: url("../assets/images/pay-video-activity/bg7.jpg") center 0 no-repeat;
    height: 801px;
}
.bg8 {
    background: url("../assets/images/pay-video-activity/bg8.jpg") center 0 no-repeat;
    height: 590px;
}
.bg9 {
    background: url("../assets/images/pay-video-activity/bg9.jpg") center 0 no-repeat;
    height: 735px;
}
.bg10 {
    background: url("../assets/images/pay-video-activity/bg10.jpg") center 0 no-repeat;
    height: 502px;
}
.bg11 {
    background: url("../assets/images/pay-video-activity/bg11.jpg") center 0 no-repeat;
    height: 951px;
}
.box-con {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    height: 100%;
}
.bg2 .box-con a {
    width: 244px;
    height: 88px;
    background: url("../assets/images/pay-video-activity/btn.png") no-repeat;
    position: absolute;
    border: none;
    cursor: pointer;
    bottom: 100px;
    right: 36px;
    outline: none;
}
.bg2 .box-con a:hover {
    background: url("../assets/images/pay-video-activity/btn-h.png") no-repeat;
}
.slider {
    margin-top: 30px;
    float: left;
    width: 100%;
}
.di {
    width: 100%;
    height: 203px;
    background: url("../assets/images/pay-video-activity/di.png") center 0 no-repeat;
    position: fixed;
    bottom: 0;
    z-index: 1;
}
.di .box-con a {
    width: 244px;
    height: 88px;
    background: url("../assets/images/pay-video-activity/btn.png") no-repeat;
    position: absolute;
    border: none;
    cursor: pointer;
    bottom: 30px;
    right: 0;
    outline: none;
}
.di .box-con a:hover {
    background: url("../assets/images/pay-video-activity/btn-h.png") no-repeat;
}
</style>

<template>
<div class="box">
    <div class="bg1">

    </div>
    <div class="bg2">
        <div class="box-con">
            <!-- <button type="button" name="button"></button> -->
            <a href="javascript:;"></a>
        </div>
    </div>
    <div class="bg3">

    </div>
    <div class="bg4">

    </div>
    <div class="bg5">

    </div>
    <div class="bg6">

    </div>
    <div class="bg7">

    </div>
    <div class="bg8">
        <div class="box-con">
            <div class="slider">
                <activity-slider :listData="listData" />
            </div>
        </div>
    </div>
    <div class="bg9">

    </div>
    <div class="bg10">

    </div>
    <div class="bg11">

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

export default {
  data () {
    return {
      listData: {
        conWidth: '825px',
        conHeight: '450px',
        conPadding: '90px',
        pagShow: false,
        arrowShow: true,
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
        // closeChapterDialog () {
        //   this.addChapterShow = false
        //   this.fixBgShow = false
        // }
  },
  mounted () {
    document.title = '付费视频专题'
  }
}
</script>
