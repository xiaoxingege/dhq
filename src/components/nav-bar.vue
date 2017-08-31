<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .topNav{ height:23px; border-bottom:1px solid #0799E5; background:#fff;}
    .topNav ul li{ float: left;}
    .topNav ul li>span{ font-size:12px; display: block; height:23px; line-height: 23px; width:75px; text-align: center; cursor: pointer;}
    .active{ background:#2388da; color:#fff;}
</style>
<template>
    <div class="topNav">
        <ul class="clearfix">
            <li v-for="item in data"><span @click="changeTab($event)" :class="type === item[1] ? 'active':''" href="#" :value="item[1]">{{item[0]}}</span></li>
        </ul>
    </div>
</template>
<script>
    export default{
      props: ['data', 'type'],
      data () {
        return {
          activeSearch: this.$route.params.linkText
        }
      },
      watch: {
        'this.activeSearch': function () {

        }
      },
      cumputed: {

      },
      methods: {
        changeTab (e) {
          const type = e.target.getAttribute('value')
          this.$emit('changeType', type)
        }
      },
      mounted () {

      }
    }
</script>
