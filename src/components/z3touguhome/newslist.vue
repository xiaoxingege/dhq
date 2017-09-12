<style lang="scss" scoped="">
    @import '../../assets/css/base.css';
    *{box-sizing: border-box;font-family: '微软雅黑';font-size:12px;}
    .list-wrap{
        padding: 20px;
        min-width: 1217px;
        background-color: #fff;
    }
    .list-big{
        width: 100%;
        background: url(http://i0.jrjimg.cn/stock/724/line-y.png) repeat-y;
        min-height: 760px;
    }
    .mt20 {
        margin-top: 20px!important;
    }
    .list-big ul li {
        padding-bottom: 30px;
    }
    .jrj-clear, .jrj-wrap {
        zoom: 1;
    }
    .jrj-clear:after{
        content: ".";
        display: block;
        height: 0;
        visibility: hidden;
        clear: both;
    }
    .list-big ul li .timeleft {
        width: 11%;
        padding-top: 24px;
        float: left;
    }
    .list-big ul li .textright {
        width: 89%;
        float: right;
    }
    .list-big ul li .textright .trbox {
        padding: 14px;
        border: solid 1px #dcdcdc;
        background: #fefef6;
    }
    div{text-align: justify;}
    .img-bs{padding-left: 52px;}
    .list-big ul li .timeleft span {
        display: inline-block;
        padding-left: 25px;
        background: url(http://i0.jrjimg.cn/stock/724/time_icon.png) no-repeat 0 center;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
    }
    .red{color:#cc0000;}
    a{color:#666;}
    .img-bs img.fdadd {
        cursor: url(http://i0.jrjimg.cn/stock/724/fd_add.ico),auto;
        width: 208px;
    }
    .img-bs img.fd_move {
        cursor: url(http://i0.jrjimg.cn/stock/724/fd_move.ico),auto;
        width: auto;
    }
    .list-nav {
        height: 36px;
        line-height: 36px;
        width: 100%;
        margin: 0 auto;
        color:#4293d9;
    }
    .list-nav .mh-time {
        padding-left: 10px;
    }
    .list-nav .refreshBtn {
        cursor: pointer;
    }
    .refreshBtn *{
        vertical-align: middle;
    }
    .refreshBtn img{width: 14px;}
    .refreshBtn span{padding-right:5px;}
    .trbox a:hover{color:#4293d9;}
    .trbox p{margin: 12px 0;}
</style>
<template>
    <div class="list-wrap">
        <div class="list-nav">
            <div class="fr refreshBtn" v-on:click="refresh"><span class="">刷新</span><img src="../../assets/images/stock-map/refresh.png"/></div>
            <span class="mh-time">{{cTime}}</span>
        </div>
        <div class="list-big">
            <ul class="mt20">
                <li class="jrj-clear" v-for="(item,index) of newsList">
                    <div class="timeleft">
                        <span>{{item.makedate.substring(11)}}</span>
                    </div>
                    <div class="textright">
                        <div class="trbox tl">
                            <strong><router-link :to="{name:'newsdetails',params:{newsId:item.iiid,newsType:newsType}}" target="_blank">{{item.title}}</router-link></strong>
                            <p><router-link :to="{name:'newsdetails',params:{newsId:item.iiid,newsType:newsType}}" target="_blank">{{item.detail}}</router-link></p>
                            <p v-if="item.stockcode !== ''"><b class="blod">文中涉及个股：</b><span class="red">{{item.stockname.replace(/,/g,'  ')}}</span></p>
                            <div class="img-bs" v-if="item.imgurl !== ''"><img :src="item.imgurl" :class="item.imgClickBol?'fd_move':'fdadd'" v-on:click="enlargeImg(item.imgClickBol,index)"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default{
      props: [],
      data () {
        return {
          listSize: 50,
          newsList: [],
          refreshPid: null,
          cTime: '',
          newsType: ''
        }
      },
      computed: {
        newsListData: function () {
          let newsListData
          if (this.newsType === 'ywnews') {
            newsListData = [].concat(this.$store.state.z3touguIndex.financeNewsList)
          } else if ((this.newsType === 'companynews')) {
            newsListData = [].concat(this.$store.state.z3touguIndex.listedCompanyNewsList)
          }
          newsListData.forEach(function (news) {
            news.imgClickBol = false
          })
          return newsListData
        }
      },
      methods: {
        getNews: function () {
          this.newsType = this.$route.params.newsType
          let newsApi
          if (this.newsType === 'ywnews') {
            newsApi = 'getFinanceNews'
          } else if ((this.newsType === 'companynews')) {
            newsApi = 'getListedCompanyNews'
          }
          this.$store.dispatch('z3touguIndex/' + newsApi, { size: this.listSize })
                  .then(() => {
                    this.newsList = this.newsListData
                    this.cTime = this.newsListData[0].makedate.substring(0, 11)
                  })
        },
        enlargeImg: function (bol, index) {
          if (bol) {
            this.newsList[index].imgClickBol = false
          } else {
            this.newsList[index].imgClickBol = true
          }
        },
        refresh: function () {
          clearInterval(this.refreshPid)
          this.newsList = []
          this.getNews()
          const _this = this
          this.refreshPid = setInterval(function () {
            _this.getNews()
          }, 600000)
        }
      },
      mounted () {
        this.getNews()
        const _this = this
        this.refreshPid = setInterval(function () {
          _this.getNews()
        }, 600000)
      }
    }
</script>
