<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.news-detail-wrap,
.news-detail-wrap * {
    box-sizing: border-box;
    font-family: 'Microsoft YaHei';
    font-size: $fontSizeBase;
}
.news-detail-wrap {
    background-color: $bgConColor;
    overflow: auto;
    min-height: 100%;
    color: $wordsColorBase;
}
.news-detail-title {
    text-align: center;
    padding-bottom: 23px;
    font-weight: 700;
    font-size: 16px;
}
.new-detail-txt {
    padding-bottom: 20px;
    text-align: center;
    color: $grayWordsColor;
}
.source-warn {
    text-align: center;
    margin-bottom: 10px;
}
.new-main {
    padding-bottom: 40px;
}
.new-main p a {
    display: inline-block;
    width: 100%;
    height: 100%;
    text-align: center;
    color: red;
}
.duty-name {
    padding-bottom: 80px;
}
iframe {
    height: 20px !important;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left-width: 0;
    width: 605px;
}
.pdlr {
    padding-left: 15px;
    padding-right: 15px;
}
.news-detail-top {
    height: 25px;
    background-color: $lineAndTitleColor;
}
.news-detail-con {
    overflow: auto;
    padding-top: 20px;
}
.new-main p {
    color: red;
}
</style>
<template>
<div class="news-detail-wrap" :style="{height:wrapHeight-2+'px'}">
  <p class="news-detail-top"></p>
  <div class="news-detail-con" :style="{height:wrapHeight-2-25+'px'}">
    <p class="news-detail-title">{{newsTitle}}</p>
    <div class="new-detail-txt">
      <span>{{makeDate}}</span>
      <span>来源：{{source}}</span>
    </div>
    <!--<div class="new-main pdlr" v-html="newsContxt"></div>-->
    <div class="new-main pdlr"></div>
    <p class="source-warn" v-if="source.indexOf('金融界网站')>-1">来源为金融界股票频道的作品，均为版权作品，未经书面授权禁止任何媒体转载，否则视为侵权！</p>
    <p class="tl pdlr">关键词：{{keyword}}</p>
    <p class="tr duty-name pdlr">责任编辑：{{dutyname}}</p>
  </div>
</div>
</template>
<script type="text/javascript">
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
export default {
  props: ['newsId'],
  data() {
    return {
      newsDetails: null,
      newsTitle: '',
      makeDate: '',
      source: '',
      newsContxt: '',
      keyword: '',
      dutyname: '',
      wrapHeight: window.innerHeight
    }
  },
  watch: {
    newsId() {
      this.getNews()
    }
  },
  computed: {
    newsDetailData: function() {
      const newsDetailData = [].concat(this.$store.state.dhqIndex.newsDetails)
      return newsDetailData[0]
    }
  },
  methods: {
    getNews: function() {
      if (this.newsId !== '') {
        console.log(this.newsId)
        this.$store.dispatch('dhqIndex/getNewsDetails', {
            newsId: this.newsId
          })
          .then(() => {
            this.newsDetails = this.newsDetailData
            this.newsTitle = this.newsDetailData.title
            this.makeDate = this.newsDetailData.makedate
            this.source = this.newsDetailData.source
            /* this.newsContxt = this.newsDetailData.context.replace(/href/g, 'aa').replace(/<P/g, '<P style=\'text-indent:25px;line-height: 25px;\' ')*/
            this.newsContxt = this.newsDetailData.context
            this.keyword = this.newsDetailData.keyword.replace(',', ' ')
            if (this.newsDetailData.dutyname && this.newsDetailData.dutyname !== '') {
              this.dutyname = this.newsDetailData.dutyname
            } else {
              this.dutyname = 'Robot'
            }
            $('.new-main').html(this.newsContxt)
            $('.new-main p').css({
              'text-indent': '25px',
              'line-height': '25px',
              'color': '#c9d0d7 !important',
              'margin-bottom': '24px'
            })
            $('.new-main font').attr('color', '#c9d0d7')
            $('.new-main a').removeAttr('href')
            $('.new-main img').css({
              'max-width': '500px',
              'margin': '10px auto',
              'display': 'block'
            })
          })
      }
    }
  },
  mounted() {
    this.getNews()
  }
}
</script>
