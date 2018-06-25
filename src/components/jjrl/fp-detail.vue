<template>
    <div class="content">
            <div class="chart">
                <trendChart></trendChart>
            
            </div>
        <div class="newsDetail">
          <div class="tab">
              <span  class="noticeAll" v-for="(item,index) in navText" @click="changeNotice(index)"
              :class="{'cur':isCur===index}" :style="index===0?fiveNotice:newNotice">{{item}}</span>
          </div>
          <div class="fiveNotice_detail">
                <div class="notice" v-for="(item,index) in stopStock"  v-show="show">
                <!-- <router-link :to="{name: 'dhqNews',params:{iiid:}}"> -->
                  <span class='title' @mouseenter="showDetail(index)" @mouseleave="leaveDetail(index)" :class="{'active':isActive===index}">{{item.TITLE}}</span>
                  <!-- </router-link> -->
                  <span class="date" >{{setDate(item.PUBDATE)}}</span>
                </div> 
                <div class="notice" v-for="(item,index) in newNews" v-show="hide" >
                <router-link :to="{name: 'dhqNews',query:{id:item.id,sourceUrl:item.url}}">
                  <span @mouseenter="showDetail(index)" @mouseleave="leaveDetail(index)" :class="{'active':isActive===index}">{{item.title}}</span></router-link>
                  <span class="date">{{timestampToTime(item.contentdate)}}</span>
                </div>  

  </div>
  </div>
</div>
</template>
<script>
    import { mapState } from  'vuex'
    import trendChart from 'components/jjrl/trend-chart'
    export default {
         components:{ trendChart },
        data () {
            return {
                navText:['停牌前五天公告','最新资讯'],
                isCur:0,
                fiveNotice:{
                    padding:'5px 10px',
                    marginRight: '5px'
                },
                newNotice:{
                    padding:'5px 25px'
                },
                stopdate:'',
                stopCode:'',
                show:true,
                hide:false,
                dataShow:false,
                isActive:false
                
            }
        },
        computed:{
        ...mapState({
                setStock:state => state.jjrl.setStock,
                getStock:state => state.jjrl.getStock,
                storeData:state => state.jjrl.dateAndCode,
                stopStock:state => state.jjrl.stopStock,
                newNews:state => state.jjrl.newNews
            })
        },
        methods:{
            changeNotice(index){
                this.isCur=index
              if(index===0){
                    this.show=true
                    this.hide=false
                    this.$store.dispatch('jjrl/stopStock', { stockCode:this.storeData.stockCode,date:this.storeData.stopdate }).then(res => {
                        this.list= this.stopStock
                    })
                }else{
                    this.show=false
                    this.hide=true
                    this.$store.dispatch('jjrl/newNews', { stockCode:this.storeData.stockCode }).then( res => {
                    this.list= this.newNews
                   })
                } 
                
            },
            showDetail(index){
                this.isActive = index
            },
            leaveDetail(index){
                this.isActive = null
            },
            setDate(date){
                var d,Y,M,D
                d = new Date(date)
                Y = d.getFullYear()
                M = d.getMonth()+1
                D = d.getDate()
                if( M < 10 ) { M = '0' + M; }
                if( D < 10 ) { D = '0' + D; }
                return  Y + '.' + M + '.' + D 
          },
             timestampToTime: function(timestamp) {
                var date,Y,M,D
                date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
                Y = date.getFullYear() + '.';
                M = date.getMonth()+1+ '.';
                D= date.getDate();
                if( M < 10 ) { M = '0' + M; }
                if( D < 10 ) { D = '0' + D; }
                return Y + M + D;
    }
  },
 
  mounted() {

  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";

.fl {
    float: left;
}
.fr {
    float: right;
}
.title{
   
    margin-right: 20px;
}
/* .active{
    color:$blueWordsColor;
} */

.date{
    margin-right: 63px;
}
.content {
    height: 100%;
    box-sizing: border-box;
    padding: 10px 30px 15px;

}
.noticeAll {
    background-color: $lineAndTitleColor;
    cursor: pointer;
    border-radius: 2px;
    box-sizing: border-box;
}

.newNotice {
    padding: 5px 25px;
}

.tab {
    height: 21px;
    margin-bottom: 23px;
    border-bottom: 1px solid $bgNavColor;
}
.fiveNotice_detail p,
.newNews_detail p {
    width: 100%;
    line-height: 26px;
}
.notice {
    display: flex;
    justify-content: space-between;
    margin-bottom: 13px;
}
.cur {
    background-color: $hoverBgColor;
}
.notice span{
    color: $wordsColorBase;
}
.notice{
    cursor: pointer;
}
</style>