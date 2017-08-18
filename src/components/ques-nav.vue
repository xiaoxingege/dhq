<style lang="scss" scoped>
@import '../assets/css/reset.css';

.ques-nav {
    width: 95%;
    padding: 0.23rem 2.5%;
    height: 0.42rem;
    border-bottom: 1px #dbdbdb solid;
    background-color: #fff;
    position: relative;
}
.ques-nav i {
    width: 0.22rem;
    height: 0.42rem;
    background: url("../assets/images/ques-alading/bak-btn.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0.23rem;
    left: 3%;
}
.ques-nav h1 {
    font-size: 0.36rem;
    font-weight: normal;
    color: #333;
    text-align: center;
}
.ques-nav span {
    position: absolute;
    top: 0.23rem;
    right: 0.3rem;
    font-size: 0.3rem;
    color: #333;
}
</style>

<template>
<div class="ques-nav">
    <i @click="navBak"></i>
    <h1>{{title}}</h1>
    <span @click="events" v-if="eventShow">{{btnTxt}}</span>
</div>
</template>
<script>
import {
    mapState
} from 'vuex'

export default {
  data () {
    return {
      eventShow: false
    }
  },
  props: ['title', 'btnTxt'],
  computed: mapState({
        // CodeData: state => {
        //   return state.quesSearch.CodeData
        // }
  }),
  components: {
        // quesSearch
  },
  methods: {
    events () {
      this.$emit('navEvents')
    },
    navBak () {
      this.$emit('navBak')
    }
  },
  mounted () {
    if (this.btnTxt) {
      this.eventShow = true
    }
  }
}
</script>
