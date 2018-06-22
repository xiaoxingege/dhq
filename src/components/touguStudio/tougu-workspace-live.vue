<style>
.live-global{
    color: white;
    position: fixed;
    width: 100%;
    height: 80%;
    overflow:scroll;
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
color: #D3D9DD;
font-size: 14px;
line-height: 22px;
}

.QP{
    width: 23PX;
    height: 18px;
    float: left;
    margin-top: -5px;
    margin-right: -3px;
}
.live-content .editor-insert-stock a,.live-content a{
    font-size: 14px;
}
</style>

<template>
   <div class="live-global" id="live-global" ref="viewBox">
        <div class="liveModel" v-for="(item, index) in roomList">
             <p class="headImage"><img :src="item.headImage"></p>
             <div class="live-right">
               <p class="live-time">{{new Date().getDate() - dateFormat(new Date(item.timeId), 'dd')==0 && new Date().getFullYear()-dateFormat(new Date(item.timeId), 'yyyy')==0 && new Date().getMonth()+1 - dateFormat(new Date(item.timeId), 'mm')==0 ? dateFormat(new Date(item.timeId), '今天 hh:nn'):new Date().getDate() - dateFormat(new Date(item.timeId), 'dd')==1?dateFormat(new Date(item.timeId), '昨天 hh:nn'):dateFormat(new Date(item.timeId), 'yyyy-mm-dd hh:nn')}}</p>
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
// import $ from 'jquery'
import { mapState } from 'vuex'
    export default {
       data(){
         return {
            
         }
       },
       computed: mapState({
            roomList: state => {
                return state.touguWorkspaceStore.liveData
            },
            studioList: state => {
                return state.touguSpaceNav.roomData
            }

       }),
        watch:{
           roomList:function(){
           this.$nextTick(function(){
                  this.scrollHistory();   // 这样就能将事件执行在界面渲染之后啦
               })
           }
   },
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
            },
             scrollToBottom() {  
                    this.$nextTick(() => {  
                        var container = document.getElementById('live-global');  
                        container.scrollTop=container.scrollHeight;
                    })  
                },

             scrollHistory() {  
                    this.$nextTick(() => {  
                        var container = document.getElementById('live-global');  
                        container.scrollTop=3024;
                    })  
                } 
       },
 
        mounted(){
             this.$store.dispatch('touguSpaceNav/getStudioInfo',{
                 roomId:this.$route.params.roomId        
            }).then(() => {
            var _this=this;
            var divscroll=_this.$refs.viewBox;
            setInterval(this.$store.dispatch('touguWorkspaceStore/getLiveInfo',{
                 roomId:this.studioList.room_id
             }).then(() => {
                 divscroll.scrollTop=divscroll.scrollHeight;
             })       
             ,5000); 
            // 判断是否加载到顶部         
            divscroll.onscroll=() => {
                var scrollTop=divscroll.scrollTop;
                if(scrollTop===0){
                    // 异步加载历史数据 
                    this.$store.dispatch('touguWorkspaceStore/getHistoryInfo',{
                    roomId:this.studioList.room_id,
                    timeId:this.roomList[0].timeId
                    });
                  } 
               };  
            });
           
   
        }
       

    }
</script>