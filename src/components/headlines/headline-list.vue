<template>
<div class="headline-list" @scroll="loadMore">
  <ul>
    <li v-for="news in headlineList" class="news-item" @click="viewDetail(news)">
      <newsItem :model="news" :active="news.iiid === activeNews.iiid"></newsItem>
    </li>
  </ul>
  <div class="loading" v-if="onloading">
  </div>
  <div class="no-more" v-if="">已加载所有新闻</div>
</div>
</template>

<script>
import newsItem from 'components/headlines/news-item'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 20,
      activeNews: {},
      onloading: false,
      noMoreData: false
    }
  },
  computed: {
    ...mapState({
      headlineList: state => state.headline.headlineList
    })
  },
  components: {
    newsItem
  },
  methods: {
    viewDetail(news) {
      this.activeNews = news;
      this.$emit('viewNewsDetail', this.activeNews);
    },
    loadData() {
      this.$store.dispatch('headline/queryHeadline', {
        pageNo: this.pageNo,
        pageSize: this.pageSize
      }).then(() => {
        this.onloading = false;
      })
    },
    loadMore() {
      if (this.onloading) {
        return
      }
      const scrollTop = this.$el.scrollTop;
      const windowH = window.document.body.clientHeight;
      if (scrollTop + windowH >= this.$el.firstElementChild.offsetHeight) {
        this.onloading = true;
        this.pageNo++;
        this.loadData();
      }
    }
  },
  created() {
    this.$store.dispatch('headline/queryHeadline', {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    }).then(() => {
      this.activeNews = this.headlineList.length ? this.headlineList[0] : {}
      this.$emit('viewNewsDetail', this.activeNews);
    })
  }
}
</script>

<style lang="scss" scoped>
.headline-list {
    height: 100%;
    overflow: auto;
    .news-item {
        list-style: none;
    }
}
</style>
