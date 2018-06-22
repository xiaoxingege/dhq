<style>
    .tougu-workspace-strategy{
    position: fixed;
    width: 100%;
    height: 80%;
    overflow:scroll;
    }
    .editor-insert-stock a{
        font-size: 14px;
    }
    .strategy-title { padding-left:2%; color:#D3D9DD; font-size:24px; }
    .strategy-author { padding-left:2%; height:24px; margin-top:8px; }
    .author-headimg { width:23px; height:24px; float:left; border-radius: 50%}
    .author-name { color:#AFB6BD; font-size:12px; line-height:24px; float:left; margin-left:8px;}
    .split-area { width:96%; height:4px; background:#23272C; margin:8px auto 0; }
    .strategy-item { width:92%; margin:20px auto 0; box-sizing:border-box; padding: 20px 2%; border-bottom: 1px solid #23272C}
    .item-ctime { color:#AFB6BD; font-size:12px; float:left }
    .strategy-item-content { color:#D3D9DD; font-size:14px;line-height: 22px;}
    .strategy-item-collapse { width:100%; height:20px; line-height:20px; margin-top:13px; }
    .item-collapse { color:#1984EA; float:right; font-size: 12px; }
</style>

<template>
    <div class="tougu-workspace-strategy" id="tougu-workspace-strategy" ref="viewBox2">
        <div class="strategy-title">{{strategytips.title}}</div>
        <div class="strategy-author">
            <img class="author-headimg" :src="studioList.headImage"/>
            <div class="author-name">{{studioList.username}}</div>
        </div>
        <div class="split-area"></div>
        <div class="strategy-item" v-for="item in strategyList">
            <div class="strategy-item-content" v-html="item.content">
                
            </div>
            <div class="strategy-item-collapse">
                <div class="item-ctime">{{dateFormat(new Date(item.ctime), 'yyyy-mm-dd hh:nn')}}</div>
                <div class="item-collapse">点击查看全文</div>
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
            strategytips: state => {
                return state.touguStrategy.strategytips
            },
            strategyList: state => {
                return state.touguStrategy.strategyList
            },
            studioList: state => {
                return state.touguSpaceNav.roomData
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
             this.$store.dispatch('touguSpaceNav/getStudioInfo',{
                 roomId:this.$route.params.roomId      
             }).then(() => {
                this.$store.dispatch('touguStrategy/getStrategyByTid', {
                tid: this.studioList.vipRoomInfo.tipsId
                }).then(() => {
                        var _this=this;
                        var divscroll=_this.$refs.viewBox2;
                        divscroll.onscroll=() => {
                        if(divscroll.scrollHeight-divscroll.scrollTop===divscroll.clientHeight){
                               this.$store.dispatch('touguStrategy/getStrategyByCid', {
                                tid: _this.studioList.vipRoomInfo.tipsId,
                                cid: _this.strategyList[_this.strategyList.length-1].id
                           });
                        } 
                    };  
                });
               
             });
            
        }
    }
</script>