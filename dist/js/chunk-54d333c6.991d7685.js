(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d333c6"],{"0c60":function(e,t,a){},7777:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"trading-record"},[a("HeaderBar"),a("div",{staticClass:"main",style:{minHeight:e.$window.innerHeight-150+"px"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"title"},[a("nav",[a("router-link",{attrs:{to:"my-assets"}},[e._v(e._s(e.$t("message.assetsOfMine"))+" >")]),e._v(" "+e._s(e.$t("message.tradeRecorde")))],1),a("div",{staticClass:"control"},[a("div",{staticClass:"select-wrap"},[a("label",[e._v(e._s(e.$t("message.tradeType"))+":")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.operation,expression:"operation"}],attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.operation=t.target.multiple?a:a[0]},e.selectChange]}},[a("option",{attrs:{value:"ALL"}},[e._v(e._s(e.$t("message.tradeAll")))]),a("option",{attrs:{value:"RECHARGE"}},[e._v(e._s(e.$t("message.tradeEthRecharge")))]),a("option",{attrs:{value:"WITHDRAW"}},[e._v(e._s(e.$t("message.tradeEthWithdraw")))]),a("option",{attrs:{value:"BANCOR_BUY_AT"}},[e._v(e._s(e.$t("message.tradeBancorBuy")))]),a("option",{attrs:{value:"BANCOR_SELL_AT"}},[e._v(e._s(e.$t("message.tradeBancorSell")))]),a("option",{attrs:{value:"DICE"}},[e._v(e._s(e.$t("message.tradeDice")))]),a("option",{attrs:{value:"DICE_REWARD"}},[e._v(e._s(e.$t("message.tradeDiceReward")))]),a("option",{attrs:{value:"DICE_DIG"}},[e._v(e._s(e.$t("message.tradeDiceDig")))]),a("option",{attrs:{value:"INVITE_BONUS_DICE_AB"}},[e._v(e._s(e.$t("message.tradeInviteBancor")))]),a("option",{attrs:{value:"INVITE_BONUS_AB"}},[e._v(e._s(e.$t("message.tradeRegisterIncentives")))]),a("option",{attrs:{value:"RECHARGE_AMOUNT_GIFT"}},[e._v(e._s(e.$t("message.tradeRechargeAmountGift")))]),a("option",{attrs:{value:"DICE_TIME_GIFT"}},[e._v(e._s(e.$t("message.tradeDiceTimeGift")))]),a("option",{attrs:{value:"DICE_AMOUNT_GIFT"}},[e._v(e._s(e.$t("message.tradeDiceAmountGift")))])])]),a("div",{staticClass:"select-wrap"},[a("label",[e._v(e._s(e.$t("message.tradeCoinType"))+":")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.coinType,expression:"coinType"}],attrs:{name:""},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.coinType=t.target.multiple?a:a[0]},e.selectChange]}},[a("option",{attrs:{value:"ALL"}},[e._v(e._s(e.$t("message.tradeAll")))]),a("option",{attrs:{value:"ETH"}},[e._v("ETH")]),a("option",{attrs:{value:"AT"}},[e._v("AT")]),a("option",{attrs:{value:"AB"}},[e._v("AB")]),a("option",{attrs:{value:"TRX"}},[e._v("TRX")])])])])]),a("li",{staticClass:"head-title"},[a("div",[e._v(e._s(e.$t("message.tradeTime")))]),a("div",{staticClass:"nominscreen"},[e._v(e._s(e.$t("message.tradeCoinType")))]),a("div",[e._v(e._s(e.$t("message.tradeType")))]),a("div",{staticClass:"vol nominscreen"},[e._v(e._s(e.$t("message.homeVolume")))]),a("div",{staticClass:"nominscreen"},[e._v(e._s(e.$t("message.homeState")))]),a("div",{},[e._v(e._s(e.$t("message.homeOperation")))])]),a("div",{staticClass:"padding"},e._l(e.list,function(t){return a("li",{},[a("span",{staticClass:"nominscreen"},[e._v(e._s(e.$fmtDate(t.createTime,"full")))]),a("span",{staticClass:"minscreen"},[e._v(e._s(e.$fmtDate(t.createTime,"month")))]),a("div",{staticClass:"nominscreen"},[e._v(e._s(t.coinType))]),a("div",[e._v(e._s(e.filterState(t)))]),a("div",{staticClass:"vol nominscreen"},[e._v(e._s(t.amount))]),a("div",{staticClass:"nominscreen"},[e._v(e._s(e.$t("message.tradeDone")))]),["RECHARGE","WITHDRAW"].indexOf(t.realOperation)>-1&&"DISPATCHER"==t.platform?a("div",{staticClass:"operation btn",on:{click:function(a){e.goDetail(t)}}},[e._v(e._s(e.$t("message.tradeDetail")))]):a("div",{staticClass:"operation"},[e._v("- -")])])})),a("mu-container",[a("mu-flex",{attrs:{"justify-content":"center"}},[a("mu-pagination",{attrs:{total:e.total,"page-size":20,current:e.current},on:{"update:current":function(t){e.current=t},change:e.getTradeRecord}})],1)],1),a("mu-dialog",{staticClass:"register-accout",attrs:{open:e.tradingDetail,"append-body":!1},on:{"update:open":function(t){e.tradingDetail=t}}},["RECHARGE"==e.itemDetail.realOperation?a("p",[e._v(e._s(e.$t("message.tradeEthRecharge")))]):a("p",[e._v(e._s(e.$t("message.tradeEthWithdraw")))]),"RECHARGE"==e.itemDetail.realOperation?a("li",[a("span",[e._v(e._s(e.$t("message.assetsRechargeAddress"))+":")]),a("div",[e._v(e._s(e.detailData.coinAddress))])]):e._e(),"WITHDRAW"==e.itemDetail.realOperation?a("li",[a("span",[e._v(e._s(e.$t("message.assetsCoinAddress"))+":")]),a("div",[e._v(e._s(e.detailData.destAddress))])]):e._e(),e.detailData.txId?a("li",[a("span",[e._v(e._s(e.$t("message.tradeBlockchain"))+":")]),a("div",[e._v(e._s(e.detailData.txId))])]):e._e(),"RECHARGE"!=e.itemDetail.realOperation?a("li",[a("span",[e._v(e._s(e.$t("message.tradePlatform"))+":")]),a("div",[e._v(e._s(e.detailData.fee)+" "+e._s(e.detailData.transferCoinType))])]):e._e(),e.detailData.updateTime?a("li",[a("span",[e._v(e._s(e.$t("message.tradeProcessingTime"))+":")]),a("div",[e._v(e._s(e.$fmtDate(e.detailData.updateTime,"full")))])]):e._e()])],1)]),a("FooterBar",{ref:"ft"})],1)},r=[],i=a("fca0"),n=a("348c"),o={data:function(){return{ethPrice:15.3,current:1,list:[],total:1,coinType:"ALL",operation:"ALL",address:"",handlingFee:"",tradeId:"",dealingTime:"",tradingDetail:!1,detailData:{},itemDetail:{}}},mounted:function(){this.currentAddr.token&&this.getTradeRecord()},components:{HeaderBar:i["a"],FooterBar:n["a"]},watch:{currentAddr:function(e){e.token&&this.getTradeRecord()}},computed:{currentAddr:function(){return this.$store.state.user.currentAddr}},methods:{filterState:function(e){switch(e.realOperation){case"RECHARGE":return this.$t("message.tradeEthRecharge");case"WITHDRAW":return this.$t("message.tradeEthWithdraw");case"BANCOR_BUY_AT":return this.$t("message.tradeBancorBuy");case"BANCOR_SELL_AT":return this.$t("message.tradeBancorSell");case"DICE":return this.$t("message.tradeDice");case"DICE_REWARD":return this.$t("message.tradeDiceReward");case"DICE_DIG":return this.$t("message.tradeDiceDig");case"INVITE_BONUS_DICE_AB":return this.$t("message.tradeInviteBancor");case"INVITE_BONUS_AB":return this.$t("message.tradeRegisterIncentives");case"RECHARGE_AMOUNT_GIFT":return this.$t("message.tradeRechargeAmountGift");case"DICE_TIME_GIFT":return this.$t("message.tradeDiceTimeGift");case"DICE_AMOUNT_GIFT":return this.$t("message.tradeDiceAmountGift")}},filterAmount:function(e){return["ETH_RECHARGE","BANCOR_BUY_AT","BANCOR_BUY_ETH","DICE_REWARD","DICE_DIG","INVITE_BONUS_AB","INVITE_BONUS_DICE_AB","AT_RECHARGE","BANCOR_SELL_AT","BANCOR_SELL_ETH"].indexOf(e.operation)>-1?"+ "+e.amount:"- "+e.amount},getTradeRecord:function(){var e=this;this.$http.get("/app/user/trade_records",{params:{coinType:this.coinType,operation:this.operation,page:this.current,pageSize:20,coinAddress:this.currentAddr.coinAddress}}).then(function(t){200==t.code&&(e.list=t.result.list,e.total=1*t.result.total)})},goDetail:function(e){var t=this;this.itemDetail=e,"DISPATCHER"==e.platform&&this.$http.get("/app/user/trade_records/"+e.id,{}).then(function(e){console.log(e),200==e.code&&(t.detailData=e.result||{},t.tradingDetail=!0)})},selectChange:function(){this.current=1,this.getTradeRecord()}}},c=o,d=(a("d2ce"),a("2877")),l=Object(d["a"])(c,s,r,!1,null,null,null);l.options.__file="Trading-record.vue";t["default"]=l.exports},d2ce:function(e,t,a){"use strict";var s=a("0c60"),r=a.n(s);r.a}}]);