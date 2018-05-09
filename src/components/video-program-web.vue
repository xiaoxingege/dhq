<style type="text/css" scoped>
@import '../assets/css/reset.css';
  body{background: #000000;}
  .item1{width: 100%;height: 647px;background: url('../assets/images/video-program/item-bg_01.jpg')  repeat 50% 50%}
  .item2{width: 100%;height: 678px;background:  url('../assets/images/video-program/item-bg_02.jpg')  repeat 50% 50%}
    .item2 .tit{width: 100%;height: 98px;font-size: 30px;line-height: 98px;text-align: center;color: #fff;}
    .item2>div{width: 645px;height: 405px;margin: 0 auto;overflow: hidden;z-index: 33;position: relative;}
    video{width: 645px;height: 405px;object-fit: contain;display: block;}
  .item3{width: 100%;height: 783px;background:  url('../assets/images/video-program/item-bg_03.jpg')  repeat 50% 50%;position: relative;}
    .item3>p{color: #fee741;}
    .item3>div{width: 940px;height: 783px;background:  url('../assets/images/video-program/main-bg.png')  no-repeat 50% 50%;margin: 0 auto;overflow: hidden;}
    .item3>div img{width: 876px;height: 670px;margin: 0 auto;margin-top: 50px;}
  .item4{width: 100%;height: 591px;background:  url('../assets/images/video-program/item-bg_04.jpg')  repeat 50% 50%}
    .item4 ul{width: 936px;height: 591px;margin: 0 auto;overflow: hidden;}
    .item4 li:first-child{width: 268px;height: 380px;background: url('../assets/images/video-program/teacher-img.png')  repeat 50% 50%;float: left;margin-left: 32px;margin-top: 50px;}
    .item4 li:first-child img{width: 264px;height: 376px;margin: 0 auto;margin-top: 2px;}
    .item4 li:first-child +li{width: 603px;height: 379px;background: url('../assets/images/video-program/teacher-dec.png')  repeat 50% 50%;float: left; margin-left: 32px;overflow: hidden;margin-top: 50px;}
    .item4 li:first-child +li>div{width: 544px;height: 46px;border-radius: 23px;background: #aa0108;margin-top: 25px;margin-left: 28px;}
    .item4 li:first-child +li>div h2{font-size: 32px;line-height: 46px;color: #feed7e;float: left;margin-left: 30px;}
    .item4 li:first-child +li>div i{font-size: 24px;line-height: 46px;color: #fff;margin-left: 25px;float: left;}
    .item4 li:first-child +li>p{font-size: 20px;line-height: 36px;color: #fff;margin-left: 28px;margin-top: 10px;margin-right: 50px;}
    .more{width: 120px;height: 36px;display:  inline-block;border-radius: 5px;font-size: 20px;line-height: 36px;text-align: center;background: #d62c2e;color: #fff;}
  .item5{width: 100%;height: 621px;background:  url('../assets/images/video-program/item-bg_05.jpg')  repeat 50% 50%;position: relative;}
    .item5>div{width: 940px;height: 511px;background: url('../assets/images/video-program/item5-conBg.png') no-repeat 100% 100%;margin: 0 auto;overflow: hidden;}
    .item5>p,.item6>p{color: #fff;}
    .item5>p>i,.item6>p>i{color: #fee741;margin-left: 10px;}
    .item5>div>span{font-size: 18px;height: 56px;line-height: 56px;color: #f4de64;text-align: center;display: block;}
    .item5>div>.dec{width: 860px;font-size: 20px;line-height: 40px;height: 40px;color: #fff;margin: 0 auto;}
  .item6{width: 100%;height: 540px;background:  url('../assets/images/video-program/item-bg_06.jpg')  repeat 50% 50%;position: relative;}
  .item6 ul{width: 940px;height: 311px;background:  url('../assets/images/video-program/team.png')  repeat 50% 50%;margin: 0 auto;}
  .item6 ul li{width: 283px;height: 193px;float: left;overflow: hidden;margin-top: 54px;margin-left: 17px;}
  .item6 ul li:first-child{margin-left: 24px;}
  .item6 ul li img{width: 283px;height: 193px;}
  .conTit{
      width: 545px;height: 97px;background:  url('../assets/images/video-program/main-tit.png')  no-repeat 50% 50%;position: absolute;left: 50%;top: -67px;margin-left: -272px;font-size: 36px;text-align: center;line-height: 106px;
  }
  table{color: #fff;width: 860px;height: 250px;margin: 0 auto;margin-top: 64px;text-align: center;}
  tr{height: 50px;line-height: 50px;color: #2e0101;}
  table tr:first-child td{font-size: 20px;font-weight: bold;}
  td{background: #fff;border-bottom: 1px solid #d9b900;border-right: 1px solid #d9b900;box-sizing: border-box;font-size: 18px;}
  tr td:first-child{border-left: 1px solid #d9b900;}
  table tr:first-child td{background: #fee843;border-top:1px solid #d9b900; }
  img{width: 100%;height: 100%;display: block;}
  a:visited{color: #fff;}
  a:link{color: #fff;}
  a:active{color: #fff;}
  a:hover{color: #fff;}
</style>
<template>
  <div class="video">
    <div class="item1"></div>
    <div class="item2">
      <p class="tit">{{data.videoTitle}}</p>
      <div>
        <video :src="data.videoSrc" autoplay="autoplay"  controls id="myvideo"></video>
      </div>
    </div>
    <div class="item3">
      <p class="conTit">{{data.theme}}</p>
      <div>
        <img :src="data.themeImg" alt="">
      </div>
    </div>
    <div class="item4">
      <ul class="clearfix">
        <li><img :src="data.teacherImg" alt="" ></li>
        <li>
          <div class="clearfix">
            <h2>{{data.teacherName}}</h2>
            <i>{{data.teacherTit}}</i>
          </div>
          <p>
            {{data.teacherDec}}
            <i class="more"><a :href="data.teacherMoreWeb">查看更多</a></i>
          </p>
        </li>
      </ul>
    </div>
    <div class="item5">
      <p class="conTit">
        {{data.stockTit1}}<i>{{data.stockTit2}}</i>
      </p>
      <div>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td>股票及代码</td>
            <td>调入日期</td>
            <td>调入价格</td>
            <td>涨跌幅</td>
            <td>持股周期</td>
            <td>股票池来源</td>
          </tr>
          <tr v-for="item in data.stockItem">
            <td>{{item.stockName}}{{item.stockCode}}</td>
            <td>{{item.date}}</td>
            <td>{{item.price}}</td>
            <td>{{item.upDown}}</td>
            <td>{{item.cycle}}</td>
            <td>{{item.source}}</td>
          </tr>
        </table>
        <span>风险提示：历史涨幅空间不代表对未来涨幅的任何承诺；股市有风险，投资需谨慎。</span>
        <p class="dec">金融界智能金融、投资顾问、研究院三大团队应用最前沿的智能金融技术，鼎力打造智能量化选股
    利器——极智选股，三大核心服务精选好股，帮助大家解决选股难题。<i class="more"><a :href="data.stockMoreWeb">查看更多</a></i></p>         
      </div>  
    </div>

    <div class="item6">
      <p  class="conTit">{{data.teamTitle1}}<i>{{data.teamTitle2}}</i></p>
      <ul class="clearfix">
        <li v-for="item in data.teamImg">
          <a :href="item.linkWeb">
            <img :src="item.src" alt="">
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
      var p = new Promise(function(resolve, reject){        
            $.ajax({
              url: '//appcms.jrj.com.cn/base/getFragmentById.jspa?fragmentId=172',
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
