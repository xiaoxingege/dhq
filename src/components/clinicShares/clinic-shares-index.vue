<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-size: $fontSizeBase;
}
/*$bgDeepColor:#0d0e0f;/* 最深背景 */
/*$bgConColor:#141518;/* 内容背景 */
/*$lineAndTitleColor:#23272c;/* 线条颜色和内容标题背景 */
/*$bgNavColor:#404852;/* 导航外框背景 */
/*$wordsColorBase:#c9d0d7;/* 最亮文字颜色 */
/*$grayWordsColor:#808ba1;/* 灰色文字颜色 所有图标颜色 */
/*$menuSelColor:#525a65;/* 二级菜单选中颜色 */
/*$blueWordsColor:#1984ea;/* 蓝色文字色 */
/*$hoverBgColor:#2e4465;/* 鼠标滑过列表背景色 */
/*$upColor:#ca4941;/* 所有红色 上涨 */
/*$downColor:#56a870;/* 所有绿色 上涨 */
/*$backupYellow:#f0b540;/* 备用黄色 */
/*$fontSizeBase:12px; /* 基本字体 */
.topic-detail {
    width: 100%;
    background: #141518;
    font-size: 14px;
    color: #c9d0d7;
    /* height: 100%; */
    border-left: 1px solid #0d0e0f;
    border-bottom: 3px solid #0d0e0f;
}
.app,
body,
html {
    height: 100%;
}
.clinic-shares-wrap {
    max-width: 1200px;
    height: 100%;
    background-color: $bgDeepColor;
    min-height: 100%;
    margin: 3px auto 1px;
}
body {
    background-color: $bgDeepColor;
}
.c_up {
    color: $upColor;
}
.c_down {
    color: $downColor;
}
.c_txt {
    color: $wordsColorBase;
}
.foot-tishi {
    font-size: 12px;
    color: $wordsColorBase;
    line-height: 28px;
    width: 1200px;
    margin: auto;
    font-family: "Microsoft YaHei";
}
</style>
<template>
<div class="wrap-all clearfix">
  <div class="clinic-shares-wrap clearfix">
    <ClinicMarkTop :innerCode='innerCode' @changeShowValue='getShowValue' />
    <ClinicDimension :innerCode='innerCode' :isShow='isType' />
  </div>
  <div class="foot-tishi clearfix">
    风险提示：诊股结果基于各统计模型计算而来，仅供投资者投资参考，不作为买卖建议，风险自担！
  </div>
</div>
</template>
<script type="text/javascript">
import {
  mapState
} from 'vuex'
import util from '../../z3tougu/util'
import ClinicMarkTop from 'components/clinicShares/clinic-mark-top'
import ClinicDimension from 'components/clinicShares/clinic-dimension'
export default {
  data() {
    return {
      code: this.$route.params.innerCode,
      innerCode: '',
      isType: ''
    }
  },
  computed: mapState({}),
  components: {
    ClinicMarkTop,
    ClinicDimension
  },
  methods: {
    init: function() {
      const query = this.$route.query
      if (query && query.query) {

        this.innerCode = query.query
      } else {
        //  console.log(query.query)
        this.concats(this.code)
        // this.innerCode = '600000.SH'
      }
    },
    concats(code) {
      this.innerCode = util.formatterInnercode(code)
    },
    getShowValue(type) {
      this.isType = type
      console.log(this.isType + '是index 的值')
    }
  },
  watch: {
    isShow() {
      console.log(this.isType)
    }
  },
  mounted() {
    this.init()
    // alert(111111)
    // alert(this.$route.query.query)
    // alert(this.$route.params.innerCode)
    // console.log(this.innerCode)
    // console.log(this.$route.params)
  },
  destroyed() {}
}
</script>
