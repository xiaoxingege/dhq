<style lang="scss" scoped>
@import '../assets/css/reset.css';

.ques-ask-box {
    width: 100%;
    position: relative;
}
.ques-ask-box textarea {
    width: 95%;
    padding: 0.2rem 2.5%;
    font-size: 0.3rem;
    color: #333;
    height: 3.3rem;
    resize: none;
    outline: none;
    float: left;
}
.ques-ask-box textarea::placeholder {
    color: #999;
}
.ques-text－num {
    font-size: 0.28rem;
    position: absolute;
    top: 4.2rem;
    right: 0.2rem;
    color: #999;
}
.ques-text－num span {
    color: #555;
}
.askTimes {
    height: 0.77rem;
    line-height: 0.77rem;
    font-size: 0.28rem;
    color: #999;
    width: 95%;
    padding: 0 2.5%;
    border-top: 1px #e6e6e6 solid;
    background-color: #fff;
    float: left;
}
.askTimes span { color: #ff4040; }
</style>

<template>
<div class="ques-ask-box">
    <ques-search />
    <textarea placeholder="请详细描述问题，可以获得更有针对性的解答" maxlength="200" v-model="text"></textarea>
    <div class="ques-text－num"><span>0</span>/200</div>
    <p class="askTimes">今日您还剩余<span>10</span>次提问机会</p>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'
import quesSearch from 'components/ques-search'

export default {
  data () {
    return {}
  },
  computed: mapState({
        // CodeData: state => {
        //   return state.quesSearch.CodeData
        // }
  }),
  components: {
    quesSearch
  },
  methods: {
        // searchInput (value) {
        //   this.$store.dispatch('quesSearch/fetch', {
        //     key: value
        //   })
        // }
  },
  mounted () {
        // this.$store.dispatch('quesSearch/ask')
        // this.$watch('CodeData', CodeData => {
        //   this.searchDataType = true
        //   if (CodeData.length === 0) {
        //     this.searchNo = true
        //     this.dataType = false
        //   } else {
        //     this.searchNo = false
        //     this.dataType = true
        //   }
        // })
  }
}
</script>
