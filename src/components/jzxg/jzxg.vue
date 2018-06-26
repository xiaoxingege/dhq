<template>
<div>
  <JzxgBefore v-if="!isValid"></JzxgBefore>
  <JzxgAfter v-if="isValid"></JzxgAfter>
</div>
</template>
<script>
import JzxgBefore from 'components/jzxg/jzxg-before'
import JzxgAfter from 'components/jzxg/jzxg-after'
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
    JzxgBefore,
    JzxgAfter
  },
  computed: mapState({
    authentication: state => state.jzxg.authentication
  }),
  mounted() {
    this.$store.dispatch('jzxg/getAuthentication').then(() => {
      // this.isValid = this.authentication
    })
  }
}
</script>