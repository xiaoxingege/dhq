<template>
<div>
  <JzxgBefore v-if="!isValid"></JzxgBefore>
</div>
</template>
<script>
import JzxgBefore from 'components/jzxg/jzxg-before'
import {
  mapState
} from 'vuex'
export default {
  data() {
    return {
      isValid: true // 是否有权限，如果有权限则显示购后页 如果无权则显示购前页
    }
  },
  components: {
    JzxgBefore
  },
  computed: mapState({
    authentication: state => state.jzxg.authentication
  }),
  mounted() {
    this.$store.dispatch('jzxg/getAuthentication').then(() => {
      this.isValid = this.authentication
    })
  }
}
</script>