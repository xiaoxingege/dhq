<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
}
body {
    font-size: 12px;
    background: #141518;
}
h3 {
    font-weight: 400;
}
em,
i {
    font-style: normal;
}
.fr {
    float: right;
}
.fl {
    float: left;
}
.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}
.lightcolor {
    color: #c9d0d7;
}
.gray {
    color: #808ba1;
}

.display-box {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -o-box;
    display: box;
}
.box-flex-1 {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -ms-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
}
.box-flex-2 {
    -webkit-box-flex: 2;
    -moz-box-flex: 2;
    -ms-flex: 2;
    -o-box-flex: 2;
    box-flex: 2;
}
.box-flex-3 {
    -webkit-box-flex: 3;
    -moz-box-flex: 3;
    -ms-flex: 3;
    -o-box-flex: 3;
    box-flex: 3;
}
.box-flex-4 {
    -webkit-box-flex: 4;
    -moz-box-flex: 4;
    -ms-flex: 4;
    -o-box-flex: 4;
    box-flex: 4;
}
.describe-box {
    background: #141518;

}
.describe-wrap {
    width: 100%;
    font-size: 12px;
    color: #c9d0d7;
}
.bfilter-header {
    /* padding: 11px 0 9px 6px; */
    padding: 20px 0 20px 20px;
    color: #c9d0d7;
}
.header-title {
    font-size: 16px;
}
.header-title span {
    font-size: 16px;
}
.describe-left {
    width: 55%;
    /* padding: 14px 10px 0; */
    padding: 14px 46px 0 20px;
}
.desc-title {
    padding-bottom: 11px;
    font-size: 14px;
    font-weight: 900;
}
.desc-con {
    line-height: 20px;
    /* margin-top: 12px; */
    padding-bottom: 22px;
}
.desc-ul {
    padding: 0 0 26px;
    width: 100%;
}
.desc-ul tr:nth-child(1) td {
    color: #808ba1;
}
.desc-ul tr:nth-child(2) td {
    /* padding-top: 12px; */
    color: #c9d0d7;
    font-size: 14px;
}
.desc-ul td {
    /* width: 20%; */
    color: #c9d0d7;
    text-align: left;
    line-height: 20px;
    font-size: 12px;
}

.desc-txt {
    position: relative;
    /* width: 16%; */
    color: #c9d0d7;
    text-align: left;

}
.desc-num {
    /*  position: absolute;
      top: 20px;
      left: 0; */
    color: #c9d0d7;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 60px;
    text-align: left;
    font-size: 14px;
    width: 100%;
    white-space: nowrap;
}
.describe-right {
    /* margin-left: 8px; */
    width: 42%;
    /* padding: 14px 10px 0; */
    padding: 14px 20px 0 43px;
    border-left: 1px solid #0d0e0f;
}
.evaluat-box {
    /*  padding-top: 5px; */
    padding-top: 18px;
    border-collapse: collapse;
    width: 100%;
    color: #c9d0d7;
}
.eval-tr1 {}
.eval-tr2 {}
.evaluat-box tr:nth-child(1) td {
    /* padding-bottom: 13px; */
    padding-bottom: 16px;
    border-bottom: 1px solid #23272c;
}
.evaluat-box tr:nth-child(2) td {
    /* padding-top: 14px; */
    padding-top: 17px;
}
.desc-num1 {
    /* line-height: 24px; */
    line-height: 26px;
    font-size: 14px;
}
.income_list span {
    display: inline-block;
    width: 16%;
}
.li_two {
    margin-top: 100px;
}
.desc-txt2 {
    /* width: 16%; */
    /* width: 28%; */
    /* padding-bottom: 48px; */
    height: 53px;
}
.desc-txt3 {
    width: 26%;
}
</style>
<template>
<div class="describe-box">
  <div class="bfilter-header clearfix">
    <div class="header-title fl"><span>{{ basicFilter.strategyName}}</span><i></i></div>
  </div>
  <div class="describe-wrap clearfix display-box">
    <div class="describe-left box-flex-2">
      <div class="desc-title">策略描述</div>
      <div class="desc-con">
        {{ basicFilter.strategyDesc}}
      </div>
      <div class="desc-title">选股条件</div>
      <table class="desc-ul">
        <tr v-for="trItem in filterSummary" class="trtxt">
          <td v-for="tdItem in trItem" class="tdtxt">{{tdItem}}</td>
        </tr>
      </table>
    </div>
    <div class="describe-right box-flex-2">
      <div class="desc-title">策略表现</div>
      <table class="evaluat-box">
        <tr class="eval-tr1 clearfix">
          <td>
            <span class="gray">胜率
              </span></br><span class="desc-num1" v-z3-updowncolor="eval.winRatio">{{eval.winRatio==null?'--':changePer(eval.winRatio)}}</span>
          </td>
          <td>
            <span class="gray">平均超额收益
              </span></br><span class="desc-num1" v-z3-updowncolor="eval.avgReturnExcess">{{eval.avgReturnExcess==null?'--':changePer(eval.avgReturnExcess)}}</span></td>
          <td>
            <span class="gray">平均收益
              </span></br><span class="desc-num1" v-z3-updowncolor="eval.avgReturn">{{eval.avgReturn==null?'--':changePer(eval.avgReturn)}}</span></td>
          <td>
            <span class="gray">盈亏比
              </span></br><span class="desc-num1">{{eval.winLossRatio==null?'--':Number(eval.winLossRatio).toFixed(2)}}</span></td>
        </tr>
        <tr class="eval-tr2 clearfix">
          <td>
            <span class="gray">持有天数
              </span></br><span class="desc-num1">{{basicFilter.holdDay==null?'--':basicFilter.holdDay}}</span>
          </td>
          <td>
            <span class="gray">最大盈利
              </span></br><span class="desc-num1" v-z3-updowncolor="eval.maxWin">{{eval.maxWin==null?'--':changePer(eval.maxWin)}}</span>
          </td>
          <td>
            <span class="gray">最大亏损
              </span></br><span class="desc-num1" v-z3-updowncolor="eval.maxLoss">{{eval.maxLoss==null?'--':changePer(eval.maxLoss)}}</span>
          </td>
          <td>
            <span class="gray">回测区间
             </span></br><span class="desc-num1">{{basicFilter.backtestStartDate==null?'--':changeDate(basicFilter.backtestStartDate)}}～{{basicFilter.backtestEndDate==null?'--':changeDate(basicFilter.backtestEndDate)}}</span>
          </td>
        </tr>
      </table>

    </div>

  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
      strategyId: this.$route.params.strategyId
    }
  },

  computed: {
    ...mapState({
      basicFilter: state => state.backtestDetail.basicFilter,
      eval: state => state.backtestDetail.basicFilter.evaluationIndexs,
      filterSummary: state => {
        const choseStockTable = state.backtestDetail.basicFilter.filterSummary
        const arr1 = []
        const arr2 = []
        if (choseStockTable.jszbList != null || choseStockTable.gkzbList != null || choseStockTable.jbmzbList != null || choseStockTable.xgfwList != null) {
          if (choseStockTable.jszbList.length > 0) {
            for (let i = 0; i < choseStockTable.jszbList.length; i++) {
              arr1.push(choseStockTable.jszbList[i].indexName)
              arr2.push(choseStockTable.jszbList[i].indexValue)
            }
          }
          if (choseStockTable.gkzbList.length > 0) {
            for (let i = 0; i < choseStockTable.gkzbList.length; i++) {
              arr1.push(choseStockTable.gkzbList[i].indexName)
              arr2.push(choseStockTable.gkzbList[i].indexValue)
            }
          }
          if (choseStockTable.jbmzbList.length > 0) {
            for (let i = 0; i < choseStockTable.jbmzbList.length; i++) {
              arr1.push(choseStockTable.jbmzbList[i].indexName)
              arr2.push(choseStockTable.jbmzbList[i].indexValue)
            }
          }
          if (choseStockTable.xgfwList.length > 0) {
            for (let i = 0; i < choseStockTable.xgfwList.length; i++) {
              arr1.push(choseStockTable.xgfwList[i].indexName)
              arr2.push(choseStockTable.xgfwList[i].indexValue)
            }
          }
        }
        return [arr1, arr2]
      }
    })
  },
  components: {},
  methods: {
    changePer (num) {
      return (Number(num) * 100).toFixed(2) + '%'
    },
    changeDate (time) {
      return (time + '').substring(0, 4) + '-' + (time + '').substring(4, 6) + '-' + (time + '').substring(6, (time + '').length)
    }

  },
  mounted () {
    this.$store.dispatch('backtestDetail/queryBasicFilter', {
      strategyId: this.strategyId
    })
    // console.log(state.backtestDetail.basicFilter.filterSummary)
    this.$watch('basicFilter', function (basicFilter) {
      if (basicFilter) {
        console.log(this.$emit('basicFilterName', basicFilter.strategyName))
        this.$emit('basicFilterName', basicFilter.strategyName)
      }
    })
  }

}
</script>
