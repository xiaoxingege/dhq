<style lang='scss'>
    .live-global {
        color: white;
        width: 100%;
        height: 100%;
        overflow-y: scroll;
    }
    
    .liveModel {
        width: 92%;
        padding: 30px 0px;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #23272c;
        margin: 0 auto;
    }
    
    .headImage {
        width: 44px;
        height: 45px;
    }
    
    .headImage img {
        width: 44px;
        height: 45px;
        border-radius: 50%;
    }
    
    .live-right {
        width: 95%;
        margin-left: 20px;
    }
    
    .live-time {
        height: 10px;
        font-size: 12px;
        font-family:'Microsoft YaHei';
        color: rgba(175, 182, 189, 1);
    }
    
    .live-content {
        max-width: 80% !important;
        display: inline-block;
        background: rgba(48, 53, 59, 1);
        border-radius: 20px;
        margin-top: 18px;
        padding: 21px 26px;
        color: #d3d9dd;
        font-size: 14px;
        line-height: 22px;
        word-wrap: break-word;
    }
    
    .QP {
        width: 23px;
        height: 18px;
        float: left;
        margin-top: 14px;
        margin-right:-10px;
    }
    
    .live-content .editor-insert-stock a,
    .live-content a {
        font-size: 14px !important;
    }
    
    .live-content p {
        color: #d3d9dd !important;
    }
    
    .live-content p a,
    .editor-insert-stock a,
    .live-content a,.live-content span a {
        text-decoration: underline !important;
        color: #1984ea !important;;
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
                <p class="live-content" v-html="item.content" @click="checkLink($event,item)">
                </p> 
               </div> 
             </div>
        </div>
    </div>
</template>

<script>
    import native from '../../utils/nativeApi';
    import util from '../../dhq/util';
    // import $ from 'jquery'
    import {
        mapState
    } from 'vuex';
    export default {
        data() {
            return {
                removeHeight: 0
            };
        },
        computed: {
            ...mapState({
                roomList: state => {
                    return state.touguWorkspaceStore.liveData;
                },
                studioList: state => {
                    return state.touguSpaceNav.roomData;
                }
            })
        },
        methods: {
            openStock(stockCode) {
                native.openStock({
                    stockCode: util.formatterInnercode(stockCode)
                });
            },
            getlivelist() {
                var _this = this;
                this.$store
                    .dispatch('touguWorkspaceStore/getLiveInfo', {
                        roomId: this.studioList.room_id
                    }).then(() => {
                        _this.scrollToBottom()
                    });
            },
            pulllivelist() {
                this.$store
                    .dispatch('touguWorkspaceStore/getPullLiveInfo', {
                        timeId: this.roomList[this.roomList.length - 1].timeId,
                        roomId: this.studioList.room_id
                    });
            },
            leadingZero: function(num, size) {
                var s = '000000000' + num;
                return s.substr(s.length - size);
            },
            dateFormat: function(date, formatString) {
                let vm = this;

                if (!date.valueOf()) {
                    return '';
                }

                var d = date;

                return formatString.replace(/(yyyy|mm|dd|hh|nn|ss)/gi, function($1) {
                    switch ($1.toLowerCase()) {
                        case 'yyyy':
                            return d.getFullYear();
                        case 'mm':
                            return vm.leadingZero(d.getMonth() + 1, 2);
                        case 'dd':
                            return vm.leadingZero(d.getDate(), 2);
                        case 'hh':
                            return vm.leadingZero(d.getHours(), 2);
                        case 'nn':
                            return vm.leadingZero(d.getMinutes(), 2);
                        case 'ss':
                            return vm.leadingZero(d.getSeconds(), 2);
                    }
                });
            },
            scrollToBottom() {
                this.$nextTick(() => {
                    var consultationContent = this.$refs.viewBox;
                    consultationContent.scrollTop = consultationContent.scrollHeight;
                })
            },
            scrollHistory() {
                this.$nextTick(() => {
                    var container = document.getElementById('live-global');
                    container.scrollTop = this.removeHeight;
                });
            },
            checkLink(e, data) {
                var _this = this;
                if (e.target.tagName.toLowerCase() === 'a') {
                    e.preventDefault();
                    var href = e.target.href;
                    if (href.indexOf('tips') !== -1) {
                        this.$store.commit('touguWorkspaceStore/setSelectedTabIndex', 2);
                    } else if (href.indexOf('stock') !== -1) {
                        var one = href.split('stock/')[1];
                        var two = one.split('.jspa')[0];
                        _this.openStock(two);
                    }
                }
            }
        },
        mounted() {
            this.scrollToBottom();
            this.$store.dispatch('touguSpaceNav/getStudioInfo', {
                roomId: this.$route.params.roomId
            }).then(() => {
                var _this = this;
                var divscroll = _this.$refs.viewBox;
                _this.getlivelist();
                var timeInterval;
                timeInterval = setInterval(() => {
                    this.pulllivelist();
                }, 5000);
                // 每次进来之后及时清除一下计时器 然后再次重新渲染
                _this.$once('hook:beforeDestroy', () => {
                    clearInterval(timeInterval);
                });
                // 判断是否加载到顶部
                divscroll.onscroll = () => {
                    var scrollTop = divscroll.scrollTop;
                    if (scrollTop === 0) {
                        var OriginalScrollHeight = divscroll.scrollHeight;
                        // 异步加载历史数据
                        this.$store.dispatch('touguWorkspaceStore/getHistoryInfo', {
                            roomId: this.studioList.room_id,
                            timeId: this.roomList[0].timeId
                        }).then(() => {
                            var nowScrollHeight = divscroll.scrollHeight;
                            _this.removeHeight = nowScrollHeight - OriginalScrollHeight;
                            _this.scrollHistory();
                        });
                    }
                };
            });
        }
    };
</script>