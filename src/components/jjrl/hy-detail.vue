<template>
<div>
  <div class="listCon">
    <span class="hyDate">05-04</span>
    <div class="hyTitle">
      <div>2018(第七届)巴拉巴拉变身大会</div>
      <div>关注程度：
        <ul>
          <li></li>
        </ul>
      </div>
      <div>相关股票：
        <ul>
          <li> </li>
        </ul>
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

    }
  },
  computed: {
    ...mapState({
      storeData: state => state.jjrl.dateAndCode

    })

  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.listCon {
    width: 83.5%;
    box-sizing: border-box;
    display: flex;
    font-size: 12px;
    padding-left: 10px;
}
.hyTitle {
    margin-left: 20px;
}
.hyTitle div {
    margin-bottom: 13px;
}
</style>
