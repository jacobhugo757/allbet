(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fe8abedc"],{"0da4":function(t,A,e){"use strict";var s=e("81c6"),i=e.n(s);i.a},"32a2":function(t,A,e){},3738:function(t,A,e){t.exports=e.p+"media/b.e4f90095.wav"},"44ac":function(t,A,e){},"4f25":function(t,A,e){"use strict";var s=e("32a2"),i=e.n(s);i.a},"6e8e":function(t,A,e){t.exports=e.p+"img/gold.f85f418d.png"},7263:function(t,A,e){"use strict";e.r(A);var s=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"roller-page"},[e("HeaderBar"),e("div",{staticClass:"main",style:{minHeight:t.$window.innerHeight-150+"px"}},[e("Bet",{attrs:{diceStatistics:t.diceStatistics}}),e("Record",{on:{setDiceStatistics:t.setDiceStatistics}})],1),e("FooterBar")],1)},i=[],a=(e("cadf"),e("551c"),e("097d"),e("fca0")),n=function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("section",{staticClass:"module-roller-bet"},[s("ul",{staticClass:"coin-select"},[s("li",{staticClass:"online",class:{active:"ETH"==t.coinType},on:{click:function(A){t.changeCoinType("ETH")}}},[s("img",{attrs:{src:e("1eb1"),alt:""}}),s("span",[t._v("ETH")])]),s("li",{staticClass:"online",class:{active:"TRX"==t.coinType},on:{click:function(A){t.changeCoinType("TRX")}}},[s("img",{attrs:{src:e("1d0a"),alt:""}}),s("span",[t._v("TRX")])]),s("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[s("img",{attrs:{src:e("1663"),alt:""}}),s("span",[t._v("EOS")])]),s("li",{staticClass:"not-online",attrs:{"data-text":t.$t("message.BPSoon")}},[s("img",{attrs:{src:e("8960"),alt:""}}),s("span",[t._v("AB")])])]),s("div",{ref:"gameContent",staticClass:"game-content"},[s("div",{staticClass:"ctn-top"},[s("div",{staticClass:"bet-input"},[s("p",[t._v(t._s(t.$t("message.GameBetAmount")))]),s("div",{staticClass:"flex-wrap"},[s("div",{staticClass:"input-wrap"},[s("label",{class:{eth:"ETH"==t.coinType,trx:"TRX"==t.coinType}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"text",oninput:"value=value.replace(/[^0-9\\.]/g,'')",onkeyup:"value=value.replace(/[^0-9\\.]/g,'')",onpaste:"value=value.replace(/[^0-9\\.]/g,'')"},domProps:{value:t.amount},on:{blur:t.inputAmountBlur,input:function(A){A.target.composing||(t.amount=A.target.value)}}}),s("span",[t._v(t._s(t.coinType))])]),s("div",{staticClass:"hotkeys"},[s("span",{on:{click:function(A){t.onHotkeys(2)}}},[t._v("2X")]),s("span",{on:{click:function(A){t.onHotkeys(.5)}}},[t._v("1/2")]),s("span",{on:{click:function(A){t.onHotkeys("min")}}},[t._v("MIN")]),s("span",{on:{click:function(A){t.onHotkeys("max")}}},[t._v("MAX")])])])]),s("div",{staticClass:"award"},[s("p",[t._v(t._s(t.$t("message.GamePlayOutWin")))]),s("div",[s("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:e("1eb1"),alt:""}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:e("1d0a"),alt:""}}),s("span",[t._v(t._s(t.bonus))]),s("i",[t._v(t._s(t.coinType))])])])]),s("ul",{staticClass:"ctn-mdl"},[s("li",[s("label",[t._v(t._s(t.$t("message.GameRUTW")))]),s("span",[t._v(t._s(t.odds)+" "),s("img",{attrs:{src:e("a522")}})])]),s("li",[s("label",[t._v(t._s(t.$t("message.GameOdds")))]),s("span",[t._v(t._s(Math.floor(1e3*t.peilv)/1e3)+" x")])]),s("li",[s("label",[t._v(t._s(t.$t("message.GameProbability")))]),s("span",[t._v(t._s(t.odds-1)+" "),s("i",{staticStyle:{"font-size":"31px","font-style":"normal"}},[t._v("%")])])])]),s("div",{staticClass:"slider-wrap",on:{touchstart:function(t){t.preventDefault()}}},[t._m(0),s("div",{ref:"slider",staticClass:"slider",on:{click:function(A){return A.stopPropagation(),A.target!==A.currentTarget?null:t.onHandleClick(A)},touchstart:function(A){return A.stopPropagation(),A.target!==A.currentTarget?null:t.onHandleTouchS(A)}}},[s("div",{ref:"bar",staticClass:"bar",on:{click:t.onHandleClick,touchstart:t.onHandleTouchS}}),s("div",{ref:"handle",staticClass:"handle",on:{mousedown:function(A){return A.preventDefault(),t.onHandleMouseD(A)},touchstart:function(A){return A.preventDefault(),t.onHandleTouchS(A)}}},[s("i",[t._v(t._s(t.odds))])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowResult,expression:"isShowResult"}],ref:"luckynum",staticClass:"luckynum",class:{exceed:t.odds<t.luckyNum}},[t._v("88")])])]),s("div",{staticClass:"ctn-btm"},[s("div",{staticClass:"auto-bet"},[s("p",{staticClass:"rule",on:{click:function(A){t.isShowHelp=!0}}},[t._v(t._s(t.$t("message.GameHowToPlay")))]),s("div",{staticClass:"mid"},[s("label",[t._v(t._s(t.$t("message.GameAutoBet")))]),s("span",{staticClass:"switch",class:{on:t.autoBet},on:{click:function(A){t.autoBet=!t.autoBet}}}),s("i",{staticClass:"help",attrs:{"data-text":t.$t("message.GameAutoBetHelp")}})]),s("a",{staticClass:"trumpet",attrs:{href:"javascript:;"}},[s("i",{class:{on:t.music},on:{click:function(A){t.music=!t.music}}})])]),s("div",{staticClass:"bet-wrap"},[s("span",{staticClass:"fl nominscreen"},[s("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:e("1eb1")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:e("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?s("i",[s("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):s("i",[t._v("0")]),t._v(" "+t._s(t.coinType))]),t.currentAddr.token&&!t.timer?s("button",{staticClass:"enter",class:{loading:t.betBtnLoading},on:{click:t.betDo}},[t._v(t._s(t.$t("message.GameLuckNum"))+" "+t._s(t.odds))]):t.currentAddr.token&&t.timer?s("button",{staticClass:"enter"},[t._v(t._s(t.luckyNum))]):s("button",{staticClass:"enter",on:{click:t.openLogin}},[t._v(t._s(t.$t("message.login")))]),s("span",{staticClass:"fl minscreen"},[s("img",{directives:[{name:"show",rawName:"v-show",value:"ETH"==t.coinType,expression:"coinType == 'ETH'"}],attrs:{src:e("1eb1")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:"TRX"==t.coinType,expression:"coinType == 'TRX'"}],attrs:{src:e("1d0a")}}),t.currentAddr.token&&t.currentAddr.assets?s("i",[s("DigitalRoll",{attrs:{value:1*t.currentAddr.assets[t.coinType].amount}})],1):s("i",[t._v("0")]),t._v(" "+t._s(t.coinType))]),s("span",{staticClass:"fr"},[s("img",{attrs:{src:e("8960")}}),t.userInfo.token?s("i",[s("DigitalRoll",{attrs:{value:1*t.currentAddr.bet}})],1):s("i",[t._v("0")]),t._v(" AB")])])]),t.rule.winDig?s("div",{staticClass:"dig-wrap"},[s("img",{attrs:{src:e("fcaa"),alt:""}}),s("div",{staticClass:"content"},[s("h4",[t._v(t._s(t.$t("message.GameBetToGet"))+" "+t._s(Math.floor(t.rule.winDig.split(":")[1]/t.rule.winDig.split(":")[0]*t.amount))+" AB")]),s("p",[t._v(t._s(t.$t("message.GameStage"))+" "+t._s((t.rule.totalDig/1e9*100).toFixed(2))+"%")]),s("span",[t._v(t._s(t.$t("message.GameDigProportion"))+"　 WIN "+t._s(t.rule.winDig.split(":")[0])+" : "+t._s(t.rule.winDig.split(":")[1])+" 　  LOSE "+t._s(t.rule.failDig.split(":")[0])+" : "+t._s(t.rule.failDig.split(":")[1]))])]),s("i",{staticClass:"help nominscreen",on:{click:function(A){t.isShowABpopup=!0}}}),s("i",{staticClass:"help minscreen",on:{click:function(A){t.$router.push("ab")}}})]):t._e()]),s("GameHelpPopup",{model:{value:t.isShowHelp,callback:function(A){t.isShowHelp=A},expression:"isShowHelp"}}),s("mu-dialog",{attrs:{open:t.openWeixinQR,"append-body":!1},on:{"update:open":function(A){t.openWeixinQR=A}}},[s("img",{attrs:{src:e("d468"),alt:""}})]),s("AbPopup",{model:{value:t.isShowABpopup,callback:function(A){t.isShowABpopup=A},expression:"isShowABpopup"}}),s("FundraiyPopup",{model:{value:t.isShowFundraiy,callback:function(A){t.isShowFundraiy=A},expression:"isShowFundraiy"}}),s("audio",{ref:"diceA",attrs:{loop:"true",hidden:"true"}},[s("source",{attrs:{src:e("f282")}})]),s("audio",{ref:"diceB",attrs:{hidden:"true"}},[s("source",{attrs:{src:e("3738"),loop:"false"}})]),s("div",t._l(t.audioList.list,function(t){return s("audio",{attrs:{controls:"controls",hidden:"true",autoplay:""}},[s("source",{attrs:{src:e("e66f"),loop:"false"}})])}))],1)},o=[function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("div",{staticClass:"scale"},[e("span",[t._v("1")]),e("span",[t._v("100")])])}],r=(e("c5f6"),e("be94")),c=e("14b5"),l=e("2f62"),u=(e("b253"),e("938b")),V=e("bbcb"),d=e("6d7d"),m=e("4d2c"),h={props:{diceStatistics:{type:Object,default:function(){return{earned:"",guessCount:"",newcomers:[]}}}},data:function(){return{amount:.1,odds:50,rule:{},luckyColor:"green",luckyNum:"00",timer:null,getBetResultTimer:null,maxNum:96,isShowHelp:!1,openWeixinQR:!1,autoBet:!1,isShowABpopup:!1,isShowFundraiy:!1,scroll:null,betBtnLoading:!1,isShowResult:!1,audioList:{timerID:null,list:[]},music:!1,isIOS:!1}},created:function(){this.getRule(),window.hd={},this.isIOS=!(!this.$browser||!this.$browser.version.ios)},mounted:function(){this.setBetInfo({diceList:this.diceList,amount:this.amount}),window.onmouseup=function(){window.onmousemove=null},window.ontouchend=function(){window.ontouchmove=null},this.setBetInfo({odds:1}),"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||"YES"==sessionStorage.getItem("IsFirstEnter")||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},methods:Object(r["a"])({inputAmountBlur:function(){this.amount<this.rule.minInvest&&(this.amount=this.rule.minInvest),this.amount>this.rule.maxInvest&&(this.amount=this.rule.maxInvest)},luckyRun:function(){var t=this;clearInterval(this.timer),this.timer=null,this.music&&this.$refs.diceA.play(),this.timer=setInterval(function(){t.luckyNum=Math.floor(89*Math.random())+10,t.luckyColor=["green","red","golden"][Math.floor(2*Math.random())]},50)},onHotkeys:function(t){switch(t){case"max":this.amount=this.rule.maxInvest;break;case"min":this.amount=this.rule.minInvest;break;case.5:this.amount=.5*this.amount<this.rule.minInvest?this.rule.minInvest:.5*this.amount;break;case 2:this.amount=2*this.amount>this.rule.maxInvest?this.rule.maxInvest:2*this.amount;break;default:this.amount=t;break}},onAdd:function(){this.amount=(Number(this.amount)+.01).toFixed(2)},onMinus:function(){this.amount=(Number(this.amount)-.01).toFixed(2),this.amount<.01&&(this.amount=.01)}},Object(l["b"])({setBetInfo:"SET_ROLLER_BET_INFO",alert:"alert",openLogin:"OPEN_LOGIN",openWinPopup:"OPEN_WIN_POPUP",openConfirm:"OPEN_CONFIRM",closePopup:"CLOSE_POPUP",changeCoinType:"CHANGE_COINTYPE"}),{onHandleClick:function(t){var A=t.offsetX,e=this.$refs.slider.clientWidth/100*(100-this.maxNum),s=this.$refs.slider.clientWidth-e-20;A=A<=2?2:A>=s?s:A,this.$refs.handle.style.left=A-9+"px",this.$refs.bar.style.width=A+10+"px",this.odds=(A/(s/this.maxNum)).toFixed(2)<2?2:(A/(s/this.maxNum)).toFixed(),this.setBetInfo({odds:this.odds,amount:this.amount})},onHandleMouseD:function(t){var A=this,e=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-s-20,a=t.offsetX,n=0;window.onmousemove=function(t){n=t.clientX-e-a,n=n<=2?2:n>=i?i:n,A.$refs.handle.style.left=n-9+"px",A.$refs.bar.style.width=n+10+"px",A.odds=(n/(i/A.maxNum)).toFixed(2)<2?2:(n/(i/A.maxNum)).toFixed(),A.setBetInfo({odds:A.odds,amount:A.amount})}},onHandleTouchS:function(t){var A=this,e=this.$refs.slider.offsetLeft+this.$refs.gameContent.offsetLeft,s=this.$refs.slider.clientWidth/100*(100-this.maxNum),i=this.$refs.slider.clientWidth-s-20,a=(t.touches[0].clientX,this.$refs.handle.offsetLeft,0);window.ontouchmove=function(t){a=t.touches[0].clientX-e,a=a<=2?2:a>=i?i:a,A.$refs.handle.style.left=a-9+"px",A.$refs.bar.style.width=a+10+"px",A.odds=(a/(i/A.maxNum)).toFixed(2)<2?2:(a/(i/A.maxNum)).toFixed(),A.setBetInfo({odds:A.odds,amount:A.amount})}},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(A){console.log("getRule",A),200==A.code&&(t.rule=A.result,t.amount=A.result.minInvest,t.luckyNum=A.result.lastLucky||"00")})},betDo:function(){var t=this;if(!this.betBtnLoading){this.isShowResult=!1;var A=this;/^\d+(\.\d+)?$/.test(this.amount)?this.amount>this.currentAddr.assets[this.coinType].amount?this.alert({type:"info",msg:this.$t("message.assetsNotEnough")}):Number(this.amount)<this.rule.minInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLow")+this.rule.minInvest+this.coinType}):1*this.amount>1*this.rule.maxInvest?this.alert({type:"info",msg:this.$t("message.GameAmountTooLarge")+this.rule.maxInvest+this.coinType}):(this.betBtnLoading=!0,this.$http.post("/app/dice/dice",{coinAddress:this.currentAddr.assets[this.coinType].coinAddress,coinAmount:this.amount,guessNum:this.odds}).then(function(e){if(200==e.code)if("DISPATCHER"==e.result.resultType)t.alert({type:"success",msg:e.msg}),t.luckyRun(),A.getBetResult(e.result.recdId,t.amount);else{switch(t.alert({type:"info",msg:"Please Wait For Wallet to ConfirmTransfer...",timeout:9999999}),e.result.coinType){case"ETH":t.placeBet(t.odds,100,e.result.commitLastBlock,e.result.commit,e.result.signData,t.amount,e.result.recdId);break;case"TRX":t.placeBetTRX(t.odds,e.result.recdId,t.amount);break}window.hd.betFailed=function(t){A.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})},window.hd.betSuccess=function(t){A.alert({type:"info",msg:"Successful bet.",timeout:9999999}),A.luckyRun(),A.getBetResult(e.result.recdId,this.amount)}}else t.betBtnLoading=!1}).catch(function(A){t.betBtnLoading=!1})):this.alert({type:"info",msg:this.$t("message.GameAmountErr")})}},placeBet:function(t,A,e,s,i,a,n){var o=this,r=this,c=this.web3.web3Instance.utils.toWei(a+"","ether");this.web3.diceApiHandle.methods.placeBetV1(t,A,e,s,i).send({from:this.currentAddr.coinAddress,value:c,gas:21e4,gasPrice:1e10},function(t,A){console.log("0000000000000",A),t?o.betBtnLoading=!1:r.alert({type:"info",msg:"Bet submitted! Waiting for Ethereum...",timeout:9999999})}).then(function(t){r.alert({type:"info",msg:"Successful bet.",timeout:9999999}),r.luckyRun(),r.getBetResult(n,a)}).catch(function(t){r.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3}),o.betBtnLoading=!1})},placeBetTRX:function(t,A,e){var s=this,i=this.tronWeb.tronWebInstance.toSun(10),a=this.tronWeb.tronWebInstance.toSun(e);this.tronWeb.contract.placeBetV1(t,100,A).send({feeLimit:i,callValue:a,shouldPollResponse:!1}).then(function(t){s.alert({type:"info",msg:"Bet submitted! Waiting for Tron...",timeout:9999999}),s.getBetResult(A,e)}).catch(function(t){s.betBtnLoading=!1,s.alert({type:"info",msg:"User rejected the signature request.",timeout:3e3})})},getBetResult:function(t,A){var e=this;clearInterval(this.getBetResultTimer),this.getBetResultTimer=null,this.getBetResultTimer=setInterval(function(){Object(u["a"])({type:"get",url:"/app/dice/dice/"+t,data:{}}).then(function(t){200==t.code?"WAITING_SETTLE"==t.result.tradeStatus&&"TRX"==e.coinType?(e.alert({type:"info",msg:"Successful bet.",timeout:9999999}),e.timer||e.luckyRun(),e.betBtnLoading=!1):"DONE"!=t.result.tradeStatus&&"FAIL"!=t.result.tradeStatus||(e.betBtnLoading=!1,clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyColor="green","DONE"==t.result.tradeStatus?(e.$refs.diceA.pause(),e.music&&e.$refs.diceB.play(),e.$store.commit("closeAlert"),e.luckyNum=t.result.luckyNum,e.showBetResult(t.result.luckyNum),e.$store.dispatch("updateProperty"),"WIN"==t.result.winFlag?e.openWinPopup({ab:t.result.abNum,rewards:t.result.rewards,coinType:t.result.coinType,winFlag:"WIN",amount:A,luckyNum:t.result.luckyNum}):"LOSE"==t.result.winFlag&&e.openWinPopup({ab:t.result.abNum,rewards:0,coinType:t.result.coinType,winFlag:"LOSE",amount:A,luckyNum:t.result.luckyNum}),setTimeout(function(){e.autoBet&&e.userInfo.token&&(e.closePopup(),e.betDo())},1e3)):e.alert({type:"info",msg:"Frustrated bet."})):(e.betBtnLoading=!1,clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyNum="00",e.luckyColor="green")}).catch(function(t){e.betBtnLoading=!1,clearInterval(e.timer),e.timer=null,clearInterval(e.getBetResultTimer),e.getBetResultTimer=null,e.luckyColor="green",e.luckyNum="00"})},1e3)},noWin:function(t){var A=this;this.openConfirm({content:this.$t("message.GameNoWin"),other:this.$t("message.GameWinBox2")+t+"AB",btn:[{type:"high",text:this.$t("message.GameWinBox3"),cb:function(){A.$router.push("roller")}}]})},openFundraiy:function(){"TRX"==this.coinType&&this.$IsPC()?this.isShowFundraiy=!0:"TRX"!=this.coinType||this.$IsPC()||(this.$router.push("mobile-fundraiy"),sessionStorage.setItem("IsFirstEnter","YES"))},showBetResult:function(t){var A=this.$refs.slider.clientWidth-20,e=A/100;this.$refs.luckynum.style.left=e*t-8+"px",this.$refs.luckynum.innerHTML=t,this.isShowResult=!0}}),watch:{diceList:{handler:function(t,A){this.setBetInfo({diceList:t,amount:this.amount})},deep:!0},amount:function(t,A){this.setBetInfo({odds:this.odds,amount:t})},coinType:function(){this.getRule()},odds:function(){var t=this;this.music&&(this.audioList.list.push(this.odds),this.audioList.timerID&&clearTimeout(this.audioList.timerID),this.audioList.timerID=setTimeout(function(){t.audioList.list=[]},400))}},computed:Object(r["a"])({},Object(l["c"])({web3:function(t){return t.web3Handler.web3},currentAddr:function(t){return t.user.currentAddr},userInfo:function(t){return t.user.userInfo},coinType:function(t){return t.user.coinType},tronWeb:function(t){return t.tronHandler.tronWeb}}),{peilv:function(){return 98.5/((1*this.odds).toFixed()-1)},bonus:function(){return this.amount*this.peilv*.01<=3e-4?Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3<0?0:Math.floor(1e3*(this.amount*this.peilv-3e-4))/1e3:Math.floor(this.amount*this.peilv*.99*1e3)/1e3<0?0:Math.floor(this.amount*this.peilv*.99*1e3)/1e3}}),components:{DigitalRoll:c["a"],AbPopup:V["a"],FundraiyPopup:d["a"],GameHelpPopup:m["a"]},destroyed:function(){clearInterval(this.timer),this.timer=null,this.luckyColor="green",this.luckyNum="00",this.autoBet=!1}},p=h,f=(e("9f5d"),e("2877")),v=Object(f["a"])(p,n,o,!1,null,null,null);v.options.__file="bet.vue";var g=v.exports,y=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("section",{staticClass:"module-preview"},[e("div",{staticClass:"ctn ctn1"},[e("h4",[t._v("获胜机会")]),e("h3",[t._v(t._s(this.betInfo.odds)+"%")])]),e("div",{staticClass:"ctn ctn2"},[e("h4",[t._v("赢得投注")]),t._m(0),e("label",{},[t._v("您将赢得"),e("DigitaRoll",{attrs:{value:1.96*this.betInfo.amount}}),t._v("以太幣")],1),e("p",{staticClass:"tip"},[t._v("1% 费用，0.001以太幣累积大奖")])]),e("div",{staticClass:"ctn ctn3"},[e("h4",[t._v("大奖包括")]),e("h3",[e("DigitaRoll",{attrs:{value:888}}),e("i",[t._v("以太幣")])],1),e("label",[t._v("幸运数字是888!")])])])},q=[function(){var t=this,A=t.$createElement,s=t._self._c||A;return s("h3",[s("img",{attrs:{src:e("6e8e")}}),t._v("1.96×")])}],b={props:["betInfo"],data:function(){return{}},mounted:function(){},components:{DigitaRoll:c["a"]}},T=b,C=(e("4f25"),Object(f["a"])(T,y,q,!1,null,null,null));C.options.__file="preview.vue";var w=C.exports,_=function(){var t=this,A=t.$createElement,e=t._self._c||A;return e("section",{staticClass:"module-roller-record"},[e("div",{staticClass:"nav"},[e("a",{staticClass:"tl",class:{active:"RECENT"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(A){t.getData("RECENT")}}},[t._v(t._s(t.$t("message.GamesPlayers")))]),e("a",{class:{active:"GANGSTER"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(A){t.getData("GANGSTER")}}},[t._v(t._s(t.$t("message.GameBig")))]),e("a",{class:{active:"LUCKY"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(A){t.getData("LUCKY")}}},[t._v(t._s(t.$t("message.GameLuckyList")))]),e("a",{directives:[{name:"show",rawName:"v-show",value:t.currentAddr.token,expression:"currentAddr.token"}],staticClass:"tr",class:{active:"ME"==t.boardType},attrs:{href:"javascript:;"},on:{click:function(A){t.getData("ME")}}},[t._v(t._s(t.$t("message.GameRecord")))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:"ME"==t.boardType,expression:"boardType == 'ME'"}],staticClass:"myinfo"},[e("span",{staticClass:"fl"},[t._v(t._s(t.$t("message.GameParticipation"))+" "),e("i",[t._v(t._s(t.diceBasis.totalParticipate||0))])]),e("span",{staticClass:"fr"},[t._v("AB: "),e("i",[t._v(t._s(t.diceBasis.totalAb||0))])]),e("span",{staticClass:"fr"},[t._v(t._s(t.$t("message.GameProfit"))),e("i",[t._v(t._s(t.diceBasis.totalEarn||0))]),t._v(t._s(t.coinType))]),e("span",{staticClass:"fr nominscreen"},[t._v(t._s(t.$t("message.GameTips1")))])]),e("div",{staticClass:"table-record nominscreen"},[e("div",{staticClass:"t-head"},[e("span",[t._v(t._s(t.$t("message.GamePlay")))]),e("span",{staticClass:"tl"},[t._v(t._s(t.$t("message.GameTime")))]),e("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameBetNum")))]),e("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameForecast")))]),e("span",{staticClass:"nominscreen"},[t._v(t._s(t.$t("message.GameLucky")))]),e("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))]),e("span",{staticClass:"nominscreen"},[t._v("AB")])]),e("div",{staticClass:"t-body"},t._l(t.recordsList,function(A){return e("ul",{staticClass:"list-content",class:{lose:"LOSE"==A.winFlag,win:"WIN"==A.winFlag,lucky:A.odds>=t.rule.luckyManOdds,rich:A.coinAmount>=t.rule.gangsterAmount}},[e("li",{staticClass:"user"},[e("span",[t._v(t._s(A.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]),e("li",{staticClass:"tl"},[e("span",[t._v(t._s(t.$fmtDate(A.createTime,"time")))])]),e("li",[e("span",[t._v(t._s(A.coinAmount))])]),e("li",[e("span",[t._v(t._s(A.guess))])]),e("li",[e("span",[t._v(t._s(A.luckyNum))])]),e("li",{staticClass:"golden tr"},[A.rewards>0?e("span",[t._v(t._s(Math.floor(1e4*A.rewards)/1e4))]):t._e()]),e("li",[e("span",[t._v(t._s(Math.floor(A.abNum)))])])])}))]),e("div",{staticClass:"table-record minscreen"},[e("div",{staticClass:"t-head"},["ME"!=t.boardType?e("span",[t._v(t._s(t.$t("message.GamePlay")))]):e("span",[t._v(t._s(t.$t("message.GameTime")))]),e("span",[t._v(t._s(t.$t("message.GameForecast")))]),e("span",[t._v(t._s(t.$t("message.GameLucky")))]),e("span",{staticClass:"tr"},[t._v(t._s(t.$t("message.GameReward")))])]),e("div",{staticClass:"t-body"},t._l(t.recordsList,function(A){return e("ul",{staticClass:"list-content",class:{lose:"LOSE"==A.winFlag,win:"WIN"==A.winFlag,lucky:A.odds>=t.rule.luckyManOdds,rich:A.coinAmount>=t.rule.gangsterAmount}},["ME"!=t.boardType?e("li",{staticClass:"user"},[e("span",[t._v(t._s(A.coinAddress.replace(/(.{4}).*(.{4})/,"$1....$2")))])]):e("li",[e("span",[t._v(t._s(t.$fmtDate(A.createTime,"time")))])]),e("li",[e("span",[t._v(t._s(A.guess))])]),e("li",[e("span",[t._v(t._s(A.luckyNum))])]),e("li",{staticClass:"golden tr"},[A.rewards>0?e("span",[t._v(t._s(Math.floor(1e4*A.rewards)/1e4))]):t._e()])])}))])])},B=[],I={data:function(){return{unfold:-1,recordsList:[],boardType:"RECENT",rule:{},timer:null,diceBasis:{}}},created:function(){var t=this;this.getRule(),this.getData(this.boardType),this.timer=window.setInterval(function(){t.getDataPoll()},3e3)},watch:{currentAddr:function(){this.getData(this.boardType)},coinType:function(){this.getRule()}},computed:Object(r["a"])({},Object(l["c"])({currentAddr:function(t){return t.user.currentAddr},coinType:function(t){return t.user.coinType}})),methods:Object(r["a"])({getData:function(t){var A=this;this.boardType=t;var e=null;this.currentAddr.assets&&(e=this.currentAddr.assets[this.coinType].coinAddress),e||"ME"!=this.boardType||(this.boardType="RECENT"),this.$http.get("/app/dice/board",{params:{boardType:this.boardType,coinAddress:e,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(t){200==t.code&&(A.recordsList=t.result.records.list,A.diceBasis=t.result.diceBasis)})},getRule:function(){var t=this;this.$http.get("/app/dice/rule",{params:{coinAddress:this.currentAddr.coinAddress||"",coinType:this.coinType}}).then(function(A){200==A.code&&(t.rule=A.result)})},getDataPoll:function(){var t=this,A=null;this.currentAddr.assets&&(A=this.currentAddr.assets[this.coinType].coinAddress),A||"ME"!=this.boardType?Object(u["a"])({type:"get",url:"/app/dice/board",data:{boardType:this.boardType,coinAddress:A,coinType:this.coinType,page:1,pageSize:"ME"==this.boardType?1e4:30}}).then(function(A){200==A.code&&(t.recordsList=A.result.records.list,t.diceBasis=A.result.diceBasis,t.$emit("setDiceStatistics",A.result.diceStatistics))}):this.boardType="RECENT"}},Object(l["b"])({alert:"alert"})),destroyed:function(){clearInterval(this.timer)}},k=I,R=(e("85b8"),Object(f["a"])(k,_,B,!1,null,null,null));R.options.__file="record.vue";var E=R.exports,x=e("348c"),S=e("1720"),G={data:function(){return{disabled:!1,diceStatistics:{earned:"",guessCount:"",newcomers:[]}}},methods:{setDiceStatistics:function(t){this.diceStatistics=t||{earned:"",guessCount:"",newcomers:[]}}},computed:{betInfo:function(){return this.$store.state.roller.betInfo}},components:{HeaderBar:a["a"],FooterBar:x["a"],Bet:g,Preview:w,Record:E,AEFcountDownBtn:S["a"]}},N=G,L=(e("0da4"),Object(f["a"])(N,s,i,!1,null,null,null));L.options.__file="Roller.vue";A["default"]=L.exports},"81c6":function(t,A,e){},"85b8":function(t,A,e){"use strict";var s=e("44ac"),i=e.n(s);i.a},9256:function(t,A,e){},"9f5d":function(t,A,e){"use strict";var s=e("9256"),i=e.n(s);i.a},a522:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAuBAMAAACytabNAAAAKlBMVEVHcEz/yiX/xCX/xCX/xiX/xyf/xSX/xCX/xCX/xCT/xCX/xCT/xSb/xCWlap4vAAAADXRSTlMAB+mKPhZtusqoWNknhb3eUgAAAK9JREFUKM9jYACBu1DAgACjQrQXmnsXDdxkCEIXUmVgQRdyYGCwRRW5DDRMGlVoI1CIBUMfms7LYGdwIAs1goV4kIUOQFybixC5BvUOO0KoACrEqgsTuRQA8/VamNAteEBwwoQmwIVgOhH6GBh8IUJXkIKQGSJkgCTEuBckclsASQiiE1kfVKcBihBD7927NwRQhc7evXsHVYSB7e7dBDQhhtrr6CIMQaoYQlwLYCwAsthTiOSdX9wAAAAASUVORK5CYII="},e66f:function(t,A){t.exports="data:audio/mpeg;base64,SUQzBAAAAAAAF1RTU0UAAAANAAADTGF2ZjUzLjI0LjAA//sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAAcAAAACAAAMPQCqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//////////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVMQU1FMy45OC40VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ=="},f282:function(t,A,e){t.exports=e.p+"media/a.dca8292c.wav"},fcaa:function(t,A){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcExUUG1TUG1VUG1UUG1VUW5TUG1TUG1TUG1UUG0VEyRKRmEuLEJuiZEBAAAACXRSTlMA55omwhU7cGDenXZJAAACPUlEQVRYw7WYvU4CQRDHTxGh9CNG6SDGGDu1MXYWNHRqIaGjsbBDDYUdPsIJYkZ4AY97AdQXQHgoz0T0bmd2ZneM//byy+187OzMBAGhi5vqKsBqdfcycNNRBX60dusA5K4ho819iajXwFCvzROHQGjbm2CZc7Box0YUSzYk7Fh8VQOrerTf7oHRFkUsAqsyJvI1HumdIuQABK2bxHJJQsKmgVyBqL7xE5kwf3PggGStyZdckDDttCVw0kkK2XNDHlL5mPkwtjMd2vhortmYcUA6VwbRr6Yoa8hzpRHMzE92ZkWiiYFsUP7KIjHtsxzYEfSbfeJuGUhM3rRjDokMT3eJ0JvIC2FMHljEPNlXahZ4JDKQVoIsCIhhzAq+wgiZ4Ou8JyCE/SU/JDRjTyAjFP+CL9JCpVhEyqaPZWQlaICf+fCIKquI9IM78AslPKESJiVMEssa+GVyUmXQ4/X2rXfaYQliL+BD0pQkY5ia/0yZwiPwQZgCEHCVfoCjIiFDGlEcjEFevc0fkimWIFIoHaIv1bEEUaSlIvkVV6zhe/cfNeVCUZTE0hej0qcosGIZH6EyrnksPJ+kru7hUzyvikdc0SpoGhK27YnItodtrkZkc8W1cOa5HuRGMbY0ikX33rIjNb3oJz2ytU4j8djaWhdpBBGpBj7js9lcU25M0AwjOf+RRzFYOY1v0PzrkKgZRRUDr2asVgzvmhWBZhGhWHdoliqa1Y1mQRQEdWRP2BaXXZUssdb8j5WavLj7BE7VXfgQHlC7AAAAAElFTkSuQmCC"}}]);