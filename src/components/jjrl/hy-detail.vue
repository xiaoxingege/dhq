<template>
<div class="hyCon">
     <span class="hyDate" >{{getDate(model.date)}}</span>
     <div class="listCon">
    <div  :class="{item:true,active:!!active}" v-for='ele in model.events'>
        <div class="hyTitle" >
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
            <div>
                <span>相关股票：</span>
                <ul>
                    <li>    </li>
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
export default {
    props: ['model', 'active'],
    data(){
        return {
            curTitle:'',
            starBox:'',
            stockBox:''
        }
    },
    computed: { 
    ...mapState({
        storeData:state => state.jjrl.dateAndCode,
        setHyList:state => state.jjrl.setHyList
    })
   

    },
    methods:{
     getDate(date){
            var d,M,D
            d = new Date(date)
            M = d.getMonth()+1
            D = d.getDate()
            if( M < 10 ) { M = '0' + M; }
            if( D <= 10 ) { D = '0' + D; }
        return  M + '-' + D 
    },
    showTitle(title){
      let count;
      count =title.substring(0,18)
      if(title.length>18){
           return count+'...'
      }else{
          return count
      }
      
     
    }
    },
    created () {
    
     /*    this.setHyList.forEach( ele => {
            arr1=ele.events
            
        }) */
       
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.hyCon{
    display:flex;
    box-sizing:border-box;
    padding-left:10px;
    padding-top:10px;
}
.listCon{
   width: 87%;
   box-sizing: border-box;
   padding-right:49px;
   font-size:12px;

   
}
.star li{
    float: left;
}
.hyTitle{
    margin-left:20px;
     margin-bottom: 34px;
    
}
.hyTitle div {
    margin-bottom: 13px;
}
.lightStar{
    background: url(' http://i0.jrjimg.cn/Astock/xin1.png') no-repeat;
    width: 15px;
    height: 15px;
    
}
.greyStar{
    background: url(' http://i0.jrjimg.cn/Astock/xin2.png') no-repeat;
    width: 15px;
    height: 15px;
}
.hyTitle ul {
    display: inline-block;
    vertical-align: bottom;
}

.active{
     background-color: $hoverBgColor;
}

</style>
