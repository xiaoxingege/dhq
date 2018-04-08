<template>
<div class="ambush">
  <div class="tit">{{title}}</div>
  <ul>
    <li v-for="item in dataList">
      <div><span></span><span></span><span></span></div>
      <div></div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['title', 'type'],
  data() {
    return {

    }
  },
  computed: {
    dataList() {
      return []
    }
  },
  methods: {

  },
  mounted() {
    this.$store.dispatch('');
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';
.ambush {
    height: 100%;
    border: 1px solid #303539;
}
.hot .tit {
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: $wordsColorBase;
    font-size: 12px;
    background: #303539;
}
</style>