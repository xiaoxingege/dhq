<template>
  <div class="stockAll">
     <div class="name">
         <div class="notOpenstock">
             <i></i>未开板新股
         </div>
         <table>
             <thead>
                 <tr>
                 <th class="col-1">名称</th>
                 <th class="col-2">代码</th>
                 <th class="col-3">当前价格</th>
                 <th class="col-4">当前涨跌幅</th>
                 <th class="col-5">一字板数量</th>
                 <th class="col-6">昨日收盘价</th>
                 <th class="col-7">所属行业</th>
                 <th class="col-8">行业PE</th>
                 <th class="col-9">个股PE</th>
                 <th class="col-10"></th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="(item,index) in notOpenStock" @mouseenter="showRow(index)" @mouseleave="leaveRow(index)" :class="{'active':isActive===index}" >
                     <!-- <td>{{item.STOCKCODE}}</td> -->
                    <td class="col-1 col-1-color" @click="jumpDetail(item,index)">{{item.STOCKSNAME}}</td>
                    <td class="col-2">{{item.STOCKCODE}}</td>
                    <td class="col-3" >{{item.np}}</td>
                    <td class="col-4">{{item.CHNG_PCT.toFixed(2)}}</td>
                    <td class="col-5">{{item.yiziban_days}}</td>
                    <td class="col-6">{{item.LCLOSE.toFixed(2)}}</td>
                    <td class="col-7">{{item.INDU_NAME}}</td>
                    <td class="col-8">{{item.INDU_PE.toFixed(2)}}</td>
                    <td class="col-9">{{item.PE.toFixed(2)}}</td>
                    <td class="col-10"></td> 
                    
                 </tr>
               
             </tbody>

        </tr>
        <tr>
          <td>00</td>

        </tr>
        <tr>
          <td>00</td>

        </tr>
        <tr>
          <td>00</td>

        </tr>
      </tbody>

    </table>
  </div>
</div>
</template>
<script>

import { mapState } from  'vuex'
import native from '../../utils/nativeApi'
export default{
    data(){
        return {
            list: [],
            curType:'0',
            isCur:0,
            notOpenStockCode:[],
            isActive:false,
            para:{
                    stockCode:''
                }
        }
    },
    computed:{
         ...mapState({
             notOpenStock:state => state.jjrl.notOpenStock,
             notOpenStockList:state => state.jjrl.notOpenStockList
         })
       
    },
    methods:{
           showRow(index){
               this.isActive = index
           },
           leaveRow(index){
                this.isActive=null
           },
           jumpDetail(item,index){
           //    console.log(item)
              var r,q,R,Q
              r=item.id.match(/^[a-z|A-Z]+/gi);
              q=item.id.match(/\d+$/gi);
              R=r.join('').toUpperCase() //
              Q=q.join('')  // 数字
              let code=Q+'.'+R
              this.para.stockCode=code
              native.opendStock(this.para)
           }

    },
    mounted(){
      this.$store.dispatch('jjrl/notOpenStock','2018-06-11').then(res => {
             this.notOpenStock.forEach( ele => {
                this.notOpenStockCode.push(ele.STOCKCODE)
                })
              console.log(this.notOpenStock)
            let item=this.notOpenStockCode.join(',')
            this.$store.dispatch('jjrl/notOpenStockList',item)
      })
        
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-sizing: border-box;
    font-family: "Microsoft YaHei";
    font-size: $fontSizeBase;
    color: $wordsColorBase;
}
.active{
    background-color: $hoverBgColor;
}
.stockAll{
    padding: 27px 26px;
}
.notOpenstock {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 6px;

}
.notOpenstock i {
    display: inline-block;
    width: 6px;
    height: 22px;
    border-radius: 2px;
    background-color: $bgNavColor;
    vertical-align: middle;
    margin-right: 5px;
}
table {
    width: 100%;
    text-align: center;
    border-collapse: collapse;
}
table thead th{
    
    background-color: $bgConColor;
    border: 1px solid $borderColor;
}
table, th, td{
    height: 28px;
     border: 1px solid $borderColor;
     text-align: center;
}
.col-1-color{
    color:$blueWordsColor;
    cursor: pointer;
}
.col-1{
    width: 100px;
}
.col-2,
.col-3 {
    width: 86px;
}
.clo-4 {
    width: 114px;
}
.col-5 {
    width: 108px;
}
.col-6 {
    width: 123px;
}
.col-7 {
    width: 102px;
}
.col-8 {
    width: 102px;

}
.col-9 {
    width: 100px;
}
.col-10 {
    width: 70px;
}
</style>