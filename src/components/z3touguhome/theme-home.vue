<style lang="scss" scoped="">
    .theme-home{padding: 10px;background: #fff;float: right;display: inline-block;}
    .theme-home-top{height:12%;border-bottom: 1px solid #ddd;}
    .theme-home-top p{display: inline-block;width: 50%;}
    .more-theme{color:#4c8cca;cursor: pointer;}
    .theme-home-title{font-weight: bold;color:#666;}
    .theme-title{width: 31%;color:#4c8cca;font-weight: bold;}
    .theme-con-title{height:15%;padding-top:5px;}
    .theme-con-title li{height:100%;float: left;display: inline-block;}
    .theme-con-title li span:nth-child(1){padding-right:5px;}
    .updown-rate,.up-stock,.down-stock{width: 23%;}
    .event:hover{color: #2388da;}
    .event{}
</style>
<template>
    <div class="theme-home" :style="{width:themeWidth,height:themeHeight}">
        <div class="theme-home-top clearfix">
            <p class="fl tl theme-home-title">今日热点主题</p>
            <p class="fr tr more-theme"><router-link :to="{name:'themeindex'}">全部</router-link></p>
        </div>
        <ul class="theme-con-title clearfix">
            <li class="theme-title tl">{{topicName}}</li>
            <li class="updown-rate">
                <span>今日涨跌</span>
                <span :class="">+5.46%</span>
            </li>
            <li class="up-stock tr">
                <span>上涨股票</span>
                <span class="c_up">21</span>
            </li>
            <li class="down-stock tr">
                <span>下跌股票</span>
                <span class="c_down">5</span>
            </li>
        </ul>
        <div style="text-align: justify;">
            <strong>最新事件：</strong>
            <span class="txt-con">
              <router-link :to="{name:'detailPages',params:{id : newsId, detailType:'news'}}" class="new-text"><span class="event c_txt tl">{{drivenEvent}}</span></router-link>
                （<span class="c_txt">{{format(newsDeclareDate)}}</span>   <span class="c_txt">{{srcName}}</span>）
            </span>
        </div>
    </div>
</template>
<script type="text/javascript">
    import { mapState } from 'vuex'
    import { formatDate } from 'utils/date'
    export default {
      props: ['themeHeight', 'themeWidth'],
      data () {
        return {
          newsId: '',
          drivenEvent: '',
          newsDeclareDate: '',
          srcName: '',
          topicName: ''
        }
      },
      computed: mapState({
        topicData: state => state.topic.hotlist[0]
      }),
      methods: {
        format (date) {
          return formatDate(date)
        },
        initTopic () {
          this.$store.dispatch('topic/queryHot').then(() => {
            this.newsId = this.topicData.newsId
            this.drivenEvent = this.topicData.drivenEvent
            this.newsDeclareDate = this.topicData.newsDeclareDate
            this.srcName = this.topicData.srcName
            this.topicName = this.topicData.topicName
          })
        }
      },
      mounted () {
        this.initTopic()
      }
    }
</script>
