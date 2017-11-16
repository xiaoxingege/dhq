<style>
</style>

<template>
<div>
</div>
</template>

<script>
import {
  mapState
} from 'vuex'
import qs from 'qs'
export default {
  components: {},
  computed: mapState({
    loginStatus: state => state.user.loginStatus,
    riskAssessed: state => {
      const query = qs.parse(location.search.substring(1))
      const skipRiskAssessed = query.skipRiskAssessed === '1'
      return state.user.riskAssessed || skipRiskAssessed
    },
    bindingMobile: state => state.user.bindingMobile,
    bindingIdentity: state => state.user.bindingIdentity
  }),
  mounted() {
    const query = qs.parse(location.search.substring(1))
    const payUrl = query.payUrl
    this.$store.dispatch('user/checkLogin').then(() => {
      return this.$store.dispatch('user/checkBindingInfo', {})
    }).then(() => {
      setTimeout(() => {
        if (!this.bindingMobile && !this.bindingIdentity && !this.riskAssessed) {
          // 未绑定手机号未实名验证未评测
          const cpUrl = 'http://i.jrj.com.cn/home/app/fxcpNotes?layer=0&ReturnURL=' + encodeURIComponent(payUrl)
          const idUrl = 'http://i.jrj.com.cn/home/app/nameIdentity?ReturnURL=' + encodeURIComponent(cpUrl)
          const phoneUrl = 'http://i.jrj.com.cn/home/app/phoneIdentity?ReturnURL=' + encodeURIComponent(idUrl)
          location.replace(phoneUrl)
        } else if (!this.bindingMobile && !this.bindingIdentity && this.riskAssessed) {
          // 未绑定手机号未绑定实名信息已测评
          const idUrl = 'http://i.jrj.com.cn/home/app/nameIdentity?ReturnURL=' + encodeURIComponent(payUrl)
          const phoneUrl = 'http://i.jrj.com.cn/home/app/phoneIdentity?ReturnURL=' + encodeURIComponent(idUrl)
          location.replace(phoneUrl)
        } else if (this.bindingMobile && !this.bindingIdentity && !this.riskAssessed) {
          // 已绑定手机号未绑定实名信息未测评
          const cpUrl = 'http://i.jrj.com.cn/home/app/fxcpNotes?layer=0&ReturnURL=' + encodeURIComponent(payUrl)
          const idUrl = 'http://i.jrj.com.cn/home/app/nameIdentity?ReturnURL=' + encodeURIComponent(cpUrl)
          location.replace(idUrl)
        } else if (this.bindingMobile && this.bindingIdentity && !this.riskAssessed) {
          // 已绑手机号已验证实名未测评
          const cpUrl = 'http://i.jrj.com.cn/home/app/fxcpNotes?layer=0&ReturnURL=' + encodeURIComponent(payUrl)
          location.replace(cpUrl)
        } else if (this.bindingMobile && this.bindingIdentity && this.riskAssessed) {
          location.replace(payUrl)
        }
      }, 0)
    })
  }
}
</script>
