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
         <ul class="bfilter-ul clearfix">
            <li class="fl blue active" >热门主题基金</li>
            <li class="fl blue" @click="excellentPlan" :class="showPlan===true?'active':''">优选定投</li>
            <li class="fl blue" >优选货基</li>
            <li class="fl blue" >收益冠军</li>
         </ul>
         <div class="bfilter-table clearfix" v-show="false">
            <div class="table-head">
                 <span class="order-num">基金代码
                 </span><span>基金简称
                 </span><span>单位净值
                 </span><span>年化收益
                 </span><span>夏普比率
                 </span><span>所属主题
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
         <div class="bfilter-table clearfix">
            <div class="table-head">
                 <span class="order-num">基金代码
                 </span><span>基金简称
                 </span><span>单位净值
                 </span><span>年化收益
                 </span><span>夏普比率
                 </span><span>波动率
                 </span>
            </div>
            <div class="clearfix table-body" v-for="excell of excellPlan">

                 <span class="order-num">{{excell.symbol}}
                 </span><span>{{excell.name}}
                 </span><span>{{excell.unitNet}}
                 </span><span>{{excell.yearYieldEstab}}
                 </span><span>{{excell.sharpeRatioEstab}}
                 </span><span>{{excell.estab}}
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
       showPlan: true
     }
   },
   computed: mapState({
     excellPlan: state => state.fundIntell.excellentSelectPlan
   }),
   components: {
 
   },
   methods: {
     init () {
       // this.$store.dispatch('fundIntell/queryExcellentSelectPlan')
     },
     excellentPlan () {
       this.showPlan = true
       this.$store.dispatch('fundIntell/queryExcellentSelectPlan')
     },
     changePer (num) {
       return (Number(num) * 100).toFixed(2) + '%'
     },
     changeDate (time) {
       return (time + '').substring(0, 4) + '.' + (time + '').substring(4, 6) + '.' + (time + '').substring(6, (time + '').length)
     }

   },
   mounted () {
     this.init()
   }
 
 }
</script>
