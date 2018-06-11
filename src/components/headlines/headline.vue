<template>
<div class="">
  <div class="left">
    <headlineList @viewNews="viewNewsDetail">
      <headlineList>
  </div>
  <div class="right">
    <headlineNews :newsId="newsId">
      <headlineNews>
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
Error: Source sample is missing.
</style>