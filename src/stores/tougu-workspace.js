import $ from 'jquery'

export default {
    namespaced: true,
    state: {
        roomData:{},
        strategyData: [],
        videoList: [],
        videoPlayStatus: true,
        playingVideoIndex: 0,
        selectTabIndex: 4
    },
    mutations: {
        setRoomData(state, data){
            state.roomData = data
        },
        setSelectedTabIndex(state, data){
            state.selectTabIndex = data
        },
        setStrategyData(state, data){
            state.strategyData = data
        },
        setVideoList(state, data){
            state.videoList = data
        },
        setPlayingVideoIndex(state, data){
            state.playingVideoIndex = data
        },
        setVideoMaskStatus(state, data){
            state.videoPlayStatus = data
        }
    },
    actions: {
        getStudioInfo({ commit, state }, data){
            $.ajax({
                type: 'get',
//                url: `http://mapi.itougu.jrj.com.cn/wireless/xlive/getStudioInfo?rid=${data.roomId}&userId=${data.userId}`,
                url: `/mock/getStudioInfo.json?rid=${data.roomId}&userId=${data.userId}`,
                dataType: 'json',
                success:function(data){
                    if(data.retCode){
                        // 如果有code 则出现异常
                    }else{
                        commit('setRoomData', data)
                    }
                }
            })
        },
        getStrategyByTid({ commit , state }, data){
            $.ajax({
                type: 'get',
//                url: '',
                url: '/mock/tougu-strategy.json',
                data:{
                    tid: `${data.tid}`,
                    passportId: `${data.passportId}`,
                    ps: '10',
                    cid: `${data.cid}` || 0
                },
                dataType: 'json',
                success:function(data){
                    if(data.ret === 0){
                        commit('setStrategyData', data.data.list)
                    }
                }
            })
        },
        getVideoList({ commit, state }, data){
            $.ajax({
                type: 'get',
//                url: 'http://mapi.itougu.jrj.com.cn/wireless/xlive/extend/vipVedioList.jspa',
                url: '/mock/video-list.json',
                data:{
                    tgid: `${data.tgid}`
                },
                dataType: 'json',
                success:function(data){
                    if(data.retCode === 0){
                        commit('setVideoList', data.data)
                        if(data.data.length > 1){
                            commit('setPlayingVideoIndex', 1)
                        }
                    }
                }
            })
        }
    }
}