import * as types from "../mutation_types"
import getWeb3 from "../../util/getWeb3"
import pollWeb3 from "../../util/pollWeb3"
import {axios} from "../../axios"
import router from "../../router"
import {DappABI} from "../../util/constants/dapp.abi"
import {RollerABI} from '../../util/constants/roller.abi'
import contracts from '../../util/constants/eth.abi.json'
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
        diceApiHandle: null,
        at: 0,   //平台游戏币
        bet: 0,
        userName: "",  //平台账号名
        token: "",  //平台账号token
        platform: "IMPORT", //账号标识（平台or mateMask）
        inviteCode: "",  //邀请码
        contractAB: 0,
        pledgeApiHandle: null
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
        web3Copy.diceApiHandle = new payload.web3.eth.Contract(contracts.Roller, window.ROLLERADDRESS)
        web3Copy.ABapiHandle = new payload.web3.eth.Contract(contracts.AB, window.ETHABTOKEN)
        web3Copy.pledgeApiHandle = new payload.web3.eth.Contract(contracts.Pledge, window.ETHPLEDGEADDRESS)
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
        getWeb3().then(result => {
            // 成功获取HD钱包信息
            commit(types.REGISTER_WEB3_INSTANCE, result)
            // 检测登录态
            if(rootState.user.userInfo.accounts && rootState.user.userInfo.accounts.length > 0) {
                // 有登录态
                console.log("有登录态registerWeb3")
                let haveHD = false
                rootState.user.userInfo.accounts.forEach((val, idx) => {
                    if(val.userAddress == result.coinbase) {
                        // 登录态中包含插件地址
                        haveHD = true
                    }
                })
                if(rootState.user.currentAddr.platform != "DISPATCHER" && !haveHD) {
                    // 当前选中的HD钱包地址跟插件不一致
                    getNonce(result.coinbase, result.web3)
                }

            }else {
                // 没有登录态
                //外部地址登录 首次将注册到平台，再检测是否绑定，已绑定返回平台账号信息
                console.log("没有登录态registerWeb3")
                getNonce(result.coinbase, result.web3)
            }

            function getNonce(address, web3) {
                axios.get("/open/metamask", {
                    params: {
                        address: address,
                        type: "web3Handler"
                    }
                }).then(res => {
                    console.log(res)
                    if(res.code == 200) {
                        coinLogin("123456", address, res.result)
                    }
                })
            }

            function coinLogin(signature, address, nonce) {
                axios.post("/open/plugin_login", {
                    "chainType": "ETH",
                    "message": nonce,
                    "publicAddress": address,
                    "signature": signature,
                    "inviteCode": sessionStorage.getItem('inviteCode'),
                    "appFrom": localStorage.getItem("APPFROM") || ""
                }).then(res => {
                    if(res.code == 200) {
                        commit(types.SET_USERINFO, res.result)
                        commit("alert", {
                            type: "info",
                            msg: "Welcome back."
                        })
                    }
                }).catch(err => {

                })
            }

        }).catch(e => {
            console.log('error in action registerWeb3', e)
        })
    },
    updateWeb3({commit, rootState}, playload) {
        let have = false
        if(!playload.coinbase && rootState.user.userInfo.token) {
            rootState.user.userInfo.accounts.forEach((val, idx) => {
                if(val.platform == "DISPATCHER") {
                    have = true
                }
            })
            // 插件退出并且没有平台账号，清除登录态
            if(!have) {
                commit(types.REMOVE_USERINFO)
            }
        }
        commit(types.UPDATE_WEB3_INSTANCE, playload)
    }
}

export default {
    state,
    mutations,
    actions
}
