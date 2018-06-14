<template>
<div class="touguStudio">
  <div class="touguStudio-logol">
    <div class="item item1"></div>
    <div class="item item2">
      <div class="in">
        <span class="span1">
                   <i>趋势风向标帮您把控仓位，热点跟踪器狙击热点动态</i>
                 </span>
        <span class="span2">
                   <i>7小时在线直播+电话1对1，核心内参+解套方案，让您舒心更放心</i>
                 </span>
        <span class="span3">
                   <i>多角度选取当前最优策略，出票确认单专业筛选认证</i>
                 </span>
        <span class="span4">
                   <i>全程跟踪个股买卖策略，实时指导异动行情交易方法</i>
                 </span>
        <span class="span5">
                   <i>资产配置实现高能风报比，智能工具让投资更加便捷</i>
                 </span>              
            </div>
        </div>
        <div class="item item3"></div>
        <div class="item item4">
          <div class="item4-bh">
             <div class="itemBh-title"></div>
             <div class="itemBh-three">
                 <div class="fStudio" @click="alertBuy" id="160603010046392493">
                     <p class="fStudio-title">黑马三期</p>
                     <div class="image-text">
                        <img src="../../assets/images/touguStudio/hot.png" class="image"/>
                        <p class="text">热销中</p>
                     </div>
                     <div class="button-click"><p class="bcSpan">点击查看</p></div>
                 </div> 
                 <div class="fStudio" @click="alertBuy" id="141126010097487282">
                     <p class="fStudio-title">黑马二期</p>
                     <div class="image-text">
                        <img src="../../assets/images/touguStudio/hot.png" class="image"/>
                        <p class="text">热销中</p>
                     </div>
                     <div class="button-click"><p class="bcSpan">点击查看</p></div>
                 </div>  
                 <div class="fStudio" @click="alertBuy" id="141210010098595802">
                     <p class="fStudio-title">黑马一期</p>
                     <div class="image-text">
                        <img src="../../assets/images/touguStudio/mine.png" style="width:15px;height:15px;"/>
                        <p class="text">已满员</p>
                     </div>
                     <div class="button-click"><p class="bcSpan">点击查看</p></div>
                 </div>     
             </div>
          </div>
          <div class="item4-ai">
             <div class="itemAi-title"></div>
             <div class="itemAi-two">
                <div class="fStudio" @click="alertBuy" id="140912010047742826">
                     <p class="fStudio-title">AI二期</p>
                     <div class="image-text">
                        <img src="../../assets/images/touguStudio/hot.png" class="image"/>
                        <p class="text">热销中</p>
                     </div>
                     <div class="button-click"><p class="bcSpan">点击查看</p></div>
                 </div>  
                 <div class="fStudio" @click="alertBuy" id="100323010017140421">
                     <p class="fStudio-title">AI一期</p>
                     <div class="image-text">
                        <img src="../../assets/images/touguStudio/hot.png" class="image"/>
                        <p class="text">热销中</p>
                     </div>
                     <div class="button-click"><p class="bcSpan">点击查看</p></div>
                 </div>    
             </div>
          </div>
          <div class="item4-back"></div>
        </div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7">
             <div class="in">
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="../../assets/images/touguStudio/Hotsniper.jpg" class="main-img"></div>
                    <div class="swiper-slide"><img src="../../assets/images/touguStudio/Band.jpg" class="main-img"></div>
                    <div class="swiper-slide"><img src="../../assets/images/touguStudio/Blackhorse.jpg" class="main-img"></div>
                    <div class="swiper-slide"><img src="../../assets/images/touguStudio/Super.jpg" class="main-img"></div>
                    <div class="swiper-slide"><img src="../../assets/images/touguStudio/cyw.jpg" class="main-img"></div>
                  </div>

                  <div class="swiper-pagination" id="pagination">
                  </div>
              </div>
              <a class="gobtn" @click="alertReservation">
              </a>
             </div>
              
        </div>
        <div class="item item8"></div>
        <div class="item item9"></div>
        <div class="item item10">
          <a class="gobtn" @click="alertReservation"></a>
        </div>
        <div class="item item11"></div>
        <div class="item item12">
          <div class="in">
                <div class="ul">
                     <div class="ul-part">
                       <p>姓名</p>
                       <input type="text" placeholder="请输入您的中文名" name="userName" class="userName" maxlength="10"/>
                       <div class="userNamebox" v-show="userNamebox"></div>
                     </div>
                     <div class="ul-part">
                       <p>手机</p>
                       <input type="text" placeholder="请输入11位手机号码" name="phone" class="phone" maxlength="11"/>
                       <div class="userPhonebox" v-show="userPhonebox"></div>
                     </div>
                </div>
                <a class="foot-btn"></a>
          </div>
        </div>
        <div class="item13"></div>
      </div> 
      <div class="rightNav">
           <div class="rightNav-top">
              <p id="HX">核心产品</p>
              <p id="FW">服务体系</p>
              <p id="TS">产品特色</p>
              <p id="ZC">团队支持</p>
           </div>
           <div class="rightNav-bottom">
              <div class="aibuybtn" @click="alertBuy">
                <p class="aiZ">AI尊享</p>
                <p class="buyD">购买通道</p>
              </div>
              <div class="backbuybtn" @click="alertBuy">
                <p class="aiZ">量化黑马</p>
                <p class="buyD">购买通道</p>
              </div>
           </div>
      </div>
      <buyModel type='buy' :showstate='showBuy' @buyClose="cancle"></buyModel>
      <reservationModel type='reservation' :showstate='showReservation' @reservationClose="cancleR"></reservationModel>
      <reSuccessModel type='resuccess' :showstate='showReSuccess' @resuccessClose="cancleC"></reSuccessModel>
  </div>
</template>

<script>
import Swiper from 'swiper'
import $ from 'jquery'
import buyModel from 'components/touguStudio/buy'
import reservationModel from 'components/touguStudio/reservation'
import reSuccessModel from 'components/touguStudio/reSuccess'
export default{
  data:function(){
    return{
      showBuy:false,
      showReservation:false,
      userNamebox:false,
      userPhonebox:false,
      showReSuccess:false
    }
  },
  components:{
    Swiper,
    buyModel,
    reservationModel,
    reSuccessModel
  },
  methods:{
    alertBuy:function(){
      this.showBuy=true;
    },
    alertReservation:function(){
      this.showReservation=true;
    },
    cancle:function(){
      this.showBuy=false;
    },
    cancleR:function(){
       this.showReservation=false;
    },
    cancleC:function(){
      this.showReSuccess=false;
    }

  },
  mounted:function(){
     var _this=this;
     new Swiper('.swiper-container',{
          slidesPerView: 1,
          paginationClickable: true,autoplay: 2000,loop:true,
          grabCursor:true,
          spaceBetween: 0,
          pagination: '.swiper-pagination',
          autoplayDisableOnInteraction : false
    });
    $(function(){
     
       $(window).scroll(function(){
         if($(window).scrollTop()>=400 && $(window).scrollTop()<= 1202){
             $('.rightNav-top').css('visibility','visible');
             $('#HX').css('color','#FFF');
             $('#FW').css('color','rgba(143,137,129,1)');
             $('#TS').css('color','rgba(143,137,129,1)');
             $('#ZC').css('color','rgba(143,137,129,1)');
         }else if($(window).scrollTop()>1202 && $(window).scrollTop()<= 2161){
             $('#HX').css('color','rgba(143,137,129,1)');
             $('#FW').css('color','#FFF');
             $('#TS').css('color','rgba(143,137,129,1)');
             $('#ZC').css('color','rgba(143,137,129,1)');
         }else if($(window).scrollTop()>2161 && $(window).scrollTop()<= 5751){
             $('#HX').css('color','rgba(143,137,129,1)');
             $('#FW').css('color','rgba(143,137,129,1)');
             $('#TS').css('color','#FFF');
             $('#ZC').css('color','rgba(143,137,129,1)');
         }else if($(window).scrollTop()>5751){
             $('#HX').css('color','rgba(143,137,129,1)');
             $('#FW').css('color','rgba(143,137,129,1)');
             $('#TS').css('color','rgba(143,137,129,1)');
             $('#ZC').css('color','#FFF');
         }else{
            $('.rightNav-top').css('visibility','hidden');
         }
       });


     var tooltip;
     var showTooltip = function(el, text){
            tooltip = $('<i class="tooltip">'+text+'</i>');
            $('.tooltip').removeClass('show');
            if (el.find('i').length === 0) {
                el.append(tooltip);
            }else{
                el.find('i').text(text);
            }
            setTimeout(function () {
                el.find('i').remove();
            }, 2000);

        };
        var showUsernamebox=function(){
          _this.userNamebox=true;
          setTimeout(function () {
             _this.userNamebox=false;
            }, 2000);
        }
         var showUserphonebox=function(){
          _this.userPhonebox=true;
          setTimeout(function () {
             _this.userPhonebox=false;
            }, 2000);
        }
        $('.foot-btn').each(function(){
            var o=$(this);
            $(this).click(function(){
               var userName = o.parent().find(".userName").val();
               var phone = o.parent().find(".phone").val();
               if(userName===''){
                   showUsernamebox();
                   showTooltip(o.parent().find('.userNamebox'), '姓名不能为空！');
                   return;
               }else{
                    var regname=/^[\u4e00-\u9fa5]+$/gi;
                    if(!regname.test(userName)){
                        showUsernamebox();
                        showTooltip(o.parent().find('.userNamebox'), '请输入中文名!');
                        return;
                    }
               }
               if(phone===''){
                    showUserphonebox();
                    showTooltip(o.parent().find('.userPhonebox'), '手机号不能为空！');
                    return;
               }else{
                    var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
                    if (!reg.test(phone)) {
                          showUserphonebox();
                          showTooltip(o.parent().find('.userPhonebox'), '手机号输入不正确！');
                          return;
                    }

               }
                 // ajax提交数据，判断预约是否成功
                $.ajax({
                    url: 'http://activity.jrj.com.cn/activity/record/web',
                    dataType: 'jsonp',
                    data: {
                      aid: '812732510585339904',
                      activityUserName: userName,
                      mobile: phone,
                      bizsource: 'JRJ',
                      tgqdcode: 'BW5PKUPE',
                      source: '1'
                    },
                    success: function (data) {
                      if (data.retcode === 0) {       
                          $(".username").val('');
                          $(".phone").val('');
                          _this.showReSuccess=true;
                      } else {
                          alert(data.msg);
                      }
                    },
                    error: function () {
                      alert('网络异常！')
                    }
                  });
              });
           });
    });
   
  }



}
</script>

<style>
@import '../../assets/css/base.css';
@import '../../assets/css/swiper.min.css';
.touguStudio{
  width: 100%;
  min-width: 1020px;
  height: auto;
  background-color: #000;
  position: relative;
}

.item {
  width: 100%;
}

.item1 {
  height: 414px;
  background: url('../../assets/images/touguStudio/touguStudio01.jpg') center no-repeat;
}

.item2 {
  height: 427px;
  background: url('../../assets/images/touguStudio/touguStudio02.jpg') center no-repeat;
}
.item5{
  height: 967px;
  background: url('../../assets/images/touguStudio/touguStudio04.jpg') center no-repeat;
}
.item6{
  height:734px;
  background: url('../../assets/images/touguStudio/touguStudio05.jpg') center no-repeat;
}
.item7{
  height:810px;
  background: url('../../assets/images/touguStudio/touguStudio06.jpg') center no-repeat;
}
.item8{
  height:884px;
  background: url('../../assets/images/touguStudio/touguStudio07.jpg') center no-repeat;
}
.item9{
  height:976px;
  background: url('../../assets/images/touguStudio/touguStudio08.jpg') center no-repeat;
}
.item10{
  height:165px;
  background: url('../../assets/images/touguStudio/touguStudio09.jpg') center no-repeat;
  position: relative;
}
.item10 .gobtn{
  position: absolute;
    left: 50%;
    margin-left: 220px;
    top: -20px;
    width: 220px;
    cursor: pointer;
}
.item11{
  height:1212px;
  background: url('../../assets/images/touguStudio/touguStudio10.jpg') center no-repeat;
}
.item12{
   height:194px;
  background: url('../../assets/images/touguStudio/touguStudio11.jpg') center no-repeat;
}
.item13{
  width: 100%;
  height: 10px;
}
.item2 .in{
  position: relative;
  width: 789px;
  margin: 0 auto;
}
.ul{
  width: 650px;
  display: flex;
  height: 64px;
  flex-direction: row;
  justify-content: space-between;

}
.ul-part{
  width: 325px;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
}
.ul-part p{
font-size:30px;
font-family:MicrosoftYaHei;
color:#3D2601;
line-height:28px;
}
.ul-part input{
width:207px;
height:40px;
background:rgba(255,255,255,.26);
border-radius:5px;
font-size:18px;
font-family:MicrosoftYaHei;
color:#805e28;
line-height:15px;
border: 1px solid #3d2601;
padding-left: 10px;
margin-left: 11px;
}
.item7 .in{
  position: relative;
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
}
.item12 .in{
  width: 929px;
  margin: 0 auto;
  position: relative;
  padding-top: 110px;
  opacity: 0.7;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item2 span{
  position:absolute;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  cursor: pointer;
}

.item2 .span1 {
  top: 273px;
  left: 15px;
}

.item2 .span2 {
  top: 88px;
  left: 107px;
}

.item2 .span3 {
  top: 22px;
  left: 42%;
}

.item2 .span4 {
  top: 71px;
  right: 110px;
}

.item2 .span5 {
  top: 270px;
  right: 10px;
}

.item2 span i {
  position: absolute;
  padding: 9px 9px;
  background: rgba(225, 162, 75, .38);
  color: #fdd8a4;
  font-size: 14px;
  border-radius: 10px;
  line-height: 22px;
  width: 112px;
  display: none;
}

.item2 .span1 i,
.item2 .span2 i,
.item2 .span3 i {
  bottom: 103px;
  right: 100px;
}

.item2 .span4 i,
.item2 .span5 i {
  bottom: 103px;
  left: 100px;
}

.item2 span:hover i {
  display: block;
}

.item3 {
  width: 100%;
  height: 47px;
  background: url('../../assets/images/touguStudio/touguStudio03.jpg') center no-repeat;
}

.item4 {
  height: 387px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.item4 .item4-bh {
  width: 58.5%;
  height: 387px;
}

.item4 .item4-ai {
  width: 37.5%;
  height: 387px;
}

.item4 .item4-back {
  width: 4%;
  height: 387px;
}

.itemBh-title,
.itemAi-title {
  width: 100%;
  height: 164px;
}

.itemBh-title {
  background: url('../../assets/images/touguStudio/bhStudio.jpg') no-repeat center;
}

.itemAi-title {
  background: url('../../assets/images/touguStudio/AiStudio.jpg') no-repeat center;
}

.itemBh-three,
.itemAi-two {
  width: 100%;
  height: 223px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
}
.fStudio{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  height:174px;
  border-radius: 15px;
  background: url('../../assets/images/touguStudio/fiveStudio.jpg') center no-repeat;
  margin-left: 4.22%;
}
.fStudio:hover{
  cursor: pointer;
}
.fStudio-title{
height:25px;
font-size:26px;
font-family:FZLTZHK--GBK1-0;
color:rgba(61,34,2,1);
line-height:14px;
margin-top: 28px;
}
.image-text{
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.image{
width:12px;
height:14px;
}
.text{
width:60px;
height:18px;
font-size:19px;
font-family:PingFangSC-Medium;
color:rgba(173,0,0,1);
line-height:14px;
margin-left: 6px;
}
.button-click{
width:120px;
height:38px;
background:-webkit-linear-gradient(
    top,#D69A39,#B17E2C
  );
border-radius:19px;
box-shadow:4px 0px 8px rgba(102,72,20,1);
margin-top: 27px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
}
.bcSpan{
width:72px;
height:17px;
font-size:18px;
font-family:MicrosoftYaHei;
color:rgba(255,255,255,1);
line-height:14px;
}
.swiper-container{
  width: 750px;
  height: 400px;
  margin-left: 249px;
  margin-top: 20px;
  position: static;
}
.swiper-wrapper{
  width:100%;
  height:100%;
}
.swiper-pagination{
  position: absolute;
  width: 200px;
  top: 25px;
  left: 0;
}
.swiper-pagination .swiper-pagination-switch{
 display: block;
 cursor: pointer;
 margin-bottom: 17px;
 height: 70px;
 width: 100%;
}
.gobtn{
    width: 210px;
    height: 60px;
    display: block;
    margin-left: 640px;
    margin-top: 60px;
    cursor: pointer;
}
.foot-btn{
  width: 214px;
  height: 60px;
  background-color:none;
  display: block;
  position: relative;
  bottom: 60px;
  right: 10px;
  cursor: pointer;
}
.rightNav{
  width: 140px;
  height: 372px;
  position: fixed;
  top:42%;
  right: 10px;
  display: block; 
}

.rightNav-top{
  visibility: hidden;
}
.rightNav-top p{
width: 74px;
height:32;
background:rgba(61,55,46,1);
border-radius:10px;
font-size:18px;
font-family:FZLTXHK--GBK1-0;
color:rgba(143,137,129,1);
line-height:26px;
margin-bottom: 6px;
padding: 12px 33px;
}
.aibuybtn{
  width: 100%;
  height:73px;
  background:-webkit-linear-gradient(
    top,#9496F3,#3144B7
  );
border-radius:10px;
box-shadow:0px 5px 10px rgba(96,101,240,0.4);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 11px;
cursor: pointer;
}
.backbuybtn{
 width: 100%;
  height:73px;
  background:-webkit-linear-gradient(
    top,#EBAF70,#A5613C
  );
border-radius:10px;
box-shadow:0px 5px 10px rgba(185,118,64,0.4);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 11px;
cursor: pointer;
}
.aiZ{
font-size:22px;
font-family:Lantinghei SC;
font-weight: Demibold;
color:rgba(255,255,255,1);
line-height:26px;
font-weight: 550;
}
.buyD{
font-size:22px;
font-family:Lantinghei SC;
font-weight: lighter;
color:rgba(255,255,255,1);
line-height:26px;
}
.userNamebox,.userPhonebox{
 position:absolute;
 width: 110px;
 height: 25px;
 background-color: white;
 border: 1px solid red;
 border-radius: 5px;
 right: 40px;
 font-size: 12px;
 padding-left: 8px;
 padding-top: 3px;
}
</style>