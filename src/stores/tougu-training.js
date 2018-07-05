import $ from 'jquery'
export default {
    namespaced: true,
    state: {
        videoList: [],
        videoPlayStatus: true,
        playingVideoIndex: 0
    },
    mutations: {
        setVideoList(state, data) {
            state.videoList = data
        },
        setPlayingVideoIndex(state, data) {
            state.playingVideoIndex = data
        },
        setVideoMaskStatus(state, data) {
            state.videoPlayStatus = data
        }
    },
    actions: {
        getVideoList({ commit, state }, data) {
            $.ajax({
                type: 'get',
                url: `https://sslapi.jrj.com.cn/itougu/mapi/wireless/xlive/extend/vipVedioList.jspa`,
                data: {
                    tgId: `${data.tgid}`
                },
                dataType: 'json',
                success: function(data) {
                    if (data.retCode === 0) {
                        commit('setVideoList', data.data)
                        if (data.data.length > 1) {
                            commit('setPlayingVideoIndex', 0)
                        }
                    }
                }
            })
        }

    }
}