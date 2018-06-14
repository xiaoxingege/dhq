<template>
<div class="dhq-news-detail">
  <div class="header">
    <h3 class="title">{{news.title}}</h3>
    <div class="sub"><span>{{news.makedate.substring(0,10)}}</span><span>来源：{{news.paperMediaSource}}</span></div>
  </div>
  <div class="con" v-html="content" ref="newscontent"></div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
// import $ from 'jquery'
export default {
  props: ['iiid', 'newsUrl'],
  data() {
    return {

    }
  },
  methods: {
    init() {
      if (this.iiid && this.newsUrl) {
        this.$store.dispatch('dhqNews/queryNewsDetail', {
          iiid: this.iiid,
          newsUrl: this.newsUrl
        }).then(() => {
          $('canvas', this.$refs.newscontent).parent().next().remove();
          $('canvas', this.$refs.newscontent).remove();
        });
      }
    }
  },
  computed: {
    ...mapState({
      news: state => state.dhqNews.news
    }),
    content: function() {
      // 去掉a标签
      return this.news && this.news.context && this.news.context.replace(/(<\/?a.*?>)/g, '');
    }
  },
  watch: {
    newsUrl: function() {
      this.init();
    }
  }
}
</script>

<style lang="scss" scoped>
.dhq-news-detail {
    padding: 20px 30px;
    .header {
        text-align: center;
        line-height: 36px;
        .sub {
            color: #808ba1;
            font-size: 13px;
            span {
                margin: 0 20px;
            }
        }
    }
    .con {
        font-size: 14px;
        line-height: 21px;
    }
}
</style>
<style lang="scss">
.dhq-news-detail {
    .con {
        strong {
            font-weight: bold;
            line-height: 28px;
        }
        p {
            text-indent: 26px;
        }
        img {
            margin: 4px 0;
        }
        a {
            font-size: 14px;
            color: #808ba1;
        }
    }
}
</style>