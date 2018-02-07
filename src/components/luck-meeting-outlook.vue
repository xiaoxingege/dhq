<style scoped>
@import '../assets/css/reset.css';

#outlook {
  width: 1920px;
  height: 1440px;
  background: url('../assets/images/luck-meeting/bg.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
}

.pricename {
  width: 594px;
  height: 236px;
  background: url('../assets/images/luck-meeting/priceName.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  left: 50%;
  top: -145px;
  margin-left: -297px;
}
/*三等奖*/

.three {
  width: 1692px;
  height: 1042px;
  margin: 0 auto;
  background: url('../assets/images/luck-meeting/three.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 223px;
  position: relative;
}

.three .luckerList {
  width: 1560px;
  margin: 0 auto;
  padding-top: 100px;
}

.three .luckerList.batch5 {
  padding-top: 480px;
}

.three .luckerList.batch10 {
  width: 1560px;
  margin: 0 auto;
  padding-top: 360px;
}

.three .luckerList.batch20 {
  width: 1560px;
  margin: 0 auto;
  padding-top: 220px;
}

.three .luckerList.batch25 {
  width: 1560px;
  margin: 0 auto;
  padding-top: 100px;
}

.three .luckerList li {
  font-size: 110px;
  color: #e72b37;
  font-weight: bolder;
  width: 312px;
  height: 320px;
  float: left;
  background-size: 100% 100%;
  text-align: center;
  line-height: 320px;
  margin-top: -130px;
  z-index: 33;
  position: relative;
}

.disnone {
  display: none
}

.textLogo {
  width: 1090px;
  font-size: 42px;
  color: #ffc054;
  line-height: 60px;
  text-align: justify;
  text-align-last: justify;
  height: 60px;
  position: absolute;
  bottom: 80px;
  left: 50%;
  margin-left: -545px;
}

.textLogo:after {
  display: inline-block;
  content: '';
  overflow: hidden;
  width: 100%;
  height: 0;
}

.logoImg {
  width: 145px;
  height: 63px;
  display: block;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -74px;
}

.prize-text {
  display: block;
  width: 100%;
  height: 236px;
  line-height: 236px;
  text-align: center;
  font-size: 64px;
  color: white;
  overflow: hidden;
}
</style>

<template>
<div id="outlook">


  <div class="three">
    <div class="pricename">
      <span class="prize-text">{{prizeName}}</span>
    </div>
    <ul :class="'luckerList clearfix batch' + num">
      <li v-for="(item,index) in list">
        <p class="disnone">{{item}}</p>
      </li>
    </ul>
  </div>

  <p class="textLogo">2018年金融界年度颁奖盛典</p>
  <img src="../assets/images/luck-meeting/logo.png" alt="" class="logoImg">
</div>
</template>
<script>
import $ from 'jquery'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      listData: [],
      list: [],
      prizeName: '',
      num: 0
    }
  },
  computed: mapState({

  }),
  components: {
    // activitySlider
  },
  methods: {
    getList(i, callback) {
      clearTimeout(timer);
      var a = 0;
      var timer = setInterval(function() {
        a++;
        $('li').eq(i).css('background', 'url("http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/realApp/' + a + '.png") no-repeat center')
      }, 90)

      setTimeout(function() {
        $('li').eq(i).children('p').css('display', 'block')
        clearTimeout(timer);
      }, 1260)

    },
    demo() {
      return new Promise((resolve, reject) => {
        let i = 0;
        var self = this;
        var timeList = setInterval(function() {
          i++;
          self.getList(i - 1);
          self.list.push(self.listData[i - 1]);
          console.log(self.list)
          if (i > self.listData.length - 1) {
            clearTimeout(timeList)
            resolve()
          }
        }, 1200)
      })
    },
    reTime() {
      return fetch('http://itougu.jrj.com.cn/act/crud/lotteryData?order=-createdAt&limit=1', {
        method: 'get'
      }).then((res) => {
        return res.json()
      }).then((data) => {
        data = data[0]
        if (data) {
          let lotteryKeys = []
          try {
            lotteryKeys = JSON.parse(localStorage.getItem('lotteryKey') || '[]')
          } catch (e) {
            void e
          }
          if (lotteryKeys.indexOf(data.key) === -1) {
            this.prizeName = data.level
            lotteryKeys.push(data.key)
            localStorage.setItem('lotteryKey', JSON.stringify(lotteryKeys))
            return this.luckDraw(data);
          }
        }
        return Promise.resolve()
      }).then(() => {
        setTimeout(this.reTime.bind(this), 1000)
      }).catch(() => {
        setTimeout(this.reTime.bind(this), 1000)
      })
    },
    luckDraw(data) {
      this.list = []
      this.listData = data.lotteryData
      this.num = data.lotteryData.length
      return this.demo()
    }
  },
  mounted() {
    document.title = '年会抽奖前台显示'
    document.getElementById('outlook').style.height = window.innerHeight + 'px';
    this.reTime();
  }
}
</script>
