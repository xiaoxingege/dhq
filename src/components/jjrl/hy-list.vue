<template>
<div>
    <ul>
        <li v-for='(item,index) in setHyList.data' @click="showDetail(item,index)">
            <div class="hyDate" >{{getDate(item.date)}}</div>
            <hyDetail :model="item" :isSelected="saveHyIndex===index" ></hyDetail>
        </li>
    </ul>
   
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import hyDetail from 'components/jjrl/hy-detail'
export default { 
    components: { hyDetail },
   
    data(){
        
        return {
            cur:0,
            hyList:{},
            arrCode:[],
            getAllCode:[],
            curHyCode:'',
            queryCode:''
        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode,
        setHyList:state => state.jjrl.setHyList,
        setHyName:state => state.jjrl.setHyName,
        saveDate: state => state.jjrl.saveDate,
        saveHyUrl:state => state.jjrl.saveHyUrl,
        saveHyIndex: state => state.jjrl.saveHyIndex
    })
    },
    methods:{
        showDetail(item,index){
       // console.log(index+'index')
        this.$store.dispatch('jjrl/saveHyIndex',index)
       // console.log('saveHyIndex===='+this.saveHyIndex)
        
        },
         hyDate(date) {
            var d, Y, M
            d = new Date(date)
            // d.setDate(d.getDate() - 5);
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
        }
    },
    watch:{
        saveDate(){
            this.setHyName=null
            this.setHyList=[]
            this.$store.dispatch('jjrl/setHyList',this.hyDate(this.saveDate.chooseDate)).then( res => {
            this.arrCode=[]
            this.hyIndex = 0
        //    console.log(this.setHyList.data)
            const hasChooseDate = this.setHyList.data.filter((ele,i) => {
              return this.getDayOfDate(this.saveDate.chooseDate)<=this.getDayOfDate(ele.date)
            }) 
            for(let i = 0; i<this.setHyList.data.length; i++){
              if(this.getDayOfDate(this.saveDate.chooseDate)<=this.getDayOfDate(this.setHyList.data[i].date)){
                  this.hyIndex = i
                  break;
              }
            } 
        //    console.log('this.hyIndex================'+this.hyIndex)
            this.$store.dispatch('jjrl/saveHyIndex',this.hyIndex)
            if(hasChooseDate.length !==0){
              this.$store.dispatch('jjrl/saveHyUrl',hasChooseDate[0].events[0].link)
         //     console.log(hasChooseDate[0].date+"时间")
            }else{
              this.$store.dispatch('jjrl/saveHyUrl',this.setHyList.data[0].events[0].link)
            }
            this.setHyList.data.forEach((ele,i) => {
                ele.events.forEach( (res,index) => {
                    this.arrCode.push(res.concepts[0])
                })   
            }) 
            // 将相关股票代码提取出来放进数组中
        //  console.log(this.setHyList.data)
          
           this.getAllCode=[]
            for (let i=0; i<this.arrCode.length; i++){
                let ele=this.arrCode[i];
                if(!ele){
                    continue;
               }
                let stockCodeArr=ele.stocks.split(',');
                stockCodeArr=stockCodeArr.slice(0,3);
                ele.stocks=stockCodeArr.join(',');
                ele.stockArr=[];
                for(let j=0; j<stockCodeArr.length; j++){
                    ele.stockArr.push({ code:stockCodeArr[j] })
                } 
                this.getAllCode.push(ele.stocks)
            }
            this.queryCode=this.getAllCode.join(',')
          //  console.log(this.queryCode)
            this.$store.dispatch('jjrl/setHyName',this.queryCode)
        }) 
        }
    }

}
</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.cur{
     background-color: $hoverBgColor;
}
.hyDate{
    float: left;
    width: 40px;
    margin: 10px 0 0 15px;
    
}
</style>