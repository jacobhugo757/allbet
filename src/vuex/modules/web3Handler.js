import * as types from "../mutation_types"
import getWeb3 from "../../util/getWeb3"
import pollWeb3 from "../../util/pollWeb3"
import {axios} from "../../axios"
import router from "../../router"
import {DappABI} from "../../util/constants/dapp.abi"
import LangZh from "../../lang/language_packs/zh"
import LangEn from "../../lang/language_packs/en"

const language = {
    "zh-CN": LangZh,
    "en-US": LangEn
}

const state = {
    web3: {
        isInjected: false,
        web3Instance: null,
        networkId: null,
        coinbase: null,
        balance: null,
        error: null,
        apiHandle: null,
        at: 0,   //平台游戏币
        bet: 0,
        userName: "",  //平台账号名
        token: "",  //平台账号token
        platform: "IMPORT", //账号标识（平台or mateMask）
        inviteCode: ""  //邀请码
    },
    contractInstance: null
}

const mutations = {
    /**
     * 注册web3实例
     * @author shanks
     */
    [types.REGISTER_WEB3_INSTANCE](state, payload) {
        let web3Copy = state.web3
        web3Copy.coinbase = payload.coinbase
        web3Copy.networkId = payload.networkId
        web3Copy.balance = payload.web3.utils.fromWei(payload.balance, "ether")
        web3Copy.isInjected = payload.injectedWeb3
        web3Copy.web3Instance = payload.web3
        web3Copy.apiHandle = new payload.web3.eth.Contract(DappABI, window.BANCORADDRESS)
        state.web3 = web3Copy
        // 轮询
        pollWeb3()
    },
    /**
     * 更新web3实例
     * @author shanks
     */
    [types.UPDATE_WEB3_INSTANCE](state, payload) {
        state.web3.coinbase = payload.coinbase
        state.web3.balance = state.web3.web3Instance.utils.fromWei(payload.balance || "0", "ether")
    },
    /**
     * 更新web3平台币以及账户名
     * @author shanks
     */
    [types.UPDATE_WEB3_AT](state, playload) {
        state.web3 = Object.assign(state.web3, playload)
    }
}

const actions = {
    registerWeb3({commit, rootState}) {
        console.log("注册web3")
        getWeb3.then(result => {
            // 成功获取HD钱包信息
            commit(types.REGISTER_WEB3_INSTANCE, result)
            // 检测登录态
            
            if(rootState.user.userInfo.assets && rootState.user.userInfo.assets.length > 0) {
                // 有登录态
                console.log("有登录态registerWeb3")
                const currentAddr = JSON.parse(localStorage.getItem("vuex")).user.currentAddr
                console.log(currentAddr.coinAddress)
                let haveHD = false
                rootState.user.userInfo.assets.forEach((val, idx) => {
                    if(val.coinAddress == result.coinbase) {
                        // 登录态中包含插件地址
                        haveHD = true
                    }
                })
                if(currentAddr.platform != "DISPATCHER" && !haveHD) {
                    // 当前选中的HD钱包地址跟插件不一致
                    coinLogin()
                }
                
            }else {
                // 没有登录态
                //外部地址登录 首次将注册到平台，再检测是否绑定，已绑定返回平台账号信息
                console.log("没有登录态registerWeb3")
                coinLogin()
            }
            
            function coinLogin() {
                axios.post("/open/login/coin", {
                    type: "ETH",
                    addr: result.coinbase
                }).then(res => {
                    if(res.code == 200) {
                        commit(types.SET_USERINFO, res.result)
                        if(res.result.assets.length <= 1) {
                            // 未绑定平台账号
                            console.log("未绑定平台账号")
                            commit(types.OPEN_CONFIRM, {
                                content: language[rootState.locale].message.PopBindDesc2,
                                btn: [
                                    {
                                        text: language[rootState.locale].message.PopClose,
                                    },
                                    {
                                        type: "high",
                                        text: language[rootState.locale].message.accountToBound,
                                        cb: () => {
                                            router.push('account-security?bind=1')
                                        }
                                    }
                                ]
                            })
                            commit(types.UPDATE_WEB3_AT, {
                                at: res.result.assets[0].at,
                                bet: res.result.assets[0].bet,
                                userName: res.result.assets[0].userName,
                                token: res.result.assets[0].token,
                                inviteCode: res.result.assets[0].inviteCode || ""
                            })
                        }else {
                            // 已绑定平台账号
                            res.result.assets.forEach(val => {
                                if(val.coinAddress == result.coinbase) {
                                    commit(types.UPDATE_WEB3_AT, {
                                        at: val.at,
                                        bet: val.bet,
                                        userName: res.result.assets[0].userName,
                                        token: val.token,
                                        inviteCode: res.result.assets[0].inviteCode
                                    })
                                }
                            })
                        }
                    }
                }).catch(err => {
        
                })
            }
            
        }).catch(e => {
            console.log('error in action registerWeb3', e)
        })
    },
    updateWeb3({commit}, playload) {
        commit(types.UPDATE_WEB3_INSTANCE, playload)
    }
}

export default {
    state,
    mutations,
    actions
}