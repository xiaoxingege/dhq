<style>
.link{
	margin-bottom: 20px;
}
.link a{
	font-size: 16px;
}
</style>

<template>
	<div class="ydzxDetail">
	<div class="yidian-header">
      <a href="http://m.jrj.com.cn/?channel=NXPZDH4ZY&tgqdcode=DZSBHER4">
        <img src="http://i0.jrjimg.cn/zqt-red-1000/focus/ydzx_20170526/img/logo.png" style="height: 24px;"/>
      </a>
    </div>
    <header>
      <h1 class="yidian-title">{{title}}</h1>
      <div class="yidian-info">
        <span>{{userName}}</span>
        <span>{{ctime}}</span>
        <a id="yidian-toggle-img">
        	<img v-bind:src="avator" alt="">
        </a>
      </div>
      <p class="yidian-source-title">{{title}}</p>
    </header>
    <article>
      <div id="yidian-content" class="yidian-content">
        <!-- #{正文内容，图片地址请使用alt_src代替src属性来提供图片地址，使用alt_width和alt_height属性来提供图片尺寸（可选）}
        #{图片说明请使用figcaption标签}
        #{视频请在video标签外使用<div class="video-content"></div>作为父节点，并设置preload="none"} -->
        
      </div>
      <p class="link">
      	<a v-bind:href='link'>
      		点击进入我的直播间>></a>
      </p>
    </article>
</div>
</template>

<script>
import jQuery from 'jquery'
window.jQuery = window.$ = jQuery
import 'whatwg-fetch'

export default {
	data () {
		return {
			detailId : this.getQueryString('detailId'),
			title:'',
			userName:'',
			ctime:0,
			avator:'',
			link:''
		}
	},
	beforecreated () {
	},
	created () {

	},
	mounted () {
		
		this.getMessage()
		this.aoto()

	},
	methods: {
		aoto(){
			var _hmt = _hmt || [];
			(function() {
			  var hm = document.createElement("script");
			  hm.src = "https://hm.baidu.com/hm.js?6192aee994b1917d6f855505ff585178";
			  var s = document.getElementsByTagName("script")[0]; 
			  s.parentNode.insertBefore(hm, s);
			})();
		},
		getQueryString (name) {
			var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
			var r = window.location.search.substr(1).match(reg)
			if (r != null) return unescape(r[2])
			return null
		},
		formatDate (now) {
			var year = now.getFullYear (); 
		    var month = now.getMonth ()+1; 
		    var date = now.getDate (); 
		    var hour=now.getHours (); 
		    var minute=now.getMinutes ();

		    if(month <= 9){
		      month = '0'+ month;
		    }
		    if(date <= 9){
		      date = '0'+date;
		    }
		    if(hour <= 9){
		      hour = '0'+hour;
		    }
		    if(minute <= 9){
		      minute = '0'+minute;
		    }
		    return year+'-'+month+'-'+date+' '+hour+':'+minute; 
		},
		getMessage:function(){
			$.ajax({
			   	url:'http://mapi.itougu.jrj.com.cn/wireless/view/detail/'+this.detailId+'.jspa',
			    type:'get',
			    cache : false,
			    dataType: 'jsonp',
			    jsonp: 'callback',
			    success:(data) => {
			    	this.title=data.title+'-金融界'
			    	document.title = this.title
			    	this.userName=data.userName
			    	var d = new Date(data.ctime);
			    	this.ctime=this.formatDate(d);
			    	console.log(data)
			    	this.avator=data.userInfo.headImage;
			    	$("#yidian-content").html(data.content)
			    	this.link='http://z.jrj.com.cn/?tgid='+data.userId+'&showVP=true&tgqdcode=DZSBHER4#!/'

			    },
			    error : function() {

			    }
		  	});
		}
	}
}
</script>
