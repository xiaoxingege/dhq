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
      <filter-select @selectType = 'selectType'></filter-select>
    </div>
    <!-- 临时基金池 -->
    <div class="fundPool fl">
      <p class="tr"><a href="javascript:;" class="btn" @click="showDialogFn(content)">保存基金池</a></p>
      <ul class="fundPoolList">
        <li v-for='item in lsfoundPoolList'><a href="##" class="code">{{item.code}}</a><span class="name">{{item.name}}</span><i class="close" @click='delFoundPoolList(item.id)'></i></li>
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
    <!-- 全部 -->
    <div v-if="typeIndex == 0">
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
            <th class="pr tsk">交易成本<div class="text">基金的最高申购费率、最高赎回费率、管理费率、托管费率、销售服务费率之和</div></th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for='item in foundPoolList'>
            <td>{{item.id}}</td>
            <td><a href="##">{{item.symbol}}</a></td>
            <td><a href="##">{{item.name}}</a></td>
            <td>{{item.estabDate}}</td>
            <td>{{item.fundScale}}</td>
            <td>{{item.managerDurationMax}}</td>
            <td>{{item.fundFav }}</td>
            <td><span :class="item.chgPct >0 ?'cRed':'cGreen'">{{item.chgPct}}</span></td>
            <td><span :class="item.chgPct >0 ?'cRed':'cGreen'">{{item.sy}}</span></td>
            <td>{{item.qgje}}</td>
            <td>{{item.jycb}}</td>
            <td>
              <a :class="{show}" href="javascript:;" class="add_button button"   @click="addIinterimFunds(item.id)">加基金池</a>
              <a v-if='typeBtn == 2' href="javascript:;" class="remove_button button" @click="removeInterimFunds(item.id)">移除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 股票型、混合型 -->
    <div v-if="typeIndex == 1 || typeIndex == 2">
      <table class="table tc">
        <thead>
          <tr>
            <th>序号</th>
            <th>基金代码</th>
            <th class="pr">基金简称<i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
            <th>成立日期</th>
            <th>规模</th>
            <th>基金经理任值时间</th>
            <th>行业</th>
            <th>基金风格</th>
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
            <th class="pr">排名<div class="text">根据近1年JRJ基金评价计算</div></th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <!-- 债券型 -->
    <div v-if="typeIndex == 3">
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
            <th class="pr">排名<div class="text">根据近1年JRJ基金评价计算</div></th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <!-- 指数型 -->
    <div v-if="typeIndex == 4">
      <table class="table tc">
        <thead>
          <tr>
            <th>序号</th>
            <th>基金代码</th>
            <th class="pr">基金简称<i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
            <th>成立日期</th>
            <th>规模</th>
            <th>基金经理任值时间</th>
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
            <th>跟踪误差</th>
            <th>起购金额</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <!-- QDII型 -->
    <div v-if="typeIndex == 5">
      <table class="table tc">
        <thead>
          <tr>
            <th>序号</th>
            <th>基金代码</th>
            <th class="pr">基金简称<i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
            <th>成立日期</th>
            <th>规模</th>
            <th>基金经理任值时间</th>
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
            <th>跟踪误差</th>
            <th>业绩比较基准</th>
            <th>起购金额</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <!-- 货币型 -->
    <div v-if="typeIndex == 6">
      <table class="table tc">
        <thead>
          <tr>
            <th>序号</th>
            <th>基金代码</th>
            <th class="pr">基金简称<i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
            <th>成立日期</th>
            <th>规模</th>
            <th>基金经理任值时间</th>
            <th>静态收益</th>
            <th>七日年化收益率</th>
            <th>万份收益</th>
            <th>起购金额</th>
            <th>排名</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <!-- 理财型 -->
    <div v-if="typeIndex == 7">
      <table class="table tc">
        <thead>
          <tr>
            <th>序号</th>
            <th>基金代码</th>
            <th class="pr">基金简称<i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
            <th>成立日期</th>
            <th>规模</th>
            <th>基金经理任值时间</th>
            <th>封闭期</th>
            <th>七日年化收益率</th>
            <th>万份收益</th>
            <th>起购金额</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 弹框 -->
  <filter-dialog v-if="dialogShow" @close="dialogCloseFn" @dialogOkFn='dialogOkFn' :title='popTitle' :okbtntxt='okbtntxt' :tsTxt='tsTxt' :content='content'></filter-dialog>
</div>
</template>

<script>
import FilterSelect from '../../components/filter/filter-select'
import FilterDialog from '../../components/filter/filter-dialog'
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      lsfoundPoolList: [],
      // foundPoolList: [
        // { id: 1, code: '000001', name: '华夏优势增长混合1', data: '2011-03-20', gm: '2亿', rzsj: '1年50天', type: '股票型', zdf: '-2.31', sy: '-2.31', qgje: '1.00', jycb: '1.00' },
        // { id: 2, code: '000001', name: '华夏优势增长混合2', data: '2011-03-20', gm: '2亿', rzsj: '1年50天', type: '股票型', zdf: '-2.31', sy: '-2.31', qgje: '1.00', jycb: '1.00' },
        // { id: 3, code: '000001', name: '华夏优势增长混合3', data: '2011-03-20', gm: '2亿', rzsj: '1年50天', type: '股票型', zdf: '-2.31', sy: '-2.31', qgje: '1.00', jycb: '1.00' },
        // { id: 4, code: '000001', name: '华夏优势增长混合4', data: '2011-03-20', gm: '2亿', rzsj: '1年50天', type: '股票型', zdf: '-2.31', sy: '-2.31', qgje: '1.00', jycb: '1.00' }
      // ],
      dialogShow: false,
      btnStatus: true,
      popTitle: '',
      tsTxt: '',
      content: 1,
      okbtntxt: '保存',
      typeIndex: 0,
      typeBtn: 1
    }
  },
  components: {
    FilterSelect,
    FilterDialog
  },
  computed: {
    ...mapState([
      'foundPoolList'
    ]),
    ...mapGetters({
      foundPoolList: 'foundPoolList'
    })
  },
  methods: {
    addIinterimFunds (id) {
      for (let i = 0; i < this.foundPoolList.length; i++) {
        if (this.foundPoolList[i].id === id) {
          this.foundPoolList[i].typeBtn = 2
          // var item = this.foundPoolList[i]
          // this.foundPoolList.splice(i, 1)
          console.log(this.foundPoolList[i])
          break
        }
      }
    },
    showDialogFn (content) {
      const length = this.lsfoundPoolList.length
      console.log(length)
      this.dialogShow = true
      this.content = content
      if (length > 0) {
        if (content === 1) {
          this.popTitle = '保存当前基金池'
          this.tsTxt = '基金池为空，无法保存！'
        }
      }
      if (length === 0) {
        this.content = 2
        if (content === 2) {
          this.popTitle = '提示'
          this.tsTxt = '基金池为空，无法保存！'
          this.okbtntxt = '确认'
        }
      }
    },
    dialogCloseFn () {
      this.dialogShow = false
    },
    dialogOkFn () {
      if (this.content === 1) {
        alert('保存')
        this.dialogShow = false
      } else if (this.content === 2) {
        this.dialogShow = false
      }
    },
    selectType (index) {
      this.typeIndex = index
    }
  },
  mounted () {
    this.$store.dispatch('getFundPool')
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
      height: 230px;
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
                  top:8px;
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
    left:21px;
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
        top: 8px;
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
