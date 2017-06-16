<style>
.red {
	color: red
}
</style>
<template>
<div>{{ loading ? 'Loading...' : content }}</div>
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
        fetch('data.json').then((res) => {
          return res.json()
        }).then(body => {
          this.loading = false
          this.content = body.content
        })
      }, 1000)
    }
  },
  mounted () {
    document.title = 'vue-demo'
  }
}
</script>
