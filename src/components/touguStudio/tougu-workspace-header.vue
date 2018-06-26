<style  lang='scss' scoped>
    .tougu-workspace-header { height:108px; background:url('../../assets/images/touguStudio/tougu-workspace-header-bg.png') center no-repeat; background-size:cover; }
    .studio-info-headimage { width:73px; height:72px; margin-left:36px; margin-top:22px; float:left}
    .studio-info-info { float:left; margin-left:22px; }
    .studio-info-name {color:#c79b5e;font-size: 32px;margin-top: 20px;}
    .studio-info-headimage img{width: 100%;height: 100%;border-radius: 50%}
    .studio-info-desc { color:#C9D0D7; font-size:18px; margin-top:6px}
    .studio-info-remaing-day { float:right; color:#C9D0D7; font-size:14px; margin-right:29px; margin-top:70px}
    .willExpired{color:red;}
</style>

<template>
    <div class="tougu-workspace-header">
        <div class="studio-info-headimage"><img :src="studioList.headImage"></div>
        <div class="studio-info-info">
            <div class="studio-info-name">{{studioList.username}}</div>
            <div class="studio-info-desc">量化算法驱动+专家投顾</div>
        </div>
        <div :class="{'studio-info-remaing-day':true, willExpired:willExpired}">服务于{{studioTime.expireDate | dateFormat}}到期</div>
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
                if(!_this.studioTime.expireDate){
                    return false;
                }
                var expireDate=new Date(_this.studioTime.expireDate);
                var today = new Date();
                if(expireDate-today<30*24*60*60*1000){
                     return true;
                }
            }
          },
       method:{
        
       },
       filters:{
           dateFormat:function(data){
               if(!data){
                   return "--";
               }
             var arr1=data.split('-');
             var year=arr1[0];
             var month=arr1[1].split('0')[1];
             var day=arr1[2].split('0')[1];
             return year+'年'+month+'月'+day+'日';
           } 
       },
        mounted:function(){
            this.$store.dispatch('touguSpaceNav/getStudioInfo',{
                 roomId:this.$route.params.roomId
          });
           this.$store.dispatch('touguSpaceNav/getServerTime',{
                 adviserId:this.studioList.userId
          });
        }
    }
</script>