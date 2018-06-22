import 'whatwg-fetch'
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
                const url = `http://mapi.itougu.jrj.com.cn/wireless/tips/${data.tid}?ps=3`;
                return fetch(url, {
                    headers: {
                        'passportId': '180522010063596180',
                        'accessToken': 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh',
                        'APPVER': '7.0.0'
                    }
                }).then((res) => {
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
                const url = `http://mapi.itougu.jrj.com.cn/wireless/tips/${data.tid}?ps=3&cid=${data.cid}`;
                return fetch(url, {
                    headers: {
                        'passportId': '180522010063596180',
                        'accessToken': 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh',
                        'APPVER': '7.0.0'
                    }
                }).then((res) => {
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