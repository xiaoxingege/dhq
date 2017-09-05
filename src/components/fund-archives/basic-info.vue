<style lang="scss" scoped="">
    @import '../../assets/css/base.css';
    *{box-sizing: border-box;font-family: '微软雅黑';font-size:12px;}
    p{margin: 0px;}
    .c_up{color:#ff0000;}
    .c_down{color:#48a854;}
    .c_txt{color:#666;}
    .basic-info{padding: 0 10px;background-color: #fff;min-width: 1217px;}
    .basic-info-top{height:42px;border-bottom: 1px solid #ddd;padding-top: 15px;}
    .basic-info-top>div{display: inline-block;width: 50%;}
    .basic-info-top img{vertical-align: middle;margin-left: 15px;}
    .basic-info-bottom{padding-top: 10px;height:104px;padding-bottom: 30px;}
    .basic-info-bottom>div{display: inline-block;height:100%;}
    .basic-info-bottom>div>div{height:100%;display: inline-block;}
    .unit-jingzhi{width: 154px;border-right:1px solid #ddd;}
    .sum-jingzhi{width: 107px;}
</style>
<template>
    <div class="basic-info">
        <div class="basic-info-top clearfix">
            <div class="fl">
                <span>{{fundName}}</span>
                <span>{{fundType}}</span>
                <span>{{riskLevel}}</span>
                <div class="lable-info">

                </div>
            </div>
            <div class="fr tr">
                <img src="../../assets/images/fund/weChat.png">
                <img src="../../assets/images/fund/shortmessage.png">
            </div>
        </div>
        <div class="basic-info-bottom clearfix">
            <div class="bt-left fl">
                <div class="unit-jingzhi">
                    <span>单位净值({{this.getTime().substring(0,11)}})</span>
                    <span :class="unitNet>0 ? 'c_up':'c_down'">{{unitNet}}</span>
                    <span :class="chgPct>0 ? 'c_up':'c_down'">{{chgPct}}</span>
                </div>
                <div class="sum-jingzhi">
                    <span>累计净值</span>
                    <span class="c_up">{{accumNet}}</span>
                </div>
            </div>
            <div class="bt-right fr">

            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
      data () {
        return {
          innerCode: '000001.CW',
          fundName: '',
          fundType: '',
          riskLevelArr: ['低风险', '中低风险', '中风险', '中高风险', '高风险'],
          unitNet: 0, // 单位净值
          chgPct: 0, // 单位净值涨跌幅
          accumNet: 0// 累计净值
        }
      },
      computed: {
        basicInfoData: function () {
          const basicInfoData = this.$store.state.funcArchives.basicInfo
          return basicInfoData
        }
      },
      methods: {
        initBasic: function () {
          this.$store.dispatch('funcArchives/getBasicInfo', { innerCode: this.innerCode })
                .then(() => {
                  this.fundName = this.basicInfoData.name + '(' + this.basicInfoData.symbol + ')'
                  this.fundType = this.basicInfoData.fundTypeName
                  this.riskLevel = this.riskLevelArr[this.basicInfoData.riskLevel - 1]
                  this.unitNet = this.basicInfoData.unitNet.toFixed(4)
                  this.chgPct = this.basicInfoData.chgPct.toFixed(2)
                  this.accumNet = this.basicInfoData.accumNet.toFixed(4)
                })
        },
        getTime: function () {
          const date = new Date()
          const seperator2 = ':'
          let month = date.getMonth() + 1
          let strDate = date.getDate()
          let strHour = date.getHours()
          let strMin = date.getMinutes()
          if (month >= 1 && month <= 9) {
            month = '0' + month
          }
          if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate
          }
          if (strHour >= 0 && strHour <= 9) {
            strHour = '0' + strHour
          }
          if (strMin >= 0 && strMin <= 9) {
            strMin = '0' + strMin
          }
          const currentDate = date.getFullYear() + '-' + month + '-' + strDate + ' ' +
                  strHour + seperator2 + strMin
          return currentDate
        }
      },
      mounted () {
        this.initBasic()
      }
    }
</script>
