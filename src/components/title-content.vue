<style lang="scss" scoped>
.article{
    width:100%;
    background: #fff;
    font-size:12px;
    margin-bottom: 35px;
}
.title{
    color:#191919;
    margin-bottom: 15px;
    font-size:12px;
}
    .content{
        color:#666;
        text-indent: 2em;
    }
</style>
<template>
    <div class="article">
        <div class="title">{{data.title}}</div>
        <div class="content">{{data.content}}</div>
    </div>
</template>
<script>
    export default{
      props: ['data']
    }

</script>
