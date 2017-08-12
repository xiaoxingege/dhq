<style>
@import '../assets/css/reset.css';


.item {
  background: url(../assets/images/neicanms/h5_01.jpg)  no-repeat center top;
  background-size:100% auto;
  height: 7.49rem;
}

.item1 {
  background-image: url(../assets/images/neicanms/h5_01.jpg);
}

.item2 {
  background-image: url(../assets/images/neicanms/h5_02.jpg);
    height: 14.28rem;
}

.item3 {
  background-image: url(../assets/images/neicanms/h5_03.jpg);
  height: 9.69rem;
}

.item4 {
  background-image: url(../assets/images/neicanms/h5_04.jpg);
  height: 12.27rem
}

.item5 {
  background-image: url(../assets/images/neicanms/h5_05.jpg);
  height: 8.36rem;
}

.item6 {
  background-image: url(../assets/images/neicanms/h5_06.jpg);
  height: 10.91rem;
}

.item1 .in {
  padding-top: 6.9rem;
}

.item2 .in {
  padding-top: 1.88rem;
  text-align: center;
}

.kuaibao {
  color: #782501;
  font-size: .25rem;
  padding-left: 2.5rem;
}

.total01 {
  color: #f79e20;
  font-size: .3rem;
}
.timebox ul{ width:7.08rem;margin:0 auto; position: relative;}

.timebox li {
  float: left;
  width: 32%;
}

.timebox a {
  display: block;
  height: 2.21rem;
}

.timebox a:nth-child(2) {
  height: 1.2rem;
}

.timebox li:nth-child(2) {
  padding-top: 1.6rem;
  margin-left:.13rem;
}

.timebox li:nth-child(3) {
  padding-top: -0.5rem;
  float: right;
}

.timebox li:nth-child(4) {
  position: absolute;
    top: 4.55rem;
    left: 0;
}

.timebox li:nth-child(5) {
  position: absolute;
    top: 4.55rem;
    right: 0;
}

.timebox span {
  display: block;
  width:2.24rem;
  margin:0 auto;
  height: .9rem;
  background: url(../assets/images/neicanms/webbtn.png) no-repeat;
  background-size:100% auto;
  cursor: pointer;
}

.timebox .open {
  background-position: 0 0;
}

.timebox .gray {
  background-position: 0 -2rem;
}

.timebox .time {
  background-position: 0 -0.96rem;
line-height: .3rem;
font-size: .25rem;
color: #fff;
padding-top: .15rem;
height: .8rem;
}

.item3 a {display: block;
width: 3rem;
height: 1rem;
z-index: 2;
right: 0;
    margin-left: 4.1rem;
}

.item3 span {display: block;
    text-align: center;
    width: 3.7rem;
    color: #fdf06e;
    font-size: .27rem;margin-top: 1rem;
    margin-left: 3.3rem;line-height: .5rem
}

.item3 b {
  width:.1rem;
  height: .1rem;
  display: block;margin-top: 3rem;
}

.navbar {
  position: fixed;
  width: 1.72rem;
  height: 2.87rem;
  background: url(../assets/images/neicanms/h5lay03.png) no-repeat;
  top: .60rem;
  right: 0;
  background-size:100% auto;
}

.navbar span {
  display: block;
  height: .7rem;
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
  width: 5.78rem;
  height: 2.12rem;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-top: -1.06rem;
  margin-left: -2.89rem;
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
  width: .6rem;
  height: .6rem;
  cursor: pointer;
  right: 0;
  top: 0;
}

.item4 li {
  float: left;
  width: 50%;
  margin-bottom: .15rem;
}

.item4 a {
  height: 1.95rem;
  display: block;
}

.item4 a:nth-child(2) {
  height: 2rem
}

.item6 .in {
  padding-top: 3.5rem;
}

.item6 li {
  float: left;
  width:50%;
}

.item6 a {
  display: block;
  height: 1.84rem;
}

.item6 a:nth-child(2) {
  height: .8rem;
}

.item3 .in{padding-top: 1.3rem;}
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
        已经有<span>{{tougjinum01}}</span>人参与秒杀
      </div>
      <div class="timebox">
        <ul class="clearfix">
          <li v-for="(item,index) in urlbox.url01">
            <a :href="item.touxiang" @click="tongji01"></a>
            <a :href="item.neican" @click="tongji01"></a>
            <span :class="item.classtr" v-html="item.timestr" :tgId="item.tgId" :dataindex="index" @click="miaosha($event)"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="item item3" id="two">
    <div class="in">
      <a href="http://itougu.jrj.com.cn/tips/10655.jspa"></a>
      <b id="three"></b>
      <span>已有{{tougjinum02}}人参与购买</span>
    </div>
  </div>
  <div class="item item4">
    <div class="in">
      <ul>
        <li v-for="item in urlbox.url02">
          <a :href="item.touxiang"></a>
          <a :href="item.neican" @click="tongji02"></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="item item5"></div>
  <div class="item item6" id="four">
    <div class="in">
      <ul class="clearfix">
        <li v-for="item in urlbox.url03">
          <a :href="item.touxiang"></a>
          <a :href="item.neican" @click="tongji02"></a>
        </li>
      </ul>
    </div>
  </div>
  <div class="navbar">
    <!-- <a href="#one"></a>
    <a href="#two"></a>
    <a href="#three"></a>
    <a href="#four"></a> -->
    <span @click="goscroll($event)" dataid="one"></span>
    <span @click="goscroll($event)" dataid="two"></span>
    <span @click="goscroll($event)" dataid="three"></span>
    <span @click="goscroll($event)" dataid="four"></span>
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
import 'whatwg-fetch'
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
      opentime: '2017-08-14 10:00:00',
      layerczshow: false,
      layerguoqishow: false,
      tougjinum01: 0,
      tougjinum02: 0,
      urlbox: {
        url01: [{
          touxiang: 'http://itougu.jrj.com.cn/live/26',
          neican: 'http://itougu.jrj.com.cn/tips/9801.jspa',
          classtr: '',
          timestr: '',
          tgId: '130718010073409548'
        },
        {
          touxiang: 'http://itougu.jrj.com.cn/live/611',
          neican: 'http://itougu.jrj.com.cn/tips/10447.jspa',
          classtr: '',
          timestr: '',
          tgId: '141120010079383950'
        },
        {
          touxiang: 'http://itougu.jrj.com.cn/live/117',
          neican: 'http://itougu.jrj.com.cn/tips/9847.jspa',
          classtr: '',
          timestr: '',
          tgId: '120217010043425631'
        },
        {
          touxiang: 'http://itougu.jrj.com.cn/live/70',
          neican: 'http://itougu.jrj.com.cn/tips/10150.jspa',
          classtr: '',
          timestr: '',
          tgId: '091124010076736396'
        },
        {
          touxiang: 'http://itougu.jrj.com.cn/live/1238',
          neican: 'http://itougu.jrj.com.cn/tips/10565.jspa',
          classtr: '',
          timestr: '',
          tgId: '141218010033191581'
        }
        ],
        url02: [
          {
            touxiang: 'http://itougu.jrj.com.cn/live/62',
            neican: 'http://itougu.jrj.com.cn/tips/10661.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/23',
            neican: 'http://itougu.jrj.com.cn/tips/10673.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/129',
            neican: 'http://itougu.jrj.com.cn/tips/10659.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/239',
            neican: 'http://itougu.jrj.com.cn/tips/10675.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/1072',
            neican: 'http://itougu.jrj.com.cn/tips/10656.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/125',
            neican: 'http://itougu.jrj.com.cn/tips/10671.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/669',
            neican: 'http://itougu.jrj.com.cn/tips/10667.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/2561',
            neican: 'http://itougu.jrj.com.cn/tips/10662.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/43',
            neican: 'http://itougu.jrj.com.cn/tips/10664.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/144',
            neican: 'http://itougu.jrj.com.cn/tips/10672.jspa'
          }
        ],
        url03: [
          {
            touxiang: 'http://itougu.jrj.com.cn/live/1198',
            neican: 'http://itougu.jrj.com.cn/tips/10668.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/741',
            neican: 'http://itougu.jrj.com.cn/tips/10674.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/194',
            neican: 'http://itougu.jrj.com.cn/tips/10663.jspa'
          },
          {
            touxiang: 'http://itougu.jrj.com.cn/live/68',
            neican: 'http://itougu.jrj.com.cn/tips/10658.jspa'
          }
        ]
      }
    }
  },
  components: {
    neicanKuaibao
  },
  computed: mapState({
    ssoId: state => state.user.ssoId
    // ssoId: state => '141122010023949343'
  }),
  mounted () {
    this.$store.dispatch('user/fetch')
    document.title = '内参秒杀'
    this.timebtn()
    console.log(this.ssoId)
    setInterval(this.timebtn, 1000)
    this.tongji01()
    this.tongji02()
  },
  methods: {
    timebtn () {
      var now = new Date()
      var year = this.opentime.split('-')[0]
      var month = this.opentime.split('-')[1]
      var day = this.opentime.split('-')[2].split(' ')[0]
      var hour = this.opentime.split(' ')[1].split(':')[0]
      var min = this.opentime.split(' ')[1].split(':')[1]
      var se = this.opentime.split(' ')[1].split(':')[2]
      var endDate = new Date(year, month - 1, day, hour, min, se)

      this.urlbox.url01.forEach(function (item, index) {
        var leftTime = endDate.getTime() - now.getTime()

        leftTime = leftTime + 86400000 * index
        var leftsecond = parseInt(leftTime / 1000)
        var day1 = Math.floor(leftsecond / (60 * 60 * 24))
        var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600)
        var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60)
        var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60)

        if (leftTime < 0) {
          item.classtr = 'gray'
          item.timestr = ''
        }
        if (leftTime < 0 && leftTime > -50400000) {
          item.classtr = 'open'
          item.timestr = ''
        }
        if (leftTime > 0) {
          item.classtr = 'time'
          item.timestr = '倒计时:' + day1 + '天' + hour + '小时<br />' + minute + '分' + second + '秒'
        }
      })
    },
    miaosha (v) {
      this.tongji01()
      if (v.currentTarget.className === 'gray') {
        this.layerguoqishow = true
      } else if (v.currentTarget.className === 'open') {
        if ((this.ssoId + '').length < 18) {
          window.jrj.jsCallNative('108', JSON.stringify({
            returnUrl: encodeURI(window.location.href)
          }))
        } else {
          var tgId = v.currentTarget.getAttribute('tgid')
          fetch('http://itougu.jrj.com.cn/marketing/secondKillTips.jspa?adviserId=' + tgId + '&userId=' + this.ssoId).then((res) => {
            return res.json()
          }).then(v => {
            if (v.retCode === 0) {
              this.layerczshow = true
            } else {
              this.layerguoqishow = true
            }
          })
        }
      }
    },
    closelayer () {
      this.layerguoqishow = false
      this.layerczshow = false
    },
    tongji01 () {
      fetch('http://itougu.jrj.com.cn/marketing/secondKillAndViewTipsNum.jspa').then((res) => {
        return res.json()
      }).then(v => {
        this.tougjinum01 = v.num
      })
    },
    tongji02 () {
      fetch('http://itougu.jrj.com.cn/marketing/secondKillBuyTipsNum.jspa').then((res) => {
        return res.json()
      }).then(v => {
        this.tougjinum02 = v.num
      })
    },
    goscroll (v) {
      var id = v.currentTarget.getAttribute('dataid')
      var div = document.getElementById(id)
      document.body.scrollTop = div.offsetTop
    }

  }
}
</script>
