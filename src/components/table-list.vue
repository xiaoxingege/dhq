<style lang="scss" scoped>
    .tableList{
        background: #fff;
        font-size:12px;
    }
    table{
        width:100%;
    }
    th{
        font-weight: normal;
        color:#7e7e7e;
    }
    td{
        color:#191919;
        text-align: center;
        height:28px;
        line-height: 28px;
    }
    tr:nth-child(n) td{
        color:#7e7e7e;
    }
    tr:nth-child(2n) td{
        color:#191919;
    }
</style>
<template>
    <div class="tableList">
        <table>
            <tr v-for="trItem in data">
                <td v-for="tdItem in trItem">{{tdItem}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default{
  props: ['data']
}
</script>
