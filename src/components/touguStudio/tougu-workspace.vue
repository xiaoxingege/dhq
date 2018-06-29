<style scoped>
@import '../../assets/css/base.css';
html,
body,
.tougu-workspace-wrapper,
.tougu-workspace-wrapper-inner {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.header {
  width: 100%;
  height: 25%;
}

.content {
  width: 100%;
  height: 75%;
}
</style>

<template>
<div class="tougu-workspace-wrapper">
  <div class="tougu-workspace-wrapper-inner">
    <div class="header">
      <TouguWorkspaceHeader></TouguWorkspaceHeader>
      <TouguWorkspaceNav></TouguWorkspaceNav>
    </div>
    <div class="content">
      <TouguWorkspaceLive v-if="selectTabIndex === 1"></TouguWorkspaceLive>
      <TouguWorkspaceStrategy v-if="selectTabIndex === 2"></TouguWorkspaceStrategy>
      <TouguWorkspaceConsultation v-if="selectTabIndex === 3"></TouguWorkspaceConsultation>
      <TouguWorkspaceTraining v-if="selectTabIndex === 4"></TouguWorkspaceTraining>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import TouguWorkspaceHeader from './tougu-workspace-header.vue'
import TouguWorkspaceNav from './tougu-workspace-nav.vue'
import TouguWorkspaceStrategy from './tougu-workspace-strategy.vue'
import TouguWorkspaceTraining from './tougu-training.vue'
import TouguWorkspaceLive from './tougu-workspace-live.vue'
import TouguWorkspaceConsultation from './tougu-workspace-consultation.vue'
// import getQueryString from '../../utils/getQueryString.js'
// import getCookie from '../../utils/getCookie.js'


export default {
  data() {
    return {

    }
  },
  computed: mapState({
    selectTabIndex: state => {
      return state.touguWorkspaceStore.selectTabIndex
    }
  }),
  components: {
    TouguWorkspaceHeader,
    TouguWorkspaceNav,
    TouguWorkspaceStrategy,
    TouguWorkspaceTraining,
    TouguWorkspaceLive,
    TouguWorkspaceConsultation
  },
  methods: {

  },
  mounted() {

  }
}
</script>
