<template>
<div class="headline-list">
  <ul>
    <li v-for="news in headlineList" class="news-item">
      <newsItem :model="news"></newsItem>
    </li>
  </ul>
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
      pageSize: 20
    }
  },
  computed: mapState({
    headlineList: state => state.headline.headlineList
  }),
  components: {
    newsItem
  },
  created() {
    this.$store.dispatch('headline/queryHeadline', {
      pageNo: this.pageNo,
      pageSize: this.pageSize
    })
  }
}
</script>

<style lang="scss" scoped>
.headline-list {
    .news-item {
        list-style: none;
    }
}
</style>
