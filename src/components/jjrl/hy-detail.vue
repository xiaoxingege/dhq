<template>
<div class="hyCon" v-if="model">
     <div class="listCon">
        <div  v-for='(ele,index) in model.events' @click="chooseHy(ele,index)">
        <div class="hyTitle" :class="isSelected&&(cur===index)?'cur':''">
            <div :title='curTitle'>{{showTitle(ele.title)}}</div>
            <div>
                <span>关注程度：</span>
                <ul class="star">
                    <li :class="ele.level>0?'lightStar':'greyStar'"></li>
                    <li :class="ele.level>1?'lightStar':'greyStar'"></li>
                    <li :class="ele.level>2?'lightStar':'greyStar'"></li>
                    <li :class="ele.level>3?'lightStar':'greyStar'"></li>
                    <li :class="ele.level>4?'lightStar':'greyStar'"></li>
                    
                </ul>
            </div>
            <div class="relateStock" v-if="ele.concepts[0]&&JSON.stringify(setHyName)!=='{}'">
                <span>相关股票:</span>
                <ul v-if="ele.concepts[0].stocks && setHyName">
                   <li v-for="item in ele.concepts[0].stocks.split(',')" @click='jumpDetail(item,index)'> {{ setHyName[item][2] }} </li>  
                </ul>   
              
               
            </div>
        </div>
        </div>
    </div>
</div>
</template>
<script>
import {
  mapState
} from 'vuex'
import native from '../../utils/nativeApi'
import util from '../../dhq/util'
export default {
    props: ['model', 'active','isSelected'],
    data(){
        return {
            cur:0,
            curTitle:'',
            starBox:'',
            stockBox:'',
            para: {
                    stockCode: ''
                }
        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode,
        setHyList:state => state.jjrl.setHyList,
        stocks:state => state.jjrl.stockList,
        setHyName:state => state.jjrl.setHyName,
        saveHyUrl:state => state.jjrl.saveHyUrl,
        saveHyIndex: state => state.jjrl.saveHyIndex
    })


  },
  methods: {
    getDate(date) {
      var d, M, D
      d = new Date(date)
      M = d.getMonth() + 1
      D = d.getDate()
      if (M < 10) {
        M = '0' + M;
      }
      if (D <= 10) {
        D = '0' + D;
      }
      return M + '-' + D
    },
    methods:{
     getDate(date){
            var d,M,D
            d = new Date(date)
            M = d.getMonth()+1
            D = d.getDate()
            if( M < 10 ) { M = '0' + M; }
            if( D < 10 ) { D = '0' + D; }
        return  M + '-' + D 
    },
      jumpDetail(item) {
         native.openStock({
         stockCode: util.formatterInnercode(item)
      });
    },
    getStockName(code){
        return this.setHyName[code]?this.setHyName[code][2]:code;
    },

    showTitle(title){
      let count;
      count = title.substring(0, 18)
      if (title.length > 18) {
        return count + '...'
      } else {
        return count
      }
    },
    chooseHy(ele,index){
   //    console.log(index)
        this.cur =index
        this.$store.dispatch('jjrl/saveHyUrl',ele.link).then( res => {
            // console.log(this.saveHyUrl)
        })
         this.$emit('hyCalenderDetail',this.setHyList)
    }
    },
    mounted() {
        
    }
  }
   
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.cur {
     background-color: $hoverBgColor;
}
.hyCon{
    box-sizing:border-box;
   
}
.listCon{
   width: 100%;
   box-sizing: border-box;
   font-size:12px;

}
.star li {
    float: left;
    margin-right: 8px;
}
.hyTitle{
    padding: 10px 10px 10px 70px; 
    
    
    
}
.hyTitle div {
    margin-bottom: 13px;
}
.lightStar {
    background: url(' http://i0.jrjimg.cn/Astock/xin1.png') no-repeat;
    width: 15px;
    height: 15px;

}
.greyStar {
    background: url(' http://i0.jrjimg.cn/Astock/xin2.png') no-repeat;
    width: 15px;
    height: 15px;
}
.hyTitle ul {
    display: inline-block;
    vertical-align: bottom;
}

<<<<<<< Updated upstream
=======

.relateStock{
    display: flex;
}
.relateStock ul{
    display: inline-block;
}
.relateStock ul li {
    float: left;
     margin-left: 15px;
    color: $blueWordsColor;
    cursor: pointer;
}
>>>>>>> Stashed changes

.relateStock{
    display: flex;
}
.relateStock ul{
    display: inline-block;
}
.relateStock ul li {
    float: left;
     margin-left: 15px;
    color: $blueWordsColor;
    cursor: pointer;
}
</style>
