<style lang="scss" scoped>
@import '../assets/css/reset.css';
.ques-search {
    width: 90%;
    height: 1rem;
    border-bottom: 0.01rem #e6e6e6 solid;
    padding: 0 5%;
    position: relative;
    background-color: #fff;
    z-index: 2;
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
    line-height: 0.5rem;
    height: 0.5rem;
    padding: 0.25rem 10%;
    border: none;
    outline: none;
    color: #333;
}
.ques-search input::-webkit-input-placeholder {
    color: #999;
}
.ques-search ul {
    border-bottom: 0.01rem #e6e6e6 solid;
    width: 100%;
    position: absolute;
    top: 1.02rem;
    left: 0;
    background-color: #fff;
    z-index: 1;
}
.ques-search ul li {
    width: 90%;
    margin: 0 5%;
    height: 1rem;
    font-size: 0.3rem;
    line-height: 1rem;
    border-bottom: 0.01rem #e6e6e6 solid;
}
.ques-search ul li:last-child {
    border-bottom: none;
}
.ques-search ul li p {
    width: 33%;
    float: left;
    text-align: center;
    font-size: 0.3rem;
}
.ques-search ul li p span {
    color: #6284e6;
}
.search-no {
    text-align: center;
    color: #ccc;
}
.ques-search ul li.cur {
    background-color: #6284e6;
}
</style>

<template>
<div class="ques-search">
  <i></i>
  <!-- <input type="text" name="" placeholder="输入股票代码/简拼" v-model="value" @input="searchInput(value)" @blur="inputBlur()" @focus="inputFocus()"/> -->
  <input type="text" name="" placeholder="输入股票代码/简拼" v-model="value" @input="searchInput(value)" :stid="stid" />
  <ul v-if="searchDataType">
    <li>
      <p>品种</p>
    </li>
    <li v-for="item,index in CodeData" v-if="dataType" @click="searchDataClick(index)">
      <!-- <p><span>沪市</span></p> -->
      <p>{{item.name}}</p>
      <p>{{item.code}}</p>
      <p>{{item.shrt}}</p>
    </li>
    <li class="search-no" v-if="searchNo">没有符合条件的结果</li>
  </ul>
  <!-- 今日您还剩余{{askTimes}}次提问机会 -->
</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  data() {
    return {
      searchNo: false,
      dataType: false,
      value: '',
      cur: '',
      searchDataType: false,
      stid: ''
    }
  },
  props: ['value'],
  computed: mapState({
    CodeData: state => {
      return state.quesSearch.CodeData
    }
  }),
  components: {

  },
  methods: {
    searchInput(value) {
      this.$store.dispatch('quesSearch/fetch', {
        key: value
      })
    },
    searchDataClick(index) {
      var value = this.CodeData[index].name + '(' + this.CodeData[index].code + ')'
      this.value = value
      this.stid = this.CodeData[index].stid
      this.searchDataType = false

      this.$emit('searchVal', value)
    },
    inputBlur() {
      this.searchDataType = false
    },
    inputFocus() {
      this.searchDataType = true
    }
  },
  mounted() {
    this.$watch('CodeData', CodeData => {
      if (CodeData.length === 0) {
        this.searchNo = true
        this.dataType = false
        this.searchDataType = false
      } else {
        this.searchNo = false
        this.dataType = true
        this.searchDataType = true
      }
    })
  }
}
</script>
