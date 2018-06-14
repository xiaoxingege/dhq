import $ from 'jquery'

export default {
    namespaced: true,
    state: {
        roomData: [],
        liveData: [],
        strategyData: [],
        videoList: [],
        videoPlayStatus: true,
        playingVideoIndex: 0,
        selectTabIndex: 1

    },
    mutations: {
        setRoomData(state, data) {
            state.roomData = data
        },
        setSelectedTabIndex(state, data) {
            state.selectTabIndex = data
        },
        setStrategyData(state, data) {
            state.strategyData = data
        },
        setVideoList(state, data) {
            state.videoList = data
        },
        setPlayingVideoIndex(state, data) {
            state.playingVideoIndex = data
        },
        setVideoMaskStatus(state, data) {
            state.videoPlayStatus = data
        },
        setLiveData(state, data) {
            state.liveData = data
        }
    },
    actions: {
        getLiveInfo({ commit, state }, data) {
            $.ajax({
                type: 'get',
                url: `http://mapi.itougu.jrj.com.cn/xlive_poll/queryViewAndTalkForNew/${data.roomId}?onlyView=true`,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.retCode) {
                        // 如果有code 则出现异常
                    } else {
                        commit('setLiveData', data.data.list)
                    }
                }
            })
        },
        getStrategyByTid({ commit, state }, data) {
            $.ajax({
                type: 'get',
                // url: 'http://mapi.itougu.jrj.com.cn/wireless/tips/440?passportId=160913010072054592&ps=10',
                url: '/mock/tougu-strategy.json',
                data: {
                    tid: `${data.tid}`,
                    passportId: `${data.passportId}`,
                    ps: '10',
                    cid: `${data.cid}` || 0
                },
                dataType: 'json',
                success: function(data) {
                    if (data.ret === 0) {
                        commit('setStrategyData', data.data.list)
                    }
                }
            })
        },
        getVideoList({ commit, state }, data) {
            $.ajax({
                type: 'get',
                // url: ' http://mapi.itougu.jrj.com.cn/wireless/xlive/extend/vipVedioList.jspa?tgId=141124010055108034',
                url: '/mock/video-list.json',
                data: {
                    tgid: `${data.tgid}`
                },
                dataType: 'json',
                success: function(data) {
                    if (data.retCode === 0) {
                        commit('setVideoList', data.data)
                        if (data.data.length > 1) {
                            commit('setPlayingVideoIndex', 1)
                        }
                    }
                }
            })
        }
    }
}