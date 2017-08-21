<style>
    @import '../assets/css/base.css';
    *{box-sizing: border-box;}
    .chart{width:100%;}
    .map_legend {
        color: #fff;
        display: inline-block;
        font-size: 11px;
        font-weight: 400;
        text-shadow: 0 1px 0 rgba(0,0,0,.25);
        position: absolute;
        top:0px;
        right:0px;
    }
    .map_legend_min {
        float: right;
    }
    .map_legend .step {
        width: 50px;
        height: 25px;
        line-height: 26px;
        cursor: default;
        display: inline-block;
        float: left;
        text-align: center;
        margin-left: 4px;
    }
    .playback{
        float: left;
        display:inline-block;
        position: absolute;
        top: 10px;
        left: 0px;
        background: #2c2e31;
        color: #fff;
    }
    .chart_bottom{
        margin-top:10px;
        position: relative;
        height: 25px;
    }
    .perday {
        width: 35px;
        height: 20px;
        line-height: 20px;
        cursor: default;
        display: inline-block;
        float: left;
        font-size: 11px;
        text-align: center;
        margin-left: 4px;
        background-color: #262626;
    }
    .playback_btn{margin-left: 0;width: 25px;cursor: pointer;}
    .play_line{width: 1px;height: 20px;background: #e34842;position: absolute;top: 0px;left:786px;}
</style>
<template>
    <div class="map_wrap">
        <!--<div id="hover-wrapper" v-if="showHover">-->
            <StockList :node="hoverNode" :parent="hoverNodeParent" :offsetX="offsetX" :offsetY="offsetY" :indexCode="code" v-if="showHover"></StockList>
       <!-- </div>-->
        <div class="chart" ref="treemap" :style="{height:mapHeight+'px'}" v-on:mousemove="move($event)"></div>
        <div class="chart_bottom clearfix">
            <div class="clearfix playback">
                <div class="playback_btn perday"><img :src="playBackSrc" alt="" v-on:click="startPlay()" ref="playBtn"></div>
                <div class="play_line" ref="playLine" :style="{left:playBackIndex*39+46.5+'px'}"></div>
                <div v-for="date of playBackDateShow" class="perday">{{date}}</div>
            </div>
            <div class="map_legend map_legend_min clearfix">
                <div v-for="legend of legendList" class="step" :style="{background:legend.backgroundColor}">{{legend.value}}</div>
            </div>
        </div>
    </div>
</template>
<script>
    import playBackSrc from '../assets/images/stock-map/playback.png'
    import playStopSrc from '../assets/images/stock-map/playstop.png'
    import echarts from 'echarts'
    import StockList from 'components/stock-list-map'
    const colorsList1 = ['#f63538', '#ee373a', '#e6393b', '#df3a3d', '#d73c3f', '#ce3d41', '#c73e43', '#bf4045', '#b64146', '#ae4248', '#a5424a', '#9d434b', '#94444d', '#8b444e', '#824450', '#784551', '#6f4552', '#644553', '#5a4554', '#4f4554', '#414554', '#3f4c53', '#3d5451', '#3b5a50', '#3a614f', '#38694f', '#366f4e', '#35764e', '#347d4e', '#32844e', '#31894e', '#31904e', '#30974f', '#2f9e4f', '#2fa450', '#2faa51', '#2fb152', '#2fb854', '#30be56', '#30c558', '#30cc5a']
    const colorsList2 = ['#3d4251', '#3d4250', '#3d4250', '#3e4251', '#3e4251', '#3d4350', '#3d4350', '#3d4350', '#3e4351', '#3e4350', '#3d4351', '#3d4352', '#3f4353', '#3f4353', '#3f4453', '#3f4554', '#3e4354', '#3e4354', '#3f4454', '#3f4454', '#3f4454', '#3f4454', '#3f4454', '#3f4555', '#3f4556', '#3f4457', '#3f4457', '#3f4457', '#3f4557', '#3f4657', '#3f4657', '#3f4657', '#3f4557', '#3e4557', '#3e4558', '#3f465a', '#3f4659', '#3f4759', '#3f4759', '#3f475a', '#3f4759', '#3f465a', '#3f465a', '#3f4759', '#3f475b', '#40475b', '#40475b', '#40465b', '#40465c', '#40465d', '#40485d', '#40485c', '#40475c', '#40465c', '#40465c', '#40465c', '#40485d', '#40485d', '#40485e', '#40485f', '#40495e', '#40495e', '#40485e', '#40485f', '#40495e', '#40485e', '#40485f', '#404960', '#404960', '#404860', '#404861', '#404a62', '#404962', '#404962', '#404a62', '#404a62', '#404861', '#404961', '#404a63', '#404a64', '#404a65', '#404b64', '#404b64', '#404a65', '#404a65', '#404a65', '#404a65', '#404b65', '#404b65', '#414c65', '#424c65', '#424b65', '#414b66', '#414b67', '#414b67', '#414c67', '#424b67', '#424c67', '#414c67', '#414b67', '#414c67', '#414c67', '#414c69', '#414c6a', '#414c6a', '#414c6a', '#414d6a', '#424e6a', '#414d6a', '#414d6a', '#414d6a', '#414d6a', '#414d6a', '#414d6b', '#414d6c', '#414e6c', '#414f6c', '#414e6c', '#414d6c', '#414d6c', '#414e6c', '#424e6d', '#424e6d', '#414f6d', '#424f6f', '#414e6f', '#414e6f', '#424f70', '#414f6f', '#414f6f', '#414f6f', '#414e6f', '#414e6f', '#414f6f', '#414f6f', '#414f71', '#414f72', '#425073', '#425173', '#415072', '#425173', '#425173', '#425173', '#415072', '#415072', '#415172', '#415173', '#415174', '#415174', '#415074', '#415074', '#415174', '#415074', '#415074', '#415074', '#415175', '#415275', '#425276', '#425277', '#415177', '#415177', '#425278', '#425378', '#415277', '#415378', '#415378', '#415277', '#415378', '#42537a', '#42537c', '#42537b', '#41537a', '#41527a', '#41537a', '#41547a', '#42547b', '#41547a', '#41547a', '#41547c', '#41547c', '#41557c', '#41557c', '#41557c', '#41557c', '#41557d', '#41547d', '#41547c', '#42557d', '#41557d', '#41557d', '#41557f', '#415580', '#41567f', '#41567f', '#415580', '#41567f', '#415580', '#415580', '#41557f', '#415680', '#415680', '#415680', '#415681', '#415681', '#415781', '#415781', '#415681', '#415781', '#415781', '#415781', '#415782', '#415784', '#415784', '#425885', '#425885', '#415784', '#415784', '#415784', '#415784', '#425885', '#425885', '#415885', '#415885', '#425987', '#415887', '#415887', '#415987', '#415887', '#425988', '#425988', '#415887', '#415987', '#415988', '#415988', '#415988', '#415989', '#415989', '#415989', '#415989', '#415989', '#415989', '#41598a', '#405a8b', '#405a8c', '#405b8c', '#405b8c', '#405b8c', '#405a8c', '#405a8c', '#405a8c', '#405a8c', '#405b8c', '#415c8d', '#415c8e', '#405b8e', '#415c90', '#405b8f', '#405c8f', '#415d90', '#405b8f', '#405c8f', '#405c8f', '#405b8f', '#405c8f', '#405c90', '#405c91', '#405c91', '#405c91', '#405d91', '#405e91', '#405d91', '#415e91', '#405e91', '#415e91', '#415e92', '#3f5d94', '#3f5d93', '#3f5d93', '#3f5e94', '#405e94', '#3f5d94', '#3f5d94', '#3f5d94', '#3f5e94', '#3f5e95', '#3f5e96', '#3f5e96', '#3f5e96', '#405f97', '#405f97', '#3f5e96', '#3f5e97', '#3f5f97', '#3f6097', '#3f5f97', '#3f6097', '#3f5f98', '#3f5f99', '#3e5f99', '#3e6199', '#3e6099', '#3e5f99', '#3e5f99', '#3e5f98', '#3e6099', '#3d609a', '#3d6099', '#3e609b', '#3e619c', '#3e619c', '#3e619c', '#3e609b', '#3e609c', '#3e609c', '#3e619b', '#3e629c', '#3e629c', '#3e619c', '#3d619d', '#3d639f', '#3d629f', '#3d629f', '#3d639f', '#3d629f', '#3c619e', '#3c619e', '#3d629f', '#3d62a0', '#3d63a0', '#3d63a0', '#3d62a0', '#3d63a1', '#3d62a0', '#3d63a0', '#3d64a1', '#3d63a0', '#3c63a0', '#3b63a2', '#3c64a3', '#3c65a3', '#3b63a3', '#3b63a3', '#3b63a3', '#3b63a3', '#3c63a3', '#3c65a3', '#3c65a3', '#3b64a4', '#3a65a5', '#3b66a6', '#3c65a6', '#3a65a5', '#3a64a5', '#3a64a5', '#3b65a5', '#3a65a5', '#3a66a6', '#3b66a6', '#3b66a6', '#3a66a8', '#3a67a8', '#3b67a8', '#3b66a8', '#3b66a8', '#3b66a8', '#3b67a8', '#3a66a8', '#3966a9', '#3967a9', '#3a67aa', '#3a67ab', '#3967ab', '#3a68ab', '#3a68ab', '#3968ab', '#3966aa', '#3966aa', '#3968ab', '#3968ab', '#3867ac', '#3867ac', '#3868ac', '#3869ad', '#3969ad', '#3968ad', '#3868ac', '#3868ac', '#3869ae', '#3868ad', '#3868ad', '#3769af', '#3869b0', '#3769af', '#3769af', '#386ab0', '#386ab0', '#376aaf', '#376aaf', '#376ab0', '#366ab1', '#366ab2', '#366ab2', '#366ab2', '#366ab3', '#366bb3', '#366ab2', '#3669b2', '#366ab2', '#366ab2', '#366ab2', '#356bb3', '#346bb4', '#356cb4', '#356cb4', '#346bb4', '#356cb4', '#356cb5', '#356cb5', '#356cb5', '#346cb5', '#346cb5', '#346cb6', '#336db7', '#326cb7', '#326db7', '#336db7', '#336cb7', '#326bb6', '#326cb6', '#326db7', '#326db8', '#316dba', '#316eb9', '#316eb9', '#326eba', '#316eba', '#316db9', '#316db9', '#316eb9', '#306eba', '#306dba', '#306dba', '#306ebb', '#306dbb', '#306dbc', '#306fbc', '#306fbc', '#306ebb', '#306eba', '#306fbc', '#2f6fbd', '#2d6ebe', '#2d6ebe', '#2d6fbe', '#2e70be', '#2e70be', '#2e6fbe', '#2e6fbe', '#2e6fbe', '#2c6fc0', '#2d70c0', '#2d70c0', '#2b70c1', '#2b70c1', '#2c70c1', '#2c70c1', '#2b71c1', '#2c70c1', '#2c70c1', '#2c71c1', '#2c71c1', '#2a72c3', '#2971c3', '#2a71c2', '#2972c3', '#2a71c3', '#2a71c3', '#2972c3', '#2972c3', '#2972c3', '#2872c5', '#2872c6', '#2872c5', '#2773c6', '#2773c6', '#2772c6', '#2772c5', '#2672c5', '#2673c5', '#2673c5', '#2673c7', '#2472c8', '#2473c8', '#2474c8', '#2573c9', '#2573c9', '#2573c9', '#2573c9', '#2474c8', '#2374c9', '#2374c9', '#2374c9', '#2375c9', '#2374c9', '#2374c9', '#2475c9', '#2575ca', '#2476ca', '#2476ca', '#2476ca', '#2575cb', '#2577ca', '#2577ca', '#2576ca', '#2577ca', '#2577ca', '#2577ca', '#2677ca', '#2678ca', '#2678cb', '#2778cb', '#2778cb', '#2679cb', '#2779cb', '#2779cb', '#2779cb', '#2779cb', '#2879cb', '#287acb', '#287acb', '#2879cb', '#287acb', '#287bcb', '#287acb', '#287acb', '#287bcc', '#287bcc', '#297bcc', '#297bcc', '#297bcc', '#297bcc', '#297ccc', '#297ccc', '#297dcc', '#297dcc', '#2a7dcc', '#2a7dcc', '#2a7ecd', '#2a7ecd', '#2a7ecc', '#2a7ecc', '#2b7ecd', '#2c7ecd', '#2c7fcd', '#2c7fcd', '#2b7ecc', '#2b7ecc', '#2c7fcd', '#2c7fcd', '#2c7fcd', '#2c7fcd', '#2b7fcd', '#2b80cd', '#2c80ce', '#2d80ce', '#2d80ce', '#2c81cd', '#2d82ce', '#2d82ce', '#2d81ce', '#2d82ce', '#2d82ce', '#2d82cd', '#2e82cd', '#2e83ce', '#2e82ce', '#2d82cd', '#2d83cd', '#2e83cf', '#2e84cf', '#2e84cf', '#2e83ce', '#2e83ce', '#3084cf', '#3085cf', '#2f85ce', '#3085cf', '#2f86ce', '#2f86ce', '#2f86cf', '#2f85cf', '#2f86ce', '#2f86cf', '#2f86cf', '#2f87cf', '#2f86d0', '#2f86d0', '#2f86d0', '#3087cf', '#3088d0', '#3088d0', '#3087cf', '#3088cf', '#3188d0', '#3188d1', '#3088d0', '#3089d0', '#3089d0', '#3088d0', '#3188d0', '#3189d0', '#3289d0', '#3289d0', '#328ad1', '#328ad1', '#318ad0', '#318ad0', '#318ad0', '#328bd1', '#328ad1', '#328ad1', '#338bd2', '#338bd2', '#338cd1', '#338cd1', '#338cd2', '#338cd2', '#338dd1', '#338dd1', '#338dd2', '#338dd1', '#338ed2', '#338ed2', '#338ed2', '#348ed2', '#348ed2', '#348ed2', '#348fd2', '#348fd2', '#348fd2', '#348fd2', '#348fd2', '#348fd2', '#3390d2', '#3391d2', '#3491d3', '#3490d3', '#3491d3', '#3491d3', '#3591d3', '#3591d3', '#3691d4', '#3690d4', '#3590d3', '#3592d3', '#3592d4', '#3592d4', '#3592d3', '#3593d3', '#3592d4', '#3592d4', '#3592d4', '#3593d4', '#3694d4', '#3695d4', '#3694d4', '#3693d4', '#3693d4', '#3695d4', '#3695d4', '#3695d4', '#3796d4', '#3796d4', '#3695d4', '#3695d5', '#3696d5', '#3696d5', '#3696d5', '#3695d4', '#3696d4', '#3797d5', '#3796d5', '#3797d5', '#3898d5', '#3898d5', '#3797d5', '#3798d5', '#3899d5', '#3899d5', '#3899d6', '#3799d6', '#3799d6', '#3799d6', '#389ad6', '#389ad6', '#3799d5', '#3799d5', '#3799d6', '#379ad6', '#379ad6', '#399ad6', '#399ad6', '#389bd5', '#389bd5', '#389bd6', '#389bd6', '#399cd7', '#399bd7', '#399cd7', '#399dd7', '#389cd7', '#389cd6', '#389dd6', '#399ed7', '#389dd6', '#389dd6', '#389fd6', '#399fd7', '#399ed6', '#399ed6', '#399fd7', '#399fd7', '#399fd7', '#3aa0d8', '#3aa0d8', '#3a9fd8', '#3a9fd8', '#3a9fd8', '#3aa0d8', '#3aa1d8', '#3aa1d8', '#3aa1d8', '#3aa1d8', '#3aa1d8', '#3aa2d9', '#3aa1d9', '#3aa1d8', '#39a2d8', '#3aa2d9', '#3aa3d9', '#3ba3d9', '#3ba3d9', '#3ba2d8', '#3aa2d8', '#3aa4d8', '#3ba4d9', '#3aa3d8', '#3aa3d9', '#3ba5da', '#3ba5d9', '#3ba4d9', '#3ba4d9', '#3ba4d9', '#3aa5d9', '#3ba5da', '#3ba6da', '#3ba6da', '#3ba6da', '#3ba6d9', '#3ba6d9', '#3ba6da', '#3aa5da', '#3ba6da', '#3ca7da', '#3ca7da', '#3ba7da', '#3ba6da', '#3ca7da', '#3ca8da', '#3ca8da', '#3ca8da', '#3ca9db', '#3ca9db', '#3ca9da', '#3ca8db', '#3ba8db', '#3baadb', '#3caadb', '#3ca9db', '#3caadb', '#3caadb', '#3ca9db', '#3ca9db', '#3ca9db', '#3cabdb', '#3cabdc', '#3caadb', '#3cabdb', '#3cacdc', '#3cacdc', '#3cacdc', '#3caddc', '#3caddc', '#3caddc', '#3caedc', '#3caddd', '#3caddd', '#3caedc', '#3eaedd', '#3eaddd', '#3daddc', '#3daedc', '#3daedc', '#3dafdd', '#3dafdd', '#3daedd', '#3dafdd', '#3dafdd', '#3dafdd', '#3db0dd', '#3db0dd', '#3db0dc', '#3db0dc', '#3db1dd', '#3db1dd', '#3db0dd', '#3db0dd', '#3db1dd', '#3db1de', '#3db1de', '#3db1de', '#3db2de', '#3db2de', '#3db2dd', '#3db2dd', '#3db3dd', '#3db2de', '#3db3de', '#3db4de', '#3db3dd', '#3db4de', '#3db4de', '#3db4de', '#3db5df', '#3db5df', '#3db4df', '#3db4df', '#3db5df', '#3db5de', '#3db5de', '#3db5de', '#3db6df', '#3db6df', '#3db6de', '#3db6de', '#3db7df', '#3db7e0', '#3db8e0', '#3db8e0', '#3db7e0', '#3db7df', '#3db7df', '#3eb7df', '#3eb8df', '#3eb8df', '#3eb9e0', '#3eb9e0', '#3eb8df', '#3eb9df', '#3fb9df', '#3fb9e0', '#3ebae1', '#3ebae0', '#3ebae0', '#3ebae0', '#3eb9e0', '#3fbae1', '#3fbbe1', '#3ebae0', '#3ebbe1', '#3ebae0', '#3ebbe0', '#3ebce1', '#3fbce1', '#3ebce0', '#3ebce2', '#3ebce2', '#3ebde2', '#3fbde2', '#3fbde2', '#3ebde1', '#3ebee1', '#3ebde2', '#3fbde2', '#3fbde2', '#3ebee1', '#3ebfe1', '#3ebfe1', '#3ebfe1', '#3fbfe2', '#3ebfe1', '#3ebee1', '#3ebee2', '#3ebfe2', '#3ebfe2', '#3ebfe2', '#3ec0e2', '#3ec1e2', '#3fc0e3', '#3fc0e3', '#3ec0e2', '#3ec1e2', '#3ec2e2', '#3ec2e2', '#3ec2e2', '#3ec3e3', '#3ec3e3', '#3ec3e3', '#3ec2e3', '#3ec2e3', '#3fc3e3', '#3fc4e3', '#3ec4e3', '#3ec3e3', '#3ec3e3', '#3ec5e4', '#3fc5e4', '#3fc5e3', '#3fc4e4', '#3fc5e4', '#3ec6e4', '#3ec5e4', '#3ec4e4', '#3ec5e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec7e4', '#3ec6e4', '#3ec6e4', '#3ec6e4', '#3ec7e4', '#3dc8e4', '#3dc8e4', '#3dc7e5', '#3dc7e5', '#3dc8e5', '#3dc8e4', '#3dc8e4', '#3dc9e5', '#3dc9e5', '#3dc9e5', '#3dc9e5', '#3dc9e5', '#3dc9e4', '#3dc9e5', '#3dcae6', '#3dcbe6', '#3dcae6', '#3dcae6', '#3dcae6', '#3dcbe6', '#3dcce6', '#3ecce6', '#3ecce6', '#3dcbe6', '#3dcce6', '#3dcce6', '#3dcce6', '#3dcce5', '#3dcce5', '#3dcce6', '#3dcde7', '#3dcde7', '#3dcde7', '#3dcfe7', '#3dcfe7', '#3dcfe7', '#3dcee7', '#3dcee6', '#3dcee6', '#3dcfe7', '#3dcfe7', '#3dcfe6', '#3dcfe6', '#3dd0e8', '#3ed1e8', '#3ed1e7', '#3dd0e7', '#3dd0e8', '#3dd0e7', '#3dd1e7', '#3dd1e7', '#3dd0e7', '#3cd1e8', '#3cd2e8', '#3cd1e8', '#3cd1e7', '#3cd1e7', '#3cd2e8', '#3cd3e9', '#3cd2e8', '#3cd2e9', '#3cd2e9', '#3cd3e8', '#3cd4e8', '#3cd3e8', '#3cd3e8']
    const colorsList3 = ['#20A29A ', '#BA5297']
    const valueRange1d = [-4, -3, -2, -1, 0, 1, 2, 3, 4] // 图例1日涨跌幅数值
    const valueRangeRelvol = [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6, 1.8]// 图例相对成交量数值
    const valueRangeGX = [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6] // 股息率
    const valueRangeEd = ['业绩公布前', '业绩公布后'] // 业绩公布日
    let pid
    export default{
      props: ['rangeCode', 'condition'], // 从父组件传下来
      components: {
        StockList
      },
      data () {
        return {
          code: this.rangeCode || '',
          isContinue: 1,
          offsetX: 0,
          offsetY: 0,
          colors: {
            'mkt_idx.cur_chng_pct': colorsList1.slice().reverse(), // 涨跌幅 绿-红
            'mkt_idx.chng_pct_week': colorsList1.slice().reverse(), // 近1周涨跌幅
            'perf_idx.chng_pct_month': colorsList1.slice().reverse(), // 近1月涨跌幅
            'perf_idx.chng_pct_3month': colorsList1.slice().reverse(), // 近3月涨跌幅
            'perf_idx.chng_pct_6month': colorsList1.slice().reverse(), // 近6月涨跌幅
            'perf_idx.chng_pct_year': colorsList1.slice().reverse(), // 近1年涨跌幅
            'perf_idx.chng_pct_year_sofar': colorsList1.slice().reverse(), // 今年以来涨跌幅
            'mkt_idx.rela_volume': colorsList2, // 相对成交量
            'mkt_idx.peg': colorsList1, // PEG
            'mkt_idx.ps': colorsList1, // 市销率
            'mkt_idx.pb': colorsList1, // 市净率
            'mkt_idx.div_rate': colorsList1.slice().reverse().slice(20), // 股息率
            'mkt_idx.pe_ttm': colorsList1, // 市盈率(TTM)
            'mkt_idx.fir_fcst_pe': colorsList1, // 预测市盈率
            'fin_idx.eps_5year': colorsList1.slice().reverse(), // EPS增长率(过去5年)
            'act_date': colorsList3// 业绩公布日
          },
          rangeValues: {
            'mkt_idx.cur_chng_pct': valueRange1d, // 涨跌幅
            'mkt_idx.chng_pct_week': this.fmtraneValue(valueRange1d, 2), // 近1周涨跌幅
            'perf_idx.chng_pct_month': this.fmtraneValue(valueRange1d, 3), // 近1月涨跌幅
            'perf_idx.chng_pct_3month': this.fmtraneValue(valueRange1d, 6), // 近3月涨跌幅
            'perf_idx.chng_pct_6month': this.fmtraneValue(valueRange1d, 8), // 近6月涨跌幅
            'perf_idx.chng_pct_year': this.fmtraneValue(valueRange1d, 9), // 近1年涨跌幅
            'perf_idx.chng_pct_year_sofar': this.fmtraneValue(valueRange1d, 8), // 今年以来涨跌幅
            'mkt_idx.rela_volume': valueRangeRelvol, // 相对成交量
            'mkt_idx.peg': this.fmtraneValue(valueRangeGX, 2.5), // PEG
            'mkt_idx.ps': this.fmtraneValue(valueRangeGX, 10), // 市销率
            'mkt_idx.pb': this.fmtraneValue(valueRangeGX, 6), // 市净率
            'mkt_idx.div_rate': valueRangeGX, // 股息率
            'mkt_idx.pe_ttm': this.fmtraneValue(valueRangeGX, 75), // 市盈率(TTM)
            'mkt_idx.fir_fcst_pe': this.fmtraneValue(valueRangeGX, 75), // 预测市盈率
            'fin_idx.eps_5year': this.fmtraneValue(valueRange1d, 9), // EPS增长率(过去5年)
            'act_date': valueRangeEd// 业绩公布日
          },
          isUnit: {
            'mkt_idx.cur_chng_pct': '%', // 涨跌幅 绿-红
            'mkt_idx.chng_pct_week': '%', // 近1周涨跌幅
            'perf_idx.chng_pct_month': '%', // 近1月涨跌幅
            'perf_idx.chng_pct_3month': '%', // 近3月涨跌幅
            'perf_idx.chng_pct_6month': '%', // 近6月涨跌幅
            'perf_idx.chng_pct_year': '%', // 近1年涨跌幅
            'perf_idx.chng_pct_year_sofar': '%', // 今年以来涨跌幅
            'mkt_idx.rela_volume': '', // 相对成交量
            'mkt_idx.peg': '', // PEG
            'mkt_idx.ps': '', // 市销率
            'mkt_idx.pb': '', // 市净率
            'mkt_idx.div_rate': '', // 股息率
            'mkt_idx.pe_ttm': '', // 市盈率(TTM)
            'mkt_idx.fir_fcst_pe': '', // 预测市盈率
            'fin_idx.eps_5year': '%', // EPS增长率(过去5年)
            'act_date': ''// 业绩公布日
          },
          legendList: [],
          playBackDate: [],
          playBackDateShow: [],
          playBackIndex: 19,
          playBackState: false, // 默认是停止不回放
          playBackSrc: playStopSrc,
          mapHeight: window.innerHeight - 80,
          showHover: false,
          hoverNode: null
        }
      },
      watch: {
        rangeCode () {
          this.updateMap()
        },
        condition () {
          this.updateData()
        }
      },
      computed: {
        mapData: function () {
          const map = [].concat(this.$store.state.stockMap.industries)
          map.forEach(function (industry) {
            industry.value = industry.scale
            industry.children && industry.children.forEach(function (lvl2) {
              lvl2.value = lvl2.scale
              lvl2.children && lvl2.children.sort((a, b) => (b.scale - a.scale)) && lvl2.children.forEach(function (stock) {
                stock.value = stock.scale
                stock.parent = lvl2.id
              })
            })
          })
          return map
        },
        stockData: function () {
          const map = this.mapData
          const stockData = this.$store.state.stockMap.stockData
          const _this = this
          map.forEach(function (industry) {
            industry.children && industry.children.forEach(function (lvl2) {
              lvl2.children && lvl2.children.forEach(function (stock) {
                if (stockData) {
                  if (_this.condition === 'act_date') {
                    stock.perf = stockData[stock.name]
                    if (stock.perf !== null && typeof (stock.perf) !== 'undefined') {
                      const pbDate = new Date(stock.perf)
                      const nowDate = new Date()
                      stock.perfText = _this.dateFormatUtil(pbDate)
                      stock.itemStyle = {
                        normal: {
                          color: nowDate < pbDate ? '#20A29A' : '#BA5297' || '#2f323d'
                        }
                      }
                    } else {
                      stock.perfText = '--'
                    }
                  } else {
                    stock.perf = stockData[stock.id] || stockData[stock.name]
                    if (stock.perf !== null && typeof (stock.perf) !== 'undefined') {
                      if (_this.isUnit[_this.condition] === '%') {
                        if (stock.perf >= 0) {
                          stock.perfText = '+' + parseFloat(stock.perf).toFixed(2) + '%'
                        } else {
                          stock.perfText = parseFloat(stock.perf).toFixed(2) + '%'
                        }
                      } else {
                        stock.perfText = parseFloat(stock.perf).toFixed(2)
                      }
                    } else {
                      stock.perfText = '--'
                    }
                    stock.itemStyle = { normal: {
                      color: _this.showColor(_this.colors[_this.condition], _this.rangeValues[_this.condition], stock.perf) || '#2f323d'
                    }}
                  }
                } else {
                  stock.itemStyle = { normal: {
                    color: '#2f323d'
                  }}
                }
              })
            })
          })
          map.forEach(function (industry) {
            industry.children.forEach(function (lvl2) {
              if (_this.condition === 'act_date') {
                lvl2.itemStyle = { normal: {
                  borderColor: '#000'
                }}
              } else {
                let totalPerf = 0
                let totalScale = 0
                if (stockData) {
                  lvl2.children.forEach(function (stock) {
                    if (stock.perf) {
                      totalPerf += stock.value * stock.perf
                    }
                    totalScale += stock.value
                  })
                  lvl2.perf = totalPerf / totalScale
                  lvl2.itemStyle = { normal: {
                    borderColor: _this.showColor(_this.colors[_this.condition], _this.rangeValues[_this.condition], lvl2.perf) || '#2f323d'
                  }}
                } else {
                  lvl2.itemStyle = { normal: {
                    borderColor: '#2f323d'
                  }}
                }
              }
            })
          })
          return map
        },
        hoverNodeParent: function () {
          let parentNode = null
          if (this.hoverNode) {
            const parentId = this.hoverNode.parent
            this.mapData.forEach(function (industry) {
              industry.children && industry.children.forEach(function (lvl2) {
                if (parentId === lvl2.id) {
                  parentNode = lvl2
                }
              })
            })
          }
          return parentNode
        }
      },
      methods: {
        initMap: function () {
          this.chart = echarts.init(this.$refs.treemap)
          const _this = this
          this.$store.dispatch('stockMap/queryRangeByCode', { code: this.rangeCode })
                    .then(() => {
                      this.chart.setOption({
                        tooltip: {
                          triggerOn: 'none'
                        },
                        series: [
                          {
                            name: '',
                            type: 'treemap',
                            visibleMin: 500,
                            // childrenVisibleMin: 10,
                            width: '100%',
                            height: '100%',
                            label: {
                              normal: {
                                show: true,
                                formatter: function (params) {
                                  if (typeof (params.data.perf) !== 'undefined' && params.data.perf !== null) {
                                    return params.name + '\n' + params.data.perfText
                                  }
                                },
                                textStyle: {
                                  fontSize: 14,
                                  ellipsis: false
                                }
                              }
                            },
                            upperLabel: {
                              normal: {
                                show: true,
                                height: 20
                              }
                            },
                            itemStyle: {
                              normal: {

                              }
                            },
                            breadcrumb: {
                              show: false
                            },
                            levels: this.getLevelOption(),
                            data: this.mapData
                          }
                        ]
                      })
                      this.chart.hideLoading()
                      this.chart.on('mouseover', (params) => {
                        if (params.treePathInfo.length <= 2) {
                          return
                        }
                        if (params.treePathInfo.length === 3) {
                          this.hoverNode = params.data.children[0]
                        } else if (params.treePathInfo.length === 4) {
                          this.hoverNode = params.data
                        }
                        this.hoverNode.titleName = params.treePathInfo[1].name
                        this.showHover = true
                        // this.offsetX = params.event.offsetX
                        // this.offsetY = params.event.offsetY
                      })
                      this.chart.on('mouseout', (params) => {
                        if (params.treePathInfo.length <= 2) {
                          return
                        } else {
                          this.showHover = false
                        }
                      })
                    }).then(() => {
                      this.$store.dispatch('stockMap/updateData', { isContinue: this.isContinue, condition: this.condition, code: this.rangeCode }).then(() => {
                        this.chart.setOption({ series: [{ data: this.stockData }] })
                        this.chart.hideLoading()
                      }).then(() => {
                        this.$store.dispatch('stockMap/queryCalendarsData').then(() => {
                          this.playBackDate = this.$store.state.stockMap.calendarsData
                          this.playBackDateShow = this.timeFormat(this.playBackDate)
                        })
                      })
                    })
          this.chart.showLoading()
          this.getLegendColor()
          window.onresize = function () {
            _this.chart.resize({
              height: window.innerHeight - 80
            })
            _this.mapHeight = window.innerHeight - 80
          }
        },
        updateMap: function () {
                /* if (this.rangeCode !== '') { this.rangeCode = 'auth/' + this.rangeCode }*/
          this.$store.dispatch('stockMap/queryRangeByCode', { code: this.rangeCode }).then(() => {
            this.chart && this.chart.setOption({ series: [{ data: this.mapData }] })
          })
          this.$store.dispatch('stockMap/updateData', { isContinue: this.isContinue, condition: this.condition, code: this.rangeCode }).then(() => {
            this.chart && this.chart.setOption({ series: [{ data: this.stockData }] })
          })
        },
        updateData: function () {
          this.$store.dispatch('stockMap/updateData', { isContinue: this.isContinue, condition: this.condition, code: this.rangeCode }).then(() => {
            this.updataMapData()
          })
          this.getLegendColor()
        },
        updataMapData: function () {
          this.chart.setOption({ series: [{ data: this.stockData }] })
        },
        getStockChartData: function () {
          this.$store.dispatch('stockMap/stockChartData', { code: this.rangeCode, id: this.id }).then
        },
        getLevelOption: function () {
          return [
            {// 第一层外
              itemStyle: {
                normal: {
                  borderColor: '#000', // 第一层矩形间隔线颜色
                  borderWidth: 0,
                  color: '#000',
                  gapWidth: 5// 第一层块间隔距离
                }
              },
              upperLabel: {
                normal: {
                  show: false
                }
              },
              silent: true
            },
            {// 第一层
              itemStyle: {
                normal: {
                  borderColor: '#000', // 第一层背景色也就是第二层矩形间隔颜色
                  color: '#000',
                  borderWidth: 1, // 第一层矩形间距
                  gapWidth: 1// 第二层矩形间距
                },
                emphasis: {

                }
              },
              silent: true,
              upperLabel: {
                normal: {
                  offset: [3, 0]
                },
                emphasis: {
                  offset: [3, 0],
                  formatter: function (params) {

                  }
                }
              }
            },
            {// 第二层
              itemStyle: {
                normal: {
                  borderWidth: 0,
                  gapWidth: 0,
                  borderColor: '#000'
                },
                emphasis: {
                  borderColor: '#ffd614'
                }
              },
              upperLabel: {
                normal: {
                  offset: [5, 0],
                  textStyle: {
                    ellipsis: false
                  },
                  formatter: function (params) {

                  }
                },
                emphasis: {
                  offset: [5, 0],
                  textStyle: {
                    color: '#333'
                  }
                }
              },
              silent: true
            },
            {// 第3层
              itemStyle: {
                normal: {
                  borderWidth: 0.5,
                  borderColor: '#000',
                  color: '#2f323d'
                },
                emphasis: {
                     // color: 'red'
                }
              },
              silent: true
            }
          ]
        },
        showColor: function (colorArr, valueArr, value) {
          if (value == null) {
            return colorArr.nullColor
          }
          if (value <= (valueArr[0] + valueArr[1]) / 2) {
            return colorArr[0]
          } else if (value > (valueArr[valueArr.length - 1] + valueArr[valueArr.length - 2]) / 2) {
            return colorArr[colorArr.length - 1]
          } else {
            var index = Math.round((value - valueArr[0]) / (valueArr[valueArr.length - 1] - valueArr[0]) * colorArr.length)
            return colorArr[index]
          }
        },
        getLegendColor: function () {
          this.legendList = []
          if (this.condition === 'act_date') {
            this.legendList.push({
              value: '业绩公布前',
              backgroundColor: '#20A29A'
            })
            this.legendList.push({
              value: '业绩公布后',
              backgroundColor: '#BA5297'
            })
          } else {
            for (var i = 0; i < this.rangeValues[this.condition].length; i++) {
              this.legendList.push({
                value: this.rangeValues[this.condition][i] + this.isUnit[this.condition],
                backgroundColor: this.showColor(this.colors[this.condition], this.rangeValues[this.condition], this.rangeValues[this.condition][i])
              })
            }
          }
        },
        startPlay: function () {
          if (this.playBackState) { // 播放中
            this.playBackState = false
            clearInterval(pid)
            this.playBackSrc = playStopSrc
          } else {
            this.playBackState = true
            this.playBackSrc = playBackSrc
            if (this.playBackIndex >= this.playBackDate.length - 1) {
              this.playBackIndex = 0
            }
            pid = setInterval(() => {
              const playBackDate = this.playBackDate[this.playBackIndex]
              this.$store.dispatch('stockMap/updateDataByDate', { date: playBackDate }).then(() => {
                this.updataMapData()
              })
              this.playBackIndex++
              if (this.playBackIndex >= this.playBackDate.length - 1) {
                this.playBackIndex = this.playBackDate.length - 1
                this.playBackState = false
                this.playBackSrc = playStopSrc
                clearInterval(pid)
                this.updateData()
              }
            }, 800)
          }
        },
        fmtraneValue: function (arr, n) {
          var getArr = []
          for (var i in arr) {
            getArr.push(arr[i] * n)
          }
          return getArr
        },
        timeFormat: function (arr) {
          const getArr = []
          for (const i in arr) {
            const toTime = arr[i].toString()
            let m
            if (toTime.substring(4, 5) === '0') {
              m = toTime.substring(5, 6)
            } else {
              m = toTime.substring(4, 6)
            }
            getArr.push(m + '.' + toTime.substring(6))
          }
          return getArr
        },
        move: function (event) {
          this.offsetX = event.clientX + 50
          this.offsetY = event.clientY + 50
          const windowWidth = window.innerWidth
          const windowHeight = window.innerHeight
          if (document.getElementsByClassName('hover-wrapper').length > 0) {
            const wrapWidth = document.getElementsByClassName('hover-wrapper')[0].offsetWidth
            const wrapHeight = document.getElementsByClassName('hover-wrapper')[0].offsetHeight
            if (windowWidth - this.offsetX <= wrapWidth) {
              this.offsetX = this.offsetX - wrapWidth - 50
            }
            if (windowHeight - this.offsetY <= wrapHeight) {
              this.offsetY = windowHeight - wrapHeight
            }
            if (this.offsetY < 0) {
              this.offsetY = 0
            }
          }
        },
        dateFormatUtil: function (date) {
          var dateTypeDate = ''
          dateTypeDate += date.getFullYear() // 年
          dateTypeDate += '-' + this.getMonth(date) // 月
          dateTypeDate += '-' + this.getDay(date) // 日
          return dateTypeDate
        },
        getMonth: function (date) {
          var month = ''
          month = date.getMonth() + 1 // getMonth()得到的月份是0-11
          if (month < 10) {
            month = '0' + month
          }
          return month
        },
        getDay: function (date) {
          var day = ''
          day = date.getDate()
          if (day < 10) {
            day = '0' + day
          }
          return day
        }
      },
      mounted () {
        this.initMap()
      }
    }
</script>
