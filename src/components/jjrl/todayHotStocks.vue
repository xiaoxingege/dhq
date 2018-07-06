<template>
    <div class="stocksAll">
        <div class="notice"><span></span>交易日不定时更新利好消息，更新时间<i>{{getDate(todayHotStock[0].CTIME)}}</i></div>
        <div class="stockCon" v-for="(item,index) in todayHotStock">
            <div class="stockName" > <span @click="jumpDetail(item,index)">{{item.STOCKSNAME}}</span><span :class="item.pl>0?'red':'green'"> {{item.np}}</span><span :class="item.pl>0?'red':'green'">{{item.pl+"%"}}</span></div>
            <div class="stockDetail">
                {{item.CONTENT}}
            </div>
        </div>
    </div>

    
</template>
<script>
import native from '../../utils/nativeApi'
import { mapState } from 'vuex'
import util from '../../dhq/util'
export default{
    data() {
        return {
            arr:[]
    }
  },
      computed: { 
    ...mapState({
        todayHotStock:state => state.jjrl.todayHotStock,
        todayHotStockPrice:state => state.jjrl.todayHotStockPrice
        })

    },
    methods: {
    jumpDetail(item) {
         native.openStock({
         stockCode: util.formatterInnercode(item.STOCKCODE)
      })
    },
     getDate (date){
            var d,h,m,s
            d = new Date(date)
            h= d.getHours()
            m = d.getMinutes()
            s=d.getSeconds()
            if( h< 10 ) { h= '0' + h; }
            if( m < 10 ) { m = '0' + m; }
            if( s < 10 ) { s = '0' + s; }
             return  h+ ':' +m +':'+s
    }
        
    },
    mounted () {
      //    debugger

    }
}
</script>
<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.stocksAll{
    padding:25px 20% 25px 10% 
}
.notice{
    color:$grayWordsColor;

}
.notice span{
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(http://i0.jrjimg.cn/Astock/noticePic.png) no-repeat center;
    background-size: 100%;
    vertical-align: middle;
    margin-right: 10px;
}
.stockCon{
    box-sizing: border-box;
    padding: 25px 0 20px 0; 
    border-bottom: 1px solid $bgNavColor;
}
.stockName{
    margin-bottom:14px;
    color:$blueWordsColor;
}
.stockName span{
    margin-right: 20px;
}
.stockName span:first-child{
    cursor: pointer;
}
.stockDetail{
    line-height: 20px;
}
.red {
    color: $upColorDhq;
}
.green {
    color: $downColorDhq;
}
</style>