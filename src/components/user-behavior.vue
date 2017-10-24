<style>
@import '../assets/css/reset.css';
.user-behavior{
	padding:0.2rem 0;
}
.title{
	line-height: 0.40rem;
	height: 0.4rem;
    font-size: 0.20rem;
    font-weight: bold;
    text-align: center;
}
.container{
	width:90%;
	margin:0.2rem auto;
}
.help-table{
	display: table;
    border: 0.01rem solid #e0e0e0;
    border-bottom: 0;
    border-right: 0;
    font-size: 0.14rem;
    border-collapse: separate;
}
.help-table tr th{
	background: #efeff1;
    height: 0.40rem;
    line-height: 0.4rem;
    color: #666;
    font-weight: normal;
    border-bottom: 0.01rem solid #e0e0e0;
    border-right: 0.01rem solid #e0e0e0;
}
.help-table tr td{
	border-right: 0.01rem solid #e0e0e0;
    border-bottom: 0.01rem solid #e0e0e0;
    font-size: 0.14rem;
    padding: 0.05rem 0;
}
.help-table tr td p{
	font-size:0.14rem;
	padding:0.1rem;
}
.text-center{
	text-align: center;
}
.hint {
	padding-top:0.2rem;
}
.hint p{
	height: 0.3rem;
	line-height: 0.30rem;
    font-size: 0.16rem;
    margin-top:0.1rem;
}
.hint ul{
	padding-left: 0.30rem;
	font-size: 0.14rem;
}
</style>

<template>
	<div class="user-behavior">
		<h2 class="title">爱投顾用户行为规范</h2>
		<div class="container">
			<table class="help-table" cellspacing="1">
            <tbody>
            	<tr>
                    <th colspan="2" style="width:20%">违规类型</th>
                    <th>违规行为（包括但不限于文字、图片）</th>
                    <th style="width:24%">处罚</th>
                </tr>
                <tr>
                    <td colspan="2" rowspan="6" class="text-center">政策法规类</td>
                    <td><p>在平台发布或传播违反我国《宪法》、《证券法》等其他国家法律法规、规章条例所确定的基本原则的内容；</p></td>
                    <td rowspan="6" valign="top">
                        <ul style="padding: 0 5px;">
                            <li>根据违规程度和造成影响做出以下处罚</li>
                            <li>删除违规言论</li>
                            <li>删除违规言论，禁言3天</li>
                            <li>删除违规言论，禁言30天</li>
                            <li>删除违规言论，永久禁言</li>
                            <li>违规信息至司法机关</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td><p>在平台发布或传播攻击或损坏国家政权、党和国家领导人、国家安全、民族及宗教政策的内容；</p></td>
                </tr>
                <tr>
                    <td><p>散布谣言，扰乱社会秩序，破坏社会稳定的内容；</p></td>
                </tr>
                <tr>
                    <td><p>在平台发布或传播散布暴力、血腥、淫秽色情等信息的内容；</p></td>
                </tr>
                <tr>
                    <td><p>侮辱或者诽谤他人，对他人或团体进行恶意攻击，侵害他人合法权益的内容；</p></td>
                </tr>
                <tr>
                    <td><p>含有各法律、行政法规禁止的其他内容。</p></td>
                </tr>
                <tr>
                    <td rowspan="14" class="text-center" style="width:10%;">爱投顾<br>平台类</td>
                    <td class="text-center">刷屏</td>
                    <td><p>在观点、直播室、问答等模块刷屏、反复发表与主题无关的评论，或反复发表相同评论内容；</p></td>
                    <td rowspan="10">
                        <ul style="padding: 0 0.05rem;">
                            <li>根据违规程度和造成影响做出以下处罚</li>
                            <li>删除违规言论</li>
                            <li>删除违规言论，禁言3天</li>
                            <li>删除违规言论，禁言30天</li>
                            <li>删除违规言论，永久禁言</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td class="text-center">公开或索要<br>联系方式</td>
                    <td><p>发布含有非金融界爱投顾官方客服的电话联系方式、银行帐号等内容；</p></td>
                </tr>
                <tr>
                    <td class="text-center">淫秽色情</td>
                    <td><p>发布涉嫌淫秽、色情、挑逗、侮辱、性虐等的言论；</p></td>
                </tr>
                <tr>
                    <td rowspan="2" class="text-center">侮辱、诋毁性言论</td>
                    <td><p>发布内容为辱骂、诋毁、侮辱性言论；</p></td>
                </tr>
                <tr>
                    <td><p>发布诋毁侮辱金融界爱投顾的负面内容，或同行业网站服务，变相诋毁金融界爱投顾的内容；</p></td>
                </tr>
                <tr>
                    <td rowspan="6" class="text-center">扰乱平台秩序</td>
                    <td><p>发布与金融界爱投顾无关的产品，包括不限于同类网站同类产品内容和宣传；</p></td>
                </tr>
                <tr>
                    <td><p>发布或负面评论包括时政事件、敏感政治事件、政治段子、重要领导人信息、特殊事件等；</p></td>
                </tr>
                <tr>
                    <td><p>在爱投顾平台通过直播间互动、观点评论以及问答等产品模块恶意捣乱的行为；</p></td>
                </tr>
                <tr>
                    <td><p>未经投顾/达人同意泄露投顾/达人付费产品的行为；</p></td>
                </tr>
                <tr>
                    <td><p>其他扰乱平台秩序的行为；</p></td>
                </tr>
                <tr>
                    <td><p>合买、倒卖金融界爱投顾平台任何付费产品的行为；</p></td>
                    <td><p>删除言论，永久禁言</p></td>
                </tr>
                <tr>
                    <td rowspan="2" class="text-center">用户名违规</td>
                    <td><p>用户账号头像、昵称、简介及发帖侵犯他人（包括自然人和法人）名誉权、肖像权、知识产权、商业机密等合法权益以及侵犯他人隐私；</p></td>
                    <td rowspan="3"><p>删除言论，永久禁言</p></td>
                </tr>
                <tr>
                    <td><p>用户账号昵称涉及联系方式（如QQ，微信号等），或带有引导性用语（如“加我”，“合买”等字眼）；</p></td>
                </tr>
                <tr>
                    <td rowspan="2" class="text-center">广告</td>
                    <td><p>发布含有广告性质的内容（包括其他网站网址，或以营利或变相营利为目的而进行的第三方聊天软件号码推广，如：QQ，QQ群，UC，YY，微博，微信等）。</p></td>
                </tr>
            </tbody>
        	</table>
			<div class="hint">
	        	<p>下述几种常见严重违规情况直接禁言处理:</p>
	        	<p>1）以下情况特别严重，永久封禁处理：</p>
	        	<ul>
	                <li>用户名含有联系方式且有广告嫌疑；</li>
	                <li>用户名侮辱他人；</li>
	                <li>广告营销；</li>
	                <li>合买、倒卖金融界爱投顾平台任意产品的行为；</li>
	                <li>违规用户小号继续违规；</li>
	                <li>专门账号进行政策法规类违规。</li>
	            </ul>
	            <p>2）以下情况严重，做封禁处理：</p>
	            <ul>
	                <li>用户间对骂；</li>
	                <li>各版块辱骂投顾；</li>
	                <li>同直播室一人以上公开、索要联系方式；</li>
	                <li>反复发布违规内容。</li>
	            </ul>
            </div>
		</div>
	</div>
</template>
<script>
export default{
	mounted () {
		document.title = '用户行为规范'
	}
}
</script>