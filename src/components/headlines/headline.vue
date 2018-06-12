<template>
<div class="headline">
  <div class="left">
    <headlineList @viewNews="viewNewsDetail"></headlineList>
  </div>
  <div class="right">
    <headlineNews :newsId="newsId"></headlineNews>
  </div>
</div>
</template>

<script>
import headlineList from 'components/headlines/headline-list'
import headlineNews from 'components/headlines/headline-news'
export default {
  data() {
    return {
      newsId: null
    }
  },
  components: {
    headlineList,
    headlineNews
  },
  methods: {
    viewNewsDetail(newsId) {
      this.newsId = newsId;
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