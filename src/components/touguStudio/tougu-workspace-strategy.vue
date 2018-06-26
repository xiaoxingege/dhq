<style lang='scss' scoped>
    .tougu-workspace-strategy{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow:scroll;
    }
    .editor-insert-stock a{
        font-size: 14px;
    }
    .strategy-title { padding-left:2%; color:#D3D9DD; font-size:24px; }
    .strategy-author { padding-left:2%; height:24px; margin-top:8px; }
    .author-headimg { width:23px; height:24px; float:left; border-radius: 50%}
    .author-name { color:#AFB6BD; font-size:12px; line-height:24px; float:left; margin-left:8px;}
    .split-area { width:85%; height:4px; background:#23272C; margin:8px 0; margin-left:2%;}
    .strategy-item { width:85%; box-sizing:border-box; padding: 0px 2%; border-bottom: 1px solid #23272C;padding-bottom:20px;}
    .item-ctime { color:#AFB6BD; font-size:12px; float:right; padding-top:25px;}
    .strategy-item-content { color:#D3D9DD; font-size:14px;line-height: 22px;padding-top:57px;padding-bottom:25px;padding-left:2%;font-size:14px;font-family:MicrosoftYaHei;}
    .showHidden{height:30px;overflow:hidden;}
    .strategy-item-content p,.editor-img-wrap{margin-top:8px;}
    .strategy-item-collapse { width:100%; height:20px; line-height:20px;}
    .item-collapse { color:#1984EA; float:right; font-size: 12px; padding-top:-30px;cursor:pointer;}
    /* .editor-img-wrap{
        display:none;
    } */
</style>

<template>
    <div class="tougu-workspace-strategy" id="tougu-workspace-strategy" ref="viewBox2">
        <div class="strategy-title">{{strategytips.title}}</div>
        <div class="strategy-author">
            <img class="author-headimg" :src="studioList.headImage"/>
            <div class="author-name">{{studioList.username}}</div>
        </div>
        <div class="split-area"></div>
        <div class="strategy-item" v-for="(item,index) in strategyList">
            <div class="item-ctime">{{dateFormat(new Date(item.ctime), 'yyyy-mm-dd hh:nn')}}</div>
            <div ref="abc" v-html="item.content" @click="checkLink($event)" class='strategy-item-content'>
                 
            </div>
            <div class="strategy-item-collapse">
                <div class="item-collapse" @click="check(index)">点击查看全文</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import native from '../../utils/nativeApi'
    import util from '../../dhq/util'
    export default {
        data(){
            return {
                 num:[]
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
            openStock(stockCode){
            native.openStock({
                stockCode: util.formatterInnercode(stockCode)
            });
            },
             checkLink(e,data) {
                    var _this=this;
                   if(e.target.tagName.toLowerCase() === 'a'){
                        e.preventDefault();
                        var href=e.target.href;
                        var one=href.split('stock/')[1];
                        var two=one.split('.jspa')[0];
                       _this.openStock(two);
                    }
             },   
            
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
             });
            this.$store.dispatch('touguStrategy/getStrategyByTid', {
            tid: this.studioList.vipRoomInfo.tipsId
             })
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
        }
    }
</script>