<style lang="scss" scoped>
@import '../../assets/css/base.css';

.portrait-custom {
    width: 100%;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;

    color: #c9d0d7;
    font-size: 12px;
}

.customInfo {
    width: 100%;
    background: #141518;
}

.customInfo table {
    width: 100%;
}

.customInfo table tr td {
    height: 30px;
    text-align: center;
    border-top: 1px solid #23272c;
    border-left: 1px solid #23272c;
}
.customInfo table tr td:last-child {
    border-right: 1px solid #23272c;
}
.customInfo table tr:last-child td {
    border-bottom: 1px solid #23272c;
}

.customTag-header {
    padding-top: 10px;
}

.monthTag {
    height: 30px;
    width: 147px;
    border: 1px solid #23272c;
    border-radius: 5px;
}

.customTag .tags li {
    color: #7D8BA1;
    padding: 0 10px;
    line-height: 20px;
    border: 1px solid #7D8BA1;
    border-radius: 3px;
    float: left;
    margin-right: 15px;
    margin-top: 10px;
}

.abilityAnaly {
    margin-top: 3px;
    background: #141518;
}
</style>
<template>
<div class="portrait-custom">
  <div class="customInfo">
    <table cellpadding="0" cellspacing="0">
      <tr>
        <td>资金账号</td>
        <td>63510246</td>
        <td>本户持仓比</td>
        <td>32%</td>
        <td>交易次数</td>
        <td>1245(近3月)</td>
      </tr>
      <tr>
        <td>姓名</td>
        <td>王小丫</td>
        <td>资产分级</td>
        <td>低净值群体</td>
        <td>活跃度</td>
        <td>重要发展客户</td>
      </tr>
      <tr>
        <td>性别</td>
        <td>女</td>
        <td>属地</td>
        <td>北京</td>
        <td>交易能力</td>
        <td>青铜级</td>
      </tr>
      <tr>
        <td>手机</td>
        <td>138-0987-3567</td>
        <td>开户时间</td>
        <td>2016.11.12</td>
        <td>关注度</td>
        <td></td>
      </tr>

    </table>
    <div class="customTag">
      <div class="customTag-header clearfix">
        <p class="fl" style="line-height: 30px;">客户标签</p>
        <div class="fr">
          <p class="fl mr-15" style="line-height: 30px;">标签月份</p>
          <span class="monthTag fr">

                    </span>
        </div>
      </div>
      <ul class="tags clearfix">
        <li v-for="item in tagArr">{{item}}</li>
      </ul>
    </div>
  </div>
  <div class="abilityAnaly">
    <p>能力分析</p>
    <div></div>
    <p>客户选股能力较强，但仓控、择时能力较弱，建议投顾重点给予客户仓位控制以及交易时点的相关信息和指导，提高客户的盈利能力。</p>
  </div>
  <div></div>
</div>
</template>
<script>
export default {
  data() {
    return {
      tagArr: ['行业集中高度', '个人集中高度', '偏好beta值高的个股', '偏好好市值的个股', '偏好高盈利的个股', '喜欢交易化工行业', '特别关注化学制品', '客户资金周转率偏高', '偏好低市净率的个股', '个股的市盈率偏好适中']
    }
  }
}
</script>