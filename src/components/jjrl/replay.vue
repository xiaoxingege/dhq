<template>
<div class="container">
  <div class="rili">
    <calendar @dateChange="chooseDate"></calendar>
  </div>
  <div class="mainBox">
    <div class='replay'>
      <ul>
        <li v-for="(item,index ) in list" @click="addCur(index)" :class="{'cur':isCur===index}">
          <p class="title">{{item.name}} <i v-if="item.count===null?false:true">{{item.count}}</i></p>
          <p>{{item.detail}}</p>
        </li>

      </ul>
    </div>
    <div class="detailBox">
      <component :is='comp' :fpCount='hasCount' :wkbCount='getCount' ></component>
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
import newsBroadcast from 'components/jjrl/newsBroadcast'
import todayHotStocks from 'components/jjrl/todayHotStocks'
export default {
  data() {
    return {
      hasCount: '',
      getCount:'',
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
          components:newsBroadcast
        },
        '4': {
          components:todayHotStocks
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
      date: new Date(),
      notOpenStockCode: [],
      getStockCode: [],
      setStockData: [],
      stopdate: '',
      stockCode: '',
      params: {
        stopdate: '',
        stockCode: ''
      },
      para: {
        stockCode: ''
      },
      public: '',
      zszd: '', //  指数涨跌,
      index: 0,
      element: '',
      calenderDate: '',
      chartData: [],
      fpCount: '',
      hyCount: '',
      wkbCount: '',
      hyList:{}, // 会议日历
      arrCode:[],
      getAllCode:[],
      curHyCode:'',
      queryCode:'',
      arr:[],
      intervalid1:Object,
      saveHyList:[]
    }
  },
  components: {
    calendar
  },
  computed: {
    ...mapState({
      setGuide: state => state.jjrl.guide,
      saveDate: state => state.jjrl.saveDate,
      setStock: state => state.jjrl.setStock,
      getStock: state => state.jjrl.getStock,
      storeData: state => state.jjrl.dateAndCode,
      isSelfSelection: state => state.jjrl.isSelfSelection,
      setStockLine: state => state.jjrl.setStockLine,
      stopStock: state => state.jjrl.stopStock,
      notOpenStock: state => state.jjrl.notOpenStock,
      notOpenStockList: state => state.jjrl.notOpenStockList,
      setCount: state => state.jjrl.setCount,
      setHyList:state => state.jjrl.setHyList,
      setHyName:state => state.jjrl.setHyName,
      saveHyIndex: state => state.jjrl.saveHyIndex,
      getNewsBroadcast:state => state.jjrl.getNewsBroadcast,
      todayHotStock:state => state.jjrl.todayHotStock,
      todayHotStockPrice:state => state.jjrl.todayHotStockPrice,
      savaHyList: state => state.jjrl.savaHyList
      
    }),
    comp: function() {
      return this.replayList[this.curType].components;
    },
    tradeDate: function() {
      var d, Y, M, D
      d = this.date;
      Y = d.getFullYear()
      M = d.getMonth() + 1
      D = d.getDate()
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      return Y + '-' + M + '-' + D
    }
  },
  methods: {
    addCur(index) {
      this.curType = index
      this.isCur = index
       this.$store.dispatch('jjrl/saveDate',{ chooseDate:this.tradeDate })
       if(parseInt(this.curType)===2){
        this.initNotOpenStock(this.tradeDate) 
         clearInterval(this.intervalid1)
       }else if(parseInt(this.curType)===0){
        this.initFp(this.saveDate.chooseDate) 
         clearInterval(this.intervalid1)
       }else if(parseInt(this.curType)===1){
        this.initHy(this.hyDate(this.saveDate.chooseDate) )
         clearInterval(this.intervalid1)
       }else if(parseInt(this.curType)===3){
        this.initNewsBroadcast(this.saveDate.chooseDate)
         clearInterval(this.intervalid1)
       }else if(parseInt(this.curType)===4){
          clearInterval(this.intervalid1)
          this.initHotStock()
          this.intervalid1 =setInterval( () => {
            this.initHotStock()
         },5000)
        
       }
    },
    chooseDate(date) {
      this.date = date
    },
    setDate(date) {
      var d, Y, M, D
      d = new Date(date)
      d.setDate(d.getDate() - 5);
      Y = d.getFullYear()
      M = d.getMonth() + 1
      D = d.getDate()
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      this.stopdate = Y + '-' + M + '-' + D
    },
      chartDate(date) {
      var d, Y, M, D
      d = new Date(date)
      Y = d.getFullYear()
      M = d.getMonth() + 1
      D = d.getDate()
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      return Y + '-' + M + '-' + D
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
    newsDate(date){
      var d,Y,M,D,h,m,cur,curD,curM
      cur= new Date()
      d = new Date(date)
      Y = d.getFullYear()
      M = d.getMonth() + 1
      D = d.getDate()
      h = d.getHours()
      m = d.getMinutes()
      curM=cur.getMonth() + 1
      curD=cur.getDate()
   
      if (M < 10) {
        M = '0' + M;
      }
      if (D < 10) {
        D = '0' + D;
      }
      if (curM< 10) {
        curM = '0' + curM;
      }
      if (curD < 10) {
        curD = '0' +curD;
        }
      if(curD === D&& curM===M ){ //  当天20点半之前,凌晨之后，都显示前一天数据
      if(h < 20&&m < 30){
      d.setDate(d.getDate() - 1);
      D = d.getDate()
      M = d.getMonth() + 1
      if (D < 10) {
        D = '0' + D;
        }
      if (M < 10) {
        M = '0' + M;
      }
        return Y + '-' + M + '-' + D
      }else{
        return Y + '-' + M + '-' + D
      }
      
      }else if(curD > D || curM > M){
        return Y + '-' + M + '-' + D
      }
     

    },
    getDayOfDate(date){
      return parseInt(date.substr(date.lastIndexOf('-')+1))
    },
    /* 初始化功能栏 */
    initConsole() {
      this.$store.dispatch('jjrl/setGuide', this.tradeDate).then(res => {
        this.list[0].count = this.setGuide.tfp_count?'（'+this.setGuide.tfp_count+'只)':'(暂无数据)'
        this.list[0].detail = this.setGuide.tfp_wz
        this.list[1].count = '（'+this.setGuide.hy_count+'个）'
        this.list[1].detail = this.setGuide.hy_wz
        this.list[2].count = this.setGuide.cxg_count?'（'+this.setGuide.cxg_count+'只）':'(暂无数据)'
        this.list[2].detail = this.setGuide.cxg_wz
        this.list[3].count = null
        this.list[3].detail = this.setGuide.xwlb_wz
        this.list[4].count = null
        this.list[4].detail = this.setGuide.jrrd_wz
        // 判断数量是否为空
        this.list[0].countSave=this.setGuide.tfp_count
        this.list[2].countSave=this.setGuide.cxg_count
        if (this.list[0].countSave === 0) {
          this.hasCount === false
        }
        if(this.list[2].countSave === 0){
          this.getCount === false
        }
        this.hasCount = this.list[0].countSave
        this.wkbCount = this.list[2].countSave

      })

    },
    // 初始化为开板新股
    initNotOpenStock() {
            this.index=0
            this.notOpenStockCode=[]
      this.$store.dispatch('jjrl/notOpenStock', this.tradeDate).then(res => {
             this.notOpenStock.forEach( ele => {
                this.notOpenStockCode.push(ele.STOCKCODE)
                })
            let item=this.notOpenStockCode.join(',')
            this.$store.dispatch('jjrl/notOpenStockList',item) 
          //  console.log(this.notOpenStock)
              /* 自选股部分 */
            const me=this;
             me.index=0;
             var currentIndex=0;
            getState(currentIndex);
            function getState(){
              // debugger
              me.element=me.notOpenStockCode[currentIndex];
              const item =me.notOpenStock[currentIndex];
            //  console.log("请求之前",currentIndex);
              me.$store.dispatch('jjrl/querySelection',{
                stockCode:me.element,
                item:item,
                type:'not'
              }).then(res => {
          //  console.log(me.notOpenStock);
            let obj=me.notOpenStock[currentIndex]
               me.notOpenStock.splice(currentIndex,1,{ ...obj ,zx:me.isSelfSelection })
           //    me.notOpenStock[currentIndex]['zx']=me.isSelfSelection; 
              if(currentIndex<me.notOpenStockCode.length-1){
                currentIndex++;
                me.element=me.notOpenStockCode[currentIndex]
                getState(currentIndex);
              }
            
          }) 
            } 
      })

    },
    //  初始化复牌
    initFp(date){
        this.index=0
        this.$store.dispatch('jjrl/getStock',date).then( res => {
        this.stopdate=this.getStock[0].STP_DT
        this.setDate(this.stopdate)  // 获取停牌日期
     //   console.log(this.stopdate +"11111111") 
        this.stockCode=this.getStock[0].STOCKCODE // 获取停牌股票
        this.getStockCode=[]
        this.getStock.forEach( ele => {
        this.getStockCode.push(ele.STOCKCODE) // 股票代码数组
        })
        let item= this.getStockCode.join(',') // q接口支持多个查询
        this.$store.dispatch('jjrl/setStock',item)
        /* 自选股部分 */
        const me=this;
        me.index=0
        getState();
        function getState(){
            me.element=me.getStockCode[me.index];
            var item= me.setStock[me.index]
            me.$store.dispatch('jjrl/querySelection',{
                stockCode:me.element,
                item:item,
                type:'fp'
            }).then(res => {
                me.setStock[me.index].push(me.isSelfSelection);
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
            //   debugger
          this.$store.dispatch('jjrl/setStockLine',date).then( res => {
        // debugger
          let code=this.storeData.stockCode
          this.zszd=this.setStockLine[code].return_pct.toFixed(2)
          this.stopdate=this.getStock[0].STP_DT
          this.setDate(this.stopdate)  // 获取停牌日期
          this.$store.dispatch('jjrl/storeData',{
                stopdate:this.stopdate,
                stockCode:this.stockCode,
                public:this.public,
                zszd:this.zszd 
               }).then( res => {
            })
          }) 
      })  

    },

    // 初始化 会议日历
  initHy(date){
            this.setHyName={}
            this.getAllCode=[]
            this.arrCode=[]
            this.hyIndex = null
        //  console.log(this.setHyList)
    // debugger
            this.$store.dispatch('jjrl/setHyList',this.hyDate(this.saveDate.chooseDate)).then( res => {
            const hasChooseDate = this.setHyList.data.filter((ele,i) => {
              return this.getDayOfDate(this.saveDate.chooseDate)<=this.getDayOfDate(ele.date)
            }) 
            for(let i = 0; i<this.setHyList.data.length; i++){
              if(this.getDayOfDate(this.saveDate.chooseDate)<=this.getDayOfDate(this.setHyList.data[i].date)){
                  this.hyIndex = i
                  break;
              }else{
                this.hyIndex =this.setHyList.data.length-1
              }
            } 
        //  console.log('this.hyIndex================'+this.hyIndex)
            this.$store.dispatch('jjrl/saveHyIndex',this.hyIndex)
        //  console.log(hasChooseDate.length)
            if(hasChooseDate.length !==0){
              this.$store.dispatch('jjrl/saveHyUrl',hasChooseDate[0].events[0].link)
          //    console.log(hasChooseDate[0].date+"时间1")
            }else{
              this.$store.dispatch('jjrl/saveHyUrl',this.setHyList.data[this.setHyList.data.length-1].events[0].link)
            //  console.log(this.setHyList.data[this.setHyList.data.length-1].date+"时间2")
            }
            this.setHyList.data.forEach((ele,i) => {
                ele.events.forEach( (res,index) => {
                    this.arrCode.push(res.concepts[0])
                })   
            }) 
            // 将相关股票代码提取出来放进数组中
         // console.log(this.setHyList)
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
  },
  
  initNewsBroadcast(date){
   debugger
     this.$store.dispatch('jjrl/getNewsBroadcast',this.newsDate(date))
  },
  initHotStock(){
          this.arr=[]
          this.$store.dispatch('jjrl/todayHotStock').then( res => {
          this.todayHotStock.forEach( ele => {
              this.arr.push(ele.STOCKCODE) 
          })
          this.arr=this.arr.join(',')
          this.$store.dispatch('jjrl/todayHotStockPrice',this.arr)
       //   console.log(123)
        })
  }
  },
  watch: {
    tradeDate: function() {
      this.$store.dispatch('jjrl/saveDate', {
        chooseDate: this.tradeDate
      }).then(() => {
        this.initConsole(this.saveDate.chooseDate)
          clearInterval(this.intervalid1)
        if(parseInt(this.curType)===2){
          this.initNotOpenStock(this.saveDate.chooseDate)
            clearInterval(this.intervalid1)
        }else if(parseInt(this.curType)===0){
          this.initFp(this.saveDate.chooseDate) 
            clearInterval(this.intervalid1)
        }else if(parseInt(this.curType)===1){  // 会议日历
      // debugger
        this.initHy(this.hyDate(this.saveDate.chooseDate))
           clearInterval(this.intervalid1)
        }else if(parseInt(this.curType)===3){
        this.initNewsBroadcast(this.saveDate.chooseDate)
          clearInterval(this.intervalid1)
       }else if(parseInt(this.curType)===4){
           clearInterval(this.intervalid1)
            this.initHotStock()
        this.intervalid1 =setInterval( () => {
            this.initHotStock()
         },5000)
       }
      })
    }
  },
  mounted() {
    this.initConsole(this.tradeDate)
    this.$store.dispatch('jjrl/saveDate',{ chooseDate:this.tradeDate })
    this.initFp(this.saveDate.chooseDate)

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
    overflow: auto;
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