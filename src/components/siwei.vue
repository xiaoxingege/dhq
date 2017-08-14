<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .app{
        width:100%;
        height:100%;
    }
    .siwei{
        background:#000;
        width:100%;
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
    .legend{
        color:#fff;
        height:50px;
    }
    .legend ul li{
        float: left;
        width:60px;
        height:20px;
        line-height: 20px;
        text-align: center;
        font-size:12px;
    }
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
                                <select v-model="stockRangeOptions.strategyDefault">
                                    <option v-for="item in userStrategy" :value="item.id">{{item.strategyName}}</option>
                                </select>
                            </span>
                            <span>
                                股票池
                                <select v-model="stockRangeOptions.stockPoolDefault">
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
                                    <option v-for="(val,key) in xDataList" :value="key" :disabled="dimensionOptions.yDefault==='order' && key==='order'">{{val}}</option>
                                </select>
                            </span>
                            <span class="mr-10">
                                Y轴
                                <select ref="yData" v-model="dimensionOptions.yDefault">
                                    <option v-for="(val,key) in xDataList" :value="key" :disabled="dimensionOptions.xDefault==='order' && key==='order'">{{val}}</option>
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
        <div class="legend clearfix">
            <p class="fl">温馨提示：双击鼠标进入个股页面。</p>
            <div class="fr" style="margin-top: 5px;">
                <ul v-if="options.colorDefault==='sw_indu_name'" class="clearfix" style="width:840px;">
                    <li v-for="(item,index) in industryArr" :style="{'background':industryColor[index % 7]}">{{item}}</li>
                </ul>
                <ul v-if="options.colorDefault==='mkt_idx.tcap' || options.colorDefault==='mkt_idx.mktcap'" class="clearfix">
                    <li v-for="(item,index) in marketArr" :style="{'background':volumeColor[index]}">{{item}}亿</li>
                </ul>
                <ul v-if="options.colorDefault==='mkt_idx.volume' || options.colorDefault==='perf_idx.avg_vol_3month'" class="clearfix">
                    <li v-for="(item,index) in volumeArr" :style="{'background':volumeColor[index]}">{{item}}万</li>
                </ul>
                <ul v-if="options.colorDefault==='mkt_idx.rela_volume'" class="clearfix">
                    <li v-for="(item,index) in relaVolume" :style="{'background':volumeColor[index]}">{{item}}</li>
                </ul>
                <ul  class="clearfix">
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.cur_chng_pct'">{{item}}%</li>
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.chng_pct_week'">{{item*2}}%</li>
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_month'">{{item*3}}%</li>
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_3month'">{{item*6}}%</li>
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_6month'">{{item*8}}%</li>
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_year'">{{item*9}}%</li>
                    <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_year_sofar'">{{item*8}}%</li>
                </ul>
                <ul v-if="options.colorDefault==='fcst_idx.rating_syn'" class="clearfix">
                    <li v-for="(item,index) in analystPoint" :style="{'background':analystColor[index]}">{{item}}</li>
                </ul>
            </div>
        </div>
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
          analystPoint: Data.pointArr,
          quoteChange: Data.quoteChange,
          marketArr: Data.marketArr,
          volumeArr: Data.volumeArr,
          industryArr: Data.industryArr,
          relaVolume: Data.relaVolume,
          industryColor: Data.industryColor,
          volumeColor: Data.volumeColor,
          chgColor: Data.chgColor,
          analystColor: Data.AnalystColor,
          tmpId: 'demoTmp1',
          options: {
            xDefault: 'mkt_idx.pe_ttm',
            yDefault: 'fin_idx.sale',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'perf_idx.chng_pct_month',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: ''
          },
          dimensionOptions: {
            xDefault: 'mkt_idx.pe_ttm',
            yDefault: 'fin_idx.sale',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'perf_idx.chng_pct_month'
          },
          stockRangeOptions: {
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: ''
          },
          xData: '市盈率(TTM)',
          yData: '营业收入',
          sizeData: '流通市值',
          colorData: '近1月涨跌幅',
          templateList: {
            'demoTmp1': {
              name: '模板1',
              options: {
                xDefault: 'mkt_idx.pe_ttm',
                yDefault: 'fin_idx.sale',
                sizeDefault: 'mkt_idx.mktcap',
                colorDefault: 'mkt_idx.chng_pct_week',
                indexRangeDefault: '',
                industryRangeDefault: '',
                marketValueDefault: 'gpltsz_all',
                historyValueRangeDefault: 'lscjl_all'
              }
            },
            'demoTmp2': {
              name: '模板2',
              options: {
                xDefault: 'fin_idx.eps_qua_rr',
                yDefault: 'mkt_idx.pe_ttm',
                sizeDefault: 'mkt_idx.mktcap',
                colorDefault: 'mkt_idx.chng_pct_week',
                indexRangeDefault: '',
                industryRangeDefault: '',
                marketValueDefault: 'gpltsz_all',
                historyValueRangeDefault: 'lscjl_all'
              }
            },
            'demoTmp3': {
              name: '模板3',
              options: {
                xDefault: 'mkt_idx.chng_pct_week',
                yDefault: 'mkt_idx.rela_ma20',
                sizeDefault: 'mkt_idx.mktcap',
                colorDefault: 'mkt_idx.chng_pct_week',
                indexRangeDefault: '',
                industryRangeDefault: '',
                marketValueDefault: 'gpltsz_all',
                historyValueRangeDefault: 'lscjl_all'
              }
            },
            'demoTmp4': {
              name: '模板4',
              options: {
                xDefault: 'mkt_idx.chng_pct_week',
                yDefault: 'mkt_idx.rela_ma20',
                sizeDefault: 'mkt_idx.mktcap',
                colorDefault: 'sw_indu_name',
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
          this.xData = this.xDataList[this.templateList[tmpValue].options.xDefault]
          this.yData = this.xDataList[this.templateList[tmpValue].options.yDefault]
          this.sizeData = this.bubbleSizeList[this.templateList[tmpValue].options.sizeDefault]
          this.colorData = this.bubbleColorList[this.templateList[tmpValue].options.colorDefault]
          this.dimensionOptions.xDefault = this.templateList[tmpValue].options.xDefault
          this.dimensionOptions.yDefault = this.templateList[tmpValue].options.yDefault
          this.dimensionOptions.sizeDefault = this.templateList[tmpValue].options.sizeDefault
          this.dimensionOptions.colorDefault = this.templateList[tmpValue].options.colorDefault
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
