<style>
.dadian-btn:after{ display: block;content: ''; clear: both;}
.btn1 {
  width: 200px;
  margin: 20px 30px;
  text-align: center;
  font-size: 16px;
  color: #3e0f11;
  float: left;
  background: #009F95;
  line-height: 20px;
  border-radius: 5px;
  box-shadow: 0 5px 0 0 #026760;
  color:#fff;
  cursor: pointer;
}
</style>
<template>
<div class="dadian-btn">
  <a class="btn1" v-link="{ path : '/dadianapp'}">APP<br /> 打卡测试</a>
  <a class="btn1" v-link="{ path : '/dadianweb'}">H5/WEB<br /> 打卡测试</a>
</div>
</template>
<script>
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
  methods: {}
}
</script>
