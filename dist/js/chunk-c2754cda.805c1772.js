(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2754cda"],{3046:function(e,t,a){},ca91:function(e,t,a){"use strict";var s=a("3046"),n=a.n(s);n.a},f6a0:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mobilefundraiy-page",style:{minHeight:e.$window.innerHeight+"px"}},[a("HeaderBar"),a("div",{staticClass:"main"},[a("a",{staticClass:"close-btn",attrs:{href:"javascript:;"},on:{click:function(t){e.isShow=!1}}}),a("h4",[e._v(e._s(e.$t("message.preTarget")))]),a("div",{staticClass:"addr-wrap"},[a("p",[e._v("1 TRX = 20 AB")]),a("p",[e._v(e._s(e.$t("message.preTotalAb")))]),a("p",[e._v(e._s(e.$t("message.preAddress"))+e._s(e.$window.TRONFUNDRAIYADDRESS))])]),a("div",{staticClass:"progress-wrap"},[a("div",{staticClass:"progress-bg"},[a("div",{staticClass:"progress-bar",style:{width:e.pageData.achieve/e.pageData.goal*100+"%"}},[a("span",[e._v(e._s(e.pageData.achieve))])])]),e._m(0)]),a("div",{staticClass:"input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"text",placeholder:e.$t("message.preTrxNum"),oninput:"value=value.replace(/[^0-9]/g,'')",onkeyup:"value=value.replace(/[^0-9]/g,'')",onpaste:"value=value.replace(/[^0-9]/g,'')",oncontextmenu:"value=value.replace(/[^0-9]/g,'')"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),a("button",{on:{click:e.send}},[e._v(e._s(e.$t("message.preTrxBet")))])]),a("p",{staticClass:"content"},[e._v("\n          "+e._s(e.$t("message.preSale"))),a("br"),e._v("\n          * "+e._s(e.$t("message.preLess"))),a("br"),e._v("\n          * "+e._s(e.$t("message.preRefuse"))),a("br"),e._v("\n          * "+e._s(e.$t("message.preJoin"))),a("br"),e._v("\n          * "+e._s(e.$t("message.preJoin2"))),a("br"),e._v("\n          * "+e._s(e.$t("message.preJoin3"))),a("br"),a("br"),e._v("\n          "+e._s(e.$t("message.preHelp")))]),e._m(1)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"flex-wrap"},[a("span",[e._v("0 TRX")]),a("span",[e._v("50,000,000 TRX")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"service"},[s("a",{attrs:{href:"https://t.me/allbetAB",target:"_blank"}},[s("img",{staticClass:"icon",attrs:{src:a("cd67"),alt:""}}),s("span",[e._v("Telegram")])]),s("a",{attrs:{href:"javascript:;"}},[s("img",{staticClass:"icon",attrs:{src:a("d35a"),alt:""}}),s("span",[e._v("WeChat")]),s("div",{staticClass:"qrcode"},[s("img",{attrs:{src:a("d468"),alt:""}})])])])}],r=a("be94"),i=(a("cadf"),a("551c"),a("097d"),a("fca0")),o=a("2f62"),c={props:{isShowPopup:{type:Boolean,default:!1}},data:function(){return{isShow:!1,amount:"",pageData:{}}},components:{HeaderBar:i["a"]},mounted:function(){this.getPageData()},computed:{storeTronWeb:function(){return this.$store.state.tronHandler.tronWeb}},methods:Object(r["a"])({send:function(){var e=this;this.storeTronWeb.coinbase?this.amount<1e3?this.alert({type:"info",msg:this.$t("message.preTooLow")+"1000"}):this.storeTronWeb.tronWebInstance.trx.sendTransaction(this.$window.TRONFUNDRAIYADDRESS,1e6*this.amount).then(function(t){console.log(t),"SUCCESS"==t.code&&e.alert({type:"success",msg:e.$t("message.preCanYu")})}).catch(function(e){}):this.alert({type:"info",msg:this.$t("message.preTips1")})},getPageData:function(){var e=this;this.$http.get("open/crow_funding_meta",{params:{coinType:"TRX"}}).then(function(t){console.log(t),200==t.code&&(e.pageData=t.result)})}},Object(o["b"])({alert:"alert"})),watch:{isShow:function(e){e||this.$emit("change",e)},isShowPopup:function(e){e&&(this.isShow=!0)}},model:{prop:"isShowPopup",event:"change"}},p=c,l=(a("ca91"),a("2877")),u=Object(l["a"])(p,s,n,!1,null,null,null);u.options.__file="Mobile-fundraiy.vue";t["default"]=u.exports}}]);