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












/*一等奖*/

/* .one {
  width: 1692px;
  height: 872px;
  margin: 0 auto;
  background: url('../assets/images/luck-meeting/one.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 289px;
  position: relative;
}

.one .luckerList {
  width: 1560px;
  margin: 0 auto;
  padding-top: 160px;
}

.one .luckerList li {
  font-size: 110px;
  color: #e72b37;
  font-weight: bolder;
  width: 380px;
  height: 474px;
  float: left;
  background-size: 100% 100%;
  text-align: center;
  line-height: 474px;
  margin-top: -220px;
  z-index: 33;
  position: relative;
}

.three .luckerList li p {
  position: relative;
  z-index: 35;
} */












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
  padding-top: 320px;
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












/*四等奖*/

/* .four {
  width: 1692px;
  height: 872px;
  margin: 0 auto;
  background: url('../assets/images/luck-meeting/four.png') no-repeat;
  background-size: 100% 100%;
  margin-top: 223px;
  position: relative;
}

.four .luckerList {
  width: 1560px;
  margin: 0 auto;
  padding-top: 100px;
}

.four .luckerList li {
  font-size: 110px;
  color: #e72b37;
  font-weight: bolder;
  width: 342px;
  height: 320px;
  float: left;
  background-size: 100% 100%;
  text-align: center;
  line-height: 320px;
  margin-top: -125px;
  z-index: 33;
  position: relative;
  margin-left: -15px;
  margin-right: -15px;
} */

.disnone {
  display: none
}

.textLogo {
  width: 1090px;
  font-size: 42px;
  color: #ffc054;
  line-height: 60px;
  margin: 0 auto;
  text-align: justify;
  text-align-last: justify;
  height: 60px;
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
  margin: 0 auto;
  display: block;
}
.prize-text{
  display: block;
  width: 100%;
  height: 236px;
  line-height: 236px;
  text-align: center;
  font-size: 72px;
  color: white;
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
import md5 from 'js-md5';
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
      return fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType?limit=40', {
        method: 'get'
      }).then((res) => {
        return res.json()
      }).then((data) => {
        for (var i = 0; i < data.length; i++) {
          if (data[i].drawLuck === true) {
            this.prizeName = data[i].level
            return this.luckDraw(data[i]);
          }
        }
        return Promise.resolve()
      }).then(() => {
        setTimeout(this.reTime.bind(this), 3000)
      }).catch(() => {
        setTimeout(this.reTime.bind(this), 3000)
      })
    },
    draw(data) {
      return fetch('http://itougu.jrj.com.cn/actm/lottery?num=' + data.num + '&max=' + data.max + '&level=' + data.level + '&lmax=' + data.lmax + '', {
        method: 'GET'
      }).then((res) => {
        return res.json()
      })

      // return new Promise((resolve, reject) => {
      //   let nums = this.testRun(data.num)
      //   resolve({
      //     nums
      //   })
      // })
    },
    luckDraw(data) {
      this.list = []
      return this.draw(data).then((da) => {
        if (!da.retcode) {
          this.listData = da.nums
          this.num = da.nums.length
          return this.demo();
        }
      }).then(() => {
        return this.drawTrue(data)
      });
    },
    drawTrue(item) {
      let params = {
        'drawLuck': false
      };
      var t = new Date().getTime();
      const privateKey = 'hello2018';
      const signature = function(params, t) {
        let keys = Object.keys(params)
        keys.sort()
        let str = keys.map(key => `${key}=${encodeURIComponent(params[key])}`).join('&')
        str += t + privateKey
        return md5(str)
      };

      fetch('http://itougu.jrj.com.cn/act/crud/luckMeetingType/' + item._id + '?t=' + t + '&sign=' + signature(params, t) + '', {
        method: 'PUT',
        mode: 'cors',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(params)
      }).catch(() => {
        return this.drawTrue(item)
      })
    },
    testRun(n) {
      var rnd = [];
      for (var i = 0; i < n; i++) {
        rnd.push(Math.floor(Math.random() * 100));
      }
      return rnd;
    }
  },
  mounted() {
    document.title = '年会抽奖前台显示'
    document.getElementById('outlook').style.height = window.innerHeight + 'px';
    // console.log(this.testRun(60))
    this.reTime();
    // this.demo();
  }
}
</script>
