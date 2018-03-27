<style lang="scss" scoped>
@import '../assets/css/reset.css';
.projects-dashboard {
    padding: 20px;
    font-size: 14px;
}
.btn {
  padding: 0 6px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  display: inline-block;
  box-sizing: border-box;
}

.btn.btn-default {
  color: #666;
  border: 1px solid #ccc;
}

.btn.btn-default:hover {
  background: #efefef;
}
</style>
<template>
<div class="projects-dashboard">
  <ProjectsList :nickname="nickname" />
</div>
</template>

<script>
import {
  mapState
} from 'vuex'

import ProjectsList from './projects-list'

export default {
  data () {
    return {}
  },
  computed: {
    nickname () {
      return this.$route.params.nickname
    },
    ...mapState({

    })
  },
  components: {
    ProjectsList
  },
  methods: {

  },
  mounted () {

  },
  beforeRouteEnter (to, from, next) {
    if (to.params.nickname) {
      document.title = `${to.params.nickname}的项目进度`
    } else {
      document.title = '当前项目进度'
    }
    next()
  },
  beforeRouteUpdate (to, from, next) {
    if (to.params.nickname) {
      document.title = `${to.params.nickname}的项目进度`
    } else {
      document.title = '当前项目进度'
    }
    next()
  }
}
</script>
