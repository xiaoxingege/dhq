<template>
<div class="hyAll">
    <div class="hyList" >
       <ul >
            <li v-for='(item,index) in setHyList' @click="showDetail(item,index)">
                <div class="hyDate" >{{getDate(item.date)}}</div>
                <hyDetail :model="item.events" :isSelected="saveHyIndex===index" ></hyDetail>
            </li>
        </ul>
    </div>

    <div class="hyDetail" ref="hydetail">
        <hyNews  :newsUrl="saveHyUrl"></hyNews>
    </div> 
  </div>

</template>
<script>
import { mapState } from 'vuex'
import hyNews from 'components/dhq-news-detail'
import hyDetail from 'components/jjrl/hy-detail'
export default {
    components: {
    hyNews,
    hyDetail
  },
 
    data(){
        return {
            hyurl:'',
            cur:0,
            hyList:{},
            arrCode:[],
            getAllCode:[],
            curHyCode:'',
            queryCode:'',
            renderList:[]
        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode,
        setHyList:state => state.jjrl.setHyList && state.jjrl.setHyList.data || [],
        setHyName:state => state.jjrl.setHyName,
        saveDate: state => state.jjrl.saveDate,
        saveHyUrl:state => state.jjrl.saveHyUrl,
        saveHyIndex: state => state.jjrl.saveHyIndex,
        savaHyList: state => state.jjrl.savaHyList
       
        
    }),
    changeCalendar(){
        return this.saveDate.chooseDate;
    }

    },
       methods:{
        showDetail(item,index){
     //  console.log(index+'index被选中')
        this.$store.dispatch('jjrl/saveHyIndex',index)
      // console.log('saveHyIndex存储的===='+this.saveHyIndex)
        },
         hyDate(date) {
            var d, Y, M
            d = new Date(date)
            Y = d.getFullYear()
            M = d.getMonth() + 1
            
            if (M < 10) {
                M = '0' + M;
            }
            return Y +  M 
        },
        getDate(date){
            var d,M,D
            d = new Date(date)
            M = d.getMonth()+1
            D = d.getDate()
            if( M < 10 ) { M = '0' + M; }
            if( D < 10 ) { D = '0' + D; }
            return  M + '-' + D 
        },
        getDayOfDate(date){
          return parseInt(date.substr(date.lastIndexOf('-')+1))
        }
    }
   
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.hyAll {
    width: 100%;
    height: 100%;
}

.hyList {
    width: 32.41%;
    height: 100%;
    overflow: auto;
    background-color: #191c1e;
    border-right: 1px solid $bgNavColor;
    float: left;
}
.hyDetail{
    float: left;
    width: 67.5%;
    overflow: auto;
    height: 100%;
}
.cur{
     background-color: $hoverBgColor;
}
.hyDate{
    float: left;
    width: 40px;
    margin: 10px 0 0 15px;
    
}
</style>
