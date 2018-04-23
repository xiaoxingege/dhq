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
    riskAssessed: state => state.user.riskAssessed,
    bindingMobile: state => state.user.bindingMobile,
    bindingIdentity: state => state.user.bindingIdentity
  }),
  mounted() {
    const query = qs.parse(location.search.substring(1))
    const payUrl = query.payUrl
    const debug = query.debug
    const skipRiskAssessed = query.skipRiskAssessed === '1'
    const payQuery = qs.parse(payUrl.replace(/.*?\?/, ''))
    // mobile表示非app内的h5页面，app表示app内的h5页面
    const platform = window.app.name === '{{appid}}' ? 'mobile' : 'app'
    this.$store.dispatch('user/checkLogin').then(() => {
      return this.$store.dispatch('user/checkBindingInfo', {})
    }).then(() => {
      setTimeout(() => {
        if (debug) {
          alert(`${this.bindingMobile},${this.bindingIdentity},${this.riskAssessed},${skipRiskAssessed},${window.jrj},${payQuery.productId},${payQuery.type}`)
        }
        if (!this.bindingMobile && !this.bindingIdentity && !this.riskAssessed) {
          // 未绑定手机号未实名验证未评测
          const cpUrl = `http://i.jrj.com.cn/home/${platform}/fxcpNotes?layer=0&ReturnURL=` + encodeURIComponent(payUrl)
          const idUrl = `http://i.jrj.com.cn/home/${platform}/nameIdentity?ReturnURL=` + encodeURIComponent(cpUrl)
          const phoneUrl = `http://i.jrj.com.cn/home/${platform}/phoneIdentity?ReturnURL=` + encodeURIComponent(idUrl)
          location.replace(phoneUrl)
        } else if (!this.bindingMobile && !this.bindingIdentity && this.riskAssessed) {
          // 未绑定手机号未绑定实名信息已测评
          const idUrl = `http://i.jrj.com.cn/home/${platform}/nameIdentity?ReturnURL=` + encodeURIComponent(payUrl)
          const phoneUrl = `http://i.jrj.com.cn/home/${platform}/phoneIdentity?ReturnURL=` + encodeURIComponent(idUrl)
          location.replace(phoneUrl)
        } else if (this.bindingMobile && !this.bindingIdentity && !this.riskAssessed) {
          // 已绑定手机号未绑定实名信息未测评
          const cpUrl = `http://i.jrj.com.cn/home/${platform}/fxcpNotes?layer=0&ReturnURL=` + encodeURIComponent(payUrl)
          const idUrl = `http://i.jrj.com.cn/home/${platform}/nameIdentity?ReturnURL=` + encodeURIComponent(cpUrl)
          location.replace(idUrl)
        } else if (!this.bindingMobile && this.bindingIdentity) {
          //有实名认证，但没绑定手机
          const cpUrl = `http://i.jrj.com.cn/home/${platform}/fxcpNotes?layer=0&ReturnURL=` + encodeURIComponent(payUrl)
          const phoneUrl = `http://i.jrj.com.cn/home/${platform}/phoneIdentity?ReturnURL=` + encodeURIComponent(cpUrl)
          location.replace(phoneUrl)
        } else if (this.bindingMobile && this.bindingIdentity) {
          if (!this.riskAssessed) {
            if (skipRiskAssessed && window.jrj) {
              window.jrj.jsCallNative(1114, JSON.stringify({
                bizCode: '5',
                productId: '5',
                productSubId: payQuery.productId,
                type: payQuery.type,
                nums: '1',
                pageReturnUrl: 'http://itougu.jrj.com.cn/activity/app/ZQuantization.jspa?type=paySuccess#/success',
                asynReturnUrl: 'http://itougu.jrj.com.cn/smartstock/api/ordercompleted.jspa',
                source: '',
                callback: ''
              }))
            } else {
              // 已绑手机号已验证实名未测评
              const cpUrl = `http://i.jrj.com.cn/home/${platform}/fxcpNotes?layer=0&ReturnURL=` + encodeURIComponent(payUrl)
              location.replace(cpUrl)
            }
          } else {
            if (skipRiskAssessed && window.jrj) {
              window.jrj.jsCallNative(1114, JSON.stringify({
                bizCode: '5',
                productId: '5',
                productSubId: payQuery.productId,
                type: payQuery.type,
                nums: '1',
                pageReturnUrl: 'http://itougu.jrj.com.cn/activity/app/ZQuantization.jspa?type=paySuccess#/success',
                asynReturnUrl: 'http://itougu.jrj.com.cn/smartstock/api/ordercompleted.jspa',
                source: '',
                callback: ''
              }))
            } else {
              location.replace(payUrl)
            }
          }
        }
      }, 0)
    })
  }
}
</script>
