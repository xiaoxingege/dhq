<template>
    <div class="showStock" >
        <ul>
            <li v-for="(item , index) in setStock" 
                @click="showDetail(index,item)"
                :class="addCur===index?'cur':''"
                  >   
                <div class="choose" >
                    <span class="name">{{item[2]}}</span>
                    <span  class="addSelfChoice" @click="addSelfChoice(item,index)" v-if="isSelfSelection.length>0&&isSelfSelection[index]&&isSelfSelection[index].add!==0">+自选</span>
                    <span  class="deleteSelfChoice" @click="deleteSelfChoice(item,index)" v-if="isSelfSelection.length>0&&isSelfSelection[index]&&isSelfSelection[index].add===0">-自选</span>
                </div>
                <div class="price" v-z3-updowncolor="item[7]" @click="toDetails(item)"><span>{{item[5].toFixed(2)}}</span><span>{{item[6].toFixed(2)}}</span><span>{{item[7].toFixed(2)+"%"}}</span></div>
                <div class="open"><span >今开：<i :class="item[4]>item[3]?'red':'green'">{{item[4].toFixed(2)}}</i></span><span>昨收：{{item[3].toFixed(2)}}</span></div>
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
                // isSelfSelection: false,
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
                },
                public:'',
                zszd:'' ,//  指数涨跌,
                index:0,
                element:'',
                calenderDate:''
            }
        },
        computed:{ 
            ...mapState({
                setStock:state => state.jjrl.setStock,
                getStock:state => state.jjrl.getStock,
                storeData:state => state.jjrl.dateAndCode,
                isSelfSelection: state => state.jjrl.isSelfSelection,
                setStockLine:state => state.jjrl.setStockLine,
                stopStock:state => state.jjrl.stopStock,
                saveDate: state => state.jjrl.saveDate,
                setCount:state => state.jjrl.setCount,
                saveSelection:state => state.jjrl.saveSelection,
                firstCode: state => state.jjrl.firstCode

            }),
            changeCalendar(){
                 return this.saveDate.chooseDate;
            }
        },
        methods: {
         showDetail(index,item){
              this.addCur=index
             // debugger
              this.stopdate=this.getStock[index].STP_DT //   停牌日期
              this.public=this.getStock[index].ESP_HINT //  停牌时间公告
              this.stockCode=item[1]  //  当前股票代码
              this.setDate(this.stopdate)
              this.$store.dispatch('jjrl/stopStock', { stockCode:this.stockCode,date:this.stopdate })// 请求停牌公告
              this.$store.dispatch('jjrl/newNews', { stockCode:this.stockCode })
              this.$store.dispatch('jjrl/setStockLine',this.saveDate.chooseDate).then( res => {
              this.zszd=this.setStockLine[this.stockCode].return_pct.toFixed(2)
                this.$store.dispatch('jjrl/storeData',{ // 存储停牌时间，代码，公告和涨跌停数据
                        stopdate:this.stopdate,
                        stockCode:this.stockCode,
                        public:this.public,
                        zszd:this.zszd
                     }).then(res => {
            //    console.log(this.storeData)
                     }) 
                    
              })

          }  ,
          addSelfChoice(item,index ){                           
             this.stockCode=item[1]
             this.isSelfSelection[index].add=0
             this.$store.dispatch('jjrl/addSelection', {
                    stockCode: this.stockCode
             })
          },
          deleteSelfChoice(item,index ){
            this.stockCode=item[1]
            this.isSelfSelection[index].add=-1
            this.$store.dispatch('jjrl/removeSelection', {
                    stockCode: this.stockCode
             })
          },
          toDetails(item){
              var r,q,R,Q
              r=item[0].match(/^[a-z|A-Z]+/gi);
              q=item[0].match(/\d+$/gi);
              R=r.join('').toUpperCase() //
              Q=q.join('')  // 数字
              let code=Q+'.'+R
              this.para.stockCode=code
              native.openStock(this.para)
          },
          setDate(date){
            var d,Y,M,D
                d = new Date(date)
                d.setDate(d.getDate()-5); 
                Y = d.getFullYear()
                M = d.getMonth()+1
                D = d.getDate()
                if( M < 10 ) { M = '0' + M; }
                if( D <10 ) { D = '0' + D; }
            this.stopdate=  Y + '-' + M + '-' + D 
          }
        },
      watch:{
          changeCalendar:function () { 
            this.addCur=0
            this.index=0
          }
        },
        mounted () {
 
               //  console.log(this.setStock)
        }
        }
    
</script>

<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.showStock {
    box-sizing: border-box;
    height: 600px;
}
.red {
    color: $upColorDhq;
}
.green {
    color: $downColorDhq;
}
.choose {
    display: flex;
    justify-content: space-between;
}
.showStock p {
    line-height: 24px;
}
.cur {
    background-color: $hoverBgColor;
}
.open {
    display: flex;
    justify-content: space-between;
}

.price {
    margin-bottom: 5px;
    cursor: pointer;
}
.price span {
    margin-right: 8px;

}
.showStock ul li {

    box-sizing: border-box;
}
.addSelfChoice {
    width: 40px;
    height: 18px;
    padding-left: 1px;
    box-sizing: border-box;
    background-color: $upColorDhq;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
}
.name {
    margin: 5px 0;
}
.deleteSelfChoice {
    width: 40px;
    height: 18px;
    padding-left: 3px;
    box-sizing: border-box;
    border: 1px solid $upColorDhq;
    border-radius: 2px;
    color: $upColorDhq;
    cursor: pointer;
}
.showStock ul li {
    padding: 5px 12px;
    border-bottom: 1px solid $bgNavColor;
}
</style>