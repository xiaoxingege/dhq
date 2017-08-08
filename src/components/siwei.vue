<style lang="scss" scoped="">
    .siwei{
        background:#000;
        padding-left:17px;
        padding-top: 6px;
        width:1280px;
        height:806px;
    }
</style>
<template>
    <div class="siwei">
        <bubbles-bar></bubbles-bar>
        <bubbles></bubbles>
    </div>
</template>
<script>
    import BubblesBar from 'components/bubbles-bar'
    import Bubbles from 'components/bubbles'

    export default{
      data () {
        return {

        }
      },
      components: {
        BubblesBar,
        Bubbles
      },
      methods: {

      },
      mounted () {

      }
    }
</script>
