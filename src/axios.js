import axios from 'axios'
import store from './store'
import router from './router'


axios.defaults.baseURL = window.SERVERPATH
// axios.defaults.baseURL = "http://192.168.20.175:50006/"

axios.interceptors.request.use(config => {
    let token = sessionStorage.getItem("TOKEN") || ""
    config.headers.common['token'] = token
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    store.commit("closeWait")
    if(response.data.code == -2) {
        store.state.userInfo = {}
        sessionStorage.removeItem("USERINFO")
        sessionStorage.removeItem("TOKEN")
        router.replace('home')
    }
    if(response.data.code != 200) {
        store.commit('alert', {
            type: 'error',
            msg: response.data.msg
        })
    }
    return response.data
}, err => {
    store.commit("closeWait")
    if (err && err.response) {
        switch (err.response.status) {
        case 400:
            err.message = '请求错误'
            break
        case 401:
            err.message = '未授权，请登录'
            break

        case 403:
            err.message = '拒绝访问'
            break

        case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break

        case 408:
            err.message = '请求超时'
            break

        case 500:
            err.message = '服务器内部错误'
            break

        case 501:
            err.message = '服务未实现'
            break

        case 502:
            err.message = '网关错误'
            break

        case 503:
            err.message = '服务不可用'
            break

        case 504:
            err.message = '网关超时'
            break

        case 505:
            err.message = 'HTTP版本不受支持'
            break

        default:
            err.message = '未知错误'
        }
        store.commit('alert', {
            type: 'error',
            msg: err.message
        })
    }else {
        store.commit('alert', {
            type: 'error',
            msg: '请求超时'
        })
    }
    return Promise.reject(error)
})

export default {
    install(Vue) {
        Object.defineProperty(Vue.prototype, '$http', {
            value: axios
        })
    }
}