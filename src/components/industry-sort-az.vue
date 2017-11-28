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
html {}
.sortaz-wrap {}

.themeList .every-topical-wrap {
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
    padding-left: 4px;
    /* padding-left: 11px;
    padding-right: 8px; */
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.every-main {
    /* border-bottom: 1px solid #0d0e0f;*/
    color: #c9d0d7;
    /* padding: 7px 16px 9px; */
    padding: 12px 20px;
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
    width: 100%;
}
.letter span {

    font-size: 14px;
}

.letter i {
    margin-left: 8px;
}
.every-name {
    width: 91%;
}

.tname {
    line-height: 30px;
    color: #c9d0d7;
    display: inline-block;
    cursor: pointer;
    padding-left: 16px;

}

.themeList .every-name .tname {
    color: #666;
}
.tname a {
    font-size: 14px;
    white-space: nowrap;
}
.tname a:hover {
    text-decoration: underline;
}
.block {
    color: #c9d0d7;
}
.left {
    width: 50%;
    border-right: 1px solid #0d0e0f;
}
.right {
    width: 49%;
    padding-left: 100px;
}
.induNames {
    display: inline-block;
    width: 58px;
}
/*.name-left{
     width: 1%;
}*/
.name-right {
    width: 70%;
}
</style>
<template>
<div class="every-topical-wrap" :style="{  minHeight: fullHeight1 + 'px' }">
  <div class="display-box" style="width: 100%">
    <div class="box-flex-1 left">
      <div class="every-main clearfix" v-for="(item,key) in groupTopics" v-if="key<=13">
        <div class="fl letter display-box" v-for="(induName,index) of item">
          <div class="name-left"><span class="induNames">{{index}}</span><i>></i></div>
          <div class="box-flex-1 name-right"><span v-for="g of induName" class="tname">
                              <router-link :to="{name:'industryDetail',params:{industryId:g.induCode}}" :class="g!=null ? checkClass(g.chngPct):'block'">
                            {{g.induName}}</router-link>
                        </span></div>
        </div>
      </div>
    </div>
    <div class="box-flex-1 right">
      <div class="every-main clearfix" v-for="(item,key) in groupTopics" v-if="key>13">
        <div class="fl letter display-box" v-for="(induName,index) of item">
          <div class="name-left"><span class="induNames">{{index}}</span><i>></i></div>
          <div class="box-flex-1 name-right"><span v-for="g of induName" class="tname">
                              <router-link :to="{name:'industryDetail',params:{industryId:g.induCode}}" :class="g!=null ? checkClass(g.chngPct):'block'">
                            {{g.induName}}</router-link>
                        </span></div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      fullHeight1: document.documentElement.clientHeight - 98
    }
  },
  props: ['islink'],
  computed: mapState({
    groupTopics: state => state.industry.groupTopics,
    sortList: state => {
      const groupData = state.industry.groupTopics
      // const arr = []
      // for (const key in groupData) {
      //   arr.push(key)
      // }
      return Object.keys(groupData)
    }

  }),
  components: {

  },
  methods: {
    changeTofixed(num) {
      return num > 0 ? '+' + parseFloat(num).toFixed(2) + '%' : parseFloat(num).toFixed(2) + '%'
    },
    checkClass(str) {
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
    getVal(e) {
      const text = e.target.innerHTML
      const val = e.target.getAttribute('value')
      this.$emit('getThemeValue', [val, text])
    }
  },
  watch: {

  },
  mounted() {
    this.$store.dispatch('industry/queryGroupTopics')
  }

}
</script>
