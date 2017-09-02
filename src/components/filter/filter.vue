<template>
<div class="filter">
  <div class="filterTop clearfix">
    <div class="filterBox fl">
      <div class="topBar cleafix">
        <a href="javascript:;" class="fr btn">导出基金</a>
        <ul class="tabList fl">
          <li class="active">筛选条件</li>
          <li>条件重置</li>
        </ul>
      </div>
      <!-- 筛选条件 -->
      <filter-select></filter-select>
    </div>
    <!-- 临时基金池 -->
    <div class="fundPool fl">
      <p class="tr"><a href="javascript:;" class="btn">保存基金池</a></p>
      <ul class="fundPoolList">
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
        <li><a href="##" class="code">000001</a><span class="name">华夏优势增长混合</span><i class="close"></i></li>
      </ul>
    </div>
  </div>
  <!-- 筛选内容 -->
  <div class='filterCon'>
    <div class='top clearfix'>
      <span class="fl">找到基金数：2000</span>
      <div class="search pr fr ml-20">
        <i class="icon_search"></i>
        <input class="searchInput" type="txt" name="name" value="" placeholder='在结果中搜索'>
      </div>
      <label for="jdx" class="fr">
        <input id="jdx" type="checkbox" name="name" value="">
        仅显示代销基金
      </label>
    </div>
    <div>
      <table class="table tc">
        <thead>
          <tr>
            <th>序号</th>
            <th>基金代码</th>
            <th class="pr">基金简称<i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
            <th>成立日期</th>
            <th>规模</th>
            <th>基金经理任值时间</th>
            <th>类型</th>
            <th>涨跌幅</th>
            <th>
              <select>
                <option>近1个月收益</option>
                <option>近3个月收益</option>
                <option>近3个月收益</option>
                <option>近1年收益</option>
                <option>近2年收益</option>
                <option>近3年收益</option>
                <option>近4年收益</option>
                <option>近5年收益</option>
              </select>
            </th>
            <th>起购金额</th>
            <th>交易成本</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><a href="##">1661724</a></td>
            <td><a href="##">招商中证煤炭等权指数</a></td>
            <td>2011-03-20</td>
            <td>2亿</td>
            <td>1年50天</td>
            <td>股票型</td>
            <td><span class="cGreen">-2.31%</span></td>
            <td><span class='cRed'>2.31%</span></td>
            <td>1.00元</td>
            <td>1.31%</td>
            <td><a href="javascript:;" class="add_button button">加基金池</a></td>
          </tr>
          <tr>
            <td>1</td>
            <td><a href="##">1661724</a></td>
            <td><a href="##">招商中证煤炭等权指数</a></td>
            <td>2011-03-20</td>
            <td>2亿</td>
            <td>1年50天</td>
            <td>股票型</td>
            <td><span class="cGreen">-2.31%</span></td>
            <td><span class='cRed'>2.31%</span></td>
            <td>1.00元</td>
            <td>1.31%</td>
            <td><a href="javascript:;" class="remove_button button">移除</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import FilterSelect from '../../components/filter/filter-select'
export default {
  components: {
    FilterSelect
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/common/variable.scss';
@import '../../assets/css/reset.css';
@import '../../assets/css/base.css';
@mixin border_radius($num){-webkit-border-radius: $num;-moz-border-radius: $num;border-radius: $num;}
.app>*{
  width: auto;
  position: static;
  text-align: left;
}
.cGreen{color:$colorFontFall}
.cRed{color:$colorFontRise}
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
.filterTop {
    width: 100%;
}
.filterBox {
    width: 70%;
    .topBar {
        height: 24px;
        border-bottom: 1px solid $colorFontBlue;
    }
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
.fundPool {
    width: 28%;
    height:175px;
    ul {
        display: block;
        height: 178px;
        overflow: hidden;
        overflow-y: auto;
        margin-top: 20px;
        li {
            position: relative;
            font-size: $fontSize12;
            text-align: left;
            padding-left: 37px;
            height: 25px;
            line-height: 25px;
            span {
                display: inline-block;
                overflow: hidden;
            }
            .close {
                display: block;
                position: absolute;
                right: 10px;
                top: 0;
                cursor: pointer;
            }
            .code {
                width: 20%;
                display: block;
                float: left;
            }
            .name {
                width: 76%;
                white-space: pre;
                text-overflow: ellipsis;
            }
        }
    }
}
.table{
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  th{
    font-weight: normal;
    color: #666;
    height: 30px;
    line-height: 30px;
    background-color: #f2f2f2;
  }
  td{
    color: $colorFontTheme;
    height: 40px;
    border-bottom: 1px solid $colorBorder;
    a{
      color: #666;
      &:hover{
        color: #2388da;
      }
    }
    .button{
      display: inline-block;
      width:72px;
      height: 22px;
      line-height: 22px;
      text-align: center;
      border: 1px solid #ccc;
      @include  border_radius(3px);
    }
    .add_button{
      border-color: #2388da;
      color: #2388da;
    }
  }
  select{
    width:92px;
    height: 40px;
    color: #666;
    background: url(../../assets/images/arrows.png) no-repeat right;
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
.filterCon{
  .top{
    height: 30px;
    line-height: 30px;
    color: #666;
    margin-bottom: 5px;
  }
  .search{
    width: 120px;
    height: 22px;
    .icon_search{
      position: absolute;
      top: 10px;
      left: 8px;
      display: block;
      width: 13px;
      height:13px;
      background: url(../../assets/images/search.png) no-repeat;
    }
    .searchInput{
      width: 120px;
      height: 22px;
      border: 1px solid #ccc;
      @include border_radius(3px);
      text-indent: 25px;
    }
  }
  label{
    color: $colorFontTheme;
    cursor: pointer;
    input{
      vertical-align: -3px;
    }
  }
  select{
    padding: 5px;
  }
}
.icon_help{
  display: inline-block;
  width: 15px;
  height:15px;
  background: url(../../assets/images/help.png) no-repeat;
  vertical-align: -3px;
  margin-left: 4px;
}
.close{
  display: inline-block;
  width: 9px;
  height:9px;
  background: url(../../assets/images/f_close.png) no-repeat;
  vertical-align: -3px;
  margin-left: 4px;
  cursor: pointer;
}
.show{display: block;}
.tsk{
  &:hover{
    + div,>div{
      display: block;
    }
  }
}
</style>
