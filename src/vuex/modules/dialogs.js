import * as types from "../mutation_types"

const state = {
    alertOption: {
        open: false,
        color: 'info',
        timer: null,
        timeout: 3000,
        icon: 'info',
        msg: '提示'
    },
    confirmOption: {
        title: "提示",
        content: "绑定账号，赢取邀请奖励分ETH",
        btn: [
            {
                text: "取消",
                type: "",
                cb: function() {
                    console.log(111)
                }
            },
            {
                text: "确定",
                type: "high",
                cb: function() {
                    console.log(222)
                }
            }
        ]
    },
    loginBox: false
}

const mutations = {
    /**
     * 显示提示框
     * @param {Object} state store状态 
     * @param {Object} data 传入数据 {type, msg}
     * @author shanks
     */
    alert(state,data) {
        if (state.alertOption.timer) clearTimeout(state.alertOption.timer);
        state.alertOption.color = data.type
        state.alertOption.icon = {
            success: 'check_circle',
            info: 'info',
            warning: 'priority_high',
            error: 'warning'
        }[data.type]
        state.alertOption.msg = data.msg || '提示'
        state.alertOption.open = true            
        state.alertOption.timer = setTimeout(() => {
            state.alertOption.open = false;
        }, state.alertOption.timeout);
    },
    closeAlert(state) {
        state.alertOption.open = false
    },
    /**
     * 显示confirm询问框
     * @author shanks
     * @param {Object} payload confirm配置参数 {content: "文字类容", btn: "按钮参数"}
     */
    [types.OPEN_CONFIRM](state, payload) {
        state.confirmOption = Object.assign({}, payload)
    },
    /**
     * 打开login弹框
     */
    [types.OPEN_LOGIN](state) {
        state.loginBox = !state.loginBox
    }
}

export default {
    state,
    mutations
}