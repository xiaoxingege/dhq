<style>
    .tougu-workspace-header { height:108px; background:url('../../assets/images/touguStudio/tougu-workspace-header-bg.png') center; background-size:contain }
    .studio-info-headimage { width:73px; height:72px; margin-left:36px; margin-top:22px; float:left}
    .studio-info-info { float:left; margin-left:22px; }
    .studio-info-name {color:#c79b5e;font-size: 32px;margin-top: 20px;}
    .studio-info-headimage img{width: 100%;height: 100%;border-radius: 50%}
    .studio-info-desc { color:#C9D0D7; font-size:18px; margin-top:6px}
    .studio-info-remaing-day { float:right; color:#C9D0D7; font-size:14px; margin-right:29px; margin-top:70px}
</style>

<template>
    <div class="tougu-workspace-header">
        <div class="studio-info-headimage"><img :src="studioList.headImage"></div>
        <div class="studio-info-info">
            <div class="studio-info-name">{{studioList.username}}</div>
            <div class="studio-info-desc">量化算法驱动+专家投顾</div>
        </div>
        <div class="studio-info-remaing-day">服务于2018年4月6日到期</div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        data:function(){
            return{

            }
        },
          computed: mapState({
            studioList: state => {
                return state.touguSpaceNav.roomData
            }
       }),
        mounted:function(){
            this.$store.dispatch('touguSpaceNav/getStudioInfo',{
                 roomId:this.$route.params.roomId
                 
         })
        }
    }
</script>