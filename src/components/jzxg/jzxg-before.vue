<template>
<div class="jzxg-wrap">
  <div class="jzxg-banner">
    <p class="banner-text">金融界顶级智能金融团队打造的策略选股产品，自创AI-Pattern Recognition（人工智能形态识别），AI-Martket Wave Band（人工智能市场波段）算法，Z-Timing择时算法选股，让您抢先享受人工智能选股服务。打造五大策略选出股票，实时送达调仓消息把握交易时机。投顾专家提供专属客服，辅助决策，更胜一筹。</p>
  </div>
  <div class="jzxgblock clearfix jzmnc">
    <div class="jzxgblock-left fl">
      <div class="feature-title">极智模拟仓</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of jzmncLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">
        <IncomeCharts :jzmncChartData="jzmncChartData"></IncomeCharts>
      </div>
      <div style="padding-left: 15px;" v-if="jzmncProfitType === 1">支付宝收益的<span style="color:#fc2721;">{{formatData(jzmncProfitMultiple)?jzmncProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">运用z量化底层算法和AI-Pattern Recognition（人工智能形态识别）算法，通过分析资金面，k线走势形态，策略判断出即将出现主升浪的个股，轻松赢在起跑线；按照黄金盈亏比例预设止损止盈点，跟随策略调仓，无畏恐惧，战胜贪婪。</p>
        <div class="ten-stock-title">极智十大牛股</div>
        <div class="ten-stock">
          <tenStocks :tenStockList="jzmncTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="jzxgblock clearfix bdyx">
    <div class="jzxgblock-left fl">
      <div class="feature-title">波段优选</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of bdyxLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;" class="clearfix">
        <div class="fl pie-wrap">
          <PieChart :PieData="bdyxPieData"></PieChart>
        </div>
        <div class="sel-process fl">
          <p class="pro-title">选股流程</p>
          <p>覆盖-全部A股股票</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>定位-价格波段低点个股</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>优选-分析洗盘完成，开始反转的个股</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>严选-大数据分析市场所处轮动风格，推荐股票</p>
        </div>
      </div>
      <div style="padding-left: 15px;" v-if="bdyxProfitType === 1">支付宝收益的<span style="color:#fc2721;">{{formatData(bdyxProfitMultiple)?bdyxProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">万物互联，AI-Martket Wave Band（人工智能市场波段）算法把物理学中电磁波和衍射分析的思想和市场行为结合，打造出波段优选策略。择天时，定低点，判洗盘，抓反转；高抛低吸，道法自然。</p>
        <div class="ten-stock-title">波段优选十大牛股</div>
        <div class="ten-stock">
          <tenStocks :tenStockList="bdyxTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="jzxgblock clearfix zxjj">
    <div class="jzxgblock-left fl">
      <div class="feature-title">中线掘金</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of zxjjLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">
        <div class="fl pie-wrap">
          <PieChart :PieData="zxjjPieData"></PieChart>
        </div>
        <div class="sel-process fl">
          <p class="pro-title">选股流程</p>
          <p>覆盖-全部A股股票</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>定位-中长周期低价股</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>择时-Z-Timing模型避开系统性风险</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>掘金-深挖金股，用时间换空间</p>
        </div>
      </div>
      <div style="padding-left: 15px;" v-if="zxjjProfitType === 1">支付宝收益的<span style="color:#fc2721;">{{formatData(zxjjProfitMultiple)?zxjjProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">用时间换空间，中线掘金策略中期范围内挖掘价格错配个股，并采用是自主研发的Z-Timing择时模型，深度学习市场风格，规避系统性风险，捕捉价值回归。</p>
        <div class="ten-stock-title">中线掘金十大牛股</div>
        <div class="ten-stock">
          <tenStocks :tenStockList="zxjjTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="jzxgblock clearfix rdjj">
    <div class="jzxgblock-left fl">
      <div class="feature-title">热点狙击</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of rdjjLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">
        <div class="fl pie-wrap">
          <PieChart :PieData="rdjjPieData"></PieChart>
        </div>
        <div class="sel-process fl">
          <p class="pro-title">选股流程</p>
          <p>覆盖-全部A股股票</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>搜索-热点行业/热点股票/热点事件</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>挖掘-热点符合轮动规律个股</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>狙击-选出个股，坐等“风口”</p>
        </div>
      </div>
      <div style="padding-left: 15px;" v-if="rdjjProfitType === 1">支付宝收益的<span style="color:#fc2721;">{{formatData(rdjjProfitMultiple)?rdjjProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">热点狙击旨在利用量化趋势分析技术，智能地抓取板块热度的起势点，并通过板块内轮动原理，挖掘未来涨势可能较大的股票。不再追高，坐等风口。</p>
        <div class="ten-stock-title">热点狙击十大牛股</div>
        <div class="ten-stock">
          <tenStocks :tenStockList="rdjjTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="jzxgblock clearfix zltj">
    <div class="jzxgblock-left fl">
      <div class="feature-title">主力天机</div>
      <ul class="income-labels clearfix">
        <li class="fl" v-for="item of zltjLabelData">
          <span class="label-name">{{item.label}}</span>
          <span class="label-value">{{item.value}}</span>
        </li>
      </ul>
      <div style="height:275px;">
        <div class="fl pie-wrap">
          <PieChart :PieData="zltjPieData"></PieChart>
        </div>
        <div class="sel-process fl">
          <p class="pro-title">选股流程</p>
          <p>覆盖-全部A股股票</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>挖掘-连续新高，高动量个股</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>分析-主力资金流向</p>
          <img src="../../assets/images/jzxg/jzxg-arrow.png" />
          <p>识别-短期获利机会</p>
        </div>
      </div>
      <div style="padding-left: 15px;" v-if="zltjProfitType === 1">支付宝收益的<span style="color:#fc2721;">{{formatData(zltjProfitMultiple)?zltjProfitMultiple:'--'}}</span>倍!</div>
    </div>
    <div class="jzxgblock-right fl">
      <div class="jzxgblock-right-wrap">
        <p class="jzxgblock-right-text">主力天机利用AI-Pattern Recognition（人工智能形态识别）技术，识别出前期稳定，近期连续突破新高的个股，有效地判断出主力资金的投资行为，从而达到短期的获利。跟对主力，顺势而为。</p>
        <div class="ten-stock-title">主力天机十大牛股</div>
        <div class="ten-stock">
          <tenStocks :tenStockList="zltjTenStockData"></tenStocks>
        </div>
        <div class=""><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">策略由z量化团队提供技术支持</div>
      </div>
    </div>
  </div>
  <div class="featured-class">
    <div class="class-title">
      <span style="font-size:16px;margin-right:15px;">极智精选课</span>
      <span>金融界首席投顾团队，数十年股票相关研究经验，深耕股票领域，精心筹备三大系列课程，旨在投教结合，带您某在趋势，赢在布局。</span>
    </div>
    <ul class="video-wrap display-box">
      <li class="box-flex-1 video-li">
        <div class="video-con">
          <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/jzxg2018.mp4" controls="controls" controlslist='nodownload'></video>
        </div>
        <div class="video-txt">
          <p class="video-txt-title">《手把手教你玩转极智选股》</p>
          <p>首席投顾全面剖析产品的背后逻辑以及五大金股池使用秘籍</p>
        </div>
      </li>
      <li class="box-flex-1 video-li">
        <div class="video-con">
          <video src="http://flvdata.jrj.com.cn/2012/2017/hezuo/yjbf01.mp4" controls="controls" controlslist='nodownload'></video>
        </div>
        <div class="video-txt">
          <p class="video-txt-title">《赢家兵法-操盘必看》</p>
          <p>分享独家操盘心经与股市经验心得，帮助您轻松应对股市行情</p>
        </div>
      </li>
      <li class="box-flex-1 video-li">
        <div class="video-con" style="position: relative">
          <video poster="http://i0.jrjimg.cn/bighq/zongheng.jpg" style="width: 95%;"></video>
          <div style="position:absolute;width:95%;height:95%;background-color:rgba(0,0,0,0.3);top:0;left:0;">
            <div style="width:56px;height:56px;background-color:#fefefd;border-radius: 50%;position: absolute;top:57px;left:110px;">
              <div class="arrow-play"></div>
              <!--  <img src="../../assets/images/jzxg/play.png" />-->
            </div>
          </div>
        </div>
        <div class="video-txt">
          <p class="video-txt-title">《纵横股今》</p>
          <p>深度解析当天市场行情，市场热点机会实时显现</p>
        </div>
      </li>
    </ul>
  </div>
  <div class="seven-service">
    <div class="class-title">
      <span style="font-size:16px;margin-right:15px;">七大服务决胜A股</span>
    </div>
    <ul class="service-wrap display-box">
      <li class="box-flex-1"><img src="../../assets/images/jzxg/jzmnc.png" />
        <p>极智模拟仓</p>
      </li>
      <li class="box-flex-1"><img src="../../assets/images/jzxg/service2.png" />
        <p>极智内参</p>
      </li>
      <li class="box-flex-1"><img src="../../assets/images/jzxg/service3.png" />
        <p>四大金股池</p>
      </li>
      <li class="box-flex-1"><img src="../../assets/images/jzxg/service4.png" />
        <p>热点题材策略</p>
      </li>
      <li class="box-flex-1"><img src="../../assets/images/jzxg/service5.png" />
        <p>投服1对1服务</p>
      </li>
      <li class="box-flex-1"><img src="../../assets/images/jzxg/service6.png" />
        <p>视频精品课</p>
      </li>
      <li class="box-flex-1"><img src="../../assets/images/jzxg/service7.png" />
        <p>产品帮助绿色通道</p>
      </li>
    </ul>
  </div>
  <div class="team-info">
    <p style="font-size:16px;">金融界-新兰德 三大团队为您投资赋能</p>
    <p>金融界专业投顾团队：皆由从事股票领域工作数十年、实战经验丰富的投资顾问组成，团队成员全部拥有证券执业资质，曾多次应邀出席业界研讨会及接受新闻媒体访问，其实力早已获得专业领域的普遍认同。</p>
    <p>金融界研究院：中国金融在线集团旗下研究机构，致力于研究中国宏观经济和资本市场，擅长对资讯、大数据以及市场交易者行为进行挖掘。团队成员80%以上拥有研究生及以上学历，具备证券公司、公募基金、私募机构等行业从业经历。</p>
    <p>金融界智能金融团队：拥有国内首家专注于智能金融研究的博士后科研工作站，成员均来自国内外名校，全部为硕士以上学历，潜心研究金融智能算法，不断优化输出高胜率炒股策略。</p>
    <div class="clearfix" style="margin-top:40px;">
      <img src="../../assets/images/jzxg/team1.png" class="fl" />
      <img src="../../assets/images/jzxg/team2.png" class="fl" style="margin-left: 40px;" />
    </div>
  </div>
  <div class="jzxg-footer">
    <p><img src="../../assets/images/jzxg/tip.png" alt="" style="margin-right:3px;">订阅后消息中心实时推送调仓信息供您查收；同时可登录大行情app让您策略不离身。</p>
    <p>
      <a class="to-subscribe" @click="alertBuy">我要订阅</a>
    </p>
    <div class="subscrip-div">已售<span class="subscrip">{{formatData(subscriptions)?subscriptions:'--'}}</span>份！</div>
    <div class="contact-div">
      <p>联系我的专属客服</p>
      <p>400-166-1188</p>
    </div>
  </div>
  <buyModel :showstate='showBuy' @buyClose="cancle"></buyModel>
</div>
</template>
<script>
import IncomeCharts from 'components/jzxg/income-chart'
import tenStocks from 'components/jzxg/ten-stock'
import PieChart from 'components/jzxg/pie-chart'
import buyModel from 'components/touguStudio/buy'
import {
  mapState
} from 'vuex'
export default {
  props: [],
  data() {
    return {
      showBuy: false,
      // 收益标签值
      jzmncLabelData: [],
      bdyxLabelData: [],
      zxjjLabelData: [],
      rdjjLabelData: [],
      zltjLabelData: [],
      // 收益曲线和饼图值
      jzmncChartData: null,
      bdyxPieData: null,
      zxjjPieData: null,
      rdjjPieData: null,
      zltjPieData: null,
      // 十大牛股
      jzmncTenStockData: null,
      bdyxTenStockData: null,
      zxjjTenStockData: null,
      rdjjTenStockData: null,
      zltjTenStockData: null,
      // 收益倍数
      jzmncProfitMultiple: '',
      bdyxProfitMultiple: '',
      zxjjProfitMultiple: null,
      rdjjProfitMultiple: null,
      zltjProfitMultiple: null,
      // 是否显示收益倍数
      jzmncProfitType: 1,
      bdyxProfitType: 1,
      zxjjProfitType: 1,
      rdjjProfitType: 1,
      zltjProfitType: 1
    }
  },
  watch: {

  },
  components: {
    IncomeCharts,
    tenStocks,
    PieChart,
    buyModel
  },
  computed: mapState({
    subscriptions: state => state.jzxg.subscriptions,
    jzmncData: state => state.jzxg.jzmncData,
    bdyxData: state => state.jzxg.bdyxData,
    zxjjData: state => state.jzxg.zxjjData,
    rdjjData: state => state.jzxg.rdjjData,
    zltjData: state => state.jzxg.zltjData
  }),
  methods: {
    init: function() {
      this.$store.dispatch('jzxg/getJzxgBeforeData').then(() => {
        // 收益标签值
        this.jzmncLabelData = this.jzmncData.indicators
        this.bdyxLabelData = this.bdyxData.indicators
        this.zxjjLabelData = this.zxjjData.indicators
        this.rdjjLabelData = this.rdjjData.indicators
        this.zltjLabelData = this.zltjData.indicators
        // 收益曲线和饼图值
        this.jzmncChartData = this.jzmncData.performCurve
        this.bdyxPieData = this.bdyxData.performStatistic
        this.zxjjPieData = this.zxjjData.performStatistic
        this.rdjjPieData = this.rdjjData.performStatistic
        this.zltjPieData = this.zltjData.performStatistic
        // 十大牛股
        this.jzmncTenStockData = this.jzmncData.hotStocks
        this.bdyxTenStockData = this.bdyxData.hotStocks
        this.zxjjTenStockData = this.zxjjData.hotStocks
        this.rdjjTenStockData = this.rdjjData.hotStocks
        this.zltjTenStockData = this.zltjData.hotStocks
        // 收益倍数
        this.jzmncProfitMultiple = this.jzmncData.profitMultiple
        this.bdyxProfitMultiple = this.bdyxData.profitMultiple
        this.zxjjProfitMultiple = this.zxjjData.profitMultiple
        this.rdjjProfitMultiple = this.rdjjData.profitMultiple
        this.zltjProfitMultiple = this.zltjData.profitMultiple
        // 是否显示收益倍数
        this.jzmncProfitType = this.jzmncData.profitType
        this.bdyxProfitType = this.bdyxData.profitType
        this.zxjjProfitType = this.zxjjData.profitType
        this.rdjjProfitType = this.rdjjData.profitType
        this.zltjProfitType = this.zltjData.profitType
      })
    },
    formatData: function(value) {
      if (value || value === 0) {
        return true
      } else {
        return false
      }
    },
    cancle: function() {
      this.showBuy = false;
    },
    alertBuy: function() {
      this.showBuy = true;
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/css/base.css";
@import "../../assets/scss/style";
.jzxg-wrap {
    background-color: $bgDeepColor;
    font-size: 12px;
    min-width: 1217px;
    padding: 3px 1px;
    font-family: "Microsoft YaHei";
    color: $wordsColorBase;
}
.jzxg-wrap {
    box-sizing: border-box;
    * {
        box-sizing: border-box;
    }
}
.featured-class,
.jzxgblock,
.seven-service,
.team-info {
    background-color: $bgConColor;
}
.jzxg-banner {
    height: 220px;
    background: url("../../assets/images/jzxg/jzxg_banner.png") center;
    overflow: hidden;
}
.banner-text {
    font-size: 14px;
    color: #e3b45e;
    margin-top: 130px;
    padding: 22px 85px;
}
.jzxgblock {
    height: 355px;
    position: relative;
    margin-bottom: 10px;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
}
.jzxgblock:hover {
    /*  border-top: 5px solid rgba(18,82,108,0.6);
    border-bottom: 5px solid rgba(18,82,108,0.6);*/
    box-shadow: 0 0 10px rgba(37,139,181,0.8);
}
.feature-title {
    position: absolute;
    top: 0;
    left: 0;
    width: 158px;
    height: 45px;
    text-align: center;
    line-height: 45px;
    font-size: 20.33px;
    color: #fff;
    background: -webkit-linear-gradient(left top, #3d99e7, #0d62db);
    background: -o-linear-gradient(bottom right, #3d99e7, #0d62db);
    background: -moz-linear-gradient(bottom right, #3d99e7, #0d62db);
    background: linear-gradient(to bottom right, #3d99e7, #0d62db);
    border-bottom: 1px solid rgba(125,196,216,0.5);
    border-right: 1px solid rgba(125,196,216,0.5);
}
.jzxgblock-left {
    width: 53.9%;
    height: 100%;
    padding-right: 20px;
    padding-bottom: 20px;
}
.jzxgblock-right {
    width: 45.1%;
    height: 100%;
    padding: 30px 0;
}
.jzxgblock-right-wrap {
    border-left: 1px solid $bgDeepColor;
    padding: 0 10px;
    height: 100%;
}
.jzxgblock-right-text {
    height: 80px;
    border-bottom: 1px solid $bgDeepColor;
    line-height: 23px;
}
.income-labels {
    padding: 20px 0 10px 200px;
}
.income-labels li {
    margin-left: 45px;
}
.income-labels li:first-child {
    margin-left: 0;
}
.label-name {
    color: $wordsColorBase;
    margin-right: 10px;
}
.label-value {
    color: $upColorDhq;
}
.ten-stock {
    height: 170px;
}
.ten-stock-title {
    height: 30px;
    padding-top: 10px;
}
.sel-process {
    width: 45%;
    height: 100%;
    padding: 40px;
}
.sel-process img {
    margin: 6px 0;
}
.pro-title {
    font-size: 14px;
    margin-bottom: 26px;
}
.pie-wrap {
    width: 55%;
    height: 100%;
}
.featured-class {
    height: 385px;
    margin: 15px 0;
    padding: 24px 12px;
}
.class-title {
    margin-bottom: 20px;
}
.video-wrap {
    padding: 0 30px;
    height: 280px;
}
.video-li {}
.video-con {
    width: 290px;
    height: 180px;
    margin: 0 auto;
}
.video-con video {
    width: 100%;
}
.video-txt {
    margin: 20px auto 0;
    width: 170px;
}
.video-txt p {
    line-height: 30px;
}
.video-txt-title {
    text-align: center;
}
.seven-service {
    height: 246px;
    margin: 15px 0;
    padding: 24px 12px;
}
.service-wrap li {
    text-align: center;
}
.service-wrap li p {
    text-align: center;
    margin-top: 28px;
}
.team-info {
    height: 660px;
    margin: 15px 0;
    padding: 24px 74px 0 50px;
}
.team-info p {
    margin-bottom: 15px;
}
.jzxg-footer {
    background-color: $bgDeepColor;
    height: 85px;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
}
.jzxg-footer p {
    text-align: center;
}
.to-subscribe {
    display: inline-block;
    width: 560px;
    height: 40px;
    background-color: #fc2721;
    margin-top: 10px;
    border-radius: 3px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    cursor: pointer;
}
.subscrip-div {
    position: absolute;
    left: 15px;
    bottom: 10px;
}
.subscrip {
    color: $upColorDhq;
}
.contact-div {
    position: absolute;
    right: 7px;
    bottom: 12px;
}
.contact-div p {
    text-align: right;
    margin-top: 6px;
}
.arrow-play {
    width: 0;
    height: 0;
    border-left: 15px solid #000;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    position: absolute;
    right: 18px;
    top: 20px;
}
</style>