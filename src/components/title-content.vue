<style lang="scss" scoped>
.article {
    width: 100%;
    background: #141518;
    font-size: 12px;
    margin-bottom: 35px;
}
.title {
    color: #d3d9dd;
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: bold;
}
.content {
    color: #d3d9dd;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .article {
        width: 100%;
        background: #fff;
        font-size: 0.28rem;
        margin-bottom: 0.2rem;
        margin-top: 0.4rem;
    }
    .title {
        color: #333;
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.28rem;
        border-left: 0.06rem solid #FC4343;
        padding-left: 0.25rem;
        margin-bottom: 0.3rem;
    }

    .content {
        color: #888;
        padding: 0 0.6rem;
        text-align: justify;
        padding-bottom: 0.4rem;
    }
}
</style>
<template>
<div class="article">
  <div class="title">{{data.title}}</div>
  <div class="content">{{data.content}}</div>
</div>
</template>
<script>
export default {
  props: ['data']
}
</script>
