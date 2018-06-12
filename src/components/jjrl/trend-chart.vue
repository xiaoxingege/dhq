<template>
<div class="main">
  <div class="introduce">
    <div class="title">
      <span>停牌间走势对比</span>
      <span class='bk'><i></i>板块行情</span>
      <span class='gg'><i></i>个股行情</span>
    </div>
    <div class="chart">

    </div>
    <p>停牌期间上证指数下跌44444</p>
    <p>停牌提示：重要事项未公告，自##年##月##日连续停牌，2018年月日复牌。</p>
  </div>

</div>
</template>
<script>

</script>

<style lang='scss' scoped>
@import '../../assets/css/base.css';
@import "../../assets/scss/style";
.main {
    height: 100%;
    margin-bottom: 47px;
}
.bk i,
.gg i {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
}
.bk i {
    background-color: $blueWordsColor;
    margin-right: 5px;
}
.gg i {
    background-color: $backupYellow;
    margin-right: 5px;
}
.title span {
    margin-right: 36px;
}
.title {
    margin-bottom: 36px;

}
.chart {
    width: 100%;
    height: 195px;
    border: 1px solid red;
    margin-bottom: 13px;
}
.introduce p {
    line-height: 22px;
    padding-left: 30px;
}
</style>