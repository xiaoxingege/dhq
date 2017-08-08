<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .bubbles-bar{
        font-size:12px;
        color:#fff;
        height:32px;
        line-height: 32px;
    }
    .template select{
        color:#2388da;
        background:#000;
        border:0;
    }
    .template select:focus { outline: none; }
    button{
        height:20px;
        line-height: 20px;
        border:1px solid #0088E1;
        color:#0088E1;
        padding:0 15px;
        background: #000;
        border-radius: 3px;
        cursor: pointer;
    }
    .mr-20{
        margin-right: 20px;
    }
    .mt-20{
        margin-top: 20px;
    }
</style>
<template>
    <div class="bubbles-bar clearfix">
        <div class="template fl mr-20">
            推荐分析维度：
            <select @chnage="showSelfRange($event)">
                <option>流通市值与近期股价关系</option>
            </select>
        </div>
        <div class="fl">
            <span class="mr-20">X轴：<span></span></span>
            <span class="mr-20">Y轴：<span></span></span>
            <span class="mr-20">气泡大小：<span></span></span>
            <span class="mr-20">气泡颜色：<span></span></span>
        </div>
        <div class="fl">
            <button @click="showDialog">股票范围</button>
            <button @click="showSelfRange">自定义</button>
        </div>
        <div class="fl">
            <span class="times"></span>
        </div>
        <div>

        <Dialog v-on:hideDialogToFather="toHideDialog" v-if="showStockRangeDialog" title="股票范围">
            <div class="dialogMain clearfix" >
                <div class="mt-20">
                    <span>
                    指数
                    <select></select>
                </span>
                    <span>
                    行业
                    <select></select>
                </span>
                    <span>
                   主题
                    <select></select>
                </span>
                    <span>
                    流通市值
                    <select></select>
                </span>
                </div>
                <div class="mt-20">
                    <span>
                    历史成交量
                    <select></select>
                </span>
                    <span>
                    筛股策略
                    <select></select>
                </span>
                    <span>
                    股票池
                    <select></select>
                </span>
                </div>
            </div>
        </Dialog>
        <Dialog v-on:hideDialogToFather="toHideDialog" v-if="showSelfRangeDialog" title="自定义维度">
            <div class="dialogMain clearfix">
                <div>
                    <span>
                    X轴
                    <select></select>
                </span>
                    <span>
                    Y轴
                    <select></select>
                </span>
                    <span>
                    气泡大小
                    <select></select>
                </span>
                    <span>
                    气泡颜色
                    <select></select>
                </span>
                </div>
            </div>
        </Dialog>
        </div>
    </div>
</template>
<script>
    import Dialog from 'components/dialog'
    export default{
      data () {
        return {
          showStockRangeDialog: false,
          showSelfRangeDialog: false
        }
      },
      components: {
        Dialog
      },
      methods: {
        showDialog () {
          this.showStockRangeDialog = true
        },
        toHideDialog (data) {
          this.showStockRangeDialog = data
          this.showSelfRangeDialog = data
        },
        showSelfRange (e) {
          this.showSelfRangeDialog = true
        }
      },
      computed: {

      },
      mounted () {

      }
    }

</script>
