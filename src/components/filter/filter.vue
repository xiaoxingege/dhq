<template>
  <div class="filter">
    <div class="filterTop clearfix">
      <div class="filterBox fl">
        <div class="topBar cleafix">
          <a href="javascript:;" class="fr btn">导出基金</a>
          <ul class="tabList fl">
            <li class="active">筛选条件</li>
          </ul>
        </div>
        <!-- 筛选条件 -->
        <filter-select @change='query' @change1='filterType' :options = 'options' @selectType = 'selectType'></filter-select>
      </div>
      <!-- 临时基金池 -->
      <div class="fundPool fl">
        <p class="tr"><a href="javascript:;" class="btn" @click="showDialogFn(content)">保存基金池</a></p>
        <ul class="fundPoolList">
          <li v-for='(item,index) in lsfoundPoolList'><a href="##" class="code">{{item.innerCode}}</a><span class="name">{{item.name}}</span><i class="close" @click='delFoundPoolList(index,item)'></i></li>
        </ul>
      </div>
    </div>
    <!-- 筛选内容 -->
    <div class='filterCon'>
      <div class='top clearfix'>
        <span class="fl">找到基金数：{{fundNum}}</span>
        <div class="search pr fr ml-20">
          <i class="icon_search"></i>
          <input v-model='searchVal' class="searchInput" type="txt" name="name" value="" placeholder='在结果中搜索' @keyup.enter='search'>
        </div>
        <label for="jdx" class="fr">
          <input id='jdx' @change='checked($event)' v-model='isConsignment' type="checkbox" name="name" value="">
          仅显示代销基金
        </label>
      </div>
      <!-- 全部 -->
      <div>
        <table class="table tc">
          <thead>
            <tr>
              <th width='4%'>序号</th>
              <th @click="sorts('innerCode')" width='7.6%'><span>基金代码</span></th>
              <th @click="sorts('chiAbbr')" class="pr" width='12%'><span>基金简称</span><i class="icon_help tsk"></i><div class="text">蓝色表示机构正常代销基金，灰色表示机构暂未代销该基金。</div></th>
              <th @click="sorts('estabDate')" width='6%'><span>成立日期</span></th>
              <th @click="sorts('fundScale')" width='7.6%'><span>规模</span></th>
              <th @click="sorts('managerDurationMax')" width='9%'><span>基金经理任值时间</span></th>
              <th width='7.6%' v-if='typeIndex === 1 || typeIndex === 2'>行业</th>
              <th @click="sorts('fundFav')" width='7.6%' v-if='typeIndex === 1 || typeIndex === 2'><span>基金风格</span></th>
              <th @click="sorts('fundType')" width='7.6%' v-if='typeIndex === 0 || typeIndex === 3'><span>类型</span></th>
              <th @click="sorts('staticYield')" width='7.6%' v-if='typeIndex === 6'><span>静态收益</span></th>
              <th @click="sorts('closedPeriod')" width='7.6%' v-if='typeIndex === 7'><span>封闭期</span></th>
              <th @click="sorts('yearYld')" width='7.6%' v-if='typeIndex === 6 || typeIndex === 7'><span>七日年化收益率</span></th>
              <th @click="sorts('tenthouUnitIncm')" width='7.6%' v-if='typeIndex === 6 || typeIndex === 7'><span>万份收益</span></th>
              <th @click="sorts('chgPct')" width='7.6%' v-if="typeIndex === 0 || typeIndex === 1 || typeIndex === 2 || typeIndex === 3 || typeIndex ===4  || typeIndex ===5"><span>涨跌幅</span></th>
              <th width='7.6%' v-if="typeIndex === 0 || typeIndex === 1 || typeIndex === 2 || typeIndex === 3 || typeIndex ===4  || typeIndex ===5">
                <div class="seletetime">
                  <div @click="seletetimeshow=!seletetimeshow">
                    {{seletetimearr[seletetimenum]}}<i :class="seletetimeshow ? 'downicon' : '' "></i>
                  </div>
                  <ul v-if="seletetimeshow">
                    <li :seletetimenum="index2" @click="seletenumfn($event)" v-for="(item2,index2) in seletetimearr">{{item2}}</li>
                  </ul>
                </div>
              </th>
              <th @click="sorts('trackError')" width='7.6%' v-if='typeIndex ===4 || typeIndex === 5'><span>跟踪误差</span></th>
              <th @click="sorts('performBench')" width='7.6%' v-if='typeIndex === 5'><span>业绩比较基准</span></th>
              <th @click="sorts('firstBuyMin')" width='7.6%'><span>起购金额</span></th>
                <th @click="sorts('fundYieldYearRank')" width='7.6%' v-if='typeIndex === 1 || typeIndex === 2 || typeIndex === 3 || typeIndex === 6'><span>排名</span></th>
              <th @click="sorts('tradeCost')" width='7.6%' v-if='typeIndex === 0' class="pr tsk"><span>交易成本</span><div class="text">基金的最高申购费率、最高赎回费率、管理费率、托管费率、销售服务费率之和</div></th>
              <th width='7.6%'>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for='(item,index) in foundPoolList'>
              <td>{{number*numberOfElements+index+1}}</td>
              <td :class="{'blue' : item.consignment == 1}">{{item.innerCode | isNull}}</td>
              <td :class="{'blue' : item.consignment == 1}" class="tl">{{item.name | isNull}}</td>
              <td>{{format(item.estabDate) | isNull}}</td>
              <td>{{item.fundScale | isNull}}</td>
              <td>{{item.managerDurationMax | isNull}}</td>
              <td v-if='typeIndex === 1 || typeIndex === 2'>{{item.hyName | isNull}}</td>
              <td v-if='typeIndex === 1 || typeIndex === 2'>{{item.fundFav| isNull}}</td>
              <td v-if='typeIndex === 0 || typeIndex === 3'>{{item.fundTypeName  | isNull}}</td>
              <td v-if='typeIndex === 6'>{{item.staticYield | isNull }}</td>
              <td v-if='typeIndex === 7'>{{item.closedPeriod | isNull }}</td>
              <td v-if='typeIndex === 6 || typeIndex === 7'>{{item.yearYld | isNull }}</td>
              <td v-if='typeIndex === 6 || typeIndex === 7'>{{item.tenthouUnitIncm  | isNull}}</td>
              <td v-if="typeIndex === 0 || typeIndex === 1 || typeIndex === 2 || typeIndex === 3 || typeIndex ===4  || typeIndex ===5">
                <span v-z3-updowncolor="item.chgPct">{{item.chgPct  | filterNum("%")}}</span>
              </td>
              <td v-if="typeIndex === 0 || typeIndex === 1 || typeIndex === 2 || typeIndex === 3 || typeIndex ===4  || typeIndex ===5">
                <div v-if="seletetimenum==='0'" v-z3-updowncolor="item.fundYieldMonth">{{item.fundYieldMonth  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='1'" v-z3-updowncolor="item.fundYield3Month">{{item.fundYield3Month  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='2'" v-z3-updowncolor="item.fundYield6Month">{{item.fundYield6Month  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='3'" v-z3-updowncolor="item.fundYieldYearSofar">{{item.fundYieldYearSofar  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='4'" v-z3-updowncolor="item.fundYieldYear">{{item.fundYieldYear  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='5'" v-z3-updowncolor="item.fundYield2Year">{{item.fundYield2Year  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='6'" v-z3-updowncolor="item.fundYield3Year">{{item.fundYield3Year  | filterNum("%")}}</div>
                <div v-if="seletetimenum==='7'" v-z3-updowncolor="item.fundYield5Year">{{item.fundYield5Year  | filterNum("%")}}</div>
              </td>
              <td v-if='typeIndex === 4 || typeIndex === 5'>{{item.trackError | isNull}}</td>
              <td v-if='typeIndex === 5'>{{item.performBench  | isNull}}</td>
              <td>{{item.firstBuyMin | isNull}}</td>
              <td v-if='typeIndex === 0'>{{item.tradeCost | isNull}}</td>
              <td v-if='typeIndex === 1 || typeIndex === 2|| typeIndex === 3 || typeIndex === 6'>{{item.fundYieldYearRankName}}</td>
              <td>
                <a href="javascript:;" class="add_button button"   @click="addIinterimFunds(item)" v-if="!item.inTempPools">加基金池</a>
                <a href="javascript:;" class="remove_button button" @click="removeInterimFunds(item)" v-else>移除</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination v-if="foundPoolListLength > 0" @getPageFromChild="goToPage" :totalPage="totalPage" />
      <p class="tc mt-10" v-if="foundPoolListLength === 0" >暂无数据</p>
    </div>
    <!-- 弹框 -->
    <filter-dialog v-if="dialogShow" @close="dialogCloseFn" @dialogOkFn='dialogOkFn' :title='popTitle' :okbtntxt='okbtntxt' :tsTxt='tsTxt' :content='content'></filter-dialog>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import FilterSelect from 'components/filter/filter-select'
  import FilterDialog from 'components/filter/filter-dialog'
  import Pagination from 'components/pagination'
  export default {
    data () {
      return {
        lsfoundPoolList: [],
        seletetimearr: ['近1个月收益', '近3个月收益', '近6个月收益', '今年以来收益', '近1年收益', '近2年收益', '近3年收益', '近5年收益'],
        seletetimeshow: false,
        seletetimenum: '2',
        dialogShow: false,
        popTitle: '',
        tsTxt: '',
        content: 1,
        okbtntxt: '保存',
        typeIndex: 0,
        sortField: '',
        page: 0,
        pageSize: 20,
        orgCode: 200180365,
        type2: 'jjlx_all',
        searchVal: '',
        sort: 'innerCode,asc',
        num: 0,
        isConsignment: 0,
        filterParams2: {
          jjlx: 'jylx_all', // 基金类型
          jyzt: 'jyzt_all', // 交易状态
          jjgm: 'jjgm_all', // 基金规模
          clsj: 'clsj_all', // 成立时间
          dexz: 'dexz_all', // 大额限制
          sylbx1: 'sylbx_all', // 收益率表现1
          sylbx2: 'sylbx_all', // 收益率表现2
          nhsyl: 'nhsyl_all', // 年化收益率
          hy: 'hy_all', // 行业
          tzfg: 'tzfg_all', // 投资风格
          jhfxq: 'jhfxq_all', // 机会期风险期
          zdhc: 'zdhc_all', // 最大回撤
          xpb: 'xpb_all', // 夏普比
          cesyl: 'cesy_all', // 超额收益
          fbq: 'fbq_all'// 封闭期
        }
      }
    },
    filters: {
      isNull (value) {
        return value === null ? '--' : value
      },
      filterNum (value, type) {
        return value === null ? '--' : value.toFixed(2) + type
      }
    },
    components: {
      FilterSelect,
      FilterDialog,
      Pagination
    },
    computed: {
      ...mapState([
        'foundPoolList',
        'lsfoundPoolList',
        'totalPage',
        'number',
        'numberOfElements',
        'fundNum',
        'page',
        'pageSize',
        'foundPoolListLength'
      ]),
      ...mapGetters({
        foundPoolList: 'foundPoolList',
        lsfoundPoolList: 'lsfoundPoolList',
        totalPage: 'totalPage',
        numberOfElements: 'numberOfElements',
        number: 'number',
        fundNum: 'fundNum',
        page: 'page',
        pageSize: 'pageSize',
        foundPoolListLength: 'foundPoolListLength'
      })
    },
    methods: {
      sorts (value) {
        this.num === this.num++
        if (this.num === 1) {
          this.sort = value + ',desc'
        }
        if (this.num === 2) {
          this.sort = value + ',asc'
        } else {
          this.num = 1
          this.sort = value + ',desc'
        }
        this.query(this.filterParams2, this.page, this.type2)
      },
      seletenumfn (v) {
        this.seletetimenum = v.currentTarget.getAttribute('seletetimenum')
        this.seletetimeshow = false
      },
      addIinterimFunds (item) {
        this.lsfoundPoolList.push(item)
        item.inTempPools = true
      },
      isInTempPoollist (fundid) {
        return this.lsfoundPoolList.some((fund) => {
          return fund.innerCode === fundid
        })
      },
      showDialogFn (content) {
        this.dialogShow = true
        this.content = content
        this.popTitle = '保存当前基金池'
        this.tsTxt = '基金池为空，无法保存！'
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
      selectType (index, type) {
        this.typeIndex = index
        this.type2 = type
        this.query(this.filterParams2, this.page, this.type2)
        if (this.type2 === 'jjlx_all') {
          this.init()
        }
      },
      delFoundPoolList (index, item) {
        this.foundPoolList.some((fund) => {
          if (fund.innerCode === item.innerCode) {
            fund.inTempPools = false
            return true
          }
        })
        this.lsfoundPoolList.splice(index, 1)
      },
      removeInterimFunds (item) {
        item.inTempPools = false
        this.lsfoundPoolList.some((fund, index) => {
          if (fund.innerCode === item.innerCode) {
            this.lsfoundPoolList.splice(index, 1)
            return true
          }
        })
      },
      goToPage (page) {
        this.page = Number(page) - 1
      },
      filterType (type) {
        this.type2 = type
      },
      query (filterParams, type) {
        this.filterParams2 = filterParams
        this.$store.dispatch('getFundPool', { type: this.type2, option: this.filterParams2, isConsignment: this.isConsignment, searchVal: this.searchVal, page: this.page, pageSize: this.pageSize, orgCode: this.orgCode, sort: this.sort })
      },
      format (time) {
        if (time === null) {
          return '--'
        }
        return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
      },
      checked (e) {
        const checked = e.target.checked
        if (checked === true) {
          this.isConsignment = 1
          this.query(this.filterParams2, this.page, this.type2)
        } else {
          this.isConsignment = 0
          this.query(this.filterParams2, this.page, this.type2)
        }
      },
      search () {
        this.query(this.filterParams2, this.page, this.type2)
      },
      init () {
        this.filterParams2.jyzt = 'jyzt_all'
        this.filterParams2.jjlx = 'jylx_all' // 基金类型
        this.filterParams2.jyzt = 'jyzt_all' // 交易状态
        this.filterParams2.jjgm = 'jjgm_all' // 基金规模
        this.filterParams2.clsj = 'clsj_all'// 成立时间
        this.filterParams2.dexz = 'dexz_all' // 大额限制
        this.filterParams2.sylbx1 = 'sylbx_all' // 收益率表现1
        this.filterParams2.sylbx2 = 'sylbx_all' // 收益率表现2
        this.filterParams2.nhsyl = 'nhsyl_all' // 年化收益率
        this.filterParams2.hy = 'hy_all'  // 行业
        this.filterParams2.tzfg = 'tzfg_all' // 投资风格
        this.filterParams2.jhfxq = 'jhfxq_all' // 机会期风险期
        this.filterParams2.zdhc = 'zdhc_all' // 最大回撤
        this.filterParams2.xpb = 'xpb_all' // 夏普比
        this.filterParams2.cesyl = 'cesy_all' // 超额收益
        this.filterParams2.fbq = 'fbq_all'// 封闭期
      }
    },
    created () {
      this.query(this.filterParams2, this.page, this.type2)
    },
    mounted () {
      this.$nextTick(function () {
        this.foundPoolList = this.foundPoolList.map((fund, index) => {
          const tempFund = { ...fund, inTempPools: this.isInTempPoollist(fund.innerCode) }
          return tempFund
        })
      })
    },
    watch: {
      'page': {
        deep: true,
        handler: function (oldVal, newVal) {
          console.log(this.page)
          this.query(this.filterParams2, this.page, this.type2)
        }
      }
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
      span{
        cursor: pointer
      }
    }
    td{
      color: $colorFontTheme;
      height: 40px;
      border-bottom: 1px solid $colorBorder;
      a{
        color: #666;
      }
      &.blue{color:#2388da;}
    }
    select{
      width:92px;
      height: 40px;
      color: #666;
      background: url(../../assets/images/arrows.png) no-repeat right;
    }
  }
  .button{
    display: inline-block;
    width:72px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
    @include  border_radius(3px);
  }
  .add_button{
    border-color: #2388da;
    color: #2388da;
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
        vertical-align: middle;
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
  .seletetime{
    position: relative;
    cursor: pointer;
    i{ border:6px solid transparent;border-top:6px solid #2f94ee;display: inline-block; vertical-align: -4px; margin-left: 5px;}
    .downicon{border-top:6px solid transparent;border-bottom: 6px solid #2f94ee; vertical-align: 2px;}
    ul{ width: 100%;position: absolute; background: #fff;top:30px; left:0;z-index: 999;border: 1px solid #ddd;border-top:0;li{ line-height: 30px; &::hover{ background: #ccc;}}}
  }

</style>
