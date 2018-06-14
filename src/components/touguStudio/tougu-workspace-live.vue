<style>
.live-global{
    color: white;
    position: fixed;
    width: 100%;
    height: 100%;
    overflow:scroll
}
.liveModel{
    width: 94%;
    padding:30px 0px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #23272C;
    margin: 0 auto;
}
.headImage img{
    width: 44px;
    height: 45px;
}
.live-right{
    margin-left: 20px;
}
.live-time{
height:10px;
font-size:12px;
font-family:MicrosoftYaHei;
color:rgba(175,182,189,1);
}
.live-content{
width:860px;
background:rgba(48,53,59,1);
border-radius:20px;
margin-top: 18px;
padding: 21px 26px;
}
.QP{
    width: 23PX;
    height: 18px;
    float: left;
    margin-top: -5px;
    margin-right: -3px;
}
</style>

<template>
   <div class="live-global">
        <div class="liveModel" v-for="(item, index) in roomList">
             <p class="headImage"><img :src="item.headImage"></p>
             <div class="live-right">
               <p class="live-time">{{dateFormat(new Date(item.timeId), 'yyyy-mm-dd hh:nn')}}</p>
               <div>
               <img src="../../assets/images/touguStudio/QP.png" class="QP"/>
                <p class="live-content" v-html="item.content">
                </p> 
               </div> 
             </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
       data(){
         return {
         }
       },
       computed: mapState({
            roomList: state => {
                return state.touguWorkspaceStore.liveData
            }
       }),
       methods:{
            leadingZero: function(num, size) {
                var s = '000000000' + num;
                return s.substr(s.length - size);
            },
            dateFormat: function(date, formatString) {
                let vm = this;

                if (!date.valueOf()){
                    return '';
                }

                var d = date

                return formatString.replace(/(yyyy|mm|dd|hh|nn|ss)/gi,
                    function($1) {
                        switch ($1.toLowerCase()) {
                            case 'yyyy':
                                return d.getFullYear();
                            case 'mm':
                                return vm.leadingZero((d.getMonth() + 1), 2);
                            case 'dd':
                                return vm.leadingZero(d.getDate(), 2);
                            case 'hh':
                                return vm.leadingZero(d.getHours(), 2);
                            case 'nn':
                                return vm.leadingZero(d.getMinutes(), 2);
                            case 'ss':
                                return vm.leadingZero(d.getSeconds(), 2);
                        }
                    }
                );
            }

       },
        mounted(){
             this.$store.dispatch('touguWorkspaceStore/getLiveInfo',{
                 roomId:'15'
             });
        }

    }
</script>