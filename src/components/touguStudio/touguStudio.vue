<template>
  <div class="touguStudio">
      <div class="touguStudio-logol">
        <div class="item item1"></div>
        <div class="item item2">
            <div class="in">
                 <span class="span1">
                   <i>趋势风向标帮您把控仓位，热点跟踪器狙击热点动态</i>
                 </span>
                <span class="span2">
                   <i>7小时在线直播+电话1对1，核心内参+解套方案，让您舒心更放心</i>
                 </span> 
                 <span class="span3">
                   <i>多角度选取当前最优策略，出票确认单专业筛选认证</i>
                 </span>
                 <span class="span4">
                   <i>全程跟踪个股买卖策略，实时指导异动行情交易方法</i>
                 </span> 
                  <span class="span5">
                   <i>资产配置实现高能风报比，智能工具让投资更加便捷</i>
                 </span>              
            </div>
        </div>
        <div class="item3"></div>
        <div class="item4">
          <div class="item4-bh">
             <div class="itemBh-title"></div>
             <div class="itemBh-three">
                <div class="nn"></div>
                <div class="nn"></div>
                <div class="nn"></div>
             </div>
          </div>
          <div class="item4-ai">
             <div class="itemAi-title"></div>
             <div class="itemAi-two">
                <div class="nn"></div>
                <div class="nn"></div>
             </div>
          </div>
          <div class="item4-back"></div>
        </div>

      </div>
      <div class="rightNav">
           侧边导航条
      </div>
  </div>
</template>

<script>
import FiveStudio from 'components/touguStudio/fiveStudio'
export default{
  data:function(){
    
  },
  components: {
     FiveStudio
  }
}
</script>

<style>
@import '../../assets/css/base.css';

.touguStudio{
  width: 100%;
  min-width:1020px;
  height: auto;
  background-color: #000;
  position: relative;
}
.item{
  width: 100%;
}
.item1{
  height: 414px;
  background: url('../../assets/images/touguStudio/touguStudio01.jpg')  center no-repeat;
}
.item2{
  height: 427px;
  background: url('../../assets/images/touguStudio/touguStudio02.jpg') center no-repeat;
}
.item2 .in{
  position: relative;
  width: 789px;
  margin: 0 auto;
}
.item2 span{
  position:absolute;
  width: 118px;
  height: 118px;
  border-radius: 50%;
  cursor: pointer;
}
.item2 .span1{
  top: 273px;
  left: 15px;
}
.item2 .span2{
  top: 88px;
  left: 107px;
}
.item2 .span3{
  top: 22px;
  left: 42%;
}
.item2 .span4{
  top: 71px;
  right: 110px;
}
.item2 .span5{
  top: 270px;
  right: 10px;
}
.item2 span i{
  position: absolute;
  padding: 9px 9px;
  background: rgba(225,162,75,.38);
  color: #fdd8a4;
  font-size: 14px;
  border-radius: 10px;
  line-height: 22px;
  width: 112px;
  display: none;
}
.item2 .span1 i,.item2 .span2 i,.item2 .span3 i{
  bottom: 103px;
  right: 100px;
}
.item2 .span4 i,.item2 .span5 i{
  bottom: 103px;
  left: 100px;
}
.item2 span:hover i{
  display: block;
}
.item3{
  width: 100%;
  height: 47px;
  background: url('../../assets/images/touguStudio/touguStudio03.jpg')  center no-repeat;
}
.item4{
  height:387px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.item4 .item4-bh{
  width: 58.5%;
  height: 387px;
}
.item4 .item4-ai{
  width:37.5%;
  height:387px;
}
.item4 .item4-back{
  width: 4%;
  height: 387px;
}
.itemBh-title,.itemAi-title{
  width: 100%;
  height: 164px;
}
.itemBh-title{
  background: url('../../assets/images/touguStudio/bhStudio.jpg') no-repeat center;
}
.itemAi-title{
   background: url('../../assets/images/touguStudio/aiStudio.jpg') no-repeat center;
}
.itemBh-three,.itemAi-two{
  width: 100%;
  height: 223px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center
}
.rightNav{
  width: 100px;
  height: 100px;
  background-color: blue;
  position: fixed;
  top: 10px;
  right: 10px;
  display: none; 
}
</style>