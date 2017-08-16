<style lang="scss" scoped>
@import '../assets/css/reset.css';

.ques-tg {
    width: 100%;
    height: 3.1rem;
    background: url("../assets/images/ques-alading/tg-i1.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
}
.ques-tg-top {
    float: left;
    margin: 0.6rem 0 0 0.32rem;
    height: 1.42rem;
}
.ques-tg-top img {
    width: 1.1rem;
    height: 1.1rem;
    float: left;
    border-radius: 0.5rem;
}
.ques-tg-top div {
    width: 4rem;
    float: left;
    margin-left: 0.4rem;
}
.ques-tg-top div p {
    height: 0.5rem;
    line-height: 0.5rem;
}
.ques-tg-top div p strong {
    font-size: 0.34rem;
    font-weight: normal;
    color: #fff;
    float: left;
    margin-right: 0.1rem;
}
.ques-tg-top div p em,
.ques-tg-top div p span {
    font-size: 0.26rem;
    color: #a6a8be;
    float: left;
}
.ques-tg-top div p i {
    height: 0.2rem;
    width: 0;
    border-left: 1px #5d6071 solid;
    float: left;
    margin: 0.13rem 0.2rem;
}
.ques-tg-top div button {
    width: 1.38rem;
    height: 0.55rem;
    float: left;
    border-radius: 0.5rem;
    background: none;
    outline: none;
    margin-top: 0.05rem;
}
.ques-tg-top div button.ques-tg-focus {
    border: 1px #ff4040 solid;
    color: #ff4040;
    margin-right: 0.36rem;
}
.ques-tg-top div button.ques-tg-btn {
    border: 1px #e5e8f9 solid;
    color: #e5e8f9;
}
.ques-tg-top div button i {
    width: 0.14rem;
    height: 0.14rem;
    display: inline-block;
    background: url("../assets/images/ques-alading/tg-i3.png") no-repeat;
    background-size: 100% 100%;
    margin-right: 0.1rem;
}
.ques-msg {
    font-size: 0.24rem;
    width: 95%;
    padding: 0 2.5%;
    float: left;
    color: #a9abc1;
    height: 1.08rem;
    line-height: 0.32rem;
    margin-top: 0.2rem;
}
</style>

<template>
<div class="ques-tg">
    <div class="ques-tg-top clearfix">
        <img src="../assets/images/ques-alading/tg-i2.png" />
        <div>
            <p>
                <strong>空空道人</strong>
                <span>资深达人</span>
                <i></i>
                <em>231粉丝</em>
            </p>
            <button type="button" name="button" class="ques-tg-focus"><i></i>关注</button>
            <button type="button" name="button" class="ques-tg-btn">问顾</button>
        </div>
    </div>
    <p class="ques-msg">介绍：曾担任某私募操盘手，拥有十余年的私募操盘经验，精资金管理，波浪理论，趋势分析等...</p>
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
        // CodeData: state => {
        //   return state.quesSearch.CodeData
        // }
  }),
  components: {

  },
  methods: {
        // searchInput (value) {
        //   this.$store.dispatch('quesSearch/fetch', {
        //     key: value
        //   })
        // }
  },
  mounted () {
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
