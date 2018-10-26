/**
 * 轮询检索metamask状态
 * @author shanks
 * @date 2018/10/9
 * @version 1.0.0
 */
import store from "../store.js"
import {axios} from "../axios"
let pollWeb3 = function() {
    let web3 = window.web3
    web3 = new Web3(web3.currentProvider)
    let storeWeb3 = {}
    setInterval(() => {
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
                        let newCoinbase = coinbase
                        web3.eth.getBalance(coinbase, (err, newBalance) => {
                            if(err) {
                                console.log(err)
                            }else { 
                                store.dispatch("updateWeb3", {
                                    coinbase: newCoinbase,
                                    balance: newBalance
                                })
                                //外部地址登录 首次将注册到平台，再检测是否绑定，已绑定返回平台账号信息
                                axios.post("/open/login/coin", {
                                    type: "ETH",
                                    addr: newCoinbase
                                }).then(res => {
                                    if(res.code == 200) {
                                        // 未绑定平台账号
                                        if(res.result.assets.length <= 1) {
                                            if(store.state.user.currentAddr.coinAddress == newCoinbase) {
                                                store.commit(types.OPEN_CONFIRM, {
                                                    content: "绑定账号，赢取邀请奖励分ETH",
                                                    btn: [
                                                        {
                                                            text: "关闭"
                                                        },
                                                        {
                                                            type: "high",
                                                            text: "去绑定",
                                                            cb: () => {
                                                                router.push('account-security')
                                                            }
                                                        }
                                                    ]
                                                })
                                            }
                                            store.commit(types.UPDATE_WEB3_AT, {
                                                at: res.result.assets[0].at,
                                                userName: res.result.assets[0].userName,
                                                token: res.result.token
                                            })
                                        }else {
                                            // 已绑定平台账号
                                            store.commit(types.SET_USERINFO, res.result)
                                            res.result.assets.forEach(val => {
                                                if(val.coinAddress == newCoinbase) {
                                                    store.commit(types.UPDATE_WEB3_AT, {
                                                        at: res.result.assets[0].at,
                                                        userName: res.result.assets[0].userName,
                                                        token: res.result.token
                                                    })
                                                }
                                            })
                                        }
                                    }
                                }).catch(err => {
                        
                                })
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
        }
    }, 500)
}

export default pollWeb3