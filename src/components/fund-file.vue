<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .buyInfo{
        border:1px solid #DBDBDB;
        width:376px;
        font-size: 12px;
        color:#616161;
    }
    .buyInfo .title{
        line-height: 30px;
        color:#626262;
        padding:0 15px;
        background: #EFEFEF;
        margin:0;
        font-weight:bold;
    }
    .fundFeature .main ul{
        padding:20px;
    }
    .fundFeature .main ul li{
        line-height: 24px;
    }
    .fundFeature .main ul li span,.exchrHld .main ul li span{
        display: inline-block;
        width:50%;
        text-align: center;
    }
    .exchrHld .main ul{
        padding:0 20px;
    }
    .exchrHld .main ul li{
        line-height: 30px;
    }
</style>
<template>
    <div class="clearfix">
        <div class="fl">
            <Fundbuyinfo></Fundbuyinfo>
        </div>
        <div class="fl buyInfo">
            <p class="title">散点图<span class="fr">近一年</span></p>
            <div>
                <Fundbubble></Fundbubble>
            </div>
        </div>
        <div class="fl buyInfo fundFeature">
            <p class="title">基金特色<span class="fr">{{date}}</span></p>
            <div class="main">
            <ul>
                <li v-for="(item,index) in fundFeatureData.reList">{{index+1}}、{{item}}</li>
            </ul>
            </div>
        </div> <!--基金特色-->
        <div class="fl buyInfo exchrHld">
            <p class="title">换手率</p>
            <div class="main">
                <ul>
                    <li style="border-bottom:1px solid #F0F0F0"><span>报告期</span><span>基金换手率</span></li>
                    <li v-for="item in exchrHldData"><span>{{item.endDate}}</span><span>{{item.exchr === null ? '--' : item.exchr}}</span></li>
                </ul>
            </div>
        </div> <!--换手率-->
    </div>
</template>
<script>
    import Fundbuyinfo from 'components/fund-buy-info'
    import Fundbubble from 'components/fund-bubble'

    export default{
      data () {
        return {

        }
      },
      components: {
        Fundbuyinfo,
        Fundbubble
      },
      computed: {
        fundFeatureData: function () {
          return this.$store.state.fundRecord.fundFeatureData
        },
        exchrHldData: function () {
          return this.$store.state.fundRecord.exchrHldData
        },
        date: function () {
          const time = new Date()
          const year = time.getFullYear()
          const month = time.getMonth() + 1
          const day = time.getDate()
          return year + '-' + month + '-' + day
        }

      },
      methods: {

      },
      mounted () {
        this.$store.dispatch('fundRecord/getFeatureData', { innerCode: '000001.CW' }).then(() => {

        })
        this.$store.dispatch('fundRecord/getExchrHldData', { innerCode: '000001.CW' }).then(() => {

        })
      }
    }
</script>
