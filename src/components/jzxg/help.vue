<template>
<div class='content-wrap clearfix'>
  <div class='left-questions fl'>
    <ul>
      <li v-for='item of questionList' class="question-block">
        <div class="question-title">{{item.title}}</div>
        <ul>
          <li v-for='question of item.record' class="question-every" :class="{'active':question.typeId+'-'+question.subTypeId === activeId}" @click="toAnswer(question.typeId+'-'+question.subTypeId)">
            <span><a style="font-size:14px;" :href="'#'+question.typeId+'-'+question.subTypeId">{{question.list}}</a></span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class='right-answers fr' @scroll.stop="scrollAnswers($event)" :class="{auto:isShowSlideBar,hidden:!isShowSlideBar}">
    <ul>
      <li v-for="answer of answerList" class="answer-every">
        <div class="answer-title" :id="answer.subTypeId">{{answer.title}}</div>
        <p v-html="answer.content" class="answer-con"></p>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
export default {
    props:['strategyId'],
  data() {
    return {
      questionList: [],
      answerList: [],
      isShowSlideBar:true,
      nameTxt:['bdyx','zxjj','zltj','rdjj','jzmnc'],
      activeId:'',
      activeIndex:-1,
      isClickQuestion:false
    }
  },
  computed: {

  },
  methods: {
    getHelpData: function() {
      const obj = {
        'bdyx': {
          'question': [{
            title: '波段优选介绍',
            record: [{
              list: '什么是波段优选？',
              typeId: '1',
              subTypeId: '1'
            }, {
              list: '波段优选策略筛选的股票规则是什么？',
              typeId: '1',
              subTypeId: '2'
            }, {
              list: '波段优选策略属于何种类型的策略？',
              typeId: '1',
              subTypeId: '3'
            }, {
              list: '波段优选和Z点操盘有何不同？',
              typeId: '1',
              subTypeId: '4'
            }]
          }, {
            title: '使用帮助',
            record: [{
              list: '波段优选策略信号什么时候发出？',
              typeId: '2',
              subTypeId: '1'
            }, {
              list: '如何根据策略发出的信号进行操作？',
              typeId: '2',
              subTypeId: '2'
            }, {
              list: '波段优选策略的选股胜率是如何计算的？',
              typeId: '2',
              subTypeId: '3'
            }, {
              list: '波段优选策略的平均持仓期是如何计算的？',
              typeId: '2',
              subTypeId: '4'
            }, {
              list: '波段优选策略的平均收益如何计算的？',
              typeId: '2',
              subTypeId: '5'
            }, {
              list: '波段优选策略是否有持仓股票？',
              typeId: '2',
              subTypeId: '6'
            }, {
              list: '盈利概率是什么意思？',
              typeId: '2',
              subTypeId: '7'
            }, {
              list: '历史战绩中买卖价格计算的盈亏与盈利比率不符？',
              typeId: '2',
              subTypeId: '8'
            }]
          }, {
            title: '客户服务',
            record: [{
              list: '如何联系客服？',
              typeId: '3',
              subTypeId: '1'
            }]
          }],
          'answer': [{
              title: '什么是波段优选?',
              content: '<p>波段优选是金融界为用户提供的择时、选股的量化策略股票池，当前策略的特点是依靠业界最先进的人工智能算法，针对沪深A股3000只股票近10年历史数据进行回溯计算和自动学习，可针对不同股票，进行长、中、短不同周期的波动情况，动态识别多空力量的博弈变化。</p>\n                                  <p>当一只股票的长、中、短期的空方力量在同一时点力量衰竭，同时多方力量开始占据优势时，系统会提示买入信号，表示股价形成短期波段底部的概率较大，对于短线交易者是很好的加仓机会。</p>\n                                  <p>反之，当一只股票的长、中、短期的多方力量在同一时点力量衰竭，同时空方力量开始占据优势时，系统会提示卖出信号，表示股价形成短期波段顶部的概率较大，应注意防控风险，适当减仓或平仓离场。</p>'
            },
            {
              title: '波段优选策略筛选的股票规则是什么？',
              content: '<p>策略主要筛选的是处在阶段性低位，长、中、短周期共振条件下，出现买入信号且低位洗盘完成的股票，再经过概率计算，筛选出最优的、盈利概率最高的股票</p>'
            },
            {
              title: '波段优选策略属于何种类型的策略?',
              content: '<p>策略产生买入信号的股票平均在10天左右产生卖出信号，属于中短线类，选股成功率高、稳健型量化策略。</p>'
            },
            {
              title: '波段优选和Z点操盘有何不同？',
              content: '<p>波段优选既具备了Z点操盘的所有特征，而且增加了低位洗盘完成等过滤条件，买卖信号更强、选股成功率更高、盈利概率更大，且每只筛选股票都提供相应的买点和对应的卖点，平均盈利效果更好。</p>'
            },
            {
              title: '波段优选策略信号什么时候发出？',
              content: '<p>在每天收盘后，量化系统会经过大量计算，一般情况下在15：30-18：00期间更新，并且以消息的形式推送给用户，您可以直接点击APP顶端的及时消息进行查看，也可以点击右上角信封图标，进入消息列表中点击极智选股，进行查看。</p>'
            },
            {
              title: '如何根据策略发出的信号进行操作？',
              content: '<p>在每天收盘后，出现买入信号时，会提供价格区间，提示用户在第二天开盘时以开盘价买入。</p>\n                                  <p>在每天收盘后，已出现买点的股票，如产生卖出信号，提示用户在第二天开盘时以开盘价卖出。</p>\n                                  <p>特例：如果出现了买入信号，但第二天出现开盘涨停、停牌等特殊情况，无法买入，那么当天已入选股票列表中将不存在该只股票。</p>\n                                  <p>如果出现了卖点信号，但第二天出现开盘跌停、停牌等特殊情况，无法卖出，该股票也会从入选列表中消失，如用户已持有这只股票，还请谨慎操作，择时调仓。</p>'
            },
            {
              title: '波段优选策略的选股胜率是如何计算的？',
              content: '<p>股票成功入选后在出现卖点，下一交易日成功卖出且盈利的股票总数/股票池所有筛选的股票数量，选股胜率代表着该股票池的历史战绩，选股胜率越高，收益越好</p>'
            },
            {
              title: '波段优选策略的平均持仓期是如何计算的？',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日开始到出现卖出信号下个交易日结束时，所用的平均天数，标明该股票池具有中短线操作的特征。</p>'
            },
            {
              title: '波段优选策略的平均收益如何计算的',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日以开盘价模拟买入，到出现卖出信号后下个交易日以开盘价模拟卖出时平均盈利比率，比率越高，总体收益机率越高。</p>'
            },
            {
              title: '波段优选策略是否有持仓股票？',
              content: '<p>波段优选策略是没有持仓股票的，所标注的买入价格、卖出价格均是为用户提供的建议价格，用户可根据自己的判断进行交易。</p>'
            },
            {
              title: '盈利概率是什么意思？',
              content: '<p>股票在量化股票池中筛选后，量化系统会根据股票的信号强弱进行计算，未来卖出时的盈利机率，概率越高，获利机率越大。</p>'
            },
            {
              title: '历史战绩中买卖价格计算的盈亏与盈利比率不符？',
              content: '<p>如果出现盈利比率与买卖价格不符的情况，则该股在交易区间内大概率出现分红除息情况，请参考复权价格进行收益计算。</p>'
            },
            {
              title: '如何联系到客服？',
              content: '<p>用户可通过拨打电话：400-166-1188联系金融界智能投服的客服人员，为您答疑解惑.</p>\n                                  <p>如用户有投诉和建议也可拨打：010-83275199。</p>'
            }
          ]
        },
        'zxjj': {
          'question': [{
            title: '中线掘金介绍',
            record: [{
              list: '什么是中线掘金？',
              typeId: '4',
              subTypeId: '1'
            }, {
              list: '中线掘金策略筛选的股票规则是什么？',
              typeId: '4',
              subTypeId: '2'
            }, {
              list: '中线掘金策略属于何种类型的策略？',
              typeId: '4',
              subTypeId: '3'
            }]
          }, {
            title: '使用帮助',
            record: [{
              list: '中线掘金策略信号什么时候发出？',
              typeId: '5',
              subTypeId: '1'
            }, {
              list: '如何根据策略发出的信号进行操作？',
              typeId: '5',
              subTypeId: '2'
            }, {
              list: '中线掘金策略的选股胜率是如何计算的？',
              typeId: '5',
              subTypeId: '3'
            }, {
              list: '中线掘金策略的平均持仓期是如何计算的？',
              typeId: '5',
              subTypeId: '4'
            }, {
              list: '中线掘金策略的平均收益如何计算的？',
              typeId: '5',
              subTypeId: '5'
            }, {
              list: '中线掘金策略是否有持仓股票？',
              typeId: '5',
              subTypeId: '6'
            }, {
              list: '盈利概率是什么意思？',
              typeId: '5',
              subTypeId: '7'
            }, {
              list: '历史战绩中买卖价格计算的盈亏与盈利比率不符',
              typeId: '5',
              subTypeId: '8'
            }, {
              list: '最大回撤是什么意思？',
              typeId: '5',
              subTypeId: '9'
            }]
          }, {
            title: '客户服务',
            record: [{
              list: '如何联系客服？',
              typeId: '6',
              subTypeId: '1'
            }]
          }],
          'answer': [{
              title: '什么是中线掘金？',
              content: '<p>中线掘金是为用户提供的择时、选股的量化策略股票池，筛选震荡期中，存在低位拐点时发出买入信号，且在未来大概率持续拉升的股票，并且在震荡期处于高位即将下跌时发出卖出信号，可实现中长期持续获利的量化策略模型。</p>'
            },
            {
              title: '中线掘金策略筛选的股票规则是什么？',
              content: '<p>策略主要筛选的是处在震荡期内的股票。</p>'
            },
            {
              title: '中线掘金策略属于何种类型的策略？',
              content: '<p>策略产生买入信号的股票平均在30天左右产生卖出信号，属于中线类，选股成功率高、稳健型量化策略。</p>'
            },
            {
              title: '中线掘金策略信号什么时候发出',
              content: '<p>在每天收盘后，量化系统会经过大量计算，一般情况下在15：30-18：00期间更新，并且以消息的形式推送给用户，您可以直接点击APP顶端的及时消息进行查看，也可以点击右上角信封图标，进入消息列表中点击极智选股，进行查看。</p>'
            },
            {
              title: '如何根据策略发出的信号进行操作？',
              content: '<p>在每天收盘后，出现买入信号时，会提供价格区间，提示用户在第二天开盘时以开盘价买入</p>\n                                  <p>在每天收盘后，已出现买点的股票，如产生卖出信号，提示用户在第二天开盘时以开盘价卖出</p>\n                                  <p>特例：如果出现了买入信号，但第二天出现开盘涨停、停牌、开盘价没有在建议买入区间等特殊情况，无法买入，那么当天已入选股票列表中将不存在该只股票如果出现了卖点信号，但第二天出现开盘跌停、停牌等特殊情况，无法卖出，该股票也会从入选列表中消失，如用户已持有这只股票，还请谨慎操作，择时调仓</p>'
            },
            {
              title: '中线掘金策略的选股胜率是如何计算的？',
              content: '<p>股票成功入选后在出现卖点，下一交易日成功卖出且盈利的股票总数/股票池所有筛选的股票数量，选股胜率代表着该股票池的历史战绩，选股胜率越高，收益越好。</p>'
            },
            {
              title: '中线掘金策略的平均持仓期是如何计算的？',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日开始到出现卖出信号下个交易日结束时，所用的平均天数，标明该股票池具有中线操作的特征。</p>'
            },
            {
              title: '中线掘金策略的平均收益如何计算的？',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日以开盘价模拟买入，到出现卖出信号后下个交易日以开盘价模拟卖出时平均盈利比率，比率越高，总体收益机率越高</p>'
            },
            {
              title: '中线掘金策略是否有持仓股票？',
              content: '<p>中线掘金策略是没有持仓股票的，所标注的买入价格、卖出价格均是为用户提供的建议价格，用户可根据自己的判断进行交易。</p>'
            },
            {
              title: '盈利概率是什么意思？',
              content: '<p>股票在量化股票池中筛选后，量化系统会根据股票的信号强弱进行计算，未来卖出时的盈利机率，概率越高，获利机率越大。</p>'
            },
            {
              title: '历史战绩中买卖价格计算的盈亏与盈利比率不符',
              content: '<p>如果出现盈利比率与买卖价格不符的情况，则该股在交易区间内大概率出现分红除息情况，请参考复权价格进行收益计算。</p>'
            },
            {
              title: '最大回撤是什么意思？',
              content: '<p>一般用来衡量公募基金、私募基金或者量化投资策略的抗风险能力。回撤的意思是指在某一时段内产品净值或者收益从最高点开始回落到最低点的幅度，通常用来描述投资者可能面临的最大亏损。</p>'
            },
            {
              title: '如何联系到客服？',
              content: '<p>用户可通过拨打电话：400-166-1188联系金融界智能投服的客服人员，为您答疑解惑</p>\n                                  <p>如用户有投诉和建议也可拨打：010-83275199。</p>'
            }
          ]
        },
        'jzmnc': {
          'question': [{
            title: '极智模拟仓介绍',
            record: [{
              list: '什么是极智模拟仓策略？',
              typeId: '7',
              subTypeId: '1'
            }, {
              list: '怎样根据极智模拟仓策略进行操作？',
              typeId: '7',
              subTypeId: '2'
            }, {
              list: '极智模拟仓策略的调仓规则是什么？',
              typeId: '7',
              subTypeId: '3'
            }, {
              list: '为什么极智模拟仓策略是每天收盘后更新不是盘中更新？',
              typeId: '7',
              subTypeId: '4'
            }, {
              list: '极智模拟仓策略的历史总收益是如何计算的？',
              typeId: '7',
              subTypeId: '5'
            }]
          }, {
            title: '客户服务',
            record: [{
              list: '如何联系客服？',
              typeId: '6',
              subTypeId: '1'
            }]
          }],
          'answer': [{
              title: '什么是极智模拟仓策略？',
              content: '<p>极智模拟仓是运用独创的人工智能形态识别，结合行为金融学，捕捉主力完成建仓、洗盘，但主力并未离场有望拉升的强势股票的量化模型，具有盈亏比高，获利稳健的特点。</p>'
            },
            {
              title: '怎样根据极智模拟仓策略进行操作？',
              content: '<p>1.更新时间：每个交易日收盘后16:00左右更新数据。</p>\n                                  <p>2.股票调入：每个交易日收盘后16:00左右数据计算完毕时，系统会自动提示（关注系统消息或调仓记录）下一交易日将要调入的股票(待调入)，下一交易日开盘时，若股票未出现停牌、涨停等无法调入股票的情况，则以开盘价调入股票（调入成功），否则放弃调入，系统计为调入失败。</p>\n                                  <p>3.股票调出：<br/> 1）若持仓的某只股票出现+10%或以上盈利时，止盈调出股票。 <br/> 2）若持仓的某只股票出现-5%亏损时，止损调出股票。</p>'
            },
            {
              title: '极智模拟仓策略的调仓规则是什么？',
              content: '<p>在调入股票累计涨幅达到10%或累计跌幅达到-5%时，即达到调仓条件；用户也可以根据自己的需要达到预期收益目标，自行调仓，建议跟随策略规则进行调仓。</p>'
            },
            {
              title: '为什么极智模拟仓策略是每天收盘后更新，不是盘中更新？',
              content: '<p>①按照经典的道氏理论观点，收盘价是所有价格中最关键的价格，对判断趋势至关重要；</p>\n                                  <p>②极智模拟仓是通过每交易日70亿次的计算，对沪深两市3000只股票、十年数据进行深度回溯和自动学习，生成高收益、低风险的量化调仓系统，运算数据量非常大，测算股价趋势，需要运算时间；</p>\n                                  <p>③盘后测算还有一个关键好处：去除盘中价格频繁波动，克服干扰，克服人性中恐惧、贪婪的弱点。</p>'
            },
            {
              title: '极智模拟仓策略的历史总收益是如何计算的？',
              content: '<p>以2016年3月1日作为策略成立日，当某只股票出现买入信号后，以初始仓位的20%买入该股票，出现止盈或止损信号时卖出，截止到目前的总仓位相对于初始仓位的百分比即历史总收益。</p>'
            },
              {
                  title: '如何联系到客服？',
                  content: '<p>用户可通过拨打电话：400-166-1188联系金融界智能投服的客服人员，为您答疑解惑</p>\n                                  <p>如用户有投诉和建议也可拨打：010-83275199。</p>'
              }
          ]
        },
        'zltj': {
          'question': [{
            title: '主力天机介绍',
            record: [{
              list: '什么是主力天机?',
              typeId: 7,
              subTypeId: 1
            }, {
              list: '主力天机策略筛选的股票规则是什么?',
              typeId: 7,
              subTypeId: 2
            }, {
              list: '主力天机策略属于何种类型的策略?',
              typeId: 7,
              subTypeId: 3
            }]
          }, {
            title: '使用帮助',
            record: [{
              list: '主力天机策略信号什么时候发出?',
              typeId: 8,
              subTypeId: 1
            }, {
              list: '如何根据策略发出的信号进行操作？',
              typeId: 8,
              subTypeId: 2
            }, {
              list: '主力天机策略的选股胜率是如何计算的？',
              typeId: 8,
              subTypeId: 3
            }, {
              list: '主力天机策略的平均持仓期是如何计算的？',
              typeId: 8,
              subTypeId: 4
            }, {
              list: '主力天机策略的平均收益如何计算的？',
              typeId: 8,
              subTypeId: 5
            }, {
              list: '主力天机策略是否有持仓股票？',
              typeId: 8,
              subTypeId: 6
            }, {
              list: '盈利概率是什么意思？',
              typeId: 8,
              subTypeId: 7
            }, {
              list: '历史战绩中买卖价格计算的盈亏与盈利比率不符',
              typeId: 8,
              subTypeId: 8
            }]
          }, {
            title: '如何联系到客服？',
            record: [{
              list: '遇到问题后可以从哪里获取到相关帮助？',
              typeId: 9,
              subTypeId: 1
            }]
          }],
          'answer': [{
              title: '什么是主力天机？',
              content: '<p>隶属量化选股策略，是基于价格历史形态走势对股票的短期趋势进行预测，并据此建仓。通过历史价格形态预测未来主要依据主力拉升、价格突破的原理，称其为“主力天机“</p>'
            },
            {
              title: '主力天机策略筛选的股票规则是什么？',
              content: '<p>筛选主力在经过吸筹、洗盘阶段完成后，开始启动股价，未来一段时间大概率会有上涨的股票，在震荡期时效果显著</p>'
            },
            {
              title: '主力天机策略属于何种类型的策略？',
              content: '<p>策略产生买入信号的股票平均在12天左右产生卖出信号，属于中短线类，选股成功率高，平均收益较好的稳健型量化策略。</p>'
            },
            {
              title: '主力天机策略信号什么时候发出',
              content: '<p>在每天收盘后，量化系统会经过大量计算，一般情况下在15：30-18：00期间更新，并且以消息的形式推送给用户，您可以直接点击APP顶端的及时消息进行查看，也可以点击右上角信封图标，进入消息列表中点击极智选股，进行查看</p>'
            },
            {
              title: '如何根据策略发出的信号进行操作',
              content: '<p>在每天收盘后，出现买入信号时，会提供价格区间，提示用户在第二天开盘时以开盘价买入</p>\n                                  <p>主力天机为盘中出现卖出信号的策略，需用户自行关注，已出现买入信号的股票，在盘中出现如下条件之一即可自行调出</p>\n                                  <p>1.买入后浮动盈利超过10%</p>\n                                  <p>2.最大回撤超过15%</p>\n                                  <p>3.持股15天</p>\n                                  <p>特例：如果出现了买入信号，但第二天出现开盘涨停、停牌等特殊情况，无法买入，那么当天已入选股票列表中将不存在该只股票</p>\n                                  <p>如盘中达到止损条件，但由于跌停等因素导致无法卖出，可延续到下个交易日，待可以卖出时，自行卖出.</p>'
            },
            {
              title: '主力天机策略的选股胜率是如何计算的？',
              content: '<p>股票成功入选后在出现卖点，下一交易日成功卖出且盈利的股票总数/股票池所有筛选的股票数量，选股胜率代表着该股票池的历史战绩，选股胜率越高，收益越好</p>'
            },
            {
              title: '主力天机策略的平均持仓期是如何计算的？',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日开始到出现卖出信号下个交易日结束时，所用的平均天数，标明该股票池具有中短线操作的特征</p>'
            },
            {
              title: '主力天机策略的平均收益如何计算的？',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日以开盘价模拟买入，到出现卖出信号后下个交易日以开盘价模拟卖出时平均盈利比率，比率越高，总体收益机率越高</p>'
            },
            {
              title: '主力天机策略是否有持仓股票？',
              content: '<p>主力天机策略是没有持仓股票的，所标注的买入价格、卖出价格均是为用户提供的建议价格，用户可根据自己的判断进行交易</p>'
            },
            {
              title: '盈利概率是什么意思',
              content: '<p>股票在量化股票池中筛选后，量化系统会根据股票的信号强弱进行计算，未来卖出时的盈利机率，概率越高，获利机率越大.</p>'
            },
            {
              title: '历史战绩中买卖价格计算的盈亏与盈利比率不符',
              content: '<p>如果出现盈利比率与买卖价格不符的情况，则该股在交易区间内大概率出现分红除息情况，请参考复权价格进行收益计算。</p>'
            },
            {
              title: '如何联系到客服？',
              content: '<p>用户可通过拨打电话：400-166-1188联系金融界智能投服的客服人员，为您答疑解惑</p>\n                                  <p>如用户有投诉和建议也可拨打：010-83275199</p>'
            }
          ]
        },
        'rdjj': {
          'question': [{
            title: '热点狙击介绍',
            record: [{
              list: '什么是热点狙击?',
              typeId: 10,
              subTypeId: 1
            }, {
              list: '热点狙击策略筛选的股票规则是什么?',
              typeId: 10,
              subTypeId: 2
            }, {
              list: '热点狙击策略属于何种类型的策略?',
              typeId: 10,
              subTypeId: 3
            }]
          }, {
            title: '使用帮助',
            record: [{
              list: '热点狙击策略信号什么时候发出?',
              typeId: 11,
              subTypeId: 1
            }, {
              list: '如何根据策略发出的信号进行操作？',
              typeId: 11,
              subTypeId: 2
            }, {
              list: '热点狙击策略的选股胜率是如何计算的？',
              typeId: 11,
              subTypeId: 3
            }, {
              list: '热点狙击策略的平均持仓期是如何计算的？',
              typeId: 11,
              subTypeId: 4
            }, {
              list: '热点狙击策略的平均收益如何计算的？',
              typeId: 11,
              subTypeId: 5
            }, {
              list: '热点狙击策略是否有持仓股票？',
              typeId: 11,
              subTypeId: 6
            }, {
              list: '盈利概率是什么意思？',
              typeId: 11,
              subTypeId: 7
            }, {
              list: '历史战绩中买卖价格计算的盈亏与盈利比率不符',
              typeId: 11,
              subTypeId: 8
            }]
          }, {
            title: '如何联系到客服？',
            record: [{
              list: '遇到问题后可以从哪里获取到相关帮助？',
              typeId: 9,
              subTypeId: 1
            }]
          }],
          'answer': [{
              title: '什么是热点狙击？',
              content: '<p>热点狙击是金融界为用户提供的择时、选股的量化策略股票池，当前策略的特点是依靠业界最先进的人工智能算法，针对沪深A股3000只股票近10年历史数据进行回溯计算和自动学习，利用趋势分析找出热点板块，通过对热点板块的趋势判断，决定板块的买卖时机，再通过近期表现分析，选择热点板块内的优质个股，获取较高的收益</p>'
            },
            {
              title: '热点狙击策略筛选的股票规则是什么？',
              content: '<p>策略主要筛选热点板块中近期表现良好的优质个股，在一段时期内获取较高的收益</p>'
            },
            {
              title: '热点狙击策略属于何种类型的策略？',
              content: '<p>策略产生买入信号的股票平均在40天左右产生卖出信号，属于中长线类，单次收益较高、盈亏比也较高的稳健型量化策略</p>'
            },
            {
              title: '热点狙击策略信号什么时候发出',
              content: '<p>在每天收盘后，量化系统会经过大量计算，一般情况下在15：30-18：00期间更新，并且以消息的形式推送给用户，您可以直接点击APP顶端的及时消息进行查看，也可以点击右上角信封图标，进入消息列表中点击极智选股，进行查看</p>'
            },
            {
              title: '如何根据策略发出的信号进行操作',
              content: '<p>在每天收盘后，出现买入信号时，会提供价格区间，提示用户在第二天开盘时以开盘价买入</p>\n                                  <p>热点狙击为盘中出现卖出信号的策略，需用户自行关注，已出现买入信号的股票，在盘中出现如下条件之一即可自行调出</p>\n                                  <p>1.买入后浮动盈利超过10%</p>\n                                  <p>2.最大回撤超过15%</p>\n                                  <p>3.持股15天</p>\n                                  <p>特例：如果出现了买入信号，但第二天出现开盘涨停、停牌等特殊情况，无法买入，那么当天已入选股票列表中将不存在该只股票</p>\n                                  <p>如盘中达到止损条件，但由于跌停等因素导致无法卖出，可延续到下个交易日，待可以卖出时，自行卖出.</p>'
            },
            {
              title: '热点狙击策略的选股胜率是如何计算的',
              content: '<p>股票成功入选后在出现卖点，下一交易日成功卖出且盈利的股票总数/股票池所有筛选的股票数量，选股胜率代表着该股票池的历史战绩，选股胜率越高，收益越好</p>'
            },
            {
              title: '热点狙击策略的平均持仓期是如何计算的',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日开始到出现卖出信号下个交易日结束时，所用的平均天数，标明该股票池具有中短线操作的特征</p>'
            },
            {
              title: '热点狙击策略的平均收益如何计算的',
              content: '<p>股票池入选的股票从出现买入信号后下个交易日以开盘价模拟买入，到出现卖出信号后下个交易日以开盘价模拟卖出时平均盈利比率，比率越高，总体收益机率越高</p>'
            },
            {
              title: '热点狙击策略是否有持仓股票',
              content: '<p>热点狙击策略是没有持仓股票的，所标注的买入价格、卖出价格均是为用户提供的建议价格，用户可根据自己的判断进行交易</p>'
            },
            {
              title: '盈利概率是什么意思',
              content: '<p>股票在量化股票池中筛选后，量化系统会根据股票的信号强弱进行计算，未来卖出时的盈利机率，概率越高，获利机率越大.</p>'
            },
            {
              title: '历史战绩中买卖价格计算的盈亏与盈利比率不符',
              content: '<p>如果出现盈利比率与买卖价格不符的情况，则该股在交易区间内大概率出现分红除息情况，请参考复权价格进行收益计算。</p>'
            }
          ]
        }
      }
      return obj
    },
    getQuestionList: function() {
      const helpData = this.getHelpData()
      this.questionList = helpData[this.nameTxt[this.strategyId-1]].question
      this.answerList = helpData[this.nameTxt[this.strategyId-1]].answer
      let questions = []
      this.questionList.forEach((question) => {
          questions =  questions.concat(question.record)
      })
      for(const i in questions){
          if(this.answerList[i]){
              this.answerList[i].subTypeId = questions[i].typeId+'-'+questions[i].subTypeId
          }
      }
    },
      scrollAnswers:function (e) {
          e.stopPropagation()
        //  this.isShowSlideBar = true
          let scrollTop = e.target.scrollTop
          const answers = document.getElementsByClassName('answer-every')
          for(let i = 0; i<answers.length; i++){
              if(scrollTop>=answers[i].offsetTop && scrollTop<=answers[i].offsetTop+answers[i].clientHeight+20 && i !== this.activeIndex){
                  this.activeId = this.answerList[i].subTypeId
                  this.activeIndex = i
                  break
              }
          }

      },
      toAnswer:function (subId) {
          this.isClickQuestion = true
          this.activeId = subId
      }
  },
  mounted() {
    this.getQuestionList()
  }
}
</script>
<style lang='scss' scoped>
@import '../../assets/css/base.css';
.content-wrap {
    box-sizing: border-box;
    width: 100%;
    height: 515px;
    padding: 30px 20px 30px 0;
    * {
        box-sizing: border-box;
    }
    .left-questions {
        width: 34%;
        height: 100%;
        border-right: 1px solid #ddd;
        font-size: 14px;
        padding-right: 0;
        overflow:auto;
    }
    .right-answers {
        width: 66%;
        height: 100%;
        padding-left: 42px;
        padding-right:20px;
        position: relative;
    }
    .auto{
      overflow: auto;
    }
   .hidden{
     overflow: hidden;
   }
    .question-block {
        margin-bottom: 32px;
    }
    .question-every {
        margin-bottom: 10px;
        color: #2388da;
        position: relative;
        padding:0 35px 0 40px;
    }
    .question-title {
        margin-bottom: 10px;
        color: #000;
        font-weight: bold;
        padding-left: 30px;
    }
    .question-every:before {
        content: "";
        background: #2388da;
        width: 3px;
        height: 3px;
        overflow: hidden;
        display: inline-block;
        position: absolute;
        top: 11px;
        left: 30px;
        transform: translateY(-50%);
    }
    .question-every a {
        cursor: pointer;
    }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: transparent !important;
    border-radius: 10px;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: transparent !important;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: transparent !important;
  }
  .answer-every{
    margin-bottom: 30px;
  }
  .answer-title{
    color:#000;
    font-size:14px;
    margin-bottom: 10px;
  }
  .answer-con{
    color:#666;
  }
  .active{
    background-color: #d3d3d3;
  }
}
</style>