<style scoped="">
@import '../../assets/css/base.css';
@import '../../assets/css/map.css';
@import '../../assets/css/znty.css';
body .app,
html {
  height: 100%;
  background-color: #141518;
}

* {
  box-sizing: border-box;
  font-size: 12px;
}

.map {
  background-color: #141518;
  height: 100%;
  min-width: 1217px;
}

.content {
  width: 100%;
}

.pull-right {
  display: none;
}
</style>
<template>
<div class="content map map-web">
  <div class="narrow">
    <span class="currentTime"></span>
    <a id="narrow"><img src="../../assets/images/stock-map/narrow.png"/></a>
  </div>
  <div class="container is-wide">
    <div class="view">
      <div class="zoom pull-right"></div>
      <div class="fr enlarge">
        <span class="currentTime"></span>
        <a id="enlage"><img src="../../assets/images/stock-map/enlarge.png" style="vertical-align: middle"/></a>
      </div>
    </div>
    <div class="map-scan">
      <div class="sidebar sidebar2">
        <div class=''>
          <ul class="left_nav">
            <li class="active"><a>全部A股</a></li>
            <li><a>上证A股</a></li>
            <li><a>深证A股</a></li>
            <li><a>上交所主板</a></li>
            <li><a>深交所主板</a></li>
            <li><a>中小板</a></li>
            <li><a>创业板</a></li>
          </ul>
          <select id="select-change" style="visibility: visible;">
                            <option value="mkt_idx.cur_chng_pct" selected="selected" color=''>涨跌幅</option>
                            <option value="mkt_idx.chng_pct_week" color="_5">近1周涨跌幅</option>
                            <option value="perf_idx.chng_pct_month" color="_10">近1月涨跌幅</option>
                            <option value="perf_idx.chng_pct_3month" color="_15">近3月涨跌幅</option>
                            <option value="perf_idx.chng_pct_6month" color="_20">近6月涨跌幅</option>
                            <option value="perf_idx.chng_pct_year" color="_25">近1年涨跌幅</option>
                            <option value="perf_idx.chng_pct_year_sofar" color="_25">今年以来涨跌幅</option>
                            <option value="mkt_idx.rela_volume" color="_relvol">相对成交量</option>
                            <option value="mkt_idx.peg" color="_peg">PEG</option>
                            <option value="mkt_idx.ps" color="_ps">市销率</option>
                            <option value="mkt_idx.pb" color="_pb">市净率</option>
                            <option value="mkt_idx.div_rate" color="_div">股息率</option>
                            <option value="mkt_idx.pe_ttm" color="_pe">市盈率(TTM)</option>
                            <option value="mkt_idx.fir_fcst_pe" color="_fpe">预测市盈率</option>
                            <option value="fin_idx.eps_5year" color="_eps5y">EPS增长率(过去5年)</option>
                            <option value="act_date" color="_earndate">业绩公布日</option>
                        </select>
        </div>
        <div class="search">
        </div>
      </div>
      <div class="content-view-map">
        <div id="map" class=''>
          <div id="body"></div>
          <div id="legend"></div>
          <div id="hover-wrapper"></div>
        </div>
        <div class="map_bt clearfix map_bt_min">
          <div class="map_scale map_scale_min">
            <img src="../../assets/images/stock-map/you.png" alt="" id="legend-close" class="legend-switch">
            <img src="../../assets/images/stock-map/zuo.png" alt="" id="legend-open" class="legend-switch">
          </div>
          <p class="zn_tip zn_tip_min">温馨提示：鼠标移动到某一区域时，浮窗显示此行业的股票列表和当前价格；通过单击鼠标可以对某一个区域进行放大和缩小，双击鼠标可以进入个股页面。</p>
        </div>
      </div>
    </div>
    <div id="modal"></div>
  </div>
</div>
</template>
<script>
import {
  ctx
} from '../../z3tougu/config'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
const codeArr = ['', '000001.SH', '399001.SZ', 'mainSH', 'mainSZ', '399006.SZ', '399005.SZ'];
export default {
  methods: {
    isFullScreen: function() {
      if (this.$route.fullPath.indexOf('fullScreen') > 0) {
        $('.view,.sidebar').hide();
        $('.narrow').show();
        $('.content-view-map').css({
          'padding-left': '0px',
          'padding-right': '0px'
        });
        $('.map_bt').addClass('map_bt_max');
        $('.map_bt').removeClass('map_bt_min');
        $('.map_scale').removeClass('map_scale_min');
        $('.map_scale').addClass('map_scale_max');
        $('.zn_tip').hide();
        $('#legend-close').show();
        $('#legend-open').hide();
      } else if (this.$route.fullPath.indexOf('normal') > 0) {
        $(window).resize(function() {
          window.location.reload();
        });
        $('.view,.sidebar').show();
        $('.narrow').hide();
        $('.content-view-map').css({
          'padding-left': '250px',
          'padding-right': '15px'
        });
        $('.map_bt').removeClass('map_bt_max');
        $('.map_bt').addClass('map_bt_min');
        $('.map_scale').addClass('map_scale_min');
        $('.map_scale').removeClass('map_scale_max');
        $('.zn_tip').show();
        $('#legend-close').hide();
        $('#legend-open').hide();
        $('.step').show();
      }
    }
  },
  mounted() {
    const _this = this
    _this.isFullScreen()
    let zntyMapPerf = {}
    let zntyMapAdditional = {}
    let tmpCode = _this.$route.query.rCode || ''
    let selectedColor = _this.$route.query.condition || ''
    let selectedOptionIndex = _this.$route.query.index || 0
    $('.left_nav li').removeClass('active')
    $('.left_nav li').eq(codeArr.indexOf(tmpCode)).addClass('active')
    $('#select-change option').prop('selected', false)
    $('#select-change option').eq(selectedOptionIndex).prop('selected', true)
    const restoreParents = function(data, parent) {
      if (parent) {
        data.parent = parent;
      }
      (data.children || []).forEach(function(d) {
        restoreParents(d, data);
      });
    }

    function zntyRestorePerf(data) {
      if (typeof zntyMapPerf[data.name] !== 'undefined') {
        data.perf = zntyMapPerf[data.name];
      }
      if (typeof zntyMapAdditional[data.name] !== 'undefined') {
        data.additional = zntyMapAdditional[data.name];
      }
      (data.children || []).forEach(function(d) {
        zntyRestorePerf(d);
      });
    }

    function zntyInitMap(width, mapData, color, ignoreAuth, condition) {
      restoreParents(mapData);
      zntyRestorePerf(mapData);
      window.zntyInitCanvas(mapData, 'sec', '', width, color, '', '', true, ignoreAuth, condition);
    }

    function drawMap(color, condition, ignoreAuth) {
      const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0) - 10;
      $('#body').height(h);
      const w = $('#body').width();
      const legendW = $('.map_scale').outerWidth(true);
      $('.zn_tip').width(w - legendW - 10);
      const treemap = window.d3.layout.treemap()
        .sort(function(d1, d2) {
          return d1.scale - d2.scale;
        })
        .size([w, h])
        .value(function(d) {
          return d.scale;
        }).padding(function(d) {
          if (d.depth === 1) {
            return [17, 1, 1, 1];
          } else if (d.depth === 2) {
            return [12, 1, 2, 1];
          }
          return 0;
        });
      let url
      if (tmpCode === '') {
        url = 'https://www.z3quant.com/openapi/openjson/tx/' + tmpCode + '.json'
      } else {
        url = 'https://www.z3quant.com/openapi/openjson/tx/auth/' + tmpCode + '.json'
      }
      $.ajax({
        headers: {
          Accept: 'application/json; charset=utf-8'
        },
        type: 'get',
        url: url,
        dataType: 'json',
        success: function(result) {
          var nodes = treemap.nodes(result);
          var json = '';
          var dateJson = '';
          var now = new Date();
          for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].condition !== '' && nodes[i].condition != null) {
              if ($('#select-change').val() === 'act_date') {
                var tmpDate = new Date(nodes[i].condition);
                nodes[i].condition = tmpDate > now ? -1 : 1;
                dateJson += ',"' + nodes[i].name + '":"' + dateFormatUtil(tmpDate) + '"';
              }
              json += ',"' + nodes[i].name + '":' + nodes[i].condition;
            }
          }
          if ($('#select-change').val() === 'act_date') {
            dateJson = '{' + dateJson.substr(1) + '}';
          }
          json = '{' + json.substr(1) + '}';
          if ($('#select-change').val() === 'act_date') {
            zntyMapAdditional = JSON.parse(dateJson);
          } else {
            zntyMapAdditional = {};
          }
          zntyMapPerf = JSON.parse(json);

          var zntyMapData = nodes[0];
          zntyInitMap(w, zntyMapData, color, ignoreAuth, condition);
        }
      })
    }

    function getMonth(date) {
      var month = '';
      month = date.getMonth() + 1;
      if (month < 10) {
        month = '0' + month;
      }
      return month;
    }

    function getDay(date) {
      var day = '';
      day = date.getDate();
      if (day < 10) {
        day = '0' + day;
      }
      return day;
    }

    function dateFormatUtil(date) {
      var dateTypeDate = '';
      dateTypeDate += date.getFullYear();
      dateTypeDate += '-' + getMonth(date);
      dateTypeDate += '-' + getDay(date);
      return dateTypeDate;
    }

    function getRangeLegend(colorArr, valueRangeArr) {
      let mapScaleHtml = '';
      for (var i = 0; i < colorArr.length; i++) {
        mapScaleHtml += '<div class="step" style="background:' + colorArr[i] + ';">' + valueRangeArr[i] + '</div>'
      }
      const $mapScale = $(mapScaleHtml)
      $('.map_scale .step').remove()
      $('.map_scale').append($mapScale)
      $('#legend-close').on('click', function(e) {
        e.stopPropagation();
        $(this).hide();
        $('.step').hide();
        $('#legend-open').show();
      });
      $('#legend-open').on('click', function(e) {
        e.stopPropagation();
        $(this).hide();
        $('.step').show();
        $('#legend-close').show();
      });
    }
    setInterval(function() {
      $('.currentTime').html(getTime())
    }, 1000);

    function getTime() {
      const date = new Date();
      const seperator2 = ':';
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      let strHour = date.getHours();
      let strMin = date.getMinutes();
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
      const currentDate = date.getFullYear() + '-' + month + '-' + strDate + ' ' +
        strHour + seperator2 + strMin;
      return currentDate
    }
    $('.left_nav li').on('click', function() {
      $('.bubSearchResult').hide();
      $('.left_inp1').val('');
      $('.left_nav li').removeClass('active');
      $(this).addClass('active');
      tmpCode = codeArr[$(this).index()]
      drawMap(selectedColor, $('#select-change option:selected').val());
    });
    $(function() {
      const color1dArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 涨跌幅1日颜色
      const color1wArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 涨跌幅1周颜色
      const color1mArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 涨跌幅1月颜色
      const color3mArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 涨跌幅3月颜色
      const color6mArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 涨跌幅6月颜色
      const color1yArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 涨跌幅1年颜色
      const colorallArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // 今年以来涨跌幅颜色
      const colorPeArr = ['#e41414', '#be0808', '#961010', '#6d1414', '#424453', '#085421', '#0e6f2f', '#1aa448', '#00d641'] // 市盈率
      const colorFpeArr = ['#e41414', '#be0808', '#961010', '#6d1414', '#424453', '#085421', '#0e6f2f', '#1aa448', '#00d641'] // 预测市盈率
      const colorPEGArr = ['#e41414', '#be0808', '#961010', '#6d1414', '#424453', '#085421', '#0e6f2f', '#1aa448', '#00d641'] // PEG
      const colorPsArr = ['#e41414', '#be0808', '#961010', '#6d1414', '#424453', '#085421', '#0e6f2f', '#1aa448', '#00d641'] // 市销率
      const colorPbArr = ['#e41414', '#be0808', '#961010', '#6d1414', '#424453', '#085421', '#0e6f2f', '#1aa448', '#00d641'] // 市净率
      const colorEpsArr = ['#00d641', '#1aa448', '#0e6f2f', '#085421', '#424453', '#6d1414', '#961010', '#be0808', '#e41414'] // EPS增长率
      const colorRelvolArr = ['#3c404c', '#415379', '#3c649f', '#1f69c9', '#228cd4', '#3bb0d9', '#3dd2e8', '#1de1fe', '#00fcff'] // 相对成交量
      const colorDivArr = ['#1d1717', '#301919', '#532a2a', '#6d2525', '#8d2929', '#a82323', '#ce1111', '#e41414', '#ff0000'] // 股息率
      const colorEdArr = ['#20A29A', '#BA5297'] // 业绩公布日
      const colorArrWrap = [color1dArr, color1wArr, color1mArr, color3mArr, color6mArr, color1yArr, colorallArr, colorRelvolArr, colorPEGArr, colorPsArr, colorPbArr, colorDivArr, colorPeArr, colorFpeArr, colorEpsArr, colorEdArr]
      const valueRange1dArr = ['-4%', '-3%', '-2%', '-1%', '0%', '1%', '2%', '3%', '4%'] // 图例1日涨跌幅数值
      const valueRange1wArr = ['-8%', '-6%', '-4%', '-2%', '0%', '2%', '4%', '6%', '8%'] // 图例1周涨跌幅数值
      const valueRange1mArr = ['-12%', '-9%', '-6%', '-3%', '0%', '3%', '6%', '9%', '12%'] // 图例1月涨跌幅数值
      const valueRange3mArr = ['-24%', '-18%', '-12%', '-6%', '0%', '6%', '12%', '18%', '24%'] // 图例3月涨跌幅数值
      const valueRange6mArr = ['-32%', '-24%', '-16%', '-8%', '0%', '8%', '16%', '24%', '32%'] // 图例6月涨跌幅数值
      const valueRange1yArr = ['-36%', '-27%', '-18%', '-9%', '0%', '9%', '18%', '27%', '36%'] // 图例1年涨跌幅数值
      const valueRangeallArr = ['-32%', '-24%', '-16%', '-8%', '0%', '8%', '16%', '24%', '32%'] // 图例今年以来涨跌幅数值
      const valueRangeRelvolArr = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8] // 图例相对成交量数值
      const valueRangePeArr = [0, 15, 30, 45, 60, 75, 90, 105, 120] // 市盈率
      const valueRangeFpeArr = [0, 15, 30, 45, 60, 75, 90, 105, 120] // 预测市盈率
      const valueRangePEGArr = [0, 0.5, 1, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0] // PEG
      const valueRangePsArr = [0, 2, 4, 6, 8, 10, 12, 14, 16] // 市销率
      const valueRangePbArr = [0, 1.2, 2.4, 3.6, 4.8, 6.0, 7.2, 8.4, 9.6] // 市净率
      const valueRangeDivArr = [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6] // 股息率
      const valueRangeEpsArr = ['-36%', '-27%', '-18%', '-9%', '0%', '9%', '18%', '27%', '36%'] // EPS增长率
      const valueRangeEdArr = ['业绩公布前', '业绩公布后'] // 业绩公布日
      const valueArrWrap = [valueRange1dArr, valueRange1wArr, valueRange1mArr, valueRange3mArr, valueRange6mArr, valueRange1yArr, valueRangeallArr, valueRangeRelvolArr, valueRangePEGArr, valueRangePsArr, valueRangePbArr, valueRangeDivArr, valueRangePeArr, valueRangeFpeArr, valueRangeEpsArr, valueRangeEdArr];
      getRangeLegend(colorArrWrap[selectedOptionIndex], valueArrWrap[selectedOptionIndex]);
      drawMap(selectedColor, $('#select-change option:selected').val());
      $('#select-change').change(function() {
        $('.bubSearchResult').hide();
        $('.left_inp1').val('');
        selectedOptionIndex = $('#select-change option:selected').index()
        getRangeLegend(colorArrWrap[selectedOptionIndex], valueArrWrap[selectedOptionIndex]);
        selectedColor = $('#select-change option:selected').attr('color');
        $(this).blur();
        drawMap(selectedColor, $('#select-change option:selected').val());
      });
      $('#enlage').on('click', function() {
        window.open(ctx + '/stockMapOld/fullScreen?rCode=' + tmpCode + '&condition=' + selectedColor + '&index=' + selectedOptionIndex)
      });
      $('#narrow').on('click', function() {
        window.open(ctx + '/stockMapOld/normal?rCode=' + tmpCode + '&condition=' + selectedColor + '&index=' + selectedOptionIndex)
      });
    });
  }
}
</script>