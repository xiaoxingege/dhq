<template>
<div class="headline">
  <div class="left">
    <headlineList @viewNewsDetail="viewNewsDetail"></headlineList>
  </div>
  <div class="right" ref="newsdetail">
    <headlineNews :iiid="newsId" :newsUrl="newsUrl"></headlineNews>
  </div>
</div>
</template>

<script>
import headlineList from 'components/headlines/headline-list'
import headlineNews from 'components/dhq-news-detail'
export default {
  data() {
    return {
      newsId: '',
      newsUrl: '',
      month: ''
    }
  },
  components: {
    headlineList,
    headlineNews
  },
  methods: {
    viewNewsDetail(news) {
      this.newsId = news.iiid;
      this.newsUrl = news.infourl;
    }
  },
  watch: {
    newsUrl() {
      this.$refs.newsdetail.scrollTop = 0;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style.scss";
.headline {
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    font-size: 14px;
    color: $wordsColorBase;
    .left {
        width: 50%;
        min-height: 100%;
        height: 100%;
        overflow: auto;
        float: left;
    }
    .right {
        width: 50%;
        min-height: 100%;
        height: 100%;
        overflow: auto;
        float: left;
    }
}
</style>