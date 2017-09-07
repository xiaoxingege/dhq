<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    body{
      font-size: 12px;
      background: #f2f2f2;
    }
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a ;
    }
    .green {
      color:#48a854 ;
    }
    .hui{
       color: #7e7e7e;
    }
    .fr{
      float: right;
    }
    .fl{
      float: left;
    }

    .bfilter-ul{
      border-bottom: 1px solid #2388da;
      background: #f2f2f2;
    }
    .bfilter-ul li{
      /* padding: 7px 15px 5px 14px; */

      padding:7px 10px 8px 9px;
      cursor: pointer;
    }
    .bfilter-ul2 li{
      padding:8px 15px 9px 13px;
    }
    .bfilter-ul li.active{
      background: #2388da;
      color: #fff;
    }
     .recom-fund-table{
      /* margin-top: 14px; */
      background: #fff;
      font-size: 12px;
      color: #191919;
      background: #fff;
      padding: 0 10px;
      /* width: 50%; */
    }
    .bfilter-table{
      /* padding: 15px 10px 0 7px; */
      
    }
    
    .table-head{
      /*  background: #f2f2f2; */
       padding: 10px 0 7px 0;
       border-bottom: 1px solid #e5e5e5;
       margin-bottom: 6px;
    }
    .table-head{
      width: 100%;
    }
    .table-head span{
      width: 16%;
      display: inline-block;
      text-align: center;
    }
    .table-body{
      padding: 10px 0 9px 0;

     /*  border-bottom: 1px solid #e5e5e5; */
    }
    .table-body span{
      width: 16%;
      display: inline-block;
      text-align: center;
    }
    .table-head2 span{
      width: 12%;
    }
    .table-body2{
      /* padding: 12px 0; */
      padding: 13px 0 11px 0;
      border: none;
    }
    .table-body2 span{
      width: 12%;
    }
    span.order-num{
      /* width: 6%; */
    }
    .recom-fund-right{
      margin-left: 8px;
    }
</style>
<template> 
    
      <div class="recom-fund-table">
                     <ul class="bfilter-ul bfilter-ul2 clearfix">
                        <li class="fl blue" :class="this.road==='high'?'active':''" @click="risk('high')">高风险组合</li>
                        <li class="fl blue" >中风险组合</li>
                        <li class="fl blue" >低风险组合</li>
                     </ul>
                     <div class="bfilter-table clearfix">
                        <div class="table-head">
                             <span class="order-num">组合名称
                             </span><span>最大回撤
                             </span><span>波动率
                             </span><span>夏普比率
                             </span><span>年化收益
                             </span><span>累计收益
                             </span>
                        </div>
                        <div class="clearfix table-body" >
                             <span class="order-num">000001
                             </span><span>华夏混合
                             </span><span>1.4232
                             </span><span>10.21%
                             </span><span>1.01
                             </span><span>军工主题
                             </span>
                        </div>
                        
                     </div>
                  </div>

</template>

<script>
 import { mapState } from 'vuex'
/* import echarts from 'echarts'*/
 export default {
   data () {
     return {
       road: { high: 1, middle: 1, low: 3 }
     }
   },
   computed: mapState({
     byRisk: state => state.fundIntell.byRisk
   }),
   components: {
 
   },
   methods: {
     init () {
 
     },
     risk (type) {
       console.log(this.road[type])
        /* this.$store.dispatch('topic/queryAllTopic', { sortField: this.road[this.sortField], page: this.page, pagesize: this.pagesize })*/
     },
     changePer (num) {
       return (Number(num) * 100).toFixed(2) + '%'
     },
     changeDate (time) {
       return (time + '').substring(0, 4) + '.' + (time + '').substring(4, 6) + '.' + (time + '').substring(6, (time + '').length)
     }

   },
   mounted () {
     this.risk('high')
   }
 
 }
</script>
