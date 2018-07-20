<style lang="scss">
@import '../../assets/css/base.css';

.app,
body,
html {
    width: 100%;
    height: 100%;
}
.siweiIndex {
    width: 100%;
    height: 100%;
    /*min-height: 690px;*/
    min-width: 1190px;
    font-size: 12px;
    color: #c9d0d7;
    background: #0C0D0E;
    box-sizing: border-box;
    padding-left: 10px;
    padding-bottom: 10px;
    position: relative;
    .con {
        position: absolute;
        left: 10px;
        right: 0;
        top: 29px;
        bottom: 10px;
    }
}

.indexNav {
    list-style: none;
    padding: 3px 0;
    li {
        float: left;
        background: #23282E;
        border: 1px solid #525A66;
        box-sizing: border-box;
        width: 70px;
        height: 23px;
        line-height: 23px;
        margin-right: 3px;
        cursor: pointer;

        a {
            display: inline-block;
            width: 100%;
            height: 100%;
            color: #c9d0d7;
            text-align: center;
            text-decoration: none;
        }

    }
    li.active {
        background: #0084F2;
        border: 1px solid #0084F2;

        a {
            background: #0084F2;
        }
    }
}
</style>
<template>
<div class="siweiIndex">
  <ul v-z3-nav="active" class="indexNav clearfix">
    <li v-for="(item,index) in ulsText" :class="routeName === item.name ? 'active':''">
      <router-link :to="item.path">{{item.text}}</router-link>
    </li>
  </ul>
  <div class="con">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
import {
  ctx
} from '../../z3tougu/config'
export default {
  data() {
    return {
      ulsText: [{
          text: '盯盘',
          path: ctx + '/siweiIndex/dingpan',
          name: 'dingpan'
        },
        {
          text: '涨停股',
          path: ctx + '/siweiIndex/ztg',
          name: 'ztg'

        },
        {
          text: '炸板股',
          path: ctx + '/siweiIndex/zbg',
          name: 'zbg'
        },
        {
          text: '跌停股',
          path: ctx + '/siweiIndex/dtg',
          name: 'dtg'
        },
        {
            text: '强势股',
            path: ctx + '/siweiIndex/qsg',
            name: 'qsg'
        },
        {
          text: '新股',
          path: ctx + '/siweiIndex/new',
          name: 'new'
        },
        {
          text: '次新股',
          path: ctx + '/siweiIndex/cxg',
          name: 'cxg'
        },
        {
          text: '昨日涨停',
          path: ctx + '/siweiIndex/zrzt',
          name: 'zrzt'
        },
        {
          text: '更多',
          path: ctx + '/siwei',
          name: 'bubbles'
        }
      ],
      routeName: this.$route.name
    }
  },
  methods: {}

}
</script>
