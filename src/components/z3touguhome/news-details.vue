<style lang="scss" scoped="">
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
* {
    box-sizing: border-box;
    font-family: '微软雅黑';
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
</style>
<template>
<div class="news-detail-wrap" :style="{height:wrapHeight-2+'px'}">
  <p class="news-detail-top"></p>
  <div class="news-detail-con" :style="{height:wrapHeight-2-25+'px'}">
    <p class="news-detail-title">{{formatData(newsTitle)?newsTitle:''}}</p>
    <div class="new-detail-txt">
      <span>{{formatData(makeDate)?timestampToTime(makeDate):''}}</span>
      <span>来源：{{formatData(source)?source:''}}</span>
    </div>
    <!--<div class="new-main pdlr" v-html="newsContxt"></div>-->
    <div class="new-main pdlr" v-html="formatContent(newsContxt)"></div>
    <p class="source-warn" v-if="formatData(source) && source.indexOf('金融界网站')>-1">来源为金融界股票频道的作品，均为版权作品，未经书面授权禁止任何媒体转载，否则视为侵权！</p>
    <!--  <p class="tl pdlr">关键词：{{keyword}}</p> -->
    <p class="tr duty-name pdlr">责任编辑：{{formatData(dutyname)?dutyname:''}}</p>
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
      //  keyword: '',
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
      const newsDetailData = this.$store.state.z3touguIndex.newsDetails
      return newsDetailData
    }
  },
  methods: {
    getNews: function() {
      if (this.newsId !== '') {
        console.log(this.newsId)
        this.$store.dispatch('z3touguIndex/getNewsDetails', {
            newsId: this.newsId
          })
          .then(() => {
            this.newsDetails = this.newsDetailData
            this.newsTitle = this.newsDetailData.title
            this.makeDate = this.newsDetailData.declareDate
            this.source = this.newsDetailData.srcName
            /* this.newsContxt = this.newsDetailData.context.replace(/href/g, 'aa').replace(/<P/g, '<P style=\'text-indent:25px;line-height: 25px;\' ')*/
            this.newsContxt = this.newsDetailData.content
            //  this.keyword = this.newsDetailData.keyword.replace(',', ' ')
            if (this.newsDetailData.author && this.newsDetailData.author !== '') {
              this.dutyname = this.newsDetailData.author
            } else {
              this.dutyname = 'Robot'
            }
            /*   $('.new-main').html(this.newsContxt) */
            /*  $('.new-main p').css({
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
              }) */
          })
      }
    },
    timestampToTime: function(timestamp) {
      const date = new Date(timestamp); // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
      const Y = date.getFullYear() + '-';
      const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      const D = date.getDate() + ' ';
      const h = date.getHours() + ':';
      const m = date.getMinutes() + ':';
      const s = date.getSeconds();
      return Y + M + D + h + m + s;
    },
    formatContent: function(content) {
      if (content === null) {
        return
      }
      content = content.split('\n')
      let con = ''
      content.forEach((p) => {
        con += '<p style="text-indent: 25px;line-height: 25px;color: #c9d0d7 !important;margin-bottom: 24px;">' + p + '</p>'
      })
      return con
    },
    formatData: function(value) {
      if (value) {
        return true
      } else {
        return false
      }
    }
  },
  mounted() {
    this.getNews()
  }
}
</script>
