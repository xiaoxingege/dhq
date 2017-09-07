<style lang="scss" scoped="">
    .finance-news{}
    .finance-news-top{height:12%;border-bottom: 1px solid #ddd;}
    .finance-news-top p{display: inline-block;width: 50%;}
    .more-news{color:#4c8cca;cursor: pointer;}
    .finance-news-title{font-weight: bold;color:#666;}
    .finance-news-list{height:88%;}
    .finance-news-list li{height:16.66%;padding-top:8px;}
</style>
<template>
    <div class="finance-news">
        <div class="finance-news-top clearfix">
            <p class="fl tl finance-news-title">{{newsName}}</p>
            <p class="fr tr more-news"><router-link :to="{name:'newslist',params:{newsType:newsType}}">更多</router-link></p>
        </div>
        <ul class="finance-news-list">
            <li v-for="item of newsList" class="c_txt tl clearfix">
                <span class="fl">•{{item.title}}</span>
                <span class="fr">{{item.makedate.substring(11)}}</span>
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    export default {
      props: ['newsList', 'newsName', 'newsType'],
      data () {
        return {

        }
      },
      computed: {

      },
      methods: {

      },
      mounted () {
    
      }
    }
</script>
