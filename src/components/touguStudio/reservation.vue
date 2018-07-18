<template>
 <div class="reservation" v-show="showstate">
    <div class="reservation-input">
         <div class="reserclose" @click="reservationClose"><img src="../../assets/images/touguStudio/close.png"></div>
         <div class="inout-content">
             <p>了解工作室详情？请立即预约</p>
             <div class="inout-global">
                 <div class="inputname">
                      <div class="name">姓名</div>
                      <div class="input"><input type="text" name="username" placeholder="请输入您的中文名" id="username" class="username"/></div>
                       <div class="userNamebox" v-show="userNamebox"></div>
                 </div>      
                  <div class="inputphone">
                      <div class="phone">电话</div>
                      <div class="input"><input type="text" name="userphone" placeholder="请输入11位手机号码" id="userphone" class="userphone"/></div>
                      <div class="userPhonebox" v-show="userPhonebox"></div>
                 </div> 
             </div>
             <div class="reservation-btn">
                 <span>立即预约</span>
             </div>
         </div>
    </div>
    <div class="reservation-success" v-show="reSuccess">
          <div class="reserclose" @click="cancle"><img src="../../assets/images/touguStudio/close.png"></div>
         <div class="success-content">
             <div class="re-successicon"><img src="../../assets/images/touguStudio/reSuccess.png"></div>
             <div class="re-successcontent">
                 <p class="res-one">您已预约成功</p>
                 <p class="res-two">稍后VIP专属客服会与您联系，请保持预填手机通话畅通。</p>
             </div>
         </div>
    </div>
 </div>
</template>
<style>
@import '../../assets/css/base.css';
.reservation{
    position:fixed;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    z-index: 500;
    background:rgba(0, 0, 0, 0.5);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.reservation-input,.reservation-success{
  width:559px;
  margin-top: 10%;
}
.reservation-success{
    margin-top: 95px;
}
.inout-content,.success-content{
    width:559px;
    background:rgba(245,235,220,1);
    border-radius:10px;  
}
.inout-content{
height:245px;
}
.inout-content p{
width:266px;
height:21px;
font-size:20px;
font-family:MicrosoftYaHei;
color:rgba(207,153,83,1);
line-height:38px;
padding-top: 50px;
padding-left: 47px;
}
.inout-global{
    width: 456px;
    margin-top: 25px;
    margin-left: 47px;
}
.inputname,.inputphone{
    width: 211px;
    align-items: center;
}
.inputname input,.inputphone input{
width:156px;
height:38px;
background:rgba(255,255,255,1);
border: 0px;
padding-left: 16px;
}
.inputname .name,.inputphone .phone{
font-size:14px;
font-family:MicrosoftYaHei;
color:rgba(51,51,51,1);
line-height:38px;
}
.inputname,.inputphone,.inout-global{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
}
.success-content{
height:147px;
}
.reserclose{
    width: 32px;
    height: 46px;
    float: right;
    margin-top: -45px;
    margin-right: 20px;
    cursor: pointer;
}
.reserclose img{
    width: 32px;
    height: 46px;
}
.reservation-btn{
    width:160px;
    height:42px;
  background:-webkit-linear-gradient(
    top,#D69A39,#B17E2C
  );
border-radius:21px;
box-shadow:4px 0px 8px rgba(102,72,20,1);
}
.reservation-btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 36px;
    margin-left: 199px;
    cursor: pointer;
}
.reservation-btn span{
display: block;
font-size:16px;
font-family:MicrosoftYaHei;
color:rgba(255,255,255,1);
line-height:38px;
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
.success-content{
    display: flex;
    flex-direction: row;
}
.re-successicon img{
    width: 58px;
    height: 58px;
    padding-left: 48px;
    padding-top: 46px;
}
.res-one{
width:123px;
height:21px;
font-size:20px;
font-family:MicrosoftYaHei;
color:rgba(207,153,83,1);
line-height:38px; 
padding-top: 40px;
}
.res-two{
height:15px;
font-size:14px;
font-family:MicrosoftYaHei;
color:rgba(51,51,51,1);
line-height:38px; 
margin-top: 12px;
}
.re-successcontent{
 padding-left: 27px;
}
</style>
<script>
import $ from 'jquery'
export default{
   name:'reservation',
   props:['type','showstate'],
   data:function(){
    return{
       userNamebox:false,
       userPhonebox:false,
       reSuccess:false
    }
   },
   methods:{
       reservationClose:function(){
           this.$emit('reservationClose');
       },
       cancle:function(){
           this.reSuccess=false;
       }
   },
   mounted:function(){
       var _this=this;
        $(function(){
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
        $('.reservation-btn').each(function(){
            var o=$(this);
            $(this).click(function(){
               var userName = o.parent().find('.username').val();
               var phone = o.parent().find('.userphone').val();
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
                    url: 'https://activity.jrj.com.cn/activity/record/web',
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
                          $('.username').val('');
                          $('.phone').val('');
                          _this.reSuccess=true;
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