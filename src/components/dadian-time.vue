<style scoped>
@import "../assets/plugins/laydate/laydate.css";
.dadian-time .up:after{ display: block;content: ''; clear: both;}
</style>
<template>
<div class="dadian-time">
  <div class="up">
    <input placeholder="请输入日期" class="laydate-icon" @click="laydatefn" >
    <span>至</span>
    <input placeholder="请输入日期" class="laydate-icon"  @click="laydatefn" >
  </div>

</div>
</template>
<script>
import '../assets/plugins/laydate/laydate.js'
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: mapState({
  }),
  mounted () {
  },
  methods: {
    laydatefn () {
      window.laydate({ istime: true, format: 'YYYY-MM-DD hh:mm:ss' })
    }
  }
}
</script>
