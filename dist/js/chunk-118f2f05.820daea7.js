(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-118f2f05"],{"0da4":function(t,e,s){"use strict";var i=s("81c6"),n=s.n(i);n.a},"32a2":function(t,e,s){},"44ac":function(t,e,s){},"4f25":function(t,e,s){"use strict";var i=s("32a2"),n=s.n(i);n.a},"6e8e":function(t,e,s){t.exports=s.p+"img/gold.f85f418d.png"},7263:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"roller-page"},[s("HeaderBar"),s("div",{staticClass:"main",style:{minHeight:t.$window.innerHeight-150+"px"}},[s("Bet",{attrs:{diceStatistics:t.diceStatistics}}),s("Record",{on:{setDiceStatistics:t.setDiceStatistics}})],1),s("FooterBar")],1)},n=[],a=(s("cadf"),s("551c"),s("097d"),s("fca0")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"module-roller-bet"},[i("ul",{staticClass:"coin-select"},[i("li",{staticClass:"online",class:{active:"ETH"==t.coinType},on:{click:function(e){t.changeCoinType("ETH")}}},[i("img",{attrs:{src:s("1eb1"),alt:""}}),i("span",[t._v("ETH")])]),i("li",{staticClass:"online",class:{active:"TRX"==t.coinType},on:{click:function(e){t.changeCoinType("TRX")}}},[i("img",{attrs:{src:s("1d0a"),alt:""}}),i("span",[t._v("TRX")])]),i("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[i("img",{attrs:{src:s("1663"),alt:""}}),i("span",[t._v("EOS")])]),i("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[i("img",{attrs:{src:s("8960"),alt:""}}),i("span",[t._v("AB")])])]),i("div",{ref:"gameContent",staticClass:"game-content"},[i("div",{staticClass:"ctn-top"},[i("div",{staticClass:"bet-input"},[i("p",[t._v(t._s(t.$t("message.GameBetAmount")))]),i("div",{staticClass:"flex-wrap"},[i("div",{staticClass:"input-wrap"},[i("label",{class:{eth:"ETH"==t.coinType,trx:"TRX"==t.coinType}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",oninput:"value=value.replace(/[^0-9\\.]/g,'')",onkeyup:"value=value.replace(/[^0-9\\.]/g,'')",onpaste:"value=value.replace(/[^0-9\\.]/g,'')"},domProps:{value:t.amount},on:{blur:t.inputAmountBlur,input:function(e){e.target.composing||(t.amount=e.target.value)}}}),i("span",[t._v(t._s(t.coinType))])]),i("div",{staticClass:"hotkeys"},[i("span",{on:{click:function(e){t.onHotkeys(2)}}},[t._v("2X")]),i("span",{on:{click:function(e){t.onHotkeys(.5)}}},[t._v("1/2")]),i("span",{on:{click:function(e){t.onHotkeys("min")}}},[t._v("MIN")]),i("span",{on:{click:function(e){t.onHotkeys("max")}}},[t._v("MAX")])])])]),i("div",{staticClass:"award"},[i("p",[t._v(t._s(t.$t("message.GamePlayOutWin")))]),i("div",[i("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1"),alt:""}}),i("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a"),alt:""}}),i("span",[t._v(t._s(t.bonus))]),i("i",[t._v(t._s(t.coinType))])])])]),i("ul",{staticClass:"ctn-mdl"},[i("li",[i("label",[t._v(t._s(t.$t("message.GameRUTW")))]),i("span",[t._v(t._s(t.odds)+" "),i("img",{attrs:{src:s("a522")}})])]),i("li",[i("label",[t._v(t._s(t.$t("message.GameOdds")))]),i("span",[t._v(t._s(Math.floor(1e3*t.peilv)/1e3)+" x")])]),i("li",[i("label",[t._v(t._s(t.$t("message.GameProbability")))]),i("span",[t._v(t._s(t.odds-1)+" "),i("i",{staticStyle:{"font-size":"31px","font-style":"normal"}},[t._v("%")])])])]),i("div",{staticClass:"slider-wrap",on:{touchstart:function(t){t.preventDefault()}}},[t._m(0),i("div",{ref:"slider",staticClass:"slider",on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleClick(e)},touchstart:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleTouchS(e)}}},[i("div",{ref:"bar",staticClass:"bar",on:{click:t.onHandleClick,touchstart:t.onHandleTouchS}}),i("div",{ref:"handle",staticClass:"handle",on:{mousedown:function(e){return e.preventDefault(),t.onHandleMouseD(e)},touchstart:function(e){return e.preventDefault(),t.onHandleTouchS(e)}}},[i("i",[t._v(t._s(t.odds))])])])]),i("div",{staticClass:"ctn-btm"},[i("div",{staticClass:"auto-bet"},[i("p",{}),i("div",{staticClass:"mid"},[i("label",[t._v(t._s(t.$t("message.GameAutoBet")))]),i("span",{staticClass:"switch",class:{on:t.autoBet},on:{click:function(e){t.autoBet=!t.autoBet}}}),i("i",{staticClass:"help",attrs:{"data-text":t.$t("message.GameAutoBetHelp")}})]),i("a",{staticClass:"rule",attrs:{href:"javascript:;"},on:{click:function(e){t.isShowHelp=!0}}},[t._v(t._s(t.$t("message.GameHowToPlay")))])]),i("div",{staticClass:"bet-wrap"},[i("span",{staticClass:"fl nominscreen"},[i("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1")}}),i("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?i("i",[i("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):i("i",[t._v("0")]),t._v(" "+t._s(t.coinType))]),t.currentAddr.token&&"ETH"==t.coinType?i("button",{staticClass:"enter",on:{click:t.betDo}},[t._v(t._s(t.$t("message.GameLuckNum"))+" "+t._s(t.odds))]):t.userInfo.token&&"TRX"==t.coinType?i("button",{staticClass:"enter",on:{click:t.openFundraiy}},[t._v(t._s(t.$t("message.GamePresell")))]):i("button",{staticClass:"enter",on:{click:t.openLogin}},[t._v(t._s(t.$t("message.login")))]),i("span",{staticClass:"fl minscreen"},[i("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1")}}),i("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?i("i",[i("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):i("i",[t._v("0")]),t._v(" "+t._s(t.coinType))]),i("span",{staticClass:"fr"},[i("img",{attrs:{src:s("8960")}}),t.userInfo.token?i("i",[i("DigitalRoll",{attrs:{value:1*t.currentAddr.bet}})],1):i("i",[t._v("0")]),t._v(" AB")])])]),t.rule.winDig?i("div",{staticClass:"dig-wrap"},[i("img",{attrs:{src:s("fcaa"),alt:""}}),i("div",{staticClass:"content"},[i("p",[t._v(t._s(t.$t("message.GameBetToGet"))+" "+t._s(Math.floor(t.rule.winDig.split(":")[1]/t.rule.winDig.split(":")[0]*t.amount))+" AB")]),i("span",[t._v(t._s(t.$t("message.GameDigProportion"))+"　 WIN "+t._s(t.rule.winDig.split(":")[0])+" : "+t._s(t.rule.winDig.split(":")[1])+" 　  LOSE "+t._s(t.rule.failDig.split(":")[0])+" : "+t._s(t.rule.failDig.split(":")[1]))])]),i("i",{staticClass:"help nominscreen",on:{click:function(e){t.isShowABpopup=!0}}}),i("i",{staticClass:"help minscreen",on:{click:function(e){t.$router.push("ab")}}})]):t._e()]),i("GameHelpPopup",{model:{value:t.isShowHelp,callback:function(e){t.isShowHelp=e},expression:"isShowHelp"}}),i("mu-dialog",{attrs:{open:t.openWeixinQR,"append-body":!1},on:{"update:open":function(e){t.openWeixinQR=e}}},[i("img",{attrs:{src:s("d468"),alt:""}})]),i("AbPopup",{model:{value:t.isShowABpopup,callback:function(e){t.isShowABpopup=e},expression:"isShowABpopup"}}),i("FundraiyPopup",{model:{value:t.isShowFundraiy,callback:function(e){t.isShowFundraiy=e},expression:"isShowFundraiy"}})],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scale"},[s("span",[t._v("1")]),s("span",[t._v("100")])])}],c=(s("c5f6"),s("be94")),l=s("14b5"),u=s("2f62"),d=(s("b253"),s("938b")),m=s("bbcb"),p=s("6d7d"),h=s("4d2c"),f={props:{diceStatistics:{type:Object,default:function(){return{earned:"",guessCount:"",newcomers:[]}}}},data:function(){return{amount:.1,odds:50,rule:{},luckyColor:"green",luckyNum:"00",timer:null,getBetResultTimer:null,maxNum:96,isShowHelp:!1,openWeixinQR:!1,autoBet:!1,isShowABpopup:!1,isShowFundraiy:!1,scroll:null}},created:function(){this.getRule(),window.hd={}},mounted:function(){this.setBetInfo({diceList:this.diceList,amount:this.amount}),window.onmouseup=function(){window.onmousemove=null},window.ontouchend=function(){window.ontouchmove=null},this.setBetInfo({odds:1}),"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||"YES"==sessionStorage.getItem("IsFirstEnter")||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},methods:Object(c["a"])({inputAmountBlur:function(){this.amount<this.rule.minInvest&&(this.amount=this.rule.minInvest),this.amount>this.rule.maxInvest&&(this.amount=this.rule.maxInvest)},luckyRun:function(){var t=this;clearInterval(this.timer),this.timer=null,this.timer=setInterval(function(){t.luckyNum=Math.floor(89*Math.random())+10,t.luckyColor=["green","red","golden"][Math.floor(2*Math.random())]},50)},onHotkeys:function(t){switch(t){case"max":this.amount=this.rule.maxInvest;break;case"min":this.amount=this.rule.minInvest;break;case.5:this.amount=.5*this.amount<this.rule.minInvest?this.rule.minInvest:.5*this.amount;break;case 2:this.amount=2*this.amount>this.rule.maxInvest?this.rule.maxInvest:2*this.amount;break;default:this.amount=t;break}},onAdd:function(){this.amount=(Number(this.amount)+.01).toFixed(2)},onMinus:function(){this.amount=(Number(this.amount)-.01).toFixed(2),this.amount<.01&&(this.amount=.01)}},Object(u["b"])({setBetInfo:"SET_ROLLER_BET_INFO",alert:"alert",openLogin:"OPEN_LOGIN",openWinPopup:"OPEN_WIN_POPUP",openConfirm:"OPEN_CONFIRM",closePopup:"CLOSE_POPUP",changeCoinType:"CHANGE_COINTYPE"}),{onHandleClick:function(t){var e=t.offsetX,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-s-20;e=e<=2?2:e>=i?i:e,this.$refs.handle.style.left=e-9+"px",this.$refs.bar.style.width=e+10+"px",this.odds=(e/(i/this.maxNum)).toFixed(2)<2?2:(e/(i/this.maxNum)).toFixed(),this.setBetInfo({odds:this.odds,amount:this.amount})},onHandleMouseD:function(t){var e=this,s=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,i=this.$refs.slider.clientWidth/100*(100-this.maxNum),n=this.$refs.slider.clientWidth-i-20,a=t.offsetX,o=0;window.onmousemove=function(t){o=t.clientX-s-a,o=o<=2?2:o>=n?n:o,e.$refs.handle.style.left=o-9+"px",e.$refs.bar.style.width=o+10+"px",e.odds=(o/(n/e.maxNum)).toFixed(2)<2?2:(o/(n/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},onHandleTouchS:function(t){var e=this,s=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,i=this.$refs.slider.clientWidth/100*(100-this.maxNum),n=this.$refs.slider.clientWidth-i-20,a=(t.touches[0].clientX,this.$refs.handle.offsetLeft,0);window.ontouchmove=function(t){a=t.touches[0].clientX-s,a=a<=2?2:a>=n?n:a,e.$refs.handle.style.left=a-9+"px",e.$refs.bar.style.width=a+10+"px",e.odds=(a/(n/e.maxNum)).toFixed(2)<2?2:(a/(n/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result,t.amount=e.result.minInvest,t.luckyNum=e.result.lastLucky||"00")})},betDo:function(){var t=this,e=this;/^\d+(\.\d+)?$/.test(this.amount)?this.amount>this.currentAddr.assets[this.coinType].amount?this.alert({type:"info",msg:this.$t("message.assetsNotEnough")}):Number(this.amount)<this.rule.minInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLow")+this.rule.minInvest+this.coinType}):1*this.amount>1*this.rule.maxInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLarge")+this.rule.maxInvest+this.coinType}):this.$http.post("/app/dice/dice",{coinAddress:this.currentAddr.assets[this.coinType].coinAddress,coinAmount:this.amount,guessNum:this.odds}).then(function(s){if(200==s.code)if("DISPATCHER"==s.result.resultType)t.alert({type:"success",msg:s.msg}),t.luckyRun(),e.getBetResult(s.result.recdId);else{switch(t.alert({type:"info",msg:"Please Wait For Wallet to ConfirmTransfer...",timeout:9999999}),s.result.coinType){case"ETH":t.placeBet(t.odds,100,s.result.commitLastBlock,s.result.commit,s.result.signData,t.amount,s.result.recdId);break;case"TRX":t.placeBetTRX(t.odds,s.result.recdId,t.amount);break}window.hd.betFailed=function(t){e.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})},window.hd.betSuccess=function(t){e.alert({type:"info",msg:"Successful bet.",timeout:9999999}),e.luckyRun(),e.getBetResult(s.result.recdId)}}}):this.alert({type:"info",msg:this.$t("message.GameAmountErr")})},placeBet:function(t,e,s,i,n,a,o){var r=this;a=this.web3.web3Instance.utils.toWei(a+"","ether"),this.web3.diceApiHandle.methods.placeBetV1(t,e,s,i,n).send({from:this.currentAddr.coinAddress,value:a,gas:21e4,gasPrice:1e10},function(t,e){t||r.alert({type:"info",msg:"Bet submitted! Waiting for Ethereum...",timeout:9999999})}).then(function(t){r.alert({type:"info",msg:"Successful bet.",timeout:9999999}),r.getBetResult(o)}).catch(function(t){r.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})})},placeBetTRX:function(t,e,s){var i=this,n=this.tronWeb.tronWebInstance.toSun(10),a=this.tronWeb.tronWebInstance.toSun(s);this.tronWeb.contract.placeBetV1(t,100,e).send({feeLimit:n,callValue:a,shouldPollResponse:!1}).then(function(t){i.alert({type:"info",msg:"Bet submitted! Waiting for Tron...",timeout:9999999}),i.getBetResult(e)}).catch(function(t){i.alert({type:"info",msg:t,timeout:3e3})})},getBetResult:function(t){var e=this;clearInterval(this.getBetResultTimer),this.getBetResultTimer=null,this.getBetResultTimer=setInterval(function(){Object(d["a"])({type:"get",url:"/app/dice/dice/"+t,data:{}}).then(function(t){200==t.code?"WAITING_SETTLE"==t.result.tradeStatus?e.alert({type:"info",msg:"Successful bet.",timeout:9999999}):"DONE"!=t.result.tradeStatus&&"FAIL"!=t.result.tradeStatus||(clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyColor="green","DONE"==t.result.tradeStatus?(e.$store.commit("closeAlert"),e.luckyNum=t.result.luckyNum,e.$store.dispatch("updateProperty"),"WIN"==t.result.winFlag?e.openWinPopup({ab:t.result.abNum,rewards:t.result.rewards,coinType:t.result.coinType}):"LOSE"==t.result.winFlag&&e.noWin(t.result.abNum),setTimeout(function(){e.autoBet&&e.userInfo.token&&(e.closePopup(),e.betDo())},1e3)):e.alert({type:"info",msg:"Frustrated bet."})):(clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyNum="00",e.luckyColor="green")}).catch(function(t){clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyColor="green",e.luckyNum="00"})},1e3)},noWin:function(t){var e=this;this.openConfirm({content:this.$t("message.GameNoWin"),other:this.$t("message.GameWinBox2")+t+"AB",btn:[{type:"high",text:this.$t("message.GameWinBox3"),cb:function(){e.$router.push("roller")}}]})},openFundraiy:function(){"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))}}),watch:{diceList:{handler:function(t,e){this.setBetInfo({diceList:t,amount:this.amount})},deep:!0},amount:function(t,e){this.setBetInfo({odds:this.odds,amount:t})},coinType:function(){this.getRule()}},computed:Object(c["a"])({},Object(u["c"])({web3:function(t){return t.web3Handler.web3},currentAddr:function(t){return t.user.currentAddr},userInfo:function(t){return t.user.userInfo},coinType:function(t){return t.user.coinType},tronWeb:function(t){return t.tronHandler.tronWeb}}),{peilv:function(){return 98.5/((1*this.odds).toFixed()-1)},bonus:function(){return this.amount*this.peilv*.01<=3e-4?Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3<0?0:Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3:Math.floor(this.amount*this.peilv*.99*1e3)/1e3<0?0:Math.floor(this.amount*this.peilv*.99*1e3)/1e3}}),components:{DigitalRoll:l["a"],AbPopup:m["a"],FundraiyPopup:p["a"],GameHelpPopup:h["a"]},destroyed:function(){clearInterval(this.timer),this.timer=null,this.luckyColor="green",this.luckyNum="00",this.autoBet=!1}},v=f,g=(s("9f5d"),s("2877")),_=Object(g["a"])(v,o,r,!1,null,null,null);_.options.__file="bet.vue";var y=_.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-preview"},[s("div",{staticClass:"ctn ctn1"},[s("h4",[t._v("获胜机会")]),s("h3",[t._v(t._s(this.betInfo.odds)+"%")])]),s("div",{staticClass:"ctn ctn2"},[s("h4",[t._v("赢得投注")]),t._m(0),s("label",{},[t._v("您将赢得"),s("DigitaRoll",{attrs:{value:1.96*this.betInfo.amount}}),t._v("以太幣")],1),s("p",{staticClass:"tip"},[t._v("1% 费用，0.001以太幣累积大奖")])]),s("div",{staticClass:"ctn ctn3"},[s("h4",[t._v("大奖包括")]),s("h3",[s("DigitaRoll",{attrs:{value:888}}),s("i",[t._v("以太幣")])],1),s("label",[t._v("幸运数字是888!")])])])},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[i("img",{attrs:{src:s("6e8e")}}),t._v("1.96×")])}],w={props:["betInfo"],data:function(){return{}},mounted:function(){},components:{DigitaRoll:l["a"]}},C=w,A=(s("4f25"),Object(g["a"])(C,T,b,!1,null,null,null));A.options.__file="preview.vue";var B=A.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-roller-record"},[s("div",{staticClass:"nav"},[s("a",{staticClass:"tl",class:{active:"RECENT"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("RECENT")}}},[t._v(t._s(t.$t("message.GamesPlayers")))]),s("a",{class:{active:"GANGSTER"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("GANGSTER")}}},[t._v(t._s(t.$t("message.GameBig")))]),s("a",{class:{active:"LUCKY"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("LUCKY")}}},[t._v(t._s(t.$t("message.GameLuckyList")))]),s("a",{directives:[{name:"show",rawName:"v-show",value:t.currentAddr.token,expression:"currentAddr.token"}],staticClass:"tr",class:{active:"ME"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("ME")}}},[t._v(t._s(t.$t("message.GameRecord")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"ME"==t.boardType,expression:"boardType == 'ME'"}],staticClass:"myinfo"},[s("span",{staticClass:"fl"},[t._v(t._s(t.$t("message.GameParticipation"))+" "),s("i",[t._v(t._s(t.diceBasis.totalParticipate||0))])]),s("span",{staticClass:"fr"},[t._v("AB: "),s("i",[t._v(t._s(t.diceBasis.totalAb||0))])]),s("span",{staticClass:"fr"},[t._v(t._s(t.$t("message.GameProfit"))),s("i",[t._v(t._s(t.diceBasis.totalEarn||0))]),t._v(t._s(t.coinType))]),s("span",{staticClass:"fr nominscreen"},[t._v(t._s(t.$t("message.GameTips1")))])]),s("div",{staticClass:"table-record nominscreen"},[s("div",{staticClass:"t-head"},[s("span",[t._v(t._s(t.$t("message.GamePlay")))]),s("span",{staticClass:"tl"},[t._v(t._s(t.$t("message.GameTime")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameBetNum")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameForecast")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameLucky")))]),s("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))]),s("span",{staticClass:"nominscreen"},[t._v("AB")])]),s("div",{staticClass:"t-body"},t._l(t.recordsList,function(e){return s("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},[s("li",{staticClass:"user"},[s("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]),s("li",{staticClass:"tl"},[s("span",[t._v(t._s(t.$fmtDate(e.createTime,"time")))])]),s("li",[s("span",[t._v(t._s(e.coinAmount))])]),s("li",[s("span",[t._v(t._s(e.guess))])]),s("li",[s("span",[t._v(t._s(e.luckyNum))])]),s("li",{staticClass:"golden tr"},[e.rewards>0?s("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()]),s("li",[s("span",[t._v(t._s(Math.floor(e.abNum)))])])])}))]),s("div",{staticClass:"table-record minscreen"},[s("div",{staticClass:"t-head"},["ME"!=t.boardType?s("span",[t._v(t._s(t.$t("message.GamePlay")))]):s("span",[t._v(t._s(t.$t("message.GameTime")))]),s("span",[t._v(t._s(t.$t("message.GameForecast")))]),s("span",[t._v(t._s(t.$t("message.GameLucky")))]),s("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))])]),s("div",{staticClass:"t-body"},t._l(t.recordsList,function(e){return s("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},["ME"!=t.boardType?s("li",{staticClass:"user"},[s("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]):s("li",[s("span",[t._v(t._s(t.$fmtDate(e.createTime,"time")))])]),s("li",[s("span",[t._v(t._s(e.guess))])]),s("li",[s("span",[t._v(t._s(e.luckyNum))])]),s("li",{staticClass:"golden tr"},[e.rewards>0?s("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()])])}))])])},$=[],k={data:function(){return{unfold:-1,recordsList:[],boardType:"RECENT",rule:{},timer:null,diceBasis:{}}},created:function(){var t=this;this.getRule(),this.getData(this.boardType),this.timer=window.setInterval(function(){t.getDataPoll()},3e3)},watch:{currentAddr:function(){this.getData(this.boardType)},coinType:function(){this.getRule()}},computed:Object(c["a"])({},Object(u["c"])({currentAddr:function(t){return t.user.currentAddr},coinType:function(t){return t.user.coinType}})),methods:Object(c["a"])({getData:function(t){var e=this;this.boardType=t;var s=null;this.currentAddr.assets&&(s=this.currentAddr.assets[this.coinType].coinAddress),s||"ME"!=this.boardType||(this.boardType="RECENT"),this.$http.get("/app/dice/board",{params:{boardType:this.boardType,coinAddress:s,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(t){200==t.code&&(e.recordsList=t.result.records.list,e.diceBasis=t.result.diceBasis)})},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result)})},getDataPoll:function(){var t=this,e=null;this.currentAddr.assets&&(e=this.currentAddr.assets[this.coinType].coinAddress),e||"ME"!=this.boardType?Object(d["a"])({type:"get",url:"/app/dice/board",data:{boardType:this.boardType,coinAddress:e,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(e){200==e.code&&(t.recordsList=e.result.records.list,t.diceBasis=e.result.diceBasis,t.$emit("setDiceStatistics",e.result.diceStatistics))}):this.boardType="RECENT"}},Object(u["b"])({alert:"alert"})),destroyed:function(){clearInterval(this.timer)}},x=k,R=(s("85b8"),Object(g["a"])(x,I,$,!1,null,null,null));R.options.__file="record.vue";var E=R.exports,S=s("348c"),N=s("1720"),G={data:function(){return{disabled:!1,diceStatistics:{earned:"",guessCount:"",newcomers:[]}}},methods:{setDiceStatistics:function(t){this.diceStatistics=t||{earned:"",guessCount:"",newcomers:[]}}},computed:{betInfo:function(){return this.$store.state.roller.betInfo}},components:{HeaderBar:a["a"],FooterBar:S["a"],Bet:y,Preview:B,Record:E,AEFcountDownBtn:N["a"]}},D=G,P=(s("0da4"),Object(g["a"])(D,i,n,!1,null,null,null));P.options.__file="Roller.vue";e["default"]=P.exports},"81c6":function(t,e,s){},"85b8":function(t,e,s){"use strict";var i=s("44ac"),n=s.n(i);n.a},9256:function(t,e,s){},"9f5d":function(t,e,s){"use strict";var i=s("9256"),n=s.n(i);n.a},a522:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAuBAMAAACytabNAAAAKlBMVEVHcEz/yiX/xCX/xCX/xiX/xyf/xSX/xCX/xCX/xCT/xCX/xCT/xSb/xCWlap4vAAAADXRSTlMAB+mKPhZtusqoWNknhb3eUgAAAK9JREFUKM9jYACBu1DAgACjQrQXmnsXDdxkCEIXUmVgQRdyYGCwRRW5DDRMGlVoI1CIBUMfms7LYGdwIAs1goV4kIUOQFybixC5BvUOO0KoACrEqgsTuRQA8/VamNAteEBwwoQmwIVgOhH6GBh8IUJXkIKQGSJkgCTEuBckclsASQiiE1kfVKcBihBD7927NwRQhc7evXsHVYSB7e7dBDQhhtrr6CIMQaoYQlwLYCwAsthTiOSdX9wAAAAASUVORK5CYII="}}]);