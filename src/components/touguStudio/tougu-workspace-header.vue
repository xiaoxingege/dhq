<style  lang='scss' scoped>
    .tougu-workspace-header { height:108px; background:url('../../assets/images/touguStudio/tougu-workspace-header-bg.png') center no-repeat; background-size:cover;width:100%;}
    .studio-info-headimage { width:73px; height:72px; margin-left:36px; margin-top:22px; float:left}
    .studio-info-info { float:left; margin-left:22px; }
    .studio-info-name {color:#c79b5e;font-size: 32px;margin-top: 20px;}
    .studio-info-headimage img{width: 100%;height: 100%;border-radius: 50%}
    .studio-info-desc { color:#C9D0D7; font-size:18px;font-family:MicrosoftYaHei;height:19px;}
    .studio-info-remaing-day { float:right; color:#C9D0D7; font-size:14px; margin-right:29px; margin-top:70px;font-family:MicrosoftYaHei;}
    .willExpired{color:red;}
</style>

<template>
    <div class="tougu-workspace-header">
        <div class="studio-info-headimage"><img :src="studioList.headImage"></div>
        <div class="studio-info-info">
            <div class="studio-info-name">{{studioList.username}}</div>
            <div class="studio-info-desc">量化算法驱动+专家投顾</div>
        </div>
        <div :class="{'studio-info-remaing-day':true, willExpired:willExpired}">服务于{{studioTime.expiredDate | dateFormat}}到期</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data:function(){
            return{

            }
        },
          computed: {
              ...mapState({
                studioList: state => {
                    return state.touguSpaceNav.roomData
                },
                studioTime: state => {
                    return state.touguSpaceNav.roomTime
                }
              }),
            willExpired:function(){
                var _this=this;
                if(!_this.studioTime.expiredDate){
                    return false;
                }
                var year=_this.studioTime.expiredDate.substr(0,4);
                var month=_this.studioTime.expiredDate.substr(4,2);
                var day=_this.studioTime.expiredDate.substr(6,2);
                var expiredDateTime=year+'-'+month+'-'+day;
                var expiredDate=new Date(expiredDateTime);
                var today = new Date();
                if(expiredDate-today<30*24*60*60*1000){
                     return true;
                }
            }
          },
       method:{
        
       },
       filters:{
           dateFormat:function(data){
               if(!data){
                   return '--';
               }
             var year=data.substr(0,4);
             var monthindex=data.substr(4,1);
             var dayindex=data.substr(6,1)
             var month;
             var day;
             if(monthindex==='0'){
                month=data.substr(5,1);
             }else{
                month=data.substr(4,2);
             }
             if(dayindex==='0'){
               day=data.substr(7,1);
             }else{
               day=data.substr(6,2);
             }
             return year+'年'+month+'月'+day+'日';
           } 
       },
        mounted:function(){
            this.$store.dispatch('touguSpaceNav/getStudioInfo',{
                 roomId:this.$route.params.roomId
           }).then(() => {
               this.$store.dispatch('touguSpaceNav/getServerTime',{
                 adviserId:this.studioList.userid
               });
           });
          
        }
    }
</script>