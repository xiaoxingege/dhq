<style lang="scss" scoped>
@import '../assets/css/base.css';
* {
    text-align: justify;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
em,
i {
    font-style: normal;
}

.blue {
    color: #1984ea;
}
.red {
    color: #ca4941;
}
.green {
    color: #56a870;
}

.lightcolor {
    color: #c9d0d7;
}

.gray {
    color: #808ba1;
}

span {
    color: #c9d0d7;
}
body,
html {
    /* background: #f2f2f2; */

}
.sortaz-wrap {
    /*  background: #f2f2f2;
      width: 100%;
      font-size: 12px;
      color: #696969; */
}
.az-main {}
.sort-hot {

    /*  width: 100%;
      margin: 0 auto; */
}
/*   .hot-name{
    margin-left: 19px;
    display: inline-block;
   } */
.themeList .every-topical-wrap {
    /* background: #ffff; */
    padding-left: 4px;
    /* padding-left: 11px;
  padding-right: 8px; */
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    min-height: 50px;
    overflow-y: scroll;
}
.every-topical-wrap {
    /* background: #ffff; */
    padding-left: 4px;
    /* padding-left: 11px;
    padding-right: 8px; */
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.every-main {
    border-bottom: 1px solid #0d0e0f;
    /*  font-size: 12px; */
    color: #c9d0d7;
    /* padding: 7px 16px 9px; */
    padding: 18px 20px;
}

.themeList .every-main {
    border-bottom: 1px solid #acacac;
    color: #666;
}
.letter {
    /* line-height: 20px; */
    line-height: 30px;
    /* width: 5%; */
    font-size: 14px;
}
.letter span {

    font-size: 14px;
}

.themeList .letter span {
    color: #666;
}
.letter i {
    margin-left: 8px;
}
.every-name {
    width: 91%;
    /* padding-left: 2%; */
}
.every-name .tname {
    /* padding: 0 10px; */
    /* width: 10%; */
    width: 11%;
    /* line-height: 20px; */
    line-height: 30px;
    color: #c9d0d7;
    display: inline-block;
    cursor: pointer;
    /* padding-left: 40px; */
    padding-left: 50px;
}

.themeList .every-name .tname {
    color: #666;
}
.tname a {
    font-size: 14px;
    white-space: nowrap;
}
.every-name a:hover {
    text-decoration: underline;
}
.block {
    color: #c9d0d7;
}
</style>
<template>
<div class="every-topical-wrap">
  <div class="every-main clearfix" v-for="key of sortList">
    <div class="fl letter"><span>{{key}}</span><i>></i></div>
    <div class="fl every-name" v-if="islink">
      <a v-for="g of groupTopics[key]" :value="g.topicCode" class="tname">
        <router-link :to="{name:'topicDetail',params:{topicId:g.topicCode}}" :class="g.topicMarket!=null ? checkClass(g.topicMarket.chngPct):'block'">
          {{g.topicName}}</router-link>
      </a>
    </div>
    <div class="fl every-name" v-else>
      <a v-for="g of groupTopics[key]" :class="g.topicMarket!=null ? checkClass(g.topicMarket.chngPct):'block'" :value="g.topicCode" @click="getVal($event)" class="tname">{{g.topicName}}</a>
    </div>
  </div>

</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
      /* routeName: this.$route.name*/
    }
  },
  props: ['islink'],
  computed: mapState({
    groupTopics: state => state.topic.groupTopics,
    sortList: state => {
      const groupData = state.topic.groupTopics
      // const arr = []
      // for (const key in groupData) {
      //   arr.push(key)
      // }

      return Object.keys(groupData).sort()
    }

    // groupTopics: state => state.topic.groupTopics

  }),
  components: {

  },
  methods: {
    changeTofixed (num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    checkClass (str) {
      if (str === 0 || str === null) {
        str = 'block'
      } else if (str > 0) {
        str = 'red'
      } else if (str < 0) {
        str = 'green'
      } else {
        str = 'block'
      }
      return str
    },
    getVal (e) {
      const text = e.target.innerHTML
      const val = e.target.getAttribute('value')
      this.$emit('getThemeValue', [val, text])
    }
  },
  watch: {

  },
  mounted () {
    this.$store.dispatch('topic/queryGroupTopics')
    this.$watch('groupTopics', function (groupTopics) {
      if (groupTopics) {
        this.$emit('groupTopicSuccess')
      }
    })
  }

}
</script>
