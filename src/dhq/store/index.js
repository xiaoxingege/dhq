import Vue from 'vue'
import Vuex from 'vuex'
import nativeApi, {
    nativeCalls
} from 'utils/nativeApi'
import dhqIndex from 'stores/dhqIndex'
import z3sockjs from 'stores/dhqsocket'
import stock from 'stores/dhqStock'
import topic from 'stores/z3dhq-theme'
import industry from 'stores/z3dhq-industry'
import zhikuanDetailPages from 'stores/dhq-detail-pages'
import touguWorkspaceStore from 'stores/tougu-workspace'
import touguSpaceNav from 'stores/touguspace-nav'
import touguStrategy from 'stores/touguspace-strategy'
import touguTraining from 'stores/tougu-training'
import stockMap from 'stores/dhqStockMap'
import plateMap from 'stores/dhqPlateMap'
import signal from 'stores/signal'
import jjrl from 'stores/jjrl'
import headline from 'stores/headline'
import dhqNews from 'stores/dhq-news'
import jzxg from 'stores/dhqJzxg'
import touguSpaceConsultation from 'stores/tougu-workspace-consultation'
import aiReplay from 'stores/ai-replay'
/* import fetch from '../util/z3fetch' */
/* import zhikuanSearch from 'stores/zhikuan-search'
import zhikuanSearchList from 'stores/zhikuan-search-list'
import bubbles from 'stores/bubbles'
import fundIntell from 'stores/fund-intell'
import goldStrategy from 'stores/gold-strategy'
import z3touguIndex from 'stores/z3tougu-index'
import backtestDetail from 'stores/backtest-detail'
import smartPool from 'stores/smartPool'
import filter from 'stores/filter'
import funcArchives from 'stores/fund-archives'
import fundRecord from 'stores/fund-record'
import backtestDetailH5 from 'stores/backtest-detail-h5'
import indexChart from 'stores/indexChart'
import finance from 'stores/finance'
import customerList from 'stores/customers'
import portraitDetail from 'stores/portrait-detail'
import optionalStock from 'stores/optional-stock'
import bullStock from 'stores/bullStock'
import dragonList from 'stores/dragon-list-dialog'
import intelligenceInfo from 'stores/intelligence-info'
import marketBubble from 'stores/market-bubbles'
import zInfoPublic from 'stores/z-info-public'
import clinicShares from 'stores/clinic-shares'*/
Vue.use(Vuex)

const mutationTypes = {
    'ERROR': 'ERROR',
    'UPDATE_AUTH_SETTING': 'UPDATE_AUTH_SETTING'
}
const state = {
    error: {
        errorCode: null,
        errorMsg: null
    },
    auth: {
        authorization: '', // 'Bearer test_z3quant_accesss_token', // test access_token
        clientid: '', // 'test_client_id',
        deviceid: '', // 'test_device_id',
        updateTime: null, // updateTime
        expires: 0 // second
    },
    user: {
        userId: null
    }
}
const getters = {
    authHeader: state => {
        if (state.auth.accessToken) {
            return {
                clientid: state.auth.clientid,
                deviceid: state.auth.deviceid,
                userId: state.user.userId,
                passportId: state.auth.passportId,
                accessToken: state.auth.accessToken
            }
        }
        return {}
    }
}
const actions = {
    authSetting({
        state,
        commit
    }) {
        return new Promise((resolve, reject) => {
            if (window.Z3) {
                if (!nativeCalls.authSetting) {
                    nativeCalls._regist('authSetting', function(info) {
                        // alert(info);
                        const authInfo = info;
                        authInfo.passportId = authInfo.userId
                        commit(mutationTypes.UPDATE_AUTH_SETTING, authInfo)
                        resolve(authInfo)
                    })
                }
                // 获取token, 客户端为异步机制，调用H5 nativeCallJs('authSetting',info)方法，需要使用promise保证获取后再执行之后的代码。
                nativeApi.syncAuthInfo();
            } else {
                // 如果不是从客户端过来的，则给予测试信息
                const authInfo = {
                    accessToken: 'Bearer test_z3quant_accesss_token',
                    // authorization: 'Bearer test_z3quant_accesss_token', // test access_token
                    clientid: 'z3client_dhq',
                    deviceid: 'test_device_id',
                    updateTime: null, // updateTime
                    expires: -1, // second
                    userId: 'userId', // test userid
                    passportId: null
                }
                commit(mutationTypes.UPDATE_AUTH_SETTING, authInfo)
                resolve()
            }
        })
    }
}
const mutations = {
    [mutationTypes.ERROR](state, error) {
        state.error = {
            errorCode: error.errCode,
            errorMsg: error.msg
        };
    },
    [mutationTypes.UPDATE_AUTH_SETTING](state, authInfo) {
        state.auth = {
            authorization: authInfo.authorization,
            clientid: authInfo.clientid,
            deviceid: authInfo.deviceid,
            expires: authInfo.expires,
            passportId: authInfo.passportId,
            accessToken: authInfo.accessToken,
            updateTime: new Date().getTime()
        }
        state.user = {
            userId: authInfo.userId
        }
    }
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        dhqIndex,
        z3sockjs,
        stock,
        topic,
        industry,
        zhikuanDetailPages,
        stockMap,
        plateMap,
        touguWorkspaceStore,
        touguSpaceNav,
        touguStrategy,
        touguSpaceConsultation,
        touguTraining,
        signal,
        jjrl,
        headline,
        jzxg,
        dhqNews,
        aiReplay
        /* zhikuanSearch,
         zhikuanSearchList,
         bubbles,
         fundIntell,
         goldStrategy,
         z3touguIndex,
         backtestDetail,
         smartPool,
         funcArchives,
         fundRecord,
         filter,
         backtestDetailH5,
         indexChart,
         finance,
         customerList,
         portraitDetail,
         optionalStock,
         bullStock,
         dragonList,
         intelligenceInfo,
         zInfoPublic,
         marketBubble,
         clinicShares */
    }
})