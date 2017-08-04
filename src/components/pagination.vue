<style  lang="scss" scoped>
    .page{
       /* width:720px;*/
        background: #fff;
        font-family: "Microsoft YaHei","微软雅黑";
        font-size: 14px;
        padding:40px 0;
    }
    span{

        display: inline-block;
        height:30px;
        line-height: 30px;
        border:1px solid #ddd;
        padding:0 12px;
    }
    ul{
        display: inline-block;
        position: relative;
        top: 11px;
        left: -5px;
    }
    ul li{
        float:left;
        color: #666;
        border: 1px solid #ddd;
        border-right: none;
        background-color: #fff;
        width:34px;
        height:30px;
        line-height: 30px;
        text-align:center;
        cursor: pointer;
    }
    select{

        color: #999999;
        font-size: 14px;
        padding: 6px 0;
    }
    .totals{
        border:none;
        margin-right: 10px;
    }
    .nextPage{
        position:relative;
        left:-10px;
    }
    .active{
        background: #0088E1;
        color:#fff;
    }
</style>
<template>
    <div class="page clearfix">
        <span>上一页</span>
        <ul class="pages clearfix">
            <li @click="getCurrentPage($event)" v-for="page in totalPage">{{page}}</li>
        </ul>
        <span class="nextPage">下一页</span>
        <span class="totals">共{{totalPage}}页</span>
        <select @change="getCurrentSelectPage($event)">
            <option v-for="page in totalPage" :value=page >{{page}}/{{totalPage}}</option>
        </select>

    </div>
</template>

<script>
    export default{
      props: ['totalPage'],
      data () {
        return {
          currentPage: ''
        }
      },
      methods: {
        getCurrentPage (e) {
          this.$emit('getPageFromChild', e.target.innerText)
          this.currentPage = e.target.innerText
        },
        getCurrentSelectPage (e) {
          this.$emit('getPageFromChild', e.target.value)
          this.currentPage = e.target.value
        }
      },
      mounted () {

      }
    }
</script>
