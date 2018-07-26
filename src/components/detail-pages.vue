<style lang="scss">
@import '../assets/css/base.css';

.app,
body,
html {
    height: 100%;
}

.news {
    min-height: 100%;
}

.news {
    font-size: 12px;
    text-align: left;
    background: #fff;
}

.newTitle {
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #666;
    padding-top: 50px;

}

.newMain {
    line-height: 20px;
    text-indent: 2em;
    color: #666;
}

.newMain p {
    margin-bottom: 20px;
}

.newDetail {
    text-align: center;
    margin: 20px 0;
    color: #666;
}

.newDetail a,
.newDetail span {
    display: inline-block;
    height: 14px;
    line-height: 14px;
}

.borderR {
    border-right: 1px solid #181818;
    padding-right: 20px;
}

.newsDiv {
    padding-bottom: 50px;
}

.newsDiv,
.noticeDiv,
.reportDiv {
    width: 845px;
    margin: 0 auto;
}

.reportDownload {
    margin-top: 50px;
    color: #c9d0d7;
}

.reportTime {
    margin: 0 75px;
}

.moreNews {
    display: block;
    margin-top: 50px;
    margin-bottom: 25px;
    color: #666;
}

.moreNewsList {
    /*margin:0 0 0 -40px;*/
}

.moreNewsList li {
    height: 27px;
    line-height: 27px;
    list-style: disc;
    color: #2388da;
    position: relative;
    left: 15px;
}

.news a {
    color: #1984ea;
    text-decoration: none;
}
.news a:hover {
    text-decoration: underline;
    cursor: pointer;
}

.ml-15 {
    margin-left: 15px;
}

.mr-15 {
    margin-right: 15px;
}

.mr-10 {
    margin-right: 10px;
}

.notice {
    margin-left: 30px;
    color: #666;
}

.svg_icon_q {
    font-size: 20px;
    width: 18px;
    height: 18px;
    fill: currentColor;
    overflow: hidden;
    margin-top: -2px;
    position: relative;
    top: 3px;
}

.noticeDiv .reportTime {
    margin: 0 25px;
}
    .fileNews{
        padding-bottom: 20px;
    }
</style>
<template>
<div class="news">
  <div v-if="this.type === 'news'" class="newsDiv">
    <p class="newTitle">{{result === null ? '':result.news.title}}</p>
    <div class="newDetail">
      <span class="borderR">{{date}}</span>
      <span class="borderR ml-15">来源：{{result === null ? '':result.news.srcName}}</span>
      <span v-if="result !== null && result.equityList!== null && result.equityList.length!==0" class="ml-15">相关股票：
        <a @click="toStock(item.innerCode)" v-for="item in result.equityList" class="mr-10">{{item.name}} [{{item.innerCode.substring(0,item.innerCode.indexOf('.'))}}]</a></span>
      <span v-if="result !== null && result.topicList!== null && result.topicList.length!==0" class="ml-15">相关题材：
        <router-link :to="{ name:'topicDetail' , params:{ topicId : item.topicCode }}" target="_blank" class="mr-15" v-for="item in result.topicList">{{item.topicName}}</router-link></span>
    </div>
    <div class="newMain" v-html="reformatNewsContent"></div>
    <span class="moreNews" v-if="moreInfor && moreInfor.length !== 0">更多相关资讯</span>
    <ul class="moreNewsList" v-for="item in this.moreInfor" v-if="result !== null && result.equityList !== null &&  result.equityList.length !== 0">
      <li value="item.newsId">
        <router-link :to="{name:'detailPages' , params:{ id : item.newsId, detailType:'news'}}">
          {{item.title}}
        </router-link>
      </li>
    </ul>
    <ul class="moreNewsList" v-for="item in this.moreInfor" v-if="result !== null && result.equityList !== null && result.equityList.length === 0">
      <li value="item.id">
        <router-link :to="{name:'detailPages' , params:{ id : item.newsUrl.substring(6,item.newsUrl.indexOf('.')), detailType:'news'}}">
          {{item.newsTitle}}
        </router-link>
      </li>
    </ul>
  </div>
  <div v-if="this.type === 'report'" class="reportDiv">
    <p class="newTitle">{{result.title}}</p>
    <div class="newDetail">
      <span>研报类型：{{result.resType}}</span>
      <span class="reportTime">发布机构：{{result.srcName}}</span>
      <span>发布时间：{{reportDate}}</span>
    </div>
    <div class="newMain" v-html="reformatReportContent"></div>
    <p v-show="false" class="reportDownload">
      阅读附件全文请下载：
      <a ref="downReport" :id=result.resId href="">{{result.title}}</a>
      <span class="notice" v-if="!this.$store.state.zhikuanDetailPages.isReportCanDown">该研报暂不提供下载</span>
    </p>
  </div>
  <div v-if="this.type === 'notice'" class="noticeDiv">
    <p class="newTitle" v-if="result">{{result.title}}</p>
    <div class="newDetail">
      <span class="reportTime" v-if="result">发布机构：{{result.srcName}}</span>
      <span v-if="result">发布时间：{{noticeDate}}</span>
    </div>
    <div class="newMain" v-html="reformatNoticeContent"></div>
    <div class="newMain fileNews" v-if="result && result.fileType === 'pdf'">
      正文请详见附件 :
      <a :href="'http://www.z3quant.com/openapi/news/downAccFile/'+result.newsId+'.shtml'">查看附件
        <svg class="svg_icon_q" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M672 96L149.333333 608c-42.666667 32-64 85.333333-64 138.666667s21.333333 106.666667 64 149.333333 96 64 149.333334 64c64 0 117.333333-21.333333 160-64l490.666666-490.666667 42.666667 42.666667-501.333333 490.666667c-53.333333 53.333333-117.333333 85.333333-192 85.333333-64 0-128-32-181.333334-74.666667l-10.666666-10.666666c-53.333333-53.333333-74.666667-117.333333-74.666667-192 0-64 21.333333-128 74.666667-181.333334L629.333333 53.333333l21.333334 21.333334-21.333334-21.333334c32-32 85.333333-53.333333 128-53.333333 53.333333 0 106.666667 21.333333 138.666667 53.333333 42.666667 42.666667 53.333333 85.333333 53.333333 138.666667 0 42.666667-10.666667 96-53.333333 128L448 757.333333c-21.333333 21.333333-53.333333 32-74.666667 32s-53.333333 0-74.666666-21.333333v-10.666667c-21.333333-21.333333-32-42.666667-32-74.666666 0-21.333333 10.666667-53.333333 32-74.666667l426.666666-426.666667 42.666667 42.666667-437.333333 426.666667c-10.666667 10.666667-10.666667 21.333333-10.666667 32s0 32 10.666667 42.666666 32 10.666667 42.666666 10.666667 21.333333 0 32-10.666667l448-448c32-21.333333 42.666667-53.333333 42.666667-85.333333 0-42.666667-10.666667-74.666667-42.666667-96-21.333333-21.333333-53.333333-42.666667-96-42.666667-32 0-64 21.333333-85.333333 42.666667z"
                p-id="421"></path>
        </svg>
      </a>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      type: this.$route.params.detailType,
      moreInfor: null
    }
  },
  computed: {
    result: function() {
      return this.$store.state.zhikuanDetailPages.dataList[this.$route.params.detailType]
    },
    reformatNewsContent: function() {
      if (this.result === null || this.result.news.content === null) {
        return
      }
      const content = this.result.news.content.split('\n')
      let con = ''
      content.forEach((p) => {
        con += '<p>' + p + '</p>'
      })
      return con
    },
    reformatReportContent: function() {
      const content = this.result.summary.split('\n')
      let con = ''
      content.forEach((p) => {
        con += '<p>' + p + '</p>'
      })
      return con
    },
      reformatNoticeContent: function() {
        if(this.result && this.result.content){
            const content =  this.result.content.split('\n')
            let con = ''
            content.forEach((p) => {
                con += '<p>' + p + '</p>'
            })
            return con
        }
      },
    urlId: function() {
      return this.$route.params.id
    },
    date: function() {
      if (this.result === null) {
        return
      }
      const date = new Date(this.result.news.declareDate)
      return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate() + ' '
    },
    reportDate: function() {
      const date = new Date(this.result.declareDate)
      return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate() + ' '
    },
    noticeDate: function() {
      const date = new Date(this.result.declareDate)
      return date.getFullYear() + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' + date.getDate() + ' '
    }
  },
  watch: {
    urlId: function() {
      this.type = this.$route.params.detailType
      this.getDetailPages()
      this.$router.go(0)
    }
  },
  methods: {
    getDetailPages() {
      const id = this.$route.params.id
      const detailType = this.$route.params.detailType
      this.$store.dispatch('zhikuanDetailPages/getDetailPages', {
        id,
        detailType
      }).then(() => {
        if (detailType !== 'notice') {
          if (this.result !== null && this.result.topicList !== null && this.result.topicList.length === 0) {
            const innerCode = this.$store.state.zhikuanDetailPages.dataList[this.type].equityList[0].innerCode
            this.$store.dispatch('zhikuanDetailPages/getInforRelate', {
              id,
              innerCode
            }).then(() => {
              this.moreInfor = this.$store.state.zhikuanDetailPages.moreData
            })
          } else if (this.result !== null && this.result.equityList !== null && this.result.equityList.length === 0) {
            const topicCode = this.$store.state.zhikuanDetailPages.dataList[this.type].news.newsId
            const topicName = this.$store.state.zhikuanDetailPages.dataList[this.type].topicList[0].topicName
            this.$store.dispatch('zhikuanDetailPages/getTopicRelate', {
              topicName: topicName,
              topicCode: topicCode
            }).then(() => {
              this.moreInfor = this.$store.state.zhikuanDetailPages.moreData
            })
          } else {
            const innerCode = this.$store.state.zhikuanDetailPages.dataList[this.type].equityList[0].innerCode
            this.$store.dispatch('zhikuanDetailPages/getInforRelate', {
              id,
              innerCode
            }).then(() => {
              this.moreInfor = this.$store.state.zhikuanDetailPages.moreData
            })
          }
        }
      })
      if (detailType === 'report') {
        this.$store.dispatch('zhikuanDetailPages/checkDownReport', {
          id
        }).then(() => {
          if (this.$store.state.zhikuanDetailPages.isReportCanDown) {
            this.$refs.downReport.href = `http://www.z3quant.com/openapi/report/downReportFile/${id}.shtml`
          } else {
            this.$refs.downReport.href = ''
          }
        })
      }
    },
    toStock(code){
        window.open('/stock/' + code + '.shtml')
    }

  },
  mounted() {
    this.getDetailPages()
  }
}
</script>
