(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c85e7fd2"],{"73ca":function(e,t,a){},7777:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trading-record"},[a("HeaderBar"),a("div",{staticClass:"main"},[a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[a("span",[e._v(e._s(e.$t("message.assetsOfMine"))+" > "+e._s(e.$t("message.tradeRecorde")))]),a("span",[e._v("\n\t\t\t\t\t"+e._s(e.$t("message.tradeType"))+":\n\t\t\t\t\t"),a("select",{directives:[{name:"model",rawName:"v-model",value:e.operation,expression:"operation"}],attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.operation=t.target.multiple?a:a[0]},e.getTradeRecord]}},[a("option",{attrs:{value:"ALL"}},[e._v(e._s(e.$t("message.tradeAll")))]),a("option",{attrs:{value:"ETH_RECHARGE"}},[e._v(e._s(e.$t("message.tradeEthRecharge")))]),a("option",{attrs:{value:"ETH_WITHDRAW"}},[e._v(e._s(e.$t("message.tradeEthWithdraw")))]),a("option",{attrs:{value:"BANCOR_BUY"}},[e._v(e._s(e.$t("message.tradeBancorBuy")))]),a("option",{attrs:{value:"BANCOR_SELL"}},[e._v(e._s(e.$t("message.tradeBancorSell")))]),a("option",{attrs:{value:"INVITE_BONUS_AB"}},[e._v(e._s(e.$t("message.tradeInviteBancor")))])]),e._v("\n\t\t\t\t\t"+e._s(e.$t("message.tradeCoinType"))+":\n\t\t\t\t\t"),a("select",{directives:[{name:"model",rawName:"v-model",value:e.coinType,expression:"coinType"}],attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.coinType=t.target.multiple?a:a[0]},e.getTradeRecord]}},[a("option",{attrs:{value:"ALL"}},[e._v(e._s(e.$t("message.tradeAll")))]),a("option",{attrs:{value:"ETH"}},[e._v("ETH")]),a("option",{attrs:{value:"AT"}},[e._v("AT")]),a("option",{attrs:{value:"AB"}},[e._v("AB")])])])]),a("li",[a("div",[e._v(e._s(e.$t("message.tradeTime")))]),a("div",[e._v(e._s(e.$t("message.tradeCoinType")))]),a("div",[e._v(e._s(e.$t("message.tradeType")))]),a("div",[e._v(e._s(e.$t("message.homeVolume")))]),a("div",[e._v(e._s(e.$t("message.homeState")))]),a("div",[e._v(e._s(e.$t("message.homeOperation")))])]),e._l(e.list,function(t){return a("li",[a("div",[e._v(e._s(t.createTime))]),a("div",[e._v(e._s(t.coinType))]),a("div",[e._v("平台提币")]),a("div",[e._v(e._s(t.amount))]),a("div",[e._v("已完成")]),a("div",{directives:[{name:"show",rawName:"v-show",value:"DISPATCHER"!=t.platform,expression:"item.platform !='DISPATCHER'"}],staticClass:"operation"},[e._v(e._s(e.$t("message.tradeDetail")))])])}),a("div",{staticClass:"charge"},[a("div",{staticClass:"desc address"},[a("p",{staticClass:"left"},[e._v(e._s(e.$t("message.assetsCoinAddress"))+"："),a("span",[e._v("0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520fBB98")])]),a("p",{staticClass:"right"},[e._v(e._s(e.$t("message.assetsHandlingFee"))+"："),a("span",[e._v("0.00500000")])])]),a("div",{staticClass:"desc time"},[a("p",{staticClass:"left"},[e._v(e._s(e.$t("message.tradeBlockchain"))+"："),a("span",[e._v("0xFBb1b73C4f0BDa4f67dcA266ce6Ef42f520o093fsdfeinbla9324")])]),a("p",{staticClass:"right"},[e._v(e._s(e.$t("message.tradeProcessingTime"))+"："),a("span",[e._v("2018.10.13 15:38:34")])])])]),a("li",[a("div",[e._v("2018.10.13 15:38:34")]),a("div",[e._v("ETH")]),a("div",[e._v("平台提币")]),a("div",[e._v("-0.98000000")]),a("div",[e._v("已完成")]),a("div",{staticClass:"operation",on:{click:function(t){e.getTradeDetail(e.item.businessId)}}},[e._v("详情")])]),e._m(0),a("mu-container",[a("mu-flex",{attrs:{"justify-content":"center"}},[a("mu-pagination",{attrs:{total:e.total,current:e.current},on:{"update:current":function(t){e.current=t},change:e.getPaginationChange}})],1)],1)],2)]),a("FooterBar",{ref:"ft"})],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",[a("div",[e._v("2018.10.13 15:38:34")]),a("div",[e._v("ETH")]),a("div",[e._v("平台提币")]),a("div",[e._v("-0.98000000")]),a("div",[e._v("已完成")]),a("div",{staticClass:"operation"},[e._v("详情")])])}],r=(a("c5f6"),a("cadf"),a("551c"),a("097d"),a("fca0")),n=a("348c"),o={data:function(){return{ethPrice:15.3,current:1,list:[],total:1,coinType:"ALL",operation:"ALL",address:"",handlingFee:"",tradeId:"",dealingTime:""}},created:function(){this.getTradeRecord()},components:{HeaderBar:r["a"],FooterBar:n["a"]},methods:{getTradeRecord:function(){var e=this;this.$http.get("/app/user/trade_records",{params:{coinType:this.coinType,operation:this.operation,page:this.current,pageSize:20}}).then(function(t){console.log(t),200==t.code&&(e.list=t.result.list,e.total=Number(t.result.total),e.current=t.result.pageNum)})},getTradeDetail:function(e){this.$http.get("/app/user/trade_records/"+e,{}).then(function(e){console.log(e),e.code})},getPaginationChange:function(e,t){console.log("currentPage",t),this.filterForm.pageSize=e,this.current=t,this.getTradeRecord()}}},c=o,v=(a("d2ce"),a("2877")),d=Object(v["a"])(c,s,i,!1,null,null,null);d.options.__file="Trading-record.vue";t["default"]=d.exports},d2ce:function(e,t,a){"use strict";var s=a("73ca"),i=a.n(s);i.a}}]);