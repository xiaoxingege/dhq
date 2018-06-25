<template>
  <div class="stockAll" v-if="count">
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
                    <td class="col-10">
                        <span  class="addSelfChoice" @click="addSelfChoice(item,index)" v-if="!item['zx']">+自选</span>
                    <span  class="deleteSelfChoice" @click="deleteSelfChoice(item,index)" v-if="item['zx']">-自选</span>
                    </td> 
                    
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
     props:['count'],
    data(){
        return {
            list: [],
            curType:'0',
            isCur:0,
            notOpenStockCode:[],
            isActive:false,
            para:{
                    stockCode:''
                },
            index:0,
            element:''
        }
    },
    computed:{
         ...mapState({
             notOpenStock:state => state.jjrl.notOpenStock,
             notOpenStockList:state => state.jjrl.notOpenStockList,
             saveDate: state => state.jjrl.saveDate,
             storeData:state => state.jjrl.dateAndCode,
             isSelfSelection: state => state.jjrl.isSelfSelection
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
              //  console.log(code)
              native.openStock(this.para)
           },
           addSelfChoice(item,index ){
            this.stockCode=item.STOCKCODE
            this.$store.dispatch('jjrl/addSelection', {
                    stockCode: this.stockCode
             }).then( res => {
           //    debugger
                 const ele = this.isSelfSelection
                 this.notOpenStock[index]['zx']=ele;
             }) 
          },
          deleteSelfChoice(item,index ){
            this.stockCode=item.STOCKCODE
            this.$store.dispatch('jjrl/removeSelection', {
                    stockCode: this.stockCode
             }).then(res => {
                const ele = this.isSelfSelection
                 this.notOpenStock[index]['zx']=ele;
             })
          }
    },
    
    mounted(){
 /*        this.$store.dispatch('jjrl/saveDate').then( res => {
          console.log(this.saveDate)
  
        }) */
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
    width: 10.25%;
}
.col-2, .col-3 {
    width: 8.64%;
}
.clo-4 {
    width: 11.46%;
}
.col-5 {
    width:10.25%;
}
.col-6 {
    width: 12.36%;
}
.col-7 {
    width:10.25%;
}
.col-8 {
    width:10.25%;

}
.col-9 {
    width: 10.25%;
}
.col-10 {
    width:  8.64%;
}
.addSelfChoice{
    width: 40px;
    height: 18px;
    padding-left: 1px;
    box-sizing: border-box;
    background-color: $upColorDhq;
    border-radius: 2px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
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
    cursor: pointer;
    display: inline-block;
}
</style>