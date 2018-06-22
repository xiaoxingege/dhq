import 'whatwg-fetch'
export default {
    namespaced: true,
    state: {
        roomData: []
    },
    mutations: {
        setStudioData(state, data) {
            state.roomData = data
        }
    },
    actions: {
        // 获取工作室信息
        getStudioInfo({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                const url = `http://mapi.itougu.jrj.com.cn/wireless/xlive/getStudioInfo?rid=${data.roomId}`;
                return fetch(url, {
                    headers: {
                        'passportId': '180522010063596180',
                        'accessToken': 'dNmwZmIWJLCjl1rl3igPNxsj8Vn2+97Aj72qoMaq7q92+FZHu8E5gcvaPSBS2/eh',
                        'APPVER': '7.0.0'
                    }
                }).then((res) => {
                    return res.json()
                }).then((data) => {
                    if (data.retCode) {
                        // 如果有code 则出现异常
                    } else {
                        commit('setStudioData', data);
                        resolve();
                    }
                });
            });

        }
        // 获取服务时间
        // getServerTime({ commit, state }, data) {
        //     const url = `http://itougu.jrj.com.cn/smartstock/api/excellent/checkAuth.jspa`;
        // }
    }
}