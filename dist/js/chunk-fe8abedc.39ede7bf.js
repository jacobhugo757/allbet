(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe8abedc"],{"0da4":function(t,e,A){"use strict";var s=A("81c6"),i=A.n(s);i.a},"32a2":function(t,e,A){},3738:function(t,e,A){t.exports=A.p+"media/b.e4f90095.wav"},"44ac":function(t,e,A){},"4f25":function(t,e,A){"use strict";var s=A("32a2"),i=A.n(s);i.a},"6e8e":function(t,e,A){t.exports=A.p+"img/gold.f85f418d.png"},7263:function(t,e,A){"use strict";A.r(e);var s=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"roller-page"},[A("HeaderBar"),A("div",{staticClass:"main",style:{minHeight:t.$window.innerHeight-150+"px"}},[A("Bet",{attrs:{diceStatistics:t.diceStatistics}}),A("Record",{on:{setDiceStatistics:t.setDiceStatistics}})],1),A("FooterBar")],1)},i=[],a=(A("cadf"),A("551c"),A("097d"),A("fca0")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"module-roller-bet"},[s("ul",{staticClass:"coin-select"},[s("li",{staticClass:"online",class:{active:"ETH"==t.coinType},on:{click:function(e){t.changeCoinType("ETH")}}},[s("img",{attrs:{src:A("1eb1"),alt:""}}),s("span",[t._v("ETH")])]),s("li",{staticClass:"online",class:{active:"TRX"==t.coinType},on:{click:function(e){t.changeCoinType("TRX")}}},[s("img",{attrs:{src:A("1d0a"),alt:""}}),s("span",[t._v("TRX")])]),s("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[s("img",{attrs:{src:A("1663"),alt:""}}),s("span",[t._v("EOS")])]),s("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[s("img",{attrs:{src:A("8960"),alt:""}}),s("span",[t._v("AB")])])]),s("div",{ref:"gameContent",staticClass:"game-content"},[s("div",{staticClass:"ctn-top"},[s("div",{staticClass:"bet-input"},[s("p",[t._v(t._s(t.$t("message.GameBetAmount")))]),s("div",{staticClass:"flex-wrap"},[s("div",{staticClass:"input-wrap"},[s("label",{class:{eth:"ETH"==t.coinType,trx:"TRX"==t.coinType}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",oninput:"value=value.replace(/[^0-9\\.]/g,'')",onkeyup:"value=value.replace(/[^0-9\\.]/g,'')",onpaste:"value=value.replace(/[^0-9\\.]/g,'')"},domProps:{value:t.amount},on:{blur:t.inputAmountBlur,input:function(e){e.target.composing||(t.amount=e.target.value)}}}),s("span",[t._v(t._s(t.coinType))])]),s("div",{staticClass:"hotkeys"},[s("span",{on:{click:function(e){t.onHotkeys(2)}}},[t._v("2X")]),s("span",{on:{click:function(e){t.onHotkeys(.5)}}},[t._v("1/2")]),s("span",{on:{click:function(e){t.onHotkeys("min")}}},[t._v("MIN")]),s("span",{on:{click:function(e){t.onHotkeys("max")}}},[t._v("MAX")])])])]),s("div",{staticClass:"award"},[s("p",[t._v(t._s(t.$t("message.GamePlayOutWin")))]),s("div",[s("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:A("1eb1"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:A("1d0a"),alt:""}}),s("span",[t._v(t._s(t.bonus))]),s("i",[t._v(t._s(t.coinType))])])])]),s("ul",{staticClass:"ctn-mdl"},[s("li",[s("label",[t._v(t._s(t.$t("message.GameRUTW")))]),s("span",[t._v(t._s(t.odds)+" "),s("img",{attrs:{src:A("a522")}})])]),s("li",[s("label",[t._v(t._s(t.$t("message.GameOdds")))]),s("span",[t._v(t._s(Math.floor(1e3*t.peilv)/1e3)+" x")])]),s("li",[s("label",[t._v(t._s(t.$t("message.GameProbability")))]),s("span",[t._v(t._s(t.odds-1)+" "),s("i",{staticStyle:{"font-size":"31px","font-style":"normal"}},[t._v("%")])])])]),s("div",{staticClass:"slider-wrap",on:{touchstart:function(t){t.preventDefault()}}},[t._m(0),s("div",{ref:"slider",staticClass:"slider",on:{click:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleClick(e)},touchstart:function(e){return e.stopPropagation(),e.target!==e.currentTarget?null:t.onHandleTouchS(e)}}},[s("div",{ref:"bar",staticClass:"bar",on:{click:t.onHandleClick,touchstart:t.onHandleTouchS}}),s("div",{ref:"handle",staticClass:"handle",on:{mousedown:function(e){return e.preventDefault(),t.onHandleMouseD(e)},touchstart:function(e){return e.preventDefault(),t.onHandleTouchS(e)}}},[s("i",[t._v(t._s(t.odds))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowResult,expression:"isShowResult"}],ref:"luckynum",staticClass:"luckynum",class:{exceed:t.odds<t.luckyNum}},[t._v("88")])])]),s("div",{staticClass:"ctn-btm"},[s("div",{staticClass:"auto-bet"},[s("p",{staticClass:"rule",on:{click:function(e){t.isShowHelp=!0}}},[t._v(t._s(t.$t("message.GameHowToPlay")))]),s("div",{staticClass:"mid"},[s("label",[t._v(t._s(t.$t("message.GameAutoBet")))]),s("span",{staticClass:"switch",class:{on:t.autoBet},on:{click:function(e){t.autoBet=!t.autoBet}}}),s("i",{staticClass:"help",attrs:{"data-text":t.$t("message.GameAutoBetHelp")}})]),s("a",{staticClass:"trumpet",attrs:{href:"javascript:;"}},[s("i",{class:{on:t.music},on:{click:function(e){t.music=!t.music}}})])]),s("div",{staticClass:"bet-wrap"},[s("div",{staticClass:"cell fl nominscreen"},[s("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:A("1eb1")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:A("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?s("i",[s("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):s("i",[t._v("0")]),t._v(" "+t._s(t.coinType)+"\n\t\t\t\t\t")]),t.currentAddr.token&&!t.timer?s("button",{staticClass:"enter",class:{loading:t.betBtnLoading},on:{click:t.betDo}},[t._v(t._s(t.$t("message.GameLuckNum"))+" "+t._s(t.odds))]):t.currentAddr.token&&t.timer?s("button",{staticClass:"enter"},[t._v(t._s(t.luckyNum))]):s("button",{staticClass:"enter",on:{click:t.openLogin}},[t._v(t._s(t.$t("message.login")))]),s("div",{staticClass:"cell fl minscreen"},[s("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:A("1eb1")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:A("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?s("i",[s("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):s("i",[t._v("0")]),t._v(" "+t._s(t.coinType)+"\n\t\t\t\t\t")]),s("div",{staticClass:"cell fr",on:{mouseenter:t.getBonusPools}},[s("img",{attrs:{src:A("8960")}}),t.userInfo.token?s("i",[s("DigitalRoll",{attrs:{value:1*t.currentAddr.bet}})],1):s("i",[t._v("0")]),t._v(" AB\n\t\t\t\t\t\t"),s("div",{staticClass:"supernatant nominscreen"},[s("span",[t._v(t._s(t.bonusPoolsData.transferred)+" AB")]),s("a",{attrs:{href:"javascript:;"},on:{click:t.showBP}},[t._v(t._s(t.$t("message.GameGeted"))+"："+t._s(Math.floor(t.bonusPoolsData.ab))+" AB")])])])])]),t.rule.winDig?s("div",{staticClass:"dig-wrap"},[s("img",{attrs:{src:A("fcaa"),alt:""}}),s("div",{staticClass:"content"},[s("h4",[t._v(t._s(t.$t("message.GameBetToGet"))+" "+t._s(Math.floor(t.rule.winDig.split(":")[1]/t.rule.winDig.split(":")[0]*t.amount))+" AB")]),s("p",[t._v(t._s(t.$t("message.GameStage"))+" "+t._s((t.rule.totalDig/1e9*100).toFixed(2))+"%")]),s("span",[t._v(t._s(t.$t("message.GameDigProportion"))+"　 WIN "+t._s(t.rule.winDig.split(":")[0])+" : "+t._s(t.rule.winDig.split(":")[1])+" 　  LOSE "+t._s(t.rule.failDig.split(":")[0])+" : "+t._s(t.rule.failDig.split(":")[1]))])]),s("i",{staticClass:"help nominscreen",on:{click:function(e){t.isShowABpopup=!0}}}),s("i",{staticClass:"help minscreen",on:{click:function(e){t.$router.push("ab")}}})]):t._e()]),s("GameHelpPopup",{model:{value:t.isShowHelp,callback:function(e){t.isShowHelp=e},expression:"isShowHelp"}}),s("mu-dialog",{attrs:{open:t.openWeixinQR,"append-body":!1},on:{"update:open":function(e){t.openWeixinQR=e}}},[s("img",{attrs:{src:A("d468"),alt:""}})]),s("AbPopup",{model:{value:t.isShowABpopup,callback:function(e){t.isShowABpopup=e},expression:"isShowABpopup"}}),s("BonusPoolsPopup",{attrs:{ab:!0},model:{value:t.isShowBPpopup,callback:function(e){t.isShowBPpopup=e},expression:"isShowBPpopup"}}),s("FundraiyPopup",{model:{value:t.isShowFundraiy,callback:function(e){t.isShowFundraiy=e},expression:"isShowFundraiy"}}),s("audio",{ref:"diceA",attrs:{loop:"true",hidden:"true"}},[s("source",{attrs:{src:A("f282")}})]),s("audio",{ref:"diceB",attrs:{hidden:"true"}},[s("source",{attrs:{src:A("3738"),loop:"false"}})]),s("div",t._l(t.audioList.list,function(t){return s("audio",{attrs:{controls:"controls",hidden:"true",autoplay:""}},[s("source",{attrs:{src:A("e66f"),loop:"false"}})])}))],1)},o=[function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",{staticClass:"scale"},[A("span",[t._v("1")]),A("span",[t._v("100")])])}],r=(A("c5f6"),A("be94")),c=A("14b5"),l=A("2f62"),u=(A("b253"),A("938b")),V=A("bbcb"),d=A("6d7d"),m=A("4d2c"),h=A("3325"),p={props:{diceStatistics:{type:Object,default:function(){return{earned:"",guessCount:"",newcomers:[]}}}},data:function(){return{amount:.1,odds:50,rule:{},luckyColor:"green",luckyNum:"00",timer:null,getBetResultTimer:null,maxNum:96,isShowHelp:!1,openWeixinQR:!1,autoBet:!1,isShowABpopup:!1,isShowFundraiy:!1,scroll:null,betBtnLoading:!1,isShowResult:!1,isShowBPpopup:!1,audioList:{timerID:null,list:[]},music:!1,isIOS:!1,bonusPoolsData:{ab:0,transferred:0}}},created:function(){this.getRule(),window.hd={},this.isIOS=!(!this.$browser||!this.$browser.version.ios)},mounted:function(){this.setBetInfo({diceList:this.diceList,amount:this.amount});var t=this;window.onmouseup=function(){window.onmousemove=null,t.$store.commit("closeAlert"),t.isShowResult=!1},window.ontouchend=function(){t.$store.commit("closeAlert"),t.isShowResult=!1,window.ontouchmove=null},window.ontouchstart=function(){t.$store.commit("closeAlert"),t.isShowResult=!1},this.setBetInfo({odds:1}),"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||"YES"==sessionStorage.getItem("IsFirstEnter")||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},methods:Object(r["a"])({inputAmountBlur:function(){this.amount<this.rule.minInvest&&(this.amount=this.rule.minInvest),this.amount>this.rule.maxInvest&&(this.amount=this.rule.maxInvest)},luckyRun:function(){var t=this;clearInterval(this.timer),this.timer=null,this.music&&this.$refs.diceA.play(),this.timer=setInterval(function(){t.luckyNum=Math.floor(89*Math.random())+10,t.luckyColor=["green","red","golden"][Math.floor(2*Math.random())]},50)},onHotkeys:function(t){switch(t){case"max":this.amount=this.rule.maxInvest;break;case"min":this.amount=this.rule.minInvest;break;case.5:this.amount=.5*this.amount<this.rule.minInvest?this.rule.minInvest:.5*this.amount;break;case 2:this.amount=2*this.amount>this.rule.maxInvest?this.rule.maxInvest:2*this.amount;break;default:this.amount=t;break}},onAdd:function(){this.amount=(Number(this.amount)+.01).toFixed(2)},onMinus:function(){this.amount=(Number(this.amount)-.01).toFixed(2),this.amount<.01&&(this.amount=.01)}},Object(l["b"])({setBetInfo:"SET_ROLLER_BET_INFO",alert:"alert",openLogin:"OPEN_LOGIN",openWinPopup:"OPEN_WIN_POPUP",openConfirm:"OPEN_CONFIRM",closePopup:"CLOSE_POPUP",changeCoinType:"CHANGE_COINTYPE"}),{onHandleClick:function(t){var e=t.offsetX,A=this.$refs.slider.clientWidth/100*(100-this.maxNum),s=this.$refs.slider.clientWidth-A-20;e=e<=2?2:e>=s?s:e,this.$refs.handle.style.left=e-9+"px",this.$refs.bar.style.width=e+10+"px",this.odds=(e/(s/this.maxNum)).toFixed(2)<2?2:(e/(s/this.maxNum)).toFixed(),this.setBetInfo({odds:this.odds,amount:this.amount})},onHandleMouseD:function(t){var e=this,A=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-s-20,a=t.offsetX,n=0;window.onmousemove=function(t){n=t.clientX-A-a,n=n<=2?2:n>=i?i:n,e.$refs.handle.style.left=n-9+"px",e.$refs.bar.style.width=n+10+"px",e.odds=(n/(i/e.maxNum)).toFixed(2)<2?2:(n/(i/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},onHandleTouchS:function(t){var e=this,A=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-s-20,a=(t.touches[0].clientX,this.$refs.handle.offsetLeft,0);window.ontouchmove=function(t){a=t.touches[0].clientX-A,a=a<=2?2:a>=i?i:a,e.$refs.handle.style.left=a-9+"px",e.$refs.bar.style.width=a+10+"px",e.odds=(a/(i/e.maxNum)).toFixed(2)<2?2:(a/(i/e.maxNum)).toFixed(),e.setBetInfo({odds:e.odds,amount:e.amount})}},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result,t.amount=e.result.minInvest,t.luckyNum=e.result.lastLucky||"00")})},betDo:function(){var t=this;if(!this.betBtnLoading){this.isShowResult=!1;var e=this;/^\d+(\.\d+)?$/.test(this.amount)?this.amount>this.currentAddr.assets[this.coinType].amount?this.alert({type:"info",msg:this.$t("message.assetsNotEnough")}):Number(this.amount)<this.rule.minInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLow")+this.rule.minInvest+this.coinType}):1*this.amount>1*this.rule.maxInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLarge")+this.rule.maxInvest+this.coinType}):(this.betBtnLoading=!0,this.$http.post("/app/dice/dice",{coinAddress:this.currentAddr.assets[this.coinType].coinAddress,coinAmount:this.amount,guessNum:this.odds,noLoading:!0}).then(function(A){if(200==A.code)if("DISPATCHER"==A.result.resultType)t.alert({type:"success",msg:A.msg}),t.luckyRun(),e.getBetResult(A.result.recdId,t.amount);else{switch(t.alert({type:"info",msg:"Please Wait For Wallet to ConfirmTransfer...",timeout:9999999}),A.result.coinType){case"ETH":t.placeBet(t.odds,100,A.result.commitLastBlock,A.result.commit,A.result.signData,t.amount,A.result.recdId);break;case"TRX":t.placeBetTRX(t.odds,A.result.recdId,t.amount);break}window.hd.betFailed=function(t){e.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})},window.hd.betSuccess=function(t){e.alert({type:"info",msg:"Successful bet.",timeout:9999999}),e.luckyRun(),e.getBetResult(A.result.recdId,this.amount)}}else t.betBtnLoading=!1}).catch(function(e){t.betBtnLoading=!1})):this.alert({type:"info",msg:this.$t("message.GameAmountErr")})}},placeBet:function(t,e,A,s,i,a,n){var o=this,r=this,c=this.web3.web3Instance.utils.toWei(a+"","ether");this.web3.diceApiHandle.methods.placeBetV1(t,e,A,s,i).send({from:this.currentAddr.coinAddress,value:c,gas:21e4,gasPrice:1e10},function(t,e){t?o.betBtnLoading=!1:r.alert({type:"info",msg:"Bet submitted! Waiting for Ethereum...",timeout:9999999})}).then(function(t){r.alert({type:"info",msg:"Successful bet.",timeout:9999999}),r.luckyRun(),r.getBetResult(n,a)}).catch(function(t){r.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3}),o.betBtnLoading=!1})},placeBetTRX:function(t,e,A){var s=this,i=this,a=this.tronWeb.tronWebInstance.toSun(10),n=this.tronWeb.tronWebInstance.toSun(A);this.tronWeb.contract.placeBetV1(t,100,e).send({feeLimit:a,callValue:n,shouldPollResponse:!1}).then(function(t){i.alert({type:"info",msg:"Bet submitted! Waiting for Tron...",timeout:9999999}),i.getBetResult(e,A),s.timer||s.luckyRun()}).catch(function(t){console.log("placeBetTRX",t),i.betBtnLoading=!1,i.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})})},getBetResult:function(t,e){var A=this;clearInterval(this.getBetResultTimer),this.getBetResultTimer=null,this.getBetResultTimer=setInterval(function(){Object(u["a"])({type:"get",url:"/app/dice/dice/"+t,data:{}}).then(function(t){200==t.code?"WAITING_SETTLE"==t.result.tradeStatus&&"TRX"==A.coinType?(A.alert({type:"info",msg:"Successful bet.",timeout:9999999}),A.betBtnLoading=!1):"DONE"!=t.result.tradeStatus&&"FAIL"!=t.result.tradeStatus||(A.betBtnLoading=!1,clearInterval(A.timer),A.timer=null,clearInterval(A.getBetResultTimer),A.getBetResultTimer=null,A.luckyColor="green","DONE"==t.result.tradeStatus?(A.$refs.diceA.pause(),A.music&&A.$refs.diceB.play(),A.$store.commit("closeAlert"),A.luckyNum=t.result.luckyNum,A.showBetResult(t.result.luckyNum),A.$store.dispatch("updateProperty"),"WIN"==t.result.winFlag?A.openWinPopup({ab:t.result.abNum,rewards:t.result.rewards,coinType:t.result.coinType,winFlag:"WIN",amount:e,luckyNum:t.result.luckyNum}):"LOSE"==t.result.winFlag&&A.openWinPopup({ab:t.result.abNum,rewards:0,coinType:t.result.coinType,winFlag:"LOSE",amount:e,luckyNum:t.result.luckyNum}),setTimeout(function(){A.autoBet&&A.userInfo.token&&(A.closePopup(),A.betDo())},1e3)):A.alert({type:"info",msg:"Frustrated bet."})):(A.betBtnLoading=!1,clearInterval(A.timer),A.timer=null,clearInterval(A.getBetResultTimer),A.getBetResultTimer=null,A.luckyNum="00",A.luckyColor="green")}).catch(function(t){A.betBtnLoading=!1,clearInterval(A.timer),A.timer=null,clearInterval(A.getBetResultTimer),A.getBetResultTimer=null,A.luckyColor="green",A.luckyNum="00"})},1e3)},noWin:function(t){var e=this;this.openConfirm({content:this.$t("message.GameNoWin"),other:this.$t("message.GameWinBox2")+t+"AB",btn:[{type:"high",text:this.$t("message.GameWinBox3"),cb:function(){e.$router.push("roller")}}]})},openFundraiy:function(){"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},showBetResult:function(t){var e=this.$refs.slider.clientWidth-20,A=e/100;this.$refs.luckynum.style.left=A*t-8+"px",this.$refs.luckynum.innerHTML=t,this.isShowResult=!0},showBP:function(){this.$IsPC()?this.isShowBPpopup=!0:this.$router.push("bonus-pool?ab=true")},getBonusPools:function(){var t=this;Object(u["a"])({type:"get",url:"/app/profit/profit",data:{coinType:this.coinType}}).then(function(e){200==e.code&&(t.bonusPoolsData.transferred=e.result.transferred||0,t.bonusPoolsData.ab=e.result.ab||0)})}}),watch:{diceList:{handler:function(t,e){this.setBetInfo({diceList:t,amount:this.amount})},deep:!0},amount:function(t,e){this.setBetInfo({odds:this.odds,amount:t})},coinType:function(){this.getRule()},odds:function(){var t=this;this.music&&(this.audioList.list.push(this.odds),this.audioList.timerID&&clearTimeout(this.audioList.timerID),this.audioList.timerID=setTimeout(function(){t.audioList.list=[]},400))}},computed:Object(r["a"])({},Object(l["c"])({web3:function(t){return t.web3Handler.web3},currentAddr:function(t){return t.user.currentAddr},userInfo:function(t){return t.user.userInfo},coinType:function(t){return t.user.coinType},tronWeb:function(t){return t.tronHandler.tronWeb}}),{peilv:function(){return 98.5/((1*this.odds).toFixed()-1)},bonus:function(){return this.amount*this.peilv*.01<=3e-4?Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3<0?0:Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3:Math.floor(this.amount*this.peilv*.99*1e3)/1e3<0?0:Math.floor(this.amount*this.peilv*.99*1e3)/1e3}}),components:{DigitalRoll:c["a"],AbPopup:V["a"],FundraiyPopup:d["a"],GameHelpPopup:m["a"],BonusPoolsPopup:h["a"]},destroyed:function(){clearInterval(this.timer),this.timer=null,this.luckyColor="green",this.luckyNum="00",this.autoBet=!1}},f=p,v=(A("9f5d"),A("2877")),g=Object(v["a"])(f,n,o,!1,null,null,null);g.options.__file="bet.vue";var y=g.exports,b=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("section",{staticClass:"module-preview"},[A("div",{staticClass:"ctn ctn1"},[A("h4",[t._v("获胜机会")]),A("h3",[t._v(t._s(this.betInfo.odds)+"%")])]),A("div",{staticClass:"ctn ctn2"},[A("h4",[t._v("赢得投注")]),t._m(0),A("label",{},[t._v("您将赢得"),A("DigitaRoll",{attrs:{value:1.96*this.betInfo.amount}}),t._v("以太幣")],1),A("p",{staticClass:"tip"},[t._v("1% 费用，0.001以太幣累积大奖")])]),A("div",{staticClass:"ctn ctn3"},[A("h4",[t._v("大奖包括")]),A("h3",[A("DigitaRoll",{attrs:{value:888}}),A("i",[t._v("以太幣")])],1),A("label",[t._v("幸运数字是888!")])])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("img",{attrs:{src:A("6e8e")}}),t._v("1.96×")])}],w={props:["betInfo"],data:function(){return{}},mounted:function(){},components:{DigitaRoll:c["a"]}},T=w,C=(A("4f25"),Object(v["a"])(T,b,q,!1,null,null,null));C.options.__file="preview.vue";var _=C.exports,B=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("section",{staticClass:"module-roller-record"},[A("div",{staticClass:"nav"},[A("a",{staticClass:"tl",class:{active:"RECENT"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("RECENT")}}},[t._v(t._s(t.$t("message.GamesPlayers")))]),A("a",{class:{active:"GANGSTER"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("GANGSTER")}}},[t._v(t._s(t.$t("message.GameBig")))]),A("a",{class:{active:"LUCKY"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("LUCKY")}}},[t._v(t._s(t.$t("message.GameLuckyList")))]),A("a",{directives:[{name:"show",rawName:"v-show",value:t.currentAddr.token,expression:"currentAddr.token"}],staticClass:"tr",class:{active:"ME"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(e){t.getData("ME")}}},[t._v(t._s(t.$t("message.GameRecord")))])]),A("div",{directives:[{name:"show",rawName:"v-show",value:"ME"==t.boardType,expression:"boardType == 'ME'"}],staticClass:"myinfo"},[A("span",{staticClass:"fl"},[t._v(t._s(t.$t("message.GameParticipation"))+" "),A("i",[t._v(t._s(t.diceBasis.totalParticipate||0))])]),A("span",{staticClass:"fr"},[t._v("AB: "),A("i",[t._v(t._s(t.diceBasis.totalAb||0))])]),A("span",{staticClass:"fr"},[t._v(t._s(t.$t("message.GameProfit"))),A("i",[t._v(t._s(t.diceBasis.totalEarn||0))]),t._v(t._s(t.coinType))]),A("span",{staticClass:"fr nominscreen"},[t._v(t._s(t.$t("message.GameTips1")))])]),A("div",{staticClass:"table-record nominscreen"},[A("div",{staticClass:"t-head"},[A("span",[t._v(t._s(t.$t("message.GamePlay")))]),A("span",{staticClass:"tl"},[t._v(t._s(t.$t("message.GameTime")))]),A("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameBetNum")))]),A("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameForecast")))]),A("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameLucky")))]),A("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))]),A("span",{staticClass:"nominscreen"},[t._v("AB")])]),A("div",{staticClass:"t-body"},t._l(t.recordsList,function(e){return A("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},[A("li",{staticClass:"user"},[A("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]),A("li",{staticClass:"tl"},[A("span",[t._v(t._s(t.$fmtDate(e.createTime,"time")))])]),A("li",[A("span",[t._v(t._s(e.coinAmount))])]),A("li",[A("span",[t._v(t._s(e.guess))])]),A("li",[A("span",[t._v(t._s(e.luckyNum))])]),A("li",{staticClass:"golden tr"},[e.rewards>0?A("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()]),A("li",[A("span",[t._v(t._s(Math.floor(e.abNum)))])])])}))]),A("div",{staticClass:"table-record minscreen"},[A("div",{staticClass:"t-head"},["ME"!=t.boardType?A("span",[t._v(t._s(t.$t("message.GamePlay")))]):A("span",[t._v(t._s(t.$t("message.GameTime")))]),A("span",[t._v(t._s(t.$t("message.GameForecast")))]),A("span",[t._v(t._s(t.$t("message.GameLucky")))]),A("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))])]),A("div",{staticClass:"t-body"},t._l(t.recordsList,function(e){return A("ul",{staticClass:"list-content",class:{lose:"LOSE"==e.winFlag,win:"WIN"==e.winFlag,lucky:e.odds>=t.rule.luckyManOdds,rich:e.coinAmount>=t.rule.gangsterAmount}},["ME"!=t.boardType?A("li",{staticClass:"user"},[A("span",[t._v(t._s(e.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]):A("li",[A("span",[t._v(t._s(t.$fmtDate(e.createTime,"time")))])]),A("li",[A("span",[t._v(t._s(e.guess))])]),A("li",[A("span",[t._v(t._s(e.luckyNum))])]),A("li",{staticClass:"golden tr"},[e.rewards>0?A("span",[t._v(t._s(Math.floor(1e4*e.rewards)/1e4))]):t._e()])])}))])])},I=[],k={data:function(){return{unfold:-1,recordsList:[],boardType:"RECENT",rule:{},timer:null,diceBasis:{}}},created:function(){var t=this;this.getRule(),this.getData(this.boardType),this.timer=window.setInterval(function(){t.getDataPoll()},3e3)},watch:{currentAddr:function(){this.getData(this.boardType)},coinType:function(){this.getRule()}},computed:Object(r["a"])({},Object(l["c"])({currentAddr:function(t){return t.user.currentAddr},coinType:function(t){return t.user.coinType}})),methods:Object(r["a"])({getData:function(t){var e=this;this.boardType=t;var A=null;this.currentAddr.assets&&(A=this.currentAddr.assets[this.coinType].coinAddress),A||"ME"!=this.boardType||(this.boardType="RECENT"),this.$http.get("/app/dice/board",{params:{boardType:this.boardType,coinAddress:A,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30,noLoading:!0}}).then(function(t){200==t.code&&(e.recordsList=t.result.records.list,e.diceBasis=t.result.diceBasis)})},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(e){200==e.code&&(t.rule=e.result)})},getDataPoll:function(){var t=this,e=null;this.currentAddr.assets&&(e=this.currentAddr.assets[this.coinType].coinAddress),e||"ME"!=this.boardType?Object(u["a"])({type:"get",url:"/app/dice/board",data:{boardType:this.boardType,coinAddress:e,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(e){200==e.code&&(t.recordsList=e.result.records.list,t.diceBasis=e.result.diceBasis,t.$emit("setDiceStatistics",e.result.diceStatistics))}):this.boardType="RECENT"}},Object(l["b"])({alert:"alert"})),destroyed:function(){clearInterval(this.timer)}},R=k,E=(A("85b8"),Object(v["a"])(R,B,I,!1,null,null,null));E.options.__file="record.vue";var S=E.exports,x=A("348c"),G=A("1720"),N={data:function(){return{disabled:!1,diceStatistics:{earned:"",guessCount:"",newcomers:[]}}},methods:{setDiceStatistics:function(t){this.diceStatistics=t||{earned:"",guessCount:"",newcomers:[]}}},computed:{betInfo:function(){return this.$store.state.roller.betInfo}},components:{HeaderBar:a["a"],FooterBar:x["a"],Bet:y,Preview:_,Record:S,AEFcountDownBtn:G["a"]}},D=N,L=(A("0da4"),Object(v["a"])(D,s,i,!1,null,null,null));L.options.__file="Roller.vue";e["default"]=L.exports},"81c6":function(t,e,A){},"85b8":function(t,e,A){"use strict";var s=A("44ac"),i=A.n(s);i.a},9256:function(t,e,A){},"9f5d":function(t,e,A){"use strict";var s=A("9256"),i=A.n(s);i.a},a522:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAuBAMAAACytabNAAAAKlBMVEVHcEz/yiX/xCX/xCX/xiX/xyf/xSX/xCX/xCX/xCT/xCX/xCT/xSb/xCWlap4vAAAADXRSTlMAB+mKPhZtusqoWNknhb3eUgAAAK9JREFUKM9jYACBu1DAgACjQrQXmnsXDdxkCEIXUmVgQRdyYGCwRRW5DDRMGlVoI1CIBUMfms7LYGdwIAs1goV4kIUOQFybixC5BvUOO0KoACrEqgsTuRQA8/VamNAteEBwwoQmwIVgOhH6GBh8IUJXkIKQGSJkgCTEuBckclsASQiiE1kfVKcBihBD7927NwRQhc7evXsHVYSB7e7dBDQhhtrr6CIMQaoYQlwLYCwAsthTiOSdX9wAAAAASUVORK5CYII="},e66f:function(t,e){t.exports="data:audio/mpeg;base64,SUQzBAAAAAAAF1RTU0UAAAANAAADTGF2ZjUzLjI0LjAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAAcAAAACAAAMPQCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC40VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="},f282:function(t,e,A){t.exports=A.p+"media/a.dca8292c.wav"},fcaa:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcExUUG1TUG1VUG1UUG1VUW5TUG1TUG1TUG1UUG0VEyRKRmEuLEJuiZEBAAAACXRSTlMA55omwhU7cGDenXZJAAACPUlEQVRYw7WYvU4CQRDHTxGh9CNG6SDGGDu1MXYWNHRqIaGjsbBDDYUdPsIJYkZ4AY97AdQXQHgoz0T0bmd2ZneM//byy+187OzMBAGhi5vqKsBqdfcycNNRBX60dusA5K4ho819iajXwFCvzROHQGjbm2CZc7Box0YUSzYk7Fh8VQOrerTf7oHRFkUsAqsyJvI1HumdIuQABK2bxHJJQsKmgVyBqL7xE5kwf3PggGStyZdckDDttCVw0kkK2XNDHlL5mPkwtjMd2vhortmYcUA6VwbRr6Yoa8hzpRHMzE92ZkWiiYFsUP7KIjHtsxzYEfSbfeJuGUhM3rRjDokMT3eJ0JvIC2FMHljEPNlXahZ4JDKQVoIsCIhhzAq+wgiZ4Ou8JyCE/SU/JDRjTyAjFP+CL9JCpVhEyqaPZWQlaICf+fCIKquI9IM78AslPKESJiVMEssa+GVyUmXQ4/X2rXfaYQliL+BD0pQkY5ia/0yZwiPwQZgCEHCVfoCjIiFDGlEcjEFevc0fkimWIFIoHaIv1bEEUaSlIvkVV6zhe/cfNeVCUZTE0hej0qcosGIZH6EyrnksPJ+kru7hUzyvikdc0SpoGhK27YnItodtrkZkc8W1cOa5HuRGMbY0ikX33rIjNb3oJz2ytU4j8djaWhdpBBGpBj7js9lcU25M0AwjOf+RRzFYOY1v0PzrkKgZRRUDr2asVgzvmhWBZhGhWHdoliqa1Y1mQRQEdWRP2BaXXZUssdb8j5WavLj7BE7VXfgQHlC7AAAAAElFTkSuQmCC"}}]);