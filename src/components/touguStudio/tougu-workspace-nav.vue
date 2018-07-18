<style scoped>
.nav {
  width: 96%;
  height: 25px;
  line-height: 25px;
  background:rgba(48,53,59,1);
  margin: 0px auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.nav-item {
  float: left;
  color: #C9D0D7;
  font-size: 12px;
  text-align: center;
  cursor: pointer
}

.selected {
  background: #525A65;
  color: #fff
}

.live {
  width: 91px;
}

.strategy {
  width: 80px;
}

.message {
  width: 92px;
}

.training {
  width: 68px;
}
</style>

<template>
<div class="nav">
  <div class="nav-item live" :class="selectTabIndex === 1 ? 'selected': ''" @click="setSelectedTabIndex(1)">VIP直播</div>
  <div class="nav-item strategy" :class="selectTabIndex === 2 ? 'selected': ''" @click="setSelectedTabIndex(2)">投资策略</div>
  <div class="nav-item message" :class="selectTabIndex === 3 ? 'selected': ''" @click="setSelectedTabIndex(3)">一对一咨询</div>
  <div class="nav-item training" :class="selectTabIndex === 4 ? 'selected': ''" @click="setSelectedTabIndex(4)">训练营</div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

export default {
  computed: mapState({
    selectTabIndex: state => {
      return state.touguWorkspaceStore.selectTabIndex
    }
  }),
  methods: {
    setSelectedTabIndex(index) {
      this.$store.commit('touguWorkspaceStore/setSelectedTabIndex', index)
    }
  }
}
</script>