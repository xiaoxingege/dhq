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
   /*  span{
      color: #191919;
    } */
    a{
      color: #191919;
    }
    html,body{
        background: #f2f2f2;

    }
    .informat-list{
        width: 100%;
        background: #f2f2f2;
       /*  padding: 9px; */
        font-size: 12px;
        color: #191919;

    }
    .infor-top{
      padding: 19px 0 6px 21px;
      font-size: 12px;
    }
    .informat-content{
      background: #fff;
      border-radius: 3px;
      border: 1px solid #e5e5e5;
      margin: 9px;
    }
    .informat-main{
      width: 66%;
      margin: 0 auto;
    }
    .in-content{
      line-height: 20px;
    }
    .in-title{
      line-height: 62px;
    }
    .new-tit{
      width: 62%;
      text-align: left;
      float: left;
      white-space: nowrap;  
      overflow: hidden;  
      text-overflow: ellipsis; 

    }
    .new-date{
      color: #7e7e7e;
      line-height: 24px;
      float: left;
      width: 12%;
      text-align: center;
    }
    .new-srcname{
      line-height: 24px;
      float: left;
      width: 12%;
      text-align: center;
    }
    .new-tit:hover{
      color:#2388da;
    }
</style>
<template>
      <div class="informat-list">
          <div class="infor-top">
             <a href="#" class="blue" @click="routerBack">< 返回主题详情</a>
          </div>
          <div class="informat-content">
              <div class="informat-main">
                   <strong class="in-title" v-if="index==0" v-for="(infor,index) of informatList">{{infor.topicName}}相关资讯</strong>
                   <div class="in-content">
                      <div class="clearfix alink" v-if="informatList && informatList.length > 0" v-for="infor of informatList">
                        <router-link :to="{name:'detailPages',params:{id : infor.newsId, detailType:'news'}}"> <span class="new-tit">{{infor.title}}</span>
                         <span class="new-date">{{format(infor.declareDate)}}</span>
                         <span class="new-srcname">{{infor.srcName}}</span></router-link>
                      </div>
                   </div>
                   
              </div>
          </div>
      </div>
</template>

<script>
 import { mapState } from 'vuex'
 import { formatDate } from 'utils/date'
 export default {
   data () {
     return {
       topicCode: this.$route.params.inforId
     }
   },
   computed: mapState({
     informatList: state => state.topic.informatList
   }),
   components: {},
   methods: {
     routerBack () {
       this.$router.go(-1)
     },
     format (date) {
       return formatDate(date)
     }
   },
   mounted () {
     this.$store.dispatch('topic/queryInformatList', { topicCode: this.topicCode })
   }
 
 }
</script>
