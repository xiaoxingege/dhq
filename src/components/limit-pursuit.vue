<style>
@import '../assets/css/reset.css';
.limit-pursuit{
  background:rgba(242,242,242,1);
 font-family:Microsoft Yahei, Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
.title-tab{
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom:0.01rem solid #DBDBDB;
  overflow: hidden;
  padding-left:0.2rem;
  background: #fff;
}
.title-item{
  text-align: center;
  font-size: 0.30rem;
  color:#333;
  float: left;
  padding:0 0.4rem;
  position: relative;
}
.title-item.active{
  color:#F54949;
}
.title-item.active span{
  display: block;
  width:0.5rem;
  height: 0.04rem;
  background: #F54949 ;
  position: absolute;
  bottom:0;
  left:50%;
  margin-left:-0.25rem;
}

.graph{
  height:4rem;
  background: pink;
}

.newsflash{
  height: 1rem;
  background: #fff;
}
</style>

<template>
	<div class="limit-pursuit">
    <div class="title-tab">
      <div class="title-item active" onclick="">
        涨跌停
        <span></span>
      </div>
      <div class="title-item" onclick="window.location.href='http://itougu.jrj.com.cn/h5/yestoday'">
        市场热度
        <span></span>
      </div>
      <div class="title-item" onclick="window.location.href='http://itougu.jrj.com.cn/h5/marketheat'">
        昨日涨停今日表现
        <span></span>
      </div>
    </div>

    <!-- 图表部分-start -->
    <div class="graph">
      <limit-graph1 v-if="limitGraph1Show"></limit-graph1>
      <limit-graph2 v-if="limitGraph2Show"></limit-graph2>
      <limit-graph3 v-if="limitGraph3Show"></limit-graph3>
    </div>
    <!-- 图表部分-end -->

    <!-- 涨跌停快报-start -->
    <div class="newsflash">

    </div>
    <!-- 涨跌停快报-end -->

    <!-- 集中板块-start -->
    <div class="plate">

    </div>
    <!-- 集中板块-end -->

    <!-- 数据列表-start -->
    <div class="lists">
      <limit-lists></limit-lists>
    </div>
    <!-- 数据列表-end -->

    </div>

	</div>
</template>

<script>
import limitGraph1 from 'components/limit-graph1'
import limitGraph2 from 'components/limit-graph2'
import limitGraph3 from 'components/limit-graph3'
import limitLists from 'components/limit-lists'

export default {
  data () {
    return {
      limitGraph1Show:true,
      limitGraph2Show:false,
      limitGraph3Show:false
    }
  },
  components: {
      limitGraph1,
      limitGraph2,
      limitGraph3,
      limitLists
  },
  created () {
    document.title = '涨停追击'
  },
  filters: {

  },
  methods: {

  },
  mounted () {

  }
}
</script>
