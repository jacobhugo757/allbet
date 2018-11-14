import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            redirect: "/roller"
        },
        {
            path: "/index",
            name: "index",
            component: () => import("./views/Home.vue")
        },
        {
            path: "/roller",
            name: "roller",
            component: () => import("./views/Roller.vue")
        },
        {
            path: "/invite",
            name: "invite",
            component: () => import("./views/Invite.vue")
        },
        {
            path: "/my-assets",
            name: "my-assets",
            component: () => import("./views/My-assets.vue")
        },
        {
            path: "/trading-record",
            name: "trading-record",
            component: () => import("./views/Trading-record.vue")
        },
        {
            path: "/account-security",
            name: "account-security",
            component: () => import("./views/Account-security.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () => import("./views/mobile/Register.vue")
        },
        {
            path: "/login",
            name: "login",
            component: () => import("./views/mobile/Login.vue")
        },
        {
            path: "/findpwd",
            name: "findpwd",
            component: () => import("./views/mobile/FindPwd.vue")
        }
    ]
});
