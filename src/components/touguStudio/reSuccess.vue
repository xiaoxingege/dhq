<template>
   <div class="reSuccess" v-show="showstate">
        <div class="reservation-success">
         <div class="reclose" @click="resuccessClose"><img src="../../assets/images/touguStudio/close.png"></div>
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
.reSuccess{
    position:fixed;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    z-index: 500;
    background:rgba(0, 0, 0, 0.5);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.reservation-success{
    width:559px;
    height:147px;
    background:rgba(245,235,220,1);
    border-radius:10px;
}
.reclose{
    width: 32px;
    height: 46px;
    float: right;
    margin-top: -45px;
    margin-right: 20px;
    cursor: pointer;
}
.reclose img{
    width: 32px;
    height: 46px;
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
export default{
   name:'buy',
   props:['type','showstate'],
   data:function(){

   },
   methods:{
       resuccessClose:function(){
           this.$emit('resuccessClose');
       }
   }

}
</script>
