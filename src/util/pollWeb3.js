/**
 * 轮询检索metamask状态
 * @author shanks
 * @date 2018/10/9
 * @version 1.0.0
 */
// import Web3 from "web3"
import store from "../store.js"
import {axios} from "../axios"
import * as types from "../vuex/mutation_types"
import LangZh from "../lang/language_packs/zh"
import LangEn from "../lang/language_packs/en"

const language = {
    "zh-CN": LangZh,
    "en-US": LangEn
}

const getNonce = function(address, web3) {
    console.log("getNonce")
    axios.get("/open/metamask", {
        params: {
            address: address,
            type: "pollWeb3"
        }
    }).then(res => {
        console.log(res)
        if(res.code == 200) {
            coinLogin("123456", address, res.result)
        }
    })
}

const coinLogin = function(signature, address, nonce) {
    axios.post("/open/plugin_login", {
        "chainType": "ETH",
        "message": nonce,
        "publicAddress": address,
        "signature": signature,
        "inviteCode": sessionStorage.getItem('inviteCode'),
        "appFrom": localStorage.getItem("APPFROM") || ""
    }).then(res => {
        if(res.code == 200) {
            // 存储新的登录态
            store.commit(types.SET_USERINFO, res.result)
            // 未绑定平台账号
            if(res.result.assets.length <= 1) {
                store.commit(types.UPDATE_WEB3_AT, {
                    at: res.result.assets[0].at,
                    bet: res.result.assets[0].bet,
                    userName: res.result.assets[0].userName,
                    token: res.result.assets[0].token,
                    inviteCode: res.result.assets[0].inviteCode || ""
                })
            }else {
                // 已绑定平台账号
                res.result.assets.forEach(val => {
                    if(val.coinAddress == newCoinbase) {
                        store.commit(types.UPDATE_WEB3_AT, {
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

let pollWeb3 = function() {
    let web3 = window.web3
    web3 = new Web3(web3.currentProvider)
    let storeWeb3 = {}
    clearInterval(window.pollWeb3Timer)
    window.pollWeb3Timer = setInterval(() => {
        storeWeb3 = store.state.web3Handler.web3
        if(web3 && storeWeb3.web3Instance) {
            // 检测地址变化
            web3.eth.getCoinbase().then((coinbase) => {
                if(!coinbase) { // 未获取到eth地址
                    store.dispatch("updateWeb3", {
                        coinbase: null,
                        balance: null
                    })
                }else {
                    if (coinbase !== storeWeb3.coinbase) {
                        // 地址发生变化
                        console.log("地址发生变化")
                        let newCoinbase = coinbase
                        web3.eth.getBalance(coinbase, (err, newBalance) => {
                            if(err) {
                                console.log(err)
                            }else {
                                store.dispatch("updateWeb3", {
                                    coinbase: newCoinbase,
                                    balance: newBalance
                                })
                                if(store.state.user.currentAddr.platform != "DISPATCHER") {
                                    //当前选中地址为HD钱包地址（踢掉平台账户启用新的HD钱包地址）
                                    // store.commit(types.REMOVE_USERINFO)  //清除账户登录信息
                                    //获取新地址的登录态
                                    //外部地址登录 首次将注册到平台，再检测是否绑定，已绑定返回平台账号信息

                                    getNonce(newCoinbase, web3)
                                }
                            }
                        })
                    }else {
                        web3.eth.getBalance(storeWeb3.coinbase, (err, newBalance) => {
                            if(err) {
                                console.log(err)
                            }else if(newBalance !== storeWeb3.balance) {
                                store.dispatch("updateWeb3", {
                                    coinbase: storeWeb3.coinbase,
                                    balance: newBalance
                                })
                            }
                        })
                    }
                }
            })
            storeWeb3.coinbase && storeWeb3.ABapiHandle.methods.balanceOf(storeWeb3.coinbase).call((error, result) => {
                if(!error) {
                    let contractAB = storeWeb3.web3Instance.utils.fromWei(result, "ether")*1
                    store.commit(types.UPDATE_WEB3_AT, {
                        contractAB: contractAB
                    })
                } else {
                    console.error(error);
                }
            })
        }
    }, 500)
}

export default pollWeb3
