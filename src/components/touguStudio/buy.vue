<template>
 <div class="buyGlobal" v-show="showstate">
     <div class="model">
         <div class="close" @click="buyClose">
            <img src="../../assets/images/touguStudio/close.png">
         </div>
         <div class="model-content">
             <p class="buy-inf">大行情PC端暂时不支持支付功能，如需支付请下载大行情App并在产品订阅页进行支付，大行情智能投服团队期待为您服务！</p>
             <div class="buy-code">
                 <div class="buycode-model">
                   <img src="../../assets/images/touguStudio/buycode.png">
                   <p>大行情Android版</p>
                 </div>
                  <div class="buycode-model">
                   <img src="../../assets/images/touguStudio/buycode.png">
                   <p>大行情IOS版</p>
                 </div>
             </div>
         </div>
     </div>
 </div>
</template>

<script>
export default{
   name:'buy',
   props:['type','showstate'],
   data:function(){

   },
   methods:{
       buyClose:function(){
           this.$emit('buyClose');
       }
   }

}
</script>
<style>
@import '../../assets/css/base.css';
.buyGlobal{
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
.close{
    width: 32px;
    height: 46px;
    float: right;
    margin-top: -67px;
    margin-right: 20px;
    cursor: pointer;
}
.model{
    width:559px;
}
.model-content{
    width:559px;
    height:297px;
    background:rgba(245,235,220,1);
    border-radius:10px;
}
.model-content .buy-inf{
    width:468px;
    height:45px;
    font-size:16px;
    font-family:MicrosoftYaHei;
    color:rgba(207,153,83,1);
    line-height:28px;
    padding-top: 39px;
    padding-left: 43px;
}
.buy-code{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 32px;
}
.buycode-model{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.buy-code div{
    width: 121px;
}
.buycode-model img{
    width: 121px;
    height: 121px;
}
.buycode-model p{
font-size:14px;
font-family:MicrosoftYaHei;
color:rgba(51,51,51,1);
line-height:28px;
}
</style>