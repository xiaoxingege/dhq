<template>
  <!-- 筛选条件 -->
  <div class="filterCondition clearfix">
    <div class="filter-item clearfix">
      <span class="label">分类筛选：</span>
      <ul class="classify">
        <li>全部</li>
        <li class="active">股票型</li>
        <li>混合型</li>
        <li>债券型</li>
        <li>指数型</li>
        <li>QDII型</li>
        <li>货币型</li>
        <li>理财型</li>
      </ul>
    </div>
    <div class="filter-item clearfix">
      <span class="label">通用条件：</span>
      <ul class="selectBox">
        <li>
          <label>交易状态：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>基金规模：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>成立时间：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>人额限制：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
      </ul>
    </div>
    <div class="filter-item clearfix">
      <span class="label">业绩表现：</span>
      <ul class="selectBox">
        <li>
          <label>收益率表现1：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>收益率表现2：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>年化收益率：</label>
          <select>
            <option>全部</option>
            <option>全部全部全部全部</option>
          </select>
        </li>
      </ul>
    </div>
    <div class="filter-item clearfix">
      <span class="label">分类条件：</span>
      <ul class="fltj selectBox">
        <li>
          <label>行业：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>投资风格：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label class="pr tsk">机会期：<div class="text">从基金行业、投资风格等多维度，通过智能算法模型，提供基金建仓或增仓时机</div></label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label class="pr tsk">风险期：<div class="text">从基金行业、投资风格等多维度，通过智能算法模型，提供基金减仓时机</div></label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>最大回撤：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>夏普比：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li>
          <label>超额收益：</label>
          <select>
            <option>全部</option>
          </select>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
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
          padding: 0 18px 0 5px;
        }
        label{
          .text{
            top: -74px;
            left: -67%;
          }
        }
      }
    }
    .classify{
      li{
        cursor: pointer;
        margin-right: 10px;
        color: $colorFontTheme;
        font-size: $fontSize12;
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
</style>
