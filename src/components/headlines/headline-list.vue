<template>
<div>
  <ul>
    <li>
      <newsItem :model="news" v-for="news in newsList"></newsItem>
    </li>
  </ul>
</div>
</template>

<script>
import 'newsItem'
from 'news-item'
export default {
  data() {
    return {}
  },
  components: {
    newsItem
  }
}
</script>

<style>

</style>