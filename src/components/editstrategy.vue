<style scoped>
@import '../assets/css/reset.css';
input {
  outline: none;
}

body {
  background: #fff;
}
.clearfix:after{ display: block;content: ''; clear: both;}
a,
.blue {
  color: #2a8ae1;
}

</style>
<template>
<div class="editstrategy">
  123
</div>
</template>
<script>
import 'whatwg-fetch'
import {
  mapState
} from 'vuex'

export default {
  data () {
    return {


    }
  },
  components: {
  },
  computed: mapState({}),
  mounted () {
    this.getdate()
  },
  methods: {
    getdate () {
      console.log(123);
    }
  }
}
</script>
