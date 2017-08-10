<style>
@import '../assets/css/reset.css';
.in {
  width: 1000px;
  margin: 0 auto;
}

.item {
  background: url(../assets/images/neicanms/web_01.jpg) no-repeat center top;
  height: 941px;
}

.item1 {
  background-image: url(../assets/images/neicanms/web_01.jpg);
}

.item2 {
  background-image: url(../assets/images/neicanms/web_02.jpg);
  height: 758px;
}

.item3 {
  background-image: url(../assets/images/neicanms/web_03.jpg);
  height: 699px;
  position: relative;
}

.item4 {
  background-image: url(../assets/images/neicanms/web_04.jpg);
  height: 830px;
}

.item5 {
  background-image: url(../assets/images/neicanms/web_05.jpg);
  height: 579px;
}

.item6 {
  background-image: url(../assets/images/neicanms/web_06.jpg);
  height: 831px;
}

.item1 .in {
  padding-top: 770px;
}

.item2 .in {
  padding-top: 85px;
  text-align: center;
  width: 1010px;
}

.kuaibao {
  color: #782501;
  font-size: 30px;
  padding-left: 200px;
}

.total01 {
  color: #f79e20;
}

.timebox {
  width: 1020px;
}

.timebox li {
  float: left;
  width: 203px;
}

.timebox a {
  display: block;
  height: 188px;
  background: rgba(0, 0, 0, .5);
}

.timebox a:nth-child(2) {
  height: 97px;
}

.timebox li:nth-child(2) {
  padding-top: 33px;
}

.timebox li:nth-child(3) {
  padding-top: 67px;
}

.timebox li:nth-child(4) {
  padding-top: 33px;
}

.timebox span {
  display: block;
  height: 77px;
  background: url(../assets/images/neicanms/webbtn.png) no-repeat;
  cursor: pointer;
}

.timebox .open {
  background-position: 0 0;
}

.timebox .gray {
  background-position: 0 -167px;
}

.timebox .time {
  background-position: 0 -83px;
  line-height: 20px;
padding-top: 11px;
height: 66px;
color: #fff;
}

.item3 a {
  position: absolute;
  left: 50%;
  top: 233px;
  width: 216px;
  height: 57px;
  margin-left: -416px;
}

.item3 span {
  position: absolute;
  left: 50%;
  top: 400px;
  margin-left: 32px;
  text-align: center;
  width: 210px;
  color: #fdf06e;
  font-size: 19px;
}

.item3 b {
  position: absolute;
  top: 380px;
}

.navbar {
  position: fixed;
  width: 170px;
  height: 213px;
  background: url(../assets/images/neicanms/weblay03.png) no-repeat;
  top: 20px;
  right: 20px;
  padding-top: 200px;
}

.navbar a {
  display: block;
  height: 48px;
}

.navbar a:nth-child(1) {
  height: 78px;
}


/*弹层*/

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .6;
  filter: alpha(opacity=60);
  top: 0;
  left: 0;
  z-index: 20;
}

.layer {
  width: 578px;
  height: 212px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -106px;
  margin-left: -289px;
  z-index: 21;
  animation: haha .6s cubic-bezier(1, -0.49, 0, 1.5);
  background: url(../assets/images/neicanms/weblay01.png);
  background-size: 100% 100%;
}
.layer_guoqi{
  background-image:url(../assets/images/neicanms/weblay02.png);
}
@keyframes haha {
  from {
    transform: scale(6);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.closebtn {
  position: absolute;
  width: 60px;
  height: 60px;
  cursor: pointer;
  right: 0;
  top: 0;
}

.item4 li {
  float: left;
  width: 50%;
  margin-bottom: 23px;
}

.item4 a {
  width: 38%;
  height: 253px;
  background: rgba(0, 0, 0, .5);
  float: left;
}

.item4 a:nth-child(2) {
  width: 57%;
  float: right;
}

.item6 .in {
  padding-top: 280px;
}

.item6 li {
  float: left;
  width: 25%;
  margin-bottom: 23px;
}

.item6 a {
  display: block;
  height: 260px;
  background: rgba(0, 0, 0, .5);
}

.item6 a:nth-child(2) {
  height: 100px;
}
</style>

<template>
<div class="nicanms">
  <div class="item item1">
    <div class="in">
      <div class="kuaibao">
        <neicanKuaibao/>
      </div>
    </div>
  </div>
  <div class="item item2" id="one">
    <div class="in">
      <div class="total01">
        已经有<span>100</span>人参与秒杀
      </div>
      <div class="timebox">
        <ul class="clearfix">
          <!-- <li><span class="open"></span></li>
          <li><span class="gray"></span></li>
          <li><span class="time"></span></li>
          <li><span class="time"></span></li>
          <li><span class="time"></span></li> -->
          <li v-for="(item,index) in urlbox.url01">
            <a :href="item.touxiang" target="_blank"></a>
            <a :href="item.neican" target="_blank"></a>
            <span :class="item.classtr" v-html="item.timestr" :dataindex="index" @click="miaosha($event)"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="item item3" id="two">
    <a href="javascript:;"></a>
    <b id="three"></b>
    <span>已有1000人购买</span>
  </div>
  <div class="item item4">
    <div class="in">
      <ul>
        <li v-for="item in urlbox.url02">
          <a :href="item.touxiang" target="_blank"></a>
          <a :href="item.neican" target="_blank"></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="item item5"></div>
  <div class="item item6" id="four">
    <div class="in">
      <ul class="clearfix">
        <li v-for="item in urlbox.url03">
          <a :href="item.touxiang" target="_blank"></a>
          <a :href="item.neican" target="_blank"></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar">
    <a href="#one"></a>
    <a href="#two"></a>
    <a href="#three"></a>
    <a href="#four"></a>
  </div>
  <div class="mask" v-if="layerczshow===true || layerguoqishow===true"></div>
  <!--抽中-->
  <div class="layer layer_cz" v-if="layerczshow===true">
    <i class="closebtn" @click="closelayer"></i>
  </div>
  <div class="layer layer_guoqi" v-if="layerguoqishow ===true ">
    <i class="closebtn" @click="closelayer"></i>
  </div>
</div>
</template>

<script>
import neicanKuaibao from 'components/neican-kuaibao'

export default {
  data () {
    return {
      opentime: '2017-08-10 15:50:36',
      layerczshow: false,
      layerguoqishow: false,
      urlbox: {
        url01: [{
          touxiang: 'http://touxing.com.cn',
          neican: 'http://neican.com.cn',
          classtr: '',
          timestr: '',
          guoqi: ''
        },
        {
          touxiang: 'http://touxing2.com.cn',
          neican: 'http://neican3.com.cn',
          classtr: '',
          timestr: '',
          guoqi: ''
        },
        {
          touxiang: 'http://tou3333xin4g.com.cn',
          neican: 'http://mei3can.com.cn',
          classtr: '',
          timestr: '',
          guoqi: ''
        },
        {
          touxiang: 'http://touxin4guxing.com.cn',
          neican: 'http://m4eican.com.cn',
          classtr: '',
          timestr: '',
          guoqi: ''
        },
        {
          touxiang: 'http://to5uxing.com.cn',
          neican: 'http://mei6can.com.cn',
          classtr: '',
          timestr: '',
          guoqi: ''
        }
        ],
        url02: [
          {
            touxiang: 'http://touxing.com.cn',
            neican: 'http://neican.com.cn'
          },
          {
            touxiang: 'http://touxing2.com.cn',
            neican: 'http://neican3.com.cn'
          },
          {
            touxiang: 'http://tou3333xin4g.com.cn',
            neican: 'http://mei3can.com.cn'
          },
          {
            touxiang: 'http://touxin4guxing.com.cn',
            neican: 'http://m4eican.com.cn'
          },
          {
            touxiang: 'http://to5uxing.com.cn',
            neican: 'http://mei6can.com.cn'
          },
          {
            touxiang: 'http://touxing.com.cn',
            neican: 'http://neican.com.cn'
          },
          {
            touxiang: 'http://touxing2.com.cn',
            neican: 'http://neican3.com.cn'
          },
          {
            touxiang: 'http://tou3333xin4g.com.cn',
            neican: 'http://mei3can.com.cn'
          },
          {
            touxiang: 'http://touxin4guxing.com.cn',
            neican: 'http://m4eican.com.cn'
          },
          {
            touxiang: 'http://to5uxing.com.cn',
            neican: 'http://mei6can.com.cn'
          }
        ],
        url03: [
          {
            touxiang: 'http://touxing.com.cn',
            neican: 'http://neican.com.cn'
          },
          {
            touxiang: 'http://touxing2.com.cn',
            neican: 'http://neican3.com.cn'
          },
          {
            touxiang: 'http://tou3333xin4g.com.cn',
            neican: 'http://mei3can.com.cn'
          },
          {
            touxiang: 'http://touxin4guxing.com.cn',
            neican: 'http://m4eican.com.cn'
          }
        ]
      }
    }
  },
  components: {
    neicanKuaibao
  },
  mounted () {
    document.title = '内参秒杀'
    this.timebtn()
    setInterval(this.timebtn, 1000)
  },
  methods: {
    timebtn () {
      var now = new Date()
      console.log(now)
      var year = this.opentime.split('-')[0]
      var month = this.opentime.split('-')[1]
      var day = this.opentime.split('-')[2].split(' ')[0]
      var hour = this.opentime.split(' ')[1].split(':')[0]
      var endDate = new Date(year, month - 1, day, hour, 0, 0)

      this.urlbox.url01.forEach(function (item, index) {
        var leftTime = endDate.getTime() - now.getTime()
        leftTime = leftTime + 86400000 * index
        var leftsecond = parseInt(leftTime / 1000)
        var day1 = Math.floor(leftsecond / (60 * 60 * 24))
        var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
        var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
        var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)
        console.log(minute)
        if (leftTime <= 0 && item.guoqi === true) {
          item.classtr = 'gray'
          item.timestr = ''
        } else if (leftTime <= 0) {
          item.classtr = 'open'
          item.timestr = ''
        } else {
          item.classtr = 'time'
          item.timestr = '倒计时<br />' + day1 + '天' + hour + '小时' + minute + '分' + second + '秒'
        }
      })
    },
    miaosha (v) {
      console.log(v.currentTarget.getAttribute('dataindex'))
      if (v.currentTarget.className === 'gray') {
        this.layerguoqishow = true
      }
    },
    closelayer () {
      this.layerguoqishow = false
      this.layerczshow = false
    }
  }
}
</script>
