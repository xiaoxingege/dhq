<template>
<div class="ambush">
  <div class="tit">{{title}}</div>
  <ul>
    <li v-for="item in dataList">
      <div><span class="name">{{item.effName}}</span><span class="chg">{{item.chngPct}}</span><span class="time">{{occrDate}}</span></div>
      <div class="news">{{item.newsTitle}}</div>
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
      let list = [];
      if (this.type === 'stock') {
        list = this.$store.state.zInfoPublic.ambushedStocks;
      } else if (this.type === 'plate') {
        list = this.$store.state.zInfoPublic.ambushedPlates;
      }
      return list;
    }
  },
  methods: {

  },
  mounted() {
    if (this.type === 'stock') {
      this.$store.dispatch('zInfoPublic/retrieveAmbushedStocks');
    } else if (this.type === 'plate') {
      this.$store.dispatch('zInfoPublic/retrieveAmbushedPlates');
    }

  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';
.ambush {
    height: 100%;
    border: 1px solid #303539;
    color: $wordsColorBase;
    font-size: 12px;
}
.ambush .tit {
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #303539;
}
.ambush ul {
    padding: 5px 0;
    height: calc(100% - 34px);
    overflow: auto;
    li {
        overflow: hidden;
        height: 36px;
        line-height: 18px;
        margin: 5px 6px;
        a {
            color: $wordsColorBase;
        }
        .col {
            float: left;
            width: 35%;
        }
        .chg {
            width: 30%;
            text-align: center;
        }
        .name {
            cursor: pointer;
        }
        .name:hover {
            color: #EDB441;
        }
        .news {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: $wordsColorBase;
        }

    }
}
</style>