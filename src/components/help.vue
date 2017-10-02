<style scoped="">
@import '../assets/css/base.css';
.jumpto-subnav .jumpto-second {
  display: none;
}

.jumpto-subnav.fixed.bottom {
  top: auto;
  bottom: 0;
  position: absolute !important;
}

.jumpto-subnav ul li a:hover,
.jumpto-subnav ul li a.active {
  background-color: #1077d6;
  color: white;
}

.jumpto-second li {
  font-size: 13px;
}

* {
  box-sizing: border-box;
}

.help-wrap {
  width: 100%;
  background-color: #0d0e0f;
  padding-top: 30px;
}

.help-con {
  width: 1000px;
  margin: 0 auto;
  color: #c9d0d7;
  font-size: 12px;
}

.help_title {
  font-size: 24px;
  padding-bottom: 10px;
  text-align: center;
}

.title_line {
  width: 80px;
  margin: 0 auto 40px;
  border-bottom: 1px solid #333;
}

.paper-lt {
  width: 800px;
}

.paper-rt {
  width: 180px;
  position: relative;
}

.paper-lt-content {
  width: 800px;
  padding: 30px 40px 40px 0;
  border-right: 1px solid #23272c;
}

.paper-rt-main {
  position: fixed;
  top: 210px;
  width: 180px;
}

.sections {
  margin-top: 15px;
}

.sections li {
  border-bottom: 1px solid #23272c;
}

.sections li a {
  color: #d9d0d7;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 17px 0 17px 10px;
}

.sections li a img {
  margin-right: 5px;
}

.paper-lt p {
  line-height: 26px;
  margin: 15px auto 0;
}

.first_title {
  font-size: 14px;
  background-color: #23272c;
  padding-left: 10px;
  height: 36px;
  line-height: 36px !important;
  font-weight: bold;
  margin-top: 25px;
}

.second_title {
  font-weight: bold;
}

.definitions {
  color: #1077d6;
}

.definitions_wrap span {
  display: inline-block;
  vertical-align: top;
}

.formula {
  height: 60px;
  position: relative;
  line-height: 60px;
  margin: 10px auto;
}

.formula span {
  display: inline-block;
}

.no_line {
  width: 269px;
  height: 0;
  border-bottom: 1px solid #c9d0d7;
  position: absolute;
  top: 29px;
  left: 0px;
}

.fraction_top {
  position: absolute;
  top: -20px;
  left: 0px;
  width: 269px;
  text-align: center;
}

.fraction_bottom {
  position: absolute;
  top: 12px;
  left: 0px;
  width: 269px;
  text-align: center;
}

.jumpto-block img {
  margin: 15px auto;
}

table {
  border-collapse: collapse;
  border-spacing: 0px;
}

.form-table {
  width: 100%;
  vertical-align: middle;
}

.form-table * {
  vertical-align: middle;
}

.form-table td,
.form-table th {
  text-align: center;
  border: 1px solid #23272c;
}

.form-table th {
  height: 32px;
}

.form-table tr td {
  height: 40px;
}

.form-table th:first-child {
  width: 70px;
}

.form-table th:nth-child(2) {
  width: 169px;
}

.form-table tr td:last-child {
  text-align: left;
  padding-left: 50px;
}

.form-table td {
  text-align: center;
}

.form-table thead {
  background-color: #21282d;
}

.table-title {
  color: #1984ea;
  margin-top: 15px;
  margin-bottom: 5px;
}

.table-wrap p.line {
  border-bottom: 1px solid #23272c;
}

.table-switch {
  vertical-align: middle;
  margin: 0 !important;
  cursor: pointer;
}
</style>
<template>
<div class="help-wrap">
  <section class="help-con clearfix">
    <div class="paper-lt fl">
      <div class="paper-lt-main page_container jumpto-cotainer">
        <div class="jumpto-block">
          <p class="help_title">新手帮助</p>
          <div class="title_line"></div>
          <p style="padding-right: 40px;border-right: 1px solid #23272c;">欢迎使用巨灵财经智能投研量化交易平台，我们本着最大限度复制真实交易的原则，经过长时间多方论证，研发出Z3_Quant量化回测体系，给您提供最真实的量化回测体验。同时，为了您更好的理解这套回测引擎，我们提供简要的流程介绍和指标解释等信息，详细如下：</p>
        </div>
        <div class="paper-lt-content jumpto-cotainer">
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_0" style="margin-top:0;">一、回测数据</h3>
            <p style="">依托巨灵财经的金融数据优势，我们为您准备了2007年以来全部A股上市公司的股票行情数据、基本信息数据、财务数据、财务衍生数据、技术衍生数据等。</p>
            <div class="table-wrap">
              <div class="clearfix table-title">
                <span class="fl" style="vertical-align: middle">股票范围指标</span>
                <img :src="isShowTable1?closeSrc:openSrc" alt="" class="fr table-switch" v-on:click="toOpenClose(1)">
              </div>
              <p class="line" v-if="!isShowTable1"></p>
              <table class="form-table" v-if="isShowTable1">
                <thead style="">
                  <th>序号</th>
                  <th>指标名称</th>
                  <th>指标解释</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>市场</td>
                    <td>对应市场的成份股，市场包括：全部A股、上证A股、深证A股、上交所主板、深交所主板、创业板、中小板</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>指数</td>
                    <td>对应指数的成份股，指数包括：沪深300、上证指数、深证成指、创业板指、中小板指、上证50、中证500、中证800、中证1000</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>主题</td>
                    <td>对应主题的成份股，具体主题以页面为准</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>市场</td>
                    <td>按省级划分的办公地址的成份股</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>行业</td>
                    <td>按申万一级行业划分的成份股</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-wrap">
              <div class="clearfix table-title">
                <span class="fl" style="vertical-align: middle">概况类指标</span>
                <img :src="isShowTable2?closeSrc:openSrc" alt="" class="fr table-switch" v-on:click="toOpenClose(2)">
              </div>
              <p class="line" v-if="!isShowTable2"></p>
              <table class="form-table" v-if="isShowTable2">
                <thead style="">
                  <th>序号</th>
                  <th>指标名称</th>
                  <th>指标解释</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>总市值</td>
                    <td>总股本*价格</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>流通市值</td>
                    <td>流通股本*价格</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>股息率</td>
                    <td>上年末每股现金分红/价格</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>分析师观点</td>
                    <td>近6个月分析师或团队当年度最新标准化评级的时间加权平均</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>业绩公布日期</td>
                    <td>业绩报告公布的日期</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>融资融券标的</td>
                    <td>是否属于融资融券标的</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>历史成交量</td>
                    <td>近60个交易日成交量平均值</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>相对成交量</td>
                    <td>（成交量/历史成交量）*（开市分钟数/240）</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>成交量</td>
                    <td>早开盘至当前的累计成交量</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>价格</td>
                    <td>最新一笔成交价</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>目标价格涨幅</td>
                    <td>（每个分析师或团队当年度最新目标价格中位数-价格）/价格</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>发行日</td>
                    <td>首发上市日期</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>ST股票</td>
                    <td>特殊处理状态的股票，简称前带有ST或*ST</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-wrap">
              <div class="clearfix table-title">
                <span class="fl" style="vertical-align: middle">基本面指标</span>
                <img :src="isShowTable3?closeSrc:openSrc" alt="" class="fr table-switch" v-on:click="toOpenClose(3)">
              </div>
              <p class="line" v-if="!isShowTable3"></p>
              <table class="form-table" v-if="isShowTable3">
                <thead style="">
                  <th>序号</th>
                  <th>指标名称</th>
                  <th>指标解释</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>市盈率(TTM)</td>
                    <td>总市值/最近4个季度净利润之和</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>预测市盈率</td>
                    <td>价格/加权动态预测每股收益</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>PEG</td>
                    <td>市盈率(TTM)/未来3年盈利增长速度</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>市销率</td>
                    <td>总市值/最近4个季度营业收入</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>市净率</td>
                    <td>总市值/最新净资产</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>市现率</td>
                    <td>总市值/最近4个季度经营现金流</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>股价/自由现金流</td>
                    <td>价格/每股公司自由现金流</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>EPS增长率(今年)</td>
                    <td>t-1年末每股收益/t-2年末每股收益-1</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>EPS增长率(明年)</td>
                    <td>预测t年末每股收益/t-1年末每股收益-1</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>EPS增长率(前5年)</td>
                    <td>(t-1年末每股收益/t-6年末每股收益)^(1/5)-1</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>EPS增长率(后3年)</td>
                    <td>(预测t+2年末每股收益/t-1年末每股收益)^(1/3)-1</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>EPS增长率(季环比)</td>
                    <td>q-1季末每股收益/q-2季末每股收益-1</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>销售额增长率(前5年)</td>
                    <td>(t-1年末营业收入/t-6年末营业收入)^(1/5)-1</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>销售额增长率(季环比)</td>
                    <td>q-1季末营业收入/q-2季末营业收入-1</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>总资产收益率</td>
                    <td>最近4个季度净利润之和/总资产</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>净资产收益率</td>
                    <td>最近4个季度净利润之和/净资产</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>投资回报率</td>
                    <td>最近4个季度净利润之和/投资总额</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>流动比率</td>
                    <td>流动资产/流动负债</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>速动比率</td>
                    <td>(流动资产-存货净额)/流动负债</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>长期负债/股东权益</td>
                    <td>长期负债/股东权益</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>总负债/股东权益</td>
                    <td>总负债/股东权益</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>毛利率</td>
                    <td>(营业收入-营业成本)/营业收入</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>营业利润率</td>
                    <td>营业利润/营业收入</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>净利率</td>
                    <td>最近4个季度净利润之和/营业收入</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>股息支付率</td>
                    <td>上年末现金分红/净利润</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>内部持股比例</td>
                    <td>董监高及其他公司人员持股比例</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>内部持股变动</td>
                    <td>最近1次董监高及其他公司人员持股比例变动</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>机构持股比例</td>
                    <td>机构总持股比例</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>机构持股变动</td>
                    <td>最近1次机构总持股比例变动</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="table-wrap">
              <div class="clearfix table-title">
                <span class="fl" style="vertical-align: middle">技术指标</span>
                <img :src="isShowTable4?closeSrc:openSrc" alt="" class="fr table-switch" v-on:click="toOpenClose(4)">
              </div>
              <p class="line" v-if="!isShowTable4"></p>
              <table class="form-table" v-if="isShowTable4">
                <thead style="">
                  <th>序号</th>
                  <th>指标名称</th>
                  <th>指标解释</th>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>近1周涨跌幅</td>
                    <td>（收盘价-1周前收盘价）/1周前收盘价</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>近1月涨跌幅</td>
                    <td>（收盘价-1月前收盘价）/1月前收盘价</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>近3月涨跌幅</td>
                    <td>（收盘价-3月前收盘价）/3月前收盘价</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>近6月涨跌幅</td>
                    <td>（收盘价-6月前收盘价）/6月前收盘价</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>近1年涨跌幅</td>
                    <td>（收盘价-1年前收盘价）/1年前收盘价</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>今年以来涨跌幅</td>
                    <td>（收盘价-年初收盘价）/年初收盘价</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>近1周波动率</td>
                    <td>近1周收益率的标准差(5个交易日)</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>近1月波动率</td>
                    <td>近1月收益率的标准差（20个交易日）</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>近3月波动率</td>
                    <td>近3月收益率的标准差(60个交易日)</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>近6月波动率</td>
                    <td>近6月收益率的标准差(120个交易日)</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>近1年波动率</td>
                    <td>近1年收益率的标准差(250个交易日)</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>RSI(14)</td>
                    <td>RSI相对强弱指标，窗口参数N=14</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>向上缺口</td>
                    <td>(最低价-昨日最高价) / 昨日最高价，最低价>昨日最高价</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>向下缺口</td>
                    <td>（最高价-昨日最低价）/昨日最低价，最高价&lt;昨日最低价</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>股价与MA5距离</td>
                    <td>(收盘价-MA5)/MA5</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>股价与MA5金叉</td>
                    <td>昨日收盘价&lt;昨日MA5，收盘价&gt;MA5</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>股价与MA5死叉</td>
                    <td>昨日收盘价&gt;昨日MA5，收盘价&lt;MA5</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>MA5与MA10金叉</td>
                    <td>昨日MA5&lt;昨日MA10，MA5&gt;MA10</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>MA5与MA10死叉</td>
                    <td>昨日MA5&gt;昨日MA10，MA5&lt;MA10</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td>MA5在MA10上方</td>
                    <td>MA5>MA10</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td>MA5在MA10下方</td>
                    <td>MA5&lt;MA10</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td>MA5与MA20金叉</td>
                    <td>昨日MA5&lt;昨日MA20，MA5&gt;MA20</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td>MA5与MA20死叉</td>
                    <td>昨日MA5&gt;昨日MA20，MA5&lt;MA20</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>MA5在MA20上方</td>
                    <td>MA5>MA20</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td>MA5在MA20下方</td>
                    <td>MA5&lt;MA20</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td>股价与MA10距离</td>
                    <td>(收盘价-MA10)/MA10</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td>股价与MA10金叉</td>
                    <td>昨日收盘价&lt;昨日MA10，收盘价&gt;MA10</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td>股价与MA10死叉</td>
                    <td>昨日收盘价&gt;昨日MA10，收盘价&lt;MA10</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td>MA10与MA20金叉</td>
                    <td>昨日MA10&lt;昨日MA20，MA10&gt;MA20</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td>MA10与MA20死叉</td>
                    <td>昨日MA10&gt;昨日MA20，MA10&lt;MA20</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td>MA10在MA20上方</td>
                    <td>MA10>MA20</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td>MA10在MA20下方</td>
                    <td>MA10&lt;MA20</td>
                  </tr>
                  <tr>
                    <td>33</td>
                    <td>MA10与MA30金叉</td>
                    <td>昨日MA10&lt;昨日MA30，MA10&gt;MA30</td>
                  </tr>
                  <tr>
                    <td>34</td>
                    <td>MA10与MA30死叉</td>
                    <td>昨日MA10&gt;昨日MA30，MA10&lt;MA30</td>
                  </tr>
                  <tr>
                    <td>35</td>
                    <td>MA10在MA30上方</td>
                    <td>MA10&gt;MA30</td>
                  </tr>
                  <tr>
                    <td>36</td>
                    <td>MA10在MA30下方</td>
                    <td>MA10&lt;MA30</td>
                  </tr>
                  <tr>
                    <td>37</td>
                    <td>股价与MA20距离</td>
                    <td>(收盘价-MA20)/MA20</td>
                  </tr>
                  <tr>
                    <td>38</td>
                    <td>股价与MA20金叉</td>
                    <td>昨日收盘价&lt;昨日MA20，收盘价&gt;MA20</td>
                  </tr>
                  <tr>
                    <td>39</td>
                    <td>股价与MA20死叉</td>
                    <td>昨日收盘价&gt;昨日MA20，收盘价&lt;MA20</td>
                  </tr>
                  <tr>
                    <td>40</td>
                    <td>MA20与MA30金叉</td>
                    <td>昨日MA20&lt;昨日MA30，MA20&gt;MA30</td>
                  </tr>
                  <tr>
                    <td>41</td>
                    <td>MA20与MA30死叉</td>
                    <td>昨日MA20&gt;昨日MA30，MA20&lt;MA30</td>
                  </tr>
                  <tr>
                    <td>42</td>
                    <td>MA20在MA30上方</td>
                    <td>MA20>MA30</td>
                  </tr>
                  <tr>
                    <td>43</td>
                    <td>MA20在MA30下方</td>
                    <td>MA20&lt;MA30</td>
                  </tr>
                  <tr>
                    <td>44</td>
                    <td>MA20与MA60金叉</td>
                    <td>昨日MA20&lt;昨日MA60，MA20&gt;MA60</td>
                  </tr>
                  <tr>
                    <td>45</td>
                    <td>MA20与MA60死叉</td>
                    <td>昨日MA20&gt;昨日MA60，MA20&lt;MA60</td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>MA20在MA60上方</td>
                    <td>MA20>MA60</td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>MA20在MA60下方</td>
                    <td>MA20&lt;MA60</td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>股价与MA30距离</td>
                    <td>(收盘价-MA30)/MA30</td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>股价与MA30金叉</td>
                    <td>昨日收盘价&lt;昨日MA30，收盘价&gt;MA30</td>
                  </tr>
                  <tr>
                    <td>50</td>
                    <td>股价与MA30死叉</td>
                    <td>昨日收盘价&gt;昨日MA30，收盘价&lt;MA30</td>
                  </tr>
                  <tr>
                    <td>51</td>
                    <td>MA30与MA60金叉</td>
                    <td>昨日MA30&lt;昨日MA60，MA30&gt;MA60</td>
                  </tr>
                  <tr>
                    <td>52</td>
                    <td>MA30与MA60死叉</td>
                    <td>昨日MA30&gt;昨日MA60，MA30&lt;MA60</td>
                  </tr>
                  <tr>
                    <td>53</td>
                    <td>MA30在MA60上方</td>
                    <td>MA30>MA60</td>
                  </tr>
                  <tr>
                    <td>54</td>
                    <td>MA30在MA60下方</td>
                    <td>MA30&lt;MA60</td>
                  </tr>
                  <tr>
                    <td>55</td>
                    <td>MA30与MA120金叉</td>
                    <td>昨日MA30&lt;昨日MA120，MA30&gt;MA120</td>
                  </tr>
                  <tr>
                    <td>56</td>
                    <td>MA30与MA120死叉</td>
                    <td>昨日MA30&gt;昨日MA120，MA30&lt;MA120</td>
                  </tr>
                  <tr>
                    <td>57</td>
                    <td>MA30在MA120上方</td>
                    <td>MA30>MA120</td>
                  </tr>
                  <tr>
                    <td>58</td>
                    <td>MA30在MA120下方</td>
                    <td>MA30&lt;MA120</td>
                  </tr>
                  <tr>
                    <td>59</td>
                    <td>股价与MA60距离</td>
                    <td>(收盘价-MA60)/MA60</td>
                  </tr>
                  <tr>
                    <td>60</td>
                    <td>股价与MA60金叉</td>
                    <td>昨日收盘价&lt;昨日MA60，收盘价&gt;MA60</td>
                  </tr>
                  <tr>
                    <td>61</td>
                    <td>股价与MA60死叉</td>
                    <td>昨日收盘价&gt;昨日MA60，收盘价&lt;MA60</td>
                  </tr>
                  <tr>
                    <td>62</td>
                    <td>MA60与MA120金叉</td>
                    <td>昨日MA60&lt;昨日MA120，MA60&gt;MA120</td>
                  </tr>
                  <tr>
                    <td>63</td>
                    <td>MA60与MA120死叉</td>
                    <td>昨日MA60&gt;昨日MA120，MA60&lt;MA120</td>
                  </tr>
                  <tr>
                    <td>64</td>
                    <td>MA60在MA120上方</td>
                    <td>MA60&gt;MA120</td>
                  </tr>
                  <tr>
                    <td>65</td>
                    <td>MA60在MA120下方</td>
                    <td>MA60&lt;MA120</td>
                  </tr>
                  <tr>
                    <td>66</td>
                    <td>MA60与MA250金叉</td>
                    <td>昨日MA60&lt;昨日MA250，MA60&gt;MA250</td>
                  </tr>
                  <tr>
                    <td>67</td>
                    <td>MA60与MA250死叉</td>
                    <td>昨日MA60&gt;昨日MA250，MA60&lt;MA250</td>
                  </tr>
                  <tr>
                    <td>68</td>
                    <td>MA60在MA250上方</td>
                    <td>MA60&gt;MA250</td>
                  </tr>
                  <tr>
                    <td>69</td>
                    <td>MA60在MA250下方</td>
                    <td>MA60&lt;MA250</td>
                  </tr>
                  <tr>
                    <td>70</td>
                    <td>股价与MA120距离</td>
                    <td>(收盘价-MA120)/MA120</td>
                  </tr>
                  <tr>
                    <td>71</td>
                    <td>股价与MA120金叉</td>
                    <td>昨日收盘价&lt;昨日MA120，收盘价&gt;MA120</td>
                  </tr>
                  <tr>
                    <td>72</td>
                    <td>股价与MA120死叉</td>
                    <td>昨日收盘价&gt;昨日MA120，收盘价&lt;MA120</td>
                  </tr>
                  <tr>
                    <td>73</td>
                    <td>MA120与MA250金叉</td>
                    <td>昨日MA120&lt;昨日MA250，MA120&gt;MA250</td>
                  </tr>
                  <tr>
                    <td>74</td>
                    <td>MA120与MA250死叉</td>
                    <td>昨日MA120&gt;昨日MA250，MA120&lt;MA250</td>
                  </tr>
                  <tr>
                    <td>75</td>
                    <td>MA120在MA250上方</td>
                    <td>MA120&gt;MA250</td>
                  </tr>
                  <tr>
                    <td>76</td>
                    <td>MA120在MA250下方</td>
                    <td>MA120&lt;MA250</td>
                  </tr>
                  <tr>
                    <td>77</td>
                    <td>股价与MA250距离</td>
                    <td>(收盘价-MA250)/MA250</td>
                  </tr>
                  <tr>
                    <td>78</td>
                    <td>股价与MA250金叉</td>
                    <td>昨日收盘价&lt;昨日MA250，收盘价&gt;MA250</td>
                  </tr>
                  <tr>
                    <td>79</td>
                    <td>股价与MA250死叉</td>
                    <td>昨日收盘价&gt;昨日MA250，收盘价&lt;MA250</td>
                  </tr>
                  <tr>
                    <td>80</td>
                    <td>涨跌幅</td>
                    <td>(收盘价-昨收价)/昨收价</td>
                  </tr>
                  <tr>
                    <td>81</td>
                    <td>涨跌幅(开盘)</td>
                    <td>(收盘价-开盘价)/开盘价</td>
                  </tr>
                  <tr>
                    <td>82</td>
                    <td>10日创新高</td>
                    <td>收盘价&gt;过去9个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>83</td>
                    <td>10日创新低</td>
                    <td>收盘价&lt;过去9个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>84</td>
                    <td>股价与10日最高价距离</td>
                    <td>（收盘价-过去9个交易日最高价的最大值）/过去9个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>85</td>
                    <td>股价与10日最低价距离</td>
                    <td>(收盘价-过去9个交易日最低价的最小值)/ 过去9个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>86</td>
                    <td>20日创新高</td>
                    <td>收盘价>过去19个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>87</td>
                    <td>20日创新低</td>
                    <td>收盘价&lt;过去19个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>88</td>
                    <td>股价与20日最高价距离</td>
                    <td>（收盘价-过去19个交易日最高价的最大值）/过去19个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>89</td>
                    <td>股价与20日最低价距离</td>
                    <td>(收盘价-过去19个交易日最低价的最小值)/ 过去19个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>90</td>
                    <td>30日创新高</td>
                    <td>收盘价>过去29个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>91</td>
                    <td>30日创新低</td>
                    <td>收盘价&lt;过去29个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>92</td>
                    <td>股价与30日最高价距离</td>
                    <td>（收盘价-过去29个交易日最高价的最大值）/过去29个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>93</td>
                    <td>股价与30日最低价距离</td>
                    <td>(收盘价-过去29个交易日最低价的最小值)/ 过去29个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>94</td>
                    <td>60日创新高</td>
                    <td>收盘价>过去59个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>95</td>
                    <td>60日创新低</td>
                    <td>收盘价&lt;过去59个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>96</td>
                    <td>股价与60日最高价距离</td>
                    <td>（收盘价-过去59个交易日最高价的最大值）/过去59个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>97</td>
                    <td>股价与60日最低价距离</td>
                    <td>(收盘价-过去59个交易日最低价的最小值)/ 过去59个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>98</td>
                    <td>120日创新高</td>
                    <td>收盘价>过去119个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>99</td>
                    <td>120日创新低</td>
                    <td>收盘价&lt;过去119个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>100</td>
                    <td>股价与120日最高价距离</td>
                    <td>（收盘价-过去119个交易日最高价的最大值）/过去119个交易日最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>101</td>
                    <td>股价与120日最低价距离</td>
                    <td>(收盘价-过去119个交易日最低价的最小值)/ 过去119个交易日最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>102</td>
                    <td>52周创新高</td>
                    <td>收盘价&gt;过去52自然周最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>103</td>
                    <td>52周创新低</td>
                    <td>收盘价&lt;过去52自然周最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>104</td>
                    <td>股价与52周最高价距离</td>
                    <td>（收盘价-过去52自然周最高价的最大值）/过去52自然周最高价的最大值</td>
                  </tr>
                  <tr>
                    <td>105</td>
                    <td>股价与52周最低价距离</td>
                    <td>(收盘价-过去52自然周最低价的最小值)/ 过去52自然周最低价的最小值</td>
                  </tr>
                  <tr>
                    <td>106</td>
                    <td>头肩底</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>107</td>
                    <td>单底</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>108</td>
                    <td>双底</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>109</td>
                    <td>双底带回踩</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>110</td>
                    <td>三重底</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>111</td>
                    <td>强势上升</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>112</td>
                    <td>震荡上升</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>113</td>
                    <td>头肩顶</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>114</td>
                    <td>单顶</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>115</td>
                    <td>双顶</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>116</td>
                    <td>双顶带回踩</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>117</td>
                    <td>三重顶</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>118</td>
                    <td>强势下跌</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>119</td>
                    <td>震荡下跌</td>
                    <td>技术形态，通过距离算法寻找特征点得出</td>
                  </tr>
                  <tr>
                    <td>120</td>
                    <td>三只乌鸦</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>121</td>
                    <td>看涨反冲</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>122</td>
                    <td>乌云盖顶</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>123</td>
                    <td>看涨吞没</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>124</td>
                    <td>看涨孕线</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>125</td>
                    <td>相同低价</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>126</td>
                    <td>三外升</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>127</td>
                    <td>三内升</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>128</td>
                    <td>红三兵</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>129</td>
                    <td>十字启明星</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>130</td>
                    <td>弃婴</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>131</td>
                    <td>竖状三明治</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>132</td>
                    <td>奇特三川底</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>133</td>
                    <td>向上跳空并列阳线</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>134</td>
                    <td>向上跳空三法</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>135</td>
                    <td>向上跳空并列阴阳线</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>136</td>
                    <td>看涨三线直击</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>137</td>
                    <td>上升三法</td>
                    <td>蜡烛图形态，通过识别K线特定的形态得出</td>
                  </tr>
                  <tr>
                    <td>138</td>
                    <td>均线多头排列</td>
                    <td>MA5>MA10>MA20>MA30</td>
                  </tr>
                  <tr>
                    <td>139</td>
                    <td>均线空头排列</td>
                    <td>MA5&lt;MA10&lt;MA20&lt;MA30</td>
                  </tr>
                  <tr>
                    <td>140</td>
                    <td>Beta值</td>
                    <td>过去1年个股收益率相对市场收益率的回归系数，市场收益率为全部A股流通市值加权平均</td>
                  </tr>
                  <tr>
                    <td>141</td>
                    <td>平均真实波幅</td>
                    <td>即ATR指标，个股振幅(TR)的14日指数移动平均，振幅= max[最高-最低，max(最高，昨收)-min(最低，昨收)]</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_1">二、回测流程</h3>
            <p style="">回测流程的设计对于策略回测结果的可靠性和可信度至关重要，如果回测流程的设计不合理，那么回测结果的现实参考意义就非常有限，甚至会误导开发者。因此，为了使您更放心的使用回测频道，我们一定程度公开我们的回测流程，详细如下：</p>
            <p class="tc"><img src="../assets/images/backtest/help1.jpg" alt=""></p>
            <p class="tc" style="margin-top: 1px;">图 1 收盘前订单处理流程</p>
            <p class="tc"><img src="../assets/images/backtest/help2.jpg" alt=""></p>
            <p class="tc" style="margin-top: 1px;">图 2 收盘后订单处理流程</p>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_2">三、派现及转送配股</h3>
            <p style="">分红送股等类似情况包括派现、送股、转股、配股等，不同的方式对证券账户产生的影响是不同的，因此需要采取不同的处理方式。先明确一下不同方式的涵义：</p>
            <p>
              <span class="definitions">●	派现：</span>也称现金股利、分红，是指上市公司以现金分红方式将盈余公积和当期应付利润的部分或全部发放给股东。通过现金分红的方式，可以不扩大股本，对未来的经营不造成压力；<br/>
              <span class="definitions">●	送股：</span>上市公司分红的一种形式，即采取送股份的办法实施给上市公司的股东分配公司利润的一种形式；<br/>
              <span class="definitions">●	转股：</span>上市公司分红的一种形式，是指公司将资本公积金或盈余公积金转化为股本。转增股本并没有改变股东的权益，但却增加了股本的规模，因而客观结果与送股相似；<br/>
              <span class="definitions">●	配股：</span>上市公司向原股东发行新股、筹集资金的行为。由于配股会进行除权处理，因此股价就要下降，如果放弃配股，这部分股东将因所持股票总市值的减少而蒙受损失。
            </p>
            <p style="">对于上述四种情形，派现、送股、转股我们均采用与现实相同的处理方式，派现日则将现金打入证券账户；送股和转股则做除权处理，持股数量增加，价格下折，总市值不变；但对于配股而言，由于存在放弃和不放弃两种情况，因此我们采用0成本配股的折中方式进行处理。</p>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_3">四、税费计算</h3>
            <p style="">在现实的股票交易中，存在股息红利税、券商佣金、交易印花税，这些税费会增加投资者的投资成本，尤其当成交金额比较高的时候，会是一笔不小的数目，因此不能小觑。下面我们先明确一下这些税费的涵义：</p>
            <p>
              <span class="definitions">●	股息红利税：</span>股息红利税是对上市公司的现金分红征税，分红派息的时候不扣税，而是在卖出该股票的时候根据持有股票时间进行差别化征税，由券商直接扣收。按照2015年9月份最新的优惠政策，持有时间在1个月以内（含1个月）的，补交红利的20%税款；持有时间在1个月-1年间（含1年）的，补交红利的10%税款；持有时间超过1年的，免征红利税。另外，对于分次买入的股票，一律按照“先进先出”原则，对应计算持股时间；<br/>
              <span class="definitions">●	券商佣金：</span>券商佣金是投资者进行股票交易时由券商收取的手续费用，目前A股市场采用买、卖双边收取的收费政策，最少5元。在佣金比例上，不同券商收费的比例略有不同，目前市面上最低的佣金率是万2.5；<br/>
              <span class="definitions">●	交易印花税：</span>交易印花税是投资者从事股票买卖时所强制缴纳的一笔费用，根据一笔股票交易成交金额计征；按照2008年9月最新的印花税缴纳政策，印花税由双边征收改为单边征收，只针对卖方，税率保持为1‰。
            </p>
            <p style="">针对以上三种税费，券商佣金和交易印花税我们采取与现实交易相同的方式进行处理，佣金比例由您通过前端页面进行设置，交易印花税按照卖出成交额的千分之一进行收取；由于股息红利税涉及的情形较多，因此我们采用统一按照10%计征，且在分红派息日从派现款中直接扣除的原则，进行简化处理。</p>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_4">五、异常交易处理</h3>
            <p style="">异常交易包括全天停牌、临时停牌、退市、暂停上市、开盘即涨停且全天未开板、开盘即跌停且全天未开板，我们分别做如下处理：</p>
            <p>
              <span class="definitions">●	全天停牌：</span>对于全天停牌的股票，我们假设T日收盘后均可获知所有股票T+1交易日是否全天停牌的信息，因此在T日收盘后生成买入、卖出股票信号时，会剔除T+1交易日全天停牌的股票，不会入选，不会分配资金；<br/>
              <span class="definitions">●	临时停牌：</span>对于临时停牌的股票，在日级别的数据回测周期下，我们采用与未发生临时停牌股票相同的处理方式；<br/>
              <span class="definitions">●	退市：</span>对于即将退市的股票，涉及持有中和买入订单两种情况，我们分别做如下处理：对于持有中的股票，在最后一个交易日，按照您设定的卖出价格强制卖出；对于在最后一个交易日下买入订单的股票，该订单强制取消；<br/>
              <span class="definitions">●	暂停上市：</span>对于暂停上市的股票，按照与全天停牌股票相同的方式进行处理；<br/>
              <span class="definitions">●	开盘即涨停且全天未开板：</span>对于下买入订单的股票，如果出现开盘即涨停且全天未开板的情况，则买入订单不能成交；<br/>
              <span class="definitions">●	开盘即跌停且全天未开板：</span>对于下卖出订单的股票，如果出现开盘即跌停且全天未开板的情况，则卖出订单不能成交，在非仓位控制优先且非调仓日的情况下，下一交易日会继续卖出。
            </p>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_5">六、成交及信号处理</h3>
            <p style="">区别于传统使用前复权或者后复权行情数据进行回测的逻辑，我们采用真实价格成交、后复权价格计算择时指标信号的方式进行回测，主要原因在于：</p>
            <p style="">1.&nbsp;&nbsp;传统的回测基本上采用无账户的回测逻辑，为了保证价格的连续性，多采用前复权或者后复权处理股票价格，并依此价格成交。其后果是，采用前复权价成交，会导致成交价格过低，可买入的数量偏多，而采用后复权价成交则恰恰相反，结果是均不真实；Z3_Quant量化回测体系为了避免这一问题，采用真实价格成交的原则，当发生派现、或者配股、转股、送股等情形时（详见章节四），则按照现实的情况进行处理，保证了回测的真实性；</p>
            <p style="">2.&nbsp;&nbsp;在择时信号生成方面，如计算MA5和MA10金叉，为了保证价格的连续性，避免分红、并股等对价格产生的影响，并进一步影响择时指标的走势。因此采用后复权价格对择时指标进行计算，保证指标的连续性。需要强调的是，一些不依赖于高、开、低、收价格的择时指标不受此影响。另外，计算择时指标时，程序会跳过停牌没有交易的期间，会将有交易的时间连接起来，进行指标计算。</p>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_6">七、买卖滑点</h3>
            <p style="">之所以设定滑点，是因为当您下单时，尤其是金额较高的，会对当前价格造成一定的冲击而形成冲击成本，从而导致真实成交价与下单预期价格形成偏差。滑点的设置，就是为了使您更好的模拟真实市场表现，更加贴近现实。为了简便，Z3_Quant采用固定滑点设置模式。</p>
            <p style="">通常，固定滑点分为固定值和百分比值，分别如下：</p>
            <p>
              <span class="definitions">●	固定值：</span>是指在预期价格的基础上加减一个固定的值。比如0.02元，买入时成交价格=预期价格+0.02元，卖出时成交价格=预期价格-0.02元；<br/>
              <span class="definitions">●	百分比：</span>是指在预期价格的基础上加减一个预期价格的百分比值。比如0.2%，买入时成交价格=预期价格*（1+0.2%），卖出时成交价格=预期价格*（1-0.2%）。
            </p>
            <p style="">这里我们采用百分比值的设定方式，具体百分比值由您通过页面下拉值进行设置。</p>
          </div>
          <div class="jumpto-block">
            <h3 class="first_title" id="jumpto_7">八、风险指标</h3>
            <p style="">风险指标是对量化投资策略好坏的最直观、客观公正的评价，为了使您更好的理解这些风险指标，本章我们会对他们进行解释，包括：总收益率、基准收益率、年化收益率、超额收益率、波动率、信息比率、夏普比率、最大回撤、Alpha、Beta、胜率、换手率。以下对各指标进行详细说明：</p>
            <p class="second_title">1. 策略总收益率</p>
            <p style="">策略自运行以来的总体收益率，表征策略最终的盈利状况，数值越大，表示盈利越多；数值负的越大，表示亏损越多。</p>
            <div class="formula" style="width: 360px;">
              R<sub>PT</sub>=
              <span style="position: absolute;top: 0px;left: 36px;width: 269px;">
                            <span class="fraction_top">期末可用余额+期末持有股票市值-初始金额</span>
              <span class="no_line"></span>
              <span class="fraction_bottom">初始金额</span>
              </span>
              <span style="margin-left: 278px;">*100%</span>
            </div>
            <p class="second_title">2. 基准总收益率</p>
            <p style="">对比基准指数自运行以来的总体收益率，用于比较策略是否跑赢市场的参考基准。数值越大，表示盈利越多；数值负的越大，表示亏损越多。</p>
            <div class="formula" style="width: 364px;">
              R<sub>MT</sub>=
              <span style="position: absolute;top: 0px;left: 39px;width: 269px;">
                            <span class="fraction_top">期末基准指数收盘价-期初基准指数收盘价</span>
              <span class="no_line"></span>
              <span class="fraction_bottom">期初基准指数收盘价</span>
              </span>
              <span style="margin-left: 278px;">*100%</span>
            </div>
            <p class="second_title">3. 策略年化收益率</p>
            <p style="">策略总收益率平均到每年的收益率，采用几何平均年化收益率算法，更能真实的反应策略的年化收益表现，其中n为策略执行的交易日天数。</p>
            <div class="formula" style="width: 174px;">
              R<sub>p</sub>=((1+R<sub>PT</sub>)
              <span style="position: absolute;top: -12px;left: 84px;">
                            <span style="position: absolute;top: -4px;left: 0px;">250</span>
              <span style="width: 24px;border-bottom: 1px solid #c9d0d7;"></span>
              <span style="position: absolute;top: 10px;left: 9px;">n</span>
              </span>
              <span style="margin-left: 24px;">-1)*100%</span>
            </div>
            <p class="second_title">4. 基准年化收益率</p>
            <p style="">基准总收益率平均到每年的收益率，采用几何平均年化收益率算法，更能真实的反应基准的年化收益表现。其中n为策略执行的交易日天数。</p>
            <div class="formula" style="width: 183px;">
              R<sub>m</sub>=((1+R<sub>MT</sub>)
              <span style="position: absolute;top: -12px;left: 91px;">
                            <span style="position: absolute;top: -4px;left: 0px;">250</span>
              <span style="width: 24px;border-bottom: 1px solid #c9d0d7;"></span>
              <span style="position: absolute;top: 10px;left: 9px;">n</span>
              </span>
              <span style="margin-left: 25px;">-1)*100%</span>
            </div>
            <p class="second_title">5. 超额收益率</p>
            <p style="">超额收益率是指超出“正常收益率”的那一部分收益率，通常以市场收益率作为正常收益率。在本回测框架中，我们以您在页面端设定的对比基准指数作为市场收益率的衡量标准。</p>
            <div class="formula" style="width: 93px;">
              R<sub>∆T</sub>=R<sub>PT</sub>-R<sub>MT</sub>
            </div>
            <p class="second_title">6. 波动率</p>
            <p style="">波动率（Volatility）是用来衡量量化策略风险性的指标，波动率越大，表明资产的波动越剧烈，策略的风险就越高。其中，r_p代表策略的每日收益率，(r_p ) ̅代表策略每日收益率的平均值，n代表策略执行的交易日天数。</p>
            <div class="formula" style="width: 185px;">
              σ<sub>p</sub>=
              <div style="position: absolute;left: 25px;top: 11px;width: 160px;">
                <span style="position: absolute;width: 121px;top: 1px;left: 36px;border-bottom: 2px solid #c9d0d7;"></span>
                <span style="font-size: 68px;font-weight: 100;">√</span>
                <span style="position: absolute;top: -4px;left: 42px;">
                                <span style="position: absolute;width: 28px;top: -3px;left: -6px;text-align: center;">250</span>
                <span style="position: absolute;width: 28px;top: 36px;left: -6px;border-bottom: 1px solid #c9d0d7;"></span>
                <span style="position: absolute;width: 28px;top: 14px;left: -6px;text-align: center;">n</span>
                </span>
                <span style="position: absolute;top: -7px;left: 73px;">
                                <span style="position: absolute;top: -11px;left: -1px;font-size: 12px;">n</span>
                <span style="position: absolute;width: 28px;top: 6px;left: -6px;font-size: 25px;font-weight: 200;">∑</span>
                <span style="position: absolute;top: 28px;left: -6px;font-size: 12px;">i=1</span>
                </span>
                <span style="position: absolute;top: 0px;left: 93px;">(r<sub>p</sub>-r<sub>p</sub>)²
                                <span style="position: absolute;width: 8px;top: 23px;left: 26px;border-bottom: 1px solid #c9d0d7;"></span>
                </span>
              </div>
            </div>
            <p class="second_title">7. 信息比率</p>
            <p style="">信息比率（Information Ratio，简称IR）是用来衡量超额风险所带来的超额收益，表征单位主动风险所带来的超额收益。信息比率越大，表明承担单位主动风险所获得的超额收益越高。其中，σ_t表示策略每日收益率与基准每日收益率差值的年化标准差。</p>
            <div class="formula" style="width: 96px;">
              IR=
              <span style="position: absolute;width: 70px;top: 0px;left: 24px;">
                            <span style="position: absolute;width: 70px;top: -10px;left: 0px;text-align: center;">R<sub>p</sub>-R<sub>m</sub></span>
              <span style="position: absolute;width: 70px;top: 30px;left: 0px;border-bottom: 1px solid #c9d0d7;"></span>
              <span style="position: absolute;width: 70px;top: 11px;left: 0px;text-align: center;">σ<sub>t</sub></span>
              </span>
            </div>
            <p class="second_title">8. 夏普比率</p>
            <p style="">夏普比率（Sharpe Ratio）是表征每承受一单位风险，预期可以拿到多少超额报酬的指标，也被称为风险调整后的收益率，是一个可以同时对收益与风险加以综合考虑的三大经典指标之一。其中，R_f表示无风险收益率，大小由您通过前端页面进行设置。</p>
            <div class="formula" style="width: 170px;">
              Sharpe Ratio=
              <span style="position: absolute;width: 70px;top: 0px;left: 97px;">
                            <span style="position: absolute;width: 70px;top: -10px;left: 0px;text-align: center;">R<sub>p</sub>-R<sub>f</sub></span>
              <span style="position: absolute;width: 70px;top: 30px;left: 0px;border-bottom: 1px solid #c9d0d7;"></span>
              <span style="position: absolute;width: 70px;top: 11px;left: 0px;text-align: center;">σ<sub>p</sub></span>
              </span>
            </div>
            <p class="second_title">9. 最大回撤</p>
            <p style="">最大回撤（Max Drawdown）是指累计收益率曲线从最高点走到最低点时收益率下降幅度的最大值，描述了量化策略最极端的亏损情况。其中，P_y表示策略y日的总资产，P_X表示策略x日的总资产，y>x。</p>
            <div class="formula" style="width: 243px;">
              Max Drawdown=Max(1-
              <span style="position: absolute;width: 70px;top: 0px;left: 146px;">
                            <span style="position: absolute;width: 70px;top: -10px;left: 0px;text-align: center;">R<sub>p</sub>-R<sub>f</sub></span>
              <span style="position: absolute;width: 70px;top: 30px;left: 0px;border-bottom: 1px solid #c9d0d7;"></span>
              <span style="position: absolute;width: 70px;top: 11px;left: 0px;text-align: center;">σ<sub>p</sub></span>
              </span>
              <span style="margin-left: 71px;">)</span>
            </div>
            <p class="second_title">10. 贝塔</p>
            <p style="">贝塔（Beta）是指策略收益率相对于基准收益率的波动程度，衡量策略相对于对比基准的风险，是一个相对指标。Beta值越高，意味着策略相对于基准的波动越大。Beta>1，策略的走向与基准相同，运动幅度大于基准；Beta=1，策略的走向与基准相同，运动幅度与基准同步；0&lt;Beta&lt;1，策略的走向与基准相同，运动幅度小于基准；Beta=0，策略的走势与基准完全不相关；Beta&lt;0，策略的走向与基准相反。其中，r<sub>p</sub>代表策略的每日收益率，r<sub>m</sub>代表基准每日收益率。</p>
            <div class="formula" style="width: 146px;">
              β<sub>p</sub>=
              <span style="position: absolute;width: 108px;top: 0px;left: 36px;">
                            <span style="position: absolute;width: 108px;top: -10px;left: 0px;text-align: center;">Cov(r<sub>p</sub>-r<sub>f</sub>,r<sub>m</sub>-r<sub>f</sub>)</span>
              <span style="position: absolute;width: 108px;top: 30px;left: 0px;border-bottom: 1px solid #c9d0d7;"></span>
              <span style="position: absolute;width: 108px;top: 11px;left: 0px;text-align: center;">Var(r<sub>m</sub>-r<sub>f</sub>)</span>
              </span>
            </div>
            <p class="second_title">11. 阿尔法</p>
            <p style="">阿尔法（Alpha）是指获取的与市场波动无关的收益率，是剔除市场整体上涨所带来收益后的剩余部分。Alpha越大，表明策略获取超额收益的能力越高。Alpha>0，策略获得了超越市场的收益；Alpha=0，策略获得了市场同等水平的收益；Alpha
              <0，策略跑输市场收益。</p>
                <div class="formula" style="width: 145px;">
                  α= R<sub>p</sub>-[R<sub>f</sub>+β<sub>p</sub>(R<sub>m</sub>-R<sub>f</sub>)]
                </div>
                <p class="second_title">12. 胜率</p>
                <p style="">胜率是衡量策略所交易的所有股票中，盈利的股票数量占总交易股票数量的比率，一买一卖算一次完整的交易，浮动盈亏不计入在内。胜率越高，操盘过的股票盈利的数量就越多。</p>
                <div class="formula" style="width: 176px;">
                  V=
                  <span style="position: absolute;width: 106px;top: 0px;left: 21px;">
                            <span style="position: absolute;width: 106px;top: -12px;left: 0px;text-align: center;">盈利交易的次数</span>
                  <span style="position: absolute;width: 106px;top: 29px;left: 0px;border-bottom: 1px solid #c9d0d7;"></span>
                  <span style="position: absolute;width: 106px;top: 12px;left: 0px;text-align: center;">交易总次数</span>
                  </span>
                  <span style="margin-left: 108px;">*100%</span>
                </div>
                <p class="second_title">13. 换手率</p>
                <p style="">换手率（Turnover Rate）是指在一定时间内策略转手买卖股票的频率，反映策略成份股变换频度的指标。通常，长线策略的换手率较低，而短线策略的换手率较高。</p>
                <div class="formula" style="width: 279px;">
                  TR=
                  <span style="position: absolute;width: 200px;top: 0px;left: 31px;">
                            <span style="position: absolute;width: 200px;top: -12px;left: 0px;text-align: center;">min(总买入金额，总卖出金额)</span>
                  <span style="position: absolute;width: 200px;top: 29px;left: 0px;border-bottom: 1px solid #c9d0d7;"></span>
                  <span style="position: absolute;width: 200px;top: 12px;left: 0px;text-align: center;">每日平均总资产</span>
                  </span>
                  <span style="margin-left: 203px;">*100%</span>
                </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paper-rt fr">
      <div class="paper-rt-main jumpto-subnav fixed">
        <ul class="sections jumpto-first">
          <li>
            <a href="#jumpto_0">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>回测数据</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_1">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>回测流程</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_2">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>派现及转送配股</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_3">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>税费计算</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_4">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>异常交易处理</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_5">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>成交及信号处理</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_6">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>买卖滑点</span>
            </a>
          </li>
          <li>
            <a href="#jumpto_7">
              <img src="../assets/images/backtest/filefolder-close.png" alt="">
              <span>风险指标</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</div>
</template>
<script type="javascript">
import showTableSrc from '../assets/images/backtest/table-open.png'
import hideTableSrc from '../assets/images/backtest/table-close.png'
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import jumpto from '../assets/plugins/activity-slider/jumpto.js'
export default {
  data() {
    return {
      isShowTable1: true,
      isShowTable2: false,
      isShowTable3: false,
      isShowTable4: false,
      openSrc: showTableSrc,
      closeSrc: hideTableSrc
    }
  },
  methods: {
    toOpenClose: function(i) {
      if (i === 1) {
        if (this.isShowTable1) {
          this.isShowTable1 = false
        } else {
          this.isShowTable1 = true
        }
      }
      if (i === 2) {
        if (this.isShowTable2) {
          this.isShowTable2 = false
        } else {
          this.isShowTable2 = true
        }
      }
      if (i === 3) {
        if (this.isShowTable3) {
          this.isShowTable3 = false
        } else {
          this.isShowTable3 = true
        }
      }
      if (i === 4) {
        if (this.isShowTable4) {
          this.isShowTable4 = false
        } else {
          this.isShowTable4 = true
        }
      }
    }
  },
  mounted() {
    /*$(".page_container").jumpto({
        firstLevel: "> h3",
        secondLevel: "> h6",
        animate: 500,
        mainTag:"p"
    });
    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop();//浏览器卷去的高度
        var scrollHeight = $(document).height();//页面文档的高度
        var windowHeight = $(this).height();//窗口的高度
        if(scrollTop + windowHeight == scrollHeight){
            $(".paper-rt-main").css("top","130px");
        }else {
            $(".paper-rt-main").css("top","210px");
        }
    });*/
  }
}
</script>
