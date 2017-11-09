<style lang="scss" scoped>
@import '../assets/css/base.css';
.app {
    width: 100%;
    height: 100%;
}
.siwei {
    background: #000;
    width: 100%;
    min-height: 690px;
    min-width: 1190px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 5px;
}
.bubbles-bar {
    font-size: 12px;
    color: #c9d0d7;
    height: 32px;
    line-height: 32px;
}

.bubbles-bar select {
    width: 185px;
    border: 0;
    height: 22px;
    font-size: 12px;
    border-radius: 3px;
    line-height: 22px;
    padding-left: 10px;
    -webkit-appearance: none;
    background: url("../assets/images/select-arrow.png") no-repeat scroll right center transparent;
    background-position-x: 95%;
    color: #c9d0d7;
    background-color: #1A1D23;
}

.template select {
    color: #1984ea;
    background-color: #23272C;
}
.template select option {
    background: #cccfd9;
    color: #666;
    border-radius: 3px;
}
.template select:focus {
    outline: none;
}
.legend {
    color: #fff;
    min-height: 50px;
}
.legend ul li {
    float: left;
    width: 60px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    font-size: 12px;
}
.masks {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
}
.themeList {
    width: 90%;
    background: #d6d6d6;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    -moz-transform: translate3d(-50%, -50%, 0);
    -ms-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0);
    height: 600px;
    overflow: hidden;
    padding-bottom: 30px;
}

.closeTheme {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    line-height: 35px;
    text-align: center;
    cursor: pointer;
    font-size: 27px;
}
.themeTitle {
    height: 35px;
    line-height: 35px;
    color: #666;
    font-size: 18px;
    background: #23272C;
    padding-left: 20px;
}
button {
    height: 20px;
    line-height: 20px;
    border: 1px solid #0088E1;
    color: #0088E1;
    padding: 0 15px;
    background: #000;
    border-radius: 3px;
    cursor: pointer;
}
.tempDesc {
    font-size: 12px;
    line-height: 24px;
}

.weiduRange {
    border-bottom: 1px solid #949da4;
    margin-top: 20px;
    padding-bottom: 30px;
}

.dialogMain {
    color: #666;
}

.stockRange-slect > div > span,
.weiduRange > div > span {
    width: 33.3333%;
}

.clearTheme {
    display: inline-block;
    height: 28px;
    line-height: 28px;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    font-size: 20px;
    cursor: pointer;
    z-index: 999999;
}

.bubbles {
    background: #1A1D23;
}

.bubbles-select {
    /* width:17%;*/
    width: 210px;
    color: #c9d0d7;
    background: #1A1D23;
    font-size: 12px;
    padding-left: 10px;
    box-sizing: border-box;
}

.bubbles-select > div {
    width: 85%;
}

.bubbles-select p {
    line-height: 34px;
}

.bubbles-select select,
input {
    height: 28px;
    width: 100%;
    color: #c9d0d7;
    border: 1px solid #393F48;
    padding-left: 8px;
    box-sizing: border-box;
}

.bubbles-select input {
    font-size: 12px;
    padding-left: 12px;
    background: #1E2329;
}

.bubbles-select select {
    -webkit-appearance: none;
    background: url("../assets/images/select-arrow.png") no-repeat scroll right center transparent;
    background-position-x: 95%;
    background-color: #1E2329;
}

.changeXY {
    position: absolute;
    top: 48px;
    right: -21px;
    cursor: pointer;
}

.bubbles-chart {
    width: 95%;
}

.defaultSet {
    cursor: pointer;
}
@media only screen and (min-height: 800px) and (max-height: 1024px) {
    .bubbles-select p {
        line-height: 45px;
    }

    .changeXY {
        position: absolute;
        top: 65px;
        right: -21px;
    }

    .bubbles-select {
        padding-left: 15px;
    }

    .bubbles-select > div {
        width: 88%;
    }

    .bubbles-select {
        width: 210px;
    }

    .bubbles-chart {
        width: 87%;
    }
}
</style>
<template>
<div class="siwei">
  <div class="bubbles-bar clearfix">
    <div class="template fl mr-30">
      常用推荐：
      <select @change="changeTmp($event)" v-model="tmpId">
                <option v-for="(tmp,key) in templateList" :value="key" @click="showOptionValue(this)">{{tmp.name}}
                </option>
            </select>
    </div>
    <div class="fl mr-30">
      筛股策略：
      <select v-model="stockRangeOptions.strategyDefault" @change="showSelectData">
                <option v-for="item in userStrategy" :value="item.id">{{item.strategyName}}</option>
                <option value="">请选择</option>
            </select>
    </div>
    <div class="fl mr-30">
      股票池：
      <select v-model="stockRangeOptions.stockPoolDefault" @change="showSelectData">
                <option v-for="item in stockPool" :value="item.poolId">{{item.poolName}}</option>
                <option value="">请选择</option>
            </select>
    </div>
    <div class="fl defaultSet" @click="defaultSet">默认设置</div>
    <div class="fr">
      <span class="times">{{currentTime}}</span>
    </div>
    <!--<div>-->
    <!--<Dialog v-on:toHideDialog="hideDialog" v-if="showStockRangeDialog" title="自定义">-->
    <!--<div slot="content" class="dialogMain clearfix">-->
    <!--<div class="weiduRange">-->
    <!--<div style="text-align: left">坐标维度：</div>-->
    <!--<div class="display-box mb-20">-->
    <!--<span style="display: block" class="box-flex-1 clearfix">-->
    <!--<div class="fr">-->
    <!--X轴-->
    <!--<select ref="xData" v-model="dimensionOptions.xDefault">-->
    <!--<option v-for="(val,key) in xDataList" :value="key"-->
    <!--:style="{display:((dimensionOptions.yDefault==='order' || dimensionOptions.yDefault==='sw_indu_name' || dimensionOptions.yDefault==='chi_spel') && key==='order') === true ? 'none' : 'block'}">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--<span style="display: block" class="box-flex-1 clearfix">-->
    <!--<div class="fr">-->
    <!--Y轴-->
    <!--<select ref="yData" v-model="dimensionOptions.yDefault">-->
    <!--<option v-for="(val,key) in xDataList" :value="key"-->
    <!--:style="{display:((dimensionOptions.xDefault==='order' || dimensionOptions.xDefault==='sw_indu_name' || dimensionOptions.xDefault==='chi_spel') && key==='order') === true ? 'none' : 'block'}">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--<span style="display: block" class="box-flex-1 clearfix">-->
    <!--<div class="fr">-->
    <!--气泡大小-->
    <!--<select ref="bubbleSize" v-model="dimensionOptions.sizeDefault">-->
    <!--<option v-for="(val,key) in bubbleSizeList" :value="key">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--</div>-->
    <!--<div>-->
    <!--<span style="display: block" class="clearfix">-->
    <!--<div class="fr">-->
    <!--气泡颜色-->
    <!--<select ref="bubbleColor" v-model="dimensionOptions.colorDefault">-->
    <!--<option v-for="(val,key) in bubbleColorList" :value="key">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="stockRange">-->
    <!--<div class="mt-20" style="text-align: left">股票范围：</div>-->
    <!--<div class="stockRange-slect">-->
    <!--<div class="mt-10 display-box">-->
    <!--<span style="display: block" class="box-flex-1 clearfix">-->
    <!--<div class="fr">-->
    <!--指数-->
    <!--<select v-model="stockRangeOptions.indexRangeDefault">-->
    <!--<option v-for="(val,key) in indexRangeList" :value="key">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--<span style="display: block" class="box-flex-1 clearfix">-->
    <!--<div class="fr">-->
    <!--行业-->
    <!--<select v-model="stockRangeOptions.industryRangeDefault">-->
    <!--<option v-for="item in industryRangeList" :value="item.code">{{item.name}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--<span style="display: block" class="box-flex-1 clearfix">-->
    <!--<div class="fr" style="position: relative;">-->
    <!--主题-->
    <!--<input v-model="stockRangeOptions.topic" style="cursor: pointer" type="hidden" value=""-->
    <!--readonly/>-->
    <!--<input ref="themeV" @click="showTheme()" style="cursor: pointer" type="text" :value="topicName"-->
    <!--readonly/>-->
    <!--<span v-if="topicName !== '全部'" @click="clearTheme" class="clearTheme">×</span>-->
    <!--</div>-->
    <!--</span>-->
    <!--</div>-->
    <!--<div class="mt-20 display-box">-->
    <!--<span style="display: block" class="box-flex-1">-->
    <!--<div class="fr">-->
    <!--流通市值-->
    <!--<select v-model="stockRangeOptions.marketValueDefault">-->
    <!--<option v-for="(val,key) in marketValueList" :value="key">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--<span style="display: block" class="box-flex-1">-->
    <!--<div class="fr">-->
    <!--历史成交量-->
    <!--<select v-model="stockRangeOptions.historyValueRangeDefault">-->
    <!--<option v-for="(val,key) in historyValueList" :value="key">{{val}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--<span style="display: block" class="box-flex-1">-->
    <!--<div class="fr">-->
    <!--筛股策略-->
    <!--<select v-model="stockRangeOptions.strategyDefault">-->
    <!--<option v-for="item in userStrategy" :value="item.id">{{item.strategyName}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--</div>-->
    <!--<div class="mt-20 display-box">-->

    <!--<span style="display: block" class="clearfix">-->
    <!--<div class="fr">-->
    <!--股票池-->
    <!--<select v-model="stockRangeOptions.stockPoolDefault">-->
    <!--<option v-for="item in stockPool" :value="item.poolId">{{item.poolName}}</option>-->
    <!--</select>-->
    <!--</div>-->
    <!--</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div slot="footer" class="mt-20 mb-20">-->
    <!--<button class="sureBtn mr-20" @click="showSelectData">确定</button>-->
    <!--<button class="cancleBtn" @click="hideDialog">取消</button>-->
    <!--</div>-->
    <!--</Dialog>-->
    <!--</div>-->
  </div>
  <div class="bubbles display-box">
    <div class="bubbles-select ">
      <div class="mb-15 pb-30" style="position: relative; border-bottom: 1px solid #2B2D34;">
        <div class="scatterX">
          <p>X轴</p>
          <div>
            <select ref="xData" v-model="dimensionOptions.xDefault" @change="showSelectData">
                            <option v-for="(val,key) in xDataList" :value="key"
                                    :style="{display:((dimensionOptions.yDefault==='order' || dimensionOptions.yDefault==='sw_indu_name' || dimensionOptions.yDefault==='chi_spel') && key==='order') === true ? 'none' : 'block'}">
                                {{val}}
                            </option>
                        </select>
          </div>
        </div>
        <div class="scatterY">
          <p>Y轴</p>
          <div>
            <select ref="yData" v-model="dimensionOptions.yDefault" @change="showSelectData">
                            <option v-for="(val,key) in xDataList" :value="key"
                                    :style="{display:((dimensionOptions.xDefault==='order' || dimensionOptions.xDefault==='sw_indu_name' || dimensionOptions.xDefault==='chi_spel') && key==='order') === true ? 'none' : 'block'}">
                                {{val}}
                            </option>
                        </select>
          </div>
        </div>
        <div class="scatterSize">
          <p>气泡大小</p>
          <div>
            <select ref="bubbleSize" v-model="dimensionOptions.sizeDefault" @change="showSelectData">
                            <option v-for="(val,key) in bubbleSizeList" :value="key">{{val}}</option>
                        </select>
          </div>
        </div>
        <div class="scatterColor">
          <p>气泡颜色</p>
          <div>
            <select ref="bubbleColor" v-model="dimensionOptions.colorDefault" @change="showSelectData">
                            <option v-for="(val,key) in bubbleColorList" :value="key">{{val}}</option>
                        </select>
          </div>
        </div>
        <img class="changeXY" @click="changeXY" src="../assets/images/scatterChangeXY.png">
      </div>
      <div class="range">
        <!--指数-->
        <div>
          <p>指数</p>
          <div>
            <select v-model="stockRangeOptions.indexRangeDefault" @change="showSelectData">
                            <option v-for="(val,key) in indexRangeList" :value="key">{{val}}</option>
                        </select>
          </div>
        </div>
        <!--行业-->
        <div>
          <p>行业</p>
          <div>
            <select v-model="stockRangeOptions.industryRangeDefault" @change="showSelectData">
                            <option v-for="item in industryRangeList" :value="item.code">{{item.name}}</option>
                        </select>
          </div>
        </div>
        <!--主题-->
        <div>
          <p>主题</p>
          <div style="position: relative;">
            <input v-model="stockRangeOptions.topic" style="cursor: pointer" type="hidden" value="" readonly/>
            <input ref="themeV" @click="showTheme()" style="cursor: pointer" type="text" :value="topicName" readonly/>
            <span v-if="topicName !== '全部'" @click="clearTheme" class="clearTheme">×</span>
          </div>
        </div>
        <!--流通市值-->
        <div>
          <p>流通市值</p>
          <div>
            <select v-model="stockRangeOptions.marketValueDefault" @change="showSelectData">
                            <option v-for="(val,key) in marketValueList" :value="key">{{val}}</option>
                        </select>
          </div>
        </div>
        <!--历史成交量-->
        <div>
          <p>历史成交量</p>
          <div>
            <select v-model="stockRangeOptions.historyValueRangeDefault" @change="showSelectData">
                            <option v-for="(val,key) in historyValueList" :value="key">{{val}}</option>
                        </select>
          </div>
        </div>
      </div>
    </div>
    <div class="bubbles-chart box-flex-1">
      <bubbles :options="options" v-on:changeOptions="changeOptionsInerCode"></bubbles>
    </div>
  </div>
  <!--图例-->
  <div class="legend clearfix">
    <p v-if="tmpId !== 'demoTmp0'" class="fl tempDesc" :style="{width: colorData==='行业'? '28%' :'50%'}">
      模板说明：{{templateList[tmpId].explain}}</p>
    <p v-if="tmpId === 'demoTmp0'" class="fl tempDesc" :style="{width: colorData==='行业'? '28%' :'50%'}">
      温馨提示：{{templateList[tmpId].explain}}</p>
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
      <ul class="clearfix">
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.cur_chng_pct'">{{item}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='mkt_idx.chng_pct_week'">{{item*2}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_month'">{{item*3}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_3month'">{{item*6}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_6month'">{{item*8}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_year'">{{item*9}}%
        </li>
        <li v-for="(item,index) in quoteChange" :style="{'background':chgColor[index]}" v-if="options.colorDefault==='perf_idx.chng_pct_year_sofar'">{{item*8}}%
        </li>
      </ul>
      <ul v-if="options.colorDefault==='fcst_idx.rating_syn'" class="clearfix">
        <li v-for="(item,index) in analystPoint" :style="{'background':analystColor[index]}">{{item}}</li>
      </ul>
    </div>
  </div>
  <!--主题列表-->
  <div class="masks" v-show="isShowTheme">
    <div class="themeList">
      <div class="themeTitle clearfix">
        <span class="fl">主题列表</span>
        <span class="closeTheme" @click="closeTheme()">×</span>
      </div>
      <ThemeSortAz v-on:getThemeValue="getThemeVal" />
    </div>
  </div>
</div>
</template>
<script>
import Dialog from 'components/dialog'
import * as Data from '../z3tougu/constant/siwei.js'
import Bubbles from 'components/bubbles'
import ThemeSortAz from 'components/theme-sort-az'
export default {
  data() {
    return {
      showStockRangeDialog: false,
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
        xDefault: 'perf_idx.chng_pct_month',
        yDefault: 'fcst_idx.fcst_eps_chng_next3',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'perf_idx.chng_pct_month',
        indexRangeDefault: '',
        industryRangeDefault: '',
        marketValueDefault: 'gpltsz_all',
        historyValueRangeDefault: 'lscjl_all',
        strategyDefault: '',
        stockPoolDefault: '',
        innerCode: '',
        topic: ''
      },
      dimensionOptions: {
        xDefault: 'perf_idx.chng_pct_month',
        yDefault: 'fcst_idx.fcst_eps_chng_next3',
        sizeDefault: 'mkt_idx.mktcap',
        colorDefault: 'perf_idx.chng_pct_month'
      },
      stockRangeOptions: {
        indexRangeDefault: '',
        industryRangeDefault: '',
        marketValueDefault: 'gpltsz_all',
        historyValueRangeDefault: 'lscjl_all',
        strategyDefault: '',
        stockPoolDefault: '',
        innerCode: '',
        topic: '',
        topicNameDefalut: '全部'
      },
      templateList: {
        'demoTmp5': {
          name: '估值 VS 业绩选股',
          options: {
            xDefault: 'mkt_idx.pe_ttm',
            yDefault: 'fin_idx.sale',
            sizeDefault: '',
            colorDefault: 'mkt_idx.chng_pct_week',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '通过估值和业绩指标，寻找低估值绩优股，气泡在第一象限越靠左上，越可能是低估值绩优股。颜色越红，估值修复越明显；越绿，越可能是价值洼地。'
        },
        'demoTmp6': {
          name: '成长性 VS 估值选股',
          options: {
            xDefault: 'fin_idx.eps_qua_rr',
            yDefault: 'mkt_idx.pe_ttm',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'perf_idx.chng_pct_month',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '通过成长和估值指标，寻找正处于业绩增长期而股价未充分反应个股。气泡在第一象限越靠右下，气泡越小，未来成长性可能越强。'
        },
        'demoTmp7': {
          name: '股价表现 VS 成交量选股',
          options: {
            xDefault: 'mkt_idx.chng_pct_week',
            yDefault: 'mkt_idx.rela_ma20',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'mkt_idx.rela_volume',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '通过量价指标，寻找近期资金主攻个股。气泡整体呈右上倾斜，越靠右上，近期股价异动越大；颜色越亮则成交越活跃，越暗则成交尚未激活。'
        },
        'demoTmp8': {
          name: '股价表现 VS 行业选股',
          options: {
            xDefault: 'mkt_idx.chng_pct_week',
            yDefault: 'mkt_idx.rela_ma20',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'sw_indu_name',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '通过股价和行业指标，寻找近期资金主攻个股及行业。气泡整体右上倾斜，越靠右上，近期股价异动越大，股性越活跃。'
        },
        'demoTmp1': {
          name: '盘面 VS 股价涨跌',
          options: {
            xDefault: 'perf_idx.chng_pct_month',
            yDefault: 'fcst_idx.fcst_eps_chng_next3',
            sizeDefault: 'mkt_idx.mktcap',
            colorDefault: 'perf_idx.chng_pct_month',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '从未来成长性及盘面大小，判断近1月强势股和弱势股为哪一类。例如：高成长大盘股近期强势，低成长小盘股近期弱势。'
        },
        'demoTmp2': {
          name: '估值 VS 股价涨跌',
          options: {
            xDefault: 'perf_idx.chng_pct_month',
            yDefault: 'mkt_idx.pe_ttm',
            sizeDefault: '',
            colorDefault: 'perf_idx.chng_pct_month',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '从估值的角度，判断近1月强势股和弱势股为哪一类。例如：低估值股票近期强势，高估值股票近期弱势。'
        },
        'demoTmp3': {
          name: '行业 VS 股价涨跌',
          options: {
            xDefault: 'sw_indu_name',
            yDefault: 'mkt_idx.peg',
            sizeDefault: '',
            colorDefault: 'mkt_idx.chng_pct_week',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '通过估值和涨跌指标，寻找近期热点行业及热门股的估值属性。竖轴方向某行业红色气泡越多，则关注度越高；距离X轴越近的越红，则低估值股涨势越好。'
        },
        'demoTmp4': {
          name: '分析师观点 VS 股价涨跌',
          options: {
            xDefault: 'fcst_idx.rating_syn',
            yDefault: 'mkt_idx.expect_price_chng_pct',
            sizeDefault: '',
            colorDefault: 'mkt_idx.rela_volume',
            indexRangeDefault: '',
            industryRangeDefault: '',
            marketValueDefault: 'gpltsz_all',
            historyValueRangeDefault: 'lscjl_all',
            strategyDefault: '',
            stockPoolDefault: '',
            innerCode: '',
            topic: ''
          },
          explain: '通过分析师预期，选择上涨空间较高的个股。距离X轴的距离越远，股价预期上涨空间越高；颜色越亮则成交越活跃，越暗则成交尚未激活。'
        },

        'demoTmp0': {
          name: '请选择',
          explain: '双击鼠标进入个股页面。'
        }
      },
      currentTime: '',
      isShowTheme: false,
      topicName: '全部'
    }
  },
  components: {
    ThemeSortAz,
    Bubbles,
    Dialog

  },
  methods: {
    showOptionValue() {
      if (this.tmpId === 'demoTmp0') {
        this.showStockRangeDialog = true
      } else {
        this.showStockRangeDialog = false
      }
    },
    hideDialog() {
      this.showStockRangeDialog = false
      this.dimensionOptions.xDefault = this.options.xDefault
      this.dimensionOptions.yDefault = this.options.yDefault
      this.dimensionOptions.sizeDefault = this.options.sizeDefault
      this.dimensionOptions.colorDefault = this.options.colorDefault
      this.stockRangeOptions.indexRangeDefault = this.options.indexRangeDefault
      this.stockRangeOptions.industryRangeDefault = this.options.industryRangeDefault
      this.stockRangeOptions.marketValueDefault = this.options.marketValueDefault
      this.stockRangeOptions.historyValueRangeDefault = this.options.historyValueRangeDefault
      this.stockRangeOptions.strategyDefault = this.options.strategyDefault
      this.stockRangeOptions.stockPoolDefault = this.options.stockPoolDefault
      this.stockRangeOptions.topic = this.options.topic
      this.topicName = this.stockRangeOptions.topicNameDefalut !== '全部' ? this.stockRangeOptions.topicNameDefalut : '全部'
    },
    showSelectData() {
      this.stockRangeOptions.topicNameDefalut = this.topicName
      this.options = { ...this.dimensionOptions,
        ...this.stockRangeOptions
      }
      this.tmpId = 'demoTmp0'
    },
    changeTmp(e) {
      let tmpValue = ''
      if (e) {
        tmpValue = e.target.value
        this.tmpId = tmpValue
      } else {
        tmpValue = this.tmpId
      }
      if (tmpValue === 'demoTmp0') {
        return
      }
      this.options = this.templateList[tmpValue].options
      this.dimensionOptions.xDefault = this.templateList[tmpValue].options.xDefault
      this.dimensionOptions.yDefault = this.templateList[tmpValue].options.yDefault
      this.dimensionOptions.sizeDefault = this.templateList[tmpValue].options.sizeDefault
      this.dimensionOptions.colorDefault = this.templateList[tmpValue].options.colorDefault
      this.stockRangeOptions.indexRangeDefault = this.templateList[tmpValue].options.indexRangeDefault
      this.stockRangeOptions.industryRangeDefault = this.templateList[tmpValue].options.industryRangeDefault
      this.stockRangeOptions.marketValueDefault = this.templateList[tmpValue].options.marketValueDefault
      this.stockRangeOptions.historyValueRangeDefault = this.templateList[tmpValue].options.historyValueRangeDefault
      this.stockRangeOptions.strategyDefault = this.templateList[tmpValue].options.strategyDefault
      this.stockRangeOptions.stockPoolDefault = this.templateList[tmpValue].options.stockPoolDefault
      // this.stockRangeOptions.innerCode = this.templateList[tmpValue].options.innerCode
      this.stockRangeOptions.topic = this.templateList[tmpValue].options.topic
      this.topicName = '全部'
    },
    getTime() {
      var date = new Date()
      var seperator2 = ':'
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      var strHour = date.getHours()
      var strMin = date.getMinutes()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      if (strHour >= 0 && strHour <= 9) {
        strHour = '0' + strHour
      }
      if (strMin >= 0 && strMin <= 9) {
        strMin = '0' + strMin
      }
      var currentdate = date.getFullYear() + '-' + month + '-' + strDate + ' ' + strHour + seperator2 + strMin
      this.currentTime = currentdate
    },
    showTheme() {
      this.isShowTheme = true
    },
    closeTheme() {
      this.isShowTheme = false
    },
    getThemeVal(data) {
      this.stockRangeOptions.topic = data[0]
      this.topicName = data[1]
      this.closeTheme()
    },
    changeOptionsInerCode(data) {
      this.stockRangeOptions.innerCode = data
    },
    clearTheme() {
      this.topicName = '全部'
      this.stockRangeOptions.topic = ''
      this.options = {
        ...this.dimensionOptions,
        ...this.stockRangeOptions
      }
    },
    defaultSet() {
      this.tmpId = 'demoTmp1'
      this.changeTmp()
    },
    changeXY() {
      this.tmpId = 'demoTmp0'
      const midValue = this.dimensionOptions.xDefault
      this.dimensionOptions.xDefault = this.dimensionOptions.yDefault
      this.dimensionOptions.yDefault = midValue
      this.options = {
        ...this.dimensionOptions,
        ...this.stockRangeOptions
      }
    }
  },
  computed: {
    stockPool: function() {
      return this.$store.state.bubbles.stockPool
    },
    userStrategy: function() {
      return this.$store.state.bubbles.userStrategy
    }
  },
  watch: {
    'dimensionOptions.xDefault': function() {
      if ((this.dimensionOptions.xDefault === 'order' && (this.dimensionOptions.yDefault === 'sw_indu_name' || this.dimensionOptions.yDefault === 'chi_spel' || this.dimensionOptions.yDefault === 'order'))) {
        this.dimensionOptions.xDefault = 'sw_indu_name'
      }
      if ((this.dimensionOptions.yDefault === 'order' && (this.dimensionOptions.xDefault === 'sw_indu_name' || this.dimensionOptions.xDefault === 'chi_spel' || this.dimensionOptions.xDefault === 'order'))) {
        this.dimensionOptions.yDefault = 'sw_indu_name'
      }
    },
    'dimensionOptions.yDefault': function() {
      if ((this.dimensionOptions.xDefault === 'order' && (this.dimensionOptions.yDefault === 'sw_indu_name' || this.dimensionOptions.yDefault === 'chi_spel' || this.dimensionOptions.yDefault === 'order'))) {
        this.dimensionOptions.xDefault = 'sw_indu_name'
      }
      if ((this.dimensionOptions.yDefault === 'order' && (this.dimensionOptions.xDefault === 'sw_indu_name' || this.dimensionOptions.xDefault === 'chi_spel' || this.dimensionOptions.xDefault === 'order'))) {
        this.dimensionOptions.yDefault = 'sw_indu_name'
      }
    },
    'tmpId': function() {
      if (this.tmpId === 'demoTmp0') {
        this.showStockRangeDialog = true
      } else {
        this.showStockRangeDialog = false
      }
    },
    'stockRangeOptions.topic': function() {
      this.showSelectData()
    }
  },
  mounted() {
    this.$store.dispatch('bubbles/getStrategy')
    this.$store.dispatch('bubbles/getStockPool')

    const that = this
    setInterval(function() {
      that.getTime()
    }, 1000)
    if (window.Z3) {
      window.Z3.SndStockPoolInfo((data) => {
        if (!data) {
          this.tmpId = 'demoTmp0'
        }

      })
    }
  }
}
</script>
