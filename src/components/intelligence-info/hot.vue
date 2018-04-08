<template>
<div class="hot">
  <div class="tit">{{title}}</div>
  <ul v-if="type ==='stock'">
    <li v-for="item in dataList">
      <span>{{item.name}}</span>
      <span v-z3-updownColor="item.curChngPct">{{item.curChngPct}}%</span>
      <span><div><span>{{item.infoIndex}}</span></div>
</span>
</li>
</ul>
<ul v-if="type === 'word'">
  <li v-for="item in dataList">
    <span class="col name">{{item.showName}}</span>
    <span v-z3-updownColor="item.chngPct" class="col chg">{{item.chngPct === null?'--':item.chngPct+'%'}}</span>
    <div class="col hot-index">
      <div class="full">
        <div :style="'width:'+progressWidth(item.infoIndex)" class="progress" v-z3-updownColor="item.infoIndex">{{item.infoIndex}}</div>
      </div>
    </div>
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
        this.$store.state.zInfoPublic.hotStocks
      } else if (this.type === 'word') {
        list = this.$store.state.zInfoPublic.hotWords
      }
      return list;
    }
  },
  methods: {
    progressWidth: progress => progress <= 20 ? '20%' : progress + '%'
  },
  mounted() {
    if (this.type === 'stock') {
      //   this.$store.dispatch('zInfoPublic/retrieveHotStocks',{ size:20 });
    } else if (this.type === 'word') {
      this.$store.dispatch('zInfoPublic/retrieveHotWords', {
        size: 20
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/style.scss';
.hot {
    height: 100%;
    border: 1px solid #303539;
    color: $wordsColorBase;
    font-size: 12px;
}
.hot .tit {
    height: 24px;
    line-height: 24px;
    text-align: center;
    background: #303539;
}
.hot ul {
    padding: 5px 0;
    li {
        overflow: hidden;
        height: 18px;
        line-height: 18px;
        margin: 5px 4px;
        .col {
            float: left;
            width: 35%;
        }
        .chg {
            width: 30%;
            text-align: center;
        }
        .progress {
            text-align: center;
            background: #BB0102;
        }
    }
}
</style>