<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .siwei{
        background:#000;
        padding-left:17px;
        padding-top: 6px;
        width:1280px;
        height:806px;
    }
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
    .mr-10{
        margin-right: 10px;
    }
    .mr-15{
        margin-right: 15px;
    }
    .mt-20{
        margin-top: 20px;
    }
    .mt-40{
        margin-top: 40px;
    }
    .mt-10{
        margin-top: 10px;
    }
</style>
<template>
    <div class="siwei">
        <div class="bubbles-bar clearfix">
            <div class="template fl mr-20">
                推荐分析维度：
                <select @change="changeTmp($event)">
                    <option v-for="(tmp,key) in templateList" :value="key">{{tmp.name}}</option>
                </select>
            </div>
            <div class="fl">
                <span class="mr-20">X轴：<span>{{xData}}</span></span>
                <span class="mr-20">Y轴：<span>{{yData}}</span></span>
                <span class="mr-20">气泡大小：<span>{{sizeData}}</span></span>
                <span class="mr-20">气泡颜色：<span>{{colorData}}</span></span>
            </div>
            <div class="fl">
                <button @click="showDialog">股票范围</button>
                <button @click="showSelfRange">自定义</button>
            </div>
            <div class="fl">
                <span class="times"></span>
            </div>
            <div>
                <Dialog v-on:toHideDialog="hideDialog" v-if="showStockRangeDialog" title="股票范围">
                    <div slot="content" class="dialogMain clearfix" >
                        <div class="mt-20">
                            <span class="mr-10">
                                指数
                                <select v-model="stockRangeOptions.indexRangeDefault">
                                    <option v-for="(val,key) in indexRangeList" :value="key">{{val}}</option>
                                </select>
                            </span>
                            <span class="mr-10">
                                 行业
                                 <select v-model="stockRangeOptions.industryRangeDefault">
                                    <option v-for="(val,key) in industryRangeList" :value="key">{{val}}</option>
                                </select>
                            </span>
                            <span class="mr-10">
                                主题
                                <input type="text" value="全部"/>
                            </span>
                            <span>
                                流通市值
                                <select v-model="stockRangeOptions.marketValueDefault">
                                    <option v-for="(val,key) in marketValueList" :value="key">{{val}}</option>
                                </select>
                            </span>
                        </div>
                        <div class="mt-10">
                            <span class="mr-15">
                                历史成交量
                                <select v-model="stockRangeOptions.historyValueRangeDefault">
                                    <option v-for="(val,key) in historyValueList" :value="key">{{val}}</option>
                                </select>
                            </span>
                            <span class="mr-15">
                                筛股策略
                                <select>
                                    <option v-for="item in userStrategy" :value="item.id">{{item.strategyName}}</option>
                                </select>
                            </span>
                            <span>
                    股票池
                    <select>
                         <option v-for="item in stockPool" :value="item.poolId">{{item.poolName}}</option>
                    </select>
                </span>
                        </div>
                    </div>
                    <div slot="footer" class="mt-20">
                        <button class="sureBtn mr-20" @click="showSelectData">确定</button>
                        <button class="cancleBtn" @click="hideDialog">取消</button>
                    </div>
                </Dialog>
                <Dialog v-on:toHideDialog="hideDialog" v-if="showSelfRangeDialog" title="自定义维度">
                    <div slot="content" class="dialogMain clearfix mt-40">
                        <div>
                            <span class="mr-10">
                                X轴
                                <select ref="xData" v-model="dimensionOptions.xDefault">
                                    <option v-for="(val,key) in xDataList" :value="key">{{val}}</option>
                                </select>
                            </span>
                            <span class="mr-10">
                                Y轴
                                <select ref="yData" v-model="dimensionOptions.yDefault">
                                    <option v-for="(val,key) in xDataList" :value="key">{{val}}</option>
                                </select>
                            </span>
                            <span class="mr-10">
                                气泡大小
                                <select ref="bubbleSize" v-model="dimensionOptions.sizeDefault">
                                    <option v-for="(val,key) in bubbleSizeList" :value="key">{{val}}</option>
                                </select>
                            </span>
                            <span>
                                气泡颜色
                                <select ref="bubbleColor" v-model="dimensionOptions.colorDefault">
                                    <option v-for="(val,key) in bubbleColorList" :value="key">{{val}}</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div slot="footer" class="mt-20">
                        <button class="sureBtn mr-20" @click="showSelectData">确定</button>
                        <button class="cancleBtn" @click="hideDialog">取消</button>
                    </div>
                </Dialog>
            </div>
        </div>
        <bubbles :options="options"></bubbles>
    </div>
</template>
<script>
    import Dialog from 'components/dialog'
    import * as Data from '../z3tougu/constant/siwei.js'
    import Bubbles from 'components/bubbles'

    export default{
      data () {
        return {
          showStockRangeDialog: false,
          showSelfRangeDialog: false,
          xDataList: Data.xSelectData,
          bubbleSizeList: Data.bubbleSizeSelect,
          bubbleColorList: Data.bubbleColorSelect,
          indexRangeList: Data.indexRange,
          industryRangeList: Data.industryRange,
          marketValueList: Data.marketValueRange,
          historyValueList: Data.historyValueRange,
          tmpId: 'demoTmp1',
          options: {
            xDefault: 'sw_indu_name',
            yDefault: 'mkt_idx.mktcap',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'perf_idx.chng_pct_month',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all'
          },
          dimensionOptions: {
            xDefault: 'sw_indu_name',
            yDefault: 'mkt_idx.mktcap',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'perf_idx.chng_pct_month'
          },
          stockRangeOptions: {
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all'
          },
          xData: '行业',
          yData: '涨跌幅',
          sizeData: '流通市值',
          colorData: '近1月涨跌幅',
          templateList: {
            'demoTmp1': {
              name: '流通市值与近期股价关系1',
              options: {
                xDefault: 'sw_indu_name',
                yDefault: 'mkt_idx.cur_chng_pct',
                sizeDefault: 'mkt_idx.mktcap',
                colorDefault: 'perf_idx.chng_pct_month',
                indexRangeDefault: '',
                industryRangeDefault: '',
                marketValueDefault: 'gpltsz_all',
                historyValueRangeDefault: 'lscjl_all'
              }
            },
            'demoTmp2': {
              name: '流通市值与近期股价关系2',
              options: {
                xDefault: 'order',
                yDefault: 'chi_spel',
                sizeDefault: 'mkt_idx.mktcap',
                colorDefault: 'perf_idx.chng_pct_month',
                indexRangeDefault: '',
                industryRangeDefault: '',
                marketValueDefault: 'gpltsz_all',
                historyValueRangeDefault: 'lscjl_all'
              }
            }
          }

        }
      },
      components: {
        Bubbles,
        Dialog
      },
      methods: {
        showDialog () {
          this.showStockRangeDialog = true
        },
        hideDialog () {
          this.showStockRangeDialog = false
          this.showSelfRangeDialog = false
        },
        showSelfRange () {
          this.showSelfRangeDialog = true
        },
        showSelectData () {
          this.xData = this.xDataList[this.dimensionOptions.xDefault]
          this.yData = this.xDataList[this.dimensionOptions.yDefault]
          this.sizeData = this.options.sizeDefault === '' ? '常规' : this.bubbleSizeList[this.dimensionOptions.sizeDefault]
          this.colorData = this.options.colorDefault === '' ? '常规' : this.bubbleColorList[this.dimensionOptions.colorDefault]
          this.options = { ...this.dimensionOptions, ...this.stockRangeOptions }
    
          this.showStockRangeDialog = false
          this.showSelfRangeDialog = false
        },
        changeTmp (e) {
          const tmpValue = e.target.value
          this.options = this.templateList[tmpValue].options
        }
      },
      computed: {
        stockPool: function () {
          return this.$store.state.bubbles.stockPool
        },
        userStrategy: function () {
          return this.$store.state.bubbles.userStrategy
        }
      },
      mounted () {
        const userId = this.$cookie.get('userId')
        console.log(userId)
        this.$store.dispatch('bubbles/getStockPool', {})
        this.$store.dispatch('bubbles/getStrategy', {})
  }
    }
</script>
