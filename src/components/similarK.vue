<style>
@import '../assets/css/reset.css';
.similarK{
  font-family: PingFang SC;
}
.title{
  font-size:0.36rem;
  text-align: center;
  margin:0.50rem auto 0.48rem;
}
.title-red{
  color:#FF6464;
}
.title-blue{
  color:#307ED7;
}
.img{
  width:6.12rem;
  margin:0.15rem auto 1.7rem;
}
.img img{
  display: block;
  width:6.12rem;
  height: 4.42rem;
}
.similarK p{
  width:6.7rem;
  margin:0 auto 0.3rem ;
  font-size: 0.28rem;
  line-height: 0.44rem;
}
</style>

<template>
<div class="similarK">
  <h2 class="title">
    <span class="title-red">什么是</span><span class="title-blue">相似k线？</span>
  </h2>
  <p>相似k线完全基于客观数据，使用金融界Z3引擎，对市
场中的数千只股票进行历史K线形态的模式识别、并加
入成交量趋势分析，找出具有两家相似特征的股票，帮
助投资者进行判断。</p>
  <p>相似k线选取了当前股票近30个交易日的k线形态，与
其它股票的历史k线形态进行对比，找出相似特征最高
的几只个股，并展示与之对应的后期走势。</p>
  <h2 class="title">
    <span class="title-blue">相似k线的</span><span class="title-red">价值？</span>
  </h2>
  <p>相似k线适用于喜欢k线形态分析的投资者，可以通过该
功能发现走势相近的股票后期的走势情，从而分析并获
得市场盈利机会。</p>
  <p>股市中有一句话说“历史总是惊人的相似”，相似k线无
疑为投资者提供了这种寻找相似历史的机会。</p>
  <div class="img">
    <img src="../assets/images/k-img.png" alt="相似k线图">
  </div>
</div>
</template>

<script>
import 'whatwg-fetch'

export default {
  data () {
    return {
      name: '你的名字'
    }
  },
  beforecreated () {

  },
  created () {

  },
  mounted () {
    document.title = '相似k线解读'
  },
  methods: {

  }
}
</script>
