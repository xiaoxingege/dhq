<template>
<div class="ambush">
  <div class="tit">{{title}}</div>
  <ul>

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