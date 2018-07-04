<template>
    <div class="newsAll">
        <div class="title">
            <i></i>要点汇总
        </div>
        <div class="newsCon clearfix " v-for="(item,index) in getNewsBroadcast">
            <h6>{{item.TITLE}}</h6>
            <p class="partCon show">{{item.TXT_CONTENT.slice(0,199)+'...'}}</p>
            <p class="allCon hide">{{item.TXT_CONTENT}}</p> 
            <div class="btn">
                <span class='show all' @click="toggle(index)">点击查看全文<i class='down'></i></span>
                <span class="hide part" >点击收起 <i  class='up'></i></span>
            </div>
        </div>
    </div>

    
</template>
<script>
import $ from 'jquery'
import { mapState } from 'vuex'
export default{
    data() {
        return {
    }
  },
    computed: { 
    ...mapState({
        getNewsBroadcast:state => state.jjrl.getNewsBroadcast
        })
    },
    methods:{
        toggle(index){
            $('.btn .all').click(function () {
                $(this).removeClass('show').addClass('hide').siblings().addClass('show').removeClass('hide').parent().siblings('.partCon').removeClass('show').addClass('hide').siblings('.allCon').removeClass('hide').addClass('show')
              })
            $('.btn .part').click(function () {
                $(this).removeClass('show').addClass('hide').siblings().addClass('show').removeClass('hide').parent().siblings('.partCon').removeClass('hide').addClass('show').siblings('.allCon').removeClass('show').addClass('hide')
              })
   
        }
    },
    mounted() {
   //     this.$store.dispatch('jjrl/getNewsBroadcast','2018-06-22')
        
    }
}

</script>
<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";

.newsAll{
    padding:26px 19.1%  26px  7.8%;
    height: auto;
    overflow: auto;
   
}
.title{
    font-size: 16px;
    font-weight: 700;

    color:#Fff;
}
.title i{
    display: inline-block;
    width: 6px;
    height: 22px;
    border-radius: 2px;
    background-color: $bgNavColor;
    vertical-align: middle;
    margin-right: 5px;
}
.newsCon h6{
    color: $wordsColorBase;
    font-size: 14px;
    line-height: 28px;
    font-weight: 400;
    
}

.newsCon{
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 5px;
    border-bottom: 1px solid $bgNavColor;
}
.newsCon p{
    text-indent: 2em;
    color: $grayWordsColor;
    line-height: 22px;
}
.btn{
    float: right;
    color: $blueWordsColor;
    cursor: pointer;
}

.btn span i{
    vertical-align: top;
    width: 20px;
    height: 20px;
    display: inline-block;
    
}
.up{
    background: url(http://i0.jrjimg.cn/Astock/up.png) no-repeat center;
    background-size: 100%;
    
}
.down{
    background: url(http://i0.jrjimg.cn/Astock/down.png) no-repeat center;
    background-size: 100%;
    
}
.hide{
    display:none;
}
.show{
    display: block
}
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
</style>