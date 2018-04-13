<style scoped>
  @import '../assets/css/reset.css';
  .fl{float: left;}.fr{float: right;}
  .disnone{  display: none;}
  .fall {color: #2DC678 !important;}
  .up {color: #F24637 !important;}
  #spring{width: 100%;background: #fb333b;}
  .part1{width: 100%;height: 725px; background: url('../assets/images/spring-market/part_01.jpg') center 0 no-repeat;}
  .part2{width: 100%;height: 800px; background: url('../assets/images/spring-market/part_02.png') center 0 no-repeat;}
  .part3{width: 100%;height: 938px; background: url('../assets/images/spring-market/part_03.png') center 0 no-repeat;}
  .part4,.part5,.part6{width: 100%; background: url('../assets/images/spring-market/bg_12.jpg') center 0 no-repeat;background-position: bottom;padding-bottom: 40px;}
  .part5,.part6{margin-top: 98px;}
  .part4Box{width: 1020px;margin: 0 auto;background: #ffffff;border-radius: 5px;padding: 108px 38px 40px 38px;position: relative;}
  .part4Box>div{width: 300px;height: 84px;background: url('../assets/images/spring-market/part_05.png') center 0 no-repeat;background-size: 100% 100%;position: absolute;left: 50%;top: -26px;margin-left: -150px;}
  .part4Box>img{width: 991px;height: 32px;margin: 0 auto;}
  .part4Box>ul{width: 504px;background: #f0f2ff;border-radius: 3px;overflow: hidden;padding-bottom: 40px;margin-top: 50px;}
  .part4Box>ul>li{height: 70px;margin-top: 35px;}
  .part4Box>ul>li>img{width: 70px;height: 70px;border-radius: 50%;overflow: hidden;display: block;float: left;margin-left: 40px;}
  .part4Box>ul>li>p{font-size: 30px;line-height: 70px;color: #333;margin-left: 28px;float: left;width: 320px;overflow: hidden; white-space: nowrap; text-overflow: ellipsis;height: 70px;cursor:pointer}
  .quan{width: 884px;height: 269px;display: block;margin: 63px auto;}
  .rec{width: 519px;height: 109px;background: url('../assets/images/spring-market/bookWeb.png') center 0 no-repeat;background-size: 100% 100%;margin: 0 auto;}
  .part7{width: 100%;height: 211px; background: url('../assets/images/spring-market/bottom_30.jpg') center 0 no-repeat;}
  .pulse {-webkit-animation-name: pulse;animation-name: pulse;}
  .animated {-webkit-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: both;animation-fill-mode: both;}
  .animated.infinite {-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;}
  /*需要特殊处理的*/
  .part5>.part4Box>div{width: 300px;height: 86px;background: url('../assets/images/spring-market/part_13.png') center 0 no-repeat;top: -28px;}
  .part6>.part4Box>div{width: 338px;height: 86px;background: url('../assets/images/spring-market/part_21.png') center 0 no-repeat;margin-left: -169px;top: -28px;}
  .part7 .quan{width: 961px;height: 270px;}
  /*弹窗*/
.mask {width: 100%;height: 100%;background-color: rgba(0, 0, 0, 0.5);position: fixed;top: 0;left: 0;z-index: 5;overflow: hidden;}
.ok{overflow: hidden;width: 294px;height: 488px;background: url('../assets/images/spring-market/ok.png') center 0 no-repeat;background-size: 100% 100%;z-index: 7;position: fixed;top: 10%;left: 50%;margin-left: -147px;}
.ok2{background: url('../assets/images/spring-market/ok2.png') center 0 no-repeat;background-size: 100% 100%;}
.ok3{background: url('../assets/images/spring-market/ok3.png') center 0 no-repeat;background-size: 100% 100%;}
.over{overflow: hidden;width: 325px;height: 410px;background: url('../assets/images/spring-market/over.png') center 0 no-repeat;background-size: 100% 100%;z-index: 7;position: fixed;top: 10%;left: 50%;margin-left: -162px;}
.butOk{width: 258px;height: 44px;margin: 0 auto;margin-top: 360px;}
.retOk{width: 258px;height: 44px;margin: 0 auto;margin-top: 265px;}
.butClose{width: 40px;height: 40px;margin: 0 auto;margin-top: 50px;}
@keyframes pulse {
    0% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
    50% {
        -webkit-transform: scale(1.5);
        -ms-transform: scale(1.5);
        transform: scale(1.5);
    }
    100% {
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
    }
}
</style>

<template>
  <div id="spring">
    <div class="part1"></div>
    <div class="part2"></div>
    <div class="part3"></div>
    <!-- 单股内参 -->
    <div class="part4">
      <div class="part4Box clearfix">
        <div></div>
        <img src="../assets/images/spring-market/part_09.png" alt="">
        <ul class="fl">
          <li class="clearfix" v-for="(item,index) in dataList.signalTips" v-if='index%2===0'>
            <img :src="item.tgImage" alt="" >
            <p @click="gotoDetail(item.tipId)">{{item.tipName}}</p>
          </li>
        </ul>
        <ul class="fr">
          <li class="clearfix" v-for="(item,index) in dataList.signalTips" v-if='index%2===1'>
            <img :src="item.tgImage" alt="">
            <p @click="gotoDetail(item.tipId)">{{item.tipName}}</p>
          </li>
        </ul>
      </div>
      <img class="quan" src="../assets/images/spring-market/quan1.png" alt="">
      <div class="rec pulse animated infinite"  @click="bookQuan(typeDay,'1')"></div>
    </div>
    <!-- 包月内参 -->
    <div class="part5">
      <div class="part4Box clearfix">
        <div></div>
        <img src="../assets/images/spring-market/part_17.png" alt="">
        <ul class="fl">
          <li class="clearfix" v-for="(item,index) in dataList.mouthTips" v-if='index%2===0'>
            <img :src="item.tgImage" alt="">
            <p @click="gotoDetail(item.tipId)">{{item.tipName}}</p>
          </li>
        </ul>
        <ul class="fr">
          <li class="clearfix" v-for="(item,index) in dataList.mouthTips" v-if='index%2===1'>
            <img :src="item.tgImage" alt="">
            <p @click="gotoDetail(item.tipId)">{{item.tipName}}</p>
          </li>
        </ul>
      </div>
      <img class="quan" src="../assets/images/spring-market/quan2.png" alt="">
      <div class="rec pulse animated infinite" @click="bookQuan(typeMouth,'2')"></div>
    </div>
    <!-- 长周期内参 -->
    <div class="part6">
      <div class="part4Box clearfix">
        <div></div>
        <img src="../assets/images/spring-market/part_25.jpg" alt="">
        <ul class="fl">
          <li class="clearfix" v-for="(item,index) in dataList.longTips" v-if='index%2===0'>
            <img :src="item.tgImage" alt="">
            <p @click="gotoDetail(item.tipId)">{{item.tipName}}</p>
          </li>
        </ul>
        <ul class="fr">
          <li class="clearfix" v-for="(item,index) in dataList.longTips" v-if='index%2===1'>
            <img :src="item.tgImage" alt="">
            <p @click="gotoDetail(item.tipId)">{{item.tipName}}</p>
          </li>
        </ul>
      </div>
      <img class="quan" src="../assets/images/spring-market/quan3.png" alt="">
      <div class="rec pulse animated infinite" @click="bookQuan(typeLong,'3')"></div>
    </div>
    <div class="part7"></div>
  <!-- 弹窗 -->
    <div class="mask" v-if='show' >
        <div class="ok"   v-if=" show && tanType === '1'" >
            <div class="butOk" @click='closeShow()'></div>
            <div class="butClose" @click='closeShow()'></div>
        </div>
        <div class="ok ok2"   v-if=" show && tanType === '3'" >
            <div class="butOk" @click='closeShow()'></div>
            <div class="butClose" @click='closeShow()'></div>
        </div>
        <div class="ok ok3"   v-if=" show && tanType === '4'" >
            <div class="butOk" @click='closeShow()'></div>
            <div class="butClose" @click='closeShow()'></div>
        </div>
        <div class="over"  v-if=" show && tanType === '2'" >
            <div class="retOk" @click='closeShow()'></div>
            <div class="butClose" @click='closeShow()'></div>
        </div>
    </div>
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
      dataList:{},
      show:false,
      tanType:'',
      typeDay:'',
      typeMouth:'',
      typeLong:''
    }
  },
  cumputed:mapState({
      loginStatus: state => state.user.loginStatus,
      ssoId: state => state.user.ssoId
  }),
  methods: {
    gotoDetail(id){
      window.location.href='http://itougu.jrj.com.cn/tips/'+id+'.jspa'
    },
    closeShow(type) {
      this.show = false;
      this.tanType = '';
    },
    bookQuan(typeId,typeNumber){
        var self = this;
        if (JSON.stringify(window.basicUserInfo) !== '{}') {
            $.ajax({
                url: 'http://itougu.jrj.com.cn/coupon/zhuanti/getCouponById.jspa',
                type: 'get',
                data:{
                    couponId:typeId,
                    userId:window.basicUserInfo.userId
                },
                dataType: 'jsonp',
                success:function(jsondata){
                    if(jsondata.retCode === 0){

                        if(typeNumber==='1'){
                          self.show = true;
                          self.tanType = '1';                            
                        }else if(typeNumber==='2'){
                          self.show = true;
                          self.tanType = '3'; 
                        }else if(typeNumber==='3'){
                          self.show = true;
                          self.tanType = '4'; 
                        }                      

                    }else if(jsondata.retCode === 1){
                        alert('领取失败')
                    }else if(jsondata.retCode === -4){
                        self.show = true;
                        self.tanType = '2';
                    }else if(jsondata.retCode === 3){
                        alert('领取渠道异常')
                    }else if(jsondata.retCode === -1){
                        alert('优惠券不存在')
                    }else if(jsondata.retCode === -2){
                        alert('参数异常')
                    }else if(jsondata.retCode === -3){
                        alert('非此活动优惠券ID')
                    }else if(jsondata.retCode === -5){
                        alert('未登录')
                    }
                }

            }) 
        } else {
            window.location.href = 'https://sso.jrj.com.cn/sso/ssopassportlogin?ReturnURL=' + location.href
        }
    }
  },
  mounted() {
    document.title = '0元预约赢体验';
    this.$store.dispatch('user/checkLogin')
    var self = this;
    $.ajax({
        url: 'http://itougu.jrj.com.cn/marketing/topics.jspa?id=5',
        type: 'get',
        dataType: 'jsonp',
        success:function(jsondata){
            if(jsondata.retCode === 1){
                self.dataList = jsondata.data;
                var data = jsondata.data.couponList;
                for(let i = 0; i < data.length; i++){
                    if(data[i].couponType==='1'){
                        self.typeDay = data[i].couponId;
                    }else if(data[i].couponType==='2'){
                        self.typeMouth = data[i].couponId
                    }else if(data[i].couponType==='3'){
                        self.typeLong = data[i].couponId
                    }
                }
            }
        }

    })
  }
}
</script>
