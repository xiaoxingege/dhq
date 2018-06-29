// import 'whatwg-fetch'
import fetch from '../dhq/util/z3fetch'
export default {
    namespaced: true,
    state: {
        strategytips: [],
        strategyList: []
    },
    mutations: {
        setStrategytips(state, data) {
            state.strategytips = data
        },
        setStrategylist(state, data) {
            state.strategyList = data;
        },
        appendStrategyList(state, data) {
            state.strategyList = state.strategyList.concat(data);
        }
    },
    actions: {
        // 获取投资策略信息
        getStrategyByTid({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/tips/${data.tid}?ps=5`;
                // const url = `http://mapi.itougu.jrj.com.cn/wireless/tips/${data.tid}?ps=5`;
                return fetch(url).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data.ret === 0) {
                        commit('setStrategytips', data.data.tips);
                        commit('setStrategylist', data.data.list);
                        resolve();
                    }
                });
            });

        },
        getStrategyByCid({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                // const url = `http://mapi.itougu.jrj.com.cn/wireless/tips/${data.tid}?ps=5&cid=${data.cid}`;
                const url = `https://sslapi.jrj.com.cn/itougu/mapi/wireless/tips/${data.tid}?ps=3&cid=${data.cid}`;
                return fetch(url).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data.ret === 0) {
                        commit('setStrategytips', data.data.tips);
                        commit('appendStrategyList', data.data.list);
                        resolve();
                    }
                });
            });

        }
    }
}