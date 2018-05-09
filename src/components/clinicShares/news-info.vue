<template>
<div class="newsinfo">
  <p class="desc">{{newsInfo.title||''}}</p>
  <div class="list">
    <div class="latest-news">
      <div class="tit">最新消息[短线消息]</div>
      <div class="list_con">
        <ul v-if="newsInfo.latestNews && newsInfo.latestNews.length>0">
          <li class="news" v-for='news in newsInfo.latestNews'>
            <div>
              <span :class="news.postiveIndex===1?'mark bad':(news.postiveIndex===2?'mark good':'mark')">{{news.postiveIndex === 1 ? '利空' : (news.postiveIndex===2 ? '利好' : '中性')}}</span>
              <router-link :to="{name:'detailPages', params:{detailType:'news', id:news.newsId}}" class="title" target="_blank">{{news.title}}</router-link><span class="text_sum" @click="toggleSumary('latest', news.newsId)">摘要</span><span class="time" v-z3-time="{ time:news.declareDate+'', type: '1' }">{{news.declareDate}}</span>
            </div>
            <div class="sumary" v-if="newsType ==='latest' && news.newsId === newsId">
              <p>{{news.sumary||'--'}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="important-events">
      <div class="tit">重要事件[中线影响]</div>
      <div class="list_con">
        <ul v-if="newsInfo.importNews && newsInfo.importNews.length>0">
          <li class="news" v-for='news in newsInfo.importNews'>
            <div>
              <span :class="news.postiveIndex===1?'mark bad':(news.postiveIndex===2?'mark good':'mark')">{{news.postiveIndex === 1 ? '利空' : (news.postiveIndex===2 ? '利好' : '中性')}}</span>
              <router-link :to="{name:'detailPages', params:{detailType:'news', id:news.newsId}}" class="title" target="_blank">{{news.title}}</router-link><span class="text_sum" @click="toggleSumary('important',news.newsId)">摘要</span><span class="time" v-z3-time="{ time:news.declareDate+'', type: '1' }">{{news.declareDate}}</span>
            </div>
            <div class="sumary" v-if="newsType === 'important' && news.newsId === newsId">
              <p>{{news.summary && news.summary.slice(0,140) || '--'}}</p>
            </div>
          </li>
        </ul>
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
  props: ['innerCode', 'newsInfo'],
  data() {
    return {
      newsId: '',
      newsType: '' // 'latest'|'important'
    }
  },
  computed: mapState({

  }),
  methods: {
    toggleSumary(newsType, newsId) {
      if (newsId === this.newsId) {
        this.newsId = '';
        this.newsType = '';
      } else {
        this.newsId = newsId;
        this.newsType = newsType;
      }
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.newsinfo {
    /*  height: 250px;
    height：702px*/
    overflow: hidden;
    line-height: 30px;
    color: $wordsColorBase;
    .list {
        background: $bgDeepColor;
    }
    .desc {
        font-size: 14px;
        border-bottom: 1px solid $borderColor;
        padding: 0 10px;
    }
    .list {
        /*  height: 220px; */
        .list_con {
            /*   height: 190px; */
            overflow: auto;
        }
        ul {
            li {
                padding: 0 10px;
                font-size: 14px;
                .mark {
                    padding: 2px 4px;
                    text-align: center;
                    // background:$flatColor;
                    background: #505A66;
                    margin-right: 4px;
                    vertical-align: middle;
                }
                .mark.good {
                    background: $upColor;
                }
                .mark.bad {
                    background: $downColor;
                }
                .title {
                    width: 60%;
                    display: inline-block;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    vertical-align: middle;
                    color: $wordsColorBase;
                    font-size: 14px;
                }
                .time {
                    float: right;
                    text-align: right;
                    margin-right: 60px;
                }
                .text_sum {
                    float: right;
                    cursor: pointer;
                }
                .sumary {
                    background: #2F343A;
                    color: #6F7D97;
                    padding: 10px;
                    border-radius: 4px;
                    line-height: 20px;
                    position: relative;
                }
                .sumary p{
                  font-size: 12px;
                  font-family: '微软雅黑';
                }
                .sumary:before {
                    content: '';
                    display: block;
                    position: absolute;
                    top: -10px;
                    right: 8px;
                    border: 5px;
                    border-style: dashed dashed solid dashed;
                    border-color: transparent transparent #2F343A transparent;
                }
            }
        }
    }
    .tit {
        font-size: 14px;
        margin: 0 10px;
        border-bottom: 1px solid $borderColor;
    }
    .latest-news {
        width: calc(50% - 3px);
        float: left;
        background: $bgConColor;
    }
    .important-events {
        width: calc(50% - 3px);
        float: right;
        background: $bgConColor;
    }
}
</style>
