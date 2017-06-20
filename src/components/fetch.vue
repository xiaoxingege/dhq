<style>
.red {
	color: red
}
</style>
<template>
<div>{{ loading ? 'Loading...' : name }}</div>
</template>

<script>
import 'whatwg-fetch'

export default {
  data () {
    return {
      loading: true
    }
  },
  components: {},
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      setTimeout(() => {
        fetch('/package.json').then((res) => {
          return res.json()
        }).then(body => {
          this.loading = false
          this.name = body.name
        })
      }, 1000)
    }
  },
  mounted () {
    document.title = 'vue-demo'
  }
}
</script>
