<style lang="scss" scoped>
.tableList {
    background: #fff;
    font-size: 12px;
}
table {
    width: 100%;
}
th {
    font-weight: normal;
    color: #7e7e7e;
}
td {
    color: #191919;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
tr:nth-child(n) td {
    color: #7e7e7e;
}
tr:nth-child(2n) td {
    color: #191919;
}
.sellConditionWeb .tableList,
.tradeParamsWeb .tableList {
    background: #141518;
    font-size: 12px;
}
.choseStockWeb table tr:first-child,
.sellConditionWeb table tr:first-child {
    background: #23282F;
    color: #c9d0d7;
    border-bottom: none;
}
.choseStockWeb table tr:last-child td {
    color: #d3d9dd;
    border-bottom: 1px solid #1F2229;
}

.sellConditionWeb table tr td {
    color: #d3d9dd;
}
.tradeParamsWeb table tr:nth-child(n) td {
    color: #afb6bd;
}
.tradeParamsWeb table tr:nth-child(2n) td {
    color: #d3d9dd;
    font-size: 14px;
    border-bottom: 1px solid #1F2229;
    height: 36px;
}
.tradeParamsWeb table tr:last-child td {
    border-bottom: none;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 1217px) {
    .tableList {
        background: #fff;
        font-size: 0.18rem;
    }
    td {
        color: #191919;
        text-align: center;
        height: 0.4rem;
        line-height: 0.4rem;
    }
    .choseStock table tr:last-child {
        font-size: 0.24rem;
    }
    .sellCondition div:first-child table tr:first-child td {
        background: #FFF6F5;
        color: #ff4c4c;
    }
    .sellCondition div:last-child table tr:first-child td {
        background: #F5FAFF;
        color: #3996f2;
    }
}
</style>
<template>
<div class="tableList">
  <table cellspacing="0" cellpadding="0">
    <tr v-for="trItem in data">
      <td v-for="tdItem in trItem">{{tdItem}}</td>
    </tr>
  </table>
</div>
</template>
<script>
export default {
  props: ['data'],
  mounted () {}
}
</script>
