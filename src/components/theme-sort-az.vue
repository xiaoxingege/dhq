<style lang="scss" scoped>
    @import '../assets/css/base.css';
    *{
      text-align: justify;
    }
    em,i{
      font-style: normal;
    }
    
    .blue{
      color: #2388da;
      font-size: 12px;
    }
    .red{
      color:#e6363a !important;
    }
    .green {
      color:#48a854 !important;
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
    
    span{
      color: #191919;
    }
    html,body{
        background: #f2f2f2;

    }
   .sortaz-wrap{
     /*  background: #f2f2f2;
      width: 100%;
      font-size: 12px;
      color: #191919; */
   }
   .az-main{

   }
   .sort-hot{
     
     /*  width: 100%;
      margin: 0 auto; */
   }
 /*   .hot-name{
    margin-left: 19px;
    display: inline-block;
   } */
   .every-topical-wrap{
     background: #ffff;
     padding-left: 11px;
     padding-right: 8px;
   }
   .every-main{
     border-bottom:1px solid #e5e5e5;
     font-size: 12px;
     color: #191919;
     padding:7px 16px 9px 16px;
   }
   .letter{
     line-height: 20px;
     width: 5%;
   }
   .letter i{
    margin-left: 8px;
   }
   .every-name{
    width: 91%;
    padding-left: 2%;
   }
   .every-name a{
     /* padding: 0 10px; */
     width: 10%;
     line-height: 20px;
     color: #191919;
     display: inline-block;
     cursor: pointer;
   }
    .every-name a:hover{
       text-decoration: underline;
    }

</style>
<template>
   <div class="every-topical-wrap">
      <div class="every-main clearfix" v-for="key of sortList" >
         <div class="fl letter"><span >{{key}}</span><i>></i></div>
         <div class="fl every-name"><a v-for="g of groupTopics[key]" @click="getVal($event)" :class="g.topicMarket.chngPct>0?'red':'green'" :value="g.topicCode">{{g.topicName}}</a></div>
      </div>
      
   </div>
    
</template>

<script>
 import { mapState } from 'vuex'
 
 export default {
   data () {
     return {
 
     }
   },
   computed: mapState({
     groupTopics: state => state.topic.groupTopics,
     sortList: state => {
       const groupData = state.topic.groupTopics
       // const arr = []
       // for (const key in groupData) {
       //   arr.push(key)
       // }
 
       return Object.keys(groupData).sort()
     }
 
     // groupTopics: state => state.topic.groupTopics

   }),
   components: {
 
   },
   methods: {
     changeTofixed (num) {
       return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
     },
     getVal (e) {
       const text = e.target.innerHTML
       const val = e.target.getAttribute('value')
       this.$emit('getThemeValue', [val, text])
     }
   },
   watch: {
 
   },
   mounted () {
     this.$store.dispatch('topic/queryGroupTopics')
     this.$watch('groupTopics', function (groupTopics) {
       if (groupTopics) {
         this.$emit('groupTopicSuccess')
       }
     })
   }
 
 }
</script>
