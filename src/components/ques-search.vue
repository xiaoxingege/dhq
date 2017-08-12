<style lang="scss" scoped>
@import '../assets/css/reset.css';
.ques-search {
    width: 90%;
    height: 1rem;
    border-bottom: 0.01rem #e6e6e6 solid;
    padding: 0 5%;
    position: relative;
}
.ques-search i {
    width: 0.42rem;
    height: 0.41rem;
    background: url("../assets/images/ques-alading/search-i1.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    left: 5%;
    top: 0.3rem;
}
.ques-search input {
    width: 80%;
    float: left;
    font-size: 0.3rem;
    line-height: 1rem;
    height: 1rem;
    padding: 0 10%;
    border: none;
    outline: none;
}
.ques-search input::-webkit-input-placeholder {
    color: #999;
}
</style>

<template>
<div class="ques-search">
    <i></i>
    <input type="text" name="" value="" placeholder="输入股票代码/简拼" v-model="value" @input="searchInput(value)"/>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'

export default {
  data () {
    return {}
  },
  computed: mapState({
    content: state => state.quesSearch.content
  }),
  components: {

  },
  methods: {
    searchInput (value) {
      this.$store.dispatch('quesSearch/fetch', {
        key: value
      })
    }
  },
  mounted () {
    // this.$store.dispatch('quesSearch/fetch')
  }
}
</script>
