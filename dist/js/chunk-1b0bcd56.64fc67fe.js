(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b0bcd56"],{"0da4":function(t,e,s){"use strict";var A=s("3d92"),i=s.n(A);i.a},"23c2":function(t,e,s){},3738:function(t,e,s){t.exports=s.p+"media/b.e4f90095.wav"},"3d92":function(t,e,s){},"4f25":function(t,e,s){"use strict";var A=s("a651"),i=s.n(A);i.a},"6cdf":function(t,e,s){},"6e8e":function(t,e,s){t.exports=s.p+"img/gold.f85f418d.png"},7263:function(t,e,s){"use strict";s.r(e);var A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"roller-page"},[s("HeaderBar"),s("div",{staticClass:"main",style:{minHeight:t.$window.innerHeight-150+"px"}},[s("Bet",{attrs:{diceStatistics:t.diceStatistics}}),s("Record",{on:{setDiceStatistics:t.setDiceStatistics}})],1),s("FooterBar")],1)},i=[],a=s("fca0"),n=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("section",{staticClass:"module-roller-bet"},[A("ul",{staticClass:"coin-select"},[A("li",{staticClass:"online",class:{active:"ETH"==t.coinType},on:{click:function(e){t.changeCoinType("ETH")}}},[A("img",{attrs:{src:s("1eb1"),alt:""}}),A("span",[t._v("ETH")])]),A("li",{staticClass:"online",class:{active:"TRX"==t.coinType},on:{click:function(e){t.changeCoinType("TRX")}}},[A("img",{attrs:{src:s("1d0a"),alt:""}}),A("span",[t._v("TRX")])]),A("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[A("img",{attrs:{src:s("1663"),alt:""}}),A("span",[t._v("EOS")])]),A("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[A("img",{attrs:{src:s("8960"),alt:""}}),A("span",[t._v("AB")])])]),A("div",{ref:"gameContent",staticClass:"game-content"},[A("div",{staticClass:"ctn-top"},[A("div",{staticClass:"bet-input"},[A("p",[t._v(t._s(t.$t("message.GameBetAmount")))]),A("div",{staticClass:"flex-wrap"},[A("div",{staticClass:"input-wrap"},[A("label",{class:{eth:"ETH"==t.coinType,trx:"TRX"==t.coinType}}),A("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",oninput:"value=value.replace(/[^0-9\\.]/g,'')",onkeyup:"value=value.replace(/[^0-9\\.]/g,'')",onpaste:"value=value.replace(/[^0-9\\.]/g,'')"},domProps:{value:t.amount},on:{blur:t.inputAmountBlur,input:function(e){e.target.composing||(t.amount=e.target.value)}}}),A("span",[t._v(t._s(t.coinType))])]),A("div",{staticClass:"hotkeys"},[A("span",{on:{click:function(e){t.onHotkeys(2)}}},[t._v("2X")]),A("span",{on:{click:function(e){t.onHotkeys(.5)}}},[t._v("1/2")]),A("span",{on:{click:function(e){t.onHotkeys("min")}}},[t._v("MIN")]),A("span",{on:{click:function(e){t.onHotkeys("max")}}},[t._v("MAX")])])])]),A("div",{staticClass:"award"},[A("p",[t._v(t._s(t.$t("message.GamePlayOutWin"))+" \n\t\t\t\t\t\t")]),A("div",[A("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1"),alt:""}}),A("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a"),alt:""}}),A("span",[t._v(t._s(t.bonus))]),A("i",[t._v(t._s(t.coinType))])])])]),A("ul",{staticClass:"ctn-mdl"},[A("li",[A("label",[t._v(t._s(t.$t("message.GameRUTW")))]),A("span",[t._v(t._s(t.odds)+" "),A("img",{attrs:{src:s("a522")}})])]),A("li",[A("label",[t._v(t._s(t.$t("message.GameOdds")))]),A("span",[t._v(t._s(Math.floor(1e4*t.peilv)/1e4)+" x")])]),A("li",[A("label",[t._v(t._s(t.$t("message.GameProbability")))]),A("span",[t._v(t._s(t.odds-1)+" "),A("i",{staticStyle:{"font-size":"31px","font-style":"normal"}},[t._v("%")])])])]),A("div",{staticClass:"slider-wrap",on:{touchstart:function(t){t.preventDefault()}}},[t._m(0),A("div",{ref:"slider",staticClass:"slider",on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleClick(e)},touchstart:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleTouchS(e)}}},[A("div",{ref:"bar",staticClass:"bar",on:{click:t.onHandleClick,touchstart:t.onHandleTouchS}}),A("div",{ref:"handle",staticClass:"handle",on:{mousedown:function(e){return e.preventDefault(),t.onHandleMouseD(e)},touchstart:function(e){return e.preventDefault(),t.onHandleTouchS(e)}}},[A("i",[t._v(t._s(t.odds))])]),A("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowResult,expression:"isShowResult"}],ref:"luckynum",staticClass:"luckynum",class:{exceed:t.odds<t.luckyNum}},[t._v("88")])])]),A("div",{staticClass:"ctn-btm"},[A("div",{staticClass:"auto-bet"},[A("p",{staticClass:"rule",on:{click:function(e){t.isShowHelp=!0}}},[t._v(t._s(t.$t("message.GameHowToPlay")))]),A("div",{staticClass:"mid"},[A("label",[t._v(t._s(t.$t("message.GameAutoBet")))]),A("span",{staticClass:"switch",class:{on:t.autoBet},on:{click:function(e){t.autoBet=!t.autoBet}}}),A("i",{staticClass:"help",attrs:{"data-text":t.$t("message.GameAutoBetHelp")}})]),A("a",{staticClass:"trumpet",attrs:{href:"javascript:;"}},[A("i",{class:{on:t.music},on:{click:function(e){t.music=!t.music}}})])]),A("div",{staticClass:"bet-wrap"},[A("div",{staticClass:"cell fl nominscreen"},[A("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1")}}),A("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?A("i",[A("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):A("i",[t._v("0")]),t._v(" "+t._s(t.coinType)+"\n\t\t\t\t\t")]),t.currentAddr.token&&!t.timer?A("button",{staticClass:"enter",class:{loading:t.betBtnLoading},on:{click:t.betDo}},[t._v(t._s(t.$t("message.GameLuckNum"))+" "+t._s(t.odds))]):t.currentAddr.token&&t.timer?A("button",{staticClass:"enter"},[t._v(t._s(t.luckyNum))]):A("button",{staticClass:"enter",on:{click:t.openLogin}},[t._v(t._s(t.$t("message.login")))]),A("div",{staticClass:"cell fl minscreen"},[A("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:s("1eb1")}}),A("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:s("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?A("i",[A("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):A("i",[t._v("0")]),t._v(" "+t._s(t.coinType)+"\n\t\t\t\t\t")]),A("div",{staticClass:"cell fr",on:{mouseenter:t.getBonusPools}},[A("img",{attrs:{src:s("8960")}}),t.userInfo.token?A("i",[A("DigitalRoll",{attrs:{value:1*t.currentAddr.bet,decimal:2}})],1):A("i",[t._v("0")]),t._v(" AB\n\t\t\t\t\t\t"),A("div",{staticClass:"supernatant"},[A("span",[t._v(t._s(Math.floor(100*t.contractAB)/100)+" AB")]),A("a",{attrs:{href:"javascript:;"},on:{click:t.showBP}},[t._v(t._s(t.$t("message.GameGeted"))+"："+t._s(Math.floor(100*t.bonusPoolsData.ab)/100)+" AB")])])])])]),t.rule.winDig?A("div",{staticClass:"dig-wrap"},[A("img",{attrs:{src:s("fcaa"),alt:""}}),A("div",{staticClass:"content"},[A("h4",[t._v(t._s(t.$t("message.GameBetToGet"))+" "+t._s(Math.floor(t.rule.winDig.split(":")[1]/t.rule.winDig.split(":")[0]*t.amount*100)/100)+" AB")]),A("p",[t._v(t._s(t.$t("message.GameStage"))+" "+t._s((t.rule.totalDig/1e9*100).toFixed(2))+"%")]),A("span",[t._v(t._s(t.$t("message.GameDigProportion"))+"　 WIN "+t._s(t.rule.winDig.split(":")[0])+" : "+t._s(t.rule.winDig.split(":")[1])+" 　  LOSE "+t._s(t.rule.failDig.split(":")[0])+" : "+t._s(t.rule.failDig.split(":")[1]))])]),A("i",{staticClass:"help nominscreen",on:{click:function(e){t.isShowABpopup=!0}}}),A("i",{staticClass:"help minscreen",on:{click:function(e){t.$router.push("ab")}}})]):t._e()]),A("GameHelpPopup",{model:{value:t.isShowHelp,callback:function(e){t.isShowHelp=e},expression:"isShowHelp"}}),A("mu-dialog",{attrs:{open:t.openWeixinQR,"append-body":!1},on:{"update:open":function(e){t.openWeixinQR=e}}},[A("img",{attrs:{src:s("d468"),alt:""}})]),A("AbPopup",{model:{value:t.isShowABpopup,callback:function(e){t.isShowABpopup=e},expression:"isShowABpopup"}}),A("BonusPoolsPopup",{attrs:{ab:!0},model:{value:t.isShowBPpopup,callback:function(e){t.isShowBPpopup=e},expression:"isShowBPpopup"}}),A("FundraiyPopup",{model:{value:t.isShowFundraiy,callback:function(e){t.isShowFundraiy=e},expression:"isShowFundraiy"}}),A("audio",{ref:"diceA",attrs:{loop:"true",hidden:"true"}},[A("source",{attrs:{src:s("f282")}})]),A("audio",{ref:"diceB",attrs:{hidden:"true"}},[A("source",{attrs:{src:s("3738"),loop:"false"}})]),A("div",t._l(t.audioList.list,function(t){return A("audio",{attrs:{controls:"controls",hidden:"true",autoplay:""}},[A("source",{attrs:{src:s("e66f"),loop:"false"}})])}))],1)},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"scale"},[s("span",[t._v("1")]),s("span",[t._v("100")])])}],r=(s("c5f6"),s("c93e")),c=s("14b5"),l=s("2f62"),u=(s("b253"),s("938b")),V=s("bbcb"),d=s("6d7d"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("mu-dialog",{staticClass:"gamehelp-popup",attrs:{width:"600",open:t.isShow,"append-body":!1,"overlay-close":!1},on:{"update:open":function(e){t.isShow=e}}},[s("a",{staticClass:"close-btn",attrs:{href:"javascript:;"},on:{click:function(e){t.isShow=!1}}}),s("h4",[t._v(t._s(t.$t("message.GameRule")))]),s("div",{ref:"contentText",staticClass:"content-text nominscreen",domProps:{innerHTML:t._s(t.$t("message.GameHelp"))}}),s("div",{ref:"contentText",staticClass:"content-text minscreen",domProps:{innerHTML:t._s(t.$t("message.GameHelpMobile"))}}),s("div",{staticClass:"btn-wrap"},[s("button",{staticClass:"high",on:{click:function(e){t.isShow=!1}}},[t._v(t._s(t.$t("message.GameKnow")))])])])},p=[],h=s("1fba"),f={props:{isShowHelp:{type:Boolean,default:!1}},data:function(){return{bonusPoolsData:{},isShow:!1}},watch:{isShow:function(t){var e=this;t?setTimeout(function(){e.$refs.contentText&&!e.$IsPC()&&(e.scroll=new h["a"](e.$refs.contentText,{click:!0,taps:!0}))},1e3):this.$emit("change",t)},isShowHelp:function(t){t&&(this.isShow=!0)}},model:{prop:"isShowHelp",event:"change"}},v=f,g=(s("cf98"),s("2877")),y=Object(g["a"])(v,m,p,!1,null,null,null);y.options.__file="gamehelp_popup.vue";var b=y.exports,T=s("3325"),w={props:{diceStatistics:{type:Object,default:function(){return{earned:"",guessCount:"",newcomers:[]}}}},data:function(){return{amount:100,odds:50,rule:{},luckyColor:"green",luckyNum:"00",timer:null,getBetResultTimer:null,maxNum:96,isShowHelp:!1,openWeixinQR:!1,autoBet:!1,isShowABpopup:!1,isShowFundraiy:!1,scroll:null,betBtnLoading:!1,isShowResult:!1,isShowBPpopup:!1,audioList:{timerID:null,list:[]},music:!1,isIOS:!1,bonusPoolsData:{ab:0,transferred:0},contractAB:0}},created:function(){this.getRule(),window.hd={},this.isIOS=!(!this.$browser||!this.$browser.version.ios),"TRX"==this.coinType?this.amount=100:this.amount=.01},mounted:function(){this.setBetInfo({diceList:this.diceList,amount:this.amount});var t=this;window.onmouseup=function(){window.onmousemove=null,t.closePopup(),t.isShowResult=!1},window.ontouchend=function(){t.closePopup(),t.isShowResult=!1,window.ontouchmove=null},window.ontouchstart=function(){t.closePopup(),t.isShowResult=!1},this.setBetInfo({odds:1}),"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||"YES"==sessionStorage.getItem("IsFirstEnter")||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},methods:Object(r["a"])({inputAmountBlur:function(){var t=0;this.currentAddr.assets&&(t=Math.floor(1e3*this.currentAddr.assets[this.coinType].amount)/1e3),this.amount<this.rule.minInvest&&("TRX"==this.coinType?this.amount=100:this.amount=.01),this.amount>t&&(t>this.rule.maxInvest?this.amount=this.rule.maxInvest:t<=0?"TRX"==this.coinType?this.amount=100:this.amount=.01:this.amount=t)},luckyRun:function(){var t=this;clearInterval(this.timer),this.timer=null,this.music&&this.$refs.diceA.play(),this.timer=setInterval(function(){t.luckyNum=Math.floor(89*Math.random())+10,t.luckyColor=["green","red","golden"][Math.floor(2*Math.random())]},50)},onHotkeys:function(t){var e=0;switch(this.currentAddr.assets&&(e=Math.floor(1e3*this.currentAddr.assets[this.coinType].amount)/1e3),t){case"max":e<this.rule.maxInvest?this.amount=e<=0?this.rule.minInvest:e:this.amount=this.rule.maxInvest;break;case"min":this.amount=this.rule.minInvest;break;case.5:this.amount=.5*this.amount<this.rule.minInvest?this.rule.minInvest:.5*this.amount;break;case 2:this.amount=2*this.amount>this.rule.maxInvest?this.rule.maxInvest:2*this.amount;break;default:this.amount=t;break}},onAdd:function(){this.amount=(Number(this.amount)+.01).toFixed(2)},onMinus:function(){this.amount=(Number(this.amount)-.01).toFixed(2),this.amount<.01&&(this.amount=.01)}},Object(l["b"])({setBetInfo:"SET_ROLLER_BET_INFO",alert:"alert",openLogin:"OPEN_LOGIN",openWinPopup:"OPEN_WIN_POPUP",openConfirm:"OPEN_CONFIRM",closePopup:"CLOSE_POPUP",changeCoinType:"CHANGE_COINTYPE"}),{onHandleClick:function(t){var e=t.offsetX,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),A=this.$refs.slider.clientWidth-s-20;e=e<=2?2:e>=A?A:e,this.$refs.handle.style.left=e-9+"px",this.$refs.bar.style.width=e+10+"px",this.odds=(e/(A/this.maxNum)).toFixed(2)<2?2:(e/(A/this.maxNum)).toFixed(),this.setBetInfo({odds:this.odds,amount:this.amount})},onHandleMouseD:function(t){var e=this,s=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,A=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-A-20,a=t.offsetX,n=0;window.onmousemove=function(t){n=t.clientX-s-a,n=n<=2?2:n>=i?i:n,e.$refs.handle.style.left=n-9+"px",e.$refs.bar.style.width=n+10+"px",e.odds=(n/(i/e.maxNum)).toFixed(2)<2?2:(n/(i/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},onHandleTouchS:function(t){var e=this,s=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,A=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-A-20,a=(t.touches[0].clientX,this.$refs.handle.offsetLeft,0);window.ontouchmove=function(t){a=t.touches[0].clientX-s,a=a<=2?2:a>=i?i:a,e.$refs.handle.style.left=a-9+"px",e.$refs.bar.style.width=a+10+"px",e.odds=(a/(i/e.maxNum)).toFixed(2)<2?2:(a/(i/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result,t.luckyNum=e.result.lastLucky||"00")})},betDo:function(){var t=this;if(!this.betBtnLoading){this.isShowResult=!1;var e=this;/^\d+(\.\d+)?$/.test(this.amount)?this.amount>1*this.currentAddr.assets[this.coinType].amount?this.alert({type:"info",msg:this.$t("message.assetsNotEnough")}):Number(this.amount)<this.rule.minInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLow")+this.rule.minInvest+this.coinType}):1*this.amount>1*this.rule.maxInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLarge")+this.rule.maxInvest+this.coinType}):(this.betBtnLoading=!0,this.$http.post("/app/dice/dice",{coinAddress:this.currentAddr.assets[this.coinType].coinAddress,coinAmount:this.amount,guessNum:this.odds,noLoading:!0}).then(function(s){if(200==s.code)if("DISPATCHER"==s.result.resultType)t.alert({type:"success",msg:s.msg}),t.luckyRun(),e.getBetResult(s.result.recdId,s.result.coinAmount);else{switch(t.alert({type:"info",msg:"Please Wait For Wallet to ConfirmTransfer...",timeout:9999999}),s.result.coinType){case"ETH":t.placeBet(t.odds,100,s.result.commitLastBlock,s.result.commit,s.result.signData,s.result.coinAmount,s.result.recdId);break;case"TRX":t.placeBetTRX(t.odds,s.result.recdId,s.result.coinAmount);break}window.hd.betFailed=function(t){e.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})},window.hd.betSuccess=function(t){e.alert({type:"info",msg:"Successful bet.",timeout:9999999}),e.luckyRun(),e.getBetResult(s.result.recdId,s.result.coinAmount)}}else t.betBtnLoading=!1}).catch(function(e){t.betBtnLoading=!1})):this.alert({type:"info",msg:this.$t("message.GameAmountErr")})}},placeBet:function(t,e,s,A,i,a,n){var o=this,r=this,c=this.web3.web3Instance.utils.toWei(a+"","ether");this.web3.diceApiHandle.methods.placeBetV1(t,e,s,A,i).send({from:this.currentAddr.coinAddress,value:c,gas:21e4,gasPrice:1e10},function(t,e){t?o.betBtnLoading=!1:r.alert({type:"info",msg:"Bet submitted! Waiting for Ethereum...",timeout:9999999})}).then(function(t){r.alert({type:"info",msg:"Successful bet.",timeout:9999999}),r.luckyRun(),r.getBetResult(n,a)}).catch(function(t){r.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3}),o.betBtnLoading=!1})},placeBetTRX:function(t,e,s){var A=this,i=this,a=this.tronWeb.tronWebInstance.toSun(10),n=this.tronWeb.tronWebInstance.toSun(s);this.tronWeb.contract.placeBetV1(t,100,e).send({feeLimit:a,callValue:n,shouldPollResponse:!1}).then(function(t){i.alert({type:"info",msg:"Bet submitted! Waiting for Tron...",timeout:9999999}),i.getBetResult(e,s),A.timer||A.luckyRun()}).catch(function(t){console.log("placeBetTRX",t),i.betBtnLoading=!1,i.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})})},getBetResult:function(t,e){var s=this;clearInterval(this.getBetResultTimer),this.getBetResultTimer=null,this.getBetResultTimer=setInterval(function(){Object(u["a"])({type:"get",url:"/app/dice/dice/"+t,data:{}}).then(function(t){200==t.code?"WAITING_SETTLE"==t.result.tradeStatus&&"TRX"==s.coinType?(s.alert({type:"info",msg:"Successful bet.",timeout:9999999}),s.betBtnLoading=!1):"DONE"!=t.result.tradeStatus&&"FAIL"!=t.result.tradeStatus||(s.betBtnLoading=!1,clearInterval(s.timer),s.timer=null,clearInterval(s.getBetResultTimer),s.getBetResultTimer=null,s.luckyColor="green","DONE"==t.result.tradeStatus?(s.$refs.diceA.pause(),s.music&&s.$refs.diceB.play(),s.$store.commit("closeAlert"),s.luckyNum=t.result.luckyNum,s.showBetResult(t.result.luckyNum),s.$store.dispatch("updateProperty"),"WIN"==t.result.winFlag?s.openWinPopup({ab:t.result.abNum,rewards:t.result.rewards,coinType:t.result.coinType,winFlag:"WIN",amount:e,luckyNum:t.result.luckyNum}):"LOSE"==t.result.winFlag&&s.openWinPopup({ab:t.result.abNum,rewards:0,coinType:t.result.coinType,winFlag:"LOSE",amount:e,luckyNum:t.result.luckyNum}),setTimeout(function(){s.autoBet&&s.userInfo.token&&(s.closePopup(),s.betDo())},1e3)):s.alert({type:"info",msg:"Frustrated bet."})):(s.betBtnLoading=!1,clearInterval(s.timer),s.timer=null,clearInterval(s.getBetResultTimer),s.getBetResultTimer=null,s.luckyNum="00",s.luckyColor="green")}).catch(function(t){s.betBtnLoading=!1,clearInterval(s.timer),s.timer=null,clearInterval(s.getBetResultTimer),s.getBetResultTimer=null,s.luckyColor="green",s.luckyNum="00"})},1e3)},openFundraiy:function(){"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},showBetResult:function(t){var e=this.$refs.slider.clientWidth-20,s=e/100;this.$refs.luckynum.style.left=s*t-8+"px",this.$refs.luckynum.innerHTML=t,this.isShowResult=!0},showBP:function(){this.$IsPC()?this.isShowBPpopup=!0:this.$router.push("bonus-pool?ab=true")},getBonusPools:function(){var t=this;Object(u["a"])({type:"get",url:"/app/profit/profit",data:{coinType:this.coinType}}).then(function(e){200==e.code&&(t.bonusPoolsData.transferred=e.result.transferred||0,t.bonusPoolsData.ab=e.result.ab||0)}),"TRX"==this.coinType&&this.tronWeb.tronWebInstance.contract().at(window.TRONABTOKEN,function(e,s){e?console.error(e):s.balanceOf(t.tronWeb.coinbase).call(function(e,s){e?console.error(e):t.contractAB=parseInt(s._hex,16)/1e6})}),"ETH"==this.coinType&&this.web3.ABapiHandle.methods.balanceOf(this.web3.coinbase).call(function(e,s){e?console.error(e):t.contractAB=t.web3.web3Instance.utils.fromWei(s,"ether")})}}),watch:{diceList:{handler:function(t,e){this.setBetInfo({diceList:t,amount:this.amount})},deep:!0},amount:function(t,e){this.setBetInfo({odds:this.odds,amount:t})},coinType:function(){this.getRule(),"TRX"==this.coinType?this.amount=100:this.amount=.01},odds:function(){var t=this;this.music&&(this.audioList.list.push(this.odds),this.audioList.timerID&&clearTimeout(this.audioList.timerID),this.audioList.timerID=setTimeout(function(){t.audioList.list=[]},400))}},computed:Object(r["a"])({},Object(l["c"])({web3:function(t){return t.web3Handler.web3},currentAddr:function(t){return t.user.currentAddr},userInfo:function(t){return t.user.userInfo},coinType:function(t){return t.user.coinType},tronWeb:function(t){return t.tronHandler.tronWeb}}),{peilv:function(){return 98.5/((1*this.odds).toFixed()-1)},bonus:function(){return Math.floor(this.amount*this.peilv*1e4)/1e4<0?0:Math.floor(this.amount*this.peilv*1e4)/1e4}}),components:{DigitalRoll:c["a"],AbPopup:V["a"],FundraiyPopup:d["a"],GameHelpPopup:b,BonusPoolsPopup:T["a"]},destroyed:function(){clearInterval(this.timer),this.timer=null,this.luckyColor="green",this.luckyNum="00",this.autoBet=!1}},q=w,_=(s("9f5d"),Object(g["a"])(q,n,o,!1,null,null,null));_.options.__file="bet.vue";var C=_.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-preview"},[s("div",{staticClass:"ctn ctn1"},[s("h4",[t._v("获胜机会")]),s("h3",[t._v(t._s(this.betInfo.odds)+"%")])]),s("div",{staticClass:"ctn ctn2"},[s("h4",[t._v("赢得投注")]),t._m(0),s("label",{},[t._v("您将赢得"),s("DigitaRoll",{attrs:{value:1.96*this.betInfo.amount}}),t._v("以太幣")],1),s("p",{staticClass:"tip"},[t._v("1% 费用，0.001以太幣累积大奖")])]),s("div",{staticClass:"ctn ctn3"},[s("h4",[t._v("大奖包括")]),s("h3",[s("DigitaRoll",{attrs:{value:888}}),s("i",[t._v("以太幣")])],1),s("label",[t._v("幸运数字是888!")])])])},I=[function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("h3",[A("img",{attrs:{src:s("6e8e")}}),t._v("1.96×")])}],R=(s("cadf"),s("551c"),s("097d"),{props:["betInfo"],data:function(){return{}},mounted:function(){},components:{DigitaRoll:c["a"]}}),k=R,S=(s("4f25"),Object(g["a"])(k,B,I,!1,null,null,null));S.options.__file="preview.vue";var E=S.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-roller-record"},[s("div",{staticClass:"nav"},[s("a",{staticClass:"tl",class:{active:"RECENT"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("RECENT")}}},[t._v(t._s(t.$t("message.GamesPlayers")))]),s("a",{class:{active:"GANGSTER"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("GANGSTER")}}},[t._v(t._s(t.$t("message.GameBig")))]),s("a",{class:{active:"LUCKY"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("LUCKY")}}},[t._v(t._s(t.$t("message.GameLuckyList")))]),s("a",{staticClass:"tr",class:{active:"ME"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("ME")}}},[t._v(t._s(t.$t("message.GameRecord")))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:"ME"==t.boardType,expression:"boardType == 'ME'"}],staticClass:"myinfo"},[s("span",{staticClass:"fl"},[t._v(t._s(t.$t("message.GameParticipation"))+" "),s("i",[t._v(t._s(t.diceBasis.totalParticipate||0))])]),s("span",{staticClass:"fr"},[t._v("AB: "),s("i",[t._v(t._s(Math.floor(100*t.diceBasis.totalAb)/100))])]),s("span",{staticClass:"fr"},[t._v(t._s(t.$t("message.GameProfit"))),s("i",[t._v(t._s(t.diceBasis.totalEarn||0))]),t._v(t._s(t.coinType))]),s("span",{staticClass:"fr nominscreen"},[t._v(t._s(t.$t("message.GameTips1")))])]),s("div",{staticClass:"table-record nominscreen"},[s("div",{staticClass:"t-head"},[s("span",[t._v(t._s(t.$t("message.GamePlay")))]),s("span",{staticClass:"tl"},[t._v(t._s(t.$t("message.GameTime")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameBetNum")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameForecast")))]),s("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameLucky")))]),s("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))]),s("span",{staticClass:"nominscreen"},[t._v("AB")])]),s("div",{staticClass:"t-body"},t._l(t.displayedList,function(e){return s("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},[s("li",{staticClass:"user"},[s("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]),s("li",{staticClass:"tl"},[s("span",[t._v(t._s(t.$fmtDate(e.updateTimestamp,"time")))])]),s("li",[s("span",[t._v(t._s(e.coinAmount))])]),s("li",[s("span",[t._v(t._s(e.guess))])]),s("li",[s("span",[t._v(t._s(e.luckyNum))])]),s("li",{staticClass:"golden tr"},[e.rewards>0?s("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()]),s("li",[s("span",[t._v(t._s(Math.floor(100*e.abNum)/100))])])])}))]),s("div",{staticClass:"table-record minscreen"},[s("div",{staticClass:"t-head"},["ME"!=t.boardType?s("span",[t._v(t._s(t.$t("message.GamePlay")))]):s("span",[t._v(t._s(t.$t("message.GameTime")))]),s("span",[t._v(t._s(t.$t("message.GameForecast")))]),s("span",[t._v(t._s(t.$t("message.GameLucky")))]),s("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))])]),s("div",{staticClass:"t-body"},t._l(t.displayedList,function(e){return s("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},["ME"!=t.boardType?s("li",{staticClass:"user"},[s("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]):s("li",[s("span",[t._v(t._s(t.$fmtDate(e.updateTimestamp,"time")))])]),s("li",[s("span",[t._v(t._s(e.guess))])]),s("li",[s("span",[t._v(t._s(e.luckyNum))])]),s("li",{staticClass:"golden tr"},[e.rewards>0?s("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()])])}))])])},G=[],L={data:function(){return{unfold:-1,recordsList:[],displayedList:[],boardType:"RECENT",rule:{},timer:null,diceBasis:{totalAb:0},lastRecord:"",updateListTimer:null}},created:function(){var t=this;this.getRule(),this.getData(this.boardType),this.timer=window.setInterval(function(){t.getDataPoll()},3e3),console.log(this.$fmtDate("1545722738000","time"))},watch:{currentAddr:function(){},coinType:function(){this.getData(this.boardType),this.getRule()}},computed:Object(r["a"])({},Object(l["c"])({currentAddr:function(t){return t.user.currentAddr},coinType:function(t){return t.user.coinType}})),methods:Object(r["a"])({getData:function(t){var e=this;this.boardType=t,this.lastRecord="";var s=null;if(this.currentAddr.assets&&(s=this.currentAddr.assets[this.coinType].coinAddress),!s&&"ME"==this.boardType)return this.recordsList=[],void(this.displayedList=[]);this.$http.get("/app/dice/board",{params:{boardType:this.boardType,coinAddress:s,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30,noLoading:!0,last:this.lastRecord}}).then(function(t){200==t.code&&(e.recordsList=[],e.displayedList=t.result.records.list,e.diceBasis=t.result.diceBasis,t.result.records.list[0]&&(e.lastRecord=t.result.records.list[0].updateTimestamp),e.updateList())})},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result)})},getDataPoll:function(){var t=this,e=null;if(this.currentAddr.assets&&(e=this.currentAddr.assets[this.coinType].coinAddress),!e&&"ME"==this.boardType)return this.recordsList=[],void(this.displayedList=[]);var s=this.boardType;Object(u["a"])({type:"get",url:"/app/dice/board",data:{boardType:s,coinAddress:e,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30,last:this.lastRecord}}).then(function(e){200==e.code&&(s==t.boardType&&e.result.records&&(t.recordsList=e.result.records.list.concat(t.recordsList)),t.diceBasis=e.result.diceBasis,s==t.boardType&&e.result.records.list[0]&&(t.lastRecord=e.result.records.list[0].updateTimestamp),t.$emit("setDiceStatistics",e.result.diceStatistics))})},updateList:function(){var t=this;if(clearTimeout(this.updateListTimer),this.recordsList.length>0){this.displayedList.length>=30&&this.displayedList.pop();var e=this.recordsList.pop();e&&this.displayedList.unshift(e)}this.updateListTimer=setTimeout(function(){t.updateList()},300)}},Object(l["b"])({alert:"alert"})),destroyed:function(){clearInterval(this.timer)}},N=L,P=(s("85b8"),Object(g["a"])(N,x,G,!1,null,null,null));P.options.__file="record.vue";var M=P.exports,D=s("348c"),$=s("1720"),H={data:function(){return{disabled:!1,diceStatistics:{earned:"",guessCount:"",newcomers:[]}}},methods:{setDiceStatistics:function(t){this.diceStatistics=t||{earned:"",guessCount:"",newcomers:[]}}},computed:{betInfo:function(){return this.$store.state.roller.betInfo}},components:{HeaderBar:a["a"],FooterBar:D["a"],Bet:C,Preview:E,Record:M,AEFcountDownBtn:$["a"]}},U=H,O=(s("0da4"),Object(g["a"])(U,A,i,!1,null,null,null));O.options.__file="Roller.vue";e["default"]=O.exports},"85b8":function(t,e,s){"use strict";var A=s("23c2"),i=s.n(A);i.a},"9bf3":function(t,e,s){},"9f5d":function(t,e,s){"use strict";var A=s("6cdf"),i=s.n(A);i.a},a522:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAuBAMAAACytabNAAAAKlBMVEVHcEz/yiX/xCX/xCX/xiX/xyf/xSX/xCX/xCX/xCT/xCX/xCT/xSb/xCWlap4vAAAADXRSTlMAB+mKPhZtusqoWNknhb3eUgAAAK9JREFUKM9jYACBu1DAgACjQrQXmnsXDdxkCEIXUmVgQRdyYGCwRRW5DDRMGlVoI1CIBUMfms7LYGdwIAs1goV4kIUOQFybixC5BvUOO0KoACrEqgsTuRQA8/VamNAteEBwwoQmwIVgOhH6GBh8IUJXkIKQGSJkgCTEuBckclsASQiiE1kfVKcBihBD7927NwRQhc7evXsHVYSB7e7dBDQhhtrr6CIMQaoYQlwLYCwAsthTiOSdX9wAAAAASUVORK5CYII="},a651:function(t,e,s){},cf98:function(t,e,s){"use strict";var A=s("9bf3"),i=s.n(A);i.a},e66f:function(t,e){t.exports="data:audio/mpeg;base64,SUQzBAAAAAAAF1RTU0UAAAANAAADTGF2ZjUzLjI0LjAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAAcAAAACAAAMPQCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//vgZAAACPuBzSUnAACObceHoKAAa3HbSbmOAApXxKErBoAApB4AADdQhCEIOu10YrFaNIEGds7d+3clEssbjEYpMObzp42/j+SyxhhhUpJfT2869PT09PLOSt23Lct35fUf+H7UMOQzhnD8R9nEmZWkOkWy+PKYFyDGEBDLboPpjqDqnYm/cshhhiwi7GuUTpqBltC8CmjiSzDCpSRun7hhhdfdU5chFBpmMrt/XdtUiYiRCgjiUrW1A0Vy2iKDTJl23Lh+3Ujcvt9/POnp4xLMZW/7/v/D9v6kMOQ5DuUTS0JZkEAiIAGWTm+1Iw/7/v/G6fPUofxy3Lct/3/h+NxuNw5GIxGJZSWMMM+1Iw/jkOQ5DkM7Z2ztnbO2vu/L9RuG3/f9/3/h+X5U9PT09PT09Pnh9enjcbjdPT0lJSUlJSYABKiBAAGMYxjHjGMbwAd3d3uEFxc97+RcGgNA8MRK3DgGgNBQyRcOwbgsFERCBQGgNAFwFwbh+//6IQKGJIoKJX+4oKCiIlbogoYif//CJVu7u7vaIiIiQju/u7uiJXy7oiIiIlX+78ILi57vfo7vf6I7v6IiC57/8ILu7u7li4NBQUMEeBnwABwA7/+OP/H3/3//3r9nA8fA8PjGQNmpZj/VgHUxqAf2hMNfl2hQP4mCQwYnBUjcKrSgYMjgHLKiMAJ6lmbm+FlRCDRYMGIwOia2JCUilr/2MhQRAMwwKDIA1MSB52ZaFwFEd5dx/zAYaMdgYx+CQoSxgnnBL1Ke4dh0wQAf/XZU5Ro0FmbxgYjFZk0hGNjIZUIppYXvtEY46TAi/xgECOd3Hm+Yjp1RCHQQAQkYaEYAJZnhkmMQQY9M7ovy+r7P870fQxEQS///97pbgk/jJCnNDDg1IgTKxCGheY1AJhsVqBGGAOBjgAAqpaos/zOXpjThIJm4sRrZ8/9///5gEJFuzBoCAXNNKGkOVD2GHwEYZBhhkKAQDjQHFgGYaARiAAF9Yebstpu0KeJaKRKJtpaRbpgKpfx5Kv//1++a/4qzZt4W7kAM+eu9Gu3aB/Zy/lSxn/////92a1qtj3E3UIJBQAAEIMIAQAAAAAAG7sYQaBJu5AsNQwkYuLC9vMtqIJKF3ysL4Nw5BAVA6UvH+VUWVB7On1N21y1jS4mpmZIhzlna9aY1Ka1IplsZ1SNtLM34nraWlZsuHLmovmfZ2mlSSre3KthRx8RdnHxF3CLfDwcwrCw0M21/8EJMuOoWSXTcp7I///5rJqltlq3G/////w38Tz5VKkxBTUUzLjk4LjSqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//viZAAP+2x7NI8zYACEbzZx4ZgAAAABpAAAACAAADSAAAAEYCq1a71rWtM1WraEoAYAKKxKHq7sw7JE5kHnlaUxKLRGHYKR6LxPKmkWWAQEgtA6AkwYNMOC1xAwDMEAVIrSSKcMABZhwigOXihJTBhLIi7xbYuECAEvyFRAyc4M/OBJGMmZTmsM9LPNxPgAfmpKJng+X4LpAglNKazdnEFLxkiaa8wmrI5mAujgYKHGKihiIUlansAQAtErqVrlTFU1l65UxV0zjhM6d6GmUqleVVYCgBgYAhUjKAgkkATDg0tQZCeGmpxnokYoxnSbJ9W6bODGuUZ316dJAmpD5CJGQjgcNF7WHmAAoKBXkR6LxNSQEmBAqdUGtdkNa1AKPKDsLTlQCpgurHmVKmXVLGVKmZdL3BWFTFVLD0RYau1iLuy2zciLktdfmxDTlM6a9SOE16RRFyYrNO1GcJU/zvTzooml4XmYCmKumilUumX9vymMy3laNRqNWdSqNRq1EWsrth6hdlyXdls07TOorcpmAqqq/G/7sBAU1Vb5n/+Zw4GASJwCJU5pFHXmZY4GAU0SSp5IkdlGWryRp5n////t3NI68znqqxqqvJEjskZz1W9q//qp/qtNBQCk5pFHDgYBIscSJaaAQCk5EijhwMAkWOSrvM7///////5nvM//////////vM95n+qrtVfzM95mfRIkmIKaimZccnBcaVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC40VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="},f282:function(t,e,s){t.exports=s.p+"media/a.dca8292c.wav"},fcaa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcExUUG1TUG1VUG1UUG1VUW5TUG1TUG1TUG1UUG0VEyRKRmEuLEJuiZEBAAAACXRSTlMA55omwhU7cGDenXZJAAACPUlEQVRYw7WYvU4CQRDHTxGh9CNG6SDGGDu1MXYWNHRqIaGjsbBDDYUdPsIJYkZ4AY97AdQXQHgoz0T0bmd2ZneM//byy+187OzMBAGhi5vqKsBqdfcycNNRBX60dusA5K4ho819iajXwFCvzROHQGjbm2CZc7Box0YUSzYk7Fh8VQOrerTf7oHRFkUsAqsyJvI1HumdIuQABK2bxHJJQsKmgVyBqL7xE5kwf3PggGStyZdckDDttCVw0kkK2XNDHlL5mPkwtjMd2vhortmYcUA6VwbRr6Yoa8hzpRHMzE92ZkWiiYFsUP7KIjHtsxzYEfSbfeJuGUhM3rRjDokMT3eJ0JvIC2FMHljEPNlXahZ4JDKQVoIsCIhhzAq+wgiZ4Ou8JyCE/SU/JDRjTyAjFP+CL9JCpVhEyqaPZWQlaICf+fCIKquI9IM78AslPKESJiVMEssa+GVyUmXQ4/X2rXfaYQliL+BD0pQkY5ia/0yZwiPwQZgCEHCVfoCjIiFDGlEcjEFevc0fkimWIFIoHaIv1bEEUaSlIvkVV6zhe/cfNeVCUZTE0hej0qcosGIZH6EyrnksPJ+kru7hUzyvikdc0SpoGhK27YnItodtrkZkc8W1cOa5HuRGMbY0ikX33rIjNb3oJz2ytU4j8djaWhdpBBGpBj7js9lcU25M0AwjOf+RRzFYOY1v0PzrkKgZRRUDr2asVgzvmhWBZhGhWHdoliqa1Y1mQRQEdWRP2BaXXZUssdb8j5WavLj7BE7VXfgQHlC7AAAAAElFTkSuQmCC"}}]);