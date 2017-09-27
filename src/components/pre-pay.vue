<style>
</style>

<template>
<div>
  <p>{{bindingMobile}}</p>
  <p>{{bindingIdentity}}</p>
  <p>{{riskAssessed}}</p>
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
    riskAssessed: state => state.user.riskAssessed,
    bindingMobile: state => state.user.bindingMobile,
    bindingIdentity: state => state.user.bindingIdentity
  }),
  mounted () {
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
          location.href = phoneUrl
        } else if (!this.bindingMobile && !this.bindingIdentity && this.riskAssessed) {
          // 未绑定手机号未绑定实名信息已测评
          const idUrl = 'http://i.jrj.com.cn/home/app/nameIdentity?ReturnURL=' + encodeURIComponent(payUrl)
          const phoneUrl = 'http://i.jrj.com.cn/home/app/phoneIdentity?ReturnURL=' + encodeURIComponent(idUrl)
          location.href = phoneUrl
        } else if (this.bindingMobile && !this.bindingIdentity && !this.riskAssessed) {
          // 已绑定手机号未绑定实名信息未测评
          const idUrl = 'http://i.jrj.com.cn/home/app/nameIdentity?ReturnURL=' + encodeURIComponent(payUrl)
          location.href = idUrl
        } else if (this.bindingMobile && this.bindingIdentity && !this.riskAssessed) {
          // 已绑手机号已验证实名未测评
          const cpUrl = 'http://i.jrj.com.cn/home/app/fxcpNotes?layer=0&ReturnURL=' + encodeURIComponent(payUrl)
          location.href = cpUrl
        } else if (this.bindingMobile && this.bindingIdentity && this.riskAssessed) {
          location.href = payUrl
        }
      }, 5000)
    })
  }
}
</script>
