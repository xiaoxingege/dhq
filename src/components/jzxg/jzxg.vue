<template>
<div class="jzxg-wrap">
  <component :is="currentView" :expireDate="expireDate"></component>
  <!-- <JzxgBefore v-if="!isValid" :expireDate="expireDate"></JzxgBefore>
  <JzxgAfter v-if="isValid" :expireDate="expireDate"></JzxgAfter>-->
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
      // isValid: true, // 是否有权限，如果有权限则显示购后页 如果无权则显示购前页
      expireDate: '',
      arr: ['JzxgBefore', 'JzxgAfter'],
      index: ''
    }
  },
  components: {
    JzxgBefore,
    JzxgAfter
  },
  computed: mapState({
    authData: state => state.jzxg.authData,
    currentView() {
      return this.arr[this.index];
    }
  }),
  mounted() {
    this.$store.dispatch('jzxg/getAuthData').then(() => {
      // this.index = this.authData.valid
      this.expireDate = this.authData.expireDate
    })
  }
}
</script>
<style lang="scss" scoped>
.app,
body,
html {
    height: 100%;
}
.jzxg-wrap {
    min-height: 100%;
}
</style>