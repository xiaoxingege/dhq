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
.title-tab li{
  text-align: center;
  font-size: 0.30rem;
  color:#333;
  float: left;
  padding:0 0.4rem;
  position: relative;
}
.title-tab li.active{
  color:#F54949;
}
.title-tab li.active span{
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
  background: #fff;
}
.newsflash-container{
  position: relative;
}
.newsflash-container .arrows{
  position: absolute;
  top:0.39rem;
  right:0.3rem;
  width:0.11rem;
  height: 0.22rem;
  background: url('http://i0.jrjimg.cn/appjrjv2016/zjlx_07.png') center no-repeat;
  background-size: contain;
}
.newsflash{
  margin-top:0.2rem;
  height: 1rem;
  background: #fff;
  overflow-y: auto;
}
.newsflash ul{
  height:3rem;
}
.newsflash ul li{
  background: #fff;
  height:1rem;
  box-sizing: border-box;
  padding:0.3rem 0.3rem 0.3rem 0.27rem;
}
.newsflash span{
  float: left;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
}
.newsflash .icon{
  margin-top:0.02rem;
  margin-right: 0.1rem;
  width:0.36rem;
  height: 0.36rem;
  background: url('../assets/images/limit-pursuit/kuaibao.png') center no-repeat;
  background-size: contain;
}
.newsflash .title{
  font-size: 0.3rem;
  color:#333;
  margin-top: -0.02rem;
  margin-right: 0.4rem;
}
.newsflash .time{
  font-size: 0.28rem;
  color:#888;
  margin-right: 0.1rem;
}
.newsflash .signal{
  font-size: 0.28rem;
  color:#00B267;
  margin-right: 0.3rem;
}
.newsflash .name{
  font-size: 0.28rem;
  color:#333;
  max-width: 2.2rem;
  overflow: hidden;
}


.block{
  /*height: 3.36rem;*/
  background: #fff;
  margin-top:0.2rem;
}
.block-content{
  overflow: hidden;
  padding:0.34rem 0.18rem 0.29rem 0.21rem;
}
.block-content li{
  float: left;
  width:2.34rem;
  height: 1.92rem;
  box-sizing: border-box;
  text-align: center;
  margin-right: 0.03rem;
  background: url('../assets/images/limit-pursuit/Rectangle.png') center no-repeat;
  background-size: contain;
}
.block-content h3{
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.32rem;
  color:#333;
  margin-top:0.35rem;
}
.block-content h4{
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.36rem;
  color:#888;
  margin-top:0.1rem;
}
.block-content h4.red{
  color:#FF4040;
}
.block-content h4.green{
  color:#00B267;
}
.block-content h5{
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.26rem;
  color:#888;
  margin-top:0.16rem;
}
.lists{
  height: 6rem;
  background: #fff;
  margin-top:0.2rem;
}
</style>

<template>
	<div class="limit-pursuit">
    <ul class="title-tab">
      <li data-index='1' :class="graphTab==='1'? 'active':''" @click="toGraphTab($event)">
        涨跌停
        <span></span>
      </li>
      <li data-index='2' :class="graphTab==='2'? 'active':''" @click="toGraphTab($event)">
        市场热度
        <span></span>
      </li>
      <li data-index='3' :class="graphTab==='3'? 'active':''" @click="toGraphTab($event)">
        昨日涨停今日表现
        <span></span>
      </li>
    </ul>

    <!-- 图表部分-start -->
    <div class="graph">
      <limit-graph1 v-if="graphTab === '1'"></limit-graph1>
      <limit-graph2 v-if="graphTab === '2'"></limit-graph2>
      <limit-graph3 v-if="graphTab === '3'"></limit-graph3>
    </div>
    <!-- 图表部分-end -->

    <!-- 涨跌停快报-start -->
    <div class="newsflash-container">
      <span class="arrows"></span>
      <div class="newsflash">
        <ul  v-if="newsData">
          <li v-for="item in newsData">
            <span class="icon"></span>
            <span class="title">涨跌停快报</span>
            <span class="time">{{item.time | convertTime}}</span>
            <span class="signal">{{item.signalName}}</span>
            <span class="name">{{item.stockName}}股票名称</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 涨跌停快报-end -->

    <!-- 集中板块-start -->
    <div class="block">
      <ul class="title-tab">
        <li data-index='1' :class="blockTab==='1'? 'active':''" @click="toBlockTab($event)">
          涨停集中板块
          <span></span>
        </li>
        <li data-index='2' :class="blockTab==='2'? 'active':''" @click="toBlockTab($event)">
          跌停集中板块
          <span></span>
        </li>
      </ul>

      <ul class="block-content"  v-if="blockData">
        <li v-for="item in blockData">
          <h3>{{item.platName}}</h3>
          <h4 :class="addcolor(item.advanceDeclineRatio)">{{item.advanceDeclineRatio | }}%</h4>
          <h5>{{item.stockNum}}只{{blockTab | converLimitType}}停</h5>
        </li>
      </ul>

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
      graphTab:'1',
      newsData:[],
      blockTab:'1',
      blockData:[]
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
    convertTime (d) {
      return d.slice(0,-3)
    },
    converLimitType(d){
      if (d==='1') {
        return '涨'
      }
      if (d==='2') {
        return '跌'
      }
    }
  },
  mounted () {
    this.fetchNewsData()
    this.fetchBlockData()
  },
  methods: {
    addcolor (v) {
      if ((v + '').indexOf('-') !== -1) {
        return 'green'
      } else if(v===0){
        return ''
      }else{
      	return 'red'
      }
    },
    toGraphTab(v){
      this.graphTab = v.currentTarget.getAttribute('data-index')
    },
    toBlockTab(v){
      this.blockTab = v.currentTarget.getAttribute('data-index')
      this.fetchBlockData()
    },
    fetchNewsData () {
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit_news?limit=3'
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.newsData=v.data.items
      }).catch(v2 => {
        console.log(v2)
      })
    },
    fetchBlockData () {
      // https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit_plat?type=1&limit=3
      var url='https://sslapi.jrj.com.cn/zxhq/sapi/datacenter/query_up_down_limit_plat?type='+this.blockTab+'&limit=3'
      fetch(url, {
        method:'get',
        mode:'cors',
        cache:'default'
      }).then((res) => {
        return res.json()
      }).then(v => {
        this.blockData=v.data.items
      }).catch(v2 => {
        console.log(v2)
      })
    }

  }
}
</script>
