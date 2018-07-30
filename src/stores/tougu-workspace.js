// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
export default {
    namespaced: true,
    state: {
        liveData: [],
        selectTabIndex: 1
    },
    mutations: {
        setSelectedTabIndex(state, data) {
            state.selectTabIndex = data
        },
        setLiveData(state, data) {
            state.liveData = data;
        },
        setpullData(state, data) {
            state.liveData.push(...data);
        },
        appendLiveData(state, data) {
            state.liveData = data.concat(state.liveData)
        }
    },
    actions: {
        // 初始化页面数据
        getLiveInfo({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                // const url = `https://sslapi.jrj.com.cn/itougu/mapi/xlive_poll/queryViewAndTalkForNew/${data.roomId}?onlyView=true`;
                const url = `https://itougu.jrj.com.cn/xlive_poll/queryViewAndTalkForNew/${data.roomId}?onlyView=true`;
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
        },
        // 短轮询页面
        getPullLiveInfo({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                // const url = `https://sslapi.jrj.com.cn/itougu/mapi/xlive_poll/queryViewAndTalkForNew/${data.roomId}?timeId=${data.timeId}&onlyView=true`;
                const url = `https://itougu.jrj.com.cn/xlive_poll/queryViewAndTalkForNew/${data.roomId}?timeId=${data.timeId}&onlyView=true`;
                return fetch(url).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data.retCode) {
                        // 如果有code 则出现异常
                    } else {
                        commit('setpullData', data.data.list);
                        resolve();
                    }
                });
            });
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
        }
    }
}