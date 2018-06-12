<template>
    <div class="showStock">
        <ul>
            <li v-for="(item , index) in setStockData" 
                @click="showDetail(index,item)"
                :class="addCur===index?'cur':''"
                  >   
                <div class="choose">
                    <span class="name">{{item[2]}}</span>
                    <span class="addSelfChoice" @click="addSelfChoice" v-if="!isShowSelection">+自选</span>
                    <span class="deleteSelfChoice" @click="deleteSelfChoice" v-if="isShowSelection">-自选</span>
                </div>
                <div class="price" :class="item[7]>0?'red':'green'" @click="toDetails(item)"><span>{{item[4].toFixed(3)}}</span><span>{{item[6].toFixed(2)}}</span><span>{{item[7].toFixed(2)+"%"}}</span></div>
                <div class="open"><span >今开：<i :class="item[7]>0?'red':'green'">{{item[4].toFixed(2)}}</i></span><span>昨收：{{item[3].toFixed(2)}}</span></div>
            </li>
        </ul>
    </div>
    
</template>
<script>
    import { mapState } from  'vuex'
    import native from '../../utils/nativeApi'
    export default{
        data(){
            return{
                isShowSelection: false,
                getStockCode:[],
                setStockData:[],
                addCur:0,
                stopdate:'',
                stockCode:'',
                params:{
                    stopdate:'',
                    stockCode:''
                },
                para:{
                    stockCode:''
                }
            }
        },
        computed:{ 
            ...mapState({
                setStock:state => state.jjrl.setStock,
                getStock:state => state.jjrl.getStock,
                storeData:state => state.jjrl.dateAndCode
            })
        },
        methods: {
         showDetail(index,item){
              this.addCur=index
              this.stopdate=this.getStock[index].STP_DT //   停牌日期
              this.stockCode=item[1]  //  当前股票代码
              this.setDate(this.stopdate)
                this.$store.dispatch('jjrl/storeData',{
                    stopdate:this.stopdate,
                    stockCode:this.stockCode }).then( res => {
                })
                this.$store.dispatch('jjrl/stopStock', { stockCode:this.storeData.stockCode,date:this.storeData.stopdate })
           
          }  ,
          addSelfChoice(){

          },
          deleteSelfChoice(){

          },
          toDetails(item){
              var r,q,R,Q
              r=item[0].match(/^[a-z|A-Z]+/gi);
              q=item[0].match(/\d+$/gi);
              R=r.join('').toUpperCase() //
              Q=q.join('')  // 数字
              let code=Q+'.'+R
              this.para.stockCode=code
              native.opendStock(this.para)
            
          },
          setDate(date){
            var d,Y,M,D
                d = new Date(date)
                Y = d.getFullYear()
                M = d.getMonth()+1
                D = d.getDate()-5
                if( M < 10 ) { M = '0' + M; }
                if( D < 10 ) { D = '0' + D; }
            this.stopdate=  Y + '-' + M + '-' + D 
          }
        },
    
        mounted () {
            var data='2018-06-11'
            this.$store.dispatch('jjrl/getStock',data).then( res => {
                this.stopdate=this.getStock[0].STP_DT
                this.setDate(this.stopdate)
                this.stockCode=this.getStock[0].STOCKCODE
                this.getStock.forEach( ele => {
                this.getStockCode.push(ele.STOCKCODE)
                })
                let item= this.getStockCode.join(',')
                this.$store.dispatch('jjrl/setStock',item).then( res => {
                this.setStockData =this.setStock
                }) 
                this.$store.dispatch('jjrl/storeData',{
                stopdate:this.stopdate,
                stockCode:this.stockCode })
                
                this.$store.dispatch('jjrl/stopStock', { stockCode:this.storeData.stockCode,date:this.storeData.stopdate })
           
            })  
                  
                     
           
        }
    }
</script>

<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.showStock{
   box-sizing: border-box;
   height: 600px;
}
.red{
    color: $upColorDhq;
}
.green{
    color:$downColorDhq;
}
.choose{
    display: flex;
    justify-content: space-between;
}
.showStock p{
    line-height: 24px;
}
.cur{
    background-color: $hoverBgColor;
}
.open{
    display: flex;
    justify-content: space-between
}

.price {
    margin-bottom: 5px;
    cursor: pointer;
}
.price span{
    margin-right: 8px;
    
}
.showStock ul li{
    
    box-sizing: border-box;
}
.addSelfChoice{
    width: 40px;
    height: 18px;
    padding-left: 3px;
    box-sizing: border-box;
    background-color: $upColorDhq;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
}
.name{
    margin: 5px 0
}
.deleteSelfChoice{
    width: 40px;
    height: 18px;
    padding-left: 3px;
    box-sizing: border-box;
    border: 1px solid $upColorDhq;
    border-radius: 2px;
    color:$upColorDhq;
}
.showStock ul li{
     padding:5px 12px;
    border-bottom: 1px solid $bgNavColor;
}
</style>