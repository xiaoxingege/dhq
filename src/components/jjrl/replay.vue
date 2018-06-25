<template>
<div class="container">
  <div class="rili">
    <calendar @dateChange="chooseDate"></calendar>
  </div>
  <div class="mainBox">
    <div class='replay'>
      <ul>
        <li v-for="(item,index ) in list" @click="addCur(index)" :class="{'cur':isCur===index}">
          <p class="title">{{item.name}} <i v-if="item.count===null?false:true">（{{item.count}}只）</i></p>
          <p>{{item.detail}}</p>
        </li>

      </ul>
    </div>
    <div class="detailBox">
      <component :is='comp' :count='hasCount'></component>
    </div>
  </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import resumeTrading from 'components/jjrl/resume-trading'
import notOpenStock from 'components/jjrl/notOpenStock'
import calendar from 'components/jjrl/calendar'
import hyCalendar from 'components/jjrl/hyCalendar'
export default {
  data() {
    return {
      hasCount: '',
      replayList: {
        '0': {
          components: resumeTrading
        },
        '1': {
          components: hyCalendar
        },
        '2': {
          components: notOpenStock
        },
        '3': {

        },
        '4': {

        }
      },
      list: [{
          name: '复牌',
          count: '',
          detail: ''
        },
        {
          name: '会议日历',
          count: '',
          detail: ''
        },
        {
          name: '未开板新股',
          count: '',
          detail: ''
        },
        {
          name: '新闻联播',
          count: '',
          detail: ''
        },
        {
          name: '今日热点股',
          count: '',
          detail: ''
        }
      ],
      curType: '0',
      isCur: 0,
      date:new Date(),
      notOpenStockCode:[],
      getStockCode:[],
      setStockData:[],
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
      calenderDate:'',
      chartData:[],
      bkData:[],
      ggData:[],
      showDate:[],
      fpCount:'',
      hyCount:'',
      wkbCount:''
    }
  },
  components: {
    calendar
  },
  computed: {
    ...mapState({
      setGuide: state => state.jjrl.guide,
      saveDate: state => state.jjrl.saveDate,
      setStock:state => state.jjrl.setStock,
      getStock:state => state.jjrl.getStock,
      storeData:state => state.jjrl.dateAndCode,
      isSelfSelection: state => state.jjrl.isSelfSelection,
      setStockLine:state => state.jjrl.setStockLine,
      stopStock:state => state.jjrl.stopStock,
      notOpenStock:state => state.jjrl.notOpenStock,
      notOpenStockList:state => state.jjrl.notOpenStockList,
      setCount:state => state.jjrl.setCount
    }),
    comp: function() {
      return this.replayList[this.curType].components;
    },
    tradeDate:function(){
      var d,Y,M,D
          d = this.date;
          Y = d.getFullYear()
          M = d.getMonth()+1
          D = d.getDate()
          if( M < 10 ) { M = '0' + M; }
          if( D <= 10 ) { D = '0' + D; }
      return  Y + '-' + M + '-' + D 
    },
      changeCalendar(){
        return this.tradeDate;
    } 
  },
  methods: {
    addCur(index) {
      this.curType = index
      this.isCur = index
       this.$store.dispatch('jjrl/saveDate',{ chooseDate:this.tradeDate })
       if(this.curType===2){
         this.initNotOpenStock(this.tradeDate) 
       }else if(this.curType===0){
     //   debugger
          if(this.list[0].count===0){
           this.$store.dispatch('jjrl/resetFp')
          }
          this.initFp(this.saveDate.chooseDate) 
       }
    },
    chooseDate(date){
      this.date = date
    },
    setDate(date){
        var d,Y,M,D
            d = new Date(date)
            d.setDate(d.getDate()-5); 
            Y = d.getFullYear()
            M = d.getMonth()+1
            D = d.getDate()
            if( M < 10 ) { M = '0' + M; }
            if( D <= 10 ) { D = '0' + D; }
        this.stopdate=  Y + '-' + M + '-' + D 
      },
    initConsole(){
      this.$store.dispatch('jjrl/setGuide',this.tradeDate).then(res => {
      this.list[0].count = this.setGuide.tfp_count
      this.list[0].detail = this.setGuide.tfp_wz
      this.list[1].count = this.setGuide.hy_count
      this.list[1].detail = this.setGuide.hy_wz
      this.list[2].count = this.setGuide.cxg_count
      this.list[2].detail = this.setGuide.cxg_wz
      this.list[3].count = null
      this.list[3].detail = this.setGuide.xwlb_wz
      this.list[4].count = null
      this.list[4].detail = this.setGuide.jrrd_wz
      if(this.list[0].count===0){
        this.hasCount===false
      }
      this.hasCount= this.list[0].count
      this.hyCount= this.list[1].count
      this.wkbCount= this.list[2].count
    
    })

    },
    initNotOpenStock(){
       this.$store.dispatch('jjrl/notOpenStock', this.tradeDate).then(res => {
        //  debugger
             this.notOpenStock.forEach( ele => {
                this.notOpenStockCode.push(ele.STOCKCODE)
                })
            let item=this.notOpenStockCode.join(',')
            this.$store.dispatch('jjrl/notOpenStockList',item) 
              /* 自选股部分 */
            const me=this;
            getState();
            function getState(){
              me.element=me.notOpenStockCode[me.index];
              me.$store.dispatch('jjrl/querySelection',me.element).then(res => {
              me.notOpenStock[me.index]['zx']=me.isSelfSelection; 
              if(me.index<me.notOpenStockCode.length-1){
                me.index++;
                me.element=me.notOpenStockCode[me.index]
                getState();
              }
            
          }) 
            } 
      })
     
    },
    initFp(date){
             //   console.log( this.calenderDate)
                this.$store.dispatch('jjrl/getStock',date).then( res => {
                this.stopdate=this.getStock[0].STP_DT
                this.setDate(this.stopdate)
                this.stockCode=this.getStock[0].STOCKCODE
                this.getStockCode=[]
                this.getStock.forEach( ele => {
                this.getStockCode.push(ele.STOCKCODE) // 股票代码数组
                })
                let item= this.getStockCode.join(',') // q接口支持多个查询
                this.$store.dispatch('jjrl/setStock',item).then( res => {
                this.setStockData =this.setStock
                }) 
                /* 自选股部分 */
               const me=this;
               getState();
               function getState(){
                   me.element=me.getStockCode[me.index];
              //    console.log( me.setStockData)
                    me.$store.dispatch('jjrl/querySelection',me.element).then(res => {
                //   debugger
            //    console.log( me.setStockData)
                        me.setStockData[me.index].push(me.isSelfSelection);
                        if(me.index<me.getStockCode.length-1){
                          me.index++;
                          me.element=me.getStockCode[me.index]
                          getState();
                        }
                     
                    }) 
               }
            // console.log(this.isSelfSelection)
               this.public=this.getStock[0].ESP_HINT 
                this.$store.dispatch('jjrl/storeData',{
                stopdate:this.stopdate,
                stockCode:this.stockCode,
                public:this.public })
                this.$store.dispatch('jjrl/stopStock', { stockCode:this.storeData.stockCode,date:this.storeData.stopdate })
                   /* 图表部分文字 */ 
                 //  debugger
                this.$store.dispatch('jjrl/setStockLine',date).then( res => {
                let code=this.storeData.stockCode
                this.zszd=this.setStockLine[code].return_pct.toFixed(2)+'%'
                // console.log(this.setStockLine)
           //   console.log( code)
                  this.chartData=this.setStockLine[code]
                  this.chartData.zs.forEach(item => {
                  this.bkData.push(item.index.toFixed(2))
                  })
                  this.chartData.hq.forEach(item => {
                  let time= this.setDate(item.trade_date)
                  this.showDate.push(time)
                  this.ggData.push(item.index.toFixed(2))
           })
                  this.$store.dispatch('jjrl/storeData',{
                        stopdate:this.stopdate,
                        stockCode:this.stockCode,
                        public:this.public,
                        zszd:this.zszd ,
                        bkData:this.bkData,
                        ggData:this.ggData }).then( res => {
                    console.log(this.storeData)
                        })
                })
            })  

         
      
    }
    


  },
  watch:{
    tradeDate:function(){
      this.$store.dispatch('jjrl/saveDate',{ chooseDate:this.tradeDate }).then( res => {
        this.initConsole(this.saveDate.chooseDate)
        this.notOpenStockCode=[]
        this.index=0
        this.initNotOpenStock(this.saveDate.chooseDate) 
        this.initFp(this.saveDate.chooseDate) 
       //    console.log(this.list[0].count)
      })  
    }
  },
  mounted() {
 
    this.initConsole(this.tradeDate)
     this.$store.dispatch('jjrl/saveDate',{ chooseDate:this.tradeDate })
       if( this.fpCount===0){
      //  this.$store.dispatch('jjrl/resetFp')
      }
          this.initFp(this.saveDate.chooseDate)
         this.$store.dispatch('jjrl/setCount',{
      fp: this.fpCount,
      hy:this.hyCount,
      wkbxg:this.wkbCount 
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
.container {
    width: 100%;
    height: 100%;

}
.replay {
    width: 13.58%;
    height: 100%;
    background-color: #191c1e;
    border-top: 1px solid $bgNavColor;
    border-right: 1px solid $bgNavColor;
}
.replay .title,
.replay .title i {
    color: $blueWordsColor;

}
.replay ul li {
    padding: 5px 0 5px 10px;
}
.replay ul li p {
    color: $grayWordsColor;
    line-height: 20px;

}
.replay ul li {
    cursor: pointer;
}
.detailBox {
    width: 86.42%;
    height: 100%;
}
.mainBox {
    height: 100%;
    display: flex;
    justify-content: space-between;
}
.cur {
    background-color: $hoverBgColor;
}
.rili {
    height: 30px;
}
</style>