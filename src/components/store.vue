<style>
</style>
<template>
<div>{{store}}</div>
</template>
<script>
import {
  mapState
} from 'vuex'

export default {
  computed: mapState({
    store: state => state.demo.content
  })
}
</script>
