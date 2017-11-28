<style>
    @import '../../assets/css/base.css';
    * {
        box-sizing: border-box;
        font-family: '微软雅黑';
        font-size: 12px;
    }

    p {
        margin: 0px;
    }

    html,
    body,
    .app {
        height: 100%;
    }
    .strategy-box-wrap{
        width: 100%;
        height:234px;
        padding:5px 0px 0px 5px;
        background: #141518;
    }
    .strategy-box-wrap>div{
        height:100%;
    }
    .strategy-box-wrap>div>div{
        background-color: #181b1f;
        height:100%;
    }
</style>
<template>
   <div style="height:100%;background: #fff;">
       <div class="strategy-box-wrap display-box">
            <div class="box-flex-1">
                <GoldStrategyBox :benchmarkObj='benchmarkObj' :goldStrategyList='goldStrategyList'></GoldStrategyBox>
            </div>
           <div class="box-flex-1">
               <GoldStrategyBox></GoldStrategyBox>
           </div>
           <div class="box-flex-1">
               <GoldStrategyBox></GoldStrategyBox>
           </div>
       </div>
   </div>
</template>
<script type="text/javascript">
    import GoldStrategyBox from 'components/optional-stock/gold-strategy-box'
    export default {
        data(){
            return{
                benchmarkObj: {
                    '000300': '沪深300',
                    '000001': '上证指数',
                    '399001': '深圳成指',
                    '399006': '创业板指',
                    '399005': '中小板指',
                    '000016': '上证50',
                    '399905': '中证500',
                    '399906': '中证800',
                    '000852': '中证1000'
                },
                goldStrategyList:[]
            }
        },
        components:{
            GoldStrategyBox
        },
        watch:{

        },
        computed:{
            strategyNameData: function() {
                const strategyNames = this.$store.state.z3touguIndex.strategyNames
                return strategyNames
            }
        },
        methods:{
            initGoldStrategyList:function () {
                this.$store.dispatch('z3touguIndex/getStrategyName', {
                    sort: this.sort,
                    direction: this.direction,
                    size: this.size
                })
                    .then(() => {
                        this.goldStrategyList = this.strategyNameData
                    })
            }
        },
        mounted(){
             this.initGoldStrategyList()
        }
    }
</script>