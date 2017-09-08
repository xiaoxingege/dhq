<template>
  <!-- 筛选条件 -->
  <div class="filterCondition clearfix">
    <div class="filter-item clearfix">
      <span class="label">分类筛选：</span>
      <ul class="classify">
        <li v-for="(type,index) in filterType" :class='{"active": index==typeIndex}' @click='selectType(index)' :value="type.value">{{type.name}}</li>
      </ul>
    </div>
    <!-- 全部 -->
    <div>
      <div class="filter-item clearfix">
        <span class="label">通用条件：</span>
        <ul class="selectBox">
          <li>
            <label><div class="pr tsk">交易状态：<div class="text">交易日15点前显示当天基金交易状态，15点后显示下个交易日基金交易状态</div></div></label>
            <select v-model='filterParams.jyzt' :disabled='isDisabled'><option v-for="(val,key) in descRips" :value="key">{{val}}</option></select>
          </li>
          <li>
            <label class="pr tsk">基金规模：<div class="text">根据最近一次基金季报/年报获得</div></label>
            <select v-model='filterParams.jjgm' :disabled='isDisabled'><option v-for="(val,key) in jjgm" :value="key">{{val}}</option></select>
          </li>
          <li>
            <label class="pr tsk">成立时间：<div class="text">基金公布的成立时间</div></label>
            <select v-model='filterParams.clsj'  :disabled='isDisabled'><option v-for="(val,key) in foundedTime" :value="key">{{val}}</option></select>
          </li>
          <li>
            <label class="pr tsk">大额限制：<div class="text">基金大额申购限制</div></label>
            <select v-model='filterParams.dexz'  :disabled='isDisabled'><option v-for="(val,key) in bigLimit" :value="key">{{val}}</option></select>
          </li>
        </ul>
      </div>
      <div class="filter-item clearfix">
        <span class="label">业绩表现：</span>
        <ul class="selectBox">
          <li>
            <label class="pr tsk">收益率表现1：<div class="text">一段自然日内基金的涨跌幅</div></label>
            <select  v-model='filterParams.sylbx1' :disabled='isDisabled'><option v-for="(val,key) in bigLimit" :value="key">{{val}}</option></select>
          </li>
          <li>
            <label class="pr tsk">收益率表现2：<div class="text">一段自然日内基金的涨跌幅</div></label>
            <select v-model='filterParams.sylbx2' :disabled='isDisabled'><option v-for="(val,key) in bigLimit" :value="key">{{val}}</option></select>
          </li>
          <li>
            <label class="pr tsk">年化收益率：<div class="text">根据基金历史年化收益计算，基金成立不足1年此数据仅供参考</div></label>
            <select v-model='filterParams.nhsyl':disabled='isDisabled'><option v-for="(val,key) in bigLimit" :value="key">{{val}}</option></select>
          </li>
        </ul>
      </div>
      <div class="filter-item clearfix">
        <span class="label">分类条件：</span>
        <!-- 全部 -->
        <ul v-if="typeIndex ==0" class="fltj selectBox">
          <li>
            <label class="pr tsk">行业：<div class="text">依据基金重仓股及申万一级行业划分</div></label>
            <select v-model='filterParams.hy' :disabled='isDisabled'>
              <option v-for='(val,key) in trades' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">投资风格：<div class="text">本月基金市值大小，价格/成长属性</div></label>
            <select v-model='filterParams.tzfg' :disabled='isDisabled'>
              <option v-for='(val,key) in investmentStyle' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">机会期：<div class="text">从基金行业、投资风格等多维度，通过智能算法模型，提供基金建仓或增仓时机</div></label>
            <select v-model='filterParams.jhq' :disabled='isDisabled'>
              <option v-for='(val,key) in opportunity' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">风险期：<div class="text">从基金行业、投资风格等多维度，通过智能算法模型，提供基金减仓时机</div></label>
            <select v-model='filterParams.fxq' :disabled='isDisabled'>
                <option v-for='(val,key) in riskTime' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">最大回撤：<div class="text">指定自然日内，基金最大回撤</div></label>
            <select v-model='filterParams.zdhc' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">夏普比：<div class="text">指定自然日内，基金夏普比</div></label>
            <select v-model='filterParams.xpl' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">超额收益：<div class="text">指定自然日内，基金超额收益率</div></label>
            <select v-model='filterParams.cesy' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
        </ul>
        <!-- 股票型 混合型-->
        <ul v-if="typeIndex ==1 || typeIndex ==2 " class="fltj selectBox">
          <li>
            <label class="pr tsk">行业：<div class="text">依据基金重仓股及申万一级行业划分</div></label>
            <select v-model='filterParams.hy' :disabled='isDisabled'>
              <option v-for='(val,key) in trades' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">投资风格：<div class="text">本月基金市值大小，价格/成长属性</div></label>
            <select v-model='filterParams.tzfg' :disabled='isDisabled'>
              <option v-for='(val,key) in investmentStyle' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">机会期：<div class="text">从基金行业、投资风格等多维度，通过智能算法模型，提供基金建仓或增仓时机</div></label>
            <select v-model='filterParams.jhq' :disabled='isDisabled'>
              <option v-for='(val,key) in opportunity' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">风险期：<div class="text">从基金行业、投资风格等多维度，通过智能算法模型，提供基金减仓时机</div></label>
            <select :disabled='isDisabled'>
                <option v-for='(val,key) in riskTime' :value='key'>{{val}}</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">最大回撤：<div class="text">指定自然日内，基金最大回撤</div></label>
            <select v-model='filterParams.zdhc' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">夏普比：<div class="text">指定自然日内，基金夏普比</div></label>
            <select v-model='filterParams.xpb' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">超额收益：<div class="text">指定自然日内，基金超额收益率</div></label>
            <select v-model='filterParams.cesy' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
        </ul>
         <!--债券型 指数型 QDII型-->
        <ul v-if=" typeIndex ==3 || typeIndex ==4 || typeIndex ==5" class="fltj selectBox">
          <li>
            <label class="pr tsk">最大回撤：<div class="text">指定自然日内，基金最大回撤</div></label>
            <select v-model='filterParams.zdhc' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
          <li>
            <label class="pr tsk">夏普比：<div class="text">指定自然日内，基金夏普比</div></label>
            <select v-model='filterParams.xpb' :disabled='isDisabled'>
              <option>全部</option>
            </select>
          </li>
        </ul>
        <!-- 理财型 -->
        <ul v-if="typeIndex ==7" class="fltj selectBox">
          <li>
            <label class="pr tsk">封闭期：<div class="text">理财型基金封闭周期</div></label>
            <select v-model='filterParams.fbq' :disabled='isDisabled'>
              <option>全部</option>
              <option>T+0</option>
              <option>T+1</option>
              <option>其它</option>
            </select>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
// 股票范围——指数下拉框数据
import * as Data from '../../z3tougu/constant/filter.js'
export default {
  data () {
    return {
      checkedNames: [],
      filterType: [{ name: '全部', value: 'jjlx_all' }, { name: '股票型', value: 'jjlx_gpx' }, { name: '混合型', value: 'jjlx_hhx' }, { name: '债券型', value: 'jjlx_zqx' }, { name: '指数型', value: 'jjlx_zsx' }, { name: 'QDII型', value: 'jjlx_qdiix' }, { name: '货币型', value: 'jjlx_hbx' }, { name: '理财型', value: 'jjlx_lcx' }],
      typeIndex: 0,
      descRips: Data.descrips,
      jjgm: Data.jjgm,
      foundedTime: Data.foundedTime,
      bigLimit: Data.bigLimit,
      trades: Data.trades,
      investmentStyle: Data.investmentStyle,
      opportunity: Data.opportunity,
      riskTime: Data.riskTime,
      selected: '',
      isDisabled: true,
      filterParams: {
        jjlx: 'jyzt_all',
        jyzt: 'jyzt_all',
        jjgm: 'jjgm_all',
        clsj: 'clsj_all',
        dexz: 'dexz_all',
        sylbx1: 'sylbx1_all',
        sylbx2: 'sylbx2_all',
        nhsyl: 'nhsyl_all',
        hy: 'hy_all',
        tzfg: 'tzfg_all',
        jhq: 'jhq_all',
        fxq: 'fxq_all',
        zdhc: 'zdhc_all',
        xpb: 'xpb_all',
        cesyl: 'cesyl_all',
        fbq: 'fbq_all'
      }
    }
  },
  methods: {
    selectType (index) {
      this.typeIndex = index
      this.$emit('selectType', index)
      if (this.typeIndex === 1 || this.typeIndex === 2 || this.typeIndex === 3 || this.typeIndex === 4 || this.typeIndex === 5 || this.typeIndex === 6 || this.typeIndex === 7) {
        this.isDisabled = false
      } else {
        this.isDisabled = true
      }
    },
    changeTmp (event, type) {
      const selectValue = event.target.value
      console.log(selectValue)
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  @import '../../assets/common/variable.scss';
  @import '../../assets/css/reset.css';
  @import '../../assets/css/base.css';

  @mixin border_radius($num){-webkit-border-radius: $num;-moz-border-radius: $num;border-radius: $num;}
  select{
    -webkit-appearance: none;
    appearance: none;
    outline: 0;
    border: 0;
    background: 0;
  }
  .filter {
    background-color: #fff;
    font-size: $fontSize12;
    color: $colorFontTheme;
    padding: 10px;
  }
  .btn {
    display: inline-block;
    font-size: $fontSize12;
    color: $colorFontBlue;
    padding: 0 10px;
    height: 22px;
    line-height: 22px;
    background-color: $colorBackground;
    text-align: center;
    @include border_radius(3px);
  }
  .tabList {
    font-size: 0;
    height: 24px;
    li {
      display: inline-block;
      font-size: $fontSize12;
      color: $colorFontBlue;
      height: 24px;
      line-height: 24px;
      padding: 0 15px;
      cursor: pointer;
      &.active {
        color: #fff;
        background-color: #2388da;
      }
    }
  }
  .filterCondition {
    width: 100%;
    .filter-item{
      width: 108%;
      margin-top: 14px;
      .label{
        display:block;
        width:8%;
        height: 24px;
        line-height: 24px;
        float: left;
        color: #666;
      }
      ul{
        display:block;
        width: 92%;
        float: left;
        font-size: 0;
        li{
          display: inline-block;
          height: 24px;
          line-height: 24px;
          select{
            width: 72px;
            height: 24px;
            border:1px solid #ccc;
            background: url('../../assets/images/selectArrow.png') no-repeat 55px 9px;
            @include border_radius(3px);
            padding: 0 18px 0 4px;
            text-indent: 4px;
          }
          label{
            .text{
              left: 31%;
              top:50%;
              transform: translate(-50%,-134%);
            }
          }
        }
      }
      .classify{
        li{
          cursor: pointer;
          color: $colorFontTheme;
          font-size: $fontSize12;
          padding: 0 14px;
          &.active{
            padding: 0 14px;
            background-color: #2388da;
            color: #fff;
          }
          @include border_radius(3px);
        }
      }
      .fltj{
        li{
          margin-bottom: 14px;
        }
      }
    }
    .selectBox{
      li{
        width: 25%;
        font-size: 0;
        label{
          display: inline-block;
          font-size: $fontSize12;
          width:40%;
          color: #666;
        }
      }
    }
  }
  .text{
    display:none;
    width: 181px;
    position: absolute;
    top: -55px;
    left:25%;
    line-height: 1.4;
    border: 1px solid #ccc;
    padding: 10px;
    @include border_radius(3px);
    background-color: #fff;
    color: #666;
    text-align: left;
    &:after{
      content: '';
      position: absolute;
      bottom: -16px;
      left: 85px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-color: #fff;
    }
    &:before{
      content: '';
      position: absolute;
      bottom: -17px;
      left: 85px;
      width: 0;
      height: 0;
      border: 8px solid transparent;
      border-top-color: #ccc;
    }
  }
  .tsk{
    &:hover{
      + div,>div{
        display: block;
      }
    }
  }
  @media screen and (max-width: 1220px) {
    .filterCondition {
      .filter-item{
        width: 106%;
      }
    }
  }
  .yellow{
    background-color: yellow;
    color: #fff;
  }
</style>
