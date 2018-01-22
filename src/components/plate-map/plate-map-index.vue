<style lang="scss">
    @import '../../assets/css/base.css';
    body .app,
    html {
        height: 100%;
    }
    * {
        box-sizing: border-box;
        font-size: 12px;
        font-family: 'Microsoft YaHei';
    }
    .map {
        background-color: #141518;
        height: 100%;
        min-width: 1217px;
    }
    .map_pad {
        padding: 0 13px;
    }
    .condition {
        text-align: left;
        display: inline-block;
    }
    .condition {
        color: #fff;
        opacity: 0.8;
    }
    .condition select {
        -webkit-appearance: none;
        color: #c9d0d7;
        border: none;
        padding-left: 10px;
        background: url("../../assets/images/stock-map/down-arrow.png") no-repeat scroll right center transparent;
        background-color: #23272c;
        height: 22px;
        background-position-x: 95%;
        border-radius: 3px;
        line-height: 22px;
    }
    .condition select option:first-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .condition select option:last-child {
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .code-select {
        width: 150px;
        margin-right: 30px;
    }

    .condition-select {
        width: 166px;
    }
    .condition select:focus {
        border: none;
        outline: none;
    }

    .condition select option {
        -webkit-appearance: none;
        display: inline-block;
        /* height: 30px;
        padding: 50px;*/
    }
    .condition_wrap {
        height: 35px;
        line-height: 35px;
        /*background-color: #23272c;*/
    }
    .mask {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
    }
</style>
<template>
    <div class="map map_pad">
        <div class="mask" :style="{height:maskHeight+'px'}" v-if="isShowMask"></div>
        <div class="condition_wrap">
            <div class="condition" @click="isClickSelect">
                板块类型：
                <select v-model="plateType" class="code-select">
                    <option value="theme">题材</option>
                    <option value="industry">行业</option>
                </select> 浏览指标：
                <select v-model="conditionTopic" class="condition-select"  v-show="mapType === 'plate'">
                    <option value="topic_market.heat_index">热度指数</option>
                    <option value="topic_market.chng_pct">涨跌幅</option>
                    <option value="topic_market.real_chng_pct_week">近1周涨跌幅</option>
                    <option value="perf_idx.chng_pct_month">近1月涨跌幅</option>
                    <option value="perf_idx.chng_pct_3month">近3月涨跌幅</option>
                    <option value="perf_idx.chng_pct_6month">近6月涨跌幅</option>
                    <option value="perf_idx.chng_pct_year">近1年涨跌幅</option>
                    <option value="perf_idx.chng_pct_year_sofar">今年以来涨跌幅</option>
                    <option value="mkt_idx.rela_volume">相对成交量</option>
                    <option value="mkt_idx.peg">PEG</option>
                    <option value="mkt_idx.ps">市销率</option>
                    <option value="mkt_idx.pb">市净率</option>
                    <option value="mkt_idx.div_rate">股息率</option>
                    <option value="mkt_idx.pe_ttm">市盈率(TTM)</option>
                    <option value="mkt_idx.fir_fcst_pe">预测市盈率</option>
                    <option value="fin_idx.eps_5year">EPS增长率(过去5年)</option>
                    <option value="topic_market.keep_days_today">连续涨跌天数</option>
                </select>
                <select v-model="conditionStock" class="condition-select" v-show="mapType === 'stock'">
                    <option value="topic_market.heat_index">热度指数</option>
                    <option value="mkt_idx.cur_chng_pct">涨跌幅</option>
                    <option value="mkt_idx.chng_pct_week">近1周涨跌幅</option>
                    <option value="perf_idx.chng_pct_month">近1月涨跌幅</option>
                    <option value="perf_idx.chng_pct_3month">近3月涨跌幅</option>
                    <option value="perf_idx.chng_pct_6month">近6月涨跌幅</option>
                    <option value="perf_idx.chng_pct_year">近1年涨跌幅</option>
                    <option value="perf_idx.chng_pct_year_sofar">今年以来涨跌幅</option>
                    <option value="mkt_idx.rela_volume">相对成交量</option>
                    <option value="mkt_idx.peg">PEG</option>
                    <option value="mkt_idx.ps">市销率</option>
                    <option value="mkt_idx.pb">市净率</option>
                    <option value="mkt_idx.div_rate">股息率</option>
                    <option value="mkt_idx.pe_ttm">市盈率(TTM)</option>
                    <option value="mkt_idx.fir_fcst_pe">预测市盈率</option>
                    <option value="fin_idx.eps_5year">EPS增长率(过去5年)</option>
                    <option value="mkt_idx.keep_days_today">连续涨跌天数</option>
                </select>
            </div>
        </div>
        <ThemeMap :plateType="plateType" :conditionTopic="conditionTopic" :conditionStock='conditionStock' @isStopPlayback="isShowMaskFn" @toZdfCondition="toZdf" @passMapType="getMapType" @passConditionStock="getConditionStock"></ThemeMap>
    </div>
</template>
<script type="text/javascript">
    import ThemeMap from 'components/plate-map/theme-map'
    import IndustryMap from 'components/plate-map/industry-map'
    export default {
        data() {
            return {
                plateType: 'theme',
                conditionTopic: 'topic_market.heat_index',
                conditionStock:'topic_market.heat_index',
                keyword: '',
                mapHeight: 0,
                mapWidth: 0,
                maskHeight: window.innerHeight - 35,
                isShowMask: false,
                mapType:'plate'
            }
        },
        props: [''],
        components: {
            ThemeMap,
            IndustryMap
        },
        methods: {
            isShowMaskFn: function(mag) {
                this.isShowMask = mag
            },
            getFocusStockName: function(msg) {
                this.focusStockName = msg
            },
            toZdf: function(msg) {
                this.condition = msg
            },
            getMapType:function (msg) {
                this.mapType = msg
            },
            getConditionStock:function (msg) {
                if(msg === 'topic_market.chng_pct'){
                    this.conditionStock = 'mkt_idx.cur_chng_pct'
                }else if(msg === 'topic_market.real_chng_pct_week'){
                    this.conditionStock = 'mkt_idx.chng_pct_week'
                }else if(msg === 'topic_market.keep_days_today'){
                    this.conditionStock = 'mkt_idx.keep_days_today'
                }else{
                    this.conditionStock = msg
                }
            }
        },
        mounted() {

        }

    }
</script>
