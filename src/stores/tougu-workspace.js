import $ from 'jquery'
// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
export default {
    namespaced: true,
    state: {
        liveData: [],
        videoList: [],
        videoPlayStatus: true,
        playingVideoIndex: 0,
        selectTabIndex: 1

    },
    mutations: {
        setSelectedTabIndex(state, data) {
            state.selectTabIndex = data
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
        },
        appendLiveData(state, data) {
            state.liveData = data.concat(state.liveData)
        }
    },
    actions: {
        // 初始化页面数据
        getLiveInfo({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                const url = `https://sslapi.jrj.com.cn/itougu/mapi/xlive_poll/queryViewAndTalkForNew/${data.roomId}?onlyView=true`;
                return fetch(url).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data.retCode) {
                        // 如果有code 则出现异常
                    } else {
                        commit('setLiveData', data.data.list);
                        resolve();
                    }
                });
            });
            /* return new Promise((resolve, reject) => {
                $.ajax({
                    type: 'get',
                    url: `https://sslapi.jrj.com.cn/itougu/mapi/xlive_poll/queryViewAndTalkForNew/${data.roomId}?onlyView=true`,
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('passportId', '180522010063596180');
                        xhr.setRequestHeader('accessToken', 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh');
                    },
                    dataType: 'jsonp',
                    success: function(data) {
                        if (data.retCode) {
                            // 如果有code 则出现异常
                        } else {
                            commit('setLiveData', data.data.list);
                            resolve();
                        }
                    }
                });
            }) */

        },
        // 加载页面历史数据
        getHistoryInfo({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/xlive/queryViewAndTalkForOld/${data.roomId}/${data.timeId}?onlyView=true`;
                return fetch(url).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data.retCode) {
                        // 如果有code 则出现异常
                    } else {
                        commit('appendLiveData', data.data.list);
                        resolve();
                    }
                });
            });
            /* $.ajax({
                type: 'get',
                beforeSend: function(xhr) {
                    xhr.setRequestHeader('passportId', '180522010063596180');
                    xhr.setRequestHeader('accessToken', 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh');
                    xhr.setRequestHeader('APPVER', '7.0.0');
                },
                url: `https://sslapi.jrj.com.cn/itougu/mapi/wireless/xlive/queryViewAndTalkForOld/${data.roomId}/${data.timeId}?onlyView=true`,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.retCode) {
                        // 如果有code 则出现异常
                    } else {
                        commit('appendLiveData', data.data.list)
                    }
                }
            }) */
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