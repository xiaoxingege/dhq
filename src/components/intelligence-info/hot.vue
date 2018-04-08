<template>
<div class="hot">
  <div class="tit">{{title}}</div>
  <ul v-if="type ==='stock'">
    <li v-for="item in dataList">
      <router-link>{{item.name}}</router-link>
      <span class="col chg" v-z3-updowncolor="item.curChngPct">{{item.curChngPct}}%</span>
      <div class="col hot-index">
        <div class="full">
          <div :style="'width:'+progressWidth(item.infoIndex)" class="progress">{{item.infoIndex}}</div>
        </div>
      </div>
    </li>
  </ul>
  <ul v-if="type === 'word'">
    <li v-for="item in dataList">
      <router-link :to="{ name:'topicDetail', params: {topicId:item.code} }" class="col name" v-if="item.flag==='topic'">{{item.showName}}</router-link>
      <router-link :to="{ name:'industryDetail', params: {industryId:item.code} }" class="col name" v-else-if="item.flag==='indu'">{{item.showName}}</router-link>
      <span @dblclick="search(item.showName)" class="col name" v-else>{{item.showName}}</span>
      <span v-z3-updowncolor="item.chngPct" class="col chg">{{item.chngPct === ''?'--':item.chngPct+'%'}}</span>
      <div class="col hot-index">
        <div class="full">
          <div :style="'width:'+progressWidth(item.infoIndex)" class="progress">{{item.infoIndex}}</div>
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
    progressWidth: progress => progress <= 20 ? '20%' : progress + '%',
    search: function(keyword) {
      this.$router.push({
        name: 'search',
        params: {
          linkText: 'infor',
          keyword: keyword
        }
      });
    }
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
        .hot-index {
            .full {
                width: 90%;
                margin: 0 5%;
            }
            .progress {
                text-align: center;
                background: #BB0102;
            }
        }

    }
}
</style>