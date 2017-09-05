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
   
    /* .recom-fund-left{
      width: 50%;
      border: 1px solid #e5e5e5;
    }
    .recom-fund-right{
      margin-left: 8px;
    } */
    .recom-fund-head{
      /* width: 50%; */
      background: #2388da;
      padding: 10px 0;
      color: #fff;
      border-radius:3px 3px 0 0;
      text-align: center;
    }
    .recom-fund-body{
      padding: 11px 6px;
      background: #fff;
      color: #191919;
       
      font-size: 12px;
    }
    .recom-left{
        /* width: 50%; */
    }
    .fund-hot1{
        border-right: 1px solid #e5e5e5;
        width: 50%;
    }
    .fund-chart1{
      width: 300px;
      height: 110px;
    }
    .recom-content{
      margin-top: 18px;
      line-height: 22px;
      width: 80%;
      text-align: center;
      margin: 0 auto;
    }
    .reson-title{
      margin-top: 12px;
      
    }
    .fund-hot2{
      border-right: none;
      padding-left: 6px;
    }
     
    
    
</style>
<template> 
        <div class="recom-fund-body">
            <div class="recom-left display-box">
                <div class="fund-hot1 box-flex-1">
                   <div class="fund-chart1" ref="fund-chart1"></div>
                   <div class="recom-content">
                       <div class="hui">今年以来:<span class="red">12.12%
                       </span></div>
                       <div>
                           <span class="hui">0000001
                           </span><span class="blue">华夏成长混合型
                           </span>
                       </div>
                       <div>
                          <span class="hui">类型：</span><span>混合型</span>
                          <span class="hui">风险：</span><span>搞</span>
                       </div>
                       
                       <div class="reson-title hui">推荐理由</div>
                       <ul>
                           <li>1、时不时地稍等会速度还是的稍等会是看的</li>
                           <li>2、时不时地稍等会速度还是的稍等会是看的</li>
                           <li>3、时不时地稍等会速度还是的稍等会是看的</li>
                       </ul>

                       
                   </div>
                </div>  
                <div class="fund-hot1 fund-hot2 box-flex-1">
                   <div class="fund-chart1" ref="fund-chart1"></div>
                   <div class="recom-content">
                       <div class="hui">今年以来:<span class="red">12.12%
                       </span></div>
                       <div>
                           <span class="hui">0000001
                           </span><span class="blue">华夏成长混合型
                           </span>
                       </div>
                       <div>
                          <span class="hui">类型：</span><span>混合型</span>
                          <span class="hui">风险：</span><span>搞</span>
                       </div>
                       
                       <div class="reson-title hui">推荐理由</div>
                       <ul>
                           <li>1、时不时地稍等会速度还是的稍等会是看的</li>
                           <li>2、时不时地稍等会速度还是的稍等会是看的</li>
                           <li>3、时不时地稍等会速度还是的稍等会是看的</li>
                       </ul>

                       
                   </div>
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
 
     }
   },
   computed: mapState({
        // groupTopics: state => state.topic.groupTopics,
   }),
   components: {
 
   },
   methods: {
     init () {
 
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
