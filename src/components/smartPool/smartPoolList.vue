<template>
  <div id="smartPoolList">
    <div class="top clearfix">
      <ul class="navList fl">
        <li :class="{'active': selectActive == 1}" @click='selectActive = 1'>自建基金池</li>
        <li :class="{'active': selectActive == 2}" @click='selectActive = 2'>智能基金池</li>
      </ul>
      <p class="fr">温馨提示：智能基金池为系统创建，如基金池中出现未代销基金，则基金池及关联组合失效，可删除。</p>
    </div>
    <div>
      <table class="table tc">
          <tr>
            <th v-for="theader in theaders">{{theader}}</th>
          </tr>
          <tr v-for="item in smartPoolList">
            <td :class='{blue:item.userByStrategy == 1}'>[{{item.poolName}}]</td>
            <td>{{item.fundNum | fundNum('只')}}</td>
            <td>{{item.createTime}}</td>
            <td>{{item.updateTime}}</td>
            <td><span v-for="fsiList in item.fundStrategyInfoList" :class='{blue:item.userByStrategy == 1}'>[{{fsiList.name}}]</span></td>
            <td>
              <a href="javascript:;" class="button copy_button" @click='showDialog'>复制</a>
            </td>
          </tr>
      </table>
    </div>
    <SmartPoolListDialog v-if="show"  @close='close' @dialogOkFn ='save'></SmartPoolListDialog>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { mapState } from 'vuex'
  import { mapGetters } from 'vuex'
  import SmartPoolListDialog from '../../components/smartPool/smartPoolListDialog'
  export default{
    data () {
      return {
        theaders: ['名称', '基金数(只)', '创建时间', '修改时间', '组合关联', '操作'],
        selectActive: 2,
        show: false,
        isRecommend: 0,
        userId: '3dce11a5-7db5-42a8-b2d0-81cb70dc10dd',
        orgCode: '200180365'
      }
    },
    components: {
      SmartPoolListDialog
    },
    mounted () {
      this.$store.dispatch('getSmartPoolList', { isRecommend: this.isRecommend, userId: this.userId, orgCode: this.orgCode })
    },
    computed: {
      ...mapState([
        'smartPoolList'
      ]),
      ...mapGetters({
        smartPoolList: 'smartPoolList'
      })
    },
    methods: {
      showDialog () {
        this.show = true
      },
      close () {
        this.show = false
      },
      save () {
        alert('save')
        this.show = false
      }
    }
  }
  Vue.filter('fundNum', function (value, type) {
    return value + type
  })
</script>
<style scoped lang="scss">
  @import '../../assets/common/variable.scss';
  @import '../../assets/css/reset.css';
  @import '../../assets/css/base.css';
  @mixin border_radius($num){-webkit-border-radius: $num;-moz-border-radius: $num;border-radius: $num;}
  .app>*{
    width: auto;
    position: static;
    text-align: left;
  }
  #smartPoolList{
    background-color: #fff;
    font-size: 12px;
    color: #191919;
    padding: 10px;
    .top{
      font-size: $fontSize12;
      height: 23px;
      line-height: 23px;
      margin-bottom: 15px;
      p{
        color: #9099a9;
      }
    }
  }
  .navList{
    border: 1px solid #2388da;
    @include  border_radius(3px);
    li{
      float: left;
      color: #2388da;
      padding: 0 20px;
      cursor: pointer;
      &.active{
        color:#fff;
        background-color: #2388da;
      }
    }
  }
  .table{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    th{
      font-weight: normal;
      color: #666;
      height: 30px;
      line-height: 30px;
      background-color: #f2f2f2;
    }
    td{
      color: $colorFontTheme;
      height: 40px;
      border-bottom: 1px solid $colorBorder;
      a{
        color: #666;
      }
      .button{
        display: inline-block;
        width:72px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        border: 1px solid #ccc;
        @include border_radius(3px);
      }
      .copy_button{
        border-color: #2388da;
        color: #2388da;
      }
      &.blue{
        color: #2388da;
      }
    }
    .blue{
      color: #2388da;
    }
  }
</style>
