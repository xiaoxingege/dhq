<template>
    <div class="newsAll">
        <div class="title">
            <i></i>要点汇总
        </div>
        <div class="newsCon clearfix " v-for="(item,index) in getNewsBroadcast">
            <h6>{{resetTitle(item.TITLE)}}</h6>
            <!-- <p class="partCon show">{{item.TXT_CONTENT.slice(0,199)+'...'}}</p> -->
            <p class="allCon">{{item.TXT_CONTENT}}</p> 
            <div class="btn" v-if="item.TXT_CONTENT.length>=200">
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
                $(this).removeClass('show').addClass('hide').siblings().addClass('show').removeClass('hide').parent().siblings('.allCon').css({
                    'height':'auto',
                    '-webkit-line-clamp': 'inherit'
                })
              })
            $('.btn .part').click(function () {
                $(this).removeClass('show').addClass('hide').siblings().addClass('show').removeClass('hide').parent().siblings('.allCon').css({
                    'height':'66px',
                     '-webkit-line-clamp': '3'
                })
              })
   
        },
        resetTitle(title){
           return title.split('A')[1]
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
.newsCon .allCon{
    text-indent: 2em;
    color: $grayWordsColor;
    line-height: 22px;
    text-indent: 2em;
    color: #808ba1;
    line-height: 22px;
    height: 66px;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;//文本溢出显示省略号
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
    height: 14px !important;
    
}
.down{
    background: url(http://i0.jrjimg.cn/Astock/down.png) no-repeat center;
    background-size: 100%;
    
}
.hide{
    display:none;
    margin-top: 10px;
}
.show{
    margin-top: 10px;
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