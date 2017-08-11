<style lang="scss" scoped>
    @import '../assets/css/base.css';
   html,body .app{height: 100%;}
    *{box-sizing: border-box;}
    .map{background-color: #000;height: 100%;padding: 0 20px;min-width: 1217px;}
    .condition{text-align: left;display: inline-block;}
    .condition{color:#fff;font-size:14px;opacity: 0.8}
    .condition select{color:#2f5b7d;background-color: #000;border: none;opacity: 1}
    .condition_wrap{text-align: left;margin:10px 0 5px;}
</style>
<template>
    <div class="map">
        <div class="condition_wrap">
            <div class="condition">
                股票范围：
                <select v-model="rangeCode">
                <option value="">全部A股</option>
                <option value="000001.SH">上证A股</option>
                <option value="399001.SZ">深证A股</option>
                <option value="mainSH">上交所主板</option>
                <option value="mainSZ">深交所主板</option>
                <option value="399006.SZ">中小板</option>
                <option value="399005.SZ">创业板</option>
            </select>
                浏览指标：
                <select v-model="condition">
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
                <option value="act_date">业绩公布日</option>
            </select>
            </div>
            <StockSearch :rangeCode="rangeCode" :condition="condition"></StockSearch>
        </div>
        <StockMap :rangeCode="rangeCode" :condition="condition"></StockMap>
    </div>
</template>
<script type="text/javascript">
    import StockSearch from 'components/search-map'
    import StockMap from 'components/stock-map'
export default{
      data () {
        return {
          rangeCode: '',
          condition: 'mkt_idx.cur_chng_pct',
          keyword: ''
        }
      },
      props: [''],
      components: {
        StockMap,
        StockSearch
      },
      mounted () {

      }

    }
</script>
