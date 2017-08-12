<style lang="scss" scoped="">
    .news{
        color:#191919;
        padding-top: 50px;
        font-family: "宋体";
        font-size:12px;
        text-align: left;
    }
    .newTitle{
        text-align: center;
        font-size: 14px;
        font-weight: bold;
    }
    .newMain{
        line-height: 20px;
        text-indent: 2em;
    }
    .newDetail{
        text-align: center;
    }
    .newDetail span,.newDetail a{
        display: inline-block;
        height:14px;
        line-height:14px;
    }
    .borderR{
        border-right: 1px solid #181818;
        padding-right: 20px;
    }
    .newsDiv,.reportDiv{
        width:850px;
        margin:0 auto;
    }
    .reportDownload{
        margin-top: 50px;
    }
    .reportTime{
        margin: 0 75px;
    }
    .moreNews{
        display: block;
        margin-top: 50px;
        margin-bottom: 25px;
    }
    .moreNewsList li{
        height:27px;
        line-height: 27px;
        list-style: disc;
        color:#2388da;
        position: relative;
        left:15px;
    }
    a{
        color:#2388da;
    }
    a:hover{
        text-decoration: underline;
        cursor: pointer;
    }
    .ml-15{
        margin-left:15px;
    }
    .mr-15{
        margin-right:15px;
    }
    .notice{
        margin-left: 30px;
        color:#666;
    }
</style>
<template>
<div class="news">
    <div v-if="this.type === 'news'" class="newsDiv">
        <p class="newTitle">{{result.news.title}}</p>
    <div class="newDetail">
        <span class="borderR">{{result.news.createTime}}</span>
        <span class="borderR ml-15">来源：{{result.news.srcName}}</span>
        <span v-if="result.equityNews.length!==0" class="ml-15">相关股票：<span class="mr-15" v-for="item in result.equityNews"><a href="">{{item.name}} [{{item.innerCode}}]</a></span></span>
        <span v-if="result.topicNews.length!==0" class="ml-15">相关主题：<span class="mr-15" v-for="item in result.topicNews"><a href="">{{item.topicName}} [{{item.topicCode}}]</a></span></span>
    </div>
    <div class="newMain" v-html="reformatNewsContent" ></div>
    <span class="moreNews">更多相关资讯</span>
    <ul class="moreNewsList"  v-for="item in this.moreInfor">
        <li value="item.newsId"><router-link :to="{name:'detailPages' , params:{ id : item.newsId, detailType:'news'}}">{{item.title}}</router-link></li>
    </ul>
    </div>
    <div v-if="this.type === 'report'" class="reportDiv">
        <p class="newTitle">{{result.title}}</p>
        <div class="newDetail">
            <span>研报类型：{{result.resType}}</span>
            <span class="reportTime">发布机构：{{result.srcName}}</span>
            <span>发布时间：{{result.declareDate}}</span>
        </div>
        <div class="newMain" v-html="reformatReportContent" ></div>
        <p class="reportDownload">
            阅读附件全文请下载：
            <a ref="downReport" :id=result.resId href="">{{result.title}}</a>
            <span class="notice" v-if="!this.$store.state.zhikuanDetailPages.isReportCanDown">该研报暂不提供下载</span>
        </p>
    </div>
</div>

</template>
<script>
    export default{
      data () {
        return {
          type: this.$route.params.detailType,
          moreInfor: null
        }
      },
      computed: {
        result: function () {
          return this.$store.state.zhikuanDetailPages.dataList[this.type]
        },
        reformatNewsContent: function () {
          const content = this.result.news.content.split('\n')
          let con = ''
          content.forEach((p) => {
            con += '<p>' + p + '</p>'
          })
          return con
        },
        reformatReportContent: function () {
          const content = this.result.summary.split('\n')
          let con = ''
          content.forEach((p) => {
            con += '<p>' + p + '</p>'
          })
          return con
        },
        urlId: function () { return this.$route.params.id }
      },
      watch: {
        urlId: function () {
          this.getDetailPages()
        }
      },
      methods: {
        getDetailPages () {
          debugger
          const id = this.$route.params.id
          const detailType = this.$route.params.detailType
          this.$store.dispatch('zhikuanDetailPages/getDetailPages', { id, detailType }).then(() => {
            if (this.result.topicNews.length === 0) {
              const innerCode = this.$store.state.zhikuanDetailPages.dataList[this.type].equityNews[0].innerCode
              this.$store.dispatch('zhikuanDetailPages/getInforRelate', { id, innerCode }).then(() => {
                this.moreInfor = this.$store.state.zhikuanDetailPages.moreData
              })
            }
            if (this.result.equityNews.length === 0) {
              const topicCode = this.$store.state.zhikuanDetailPages.dataList[this.type].topicNews[0].topicCode
              this.$store.dispatch('zhikuanDetailPages/getTopicRelate', { topicCode }).then(() => {
                this.moreInfor = this.$store.state.zhikuanDetailPages.moreData
              })
            }
          })
          if (detailType === 'report') {
            this.$store.dispatch('zhikuanDetailPages/checkDownReport', { id }).then(() => {
              if (this.$store.state.zhikuanDetailPages.isReportCanDown) {
                this.$refs.downReport.href = `http://www.z3quant.com/openapi/report/downReportFile/${id}.shtml`
              } else {
                this.$refs.downReport.href = ''
              }
            })
          }
        }

      },
      mounted () {
        this.getDetailPages()
  }
    }
</script>
