<template>
<div class="newsinfo">
  <p class="desc" v-if='(statusType==11 || statusType==12 || statusType==13 || statusType==20)'>消息事件列表</p>
  <p class="desc" v-else>{{newsInfo.title||''}}</p>
  <div class="list">
    <div class="latest-news">
      <div class="tit">最新消息</div>
      <div class="in-content-no" v-if='statusType==11 || statusType==12 || statusType==13 || statusType==20'>
        <div class="no-data"></div>
        <div class="no-data-txt">{{status[statusType]}}</div>
      </div>
      <div class="list_con" v-else>
        <ul v-if="newsInfo.latestNews && newsInfo.latestNews.length>0">
          <li class="news" v-for='news in newsInfo.latestNews'>
            <div>
              <span :class="news.postiveIndex===1?'mark bad':(news.postiveIndex===2?'mark good':'mark')" v-if="news.postiveIndex!==null">{{news.postiveIndex === 1 ? '利空' : (news.postiveIndex===2 ? '利好' : '中性')}}</span>
              <span class="assess" v-if="news.postiveIndex===null"></span>
              <router-link :to="{name:'detailPages', params:{detailType:'news', id:news.newsId}}" class="title" target="_blank">{{news.title}}</router-link><span class="text_sum" @click="toggleSumary('latest', news.newsId)">摘要</span><span class="time" v-z3-time="{ time:news.declareDate+'', type: '1' }">{{news.declareDate}}</span>
            </div>
            <div class="sumary" v-if="newsType ==='latest' && news.newsId === newsId">
              <p>{{news.summary && news.summary.slice(0,140) ||'--'}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="important-events">
      <div class="tit">重要事件</div>
      <div class="in-content-no" v-if='statusType==11 || statusType==12 || statusType==13 || statusType==20'>
        <div class="no-data"></div>
        <div class="no-data-txt">{{status[statusType]}}</div>
      </div>
      <div class="list_con" v-else>
        <ul v-if="newsInfo.importNews && newsInfo.importNews.length>0">
          <li class="news" v-for='news in newsInfo.importNews'>
            <div>
              <span :class="news.postiveIndex===1?'mark bad':(news.postiveIndex===2?'mark good':'mark')" v-if="news.postiveIndex!==null">{{news.postiveIndex === 1 ? '利空' : (news.postiveIndex===2 ? '利好' : '中性')}}</span>
              <span class="fl assess" v-if="news.postiveIndex===null"></span>
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
  props: ['innerCode', 'newsInfo', 'statusType'],
  data() {
    return {
      newsId: '',
      newsType: '', // 'latest'|'important'
      status: {
        10: '正常上市',
        11: '股票停牌暂不评价',
        12: '退市调整期不予评价',
        13: '新股上市暂不评价',
        20: '退市调整期不予评价'
      }
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
            height: 640px;
        }
        ul {
            li {
                padding: 0 10px;
                font-size: 14px;
                .mark {
                    /* padding: 2px 4px; */
                    width: 36px;
                    height: 22px;
                    display: inline-block;
                    line-height: 22px;
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
                .sumary p {
                    font-size: 12px;
                    font-family: "Microsoft YaHei";
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
.assess {
    width: 36px;
    height: 22px;
    margin-right: 4px;
    vertical-align: middle;
    display: inline-block;
}
.in-content-no {
    text-align: center;
    height: 438px;
    position: relative;
}
.no-data {
    width: 115px;
    height: 81px;
    display: inline-block;
    margin-top: 100px;
    background: url("../../assets/images/z3img/no-data2.png") no-repeat;
}
.no-data-txt {
    text-align: center;
    color: #808ba1;
    font-size: 18px;
    padding-top: 12px;
}
</style>
