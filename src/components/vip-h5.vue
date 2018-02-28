<style>
@import '../assets/plugins/swiper/slide.css';
.vip-h5 {
  box-sizing: border-box;
  position: relative;
  font-family: Microsoft Yahei, Helvetica, Hiragino Sans GB, WenQuanYi Micro Hei, sans-serif;
}
span,i,em,b,div{-webkit-tap-highlight-color: rgba(0,0,0,0);}
body, div, p, h1, h2, h3, h4, h5, h6, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, textarea, table, th, td,i { margin: 0; padding: 0;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;user-select:none; }
address, cite, em, i { font-style: normal; }
body { -webkit-appearance: none; background: #000; }
li { list-style: none; }
a { color: #fff; text-decoration: none;-webkit-tap-highlight-color: rgba(0,0,0,0); outline:none; }
a:hover{ text-decoration:none;}

img { vertical-align: top; border: 0; }
input[type="button"], input[type="submit"], input[type="reset"] { cursor: pointer; }
input { outline: none;  }
html, body { font:20px/1rem 'Microsoft Yahei'; color: #333;}
.clearfix:after { display: block; content: ''; clear: both; }
.fl { float: left; }
.fr { float: right; }
.bsbb { box-sizing: border-box; }
.hide { display: none !important; }
.show { display: block !important; }
body{ color:#333;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;-khtml-user-select:none;user-select:none;}


.tooltip{ position: absolute;right: 0.05rem;top: 0.03rem;line-height: .24rem;font-size: .2rem;border: 1px solid red; border-radius:0.04rem;padding: 0.01rem 0.02rem; background:#fff;color: #000; }
/*item1*/
.item {width:100%;height: 8rem;background: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_01.jpg?c) no-repeat center; background-size: 100% 100%;}
.item1 {position: relative;z-index: 2;}
.item1 span {position: absolute;width:1.2rem; height: 1.2rem;border-radius: 50%;cursor:pointer;}
.item1 .span1{top:7.24rem; left:0.22rem;}
.item1 .span2{top:5.6rem; left:1.1rem;}
.item1 .span3{top:5rem; left:3.1rem;}
.item1 .span4{top:5.4rem; right:1.2rem;}
.item1 .span5{top:7.2rem; right:0.22rem;}
.item1 span i{position: absolute;padding:.1rem .14rem;background:rgba(225,162,75,.38); color:#fdd8a4; font-size:.2rem; border-radius: 5px; line-height: .28rem;width:1.52rem; display: none;}
.item1 .span1 i{top:0rem;left:1rem;}
.item1 .span2 i{top:0.4rem;left:1rem;}
.item1 .span3 i{top:1rem;left:-0.3rem;}
.item1 .span4 i{top:1rem;left:-.28rem;}
.item1 .span5 i{top:0rem;left:-1.65rem;}
.item1 .cur i{ display: block;}
.item2{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_02.jpg?b);position: relative;    height: 1.1rem;
    background-size: 100% auto;
    background-position: 0 0;}
.item4{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_04.jpg);margin-top: -1rem;}
.item5{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_05.jpg);}
.item6{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_06.jpg?b);}
.item7{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_07.jpg?b); position: relative;}
.item8{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_08.jpg?b); }
.item9{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_09.jpg?b); }
.item10{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_10.jpg?b);}
.item11{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bg_11.jpg?b); height: 6.17rem;position: relative;}
.item12{background-image: url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5c.png?b); height:1.2rem; position: fixed;bottom:0;width:100%;left:0;z-index: 3;}
.item10 .in{ padding-top: 12.5rem;}
/* .item10 a{ display: block;width:10rem; height: 3rem;margin: 0 auto;} */
.item12 a{ float:right;width:2.2rem; height: 0.64rem; margin-right: 0.55rem;margin-top:0.18rem;}



.item3{background-image: url('../assets/images/vip-h5/item3bg.jpg');height: 12.4rem;position: relative; box-sizing: border-box; padding-top: 2.7rem;}
.item3-contanier div{
  width:6.84rem;
  margin:0.4rem auto;
  overflow: hidden;
}
.item3 a{
  float: left;
  display: block;
  width:2.1rem;
  height: 2.5rem;
  margin:0 0.09rem;
}
.item3-contanier div.ai{
  margin-top:3.45rem;
}
.item3-contanier div.ai a{
  margin-left:2.45rem;
}



#img{width:6.57rem; height:3.32rem;background:url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go0.jpg) no-repeat center center; z-index: 3; position: relative;background-size: 100% 100%;margin: -.3rem auto 0; }

/* .item2 .btngo{ position: absolute;top:4rem;right:2rem;width:5rem;} */
.item7 .btngo{ position: absolute;bottom:3.54rem;right:0.56rem;width:2rem;}
.item11 .btngo{ position: absolute;top:0.89rem;right:0.84rem;width:2.2rem;}
.msgbox{ margin-bottom: 1.2rem;background:url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5bt.jpg) no-repeat bottom ;background-size: 100% auto;padding-bottom: 0.4rem;}
.textmsg{width:6.76rem; margin:0 auto; padding-top: .28rem;}
.textmsg li{ margin-bottom: .24rem;}
.textmsg .t{width:3.2rem; line-height: 0.44rem; border-radius: .18rem; color: #eecd8c; text-align: center;color: #eecd8c;font-size:.24rem; background: #92682f; margin-bottom: .2rem;}
.textmsg .b{border:1px solid #92682f;border-radius: .18rem; padding:.28rem .32rem;color: #bc8334;font-size: .32rem; line-height: 0.4rem;}


/*弹层*/
.mask {display: none;  position: fixed; width: 100%; height: 100%; background: #000; opacity: .6; filter: alpha(opacity=60); top: 0; left: 0; z-index: 20; }
.layer{display:none;width: 7.04rem;height: 3.55rem;position: fixed;top: 50%;left: 50%;margin-top: -1.7748rem;margin-left: -3.48rem;z-index: 21;color: #000;animation: haha .6s cubic-bezier(1,-0.49, 0, 1.5); color: #97d2ee; background:url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/layh5.png?ab);background-size: 100% 100%;}
@keyframes haha {
from { transform: scale(6); opacity: 0; }
to { transform: scale(1); opacity: 1; }
}
.closebtn{ position:absolute;width:0.52rem; height:0.48rem; cursor:pointer;right: 0px;top: 0px;}



.layer ul{ padding-top: 1.84rem;}
.layer span{padding-left: .24rem; font-size: .3rem;color: #3d2601; padding-right: .1rem; line-height:0.4rem; float: left;}
.layer .in{ padding-top: 1.8rem;}
.layer li{ position: relative;}
.layer input{padding-left: .1rem; width:2.2rem;font-size:.24rem;color: #805e28; padding-right:.1rem; height: 0.4rem; float: left; border:1px solid #755e48; border-radius: 1px;  background:rgba(255,255,255,.26);}
.layer a{width: 2.4rem;height: 0.6rem;margin: .1rem auto;display: block;}
.layer_success{background-image:url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/layh52.png);height:7.675rem; margin-top: -3.837rem;}
.btngo{width: 2.4rem;height: 0.6rem; display: block;}


.swiper-container {width:6.57rem; height:3.32rem; z-index: 3; position: relative;background-size: 100% 100%;margin: -.12rem auto 0;}
.swiper-slide .main-img {width: 100%;height: 3.32rem;}

.item7 .btn{ position: absolute; top:-2rem;left:0.44rem;}
.item7 .btn span{ display: block;cursor: pointer;margin-bottom: .5rem;width:5rem;float: left; height: 1.8rem; margin-right: .8rem;}

#pagination {position: absolute; top:-2rem;left:0.44rem;}
#pagination .swiper-pagination-bullet {display: block;cursor: pointer;margin-bottom: .2rem;width:2rem;float: left; height: 0.72rem; margin-right: .32rem;border-radius: 0;background:none;}
#pagination .swiper-pagination-bullet:nth-child(4){ margin-left:1.2rem;}




.h5b{width:5rem; height: 1.54rem;background:url(http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/h5b.png) no-repeat;background-size: 100% 100%;margin:0 auto;}
.h5b a{width:2rem; height: 1.54rem;}
.msgbox img{width:6.76rem; display: block;margin:.2rem auto;}


</style>

<template>
<div class="vip-h5">
  <div class="item item1">
    <span class="span1" id="span1"><i>趋势风向标帮您把控仓位，热点跟踪器狙击热点动态</i></span>
    <span class="span2" id="span2"><i>7小时在线直播+电话1对1，核心内参+解套方案，让您舒心更放心</i></span>
    <span class="span3" id="span3"><i>多角度选取当前最优策略，出票确认单专业筛选认证</i></span>
    <span class="span4" id="span4"><i>全程跟踪个股买卖策略，实时指导异动行情交易方法</i></span>
    <span class="span5" id="span5"><i>资产配置实现高能风报比，智能工具让投资更加便捷</i></span>
  </div>
  <div class="item item2">
    <!-- <a href="javascript:;" class="btngo"></a> -->
  </div>
  <div class="item item3">
    <div v-if="type===0" class="item3-contanier">
      <div class="hm">
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailApp.jspa?tgid=160405010038945906"></a>
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailApp.jspa?tgid=141124010055108034"></a>
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailApp.jspa?tgid=161226010027925289"></a>
      </div>
      <div class="ai">
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailApp.jspa?tgid=160127010097561172"></a>
      </div>
    </div>
    <div v-if="type==='1'" class="item3-contanier">
      <div class="hm">
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailAppForYG.jspa?tgid=160128010055553011"></a>
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailAppForYG.jspa?tgid=160927010014740301"></a>
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailAppForYG.jspa?tgid=141210010098595802"></a>
      </div>
      <div class="ai">
        <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailAppForYG.jspa?tgid=160420010055922232"></a>
      </div>
    </div>
  </div>
  <div class="item item4"></div>
  <div class="item item5"></div>
  <div class="item item6"></div>
  <div class="item item7">
    <a href="javascript:;" class="btngo"></a>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go0.jpg" class="main-img"></div>
        <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go1.jpg" class="main-img"></div>
        <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go2.jpg" class="main-img"></div>
        <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go3.jpg" class="main-img"></div>
        <div class="swiper-slide"><img src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/go4.jpg" class="main-img"></div>
      </div>
    </div>
    <div class="swiper-pagination" id="pagination"></div>
  </div>
  <div class="item item8"></div>
  <div class="item item9"></div>
  <div class="item item10"></div>
  <div class="item item11"><a href="javascript:;" class="btngo"></a></div>
  <div class="msgbox">
    <img  src="http://i0.jrjimg.cn/zqt-red-1000/focus/focus20170711vip/zhengshu.png">
    <ul class="textmsg">
        <li>
            <div class="t">Z量化智能金融团队介绍</div>
            <div class="b">Z量化智能金融团队拥有国内首家专注于智能金融研究的博士后科研工作站，始终把握国际研发前沿趋势。研究团队成员均为具有北大、清华、香港大学等国内外顶尖名校背景、及拥有全球知名投行经验的博士、硕士。团队目前共有12名研究员，全部为硕士以上学历，其中博士后研究员4人。部门研究成果突出，在资产配置、技术分析、事件驱动等领域均有重要成果，并输出至公司业务线，提供算法与策略支持。</div>
        </li>
        <li>
            <div class="t">Z量化专业投顾团队介绍</div>
            <div class="b">金融界投顾团队，皆由从事股票领域工作数十年、实战经验丰富的投资顾问组成，团队成员全部拥有证券执业资质，曾多次应邀出席业界研讨会及接受新闻媒体访问，其实力早已获得专业领域的普遍认同，团队以让投资更简单为使命，协助投资者创造价值为核心，在准确把握行情趋势的基础上，实现无微不至的贴身服务。</div>
        </li>
        <li>
            <div class="t">金融界研究院团队介绍</div>
            <div class="b">金融界网站研究院，是中国金融在线集团旗下研究机构，致力于研究中国宏观经济和资本市场，擅长对资讯、大数据以及市场交易者行为进行挖掘。团队成员80%以上拥有研究生及以上学历，具备证券公司、公募基金、私募机构等行业从业经历。</div>
        </li>
    </ul>
    <div v-if="type===0" class="h5b clearfix links1">
      <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailApp.jspa?tgid=160405010038945906" class="fl"></a>
      <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailApp.jspa?tgid=160127010097561172"  class="fr h5ba2"></a>
    </div>
    <div v-if="type==='1'" class="h5b clearfix links1">
      <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailAppForYG.jspa?tgid=160128010055553011" class="fl"></a>
      <a href="http://itougu.jrj.com.cn/xlive/web/vipDetailAppForYG.jspa?tgid=160420010055922232"  class="fr h5ba2"></a>
    </div>
  </div>
  <div class="item item12"><a href="javascript:;" class="btngo" ></a></div>
  <div class="mask"></div>
  <!--抽中-->
  <div class="layer layer_cz">
      <i class="closebtn"></i>
      <ul class="clearfix">
          <li class="clearfix userName fl">
              <span>姓名</span>
              <input type="text" name="userName" id="userName" maxlength="10">
          </li>
          <li class="clearfix phone fl">
              <span>手机</span>
              <input type="text" name="phone"  id="phone" maxlength="11">
          </li>
      </ul>
      <a href="javascript:;" class="btn" ></a>
  </div>

  <div class="layer layer_success">
      <i class="closebtn"></i>
  </div>
</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
const Swiper = require('../assets/plugins/swiper/slide.js')

export default {
  data() {
    return {
      swiper:null,
      type:this.getQueryString('type') ? this.getQueryString('type'):0
    }
  },
  beforecreated() {

  },
  created() {
    document.title = '金融界首推—智能投顾工作室'
  },
  mounted() {
    this.swiperRun()
    this.mouseover()
    this.openMask()
    this.closeMask()
  },
  filters: {

  },
  methods: {
    getQueryString (name,chinese) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
			if (chinese) {
				if (r != null) return decodeURI(r[2])
			}else{
				if (r != null) return unescape(r[2])
			}
      return null
    },
    swiperRun(){
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        paginationClickable: true,autoplay: 2000,loop:true,
        grabCursor:true,
        spaceBetween: 0,
        pagination: '.swiper-pagination',
        autoplayDisableOnInteraction : false
      });
    },
    mouseover(){
      var spanl='span';
       for(var i=1; i<6; i++){
         var a=spanl+i;
         (function(a){
             document.getElementById(a).ontouchstart=function(){
                this.className=a+' cur';
                return false;
             }
             document.getElementById(a).ontouchend=function(){
                this.className=a;
             }
         })(a);
       }
    },
    openMask(){
      // 小提示框
      var tooltip;
      var showTooltip = function(el, text){
          tooltip = $('<i class="tooltip">'+text+'</i>');
          $('.tooltip').removeClass('show');
          if (el.find('i').length === 0) {
              el.append(tooltip);
          }else{
              el.find('i').text(text);
          }
          setTimeout(function () {
              el.find('i').remove();
          }, 1000);

      };
      $('.btngo').unbind().bind('click',function(){
          $('.mask,.layer_cz').show();
          $('.layer_cz a').unbind().click(function(){
              var userName = $('#userName').val();
             var phone = $('#phone').val();

             if(userName===''){
                 showTooltip($('.userName'), '姓名不能为空！');
                 return;
             }else{
                  var regname=/^[\u4e00-\u9fa5]+$/gi;
                  if(!regname.test(userName)){
                      showTooltip($('.userName'), '请输入中文名');
                      return;
                  }
             }
             if(phone===''){
                  showTooltip($('.phone'), '手机号不能为空！');
                  return;
             }else{
                  var reg = /^0?1[3|4|5|7|8][0-9]\d{8}$/;
                  if (!reg.test(phone)) {
                        showTooltip($('.phone'), '手机号输入不正确！');
                        return;
                  }
             }
             $.ajax({
                 url: 'http://activity.jrj.com.cn/activity/record/web',
                 dataType: 'jsonp',
                 data: {
                   aid: '812732510585339904',
                   activityUserName: userName,
                   mobile: phone,
                   bizsource: 'mSite',
                   tgqdcode: 'BW5PKUPE',
                   source: '4'
                 },
                 success: function (data) {
                   if (data.retcode === 0) {
                       $('.layer_cz').hide();
                       $('#userName').val('');
                       $('#phone').val('');
                       $('.mask,.layer_success').show();
                   } else {
                     alert(data.msg);
                   }
                 },
                 error: function (v) {
                   alert('网络异常！')
                 }
               })
          });
      });
    },
    closeMask(){
      $('.closebtn').each(function(){
          $(this).click(function(){
              $('.mask,.layer').hide();
          });
      });
    }
  }
}
</script>
