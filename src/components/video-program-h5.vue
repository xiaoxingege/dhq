<style type="text/css" scoped>
@import '../assets/css/reset.css';
  .part1{width: 100%;height:6.31rem;background:url('../assets/images/video-program/part_01.jpg') center 0 no-repeat;background-size: 100% 100%;}
  .part2{width: 100%;height:5.32rem;background:url('../assets/images/video-program/part_02.jpg') center 0 no-repeat;background-size: 100% 100%;}
  .part2 p{font-size: 0.26rem;height: 0.74rem;line-height: 0.74rem;color: #fff;text-align: center;}
  video{width: 6.5rem;height: 3.2rem;margin: 0 auto;display: block;margin-top: 0.43rem;}
  .part3{width: 100%;height:8.3rem;background:url('../assets/images/video-program/part_03.jpg') center 0 no-repeat;background-size: 100% 100%;position: relative;}
  .part3>p{font-size: 0.36rem;color: #feeb51;text-align: center;line-height: 1.1rem;}
  .part3>div{width: 7.17rem;height: 8.3rem;background:url('../assets/images/video-program/main-app.png') center 0 no-repeat;background-size: 100% 100%;margin: 0 auto;overflow: hidden;}
  .part3>div>img{width: 6.8rem;height: 7rem;margin: 0 auto;margin-top: 0.5rem;}
  .part4{width: 100%;height:10.72rem;background:url('../assets/images/video-program/part_04.jpg') center 0 no-repeat;background-size: 100% 100%;}
  .part4 li{float: left;margin-top: 0.3rem;}
  .part4 li img{width: 100%;height: 100%;}
  .part4 li:first-child{width: 2.64rem;height: 3.8rem;background:url('../assets/images/video-program/teacherApp.png') center 0 no-repeat;background-size: 100% 100%; margin-left: 1.7rem;overflow: hidden;}
  .part4 li:first-child +li{width: 2.16rem;height: 3.8rem;padding: .47rem .36rem 0 .36rem;box-sizing: border-box;}
  .part4 li:first-child +li p{width: 1.44rem;height: 0.5rem;background: #aa0108;border-radius: 0.25rem;color: #ffec7a;line-height: 0.5rem;text-align: center;font-size: 0.36rem;}
  .part4 li:first-child +li div{font-size: 0.26rem;line-height: .5rem;height: .5rem;color: #fff;margin-top: 0.1rem;}
  .part4>div{width: 6.86rem;height: 4.35rem;margin: 0 auto;padding: 0.3rem;font-size: 0.24rem;line-height: 0.38rem;color: #fff;box-sizing: border-box;margin-top: 1rem;}
  .more{width: 2rem;height: 0.6rem;background: #b4171e;border-radius: 0.05rem;line-height: 0.6rem;text-align: center;color: #fff;font-size: 0.3rem;display: block;margin: 0 auto;margin-top: 0.2rem;}
  .part5{width: 100%;height:7.9rem;background:url('../assets/images/video-program/part_05.jpg') center 0 no-repeat;background-size: 100% 100%;}
  .part5>div{width: 7.3rem;height: 7rem;background:url('../assets/images/video-program/recordApp.png') center 0 no-repeat;background-size: 100% 100%;margin: 0 auto;font-size: 0.22rem;position: relative;padding-top: 0.64rem;box-sizing: border-box;}
  .part5>div>img{width: 6.9rem;height: 2.5rem;margin: 0 auto;display: block;}
  .part5>div>span{font-size: .22rem;line-height: 0.4rem;color: #f4de64;text-align: center;display: block;margin-top: 0.2rem}
  .part5>div>.dec{width: 6.7rem;font-size: 0.24rem;line-height: 0.4rem;color: #fff;margin: 0 auto;margin-top: 0.1rem;}
  .part6{width: 100%;height:3.9rem;background:url('../assets/images/video-program/part_06.jpg') center 0 no-repeat;background-size: 100% 100%;position: relative;}
  .part6>ul{width: 7.14rem;margin: 0 auto;background:url('../assets/images/video-program/teamApp.png') center 0 no-repeat;background-size: 100% 100%;height: 3rem;}
  .part6>ul>li{width: 2.24rem;height: 1.5rem;float: left;margin-top: 0.64rem;margin-left: 0.04rem;}
  .part6>ul>li:first-child{margin-left: 0.15rem;}
  .part6>ul>li img{width: 100%;height: 100%;}
  .tit{width: 5.45rem;height: 0.97rem;background: url('../assets/images/video-program/titApp.png') center 0 no-repeat;background-size: 100% 100%;position: absolute;left: 50%;top: -0.67rem;margin-left: -2.72rem;font-size: 0.36rem;color: #fff;text-align: center;line-height: 1.1rem;}
  .tit i{color: #fee844;margin-left: 0.1rem;}
  a{display: block;width: 100%;height: 100%;color: #fff;overflow: hidden;}
  a:visited{color: #fff;}
  img{display: block;}
  div{margin-top: -0.02rem;}
</style>
<template>
  <div class="video">
    <div class="part1"></div>
    <div class="part2">
      <p>{{data.videoTitle}}</p>
      <video :src="data.videoSrc"  controls id="myvideo"  poster="http://i0.jrjimg.cn/zqt-red-1000/focus/focus2017YMZ/zhuanti/01/videoBg.png"></video>
    </div>
    <div class="part3">
      <p class="tit">{{data.theme}}</p>
      <div>
        <img :src="data.themeImgApp" alt="">
      </div>
    </div>
    <div class="part4">
      <ul class="clearfix">
        <li><img :src="data.teacherImgApp" alt=""></li>
        <li>
          <p>{{data.teacherName}}</p>
          <div>{{data.teacherTit}}</div>
        </li>
      </ul>
      <div>
        {{data.teacherDec}}
        <i class="more"><a :href="data.teacherMore">查看更多</a></i>         
      </div>
    </div>
    <div class="part5">
      <div>
        <p class="tit">{{data.stockTit1}}<i>{{data.stockTit2}}</i></p>
        <img :src="data.stockAppImg" alt="">
        <span>风险提示：历史涨幅空间不代表对未来涨幅的任何承诺；<br>股市有风险，投资需谨慎。</span>
        <p class="dec">金融界智能金融、投资顾问、研究院三大团队应用最前沿的智能金融技术，鼎力打造智能量化选股
    利器——极智选股，三大核心服务精选好股，帮助大家解决选股难题。<i class="more"><a :href="data.stockMore">查看更多</a></i></p> 
      </div>
    </div>
    <div class="part6">
      <p class="tit">{{data.teamTitle1}}<i>{{data.teamTitle2}}</i></p>
      <ul class="clearfix">
        <li v-for="item in data.teamImg">
          <a :href="item.link">
            <img :src="item.srcApp" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      data:{},
      timeId:'',
      timeLength:''
    }
  },
  components: {

  },
  methods: {
    
  },
  watch: {

  },
  mounted() {
      document.title = '纵横股今'
      var self = this;
      document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.getBoundingClientRect().width / 750 * 625+ '%'
      var p = new Promise(function(resolve, reject){        
            $.ajax({
              url: '//appcms.jrj.com.cn/base/getFragmentById.jspa?fragmentId=179',
              type: 'get',
              dataType: 'jsonp', 
              success:function(jsondata){
                  self.data = JSON.parse(jsondata.data)
                  resolve(self.data);
              },
              error:function(e){
                // console.log(e);
              }
          }) 
      });

      p.then(function(data){
        self.timeId = Number(Math.random().toString().substr(3,20) + Date.now()).toString(36);
        var myvideo=document.getElementById('myvideo');
        var timer;
        var num = 0;
        myvideo.addEventListener('play',function(event){
          if( num === 0 ){
            num++;
            window.dcsMultiTrack('DCS.dcsuri',''+data.videoSrc+'?play_id='+self.timeId+'&play_time=0&type=start','WT.ti',data.videoTitle);
            timeOn(event);
          } else{
            self.timeLength = Math.ceil(event.target.currentTime);
            timeOn(event);
          }  
        });
        myvideo.addEventListener('pause',function(){
          clearInterval(timer);
        });
        function timeOn(event){
            timer = setInterval( () => {
              window.dcsMultiTrack('DCS.dcsuri',''+data.videoSrc+'?play_id='+self.timeId+'&play_time='+Math.ceil(event.target.currentTime)+'&type=on','WT.ti',data.videoTitle);
            },10000)     
        }
      })

  },
  beforeDestroy(){
    window.dcsMultiTrack('DCS.dcsuri',''+this.data.videoSrc+'?play_id='+this.timeId+'&play_time='+this.timeLength+'&type=end','WT.ti',this.data.videoTitle);
  }

}
</script>
