<style lang="scss" scoped>
    @import '../assets/css/base.css';
    .fundPoolRelevance{ position: relative; padding-left: 113px; padding-top: 38px; border:1px solid #e6e6e6;  margin-left:40px; margin-top:20px;}
    .fundPoolRelevance .line{ position: absolute;width: 7px;height:100%; background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(35, 136, 218));left:-130px;}
    .fundPoolRelevance .line i{ position: absolute; left:-15px;font-size: 14px;}
    .fundPoolRelevance .line i:nth-child(1){top:0;}
    .fundPoolRelevance .line i:nth-child(2){bottom:0;}
    .tablebox{position: relative;}
    table{border-collapse: collapse;}
    table td{ position: relative;border:1px solid #e6e6e6;}
    table td>div{width:46px; height: 38px; line-height: 38px;text-align: center; position:relative;}
    table td i{ position: absolute;top:0;left:0;width:100%;height: 100%;background: rgb(12,136,218)}
    table td span{ position: absolute;top:0;left:0;width:100%;height: 100%;}
    .hd{ position: absolute;top:0;left:114px;}
    .hd span{float:left; width:46px;height:38px; text-align: center;color:#fff; line-height: 38px;background: red;border-right:1px solid #e6e6e6;}
    .lhd{ position: absolute;top:39px;left:0;width:114px;}
    .lhd div{height: 38px;font-size: 14px;border-bottom: 1px solid #e6e6e6; position: relative;}
    .lhd div *{ display: block;color:#fff; line-height: 19px; margin-left:20px;}
    .lhd div span{ position: absolute;top:10px;left:5px; font-size: 18px;margin-left: 0;}
</style>
<template>
    <div class="fundPoolRelevance">

      <div class="hd">
          <span v-for="(item,index) in relevancedata.fundInfoList" :fundType="item.fundType" :style="{'background':colorarr[item.fundType]}"><i>{{index}}</i></span>
      </div>
      <div class="lhd">
        <div v-for="(item,index) in relevancedata.fundInfoList" :fundType="item.fundType" :style="{'background':colorarr[item.fundType]}"><span v-if="index<9">{{index}}</span><i>{{item.symbol}}</i><i>{{item.name}}</i></div>
      </div>
      <div class="tablebox">
        <span class="line"><i>正相关</i><i>负相关</i></span>
        <table>
          <tr v-for="(item,index) in relevancedata.relevance">
            <td v-for="(item2,index2) in item" ><div v-on:mouseenter="dataDetails($event)" v-on:mouseleave="hiddenDetail($event)" :dataindexw="index" :dataindexi="index2"><i :style="{'opacity':bgcolor(item2)}"></i><span>{{item2 | floatfn}}</span></div></td>
          </tr>
        </table>
      </div>

    </div>
</template>
<script>
    export default{
      props: ['relevancedata'],
      data () {
        return {
          colorarr: ['yellow', 'yellow', 'yellow', '#7cbe39', '#cc5159', '#3a71a3', '#cf4b8d', '#c96b37', 'yellow', 'yellow', 'yellow', '#7e58af', '#35a392'],
          creatediv: ''
        }
      },
      filters: {
        floatfn (v) {
          return (v / 1).toFixed(2)
        }
      },
      methods: {
        bgcolor (v) {
          var n = 0.5 - (v / 2)
          return n
        },
        dataDetails (v) {
          var dataindexw = v.currentTarget.getAttribute('dataindexw')
          var dataindexi = v.currentTarget.getAttribute('dataindexi')

          this.creatediv = document.createElement('div')             // 创建一个div
          this.creatediv.style.cssText = 'width:250px;background:rgba(0,0,0,.3);text-align:center;left:50%;margin-left:-125px;position:absolute;top:-50px; z-index:2;line-height: 20px;font-size: 14px;padding: 5px;color:#fff;'
          var o1 = this.relevancedata.fundInfoList[dataindexw]
          var o2 = this.relevancedata.fundInfoList[dataindexi]
          this.creatediv.innerHTML = o1.name + ' (' + o1.symbol + ')' + '与' + o2.name + ' (' + o2.symbol + ')' + '的相关性比较'
          v.currentTarget.appendChild(this.creatediv)            // 在div内创建一个span
        },
        hiddenDetail (v) {
          v.currentTarget.removeChild(this.creatediv)
        }
      },
      mounted () {
      }
    }
</script>
