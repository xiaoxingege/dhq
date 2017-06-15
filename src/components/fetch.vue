<style lang="sass">
$text-color: red

.red
  color: $text-color
</style>
<template lang="jade">
div.content {{ loading ? 'Loading...' : content }}
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
      fetch('data.json').then((res) => {
        return res.json()
      }).then(body => {
        this.loading = false
        this.content = body.content
      })
    }
  },
  mounted () {
    document.title = 'vue-demo'
  }
}
</script>
