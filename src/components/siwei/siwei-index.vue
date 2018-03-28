<style lang="scss" scoped>
@import '../../assets/css/base.css';

.app {
    width: 100%;
    height: 100%;
}

.siweiIndex {
    width: 100%;
    height: 100%;
    min-height: 690px;
    min-width: 1190px;
    font-size: 12px;
    color: #c9d0d7;
    background: #0C0D0E;
    box-sizing: border-box;
    margin: 3px 0;
    position: relative;
    .con {
        position: absolute;
        left: 0;
        right: 0;
        top: 26px;
        bottom: 0;
    }
}

.indexNav {
    list-style: none;
    overflow: hidden;
    li {
        float: left;
        background: #23282E;
        border: 1px solid #525A66;
        box-sizing: border-box;
        width: 70px;
        height: 23px;
        line-height: 23px;
        margin-right: 3px;
        text-align: center;
        cursor: pointer;

        a {
            color: #c9d0d7;
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
  <ul v-z3-nav="active" class="indexNav">
    <li v-for="item in ulsText">
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
          path: ctx + '/siweiIndex/dingpan'
        },
        {
          text: '涨停股',
          path: ctx + '/siweiIndex/ztg'

        },
        {
          text: '炸板股',
          path: ctx + '/siweiIndex/zbg'
        },
        {
          text: '强势股',
          path: '',
          name: ''
        },
        {
          text: '跌停股',
          path: '',
          name: ''
        },
        {
          text: '新股',
          path: '',
          name: ''
        },
        {
          text: '次新股',
          path: '',
          name: ''
        },
        {
          text: '昨日跌停',
          path: '',
          name: ''
        },
        {
          text: '更多',
          path: '',
          name: ''
        }
      ]
    }
  },
  methods: {}

}
</script>
