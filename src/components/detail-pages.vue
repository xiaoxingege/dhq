<style>
    .news{
        color:#191919;
        padding-top: 50px;
        font-family: "宋体";
    }
.newTitle{
    text-align: center;
    font-size: 14px;
    font-weight: bold;
}
    .newMain{
        font-size:12px;
    }
</style>
<template>
<div class="news">
    <p class="newTitle">{{result.title}}</p>
    <div><span></span></div>
    <div class="newMain" v-html="reformatContent" ></div>
</div>

</template>
<script>
    import { mapState } from 'vuex'
    export default{
      data () {
        return {

        }
      },
      computed: mapState({
        result: state => state.zhikuanDetailPages.dataList,
        reformatContent: function () {
          const content = this.result.content.split('\n')
          let con = ''
          content.forEach((p) => {
            con += '<p>' + p + '</p>'
          })
          return con
        }
      }),
      methods: {

      },
      mounted () {
        const id = this.$route.params.id
        this.$store.dispatch('zhikuanDetailPages/getDetailPages', { id })
  }
    }
</script>
